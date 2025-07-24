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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VY25Q5I%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBoTP1hU1kVnstk8FV2mfdWHCrqe8vyeACA8%2Fn61apv3AiAon0%2FMm7HWz0VZxO6gwzQy7HJA%2F%2BG8P3VqshiHlcE4Qyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMpGgCtuIWAB6N07zkKtwDcnaYf%2Fd2eJ5q%2BMxEri4JFbjOdRPd4Z81FvJ7kCX2VvsJK6o5KWrFFObJu8rt6FnxbrxsFGVBjXo7zPr8%2BNdiESz3F6RFmDK%2Bt4p4%2B6RWZUBkrz7mu%2B92hVkmEVRKC9EQ1TnXLnbhfq4pt3InS3iHpMIe6Syy7uh%2FO1EkONXg56USldbUHSeONO16ynOH5HcWOtimxhQM4FJ0lbi6CdfAIKf31kHBPssRtjsYCdLl4veOMLrOoyVEogRudsFldjiF9F60h4%2FB9rzrq29Nus08w3zLi5kX9XlTxsrJKa5EwZH9SgoFmrkyOZEgUAUM%2FR2ofGst4qoVTPNUhwCwOawSSzLYwYGeShe%2FemISIC3OzM%2Fbl8VEZ75bkVaTmYvl7a3v5VKUdLNS3UxRg%2FPjL%2FGNzfd%2Fb7BbRInmAT8oWAL%2BVnFV4ZUFeh1k9IEThlIMOcjCbHTHCTes8BeWP%2BqqpYMpOkPbPxIDJKcbfuG0RHgB49OmUv8Nu3sLLagfkEFNt3SAS1pfDTnqUoEiN5pHTvzfnJskAVYNe%2BVI%2FspQ78SPg1LNIVuCnaL5KiJcWMYeI0n8%2BhR6Xsr9%2BtTdt8mrSoZk%2BQKQs8Jrd78TE1Zfw6saQnJpQFOQxWv6yhrlaFAw%2Bo%2BKxAY6pgG%2F2invVn3DPSE34RtAuHkxk18GBaEsn%2FdwihpJ6bE3o81e7XNTxSqd3dd0PPnEgmeLS8lr5K9FMRIseq1BC9jhjTBoOEkRDJXqfHwVM65%2BTV6klsaQA08gsYHZWWoUWyt9zx%2BgvehAVRbfjginvQMeKYng4qI2NVHJUgUOSTnP0lbGl0IoX%2BqvUx38QysRiN0NCZ7xOKCZC9usiQmrVF1IOdCxxeGI&X-Amz-Signature=e4cbbcef1bfc270a56ca2cf95203b169f3b8c609ce77a25991f3f4390b6029eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLHUCPI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDduHwmoROTnnq9tfsYuBycFObXZmYG8pUODgVzCKMV1gIgMZ5zQA65PBkl%2BmGen8%2BT4aQQ6muqplxVG%2FY%2FZcC5sQ8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNyQmPxCzF0B3r%2BtSSrcA1WnAdv2DZ0T5FyoF0Xw6TjsC6I7WPPD2TsUiq3uQIkNWvdiMvDk7pGTR8g6FstKvbfTordy68yMMxSB7Hq43Mx0HQsqasMkl%2Fzy5lWw5UR0qc%2FAFj2jKgUo%2BXS5mscYYuVJ0mpQlG%2FraPiLdFawPCNZyzLHfMmtX8Ww%2FtXFFvXhq9F9R6Dc8Kw9ICO%2Fe9ATyLJiPsarp5SlQMzhly%2Bie4YNE%2FyMf2bH7Fgp2%2B9vcceymX%2FvCrVMvuyTKBOki5ITwTRyS4BvIrPL%2BBSJjPgusdKXNLYWGH90LCPcsl66g7PBx6JxKaXcIZF2eNIrVBqEkVAFW6TTlX78vZCizuiWaWxrDBkFvMmbrqAi63ScUyiMUDUOKdweQW%2Brz0rmwagxMa6%2B2CaESnu1OGoHqPD1Ur%2FzcL8HZQ5kLuDJhhDZ0thXNhyW6sIgt34xVEXyQkna6yjcV8e7jJSR00NmWvAZMfIlLzazHuEvYFww20INljkRCs3L%2FN%2BeI2oxAcsufZry3FHAubXY7JiMom3kKm4RraPqyKfns%2BY5M8nGp245LxukfALwG8NHLD69dxrttYNwDsmgHtJSrUUmPqrRQVGwmZQ6G0BeCAVIsuC3yyuCMhLjgfz1x8PdmKK5P4mGMIePisQGOqUBIy6BYflAT%2FlJlsN5MhJNMV6g2boo0xuWSPFad3AsThGfAM129L0BK52bFjVIJTLVOA2LPXO9MU3%2BSyTX0zqLrL8iI%2Fau2MBRLS32eueNDZNxYdta2seJEA%2B7Y2kJTjnsVgt%2B%2FiEm%2Br%2BN7JzYi91CtJL5Q2TcSlw4J1BrLaiob5uBE9o6IYQJWfH6biPEAoMjtnJcNvzkSwieA0bLqMS9pQtO1FAi&X-Amz-Signature=31537c920ffcee9255d4a59fa8a4e70db53b370136eb3773113abcdc5c6b2364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
