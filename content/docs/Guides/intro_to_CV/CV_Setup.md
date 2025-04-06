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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27XMMFB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZcp3sk4tHc0ZpZ2VSkrSqgF87ZcBuTAx4%2BFdLAPPuFAIhAOoAcRYDI1ZnfmeKLe6voGG2O%2BuiosDWN5EnrsQf%2BoG9Kv8DCEcQABoMNjM3NDIzMTgzODA1Igyop%2FJATFHCjW754k4q3APVtMdBUKbVhaozmzHZEpzXmzbGoeisI0Mls9aWgXNBv0aT8KtvHSTs2TNHG%2F0%2BbreGWl7TgOnhqvxN5qad5hJhgqqbFQuzA6D4VENni6FvyjMacOoRfUn0tn7C3j1ZTnXSMB0ZIpeQvZDHCDKHbQr48c3qcrhQx%2FVzqm37aoy3RsMQqqWiq3WhuHP6eqCPko%2BUJxFKd%2BflOvj3k%2FF9mySmpUConBFIGAcZi1kvrvq1HbIrU4wxeNlLpsGRHpxY79NObBdMUwLVbt8SKLeUhA4DNlA4L4lL2NQDCmN5XyLp8Zcxin1Me2HTXgopBDLdvOSkPX%2B96QAx2ybW50hZG95G9r8qIsvGp0oA2Fp4VdRmposUUufOfYZPcwMlWhgDyqnyedOYpzukOQCx6PY%2BuM%2BpunXF7ebMg3uS5ApF2r1Inf1ZEZ39t1IVdewBvc75Y31as4cfsGdePC4vjJz5JION4tTtTfYqQIgjGrbvmL2xBC3Gz6hL6vnRm9GILb4JJnrSAa24hlyTeoJnTtvMK3uUenFsXW2dAVj49Hqi5w1sC3IMmsP5%2F9QAaXwq57jXFkX3U4GCIiow1TlUvMhZucUnNV%2BnOHCrbYpJ%2B28L%2Bq0qkktNl%2FujYYWojAX6PjCEi8q%2FBjqkAZY4%2FYUHjTQQAAW5ZSFfJS2zk0QD%2FedC4WH5M8OsnRGqSeJ9wJT1xAZzq0Jx7ruHNeqbCUBSUpwZ24k8vd9CKbmzeQGrBmVLPZ7oBORh1a4zxRwOV5wlc9FHWC6vSiQHGAbd1g1eKh8QnMMRffjaw%2F7J3ohcCcplz2mxQRNJG9fTrUyUI2GIKzDCYLkAeBvIesPrimDDX7m5Oolfzx3lKGC3w9y0&X-Amz-Signature=336fa02393fc1563b8e646e3cf126e15d7c41e0d7e541ab0571f4696c51d8c2f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZA7DWTU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaJVBmEkD7nD62eI1WnT2hzMnaR0BpLaPuJTpiRjXzvAiEAo9TNs4cq3fgOvQeUPXGNY2BjaxjwcbJxI4uL4zS%2Fz9cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNeDj6DBVF2BrJxPAyrcAzjKbDHxDiW0yPl9gDAAKoezdTDaOuu8SA5%2F4Qy480wZvmI0B0IjmpzenM44EcfEroRa91gsZTjBL064DTWb2AVtDzbRpEqI7UO1tayW9lZLKqascXozSjH6GjO8b96lc5JD0h7v7n4fj87%2BqlChIIMX6joxK6ntbwlhr3JQSMHN5x%2Ble1m0lS%2Bx48m1aNF18%2FhJJvmpxudfQVT0ag7WkPc17zPUX8xlK4hxo3HHNOS5CPhLfCtKcUYaD4b18c5Ul81sUbjrlqrUETRVZSf2u8QZvP10n%2BCV7y5KSHWm00qy%2FkQ9rGuDmjU%2BPFT5%2FSfuXtJSxklOSBAyqDfKRAj6X1F%2Bm716N1eJ1VwT3nNfuw9aQliui0sR22MfQAiIy9N9Ew0UVjGkHBghQPqpMeR66vQodXnGfXPOzIi7zZo34DPPODUGDLP3ChznJdSJQZE6cPcxQ9rX%2BZy4eKEyveXxwKBD9uAKWFVBAjv4Bq2x2SrXDSvsEC27G5PG6xwAQ0MmjFVT3xwgKVSZG90QFfV2%2FZXeiu2yNCz%2FpgF46MYrtlVpb8yiAa40dzNp%2FxlJ6iYBl2%2Ble55pUMHG7%2F39k8Ep7Lzde%2Bf%2BHbYZOaDK205U5JKeUGldprgsXFDUWMVoMLefyr8GOqUBt153MqcDRewMOEL1Jnf1WX6%2FMW5Tb8UwaQVTt105IwdbaJ7EGYXc17AKrxmz6pL9Tq6PIap3mo6J0jOnATftBXay45S3ATGUKh4fAI%2FlY%2Fd1EGPX54e7D2i0c%2BSAGM%2B1blbU6fJp7gaEZn6iuBn1tUR85OutJ4qgeor477F0UYpemUzocoSGias2zJ3ttO3lWJ1CadeRlkJVPaVTDPr2d1tdul1B&X-Amz-Signature=c119fd2e4b528bfef04451b1466d7eeb85fe463de88f058bbdc84206ff964fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
