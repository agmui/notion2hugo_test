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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRHAXYQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2N3euzabkf93pQGa%2B5M5m%2FBzcyR72xB2IEOWuD6mSDAiArk%2Br%2BxAzgR3G6G9PR7XVApVh%2FJaWoa8iDz2hDWc1z1yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMnL25EaqKKizNA0xHKtwDv1JKYEcBU040OYHLFJxlBrX0bi%2F3PDZxvf7rfEo9OOtwP4ISTzqslb3B2Rm%2FQWr3DsrwMN%2Fk7aBhyLUwXof1R7pNsYBrt8L3YJnYKFb81nHK03ts0svk6cANQhlZ9hOfZfmg3jdfiHy3rrPzG%2FxBM7Jb%2BMMxWw8WDi2rl944Fmx3Kq3vhYv9Nn8eO5QJssW2GBshMv3bZUY0F4Ncmu7qgCHlcGLwkEsgF4SqmhQjM6NOiYHnX%2BKka7V6rt7EbmQlf2UwQZb3%2F9jXwZCFFCDUiy1cpd48yUv7ZUZW7VkMNpk4CTJhZtAVNvtbtA1NEtAbFVzUpr6NSxpaQV71AoLFptHcJUQjI7%2F0DLu6x1umRdxYWSL0wGkhqrcksnUkNXzpyxk25xB7Gks58Qs4s2TytVdukne0dTZmivXdCnzUdREfSfdcbDZQw%2BZVKBkH42SUvHWvOqtzwzJ3BAfOMzEoeFQvrFboIyQR5sJ7ouD%2Bw3WOIaSkCfvY3YGAIlVFm4d0RAAGVbRtCGM%2FwF6wew3NKCp9pkaraRWsnyL2D%2B7j8Xq1nOMCmhZEZNrf%2Fg4Ly1RLYKpBZZUQAyE4rZt2DximwEJUVm7eT6aiAzny6IA51JSeZV8D87cCVYP4Pbswm%2FjcwQY6pgGXJwg6YArEf%2BmreIeWAbNftpwtb0PSsJ8nTKmWXAPMftSG1HhyeSO8myjSEUonlUvlU%2BM4u1w%2FUkcA9GZmLXH2yCPk9BcXf%2B7BfQ1dVwonrPWqKtZE9mZoWGZ0yXNthS86YAKmTn49vThMJ0DN%2BbRGRb6mp50MtGvkvGTUUvpL6tO8cYnZWPP8t7taln0PW2raR5J5Jccmj%2F1IvBGDrz5DpqNwqQb3&X-Amz-Signature=185f94441c603a5d6b74ffc72d235c64920a3c9856153dc145b23f0df2b6af39&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VADUOS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGkI%2BDtbpxR9CIo4gIXJoP7c98aAt6zBfm%2FDcsvSJiIAiBhtPIP%2F174x1GkWuXDVUNLhVP2gr2dU5m6z93EvMFWECr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMgeHFo%2FCiSo69MTbbKtwDJfpFOE8E4p4vRlTKNlvFrcM90eZC9nx0Jnc6AKGyj1t9ARY1gDrIcSkYGJ3GK%2BrcOszZKYDtn%2BNuXfVy%2B5w2EgUvK9SvbWyvxIx1gkex%2FvsmX3%2Fbe%2B3RHCZMtuw2t5LpAWRjbRsSzkJresJFR3El3ScXupHsNTaq40PsblYTqd3Df82mpBfXMT5tuV4oIY0lY60ISJnTiGLpCajOlGF92CWRylvo7FxKDNKm%2Fjm6W1QHHURuA7PqVcXlJe8SbBa2afuLbrNA0pPJD1ayKplNJBmliOiSdkQO3u5z6x36rC2sg3KvRFkxDSQ9MX1EZacaPIX%2FxfcTC%2Fz9v%2BYG%2FgfTPo64Pwq8%2BtSoZD9OenG5QR6C%2FKqRiESPWv7K7khujUz0DI30Jz4wyHNMhs8yuBdYPCL%2FSH3Jp1XmwRq1MEvR3V074l5VzPEQu4OrkeL4LV0A55fwVI1RT3TFh33qohFaIixxzEzOR7R1ewUgPJqF28lRF%2Fw9KQYfuN%2BQ4ONwSPIGoqgECuyhZPXHntuZrqgfXeCs4OZU1likL8nm0yu3L%2Ft6iaIpbQ1%2FnyCZRNlybIZblhuG%2Fic3XqW%2F6wHeHLcDBx9bBlC50b9W0DcgqXwhQrBcbphWD1hqs3N0p7Mwy%2FjcwQY6pgFRfVERZ%2FokyGbv4D8ptJEdMJqr4zP4V2nTrVob9nCJ5XqEYUFm1UqwC0mk%2BlHn%2F1GsobPrl0bR8d5CtDWALa9akPT%2FFGsA9g8MA6W9zLvZaKdtyVMHke7tEFZq01QjaIRvqKSTzMjpIDDWQ0GGlnKyxy3xea6OyrE5%2FCwwU%2BDdYrTpcBnkF8s0rUUFGaKz2ovqaTqqJehGdu5Fez%2BpjN%2BYkuQT%2F39S&X-Amz-Signature=7a14797a06f02b2cfcb3a99ba9bb9eca32fbe2214ef73018f8724b2dfedeedd9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
