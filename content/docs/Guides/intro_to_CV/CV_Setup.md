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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T4HO5F5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBBHydhI1ff8PRRn0NfJmgx7K7W62L8VasLdp1zF8TXiAiEA4nCVqgVNchGA9o73TZtbF8WPXSrG4pRXYjcIe85Oj9oq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEzw0sm95eXUKpTQ8ircA84QkQoDmQqbLjRjJ5JoYdfN60n7YMLCmbU%2F0kgdJsClrMKVZCFiI65HER6I87KQ6iXy9hwz806o%2FXd7%2BRjXbLzlP0TKVBRKLKrXRHdfct%2FeTdevOrdMiwGPzul63%2BFZvYCYcWi7tgGTB5nvqY5UkWdKMf%2FwJB1MHYG%2FRg6V9Rh7XeTOTxc%2FBdEZmz3foX5JpmiVSYIEkx%2Fwbdhakn5GbaEuBLfVo6yQcQ06m4xo45iWp6a8nk%2FXkOG7kOdIEBOpFN1oW0jKqMuBRn6N85xkNq290H1XNxlkh6MGTiXdFxOdHiKTjAFrX60KmmTCCFQFrq1Y0k%2BNadUCBdf3rgBpL9oF6b18Fbf0S1B6b3ecgdTxRG5Ni%2B9RIpY89POTet5J60TuzQcDSLqNE3KJ%2BktGuNR%2FS552K4vFW8dLV854w6C5cFj81ww2UCAJBmDwx8tFBgvwRY%2B3V3bYbvcZSh5QEQDnKliIss%2FZJ1AXGiF%2BdSdMf6fqGEtqsCnSWfvP5S3ycPByQBA9IFGaVEnJuF7sJ7Kof9Mje9iSAHkr7gmTV1IRrH%2FxkzE9lXFOWvT7DsVCZmBF%2BeEQh2k3htl9MEK8EDlmlvr7eRFtozuD3th7VfexCN0cIB44RUtqQjxkMJe73sAGOqUBpeV%2BYGF1OBDH%2BQENtpMNhsJFgzbdWkd1EH7gbS26%2Fjq066iFkSGk4BvNOW54QXuSw66FK4ZOjrHdBaMY4%2FfEsfCGmlOGjVWjwGvghycJsUePUuYHLClsBpTiHRzgg5QicBJ%2BUZLLJvN%2FQ%2Ft6f12ljGnVG4Lkj3kNMzX8JDm3K6vu2U47xemfy%2BNNm0Am5rPO20Ks%2BMCzu3Mn1PsGxMJmzlAgqq7q&X-Amz-Signature=6afc3921ed83f3b44b1aa8dc63004d6a95cdd2adc057597ff48a333fa182622d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTEQTON%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCOzYaXhrmBFIG%2FTHzwEs6CA9gWG9rqLrDdZM2SUlfv9AIhAPHGjz4DGNmNuWZwKYRCj3Ck2VIWSSJ%2Bqxs9fmxkDlD5Kv8DCBoQABoMNjM3NDIzMTgzODA1IgwxcPUSBf%2F4TkO3SaIq3AP%2B%2FCPvoC0KjlhDGcoJFsBIhgkSi67Qh3mPD0rs3x4ofqsBh73Gyl2ee3y85TK7N%2B80WS2dfqNENhmN%2FihaxWJ7LaLy3vz2G2bIsygQI6aHXaDCrZSB4a0dssLB1yaDKzxK%2FMohcp%2Bz7X1DyZ1CNVz3HrC%2BTdUTgwtAGlHn%2FUJ2OSoK%2B0TSjLkylQmR%2BByoiVe6EelsiLZZDdofKdZHZIg9%2BromFzZCwac24Wt%2Fj1nFsJ1a5PDpUd5rMTBSU7ydt9gNQthywy43TuLhnwo8aPyLZkOEMyk0s0QidYrDHEQP3oy%2B%2BXJRuygcyLnz3%2FyCMqZszmO9pv8%2FJWxxrSRSDRdO%2B7Ybzn5WA6z1sb%2BoIN8O93Xytl8Ekh5Y56%2F41i%2BVeY3IqvkIRi56LYzjUUZX%2Bw68DyxeCbH6zvWdrmg6SvnPlSHWqL%2FCcIjqsV1CPegFDafhZTFBolSresg5lMOYCsjc149dw77BOr7tMWdW22UuSIdMdjNAb2xvDVOnEabCpNrNCpx4oIq3vBcnvRf%2FCxxhb1fZGYkWWm2xxp3UbSUHBPUueaPmfzEocZXKbktJpo6v8fedTrvG%2B%2BmRZFMJMTQaTZm9dMetv24xGFt2vUn3iSp0OVFzutoEbCL%2FwzDtut7ABjqkAfmmQ5W5rw5qHhIqd6nUiFUmnYsbACbQ94n0KIcJfIVkAKO%2FTShM8WWimKP3Wd0m3PMh%2FsPRyN9i4pwsTECuDMRNQTFwjBR5j70JPVSUzX%2B%2FNhlaIqgaV%2FF0a5vOkdPx5SdSEyKQkDv4nJqFIe2C1d36JXvfSVpZ8uhjkx9dohpz%2BsdfdNvQAkpPAmIhbj39N8QO%2FRgBEi7S5K%2B7PE1EyN1MtH%2FU&X-Amz-Signature=e712638b72c938305eb5fd2544147b475763ebc999fa217cc919b8755671c18f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
