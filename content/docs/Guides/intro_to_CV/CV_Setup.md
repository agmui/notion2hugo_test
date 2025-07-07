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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVLKJRO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDX6Iv2uiSzXNpqHEv26U2lR1m5P05OPUKJ%2FX7FlXpVKAIgOnDP2bTtJ6hnwqa8xjpqKwEzFMh8kVlHG0o2NdSDWacq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDj%2Fc%2BUWKVf3sVE4NCrcA7UzDf0Wx2WxgWq1cilU0Ro0PHfMzbjxGDKDqP4oLpJ19YYOT7JR%2FeZER69aZQib%2B8gGVHbMfk0V4dDQLWvs%2BGdoFKEuY1yHQNswh0CGU%2FNWJt%2BfAZCzjcYJfUc1r2ru98vrs%2BM%2FlRF%2BOczSkdiafl%2Fpcwc%2BX3oaaFfMEnrad1bFzOEjhyCfWW3OY%2BUa5FyQWa93kV8TLH3Fs4DH0apKFT6qlAaymrTn%2FEBAM0apKApG4rP8yh0ul%2FvGgR53ZIc%2FFEro6JoSPfLYAkiwirNUALXUwOr8Zma%2F6z6OBwUaHeXU8XhrDiCimvi8sj07TH4KGk%2Fui%2BFrWEX0pB66JLwTp62Bk%2Bh903CM9cYfQbiAdwAqIT6Qx%2FzGiwThdv%2FQP5KMnjMabWQ45tZ%2FspHBefeDsDrMVpahVuCVwXiGtH8hea670Ws31Vza4t1RRD%2Bf8dHh%2BMEypScK6Lf6C8csxMR3v8X7okmMhPY6W%2FFtrpNB5VWY%2B5t7a73G%2Bl48l%2BsgLQVXGqHWcb5fFOk3kNEjpd8aQxH7f3goSg%2FLSbv5hN3%2BxVaP%2FoTukNE9ZpZWEmlz%2FsqoFDH37c1yhbO6z%2FARplxw2BloQ2F3qynuOcpXcv%2FSM%2BWvZF5ReewGSU9TAwk5MKiLr8MGOqUB7gDaUszRe4vcvFqHjPnXV81wxP%2BLl6IdFVr3wNFyb%2BrThmrXKHn8BO3fUHLg7VTIf%2FwieI1jR137PcLRxK%2BbVJ%2BWVyQ6Aor2aLIgbnEIPqO%2B3KESobX5FWqngtEh0rwIPEi1bUQfq9LSB4GP%2FWCe5Tej6URQEbe%2BWMutB7U3t%2FKE75a0iacDnTRvrMB%2BXQICqzvEXzP5b3qY%2FWr5HBh41gBx9JZt&X-Amz-Signature=af1266b5a23ee82c4a0ba2824fe38d59c0d50c5c9cfc52c1c1c4498884d844df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BJAA76Q%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDV9tlPD777un%2Bh1XzEUABcZje1lZLpsAJGf1hzIQiBgAIhAMmV6bo65HKOI6GQkt8Dmxdkp9H%2FyCUfFoJwsrvDA4qkKv8DCHYQABoMNjM3NDIzMTgzODA1IgyUXurAfrIQ4vmhbZkq3ANYTmv130B8cOtHqdDZNZfktPLcwMpMKs7W0GFwqcYa2Scvivu5FnIf643cyJDJ9Gh3qFahrp6rHbMFC5FekG52gKbcNeUBl6QQHiAFPNUoSf9oQT11wiossa1EsNYnC%2BFNlqGRPl9hwzbQpTfb0lqc5b1nAynw3y9p4yUjpAhjQkPFD2ky4gXxNIxN21hm3TamgrNT7wif30A0Z%2FbqyHlPAAFab3zRrr1dvDJ1N5L27T5p8ln%2FApWBM0ZEWoO%2Bv%2Bi6g%2BVsKLKHpExP1yPEkpO9SrERMagu97EWMALfu9c2SlekUIUNIGiY5EetgGc17mLHfUZ4JRlM%2Fhw2LJhIyj91KpatXeY3Cibmi1yat3M69SM8MY88qWbjb3dMIwjcdDdnBfOS61XRQi82HY3TN0n%2BCUEXEPiuBsjZ5g7JZIqS3wxcxTzFHbGg3Ggt1UyZjoWQMuTtr3zm925Wa%2BDYQK0XDJPgSZ1ecWWcpUYUkHnfOr%2FUSdSQt%2FjfESHbw533nKyY497H6Zp2CPOCOGrMEXDzMZ3RTxTQoDoaIt3OBOpO1za4n4rGgWjFJ%2FsjpaX4jCSe5fKoI8jPFrh2L5%2Ba5VcQvU2I5ktja9jippww%2ByGoW0JpxyDv5B1qBxLpxzDTi6%2FDBjqkAfYPKSmYgJnCJkoHlQXGhk3KLkqhas8xTwPnVovv7RpEPN%2FL5%2FnjQs%2B8LPtm8HkvTxzjDYOlln0XnYFmyWC3EO9ncPbuHoobHB%2Fih%2BbvVZgA5U4VHSwahUvaEajWVNf%2FRURwOIbE4HUihF%2BSSlmzEtLKCQKENdOHUfCyng%2FLSfHrCGq%2FVR%2BEAzObbUWLhVZPbmr0CT4Ym88zI39j6qSYWq6J%2B7da&X-Amz-Signature=a0535779e51ffc9347728a0c064ce4c259b5b9f113531ebc938ad8d3e2e00edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
