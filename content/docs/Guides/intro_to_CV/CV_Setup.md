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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BR4QZA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCEuZug58ByGcNlkOEeDiqPur4WmjbwaANEKy3xEQF2SgIgXZemT7a2izsSIQiDjejNJNFrTuzjxi82E2ieh7GPWWgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEqYx9a%2BAK77xFqTyrcAz9CpnQ5scmb9n9pH2lWygC4r%2Boi0NmEbQQCTyPjQh1BWUwrsj0XKJmnhnXif%2F0hzcjpgDr%2Byh30qHo5U%2BuLOjj%2B%2Bw5eOKYz184%2B2PDLjdVRmDWD717D7Biqc0gk3wNMji0KazZBciDpVjlVIgoHEgU3UkXDqoZQU54RA50BK8of1QX962DLoHy1yEOqIprthEQ1lv1ghpiQ45LnUJAaUoitMOJo1%2FWTHphVNm5ay7n7OBs4wGA76HYbLu7kdFdQ1bpo6aOcZQfgHgtGGKYanlZo7K06PGt76M%2F%2FyOWVrCuAIqnQ62gDhUKLUi2fzprpZ7aZzw8dLxBgl1Y2JRBzsK5wPOdj3oRAfvHVPMRYx5yqs64jVk78fLFzEtkZtQYliRLahXiFxa%2BQkv2ctydwowCdsvwOJStyHMXxuy%2FWpqY9gDcFW%2Bt8ZbE0t3h60mehNzoIZdeDfyHo4I%2BHQVyWqRGr%2BsRk%2BQEel7FucR2T8uplvZ%2BGxHduN1jU68uFumSBLXEjviIXjxx8%2FHmJciFNFWQavlRvVEUwJlWtAHq6t1IC9LNnOD2CWDvqykW8rClJIKzUzrS62TDfVoYu%2FTckxgGii3oHq1Ab7hbEYQXb%2FFgjge8aZlzivWhazKeaMKDlqL8GOqUBF0XSXy7Zdl12iQ9ud2gJwgL0z84CrR0lgH2qdpi2AciKMdjr13LrfLj514%2F538DJrz1vzdCvCs1S6Rxosuz4Amba3E4tGiDr9GeUiP7c6bQ4l2JXSfBYfg0sDYmzAcDzTmlsU1eZ8lU4bz2E3IVEs2UhIMC5KFaeCCYkdQYvxd%2FGtC2SkyEtVdP0%2F0K9xs3Rc5L51%2BxyCFlBsFRjfNyiPXpNsq9K&X-Amz-Signature=faad399dbcb68b37c26e0de871c1717ababb37acb68e4beea96813f3daf92de6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELYGWIH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHhfpVb0eEtyszQy1bw%2BciwcDLfrs9x9h%2FUyo9%2FtItVcAiAPgiKnwPi0xyAHyQzL2oJeCIBbBRAvvbjO0KqtOUSeRiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMge3%2FBZ5T0EwXLi5AKtwD9ZXYpMvKyXuiaoIjBCcaoJ99l4XwWC9zczY%2FriN6qBSbnNxhVKjD6VrEFapEFKX%2BGWWvZAzrlOu61mIDCmVxXutFjL%2BfdnKkl22B%2Fc7Irz%2Bfbj7CXkNzKl6gImzxoPwN2Ei%2FgtJHKnmXq7AWfQ5FAALwJcyFjrSdAyoaCAnjRHuU0AOC3AxxtZe5UIEu9wrZBf33OLKYxZp3Gry4HH8MtLFITNOaXBDKsYlhl99ISfWKzKvTnYV5Dx2rZj%2BM2yiOOV%2FWiqmffcsmOkGzBliPHb%2B8Acd8Adqol%2BiwKqrZE3IGwk6tXhD90XMvhq1bsMotAlC3UkRycBlbXcA6Y6DEgTWALK%2BTPN3VgtevZVdlizpCCnqLaMv5%2BnIkfBsXyy66hZ1nnvcetJodwnjERPeZZsnvn2GyFwXPHKjV7xD9ot9bsMI4%2F0r%2Fcrd3a6fxIJZMdGTxwoTLcTyfbOrQYoLXgE4f3M0WB4QPmnplTO2YwtlepjYaGwwMDi8bHtcCnQ1BMBfSnt0ntpxR1%2BTFN8Jqw9bu45%2BLai8wtb1X40D5x35qrrQaSTMzF34Q95VsAPzDPK%2FFZUEWkRkW%2BNaXZMbLdbWw6PVJ3n5txb0%2Bagu2A8LPfsnXlXvXo4KMyeQwmeWovwY6pgEdzjvQRLoTysUQq0VuwwMdq31a9QV1tCeQ3Z%2BTyQhVHwsr1O%2FzLk8JbQkp8nhkuYz0fAV4OfJ22ufj7MPddEo%2Fwt7iwVn8ZlwcW7Ds0VDZ3M5%2FXI5bmmev3BTq9O0izLZOHYdNm3ByVJNQMYrnbjcWL83CNO0FYykewMJ8TpK5EbcM6hdtv8gNnEdUo20StmKeZ2uBnpm7JRgcpQyN7vOhTpcNSH1B&X-Amz-Signature=17ff7a0267914051238da07fdd7bddba88cd62a2083866179f371e4440f6460e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
