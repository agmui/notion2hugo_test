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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZX45ZDX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIC%2B7czCufn10XxETMkC9ZVW8U9%2BvhIhppNgQ2hmmI5fbAiBvOQhVjpZKvXWUSt11ahY%2BvkkV4TKfTBHWRyhWHSEtqSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxc0tBuhEktR5mEoZKtwD2jEEU%2B3zJTNZzi4o8FhQb2FuccstGmX%2BUHHIyNdZPgK6k89VxoUKc9XwUAfkxKT9f93AxauWHTD3wEEPpWQl7gqiByMR0VLfwLzKnezG0wr6yZZLot%2FppWbAA1QI%2BMq33Ve%2BwPuNVfhGVwd6plErmhThNeqi%2BKyKaLMET7N9dv07aYLeLHs3Kll%2BOEKEKcXxs0fBnZF0eGuvv32dH9tvOq1RcPJeJ0Bp%2By3aR%2Fx7StwPWb7t7L2frzHuhe6hz8xrDcM15bCjUx4vimC8TXtpZyTc2W7CLUJxl78y1APUFjPHpqi2q96pJ%2F0Tqhr%2BUtvaPh411adcefoCKMT6KZzfmTZD2AlpnT35NHffRV9NIpySRWv9o22YZolYB8Wdrk9RBq%2B21zubQoI00JC1F4YaN92uuUv152uhSfxD642%2FIPp%2BbHP%2Fj4ngUEPXreVimUMUhRvhcR0Yw2ixJGRxEKTB8jq%2BfEr0dIh8nw0ino9jYJYdFBJf9OmGa27zoNP5YEAZ0S2c4y6guJaWobzLr6ldil01220JIhs5ecTf1La5kkeQJaoY7jufYx1AOR%2Bb7DQqJxM9KKC%2BCJ1x5UC5irP3BiLPogAV5eSKca2adl01wpLBBruSy8eKth%2F5QfEwxZf3vQY6pgFU2bfps3g2d7gS5A6%2BAi5C61NFJWb1enaLrdPOEzMxkzgkN%2BKEJ2Oeix0k%2FMwtxhqMQ42mcd5I8N7OjoJBXgruU9hm7csX5BwRM0s%2B573mreYU1ifKqNljGn3KdbVcXAkKY2SCgUp9%2FaYj3xv4hqvJ3K4B3j7NLY8NGzajYWWPIgoMhvyw4al90tKKX2XK0uq6xXfSGjkCG7beg46E3uDIoVNwaCEV&X-Amz-Signature=b49c1def416eda6f1daf709b69d16ab54c91852b58bb1da709e87c0c2dc68f28&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NBK3CB6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIEJWNqTb0eqhwrzRzMK34RVFtwtsoW5ceHXsY04sBF%2FrAiEA1R%2BaJsxkyHt%2Bs%2FpVD7IXfI8TRpEnFpFOQdZBO6Syqysq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJ0TPL09Q9qGlOmqPircA4sbc4Pw66mp3XjzXewZWD2NTek7THmdjCb3Uq%2FOSutoJFnnZeKUqrogasxrl%2BbNvV3yEJi7OCbqt9SNBh7a2s%2FtEtGCcyGRR8b%2BbzAQIbn9h6g7o5rr3WD5yeqDsdFag8GI8mPjzOjL46hiD%2BWWgtlD5NhYRMl%2B40q7iYvliGqLLcpuZdSeqMKlINXgw8lVcaOzEZ3kDlAAb5dryYMezNNOTVxaxdIx8TZrYlkrapsdwzKENOulpjvZcSublY3%2BeIgLsJdfgSqPXW059TArZVx4KKlRyqU4uf5yrwi1OF36xU%2FO18Xj0Ax3uke7EWvQXshtgTAwk4KeXArzCpmZWxvWFNXFpSMCxO8JBYyaRiI%2BQCTE9RFDYwheJNNzYFEO8pT2PBidf60B2tAFLATxHLlXZ6TvsmwCv34uliD19SAu%2BJNIl0cKtn46WGCqQkUvkosI6pNfSmQ52Xwwl7bGcXsNO081SGEbotGmi07BMqGJ8VYVSS32eG9agFiOWkhOlPyvyY5OYw5I%2F1XSmzOjTPNRReZl7b7mA1j9qZLT79gnL8HgVOslbbHn75X7jxD6AzoWGZpLRgEZyj8a9p2vOGQYyTfabpTynbNiG%2FYyTLnKSznmlEymFrk1SATUMMWX970GOqUBoRd%2BeXu%2F%2FnIsytmfzLDm7amHSuDCBE0XzY3khpNpa%2FI7vOUIWOMLwERMQ0SCQrtYOnz9G8DWenu4KXKwbKIPFzlG0W8ikgfGBJXmvS8gWTe8IQqC5TTQzLAAkCdPETjljIKR8Fk1cmXAhgEjxBxV6NYp9AMFIg%2BBGDKEndmVxT4NRdrbBimiICKm3M8gLtwqct6aN4sPNXsAGgP17rW7%2BH9dBYkg&X-Amz-Signature=a796065f5b4ad77e45bb834b8315d6a3950d37062ea869e44d60b4cc035243f2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
