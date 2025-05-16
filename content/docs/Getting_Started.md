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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDEQQNW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdha13ccYghW92%2BMC3AXdEQ2Amal4dxo3WEfOw1WtekwIgbbnqPkf5Ru2uUnB46dEuo%2ByAnBwiwBG9FtTuGP8ImwQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDI8a%2F4gNkDAyowhVQSrcA7Mtn9Z0KJm%2Fc%2BirMrzx%2BvFsdxBc9ODrFuw0nIEL0pF4uyJbfAGI9Ext8yZvYyXvcWeRhKhexCb1abxpYQ35bGVQfuUuIaxvaEVGNrU8YTyofqgxiBhabYtFstOuqwllljc%2B6H3MjcgG8hkHmxkDMiTiaUsIJaZHrbvF00jKyC20qPnuhJz9kZXJaTWbKLxZnvthGkZjgFpdXVHhGP0f7j8WYPE8iXCo7u%2BNLjqH9YUEuPIP6Fh%2FU2Jx%2FjC%2B%2Fn%2Bp2Iuy13PxSH2ZuMFhRG5YHCSOI9ab97GbEtHxul4GSpr5jGfg4twckVXC%2Byd9xM1dlMlwStMDyPvpTwXPkILTg2AhV9niyZGdFiZBRT8TmxqdM%2FlpsGGKOeZ17OhjTradC%2BtMKuRSpdjBoiyDWr%2FlWcI1D%2F%2FN4SQLNbpLwEfskvHOAL2spnRbIwPB24NrNZOv%2B37f6srRVZYeHckC7GAEJh6zpDpTae3chIuyHiDc4LzQIXTTygkdgv9U94c%2F2pEff2CQ%2FBqMCX6T6dP7FGMFVGbahoPFBtouH7WNGSM8oMwpct%2Bq2kRIeiHgWHAV0zDIr1WG%2BFPSryun8fRoSAyn%2BfFe7iOYmm9mfUpjTF0x7fGNwQTXLktf1g7bbNmuMK25m8EGOqUBIPJ%2BWm%2BzYYC0OcxD7ze%2FIq4yTyWsxEh689R9nBaSljfIm9XYpQtASp59Cip0WhOitePDcUvVJe7jwI4rHcv8DDOlzwWc07jox%2FSzA63w0%2BFbjRyZSKozh704eGNEM5ZkL4btLVbfKWLvm9%2Bmy3eMVBOMzfeGGCOPdYD01ivrpZaL7ARwK7u4DTbpuJIpyzB%2Bo5AOe1cj0qJCGl8PL%2BGeDnqEpGEz&X-Amz-Signature=ce2bb2cc0e141c04fb8b85a3df2d7eca41771dd80056e62aec1e8156eddf703b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDEQQNW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdha13ccYghW92%2BMC3AXdEQ2Amal4dxo3WEfOw1WtekwIgbbnqPkf5Ru2uUnB46dEuo%2ByAnBwiwBG9FtTuGP8ImwQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDI8a%2F4gNkDAyowhVQSrcA7Mtn9Z0KJm%2Fc%2BirMrzx%2BvFsdxBc9ODrFuw0nIEL0pF4uyJbfAGI9Ext8yZvYyXvcWeRhKhexCb1abxpYQ35bGVQfuUuIaxvaEVGNrU8YTyofqgxiBhabYtFstOuqwllljc%2B6H3MjcgG8hkHmxkDMiTiaUsIJaZHrbvF00jKyC20qPnuhJz9kZXJaTWbKLxZnvthGkZjgFpdXVHhGP0f7j8WYPE8iXCo7u%2BNLjqH9YUEuPIP6Fh%2FU2Jx%2FjC%2B%2Fn%2Bp2Iuy13PxSH2ZuMFhRG5YHCSOI9ab97GbEtHxul4GSpr5jGfg4twckVXC%2Byd9xM1dlMlwStMDyPvpTwXPkILTg2AhV9niyZGdFiZBRT8TmxqdM%2FlpsGGKOeZ17OhjTradC%2BtMKuRSpdjBoiyDWr%2FlWcI1D%2F%2FN4SQLNbpLwEfskvHOAL2spnRbIwPB24NrNZOv%2B37f6srRVZYeHckC7GAEJh6zpDpTae3chIuyHiDc4LzQIXTTygkdgv9U94c%2F2pEff2CQ%2FBqMCX6T6dP7FGMFVGbahoPFBtouH7WNGSM8oMwpct%2Bq2kRIeiHgWHAV0zDIr1WG%2BFPSryun8fRoSAyn%2BfFe7iOYmm9mfUpjTF0x7fGNwQTXLktf1g7bbNmuMK25m8EGOqUBIPJ%2BWm%2BzYYC0OcxD7ze%2FIq4yTyWsxEh689R9nBaSljfIm9XYpQtASp59Cip0WhOitePDcUvVJe7jwI4rHcv8DDOlzwWc07jox%2FSzA63w0%2BFbjRyZSKozh704eGNEM5ZkL4btLVbfKWLvm9%2Bmy3eMVBOMzfeGGCOPdYD01ivrpZaL7ARwK7u4DTbpuJIpyzB%2Bo5AOe1cj0qJCGl8PL%2BGeDnqEpGEz&X-Amz-Signature=4c690fad45a34e2191c05a0b25e74abd5fa6d7e501e54d49832416424703705a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDEQQNW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdha13ccYghW92%2BMC3AXdEQ2Amal4dxo3WEfOw1WtekwIgbbnqPkf5Ru2uUnB46dEuo%2ByAnBwiwBG9FtTuGP8ImwQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDI8a%2F4gNkDAyowhVQSrcA7Mtn9Z0KJm%2Fc%2BirMrzx%2BvFsdxBc9ODrFuw0nIEL0pF4uyJbfAGI9Ext8yZvYyXvcWeRhKhexCb1abxpYQ35bGVQfuUuIaxvaEVGNrU8YTyofqgxiBhabYtFstOuqwllljc%2B6H3MjcgG8hkHmxkDMiTiaUsIJaZHrbvF00jKyC20qPnuhJz9kZXJaTWbKLxZnvthGkZjgFpdXVHhGP0f7j8WYPE8iXCo7u%2BNLjqH9YUEuPIP6Fh%2FU2Jx%2FjC%2B%2Fn%2Bp2Iuy13PxSH2ZuMFhRG5YHCSOI9ab97GbEtHxul4GSpr5jGfg4twckVXC%2Byd9xM1dlMlwStMDyPvpTwXPkILTg2AhV9niyZGdFiZBRT8TmxqdM%2FlpsGGKOeZ17OhjTradC%2BtMKuRSpdjBoiyDWr%2FlWcI1D%2F%2FN4SQLNbpLwEfskvHOAL2spnRbIwPB24NrNZOv%2B37f6srRVZYeHckC7GAEJh6zpDpTae3chIuyHiDc4LzQIXTTygkdgv9U94c%2F2pEff2CQ%2FBqMCX6T6dP7FGMFVGbahoPFBtouH7WNGSM8oMwpct%2Bq2kRIeiHgWHAV0zDIr1WG%2BFPSryun8fRoSAyn%2BfFe7iOYmm9mfUpjTF0x7fGNwQTXLktf1g7bbNmuMK25m8EGOqUBIPJ%2BWm%2BzYYC0OcxD7ze%2FIq4yTyWsxEh689R9nBaSljfIm9XYpQtASp59Cip0WhOitePDcUvVJe7jwI4rHcv8DDOlzwWc07jox%2FSzA63w0%2BFbjRyZSKozh704eGNEM5ZkL4btLVbfKWLvm9%2Bmy3eMVBOMzfeGGCOPdYD01ivrpZaL7ARwK7u4DTbpuJIpyzB%2Bo5AOe1cj0qJCGl8PL%2BGeDnqEpGEz&X-Amz-Signature=9062b5ec841819ca64465ad72e419395a319a999b8ed12b96a1363da12ea39d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USHSZKNU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvndznMGHhMS5bR7Oc%2By4K%2F2U3TXaPSYWKZ%2BXZ7GMb4wIhAJoEMolGTKH7YH3dgdV4OcADS7u5jj8xsadwAaCS%2BRXmKv8DCEAQABoMNjM3NDIzMTgzODA1IgyaCpUDuE9qJH3xDc0q3AMWMWB7nEQPkxfMMJyIM38E%2BQIAfBSJG0VXXPcXdUVpdU%2BxyZa4Gv9JG7xtnd7P5HjqWH8ZuHPsA5WNwMkgdzzDRVbaRpJbDLhyUb8FPhKE7OudJD%2FOSd0AgNFxZCZuHuxxr2nYnJKzkwhTCbWeW2lFBUGqcoqMjzc8uDxTEB94w56mc6d5lcU%2F4%2FnkzHrIGO3QgoPCZePx6TJa6DFIMbehz0gcb1XyvFxjLG1wI%2BJm7cwA0cxqXCjMgQViILR2LtweXBdeZaRyV461tDntqFFkqeyfyw5bI3wD2T990JsnyHHGyMlO0nG%2BGVjMIqG%2Fh5tESLS3HQdXCfuHSBVzfyC13aN376PJasZeXJlxDhXgs9pysKj3MpMMiylOf2OQ2hTjW7v66vth358Vh86KLaCDeCl2NNxnHr%2B%2FfJxAvLpmQZMu1UpXMMa3RH6aujVAK1whQs9DVzNHH9NlztYZbWDHd0hBNKaSs%2BlOPmCvlvPYBE%2Bjie18WQaGL2bcDT1t9BCnW27jfcMZGn%2BmxJb%2FfuSI3UbTDcMkHa%2FQdvYDFd49uAkcXyxU%2F9Cuv3i9v7wU791F07F6vD62CMTO1G4DcQcAx61Tssi44rw39ciCTDOkTgRzrmBkWPBoS8ouXTD4uZvBBjqkAeH7qFwqfAaV9FRIakNwbWJoqtr8xLRNv8%2BZut2m65FtqqvItctTrdjpwjqa6rYiEP%2BZIgOHFTLLi6G33WIWKZnTfvOTY27oScBv%2FGSc7S5gStO42wEFbeGJ2KOb33iSG09R%2FswMzt40%2BkA8Jjc%2Bwuf7MmmwPEmO2%2BQM53Q%2FzRth2YQMVkboNaTweFTZ7kdwxjM569DBEDgDP%2F8L7jru%2BH3FWzJg&X-Amz-Signature=f6da411dbb9836cc68ad4417bf6b7e3aa536f8be1013c97cd7b7247d20d319df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYH25YUM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhJvu%2BQoQQ7eRJubzntA4318s9V%2Fw1OuUzTczLabSJtAiAFyLptxFUvQYIVIOm2PrDOy3SlGMKNOynS5KDY54onsCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMvEZ18kkIX52rrefmKtwD7uhL7kNrXf%2BFOweaUy2XVkXIMqSh49Q7%2B3TMfJL3ocniuYIbIuGw5ezAQoUAphYasModu2T76Rk1A5BgqCw9qSs9MMTB7mc7%2Bs%2BdIx8hviu%2FMiIgaaPZkDKA6Z88SMT1z2UUe%2FBIZplpqUM9bi6oAySqfHPZMrGpuHwF5Na%2F8Ckj4HlNL0cOvI6RaaijT1s6Kbmc1LDr6mavcScocxzUOHZqUCGCVBmZ%2FEg01SwbvpDGd8RNSumheomNhojKVGKVDdTdSlwVs1JdRc0esvvnpa9hDYvbrDISawDCwu8YWWX3F7ZW%2Fe30kEVKqv3yfmq029YnWheQk78RvnODnIU4ROkCKUBSQpFe%2BjaxpUlN2nla4SMw5JYPxD8Q2LNhJN%2BXmqFuEzaYNDMrhzCZXyWd5OGFOUYbRQRW9XcU9CjAmWhuqc9hYM0n4B1NhE2KZE4GOHhKOqz%2Fo6A6RGTwmTDj4i%2BFPw8phg1RR5E3AZYeO8muIkDcWmblQy59cgFQzlvls4zgIE56pF8f7OJG8jzGeYR0Z9oXYosziF%2FFQ2KvcagT07HbAT9AehjPDWerpibE0sHSuiAO%2FefLxCga%2F7nsXnmGo9yOaP5h0pdgZOatAgUMlHAwE4bDAhRVePUwirqbwQY6pgHBFfVC7mqT90rMFeYynYzDjJihAI2iRe1bMcAD4UEhim57UIddJ%2BbxlTc%2B%2BOYa6Me49YnoZVi9ptjpJl3dNjeeQRLbgaaBO1qz%2Fu4HaS2yHvEv1GEWDVQ5imJv2kVhHLMRJ0sd3G0T%2BMZi8OZsyDivlm0xUgJ1zjSNWUeBn9pefjarqjtdGivkPswkqAVmcJoXNfGTKQBSjsul3dA8lXF%2FJUXCEhXL&X-Amz-Signature=c9c0b4327b1e6ac64bf4d9634427f67ab45e2327154f58ca54ce88d6dd381f69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDEQQNW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdha13ccYghW92%2BMC3AXdEQ2Amal4dxo3WEfOw1WtekwIgbbnqPkf5Ru2uUnB46dEuo%2ByAnBwiwBG9FtTuGP8ImwQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDI8a%2F4gNkDAyowhVQSrcA7Mtn9Z0KJm%2Fc%2BirMrzx%2BvFsdxBc9ODrFuw0nIEL0pF4uyJbfAGI9Ext8yZvYyXvcWeRhKhexCb1abxpYQ35bGVQfuUuIaxvaEVGNrU8YTyofqgxiBhabYtFstOuqwllljc%2B6H3MjcgG8hkHmxkDMiTiaUsIJaZHrbvF00jKyC20qPnuhJz9kZXJaTWbKLxZnvthGkZjgFpdXVHhGP0f7j8WYPE8iXCo7u%2BNLjqH9YUEuPIP6Fh%2FU2Jx%2FjC%2B%2Fn%2Bp2Iuy13PxSH2ZuMFhRG5YHCSOI9ab97GbEtHxul4GSpr5jGfg4twckVXC%2Byd9xM1dlMlwStMDyPvpTwXPkILTg2AhV9niyZGdFiZBRT8TmxqdM%2FlpsGGKOeZ17OhjTradC%2BtMKuRSpdjBoiyDWr%2FlWcI1D%2F%2FN4SQLNbpLwEfskvHOAL2spnRbIwPB24NrNZOv%2B37f6srRVZYeHckC7GAEJh6zpDpTae3chIuyHiDc4LzQIXTTygkdgv9U94c%2F2pEff2CQ%2FBqMCX6T6dP7FGMFVGbahoPFBtouH7WNGSM8oMwpct%2Bq2kRIeiHgWHAV0zDIr1WG%2BFPSryun8fRoSAyn%2BfFe7iOYmm9mfUpjTF0x7fGNwQTXLktf1g7bbNmuMK25m8EGOqUBIPJ%2BWm%2BzYYC0OcxD7ze%2FIq4yTyWsxEh689R9nBaSljfIm9XYpQtASp59Cip0WhOitePDcUvVJe7jwI4rHcv8DDOlzwWc07jox%2FSzA63w0%2BFbjRyZSKozh704eGNEM5ZkL4btLVbfKWLvm9%2Bmy3eMVBOMzfeGGCOPdYD01ivrpZaL7ARwK7u4DTbpuJIpyzB%2Bo5AOe1cj0qJCGl8PL%2BGeDnqEpGEz&X-Amz-Signature=98b9e647973396f21a321bff340a2259275630e785a33ca7ddf687696a6d082a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
