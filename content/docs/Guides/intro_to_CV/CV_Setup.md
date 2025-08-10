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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAMWLU5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k3EE11KMELnehAStzhGL2m02QCsvRg3adxLLULyAgAIhALSCf6zNPJuad7U3Y%2F%2F5FCdZAG15caKkd0HOyB1sxXpPKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydjBEMtEK7TU3JhEcq3AMyf8ioWTZqr0v0kZ80dmfOPuK12kstM2FLZo%2BQ3XT%2BGPsx5JwAuqcnXVPcxpggKNbu3Te2qmIBxlcN4BA1vKYPnqc%2BcSWxBJOd1zwp4YR9lrbWM%2B%2BdoY9PszxmtQxRirr3UrfXi5%2BBs2KiFd0%2B%2FqXfr%2BV3mCXOSnD6IBiY9SAjfN%2Fdz3PDM3vWyYnZ83JzfsIcTQE3WOC8dwGivogXv144ewoBpcarIDVsKVNksSrbkIXDeOuplzopEOMfQ%2BWkRbuZTznE3u70oXf%2F1z0jHO092ERO3cX5n1uqHs8YApa2nngxpqKd6rWYpHz0qtXjcI%2BKmwf0wkeDsjjuPaIKMDs9pnrE8HbNXwIcqjlvwWN3MTHy74OKyvg6O3QXQ0e3tj5gagMLWM%2BRC0AeZld%2Bh%2F3UTgncEDyi%2BD2JcMg1FkX5K9KOU8lMYxY8KYsi7LvmFenRFAJT4tu%2FntudGxQTKnFnfa7S26hDkoasoM3NFUeb5KSRNDw7sd83rz%2Fe42dQYvhSapuIG7wmYhmW9WUxPok7NZCWpmiR0giEXz905MDmDbJ4sw0W11ERc8Eb5McCnjZxaUTtBvFjuXd3sb5yCVTDaEKuz4VImzC2RpJBJMNKrUUYKGKulMXLVnu2yDD29ODEBjqkAd6R2lLCs4fqWiiW%2BBQHwwZiAC2UirrMmiDy4w4W4hMruYbD9KGfzk%2Ffi70%2BoKOJfLVRkPwulXNxCp6rJ8EdsoyGsob7%2Fx1pBwBTgyOvcpsIhQgudP0dP6xzHtnTUR1cz5yUsDS7g1nXWElqQ5XxENaERIdd9k4bKzzxXzTcsoO7AR07CD9EhO%2BTCnwVXL1Yfwy%2BYgPbWN8t78wKmZ7gRgSOTybf&X-Amz-Signature=fdfb14d7adb8532c393499e7a821e641b6e761476d20b198dc265397fa175dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRPWJ34O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlnradlhMci%2FOQr%2BB9AbzpZfIXRMQ8TO0sH8DPKDqdtAiEAgTJXRfaiFXYjTKMGFcJB02y68w80BQtJwauHe%2BJS4vUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtHjiBEzdjKINtAYCrcA1HIjNzlFFu68Y5x3KdiJLVMpfXxK2tafetonp1P1bl62gYcmMPUk%2Fq7SY3UpM%2F2bsr7JLGE2OtMSm7I7wmpZLsky1fmxplWF5ynODeg4NZMl86Yo8z8VvR1MxBAZkaBJC5StQl6JthybsDdIohKBo3IQyWdd0n1FODMFXtkFl2GH%2BJAMs6WARG4sbflDW7CpUo3gAmZbAkVbTX5eODhUiqvugyG5BDNM%2BTzbsaBvHYqV4Iq0rKfiXQRxVwqcnn2HT9rtSE%2FYAx1SpLjnMJ7Uv0JRUxTa7WKe1AtZwMKcVTxlamIUErhDtf2KSJdRxs%2FmnB28ixdCl0UybDM%2FWJQD%2BWE0KjwtI4iDsULXnZbA7BTOtDs7Ex3zYFvzC5iwyfRcrTdEJPvlWmFi5kQ%2FzYga3x%2FB3TwNPVzkNsG4UsK8VLmQt5DgAcVKe6Uk4G25QnkJnUTpyAMbHtIYRmPlc%2BpLpLkfn7ZC9fnxy%2FaH8psTTD5BiWsKCRGxpyEWt4sMVhNY0NyrqQ2WG4xaG%2BGm5botxkHlb2rBCMgdE99o9YAaRdaqBVpXD%2BFaAAODiYmId2p1rpmxpcxyCStU4WfPeqgaqo3qaDp%2B1E6tGaY6cg%2B%2BqiyTmL5%2FrgQpfWXPmmYMPD14MQGOqUBM%2FgAZn2i%2BMhyi3GxK8x4NtnXZKqtZySZwXfoxWpSha1YtiUAkogbckvEDspSkQNf7sqBdSn1IYrXZzGU160z8E1Ol%2B%2B9pAUedrueCITH1Pjj2H%2B8S6MLRwqu2tiEJntXy13xlkHqJLIu7qZuhZIJKRvPdJpmyCHv27aNS%2FNZmHAJeP3P8tzIicVi8wW3nm%2FeHlTD0OlydtlMgbeZvWBwEbL4FHXD&X-Amz-Signature=49a73deab062f89a66122db21b1b3de761d63faebb911f54c43d678fbecf94dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
