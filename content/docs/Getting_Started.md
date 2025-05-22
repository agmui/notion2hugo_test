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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYORKPXB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICeUbmEUk4rfivSWjZHTgwQLLpp91EijTTxYP2BQLoubAiBsm9a3oPuSRlxaL%2BJMgSd4YBwFhA5qdrvyqD1Ey5BBRiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNraQZxiB4Aa6NnQKtwDSTB9RbHOHcxnP4mWyxd13EvrN8trssicWogqpvzPdK1LrN%2BTrSX8EhCyeUetdu0%2F29JCecol9xZbSF%2BhNZ9TpvUK%2BtM6%2FwuhSY1Y11SNQpE71R6qYpjOU5Xw7fVQllBvc7VQL91nUC8uZEBrXSqdLy%2BtNiYhRxkFvOmX5oTw0eq6YEFvWX%2BM0nQXID3tZOUFOM9Ltok0FaylIG845VZA77RUEK6rGqe7NY4Th0XcqKWi9QCI9ZzZtkLy1WuAB4tWCY%2BjypHONOZNoTNmUEPUvCVuPAMGrTYR%2BOfVbS1hF2wPDb%2F2K%2BPbovyOVBpwLU%2B9nUUHHJN4%2BWTR%2FbQ%2FYE0MtDiORzvwfubEUFxJlGjjY8zlmaYnzlG3epKXGYTEV%2BOV194zQBmf2qWbugHi5ggVTCpIxTMN4t%2BRuVFbXPsHSQp2NaV6MLcBfr9jFxdYRk1iiipssrxZ2PvlOZydd2bkv9tVBtnuR1i62%2BzsbSYNTZJEHLRGKbvOu8WIw2pXeHdpe5O%2FfsY6An0PXhL5mpFW6%2B5yI7jsVXHwNNVAm1TCGGRZGz%2Bjet1tNcVTN1t%2BpjhUZxQ01plgtbAVD1i2Akgd8EtETob%2BDNaMOJbnLn7mEiOdkQ%2BN8aBlm52QxDgwg%2FC8wQY6pgErOKHxyiAwh%2F1IpUXtNUtcF6S65iR1zgAw8AfDFPrD0oZqRqapjgWFuCgZoEkdiQraP%2BwmRjx%2BM6hGmuW2iXqvIp5QhqB3Twi2GmBmCUoo5W09R7fZ16OfHbZ%2BmiG7sjvpwKJD%2FWgJYKNP5B3nRCV4K%2BJG9kIIJshtb3kVvxhXzn41woKiUPCq4ahoZAGzjV4bioNzpi4Jug53KRYH5zdCjGb9aSW0&X-Amz-Signature=b50775187b69b45d64b32fcacb1686c5312381124e197b095aeffb6666ec8aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYORKPXB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICeUbmEUk4rfivSWjZHTgwQLLpp91EijTTxYP2BQLoubAiBsm9a3oPuSRlxaL%2BJMgSd4YBwFhA5qdrvyqD1Ey5BBRiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNraQZxiB4Aa6NnQKtwDSTB9RbHOHcxnP4mWyxd13EvrN8trssicWogqpvzPdK1LrN%2BTrSX8EhCyeUetdu0%2F29JCecol9xZbSF%2BhNZ9TpvUK%2BtM6%2FwuhSY1Y11SNQpE71R6qYpjOU5Xw7fVQllBvc7VQL91nUC8uZEBrXSqdLy%2BtNiYhRxkFvOmX5oTw0eq6YEFvWX%2BM0nQXID3tZOUFOM9Ltok0FaylIG845VZA77RUEK6rGqe7NY4Th0XcqKWi9QCI9ZzZtkLy1WuAB4tWCY%2BjypHONOZNoTNmUEPUvCVuPAMGrTYR%2BOfVbS1hF2wPDb%2F2K%2BPbovyOVBpwLU%2B9nUUHHJN4%2BWTR%2FbQ%2FYE0MtDiORzvwfubEUFxJlGjjY8zlmaYnzlG3epKXGYTEV%2BOV194zQBmf2qWbugHi5ggVTCpIxTMN4t%2BRuVFbXPsHSQp2NaV6MLcBfr9jFxdYRk1iiipssrxZ2PvlOZydd2bkv9tVBtnuR1i62%2BzsbSYNTZJEHLRGKbvOu8WIw2pXeHdpe5O%2FfsY6An0PXhL5mpFW6%2B5yI7jsVXHwNNVAm1TCGGRZGz%2Bjet1tNcVTN1t%2BpjhUZxQ01plgtbAVD1i2Akgd8EtETob%2BDNaMOJbnLn7mEiOdkQ%2BN8aBlm52QxDgwg%2FC8wQY6pgErOKHxyiAwh%2F1IpUXtNUtcF6S65iR1zgAw8AfDFPrD0oZqRqapjgWFuCgZoEkdiQraP%2BwmRjx%2BM6hGmuW2iXqvIp5QhqB3Twi2GmBmCUoo5W09R7fZ16OfHbZ%2BmiG7sjvpwKJD%2FWgJYKNP5B3nRCV4K%2BJG9kIIJshtb3kVvxhXzn41woKiUPCq4ahoZAGzjV4bioNzpi4Jug53KRYH5zdCjGb9aSW0&X-Amz-Signature=0abb9479539878d98c678fe2058f0aa61d92217c461bcae7b897166ff3232b16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYORKPXB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICeUbmEUk4rfivSWjZHTgwQLLpp91EijTTxYP2BQLoubAiBsm9a3oPuSRlxaL%2BJMgSd4YBwFhA5qdrvyqD1Ey5BBRiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNraQZxiB4Aa6NnQKtwDSTB9RbHOHcxnP4mWyxd13EvrN8trssicWogqpvzPdK1LrN%2BTrSX8EhCyeUetdu0%2F29JCecol9xZbSF%2BhNZ9TpvUK%2BtM6%2FwuhSY1Y11SNQpE71R6qYpjOU5Xw7fVQllBvc7VQL91nUC8uZEBrXSqdLy%2BtNiYhRxkFvOmX5oTw0eq6YEFvWX%2BM0nQXID3tZOUFOM9Ltok0FaylIG845VZA77RUEK6rGqe7NY4Th0XcqKWi9QCI9ZzZtkLy1WuAB4tWCY%2BjypHONOZNoTNmUEPUvCVuPAMGrTYR%2BOfVbS1hF2wPDb%2F2K%2BPbovyOVBpwLU%2B9nUUHHJN4%2BWTR%2FbQ%2FYE0MtDiORzvwfubEUFxJlGjjY8zlmaYnzlG3epKXGYTEV%2BOV194zQBmf2qWbugHi5ggVTCpIxTMN4t%2BRuVFbXPsHSQp2NaV6MLcBfr9jFxdYRk1iiipssrxZ2PvlOZydd2bkv9tVBtnuR1i62%2BzsbSYNTZJEHLRGKbvOu8WIw2pXeHdpe5O%2FfsY6An0PXhL5mpFW6%2B5yI7jsVXHwNNVAm1TCGGRZGz%2Bjet1tNcVTN1t%2BpjhUZxQ01plgtbAVD1i2Akgd8EtETob%2BDNaMOJbnLn7mEiOdkQ%2BN8aBlm52QxDgwg%2FC8wQY6pgErOKHxyiAwh%2F1IpUXtNUtcF6S65iR1zgAw8AfDFPrD0oZqRqapjgWFuCgZoEkdiQraP%2BwmRjx%2BM6hGmuW2iXqvIp5QhqB3Twi2GmBmCUoo5W09R7fZ16OfHbZ%2BmiG7sjvpwKJD%2FWgJYKNP5B3nRCV4K%2BJG9kIIJshtb3kVvxhXzn41woKiUPCq4ahoZAGzjV4bioNzpi4Jug53KRYH5zdCjGb9aSW0&X-Amz-Signature=0bfc171ede2322410c9e4a3524da771088d9d64faf94ef8a5e7eca2dadac5889&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR53LWTX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDrW%2BeYsV2NrSGxqVE9R8HgWsUIzpIVm5UUHEj%2FRF1I1AIgDNPHLEecrM5I2icGtqZml8wndlx3RNr8hu6g4NBrdbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqgqPEBLR%2FOudFqlyrcA3HwVuayC9JFPGfBg%2FJ02aN8k6zuySgPggGbJxaegGy9bVy0vMVzjGanOv6msRq5cfOmG9fpIs%2FHVuZGpcU%2FabxKsuQ1MfBK1mHoVNQOJ6%2FsXPO5%2FtTPwj6zz7k03UDTT1i3o8nMMenCFDoPQnUWkJVtFstpTQ2tt7ZoGzgRlMyzLMS63Wxso35IHqbdLv0ztINUxMV8EIe9CSs0QhlS22x3wc9XnB8nLwpPz%2BI3uE185osbZxj85f5Kz51KFzJNKW%2BVuE87sFDy8R5zC5cMFp%2BzNT7gXYJEy8lfdl6%2F8o1%2B2DIcroDPcl9T8At9xEo1BZnbZsU3lbflAh9D7u6Ywk9b%2Bw3KUlx6gc80DaWMfiZq4Dw7SZEE2mIVYQXxOCeL36HjSDqLG000izve3ljBC6wCR7eeb5P%2B%2ByTb%2Fxxx5kEg5VLjEd9AR08lMXjC%2FKmscj%2FKm%2FCGp6i3YJmV%2B%2Bn%2BbfVXBV3i9K7%2Bi0oSlRZJcR1fYCRRvqL%2Bc1H02lvOkYrm8TQhYiQpXGc2LoE4fvbjae12eZGxQzdtmgOCUYGTuaE1qmNm8YXS%2FDaleMSbbpC%2FZpwnih6g0vDuFqicb%2BXTyjaqYsDj1HagQuJPMW13lZ9%2FSXWbtDf%2FkA1UpAXEMOLhvMEGOqUB9Mf%2Bi0Q9zo842hpdPWnqfm9WzqbhYEgqDZ17jzduDUkpFSL7UedefNpaU44WoI4LsvRz6VDycz%2BzOfhR208BfDSTMcYaFbm9dPSLKV%2Bxo64%2BLXu9vr70py1%2FfmjlNSk%2BB3MqOvDQVoWcyR7NqzTFvOlwhJuomY1gYCOX6Pmle52tQHe0Wrc%2Bjczc0FT8gbgt5PgET8D9A3su01RCy8%2BlJuJFMllr&X-Amz-Signature=55844c7212ba1207d17ccf23ca301cc82731f4f0091364c0e13f6319eb0fdfbc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3EUDID%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBCT3P4WUALwc%2FWNcq3NHESWSaHuL5tYZSU8e0LybC2%2FAiEA2X%2B1eGJV%2ByyNJs2z8tpuG4HdPl9begUUF%2B6plJ9S%2F5YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEElUcLuWAB58KLYKyrcA4ltVksjusGUL%2FZSBYRk8w7xv%2Fj7ktUJePHuKNd879%2BLVuvEapfoFOeQU1lUti7V%2BSBvYly3R5DE7H51BqdQvv8Yke%2BaxxCBh2XF1LIcWnWZs9ibJuG8qVpkoAx%2F2C8MehRhHovPMOcCXU7XO3Hke9ESkrcWn47Pxcv7IcyTm83obD2mXVi9fAM5RSiPc0lBTg7jNf%2Fk%2F5xP80vJCmPkp3QO0IoFb2l2H8rhv69%2FtZVCzFcd05RkQ59NIrk7uPrM%2FmW5%2FJE2%2FLt%2FJax%2B0sWXPMP3FhVbsNtSJajR6VEm9y7gEv9xQe8XcAReZ2%2BfhL27hC%2BmKUDnXUijOjEXtmFTTAXt8uf1VDgwiWcO%2Ble%2Biwc%2BvRbbHDOa4Y14MLQYGJ3vwnRHo3zpc9ufGNfZFDZGYyC9YeP0cn0%2BfpWZuufcgL9ANY0gwySehyOuZ50PqNEhIb93JP%2B3wgky1Td0oJK17CEnAxPsD3ciYKGwx%2FztFY%2BLuPsN8Uc0QyKIKyLCh%2FsZJALCKnbwq00xqpeapPJmvmzieSvWmIcd%2F7vsUvU0kU3XC%2B%2BsGXyC%2FarVgLgpATxiX1cQbBPg2vzy1EKoslz%2FEFWLjfhFMdtGalAoj9Q5i1l6%2FDrQi8Ez3Oa1et8hMLDhvMEGOqUBXIvCxX%2FAYYPbP%2BtQkHxEN6AK94PG3e54SPnrFl0iFR2H8DFTaFAABVxugHS7uUjziR%2BGpccZJPwgk9O0iKdWW8Sw%2Fbykp3hJ8rsaVNcDd%2Bur1fh2QKniYFKmkxHBjcE8NdfmdlcGxoa1gWFjWULow9frNtiHBKe8bYg9j0Af5tjljPdgKV067%2F1Zq1TjSjaUVnS8ZtX9tCsFJhRbKRxallqU3xUD&X-Amz-Signature=838cc18bfaff6b5cda1e89852d2a3350def948485e13c81746bda8edf33262ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYORKPXB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICeUbmEUk4rfivSWjZHTgwQLLpp91EijTTxYP2BQLoubAiBsm9a3oPuSRlxaL%2BJMgSd4YBwFhA5qdrvyqD1Ey5BBRiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNraQZxiB4Aa6NnQKtwDSTB9RbHOHcxnP4mWyxd13EvrN8trssicWogqpvzPdK1LrN%2BTrSX8EhCyeUetdu0%2F29JCecol9xZbSF%2BhNZ9TpvUK%2BtM6%2FwuhSY1Y11SNQpE71R6qYpjOU5Xw7fVQllBvc7VQL91nUC8uZEBrXSqdLy%2BtNiYhRxkFvOmX5oTw0eq6YEFvWX%2BM0nQXID3tZOUFOM9Ltok0FaylIG845VZA77RUEK6rGqe7NY4Th0XcqKWi9QCI9ZzZtkLy1WuAB4tWCY%2BjypHONOZNoTNmUEPUvCVuPAMGrTYR%2BOfVbS1hF2wPDb%2F2K%2BPbovyOVBpwLU%2B9nUUHHJN4%2BWTR%2FbQ%2FYE0MtDiORzvwfubEUFxJlGjjY8zlmaYnzlG3epKXGYTEV%2BOV194zQBmf2qWbugHi5ggVTCpIxTMN4t%2BRuVFbXPsHSQp2NaV6MLcBfr9jFxdYRk1iiipssrxZ2PvlOZydd2bkv9tVBtnuR1i62%2BzsbSYNTZJEHLRGKbvOu8WIw2pXeHdpe5O%2FfsY6An0PXhL5mpFW6%2B5yI7jsVXHwNNVAm1TCGGRZGz%2Bjet1tNcVTN1t%2BpjhUZxQ01plgtbAVD1i2Akgd8EtETob%2BDNaMOJbnLn7mEiOdkQ%2BN8aBlm52QxDgwg%2FC8wQY6pgErOKHxyiAwh%2F1IpUXtNUtcF6S65iR1zgAw8AfDFPrD0oZqRqapjgWFuCgZoEkdiQraP%2BwmRjx%2BM6hGmuW2iXqvIp5QhqB3Twi2GmBmCUoo5W09R7fZ16OfHbZ%2BmiG7sjvpwKJD%2FWgJYKNP5B3nRCV4K%2BJG9kIIJshtb3kVvxhXzn41woKiUPCq4ahoZAGzjV4bioNzpi4Jug53KRYH5zdCjGb9aSW0&X-Amz-Signature=2b56d344c732eb85aa09963ebbe827cc624c4ffac1808d56ed3fd886950d72b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
