---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
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

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427DYOP4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEbSBK%2BepwcyQVotF59frV76gcKgTCJKy1oCYo4GNbUcAiEA%2BqyHSjK%2BN60dHnZEY3H%2Bfy%2FtGAVOLlkIV7cY1oJRpFEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxzLRlsGSlxuZZzzyrcA6iPXzb2nitJou5jlZDEP0Y4aWgkxe9tQlV829BlHrdeLE6zCrCkiLJwc0%2BDBwStp8jfkcxss8IGo35ypwnEGrdF5fvu24uo%2F4x2I8a%2FkqFNAorQcTmy%2BCSrhVyYUE%2BCnOSfMIw3PDQ71yNdh7blbVLN0A0BcOTsUmcPEuX9EtUkbGSxvVOxOAfypTdut%2Bj6fcC4bPPPNptIH1xnmWLSeQI9LeED%2FS%2BqdcJ3qZlOcbB3GHINozPqJ%2FpYhvZ6pzwkg%2BG01LgI%2BDrzyEMZClwHsBzR1XuC30L2lEl6GrriaFVCQ49ejgD6yh%2B7xAKHMquz78pr9GyWVMMTZVNjq6nXbqQrLBOHmPCZ9cnhId9se3DDZ%2Fd%2FbSkJMiTqArJeojC4FwQJD0QAgOxX1LZQbWFgWJFZCfYB%2Fu78Ekbu499h4hmczmelEU1NmnTWGoLibKcjF61cZuq9u7YfCtW2u3VQ5KqAQ%2BNn0GZ365o%2B14OkF4qBE4bXncUOaYWKhK%2FqSf1yu25YL%2FQhBo9NCLr6qF0ghSEjQmY5kIfincTFm2bWzEnTxzCwzhgMwTJblgcDJbAK4hbw%2FvbKdzVitWVcOelQPcAHbUdoc%2F3qj%2BNA%2B3rP391jZlEJ51h%2B31OFyBFCMKHA%2B70GOqUBC1Db02IE3wdd0dhRFzaw8jzIYHWM%2BuYoazhnY4mgcEBNMNOWyZyaFzKPBN3TfJe9GRDLAVb2RUsvvAlHsjitozKDIRG%2B07P%2Bme51OtaLNU1tcvuqFW1dzZ8kUpqbbzxt5T2hP7IIpEFq0FbGxnT0ZlQbXTTtABysE2IIsOrhX1Xe72JkgfoKF5Nxi0OwbdgcRVlKJBnXj4M8zA44Ybinz99VNmGH&X-Amz-Signature=e3745c6023e6f8f8add2c7666c166b4480cbbe35048dfeb56da1381e945f5d02&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466432BOI5G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDqJzyGS5JILGrOVwzTaHRDU8zgP8tQquffg2%2BjV3GWowIhAIH%2FnRHubPsyedRlBwc%2FuSEQjtQKJ%2BZ7EEhq1%2B%2BnJYPPKv8DCFsQABoMNjM3NDIzMTgzODA1IgzvdP5KA5vzTIqW2sMq3AO3SYFLqGdKoOuegau2H1y3jVhY63Eimho3x62lrIPTwS9vuQWHEwXOEFNMT9oRImvLRjP%2FzVF8OB1HiuMeFh888%2B2kwImt0r3zHBbg%2FVKBVr2jhY0nZ5j5O%2FLeflxl7ZUaTDlTi84oHwS1cTFs67ISuDC1kB7CGBHgFE8iOlBhtdtDSfqSfUERbVGJMrgH8miPtONMOayDkDvKrMf9kIsDKyyNZ80oJRBpfTXKcuxtRZ4A6UAS2%2BzJSVNy9%2B35d8uLfyI4im4%2Be8APEsyF8aI29xMceNnrZ28y3NkvIeqyu9zt%2B7CG4xGlS%2BZ1KN%2BmOTJ8%2FevYBKilp%2Bzn3ss13Pqq3EmKDupjWmj3HmkCkCxqwUNNxnaCvYLGfOzcUgETzoM6wBZRlpyk4FDTlj8AmMbIKRA06aj%2BFLQ1o8wBYvXmu7nHfBqF2ZkkxQ0FyA%2FCfy9KpvGP5S91Vf01d1eEgl58nP13%2B7MVAlFGlK8QtG2AYONxWWA%2F26Fg%2FKHRJQfU%2BX1sonF6TTmHD4kochdv3KI1LOEAj86h6suCeX6mzGLMZJwUEnTToyNFDBhgSGFcc78yviCF84PwPfGBLHGJpkDNdsWxNaT8khJSz0EfwtJQ2oKKFOLh2yQoq2PXCTC9v%2Fu9BjqkAX8qL3sIQaeJ9%2By0whbkDCQ44LhplpLTcnp9iLx7qozMpFoqTGoIyC%2FvFuyKvaYY7gWZChqiJEO2qG1a4LC1IQnM55mL8EY6csXKUGmQpSTkOuNbr0JYidl0mk1kgOZRMgaUfviAf2kPHUQEPpyHxyHvFn9tAP2xEvk9TFvG5Qr1RrnPQ%2Fr0A5OEdQ%2BQZ4eGiKz4l%2FMiuoOj6OkCPjTfIOlFzpiF&X-Amz-Signature=58de986bf558076a59e4067fc0c2286c2ff8c08408524b79e7dfeaaaf912ac4d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
