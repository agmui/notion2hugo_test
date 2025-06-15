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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JEQRCO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGc8%2F6rYOgPAfBhOszlOFq0frG2DB49FogqTClXGoyIyAiBXxTY2mfurzY%2FZzS%2FrlKFNlBIEzgKR3Z6SFuGAOP9N6ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMS4sE4wUO20fj8bvsKtwDiYeR6umo0dtAvPiFjNHK%2FuN%2BqM6J%2F3isTRA0kAfednKgdFhuWcsffh4Nhh%2F8ETiYaYC9yDwxbY4O5h7M2diZdJ7xTZrlCwh6uoTGB2TWH9zqEFXt%2FacQD01H%2B6AcM6KoxjuJf7Wh61HPJZL%2BN3Tc05iVgIyYbYmcMyI4GrAooK9PPSMWvHd8oxZ05oiZck8GUkXCRR96NMT%2Btm51fCeoEKC2cZso7%2FDoe%2BlWEgVs5KCRzHzLLp7pep1w9RYAppPXc%2Fhg%2FbZSMrdIsatZC2impiChMpSGE5DzANFw0llaele6exMLZcKPGz426MGLEKJXj7fhU688X3cWPiVMTfIk71WUbJw%2BolYEau42wXdDyp6anF3Aqf%2F5sRAeEoq07RzOD2X4yFW8RbzsEiJmXvhsLyhUuKHbx6WfwdzgI0w8E25m2faAvHgkDHSLcMCeHoKkfAu3h1%2BFJ%2F22oUQPhbbxoFOT8k3kzkORNj1xg%2FkHcN3KZnWK1%2FZOc3U4TgJ%2Bpext6bo2expXZHApijI1oVX3cOWTY0TwtuMcb%2BUEfxMDtBMhTZn%2Fr%2BUT%2Fj4iznwHzzd3DF620nYLLLcGSiLyuiBLFiEwD07Se0Tl%2ByksgDUw7YH4%2BvHDXz%2FDwHZnQowwuKy5wgY6pgG0z%2Bogmnrt4iwnFyUog8ckoi57xKsdIrRJRsMX1w7uCfea2i0NO0fFLg9D78CJEzf%2BL%2Fbb0A19cgOIDIGP6OAJrjPhgv7quOLx25XS4qU2DcLTWeiSaQCDkQzxtbIyof5vv05EShQarnfp7rqncs4kVFv5C%2BJlCiRlbczxxdxYUAtvVskN1U7bpX0YgZ%2BUA1uzZ%2FMKUXggP9CnRmEt5RE6LsqH8p%2FM&X-Amz-Signature=219502a2cade5584b598b09e8efc24ccde98e1fdf373b87dbe7ed240007a37ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JEQRCO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGc8%2F6rYOgPAfBhOszlOFq0frG2DB49FogqTClXGoyIyAiBXxTY2mfurzY%2FZzS%2FrlKFNlBIEzgKR3Z6SFuGAOP9N6ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMS4sE4wUO20fj8bvsKtwDiYeR6umo0dtAvPiFjNHK%2FuN%2BqM6J%2F3isTRA0kAfednKgdFhuWcsffh4Nhh%2F8ETiYaYC9yDwxbY4O5h7M2diZdJ7xTZrlCwh6uoTGB2TWH9zqEFXt%2FacQD01H%2B6AcM6KoxjuJf7Wh61HPJZL%2BN3Tc05iVgIyYbYmcMyI4GrAooK9PPSMWvHd8oxZ05oiZck8GUkXCRR96NMT%2Btm51fCeoEKC2cZso7%2FDoe%2BlWEgVs5KCRzHzLLp7pep1w9RYAppPXc%2Fhg%2FbZSMrdIsatZC2impiChMpSGE5DzANFw0llaele6exMLZcKPGz426MGLEKJXj7fhU688X3cWPiVMTfIk71WUbJw%2BolYEau42wXdDyp6anF3Aqf%2F5sRAeEoq07RzOD2X4yFW8RbzsEiJmXvhsLyhUuKHbx6WfwdzgI0w8E25m2faAvHgkDHSLcMCeHoKkfAu3h1%2BFJ%2F22oUQPhbbxoFOT8k3kzkORNj1xg%2FkHcN3KZnWK1%2FZOc3U4TgJ%2Bpext6bo2expXZHApijI1oVX3cOWTY0TwtuMcb%2BUEfxMDtBMhTZn%2Fr%2BUT%2Fj4iznwHzzd3DF620nYLLLcGSiLyuiBLFiEwD07Se0Tl%2ByksgDUw7YH4%2BvHDXz%2FDwHZnQowwuKy5wgY6pgG0z%2Bogmnrt4iwnFyUog8ckoi57xKsdIrRJRsMX1w7uCfea2i0NO0fFLg9D78CJEzf%2BL%2Fbb0A19cgOIDIGP6OAJrjPhgv7quOLx25XS4qU2DcLTWeiSaQCDkQzxtbIyof5vv05EShQarnfp7rqncs4kVFv5C%2BJlCiRlbczxxdxYUAtvVskN1U7bpX0YgZ%2BUA1uzZ%2FMKUXggP9CnRmEt5RE6LsqH8p%2FM&X-Amz-Signature=de09796f5917a9d59ae2c542b2fc34d90a98c6ce7d4449ec00dbc92be339c8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JEQRCO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGc8%2F6rYOgPAfBhOszlOFq0frG2DB49FogqTClXGoyIyAiBXxTY2mfurzY%2FZzS%2FrlKFNlBIEzgKR3Z6SFuGAOP9N6ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMS4sE4wUO20fj8bvsKtwDiYeR6umo0dtAvPiFjNHK%2FuN%2BqM6J%2F3isTRA0kAfednKgdFhuWcsffh4Nhh%2F8ETiYaYC9yDwxbY4O5h7M2diZdJ7xTZrlCwh6uoTGB2TWH9zqEFXt%2FacQD01H%2B6AcM6KoxjuJf7Wh61HPJZL%2BN3Tc05iVgIyYbYmcMyI4GrAooK9PPSMWvHd8oxZ05oiZck8GUkXCRR96NMT%2Btm51fCeoEKC2cZso7%2FDoe%2BlWEgVs5KCRzHzLLp7pep1w9RYAppPXc%2Fhg%2FbZSMrdIsatZC2impiChMpSGE5DzANFw0llaele6exMLZcKPGz426MGLEKJXj7fhU688X3cWPiVMTfIk71WUbJw%2BolYEau42wXdDyp6anF3Aqf%2F5sRAeEoq07RzOD2X4yFW8RbzsEiJmXvhsLyhUuKHbx6WfwdzgI0w8E25m2faAvHgkDHSLcMCeHoKkfAu3h1%2BFJ%2F22oUQPhbbxoFOT8k3kzkORNj1xg%2FkHcN3KZnWK1%2FZOc3U4TgJ%2Bpext6bo2expXZHApijI1oVX3cOWTY0TwtuMcb%2BUEfxMDtBMhTZn%2Fr%2BUT%2Fj4iznwHzzd3DF620nYLLLcGSiLyuiBLFiEwD07Se0Tl%2ByksgDUw7YH4%2BvHDXz%2FDwHZnQowwuKy5wgY6pgG0z%2Bogmnrt4iwnFyUog8ckoi57xKsdIrRJRsMX1w7uCfea2i0NO0fFLg9D78CJEzf%2BL%2Fbb0A19cgOIDIGP6OAJrjPhgv7quOLx25XS4qU2DcLTWeiSaQCDkQzxtbIyof5vv05EShQarnfp7rqncs4kVFv5C%2BJlCiRlbczxxdxYUAtvVskN1U7bpX0YgZ%2BUA1uzZ%2FMKUXggP9CnRmEt5RE6LsqH8p%2FM&X-Amz-Signature=b84e48d3c145c298cfe878152b75b8150e624b76bdc60fbc4419cb28cf2ecb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGNVRDO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBsK0o2BqU76JSLCCTy4OkhpZOWqfrDitIm6fstFwei%2BAiEAjyyGdj6rbpT%2BT3Wq%2BZ1sGn9GhW5MUl4J6nJ9kkrH4PQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHNndTBb2unt927w6SrcA35Y1E9Du5zje2QhDPs9Afrlks2huhp3qxRnaTNODUQpAV8TuYCeSYXpMevwoOIIjgpXNDFJ9GUYCq0ljJRaFOaAdErH%2Fu3%2BCVDPDmtyWTqG6PtZX93tjyGp%2F2MvgOWYXSNl94UjM1gpyNGvRyA5VuuPVrB0vlw2Xue7yMbiDo%2BzVw%2F8vmLMT31uRTaO60MQlzSEKcV5KlLZ%2Fh1588SKeKgI7UWm66PvR6qpnwVd2pZv7K8cKJtaK9zjFdim6R2LsIocCFFYrsbMnSMwpG6JX%2F8gqf%2FqsAmcMstgAHtTkT0PWPPcMIcerfq%2Fl%2FCHjYu74JZXNAuO9LkFzebE8S8ifQm32jL6asRvM9NxpDwdmcwpk0g5mPXv%2FhOpoghCVkBmpmZqoMKTNYVExwE54ejcFMg6sj5pjak4CeFNHIFsFqDE3NfT9h20NMVnc%2BNk%2BobCP9YCbnAxbckA6AceuPcAT8ZL28yekQFzSFN%2BVQHs6FHyZwJ%2F%2FBMcrPyoIpwk6BDZM5xBsX5BeG8hcwKoRpMTxYFPSYkMUpBGmLMI3PbIoa5AGM4HIzYhvo84ZVqPo7Fxs7YYUwLdiRQ2YryYvFN%2BMUpkHYBK6WfObj3jyYmMMDAQDUq2euo1GpPTCRQmMKysucIGOqUB24BRo4cOJ7hlcPUf7Ho9H6VMHau0R%2BZmnZd77M3LT4iBZhN0tt8pkKzRjPC4MpvecENt38KSG4vfKSEiGLz6gOEta1h0ijLUEI6gIEW%2BNOklPXhTOZXE9yLZNgyIvEI%2BEG4rb2dyZYGMG9Vpg6u8rQeBn5aQyRaq%2Bw7FLAp%2F68UvMEnWVtqaY2%2Ff5VNAXbTvTOm9RTXbCGUifC6rnLiF6vaCHr1K&X-Amz-Signature=1db944a2e23db9abac9bf61ea34a1b63eeba6d08ca25ddf73cd0c0f683980572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCL4H4RH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDvR37pf43lEoiDjH1vkfVlH%2BOCOq6vWzeEUmuQr12mtAIgZvPUETl3cRde1YNJtMTX%2BfrZzz59s1%2Btn1I2NCeDfZAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD%2BEepcai056nnHnRCrcA01ydhmeNSkFbz6fcOVIM7%2FBVI52axQXFfJ%2B7mwZX9JCZQmxPod0QoD2%2B7TydOZkFNzMlISU4ZLiyj56gPC2V91bWecf6gSRGZ74%2Byd%2FKsRSsOknw9Cp98Ymc9cVhjVWIrZTg5BLmnSWmrNUMrwXAtjeBHq8DnHDrR77t5ZD%2BXcwoip5XvCLe44L4yXWcmm4kwFtnq1Sd3xxXv2rILwRt1%2BbWyJCQ051m2VTPAhl0Xg0pEXvv88sJ17MbeNBVWYoIxlMiqtOm3CimObb9jW%2FaxOxtiltK%2FH5KjdPGMJjZi7Us75fOe428ygVEaxOYG42Fij76ImVrd8CWB8pzsZPL7tBFGT6auDAxuOQbJY%2FVo9zaZ85RIPJMAs78yobnJJkwpOWOzjQI8Ez7NWy4%2FIj4vUSlmEFK3D5pq77s7uAW67tbSBkmUVkWNzt8SwozWTQfjgC1EQmoIINn3qP1hVNYx7bbL%2FiV4CLZAD7oAVzt1zu8FiHJJ%2BGn%2F0O0Lafci3RyJychFNdSzWG8MvWqehdLmGm2ne3wktiCYjh%2F3GtKh8ugswu6ycf5KiECHuvXUl5goDYs7aKzbFJdnO4hH6fvnCXPT9YpUWtSEC5DzKBMskX%2FpMS4x6VzCrN22nkMLisucIGOqUBcZmsLRsL2nUdBBynghEu9JPKsUISRj%2BXx0uLB3sNgJTbEPrvY28cIH48fo%2BsQAegiWU8UGKnPYpDzKHLX3jXJSTwlFJdElCCRdM1bQr9toVvnpGnnPoUqJaN7YDms8Hj7xvIauUQj0b94HO574cxwqBH7DrQybsr9NgQ2gtVN3vOumA2ljf%2FFYZJ1w1yQdRQmIv3Aytkx%2F6yeShKDveiWItx19Ef&X-Amz-Signature=a38f8d9d649c37aea1e8e19068437da040be734721a8c681c648b2aef1e51ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JEQRCO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGc8%2F6rYOgPAfBhOszlOFq0frG2DB49FogqTClXGoyIyAiBXxTY2mfurzY%2FZzS%2FrlKFNlBIEzgKR3Z6SFuGAOP9N6ir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMS4sE4wUO20fj8bvsKtwDiYeR6umo0dtAvPiFjNHK%2FuN%2BqM6J%2F3isTRA0kAfednKgdFhuWcsffh4Nhh%2F8ETiYaYC9yDwxbY4O5h7M2diZdJ7xTZrlCwh6uoTGB2TWH9zqEFXt%2FacQD01H%2B6AcM6KoxjuJf7Wh61HPJZL%2BN3Tc05iVgIyYbYmcMyI4GrAooK9PPSMWvHd8oxZ05oiZck8GUkXCRR96NMT%2Btm51fCeoEKC2cZso7%2FDoe%2BlWEgVs5KCRzHzLLp7pep1w9RYAppPXc%2Fhg%2FbZSMrdIsatZC2impiChMpSGE5DzANFw0llaele6exMLZcKPGz426MGLEKJXj7fhU688X3cWPiVMTfIk71WUbJw%2BolYEau42wXdDyp6anF3Aqf%2F5sRAeEoq07RzOD2X4yFW8RbzsEiJmXvhsLyhUuKHbx6WfwdzgI0w8E25m2faAvHgkDHSLcMCeHoKkfAu3h1%2BFJ%2F22oUQPhbbxoFOT8k3kzkORNj1xg%2FkHcN3KZnWK1%2FZOc3U4TgJ%2Bpext6bo2expXZHApijI1oVX3cOWTY0TwtuMcb%2BUEfxMDtBMhTZn%2Fr%2BUT%2Fj4iznwHzzd3DF620nYLLLcGSiLyuiBLFiEwD07Se0Tl%2ByksgDUw7YH4%2BvHDXz%2FDwHZnQowwuKy5wgY6pgG0z%2Bogmnrt4iwnFyUog8ckoi57xKsdIrRJRsMX1w7uCfea2i0NO0fFLg9D78CJEzf%2BL%2Fbb0A19cgOIDIGP6OAJrjPhgv7quOLx25XS4qU2DcLTWeiSaQCDkQzxtbIyof5vv05EShQarnfp7rqncs4kVFv5C%2BJlCiRlbczxxdxYUAtvVskN1U7bpX0YgZ%2BUA1uzZ%2FMKUXggP9CnRmEt5RE6LsqH8p%2FM&X-Amz-Signature=f42afc2990de14c356220f2a7ed6f4cf683009351682fee6e8d8efee46d28aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
