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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESUB72B%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIF7wejbrVFTftRbq4tWUo1zXyu2FcpV9VEwAXOna2OgzAiEAgA%2FUYEn%2FDdype4VH7PBDRBveU4QWk%2F42o3qTgImmcqAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJj%2F0OoPcjxZaY4m%2FyrcA1yGoZUYCcrVZ3XwDINVlGnloWohDZWjn5DiHeU%2BXj1TFvfAmiRAdF%2FjRDmzxe7RJL9%2BtYxoagrc2pKROqehy7C72ft0lq6QE6cS3GtYT4oDmgLYXRIBJdrUaMX6XLhbgKenJBnoI0fuycJFWPfrcKXs02QCptma9oukBWJf5MgyLxpbjK7KGgO5ghNS9Cf5heXJ%2FIrMH9RvG5%2Fy7CnggXsRE9f53RUcQ85dDmJ00vqnrwad98EpTWdmCszoXs1qgS6CCLXG2wrD1llvqMeWh%2Fn3CMBt330hqy80HTBxbJ81yPmpmhoa8IIlKwhbczY30%2B6XkQm6FAwrU4cWOU6V0fMm6NGFkuWzDHHm%2FhD%2FaWsvT1gsb85XkLqqS%2FuFPmE2sQww884Y5EEK1V%2B8RUs%2BddnTLStg6TTecPmlblROxg8CRDROpzt8uvrf%2FyrtNVJLne%2B%2BYOD8W5uQAQR6Cd%2Fdyig5GOUpHvgEK6eKHrubnXRhZdN1RErFqL1sbCoQNBJYkmkpEQvJ0W27GJmMww9xOVZ9hJsac%2BG2O607HsCkj%2BcXWsJPmqJOgxI%2BuJy6AFct9uriDkmSXUmo9NyBC0nvkH4i%2Fe0R2JFJFpPMmLoyVbRedzGwPko298AIYMI8MI79pcMGOqUBMwFkEzsE8lZNX7oppw5wmtmFn0FuDSvHbzvt6r1psIkPGv3N%2FIHDNkR6D2o9aLOu8gCz4mJOL%2FwuGPDX7CZChaSVVJTBP0HcCVx6%2FEdj4cnXGtF6J9kFEA9fZ6QeCtj%2BcuX8Zc4mEJoNqPxssOFAVEgHWa5FSbOPvwSFiDaPRGhdubEyNG66kXuGHf2iJjpaEwW%2FChrNkJ1PHHRz%2B4vX138tsIiG&X-Amz-Signature=83fbbe41ba65aee11b9425948ebed3c520839e6f77f75b616cc97ab498688a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSQ3TIO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICgqiZoLNaSYYhrZafYvKOzSjYVn3nF6szszNtkwOX8%2FAiEA8ZtB8klKYN0fH6LFE9bjt4TIQ2bZnX6j96vUrTUQAcEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHpPKwgA11myDVOQmyrcA0do8btI%2F4btvWbCtSEPnseQ8XbZyLeglM4sfbOKSy9LXLZyi0e3zwZr8dTldAgeJoK6KKFZaqNSUCI7anrZ1QljRORz5YJyAVcXpmzvWbsTs%2BsRLWgUhT0%2BW3rCzV%2FluwSXxa6mH8cEmp44OoteFFd%2FsrOVop9frEkaP4diEL4Ftu4YOPttf%2FDhK5L4Wq5l58wA4e5AzsUHc0SKcXyHpwWZrpdKaSw%2FcPU5zxte8Rqp%2BuD3cVhmQz5DiPj0%2Bo74qGW4KZNrtjX3dD3bKWnJSv2u3ZPM4HH9ZsrAPCdbTWa7faSb%2FthLd0L7ptSWcUatZxByEaB0o%2FBPr4ba5yxLSpAQolCVGxEs7zMW9RhhMhASNNivaWzBMN4CLOqqTMuTn%2Ff%2BzFgXq69icEv4SJbAttJrSIkshu6r7cT9mxlGHWaYiKlqAnMpX3ZIjFgDYmX3MzZdsnzQwW%2FkNsI2287wlp5a%2BeCxFCUY3%2BZnuCTyd5djvMJIPEh9PU8tfVCEWxPu8Jo%2BkvgOE4HaJgWudkyR%2BYEkfgQ4RRWYwRDKU5N1N4gqc8x3xMPrzRFkh91i8OnA7fonSsSVOWw3PJvh2fqFYPMJxd%2FqnpSbN4VbVgeqGuDz3FL1LqFsdo%2F%2FEGNlMLnkpcMGOqUBsMViMWB%2FTPOUhL%2FHoL52Af2OhKhiNzZwO0V%2FL5aDDB2yRIfLy8eyeq0ylBv869xZK%2FlzJhMJ4XjdMD7GYg7zffMck2g8gVBbCvyuzvR17nhZkVmcNYxVLdmJjDZ27VANNWprNqianZK48ZuHR1JA0RX3FyNipKTZJCC8v88KGzh8A03JFwnfcpLL%2BJ8LvdiBzXDE6r7L73HQTpWiSfyuz4t%2F4TxL&X-Amz-Signature=bfcfae3b71a47fffad68b7f35358fb0f123844a26e29ab7fc0344cace787ea7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
