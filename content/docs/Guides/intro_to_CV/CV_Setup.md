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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TPRBWP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD5xR5Fq9U%2FTb4HvZWVy9DfxVqf50DZV51KBVQq6pmHewIgL8QFaFHiTAVUA7zKLG44QW0AgPOH0jd4ABAk029%2FGsAqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQ4OfshdnW5X67CESrcA7xjRcX6OSHFP23gjlNkSoAMCQwvQHB8w6HcGSiGGQZG3KqGLlh250g6%2FQnwkuyfzHNRneOmTxulQs9zlsRkTCoG7%2FlVYRiOshX%2BoSlTx7rj9CEEN1NLqbrHb6aUJsERcXf4yB98gfjg9JJqwv0IvdgPwgyKVqHOtyisQ88cXKCDdCuW00R8cF7QzrJON6qb4K0QM94VFksJG8kHCax0uuUfKdzZXsuXYo28qCIVt9F8N82g2B%2F1XYCoMBJUVLPkkHeariPsjnUv9Za%2FYhBKZHKuDXCFZ95f0TTA9LP1SDasIjUpcbCfCa7e0Sqc7Lns4a23IvI5cINA2FBzTmJPbYT6c%2BCKO9mSOV7X%2FWztizsqkVcltV5H19vTvpNA4L1SgGsz2ZlCXUzl1qnr7Ea93pGXqNnW66k%2BbJqA%2F%2BOuowq5%2BVxfKRDBPU7Cnop0N5tu2u6RzLpMXRMWlAQm92fzlV6jTtBOb7uGYvKNjsRSKw%2FYTu%2Fup8PP%2BKQy0gj1ARtXk5E6ESFJHQYv5aoyYPBXMZ4fEPBhFg0rc63EpF6AjijCbUa2JPtwUV4%2B0NtnltDRk0QSfEUuzm6wArhLmeta4EUCBXeMPJ%2BvmnH5%2Br8joWIEYfKh5ICNXa5gKhnLMOHbl8MGOqUBdKNs1MFu0rvWxGc0EZJ8Gw0Hsv4UMC%2FfazXvTwt%2BKI5dI83OLPOfCJu8HgJbgwgsDNK%2FuSXB3llKVrIQAAfLm5vhRiqVNKkomGj5AhTnvnCM98mnFBloBL4%2FNOxKXcxm%2B0n80I915OEP4vyikfTobahWLZr23LPFTbw519Wrjf4AQiu4%2FuSycZgGAvhKSsO9bav1IDYytiliV7RPtLC2QmSWgOcG&X-Amz-Signature=e843614f32f5c53d1be5a7769c8bbc617c0cea3bd04092dd220447b638326ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTMT3SE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIH5liOlT9Gy7kgV3cSff96UK%2BFkQNmWO0zd2HF%2BYNoWXAiBhkUgKswk0HLECm0P3XDr0h1ZUlkFEcq%2BaVdg03wIc%2FCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUbtJIoRTF9RaTEgjKtwDlpM%2Brx5i%2By2M9iK3awqMfLmSGcGwZ8KPWepSjOLHrCNAg7ONv8EZSo6MW%2BvEnmKpMbE0P2851EuPuwDfVQ1hPbBRJQsbrsCScDtVqqZ0F5YM5rX2qELmQKeR%2BOOfH0rGGzT%2B1i8vW2fvVQndJkdJrWkPswOiLGzkSSdMK9wito9KUDkUJajGDLr8d%2F%2FvqnjZAVNBD8MBRymTa0ynJpBzsf0HGgIH59FZN9VKHiGMGIjijTAbiMM%2BBEQKXDlyfNNxATLxicqSExM7oktQ7cDGSd6CHENhR%2FlwLZ%2BvUEmJvU%2FRt8IKJRRtnVTN8yBPtvx59I4G0yjHVNrpTizN7A58evSfPTafqONjLTXZN8DkQPt8auQoz4jk45vUGIxPwUOAdit5DiRrULCR0RwXbuX%2FSg4jO6xsjngi41FBPXMmPBNGIK1SKgwbtptOnHcKTZxx8m%2Bq4n1AGFLB6Xg4U6fxiipcqQMDV%2B2zHbgumbfs7b9pM1vR%2FAGhbwNHG0mbOOW3eep0SauPTG125XgyeWTxtfJYhqb3rbcpOMwBgnG2Q8MhJgb3ZjUAzx6KY3nOH4DwZsDFXpfA85rP7sNpgaenewMWAdmWcOhwtPfbYIRET5KsWzZ6hpd1WTHbl7wwsNuXwwY6pgHMom0QfRsPEtTVitXwUx7EaoC50EFkrevLuw%2F8Hwj%2Fg%2BPX2K0UHlgCnYMfIgGIshBnD22uwTJmH%2BkVzK4A2804JCzwJ6Uj9k7UA%2FUPIVPT44ZDxBYi40ROZScFPvIp1bMJ9vXAKWqb%2Fyo55ZqccTZTHdj7EN%2FRJoSC%2BlxqVHOT8OSSCWaEOYO1%2FF4JRJYOb84Z%2FH3oFC4ufUx8I%2FU90agTr06Bkdhn&X-Amz-Signature=ccade49907d7e569b44277f3d2baf805dc31a18c8a2a35ac03048bb72008897f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
