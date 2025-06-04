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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJQFNVN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDlTcI8u2gpLTIkE2GDXiCWFd38XUBE%2FZMU%2BiSLwzb8LgIgSjQJ44JCp1Hzg38PGO%2FirRVNdDmyWxvFoUxwkrYJ9ocq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAoLIT6dXH5%2BAVKkgCrcAzzT0R8384NCwDATsNLdvyUUYWNR%2Ff2bEUHWCoeeWX%2BjLgAveymXn3f%2BYlYLTJhKpEBT7C1LwRr8QGJ3Kt%2Fz4gW2pWH1V7q8sjPam1I8MDvkOmFp4FwOneN0UzhK9alAwLC6mDb322JBawLe76SxlnB0GKsOxQ1VzPVG79e6yT7HVQEl3nGveg1RrZuj5lnFCKHZfFixRmyY5hsKuE2JlI9FIPg2tS1TAP5xENvqPxNK%2B7f33nrR2q8oAH23EwgEJaNVcZxRoj8wPp6N4PQZGJVhyKvddi5tVPCdV%2BIqKu9S1FJH4BLI%2FadULfwvOxACL4WBbB4nrLK%2BSV8n%2BKT6W4qUsKXihD%2BXDy8NIlbHyG7ChLDRr2Qq7Q7rds30gtEw4JRAILEHsCzn3UAWV%2BZJrpOGhJLg84d2HxcQn3ecUyZVMnhaH%2FUge3o%2F3CCMzHV7UGIKugeBcIlzRPW6NLX4LEcM6I0%2F2aEXiwY27x%2FYGeCFIaiVvwqS3gH8Y%2FixK9fF3VYbOqI5ocKzn81C5TVjbxrt%2BUgUQJ218%2BWwQhRNTuhCb3idHVw%2B%2FAgOlAi%2Bm9c5diuz%2FRYpo6pNaFki1IbAEW8Wfg7ZtpR3%2B8ChtnlFBjFbIPa852c3k7iNo17wMMiGgsIGOqUBCP0JVBvXsMhRRusQnFsfpHcctcVBu%2B49mz5ymBoyzfsY7XjOXfeZIH9WfC4ICvDPt844Gh9TfmzSO%2Fr60UEAbDVyfvpCs6syWzf09qxoJSZc%2BQAOaSM22Ij%2FxWa734dxa2TqDkoWCuCljGOaB4d8mGf1x6yKfoRfTRM6aKX4I8%2FkTS%2B%2Bfo%2BqLzrI1x1kZmkKhJbrawJkL8fdA5HHmuPPJ2tk2Iin&X-Amz-Signature=55a04a4c8466059794cfe31bd2ce789444b3a179d9a69176dc14a0db02887efd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SJ2LP4U%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8j2XAKR0rRoJ6Bkq6SPkaJUb6gtgeZ7W3hUlBrdhnkgIgW0DxI74DxFj0cxfzSWaVI1wXS8nKPgduIFvJ5oK6y5Qq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLcjnGCSAhHbPPueLSrcA0pH3KQsjBIOC%2FPVMwn%2FpZTLeBQ9tNVZKcBLXseWVq95cCx8vQIVpSNtqxngw5OLYYSSQayI6%2B%2BLm8gDhb2boWBDw2iC%2FptwijxSjcBznfsmFCr3Xy6WZryUSahzwuF5FN510AYPYBl2YX1gWcZi04RBeHBVdYY%2BOx2S2negi7ol2Gh4NuxPzzqPbraMT4eS%2BIyE5MSo%2B1T2fgZdobDycxyBIYGW5zh7ZiqtqnA%2Bv2yf3n0lJOirCSvyoAUM5lJ8x%2F2aGPcrwZ6qpzzMp5rjvr9iFlyIHaXDS%2BC9HGsxbugtCWgTt%2Bf3D0tgOQhYH9%2BOWFLCLQk%2Bbp4Gbn3Ddcn1IlDSnBtZ0TzMPP%2B%2B7Gopn0ASVQHjy6ezuWyHbWNhJSYlOBobZh5se9Nfxue%2FG8uSj3VQw8heMtJsJrB1vdDk45ywJNwGTCqAV5ne2IzvWOouXI25mguDgw31k%2ByjuU5utFafbvKsZgnth449mGNKWLv0tnIaRHLxifjUa0JFYm0NPSgqJiC0K5lqdQSSfED%2FDsIbFE3BptGYMS%2B5C6pwOzBFzWJYU71m3VWM5pxzF5M1%2BHHW6R%2BjYtt%2Bj28kJOAYEVouKr%2FcOwcvlWo9CQUQdckYJE46H%2FXmpm4H8odLMMiGgsIGOqUBFKKbNwVsW%2FPXFLRq72tz8j4VXmDK%2FwbUjNy8M0qr5y7ONnp7m1hKK4YPOSlwDlR40xJU17G%2B15NUsWmXdhUaXhNqOkWXTBHesuY4ftJeqzBJkoFiKem%2Fhtpr1bYrHEw6L4y2DK7zWP9t6wF1DCwywgrhLZbhxd9XrPXVdShwBcz%2Ffg4v8nESMnu7yqq4omIV1DZnvCnd2yF34nhDUcZ9rcF1S8Y7&X-Amz-Signature=ab1ac114d7498b3b46f56939d30658c9296ece806cc05223d89780acce59696a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
