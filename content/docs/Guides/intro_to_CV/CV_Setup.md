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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSP42QA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD5mUxBbyoD1TnU7E3fe%2Fn2%2FibHhixK1GezkYPHEKxMnAIgG0FNLyClCMOXm7wsV82RAKU%2BPJUcn9ZMj0VltpjnVEcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7rrvEYJxeaykXBcyrcA3d36ORTqDlmCw1mXv8B2Q%2FSVh75kVz35PrMvJ8QEXhmqXJRUQuHPmO3h6oNRNST8MaJXtc4S4Z0QQauHAkwGsAlkkZLQlvNymUU2CR4Toatx94T8ubeEWPoCWlc4o%2FgCR0Q7h%2BCK6MdePK79EO9AB5JUkQYiG1pPZn19w5sWuEM0fI1bbNJloQxnkBVXN1V20ZwE0z3qVFJEjEu5yGvxWiHkQeDjwmbPy0ANDrSFnUp%2B6bdZGaFQu5hm4tkIUpyoBhrojGFkblCTQ2k5f1vuxkRARWFgSGYIQkuqV3KXNWsXSdUn4QwiBIlFJO%2ByqO1wxnTHxvhH2eyp23eJRZCgoEqQKmEzPkQYlDVkEK85HKF0yHJiVUvosRDHIB436LCGAgEgrsSCFgYcX3bOI%2FK4zGIGHyu0aJL%2FIgsTloIUv8BcmQh7f0lBhAU1%2FwNg1LB7EQ%2FxkqilYzMxqQ3s2cMDUvnCjKpKS%2FLiP7OU6f%2BAbMSo18se5FdPeIopU%2Bczlu0NAgkmSNgrmDy6zMlfn%2FTjFoHz0HlMlottDNCbf8IxyHGwlVhU28YfPSxCAkv3XIpp3IHKJpiUMCRmJmIduQGAeLO0QUcGZAx8vnkZBDiENBD5lpPTqniBhzaeAdGMInGk8AGOqUBqML%2F2ZMsBXK93phJHvD6tc6LtX4BQND2iNocUEfJTouZihdqwDOnGB%2BbPTsSsf7eT4y%2FzyoRBvj%2Fm3eiXYYQfwil5uMTUHlDdPUfo8OoKLsUWvQkj%2BNyv3lEX0G9CYVF%2BWkrwgvWjxQ0zGdh5uExabCNak0pw%2F2EQ9XYcb9VWee5GSHVmVhP9RsAJ45VLbJAw4Pe5AaFViGyE7Y5ChFudfeXI3SU&X-Amz-Signature=c399a99f0a5762a26a417fd6767565518de43e035f0d6786ddf77473026e5a1e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6CCX53%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEfvPRJRgFbc0GpcG3ybJCIYNx0yRorWSVpTh4l7YdwNAiAxYATMtjuByGeN1%2FmvtvIBKKNtBwAy960az8f3TyY1GiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0DGfMVg0MtflmhoKKtwDNwLIqFzUfBnTYZNJ95SSb0A75EBllUFjaNgjhWwiDDOmOspoGTRG8svWqoh5gov%2B3HtObcrhMzMsytrc%2Fy%2BhzJp%2BDUu9ywILFPJvnJgjWssVL9wni0r6vETQCtiYMrx%2BKWuxOOKcMTeJAZgijlsi7Eu3NcdSp2zd%2BKaQfPytVfAaxklQe1unF73RUj1AfqeavJwI%2BlGpAm6d6RwbeCxEY9LZXIThUiBqfZDRPzJLpPwM0MemA29qQXeNS2JFJQYluwtaG9gvMXI8zT1F5d70Rsjt1p9l2JhyetxqvIUquFDOVEm5JVymRpaN4EYAHtf3jY2%2F8BWQ6W7FVf43qoK4%2FZbbshPcs0C71f%2Bgi0%2B4gvMlWbgYrgadyAVTU1cKMvYPEuTR5rnLFjClhmoP8KvIu8wzaEmDhxocb8Dy6sPDnjSh6Z7sNgnvNz9kMVA5faelX%2FQtXXoYuhbtOeHGfUq2t%2FH%2BHGjP9l9oxRgbOjD8czkr%2BaD0Vjpt0waaebp4Ghh8TYZwBlkEantQwfhiKz6JSDEaLTFAty03Nz5Z5U4TB%2FL8PuwQ6MpyOMntfpqV6a8zcqlTNLuD9%2Fpcz%2FUN2Y6KXIJ9B23lQndgCYCPMXIHySV1BP5gRnZBpQSQjtgwrMSTwAY6pgH0hjlT9VLhS5vJiaALL665%2B2Ki%2FTp59ocWp0w%2BDevuNIDBedIqqBQhg%2FUVoAUBSYZdWQDs2qej2ejAmohX4EHCHa9pEQsAcYFZ%2BL%2FxLZH56jnHs%2BQhawnTj98vEo1jhjk7r2iN9CZPT%2BHqFLXCxpA%2FiqLlIkKvcqNGgj65debgv5S84CmXphtTzrfW0iK7FzVelCqashG57VEIPRcw%2Fel6CSv6vJKr&X-Amz-Signature=65a75c10cc86397f4126de2cb49c8ebed84387844fe759106a597eccf8385a31&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
