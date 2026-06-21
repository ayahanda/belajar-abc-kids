# Lightweight static web server using native .NET HttpListener in PowerShell for belajar-abc-kids
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8000/")
try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Belajar ABC Kids Server started at http://localhost:8000/" -ForegroundColor Green
    Write-Host "  Press Ctrl+C in this terminal window to stop the server." -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Green
} catch {
    Write-Error "Failed to start listener: $_"
    exit 1
}

# Keep serving requests while listening
while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Parse URL Path
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }
        
        # Clean relative paths to prevent path traversal
        $urlPath = $urlPath.Replace("../", "").Replace("..\", "")
        $filePath = Join-Path (Get-Location) $urlPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Map Content-Type based on extension
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            
            if ($ext -eq ".html") { $contentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $contentType = "text/css; charset=utf-8" }
            elseif ($ext -eq ".js") { $contentType = "application/javascript; charset=utf-8" }
            elseif ($ext -eq ".png") { $contentType = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
            elseif ($ext -eq ".webp") { $contentType = "image/webp" }
            elseif ($ext -eq ".svg") { $contentType = "image/svg+xml" }
            elseif ($ext -eq ".json") { $contentType = "application/json; charset=utf-8" }
            elseif ($ext -eq ".webmanifest") { $contentType = "application/manifest+json; charset=utf-8" }
            elseif ($ext -eq ".woff2") { $contentType = "font/woff2" }
            
            # Write response headers & payload
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            # File Not Found
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("File Not Found: $urlPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.Close()
    } catch {
        # Log error but keep listening
        Write-Host "Request error: $_"
    }
}
$listener.Close()
