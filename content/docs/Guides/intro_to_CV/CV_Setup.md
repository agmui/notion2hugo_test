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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MGLK5Z7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCnCDkSXoBzUA%2FSS0u3U3CCEfYF8UFiapSvFD3gL3fTJwIhAKqtoMi2XRTbMs%2FBpMWHmiZq0QsYdPOwwl375hXRJpAaKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQt%2Bywmn8MyUeLGn4q3AP9whRsnMO4cnwKdu1ecfbQItpo%2FTSxq7ZU4DLtdaYeCiN%2B7Nxt6szWkhXCLj3ZGyo64AOdAiMe0NmWoEp8bNHQUlL2KcfV4hTxoaY0gNVyPULvPmrFSNaWI90U9Pq2PyE19BBAzDHnV9xH4Ftr046CnTd1NqsyEKzNJwAGgb4XqOMRnaqdvOXeYQNrCRfN8F0AwG8KA149bQ2HlfmqIO5Mx4kp2sRNH9vNQihGLDOHQO1OKSNTeGH%2Bchi8ulfT4lapspdIDigtUXzyMnh%2FxWVNSKGIRTldzDUHA%2BwHMH4WSCIIQAU5Fr3rvy4Q9ioWKkhfrZqQlFKh0sZM8Zpd5eVBgCStxTdDRv6s%2BQGI95Ft%2B7HRa0my4jkMzAW9TqlTl2i4c%2F4e7rwgtZWBr68quc5RkUUyX6hkjfW%2BiT%2FUbJs3WU4Czc6cEtlqpvTVgFsBBesiTzdkdF0JVqlIYhfjqhg3DeclMjo9FWr%2F09EL3oQ70fGvVsh2VBTEkWnP%2BTDfaj8zq0L8yUNnSwRzzFxdEHgLkfX7SX9JuPA4OhxklZLMo%2BOAkojHQzuGK6k6L1KAp0%2FL8QCrLQSo1xzDfXR2OMksIsJiHipDxf3hv8GdlvVd48VgxI4P3pijvlnTLTDygZHABjqkAXpTod7lEXMRkF15j9VWY0MIcv3FHF2k1whRNE6eZOweNVnAff6VFbeMKq%2BXGb44RNtNmoJh0QiP033q73SXqtsCSumsqjwfkVyIr6KSInOj3Z88TtLNshWZHj%2FH0lungX8w81Gp2l2RM%2B1KiDC5mpUlkd%2FmMm9OJ7VxKIlOGWxfTbaWvIxf52gGKgb6cUFo3tttrjgGHiwSu%2Bui6C8FCQoTtd4u&X-Amz-Signature=582cde90187b75a1b142eaf8d42cbc5f0d10695fa7a17ddddbb32af921180609&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZXG2QX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC9Fy7Mh5fTzzgg1lCr4t3FQAmUmmoPa%2F07Z4g4a04DJwIgKqEqTtpBCpU3J%2FLdbpBFTu5U5outExlgYtxvub5V%2BmAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHtWLtd64lBiPMkvircA8RfV6pKbBvm6sYk%2FYYyhFvfQ9bBRfLftvV7trqF0jCb5ymBikeDOEohXUgwdvkCaJeJDODhmzCilGPSd5oXyZ51SmeZ1F0%2B%2BnunhbaBeG6r4XN4%2BZhcOMuMDuyJB3deOx8nsBwf3CdHCj0RJeUTOWapl%2Bv2RT%2BF0IRrx3iGnooev%2Fd25pdndAKO07DJ7N3qYFIPr5a8mTwz7Uk%2FkOVWAHKEoAH8BXX5KL%2BUoANnZ0HyGJ%2BEsGfLjTiQaS6oVK5TeM9a%2B%2BzLNxxxpco0za9uJ480fwWyxq04OkWcgLwbhP4ZBzloZXbDHMja7YLiBFQYyBnJr0SECNVMu0FFHRZ7SNsKtpR12mIrqq0HurO2nqg9GDN9sYnZhTXRl6SyMRX2do2xUKGoVZ5pbFC6jAYdX9%2FaNeUG0ae3hRBVUnObEdhpfYUWseG%2Fr2kkkofhQFpneRZfk77FpA6Ps4H7ahqTuQo%2F4eLMSROhzeSg3KO4leh57%2B2f8Dp0MYWSyS%2F%2BWczxGXJ05gb03cFZjKAL070320FzDB%2B98pGFo%2B9UrUVXsgJ7KGehUDw4yhQcWgvaK3g8kUYMdsCXCEfH6wJQoISlUQBvSaDgXFOKg1npZcQsGsbn%2F7XZsyPTpMUkZ%2FG6MPGBkcAGOqUBIK4%2FRzXmDhdBQKuODs5NTslIX1wyzstFptxs4wWRmfxPsfJNhdr9hlO0FUM4rGliv9%2FAhWLNQr2MWj3bMDs7UwOJGPa%2FA0xyEN%2FxSHTKzhwdWY64cv2mSnE1D4x8tAu0Bkf9vLKeHoNUcuRVwSCo7tKn7L70vacv6PLH08PS62axwU7THR3UZx2rTet%2F1XkU%2FnZSYquBWxm2pmEsVDmsBLWjJwQ7&X-Amz-Signature=97afa7d7348f0826be20231bbb2b2c8b29c48db0937b76e65a058fcd49524ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
