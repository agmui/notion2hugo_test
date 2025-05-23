---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMDGDGA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAQ43CDoDIJPvTQe342PL1CI9CILerQd%2B7A48n1yNCjaAiEAkCviMwb5EH9%2F5LgaEMm9wf9hYVfCY23u%2BBjFhN3DRuoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwDG6883Fl%2BDuVtMSrcAzWBAn3jidn9ey2ZJP0EkgLF1QfWU5NgMewb3ikp52IM6Z5Gk9WMRzjkLhhqCA%2FPCr4K9Bd%2BrMI8vBTuv6XE%2BWZliAVl2jF79dWL1OAsknTFLqTkyFoTlxUyrH1oh%2BHZ6xKBkAYnHxFcCVEz7AUIOIjklpRRmirOX7%2Fr%2FFhw9pT1hphmXgTWA3McCQZPyRt5caXzVGIiqxrMueYI9T6k0ruWzpU%2FcS4RjGcUEzc%2BsUoMh8aapD0jKMii9QiGxQvGOmuKdpc9wf7Bt%2BMFo0NPDb6muIhwu9ogO2ygruqzCiguqAwDOfIlFUm%2BWNktVc0tiYXPo10ucPvZNP0kwzyz2ysIB1q5Htrlk6QYq82ZFnmC2cE6Pt%2FUj8dpWTyIOPzf%2F501%2BrD8q8bQ35Va6Kn2qvnK4Ma37QxFUO4%2FHunx2WiphwUv7SksKy3osD5Icz1Qh%2BKCK3lu9NrxckXb%2BRYQWd%2FwWSzgtycUZBLId0oDyhAojpmfYn3IoVXvdnglRtjLut4%2BauYGkkRV%2Bi1IvjGfp8kvg05PBiPW4%2BPVLWjUZwd6b3VQIIZrI%2BPErXq5K5uOG7N9xnVZqE3WdbSq8%2BI8X8r30EDtEMGy6Seig%2BYQyVTVjU1g1n77u0HiJd1IMICOwsEGOqUBRCPQtQnxXu7SJcJ2%2FoHWrNe3ZtWkhmgOjv13CK29peMleWhhYCuXCn%2Ftj6c%2BdRgQGfzs9rnCnxQqpttRJjWWLMWlhc2GOqJpGBNFQtvNg7qu3dcDmz8mrPfgOB2II2LgQKZoew1soKhMwMOWm9bxWVPYdxFxD3iYjvTxoh1dWSvnlSp54qWvKkVU1uFysTQttXuPyRdrdGAGHT9I9vYoAf9zVTpS&X-Amz-Signature=9eba123270345a9379373eb2e85ae6ea68f699d2fd8437a494f7d888aa2a80d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMDGDGA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAQ43CDoDIJPvTQe342PL1CI9CILerQd%2B7A48n1yNCjaAiEAkCviMwb5EH9%2F5LgaEMm9wf9hYVfCY23u%2BBjFhN3DRuoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwDG6883Fl%2BDuVtMSrcAzWBAn3jidn9ey2ZJP0EkgLF1QfWU5NgMewb3ikp52IM6Z5Gk9WMRzjkLhhqCA%2FPCr4K9Bd%2BrMI8vBTuv6XE%2BWZliAVl2jF79dWL1OAsknTFLqTkyFoTlxUyrH1oh%2BHZ6xKBkAYnHxFcCVEz7AUIOIjklpRRmirOX7%2Fr%2FFhw9pT1hphmXgTWA3McCQZPyRt5caXzVGIiqxrMueYI9T6k0ruWzpU%2FcS4RjGcUEzc%2BsUoMh8aapD0jKMii9QiGxQvGOmuKdpc9wf7Bt%2BMFo0NPDb6muIhwu9ogO2ygruqzCiguqAwDOfIlFUm%2BWNktVc0tiYXPo10ucPvZNP0kwzyz2ysIB1q5Htrlk6QYq82ZFnmC2cE6Pt%2FUj8dpWTyIOPzf%2F501%2BrD8q8bQ35Va6Kn2qvnK4Ma37QxFUO4%2FHunx2WiphwUv7SksKy3osD5Icz1Qh%2BKCK3lu9NrxckXb%2BRYQWd%2FwWSzgtycUZBLId0oDyhAojpmfYn3IoVXvdnglRtjLut4%2BauYGkkRV%2Bi1IvjGfp8kvg05PBiPW4%2BPVLWjUZwd6b3VQIIZrI%2BPErXq5K5uOG7N9xnVZqE3WdbSq8%2BI8X8r30EDtEMGy6Seig%2BYQyVTVjU1g1n77u0HiJd1IMICOwsEGOqUBRCPQtQnxXu7SJcJ2%2FoHWrNe3ZtWkhmgOjv13CK29peMleWhhYCuXCn%2Ftj6c%2BdRgQGfzs9rnCnxQqpttRJjWWLMWlhc2GOqJpGBNFQtvNg7qu3dcDmz8mrPfgOB2II2LgQKZoew1soKhMwMOWm9bxWVPYdxFxD3iYjvTxoh1dWSvnlSp54qWvKkVU1uFysTQttXuPyRdrdGAGHT9I9vYoAf9zVTpS&X-Amz-Signature=ed8dbf8642e3eb21edcb1b44da3191d5bda5956db70324db7580b3eeb80bb69d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMDGDGA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAQ43CDoDIJPvTQe342PL1CI9CILerQd%2B7A48n1yNCjaAiEAkCviMwb5EH9%2F5LgaEMm9wf9hYVfCY23u%2BBjFhN3DRuoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwDG6883Fl%2BDuVtMSrcAzWBAn3jidn9ey2ZJP0EkgLF1QfWU5NgMewb3ikp52IM6Z5Gk9WMRzjkLhhqCA%2FPCr4K9Bd%2BrMI8vBTuv6XE%2BWZliAVl2jF79dWL1OAsknTFLqTkyFoTlxUyrH1oh%2BHZ6xKBkAYnHxFcCVEz7AUIOIjklpRRmirOX7%2Fr%2FFhw9pT1hphmXgTWA3McCQZPyRt5caXzVGIiqxrMueYI9T6k0ruWzpU%2FcS4RjGcUEzc%2BsUoMh8aapD0jKMii9QiGxQvGOmuKdpc9wf7Bt%2BMFo0NPDb6muIhwu9ogO2ygruqzCiguqAwDOfIlFUm%2BWNktVc0tiYXPo10ucPvZNP0kwzyz2ysIB1q5Htrlk6QYq82ZFnmC2cE6Pt%2FUj8dpWTyIOPzf%2F501%2BrD8q8bQ35Va6Kn2qvnK4Ma37QxFUO4%2FHunx2WiphwUv7SksKy3osD5Icz1Qh%2BKCK3lu9NrxckXb%2BRYQWd%2FwWSzgtycUZBLId0oDyhAojpmfYn3IoVXvdnglRtjLut4%2BauYGkkRV%2Bi1IvjGfp8kvg05PBiPW4%2BPVLWjUZwd6b3VQIIZrI%2BPErXq5K5uOG7N9xnVZqE3WdbSq8%2BI8X8r30EDtEMGy6Seig%2BYQyVTVjU1g1n77u0HiJd1IMICOwsEGOqUBRCPQtQnxXu7SJcJ2%2FoHWrNe3ZtWkhmgOjv13CK29peMleWhhYCuXCn%2Ftj6c%2BdRgQGfzs9rnCnxQqpttRJjWWLMWlhc2GOqJpGBNFQtvNg7qu3dcDmz8mrPfgOB2II2LgQKZoew1soKhMwMOWm9bxWVPYdxFxD3iYjvTxoh1dWSvnlSp54qWvKkVU1uFysTQttXuPyRdrdGAGHT9I9vYoAf9zVTpS&X-Amz-Signature=52fafe1ca48c637a85d30018f8b5b8845aa9045087425ea430f51c5a6587a43e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTPLUEJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIH0PM8w8bAYI4nNliCxehHM2MlIHL%2B%2FByyrzDwWoWOq2AiB%2Ft5Qzp0TWLxnqxOMsGzAs6qHaCFwTSzOiAQvCgXybWiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7BBOwDEkVxiZ0hEZKtwDYuOUKzDvXpQCzgKh%2Fzn3RQKudefw9iYqvyWBaWTYqarrO1VZ0%2F4uk5xwEoeMtj2RWCuFsTc0UHtHUJrtpvgV2kiNn%2B8usPbogJr3nkWDmtv0S5g8GY%2F9bpLy4GVgSnz%2ByfW%2FNeJOwVP%2F4DNifQsP94WbLkzZDvk8bkbDeJZJ3jOLN%2FsxEXfTYJqO8QEHLALmJJMBrpJ9CY4UgVcR5P8JRR8wXmO0HsjTl3DRkBXqEaSDK5mlKk7%2BLzwPEMrmluJ4jJ6GYF%2B%2BkvcW%2BehA0PIiHNt5pGNL23ltR7F%2BtqQgu7M%2FKFm44lRzgTQwYWr1sh6%2BjdQdpiYTTnGr2FHMkIcjdKIJGk8M3JHNPLG7K7P5CguW4q0W3PpeEbXYPcQeLi5kxXIPS1V7fLNokaGuoYXuPsSqiHWaCNMK%2BpMln1fJrRK5mwkrsKhENnDCweDkZ1e4yFo81W7AiWnTIpF9Wh6aIfzq4fmPbISSYUQ9tlBKrlAgBHHDhdPwEuRHF317pRwJLnbmFmIlZxCOp67VSuZxxGyp4esMdiP4Rj8yawlVb3Hf0lbgXoX89OfW1PEqfVuPOHppvBx%2FdFdeFaz0jHAfvZbiV6o5KeNTrV8FMkzeWhouKbOEuK3w1JCvG%2F8w1Y7CwQY6pgGsVZibjEcI4GzJRrrdM9JyIqYmkNB4uKqz4a3RbPxUMXBqsT8DRyNWI33bTzcvF3VDVU1x9O5%2BP6Zm%2FS%2FxDRl1c2rcMdO7wfo6cQtzDK5AIndcTqIlIPKvrgZTDwh0ln41iYJ0pWaFdCapBjMw1K0PemeOmOdRTaosQM5gYrG3tBfCBhxdolBgFlCPKkgJYrGO8C2O%2Bb6wj2X5U9G7WACGw%2Foy8yrT&X-Amz-Signature=fdbac98c73ac0bdcb0edd36ff3d59dd766e5e3af08efaf42717beafe66aa2d06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3FTQUUZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDv9yfDuv5NktIv2kPR5Yrmrw%2FUogzt8wh4WJZZTSprYAiEA%2Fz%2B%2F7cTi7TLNkv7RPtZVa8TmBrQQ2WAd3enk6tTJLT4qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3h70zckkOzeM%2BtYSrcA58SaZwEt12%2BGimjbeH6r7kOGml3sZUYZJgJ8vDFAOAhhT0rsEhOUwg0xXTGLuH2o7czQdTwP83K6j10eGcx%2Bq5LM%2BBQE9GUGDMzuD4Hd39OuaY0VasXf5fLewQUKa2n0R4Jax3Qeune3sJIbU3b1KRkVSNh6rrDseyB1%2Fq1W5XfE%2FHlufzo8hD7k5pGlgOks1kaeTfSrdMnsb7Lpp4GqqRsHiXlaWxpP4Rz9vt%2F5zFGiMPLd2Ir3%2B3otM2ssNd1bZ%2BB%2B8pHaBzUDGQnigzocGQkwAs%2BBikvfvvBONLuXA41Y0YwpXvGulSr9WFWC5vL18bim4dvZyotm3NMGY60bTzHBVOmPjQtPn5ubjUaVxk1I7rU6s6ifqbBwOgLzRyZLgVoxkRNbZKOz4BZpbbAvmaukjnOT1jmkUClwJAtK8MBFKuOeusPecbyBe3iOQsP8Evd6FtqTf6F5dWdIkidOWwc42zGp8rI%2B2TUi8NdfLwO%2BwM1fTXMudzxxUHtI1Qs7i9MaldNHlfk21%2FOnG1vbhvjv4BOZhYlTG%2FlDS7g3%2F7mO9kY%2FXY17rMoiOD6J5w7L9LW9HzrOj5A9eEo0FjI%2BDFjhpexZNhRDKqiQtAJwN%2FaV3Clpvu%2F9IkmErDlMKOOwsEGOqUBZCKDvoUN4ZAFFlP6kKsSAQZiMWvmk8XkyEPhjrj%2FCCUTESHI6sqmYZ%2FEMezBbkcm1FNlcebrWJvN44vpcICHNmIoGsovn0NVcg29%2FP%2BdSVzlGRXWRrDy8NoRRcW5Vg9swHvsdwAK8xxUG8COVKBjDGSRYm5zbz8%2BPs1w1k%2Bu5I99%2FX6oGLW3evZKDdCfExTTyd7wUgIOUTDSFO0C2J6sfcHiCZxQ&X-Amz-Signature=203f05e774e06003dfb3bd596d2226dcc7b1159722436dd4870e0ce66c48ac67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMDGDGA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAQ43CDoDIJPvTQe342PL1CI9CILerQd%2B7A48n1yNCjaAiEAkCviMwb5EH9%2F5LgaEMm9wf9hYVfCY23u%2BBjFhN3DRuoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwDG6883Fl%2BDuVtMSrcAzWBAn3jidn9ey2ZJP0EkgLF1QfWU5NgMewb3ikp52IM6Z5Gk9WMRzjkLhhqCA%2FPCr4K9Bd%2BrMI8vBTuv6XE%2BWZliAVl2jF79dWL1OAsknTFLqTkyFoTlxUyrH1oh%2BHZ6xKBkAYnHxFcCVEz7AUIOIjklpRRmirOX7%2Fr%2FFhw9pT1hphmXgTWA3McCQZPyRt5caXzVGIiqxrMueYI9T6k0ruWzpU%2FcS4RjGcUEzc%2BsUoMh8aapD0jKMii9QiGxQvGOmuKdpc9wf7Bt%2BMFo0NPDb6muIhwu9ogO2ygruqzCiguqAwDOfIlFUm%2BWNktVc0tiYXPo10ucPvZNP0kwzyz2ysIB1q5Htrlk6QYq82ZFnmC2cE6Pt%2FUj8dpWTyIOPzf%2F501%2BrD8q8bQ35Va6Kn2qvnK4Ma37QxFUO4%2FHunx2WiphwUv7SksKy3osD5Icz1Qh%2BKCK3lu9NrxckXb%2BRYQWd%2FwWSzgtycUZBLId0oDyhAojpmfYn3IoVXvdnglRtjLut4%2BauYGkkRV%2Bi1IvjGfp8kvg05PBiPW4%2BPVLWjUZwd6b3VQIIZrI%2BPErXq5K5uOG7N9xnVZqE3WdbSq8%2BI8X8r30EDtEMGy6Seig%2BYQyVTVjU1g1n77u0HiJd1IMICOwsEGOqUBRCPQtQnxXu7SJcJ2%2FoHWrNe3ZtWkhmgOjv13CK29peMleWhhYCuXCn%2Ftj6c%2BdRgQGfzs9rnCnxQqpttRJjWWLMWlhc2GOqJpGBNFQtvNg7qu3dcDmz8mrPfgOB2II2LgQKZoew1soKhMwMOWm9bxWVPYdxFxD3iYjvTxoh1dWSvnlSp54qWvKkVU1uFysTQttXuPyRdrdGAGHT9I9vYoAf9zVTpS&X-Amz-Signature=7566a50cd6a2bb2e59f7d777766492b8389d53bbb645419ee3a2a6eab2be0bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
