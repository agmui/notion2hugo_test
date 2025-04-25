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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXCHCCL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4dPlvi6ISZ1wb3XpajIZ%2Fx1PGbBQMmkAZLcq4sGuyTAiAEuCI%2FlIIOOMfiSfTyV3JfVnZPLWwaVqFeYH%2Fdk8DljCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMHuScLzM1OkeNCFj1KtwDP4Zo65GXAB3ZA%2FnKcgPbLklNZrKFVRddMyIOgeTgrcJzx7C85%2BBiHHm%2FdG%2BoVjt%2B%2BgrUojkMdEF3v%2BDuHMXMM99Q8Pa3HLm6lBr2QeCMKhcB6fhezKYpm93S5cqSXUXsFdt1uMyl7ywpas11qk0zkteYZi5gZzomAjrLusil91frThZng0U0ck8Ow2NmFaQTS2A3WGxsusHw9MGlf2mO%2Bt8fpK1PIOgNNK%2BeWgNuH8vKqT1qRsTmXU76rHRpq7Cb0WZdsqHjNN9oNlGO29CyJG5cJ3qtr%2BHSDLABZcif9nq0yRT4ot2%2FRcEbG%2BefAzwn41NwgnGd3%2BZLaXOUd2dOsNcH994IZFGqVObxeaPjW%2FAzTAK0pCHQd1X2I6n06CGb4NhZ1DudCWzu%2BjGDp4%2BzgbMTYTgzBJ198imsgmI8KLpCRgl%2F5C%2BlLzs9LX%2FbVUXbyf0y1lF268u6iOSg7QUZDl57YNWfZ0s85d%2B%2FWnNm16GhHQOb3FsFr%2FNjAYyDDN2Rpn%2BcoVqbKgD2HhWD1kN9P5csxku4Z2bsiRIbLJRrDhLBSq9B4BEneV0AA71ViB4CE47dkTFAeuvVs9b7p9fqPP4rkgnR3hBk9D%2B3JJ77XLMelbT3mgadPivLhd4wieStwAY6pgHxs769rT5JlaiFkY81%2BTeAebPGrw87iL%2BGIBPVubrXG1j8vP%2B3eCeprVC3WoTupcJg3dvfqa398ZK8JHUOijX8eSspvrDJMfVIGA%2B71RcSlGzPBeIz006BXmy5NGIw4CQSdiDa5EiTQ1FY%2BDNl8WOjLBefkMEaFiLE9A2WJAT2m2vw5S2aPlzH%2FVrCsaR%2FNCt%2BD07U47J1TCS%2B52rjQ%2FrrekhyOLOx&X-Amz-Signature=e646e97807b8ca4ca39a2eab6b5947bf534950bc9eed40102c8ddf4e6f54aeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXCHCCL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4dPlvi6ISZ1wb3XpajIZ%2Fx1PGbBQMmkAZLcq4sGuyTAiAEuCI%2FlIIOOMfiSfTyV3JfVnZPLWwaVqFeYH%2Fdk8DljCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMHuScLzM1OkeNCFj1KtwDP4Zo65GXAB3ZA%2FnKcgPbLklNZrKFVRddMyIOgeTgrcJzx7C85%2BBiHHm%2FdG%2BoVjt%2B%2BgrUojkMdEF3v%2BDuHMXMM99Q8Pa3HLm6lBr2QeCMKhcB6fhezKYpm93S5cqSXUXsFdt1uMyl7ywpas11qk0zkteYZi5gZzomAjrLusil91frThZng0U0ck8Ow2NmFaQTS2A3WGxsusHw9MGlf2mO%2Bt8fpK1PIOgNNK%2BeWgNuH8vKqT1qRsTmXU76rHRpq7Cb0WZdsqHjNN9oNlGO29CyJG5cJ3qtr%2BHSDLABZcif9nq0yRT4ot2%2FRcEbG%2BefAzwn41NwgnGd3%2BZLaXOUd2dOsNcH994IZFGqVObxeaPjW%2FAzTAK0pCHQd1X2I6n06CGb4NhZ1DudCWzu%2BjGDp4%2BzgbMTYTgzBJ198imsgmI8KLpCRgl%2F5C%2BlLzs9LX%2FbVUXbyf0y1lF268u6iOSg7QUZDl57YNWfZ0s85d%2B%2FWnNm16GhHQOb3FsFr%2FNjAYyDDN2Rpn%2BcoVqbKgD2HhWD1kN9P5csxku4Z2bsiRIbLJRrDhLBSq9B4BEneV0AA71ViB4CE47dkTFAeuvVs9b7p9fqPP4rkgnR3hBk9D%2B3JJ77XLMelbT3mgadPivLhd4wieStwAY6pgHxs769rT5JlaiFkY81%2BTeAebPGrw87iL%2BGIBPVubrXG1j8vP%2B3eCeprVC3WoTupcJg3dvfqa398ZK8JHUOijX8eSspvrDJMfVIGA%2B71RcSlGzPBeIz006BXmy5NGIw4CQSdiDa5EiTQ1FY%2BDNl8WOjLBefkMEaFiLE9A2WJAT2m2vw5S2aPlzH%2FVrCsaR%2FNCt%2BD07U47J1TCS%2B52rjQ%2FrrekhyOLOx&X-Amz-Signature=7926dab5927194046c8c2ed83c9684631a7733f3a7e87890ef14f9e39abd0f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2RU2XH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FpSBbDls1IswVXuzFBcQgtf05HmEauzj5M0S1KMm3HwIgX1nNrV1%2F8tey4HJQ51pzTDaC5x0yq%2FsiwhbA5wCiZGwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLd%2FUnatwfVBVgKenircA7RK1osU6GsBkxWWJs17dgV3l2Eg6jABbJ%2FEBiFfyy4LdKQ%2BDcoUG7IyqELqS%2BwujkeSrQiliXicWuwscqy8P%2BuGA3sWGzBScS24Hlt4%2FybKH%2B0MwaZBAs2DrgVTsFT3744xtsi0e25VViTN%2FrAQDLFTqop8IuiRvlWoR%2BXLp7bFLQa0%2B2ECzqOFXKDfonscAhmwNmf6bASkKFHYpdYWl0SzmdGUTsgj5gara3yjVaulLcRqP8yR1L13xwFRP0%2B9GAQofgnvSv7azm4bzwvIDsKCWaI9eZq%2F1L%2BHev2DguKuAR%2FHYr9njGdV5q379yvQk5lSWvTjPGKHyJYFZDO8UT3iHRxlPSPpRXdhfxnGwMk%2FFR2qQ5%2B%2BrsfJl6paBjrGUQVY7MGo6u8p57zyS6iTfRIZmady4CkugBabepxIwmyGYwX1Z470aar1l0CXIJdYl8XOVDhliHZWtuIelVsOKt0zw5rfPMRpZZ1nnxHHMNO%2B%2BOUGhuDp1ENB3NUth537htP9PFxb7FujSW0gTzIhp1Wf10FwmDMD8obqYDqMvRQMU9FH2hTCOyq6fBTh7RpwL%2BFduAja%2FH%2B%2Bjm4e9kaop%2BCMuxksmE3ztOtp4d4kiJmuBXnWg%2FsHIRizHfObMMjjrcAGOqUBFxoWMiiiycJIuQlEghTAcL8V%2BnFWcGARTLgMQy3oW9r%2FbR7wb3entPP7cEQgk6c5M5U3oI2oMoaxkLQooG2mlFxf2ce2JMqBQaZHOLPFY9gXC%2BmjrrUw%2Fzq%2FvGUKzxUp1Yom6%2FbM8e6QrERBNb0vF3p6%2BMbRKTkduvrKlm2JSv7MkC8sV9ZxLIYLgk7dlsuUmk1YckqaDV55axF9SAmKzEXhmkn9&X-Amz-Signature=039c46f81daff7c827ddec4a01f15c9bea07f14af07a5628522b2730c17c6dab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALMIAMI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa6M8N7DhUdZ3FLYUYag8MBJsootZ24yeuB7sBIdIG1QIhAOVWE%2B5bsxIIvtjASv4NAMWRY4GO9PMIg%2BrltUSbtJfWKv8DCC0QABoMNjM3NDIzMTgzODA1Igz%2FErqalqyVefY2QXMq3AOJNaFIhNgC38r142t4Mtoa8ZjXpFsxsohBqASfJyxJx%2FlU4eLd7W%2B9hwdkWJFx%2BSun27HlgwIwuV31SzPv0jO4WdWdq%2FPhLC4drVnV43Wzu4yQKUQmzwvdpA3Gg1LF4UwfUDxbAGVSTWetNYTARvkeaod23v1oADBxThMJXjtb1TWi7W%2BdceVOLjjgTNe7QG%2B1OXexWGfC%2BJsTmX0sngu74ZAWU4EikfnLejqf%2BG%2Bpfssy6ztZQBcIjzGSn9Y4LCJy0jT31%2F1GpdhCD07Hb18guIszD04yvGFqCVkUT5XZuK50%2FcLLQrlQoxGnv2Y6ptTzhmXFOx8uuR61SKdvpYEbMwJoOTlfnujfDYwD6X%2FFACUvAzIj4tRBi1kopZ0CyM6b7JiuL%2FtKmXkjlV35Nbl4uaGM%2FAGH2LVkLVe5oU3qmgv5wGjfhJUUiK2808xhcQUYU6IzY4yCnQblTH6z5sBZUi7v1EDdvTC2e5wijmYjygPPmyL7b3PoIQUwvyLNsPVBJS7U4iRtYA%2FhZ%2B5ttOT4GIgcDXcr81R%2FoMibH9o%2B%2BcKsSRDtpPes%2FSASNCDcgj9yw78v53cgixNHPxGX5OS8mVvLvTSbBWamdLKiA0TO8PcSRYkHVkUA8aNOSDDI463ABjqkAUX%2BuvHQ2CP8PXvkqc57S15lX382j6KHBO9MzeadVFrDskaRHpeRj3FXYW7Ln9%2FjWWZ6oJvegbFZ0gNSHLBYkECUW9Rej648PjYRAmPIeMBjHC9lQh2Wpel7ttPcwcw5m0XLQK1EFizp9urFyELiYCUtD9qphlyzumRd932ZEc%2Ff30ypg4EjIXK4Qup3NLyxaVfqMY38jaD0Y6wxhQBOdNF9f1ng&X-Amz-Signature=187ed3ac9a3822ff5a83f4cc51c1a8a55c84cf88cc1bdd28b1217f2f5fb2070f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXCHCCL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4dPlvi6ISZ1wb3XpajIZ%2Fx1PGbBQMmkAZLcq4sGuyTAiAEuCI%2FlIIOOMfiSfTyV3JfVnZPLWwaVqFeYH%2Fdk8DljCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMHuScLzM1OkeNCFj1KtwDP4Zo65GXAB3ZA%2FnKcgPbLklNZrKFVRddMyIOgeTgrcJzx7C85%2BBiHHm%2FdG%2BoVjt%2B%2BgrUojkMdEF3v%2BDuHMXMM99Q8Pa3HLm6lBr2QeCMKhcB6fhezKYpm93S5cqSXUXsFdt1uMyl7ywpas11qk0zkteYZi5gZzomAjrLusil91frThZng0U0ck8Ow2NmFaQTS2A3WGxsusHw9MGlf2mO%2Bt8fpK1PIOgNNK%2BeWgNuH8vKqT1qRsTmXU76rHRpq7Cb0WZdsqHjNN9oNlGO29CyJG5cJ3qtr%2BHSDLABZcif9nq0yRT4ot2%2FRcEbG%2BefAzwn41NwgnGd3%2BZLaXOUd2dOsNcH994IZFGqVObxeaPjW%2FAzTAK0pCHQd1X2I6n06CGb4NhZ1DudCWzu%2BjGDp4%2BzgbMTYTgzBJ198imsgmI8KLpCRgl%2F5C%2BlLzs9LX%2FbVUXbyf0y1lF268u6iOSg7QUZDl57YNWfZ0s85d%2B%2FWnNm16GhHQOb3FsFr%2FNjAYyDDN2Rpn%2BcoVqbKgD2HhWD1kN9P5csxku4Z2bsiRIbLJRrDhLBSq9B4BEneV0AA71ViB4CE47dkTFAeuvVs9b7p9fqPP4rkgnR3hBk9D%2B3JJ77XLMelbT3mgadPivLhd4wieStwAY6pgHxs769rT5JlaiFkY81%2BTeAebPGrw87iL%2BGIBPVubrXG1j8vP%2B3eCeprVC3WoTupcJg3dvfqa398ZK8JHUOijX8eSspvrDJMfVIGA%2B71RcSlGzPBeIz006BXmy5NGIw4CQSdiDa5EiTQ1FY%2BDNl8WOjLBefkMEaFiLE9A2WJAT2m2vw5S2aPlzH%2FVrCsaR%2FNCt%2BD07U47J1TCS%2B52rjQ%2FrrekhyOLOx&X-Amz-Signature=318c172e260cdb4fe2988b493ed4c288008ced0352ca7acb91e4b652f9cdb660&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
