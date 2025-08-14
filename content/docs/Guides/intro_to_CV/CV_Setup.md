---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT3E77SG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDKgYsqmASf4d7G0cR27AT49laJvONUTzp%2BWh0%2FwArhnAIgCInYuCjQT8lVzdyRd1880arJdhsxd8Zt6CrJge%2Ba3vUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA3IpBt8WZWK2Ua8eircAzj%2B4AM1cZvJeSo9m5ytZElRIa05RjvFktKHt0OvUi%2F9NwPJsQ1mFxXfQu5WvFb5InmtSGUhKr95zsVobl1KA2x24xLgNUEHxIcv3m0V5TfLEEx9NZvlhgjSzL5008iKopcsFgZWvr4EDKh4uRqo5xkx5LJAwDJ6VY7wMVCelzuC0bbC5fWrg5FyV0CAkfpgnaOdK4oOhomIF%2FecyThopIHM5XUzfPxh49u5HlWncAXvHEixG5XANnwUlJJk1nF%2Bzw9dSaORZzprjlLN4PcSfsej5qyNYhRSDdF2iNFq4I4%2FwTt6oyfGUW%2BYfnJbtguiRqztVvjJ9S5ppiFZmz4rl%2BPMCzx81MtAuYfN9jH7w0jQuBNUeakfmFVLSKoMOg96n6nbTtkULryIJv862yeTZmZ4RkoHwB%2Fem07pU3S1MKy2Qc0iidsc2nCOI3yxCV22QMe2FHwnLJ9Ey6hYgdKKhPfW5yQAdO4qr6BgtcXegQETo81BJxTt4BtoskM%2BIHlqrpdqv%2FGjwvaksrjoJm3FEtwP5XcnwIO6W95CNqNhmXpyPfUaN5Kw7%2FXnScpwQM7jRLnUKPKnoYZ2pOCIVIViO8VVu0itKst4eM2A3FEObCSSzv3NvGt%2BuwIfFd59MJDp%2BMQGOqUBGxZkUx%2FnvQ%2FTYUrc6K1TNXW9I%2FMR%2F%2Fdqqa6xLfivhInBA9MhuH5SmS5KrbJHhVcOhiY10pZLY%2Fikewgt5cl7XvkSEYYH8tGM85cTah9tc4fcBJ7mBEA8jpXAuqyn6yoY7eP%2BCx%2BvowH5Y1pWvbDR4lIVQt%2FTAYXKTkRNAKyX5mh4pa0JOGdbmXPfKZDcEwuVmMEYWUz1pfmgbIptYMvL1HcVCgO7&X-Amz-Signature=86c5a504508ec7d895824b46f142900860eb19ef661ccc40d48ccd2073e0c56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBLIB6UZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIC4hUEIf8jSMq9GnGRQtMtcxqNko4I09npMaFKfhfS7wAiBzEdmQQ5y9ubFUFFYnTcAnExqXufJ6Lq%2FW7jtCkcW4YSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM%2FWUmlZk%2FTlP4MNEXKtwDZZ1487Wlgr7KZqMl0EOFnNJqGMrUDrKFwEHg3rsLXq%2B2ACJND%2BrKczYe8qC3xapNg0Vss6ML5PC8BOmUU6c4otCLxxBmreAe5zw5HE6i0t4Ore4EEbklhlk4i7NwcpOrxPh1jDPCJly92gxYmTJFg95HILByxlTyidgfTiia7%2FMHRTQ4L2gIhkrvSrRg7NhFfaqSi7NgPszv0Jg106bZjJmfD4fk8pji3GJGdP6Wu%2F%2FqvQ08MRr2v1nzlNcNOJSTbk9odoGm3qHvvKqO2%2F%2FN5ZudGbhH0AViybQFz9mfmqvWPAd9PLrF0VxZZoE5v1WWz9oy3AktFjkVS89xXW%2FyxEC0aKFVitiNgH%2FSxc7fx8w76hk4TkYQG0VlcK37a8McpM4UKhcOAxivOSO2qk21h9iThA5rS9Rb6cbrCHmg9%2BYIp7patU4Bdx1PBxwuY53WVXxR%2FsqNQI%2Fu8nc9fPbC0L%2B%2BfW85YD2c7ErnkcKDFWCvhPOSvTnvlbQrAD3qUyra4wz9IXMz9%2F0TWeACeSJWkx5GFYq27a%2BvmsmRlqG%2BsMfgwB1F1HS8Qh7rjEcEQYB%2FCT6RtNtSqPiXOmIlxWgqguREClsio%2BFAwS0F3yLMgr7ZEOxKSPPDaLb077gw6uj4xAY6pgH8GICCW58H%2FX5Cd4bX6ifFRBt1kfE9xyTwjTxJWA6n6FElqV%2FS8uEvtd5rR9T3szL801FgDDsLXl5MZAhXjIt5odZ0Wal%2BSx1rxPBiH%2BtvG2DEeouIi5O9klp6fft2ddyC9I2mx97zZOl8ZcD6EpouIFcvKk2y04gkKHJpqvxGmcYbJD8xQTzTGmN6%2BsgF6q7ZOIOEYcXTLKox25ylcwL75%2F6HWLoN&X-Amz-Signature=0cd89c158de86ef05e24444b7384dbdb346166ab93c3d92292b17aa16ba82522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
