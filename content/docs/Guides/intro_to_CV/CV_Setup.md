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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOXKIL4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIC8gFPBhvP1JwtLIzieDc9YZHUSDmHTGpTt6acl29GQaAiAOBwB7Wig5r2wJF1E5wZxmfNRuxIEZ5X60z0KnrTHCiir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMYgm0GOYXRGPV0b%2FRKtwDc%2Bps8tSq2s714l7iAZRHaXWyMSD365sPwes0xv7N9wD0pNNr00Sa2FQ2cpPNh3ffsjCn6j5T0uQxfVsV1KePztDJcqklomqwVKdqDQRnOoUiOFGfzKNn5JBGhZ1zlEfbsJc6LxwdFd2604OpJZ8gwRRu4DgqzWpAuJV3D6OTRPSqtmSgOVrkdbMPOju7gmDp2%2ByckAhVFdN%2Ff2sKZOH%2B0a9eXybArknWnn39f0CxeuDgEY%2FZaiO4%2B7QN%2BwPdNc%2Bmec1xs7NBdFPZljhqDY8woDxUaU6DLpLOgBtpwxuDMu5PGZH3Z9cRwDG9%2BPQAumQuIH9RD33WwZ26QwTwzsVi0Ia8ZVcoNG5E%2BYfuxhEQ8m0DWARL%2FSbMkHf7%2B6GuUDOg7xqW1h4B98LsXmg7y%2Fh2CJaSeo50uf4MYphZorP%2F%2B46UwBmmoYOTLY%2BI4zv1KD7lOfsdO7nD%2BIBPHPOgIsk%2BLFgfbrGG2%2Bhg4cVPnVNSB%2BVHAUMgbarH5aWd6teCDd9hqgR7QL8o%2FMuNMn2wLMO9piegH%2F5ETacHnVuuCF8tO7B8WJJ%2FuDHuG6jo5u8OUKC%2B%2BIdgu%2FOCFDk8tCsCfnOe3pvSu3geB1CB1furCIucOgg9mXZhB8b5p7GzW60w4%2BDOwQY6pgFxLVR4KdtYdLXkxMW14Jl%2FwkSNYdHjrunKnnQRtsxhTBBnIysq6R2LyIHqmgE2RanQJOcLwr8tXbGyvCt9ZW%2FWQd9knLP9CRHbXr%2B7eHR0lWsCNQFDfen0ZatciOjm4Nd74xBO6TKWrcb7GI5G%2BEEe%2BSDPn3SCS23lTu6i8CDLMvdBCWc3ziGchSfrjQjWBFMcCNkZQda1L%2Bryt3o7ZPAAXbfW8F90&X-Amz-Signature=539a592faa5fb582e33735433fe59508fd448c40b02a7301b7a1d325d4e3f970&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S7G7NCT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGKxTZvp8j8DQ8v8IcD%2Bs5IjKPRF%2BWyPOQaszNpVZKFNAiBMsZzk7A9HMeMj5c4O8CYAdJRLC%2FkdROe6DdR5FFpvuyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMUIHcdZdNh6JErp8gKtwDJLTOavDocxGo1BndJP9g9wRwh817HV6G4uMI1gVkBUzn0U5dfWWAheOYWYnHaNJsGFvhjjoLvgG1s37YzS7MrD7iCUrrXhYyWD5h09o4IJa%2FZZ7UdHCH%2FwgPyDl1UWfbLdWxrgdqAaL2zphKLnyyg2vZBmumOu2gjDHTiWywJ6qMMXaxHeY9yo0RRkqpdJV0eAABNmUaYqs9gDyB2IR8P6N%2BqS4KXtXQTeereehzkmMA3A4tuhoX3PStoDYvBC9op56w%2FcFdEUoZFiWQKflktodrNSQzz41KbyTPRk%2BsOrtLRHFefRr6HudXx4Ekv%2FhtmKW3VRXMMPfxlvoSFjcwaR5MDAyasXttAL367cwFNM45bySKxGfaR%2BTSA63Wsb9KZxa595H0ocLpLEBQYZnlncsDllD%2F%2FQf3N0PLJHvmqpW5iSbpVieqeaUOK1OoepRdd5NRkM9ablAPR2Fp8grm0A8UyFUZBtZzVNrWkvip3dffc3FDYWjx707xL4S%2Bq0HLY7swZa4mUM2fIekXUtx7ehHKazyG7dMprN9U7M7PqvGDcbPieJT8OGnyTo4hoDX33ou4QSK%2FhEW7R%2FoAVw6SHigEPUqpMYSB87PvvaADhImSBdfX%2FS303lN7UZAwlqrOwQY6pgFXmD7CzcnUyu%2Br7S%2F5%2Fa7VIyo%2FPmftzVcUEYBve232ER%2B4UyolrlO2yDXw1CXiDNiPOTRn9rPVAICopowpCr8zpLupWSAoEqZunpSqL%2BoXs01zncSHL%2BzCdBQXK7dTCW0NwQhNm0mIle4hEdakXCI%2BajefGZMASLvIeg6btIDsPcHxpuIC3eg%2FfV12J6%2BcrAr0%2FUdKHbuzSA8qKZF2Wq6KtB8n9XYH&X-Amz-Signature=59994c927ed7d29f38f4285183d572d7defa2a310e02d313e71c2d3e6b83ba31&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
