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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SSSB3D%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCXlGxFIWtUBoGEZMKi0q%2B10mPn7it824OmPO1dLfxWBgIgeQe%2Fn5fgloMlu05ImzUvKZhdf1oNhyz8uURzPUi34zsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7luaGDoVGR0ED8KyrcA%2Boekq3JVi5qp336FBoVQ366c%2F1K7QEqBNTYvLILsdWm6Ihf8QhDv0kh49YtQsk9wnpXe37%2Bq0fSdGFsnG73DT%2Ft%2B7XpAot4XM9W%2B9fLj%2FV62UOswFwi7aOTbkvzzvGtmiT%2FzE0MhG4ubBkldQwuGkGsE7MPJpj3haDZ3eMZTbkpDpkYV733bOls6bqV4ouqmG3a2nFyUYdWbhPKzfrlENPYsiws29ab92ueqZ9BeiRJw2Y9WoMO4bA7%2BqmTanMGQvZs0L35mmKh8Rj8Vikj9r%2Bmg0oSskqQTMdbajPrWBUSlYL49SXMnX3cmRkSY6vWhIcKqjlp2SKH63sNBp4eEZ4FuIT7vjrhzLMhuS%2BbN0V4ilI9igibpQ6ihTy72O3xjUIfSyi7slSSc5i3JVVJfM9vNIqJF17W%2FDCbq7l48G7QEvy6tE9lmPL9yMZ9WnXnjjGM%2Fr1AE9LRes4W5b4bHu2m6Q67Oxt1Ch0AlIrSlyO4uvLV6m3%2B3hW4CciFGRXBJd7fqUrYR4OWBgiUsw9iXy5e1ZIdthO%2FKfMT0YfRcO6I1g%2FWfIMdYGEaXJtiTgJtU12MYzrwaxr0YtWt%2Bk4zFDLxx4gO0ZWi%2BUumELEidtsPjwX5MyC97y92eNYoMMXgnr0GOqUBIXdi2QhUHKij7cNPgL9veqIhtRzRURWTHsehslAjjun7W32ybhspDu24%2BuGnylHZiLBgP72d2S1jHWrZJ3pQprv6jXHsajyElI1CQbz3KQqe8JhSR3HIzQK1S3hmsk81X5dQDJzdAad8wfAqQi8rWMSQWrqusZXG3a8oYS3J4Pgm1G%2FPXKUyEOqRVUUvpZz2USZPaK4Ht8n%2BniCrvRMAD27KJNlS&X-Amz-Signature=aaeb1e1c76fc00cc01202febbe5d0401cd49b85ef476464da7e2f9734f9ba92b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4P663FH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEpTbdeezNmh5gdEbMUpeKIXW9JMgp8aI2%2FLdV7SzO86AiEA5gj6UtN72VBYzqq8OFQtcjfr%2Fc7n0RVkeR8uxeKw6pYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUremA7CvNFZINy1SrcA4sKFaA%2Br1qdD67lkKrd3s95wNEbfS9VaQZK%2BMU3lcETGgDGEznWtlr9hHqsvIe%2FosAMw8LK9DrzAtEoExqRnTjq3%2BdVASZUjkwYGY%2B9EHXqWUL5BmDj4ZT2q705WWxUjRCEZs4%2BLXVZt9q98C3j4Cx0JGMAV0bxkuhgSYrXnP2pbqZ1LXNawg8vr%2F6DSYUHkSfOfNNxNGqYZj9P5YOZWY60GB7NH3Lkp1Lw2hwvqW16cHJSNLMvYSZsu%2BosMxphNp9s6%2FdCrfDoqGfKCmW%2BpX8nhCX5zPF4faZajPNtHSJq%2B87Z16s1u4QYUl%2FcGOZLS8%2BVmc5DgHvFZu2liU2TG25rfdqjw%2F6422ZQLfykToyklsQ87EK8QczATTQO3GJ4VJJ6JloDbp51t8BvOY9o2EFuv1c36JsbAyQQvNjY6zdbJi610JxR8AYPYnzYA3EwrAbod0MkD16Zp%2Bpl1XmjTBUMxgnTpJ1upSYf%2B6JqdiWQ0wGjIBEYjW3WO%2FVjEis4xVhPmrum46XfxJ52nGcm5OEdEkjvdeVvUJ1GZKbxjH356z7o%2F8njeaHLkkcf7IznaEIL7Z%2BvLasAZcJDEMUo31roJGGZdbvev1MWi80ctbLVq5k%2BF4bLk%2BmOElaiML3hnr0GOqUB563fzyJu1DDoHQnwGWYKYux2PA3MkeiFh2SRIohGQ4vBhZktN%2FbOx9SZ41hmH8FhrXBLfjUUgE%2FN0fIWZMI57gl7EPa7YmOFon1fR4cJ6c7c1eLojp1bHH%2FFkyjF8c2yDmvF7i4GS6AUxJffe1s2KHvz7dXp7Wfbz%2BUfqBpDbF5E6fcqszPhcEm2EntlCwoi7ymCxofvBbU6fHpqs66K6s2QQUTw&X-Amz-Signature=82d25f0a4560d1fb164fbdd2d083403336a2722a8e4c7525459da46930f06cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
