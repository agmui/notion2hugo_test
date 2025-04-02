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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJO4GDD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDzLGNvtkcpz5s7SF687Y9Y2EkxNBofOdyExA1EtHqkAAiEA1qVNodOXt1Y6JXV0YBkAS2UXx7PXtzGEQbIrpCNsnqAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1iuyDxB3gfVcL8bircA6AmtOy9F26vPoYzPChxykFiuKCtrnC3hUZXtHoWznB45Og7Q600bW1C2UfZxkc2A9gyBlRhFPBpj2kzXoNpjSmAimNVNw6XXZagnDt8k1DurawILvmt4iE1XUALePmyblMmhP%2FtiPyiulz1AvQINQcV1miKHbu%2FCmUoUQEuc%2F%2BgkcAWdffWTA7D4YH3H9%2BGjRnj%2BnqGH5CZGm97s14Bjx7r0%2BkoCZD6wzOYwnrg1m%2B69WxaL7IWYSUvjW6f1I5axj41OHL8e3tSqVRv3QC3LEnSgKxr6MQ66Z8dTG1fK6qMyXl0rzeJQcWjaJYI9ix%2FxfeGwzsTIGVBv2IStOsO8%2FtokL4HmbFI0F7s3VGuQYpT0Hc1vKkCDeCUTUL9sZH2WEoDLMZ0fkfAtin4dt2mtNfV9%2FVH05rm2lYE9FCVpoewYFjLvzkECjEoAAo178EhzPyVXR0qgq3wF8CazhsqkvOQRj1Bzc9OfLxIVm3hhiIgjb1qt02VlG%2BsFTDLfL8kzBn0vqCxR92%2BZX%2BKRysdiLt58k00r0eEXQXQtY57UeQ0j%2F%2F89ynSw5y6UQFu05RlMcHb45kqmlUp6qc5Zc%2FM3kkj292Vix7%2FfzfY4jG3Mqk9hnrMof%2Bl90QPA%2FORMIu1s78GOqUBA4v6CCuYzqJoNlUKuIVQvRAgcJazBBqkC4wBMyaf4syd0ECqFMs5BobnNDIx9ryqjcWioN9y5PNItPSePZ0xJzt3a9WuDOj0pFVpUiWpb6%2BIILI9XJnpEYHdi10LLe%2Ffj5OFB8RJIm4mwupM4ssxAuFmzemSaR06F568dZ8EOXJeGsp1C1SJ%2B5WxGaRn5%2F3lsY2MhDb3XoGgzAIedVEN%2FyCZq2Tw&X-Amz-Signature=09edb05b3bd86124ad14d3c532cd45d381419ea9eef8bf02188c41180b4fb3c2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUN2ZI7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCaKKcAiwr4jtuKd89Vxzdl1X%2Bh3rGPh%2BJ1xUSishqOpAIhAIeUvo6CaSd9WFmZLdk5HKe48V1CvO9rOa%2FNnMzrSBCmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1zJe7rWQt09iBiYkq3ANBBFuP9PXsMT3gil64rwPE5bBnou1hRslSgkMg76Qy0GW58Pbqg5Hke02eBEgbP3d4zCfcJQE7nFOzwdcqOpCDVWWksegMYeImuADf9UVar%2FChskKwX%2F4B4TcY6CHv3pBjI3ks8upUg0%2F0o9jgaAzVnh87dGY66YkSjJKCRPCKay8jPGDPDaJwO1Qt%2FxamwPgaT3myg8ICqLUhNs%2B1IFFheaBxL%2F9sR5%2F0bInZF7ZlnPBwzMPaDHKPC3CUV8yKYs3PsIubn1hTJNr%2FhvqJ5yZ4xqfPAhC%2BHOevN6BUIAiHzP04SYI7Uz%2FU0BDWtyaVxnIpuQ92kpev9sye0HqjSRxXdr4cQNJ6TWJ4c55ohLOG60vpQUERsRxrk%2FtOu86IOvxfjFJt1NUKwArjh5Q4eHx8D43nYiOekbjvBm2VfQzmF1pbPfgYOoI2ySkfRUWL0PrifV50fLAL6wxFFUED9oXijG5Q0VpLH5%2FmLgTWWdpmOKQgqNotnPCt7fA67%2Fuddhn4Onr%2BiqkvZpKFnAgz%2BqYMQcQlcwB4toOj9LBR%2BcxoRClG30GaETMe192R463biap7WGvI7LWkMLSYOmzqIf59cJNDs%2FOSV73nrQsJOAtya4KWMGNiCVZS%2BAYVkjD2tbO%2FBjqkAZ8Jvx1ZB8Dr1XshABZ2MExdABsfHxx92XTUJ8aC%2ByqIFSuomC1Q5b2yOGbpbmPgdv%2BXTZToI39vlmhvzQ71z%2BfS5RucgAXsnZFtqfv%2FB%2BWoQhs00QkA5ckq%2F8fZubyFCCDisqDBfOBD%2BmIcSCiC65SpHkW2tHxzAHaFnmIl9nVbBt0lURtx6yu7QxMumsUb6Dji4IIIGMtwiRUq72oAjM%2BpPv2g&X-Amz-Signature=deb335fba31f665229fb8d4b4bd60000659aa0e9f13b1e0f93d51203aaea23e2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
