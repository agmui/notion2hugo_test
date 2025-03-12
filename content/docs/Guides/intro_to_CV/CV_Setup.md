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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657S3BYER%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHR34Mjp2yuHI8w4L%2BNllSfF5SZAM0Z5pYIDUJ6fo%2Bl8AiEAt9xi2fmbdkQiB86OqlXX2ULskV88RRf12lJ0huytEV4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeWRD7iuPcsRFLqFyrcA69FEab5jGq4rxodG7l5Tjfslx6Ls1Q%2FEMpQIhxeSS8nLor8taLKj%2BZg7ztgS74SRbdf0KiRyPK9dsnOJ9mtsHovPIXfLODgpXYgpOQWVzENy%2FgdwaQazEJsMVETNDaEij8a6W4gtEWo5DoC%2BxN5oXtNNSd6f8%2FrN%2BrM53y7VNNEKDsWgG18yGfYUy60zzv97tC41AdjJP%2B77TutsIKgb9M7d0OrFbst21vQyEOJ6xioP75RKTUm328GmGAMRwNu33%2F%2B2UfinCWXtK20F95jmlOuTU1v0z0WofV6KGawX9GCCTBU8zHHMywnuPhT8Xn1QGjb4q2t1L2I4181KkNG2vYZFHan5LX%2BT0qphgI8pgcZBZ7el6Tjs7zrsFTCqmea6i0oIQ%2BePt4FV%2FqxaHjd07zUrW9Ljmt1TrMMT0fGj7oJGSzDkn%2BdkPmZ%2FS8OVV2Ok%2Bg6uHjQrffmNjy318gV5zJPpRetFpo7qtH12rCmjTvUlBdxtFPGYqT9Z6K2cWS88Q%2FDHyWG2hxtqtpMqPZprhZa74lMgqnGEOSvr1HtJgABUaye6kW%2Fzfnz5br7KD3LfhAYTq9KHLtBZvPhMoDQjnKl6XGsPGPv%2BJgVStdVXJYXxQSmzLqGpPkbc1rvMNeEyL4GOqUB9ABstSolSe2fMIOqM2NwVsGO1FiDs2a3aG789eoLBUWagxSvF1U5nUSoIr6A8uUPJQh%2BNDzyI72wPHA2R5iNiEsfzwfSt5FQHW9NmitvPGY9mWZoQL6fG5Mh%2FTe43l7lFooPrRebEw1qyDrIQcZ7vCCrc1JusSHQrykJGmHkNS5f%2BYR7rnUars%2FWlkJ0JuEKhkqkjbubVEC9vhFUsdzvFd%2BmZ%2BGp&X-Amz-Signature=e3944207e105820a456f399ae8c9e6f727ce6aad44e1907b05c5d3e8be5d940a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JOWFYKS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCtmm0c3fTNLI3dxEd5ZHQBO%2FLYrrmTtdd2g4jnSXgc8wIgdU1lnjKn2Lvrr5g%2B6gvH9vkdjol8%2Be%2Fx3DbVNMZpGf0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHF%2BlaNiuYvqZPslcCrcAyYJGHbkgMGzqa42GmJr4CvAVAd8lHxa1hvGddIvDK85HzYq%2FxRvUBxulJPjidIuR1cyUbhSXqZDRiJJRYQ2VnPYaSYuywpXH73ggjXawE0ZfE3vSEGmdXhD6ASJWWVv2ThSqd5X5ykavEkemAubHaCMjJtF%2FaY6FeZN%2BrZfyj86m%2BVyP3bjuZzNNHRyt1eOEJ70YOFMWVTGV0S5Z7McpaVD06TmMo2zitXJWFJecwECRIoWVpqc1vmVyq%2B04BzDaR8g87lQsjef%2BzX2ebWP%2BwGaMxioG98EdJeq2G7MynH5VpeV2IYoJ36rwJx%2ByfV1Twdh5jtUdno9EOiDuxGqglfDpudMstjvxxZkm%2FAQsLbtPmmMBy2GLG0fA5Ypr2R5gVMEG0ptXyyn%2F2iZGmJgLymUFyFETE55L8t2Lao6AqpkHr6p3%2BRnp7MruzxuzooJLJ14ICnoCxbxJvQu1FePRXxdFCm2zvlaeTWBOKcwehNb8Y8ZwF5QEQQSqEetqKl%2BiZYzAjEUmVa%2FkGhCuUlhte0unvQle4z4sRnJcZ5yqZy%2F%2F4GWINEaMiMYDsWUgrXcnHRYzBVlP9URZTaJUdEAIycmrDIyZED0eD6OnMibtqc%2FoQd871arsprXR6K4MKqEyL4GOqUBVVzESkTCUxRVej9N0pj8Vi45yFzn6rTWBPfmfmpWpY%2BVc8W2%2FxZNVhJxL%2B6dcLT6utGfjExP6pKPjOhEIMpbNT9694X1E%2Fnwfp39349tDhyT2IrbQo9aKK0ltVsYJ7pWHvBwh4%2BWsSBGRniVRu6UkBTF4idq9VOe%2BhE5dw%2Fl%2BU3vEcugfsEn5e3GcRfgolPLdfqAAfT3UPZ4UkSPPWecRAN7UHcl&X-Amz-Signature=a8ed67313e9e971d9213c8de334d6306446092dcb1bdf4182edee6e86c5b84b2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
