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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJO7CR5J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB2Z2ke%2FGF3b9oXTDV9soiJGaQwNtED0kOHk7c1E%2FxIQIhAOfBO9e%2BPEybLloua5vv7x7vG6ko38u9GlsPz54BzRpoKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLCdZsupudzR4D7XQq3AMEo8UYGMcUpGitITsOr98Kq4HCPufUBiyNU9IgzTqLICXn6IcPVaDFivaRss8Li8dmnn5hDS3otTh8DHEuPfAJRQ3ZuPzXGclyWsehwgMapAd2JlFUqYj6nSPnIwMuSXApUEdLTzQcIo2FdfvCXsZH8cKy7%2BrTSqteUJAOFmvNCODnSxsP5Gb2g15Q3rvxn2tnI3i7V1X3MeQUsColCT7gFuzRkgtLK17kCRlsoGLTGKTDEPayS4sfhcnqyQ4Jy5sFTQK967R8ne7QikCUIwkGt7FBnlgpgRO%2BAF4FSaShwKIKqijdVH55QM1KvMORXD591HVx314z7SBpkCqH%2FuEY9P32LkoUqLhLZIbdVwhKY2Y2jy1ESfhPs2Woepgm%2BuMT3N0xwGd0bK76vDpAUVsG3pu%2FyHU55wE6QKSPzw%2FviNVAmvGMXsFXoKC1OqXYodi2vhFiOeMB3YsZ%2BJR53fpr52Sr%2BG1HjZC9ltlnNrQxYAtxJTKIJDf4CNuZ3KRWqwM9GZMsdx4yUp4vaZ8bCARoiIDxbSKt29R8wrmpdFLCcJ9qO8uISanQ7P7R7AnkBLBmzUKnDY7wHSdz2xwiaVFDma9irHRNAvWpnMWRilw%2FZ35hFM9IUUWYqNwH5DCul4LFBjqkATAfY5cDFcrBV27tpgqMI44HFxewDle%2B4Cb7TBn7vw3eYyIRbZP3ps47bbcFd6XkNF1vnzrxAo7vU6xvfmWIvXw%2BIlrTyQ51oPhDU199unQ4WNPCKlZMHU1h2bQajYr6pgQgHswYCHnuHaMnmHppehxEpp8FBQl4aHD7YD%2BCbO%2FDXPxTqnLitxYNxGhjU6L40nncURrpJ4P%2BfBvpu%2BZ0iNRJw%2F%2F2&X-Amz-Signature=9cc9b29fd3d67a5adc2beac3ca3af1e6f42a526f4b457dbb4d30d594c8a108fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4FGHFP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGSrBLoEgUf47a%2BouAQ%2B67xQTjl%2BSY%2BwK%2Bs%2Fdq667U3PAiEAkIYqnJuuMcB3LmAOYNiQpt7K6lvK9F9WGuaqTPiLhIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLNrSBZt9qIzUvluUCrcA2zQoiI7H%2ByzxLLf%2FVFbafCZqWW3f4eC6tBWEPO%2B3E07QvPI7tqNqTD6PC2hzutNFN9jyYxtq6WvFzgAj3s9dNyzjFF9Wchv2sSJEHqG9EXaNdobVzKhKl85ebODjltHGHAUbOJNSFMojx2zHDeaXLu802y5LZkA6aNSgZB0CKebHa5wZUC7aLG0lbO2NMWJAi0sQwoaIs479I0w63H9AWkir0eNb66Kt42vLephz5bkvIq8nWd2ALNf9u2ovvkRafy99y3L77F7emqTuypCwLnTjGyVbvM%2FELLCjomkhn3zZNYb6IrqwpiAtcypeH5bCOwdteN7y%2B90O6M5EGex0Z%2BIIyEqnb%2FBaeGx6i01iVxpt3zF3Q0fivBMk04oTQuI7lwr24%2BSnOpjtJYjle6DbvzNVTAj%2BV5Bt8Iv6OSv3UXvSe%2Bv3vrW0mH1Uke106LthXfpLqDxs130OAQDCWlCer0xQbnJNcHRYyJQWuTPaWZZg6IfIWxgI3x0hvdXVJ0yoJm639jj%2BNFQjVyOUSLgt6%2B6dMrp38qkVOnKqmDK9SLHmrPfyLUvTp0RzdYKmoEcKjT2FODxNtd7EzJh%2F%2FS2Oku75nzYpxKY1ImFOjjnPEPV%2F2DHjOeQ7gHU9hJ1MNKdgsUGOqUBhboKcSYccbOux%2Fjuupf2%2FUK%2BIzikj1ADi9n6S1QzA4dBitr7eUUqvcJLjQTTD3yb4L1kvbg%2FVeNOhc5eD5EspyvisrwNi8uGxFjaS9eEUbZceY4bAvGKNrWt%2BFPtkpoc4%2BfQPI1%2BUEO0s3iNYnRnDeLOyKQbYOzCelI%2FEb%2F601KJUr72uuNGJfu%2BCvD2PLfYVo5x%2BZ%2Bah4W5PrWl436ihKvDh9w1&X-Amz-Signature=df4cb0b73e2ad8be39b9ce72c960a432e07af4ccfad98a290993b1e57dc9f1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
