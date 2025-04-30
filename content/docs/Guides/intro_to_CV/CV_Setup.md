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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CTJIY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDrEEtflagp5BVhVqEfmfxRtPzqjFnh1Ko2V1M35xDqAwIhAONZN9g85szT5g5hTIDvggwRsRv%2BhJ%2FyaLvralRlLCTjKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYbXpHGIOlvYOvoXcq3AM9ysN%2FDU5cLYasFkVg9f%2BL6CqWA%2FqGa0gWriN2h34suq8HIOSleWAxG%2FwKjlVgyegrB%2BGzuhY4h5lQ%2B7dDEVr66VjWxdrJLwlxBQcf%2BmcdoYkig3R%2BYaMNC%2FmzMEt8kKynuZCQCbfbQnDXs2jWcwUV9MB1bs3IRlIwbm2cvsHNX6t%2F9IQigmJ4WwvdK01i83Q1tglVE956CDlr1KR8YZY5DlrZYcRwfk26%2FC54oAiXUIphTA%2Fu78Gj%2BrezHAPGbC%2BFPi3sTQEwszuicNnfkV7oxBvykUcG9ok58XbD5AFFkgzLPGisnBwq5I0Flimm5YvMpzWPfdS0FK5jeWLJeT4670Og%2FAKvqwqj24PhK0jYWoXXwya8i4VbWrJXzUBqWxSufzANWi%2FPuJ9VUlUtkrz%2FZnNiYXGbU7LzHDdpInbO3Zpvue0IeOeodPT5Rrccz%2BA1q%2BQwGv5zo5pjLxRWlwdJYz%2FNhb%2BziH5vyNtl3vGyzliw28vyM%2Fkz11qi4PD9TjW4AHFCeetmZYCHJtie%2BL95xD98f4I91M7ZHkbfYAuiCSyW5ncx227nTFMfhhNlbHPBZDpgdJUSxmErCvyV8FAuXaWopUFYLKAryO9U5UXc9TQYkOJU%2F28kS7uC7DCQpMbABjqkAS1U8WHDe4Ho%2Fc%2FgHduvFj6T%2FBWAawnnH%2BooypHeoZNQZjZ4Qx0wQ2WApLlUtPXvpR%2BedBH%2B8Li8jrg8fOAQLemzqtRrQwL29Ih0XggKMoH0N0IyX8muha4ImOtNXmS%2B9Q4%2BTy8kXD86gG4AqmUBaac%2FraMF%2FaUuVqyHxNxZR3%2F0CW9sVD%2F6Ies81WXzhZr1LlbfMFHhSwaNhRz7lAXxA3pVivjG&X-Amz-Signature=e6d7a6701d8d6a0c9fff9c93bec8c957ddeab2618e8bd18123cdf731c55a53f0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ISBSPW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGwzDT2mJ0A6oAh7MqdkKh3inVweZFFqBNoY6W7UpzW4AiEA3kJu7mKZ9r9BJi%2B7qzunx7pLYQTT8riaTgM1yV5JBiAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDGRKfZJx%2Bn%2BZ5dgircA1spFHv0MzxeRM%2F6JSmx99wo5qGJ%2F%2FpceLnzTg%2FNHBLd81pfSkRxSQv7nvN%2FIkO2OjIiHiTG%2B9ALxeXXna4HaadYoP0xiTHCAryxC7ekp8Jsj7QBQ5hJ%2FvDIHdZ9g10L7QYaGDqdP5cvBRqzfkA44GMtKm6FhNTImxvK%2FLeFG%2FCAQjGfpNnS4RiTams%2FbC1rwnwcHggvIHTWNrlyxYOBSyJRMxoOtnmbn9pCPqTyLxQHwO%2FCGJXJyABoWfNyjJrAT1MwWjPnMIlV5EDLo8YZKQHI0KBcnIJZsDMABtlkZDEvlAIBwVmL39RoHHSIDPU289cHDMaCwNSGMHW5bdOV5Xg7aq8K0etAihVZ1Cduj26mENKcsQDu3XR9lE7GAPTfio31veDXQLkl4kojgioiJ9FZp3HdVfO2q5WyHn8UJqxPZvAWKtfMl9bId90AJ%2Fz28Ah0HoYM4sbnuBWvAfZpVQai96ttef3SsdhJMt7JXy0Z6%2BTVwwFX2PqwFGyTNmw9YpvuL30HDp8OGu3vQ0gdr65cf2daJwD4BW7puSD404O97yCo%2FGXNrDND9ZdjLvT52AzMd6c0oTIuFtrAdLMfZSq%2BvRbna2UrL3LRiW9J3Ocv92rzT4W36qYc05OjMP6jxsAGOqUBG3C0V6NFCQAtp87li5a5u%2FRCu8IfTFqC0I%2BNAYp%2Bs2pC0S8PEEb2ZODD7VYBz1JrxVfz8AbRLB3xN0Zxgot2Xh6eNfV6mcaA276Z5MNzqQaF3nlXvo1aakdQnXz%2FblaLj7g%2FABcklpmN4Pi5L0qrwGXZoJe55G%2Fon029H1QUP50zW3fPCLIjYftewP8JMfEdNhuGhvvbEEJOL4dPINcyso0T4RWI&X-Amz-Signature=79464a832e2546873829faf316d155dfee1038b4fcf703f31a5143f9679fa47e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
