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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJWLZGH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEAKIMxYYTPv5ef17bUcwB5XQ7nJOhvnEMX8poDarshAiEA47vvu2kdQW2REi1ZXtUFGs9fqWgbBtamkcCe6CYJYRMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzqH0ouWT6QeEnr7CrcA%2FEZsAG%2Fw27fKyaWl6T%2BLqUySwWnxuJoJVTlsQuNnv1On%2B%2FmsQsxso%2F8atywwhICfFA5hv13f3N06mw%2B%2BmzVWOFMvCXzT%2FlbggKSib8r%2F%2FcCfvw8GYzyDP6LRgou75mGjuq46iILOXnBAR3aoiOioGSw%2FXtnzSodAdFww6%2Ft35xv2qmf%2FZpI9a2IvoRZboSJVg%2FVZzfROhOZleoCGEb9WuyC7zk%2BGCIdAvLnH7ouzE8ZuZstmi6YPMX8yZ1kcW1jusZSDsbHUFzudWEmbmyptMDlInM7JEQxGUZS4kl6W4Z6nEh72x3IpV781yAlOYUNleJsB%2B9BhzAbm6rslfvsBbJbCZbrAgREi6BcUGDQnn95h4%2F7cBEDmgir0cEZkgfk0E3NY5uiLKx3XHlB5CNA8xien01QdTSW8kZYjZgUA9TJ41KgbC3S4CJ6ZiV9oLel0KTq2rWiBfuwaW%2FUO%2B6z25QvCLiUmjLSSZGyndbMyPWRQYapps8WNuQmtgDDsok2%2Bl8ox1zliYZtBjrA5LOx6TEv4QHNnuV8aYwGLQyTt8hCIdT%2BOGkk6uVDrh6kDnT6mgRO5%2BDJmAtvYaMl90xDAz79v9Xlt6g1VdMu8Klfeg7Q68yRXaYBYKIi3CObMLGakr4GOqUBuordYpf%2B7PPQwf%2F5ql%2BMobISlad11oWGTggSq80CxyJ7YaeWm%2BW4nOLegMi9ohrZbX0yT1I8ySVIZt84sLTUYHKK167%2BqU5N5SVbBNq%2Fx3bbOh1EXk0Z1vgOaaWeHR2wxdoB2TyloMuoXcx3bsFmVgwMuCUEnQruS2ujQGxddXzNi4BpM40eexJgqxWiE9RGcNbBXWGKMq7NDf8j7nyhlL0p%2BB25&X-Amz-Signature=ea2fd49c0b117b9df2c533264bf5a7ca257fa39a40c3aa565ab559cacd3c315f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2GPBKH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYRrRJ23txojYRNarsOMBZZGpG9rfnxRmkx0amQnnSVAiEAlCOh3aMbP3EiL06mFvaQUSOauRjaRTp%2BE%2FDmCATNNQUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPYYeGRUq4K%2BUACXyrcA%2BrhLEZCDmbqAd5D8SM86IzYQxkZsXH3DNg%2FdLHiZ%2FFybjpOBc0EzB%2BuelR2XrE7AkY3WvPZZlE2oIc2E8XGHAvnIx1FMBZuooBqvvbxv563H5yuvIg975m4NmKARi3P7AygXUJPET6WMI6fPIXIMgMFoFhDbQF4dSxoraPM2BdAuGeIzII8JM%2Fr3Ih0FwYyhFAKwOwyMR5JhSrNyoIez7eI1yH1LoSQ%2BA6HkdtLZoDpuNyvIDVeDVmNJg%2FQmlB2dwtKVeTrXAQmsEPw7BecX0YBhP1c6d36rZZKH5%2BzfAkG77PsOOWaiMzHv9SKPh%2F1iIYVnQf5CZxajUyxBHCKuDKLwhCGCsrK50fX6fsigilOvTFFMVHPcGp%2BE2caTsZAQfbyFrcrDurZswxbNt1iqAxcnRTKZVvDUistJM%2FpjeA5xe15ZlS6uf6Gn%2BJdTnBvpZTsi7OVUdu%2FTJTka0%2B6zb9%2FwNR2QHwK3JeGVkLvVaL2%2BvYdVBsIynu23eDXEY0ZgtZ7rhUjr25akouoPdqENkbcHKz6nii1PiwmtJoqNkxe0lIwpN5njamwLqaVF1VgqarzYdEo%2BauKIOiCi0smErGYEwx0iTdqQn1h5f7EEpU2GuRgLDB%2BWaxfE%2FxgMK%2Bjkr4GOqUByk8Rj9s3zzf22bKYevcoSrRITjp4UKp29bHoujg%2BXb7BYArXmtRPN8ZDBeFtjOmCfobJkxHpzsDLD2DXn5ClmKDvjNALt9y8VUNdzWZlMOAP6pp%2FnHHpOCGuzBw255pBpfTnBHugwOOo5T%2BMF9KcbZe3brZLIuuPA6V0ucNP3PLPUeQiH%2FsNor5yr6zmAuQh7cwDgJgAib6r9uM2sLrnrXbOgWwb&X-Amz-Signature=f7f39fe49390fe2b7758bb21e1586121d95ec2d6e13b6ddc874b95c48e69d957&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
