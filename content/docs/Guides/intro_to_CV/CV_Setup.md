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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6B2FSR4%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYrLcEvYHa3mbqNVSXdaogs75xENNDaLumyFeZAGC%2BQIhAPZH9uD1HkpnOMfk2ZORVZ17uARbnnDGZ97efhLRVqwCKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy4HdZdmc3xI%2B2nnEq3ANuwaLp7kSLEmeOPbBW6D7iZWTH5zPhu%2BaAp2WlP4dGnzyhkMR16ms152XkdXy0NYw5vymk94bpFZAbxETAyrpuLDP%2FUhWRGlmW1HC3mk08ztOKZqtjsFr4IMTWzJVLD5wgF80WavdavX6mNmP8d3LvOvy3%2FozMVEr2MmqmDY2OMcyRxXAhTWnIDosuG5QXUTY2jROcldfLjOx5%2F2D61dhlJULeqjcCYR6PB2a1%2B0Y9tWrEuSB230CJisJnc02R58xufoJFMB%2BEcE8wRucAEojJkQj0RJqwZ8LZRqvfjJIeUK0aI9ctWN%2FNeyErelizrU3m8LWw2jdP3ourKqD9Jzj%2FiDxfXMBNDMWOWH9zWf2jrY4PwWOAycKugwNR59hYXvQjGkyqe9DCDORJ%2B6kgdsaNDjcIhDntLAMsV7ZL0ODc7fIUQjPV4T8JMaO6S2HpiUdjqXKwwyWawFTvyXb0YUZnsN0gBC7V4T5Gin5FC%2BJBTg5cgbfL9WjiDOMqoRmz4RMclu8LOT81ZUxQVewAtQ6Fq%2Fb0ijLzE8QN8EmsztDxaUv9O9yDpIgmpGr9srr3Lice4oqEfoCzx7%2Bfu%2FRr2yMH4MDvMAo4Fz6riYw6zfBcV%2BDYz0SgAPQHExLs4zDk%2FoW%2FBjqkAeWk5I9qgZxKnq7G%2B7T6fG3dfr8N8625zywlW1DqCni7LRtDpiPvqsyGVtLM1AtyQZtymqEy3oAySrT2w7RRjNhXXAFzapOKDVn%2FIyEX%2Ba6drzdaCSCUvFa4EyZF9ySLArEuMaf0wHcf1%2FV3DfK6krypNpikMvPZteHCPNA1v3DveMkVisabOEfdpZlBvPVgnjyYly0wwVr3j0EOwyOXiDorn%2BhV&X-Amz-Signature=ff8efc03fc0a07a688cb33b1b0772de567ef26651f1d9d7b3e9581028ae09685&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZI3LHW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnAAhtL9mtHGwjo8B%2BRQV7S86oK7lBiZIwiGzUQdfgMAiEA05VlPeSnfdnKNIbINf0Um02MpBooOZ6f35Sa3bsJqVwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0CXhBTMv1HeQ4r%2BircA0B6gzGMgA%2BiRTIkL8STexLKD%2BmQTxJNPrdUycPc3mM9xu4XYthKV98IhCHAOeRW183X%2FbbVHD0w9j0acZ9RBhbaRX8MpCkoAS%2B7hCMhHZLcyAorScK5I4UcQZbdxRZLx8%2B9xUfjQSt9gYwf2XIbqYWqimL9E3HJ2%2BVf6RyvENhJ0k30vK6zrGpwCrv96%2BXXyRkbqwwIT74itaUFY8YtIo2YCQkKgKnLg4Nz6OQQEZC3PEZ41UUqkWstifMK6e%2BOBeFwt8b%2Bh35wCVaoJOadQuzrjF1q1ZNE1jlKyjcrneP6z1eHYxPBio%2FJY6ZmnFylrSM9i26SjWsvzdLNMwe7tkTTivKsQdKbHRsvt5y59PsVBeW93Q5MVApTscLFBnO%2FWJNXoWM%2FqvOmWQPNaqCy%2FVF6jwWB6Dk3jOiJ1tGMWZ5%2FPZrGwkN1i8qoSSAjfyj0I%2BMcML5LrDJzIasdK%2BNzSiM8WPnJibj54kMihBKKpZZlIsV6QCkBHhS9amJpaSxvOwQZJybkLhG0dxrcOZ%2FuKXwlYNCzKaB8Mk%2FaxIdz3MGYyNpNVKzsLOsMfMZi6LhFeqfq3b9nu%2BovYf%2F2qbwHQu97QmIGXU7%2BU456NJ0FAVouJHSYlfBUG199wQrmMMr9hb8GOqUBjYFI466rCvbbrtOcXo440%2B8kc8X5z6P94vYUL3iXcO0RBNT2JuqRcAOe2EfzpFXUZnn7c1p9cUtLh%2FiLxbWlPcUGkaJNffYU0V6SLdBPqGvr2KejGFsu5oxsJ4lffWmR5jMcy6%2BqiZfbuuP1jK1jBjFphDCQfvj%2FBaiCFz34nImhEOnbyvBKB0LNBGGUnuVQ5WMj44upkSDjz7tStLYX4hMAjn5%2F&X-Amz-Signature=82241c5271631665589451b0496a664ca89035b4a2e7a1037ef9cf3051414ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
