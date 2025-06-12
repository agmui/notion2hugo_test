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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BGIMO2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIByjQXvhoP8bVwatykNSswPbJ4JzMl0gDf%2B%2BY0BvXg5JAiALviqvfXSJzAunKSSgrXogEqhgM6SqDNeitsV4OSDZSSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2BL6Coxgxg%2BmnI3HKtwDTzpteVXLDEje86WebnipeK15M%2FZcmScD%2BQuzETd6c%2F5BO55iy899HhZfvdNfkBiL9Ceu%2BCHxNc3yHe0MM7t56tnUHxYu6%2FEJ5SnJdzEekhACn7Pz70uOTgVTezHchdqXIYcoLHa%2FJxc1S57YhFlFXHMBMu4bEh%2Fqi3dHRNAyx622d%2B54%2Fjc5S8KJFKma%2FdOXHDNT9p8qH1WAdT3fDMZBml9btUTtr9hX7wAEdtrdJiOEmi7gso%2Fc21Ga6g7mvuabIA8P96PDAU157pvvDttoJWiJvxLBbEZXSBvYRrl1lIPZLuJ6mA8f6QpsY8pCqqD9WtAPyadGGoIxdLo6cmxNhBcyaRvO5eSYA%2BpyG46tSmBVnOKeRuMWXgsOQy4vQhTz%2BdZ7ukn16F48nQMpnB3V3SKJsZS%2B79xt4g%2FxOL2LrfLTQ3PTE6jjicIhATRkgVz%2B65NDWRdTZp7GZDsk4ldW4xSVUTEhoU8bBrhO5wogeKPlwVRZkj2uISLXyV%2BZY147ja9Ncg7TFSFLEvW%2FopRZXLL5DGba%2FufoxFtG0si7jr93gwwBOi3fXE3C1FowGomDPPERb5rjrro%2F3mxtR2NjF6MOBIY1E3X9jvniD%2BtmmJ9hMLWbCJSdT1v5Smkw64eqwgY6pgE3L9oNshjZxV6SwfgLyZbTPFqVIhYo476CulUnE29P9vmy8abNWo%2BX6neT6e5vxHddqaUSW4YBkEWzd%2B6BpIeNxXFJbXUcCJX7UIL6SOJfVjhiqd4PlS1qxIzSJlXvJWtBcHK0gyiTzPUfgC4%2Fz47ho1isVdS2t4g9o0btP6Q8EIbIc%2FgAvzZmAD2W0EixUaHzO9DXGPuLPkdfeS7p1gRzd%2BQXMj5X&X-Amz-Signature=8b66ca54563782535241d1aa8cd83e2f89f7c5dafe6823f20b024534aa980060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BGIMO2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIByjQXvhoP8bVwatykNSswPbJ4JzMl0gDf%2B%2BY0BvXg5JAiALviqvfXSJzAunKSSgrXogEqhgM6SqDNeitsV4OSDZSSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2BL6Coxgxg%2BmnI3HKtwDTzpteVXLDEje86WebnipeK15M%2FZcmScD%2BQuzETd6c%2F5BO55iy899HhZfvdNfkBiL9Ceu%2BCHxNc3yHe0MM7t56tnUHxYu6%2FEJ5SnJdzEekhACn7Pz70uOTgVTezHchdqXIYcoLHa%2FJxc1S57YhFlFXHMBMu4bEh%2Fqi3dHRNAyx622d%2B54%2Fjc5S8KJFKma%2FdOXHDNT9p8qH1WAdT3fDMZBml9btUTtr9hX7wAEdtrdJiOEmi7gso%2Fc21Ga6g7mvuabIA8P96PDAU157pvvDttoJWiJvxLBbEZXSBvYRrl1lIPZLuJ6mA8f6QpsY8pCqqD9WtAPyadGGoIxdLo6cmxNhBcyaRvO5eSYA%2BpyG46tSmBVnOKeRuMWXgsOQy4vQhTz%2BdZ7ukn16F48nQMpnB3V3SKJsZS%2B79xt4g%2FxOL2LrfLTQ3PTE6jjicIhATRkgVz%2B65NDWRdTZp7GZDsk4ldW4xSVUTEhoU8bBrhO5wogeKPlwVRZkj2uISLXyV%2BZY147ja9Ncg7TFSFLEvW%2FopRZXLL5DGba%2FufoxFtG0si7jr93gwwBOi3fXE3C1FowGomDPPERb5rjrro%2F3mxtR2NjF6MOBIY1E3X9jvniD%2BtmmJ9hMLWbCJSdT1v5Smkw64eqwgY6pgE3L9oNshjZxV6SwfgLyZbTPFqVIhYo476CulUnE29P9vmy8abNWo%2BX6neT6e5vxHddqaUSW4YBkEWzd%2B6BpIeNxXFJbXUcCJX7UIL6SOJfVjhiqd4PlS1qxIzSJlXvJWtBcHK0gyiTzPUfgC4%2Fz47ho1isVdS2t4g9o0btP6Q8EIbIc%2FgAvzZmAD2W0EixUaHzO9DXGPuLPkdfeS7p1gRzd%2BQXMj5X&X-Amz-Signature=be67cdb7908f156dd2f08434778ed68bf474ed51186d51bc4371b79e3a20e566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BGIMO2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIByjQXvhoP8bVwatykNSswPbJ4JzMl0gDf%2B%2BY0BvXg5JAiALviqvfXSJzAunKSSgrXogEqhgM6SqDNeitsV4OSDZSSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2BL6Coxgxg%2BmnI3HKtwDTzpteVXLDEje86WebnipeK15M%2FZcmScD%2BQuzETd6c%2F5BO55iy899HhZfvdNfkBiL9Ceu%2BCHxNc3yHe0MM7t56tnUHxYu6%2FEJ5SnJdzEekhACn7Pz70uOTgVTezHchdqXIYcoLHa%2FJxc1S57YhFlFXHMBMu4bEh%2Fqi3dHRNAyx622d%2B54%2Fjc5S8KJFKma%2FdOXHDNT9p8qH1WAdT3fDMZBml9btUTtr9hX7wAEdtrdJiOEmi7gso%2Fc21Ga6g7mvuabIA8P96PDAU157pvvDttoJWiJvxLBbEZXSBvYRrl1lIPZLuJ6mA8f6QpsY8pCqqD9WtAPyadGGoIxdLo6cmxNhBcyaRvO5eSYA%2BpyG46tSmBVnOKeRuMWXgsOQy4vQhTz%2BdZ7ukn16F48nQMpnB3V3SKJsZS%2B79xt4g%2FxOL2LrfLTQ3PTE6jjicIhATRkgVz%2B65NDWRdTZp7GZDsk4ldW4xSVUTEhoU8bBrhO5wogeKPlwVRZkj2uISLXyV%2BZY147ja9Ncg7TFSFLEvW%2FopRZXLL5DGba%2FufoxFtG0si7jr93gwwBOi3fXE3C1FowGomDPPERb5rjrro%2F3mxtR2NjF6MOBIY1E3X9jvniD%2BtmmJ9hMLWbCJSdT1v5Smkw64eqwgY6pgE3L9oNshjZxV6SwfgLyZbTPFqVIhYo476CulUnE29P9vmy8abNWo%2BX6neT6e5vxHddqaUSW4YBkEWzd%2B6BpIeNxXFJbXUcCJX7UIL6SOJfVjhiqd4PlS1qxIzSJlXvJWtBcHK0gyiTzPUfgC4%2Fz47ho1isVdS2t4g9o0btP6Q8EIbIc%2FgAvzZmAD2W0EixUaHzO9DXGPuLPkdfeS7p1gRzd%2BQXMj5X&X-Amz-Signature=745cfd677263a4ade035575c803343b55fed282c429aa185614006988f88c84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ZKHPIS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDDuqsyQbXt1nuqfKL%2Fmzry2SBVzEmgUjw%2BIyv50McbOAIhAMuO5lV4bawnPlWhXfWvrnOzJcsu9iXaOlORr5uf%2Fav6KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOEv9ULD4v3t%2B77kq3APYD2%2FkDnPsdUaRQAkvs%2BmJehx%2FpLthlG62itu2Q4IAAHxZsYibL2WouHAY5vuZKi5gs9rO9GUH6pv75bxcBBTe0SF108DuRfQccb8yqotB4XarryZAJ5sL%2BL6kmafdP2iyYJNDivsAHcXNleiWR7hlVBR3zBq6L68PaC06HKw9TgTrYCnnefIgztycf2aPnmxWMbnI1jYl5hUi8cn5mhoNqMYB4x74MsaTnirVNmR%2B0iprMKLysi7yTZ2NfVdfqcW1Jp4lkLa9FGKWgrYoCFjrU%2Fu0aiAM6Mf3y8pkjTFyFBdval8f4FboomLFqACnwCLTr2p9r5DbFO5HDhkLnUoCDHASGzq%2FdSzGJdxezOZQ9tXLJzAjykhNxuU2VZJGirahB0CNVixS0h8DRDCZKO4v21K4IlKXUwIL3kUQg64sWil5dSlt1ug3szyei2%2BHb7DE9BPaOjB8sHxW0u4pY75B5272tQ9hht5OZX3dOaA1qPP%2BVXmy70hAbSwG5qdWo2PaScWQ%2F%2FRT8BUqAm1Q%2FzDvuvMdHIASwfM7ETVSBmBAH11wlL71CqAn0ahYTAfVu4LcwqdxfiTe7Dk1AQzNwDRAQCpn%2FNAt6s7jB6Olc7dudOjJcX9xNRnPuGBt6TDUtqrCBjqkAagDsfYBNPgGywiNkg20colXIugIpdxrk323ArVtXZfCUjwnuPJgx7TegI9P6ey4YR3gAhCgInLHSV2EgTTRDO4w5ONd%2FvqsPry%2BNrGWccwZFx9bidgmRPVh6eoWCZvkzPO1dMl5eFHDfH%2BcqhikCv84PXS8XPsWirxJzP3M2vDxEUUKcPJAGf4KQivGgS9BVk%2FGZ1UkWh%2F94gRWL1gj%2FrrXkURk&X-Amz-Signature=95a6733f8055cfbbbbc24adac955f4444b23c94720ddad654b54e0e76d958bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJMU6DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFGmZGlk8xSvDIXfJ0nj%2FRSI8BZppno6M6AhPkaoJxokAiEAob%2B3quG6a1sfLEa8mRi8TpMDOS5Fd%2FXsGsYMIZmMvzQqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlQ1ZKVKTGVWphyIircA46HVm%2BApadHToSzZeA8OsejDYmu7Nts6DYvxpH26U%2BL8EP9bNsz9ri%2BvJSzuVnxpYcqr46t8rkcJmOGoBR1U1pRNvM%2Fie7K0hZvhEUvoFAsQRuLs32iH5ccwk22cXpuF5Pija3pnKIAvsk4DH9IxBtlk5BfzAwc9y8wGriq3%2Fc4hzqOfQdAaToWzaesTIq0dkcMkoagyIri%2FGbcgAjdXwrky1WanDCJ58JIRPfToQGbQsI9FW8w4YGjawqz2kPoILO9wvru%2BZxAOsMuPhVV4ruXXRVHs9nTtB3A3NXYCtY0HllIkcI63EEXQZSd5%2BZ0Ce1mFI87TES8%2B%2BZ0pGJ9qJwD9wvq61JMy0W2bi9XxFodcxhrhHhco0ZmJPkj2nKkaAyvCfcY%2Ft6VYzw4L3AoB99lyZ4hlzvKkPIrL9YyrlAlGXmM0HA2k8Ku3ffIUdNsUkljk%2Bzfx2y%2FZi0ZsICBfw36QdyUtj2l6COm7wJN5Bs7SzKWJQNT7Zc%2FtVH6np5hY8lep4pAWrZgCE0GpoKJpup%2FNJz7U%2F2X%2BbozgJrtuVjKjie1bO38tjr0sM3uRY2ZPHXpTgiOPutNTMx%2Fh81xLgVKAl%2BXuzQoAJABTc5CwQVmLHiCHLj%2FVb4xzy5OMMaIqsIGOqUBxJjWu6yivcRhq0f8FsFko595%2FdPfcVyrCN50H%2FpjatzepnIhsfpeymEfcPr%2FhQbnjxJCrqA0qlLR2rxkt7f%2B%2Bw9fqarSAilFrXUfhpiQ%2FRhB%2FaOpQMOAkwidZobS7g%2FmoIpQdXymniUrgXu4UomJoydtZVhcbPORdLYNraETVmo3Ec7T4vUk9mh%2F5JlBqmFO3B8%2B5HPJEDtr2AYyS8OP2g3cTC1I&X-Amz-Signature=8b4306e608a9c1ab19c04c26817bd795f83186b9fc04741904e8cbd7131656c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BGIMO2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIByjQXvhoP8bVwatykNSswPbJ4JzMl0gDf%2B%2BY0BvXg5JAiALviqvfXSJzAunKSSgrXogEqhgM6SqDNeitsV4OSDZSSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2BL6Coxgxg%2BmnI3HKtwDTzpteVXLDEje86WebnipeK15M%2FZcmScD%2BQuzETd6c%2F5BO55iy899HhZfvdNfkBiL9Ceu%2BCHxNc3yHe0MM7t56tnUHxYu6%2FEJ5SnJdzEekhACn7Pz70uOTgVTezHchdqXIYcoLHa%2FJxc1S57YhFlFXHMBMu4bEh%2Fqi3dHRNAyx622d%2B54%2Fjc5S8KJFKma%2FdOXHDNT9p8qH1WAdT3fDMZBml9btUTtr9hX7wAEdtrdJiOEmi7gso%2Fc21Ga6g7mvuabIA8P96PDAU157pvvDttoJWiJvxLBbEZXSBvYRrl1lIPZLuJ6mA8f6QpsY8pCqqD9WtAPyadGGoIxdLo6cmxNhBcyaRvO5eSYA%2BpyG46tSmBVnOKeRuMWXgsOQy4vQhTz%2BdZ7ukn16F48nQMpnB3V3SKJsZS%2B79xt4g%2FxOL2LrfLTQ3PTE6jjicIhATRkgVz%2B65NDWRdTZp7GZDsk4ldW4xSVUTEhoU8bBrhO5wogeKPlwVRZkj2uISLXyV%2BZY147ja9Ncg7TFSFLEvW%2FopRZXLL5DGba%2FufoxFtG0si7jr93gwwBOi3fXE3C1FowGomDPPERb5rjrro%2F3mxtR2NjF6MOBIY1E3X9jvniD%2BtmmJ9hMLWbCJSdT1v5Smkw64eqwgY6pgE3L9oNshjZxV6SwfgLyZbTPFqVIhYo476CulUnE29P9vmy8abNWo%2BX6neT6e5vxHddqaUSW4YBkEWzd%2B6BpIeNxXFJbXUcCJX7UIL6SOJfVjhiqd4PlS1qxIzSJlXvJWtBcHK0gyiTzPUfgC4%2Fz47ho1isVdS2t4g9o0btP6Q8EIbIc%2FgAvzZmAD2W0EixUaHzO9DXGPuLPkdfeS7p1gRzd%2BQXMj5X&X-Amz-Signature=e7a2f3bff51a4d8a9ac57aea8d61e323100f0a4533968085e57f602c38b2b653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
