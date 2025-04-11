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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643TPHY34%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCLKQbMdN0qDVHaQoSsUEb33f6z5NQpgMjr0gJ6j0wq6QIhAMJRW1MiVoooSUXlzfmI%2BELq%2FJPLFShgsCPMMKkUm4lSKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpEtPYv1sjW8WRSkUq3AMdBoxD257C4PgozZQd6QO2mFZ7Ocwyy0jk414isFH1baTXVuRtG0m3jo20z%2FaDLikfrvx6S5iJtwKWSQknYJbRd02QhArDET1xt%2FAdccE72hGY%2B%2Fx%2B6Uw3JXNK%2BLl7CPXtBQOwu7W0E%2BAASlnPhnzWXLiiPC312wFrQ7%2FjjVQPL9waUW%2F0FQpcnqWC1marMIJgr2rTC%2Br2ojaKc4lF4IeEDj6GJ2tu84v9IFLEfIa2jXE5s2uia5I2M3Ce4CRoYL6C%2BRCtfGXdE2WoAuVwwq5dEh%2FBnnn%2BVpT8tV3cW6fvWJ4smKv1bwUy%2Fl%2Bm7CvSCQSW7prEdrKC4hhbC%2FMDZQRyJndwUBhjrsFCH1mf39DMShvOJCtiMk%2BuNUymrno1nn4mm2nGDxTGzQ3KioTt6e3JOxcUipqFp87giTeHrJuktMfOF9EyqCsbGD%2BnhQ3TsgTR6dQxTDDs%2F6A0GU0AWQXLzJERGdALhG6g5MdXG2e1GcBay91ky81Pm0EJ%2FjXQU224PfvhR5L9LXpPXetpKVcWdEBpQ10ryBK1YZITg0PtD15%2BgSNYsnf2PG8qw0UykGIDkqJjCe%2BuTHAK404NROmapWsDWzuGX4WjcONO0P9bIjhRIyBPAMlRYWwADDCGgeS%2FBjqkAfUl9SoOU41KVqX0Ss1WpMB9%2BdFERbc%2BuH5kCZs0llc%2F5eKDtnhYTMI%2B3Wj4gEPdxacACJwCYtOcGM3hLyKpw14gDxJhWzTjZU0%2BLjC8oycZ9d8yCA2W8UnkSjqqP%2B5rnLsmvr%2BYGGE0zVxqE%2FTWkCXyY0WSDCXa6X8wuhvqsfiFSzi3BbvXXiy%2BPWaJN693zJHVIuXVpMfj%2BBhS6UwCgJusisVy&X-Amz-Signature=fa4fda4f514c2c443356c8c885ee1b6a0b7fc6abc484e8c9b75785c522e03604&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELMSBIE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDob4JT%2FSDdYp37IFbH98Z%2F7m2MhLxhRsEh%2BICpMkMDiAIhAO21wTXjKYHxAqWYtAsrcf6Bcgd%2BtDqZq75DCRGzGr%2FfKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpulplgDAD%2FgFl0DQq3AN5lOtMD9%2BRAGOXNnwSl12lj%2F984fNoZNrZWfpAu2Si7tb%2BHXdB44Ohn94v%2Bw2rXYikQ%2FYvZLULqSSxQKhvZTLNUzN5p%2FACmhBBbNWX2VWFpaVzdWkIkAOW%2BYFJXB5aZaXhaRUu9VXBq8%2F%2BqutrC6%2FWTqb90CGOpe%2FCIdyJqQPH92iAxfcAD2hAsS3lh%2FTrlVJoaTd1r4Av9mPg3NQhm%2BHgXtIRnWvcYQEYOH4dJlpLhy0NaO3AqvO2M6Ykygv%2Bzm3Fzj3P3gViCjGXor725jikFLvUmxztKXIIBUaDQHHJ959QjuV9FrHKICLKGy5o32Lks1Hx8xTbVnIuy%2Bjx3mlH%2F481PeY4ohYwMIbQEL9yx32USdYBIoQ%2FsTTVuuwQC8zh3m23F%2FPG34x%2B%2F%2F%2BfC7uWOsh4HD04dR4115s1wPou3uNVkOzNBk7Un98forEmtaWwg1Ri7sj%2BYzhTHhAAkXwwDMkFqqKeYEANeFYJRiGl6eGta909eX4VdqCz2DBeRiPlNlW2reuSArQ7csJuUi9Ct410GbWkw0JZIEg2sSBTCHEfq0kElHdQ3dAPANyuEzRXn3rvllIxw3Ma%2FJC8horCAATgixXBZmK1iQBzOcApj0pxAvIoVdpG8NgAvDCjgeS%2FBjqkAQV68t1t86sXeQmpnrcF0M8ChBWV3Zp4AHM8WU1lISPkhTNbQE8Gsbw3KY1EE5druHF%2BkzEDHf8UdGedps%2FiACKdikSTFeE1mTgwscf24q5SgNuGmKbZTgk%2BSC5Jii70JVAU5F8HKAkA7EK59QvpMIhHD3PORsrCDHLvtxPR2S45LcLxUCUBRKaagmhCpOGGq%2Fc%2F7Nidr752bzLxNrIRiAcnuRmi&X-Amz-Signature=409332f88d2e1380de53c9ff62d819e7d264828203e2ded6c3f3fed7cbdcbc8c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
