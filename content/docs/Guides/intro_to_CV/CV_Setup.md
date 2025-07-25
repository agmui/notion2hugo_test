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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDWKAYU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDbU9xoJiGrlTcudxgHisRwaKRFgHWzTzJJNteAw9WGkAiEAp9F5Qjm5Jd%2BndTZlLfkFe6AEQEJpmxZEVHgXlfwpwFwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDASMpyFtsDO7riI7KyrcA0XUQcGJIVuXWC%2Fe4ywp34jgfmavpvSV%2BIEoKIQJXzWPsw9yqyuyXZAPn%2BNOgZJcwD4zI3ejgMVibsIabnIptaWg4mEcJqIgGoqdeQUma%2BxZafQpG7x0d%2Fik%2F4ZnvP1WGWaYvr%2Bdeuhm1q6pFm8NZ%2BHTg1YkNpdoeE3RFMexUxpgWNIdhYihkDua%2BkzNgSvhkETQIMOc9u5AdbvKeYCTKzULKttPCzMyLr615D99u6trKG1GQPMMBSZu0psckeP3ENKju6vowwIOj0eUKV3Zj1MtMJZl3h2qg453cG9N0KqQRbwSt89j6gTiJ66qJ%2B78F3XqNfJuCQ%2BtsbNK%2BWbXDpTHwIoYQlokyiQQdp2Ub6PslslJaDU93dp8rXIriV8k4iawhtUGv46ASvgMY4zROyt0%2FJQPzkIh9%2FTivHrsrgnCujmUeE3eO6zWHTmHuEO%2F5qAqRaQr3SmxyH1A%2B%2F%2Bl23Uv2pBpEi6qmhtn7%2F36UQM5DD56HJaS3pfvec5xMgbJhyg3DnNTpKUiq%2FG7pJCAztResZrIqeoe7MaajzBboi6cUwPuFasl%2BI4TuNJFHhDn5YHsxDXkgIfVjXv5TBIsK5WMYgAIO1M733PigpSH5mqouN4GeMgQWDR3hGRBMLjRj8QGOqUBGP9P56DmMQwzDFlHAiztkA%2FS%2F4pM%2B7Yasm8EgEZDarsdDT0t45E2SHLqfQqSIMEeUdOJRdTWdOWCwYNtXYa4nlTvyV3L8w7gJKLKauXE1QZ%2BowPd81GxWKQBUjP9G5Ckibb3JUpU8NOqwBhLjKe2LXvwbboQqvlECEdOqj9SHh6tTzOh0Quav1HnIdpgb1stb9ZM8c0QC4cid3ovFVvpcs%2Bw9AnL&X-Amz-Signature=b5c78e32d33f5dc8187fe2b9773ca93872c189c64f70799110d497d478c0aa88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5BNXGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHkmhzHpNbsW8IGkYNxsj3qZhr%2BR4x6l6hFnaJNh3YSMAiAFQjsczag6K3Cf5WajJ5LyAtRnmh2ANRAZHbOhitnS5Cr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMRFfEaYQWIe4nF9e8KtwD%2Bds6vkZS4LBrDbRea6h5n86JhQcb0tcLqejurFK1weN7W7CMp0FVVnLNEPV5QYmfpVjUKjTMqHjGA42pGDM5S5zuPD9Frz2pM3yA5L9UmN93JlaoZ1hFtyE87eHNUJdaPhL4BFK2G5nrer%2BKGZ%2FX4lOofUC5gtcbtTeRaRduy%2BXogY%2FJcCf1%2Bxj40dzDq2r0S%2Bx65IWMNfTe6R4S0dqUy5uh4YXzg6GWUZXzfg5BT603X9hPN8o2sWcCsLckpSdo0U7e%2BN1rSsc285FrHdQ3iAKt6YkvFVbEKZBtIB0qZ%2BvPi%2FQs5Iln8a4MmoOyutvcXCwzCHKMWmum18QYYX3usui8AsITMQnSnwrdm7Xyy1v0H%2FnnD6hx2GSXvBPXUsQRbwWhKSlmaRpi7f1YcILf0HoRV%2BJwYKnxOZgoLpU9sqRy6zmrNPo%2F29fxITxGQ%2F0AizGl4v42VQSNjmTW1VyECT6HEM%2BeT%2BuLbUs2GqpmaDVIM575ZHFCZS0POc0eb9YLD6GMABuHzlnIvHLAjXQv9atWbZHZBL5rdiTspzakrczxDNhNjKjEtJXzeRyy7R9i2FX3wmnSq5s9l5vv4qiXSLQYp7RUr90iWlRx0PkkodUmgtGDJzsHw%2BHqVREwqNGPxAY6pgErtk%2FzG8aB0BYQCXBSbAdRMnFmfri4w5tgmPSHwE0QfAd47dMGe%2FUgLzXakgCNwSnQqogNUxX7LHlqyIzbBT0G%2BU4HcqSklKCFms3UaAz8qtr4REry95pPyqXxhZs%2B1wfZxZ7BArrzuoGGY%2B9oyyxGI0Z1ukTUv3TRFcq%2B40X8saH9sWHYkaAGcVMVyzW5itocpKdyqvuBmSQr7aBfcsbE2An2GQya&X-Amz-Signature=5fd43e913a148c341c3c8c5b50eeddb14210ab8536027a4b83502fcc05dfb219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
