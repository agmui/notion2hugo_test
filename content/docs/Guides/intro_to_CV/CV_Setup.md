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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2UG4DS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA8zRRxdYKFzbaeQi2z7CFAdMbVKBzPenpem0ddJ1tnjAiEA2e5T42MBbORRBdUPdJ5BGfJJBe1QdYUpleMuJzupFDcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIfiNOmwfT3B%2F9IG%2FCrcA%2FA6N28FE%2Btm%2Fw%2FGoH7QReHOndrYb%2FAKTfNhSMefAYPTgIgraHNEzrHqs7XJtCIGat5Iyn3bw7K4AlbALAYzyLE4PrhqkKrB4ecnagF8aFYNC97Q0njLAhpYqEbPYvI2yjG55hljj2jT%2BgyXieNlzDsKuXCYtqjJRSOCFDtzM2aoggV9GUt0IHWG2Z0zQ%2F3wnaxlsKSNypHlS%2FmQ6yNaKICyMMiNWpguc454Bwt5Vej3ujtcoIuO7hm3e6i704BFKXQTLfGCtUf6SRnw1xmry27xP%2BE%2Fq0y7c8SIjxmBGAf%2Br%2B3KLLfsoEMR84GCmzzO7MG8YNW7dPwX5IOfkxyhrCeuCpNd%2FUgdPUu2Kq9IDQoZShQ8YisHd6lf3K6965Cx7JlGpXYoSEQ09fnp8Qb3t8OigHFIhwi7CrawaT3ohsY7en2GhiGhtFM30yjHpwq5ZeK4lzdzKyjZCsNXgeLZMPnVkLSxVo2X1%2F6RdkEtUYp2KfiPyDZPD%2Ft8rPJaRVDgPfU4QqH0uXVaHZuDtKZcrBcho4aJr66iUdj2CShqUN7lJPNJ4SGIRcwc6nQ4vfoQ9z6BuLqPA9prXOcgINTDO4S3Wl8flEOj9efCr%2F%2FIfJLaXcjSVZkT67H%2FYPb4MKb%2FlMQGOqUBfpNWEwcqOlbRKrTRvlywQpYx7SnKb%2FsxhBFOx9aateFD7qPiVE5qFV3uIZQPgqrG9RCXIc2EdpSz5YzeCjkOp%2FZHT9mwPvv5rG8oBO%2BDY3NNcLvKRjZdHxzc4apDM4ihXluOx7YvRbCFMd78Laa7pCdoFvNXzR7ZhyzhA2Qw%2FycI0vaCxGfv%2BeRqB%2Bnq1so2JsZmN8jeTuIJfCZU1%2Fi%2BDQ2z4UXj&X-Amz-Signature=8dd992183a5e594140f878b163adc0ab8450429d35ed93653ef656de4793c4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUPEQ4M%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIDNNN1hY22BQfs05nIZ%2FbwS5GC1kELkDGeHrLnxl5rS%2FAiAW2MvOHsB5N%2FK0FUK%2BU7NNJmMkdFXPOBCLL33QOmcYoyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMa1b5ZLVN6UqXHXLrKtwD%2FKoSE%2F6X7yoHn9%2FF8mXN3BI0HMGAd9xxBXOX6dYtEG9tPiRVNY0S9A8KNfZzMyaUq5fsxV7VUfv6v4A%2Br0NmWktzyanPP6ddzFjmj4Tb%2FSSPlp8H543UlxVTwXenUOB%2Fl7%2FNsTzfr4e2VAx424fa8qIyeBTAy%2FItlusLi7hwiPzKxkBtW%2BUCR4Mi9FBgGz%2FjjcpK74ftOHQpk0ZgfeKt7GkblHrfqJp1qx45w06DG9yylKj4rPcyC%2BurhQL2jrpnF66D6iGoIquuDMBgXUNZXdS%2Fdk4d0eHORbR5HGNfYrMUvY%2FwNwXwP1B603bVZ2A2IS6DNGa%2Fa%2FEojr5AGjJWJAZrNGloYWq6m6HaI%2BMEnTtna%2BanYkRR9LQ1nv75MIj7wibg0RFMmVo8UbVperDb5ssgSh3beuBgRRumf5wQNG19T9423hFI4D7%2FxYjDvA2sNrf1%2FmmtNJzDBh2HooYC1AvuVDaGPkSzyqnCQViDkypYaZQ2Oj%2FOI9GjZ%2BRfQBRk67LSy%2FD4NijSbw483774JEDLitM6q8z30nq3UcyzgO9EMo0dKSANFkbH4kIcIiwxqJj9DsKmeLCbkcG4WJCjLkjl8%2BKicreZmyfTVNv5CqXT73lanNVmNZe%2B4C4wnP%2BUxAY6pgHgDYo5%2FCCrVE9paIUvDtaHqQkiEmWSWojlVczzh6y5fx6hUAW1L1GZDSnMmc%2Ft%2BC5ODi6s7%2B%2FZPGUODSsMZ9CYn3fSPZON8JjRmTv808alodv834vRtxOgYSwhk0LawrDV0BC%2Fuxve4B02goP6yp4JUqetkz3FDU7UQzyQZCXinAPX8X6RFPEy7NZky7NlwypykwaF%2BZtob0YEqWUWaV5qBtRGOIqR&X-Amz-Signature=767217e764668956add70916e8d0d45bfa608d5c2f290671f0289b286c797efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
