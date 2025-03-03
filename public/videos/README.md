# 视频文件说明

## 背景视频

请将您的网球背景视频放在此目录中，并命名为 `tennis-background.mp4`。

为了获得最佳性能和用户体验，请遵循以下建议：

1. **文件格式**：主要使用 MP4 格式（H.264 编码），可选提供 WebM 格式以提高兼容性
2. **分辨率**：建议使用 1920x1080 (Full HD) 或 1280x720 (HD)
3. **文件大小**：尽量控制在 5MB 以内，以确保快速加载
4. **时长**：建议 10-30 秒的循环视频
5. **内容**：选择与网球相关的高质量视频，动作流畅，色彩鲜明

## 演示视频

如果您想使用本地视频演示功能，请将演示视频放在此目录中，并命名为 `tennis-demo.mp4`。

演示视频建议：
1. **内容**：展示网球动作分析、应用界面演示或使用教程
2. **时长**：建议 1-3 分钟，简明扼要地展示核心功能
3. **分辨率**：建议使用 1920x1080 (Full HD)
4. **文件大小**：尽量控制在 20MB 以内

## 视频来源选项

HowItWorks 组件支持三种视频来源：
1. **哔哩哔哩**：通过 BV 号引用 B 站视频
2. **YouTube**：通过视频 ID 引用 YouTube 视频
3. **本地视频**：使用存放在 public/videos 目录下的 MP4 文件

要修改默认视频源，请编辑 `src/components/HowItWorks.tsx` 文件中的 `videos` 对象：

```javascript
const videos: VideoProps = {
  bilibili: 'BV1GJ411x7h7', // 修改为您的 B 站视频 BV 号
  youtube: 'dQw4w9WgXcQ', // 修改为您的 YouTube 视频 ID
  mp4: '/videos/tennis-demo.mp4' // 本地视频路径
};
```

## 优化建议

- 使用 [HandBrake](https://handbrake.fr/) 或 [FFmpeg](https://ffmpeg.org/) 等工具压缩视频
- 考虑添加渐变效果使循环更加平滑
- 确保视频内容不会分散用户对主要内容的注意力
- 如果视频较大，考虑降低分辨率或使用更高的压缩率

## 替代方案

如果您没有合适的视频，可以考虑：

1. 使用免费的视频素材网站如 [Pexels](https://www.pexels.com/) 或 [Pixabay](https://pixabay.com/)
2. 使用静态图片作为背景
3. 使用渐变色背景（已在代码中提供作为备选）

## 文件路径

确保视频文件位于：
```
public/videos/tennis-background.mp4 (背景视频)
public/videos/tennis-demo.mp4 (演示视频)
```

Hero 组件和 HowItWorks 组件已配置为自动加载这些路径的视频文件。 