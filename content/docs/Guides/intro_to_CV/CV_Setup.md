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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUOR7FNT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCasyXsDk%2B87PQ1lx14BZzWht68e2FzNTu2%2F78scCumRQIgD8OWkUhFo2%2FiRnyBYJaOb2c6yMXsA7JSR8EuAkDyT1cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0Yq9vkveqk%2B1U5RyrcA46ftEwemoNhW4wq%2BSU8sn4TvEM2TU0GQKm1AV1W7my3sr%2BAjkEt7FfI%2FBrDqedlONYAYgdLpt7lbBEOODbzcq%2BU2dGgTsuydac20VigfuameMZaXBExg3tLcQEEITx5RqJTd3Hx13EcyR0oGBkKaHBDFcTYxo413IIL6TtR%2BHzARf9Lz6xsYeBxtE4TI7VUSmr7BKtL4nn5Vp2QOceIdXRfeh7%2BfrbVQXwz%2B%2FJoJV0tBh1QrAH9T65fGrEWzfPz3t53htvu%2FLOt4znhdvjsauBqU5b3QR4XdiQHCSKoV4g%2BibgjpsKbAUA7vVV4nebCxj2rxK%2F27E4ozjNir%2Fwi%2F%2BCJ8cmY75yN8sw1qW4R%2FVfPv99FnwmSfT0b62FhFwSznmHBUiDAk4PcRjWO8D7PgmTT0UpDhlJ5ihhTX3L3ftcoWhGSTMBJoqfd0kZxMabE96TSjIO9%2BtuvU0pj0LIGKn6JTCMRaAVOc31FMVgCNYaokFtZQ%2BNVNf3oqMVIN7XXTs0WYBtDAXwK8KCdLGUzI%2BNwuQffhZZRE7X7USKMRSvMh5OYRREaKG9GGRol09Gj%2FHAMqwbwzGWwssvwSbEvITu5M5G28MFmUzezKHWTfQd80mJmKqCsPg9yBjE6MPzz0MIGOqUBmsLL7DBtifOBR%2B3hp%2FA3hpLWqLu3RNR5bhmssM%2F81B9cg8Layoqual9mTCsjukWZtCzIeH2F1XrffZ89rsHdFkyNe51TxnXUKOgPvG82utCKzKLFeIyG%2B8dKTPxGZi4goj4mfEZO8ZcezfN0Lejxc7zrXBgSWlORIqEc9h5TaoSTOzb%2B4IwNZ25NEyXcwOhfTaJZAD69cArrdVqF9baczo3Ht335&X-Amz-Signature=c130ed64e44cb762b7d7f4747c65161e44baa578b475d6c818f7c27bc428a916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVZ7AZH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCus2BTFq06roBLaJiJlDuTdYng9Iruuc4MffHr1VkeowIgKLtbkUBinqQA%2FZ9tqL%2F7ODTTiDCUniFWJFWPiUQZjr0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7vxuZuFBQFnE1ywyrcA2b770A90y00dmLLLpuSwcd%2FG5D1xoiNTY5TAo4Vh9dxKqd%2FcKRBiLDy9EVNn%2FOkw0qsqps3MjCnubG1GdfpnFVgI3afLFptLCCrK%2BKhiRtoyhpL7eCkYulTZabW79JkicARFnXoPmzOqLXvvK4Q97xoyOYbBMv%2FRPFLoR2UReWjzoekPZd4dPgDei8PxEf9R7JFwlLhzmdTXWKeTCjsKRPO4eSVfpG%2FVhaaUdxMXkJJdGypMaVmaK9RLXn3G3YQ9rHVa%2BGM7tlMgrBDUaLWUnRFT2iLzipK5XcoRLCVWP9Rpw7qZk7gnCSyWzYizBTj%2BKG0CRecLPLoc8el5Ww0OQKhgZdoUlR3M3Y1WWl3N3rxpdvEdwY12NftCBczMTC8o01yOak1bghfk8nxndwaFbK4q8TCK%2F8UF7pbMGz4Bp%2FKxb1BzSFMj7d3pOfujHQQ22JXjGJuwj7d%2BHXzLhbMGbgolPLHvWoS3qeiF2lLPI7Dy8GrGGvoHvyviK72tsn3DnfNL%2FikGEHM%2F80iwnPEP9xADExg%2Bvs%2Bw4rBWctOV6z9lWgbLfzrvyk51IXMSqbYTi%2F1CRtk7Y2bR1tIsSZ6ClG6rL6BIFAiKl8t7goM5jpnqByyxMnjVjeyUxMKMPve0MIGOqUBmsrRdtyQRilFxFuCG5uVIIrBoe9xrygadhFeXNIPRqrVNiibNnTNC4ahpW1VmCsHaLOWyLdLdgdtOHwXGIplmHs%2BGPXM61ou7k4PKDZ0entwTa3GqTSzyR0tMoYiWHJPS4HWGvcPen9d%2BCKPVe%2BIaTdnHxaxXtC5%2BYXR4BjW%2BxrUnrPY8J1FuB2dWh8l8r6lyDsi7Q%2Bbk2pMFuEMBLuf%2B%2BXWswhT&X-Amz-Signature=71830538667dfd3081a0c6685e252ac13cd3ecbba075425c7ef46f021e86903e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
