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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7JJ2WH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIGUCo7u4yNGxe80g0X%2BIKkB8Sy%2FmXI4sqwoSuvmI2yyEAiEAiPl2AMJWQDSFJLL3eGR%2BgaLZw8%2F7dw26LW1ThrOny%2B0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMvzCfi1sA2qWmnfXSrcA74vbvumrXfTsVBIibh8BMN58ywmRgDIOZTaKFzecEszU3A0g%2FS8hU7DzO0TEUefMrabRDd2hFZQv4Jmxsm0bik4PpvVDUTGf9EyhkKF9J%2FfF8rvV5lHziJmaKVIebhBikbMKx91cIaOFcyxhr7NcdGfbgDn%2Fby%2FE52Ph94rP%2FF97XR2e3bJWMlMq5OPhSiDigOW2mHEQsVZaYL1PwNrkYCmJX0XvfYt231S5Zpwe5krbwKDFaLKXGZAeWHyRJY6ID%2FtIv3NL8hzLz2EGF8LrI1%2BAwRiGNZEuaUgQyEu73OfpHD%2BJpGpGsneRnMkcghMJw4pEBOn9I%2BVx85A5o5IpvywYD8vt4MaOKYDuJ%2FFfBvztPg86Z1DKcgbIP3DcnokiUwI9x2TpKNB2FX8hSJ97rZk5PIRej5wahYeGgjUwwrVuLbEbBHP6zBiuoY1SIJAJtx4rpgrnHDWm%2FBbot4WP5ARlIWQXZi3lbb5T3%2BtkbPNV%2B7M1Qqu8DTMHEx2Xm2wBFMtMkm09eKQhG%2FX3DWRcAV5gRG314AoXfjcIhkWClo%2FEdCc5I7Na520unQaMFCbwjBDrvAWEUL%2FrSr%2FMftjSfGdwWYJXhf%2Ba8uFa%2BxP2dwL35xr0BzcZJ8kE%2BPsMMmYysEGOqUBY2Zq6IKw2xoxwDpbn00BuzTFo7O5X4uDLeolXGrTKgH9Feg%2BzmjCaV2b9%2FLsoCSFXrorrN2w27u5TnR5y7O%2B8nTEjAEkU%2BjsMtlxxfsR%2BPVwltbMMQoxYv8CL4SWbMAG5DyJ0zt2WhdmMkjqAI2mSaU%2ByFwXjGBUEoHhHYFMLcLok%2B05vtAYDh1y4yshIetZCIlkkcQquRvbe8FpqFp9YAt9VyPi&X-Amz-Signature=a5aa66e91fb96e63e4fd41f37f2778b23018a317fbce585bc06938f3314222a0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXH5JZJT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDHBJlFwYlE05NwX7RQOsiULR1Gk2LXUM%2BrwtZUmmeNZgIhAI6z0P2T0xO%2FO7SYNQX6E8yrm9Xu4FOlHYJcVthQV4sMKv8DCCQQABoMNjM3NDIzMTgzODA1Igz3S3bnosWsi9nJij0q3AMlIOW9BuSNbwRu%2Fy8AqFz7NF0CGuvo6xlGJfY24wIdRtg%2FrYT7d5yjdjQwvHIW8YRGPrP6RCmFazxWFoOPTQN8hz%2B7mjqwU3IeU2ijpUI%2F2nTAfLevZcIl1qVoZhqHG68ZdV2jeW%2BwVDVFOakQdI%2By9n3mgXs0wn7SO4TCC%2BWjPLVCuPvTKUQwmNM1lDZxSR8vV1xob0rvST9k%2BMESJUqkaaLWC46%2Bgu4lGhcyOLhhQUQ3EJ8Qy87nfs%2Fusy5s%2F8eZEn9yWtjjiAOke5XxZSoPSkU5qSDnMns9Y0oV%2BoSGrZDxKuRQrc2ai%2FhyrpgtJ1DnrkRE0701J4FF5Mv8Aw1dvmHuX5yHzK5mPags3DNBwoHFjtXdyx0EeaSsvoo94pZzkhqPn7hcO4jUdiDd7L20Ux9NEbVuxwCrV2X122qWo6o8Xpe%2BAX%2BqwXFDBcmDS%2BYFiRr%2BlUJ8c%2BRfhpRLwzErKZv96xLOsHOZqPpxUikAlO0ScMHURMsX1cGYLlisk%2FOq4eU2vAn8rNB86RPMWiaN1qdZxxTZb0ttOJL9dxVxbWmuhG5CZF2wFhadPxVzNZrrDpUfkUzm%2BhqUfOtLKvoaldD4qrSF1HTYRsUv9An7%2B0lpkGAJCAwQ2kzDhzCTmMrBBjqkAXE%2F%2BoqtZFJv8JoHgYXCYaSHug8WfjuN4hZwBrv7dM3HAbSHT3pigYJNFPxC76N2gGCae4sUHzKhYUvl3QuHWYSZU5AIiNQoR2WM8026h3tc02Z5hldctqQABjCgwzldhyOAIuCQtdP8ROKDFLsRlo8xCh%2B3sZPbPfGUqD4D4ixJRS7lAdRBCqxm6K%2FZ%2BvaxKZ7BdJm0UsLWSd%2FdYAxHkXC7PFfj&X-Amz-Signature=02e092ece99d9e3f3f3fa3ff223881b76a9133faf6420a8a13c13419ee0c9af8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
