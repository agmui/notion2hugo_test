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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQ2FCDC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHgNF4v2ibmETG9NFnVvzy1%2BRVQb2Pk86ISsPrWI1sjQIgSqoDXlVxnmt8ZysmLmVybQM1%2BZzTwIHMtl2L4jywxNkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL6z4jNPFAiyxlPfyrcAwzWznN4U8EAQaYYwdhQGqpXPEwC2pbTT00Hg9ZH2RK5gnxWeq49Osrkxd7xpuwtiTxpRmCJ%2BvLkeew2JSKvytYbvVP%2FNhLmVuYPsgjMA43AiPCOKwrFst0jBhvnjhyzcIm6f7ALdaPzw7Q7%2Fl8BuF8Ezfb1akxdaCngBSIBsJHbJ0FmN8J3lbGa%2F1tieSdt3ohxzJblwL48j%2BVdtNyCGQiP8y2gioVXhkRUeIYdEN9CLPG8OGuW9LruLH6%2BCR3cYlMj7sZGElNzaBugt%2BBzLz7UGWL0XTWpsg3yE7Sb3ieYAVGtnT2PdRuqHj%2BYT5%2BjxNtfqwwPuDLIo9EZAyTeaOQXHEMdR0vA611CqRJQsUhzulruXNiUay7pWWVOLBh%2BCJGcm0NLiyqKQDqTsOKR%2BhIWMApVffp74P9XHO3aK0JOhe2mrzX%2Fmq%2F3IT52ChqhJ%2FSVkRJilFYD8vFcaKcbL9ztp%2BfmS6Iw7eU%2FdL36XbSsjb%2F950XAj%2FFiDpSjETEUcVv33GKrCYiRdwa0VcobluWIFJmteLXg3OJ5u6vS6KWGLehcKInhYEKl4r0dTHptzPwIbJeYDTFWJQn44QE6CoEaRN5ycEw3%2Fc6nAsfcgYDwW9Tq0RyDxKxOwPy0MOXl57wGOqUBBs9Rjv8ggdsp3s%2BhAeMZpqiS45%2FlgON%2BIJ7WjES8xRocJoV%2BY3tRB05bvACk8mRYfvYAqa3t5RDSlb5F2PuSQEJPjEQhRF1jeqiZcmldXr0RegE41yPq4eO4cLTe2Hpm16Ui24MLfGL0eRCb22tT9b9vhnWErfBouHcUUqAQq6StTcw3LpXVogYJ5Ufw8KQnjbGECJS4goODZSQoa0dnmznleyty&X-Amz-Signature=68c3693042d25c5e2fc4755270eecdb293251d940d0e402bc654156aa12db493&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVB7P4J6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIuYSWSGBOfOjUv5YgTqssTKUqDzTALtomKX80vfXeSAiAxXBjL6oZGWfCxYZN3pBOSIn%2BiSsSz8trpDXjks9IBuyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbb2iunIWDw4z7ogOKtwDmUmlWKS%2BlQzSmxXK21tPBe2BICy1oaTekC6nzF6qj4bQ0gQfNeRuUjdBVPEpIw%2B45ntGl4908UWwEAGvVnNWEq%2F%2BGih%2FWHHOmorPGmVLQDz%2BYAoe1vepIQpHJbLb9gMEI1t6QQb%2B5dvO2sPhmKHepA8Vj9VIsesMcG1HMwC6e7VmX0dCC3m3euKM6ECI2oGTqp1HpKlV4c8uqPWXWQsFtCSs33%2Fhprve5Yb9L7PKXZzlFQdYVuVBL6BqbGxR%2FQGf1gR4Ipi3Mp2Rv5VxnhaDwxkdQMpotSXeBxd66KHXBT8VPgW56UMPu1Zp9WSgyYno9zk24ihAmNtv9pzNi3RGwA5bKZ9oFrtgToW0G31XzKmi%2BQi9f8Ks47Kypg7EPI1xMrC8eM5EMr7Hemfn9nupr8GCkSd0e3eQYKwy2t2p%2BYva%2FaxdDhj12TJd9h0uV46KK6%2FYC7zcdLZMisUowNu%2FK%2Fxv4QrbW7JJ9BXs0iOxFqPVd1ze4D1DSAEUdgtzCLMswEp5C2tLBtnw6YewXmjYEcUBew4gyPOAo1fyybuESYI3%2BnWOT2PpI%2F5ddFUCfJ%2FhMb4bprAznitRVdep3HgP0aP4Y%2FyQ8XU6Kz3TTivg2q6UIDZvCAoFF1TZGpQwhufnvAY6pgFZLSHVZlcBHXVioPzoh089K%2FnEeLwkU9uohgyA2%2FY%2BWkSseu7WVq0r7%2Be12O2cSblmzYlMJJIsZ31zOe9UYF2h9zFg8JQGmsXt1dSRyWdHeBrVaEQXgJy4cZDxaDsRJW4VsRoEb6Wm2RLhbH5n6PHXJgPuVuG0ZaLbK9B9veJZSbk50BtrDsRrUtr9iSqr%2Brub7Z9HNhbmVOXjf01lHNoflmwZiaq5&X-Amz-Signature=069610efc1a63c2437a5b4ba1985f2b57600b5dfbb17a831393a915336dd53af&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
