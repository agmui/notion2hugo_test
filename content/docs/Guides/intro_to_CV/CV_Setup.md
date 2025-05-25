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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DLEX2UM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCHOP1z6uyOMtsjCGKjzL8cWTKHLzdzemJLo0sqJd3mGAIgMiHcrjqkLQbXHHNDV51i%2Fmg91%2FfKzOjXpB2lXElhrBoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN%2B79bxZ%2BejEotbAEyrcAwZ9OSf8gRg9lgI89WN2iPw17cDo%2FsKquQMV2Fb90yAt4%2B9SQoFDM5NGdn4th5lcqkJT%2BbOHI18KtHyluTZHOkS6C0cebova8lAPjI5kpvP4b%2B2r02sjJoIjgPGAZbedGrjNJ2iGXdp3bNiSizWO7qOPjg2Y1RrFIlJ8456AUt8P7XRxGey8QvoZcMcSbjD3dywJMFM8g6sJ1wW0Q3%2BlN%2FCkPxIeHgShc%2Fip9d6JyOfJW76GgFkdHZL3wX9t1%2FWD%2FLy25RkTJdUoVnh0rdkxdgrnrZjPFNCUWNtIRh4MrCig03oq7ihup%2FjMQT7IsSw4jVoJ1tH%2BN%2BoV1z6V0giFvkHBrzYyaEmE0nhHMcXEtQqQJoBTk7de%2Fy84o5sWht26iyj0K57zYMsrgeObPSq42GvzOBfgR%2B2MY4Yv0akxiYKI2tzjPwo2eKFLs1o9x2xeSQVouVy3h2l5A5fxC7kQBFr4St%2FbaoU5U53a8jvcvO7j%2BJ%2FVjYtxV%2Buk%2FbnGKQ7UAasL9r2%2FHQWjBtbKr%2Bbh0Gn1qfjIMOoohNMf0KxnRvEMT469Mw2jKiJyhS5wACix9NYVrFUNuQ3DiH8lm7N6AjqOg0NhH9e7OzgEAlFHexWWkrqOkba0EcIFO9%2B5MI%2B5ysEGOqUBJ%2FiX66mG6qOhApGrq%2FDlTFflIapVD4%2FpJtSj8gdTOn90aS%2BFJ7zHBNc2oQm5fghKegP46TYQy4doRBobQsyLBUAEzy5uzjO%2B%2BuYp9vioXneRB9PYHmIjwQsAQVu2pmO5x3ABqn%2FEwCVZepxCKiUFHXRXdROojX5iJKOiRsXYH6fPDFg5NZn1LAmEC2rqUffuZmAl4R47y7nUih5%2FjTrcyQ3pT6UN&X-Amz-Signature=07841c6a613bf076b8df9c359ed7ebce0d12fb4b5c5b609738c4c042680d9bee&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ6QN4L3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDIWTuo1XQvkj1h3KtFHqDlp4GoAGexJTbYqIsHoMEKfgIhAJ0LlaWlWmKh7ESHsWHMQmHN7Faz3djmy3CjWHC%2BGZK5Kv8DCCYQABoMNjM3NDIzMTgzODA1IgyLDUplhEtmsRO87vwq3AMLU5AnZeAxSMpqTDrtKN2nT%2BqRL33cz%2FffKvs8Y46R6ueQAwNUsdbcglvUGE%2Fq1fPiFbQorTUZMLSTJvDLJt0umOT3%2F%2BdqNKnjnWI5bAJgDOvZF8sMDhvafQl9X8MedC6m0LXARQTDVpGJJODCHJ8fke7SnDJcYdhbB17fSUhBTzL5Ln6VGx9shlRM754q3MqwuuNtzNhD5seAVAPYmSLciLj6z%2BSMM1zwA6gijsoFeP3UE7bjRnQ40XMnhcBbF9sCmF7JQegiIAayrq%2BNPFdCaNmXQJOV8SvLWKcOaaMCgQVhm8BqdmQmnQ9dCvUsv5g4JMF0BmQcmH%2B5xQ42mGmkOvPsA8xV8G6cK3yJ%2FJL5Hx4mrC4hd0KQvKeJp5dX%2BNP379MWdHyj96mnSYdcJdSPLW1%2B7La%2BtYQX1p94DtG9kDi2%2F2250mcwSaFmyUn9Yd2v%2FfLrQAT5P92YcGS4NkghCT1JvidY8tcW%2Bw9rJzNAlhYOAwb%2F7WfCtS0%2BzWVlYX%2BFumFxVIHn1UIhrqh9sgj8JUBYLxVseKqW4V1JgO6pHbZ%2FMCPqWOyqI8rHko4Tl8GFrCs%2Br0LSbk3lQnynLUrJxrmVw9AwMlMJBOshpyzjHeqH2HHcTAlXWyXb6jD5uMrBBjqkAcxzr5k8Gk7QDkkURe%2FccE6LYf6OR%2F6WacU8d5RMlp%2FtN6co7kvj5ZrLJ2nSES%2BonVlMVaNOn2vJdLO1xYzOirCBf4MLgzcmLwRwt8pcDp4WKoAFPU%2BqSwtDjZlm5YzACAPXT0IG5Awv%2F%2BAgLo%2BT268YyjU6VNVuHNJj6nEFmKccc1mWNIrXPSY5fvySEJYYDNtGw8z2qhS2fDBwmZgjR3wsMWiI&X-Amz-Signature=0f537a133c8815d24bc42eabd32f9dae43a053a71d0eac788fa07d285c86ab9d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
