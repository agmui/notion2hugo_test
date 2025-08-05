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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZLONVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDi623Nc8Ess%2FUre%2BuqCmMETVI%2BqGKQY18REMZ1OGOysAiA59u%2BoJJ5T8KJJnNwPS0rSRnW2v69%2BlnCl6s7aeAoonir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMzeybbfi3aQ0y6GJJKtwD%2BC0xihXhtNwearNJYmYm5HoI31lYH5M2b7LvFeDljybxKUjg77BzW9kDwgq7QnD1N6t2XmCUbzs1yyiFuN3noPQ%2FNL2NZoXuCrZF8hgyLFLo2l65Zi2WTJkrhubyzDTzJ1jE2m%2Br0Mvmi3iKvXshPq%2FVZZIl5XZyH7WxU8WM1E3Ta2I1BuMM3qvRudFiaqMeL9qlQFOj6CErmiX8SSvOtvT7mjtGGPhXlpi2anWYPaJDYDL6ypsU4pac%2Fk7EdzHLkdLpW6iKCSaVNnSS2vLhqyeADtP%2FGPlo9DrQfbwjVRI7Qi90VAAb48ZoLv3puPLZPd379UfTBWBY1XcfEmDvmo1mZHD8YdxFqBECg1Yo92trPJGCKLjPy160%2FD6QJ78jA7mCc8786jnQLRvf2XS%2BC%2BOwA6iTeuqkAn2%2FURSkolS5bgmyZrIKleQpohRAr1ZVqTwkE8t3NvQqMCCSOdU4ZbS9OxYQ8r0h%2B47rKZSzrI5eMLVfdaEBjTramdolU612FaX%2FzJ4JEaMno2opl3ns1Zgf2%2BylJLY9HicamjaTGJYEvYpZqmWuEqzUT0V%2FH1JQ3azzNGjv5Gn5JPbkXqbybTY%2FBoDDbdpoczI931dE5oIatD5Yki7tUX2j6AQwvKzHxAY6pgGXCojYLdNN0Ly6vwuS0vPuVwfgkruRQJxVrSO8ecoi9Cithd8v6xFjHJLH4MobZtnFm86adtVcvix6ifbPna9Azb%2FdmRmzdbu7QkdDH4Jd1RuYtq8KXhEB%2BHioAirzPLgnPE6%2BUqAJdYv337%2FaSMHyPvkPx2MOo2uGp7Mdk2zRD6orX5M84kT4O6JaVW9OY%2FwDHW1lnxXKeYXXQiRPcaJ%2BnpnJo3Yr&X-Amz-Signature=0dda675625fec8fce8c830f73e159ca40afe17ae280af4baa2832e822d841a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS23PV3J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICtAjfbjGk8xxuNakv617rGAPRzY1iW%2FMnM2rKNiBNeEAiEA9%2FRaCIJKp4NMLgpkIAWudf17HOmwAG3nQFrtC2TuFdgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMB5oeNplMcL%2FgpzKSrcA7yUb7ODZSU%2FYfVxfN2nEwGhglDZvvfWIxOHmiIG17SgMJUTVZC%2B90p9RN7YYtTAuFFwK6w%2BTEmuQdpeTjKE5mRf0CiHIMr3lCmhJMmz6FCBA3l08TJ8eLSPU4C3LIgUJySFE93sWfFWfDB2HfKOl57qKggvsC1iDfsFVu6U1NqnIuCkCeoI%2Bf18qViUYS1I4D9hioGEWH8nrmFph0u2V%2BGqVA0pjphpJQl8L%2B4jiVl8UdhyFsPdUB5XtCRdBDxMDByLzwxogbxcKh6%2BkvXhwHGkZ5ZOOZbxeqk903x19Rz3qrcF6o2mI59p554IA%2FF0K63McbJffTxRNte2Hv47mhYieBfeo8jZMvOSx5JyAx6g3vPIKNqPsz9uVkJ9BC9fUMuwxzc9XcvU1PQFEolD%2F6yJJi7XyeYgMYt%2FDKPbQb7vav6Omc1fnXa50%2Fsc9RMwymvqtsSOdKATt%2Fw1gpcOCEQy6T6sRJsdvPI8cRw0CORgx4nmhYl64othEoWmi6jcjPwhsVjKxwYNagTjfGfPVBVpZLcEkWUqiGFIY0RdJfu1Cy9mKBRwrVstyN0TAvEmDyQC9EUT0kvn96S71hHti6RkRqaKA821T4%2BFjBd%2BADed0PBbq6mCpICRebxnMNGtx8QGOqUBHEE6wBtvNQY0CCOKsgjMBgHcxfb5u5jNm0eGjrv6FvBJ462KjbvSlo792lZcv%2BdsgR2nqTY4x%2B76PK00EYFnrLOgScFKTX83X4Yz0UwwBFz3CKn0%2F6GTXsFP5t1EGKKyJUNOWLFr41P%2Fw%2FM7aQD0%2FzGoAODvG2ZMN4I73eeftz74Xurecql%2Ff8dh9DCPI07E0iNNV691zlRpsvOrtgUkfbZyitBF&X-Amz-Signature=9d107292dfb01a8884b4963aa6613891e3be4cf802c42b6b3de613a0260a2052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
