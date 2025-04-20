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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OVZBVR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDDXYkx8yOJc%2F3fvfopFESdbqFfLWiEFDBv4rw9SJhsPwIgcbL3uwlrio3sHn1JMrALCj6K31KvOKypjlesRRMpOosqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4ZCoo4uL3PaFc22ircA7efPvt0v9%2BvVANcVgYxeMz%2Fi0jl5xWmpdLCG1lya7abPqnxU76GH7lkhlMPzsSNpX%2Bt%2F%2Bz0mwOscKmYGw%2Bhj84vNV4ZX5V7M7ir6LDP12OaVU0wiauYGEcwllIMp206nIvGFMhZEvTP3M%2FrpUjJklX1CTk6ADg5IMh4NBAInuPJ8uP%2FTlw9I2DikZhFRcBnfIA9VNEhOT7Vyflm3FDQUiHvuwNXCBDEq4FTx5S%2Bj4jyFUcWbjXXvpGxFP14GSgtITL6SHZIYtHS4501sCiMa67mQACNP4XsYQGit%2FjMy%2BF9EN9NxWv76ok9rOdVB7bZ0Pw4udAyfXSRJqItJfw%2BtaRorzct1f1KU2lMlm%2ByUoNfgpAY%2BowpbuvlKI4asPklRFJKlnN3WfsPWpTyS4jqHkZk8PUt35TosmisMIweH%2B8lVjOzF4oaQfafnZmaftCnqeyAjESqbWOhaYZv1HXI3kZvjEYHqwHQKdY2vU5OIDvI31CForM7u4AoS2hDmArxBvTP9KK8X7kc6KHG6bKmsy2weIEnI5W23LMCD8uzCnobd77rBoXefCZRlGeH%2BCJnQXvCGPS0KqOcpze3xxuaEglP4iJtocQrVyTRXzL3Y1JDH3nG%2BHMadpgh48GmMPSRkcAGOqUBN1C3sYC156HRFvIGmAcl3ZzNod3z%2FwHMGJNA9HryxSPnpB0ADJiBj8yVix1nRkZLLNFMHdbZTWS8z6hhV8YoK3kO6x28nplDVsBaOi%2B2JPPAUOyjou%2BnTGTv0wUZydU%2BEJluzDmLrG7U7fzMg3qjAIlxHifEzmSqlxEgg%2BSiBLGgKyqBy0EPjCcBvW7aFtEUcg6Rxlcopp%2BDfwUcQXpkJsDpAfHn&X-Amz-Signature=7d80f191e36b19c60e3233117e36aef5cc12188f017c3b74994c3c4a8626673f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATV7Q2O%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDsx6PaK7LCOs%2B%2Fa7I6YvFmGxJRvKqPXQQm2RFCOWz9lAiAH581p%2F%2FjFyvbXETlW1CN1OcnHbSkXuWyaAuy130x0fCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkZF%2BJvywct1C8JyKtwD0uwEw5m3vObASW1VRBaiYtvALhsaWxDXAFL9XGyxuaxbf%2BTWuQcvKENZTcUYFf8MsArwSV8JF9v%2FhzSbZM5UhOImei1WbYS%2FIdx8WI4grygyDzAOyPATLKEDhY0k%2BqDsjvtb9WAj7%2BmKYAdwpHSMPJb7T8XegzUnJcJQQfScGULy4pFMeMnCOCaLNbIWUzXtKw25Ep6U80ycNOdoih5XqNaC1U8DJedpTf2SSfWxmZCmf7LZmXrUx8V7pAB0AfdKZI%2Fy5wFcxuj%2BYKyY6fXGLC%2FdXqd7k7gxh3G7JHQerSeH3XLgci%2FOFppKx8e3cidPsKJjqJmiglhB0h76SMnR7n4hxJVdEoS0hLiR9H91yJFojzth5bS0oz7StCN5HXVOVCdVbLrT%2F3bEnTQu5CcroVs5mlxYpEvjd224GvLWlkfe%2F9oBgxmRLI%2F7G9iwUfNjEb2%2BCVGVyOuWkW16UyPM3Crw%2BZj9evaDkpUORzeKFSYzZoA3%2FuacN6tJFAiHLyWSShkL%2F0ZXlc7n4bGcQ9YZwKg3o6JvWq8j88ex%2FCh15Ruv0K6pxzxD6B1QHh5ehXEbjun3s2AZ1cCXSM%2BX9fQ%2FrAD1cfvU%2BHz3kOIEV5loRj%2F4%2BNSH8d%2FL9vdEa%2BYw7oGRwAY6pgHa7biYa40PfJuXvRn9lvckl8GFa7u3Zk1M3vKHkkIyYVt8Q6xXI%2F4P4Biv%2BlPde19wZE%2F%2B8QHbgbYwAsMKcfqsMoAObprFjOJ1z%2FXLkk70Yw7Z674AVao42f4BaWMLfrvEjapMcMwbp0%2FAfAMzjGReJLIs8tBI%2Bt6Rpo9QWyY6A%2FBPOYWi99EBL6nIfVxAoSoaGRcwX1gvDf3K2wPFRzad0Dh9HnSO&X-Amz-Signature=717dd7be926ea249269b894d3d3b65dd4e06e2df3c41d49bdb6d976ce77816ea&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
