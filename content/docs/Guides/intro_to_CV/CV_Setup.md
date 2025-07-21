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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPRQA65%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZZF99POOkR7DQVZ2abI7xjCwzKJNPHrBDxnjJE8KOiAiAunswJOxvz2B6w5%2FpVXji%2F%2FIPL%2FrJhgZeKSn0wAgw8iCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsVfCugGLM0WaBCe7KtwDWy3PwbGk%2FEc2%2FPQ8QHwr1k0Agy8pt3NpkalDdCJrrFUgCMCuTFTnk9d6SCYkDkFiI51fPCfgyOaJ2h7zuVDuK%2Bya2X1qyWBGLIHGEV22%2BkgcGwtQ7GdkzKwGpXjyWoKoLIr7zQG9wi3AglWxMijU5Sgxc%2Fi0rvQnn84EgWHxPlymLhMyq%2BkmeNCEB4aoNZGDoosClmSvaUhRaQJ375R9RZ9Xx2b%2Fnsof2ChW0Ah832vZnQKxC7MUfzeAojRXvcUzU7EjqEO0fV2wa5MEIDCYEIipj9im7Ux0s67qUyN6R0jMepmRoagqpY2Rmt9PE6hBPVBfOAwS4o75x7uGk9R3cvbVcMe%2FwFDaiAh9c5SPMxpZhtxwbOp3RHw2pe%2FKL3zAh%2BniZGjCb5ZkSAMmhX9%2BXWBT5A3IdSDa6f%2F%2B70QXOBvJtgWpvosthiLY%2BjHDQQ7LZrzaJWuM0GLQfGMPtnXkW4ZroFpWu7Vr9uKufXcXEAmYPjUUukgvDmtOveS%2BjM1zD1nJgfIAD%2BF%2FqaPLgt11RHwuJddlNTNFXt13mIQ4wUhcBfTtr9X9UxpzhsCgyo3MtSpmVQo7hd4e1qZm0P18ZqXyXVZWgSAmNRgfDXFImvjgepOK1qXd7Ma7%2FOgwrMj2wwY6pgExJTY6hMgDoJya6avDNiuc%2F728bmspW0hdH7Et9bf%2FkT0%2BVEczyCEv8%2BEJOFFrKzRIHJ1C5oBr1U7C8H0Mvz7XKpOf9wUXmhThFDyjw3%2BeGGAKkO79%2FAP6eToLQANLmhB1rA2iXgRwirGqa0uqNt%2F%2Bh5wEkxVzgVxBKFCfqBfSko4IXrkfiDtSMnCyC11McZOg1p7QRgCoSqptSjDF6MKNct%2F2wEDF&X-Amz-Signature=718922ad0881adc21bd2237f58ab8c49756b89ec334b26d611920dc6dcaefed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52FP6AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg0R1Vad6xhTLlbY0hODYKrK5kRZidz2u%2BOQZ%2B4uflbQIga7RWFw2fqjUIT2uY1ACl2f8dgeCBDVhq5OihNJao1wwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb81aUSbPY5Dk%2FStSrcA4FtFgBzwm30Q4QuoYh%2Brzwd9u4InICSE6htXYS3NPTISn7AAvwzQ2XEFp02kO0dnOH7oQZ2jBHZCjB%2BfHIgHzf0J3Th59ZiFr%2FEVklNjZCoegH4WOKv4YWn7%2Fq5Fs%2Fkp6durmwWVa9qtAV6%2BFc1bETGlM3aZgu2P1%2F1Vvk7v%2BMIvn%2FGz%2F%2F0B0U1d7fb%2FtVQRJdhR%2FsDQ7ujU6WKP4x7gTkJ71QeiW9Nr2yuT4JkNV7E983R%2FfsU97eXfL06%2FJJ1%2FugHzZlqruiVI0akBajS9ZrdK3%2BlK6raEtqDrTVn6wE3M%2FRT2Q03J3CffMXv3bl9JV2yRJp1blR%2BgHAJttTVzkQ%2BF4lmAsdwMu75MCZFcw7g%2BXHLbqT1v8zJX%2B7e9lcwzYLugM2v9%2FHQI1G4JnIDiMLrfh0JzVoB4Vfbw2UaS1QQiYNcZrUX6FGxUjfde8l32Y4T8MplMBfyWzeMjgV3dm5rKbceUEAmSScQl%2BphRX8ANNCGJCp4KtgNQ%2F%2FqZOIeqRtoIKlDOPQyMsMR%2FKuB5BLtyT7Due7lUsqVHkytdSYhYNrgZeuOmuXLmZJ%2F8sVGUcCJDgQlfkPcm%2Fk7alU4R1FrAQCeASUVKY%2Fbya9FzA3AiAGp89nORjaiXjV0MOjH9sMGOqUBwHUHfDY9pgbajFDYSww%2Bk61St%2BSkn3NMkT5tirAhYZzR6Rp2qPdg6kj375nkY2tiyZExE0xiDqa9yJYuv7I0I%2BtAnDbI06fXq3%2FA%2FUd3Qb6CjU4ee0Xw0hhAiagZUxepa0IE8RRa%2FEVwnQjPfN5NFpkgbsndBFBxPLAYdcA5Xb%2BsZ4LUJ22KAHk7vUCBtHxEzxS6I20XrKTbp9FxALnF7%2Bvf4hpJ&X-Amz-Signature=8af83281f2bc01377d4dec9d1d835ad50f1df2258f856535fb1fe87716c8186f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
