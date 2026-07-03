---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO2SAOYH%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDug%2FKZVVqcpktS500n8qpzgDZKLTBywzlOXeUwXl1dgAiEAz55iG4Ra7hJ2LAZ7CAp6F9JWyxwYQp0C0Zhy9gndBCAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDF4l9myZJPn3wLE3hircA7cPa4mTwTwrltwzvM2Qc6EBDzwA%2Fp6fpKbMrlb05zVZk50F9SBYhQvnzOIO2lXT4Q8KzQce5xrQpV0JZZ1gFndsaFYIDQCPUnbwpEWckmT43SIYcghpsr%2FoncmDuudFH8ELCPaRRLS3V9Rtc2C6WbfCXbhtwb491bzQYeVnqkFuT54wTCLyZeFt3TZUFnlJ5Xv9th9ApO8OA2hDXKfq2v6ZNKlUwgTzzK2%2Be%2FHDLMgKZrdaE2D81zcuxMwmkOjEmxfPw4%2FlodYdGy39HRCc6dh48bljsNA2sBPbCXCHWWePcONi%2FccAf4zJaaPM4zQTOajIqZSKb9gvQnfM5rC%2FpCFpnt3o8CUt23IwFp579X6XmEFgcUUxK0tPzMkhom2HGQYrPaNBZFg%2FLNeeUCjAr9e%2B79BYOQvyUH5K%2BY8WXHXFgUz4yxUi9SkZFvewVA%2BqLOzHbOf4EB9E1vG0n4OE2pXwo6urrdM%2BfxWdIwqE2dwOl4J6JtxPrKKbCMRjCHosja%2FERBlpx3p5gp5Tn6%2Bj4FRQa5jadDReiRBNqJel6rVPVcA6Gq4zfAAgttitabktjbVxabVABNxfvOQEmD7FHTU2r1wwNSwOhJtvztcq%2BW2LInATwRXiKfOHcAQOMKK8nNIGOqUBMN8cGny1KFHxdlyZIkcMA5iR0AVvDA8GwOeSuqrF215mUoVAf2SyttgH8K1XgAOlIT4VZ0lofxORFRzatHtvpWiEh0KNrQSVo2LDMd1MyvxEqWZxZdWPtAza3b2sq3SARpLFGPdWLdpHrvwSVvd0u6ofX%2BOtZMjVL1YBy7QbDUQ2zlajJGQpf2aOC9jL6lDt0wGDY4Nay4LMpLfCDIEXQenhAeWq&X-Amz-Signature=0f61fb6188895706ee986adf5b294f370c5ac8de16d463c69198c730341700d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUQVBMG%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQC0FzS2dyKeGBZ0susMKkPeRwuuUeMILxpgYdzKmmbiNAIhAISANW9EzO4xdLHPnlckYxakbTrMh3SarMp8JpvyGersKv8DCAMQABoMNjM3NDIzMTgzODA1IgxkVQYnqaFTmpk6IpQq3AMqYAe6gMf1mjhK%2F2GCUWk5fMyM4awD4f9f2mMDRLxUHTDqiYLXjKulYcjhsmFU%2F8CYzN3YsnS2TvaTBOuk97wafa5BjbLF9n0vwP6citJwYKnNNPhMtPEiKRJs9mcc5yGwFy7MMLDHr7g2h0iqC%2BxgHX6B1IvXcKroJI0G%2FhIIAqiO3VrP6cx67AYZnyxnPbI7HokRtgRRxNITpMjmlaWCw80Uf%2B%2FBa%2FCgMH%2BRqnD0GKo0hfrdYXdGNL0LSDCbwXr6LqSb%2FtLAZiHPlZmpSBrlZXZ3szYeiRrWT3%2FdoKSpJuZsGEDEBP2o7S9mirHVKLEz6mRHmmKA3ydfxI%2BPQtEKk0c16c%2BnqJuvvt%2B8Ua8R%2BAOjEPqdJPpYJ%2BggB4OOaCCpC44RqWPUW0fdaO3vkSX6EMgG%2Bk%2FOudyMR6Q8%2BlS9s2ykVJQNioIeCi%2BfDyduwxFw3l%2BYAhBb2b83e9urIsh4pnZHTaJ8lFQdEBqfV7jVdnhcLg5OYGi34rvUJ%2BqCyGx40%2FN8Gw6y%2BxD7q97MGNapcoUAakJV%2FIMaMrwGZFTclH4OPec5JuFdSoOv6mp3L4pyZC5wcCTuf48htgof4ZlXe3kcnuz60D1vyYVuUILMB%2BBeWTIln6%2BgB5fOHzDNuZzSBjqkAfO%2FSlCDlSy%2Fkak555ClgNFrlEISLd%2BIwpLsPw4NUd8AXuiYu1kj7X6%2F391wRPVtPKnxUb%2FqZvhsFP6GzGmdwjr0rX0bNkqHzI07IKXVXvOkeZ2SCCUyYxeJmLiYbB5qNvMeCSrNegIoofv%2BN%2F%2BPznbtxWBkmGj4cbObhFBdIAoOr8jAqipez7zobQpu%2BituorHEPkgvmjy1A%2BShOy9JRNiQUgDF&X-Amz-Signature=4556db286ac6827e028e1a9ad76ce9267868f3a20a9327b6b4bb968b8a0a1c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
