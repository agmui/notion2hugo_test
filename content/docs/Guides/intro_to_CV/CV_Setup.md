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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNGFXHL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBeRMzNBAnI9RTfBFaIY94%2BxubAIihF5os%2FcHjWMzC8EAiAzxaKJCe9BrYeS79yeTZVIux3Gt1F8d8fK44se9YzhGir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMbfXcvhN%2B4P4%2FHr%2BqKtwDLq3g0SvMt1nTKHyeEFSF6rTVMIfy5KdU1KhOpkeeqFztrplqvvM8TA4S6P9Xf%2BpKJ%2BzrfJW9pzxuZnuGJqDQnz3DTI4D2rogOTgm6z3AO0m1KaQ7xxS4vkNlOHKAVL1uIfIbidI5AQXuMPT0SbOx01s7M5B4NaI7JjPn3tWsCF6oM4wRZ9ANgzOXLTd4qUg1db1ZnNT9RG1Wy%2FrsuFIOwXNok0SlbL%2FoN8RaG8ByjvEo5VIjqFk%2B8sUJyvxvfMULis%2FZQnZ0SwMsSkUeJZeNtGM5A0SPLVMYCi4ewHpZPKLKF0rucwWiLwpgLf4Sn6VwAmBAEz9HkQGvcmXw%2BWzayPHKea4y26Kfhi0Z3ArqgI39%2BPV1HQHffSLxxVasgMvXf6G0FKRsGvIstLVPIhz%2B4Vonnl0kZOVLYsGP5gCqe5frZl%2BGHlxOLMWfehaiXclSI%2BP0gjMPbeHojDBtv%2F6B0ZPa60kpc5qF5EHqQ3Fj3w3KihlUozMXy2cHwOL%2Fk1W98H%2F8fEH%2BqAecgaqtGvk%2FcxbGt22Zh5csWcVvZODLpCwu5GPUj%2Fgw8dqXZPvD5nc5Qc3X6Iyv4fiDvwxgqh%2B%2BuPQ6Znr3VEt20%2Fcd2aJFpdDJJJztUUfXTbzhccMw6s%2BnwAY6pgGeLdjjuISGtyPVwl6nR7Q6EGm%2B2M7eOAqTv8wG3HC%2Bt%2BZMObK8JG3bwEjogFyP0tVa4%2BeyC712wKd8tyIklPGY%2FnVC%2B2ULzVSveNU8xyfc03P4DU1vFrcB4dLl2QMWDxXiMiggvZsGb1e5k4T9JdKsRFZA51Uk%2BvNckRZJRTJUYQ4HDD4A%2BM4tkU7%2BwdpE%2Fx4nj0L9YkIhttLTgdlbmqzRGc1TnPGG&X-Amz-Signature=65d85f50a21ed32e4d477d4793eed9c925a67646d126c78836e8c431c91777f2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CXJXHYK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDqLaneHhn27dCrJp9fuH5WgSUDbXq%2FO6aPTqNm7B%2BODQIhAJ0XH99eGQYSTfDH18qRbs4KjBLUxEoF6gNv0m2jgxj7Kv8DCBEQABoMNjM3NDIzMTgzODA1IgzBJQo%2BonMne3gJNoAq3AOpUHeQcLKxF%2F7eJssdXbHDRzMRmrm%2FtFTCrZ6%2FEZH5XmfsqEEyvca7FDf%2BNk2Si%2FSekctJSA6Eo1gfsVw91GEPjMK6lkGrh1D%2BCcdNSqorET9TyPmDvrhPLAYdPLz%2BlZV1OrITs9GMVQRy2WtK2cKIZux4TdhTHxf6QLfGWxAWFHCkWiegUoNSJn8HmGTZR%2FtiAnyCXrvjmenjR8Q7a9LY3TZhRyyslYq8DAh0j2WYI9t2TZizOH6vcQNn9DA52y8Ng63bskqT3e%2BRMvSK%2FAhHyVTvpZkdFuASp83fZIcy0YxqJz18t8RrPjORYRjTOflH%2FGzZjGDWh6Q%2BIwgJv8FlLICnNXl9VbdiS7Sv9N%2F8yKeakrqHpLb63%2F4gdPTn9aVtuneM8CKVdjMW8MN4O2k28ymyuyifZVabn%2FpGgBsg%2F2rUw6UrwVzSpRXWsuJXrM%2F1%2F1j1tOE9GnEs2p12AxzZs%2BXRIiEsWXndM9%2FLz4RQi%2FCOXthXteUcXbL%2BsPYQofv8Ws13%2F%2B0xblSmxBNSkuu1yvKh22TMm0OW%2FT8ZN7vNgMPP%2BP5O1oKn7aNtkZ9nn3yF3%2FplSxKgoIENS6e9hz416Dj%2BOrrZRiO0mnBpXN%2FLO0ltWm30hu0SSsa9xDDqz6fABjqkAdYU0G1UJNlVDTH51tHaBATDeYsAFVh6%2FjDg7AsjhQNI1BG9y02CeivawsSj6%2BgcVfHIBEpMzf7EFGylU8DT2z0Lmw7iSTmbNN0dlo2KA9nih%2FYVunD%2Bt8DscVYxI6MrzoP5bAX1iWUbN5wCiX46Vpb2EYNcYHDAccSEt7DuWzs%2FAJRpBPbo3d4ekPgkkqqLL%2Fp8h2h2RB1tG%2BHizmXjzv6z0aOH&X-Amz-Signature=4f70e0ea1d709a5db5addb1e6858b5bb82f0e42de84fb752b9e2794f943c39bb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
