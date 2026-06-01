---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BCNUSW%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHkA5QiMtkdk7ermtsOiAgiQS2sR3JtMHA3BWQ7%2FLOOOAiEA1wb8IsUUbBgufAZRGnB11YUsat3Z7Bn09Ihhx5K6mr8q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDImKvoxI47dGAyUW4SrcA%2BxbKvWtItiV8Xg2TscF2Z9aRNMGySHVY5EznfsdxOwOrKiwsRqvAnMVkvFgQsmc2si3mGaSrsyBJhUlszamYplivIV3E4UFSPIbwdf8s0bt%2FMOtpSt54Vgzh%2FK7R6kVPX8rZiwEh8e8DWjUrIMyb959kblCJZFqpmUj6uLRIIOvF6u5DINiArUkYsNIx9JK56WQA9cRFE%2BLNkarJR40h1VfSPGhF71j4%2Bu9%2FipbLCCObe4RkRyiIszqIzG%2FBYdQC2lv8ywq77SED0AVMOEUe%2F6D9u9FGKGvd1Jt89zhHDqrSn0RPw1TQ4rnLy9oPXm4Cs6PrkSujJo3tosExw2j7goKsH6EKca6DLDRzmBKK45gJOqo1C8B8Th4OzE15cSybCtl2jqbGSyHJJPiRqHf%2BznGI57Xf5YjHW%2FoJ9Ex2obFWd4Il1CjCe2fuyISbk5PKBP8tBylkobe6CC6YQP5kz%2BBZeAcAhp4GDQUB0waAhUwAWi610EgpuNeY0UlxCol2yNDmEdTQMOZf8hUkAhHVFeyztqUUgvvbVHZ0rOmxtMwqLiXpk5tkZnrpqBPXILOY3U8qYw9jDAyiJSFDmchoQK7JeMTtbr8pojkKdB6C50D6LXfSHkCMEdYvDErMOuk89AGOqUBK66tjvUEPjQtWYJdXGLTSuagEa4bw6v0Y1%2Bcn9vUQF%2Fe8tLTQMaPiUQ9J9oLFkMENk3i2Jq4m8SMSUBunU4MkJUWhsUoKPoEiusdGlpoMIbKZYWOuHxpCA4Cfy7hgC257rNvL2V7TwMZpVtFoumAMspwZSSAaIiHf%2Fyb3y6wcSKlkNYRkS6vjxAiLsbk31CjZ7YS5Ho7i8W8vnxkPCG9MJ5FBa%2FK&X-Amz-Signature=3ce867b9d79633b2f3c28c121bbf318ead665e9f413a8ed3df9af40d806bf688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BCNUSW%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHkA5QiMtkdk7ermtsOiAgiQS2sR3JtMHA3BWQ7%2FLOOOAiEA1wb8IsUUbBgufAZRGnB11YUsat3Z7Bn09Ihhx5K6mr8q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDImKvoxI47dGAyUW4SrcA%2BxbKvWtItiV8Xg2TscF2Z9aRNMGySHVY5EznfsdxOwOrKiwsRqvAnMVkvFgQsmc2si3mGaSrsyBJhUlszamYplivIV3E4UFSPIbwdf8s0bt%2FMOtpSt54Vgzh%2FK7R6kVPX8rZiwEh8e8DWjUrIMyb959kblCJZFqpmUj6uLRIIOvF6u5DINiArUkYsNIx9JK56WQA9cRFE%2BLNkarJR40h1VfSPGhF71j4%2Bu9%2FipbLCCObe4RkRyiIszqIzG%2FBYdQC2lv8ywq77SED0AVMOEUe%2F6D9u9FGKGvd1Jt89zhHDqrSn0RPw1TQ4rnLy9oPXm4Cs6PrkSujJo3tosExw2j7goKsH6EKca6DLDRzmBKK45gJOqo1C8B8Th4OzE15cSybCtl2jqbGSyHJJPiRqHf%2BznGI57Xf5YjHW%2FoJ9Ex2obFWd4Il1CjCe2fuyISbk5PKBP8tBylkobe6CC6YQP5kz%2BBZeAcAhp4GDQUB0waAhUwAWi610EgpuNeY0UlxCol2yNDmEdTQMOZf8hUkAhHVFeyztqUUgvvbVHZ0rOmxtMwqLiXpk5tkZnrpqBPXILOY3U8qYw9jDAyiJSFDmchoQK7JeMTtbr8pojkKdB6C50D6LXfSHkCMEdYvDErMOuk89AGOqUBK66tjvUEPjQtWYJdXGLTSuagEa4bw6v0Y1%2Bcn9vUQF%2Fe8tLTQMaPiUQ9J9oLFkMENk3i2Jq4m8SMSUBunU4MkJUWhsUoKPoEiusdGlpoMIbKZYWOuHxpCA4Cfy7hgC257rNvL2V7TwMZpVtFoumAMspwZSSAaIiHf%2Fyb3y6wcSKlkNYRkS6vjxAiLsbk31CjZ7YS5Ho7i8W8vnxkPCG9MJ5FBa%2FK&X-Amz-Signature=932067d93b1f13ea4e0496eac2cd16c9d31062a732a8207c5a16315c6a53c3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BCNUSW%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHkA5QiMtkdk7ermtsOiAgiQS2sR3JtMHA3BWQ7%2FLOOOAiEA1wb8IsUUbBgufAZRGnB11YUsat3Z7Bn09Ihhx5K6mr8q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDImKvoxI47dGAyUW4SrcA%2BxbKvWtItiV8Xg2TscF2Z9aRNMGySHVY5EznfsdxOwOrKiwsRqvAnMVkvFgQsmc2si3mGaSrsyBJhUlszamYplivIV3E4UFSPIbwdf8s0bt%2FMOtpSt54Vgzh%2FK7R6kVPX8rZiwEh8e8DWjUrIMyb959kblCJZFqpmUj6uLRIIOvF6u5DINiArUkYsNIx9JK56WQA9cRFE%2BLNkarJR40h1VfSPGhF71j4%2Bu9%2FipbLCCObe4RkRyiIszqIzG%2FBYdQC2lv8ywq77SED0AVMOEUe%2F6D9u9FGKGvd1Jt89zhHDqrSn0RPw1TQ4rnLy9oPXm4Cs6PrkSujJo3tosExw2j7goKsH6EKca6DLDRzmBKK45gJOqo1C8B8Th4OzE15cSybCtl2jqbGSyHJJPiRqHf%2BznGI57Xf5YjHW%2FoJ9Ex2obFWd4Il1CjCe2fuyISbk5PKBP8tBylkobe6CC6YQP5kz%2BBZeAcAhp4GDQUB0waAhUwAWi610EgpuNeY0UlxCol2yNDmEdTQMOZf8hUkAhHVFeyztqUUgvvbVHZ0rOmxtMwqLiXpk5tkZnrpqBPXILOY3U8qYw9jDAyiJSFDmchoQK7JeMTtbr8pojkKdB6C50D6LXfSHkCMEdYvDErMOuk89AGOqUBK66tjvUEPjQtWYJdXGLTSuagEa4bw6v0Y1%2Bcn9vUQF%2Fe8tLTQMaPiUQ9J9oLFkMENk3i2Jq4m8SMSUBunU4MkJUWhsUoKPoEiusdGlpoMIbKZYWOuHxpCA4Cfy7hgC257rNvL2V7TwMZpVtFoumAMspwZSSAaIiHf%2Fyb3y6wcSKlkNYRkS6vjxAiLsbk31CjZ7YS5Ho7i8W8vnxkPCG9MJ5FBa%2FK&X-Amz-Signature=eda1d77fb41fcdf9d81d92d87a983b0904207195008ff80d4894c8e73209d253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJI3JI7%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH78jEBrG%2B3gloZU%2BYQROhNgaDBd8E%2BF2oRNkFEWNYAtAiEA8YoAHymsqAx6JhninmlBEGnKKEgjC%2FuQ56VLGj6UGqcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDOUB%2BaX3Gblust9QQyrcAz6U4dHx50P5vL5JSJiQuhQNUrHDurD4dk1ygaM8ok6XJ47CB%2BiTKSuACQPS8QFOrrAT5eoRIhWvxpmN251vjNI0uNlEnc0V2IVbt%2BAhSmqx2jPicanJUSP9BPdOui1zR%2FjkaTan5qO%2BQWHSM2rS9RdP5imeTMUD94DdUEW5Wdk87Si0ISlfdde0iCsChxq6SbUC08qT2y8yMXlDRrS%2B6bC4VoB7lRiyexcX0GzFnlCha5cET0LGYhGMeHs7aseTggwCRiZjwF42Vk7Typa0lpCjK2AeZ1u8MUs9LBWhUqqkOFBAvEzNNQt5WOMu5MvTkk3QmjsdrtL9rTl3h8xrAM%2BoOtmhKJ9nVMgN0KjvFWN81tGCoytfPvQ3%2B2xmr93Q1QtN%2FC%2BzWbEPNM%2BFKzMwGTwkZjoMqJ6Db%2Bbhy6Y2vwcGKxrngUqC09LNpjj%2BZhusrk10ZydrzEINlbekc4oPPntsNjrP2ziGAuejXnRLH0JSJC%2BdTrWwdfOrZke3R5xPfpnfHtw7DAUN8FbZ9Gumsuf5Xv9OxasRFm9MHdHd%2FYLDwXyG0R2qgWoqw6THYtqQmZ8BJmufX2rqdCWRQX%2F%2BcoKG%2BYdJALn7IColh8LKYFFckR7XlBDTXvGG9s9EMJWm89AGOqUBwZPaZpPIYzYsVsrluWVCGsBQpKJPnQJmArlTpKTSiYdzTEXFkg3qaXoU8mBdowKV642PambdmwuakOYeuRBhEB5SEWmJWoBwEFDKlXzgjnA0RCYfR%2F2g3GZTBd1dD7rc4NrtAXoZ9xhLF8unVGLZ6lOn%2FDYpce0q11O5mw3%2BKuhL10ouKD0Fn%2Fi5byOtcSzFa4Aq8ck0tffcm77JJTXxUaBECPrv&X-Amz-Signature=3ec9854e259f97106f5c02de8c2005ed6d1550071a3db7f72e5faf09dbdb6cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLZP2H5%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDODhlWCber7WBkA8wDmWKiHyVrWj8T6F%2FllrSYEoYXGAiEAlEYtvDjgmFhREb1jySqWXU35NEJGwkAAmbJ2uqhaREgq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDPPmcjPwcqoAbL20SyrcA725OLg2x9xO%2FofwsfoFY2O2cbsT8Hdq5jOucSnyuQiUQu1XtxvJcaGMpoQiyB%2FLNl01JsHH%2BMLWSuQkooW5UTsupngmp5keVY%2Bq%2BF1sIW%2FDkwReh7CkFPm7a%2F9LbTWywBklvOToKDR%2BQ3sWHCPk4q7TNPj8FQfQPEw3OUMvysbrpenqE%2BK5aCyRPcLEpS9aT%2B366yFrPFzOTbFFMxeVCZcumqwCtqPbMULLjrWTQ5FIHtTfZOlOGv%2BpMrYGp29V6mKBT6lXPuifsZ9yCzq1n%2FSy3Jqjn0lKyx4u2C%2F36OrEikWy1SkX4qDqSzSbagSlz1Xa27TThf%2FsWv8EclggZFU24w8Ei%2FPmqAt13k3xvBzXfOWTR3DyWERaRs0Ryq%2FtDMRHxtc4x%2FO0qwNZ%2B0BqQc1Wi%2FIb0lWjWkMStcxM%2FJntROqn92gt4JxcWmPQzZPslukvBiR7hlPFFKNQcFIM%2FQCJG3O2JIrlepTbgDB803u0X0zyxM4jNYSsRx4eTmN%2FjLxIOP%2BnsPuXTB9yUPBF6G%2FSZFz40toXyI1NgJMUW45MISePsw%2B%2F4gSsOPPiivs%2B1TbRKFRDMBYHBr4qGbQ%2F%2Fk1M8piH6RpVEjYL%2FWKFl3qM1FywcUzWXNjwzXFvMNSk89AGOqUBpfJ4v7I3fQGapeOK2C9voG1hXy5NZ%2Few4RuY1C8WybF8slzWsWsj%2BVVlCajdXPPvY2DdVsEfiMgMeoYEg8JwvboAiKPFcx%2BzmLalRYzxYZwMLQIlnZwuGDw0gKl7iLdm81INPjPl8HQiSOMtnGbmO9UTLtUzYZ%2BDxK%2B5YWtKMRRPTB2kqgyZtw1n7Mcly1oxFTFRgE2xrtxkbHyb2nsefJjtZz%2BG&X-Amz-Signature=3fcbbfa959dcfe84a92742ccc87b4640786fed56fd2887a226cd9af7f34433e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BCNUSW%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHkA5QiMtkdk7ermtsOiAgiQS2sR3JtMHA3BWQ7%2FLOOOAiEA1wb8IsUUbBgufAZRGnB11YUsat3Z7Bn09Ihhx5K6mr8q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDImKvoxI47dGAyUW4SrcA%2BxbKvWtItiV8Xg2TscF2Z9aRNMGySHVY5EznfsdxOwOrKiwsRqvAnMVkvFgQsmc2si3mGaSrsyBJhUlszamYplivIV3E4UFSPIbwdf8s0bt%2FMOtpSt54Vgzh%2FK7R6kVPX8rZiwEh8e8DWjUrIMyb959kblCJZFqpmUj6uLRIIOvF6u5DINiArUkYsNIx9JK56WQA9cRFE%2BLNkarJR40h1VfSPGhF71j4%2Bu9%2FipbLCCObe4RkRyiIszqIzG%2FBYdQC2lv8ywq77SED0AVMOEUe%2F6D9u9FGKGvd1Jt89zhHDqrSn0RPw1TQ4rnLy9oPXm4Cs6PrkSujJo3tosExw2j7goKsH6EKca6DLDRzmBKK45gJOqo1C8B8Th4OzE15cSybCtl2jqbGSyHJJPiRqHf%2BznGI57Xf5YjHW%2FoJ9Ex2obFWd4Il1CjCe2fuyISbk5PKBP8tBylkobe6CC6YQP5kz%2BBZeAcAhp4GDQUB0waAhUwAWi610EgpuNeY0UlxCol2yNDmEdTQMOZf8hUkAhHVFeyztqUUgvvbVHZ0rOmxtMwqLiXpk5tkZnrpqBPXILOY3U8qYw9jDAyiJSFDmchoQK7JeMTtbr8pojkKdB6C50D6LXfSHkCMEdYvDErMOuk89AGOqUBK66tjvUEPjQtWYJdXGLTSuagEa4bw6v0Y1%2Bcn9vUQF%2Fe8tLTQMaPiUQ9J9oLFkMENk3i2Jq4m8SMSUBunU4MkJUWhsUoKPoEiusdGlpoMIbKZYWOuHxpCA4Cfy7hgC257rNvL2V7TwMZpVtFoumAMspwZSSAaIiHf%2Fyb3y6wcSKlkNYRkS6vjxAiLsbk31CjZ7YS5Ho7i8W8vnxkPCG9MJ5FBa%2FK&X-Amz-Signature=5ab7ad2ffbd77061e7cae430551192708fc42ba91206240aadcb77669adb67ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
