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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEFMV4X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHOb5r47f85mT0HmXdaauKSPMuxmJn9DhwLOr44Jh9KOAiEAmpVBBZOG%2BtXNxE5dImHbw3bXiOwoZt5XX4v4apIeckMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEun2wtKmVAo0Q4swCrcA9U8J4OgBMYT371DKZ5Yc5DwKlf0S9CyykN0C6cSvEV8TYeK2SLODUUPZJY6FMOaC%2BDdZoYg9qSA7ojsgDTSLXTEitu0PxPCE%2BYgG%2FLfaQii3r5D07Qa8W0jcb9nMkud96%2F5DpDSEnPDqWhFASOwaIIazvk0MRyDOyELzEmdqTqeP%2BbGjXiGRDtbf4347FI5%2Fs4j%2F7qFLPQnDXCr0O1vu16iRAbqIpkiBhvL47B0zH6Ndy015kMebKSjrM%2F3KAX3b7Ab8ystQE6zKijI5osZFtBqPpgdpSVf9E6Tk9NaTmjochOqNlUhAgHdXVQUV4f%2F6POnddA0iubb93BOxTRqDj9eRKGPvH5%2F8z9F4atcYZFsLrwINVed5D77qHH0X%2BhvTTxYQce7%2FjiErgYM%2FPGM%2F5bjoNdQAMjLuhM64wu5EUhrPPexqUtj%2FqGXaBdJRe1%2BKDTpJKeTw49p%2FdXc2DOqsNJp8%2FOtruWFl28Gg2xGsh6euFTXnuNmICwiEJdYtoAznkro%2BX0FbVX5mr72zZzgQ81AD9O3ISCln0eA%2BbOGthHEAR46qAFF1sKo4qnob3FE6WpawwD4HmeA7Apd9c7Qch71ta5VoirKr%2FOruVBFc7raxAIaUZ%2FeIa0moyeSMO%2BqgcIGOqUBi9zK25cxnjqoZDlLwAycmvbiffFa2DxcyFLPT4RoL08zTP%2BqV6117xfgvikQfc39NRucy1bj%2BXz%2FPLen6V0r2q02qkkoODH6uj9ZYYPvuLc53LT34cKcgcny35EKBVZlMRwPIrT3ZpCmnXn0VXeIPpK%2FMpG5vOwbBXtVTcKRiOKzWWhmJYygVkOy6xsT3aH4Pc9wXEqqJaLMNWCTwoVH2%2FAO6gMX&X-Amz-Signature=e3f765cd22c248084d06d60ea85f24b870e6d642a061d068836a61e51f97d089&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEFMV4X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHOb5r47f85mT0HmXdaauKSPMuxmJn9DhwLOr44Jh9KOAiEAmpVBBZOG%2BtXNxE5dImHbw3bXiOwoZt5XX4v4apIeckMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEun2wtKmVAo0Q4swCrcA9U8J4OgBMYT371DKZ5Yc5DwKlf0S9CyykN0C6cSvEV8TYeK2SLODUUPZJY6FMOaC%2BDdZoYg9qSA7ojsgDTSLXTEitu0PxPCE%2BYgG%2FLfaQii3r5D07Qa8W0jcb9nMkud96%2F5DpDSEnPDqWhFASOwaIIazvk0MRyDOyELzEmdqTqeP%2BbGjXiGRDtbf4347FI5%2Fs4j%2F7qFLPQnDXCr0O1vu16iRAbqIpkiBhvL47B0zH6Ndy015kMebKSjrM%2F3KAX3b7Ab8ystQE6zKijI5osZFtBqPpgdpSVf9E6Tk9NaTmjochOqNlUhAgHdXVQUV4f%2F6POnddA0iubb93BOxTRqDj9eRKGPvH5%2F8z9F4atcYZFsLrwINVed5D77qHH0X%2BhvTTxYQce7%2FjiErgYM%2FPGM%2F5bjoNdQAMjLuhM64wu5EUhrPPexqUtj%2FqGXaBdJRe1%2BKDTpJKeTw49p%2FdXc2DOqsNJp8%2FOtruWFl28Gg2xGsh6euFTXnuNmICwiEJdYtoAznkro%2BX0FbVX5mr72zZzgQ81AD9O3ISCln0eA%2BbOGthHEAR46qAFF1sKo4qnob3FE6WpawwD4HmeA7Apd9c7Qch71ta5VoirKr%2FOruVBFc7raxAIaUZ%2FeIa0moyeSMO%2BqgcIGOqUBi9zK25cxnjqoZDlLwAycmvbiffFa2DxcyFLPT4RoL08zTP%2BqV6117xfgvikQfc39NRucy1bj%2BXz%2FPLen6V0r2q02qkkoODH6uj9ZYYPvuLc53LT34cKcgcny35EKBVZlMRwPIrT3ZpCmnXn0VXeIPpK%2FMpG5vOwbBXtVTcKRiOKzWWhmJYygVkOy6xsT3aH4Pc9wXEqqJaLMNWCTwoVH2%2FAO6gMX&X-Amz-Signature=b846944af6ef5347cb2f95272cec8733135f27acf788dd6d5b9b34217b039910&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEFMV4X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHOb5r47f85mT0HmXdaauKSPMuxmJn9DhwLOr44Jh9KOAiEAmpVBBZOG%2BtXNxE5dImHbw3bXiOwoZt5XX4v4apIeckMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEun2wtKmVAo0Q4swCrcA9U8J4OgBMYT371DKZ5Yc5DwKlf0S9CyykN0C6cSvEV8TYeK2SLODUUPZJY6FMOaC%2BDdZoYg9qSA7ojsgDTSLXTEitu0PxPCE%2BYgG%2FLfaQii3r5D07Qa8W0jcb9nMkud96%2F5DpDSEnPDqWhFASOwaIIazvk0MRyDOyELzEmdqTqeP%2BbGjXiGRDtbf4347FI5%2Fs4j%2F7qFLPQnDXCr0O1vu16iRAbqIpkiBhvL47B0zH6Ndy015kMebKSjrM%2F3KAX3b7Ab8ystQE6zKijI5osZFtBqPpgdpSVf9E6Tk9NaTmjochOqNlUhAgHdXVQUV4f%2F6POnddA0iubb93BOxTRqDj9eRKGPvH5%2F8z9F4atcYZFsLrwINVed5D77qHH0X%2BhvTTxYQce7%2FjiErgYM%2FPGM%2F5bjoNdQAMjLuhM64wu5EUhrPPexqUtj%2FqGXaBdJRe1%2BKDTpJKeTw49p%2FdXc2DOqsNJp8%2FOtruWFl28Gg2xGsh6euFTXnuNmICwiEJdYtoAznkro%2BX0FbVX5mr72zZzgQ81AD9O3ISCln0eA%2BbOGthHEAR46qAFF1sKo4qnob3FE6WpawwD4HmeA7Apd9c7Qch71ta5VoirKr%2FOruVBFc7raxAIaUZ%2FeIa0moyeSMO%2BqgcIGOqUBi9zK25cxnjqoZDlLwAycmvbiffFa2DxcyFLPT4RoL08zTP%2BqV6117xfgvikQfc39NRucy1bj%2BXz%2FPLen6V0r2q02qkkoODH6uj9ZYYPvuLc53LT34cKcgcny35EKBVZlMRwPIrT3ZpCmnXn0VXeIPpK%2FMpG5vOwbBXtVTcKRiOKzWWhmJYygVkOy6xsT3aH4Pc9wXEqqJaLMNWCTwoVH2%2FAO6gMX&X-Amz-Signature=23bcf16001c259e204ee951b59df596e1e85474b70210942e4c1c402d31ca8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIHDTHV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICSn6vMgl1mLfwyNysdSq2UeJngsNzwymnGg8zZhqN5OAiAImFe7Slw3Adurg66OrBhGa9f4LqB5%2BVLAp90rNk24Pir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMNhTZrZdwpy8PYf9zKtwDLFnFYWOOLb5NgjQBTtFDeyIFA7%2F9Ab7SV3BtHvB9Eosqil8OART2w1yFeZwKeDHSjcyC8f2DA%2BpJ%2BPa3fhA7BLlcEvRAOsIVr%2Feb%2BSj6L6nkZxSGAd5wcrR1DxdQOUoOHnEPzLR8nJmK8PHywe69rtGqafJJs4MFttTw6kux2e1%2BN86fISNhuDangN4JAPy9tJRejSMi8JBD5b7MPuloxQg%2Fk4zWpbuVUCAxau%2BCjpb98D26WRn76lhEBsZehpCxpcQP8pJB37BN9uxV3QzWx%2Ftlem0l2wr5ln93i%2BLiqCVlvT%2BJqZ2QOplGcOnMeMbdLQxurIkWdG26%2FnFu5mjGrIxEypwqTy5SvgcOwL3abtY7Bm3PX4fBhPkIh4dCTp0MoMhhh%2BbUDj%2FPVhaX4jNYm6zgLjoN7cNXk72quiqT2ZweS6I0ep7wq%2BQsw6cmpKPXP%2BScxkxpLf2oP5DAtWOcXbJqaPPo3wKEoFrjXgywhQI2k0j%2FTRXBmCfD2QIhWm2ZyBrrzHY75KbPI4G2hw%2FJuXb2E4%2Bnnsq5QH8o9n%2F90WLNT2yb1yxBhrjJspYfasZJKEIiGX1nLrU7iks1%2FVC1XUW%2FPqLz6D%2FBY%2FdTXoadnCI0Cv9Rt1l%2FbL43X88w3KqBwgY6pgGQ4qsvniYNSYET36RSItSqBizF%2BJ7J8aHsgG%2BpJXUVoeZxL39FqI9LWTpMUezB%2FGqx8IXS1UoH47412483tBUhkCBFWJMyZKcBAjpxtpbzSbYN%2Fv%2Boeb%2FjaQeyloY0c6mMwSyTdhfiSvQ76yBCUlG8R%2BdAjFWX8uP9U7dtqAkiS7VLETkg0l74nzeADW2jlA8%2B62j%2FD%2FAm8efj03t5bAOxReCf%2Fm3Z&X-Amz-Signature=30d91b7d0a9b1714f1bad3f0691d235504fa1c007d0be7578eddbf074daf764f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECHHVT6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICsAHUbn7ISaW3RbxYJX9DAFjOmgZ1arwRfcSHPLuuZ1AiAJWslcWWaNrIxGwQvyDUlzdEbfGj6Z0NrM0GkrF1ypJir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM1oYoDUnffWLy7L6wKtwDagyl6cbJHpKfvAQDhLVrviLmQgX979CP%2FrOSJMcXfbEInL1Ed5orFK1QR0%2BTXbw3ks5Ga9XwDvUvQe%2BRifT60D6injdPSy66ENtXWEDCdP69%2Bguc%2BDmeuSXr8YU%2B9t81o8JHwCer%2Fkj6UB3wP%2Bdk4CBT3R6jrVJdcTW2tyQanLcCdiojt0vw3IkN1DA9dPsG5sRKt5PM%2ByXKhKsEvpiRlDmIeLRrySx5DYKCuC4xQULMMGRcPJ3ARsoM%2BetRkee%2ByhX809XBAYG5Iq1DFlCBNzESztkP1mNZ5OslxH%2Bfo69VIM%2B6HiPZah8jgsOr4R4q6%2BxVR9rXhuW0Z3D1h9cyf6gZM8NDjBvVjrfyX4j6LAcbJWR5GKUfwBoYXzdgcb2ya5j9SMsZjRHFXrRXD0XWIvMbIzSDLVnighUbH%2BwEEJN3qtNv3go2U5WBWDghlIcNHRTNQhv1FfqrDXYTSb2d5jcS2q9Tq3WfqGqfv%2BQ0s%2F5ZX1UGMvMZqo0%2F6uoNaE5b280iGBmzP5n1X88NEDeYkuwHC%2FDExNshjyq5gUJIHTKSUsRFFhG1CtYQpO0Groe1wtcbLxy0rqcqkMc5s3Ayxo%2FRCV2iBl3nyYM44yYM18zUtsOXYZN3LoXfxygw1KmBwgY6pgFv258x28YXy1fuW2hChBfRWLzjXQuqujeMG%2F5kVb0iWJ%2FdI0U3xzMZNKe4HLMsRcwT39Pvzo3rR88FkIT6tL%2BjmDrMCOW6AD1PnJ3KUuTpDrHXhGt%2B3IW71FVoFJD2N2yH%2Bsz0N62KDse1fYdng9U6YINklc3zl3ZCCxgQTDuvYqqbpBMejsxiYKGp9qtEgtZXOguq0ZS7zEaPuF7vYSfVqqyA5Pw%2F&X-Amz-Signature=372487e08b0fe15407049efa030335ada6967625199512bb2ba6c239186dada4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEFMV4X%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHOb5r47f85mT0HmXdaauKSPMuxmJn9DhwLOr44Jh9KOAiEAmpVBBZOG%2BtXNxE5dImHbw3bXiOwoZt5XX4v4apIeckMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEun2wtKmVAo0Q4swCrcA9U8J4OgBMYT371DKZ5Yc5DwKlf0S9CyykN0C6cSvEV8TYeK2SLODUUPZJY6FMOaC%2BDdZoYg9qSA7ojsgDTSLXTEitu0PxPCE%2BYgG%2FLfaQii3r5D07Qa8W0jcb9nMkud96%2F5DpDSEnPDqWhFASOwaIIazvk0MRyDOyELzEmdqTqeP%2BbGjXiGRDtbf4347FI5%2Fs4j%2F7qFLPQnDXCr0O1vu16iRAbqIpkiBhvL47B0zH6Ndy015kMebKSjrM%2F3KAX3b7Ab8ystQE6zKijI5osZFtBqPpgdpSVf9E6Tk9NaTmjochOqNlUhAgHdXVQUV4f%2F6POnddA0iubb93BOxTRqDj9eRKGPvH5%2F8z9F4atcYZFsLrwINVed5D77qHH0X%2BhvTTxYQce7%2FjiErgYM%2FPGM%2F5bjoNdQAMjLuhM64wu5EUhrPPexqUtj%2FqGXaBdJRe1%2BKDTpJKeTw49p%2FdXc2DOqsNJp8%2FOtruWFl28Gg2xGsh6euFTXnuNmICwiEJdYtoAznkro%2BX0FbVX5mr72zZzgQ81AD9O3ISCln0eA%2BbOGthHEAR46qAFF1sKo4qnob3FE6WpawwD4HmeA7Apd9c7Qch71ta5VoirKr%2FOruVBFc7raxAIaUZ%2FeIa0moyeSMO%2BqgcIGOqUBi9zK25cxnjqoZDlLwAycmvbiffFa2DxcyFLPT4RoL08zTP%2BqV6117xfgvikQfc39NRucy1bj%2BXz%2FPLen6V0r2q02qkkoODH6uj9ZYYPvuLc53LT34cKcgcny35EKBVZlMRwPIrT3ZpCmnXn0VXeIPpK%2FMpG5vOwbBXtVTcKRiOKzWWhmJYygVkOy6xsT3aH4Pc9wXEqqJaLMNWCTwoVH2%2FAO6gMX&X-Amz-Signature=3e6c053c42a244b45adbe01e996f8122d35aed35485cf85b3a8db1a7bf0a5109&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
