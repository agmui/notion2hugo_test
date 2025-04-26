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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYN26HRA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUa9nFP8QaABV9GmlKCMn%2FoqdN4T503VmV0juxRidzDAiAlXFjPzrB%2B1ZCoajbnvV%2BseGzl9pVo2f2IUrH6v9Rpnir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtFY2V%2FDkx5U7n4S0KtwDtbi2BsXR5nWp0NMy8pdLlbzG2NvJ23YaQwCKtrbwMZpstWsYFrYEaaAWEwG%2FKJiQJtpJZGlj%2B5uDZ5%2F1S1VFR1kKB0NZSftyFf9mUM69U87i8CQJONEHnR780smXuF%2FFOSZPfPl9tzsfVlTQIHWpIB57O1uCDor03PjDWOL4YXgllQosrGfpPVSaO%2FvO1hYg4kfuVUyw5oUvqVk5CYJLQKFPGw51hG8P0GZKKiz1nB1P6JXBgbc18LMkGnydDEq5CJUe4Hjm4WrxAfTpvvrsDRSNdMkExeQirm8fu4vIzxuJ%2FicNAf9iMpS5lk81rRL2S0MqXkfXUTeTLuebQZXZmKNInRv8kNUDcbCSHZdsCaqC1aUMAyl6vPX5rD5reHIqsbsPqZObHkAxA%2FMmb86gCXlKOAX1ImcIENyJFHdcEZ3C7YdO6dD%2FipLpSwhPSDz4q31wInhhMQRpXIkEa3pBEwI0tXgjHfJfUY9kb839AGN7qVwQlS2Tc8FDZPQ%2FfcSdmSy5T4V4PhzJn5Ud3K23SoEW7ludCAfwwfOrmx6DblhFUZk3Mdl8JR2j3sIjuzZ4wrhU2pFlHPISkL%2FngYX4boxWpACC8Lieoci1MyTNOclyyu3VRtHBDBkJXnMwtYSywAY6pgHrF5DIlFxIJ9N2LH96EABuR88cnfyxQE1kCtLRn9HQPNxuCQ7ld7ygfbGCaNPLhN19d7R9Notl5jhUSFRaJPmd7sZY%2FiKayKQHmnmGm%2BxAOTL9Mj%2BimF7wSQFRhQ%2BpdOBl%2BL1nydfQXLh1lSiO4QoL9qlwrCRIShVkpsvBgaf11gDu1tVGcXAn3649ViN6PDc5t0%2FH6abVvgtFe%2BxVOOPaFlfiGRR%2B&X-Amz-Signature=7ecd2f3d419474a9248ebb9d8a189c14366ea4cabd6e87e6451b34d1e474c807&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYN26HRA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUa9nFP8QaABV9GmlKCMn%2FoqdN4T503VmV0juxRidzDAiAlXFjPzrB%2B1ZCoajbnvV%2BseGzl9pVo2f2IUrH6v9Rpnir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtFY2V%2FDkx5U7n4S0KtwDtbi2BsXR5nWp0NMy8pdLlbzG2NvJ23YaQwCKtrbwMZpstWsYFrYEaaAWEwG%2FKJiQJtpJZGlj%2B5uDZ5%2F1S1VFR1kKB0NZSftyFf9mUM69U87i8CQJONEHnR780smXuF%2FFOSZPfPl9tzsfVlTQIHWpIB57O1uCDor03PjDWOL4YXgllQosrGfpPVSaO%2FvO1hYg4kfuVUyw5oUvqVk5CYJLQKFPGw51hG8P0GZKKiz1nB1P6JXBgbc18LMkGnydDEq5CJUe4Hjm4WrxAfTpvvrsDRSNdMkExeQirm8fu4vIzxuJ%2FicNAf9iMpS5lk81rRL2S0MqXkfXUTeTLuebQZXZmKNInRv8kNUDcbCSHZdsCaqC1aUMAyl6vPX5rD5reHIqsbsPqZObHkAxA%2FMmb86gCXlKOAX1ImcIENyJFHdcEZ3C7YdO6dD%2FipLpSwhPSDz4q31wInhhMQRpXIkEa3pBEwI0tXgjHfJfUY9kb839AGN7qVwQlS2Tc8FDZPQ%2FfcSdmSy5T4V4PhzJn5Ud3K23SoEW7ludCAfwwfOrmx6DblhFUZk3Mdl8JR2j3sIjuzZ4wrhU2pFlHPISkL%2FngYX4boxWpACC8Lieoci1MyTNOclyyu3VRtHBDBkJXnMwtYSywAY6pgHrF5DIlFxIJ9N2LH96EABuR88cnfyxQE1kCtLRn9HQPNxuCQ7ld7ygfbGCaNPLhN19d7R9Notl5jhUSFRaJPmd7sZY%2FiKayKQHmnmGm%2BxAOTL9Mj%2BimF7wSQFRhQ%2BpdOBl%2BL1nydfQXLh1lSiO4QoL9qlwrCRIShVkpsvBgaf11gDu1tVGcXAn3649ViN6PDc5t0%2FH6abVvgtFe%2BxVOOPaFlfiGRR%2B&X-Amz-Signature=5540ef32404c5e26becb04c901877b027078d21be0393154d573b657938c0daf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3SGPIM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3FaD2SnL%2FhkdGpv2E2xU%2BxhrGS%2BfglX1lzf3crY4FjQIhANt3IgR0JFronLs2n5DMjSSeaAKETaY0kX37XpWGtdoIKv8DCEAQABoMNjM3NDIzMTgzODA1Igz6L5JexCSagOpEgVEq3AOhBI05bbhtoRyZ4jRaAvc%2F4ZU4TM8GO78ED645cquT%2FJqjzFbxI%2FcDCHRvbj7NT2wSqb%2BdVuUQS67pskxjBlY0%2F9b5VvXGPUd3ezUBqfBLrT3PI%2BOaUWcsPXUxtNSPGtiaP8A65GTgYmT8YX%2Bd0byPsWOyvCLjwr5kjOicIHq23SRFclIa9RHZWieJiju5g1gsg7KrYVG1CVTchC3yZ0M57ViGOAqQPF8CRT7K7rfWQPQeuqOwDUjJpyS%2FLjAppp4x%2BWjeicvhqcBv2jCqBEQkQ1uT%2BngFWYlQ6kfqrWsVEmQZRaF229iFcTCFItkQvp%2BQut%2Fr9TDyQW6Tay3gpGPaTrtdHJgXaQvtGHDt39CBdsgwjL1z2qS2zYO%2FhRWmkiTacO6VpUX3NHHb0BUai3lXOS8SbIZLGW1ZCDklmSPRHckV6EQhD0kMFnrPzBsh9QDBA0KIKmvUPp9LoXG82B3moppBn5aqmtocGP4eLt2bAJhoIGQ8Uzrum0IKG%2FXQyN%2BI%2FqNKIf2w%2Fn8xgWixYhYBiOG1CIyBWtzd2Ktc4FAPMyoR3VHgT3NCuAq31FUM8AEJ9qtFd0d%2FaoDQBaGM%2Bl2DVa9%2Fy7iV7shM18jcI9ZWKrBVkPDWWJCJ9J8TIzCchLLABjqkAdh%2BX122zt9PFF4RQEUrSF%2FDh%2Bb%2FDyy4JL3h9JZRZB%2Fb%2BboLgmukEUyU3zBpje%2BXF1qjc0RvZIH2VmJ0yzWoMhJ9LwC4DRrWb%2BIIlN8sRiPF2vEfy2Sq2Da7mPdbP0IeeyWRxsX%2BJRg0eONOLgW7cq6q3PndS2WOVkdftF2I%2BCB%2Bniz6ClyIi0NnyD7XYrGlglsSrkhlOqtsE2zwokrrHOzZXR1k&X-Amz-Signature=77fca08ef865dc586a07464a2b746f266baf3f5e308986ecb54819584f835794&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM55CMCM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJiPpD6zxAm4Bv2StvLcy6EeaxIuaOUnzwKjJeuzRW7AiBaRC%2BGLGvJAEVET%2BY9pvwf%2BELqSRM12ZtUW1AFwiMZmCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM1uR7ERUdl6MExJFPKtwD%2B4tDx8EGalsjLory6SYVhNV82DRtlI0IFohIUFwe%2BUIAkw6o%2B%2BRX%2FJ2tnnDIIYS2Jq1uYunPa8poEdq1e8Rz0Qd0gO%2FEDNY3CSyvmxBXOAl6cSqIHRqh%2Fwt8iMel1FcIhROU4fd05PX8oZqQhQ%2B504Jb%2BhyjkAWzPSbIH0X70vG6ldNjMD6tn73DicE9yqtpacK9Sb4X8Wb7rTob7RWdXiI2I%2BPOnrIJVVCvj3ug2nz9%2BIxy3JzB884NMdXowQSUAQNFGg7lzDXcs%2F2xywYtY%2BJ%2FlFch0ZHZqAXGcQ4jtGbu7ks%2FPPQiI3vWo3QDAc6Kfgn6NHYliuqQMfY5nHB5iuxIVM1374t2ijMUv%2BK9fkBz%2FnzewZ827CCHYUeoYxdORXJb8Jg%2Br1uKInZTAEUGpDMRszxHb%2BQ94nXAjyM10R0Umg2Cm1Jo7CKVt8%2BbP8rOdQyLZiK4SiT6HVckI%2FlPPHJg7AudVEg%2FNvHd7o9mWQ9iC4ml78sOiXmyPe%2BtvNr4mbX%2FdXFruwuOQXAGPBqLzdBh5H45WucObjuvNjfGw3A%2FHK0HQQS58fZ1lbwndnCv7%2FXWvmLfzG03llxl5nTAKObCtbxKwD2Ia8JNdp8qaJ5hb6RUenlVwdNtpjswxYSywAY6pgHO1IIS9S7%2BLK9GCOSarIGF4DkSVXOOqglooyOYij9Ft%2BX9oPrk3s5jrsObpYYyET%2FItWJ%2BHGpuEdNzZRNCCVs4cQQmTet73taMSG7SHlyXtMgFhAs5TzJptpBLwVDoDth5Zvy2I0m3IeWHV%2FXTmaOMuMdzPJCVDdmRMV5frk%2Fu58fYYxuDQStqExkP5BeEyNBdq4KhamlP12FxDK0Jza%2FQRJLA1tSy&X-Amz-Signature=ab21e494a6705a1988591b52fff531f525bb7707da252333972d8022e48ea772&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYN26HRA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUa9nFP8QaABV9GmlKCMn%2FoqdN4T503VmV0juxRidzDAiAlXFjPzrB%2B1ZCoajbnvV%2BseGzl9pVo2f2IUrH6v9Rpnir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMtFY2V%2FDkx5U7n4S0KtwDtbi2BsXR5nWp0NMy8pdLlbzG2NvJ23YaQwCKtrbwMZpstWsYFrYEaaAWEwG%2FKJiQJtpJZGlj%2B5uDZ5%2F1S1VFR1kKB0NZSftyFf9mUM69U87i8CQJONEHnR780smXuF%2FFOSZPfPl9tzsfVlTQIHWpIB57O1uCDor03PjDWOL4YXgllQosrGfpPVSaO%2FvO1hYg4kfuVUyw5oUvqVk5CYJLQKFPGw51hG8P0GZKKiz1nB1P6JXBgbc18LMkGnydDEq5CJUe4Hjm4WrxAfTpvvrsDRSNdMkExeQirm8fu4vIzxuJ%2FicNAf9iMpS5lk81rRL2S0MqXkfXUTeTLuebQZXZmKNInRv8kNUDcbCSHZdsCaqC1aUMAyl6vPX5rD5reHIqsbsPqZObHkAxA%2FMmb86gCXlKOAX1ImcIENyJFHdcEZ3C7YdO6dD%2FipLpSwhPSDz4q31wInhhMQRpXIkEa3pBEwI0tXgjHfJfUY9kb839AGN7qVwQlS2Tc8FDZPQ%2FfcSdmSy5T4V4PhzJn5Ud3K23SoEW7ludCAfwwfOrmx6DblhFUZk3Mdl8JR2j3sIjuzZ4wrhU2pFlHPISkL%2FngYX4boxWpACC8Lieoci1MyTNOclyyu3VRtHBDBkJXnMwtYSywAY6pgHrF5DIlFxIJ9N2LH96EABuR88cnfyxQE1kCtLRn9HQPNxuCQ7ld7ygfbGCaNPLhN19d7R9Notl5jhUSFRaJPmd7sZY%2FiKayKQHmnmGm%2BxAOTL9Mj%2BimF7wSQFRhQ%2BpdOBl%2BL1nydfQXLh1lSiO4QoL9qlwrCRIShVkpsvBgaf11gDu1tVGcXAn3649ViN6PDc5t0%2FH6abVvgtFe%2BxVOOPaFlfiGRR%2B&X-Amz-Signature=73964b2791b5f911cafa614b47f69b857cb5a17b6031a78ca091ec4ec4e998ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
