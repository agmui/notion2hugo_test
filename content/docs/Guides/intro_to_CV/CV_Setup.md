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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFR55KS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHn9p1OxXVW6ID7OhOdWddgyELnRemyhi5a1mHHJ5vs%2FAiEAxmEjnyRdNkksBvcUE4pwlXsSU3HSZJYXc5HFNAAafSIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHH%2F9diC%2FUygNhBL%2ByrcA5FIwtumhGhSfNLZt6R4UkhhfKCW6h%2FsvtMvhdBsInAB%2BME7tq9gSUdf7te%2FVaCZYf%2Ba%2BNZfQrTskEbl8fOtOoIvNfdWdQ5eX0H9LLMsa3DIQAD5ZOXJSdFf1rb%2FKd%2FJO7clxbt82%2FfX8aRnJzFMKctqv9oH0lNXRVhRRJ5rVSY5DiYdDd6AXaD%2FoNU4vsT0gF94LH%2FhmEyGzKHGITmwZZEGMR7AHeQClmyG91VxAW0Z3%2BRxkzXdVpwAOXuaB4mJkkEfbtetar%2FaRffiSlKImllV6pGH3Ui5je729WenianWmqooJzNJod3gv4uTOi7I99Dbvo7j633S6hTMZ1SI%2B3qOV93PER3ywWkZbOduelNTCQbX6h7V0GQlHWeJuQvli5pvEVb9i1SiKRjpncOaxdsToHIz5QCNtnVhbbKqQRf%2FfeN2eKDYXZOVzpjn%2B3PSs1YfLjJyLviZQ9Wk88FCmLJ0XYIm4cgtLahMVXBm7ydnGWDWMiT0YGC90QUULn%2B%2B6zaxModxBHZUGhPbd0VVnlURPKdJSmwqXDauCtSG1h%2FXOqOBK0FPnwBkX9ul7eneOm4nEfU7WQ0cdtGgZtCVi%2FuBScQUknAT8vucUH8WlO4Bdw%2BduuWFFECD8ldLMPvuqsMGOqUB6vMNN54pwSUD3geYa6Te%2BUMnTKjJK%2BwSYFTiu327pJ%2FOVwvt9ZXMXoYjsliRsHRLrcieyfo1HR5UPcmhaMI6xmWBxXpWj0A5wgRCN8VpV9J02FWk9XFmJGjW8ZhyUg%2BeSAbH8%2BQ%2BfaxMCFXC0R1qrkX28EbDN0odLERLvclSRuZQl5fgDbEF4%2BvQLXeMNMiaQ1mdCW23Lofqrf0mBrBQ2sNvypZ5&X-Amz-Signature=b504d116a81765da41d49f92d24b3cc4795f0ff75d4d76f81755b5b9fa8fb9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF76VYE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDH%2BO4rR3j3ku5eputO5Vbp0sTRcmSjTeeq73uaZAZ2TwIgH8C2A6cj6vnpFoUnY8MHhLk9n%2FsNoCyqh1oMqBvDa%2Bkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMz%2Fk600FpeaLugkOyrcA%2FsmokfZybXaUGZ%2FVex2cX4M4HqoF6CMmgnk5SjEmeNgzjRjMcAE5xvpC5nkHgX3hkwZG9ZM2yTVII1W2BN3EbC8ZQILZ9bYmunyJ05GA266ozpT18JBmVe7YePTEDtkc7Bg9x3WT0auWvl7EUJP5sIv7aLdK3VzK0LlkjlJbG8MKZKph%2B4dKEtxZl6cxaGkpyzCR%2FcZbxldFxD%2FJ5uXZizc2En0wJTW%2Fir8pXG9NtAvoeJFiYSzEnzmE7DhYNVPKZUK2oDiVcPC91aYxXNkJZHVJZOHcpyPUipvVX2CMsNR5xmqYG2YdiqL%2Fc6HTilZEWiqudkef96PB3xCToZngjRdSfc7RQG3bPLKlG1AKTJh%2BjD53whIqzXl0VR%2FNpHhN%2BJw2uPQ7E3pqjRbPEAxb%2FBtw2P8d09KHBmSUIjdlTsdmpE6%2BGWpwzt%2BgE8HDzKTni7V4JWe3jCbegRzM6%2BK5jI73t%2FNJt%2FBHkRpXBI%2FXAFGCdDarNJ1XU5jXBj3wjjZlIMOByK6%2BtDSWrH7t%2BFHHZP5AAQrJ3PMxCTM%2FhUG0tIO0hnuoX3go4tqLWkU3iTtKcTe%2FpH5YGhZ0A7t4amA5U0yOECWZdBlJ55kEXcjL9mKJpJGHAZUAX7mOi3BMPPmqsMGOqUBsu2JZiWL2UowULu6BHPxZeUDHoIxyQbtNkAcYgvtKl3PqKFrA3s1lADvXocVv8ThD9tHDJWn5s%2BbQleHxqYqTmFdl996S%2FYJv9pzoLzQIaX%2B7mS8Oq%2FtvLljZimNkKW5meN%2BoQNd6fPYN3aogLKGgoPwYfiMd%2Fig8flM4d5c0P7CGCFp6YzAuA6otvnh4YwjdAkDT262v6rFDV%2B9EfdCrKI5twso&X-Amz-Signature=01b7d37969b7536bc53a7d6ca5d8f2f8874af1eee5d390981fd85673d46c586a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
