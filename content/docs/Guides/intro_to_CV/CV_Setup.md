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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBU7NTKV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICBE9tAr1UA3d8wgb6R0S5Ch766yR%2F%2BrwEtV6l83FW48AiEA6jYH75zX4ZYYSl1ypdx8HjgDuAV9OsCDbYl492%2BGpSMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqVImXvULQMHZ8PSyrcAyofa9CXB8hKWpV8Ps2jIPSuFha7Q%2B8ciV27VnvrXkgV77abqu7dK7NiaHwfDosCHc6r6%2BoHBhtfGdKOZXWMxGGVsKEqFjMfCllt0v8TFxRQnwcgImlFxNDbTaEqKeUtMTlyEhc1jP7NBg0%2BtAjUjYmoMeBQi2hX%2Bzr77NUG1rJzU2ADw5tKgoDhHJiPb3f2nMBHLdO%2BwFCD8H0Dbv87Qjzo78FQVU3jWmZ2YfgPWbMRJj66PUXI7XaEVKKy4BRkDxzKQcV7KfXMFcJk81HxMlAkIl3E3mcCFTfdlajl57%2BfuQLSpE7Ol5LQ9z0ax7hVy9FTmb3eSRCtZ2VZvqcUncybS8x8bHpj7ZGhTuc929oE%2Fxly7cJv46sVo6EDcw93qaxpufatOjJbT%2FfSP1FJs9lkgtIcEYxgjtlI2FuHl9KZmzLItOcISIpd35D2P364FXy%2FgZQcWsKa5lPlX%2FYDROKV5iIq%2FVhZdy2GyEgtUAgaCvVwAaDCtis1Ln4I8xW2ov9Q%2F%2F85WanNXv3oVIKqW3YWQ%2F4PE8UJg1zWoMHTMuHGASDGpTG5VLNZgp5wSNuvANOKI0cYtB1PWyEkppB%2BqaZT0fmwBSr%2FpRM0SG%2F8I1qjIg14FvHI7TZ%2F9yppMIawmMMGOqUBD812IaiLu%2FzY1w2sjXVmL4%2BLpf5ETJcx0jRA%2BALxqaBRAY%2Bu90eA9X5et3EOTIGdmpeJbisKPbRXychlL6K7OXC1BnQnVX7nyCXa0rySRjW4IdSTj8CXz5Hi95Y44cdsYoVlyvBcdIqYjd1eR1sEa6%2FK8GDfschP5Iq2k7ILmeFbnFl%2BHsqYqFlGLyBF%2FfMV6FCzYNG3Niqap7P1E66%2FVekP9Bw5&X-Amz-Signature=a737e5912b65366d4bc7015ddcc724e50c32c84c1ae64271fd03a1eefc6e17ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABWXZ3S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD9GGbz1LpVQZhdpWHLGRW2OxozBgy2xb9eLTjN%2BLVONgIhAJNUOESRmmXP7mdcHSQEF%2Fg74K7wsMli3NkYdIdj%2FpQaKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3mj8j9nhfvPd3aJoq3AOz8dd6k65E56n6AFVrDVfeC%2FpMqOa%2FZvXKSADUtB%2BD8iGL32aNw%2FIajb%2Fw193F9IjhDn6AZUqyhOWxKizWVC095MIAXmiFMQ766eWu2LYvrqU%2FapoRIHRrhRKRWEGHBiX%2BuXr%2FJCYc%2F98ED6I9acHyl4N9OEuMTZfyQpWG%2BDGN2eHjxEMAEsyyoh2dpnr2GsrO%2B%2FDICC72cnFGoWHmFsRLML6zDN8HTGvG%2BLdEK1xiSYR5e97p4HoRbD01qS0e2RS656%2FmLiqPcJA3VUgv487Ud1bkIX20olycbAEWjpUmCWd6pK8ee7%2BvFHwpKydbUQL%2BlDIai8TEDisN6YZoyCT1409RfsVbe%2BAaebDgNdNUPLggcN5ulAxaTLrbW8HbEQQghYrp0vRMRNG2Xo%2FioyuKxVzId4Zcm1sZdSSa75wPUy%2F4ybhaa1k%2F7wTkO65JgQjysPoNPIF%2BGAsdqrlI72Nj6h2xgQQ3M9lxxm7GHLt6xAoJx%2BmgABikbADX5%2BvNEpRXGD2SgXfnDd3CO2rU4tyViMF3p1pINnS8Ui6v9D5WRobSVzMXSZ7yP%2BiIxItZmKQI2qO5gGx6kjcgAB4%2BXIWw%2FKGOGzNTC9Zkg8mGRMypQnZLo32OW9Y1CHAMazCtr5jDBjqkASSIi%2FkZkdFRZrFMYPg71cuLs2fidyl%2BQ%2BZBPnd9n0CQ5E978trFULuuflDSHZvlU7yB0e3jlsvYC0fJzvyWpJJkOMIvb%2BXYiAGz5FTpD0%2FFIYdfz56tq0DnDXk8M5gioltzjPf0wHk8%2FsqOMv4jgheh8C%2FP7LhKmjAFbankO5YtvYpkXky3KE41mHLrFnQoWHsoZhD2GrLmWYxCQPUUX%2BeYGo2A&X-Amz-Signature=a16eb69c186edc58229c4e8f6a568ef7cfb52c7d50e9d3d4d771a7d203747c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
