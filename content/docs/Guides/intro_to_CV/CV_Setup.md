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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LI3WCY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCbn7U%2FL02a8jHEWD6D1ecFangwzt2qLBm9Vj4vOgMJmwIgVkZOnm6XEERdScKVM83iap1Zdsxqng%2FVIjv1ury7jSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTZWk5xwqXf23EZ3yrcA2Ie0IkJ3agoSipGsTjL0uI2Rphm8i0dnfHH9ZYYX973wkgi5IJfCUdtbdQIEBRfbHp8iClNxRN5TAiV4%2BBFN14rESh7FIVWbrSAVfrUvUeayvW3efCwt%2Byh6tyQZVZ1X%2B4ad6HnhT%2BYCeLFfVwuwmm722io95d%2Fp6pk36S%2F%2B7CAnUt7txwDviiQ8IsDNrQamnZiIt9qg8D%2F8iFRWd5aPN4JD7Q9fQWhC0WpGQPsbw%2BvXrwXc0wQqTqK1gYTYu5lpJhNnUBNJh69yJkGWFWutHkYrGtC0DGC7hSTLdq8sY%2BRCsPUXFIjyWxHxKeukn%2BEhQGEIcS%2Fl9ybUP0IPgChaRbMtTpaUyNbtPUxePv5rNfHsbWd3f%2FfEjxQTFeYIvvShMY14I6QLMBbo9GAJCjGHwUp9rq3IzQADrJyfoGuv2kFM9BDQSCUv3EYr62tAC6IqKLRKnXWJOsOcsM9lueRPwh7X4jpavfP8RyhZLLochP2mo4J8tdz6EGdflEEXcY%2BfdXFQtiKBf02au%2FQN%2BrnYJq5GHT%2BmfIUQffVt2XPCN%2FHKpLKHzrUGxfbpudn20aU6jGoFHuUKTd9LfY70%2Bg3vw2tuuDg4oiH24jfml4RNeYd9KvHvxPTgsQFRThqMInw38IGOqUBL1YPdmUOK5wtpg0%2FTAp2WSgunqbkaOU%2BJ%2FgeM4bCJvsoRlQ8E0ok8gAsPPPaR81C4kj3yf%2FNQ81%2BA1prLD8IJr63qXxY76qtCn5e3429%2B5W91UGf20bXNQljgg3DsJU26GCUnBiIkv01VZ0Pv10wAJO5TAsR5zYSCnzWWHvyHvU4ZBIOpHz8wPrC3ZRostG6Z1RoNhiMldU%2FBG9C2U5Ku3cBDRs1&X-Amz-Signature=34c6314a62b2d308958131c6de5fffcf0fcdef8ce5b97e74b47cddf036ce3d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNYDUSV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCluF5ctY6jV%2BdjFiBuS7uruXwEKGis3hGHeaX4Km5JQgIgdH7SLTLvIKNgrOeiFsXvPzfPB0BiUg95tyzH1nyavCUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjX7zj99IKnKyOteircA0fqfDfn5Rtk1lq9D66HDBj2tEHh%2F91228rOKDwRfBSh3tqh0CgDhqyiQE3DLOsoX6lBn78cuZQEYm50K8GJ05%2BkwaIdEEM1HWFs8fOvHk6rP6qefH3J%2BCwyi69smMTqdZzx5%2FHd4ekcB9ADmRK9kLoDEOakdX76%2Fxig5106VcCBWocL%2FbYtRAELJNG4jTT2VxgbEgQsj94dkP1yOp2ryo0W7kIWgQLmF96SWm%2F4Q2BYRIfMXA96Iyb5IuA8WOWbjdTFAxJR0Tqm5qr6azhC0Kzn8WLafSivkxsZv%2BcznurzgW5L5dzhBlxXxzJAbW3dFwvMNkjU6WyFbM4e%2BT6SR0W5Fo0cLcjmkstqO9d8JiLJjmzaudrWsSBF6uHMITqWBS0rehgZqhvtgO6pLW3UCva6QvjqvemC%2F3SsMmzfIN89QZ%2FqHJAb1%2Fg1xVPsjk1Dbq6PihQtatNWg16%2FHBSAMGyk7InYU9FxCzXMlPs8Zk2p4KpF6ZoucLyyrFqFIE%2BZnKkGtYQhbsL%2FQtHcqZJVduZPQE0yWbyVjPSkMNl%2FJ6bOiJslC1tH3WPHZEuyA6WX3%2BXv5ttaPqnd0LZgxThrrDdk8KwykVknQwgvBwurWpGlruBMA21EeYE8Ce5OMJbN38IGOqUBYlQJ8DL%2F4wGVcdVPC7DqkgQ%2BPTpjzdVxrLjCkM9TZI8XdD0DapVU4SaIfRtKnQNefVP1kqM%2FIOAC%2FWpSB4AN4xMD8byi2KFDK%2FXpUbnAVzvTdcjXBk31fcoh7xH9HKficnGLgnO%2Fy1KDx9Y3DRwfKM8%2BnshRVkmlKeP5hKM%2FpRa2wyjbLAcZQEQNdHBXgBwwwLA24SzjNowOrSvleLUFSVFBJhOl&X-Amz-Signature=d3615b0e7e0f2999ecd2feee31e34003122d5e88ef5b11a0e13c0306fa472c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
