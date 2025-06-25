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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNF6L7BV%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH2czbGp1IEw%2F2NzoK2jBTgCdugi%2FR9o1vqUnDnb48Y0AiEA0TU26dyEgoROGcUSLcaa%2Bqb%2F32FfTXSXxGVkGsarNgAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPqJwHelNgVlcfMLcCrcA4HABhvz24TphJ6dAU2jvLXiFEbgCwH%2FHRJhqlJgEZKBPKx3girbTPmeRY6VjBmrSmhMJRJm7SvmuX%2BVrRQG16AJnmocXOWpAqwq0E9io00DexZGTYCbNQSH%2F%2FgmE4sEazzg0GIxdvi%2F4hEAVqF8LpslOLBrgwE7DgMP5%2BUwbgZ7jd30YwJ4Fr6e4fUoRc9lTq9lgCP5ZKqc%2Fe865pvdEKBGHGo8QgTHRtgjQI3073UjlGmu4hyxuMYmPZ%2B32Gpeq%2Bki6Hw1HY0ELAd4g1feETLVVIvNx6JctSMWFkHfplN8%2Bo7%2FijHaGNpsQmXxeDl0FHUa46NClAFVuJctC9Eo1r53lnVnTHY0Nb%2FBjVzBMsa9ErCZZH6wmB90N3IfJG7ia8M5bB5Wnjk8C2iRoRZZ2sm4dx1mhT97ygb9WNk0JTfto9nKfJwx9PD%2FzO47nTb0lDbJ60B93XpKJtuQisvU0iC0qvAV4hYUQtJrVQIJD7g1TJlzw5Q8uP%2BlbrbNxzCRLdOSmhMA9dS1m7BgpAUG5l85mZqVsKkhGhS4xD0iK7lDfFMcvLksMhBcagmcR9%2FOp2TZwfEQv9B8KUJKmdZy3bcW6XlF43OfNxzfkPCfW3SNXOddelYEivmRtBIgMIeX8MIGOqUBQqjMBu2p7svaDQr1NQluddtWlfdfZEIfl5XgbudgUQ4OrbyjgusW92WgEOX0Yfc4k7tJ4oe8bCrQMpIKhuV4JAYfrsoqFAGgYlnLNnqC7cCJIB4sZSyC9bNJqnIvE6e2bpBl0zmU%2F6Y4LPeWUzTHMb%2B4Vq2MbzFkEtEUHY6KjL7h6wyStJDnG609jTnQUvPHN3pcfKCg5tglIR0bMLJRVdnTyUaE&X-Amz-Signature=195a1a6720c02b362df6964d6181361560ab4e2e78f2bc157c3adbfdf1038e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7OT6LB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBCZDGXvLdZ69D61jInN%2FuFj4%2F6WvohxRyLzc0IFCuYkAiAeT2ehUBiPk90fiOQXTycs3yiasCYZ3CLpLakkOAuHIir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMiRQpAXSPCmca80TUKtwDJndbXJpPVjdIyeSHd2fVAPJMtxG%2FUUdDw2XqzrS242JZ85o77nb4Blhh%2FJ%2Bcqdo3GFT8Jo9b3cYfxCV2kFdJh8jAIoc6%2BPDHXzr6Lwq%2BQYK9aLMHKylVcyOWvA8FlEGNd3WmIPEN09kOsNHqzTZtDvhalC34NMkpuH%2BJ1Bqe0wblwjImFoRUZ3CShLY6IreUdE9Dkrc7uPvWyeXTM3jQd6L0M49%2F0XKuVynHFdfL5V%2BBbtA8dxASDrqQyQKL2eE6cPwtMokOlNayco8Q1gXBrjz%2FXxsrmrvMxdgY6FQxo6a4FkGMesxzPTWslv2IjMO106nx0o%2F2XVVbCfEf4ZewmIBafYVpPEGC5M%2BvtfMY41d4Q4qqLPan0XtL0l6f0deVpC2zDmVXZqCq0ceSe%2BI1rSsAWo7sow%2FNypq6obX2dSE1XjsSMLLPL7ru5gNJH8njVrWabV3es0QqbjNXreZVLoOB7BIjkLFy338gf4mXpQD%2FGtpE3TfceNqdOlQizYTtnfkLBrnpdIfEsErTgrTBvejwT%2FmMajr%2FpARdxtvgrbQpKyyhOA4ivtRNP9DmYkE1aotUJZ4gDA6S3sAGnwug3utOjSz%2F9TFp5Fj2StHr20XfnFcdbWbouGjrLG0w%2F6LwwgY6pgEcIHBXzytTXyo5Sqejzn5fCxD0Ro1AernhCWRdBhxSISGaJwSkgc58SFPWIEXx4m9vvUd7yceIgFgRbMvXGsivO1SSgSAy8GJWngl%2Fig8broZy9wFGXpEMBW32OZ%2B3Tk5ZkpNWtl5zfIdfbcHoijqk8kqbiKNfF2f1WdVRqjwvsvx26zOk9ovRWS%2B%2BAEL9xyTwCy%2FwsnyvT03jOvSDw64DAXaPDEcL&X-Amz-Signature=04eacab1e3632c64b18772b0c87e8716c19e1ce657812b82ba0d58e7d85643c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
