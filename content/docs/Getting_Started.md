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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBJJD3G%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDQ%2Bhl%2BBmiW8H59g7N5Q4r3sFBYGRtkCtdGHJgezP%2BesAiEAzQIRN7fbtszQ9LFa9epiaHW5FK4ABi%2BA68P3%2B3AVB7oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJd2IZjtBVMVhZCcircA2treCUCbSEigLi6S%2BPxCsLAep4Ti7zMhkdaHSQcpq4A%2B1z%2FliACjIYdyGqCJokx4DGeZPEoiikhkI0QDvyM94qM%2FmNf0NWxNB49LBoix3hXQ3RJAZytM8KYjKOj5JjdAMDZmb23VtaY4cpgWqCnvPqYHBp79fEEeMrZzlluojdkIWXPpdMPXvrILgvpQVnSUiYXjj%2Bfpo3jUUo4rmw7mUKvy8Ri9I6jA7AGhIpEU1vGrL%2BTMhc87qWImFrN4vNerPdjJ48eUCPnABnkot1Xnq0GSnNuYXmTQ%2BmPebfO5H7NYIoICkf95HUiCiQfroQ%2FV86sAyGDpxjYmJicQMRovkXNdYpFcJ4u8iE0Tb1M9uO%2Brtrl2HG4a%2BKr3WfrrfWQq1a4hkAlOOKni0pPj0CPu%2BcKFF5NQ5KEkhH1eU3w9UmErqDV2AxIZe98tT%2Bfy3tbvxU3FgUeQC5eNOnQYtNKoVVLkhxxY5iMpNSEqqCCS36zrpRTNCZATmnY1TYzi3iMPXYGHqK%2BOgpAFDhjhTXALXDve3YSmGhxr3vJUnRYhxHcG0uo57uKufky%2Fc2Zq5vdwB%2FwzW8h2uT2gppNTSeOyJPtwHJh1x4TbrTcdv31PZHXU7fi%2FuNZsPFmVww%2FMJT0zsAGOqUBqMRfPM9ChRf3zgcbgHfPbasUrwe2um5JLMkqoJb4K%2BrEGYzJ7rzYQf39P430RlbOSJ0s7XDdhtm8ZQVv3mi8XbW5wyAyuRJI6S%2FLEs7j%2FDWANdX%2FfqJ%2BVp0FrjFH4ylUlUSRErICrKj1vxdIYOSj6FN8lUCo%2BYUvDQYJQ%2BJwKJsXIe6PUo89LTcPNo0oQ21RhNc98sTw4k5%2BdNVFicZ2qBRO6Otn&X-Amz-Signature=6e17da09e8781f8e3c6562eac9bfce75c7acb6708ab81a42c25a7f583c6b68f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBJJD3G%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDQ%2Bhl%2BBmiW8H59g7N5Q4r3sFBYGRtkCtdGHJgezP%2BesAiEAzQIRN7fbtszQ9LFa9epiaHW5FK4ABi%2BA68P3%2B3AVB7oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJd2IZjtBVMVhZCcircA2treCUCbSEigLi6S%2BPxCsLAep4Ti7zMhkdaHSQcpq4A%2B1z%2FliACjIYdyGqCJokx4DGeZPEoiikhkI0QDvyM94qM%2FmNf0NWxNB49LBoix3hXQ3RJAZytM8KYjKOj5JjdAMDZmb23VtaY4cpgWqCnvPqYHBp79fEEeMrZzlluojdkIWXPpdMPXvrILgvpQVnSUiYXjj%2Bfpo3jUUo4rmw7mUKvy8Ri9I6jA7AGhIpEU1vGrL%2BTMhc87qWImFrN4vNerPdjJ48eUCPnABnkot1Xnq0GSnNuYXmTQ%2BmPebfO5H7NYIoICkf95HUiCiQfroQ%2FV86sAyGDpxjYmJicQMRovkXNdYpFcJ4u8iE0Tb1M9uO%2Brtrl2HG4a%2BKr3WfrrfWQq1a4hkAlOOKni0pPj0CPu%2BcKFF5NQ5KEkhH1eU3w9UmErqDV2AxIZe98tT%2Bfy3tbvxU3FgUeQC5eNOnQYtNKoVVLkhxxY5iMpNSEqqCCS36zrpRTNCZATmnY1TYzi3iMPXYGHqK%2BOgpAFDhjhTXALXDve3YSmGhxr3vJUnRYhxHcG0uo57uKufky%2Fc2Zq5vdwB%2FwzW8h2uT2gppNTSeOyJPtwHJh1x4TbrTcdv31PZHXU7fi%2FuNZsPFmVww%2FMJT0zsAGOqUBqMRfPM9ChRf3zgcbgHfPbasUrwe2um5JLMkqoJb4K%2BrEGYzJ7rzYQf39P430RlbOSJ0s7XDdhtm8ZQVv3mi8XbW5wyAyuRJI6S%2FLEs7j%2FDWANdX%2FfqJ%2BVp0FrjFH4ylUlUSRErICrKj1vxdIYOSj6FN8lUCo%2BYUvDQYJQ%2BJwKJsXIe6PUo89LTcPNo0oQ21RhNc98sTw4k5%2BdNVFicZ2qBRO6Otn&X-Amz-Signature=34bba9a24f4ebe7f3454d2c099209eabbce9053142a345f7201b3c0fc966c713&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBJJD3G%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDQ%2Bhl%2BBmiW8H59g7N5Q4r3sFBYGRtkCtdGHJgezP%2BesAiEAzQIRN7fbtszQ9LFa9epiaHW5FK4ABi%2BA68P3%2B3AVB7oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJd2IZjtBVMVhZCcircA2treCUCbSEigLi6S%2BPxCsLAep4Ti7zMhkdaHSQcpq4A%2B1z%2FliACjIYdyGqCJokx4DGeZPEoiikhkI0QDvyM94qM%2FmNf0NWxNB49LBoix3hXQ3RJAZytM8KYjKOj5JjdAMDZmb23VtaY4cpgWqCnvPqYHBp79fEEeMrZzlluojdkIWXPpdMPXvrILgvpQVnSUiYXjj%2Bfpo3jUUo4rmw7mUKvy8Ri9I6jA7AGhIpEU1vGrL%2BTMhc87qWImFrN4vNerPdjJ48eUCPnABnkot1Xnq0GSnNuYXmTQ%2BmPebfO5H7NYIoICkf95HUiCiQfroQ%2FV86sAyGDpxjYmJicQMRovkXNdYpFcJ4u8iE0Tb1M9uO%2Brtrl2HG4a%2BKr3WfrrfWQq1a4hkAlOOKni0pPj0CPu%2BcKFF5NQ5KEkhH1eU3w9UmErqDV2AxIZe98tT%2Bfy3tbvxU3FgUeQC5eNOnQYtNKoVVLkhxxY5iMpNSEqqCCS36zrpRTNCZATmnY1TYzi3iMPXYGHqK%2BOgpAFDhjhTXALXDve3YSmGhxr3vJUnRYhxHcG0uo57uKufky%2Fc2Zq5vdwB%2FwzW8h2uT2gppNTSeOyJPtwHJh1x4TbrTcdv31PZHXU7fi%2FuNZsPFmVww%2FMJT0zsAGOqUBqMRfPM9ChRf3zgcbgHfPbasUrwe2um5JLMkqoJb4K%2BrEGYzJ7rzYQf39P430RlbOSJ0s7XDdhtm8ZQVv3mi8XbW5wyAyuRJI6S%2FLEs7j%2FDWANdX%2FfqJ%2BVp0FrjFH4ylUlUSRErICrKj1vxdIYOSj6FN8lUCo%2BYUvDQYJQ%2BJwKJsXIe6PUo89LTcPNo0oQ21RhNc98sTw4k5%2BdNVFicZ2qBRO6Otn&X-Amz-Signature=9913733e8ea018663237b1d0b7e6421eec6fd6136bc415f66e037f5ebaac8f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ66U2VE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBhtP1oxNA1b4n6m2Qfi5ss%2F7PM956eNf5ML60IcbHeSAiEAv6ClCzW3h7GVOPHYnmfHUA945MHSXnYJsZI3l%2Foj9hwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4qmo72EAzFjDgXyrcA6YeL%2FOO7YuOBKudAYGRDE64uWH1srfwTzJ9gWOfbiglwc6Fm41%2Bxl3%2BYMbcYmHUfhwYgmJgwwq%2FYvRQgrQ7vmcRRS3EEk813vYaFvgIcXYMneh1Nr8%2B0o8cY3XpaZz0zAPSTYYhOQ1OJPD814dZTDMC7Ovv7yABHJhlm3jv8eaAebcdqVQcMKv5B83VH%2FgmEVsb5gMD1Cq%2BbmaD2nn4XCCHc2W4An3fTmJpzKEaMSuWKwRi7yhhMITWh6A0lIzrRhRvtZ5AfrzY%2FeM%2FSx%2BBrdzV1tqXmvcl7YvH9OQmPSwmPPMRDkyHsAaiJQs23xrJ7EnB8Tb3JzsjjzDbphfaAiY0s2gPMxh1KThaJj3PC4qnTU72%2FPrW8tBVT8XWmTq%2Bo9cm6XV7hYgPxx48HUIQl05PgPAnNF1DN4Uv4pAU4vvxwI%2BIpAO%2FgVEwx5fsw1Hl7mEJJktrZEW1SEeiUCOikHdhtps5ek843tOYJO5k3o4sjF4pS0p01z99S9NqTtbxGgzPdUBnhntSlA4CCbTAR8q6CKMNkO4rPuYmUH3XrRDULN8AeyS%2FOKKozBLGKlbf2YMsaqht8xEotvjWp5q%2BO5bSLxVxtLih5m4fTWcaa5LFspTxHatkyrsvZy%2FgMOLzzsAGOqUBAh7MwZnoUwL9ek%2FbZ%2FqyKqfh4vFoXnQ8yZ0xPGOgP4F%2Bgf4P3U1pW7i3THgNAu5z3OaB7L6L3q1TVU3Zr81E7lNabG6K6UMAmIXqj8urlxx7RUGtGqD%2FLhwIfv2zCVkULnOlgVR3LyLaQaV7H8fqvPWyEJG73K25PdIejL%2Brq0k5ukI6Ce272x1zYkucdpDxEqmPDFattAtQIuEKWWD%2BEVgOopjI&X-Amz-Signature=420e59ee86e1214dd1c7efc0cfe76b5bc1632cda087265242da1bcf9b2c5f7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJZY4PD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCHOmF87hMn03sZiAECYNCfhXDfuccbYwA04S4prUg8SgIhAOhLbJ3IJDd7nnZUYZYxOW719gEtOSJ3hS3ESxE2VPmZKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4p4Cdvul4uATztEq3AMKKcf8MBZeR%2BP8uj4yLHsAf7UqSUqmEvTFuE4YdLhL%2B6yXvnRmM%2BKUc6Qii5ofKmVHqH9YiuYR%2F%2BZy500hWUrc9LlPv3FgXadt4%2F0627nSzO6Sm9PG62Kx5fLKFo%2B0O5XId2dyD7OcXHp4u4DGB2T9lze7f3mKAIVY%2BirPHgPvn%2BVh7%2FsBMnehbRKSs4adKLJGJa%2B5UWgmhGjAx%2Fk%2B3hFPAaiSMz08qZS8V5WYWQEaGN7%2BHwp7zhE%2BWXz2DDBFi%2F%2BVUwL7sXmZsxvnLdKcOU2xgM8vL9XqgcREyritto3G4ijQ8cxpnJJuwX0wgQ6V1MmO1TSvKFaI%2Fr3k2dRuRcitAPLJTygOiFgJxyAI5rNkQ1A1ACEyTOcuTLdbJxFSS4Dc1JwmQeHdcGhTUtbFCX%2FZS%2B1Lq7gt9QbD423Hx6AJTC5amg4Av00GMe8gaX3lVRz6XtWKcUoce1Br26KhxeM%2Fq4ynp37JpbMo1k%2Fn1uvH%2FXB1PNRLCnsXyf06ZzPYERqCU1N2IDPHWaPDaNkIQIu9LNhpcGqpGmcZ1cJoru5%2BaQTRXB%2BeS2iXmIRmS6WBYmizNsM4s7EPT8zPNA%2BrvOT%2BNImPs3G4fRiUCtRLV2U%2FQGEpF5AolamWS5TJWDCT9M7ABjqkAby%2BkydcH0tPDA4B9GXs6unWcIertj8FzC0kU9f4NzarKVhb8d2%2FEnXatoiOZUdiegfwhIGk6s3n7fL6mUZggR2b6dL%2F9e0oMJNPfATZSOIv5UfIw7WYTuiaIIvjsuVPQXIJf1jYguCLg34GnFjp8q75e2GgIo3VvD9GYPk%2BRFWhLR91K5YbvFtL2eZWkvroB%2FjzCjpPYn0FhuXOZe6%2Bs2I7npOw&X-Amz-Signature=bf5786193d1f57ffc4d48e9a4e96f8827886bba2a87d9e2748d5b7396a0a5b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBJJD3G%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDQ%2Bhl%2BBmiW8H59g7N5Q4r3sFBYGRtkCtdGHJgezP%2BesAiEAzQIRN7fbtszQ9LFa9epiaHW5FK4ABi%2BA68P3%2B3AVB7oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJd2IZjtBVMVhZCcircA2treCUCbSEigLi6S%2BPxCsLAep4Ti7zMhkdaHSQcpq4A%2B1z%2FliACjIYdyGqCJokx4DGeZPEoiikhkI0QDvyM94qM%2FmNf0NWxNB49LBoix3hXQ3RJAZytM8KYjKOj5JjdAMDZmb23VtaY4cpgWqCnvPqYHBp79fEEeMrZzlluojdkIWXPpdMPXvrILgvpQVnSUiYXjj%2Bfpo3jUUo4rmw7mUKvy8Ri9I6jA7AGhIpEU1vGrL%2BTMhc87qWImFrN4vNerPdjJ48eUCPnABnkot1Xnq0GSnNuYXmTQ%2BmPebfO5H7NYIoICkf95HUiCiQfroQ%2FV86sAyGDpxjYmJicQMRovkXNdYpFcJ4u8iE0Tb1M9uO%2Brtrl2HG4a%2BKr3WfrrfWQq1a4hkAlOOKni0pPj0CPu%2BcKFF5NQ5KEkhH1eU3w9UmErqDV2AxIZe98tT%2Bfy3tbvxU3FgUeQC5eNOnQYtNKoVVLkhxxY5iMpNSEqqCCS36zrpRTNCZATmnY1TYzi3iMPXYGHqK%2BOgpAFDhjhTXALXDve3YSmGhxr3vJUnRYhxHcG0uo57uKufky%2Fc2Zq5vdwB%2FwzW8h2uT2gppNTSeOyJPtwHJh1x4TbrTcdv31PZHXU7fi%2FuNZsPFmVww%2FMJT0zsAGOqUBqMRfPM9ChRf3zgcbgHfPbasUrwe2um5JLMkqoJb4K%2BrEGYzJ7rzYQf39P430RlbOSJ0s7XDdhtm8ZQVv3mi8XbW5wyAyuRJI6S%2FLEs7j%2FDWANdX%2FfqJ%2BVp0FrjFH4ylUlUSRErICrKj1vxdIYOSj6FN8lUCo%2BYUvDQYJQ%2BJwKJsXIe6PUo89LTcPNo0oQ21RhNc98sTw4k5%2BdNVFicZ2qBRO6Otn&X-Amz-Signature=a7f7c8f4d432dd2229b7e0a685f45c7ab85feffbdfe77837cdb2c6853bde383e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
