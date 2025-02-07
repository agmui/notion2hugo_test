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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLTACQZU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDaV69beRvfZDcoNr1IEnmSGmliIPCVKmnDNbnnSv%2FoWAiEAk0vAXuJ%2BgQcvTSBR42PkeuqW7nt04KOYRgpDyur0lIwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAYlPutfP0%2Fv8%2BotxCrcA4V5hIFFlx6dih%2FH3eE0A25qclEGv6yRTQjX7%2FpuMtC1A3ZYBkwsmsavvcIsctVVKZkk3wf%2FKvYMwoLsLu%2Fif%2B4ooZ9lFy3fE%2BsexPpqkSVkCVcQDgfMAh8iaoEXhEPwVGctuTimfcv1vjsMsftcNZ69Pa7gVNNnE1TF50ri0HRiUMNWs82ApFDslvAI91mDaLLh%2FSLksh7VCo5gAXb1fvMfZvs1e8m6E1opGFADdN9xXLFpLUu1LfSvggsn%2FZgUde4xcsAc9PvQUZ6EY3FUMhhQGTVsLNG%2FKx7zqRVl8TaZcHWoKsixC4kr6WaN4hV%2FWp17kJZkqXQfJIAM5aarhSF7n11a57xxiyWN1EyjEkZdJliMC4oyeEXcyuMVIQdkx1ECtA4NqMRyOegms8oiZAWzTb3lXadXqNnHPJZaK9skBf6cJ1Vqx%2F9Hse0bDYSAPs%2BK%2FcFPqBeldr1x1DPbG%2BDR1SRGaopxN2%2BeCNZQqfFpivZJ4MpJ28OZ0KTCepKYxPdJQ8mlPAtW47RaqST%2BF7PVQe9VA2%2B6Bjej24aS3cFlLcFfWJRNsatiqidGkN%2BZ1jaorJNhJ7bRdwsD%2BAbqsCZr8OEn1DCjghc955N9m5ayjuBm5lu5R2t9TnhHMID%2BmL0GOqUBNcAJqysj4uCTdXjCtE3fYCrBRdQaE8u7FsH%2FOlWxfiFMHUL%2FbX4OJVj5LbwmdWXoO2KveZUbIQCxnfHpFrMAgr3Xg3eoJIZhh0Xp%2Bt81k%2FU7ws9eyMkxR6GwWm3g0JgAAyrGHLzUv9CmTRFvSt8suk9PPy6XFYlaQuamyMc8n3yrWbzZfHPKW3KJLf92dQQ1%2F4XRaB9RutLQ93G7wo%2B74wLgPikS&X-Amz-Signature=34741d723c2ff5828c85b645cb2dfcc733d026b764d8f823b574a4db1abba8b4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSN2BQ2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDCgGNLfIOby7qzCTXfsBGONjah0ewGzWXUFmEzuWI8ewIgdR%2BwvDe36tq0A0XpUmr6XhaWnyf7TsG31BmQI5bVCgsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIr7rbZBrJrKZK8v4SrcA8wYG6vNz3aGavy2XHzUe3IM5P8bvRG79IQvM4iHCMwn1vza8DTWoiz63ROAYYD%2BCGwTlzkRIfHTBbUuS89yX7HTMsw%2Fi6HGyww4FgKM%2Ff%2BiY8F6BuVrymRre3nNFleGh9KgfuInXcMUahYnqnTa8oEIao3dFXTblaIN24i%2Btse1r8Ah6SjfdVGwcGTS%2FK2AvOfoGBImHDjPKDcB%2BuveuR4aYhHf2y72HVOstvLYoPHv4X286UvlKrZdfn2Os0bdyXL%2FNGP4uZcc6%2BdUOG%2FvM%2BCw%2ByfMr6DEMYCnJBJGUKw9%2BcQtG%2BkhpZV1W%2BUL5jPmYf2%2F5I%2F5kda6dNv3AzE73PbTFltUujIcx8S8Bq9E59zjQrp6eU0wx4ExuieW7Gp0vUfbfPBKZ%2FFAq2x5snNZKdSMYq87cdeoynx%2FusIvFYrj6VdU9%2F2BWamd4VvWj2DlhiGFHWY%2FnPjl3ovRaHkRTEYOUiV0XXykvcxsJVDYzl9WYdd6Y%2F0TYiQfSsllo4HKJO0Tky%2BXxcXsolr3mWpe9HM8VNnbSoWxs6z9ev3LPFRlIDBnimqqqBbcyn7yxecK%2FPEX56JF1d2FYKIPlRHyh2cnOh9U0jf3EGIN0HXnVPyOLnA%2BDsBMjLIrt3NgMLX9mL0GOqUB36FwnzXavi68vdHXlOnPYVAw5PuPIVgdZ%2B9073EBJmTE00k0Jy2r61oYNEHZ%2BQ1zwcGVeILRMJxMs74B%2Bqk%2BLCx41DzEUUJuHCiS8JqzNJq%2BH0JXAMmqEwNpxoxIIrsKI9IB%2FRgK6QuS0nzu2UJv19X5lKid7sYUuBBiur7oXZ2oj0F4MyHSz2W76JtrFoTuG3Cz184UskJvnjgQvhM5vAx3aODE&X-Amz-Signature=717fae4e48a6e356cab25c4b18c4ec307b7a095953e143fa642e0fd385a81612&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
