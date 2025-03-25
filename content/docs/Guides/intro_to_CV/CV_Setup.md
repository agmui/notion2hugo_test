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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGN4QOZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRT4XiDks%2FhO0EP3Tinmj%2B6cFiq20rXVMr0B31uY5VaQIhAJin84u81uFEP8ScCxyI6MLXuDRTRx67%2F%2FvYwgHJOZyWKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPHmdfPKuuzU7mVEYq3ANBYXLmlJAfUeupuxb%2BpzG4EPNpUujXiZekI7x8K3LEdEhbEdugshwNs6PPiqHDQQc9ha2Qyyay%2BVpjSBg8noDB%2BLxgfErgDokWNwqgg934nDLdUrTORKwjAPfDkPoRBVUvVn3KeqQrXUr7haHzXaqgNqTvD13gi8D7rhjYVs37xVpa05dpPmSzNKbNNNeX8E5gdYQhb%2B%2FWAkYal3OS7JO0%2B27t7S7M60WQHJFushu0X6Leu4BEjnsYjNBBjRb0%2FdqMwbODdStvL5pAsep6hDeIQj%2F6vZZU2OyXWUxeXsN9nH4GLlzRkmlWI%2F0KVBmxr68jQJWy5YV5GUiqmOkl4UnlGlOO%2Bm%2B9iR%2FYscnJb8kCQd%2FuThevxnOp045%2F%2FN6wJ7E5K0tUGVNcG%2BQVjZYq3xDxCnONqB3aY89NNtaK4xmlgPrv3ToprIIspz8Y6vE4X6AUrOTkv11Sg0qsbud4L4zcqDzllA%2Bb7Ni1aoXdMlVXkbN%2B0gyUveHyw5d0jN3ZWRHqhr%2Fc26RlGahu3JWWvdK0nEOLWvKyoh6mzGXyNLfEqI5k5cTsGw8cn9%2B1tNmwH9fe8DrT4St8ffewy1bBoMeJPWUT7XPRTx6uUwKHSlOSVqv6q5vHV8VrDjWkvDC6s4i%2FBjqkAUjneZ7VoJIa791Hysm1U25VM9Z0tpx%2BJfyTzFA6gA1YeYei0IxwZj5EQ7h3utQXaxsSlJHAcXOTx17NqtZPEqP1wlxzK1%2FbAa8WBSn6vNfg4wiNe0ubZtnsSt%2F%2FXqzTAz4rCLvD8uRnfcKAZhMvCZ1h6VtBT3TXjP%2FucUYw9ohq2ynxWR7GAcr4UKcCjDlVjEJom06S419lZVXCOH0I8mdBTyLJ&X-Amz-Signature=5626e59abaebb1ebaeb6a23a315c6bf4c5f633f1107e306d01cdb60e2981dbef&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHDJ53E%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnlNRXzxdQryY1nanto9%2FdnTDhIkGdw%2Fwr39eJogqEqgIhAOhMCVlRyKI1CifbraX4XnR3mU2TwbNBsbyDrBFp8pnJKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwnIgG%2BmbHiZkicvoq3AOvJsTbEX55npvluZ6%2BJ%2BenK2SS8Ktk0Ijgz2cl%2F9BFXcOm%2BSggV12n60UYDbUl3jZODFdJ%2B9nmgcrurFQ6kewpLAU0Tb8VRmVgWZyCrmoOo1BILA579vt84xLPngjgx%2FUJx3pPzM6%2B1x0cbWRir6uhrGHGKGhZtgTm9XLJd2Fi3zY79DC2wOp5l6rQdqRnPXzB2WX4KmjflwBA29S43lPAtLg3g2gsiJB0sr1RNWTPte90VTHpidN9Lpli2uj3GCpE5PB132e5arUG9jGK6xmEVshec5cSXQ27KNDYes9St0Uq5XRUzFspgdyRX4VUjprclVyOzwgpOKLuoq8d1B%2FjEYF1YiaP5GyFV9YGSuULZUW%2BwmcARiBY%2Fe2%2BiK7sVWMnOKQMfNhzqzdpKVIxPceqPEEC19Um0zfQTept5PajSeIezVKWSe1Jx11D%2FkDGsESr6OCOS7PRSjoY6jRlgv%2B%2F0Z82%2FV4AQ5pzHwqI6h614ER5e%2FLfmK%2FB%2F6SgK0YQHDXQtQPbiSUhsM%2BG1GRyipt5%2B6j0kDbD79m%2FmyQsZ6JwrOtMFxdXuNxIWrUPyfVDCpr2vjAV4LMBUr%2ByE68P%2FPfrOzWDth4QAGrgPT9U2akzTrtozWm5AVMQd9e55zCPs4i%2FBjqkAdsIobotjwI5FsGQhdHpBT8txvU%2BOJ4fdkdXJq%2FshdXr5a0nMB2iPO0qdNniPnOAOH1Z3veTCtpxHjlM5l3siqVKfAIeI8p5UYe4%2BoNsYY9vzyGEEj0kah7RwpcR3sosEJwWut3cVNTukY9TsB89Oc1fKTHzxd8k58YJCKsZKpx8sQjXPj8w8MCi8%2Fx%2B6u%2BSiyNi%2FMigRQ8rG1FXFSz2VJPCrVPu&X-Amz-Signature=ab99f93f77c9e98def2f56b334e7b6d1755cbd725d0287a679a6c5e8847e2429&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
