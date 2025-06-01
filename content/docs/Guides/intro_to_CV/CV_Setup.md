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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHDAVWG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHsxHs0CIv7f6KLNAbqnL%2BRX%2BhqTMEGjp2kiZiWAiAscAiEAjl83o9i%2FLqkYUfDLNKJHZKkrR%2BYWuHIDo7iCOEvMnpQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXunbu%2BYRzXMqIRECrcAw%2FoA9u3OC62LLXY7xcR%2BCIuHLBX1iOhlZNXBxvWve6oTpSqcJVxKYU2%2F9w5YYwIQUVOoxar8%2BwrrM2Zf95zcAH6IFCj%2BoksDpqSxGO0Cln6%2Foy7r8LN%2FVzmZ%2FM33SKOhczI56kFNqJFAHQ3Rs1xFVYdVKaoErarhYAoiAmaOx28v4YBSc5M5da2MQb1xxkTzE8W62Mb%2FOpAauzMTDoal3%2BtaYCFykNHvXMJgBME6DnoQr2LvcmhRf2izW0P5wZoQqSdhsYRRHqR1JdHHTGSLM9HQQm%2BzI1q4EJEyo1CQ5ki3swrUYacp6sWzF6qUYZhmgObIdu7PYURjK2%2Bh957nQJfeTFj%2Ble3NkYwsV%2BoXtIWmqQpH%2BNZaPzJs0%2FEDRVZnQpuXL4tzDS1NYZPlQEsyH0bfxO7QTk8cw6q4G8rdXgRKkAv7lsf7frgAWqGccIHrkdnSsd5iO0EdQwlW3wvdZQyjE5%2FeWWw%2FFVoG3mSn%2Fg1f1tTNi6Q7x8NGqx67JKGrR3gMeAzR4Jwcb3lsZunBKVyqp9zOgyBC0RhF1U%2BzOf4ZsO9u9H%2FgyBhUhaLbnB2W%2Btc4aM581AtuFWrIQy4MLuOvPtiVBXCoxxOnAoRI4r41mWDB5yHfzDDtXl3MJj78cEGOqUB6Q9qUkQZAhR1%2BfW6mPJD0fPGaVwG8Qc%2F25at%2FqS%2Fmj8EeGMg4AOwS%2F35Gzdgnrfan%2FdRmhGVLsL%2F6W%2BRj0pnlUiOEipWcQGxxIvwMqSNf4v1xAfdHGUwkNdXxG%2BBsVNe2edREGFC0OKedW9oB21FguOArnwJZBRTlxUNtwcaUImYZky18jaXnDJNH1MrY75NACaQmxgjHr93uxsztJU2QyKKKxFj&X-Amz-Signature=0fd9877eb264a58289f512bc59cf6345ff9b97ea85ae1103359c091a46d37ccf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT7E7ZJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDLcgr3WCnZUCd%2FeV8zj8O9J1hR0PIsvzrkJueIacZiZwIhAMhMNN%2F7hHX8LyeErwtMSPlUivtuRT4zCQlsHxQMmLvdKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybzAu0DQv%2FAnYXNisq3ANheX9A3sKzTpSDvRFE7J3C2ZBF33uPDMZISXP1ZEw4Fs43RxLpJv%2BOwTzZjLILTqIpybidf5aJ93yGA8oW1agR7Ja9Q38qzMiFfwolB7XiIevfZMiPHNU40J8mBcU8siSjw%2B%2F5ERB%2BfiDiZHyi71%2FVi2j8rlwAjZyDgO%2FrcV7IAysqrAZ5gKtsmdlXwmQbXNP%2FWpyzED3RHkcUHeIc6M3pr9DFHJsMRbzFAwqj2c5zCaceYdcvPDvFmXxFhZ5hGcWAL%2Bp5Cq8TeFr%2B7KhCjCBunBMFzlRDnIZiz3KFUWWv3eXYhhmqN4zIo%2BZUv%2FxnDROpDO1xZ8CrWB436ZZ6pvhaIk7vScoX06fOkOuMIFNo5Ogy9pn7pXPhO7p%2BMiN08kPY227tWuOxrw3pkNnJHb1Wuob9YBnd%2BiNATBwWAcWa1MOJnKM10m48WLme0bZsssJDM4qOcyS9CTNetabn%2B3CY1UIkMKyDMS2eJrmy19xq12QXxsqTTsBGGjfcOXFcnFNAJFo2i%2F%2BSDjqXLYitdulHGynTifmdxchqxF8kEObPQwIebVhXB%2B0zgojSOgaHN6axZF4oAx8H4MYHMwzq1PDu2vAY1daaDkLFWI7FKi%2B%2BpXWIjHW5m13qYfHANDD5%2FPHBBjqkAY8jwTFfQclaM3aEP%2FQelRg3nXg%2FbY2kTEKotzKEPCuVNr3t02m54mXW7xsZq4TEAGda4AmWQQ4UAc8mZbFH9gpO01zASw%2F15iJXYjfIMUXxwzeccWM%2FEuuzZFLfO6AL%2Bkh%2B31ro0KnPWRYVKjbgOmIqVtqqk2LrsqGrolnBC6h58io7DtepNSuupR7Gtida6luwuF6rGTT19Oia0oTXmpRU%2FhzA&X-Amz-Signature=57a38f0abd00ca53b2ac4cba327d8f6dc23c62e30b204b49dc7aeb91a96fc153&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
