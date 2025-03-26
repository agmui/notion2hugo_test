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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2QVM3YJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fo%2BrSo7lCEnBflQ%2BJnPK3QCy3poNkg7kSyeNcXAbB0QIgalcWrOBHMhNDXPSqq75z4NVapfexR7VYHzqVZtbptLEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDBLmFT%2Fvf3lzESwF9SrcA1N1hDagAlKH9xylyXrJoXB5HZawolWmaCGNwFqp8KF8eRl%2FqiL3bk%2BQSdW9qo3xwtVtWDEdo0sFJPNxar41cdVtjsCw6u%2BjIVm%2BQvisaWhfKPbSNYoKHcCRpMFe%2FhXLFBWNKAUxZqSEVTp8024lO6D2WcuYRpglTGrOk5ueFNTWy%2BI5nDtj7nCoba2p7U9IokhKQ%2FmMKz4tdi2QkcTUYK%2F4vSi%2Bg4qmNyZqKNSkEw%2FnahqBWGZb1716eQxxt3SfRE%2FNJNlkz%2F0nr6YTfo40hb%2F1XCTzYiUgRJWq61r%2Bw9K7wA3a2sXLiN0YTf5QoCO%2BLgO0ztlBXRGFjjopIJPEmsgxpokLBpmOdquId5PZSNQbuqj6y1Yj1oCjuQdp2cz3rfGxR88zTigkZaWHwzbFvHZhzMHUPH0hYqCUR6Vrq4YpQigbfb5thNrnTmGaSAj387ipzWR67shcqR0nWtn0Oygjc3BKR08WEDCgsJteIbpoauz5%2FeoE1TbWOaRI6Wdd5yPUNr3WNPMZ1QnHHVQAB6awGO4ljjJ1ItfOYjkeJV0PqB1VJA8Rpo3ZBPnaLB9UK5Kfw%2BXJx0G9ot4kttyrptNUTidFdx%2FQRX2TKSgkxBWY%2Bdz%2BHtK3QdQn35osMJLLjb8GOqUBBk%2FN5202iUV%2B79qjNErL3JMAuHrNarSHVB02L9Lw7p2flv6VHB97khFlZYzUgzhcMi7Ozkf3fNJsABNjcR1zlI6KKYuYjBjOfVtWUOsixO0UlOS1teG2tcEofktITCLpPL%2FuwhUgM6WCyJ%2Fs4ZehsKbevlXfIaG7Xmb7qqSrZM3oiEGxsaKpy1ZrtOxTqOIlegqB3iiKs9B1fyvCO9anepm3ElEf&X-Amz-Signature=3971f8496c106b6173d5e81354a09e9a68e4d48179948d9dd38d8232b21bccad&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT24YTMT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7zUY02Y%2BBrmwrtusS869nmx1CInVbQXz8XtcOk5tEoAiADD5FI5i3eJM2w6DlBP8qBuu7JjOUhIzbwF4sF%2Fsvyyir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM%2BDsqUmxpILnbHcz0KtwDX4kYxVF8uGEDDkZMliMP6keavRJid9y5PR2K4ollVrdj4woSmogms57HZa0kvaR9uJL2vn1B7YcrbQ3uMqJZpAJ8fjZmMO%2F6VyjZkJAS0MgmIglEcLkxpd%2FUviCJk2aNpS4KY%2B02rzfyAgndSYMwcGqIiAUqKz1DxsyK%2BLmw%2F6eMcoGFL8iACaK9K2I4EosKPVoipDF%2BC5vkl1PY0gJz8abDEh8gsKzfuDt0y9qQ9rhMIIqzOq46Y6i0x5AKIkiNlZ2u6la7EJTyT5zqfVoY3UWYolESNSxvqmK5bZw7tDRT4G7z4vXZX%2FyOrQPlBXOB%2FVJtGu%2BmrATX9LmRplsOs0cNt2IUIt8V7YNs7udPh%2FrCMb%2B1bMOfQoReQCT4yQhIoP1XAEaB6iOVdRZBnsBYv7x%2BzRgogrGBiFzwrZLrrxnfPVuOfBPQuQP75gtKYIf4hS0pzYxMELdJRHx8eZNdIbeqIk3ICPKuzZjOdnCDxq7qG31SlfJQlm%2Fp85daKRU%2F26ka33NBwt2LDHxOYVVJLOyIkOXVlQigH%2B7RH00ifk%2FqJXnSoct0jd44oyjxXvhNfuAeRz7iiB7kZLoGWatmDrF4M3jPGxXb0Grzr2rht2n%2B1PxfR0R%2Bfo3O9D8w%2BsqNvwY6pgFHUTW%2BMOyEl%2FjOMNpjZu4aBEd5ZLLAvkwdxP%2FBLfrDwyRN2ulZ%2Bp1QM5S7VrHC7JYv1cPskvLfZjHRRWpqXcNQ8dai0a4rf6XmVJH%2FxQzypTkQNV%2BQS8vXvR4DyL9%2FGlD9lDaOZzDePHxHZLF4AxcEdFei4iWKjSKDLlgAYqxl4PfEuqOjS6418qZ%2BOGP28siYWirH5mwinQ6mG4WZ4lErEEib%2FdtG&X-Amz-Signature=7db0d8f6c473de6666d922416d184bdd11b0ad87889b257058440426df271b88&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
