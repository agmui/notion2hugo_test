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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJQ2IP6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiHzGnUQ1NeqJS0nUaVeb9Pxmd3HJbfIOcUnHHooREDAiAZ96xuGuylZ%2FKseUfaPv2gsEcFGf4QalQkXzqzPptyfiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQXSmjOfDjWY7gMfKtwDjf4rfheUfuqQU%2FtmC9pIqYIgQYDJkkP34oQhU%2Bv%2B4uJt2B1WX3z1jX0g5zatEuTRsdZNNm%2Bz2yTK0IBgXwoP2ksWoKO51V9DT6Dcp681%2BS1uf8jD%2BF9r6HqoRLAetBw7MTPn8mUpDbKYSOVAWEkx8V9xdiatKU72opSukrt9CHmBmMLigGt7O%2BfgokLAElqePOg%2BQu4Xir8CnpCLBJPfykmdeyc6U3WIEmnXlJiYhkuR9aFy%2B4FPkcWpfKKYXjjtQwO%2FLccEigj%2FJrQHycDJrtnivK24m86Xr1CSf7M04ZdlimvGwk2NQY4bdNVuzlfg1t7aCnTly5r0rlxebCNEvpUb6mEVQjNcy1FbiqEgQUxnorSmU5NaQChC3js1GIPOBpTKPcnfifilZkzYF%2FrUfTZSIL9AIH16psMUYozXi7S08ZCl%2FSUnJHWEzYJMW1INEWkUXQLDgEad2xblR9I5D9uky7uJKindzDqiN02xkqO3eO06bE9QuDwpUMb%2BdrwbfHJ2HZjPB%2FNtRpi%2FaotX8bNHu4U3Ejs2O9ZQab2zMbpfePOuTFrWINY27R1FAkvFeO9V4zITZ2p8gnYZnQ0B8ETS1PD1HO%2Fmu3OIbj%2BjMbuVPen%2F%2BrevsX5st9wwibXGwwY6pgFtWDb%2FHldZIJZyfzQtOZx%2BgF0vbAqsw84kEKChYiNtWs3G7gXQDcPAus5QQBUz8yxOlLX%2BpWBKiVu6W55j0ccc82Th%2BMdDPL8VmpKiN%2FUjndR7tPY77OaF76JjSizcS3iuheetEzFHVuM6NVenUwYZIqT7xarNtQLBojk8A%2FBbQB%2FLXngk4JqJ4EwOxEOKPx8EPvKKE4BT2atEtFuY5I9o2nih1BRy&X-Amz-Signature=eedd2ebe2cfb00373f373c436324a33490404e09c01459f069f5693381ebc95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJQ2IP6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiHzGnUQ1NeqJS0nUaVeb9Pxmd3HJbfIOcUnHHooREDAiAZ96xuGuylZ%2FKseUfaPv2gsEcFGf4QalQkXzqzPptyfiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQXSmjOfDjWY7gMfKtwDjf4rfheUfuqQU%2FtmC9pIqYIgQYDJkkP34oQhU%2Bv%2B4uJt2B1WX3z1jX0g5zatEuTRsdZNNm%2Bz2yTK0IBgXwoP2ksWoKO51V9DT6Dcp681%2BS1uf8jD%2BF9r6HqoRLAetBw7MTPn8mUpDbKYSOVAWEkx8V9xdiatKU72opSukrt9CHmBmMLigGt7O%2BfgokLAElqePOg%2BQu4Xir8CnpCLBJPfykmdeyc6U3WIEmnXlJiYhkuR9aFy%2B4FPkcWpfKKYXjjtQwO%2FLccEigj%2FJrQHycDJrtnivK24m86Xr1CSf7M04ZdlimvGwk2NQY4bdNVuzlfg1t7aCnTly5r0rlxebCNEvpUb6mEVQjNcy1FbiqEgQUxnorSmU5NaQChC3js1GIPOBpTKPcnfifilZkzYF%2FrUfTZSIL9AIH16psMUYozXi7S08ZCl%2FSUnJHWEzYJMW1INEWkUXQLDgEad2xblR9I5D9uky7uJKindzDqiN02xkqO3eO06bE9QuDwpUMb%2BdrwbfHJ2HZjPB%2FNtRpi%2FaotX8bNHu4U3Ejs2O9ZQab2zMbpfePOuTFrWINY27R1FAkvFeO9V4zITZ2p8gnYZnQ0B8ETS1PD1HO%2Fmu3OIbj%2BjMbuVPen%2F%2BrevsX5st9wwibXGwwY6pgFtWDb%2FHldZIJZyfzQtOZx%2BgF0vbAqsw84kEKChYiNtWs3G7gXQDcPAus5QQBUz8yxOlLX%2BpWBKiVu6W55j0ccc82Th%2BMdDPL8VmpKiN%2FUjndR7tPY77OaF76JjSizcS3iuheetEzFHVuM6NVenUwYZIqT7xarNtQLBojk8A%2FBbQB%2FLXngk4JqJ4EwOxEOKPx8EPvKKE4BT2atEtFuY5I9o2nih1BRy&X-Amz-Signature=fefbfa894c2063aee3b0cbf2afe6fa0a84a66a66cda71219f177ae1c989394a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJQ2IP6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiHzGnUQ1NeqJS0nUaVeb9Pxmd3HJbfIOcUnHHooREDAiAZ96xuGuylZ%2FKseUfaPv2gsEcFGf4QalQkXzqzPptyfiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQXSmjOfDjWY7gMfKtwDjf4rfheUfuqQU%2FtmC9pIqYIgQYDJkkP34oQhU%2Bv%2B4uJt2B1WX3z1jX0g5zatEuTRsdZNNm%2Bz2yTK0IBgXwoP2ksWoKO51V9DT6Dcp681%2BS1uf8jD%2BF9r6HqoRLAetBw7MTPn8mUpDbKYSOVAWEkx8V9xdiatKU72opSukrt9CHmBmMLigGt7O%2BfgokLAElqePOg%2BQu4Xir8CnpCLBJPfykmdeyc6U3WIEmnXlJiYhkuR9aFy%2B4FPkcWpfKKYXjjtQwO%2FLccEigj%2FJrQHycDJrtnivK24m86Xr1CSf7M04ZdlimvGwk2NQY4bdNVuzlfg1t7aCnTly5r0rlxebCNEvpUb6mEVQjNcy1FbiqEgQUxnorSmU5NaQChC3js1GIPOBpTKPcnfifilZkzYF%2FrUfTZSIL9AIH16psMUYozXi7S08ZCl%2FSUnJHWEzYJMW1INEWkUXQLDgEad2xblR9I5D9uky7uJKindzDqiN02xkqO3eO06bE9QuDwpUMb%2BdrwbfHJ2HZjPB%2FNtRpi%2FaotX8bNHu4U3Ejs2O9ZQab2zMbpfePOuTFrWINY27R1FAkvFeO9V4zITZ2p8gnYZnQ0B8ETS1PD1HO%2Fmu3OIbj%2BjMbuVPen%2F%2BrevsX5st9wwibXGwwY6pgFtWDb%2FHldZIJZyfzQtOZx%2BgF0vbAqsw84kEKChYiNtWs3G7gXQDcPAus5QQBUz8yxOlLX%2BpWBKiVu6W55j0ccc82Th%2BMdDPL8VmpKiN%2FUjndR7tPY77OaF76JjSizcS3iuheetEzFHVuM6NVenUwYZIqT7xarNtQLBojk8A%2FBbQB%2FLXngk4JqJ4EwOxEOKPx8EPvKKE4BT2atEtFuY5I9o2nih1BRy&X-Amz-Signature=4bd764957bdbe84aad565cab3c0395d15b1c810ade696fd26039d1144e10941b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKETXLB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfVVHAHw5inOj%2BWaJJd8H%2FL7ZMApWKNrKbgjlK8LM2oAiEAwTdhMRzFf4E98pFz%2BZDrnI31P7MEOZDh1PwSl7sZJg4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfu5y7XExEwsyHEDircA%2FX56rVEKZa4D%2F0ILqcafpecc5yBfv%2BsNDb0wG10BG1dl1B6FoDdGZWe%2FbCwuTSufs0UOW4C76J%2BjvLgFeg59HSyR8njWQPio3n%2F%2FU%2FsSVE1Ky68tNXa%2F6bxSyVFKWzAwEuW7%2Bx0YnbPr2%2BVmvuHg4%2FSGiQ1DaAsxPkBlUyK8AClvylf26aWLKJpwjMDGNxmNIdPqy%2Fgl%2BcSgT1RyF68IeIaGwkEAaam668VidJskP53PMBDNxbepT38fQjN8pV00lHfR8rlzcnSnBdWx61AQIm5Ktedx8EdPoJdvBUH2t96YqZCYy00PliIU7T%2B38FxKtxLe6nX%2B9ZRXy%2FQrIVhmK%2FyFC9sX85BUxgJSgGSDIduMDhYzG1q9gtNVBlI%2FeBhLiLok%2Bxszw74l9j8y1KW9XPMAFCa6QPtedsUzq%2FkQYZ%2FTxRDx3i6SK33OvObuQE85GIuMKhGPM%2BJ2j6FXD%2FY%2Bzu3QgnbXhd1weGm6FSt%2BSUDiPQzasMRGCsJlmTRFWRfhfqtm5uA3Bm2xf7tPFuNxRUWO8Hxt63JvYB4yMUpuaRhiO423BeovdAuJA7d96VPzlvLIJ75qW8T9PXYqbKvDl3%2BpKT7WG%2Fftluh6IEjpHBV6uaUmnNXyomV09GIMNK1xsMGOqUBFEJro11cELc8dlbbzlHoND0Do2NZXxKqfMz%2FWhT49ZRO6mbY1yTiPxSkHEBUr%2B3MSWgeH2SLxU0Rml53%2Fd%2FTTXJ0djx6%2B0SorHQg%2BYqnfr%2B2PvTla02mPzbbtg82tNIyrYcqAIdQt58jWuvj8VcIpFF%2Fwy%2BkAnjZD4Jt8xmNIWNtQBh1V2gr05vfJqj5xtAcsJB9W1zFWTP65yHMWSWO2yjyuZDe&X-Amz-Signature=b9fb073fa829e261f8c1788837e7cd47baf0abb0a32e645565bf86cb18e2b0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZBT5CMD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVi1SNSPnADQtUVC09oUk6zCT1Seg4dA9waqVBfeuu8AiAKpQdQ1WJ%2BbHi0aDuXlLvdih%2BtwlI%2BIJRFOMSJeYfl8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwb4ii6oQRqa%2B21n1KtwDjXiWGv3Lq14RYvIW80UYRkILi1Y2HjWjAlDZoTtvt699MyZpqhQInAz5pPM19Oxg02YQ%2BnlPtXRny0diMkuBoGO%2BvBlQbWlhAyScOGsXA1jEtAaadGwna2jRsKcwbTnMP5JqoRMiHZMOK6zhKjI1u%2F9KTpWEFuAz9s1H8TdI%2F1pHV1S5lCZOGYgGXm2aZFKEuQ9z2uIhSGR%2Bq%2BTvcBPGYCn%2BXxvLxOiMjpbDcR1MSEQQC%2FlkQlTaGPzY0Vd3oMkQFz6WAJZHNR0dtkBjo0lDBLlJ0V1t4eCeC%2B3REhD0ApUMtkqSDKvQIkf%2BC4xenPV%2BYQc8m1Dz6qsN%2FMLreYg6KLo5CrkZ%2F9bH6NTIzyssmGfTpm%2BNj5UlSlocwdr88gq4pmj72BZ%2FyHS67bNlUMuzlFJqsDG62v%2B7W4I8LZXtOP9DNvpf3fz2o3TYoaPkFJOsl%2Fbx7S%2FLZIFRn3nO%2FsPXU5NuDt1%2BN%2B%2BNiEx1u68Yi%2Bzf2HQBUcnh0SO2%2BQV797FChxlZFWVbqPZQuSlC5OhxSi2Kyd4D7YM%2BAasfyr9hwL2WaPcraME6fLciZBrFcGNMuBvfVvPbt6CIrMgUNanHpZUORqrO4Y%2FurZeVsqFeOY7S3OHxMdlxIBLHwQcw1LXGwwY6pgGaTZL6AVxylwtB9ue9UQJfxueHd%2B9sz2B0PsdMQVzA%2BbSLgDQerTepJt%2Bl2%2FAr9WZQYYEoJozEa6%2F1qq8rCLiV6a7ex0YO4R6hOcp0%2FYk3zFAwbO%2BFXtAi%2FwV9ZYwZDd9eNGyQT1%2F4cp%2BvqWwfM9Duw33HFYnQuxpfeOaMUg0ZTCO5pUJw6iBa65TiECpJvyz5Te9VZgPySA%2BdDdyoOLcareDR76aa&X-Amz-Signature=082707d7ca92be54f5220a05ae05f66085cf4fe1480b423d126bacc67022d787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJQ2IP6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiHzGnUQ1NeqJS0nUaVeb9Pxmd3HJbfIOcUnHHooREDAiAZ96xuGuylZ%2FKseUfaPv2gsEcFGf4QalQkXzqzPptyfiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHQXSmjOfDjWY7gMfKtwDjf4rfheUfuqQU%2FtmC9pIqYIgQYDJkkP34oQhU%2Bv%2B4uJt2B1WX3z1jX0g5zatEuTRsdZNNm%2Bz2yTK0IBgXwoP2ksWoKO51V9DT6Dcp681%2BS1uf8jD%2BF9r6HqoRLAetBw7MTPn8mUpDbKYSOVAWEkx8V9xdiatKU72opSukrt9CHmBmMLigGt7O%2BfgokLAElqePOg%2BQu4Xir8CnpCLBJPfykmdeyc6U3WIEmnXlJiYhkuR9aFy%2B4FPkcWpfKKYXjjtQwO%2FLccEigj%2FJrQHycDJrtnivK24m86Xr1CSf7M04ZdlimvGwk2NQY4bdNVuzlfg1t7aCnTly5r0rlxebCNEvpUb6mEVQjNcy1FbiqEgQUxnorSmU5NaQChC3js1GIPOBpTKPcnfifilZkzYF%2FrUfTZSIL9AIH16psMUYozXi7S08ZCl%2FSUnJHWEzYJMW1INEWkUXQLDgEad2xblR9I5D9uky7uJKindzDqiN02xkqO3eO06bE9QuDwpUMb%2BdrwbfHJ2HZjPB%2FNtRpi%2FaotX8bNHu4U3Ejs2O9ZQab2zMbpfePOuTFrWINY27R1FAkvFeO9V4zITZ2p8gnYZnQ0B8ETS1PD1HO%2Fmu3OIbj%2BjMbuVPen%2F%2BrevsX5st9wwibXGwwY6pgFtWDb%2FHldZIJZyfzQtOZx%2BgF0vbAqsw84kEKChYiNtWs3G7gXQDcPAus5QQBUz8yxOlLX%2BpWBKiVu6W55j0ccc82Th%2BMdDPL8VmpKiN%2FUjndR7tPY77OaF76JjSizcS3iuheetEzFHVuM6NVenUwYZIqT7xarNtQLBojk8A%2FBbQB%2FLXngk4JqJ4EwOxEOKPx8EPvKKE4BT2atEtFuY5I9o2nih1BRy&X-Amz-Signature=0c55b55f95376c2b99637b29229bf2e937ed06dc9d3ad873f10a513a2d1dcd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
