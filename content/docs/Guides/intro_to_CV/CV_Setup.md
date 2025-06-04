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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZLXMHK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGmWcHWH8NJeXlUzit%2BeeMSubBmYYpOCb6L0yl%2B1XJl7AiAGs6JNZdNty7TJwUO51oM1VT%2FT6%2Bgthit49424UqEZ8ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMUFWV1KJ%2FU4XVzmILKtwDvy38i0UyxArVW4XHOzyG2gj9bhuaBoeRmfGaHAn8u6tuuUMbYsanm0rN%2ByeRUCMZT24ogWI75lApbSMkEZMY9M75xfp8BUlnDNu7lPPP9OSgLqfWwIQAxtvjK0txuLFwEVw8zp%2BKCkfuRtvaELJrx3ats8GpZ%2B%2Bp8ThDQ4yOGLYE3sCpfH3cWGX%2Ff64Y4UWtIgmlp997I6%2FtO6BSpAiBaEOPRkU75Pse9ExGXVlq60bjdNxUGBUYqcXV0DtbrYrFOyKtmJMvkhCQuB3KVw%2F7mBV7c95dcA%2BXNVKemJjgJCKzlm4EVR%2B%2FBm5QZS9pYCzq8zNLmqVc5P76jv6f%2Fgg%2BDMibne0aGpatDvA%2B7zyWsDEV4gVyncWqN60ejOMpIsYC%2BYFJjzbwgRVHlMtkgOcJ%2B7iV7MxAiEiWJTUS%2Byai1pZamw6xgeU1e%2Ba2qOB35Cm1TtMvF0BFVe4iQDgVh1w1ap0IZW7ygg5SWkc5RJtYvJBvOmPeQFJ%2BBZ612NP0kGuhV8%2FUi%2FZiTQ%2F7jmvTresai2SRS2B6WMkFtOuQAX03h31Z%2FG1%2BLobb7TQv81VnZwLNsgiETJ5NW8q9u1i%2F%2ByvtlgACzx%2BYxuAqIgSlJfcCfGG%2BuJbbYKrgwX7hvWUw5%2BX%2FwQY6pgHxSLjj54uIHMm7T4VjPNyPwVYq7SIcg9BgRtUFQEOykBoSHxfeYGQPAMrsWjWKo4kZPjueb5K87b1G9TLhgjbRx2DEks61SAT2t29u23NZzlBA9CEki7yRQXrehUXf3WSJMk5UxkfWmP6iIXmXxfWKeMOd%2FIMsjuT90vuBxnIBBm0NBUxFgy9WARRSUL5QQk90FT9Dhv4kT2Otig3M%2FpWYn%2Fh2RJ8a&X-Amz-Signature=877c62e0da55496602678f9f49dde95afc966efc7d41459471783e7763c8a325&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK6QHLS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDFosWgi47Fcv96jE%2BZzbtm%2BfY9sy%2BKtnQtC8XBvDKaAgIgOeG5k99HXrqg6K3w7M3VmxJIRHKjoV8FhtY8w9A8pcgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDFsShECX11M4kfyuircA%2BzYNUVE0wB%2F63QDjrbup6KR6q2H3fheVduw8kd%2FrB5xYQTg5aUZ5W63qsNb8Lb5T9tjvfOZwVruE3o5EYIkRCR4hNfgZ16r1ipQtN66nWxMOYgp%2FSb%2FPwgnQLP9R%2B5D%2B83MAr1gXSeSmqAVVWYLvUVufze0P%2Bm7Y7uPBZ4eua9s46IK5LfVm%2BpgHPo2SxPB8dhTxY8Zj8sELkMvLlAiF%2Fv%2F6uA70cqDcRp7gm6YZKgdBK6B6hKZNJo%2FoNPXMVyhHRsvs2YT%2BnD%2F8LwC8bN96xpi86dtxy6ZVIPOd%2FFlCIW4w7vT6uZ10W0pD0VeffzPjBfZPrQBQ5OvzEMPDNB9RFZptBy2Q7USx0hE%2BtFgnAxLtnPUMBPvhuRIq5FYImcSW1fgnoEy4pIUgmfFwuX2r3Wh70xLrhkqr1w9TvAvYx6JCLYoWMYrGCbY6lWOwFGunzjPU4mrnsRnda6AQmuo7N6EHH4xlCrnmi8H8zkEzSLnzW0SZlCBLkfvy9sOXgkmfNVk6aylnBqi9xDbjX4JkNHtypG6et6tDpet%2Fgdyus%2Fu6tJnYPbokaDA%2Bl%2FD8D5AgRd63OKaSgyqdqzo4TBadO5aEN4QSU4EgLLkzjwCUchfvOi8rUoXn3jT8gA%2BMMT6%2F8EGOqUB4DLDQwrYz6G5QXrZRUHaHrIEPtT1YH%2FHhArwUxdEqcRV1Af9kUOk2EWJH7pG4qbrSUT5UZDxTH1lrruMWxNn5k8xE%2Fev2ytFGzHpdaNyKL2bJMVO5%2FqJPpvcqpaPTOq6Kn%2BSC1nuOHE8%2B%2B6M%2Bpse4AyHG1IFeIsmNtdcVXrf8gD0Ra2ya26JVlG9LzxVoNBZCnTQYiJzKKKM3ETw6IEuRCL4HxT8&X-Amz-Signature=df1c586b3aabbf3c6f1b440840c2722fa9555ef8d5d9578d1ed6e01b28d2f33e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
