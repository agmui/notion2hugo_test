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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFFZBSA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTJLBycESfnCTtK0XEB6Y5P9j3U32FIXddZnM89o5slwIhAMEgakyaM9MsFRgpDj10U5e2GO%2FNhJ5iOpQ4MBduTxmeKv8DCFIQABoMNjM3NDIzMTgzODA1IgxnMde03MhmCS%2FeRl8q3APAp8SWjUej7yr8g48gQnBC8z%2FOxUBRRvfKiQ%2BSNWMRXepblrdR%2F1B9PyLc%2B2Y7N5QSjWttn8yQW2A9eHzKfBhEo2BMjS7FmlzAtKSvmtuXlBcmw%2FXr85o%2F4ZTZAZ4pjPo%2B08YlHBaTyaMb8jhqvqGnypHYFiK321A7SzyVyOn63HQKXiP31%2B6rTV%2BJqGeaYh0AZ8CR3lGQYQIiQCYs9fCSGnxOtjU0wlpV02ZnjXQvgupNkjsENCHlVoGra2Uq3jZCAe9VMtpqgaJrdP%2F9ogIam0JIO3B7BnWJoe0atAvEnfP6uJqFkj2LOZbZgTKUJHY6tybDWSSY5M5xWFT1kXdb0BHmdSZ9ny1%2BR43HpcgXIZb0Oik08gB72lvoHyAtPgIj%2FURutAYv%2BAubeaff9ZnsHLKTHiAQfEYZ6F%2ByeL1V6td57YipfNy2pzxS3zCLmRsiVYd9DVwQmejouG9uyv7la6JCNV2etziVquWHJLh%2Bodtcv5CqgskbDWzyaZJdool%2Bq5YuDIfXZD4SZQ0zw7J5tnAOcczW%2F%2FbQbk%2B1apeQlb9qGfLR1o8HC2ATH4%2FnEiZNZ2zxDACD65S0tpdGm3ZeH%2FuyZFjLxfm2aBl65GNiINXeKDIm%2Bp8yd0eP0TC7%2FfnEBjqkAbPmxk0khY19zWk%2Fwbi6rb1N98ein6tYUIpIbEGbGX67MkXXbT%2B%2B8YNt45cHVEOWDl6SjCbvdfrKStkVJcrAs%2FG%2BtaHKfPn8mhTnkKCEEaHVui4eFV80PfACRT8jBhIaU%2FlPlgvAgJ%2BeLe4vM2k6mplFvGPuEnV%2BOaxPIpn8ebsiu9vyUcbyxTlm5DreFM0asC9GgafOmkwamOBW5aWJh00aU%2BqJ&X-Amz-Signature=35c9cf1cf1870ce944194a6a232c2410ef983c73c424cbf84c7fb3881121bc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGE4FVA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDs%2BN1SeB6AlM7va9QWufL0zQuXujXh36eNuNdf2eVltgIhALaM0tJF%2FnhMcFo2aFsqPxLSX2rz6y5a4TO%2FVJbs7vh7Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwZKWTaPeKPYDUo%2FxQq3AN7SZoU6iBl88%2FSelejNhHfSK%2FjF2eGme4EqcqKf7pW2CNNiLWUkJF2bnB9cAt%2FALr6ONoCUUYIWf6FRc0krLIv%2FVEyZu3Dnn0d%2BhWRlWS37CyE%2B%2FDINdX4ZTrHgX3e1oyzm3%2Bn3JDYW20p7P%2BoonX2DcEXdEcn%2BI3BY5rRl0pakb8gkERIoTBTu3AXe483cg0XqB34iJP2ZkJidBmYGCY47HkgKcQK1tRod7H68DWmP3ZjKeijX%2BPiHGBYDQ6PwSO68UVCJNX5QnGdx5vkyG%2BH6qRma1SClZcynXRf6k5xZV3fGwnAmKhBwtfipe0ldUQ9cA4q8VX1BLbDoBXEJxN8j6EDXS6DcssKEgzKeDwazClN1efLdrM18LeKZRg3w3Eb7JxwwNTyNUQfzutlMafrnivePAv5vBS81791y624s6v3uuORLSHFoziX%2BRepqeny8u%2FBjv5VUlNYPul1p%2BUBTqqT8IHmLwk89ZnEtpinTJAjO1OrlvXwNefhRdswrsqrZvh1JbB4J9dxr7eMkYdmev024wjwFipcPA4ITfgaTFArjPEKrBdc03rQ6N7Cg0A%2BXA8Ypmh9V8cDzRo0tUuAnsBuOe9lM76QwwU%2FdPGjxTm8ODChfP7%2F1cqJVTDA%2FPnEBjqkAckQEenqOhhhM6QqVSnwj5v9m8Ekzh8sdD%2FShDdut%2BlIPJ0DFJir3cWUnNnBqhx3RXrKEDPM3GURIkSOK9rs1i3oYitR08AOY%2BlKRa%2FV1LUIEvoTJ8LrICUTUtSFyknC7%2BrIOvME3d2ys9w6j6dt%2B5Np6Vcfc3N5NuGWi7obv7wP1zUc0c61tJGGx%2F1qBu2PW7dXlKulO6TDrEhXNCFvR8OF9XM1&X-Amz-Signature=464879bd0d68946e78187481e5bf13dec6ce85b08cee5f5fa72e0ecfaa06f91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
