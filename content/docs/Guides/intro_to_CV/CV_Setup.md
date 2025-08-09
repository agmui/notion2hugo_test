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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IE4NQT7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD4r4IMVIycekfryKuCg91y0F94klivMJUEC6Eh8FAG3AIgPJgR%2BTI1imhuGV7LGGIXVFHBsxApHfIDWbD2w7%2FXMkUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOKPydh7QMszlyIKircA1wHxXfizSiz992RFCZCLTwDN2sEvnqT0WQ5bIPuQKAKC2KP%2F6fvPsS%2FBp6WYYk3FO7kbC35uex57V93Jv5VRX9tbXxcECv%2BznNtn%2F%2FoSvdhsgL3cpoFzHADuf3lKmCKowtK9%2BnUUo63ESb5B5wVR0KSFNDJ8AqL4o40yW3ZdWD8rWRh7LHiWyCCS8EVe7FEcDmv1NJREn%2B6Kqq2MGlW0z%2BbhpDH8i%2BwgA31JS9JqNyMRSQC6syKtFkyl5LP4x36pDe1WcU9NGVnuh%2FnZCQEN8rl3yAgiVKtKCIEsqPeZr137iU%2Fqus5GikVFRMb2VCpU6eEMjRdQFli9U3Q9cA%2BR4vwCt1Mth0RDl%2FQX2KIy3WFdG3qrIeyva6XULYecbaPfGlupZcVCEYlS4XM%2Bwm9ueljPDCI0v5K4yrY0UZ4LpfE03t3IV6zjZF4KLNemNWNuh5c%2BIVb0GzrlXHw3n8HIMyz9Z2j4H5it4hMfDCJzeSaF63JEUTFfczpFh7bs2C7AsbTElnNWaTwwJAFnyDazY1zwbNK8zgTaBPhGk%2BJCPK3crojG5wHcanpKCymn5A6OKjGlmAe7k%2B0bm7Z0E4tDxI2rbj2tS1UJ0GxwvEOdCpKDEQKKdx7rObFfmmNMJPF28QGOqUB3kdxDov46GulA%2FRccOg3Zqf0ozgPbK7h5QQJKIkpoUIYRIv%2FhTu0YTM12IUPH2TibJPvx2%2BzGFacQB7Jj7vQzUeK62ofPAY5DpoEHN9%2FlBl1nj1JBJu8Xwo%2FSs%2F0tcjtQu3ioSxaPH%2FE9VEwfSsiKP8bMFoFs7Kn%2F8ZeqFYHm2PmPvcHPt8R3ezHJHGgrewVjWd7WBFVIGmLd6TYbqLwpd7cy7U8&X-Amz-Signature=49cff31efe0177562144a16300ba69d8c62d3c07b5a3c0898f7006f5b76c65ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCI7SRL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHDim7RoH%2B5IdQLI5Lh%2FXFVWfXCFC%2FALlebMiaIAfFMaAiAq8Jgoh%2FIlNJa9YOjAj4Uk3oFDubX065vLMHGEUqhRNyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5GS4ufalqA1lUneeKtwDNoVXZjWeAajzAN45kHYyGaSAZ%2BgLfnD6DLVQN5203gu6d9KQH8904q8uSOCJz2Z6lvWPltbGhCmZ5lwCEHIYctwafXTghW8qZ0mEuQyJ3uvNqkZJ782K7HtxqB4c1Awt2fGE7QQUUejENpnF7FNznFmhNrUCHNzd3vmCBMvsyfmf45BtKpxH1C2AHWhR2Om7aAiy8KXZr3W7%2BPQIvwWg85%2BIfSnJqZ84s6j0clUX7wONl2qYxhB4B3i9ig0PMhxB5YcJGtunKqotSxrN1pff0AY1rgAllzQvs3qA6Y2RmWVe5aMFeN95YiqnRAmPnxo%2FJdLw10yWJ3lxPihtNjYQWcHzzuTegSPlnBvFyMaJpqdfhZ7qqlm%2Fk6JQIKKKdP72crVzvAixzv288Qv2WDDd78pWM1eVhLJO5079MFdnN51Bj7YGUz%2B%2Braxq9WofIL07JRQGkUICNhu%2FQwJglaT3gqxWy09MKyav5QXrwKo%2BOt1BPXXkaDm2tX6BJNZj7EHmtz38lKQFgoEl%2BXx4kWSakiH8yTzoZR9eaxSjafXfhB0wWIaGpa4AP6Z8WOTMoQ8M596DNS3mlBhwb%2BErrm4evBX9I1bJ2BvBAXuuXyLoJebYUlto70snwwQ3pS0wp8rbxAY6pgFZlGwhxMpdsmbGcYze4JLKvfmsQ%2BGBuBWgAPNELAwEqE2GX3ZnYJLSEU%2F13GzP7rrXtMjok5iNuqv1rtQPvYfO7aMethrQa5A4ZAnnCgT%2BcUhUfv4UqGYK1b7mVd0Sbs8D%2FBi6DlFWFuVmqHZld%2BoPlrLgjgCATwHsiidAYcskOP2VCGqJx8mzNMofdieRJLN1z5HsQ%2Bvb6FdZdSiKsv8uZQx7My54&X-Amz-Signature=1a0763650cdd8cc3081ea2e82182980db1d12dc0fb3183075c8d6cf826583fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
