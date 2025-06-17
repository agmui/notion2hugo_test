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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEZJLMAF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDltbP5Zjv6%2BwBCpPKCMSx%2FSSSBfEterGTUNzluxp%2FUuAiAbiNFlGVZboSTgbFx%2FkJaixUj%2F8XzHcPpnJZ7al4%2BuOCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMfGmMxk1xGnUdF%2FyfKtwDOnm7GYAjPHJJCFduBArifgGVg5xAGPJKCtlapsq5nLWzS0u80LWdhgSTWSyWrQG%2FbXeNI8B8%2FWSZVzYdhlVm9P0M64ZxORyFKy60LxzhGch%2FIZ7ETd1y8jZIzxJlaS4EAl11RaFOK2QAuXlMfU8%2BbyhzxPioRNk4roTC5F1xbvcDoCwoSiTRqgKNt1MtBYNQcwtmfNYXSS%2Fn33ITnMdx3eZ70buq%2BYWdmaRvnMbMHMeJfy0gJEH3BK1Z7mGqLmUTFRpe11qoqOStJy6eoR%2BD7FnUYI7K8bh7LcAZdpHNgONrdJgYW2COO9O4NMwAGZeCSl%2BAOJZbUr4x39Rqe3TbFueuKhx5ZVPQZDWsaNhegh6IoT03WK1HMjTl2FQlp928LNq0NoyIYLJedw59XdLALzrNQIRmRgNS8kDTP1J2iwW6nmKmAdTJoEJGa16y3LBCTKr%2F%2FXmvM2c9CZgDlTrnWPknjEoiIA4pPl%2BAlh5Ahqg%2BW96r5wd5CwGwjneVt9XsXLbjBeQK9TORCyqmwILxe3RwMvmDIzeLDpj1qLKcD%2BlOXw5e1vEKM%2FzwveQnKGFFKEgBds1oYM8KiUBx8bBoTfAIUwTVZYWM%2BOLbFlFxOcHIZWunm%2BE8VOAXUKMw6OvDwgY6pgF883Aq5A3X7fVF5zISfD2oy1TXPEEJOix1DMGd9DeE0FidHWy%2F0RwZQKIBapHSZmVqVaNQTi%2F666gXgi2JqmkagRby3%2FwA6iWJFPgNHE%2FzpQx1SQUFPOiKwbgnILuV67RGi8xNo%2F5Bvk5V3DLYKTXrEuO3ltrAPDfkrHOaywsbAO6inteSW17lcNllEex48LUI10AahBoPdPcM5hy%2B9lyh8ytF1lrX&X-Amz-Signature=c1fab34c2ba47c5184cdae4bdbac28c6b4da484e1d336f1001651ae27b90552b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP645AR6%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJWOJcXpyXb%2BR4ASoyXjVvAOfoOYtOXYFgu1hPgdChRAiEA2pIMIm0DeAZaUDuFpEHJdeKdbHRcL5AMiaHyHG%2F8bvgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDF%2BZux1mPExy4zZjiCrcA9N5MOH2oahWyvyIcgn4hHJweopx8LJb6jjDUA5EWcH4Oe41PACq%2FW3o4ENtmW6rD1CM4wvSqJVSrWd0obetHafg4XdSwGlXkRI2NErXxwRXqgwJ0uBJKEFTglchvnO12kqyYe0t6QIvbj6yE08EfMug87a1sX0cu%2F%2FSoMymMalUXZ909w37p%2Fhb7IOlPqEGwXQaDel5J3B3w7K%2FRdpkoBJqfxgT70aRxLErDCbMJOnM3yk332wPsM7O7t%2FDdONY567M0KRukd%2FOKBCecYpd4mwruuMI3TIidYFJHijjTUcg%2BVaXyeBX9JDjvUAJzJyd%2B%2B5mwnGirKorX1Zh9o4qMPl3d%2BNAIN0iwT7r%2BIDTD1QXIqoENIkW%2BZoTZXK9H6ne81k7fpA1geFhhb5D8H9EoHavvzzOMXDrgOvQfCrdoosvIDDAAO%2FbtfisXf7hmqHq0GRlDgz6L%2FJSvQdC83UnnMPl%2FNh3AtTQ9GUBJRbbyHjRDHt4qt1bik47pA6%2B9mrKvgPTVdbnxY6vbBddhiG8OxIRm33p%2F9D5BA7Ns8k4vI6cpdMTjIntL3UO5%2FqQq81Pw9JL4VUO0H7J4psSFQu5BJ5ILQn2MmV3AD%2BX%2BOC8aER8Cikwgvmm2gIf3uXnMOXrw8IGOqUBMMivnrpzoRnGIVblWa5MTCq6RwGKnhK%2BhEDudJBXj5q7TF9W3dYjxuc19SS4l6pPU8aRhR%2FTSOwlM3E16LyKmKyadCJCBg2Pq5QfgqVr9jpV01SYcFH0EI9WeanRW2Y5kBKzVqzMGxelHNJ162qjfqTZ08qv6OeH6Q%2BmUfEf%2B0PRPQS42L688jdHysjN%2FXVwDl14q1BLZd9IwfBg4UgIYyX2cP0v&X-Amz-Signature=404c70136dc6a5f8e44024dda1f9a72648e7c32ee690bde80b9c5aa340fb89f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
