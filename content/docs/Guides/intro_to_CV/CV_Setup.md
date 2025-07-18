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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6Y6KZV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCJIY2OLl3O0f7tUsLcj8c7iWswqxE1Y1%2Bv4d5MxcU%2BbAIhAIInXJscoUyS1ECwBPPaR%2B8DU%2Fum%2FUe51tJki2PZw6iRKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFHxw5aWa7yeHJULMq3APqqa%2FFRyaPneKH%2Ft7FZHp%2BpYSRUYOfcF4EUmFwD4nzHhFsBmUN3%2BB88PYgbrUtZAPLbwIN5R%2B%2Ft9oq%2FwmpdlFUMXjGaNo53PWOoyh%2F67hR%2BJLJgHwFvyQ9jGyMxfvQG9kxaq6fr9YO%2FBwHgxuzkaEIU7EnzWfLFD%2B5oEiP6NrZ%2FZbCNXqbn73n4pvBzEVEo3r3s%2FXqCN3a1a5FmgXJL%2BLpd%2BFy%2FHLNYPMahrM0WR2s7wsXG2jEjc4N3q%2BsDKazXKVKmExPsmDFOgI43t8B%2FasezadMYvvpAJbsDRjnfmitZUEa%2BOe13NTwfIs4FFtzhIa5x0GTboEukhjqPIVaNUXaHIiijdZGX3Y6OKFhEEixwy2tJlxnMJsUJrz65fXYD0NX4CYU%2FZvEvUY%2Bxjhdm2LiIR3yrIBxissz2iPXelAiuzOWQCs3BiKuBv0NZA34yExmvQ6KPobxDf8k1SxoLEfohb%2FqICmw5xzxnO%2BfB%2BoalJ%2FB00Co0FcS9DE8iDHvhLjtiLLzjHJ%2BpPUZu8x9YkVIs%2FWjILWJapUzqo6I03LX3emsBc893V3u3rphbeKKHH9a5KO%2FaCqRva74u0CxDK8gxEHh0BstNFlFp7ErIvIivIN0aHbjg3daB8T5OzCq0OjDBjqkAVWfec25AeJ2wk3CFR1qMqSLyFrHNWJ30iB85BK5UpwfZqPvyyDKkUUPSYCqXUzWmVRIKIYEhYdw%2Bm39RjhAg4K2dU3fmQ%2BYAw0x2btdJLaachtuMs%2FhJgVV3nxlIuByxOLagNwqs%2FYvpDHaGCDF4JI2IkS%2Fywimg9mVhDUrIW0qZFyrTJ6n5zUdWwbiopUfXEjIjXSxUqfUHc8zQ%2BmUGvpvnInF&X-Amz-Signature=be4bf4f79e14d40bc50d3f37b85ffff64eb6a34109dff1ff73f216478cc52f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632JUHA5D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCFR1DXaSEtSdYUv4hy0O0rQbzvJclhRVrzHb1W%2BPLf1AIhAI9g2jIJ%2F4U6Gkmvv3FADePIuooubQp6YKFwivNj45AcKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhJMgBJHRzNkrU4kq3APo9u7ZAwSf%2FNuQ1c%2F6jjYXuhcFI0jBtPkRmHLV3Q0Bu1aaMD63r%2B%2BaNMNo47y%2BfWpE%2BGYXYEi62Qbji1K62SzAcx1f1l1hGDRVuuUeoEgY5pMPCbkH007UW%2B5HZWrwYOK1lZqZsmRQPhsNTOURV19W%2BWk%2BfT%2BgZXFSGyBIg%2FlsLTFeIVebn5IkvTOMAQ9XN4meNks5uoTbER8gR%2BPMuZ9M%2BqAe44L9AWsNprrQZhxZzHirsz7tGHuawAt9I4aJ%2Bkcs4GwtUlfOvuL6c2msm3ELz9ADyOZ%2BLf2Cq4wRKoIKuYaTpKtIpaJu98UlCZtGCyOq30AflKt4k%2Ban2dF78Z9JB%2FP9zjQfZJex92N2vmpFz9arsNr0QoB95f6Vde3vDFm9EDA%2F%2BSHufiDE8dWsHvrWXtc%2FwFBLtit1HsSsz9fy12Zt7GixBVhdvhG3OH08U%2BadD62c9gutRCeKDjibNGdKxVT5Vq%2BmUbi7bdoIY7vtZe8o8180N4Yyy5KT2X6L5pTo001%2B%2FJWyFGrvvmv0uRta30SfOG83CTi6xXGGc5GjELdSd1mdArjh1i%2F0%2BzEMUE0LuGKiRxOPeEqPjfvz%2FHyBHOZSERAHkxBWCpYRqcd%2FMr%2FA350BY8YEjlHNfTC90OjDBjqkAX8vw%2B3ZmTbzHS3K8uUYELObOgoUaUfq7VbRcx0y1BLNwZ2xkJhiMfSMjidhsdwpBy6DdUB%2FHghLwXSru95J0d0cArif4dSPCvE87oJgnGHOO1cA21yL%2By5alYkD6Q3hNttwn1t8pFwxAObd3B%2FAyFWu2fjkT09r%2Bqe6jAaIBBE3ZO0O%2Bn8l7IlbbnLl9UgXEUDYtqwvXST71NAONAB3sUzARwIx&X-Amz-Signature=a7a2f4f30c03b7c98b418a42ce76e29d411d51901feaeae03393e3b9273abcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
