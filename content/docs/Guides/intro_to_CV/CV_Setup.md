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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMIJSHG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7OMgaZhpPqVkhdH4wZzRm2UD5vGfZnxpZfVyVesc3GAiAO8kO4a67k3n8bnMVMiFbcG7S%2BgJqL2Un6x%2FCtSGeINCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM360SK3sdFAG%2BjPm4KtwDUWWqH9vRxSj%2BxSfjhcghtWPRrgtYDP%2FUs9KZppjftZt0ieXd3xtXrllMvkyzTkhnrlsFCq1CD1WCjsHesh6ZugXRHCgyx3RIWa4Djol9W9etVrkRP7b6VoFxQDSb1je6VWoxtgXYKbPw9X6R4pqUCdVlZpKNEFllp36CZaElXv8XxLf%2BdThULuTqmUo04S%2FKOlwcJL8mspXBlvu4tSD9gvdHx1pAFwnA8aZRhY1jP2xRqnYyhghEBspounNfO7BnA81p%2F3fs69z0nBh3C4U0gjEEDIex1jT1Dz7bVU1mPDEUDXBOS9PS00kpFIN2W2DejHT80j6PYkR8xnD02WfTbvGayEy13tK3hJbVLMrtMCyWIKaNO7y6RCTGpzJmQfDL5vfIMcL%2B5ueVx2SDGRknCvB2%2F4ObzKONZw0GeNv4xbUF8%2B7QoV%2B0fL9MZkAUSwcRLs8bXiRMGoivp0S10oDVvIbYo%2BN0JeU0ZVPt3uTo%2F7qleZLQHmE7MZ2n%2FVB%2F3EmC14b5V617MnSnNsYMy6vaN51zAyzlg5lSs6%2BRm03qEa5SHgFaFdImEPmji4rGNQ8BwgYwSa3YqOoGX7Dt8FGkuDpHUTdO1z18ErpEvW8sXi5NLCnw%2B%2FzaluWdmDgwqaT7wgY6pgHHi0dZMB4kTNtKdeuzHNmV1yneEbW4%2Fqz%2FY8dhw0dRG7oj%2B10CckZb3XXOuGcOx46P0i4YZ7dbGOuoOOTftcRrZEpIg3%2Fa28%2BGHHp0la%2F5Gsx8RR%2F62IgI4NqM8SqSm2YXEOsb70je3I4Jr1ss3ga6jVh3cKMCKF5WnTVLihL7akkYJ5om%2BuEk%2BPr3Lxi2N6tgHEKvZy7XXFGDNMVCPHROIhfAIw29&X-Amz-Signature=937b5837565516a2003b0d2ab25b7584fe8d3591fad778ab96351a0aca9a0889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LMJPEY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BOAxr9JeUIwnDGrQV9xi8gmWzqbfjj7mrbRRIvKSkKQIgQFoO2kM6FBhMhtF%2FATIxyMK%2FibFVWMMfrwmjPaXcD8Yq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAvAmTznNBkECkVeQCrcA5%2F0y3C%2BnOVLsE7SuTkhDBrCYuvu%2BSz%2FCLnPUlyhCfMdSwKrdyuxjy7eq8D6TW9TpWssL86vYhJyBDdTXwagbxc6AQbldCN%2FNbfFi9KwIoZQog0tZwLQ9LljoPJD0Tz7AeXkrW9eZXGh1ppeKlRNdx6eGY8ue7I3xzv0WvpdWpwzEzILKcg8c0v0c8eWg7orUCNvN8FZCADXZD%2FSOJrkotTH331C9c4aBkMBB9ZZSWaFi0avBz1D65%2F1buGeCttsWWA28G7ZGayKQ7UGo%2BfgPaFGIXkBlH9ATVR8x4I67umv2IqxwRyHYOaBpIIY0c5phIm2u9T0%2FPFoz117uvoWM%2FAOSxWDQSgrXtTIMAumQMhgUKheMTebva9Q9bN52Kad8W1baF4qSbpH7jCF8gHSCY3uetuOnhg4Pqop0ivro8nUMJ8TrL9XtlvBv%2F%2FtlIdjSIkq2eeQjudQS45i%2BIWfMSmaNtkAWTZaOeKfU7OjhExJU6dDYEtZIsGh%2BPCAgVbdCPaP3JDEVcJx988w6W6UPFnosJl0aG7DmrN8odkDvf8pmIW35VwrF8grlxaPCpFXIhmAFTT7Up8CaZbzC8f%2Fvl8JDGMixBu6taAwF5nA3CueXLfsrSqzMmFxhnboMMWk%2B8IGOqUBTlmvGtfb1WNh3%2FzH8Fh28yvMsef0rcH%2FWZhhPWhZ0I%2BRfS4zWcjOFsUwHxXAciIp9c%2F8f0b1YHaROo3EgFsZHgCjJwyaExUrt5rUD9ueNB5%2FSjHiGAgwnSDGs4Zp6%2Fw7Se8tmqoM4rQAgXCqwzCg657osMb%2BtpZ3NWD8LA3iQShF65%2F0OeuwiZa84wcNP9c5rxH7MGziY01Ew0QA90prNDT1jdb9&X-Amz-Signature=9246922abe0502578bd5cf3c7efe7b56abb51ef15f6a1bff1457d60dd73a2d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
