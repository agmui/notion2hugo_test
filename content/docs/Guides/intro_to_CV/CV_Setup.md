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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSTF2MP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEDPlnYwynRzsVoTZ8baelvem6EUm%2FHcA9oVSrx6RaJAAiB6q8iTIv4tcjddpnCyA7M%2Fg0pQS5OYNJ4dkaavFl%2FPmir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxV%2Flvew3B%2FTMmWddKtwDY%2FFSNZ48Rhx6If3urhiF40BOO0KA6l%2BxXJsVUexyUCIsV3GCWcPw2ixJ3xmzbCOoudiTqQU1c1tBeLMVycf2i1O00kqRyrfbN2Cw%2F1nVsnbXoGNxhqj4spwXwLcWI3d21KVOXW7h0CNJxq1sEvyoEeneSHkH0qEJsM7F67OJPUGRZkqsGsfoDLGmvYs0nD%2B2KggRyD5OKmPFCx%2FubkHaSROeaubI41V4agMPjvRv3cvGOLg13HeDoteFVqofYw4yIiBSNUE5%2FmZn7ppzD%2B8L5yxUWtbb8Pqk9zUhcsMcanhOomoWTK0FlkYpU%2FfPypibu4HF7WPTT5%2F4UM2u%2FlvjeOso4PlFjIEkigdqwCBKN4bYpMw9ofy8mBcFMN1bDhfP2FOA82UKcl0wlNmnOniefi1mmEDys9RZ1aYSoixdnyXoaJlZbiYtAECZXL8RnR7vm1C5eAUL1%2B3EKQt1QA%2F8d97kg%2F35gbhfSrg6X8pgSSE5Hs5wTO3XVsWq6WK7oe5Cvbbe6SNVO1Sg%2FbQ0k9XtndV8MExfJptd9VlNOYKPV052I3Oun%2FfN3%2FaPU5Y1xAbfLJ50yVslnSiRH4peQiwsg8ZvrZr3ivAchMuhu2pUrJlgMdytV%2B0vROPCPLAwsurLvQY6pgFQez0%2Fh3dIT4CZ0Ysxw8OqnDtLwQXaee2g5dLQNIjRsnCRMle9J%2BmeOUx%2BZtkotvv7KdoRuVl%2FvptoR2YaiSLgR5jomqLZFAkIXJgMDkYIG7OW43sn3TRZrlWsaukbnHgm0sjrsPMixi5JalaKAnIXIChGQuyc8OzLeP9VCT%2BlfB32ecTXHFxheOHzOrzTHji8Z8XSCNahVnLf9BjoT2xPC7LgShcZ&X-Amz-Signature=c9f1d107cc8311ac01dc51444fa35a3c5e03877940e4824121071842b29e8762&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STSKH6D%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICevgVyTT2E7RXjgOKgAikNRYMYYiKfxdfnSPTXfWh0wAiBMECi3j9NEBmsXjBdaGOUZzM8On6Vl4gJXeGmZcQcTayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxZjtQY%2F1Gib6R9CkKtwDwwxNE0jVV%2FIRyhz1bPN51ShSKp9yYuiG8%2BiltNpQydjxIg7m5mn61j%2B2uIZJxwlDOa1jJJhM2EejAPtNYt2n5Z%2FoLB8d%2FMWCedAKfJiAWGwU%2B%2F44gxdmJz2HUGHTRQyoDg2VF5WjdWQGirQLzLio53AR0rvSmzNGfVPsFvgC2ARlcGnSnXaXJyTjQo7X%2FPACaxABKUZmf1yTX50LQ1ELfSBR3Kzh%2BmHUdVBhbUZw3DG%2Fh%2BiH0qOdiu0YYU9Sr%2FeYmacw3zNchrmbUdSNm3o0bEoxPhh8TfRDIG5j4NGgNU8lcsSWJ%2FLJX2SA96HrpEpqGd2Pr6f8apRnF%2F%2Fwn4GgoC9l10y65cI8ZNaFk%2FybsrWo3MHQ6E9IkO5iT0fow0Wl0Vwv9AW6r6v0QTQaPrsvMCNbZM6x0VIkgi%2F3cxGHwvuc95x%2FYETjKuTW3wGF8M5JhJ%2BDooeUsSULummgsNjpawDR230b%2Fy29Lq7V4LG0tLidr4%2F4r0NYJ3kCf5QvNk8LtTSsJFr59diA1RcAWB%2FO43KFF8j92De13dzd2W%2FXiHmmhQP2qd%2BpCNigIbU%2BPjWx1nGPHxpeVJh0JzNgFlNEpsS3hJbzQXKeT8oRglSaRthje9ePOtqbn2AuAccw9unLvQY6pgG69agGcjKLFzviwXvUvi77orkumTjoPaeeKXuYfacUirPvmrIMF9axy8Ns6puAbq%2Fa7SW2t9BQw69QwYJJ4GkfnRchks2uag7c7ymX4cP4aAvYdyS%2FQWTAhXim%2FrlYHoFdKd2m00EkWD7D%2B09Ee4eCb5ZCptliOgefN2FNMnjEcJFt%2BT7SvXbAsSRQxaKiN2DCuZgzpPiyKtb%2FMB%2BK6FS%2FJK2mcgfi&X-Amz-Signature=938add3b8ec9b9764b794a4b4b6515c42a78242d1512ba707562f0c170d6829f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
