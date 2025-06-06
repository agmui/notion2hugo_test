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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSCYVCE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIF7dGS2M5jCLWmaH3oByrfe0avHwM93ekPwIsfppSLGnAiBIjlxYfm%2BzDpvy6ApSi9Wl4%2FfCcNJuiFtsS3RSxrKTCCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMXC4ZjynlAwLYxv1pKtwDBMkX59fl54umbkYQQRh2NDyB%2BY0OyGPInjHf%2BOaXZP0m7tPMzVojiRfoSSSCsnGGC6epuKIsIwmiehGab2YC10l%2BwXuDD65ArIqNUEgYNL7iB%2Bmn%2BoKjdhFZs8NVT4MVqOEJqETPTLn9TEkfGH5ONMT%2BgrM4lUPFwnZEDJ%2BOeXsahvGfQ91yGsHJexGBYWWlsCta0m7zLrKLJZEtt8KaNLnmEWXj6CidzKAprSyLOXl3QcVxKUX86tBxOVE%2FzCBCkXF8F4U9zAMEKeQ1ppcHGLDMwx6BoPiCaTpBjnnpPr6PEYwp3zkfB1lifZbnxEs7D%2FRFlOgM60tgBkWWhSTjQUo9%2BLdoTHXfQi6ornPXpVRJJxmANZXxLUBFoiR7P7DG7LZO6Z5bFqoEHMLBPzByAMBu25Chmm2NKbmTjTFCWYvdok4IBZmDWJ5LdFM6K%2BdJ87MFXVUHbsYKWY8wMijErEDnSoOkVgsgFGzUus7iPrYrFLSAwiHtjkIdnSJ6i79yhQ%2BAUvW826RInFeublHeL4poQpk2b3w0pUOvj1P%2FIx%2BOEImIecbjCbeSb9LeIKTJDctF7wAJ3%2FhdFV7aw%2BsV7oCH4CvZxdlRlFrW%2FtY8rblbN8yGPnE6kxRuJs8w9PeIwgY6pgHJJ7r4VlIJTlPS3niJ83rcSAkPPwrwwQVFCq5ELDiTWp1NEMgCjSdtST9LGYNXNu8LFN0fVnl7L6qRH5PKNe2umzdT0TYu6ARHXRtXZjPjCcyHbv3Eo7Rtg8%2Fc5LRnVOTVm6znCJOuXbXo%2FEOCs56NzZMomSarvQvvwG31ArrV23meI0n2KsxnuhWQu0YksO0cQI2%2FBS62L%2Bl92lxGtmoeiNs6VrmB&X-Amz-Signature=4264db1fe01fc7f9fbe909f71928b43e7c6e4189239c74ec67141f315c80e6c1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ2VKJQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC2%2BxR9Q9sej8H7kPQQ8TBxpZW2CejEv5fWg76jACaZjgIhAKxpkabh%2B0UIak7Ox3YNlvVUyNVaQ7c9CuO%2FPaHfFoHwKv8DCFIQABoMNjM3NDIzMTgzODA1Igw4jmiWaAbL59vEffwq3APc6Zz4hOR6f%2BdiBAqQgfjoDoptjDVPCrCNq6iYlL6yl7F2jk2An%2BqkPa8TpJAI8NX1xDNuwY%2F2LqdVkAUvaPqpi1Tuz8scHoYylB0Q6pUP9Y4f09%2F%2BqVyhF0lYV0UTbg4P%2FaM%2FyGdqCyCOyvaiR3EKZvEBXqCttDmfjcJJGimmlCsj%2BU5neOf8FRAy%2FN0T%2Fi%2BPHZFWT1ja1eO8K3Ln%2B7NPbi5BuNiT3ztxjbMGcnWXe4Mvbd%2FJIi3fBzsxBOfDayq5MxxJ4tHWeKbgjtoTT5jVLoedL8akDtYfmhOB3mZXIq9az4OgAfcMm8R5EqGT436Z5BaWSJhqY0WGvpazikXoLQtTmUJxKF54djPSbhSbouyDwaO7S544gXA8eq1Vhe1b1D1qf1w%2BmTuXsQl4%2FCxrAv3OrR%2FoETltI2T%2F6NTXMcIpFh4EVSMZkN8rFRvRvYdw7IadoSLpEFSHGlGVM6rvHa1u3rYE47UHBbFN6O0Q3BCT5%2BAR2H%2BR6Euxit0QsS4GpLcVJr%2FIAi7yJ9HatV%2FPBL%2FuWqx5Sntzx8LDV54%2FFFDIhIlSecE1An5H9C1yExSDDt6DFeCBOjqBHpFktTFT8eG1VVFoVhs735mkOWASNNElWVC6SKJNCYGjijDh%2FojCBjqkAXSyfMhoCopIK7alKuHa9x96MnG%2FhKfomJ2QZVLL1XX6ywgYFgvP31mYMMx%2BfPuWxAi0aLH8e4oLO3qCBhscGzHk%2FGLOMG%2BN1yz%2BADsq6BR43tPou6E%2Bg%2FRqvRonrSnFD9ODNqmH0W5h3qgNQ1044rzCOR2DtNud6whhFLZD6shY2jYfvkmAQLNM5P1ERIOzkjsiDpFeH3UuWR6SgMfhc7UNJwAg&X-Amz-Signature=663f0b76b48942a93acc4fc1bfc17a3fc81583e5135a408dd629b40f5373421d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
