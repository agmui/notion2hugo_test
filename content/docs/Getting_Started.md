---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGMEIBF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN5wNzr7r1nsQjytzkUOOYNpSXfB7OqGGAsyj%2BYnu1rAIgN9qcsT1FdI1NCCI1f5NgOFuR6pZxT1Ae3nqFpWy1ZY0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDE%2B%2Bf2ZQDoyaHaX%2BLSrcA4ETa56Fjv46nlyU%2FYI4ndy%2BsPX48Hs5eCTuusV9YNLePKnFMWU%2Fx8VyegFx4LGKFERbOO0%2BMNJobJRKk4R%2BuiYl%2FTp%2FBtlJs%2BG7lvAm5sRpM5QzR%2BNxJKnBSmd%2FXaN%2FYucEaKddCGZPy%2Ber0E2oHkr3%2BWK0PcV7x%2F1ob8X69W68r6A%2BhV7mZPUZ9nbbVpWouW%2F3YD%2FLpAnYjswOQII%2FNlM9lmSu%2FoWAz2iIm8b1C2PrB7pXS9kkjnxi6fCFyp0jYhDAf6MCK4O%2BqnUHoDS5hbfCD%2B7Yb%2FGxuh4SOFzMQ28V1Hl7EIrKYc3SkmGuvlIhAI0i%2FtGQi1K8nsVO4ll011bUHLfXyBZj1auQcP9c3%2FHWUnEOnguo4WSzFT1%2BBDZ%2B%2FkxEkf%2B%2Fas9tYacsuaa9PCgqZisu2V%2FbmYW17kHlacDHQx%2BrXeRrg1X6%2F%2Fip%2BGA3m2wCcfvLK5GTOn077loh4hxRxOXt4GBYxUjYZaCxT2o7v6pmXKKbKE1TX7qVoeHmi8guUaxNha%2BFWt3R3F9dag65HafbYULWeljAgQDppS3domXl%2FFzkSCt9mG8gonrAghpDgDEC%2Brr11%2FS%2Bg3VIsCCdW2YLLyudH0Zre6DjnGnmSdWC37vGqooZrf%2FAMNSn4b4GOqUBvQ6h97%2F3e0bko%2BoIGLBXZn0HudD7uCoOhOclSAVWjHv9F46LovXbG8VRDJ807BWrpb4bxW%2FCj54L7Fad5sPqvGyFKUlLE6%2FL%2FUSWXB%2FdU6hChZGjRABpZdBndmT0agUhnLdQka6XrfESl7SDGUKIDxjnDjcZ2ui2PnYC7EOIbmjd%2BFPwtcVm6wn%2FQMBG3fmjWt2WQXU%2FG%2F9bfT%2B5o0DOq0P8Dsq5&X-Amz-Signature=48ccacbcf34b79b045217bcacdf7d8bd50fc142f9279f28f04dc2104796049f8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGMEIBF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN5wNzr7r1nsQjytzkUOOYNpSXfB7OqGGAsyj%2BYnu1rAIgN9qcsT1FdI1NCCI1f5NgOFuR6pZxT1Ae3nqFpWy1ZY0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDE%2B%2Bf2ZQDoyaHaX%2BLSrcA4ETa56Fjv46nlyU%2FYI4ndy%2BsPX48Hs5eCTuusV9YNLePKnFMWU%2Fx8VyegFx4LGKFERbOO0%2BMNJobJRKk4R%2BuiYl%2FTp%2FBtlJs%2BG7lvAm5sRpM5QzR%2BNxJKnBSmd%2FXaN%2FYucEaKddCGZPy%2Ber0E2oHkr3%2BWK0PcV7x%2F1ob8X69W68r6A%2BhV7mZPUZ9nbbVpWouW%2F3YD%2FLpAnYjswOQII%2FNlM9lmSu%2FoWAz2iIm8b1C2PrB7pXS9kkjnxi6fCFyp0jYhDAf6MCK4O%2BqnUHoDS5hbfCD%2B7Yb%2FGxuh4SOFzMQ28V1Hl7EIrKYc3SkmGuvlIhAI0i%2FtGQi1K8nsVO4ll011bUHLfXyBZj1auQcP9c3%2FHWUnEOnguo4WSzFT1%2BBDZ%2B%2FkxEkf%2B%2Fas9tYacsuaa9PCgqZisu2V%2FbmYW17kHlacDHQx%2BrXeRrg1X6%2F%2Fip%2BGA3m2wCcfvLK5GTOn077loh4hxRxOXt4GBYxUjYZaCxT2o7v6pmXKKbKE1TX7qVoeHmi8guUaxNha%2BFWt3R3F9dag65HafbYULWeljAgQDppS3domXl%2FFzkSCt9mG8gonrAghpDgDEC%2Brr11%2FS%2Bg3VIsCCdW2YLLyudH0Zre6DjnGnmSdWC37vGqooZrf%2FAMNSn4b4GOqUBvQ6h97%2F3e0bko%2BoIGLBXZn0HudD7uCoOhOclSAVWjHv9F46LovXbG8VRDJ807BWrpb4bxW%2FCj54L7Fad5sPqvGyFKUlLE6%2FL%2FUSWXB%2FdU6hChZGjRABpZdBndmT0agUhnLdQka6XrfESl7SDGUKIDxjnDjcZ2ui2PnYC7EOIbmjd%2BFPwtcVm6wn%2FQMBG3fmjWt2WQXU%2FG%2F9bfT%2B5o0DOq0P8Dsq5&X-Amz-Signature=c0a2e12dc7f198a4bec49d477cab580e07546c2e4ba64b08fb2961c8e2e801e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW32XTZU%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Bd9FveErseIPluqFVJF8TIlS%2BN3wjfOxw9gvLCkXtHAiEAy9Jhf08gziHdh2j7I5Z0iNPAJ3sqLyWHQRlI1Hr%2Fb7Aq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH8%2BuRlJn0JCwF4jaCrcA%2B4RcrYzyHB0HTV2NAoW3bnNV6YzNWNdxm1fP7mGI1zeiig8yT47vKGn3UzF8hObJ3vn9g0qOZVR2r2S%2FHEsxVqNAeVjqM46%2FLX2FMGE5FYxDchq%2Fsav%2Fb4V8YWv5Ajs2GDRObA%2FDlwPO1OIzB8qNmBXIrgEiPhPXwydS0rZuVULv9rbZOAdQC2DFQfjAJsVNwsnTltHyi9f4jnyP%2FuLiVinIom6JT0HqBjoIExVxw9qlohx%2FOZjxy7q33kHTqxnpdHSSSIIqxGuV1z7dCP9TiBNL9KE%2F1wmM%2BWl3PBqHhaJxJ4MFf1mYfLV%2Biittfqm%2FE80eG1miVHqeRgjkCM3lJYY4BGd0GYTmNOTQ1CtgxbTXdmF9u9blGl55XCsU1RM2mOlTCKQNa9RGEMH64n%2B9lxOb3eEbNeXjae3Er7Y9xeOZNvfOOPvWFFnQYWIzhbyWnvIMvtBfZXR1uT2K9aqsixhE8a40fYwinPsUppVryARpgR0Lc0Kadx77wUZcQl9JwJnweu7Y7Ce7wrF7jLKneUQhuWre76HLhjSkuiXzBi7NzR8O4lvqHyt92dCp%2Fc3UVEx0x81wft%2BMClE944NKYH%2FJTusTy21f%2B82rMGE%2B2Dxe2OHbd1CnGO%2BRVVwMJCn4b4GOqUBuaH1qJIcolO%2F2SQ2OzyUfsUVi7Su8tOqtOMf7ARyPW8jJXsrLvrvTDRJ%2Fp%2BiI%2BKR%2FAjI4iwTecpu5KDSIHijp8Cra6SACpsHOGDFmIyayFd5K2Ov2JfcUC%2Bozyn23Lsx%2BQwedI8OovF91ldzINA1NzPwIgKJscDhNWMz%2FOVvKjUCZu3KZLalZyK4hu7NEfjqiZlY6cUHbBzsCDmRP0OXZEdtVmlO&X-Amz-Signature=2ac571d8186641fb5fa36bfc29e7cc3425431676d597081f1e0fb8d6b6445fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7TKIHJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUOzx5tllXf2r7%2FGwAVDyV5201DyI64kOu6DTYAkrFsAiEA651OzOtiiol0jtIpVHBfLR5fvJgFBsTxuTLbdR%2B%2BGs0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLyyw3yK16WcsnXvmSrcA8APgUKh6xkZU%2FjN5wGkWbsjgcw4X%2BpLWCecf0IC%2Fe627TgY4uMH25Ov0n6XBn8ELd6MNyTKQcO31eD87WGDoDRCHO%2BVj%2FQDVQt%2FEwb9qUWv36L7AYV097LxA6p91XsoF5076N6wvbgHRJ2PXJU2TQ2SGicrdHf676XvLOCPpQ6LVW3F5GH06UVFAaBk0HtxJO23ARW9JwnF3mFPfXZjHV248Qphxt9NFJedoAPbhDfwYFUwjVOlr2w0XdMoVN8F3sYToYLbHsg8YT5Q6VIFn02wjySQGKG2Dds9BgJcUmDJ4zZDdvfMdjPADJeSPsd1afIUQ%2BFL8KG%2BV1l5aZiinWgtp7cMx7qoYyiXnWUjVRzwl9osRRvyLV0%2BOZ71v0Xu7%2BlQSsliKSpRAo%2B9vHF%2BFr2RY3BUQYYgoR%2BOFDV2Qanfllr1k%2Ba5eCiBUckKU8l1t4uOkNgEvn4838%2FeWxbka6jqIoDtAGnP8BUwtrKW7wERgGmEqIa87PvQR8t%2FW6GTJyIeo7V08hGPl8SyYXRtidHSQ9%2FHY2vFnoUDtigrTy5we%2BFA%2Bh5e7xFjB4CYThuguYQOBWjJGtNs%2BcVXRD9Jh2AKn%2BeP4bM%2FB4uBAERdH%2Fqyz%2FPgSb57LaiFyi13MJGn4b4GOqUBI%2FAM%2BvXdQY14k18rKwZqJbBfEhGpRRuHoGOpQYzaZZPyU3YwIY5LyLpVHNqtBZaVd3XOF1Wp%2FqYOFnorUCgb5NWouVJ%2FRR1iQFn46yW3D30%2FZgS8bvcYYk5JH7N8GXGLnxFizgYI5cYhO%2B8YtWs51JHrh2d%2FAJ6gk%2BixViUb3ENYz3s0WnF%2BMazqMWPJYKuWD1Xfk64gE%2FizgFHmGwevd5A3UJqO&X-Amz-Signature=ec227b6d5147c6175d2f462b7b824468662bbc9855f0788a76b4a30a32508534&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGMEIBF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN5wNzr7r1nsQjytzkUOOYNpSXfB7OqGGAsyj%2BYnu1rAIgN9qcsT1FdI1NCCI1f5NgOFuR6pZxT1Ae3nqFpWy1ZY0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDE%2B%2Bf2ZQDoyaHaX%2BLSrcA4ETa56Fjv46nlyU%2FYI4ndy%2BsPX48Hs5eCTuusV9YNLePKnFMWU%2Fx8VyegFx4LGKFERbOO0%2BMNJobJRKk4R%2BuiYl%2FTp%2FBtlJs%2BG7lvAm5sRpM5QzR%2BNxJKnBSmd%2FXaN%2FYucEaKddCGZPy%2Ber0E2oHkr3%2BWK0PcV7x%2F1ob8X69W68r6A%2BhV7mZPUZ9nbbVpWouW%2F3YD%2FLpAnYjswOQII%2FNlM9lmSu%2FoWAz2iIm8b1C2PrB7pXS9kkjnxi6fCFyp0jYhDAf6MCK4O%2BqnUHoDS5hbfCD%2B7Yb%2FGxuh4SOFzMQ28V1Hl7EIrKYc3SkmGuvlIhAI0i%2FtGQi1K8nsVO4ll011bUHLfXyBZj1auQcP9c3%2FHWUnEOnguo4WSzFT1%2BBDZ%2B%2FkxEkf%2B%2Fas9tYacsuaa9PCgqZisu2V%2FbmYW17kHlacDHQx%2BrXeRrg1X6%2F%2Fip%2BGA3m2wCcfvLK5GTOn077loh4hxRxOXt4GBYxUjYZaCxT2o7v6pmXKKbKE1TX7qVoeHmi8guUaxNha%2BFWt3R3F9dag65HafbYULWeljAgQDppS3domXl%2FFzkSCt9mG8gonrAghpDgDEC%2Brr11%2FS%2Bg3VIsCCdW2YLLyudH0Zre6DjnGnmSdWC37vGqooZrf%2FAMNSn4b4GOqUBvQ6h97%2F3e0bko%2BoIGLBXZn0HudD7uCoOhOclSAVWjHv9F46LovXbG8VRDJ807BWrpb4bxW%2FCj54L7Fad5sPqvGyFKUlLE6%2FL%2FUSWXB%2FdU6hChZGjRABpZdBndmT0agUhnLdQka6XrfESl7SDGUKIDxjnDjcZ2ui2PnYC7EOIbmjd%2BFPwtcVm6wn%2FQMBG3fmjWt2WQXU%2FG%2F9bfT%2B5o0DOq0P8Dsq5&X-Amz-Signature=95d09845f957837f7c1cd240c3a850bcca01302f4e4b6a72999ea93e35513651&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
