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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45BGRMV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICmaSl%2BfsPRfIwIXiqr6uT6hRjDwWjuQmj7bNC8BcO4XAiEAuI7YXYNf%2FlvfjLfwbNmca%2FM8yTeTUJ6u9TCUZ05P0o0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDI0wXW2LeAHge5979yrcA1cxmuFVEWIyFRLoWX4dq8BUAWNqCgaBPN%2FbydxRJBhd1zahnPnRXfBqO8wnHpqpr6D2Iey6AnJ9SLVzt20RB0LhI0nhoh2gcwrDiEOWJv7rDDyXBsxoMYywKZKt4wuJSp4kqUMUTKtdvHHgmlCq4IZGiMXYrMIH2HBrnXlKYX1c4G2NNshEZZce2lusZ9QMTDpMN2rtJWQ8H%2F8hZ761BySuI%2FBZ570YmWuextWsWX%2BmlcQbHGiEv7gaaJjH2KVo%2FI4vFA%2FltY9kikf3UeSuXtjeiGVn%2FcA9s0qevwAOlDyiF2yF14uLRQN3OVJ9BVvoC8TSSRg%2B%2FL%2FNu8qtBAxUwHM6jQ5oJJZOHwiRXKX9V61gjIfpo81l7FIHJerUmslZPb7RInPBSWPUBm8aiAaTfLbaNL%2FQuCq%2FlCl7xwZCm10RlMo6vyYnHVQr9BtIxG5cDuC7wr0Yi7ApdhfHr%2Fb%2Fd38bFDPvFR9c41XIBuht0cu5CzSgAdiHeBa9tmSF%2FLL2VUgdwvCnWUR7QaAYajZh0dCvWrlMwpO1BsOKDh97w4LdarqU6wXnJWHe8I90bvHdm1V5wXgF84JMO%2Bht1lpjt78lmJsst5FabHW1iwPKurUfATY6zJMFPQXeCO7sMNik28MGOqUBx2HHZVGRt4yVH6lRqB0umpNKzTHlv9dRiLZyZj2y8I2d4f9aEhQ19CYL2oa0%2B6uqHCLS%2FQ%2B84qqx7eo0X3JLJWeiWcCAX80DfuqBznWopCr6JH1zfXsErWsxF0EvlW6FpJGXBQ2uhW7pwvGSjtkyDOtRxXCilRChNO9M9Kb3OBRklPagnAYzo6Vem0XFrgQeiS5Kawfi1oxL6WUTxvNTocb3OxNG&X-Amz-Signature=faba43a817d898104ceb632624b01e1ef262f487eec13bd3bbfb09209588d328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVER4LSP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDfk43TbcGNuFW0kd1e%2BNp6I1BWSOLPSo4cqa7jpOeIhwIgBoZgEzR8xW%2B0VyfovcjnaMmVCyYcgTNHNGbhZgltQuoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMLdEKKFuLXtbVVINSrcA%2FfkVA3xSuocD%2B8LLRiSk%2BTO%2FAoRO5%2Fp5t1RYH3ExleWQrhVxRjOB2%2FduxMNyO9QAlZQBnuHJC9vey0fdFjpes5iTLCIMBnIeMoC1EReQEwQCXqL5ORB7yisQmInAbrP08iJdcHv0Rr%2B05JoVhscdM65IiK61MsAJ7cVRED6yE8IH3ZFLLsq1o%2FeP5VtKTCYs%2BARm1iEdMuwk1aycuzHQzpqvs4Zcl6oYGsHbXSwFw0nBw9entiXuxZNFHI8NMAAVIRwNyL7YKbqR6z%2Fp7lQ%2BMYOVjP17P8ohtPuZsFxalpmvlTgQhrYYQAN0mXHUFAFcbd5zdKug1xt8AXnSyIcmXeStThhfFVdxURDq4984C0ZvJWWR1oeDWeBWtUSjV8Eb30vBHio4hZ9%2BXA7rfOM%2F71ujmIIF%2F%2BOfYsJs24hKrctwDF2UDdokHAen6Gy0BaCCtwuqxFdenOutdLaGk9HgXcRv10KWdleiaZEZaawUf3%2F%2FTEe4bjHF%2BU7dlM285dNhlVvOh%2BQiP%2B8ziQVqHj6f3VgSTb4muisP%2BRJVWxjPioviTTvFDdXAPI3oSlC8j7jYe3QABUZLDxwJG3gyWcc8Y4IijmQcTHYiL9laoLCpgjz2XlirgQuoUBYKpXfMO6k28MGOqUBmpRHqPFQEEGq0%2F2mSyfMxe4WSRzOwV9gd%2B0yWf3E6h2cBhEy1MVPjkY3iIVEK3aMlVrT9K%2BwE96YVCZS72QiNXN6tA5u2H%2B3NscFLhnnXe648K8PseJALRG1K7A8XQA8mG8SxJkoXgCwG2eWq4BcJY9F9A%2BZHpHrTCL7bRfNxKHDgtUILpoIdRZb4llWugmYLwxLzYq6Q1zgMbBlRCH3fdDqrXqb&X-Amz-Signature=5016b364acc65414875d3d68f34a9083a54cb600fa98bdfc6c2bd1b69cd0c1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
