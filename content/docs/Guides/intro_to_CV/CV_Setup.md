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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFKRCJQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHEBl5u2WS4GR6afvzydoLX2bhACCya8vSPBUpzwWuNdAiA1p2eYSklHqAvKtqZxL7c1l2J%2Fc3rWsfPuAg6uLh3HmCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjmIIBteVu1d4F9pKtwDjUfdi7URPO3%2B%2BVQyXc0Hu%2BiNiCef3JZ30dgMQxWkMu8LcgACayFVTGUp3u84sfgjxcd4V%2FxGZbT2Tii8%2BpHXnuHE8HXeUFRMZdtSYnIHpGfXs2r10rCGFVOrELnxfkudzG1Gqy1QZGLj5zipHTRWvK4JoYl38Bi6N8UJIRrvJWQcQBr1M2VxJT7Bp%2BIeEUgXd8%2B5z7V%2FVEChehayBHsYTIrwRxQRoCdfvfHFGDKrBrzJVVID%2FXJXLV3x8OrEMKett52gx%2Br67%2BDvx2zuM54vKzw9V%2BQr8lNOxLSjAfrM580NxQPdkXHNyAl9j3xD3UgDBi1MkD1E3OTwgIUUV75q8roTROKFyCXcb9C0FevtdsQ%2FdrdBjgOKi%2FIw%2FYo%2F0lneSDBnHbCTvt1coq6Lg3dr4PPRn8lVqnFZvoac07ue9o%2FhYJMHSe6zcztr9Sw0YP%2F1jRJ7wpZiozOi0Urj%2FB2MLdw8Xxv1L8U3KXKC5vtdQCc0yPYm4XJI0ctSISZAZcAzRCFwq9OhCypNS785GzurUX%2Beee5cL5Lo9IFUoJqxA5xnAceK2tTMcP4fpU%2FqvmcSb3dEdenOyGtZHcxhTjbW6WqfKOt91l%2B5T0eyiQLd5WtOCO8FueT46maAuXgw8rvmvAY6pgEWcJyTRlXQTflu1lLYvQoigEuffi3GGXpmpc%2BvENgGl0J6kRfIviPc6YrpqpgaB9IG92KunRNahjyZIDZNi6%2BD1QIm3fj3Y3c%2BhTVOXZgZ1MToqHS%2FCY0oBLLKgltEfqj%2FeVzmirpuKMgn%2BI%2FshK51S0WYKNNkPOJtHcXY8nxykBwjshMcWeI02MRZ6FqIAXjUYP5dplNAqFubqBootL2lApyvW3wJ&X-Amz-Signature=77eb0dfdb20dba38af1b9a4731c23bded0ab44210e91c44f53ff995951226b1d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDSNGMQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDkycXX8cBmP317FwiOJReZ4NhvtA55DtvOqPGmHxHKGQIhAP9e4qTBznSuTznp%2FOlYpG0%2FLoPCXKO3kv3Le17ncfsxKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHutjOFBg9QITCYnsq3APKx%2FQ8Ok%2Fh84PScVAbVxXKQaaAJtXU39xAba496AopubDkSWkyDjajHhr43ZVHTEwptT8ofGYFD6oKeyENgAvuzm7kL1NF%2FumJ5B5mP%2B1gnb0q5sQPso8LYrKoEe0MUEzYxWBs3kBCFN3X0Tlkh2wc2vWvMJFkeE9orwDnsIALBP3LgNYm22ltrld8N3%2F3ePYQc3SB0cGi2wukdw25lXKAsbX6sMPWs3xKcko2w2sxjTT3AMXJxaDXkkobf2w7atAvd4LFe7OUs5Qscd9iU8WokR2mZOwZn4qJDztsczfm6nckBTm%2FhmJKwKHNSGiQgAgbxqeX%2BYJRCxaRXW662dLP%2BEzL2wgKwzN1SxrK%2F3ivA7NeN5S1Op%2F64ZjJa8N6P5%2FUIKxKNEUYAeTnswMuSf3cs99U5kfs6%2F7ZtdSNEnVZQ7SvSCv9V3HIafkKu7%2B6f4aZ7epJxieb%2Bqgd0tOob4of2yY1si0jqmLpKU%2FfsNPE%2FIikpwob9cAHOcltph2R0ys8D6XcsFxxp7RbDStiahTWaFIwEsntSDbvey27OOcoAX4BR0oPWHQJVAfZ4ZiBxrdT6zVIwrAUJdl8v942Fbj0oQ6R96c0jrNruxjdphSwQwF3iRv%2FHSIyRxojHDCFvOa8BjqkAW64zuXhFX333KUfoxeYZnM5JAhkTIGiws4ojWBuqjODmsI4gYHDX7%2F%2FTh5u2xfXdPte91YaUmcT78IqZWohWVZjmm%2FbpOLOX1J09hQ4XLt7FJeY%2FeLqy0iBW1G95vqxL2S2396q7PqWbfA%2Fbp6kIOcDzBZ%2FDwYFXN1UedzOouCiyvMEZ2S9eaBMG2TNYjT9wo8A%2F9lit9l5GhlXLw1Vif%2BPCk2h&X-Amz-Signature=cd5d7d668cac68f9403a0eafc5ecf299497e6daf478d04925802c8e325618120&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
