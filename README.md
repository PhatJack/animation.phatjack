# 🎨 Animation.phatjack

A comprehensive Tailwind CSS animation gallery showcasing 50+ ready-to-use animations with live previews, code snippets, and easy integration. Built with Next.js 15, Framer Motion, and modern web technologies.

![Animation Gallery](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-black?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- **🎭 50+ Curated Animations**: Comprehensive collection including fade, slide, scale, rotate, flip, zoom, bounce, and more
- **🔍 Live Previews**: Interactive animation demonstrations with hover effects
- **📋 Copy-Paste Ready**: CSS code snippets for each animation with proper Tailwind CSS integration
- **📱 Responsive Design**: Optimized for all screen sizes and devices
- **⚡ Modern Tech Stack**: Built with Next.js 15, Tailwind CSS 4, Framer Motion, and TypeScript
- **🎨 Beautiful UI**: Clean, modern interface with smooth animations and transitions
- **🚀 Performance Optimized**: Uses Turbopack for fast development and optimized builds

## 🎯 What's Included

### Core Animation Categories
- **Entrance Animations**: Fade in, slide in, scale in, bounce in, rotate in
- **Exit Animations**: Fade out, slide out, scale out, zoom out
- **Attention Seekers**: Pulse, heartbeat, shake, wobble, rubber band
- **Advanced Effects**: Flip, hinge, light speed, roll, jack in the box
- **Directional Animations**: Slide in/out from all directions, rotate from corners

## 📖 How to Use

### Browsing Animations
1. **Explore the Gallery**: View all available animations in a responsive grid layout
2. **Preview Animations**: Hover over animation cards to see them in action
3. **View Details**: Click on any animation to see detailed information and code

### Integrating Animations
1. **Copy CSS Code**: Each animation includes the complete CSS code needed
2. **Add to Your Project**: Include the CSS in your global styles or component
3. **Apply Classes**: Use the provided Tailwind CSS classes in your HTML/JSX

### Example Usage
```jsx
// Add the CSS to your global styles
@theme inline {
  --animate-fade-in: fadeIn var(--duration, 500ms) ease-in both;
  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
}

// Use in your component
<div className="animate-fade-in">
  This will fade in smoothly
</div>
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute
- 🎨 **Add New Animations**: Create new animation effects
- 🐛 **Report Bugs**: Help identify and fix issues
- 📚 **Improve Documentation**: Enhance guides and examples
- 🎯 **Feature Requests**: Suggest new functionality
- 🔧 **Code Improvements**: Optimize performance and code quality

### Contribution Process
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-animation`
3. **Make your changes**: Add animations, fix bugs, or improve features
4. **Test thoroughly**: Ensure animations work across different browsers and devices
5. **Commit your changes**: `git commit -m 'Add amazing new animation'`
6. **Push to your fork**: `git push origin feature/amazing-animation`
7. **Open a Pull Request**: Provide clear description of your changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Made with ❤️ by [PhatJack](https://github.com/PhatJack)**

If you find this project helpful, please consider giving it a ⭐ star on GitHub!
