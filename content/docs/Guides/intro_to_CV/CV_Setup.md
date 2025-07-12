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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZIKTA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPTW0SogrN0jjP3uValgFrkmjLE7YRT2y03qHrX245JAiAgQHaXBgGhJX4wGYgsYQYEWuCX1uQIHZoaMXtVsmMS4SqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeQdxtSIRCohO7NWfKtwDYF8pieKT9ZB7dAY7S63k27ojDHnXHfBJextoRUw1cLM5xc7QM7SH%2Bjrbqj%2FnxjPAFgilddHSafx5NqXZ%2Bx23p4p9Pqua3TH%2BnISSMMRwJiE2xC6F%2BwNkpj5EkQjwNjK4yY25cXv4E89QrMMhRnILO5o9BxhgWDPMnUt4JbWDc52vzewz9CMl7AVQn7gRyq2iAY1cSlADJPA4xLHcpGkSt2EjeYaumOhQFPsD2mxFUuGQW7HTAUq3XxdWGNTHly5EsxEivl9Z8SBMHk23Sb1KqXt7IH7PdNN531u4pjB81NOKHLWiyy9khJj1wJpiNWAdk8i7mofBgns6vxN%2B3Yk9lJ9SNDd7xqdOdc6RcX%2B8v4JXV5EZfTyaOry0yXy6VNTuLCZwrxOrHODF4GLyFfpbkY03e7Wtvo2AJitfQKpkCDr6u494iRwFFjmr%2F0hnhK0phOA1mNSq9ehl9gbtjhMdQUMqnDv91nPSc9Cgbs3SgTjZbCtHBfjZONZkGMRr2ft2YGlKx%2B96vYQHeOvcIsQswlXnYsRwMUJ1xa%2F%2FgpIIuq%2FzNh2%2FHDSvX7bFuMzJCcY6SAWWrMhzrC6V2eT1ROd1oPksLZPA%2F7B9RSpu1vEnA9xh%2BWGFmeEMxqRVZxcwvLXGwwY6pgGiH3cniSWRy%2BkQKwTkRGgfiiK2JRrp%2FOXDUUQ7usAswRMJ8a%2BeX3niF1Rj81eTcl3jvzAbQ9Or%2ByRHLdgkLiJ8ZEnScASGLqqpBkeZWHO6EpTKT%2Fs5CgtBsRL3%2BcQ%2Bg5orjwMB46QJuk3qKRUW%2F7fGbQNaU0gd6KRCNaMb6YbfzZ7AH4AQCKEYRwRKjX4HPiiMRhR1XFnS3WGKaIOG8xFUKdX5naHi&X-Amz-Signature=5a46cfe5ba37685f02b841def5701c2c1d5eea49d788009be8518cd48e656a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675EZQGRZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC63Cc9XxrOlwAPcSCHqDZ70MRzCJ9L%2BH5VUvBYXWwjfwIhAMQpfowSSXGcJre1xX0LmzKXSvRd0GD7ZMdQA%2Bw%2Bs9jhKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymTaotq4flVen08nQq3AP57mS9sHqNFbys9Mr3FtyyawWX1hbXNggasRQtSXUp2dpM2yKsbKsZMJS3GWyKubPp47DCf9K4w9IJoa%2FV4Xlbn0fMCucFyGKAy0W2RAWAluA6CJjEf8eTAnQ3ACUw1Y9TPQ0hXkmon9urgLJ4Gi4sRorFQFueHsd%2FB9HJwfMXMYuOEWgtIr3hXcH81reoldJaAORS2d7eJODxYHMLtThgMUm268Ddenxdh27H2TfEcOkzlczSwsTaLVB%2FhuUAH0o%2FNeAYUpgfRrnOlgiSE6oEPSSgs1wLZNdFofZFzLCai%2FiqVj8TJb46PlRRleVuuMkUrSI5C%2F6NdhPocOdQOOkwSj0f0wjVslebm6slT3x%2BPHHGZnykHhHC7jdsaPP%2FdYPR4M0sfpRBgvYRopiX%2F9yG6PN519ZxHcB1d6EH8ByqGZ92tJS7HylbfENUQo9aogz7AgBwE%2B8O5ZjoxcU4v24d2puRgTKn8YWsGJEYWSPuqzvKrGG4E0eCWdERPmzt4ZiDyuq9ZiUMMu1xrCkt%2FzDE2BYx3B3ibZMoJqovx2FlnYFMECPqxXwyHmNLFPDvK1FT5f%2BhnNi04ZaKWmWBNYkWCL7Ou2M3ZMnynv6KzO3%2FgrFfw1nFcO0XaGNHRjCdtcbDBjqkAU7DLlkeQ7kgRAhwl6%2FfOCCM4FyCnTuLF%2FR%2FZUHhtgKJfajTXq4n%2FkS6AjDGKQAXbl8PQqlIechoTZvQTOqwkKxF2VhIuYKC1S%2FkCYTT%2ByH%2BBKFbGeNDfS6yR18QwwBwx0MyNuhHBCEJYMQSaRez3j9lSA13uixZxWk6JqCEvvBeZCoK2yOmPe%2BbUkBgDRD%2FsvsTHhuJQ59MKBvb1uxs1OYiAimy&X-Amz-Signature=b1213dff57b29e0960dd2f7b7dc25d5a8b8d316437f8c219c9f25aed72c81f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
