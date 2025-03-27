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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U35T7T72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD06XWfDYB1ECbWpF5JJk%2BBv5o6%2Fvg3deJIe6Yt38d3DwIhANgk6gxfgHHGgxV4%2Fffb9YB0JFjMpgX1kzkZCvgRU0R8Kv8DCE0QABoMNjM3NDIzMTgzODA1Igx7oNu%2BPBnIBJEuDzsq3AP%2FvNH%2BpQSi8jcp%2FytzLSSXBHANCsnthIGMzYs4jaP7dd%2BEpGyZgwd6L1PxuBH49s1JKquxMs6sontzbOdDZvRCtAmAzS4P5BWSh9i%2BH4IAnJzs3gxIdb7DJ3TO5j4ff3R%2BMiL8mYbKM%2FMxgzJhCPrJYx58sXnYylMcj0B2We6tnuUiLAKtyELwnww6W8dOHOBgUvWt4JnokRSZa2s0vmzkD1Hk3QyCmQjuQ%2FC%2FekyKaLFMxV%2ByfT7cUnpwxPhEw5R8fuYqGyD%2FFAWaumkDcdwAQzHuc4l7%2BW%2F3Bi%2Brrh4flyjzsSPORfvcr7tWUu2%2FVV8qOGruQXGDK7QtInWXqTI733ZoJawQgw0u5bV%2FJpuzD2dYz33hcLFlUPYkTPYO8YuAxI84GVqTPD8njrT5URchqC7yJP6odrTF3LIKo6iDatFdXEwvw%2BIQA8gsirIaVICFuFA%2Fa428O%2FDLg6Yjif7SqoluidDZ5gimdx8AkmGuNYhAvWjmOTOwJS%2BUJrh%2BqT1%2B2JW2eIDY0T5oY9rt6I2q9miVW%2Bl%2Bh5tYPh3gRUh712QMNrsJCpudNa8WVLVF567clO0SiA2a3GdBgXv%2FL8WnPBZJulfqYx9zNKVvBOisasJ4o2yy4xt8v5ofIzCk3Za%2FBjqkAZgKymAtY%2B0D0k%2BoM4SWT0zFWZKPYHVTFsExHbPZABwsUn9LPeEkl%2FoNGAGnEgi2F6K4c6EUloGesSi3ltvFmPRB50qMKyX8kp9YdHcIqedHRYXVM4wTlZunoM%2BKwnF%2F7Lns2X%2B9jfDaZVYOZUS6N5b7vAn3Hc1aLQ5EOAZnYaUk1CJPD3EMSZ0BbDn1sqnu2UubNWO2fnrq4QJ%2FIPOwy0DlhO3%2B&X-Amz-Signature=a3221efd4a9fbf6ce3d534167f0b45791a4ecf7f34ab3659a60b39a8bd76b69e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ATLIDE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDia3Wabjl%2Bf8Bq5lIEPY%2Bn2j%2FynL3KD%2BWX9hicgCqgRwIgbwWioF6q9HDvDd5fbYaZztq4WaGQqR3iTOHq6i9mYV0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKBAh1%2BAwV37TgB8OyrcA%2FwQUQ8IcJbOyiy8Vr886yRnK2yl4VoN8sFyaQpFKOK7%2BpR4w5TLJIQvZt%2Fnq2MNTescUBL%2BUFNBd96DiLUcM91C7sY3bySmVE9F0xOIPQcyoy2BXJ9yeqTbXQIY0vvZEh%2Bxdu2w%2Bm2bXDufLTkRVCKOk0rkEk2cBCuyMCOo4Ba5qBGAn6PRNDwBYeLyCFhgxI%2BLXxfBLlR2D%2BxY92%2BO6doyVkozygL7Pq9UzRrhstPH%2Bf4cGjnHF%2Fkndzq5rX1AyQPTTnvT4FmjUeN43njpFV%2BhVL5zd0FOBpXBKsHYQr7GI9xG2O7HXjeBfq3xJH7nUMFn9I%2FRbR1gaIJRnTIrLf1YSwP422MGek%2B6t1o%2ByGprbUWYPs2vu6T%2BoGmuw8%2BGirB0IABi5yYKfwWbHuQi0uWsxVSgVG4gI%2F4oA7PKuMvV9u4OzT9mEkSPmD9T6AdDwaezMr%2F50RFEU5YvZs5lH2ShwapNQkDPuHQISZYdrnQz72uTrhWZmrqogFgINRlj%2FcIbHBYutjLkKw0JbAPGD1261OWV1wJenp4ka3g5UVVQgtEZlWHi1eWsRxyHzdAS91O5kc97sZywp2EqF6bUirfGHVfWX1%2BFScrxycl%2BRFKiIXF6cSMcgNoNtJbQMMXclr8GOqUBYnvjFXAmffQhbK02l2VMfahd0RKSMStCfD1w3cSwkhpfTehF40t9NhkWeUilvENOsn%2FVkZdKk7bKu7Lhq9cJVhMP4rIL8oRl7id%2B5WWkiiRBhy6hDgep4Zm4wAAS1rXEkEtr%2FtEmHROnHDzfukk%2B%2BmyHrQQJN7RmSj2NwVwlHNVT1WffhH1Y9mfPybZ0bMwkEiGPXFwnl%2BclWvBVSMixTn9x5q7T&X-Amz-Signature=d04c314831d21c0ba8e5832862a14a1e1ab2a945979a43e7d5962a5d5f0a3bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
