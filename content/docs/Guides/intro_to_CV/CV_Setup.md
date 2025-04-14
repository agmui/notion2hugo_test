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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQD6J4DZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFChFbgSXRE7wLsM1%2FI2cyS9BbW7ZQEHznZAlPhsAsbQIhAMnfh509k6q2BTEsZ4w6ptXOnVcf%2FqdtotBm%2BIurw40IKv8DCBcQABoMNjM3NDIzMTgzODA1IgyLKMAnZGogT6DnBlsq3APk9Nj9e%2BdqIBabVpcMOb227U%2F7qnAXIju1kd51todoBvnrUkAHVMWHqajEVFJYu%2F99k0FMQ4Uq5EEjBvrVkMUJWsVzKMeng%2F7clZrE6E730MNJ9vftWLd9Ppr40RYEwZ0PzWJeNfwHu0mrlUpEwKBSwMPpYTHVcce3By%2FFa0Yxqv8jETO0M0EPTVCPLf5%2BVQv6WKAoyR9DXU2oZYG76coh5qeoAn7OKWm0h36WQhTItuyIGgHs4snlafGuOVs7CzkDVT9mD1T56prCmX4Mh1QWpapl4NoMNv287bpE0hXthDDzB%2FKrtMvi1bTG481XaGXAOOJGD31PES8qd8Wech843UkRceEwh2GGyAsBjYaRqV22mAVQaXFzvjnYM5KJrY9uWDQZhqnNsQ1RbGyOiJpedBmY8qFmrSOwT4eVDUevoXmBmcp60jU%2BBSMDBLmrQzvED%2FsljasHRNTQkIEk1eyf%2BbIsHpeD1N9ZH2TCcyr8zLuWI42RKGIhhyZocJXEpcxkpCW%2F0wMQG5CGgfB5i00Ulj%2FIl1wolsNEJejw3VgrFz4Np0MaZdkPaSDsUue%2FdrXrhYdSjUrCT9Av9HzblRrGJlSckrCyKs8%2FN5smOSwCiY6%2FDpZK0uoCYfuiWTCQqPS%2FBjqkAWojkICtX14%2FxMRR8%2BZAitUzm%2FtYCVZJm7l5lAy4pDrAxqJqLui3jcaWOJGM39i5nYKZ%2B2N3u9jUiVijr3eOzHDecOUKvdhdgLfHJIPcf%2BDqPocBFdgEPNniwrsBn4%2FZcociSwP0jQVUg6qc3%2F2Ya1RgdHjzJ6PDdbReuP7pyV92jw3A6oJs03WGTFpbAk%2Fsnfkg0LsVWL0ChpOODVx%2BZcmPqTQS&X-Amz-Signature=1bf77e8c63ca9786fa5b6c1ccd87bc386361cec19b834003cb7077e87f3abeec&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552XNMLX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoyFNjH53zz2ONM6TCZzzwffxTAF%2BxrpJo8t7VMuIUxAIgBEdoh%2FXNnG%2BpUsMzyUGMg%2F%2F%2F0TcYlTPq%2F4v58H1Lsc0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFAeDtvyopgVnw5EmCrcA3B6Dm4r3bvpxAwH%2BLuTfFGupxjbS%2FXrzzCfYhSx47uHWF3amkhxl7q1EewCNH5VXhN%2F%2BFW90KXGUZH%2Bza8Oz0GxNwU7Lc8S%2B9Jv9XTAV%2Fyd%2BGGwIqDsMHSsqweGP3O5%2FeVuDCOHSdhvCrPzpNV3BMr%2FPsSX%2BcanWMleiPbhP6a3p0IUYpVnoTkpCeg5ABfmtQvK5uc2NmWDP8kmRv8eLqdw0uE%2FIuRnGb5YZsV9sUyqKf2ly6bdhwzysu9NyVdDQ6d9F9C6lAjBgMlIdhK395749n6VTPCjhd5BUNrWhznYQmN5SaZ4O6hcOa7G4d24%2BPfMpBsb8wUa0%2F3VI6ed%2B%2Fk0tvNL5UzEQJlnaeSBpoRTksWwGdeKZbmzUadK5QYyLPsHskoVy57%2F1QA9S4UWfvJEVjNnSK0xcWq5%2BY57nCzA09GlcLQ3x2R2f%2FTF3FpM1upWRV%2BWkUJ3a2SBkS0MHeW3DZcv7WHEWFfxCa9HY4UK%2FXJ8COUCJS5A7GfS3iujh0Bic0rj%2FIatkw8o6F1kfSfNtVmxFbpGlv%2FYZoHFGTYdJj%2FhwPDKVOXj7822Pje96yOw1ZpI%2BOorDp5U2jkR7wbVEVGBDT7Tqqj%2FQ4sAJS4tCxsL7Jh696ScytsiMLWo9L8GOqUBLI1iAxuWluHrLd8qXV1EcuCNraNpFEkBJD1Tr6lL2UYBqpnvmrDrkGjf2bY0YX3S8pBHxZuJmYSAQKF64pQU7YPKErmVsRyK%2FLfdux1lRqRfbEDIhq0tmpGnRZTaRVQ6CjdMX8W2DlNZOaUwn1IN69chpbjvT75njkIDGC%2FnQUIh3kNKUvyf72D%2BResp%2BiEcJj2oFtSMepumrgRelZwZ7nCDj%2Fx%2B&X-Amz-Signature=80f6e6a633e7d0de01a16c2c6a27c8252b6da11fd166cdd527e8c7ecf3f834e8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
