# APK 下载文件说明

## 文件要求

请将您的 Android APK 文件放在此目录中，并命名为 `active-vision.apk`。

为了获得最佳用户体验，请确保：

1. APK 文件已经过签名和优化
2. 文件大小尽量控制在合理范围内
3. 包含最新版本的应用功能

## 文件路径

确保 APK 文件位于：
```
public/downloads/active-vision.apk
```

Hero 组件已配置为链接到此路径的 APK 文件。

## GitHub 链接选项

如果您希望直接链接到 GitHub 上的 APK 文件，请在 `src/components/Hero.tsx` 文件中修改下载按钮的链接地址：

```javascript
<Link 
  href="https://github.com/yourusername/your-repo/releases/download/v1.0.0/active-vision.apk" 
  className="btn btn-primary flex items-center"
>
  <svg className="w-5 h-5 mr-2" ... />
  Download for Android
</Link>
```

请将上述链接替换为您实际的 GitHub 发布链接。 