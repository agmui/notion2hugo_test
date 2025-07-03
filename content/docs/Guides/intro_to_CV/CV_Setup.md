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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBPZ2R3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDYZL4N3loUie5DhPgZEM838Ynp%2Fw4DJBqDWdhtcJ%2F77AiEA8N0n76Ry5fUtREvl6cq1miyqeOn41VsQnoGq%2BkRFRAYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXWrwVS%2BpGumbiktSrcAxx4%2F8cwo4ctvqna67WjqysQoCZRGKgW8wkuSUVMfEKssbQbsBIXXZcTfOZr4cgCRD%2BEzGbSQwDneSd1hGH4fv2L4jw28Oz%2Bkq7TTmS5HUlpFL1QwfXSR0zuq0o8enpCaDu7iQGjasmeO7eAC%2F9U6R%2Fb1BZ33J08FpxzCulozxArBjmMwPbjly6qOlf7f6idyKD1Dw920C2Nt%2BYe%2Bv%2FryMdKcIGJBXOkRwT%2BU7QCY0Gpz7CDg1qNXa%2Fy32rurpQHi7r6V1tAEmUAQQuARwM03Gd7z8k6SR3lLwbUIuy6nOAFc4W%2FDIU93zaVeKDOTdItive3E8CvrUawY7kpTIv4vtXoXdmSw8yIJ3smQQJNHYR7e7fEvX3V4p%2Fer8%2Fg2ZbEjVGoK5w5eXzV1gbe2L2PW8Ud6hgdg0UclxDp%2B%2FbBr5lGHyvXo%2Baq%2FmtiZoazoqgcl2fz6MycT%2Bum4MmBkcbGwUnz3idQxqCp0e7a8QtIyo3cZhj91afAnX4CjRFB5opJ9qLA8jyYsJDu7ni4N3%2FoHFFX0q7NimtpjRZFUyhrbtmutsLsvPm8XWuebUtPffaYEMYuYLE2LZs8kVjUb6p3uc3Xt89UgTfDKyBOV4hu3Aai6yEE2%2Bfj44VQaCMZMNjbl8MGOqUBgsNZTkzz4%2BOeaGH7mRLsuUa%2Bww31Rd4eBVRX%2Bz6g%2FMBZ9A9opea3KHdGkV6E7ohvdQsMEp%2B1EMlk11DXI8DWEfQbnv4yO45EW8Qc4%2FIqt4hur1NvUZvfVeUhaqTqY2Xu1kYKjexm2Wd4JYRznDndkG8WFwIZ%2BVdfy0WM94hnr7ht5JIZhKkLSqZst3VhPw6IKGiuEuaCISHBveD%2B0c7qMhne0bt1&X-Amz-Signature=e7e7ba3ac01c3df497cebf6198c0f4035ce163553572a04e56b51d43f45a9fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWW23PGG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICszuG%2BPAttzR15Br7UaMhEUX%2BpyxGA7SfqXbvlY70TbAiEA3f%2BU3HvHq0UZZ1wzphVDCZsvy2kqTDAuX3fWMc7Wmw0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfvLV%2FDKVduMtFAIircA%2BrrYADznDqrAaJaJt%2BEipdeW608R9ytgMKwjKHoLc%2Fleoml97E2HNwS2jswq73YZbnm1lDAwAuUQiFS1rY0EFvgYtQvAUcy%2BB03IKTNZBpBnIGmw6%2FG9nsvP7522JaHV6BrMQXZQdx4jb7xK3YBHWJfxtzES01EdgLcrOlHpC5shfL2AkvdHT4ELiEquCHGgnmquuaY9G%2BJ1HS06gpZldq1YuIj%2Btzwc8YbTqoAUajlgfvd2Pgz5L4AKJmypWIzDvbPxhdg1Ty%2BYh1pHwamTJixgo3fDLxVu2ybq39Mb4T%2FAPPrnZ8QdSYEGegCblLMzR0oyKTS6O5JXG89vvJTRTNjOWXdqp4x3b9tl%2BJd9g5P9%2FR2OEjicH9IX7PPaIBVL5IS9H6e6OMkj2vc7fE9f3DZvU81jJybFnrT6rWJWfCv34LJTJVHj7CxqdB629tYcwBDeKCvF6LXzhqzeudSPL6yIZe0jqje4uKMy8OdO%2FLPE4mx8HY7orijYtQiewb8w%2BSSsIjpqhxK3soev6XbwoaOgr4UQmZpwTkQI7JIM69ECho9%2F2pbHxEYBkl74wuJjBkS3CJ5jEVs%2BAYaU42JuvZr8HvqdbSQU1IxtOggl6AdO%2F1eBC8PPMPwKEdTMIjbl8MGOqUB%2FZXFJyOv4L0fxlLPcpbjwz4ZWK8DGDBhOs6CUdULlZBZj81urTIufPsJEKUiVGWI0%2Bo6RF95%2FQuH9xGZSDKixdRI9Ym%2B%2F8FAPkr%2Bs2m6mPD9PH43jDCOv%2BQ%2FuhjpTpl8eidGc4H81S50CMogSVBWffeKqkfMF4jK7Tmxf5YC2whQCe%2FFASFoKh81DYODJuJbiHxMFhqkvF2ttCxmeecC%2FvbhGnvq&X-Amz-Signature=b3f726639fc5b37fa3bc6675a5f7672e3999e4d5aef0c307c94ecd8b74a6ad62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
