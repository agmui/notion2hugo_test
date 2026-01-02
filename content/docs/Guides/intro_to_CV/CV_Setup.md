---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2C3S4K%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDSLXFOCh4AYOje696K3JvUJD4Yg3UmodBULg0YStenpAiB4mzXNSYmJ%2B3JBM7DH1mT7wiX9SS%2FVhvpY8r20EaAQByqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ30TeVLVjsAvzWPwKtwDd6GHISLGSdWFCMeuF7jzucDBVKYcgErdKpCoHmkMbmnlrpXS6x5J0j%2FrQNjXalJaAEzBunfjYveLfPvLLePB16sGP9nhCc39%2FUNR3CoXYEX2Fju36JsMLxm1LplVMt4WDPckt3NYCgef8Qo0gegFTixmnok6DXKCG%2Bu%2BoOJT8fOgdPipVOtzho6hZaccwtUqUwyRvpvV%2F5XrIuL10TILIcSOqYlNwap8KgOi1va2sQD9XBgvxpvLrL7KSKPGGW5GzMeW5F3fRlVV8AkqQgoFNKCa1I%2BTtZYgZXfTyWAyQ0cXj1Sbh6fYIbL587pt3mZz19DlvseTYKevYUI4bG1c%2FVIniShYMw8g2cV12WQxgsABMux8afYqiBpsHLOLIRm3DCUFViLS6Xss4BMi8kgJxeK1xJOxf0CCP7gtBzK3zzbeGISqiKfBVew8%2BPut0WKkQzeG3PhO%2BnHm2w3AwDcEnIFQRJpo2tx7n90OMz96CbDuwxAKpkqTx0pUHEmcviulllsCub%2ByBaAinO7DLp3p5KK5peUZ0Dh0ylz2hnpq3fUb3qKQ3Ay8jHjBedIJq%2Fcybn%2Fx1DkiVY3NqZTj1qGuSUK%2Bh8lKius0cIa77tgVPqVnmV8EaKw22%2Fagv6IwpofcygY6pgGxCFamXU0HPd2Is%2BZrErwrSYX17sEF9WzzfgRh4IbOsYhK57nW46HVXK6QaYlmIak5mhvJxgyF4Z0lskNUdBIIqy7YivRCylcNxYBgUd3jvgYPNvQmEPXISOjRt8kWiZAkFI776bHGVAxdlmcx9zDhTGGTxb0Sl2ewylKWJcf2%2BbiBXQrRrsg8ih86Sy9atCays2pLCVC5KNfTn9afhpAxUAz8gmsX&X-Amz-Signature=31011422a047afff8e0fb4566b8b43c59149bb2882c04d3bc47763a43ffdb206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAKXQ74M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICXWnHjuRjKIeUBgKhTnohcL4RMXlPs%2BIDqvs29fEWMjAiBEMZgdx7pP6PxreHpbTGJ5pfS52OVAP5hIYZ3%2FYvrL9CqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3UGajoHcmkXcTqKKtwD8lXAvuwN%2BGvt5IGzBov7EmTXYOmstdzyw0TCPNRCGSu8nalZMaXm6w9ZsPLSIt9L9QxL0RHbe%2FWyKs29cmLk3t7WQRfmyoCYcy7Vpqeh4Jo%2B2lAnE8N%2BlN261Hk%2FaIR89DDn9rqsHakdcyJL1r%2BbLYpmRI7HgNOHoGzZFXPG8nqzwIRwo8lyDb%2B0OZ55BV4XXQYojBtcYrWqu2PgOIGL%2Fu39fMHjbqnFvkbFEvA5Sh%2B1VEHzLeKfQ2ZElF69%2F0pjqTDauIIVKwvAJXMUZK%2BB533GJ3O0XnQy0xYF4pCS9cnPbNV%2Bc8hTROx1Vl1gAMmhMXFjoJ%2BWe3uwt7MYOX98JPmFTmxksuBdmadrQPAiWr6wGqpPqY7fIcfEWcEVPS2GU9kD%2BAiK18tg8UoReXsJHMaVY8p0ibiR7GUIdtjFZm1zfmrWKTudn%2BSdewFXhdQw4c8B2L23lq1klgOnMWgMpi278us2cDM8fg%2BDaNue%2FDeHdKDzTRXBnExJQDutK7DZBbyZsqxEGmlz0Irnh2y8CuKDstSWvOqCFrEXQu6I6sGGT7l55I5ZvLSimiustyoPzf8WfueFIPkKCm6dVVrkuhlNXgQ41ZHQx4gtu8cSvfQIf9Gc6BYb9MsURe8wrbncygY6pgEoONxK8E%2BJeYLZhlcpeZ3qFKfFOgT5va0xJcVJ%2BA0HLKA5vQa2a2RuevYt3Ujpom1EjZQ0x%2Bf6z7LOnOXBBF0ZbtlcLZ1W1Xbh4B4AOuZlsvL%2FJxXwavYdGCZYbNq1qmelAe%2BFW388cyhXRAidOxeCsT%2FRx0HZJ9m60F%2Fqa4TgduMfCD2w%2BFH8lM0K9mVDWjlg3MnObnYe%2F4RreHbe9gve6pGW9R8j&X-Amz-Signature=b8a25056eb3135fdea13f3883527e24c8988a1f483b669e595858731d6e6d4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
