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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GH3ABM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJoPVXzlzJHjj%2BpIRyMGeO%2BVwE2K%2FxCM%2BG156B3YOL0wIhAKuO%2BSabd3dwutZO5bifaEua9XCJYU8i9knuago4wqtyKv8DCCUQABoMNjM3NDIzMTgzODA1Igy0KLPMA9RRv4cXwi8q3APEhW8lJD6IZdQfjUI71SOUDWGqVtm6F17PeQN3aJiXQk2NzX0Hsh73CASjtLwBW6xJf6OADD%2B4xF%2F6Ltznw8FM%2F%2BjjXCcgwf1DYaHf%2BO%2BmCZP%2F6cwDsQmg94iKDrCA23CnnsD3mzkNTPWj%2FOWzI6vehfjzeBeqVbx2TQhPfQEkaLw8H6hOHY97FmIVD6Z%2FRzLggRDhCMoaEgDSojtkU5SYfUA1Tj6Pu4d0Ph11tj28jS7YRDn414vzZKH5ioMpCSdkNZNj4L3PtychNP1OhAwCWTFLv0%2B3I1cdZr9L2tGWw0gTqmWIKj0vdiS5ibFRNtSHuXGdI6BfI%2F2fedIsKv%2BKNdfFqcK8fkbMHiE7DmlH0pM3i5kZlzZKTxdx%2F%2FG3TMfgGPL9H%2BurMDpoGHDuxzu0VI0gtvT7%2BT64JsOhXMibNZtZokyNFu%2BHYf3wN1ZA2oXcDYzq90Mu%2BiZPcugF4AtDS412SdsxIhxXtc0mnF9ayBxx8sDkHNSdzrsNivDJWo1imxQOjeF2p%2B2sVDRo3K8Xbyzigd5ufKxYE67tMDgHsMudLJ67usKfC5MDcf9MgsVMAVKaNAsbrFvmkPQoUr8aAeg%2FBnZHQQhcv0xg7dUne6%2BZKJCgMRnR6L%2FttTD1uaS%2BBjqkAWAesXUDLqXMfHvTfRG4KkPl1SMnjjgiPPBvy2gInZSQ2niEVBTdqWMOrlBhJGHA3mnOmEq%2FsSQEq97I8IG0BkJf5yAMmiWt%2F%2FtwLGY47Y%2BGFUgR8gxigcZTEzAlXoxGlv2GxXDIWLafggUKVF0CChCtIXDP6m2wsM9ln9%2FqouBUM4uu2VUwBo7%2FQiXp%2BhxZS0cnG4qf6RppEPMci0aLqAak5flX&X-Amz-Signature=765de1b51390845c5bfe92383c57f6e14aed279970997809984c39e7e26cec67&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GH3ABM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJoPVXzlzJHjj%2BpIRyMGeO%2BVwE2K%2FxCM%2BG156B3YOL0wIhAKuO%2BSabd3dwutZO5bifaEua9XCJYU8i9knuago4wqtyKv8DCCUQABoMNjM3NDIzMTgzODA1Igy0KLPMA9RRv4cXwi8q3APEhW8lJD6IZdQfjUI71SOUDWGqVtm6F17PeQN3aJiXQk2NzX0Hsh73CASjtLwBW6xJf6OADD%2B4xF%2F6Ltznw8FM%2F%2BjjXCcgwf1DYaHf%2BO%2BmCZP%2F6cwDsQmg94iKDrCA23CnnsD3mzkNTPWj%2FOWzI6vehfjzeBeqVbx2TQhPfQEkaLw8H6hOHY97FmIVD6Z%2FRzLggRDhCMoaEgDSojtkU5SYfUA1Tj6Pu4d0Ph11tj28jS7YRDn414vzZKH5ioMpCSdkNZNj4L3PtychNP1OhAwCWTFLv0%2B3I1cdZr9L2tGWw0gTqmWIKj0vdiS5ibFRNtSHuXGdI6BfI%2F2fedIsKv%2BKNdfFqcK8fkbMHiE7DmlH0pM3i5kZlzZKTxdx%2F%2FG3TMfgGPL9H%2BurMDpoGHDuxzu0VI0gtvT7%2BT64JsOhXMibNZtZokyNFu%2BHYf3wN1ZA2oXcDYzq90Mu%2BiZPcugF4AtDS412SdsxIhxXtc0mnF9ayBxx8sDkHNSdzrsNivDJWo1imxQOjeF2p%2B2sVDRo3K8Xbyzigd5ufKxYE67tMDgHsMudLJ67usKfC5MDcf9MgsVMAVKaNAsbrFvmkPQoUr8aAeg%2FBnZHQQhcv0xg7dUne6%2BZKJCgMRnR6L%2FttTD1uaS%2BBjqkAWAesXUDLqXMfHvTfRG4KkPl1SMnjjgiPPBvy2gInZSQ2niEVBTdqWMOrlBhJGHA3mnOmEq%2FsSQEq97I8IG0BkJf5yAMmiWt%2F%2FtwLGY47Y%2BGFUgR8gxigcZTEzAlXoxGlv2GxXDIWLafggUKVF0CChCtIXDP6m2wsM9ln9%2FqouBUM4uu2VUwBo7%2FQiXp%2BhxZS0cnG4qf6RppEPMci0aLqAak5flX&X-Amz-Signature=da3d43e780ac04e80860c94476aa9881a12a20abb5d848e651114dc8ebdfa570&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZ7H5TN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfk%2Fru44RQK%2BOsQ2HHmrDhYTnGGRfmvc4Of3N24KF14AiEAgn3NQLuXiWpD0RxUHLJYZLsBV4VtaqAyEp9nnwL9oO4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDATQnpOxGBUQiPYnsircA1eKdjqnvdMq1nzeSwaEOuwf5Qfjdyz%2BMu89XvCMVvANqvVxGKmHcHdGZIKyRnX1UbKsaHPkj9Mj98KQtsqO09NWtdeAMKBlTU8mPKYpam5ucIRR2vYf5WAZfLnTXZsYSAOclAJYAJh5RC5ezfZkTSao8oKI3MpXrMpAJ1KToEqvz5SfeqUWWO1urShL9DQ5V74M1nbOftZ2LcjgNrWLOUlv9IGPx0eviuhItQUPBXwsF0gRG55qrSoodJSSmferOlLBi6GQep41V0ogVxOi4zoYJl9NhbJBC4e2xMMr5DR4yXKQDvx2xA7q0ezrRF2BU6qQCc%2Fcxi3ZHrk7%2FJZ7d3wUSjdKxpMZbje0bZO3A2plEuMas55i8Hlvn%2Btsv7KT8v9qoMfxyIiT2eyqDCroAi2JS9HjasaraqaP8rnGD6GVyjudEzVm0%2FndGQ3tlUz6vPmaIp%2Bft%2BUlps5Tx%2FX2alJqdQn38g%2FfOFpGnRYSnEzxmGtjAlIOdqB68pO09Q0ZqehkKqhLvVGvr0aLKWScguf1%2F6QuRZvyBXEnPUQRLgogE0CybMw5PtNgc%2BMmINeLu3z9iXG2xO3IPYmPJmH1NkMST2Tz9jN6%2FGdBw9QeXdCcG06LcseAaqntKITfMLi5pL4GOqUBvXW8R7tN%2B4bZu37a3kZuKlwZDg%2FNbF%2BLMTb%2F8PAzI6yg6WOgPs9xGHyhWR2PFI3ZtFLbO%2Fep5BLoCmb0ntJMUkS3yzuMD5dXEGONbnsEFdESJmiJENNaVCLH2WiTCfRIn8R84TTEBTceJO3RfguNBoBntzEV0SOs3ieuWVdzcHS5PJmw09sRna3EXo8TFYn%2FjSuEVAKURa7EbKdWYofSNWssjiYC&X-Amz-Signature=20849b5da8d91b9f32857d86ebaa3729304acd97c0518096e31c2381261723c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBDEGU4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCufmaoTsAhLJh83%2FGoZ4N1BkhLqYh9vOlBEzY1z1jmbAIgL5XuHOlef3cgGj50kQ58fL8pQMrlJY%2BTlculBZa9%2Fvsq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDG8glUOLpl%2FvJ2lqsSrcA5Awy9SRm8glK2JhrcD73TqgdiH00I4D3oM5VUbyw%2FypwbvvelY8bB2ODt1CeVbxjpBXCt5iVfd9ZwKCbJhy91OQkR6Qime9clMdIY7QKCraC%2BFYOqmfQQJxgu7gk164SJjCZ%2FwKjS0Su5sayAv%2Fa9kgxxkXZpUuYo1UEFoevybLut1B%2FlUKs04yNvhkQnawDu7qlIAGrCwYw7h178GFbBWQaEI7UnYgLu620CXqMP%2FeOCN0Be5QRa2Xi%2B3Y6EOlhuFwn2T6t1hU4s16s7MeXXQ%2BPlH2oU0lg%2FtCeiyKWfG3udBnEpTgA%2BrG0O1sAu75VNMgmgh8KDSHo%2Be4wpREcxVER4B2DbCplC8%2BE907rGW3fOU9KOaf4o%2FQRGcVmRsimz%2FJB1Ymqybg0az7OcFnkhtqcq1kTNJFZprSk4x4P9VtdrFKCQMaeFYo%2FesA6F5lrtdmjX0BHeyK1HCzKseZJ1fZUZzakC%2F6XBcoKy%2BnSjg282J6Otnnrk%2BgM9kJqZuN3ZLPZhp4pXQJgMa7HZEHJIZ4sIkELFGPKBcBH7uiOTdNhpsKXQo5%2BgogDaZH11zirRA3lS4C7xbXGcIZuQtPLhmEEf22J2jT%2FnI5porGDH6MDotLpXYCnyn4gYrdMJ26pL4GOqUBZTamDd%2B%2FpTVCPYR3vF%2B9DL5jBEaGo1pwTng095u%2BaqOc6e1%2FZjwUzReiJqBojEAUTwxlwVQcLY1cCL0SkAFduqblia7OnHOvhSOHOfQOqRBuvNHKyZxDNuudLW6JYzIhp%2B%2F6yc4lfXcZRn2EyNmUqQUYanh6pBJrghwY5Ic1pxdWfJyn7rwCyADIhUWHcSJ2O5shauhJ3Qr6wtxR8IpbJVS5Tvuv&X-Amz-Signature=52b8f1cf716bd1951fa665dc27ebd4dbde7e5876c583b38c523e714a2eb4c46b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GH3ABM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJoPVXzlzJHjj%2BpIRyMGeO%2BVwE2K%2FxCM%2BG156B3YOL0wIhAKuO%2BSabd3dwutZO5bifaEua9XCJYU8i9knuago4wqtyKv8DCCUQABoMNjM3NDIzMTgzODA1Igy0KLPMA9RRv4cXwi8q3APEhW8lJD6IZdQfjUI71SOUDWGqVtm6F17PeQN3aJiXQk2NzX0Hsh73CASjtLwBW6xJf6OADD%2B4xF%2F6Ltznw8FM%2F%2BjjXCcgwf1DYaHf%2BO%2BmCZP%2F6cwDsQmg94iKDrCA23CnnsD3mzkNTPWj%2FOWzI6vehfjzeBeqVbx2TQhPfQEkaLw8H6hOHY97FmIVD6Z%2FRzLggRDhCMoaEgDSojtkU5SYfUA1Tj6Pu4d0Ph11tj28jS7YRDn414vzZKH5ioMpCSdkNZNj4L3PtychNP1OhAwCWTFLv0%2B3I1cdZr9L2tGWw0gTqmWIKj0vdiS5ibFRNtSHuXGdI6BfI%2F2fedIsKv%2BKNdfFqcK8fkbMHiE7DmlH0pM3i5kZlzZKTxdx%2F%2FG3TMfgGPL9H%2BurMDpoGHDuxzu0VI0gtvT7%2BT64JsOhXMibNZtZokyNFu%2BHYf3wN1ZA2oXcDYzq90Mu%2BiZPcugF4AtDS412SdsxIhxXtc0mnF9ayBxx8sDkHNSdzrsNivDJWo1imxQOjeF2p%2B2sVDRo3K8Xbyzigd5ufKxYE67tMDgHsMudLJ67usKfC5MDcf9MgsVMAVKaNAsbrFvmkPQoUr8aAeg%2FBnZHQQhcv0xg7dUne6%2BZKJCgMRnR6L%2FttTD1uaS%2BBjqkAWAesXUDLqXMfHvTfRG4KkPl1SMnjjgiPPBvy2gInZSQ2niEVBTdqWMOrlBhJGHA3mnOmEq%2FsSQEq97I8IG0BkJf5yAMmiWt%2F%2FtwLGY47Y%2BGFUgR8gxigcZTEzAlXoxGlv2GxXDIWLafggUKVF0CChCtIXDP6m2wsM9ln9%2FqouBUM4uu2VUwBo7%2FQiXp%2BhxZS0cnG4qf6RppEPMci0aLqAak5flX&X-Amz-Signature=3a8cf00138104ea8c62221a769dce8b5a36444d16e07ea483cb3b4312823cf2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
