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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPBYGTG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCetLAKowdiXg%2BJ3uFcOOaFpgNtsLZJE%2FfPcgB%2BpL%2FkdQIgB7xW3tDxu9HJ3v%2FUieyfBJaUj9MGKWmGcjR3sAplSaQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGhIZYES90SRo60%2FircA%2FT1CGfAp7BLWy9VOFcW1PGpvEMz4izDcls19GcjOZ7mzDBsja6%2FE%2FcI8I4BRG%2B5BP0NTuPPAV%2FPRly4SC65oMdDi7H9UznftSe0VvhYSurebJ4XK%2FrgAF%2FWegziD3pDbYnAouN6z55WVeNcbtjeaEJi5mvEuY8o9L2ais3ehuzSkWWZBUk%2Fo%2FGHR4Ul%2FglD%2BBCoVauo4V%2B6M%2FH5Qfz6MrFEEevs6K9o%2Bt8bZt5y9ZrLIO4COZ6sPk054Qb%2FTEKZeLW3N2Pm2Gz%2BhINkTOF%2FU5kybF50BOtgDtafm7mqgspkcurzaAOo%2FbRReLbXk31LJi2YwrhkNWfoiZhG7snzltkrq33HbrR5M65SdQDDCHBKZI0%2FPrI0kWcVN%2F11QGpqIAiByAkcE6Hd40CqEq2rmuArc3TYFhMkPdaOXQEhkA2GyjtQTUl3hDtK31aTtbWswMoiyLTwrWTFwc%2FJvLyezhVQGhViDltlN3ZS%2F88kXfk5f1%2F%2FftjsatnEPI3NBhwupAEoRVEnm4cLerHKdsn4h0uKVwoZqhpav7A70RA3a4c6Yk%2Bb%2B%2B%2F7kIn2oJRrkOcLXqaqECeuMsbje0XmuES7qiqh%2F%2BUi8trOoIvR2vJnJvwVEKoofq25FKd6QbvIMMzNwMMGOqUBOhtxcvcITSh%2B4%2BewiQs5dH7gRLG2EqBx0f0i%2B6s7hPwp97ndSmRddVng6A%2BJKQSvgFNPFwqcsqwA5SxW7dbSopvkvG2fES2IZdiPh3ENuxzOr0%2FY2P6nG8ueRBJwfgtKJralS%2BZShcS4KaJIjB5jFOHLRiCNksJkHWD953o2L2T9FEu3B%2BW6Cr5zvgbszhblhk%2FVrAbobMOLRKg4ImvYJjHZQMyA&X-Amz-Signature=fee14ec5a96dded58c2c2f95397115e681116dbca3bc1d6cbaa8ff5b015b2599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPBYGTG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCetLAKowdiXg%2BJ3uFcOOaFpgNtsLZJE%2FfPcgB%2BpL%2FkdQIgB7xW3tDxu9HJ3v%2FUieyfBJaUj9MGKWmGcjR3sAplSaQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGhIZYES90SRo60%2FircA%2FT1CGfAp7BLWy9VOFcW1PGpvEMz4izDcls19GcjOZ7mzDBsja6%2FE%2FcI8I4BRG%2B5BP0NTuPPAV%2FPRly4SC65oMdDi7H9UznftSe0VvhYSurebJ4XK%2FrgAF%2FWegziD3pDbYnAouN6z55WVeNcbtjeaEJi5mvEuY8o9L2ais3ehuzSkWWZBUk%2Fo%2FGHR4Ul%2FglD%2BBCoVauo4V%2B6M%2FH5Qfz6MrFEEevs6K9o%2Bt8bZt5y9ZrLIO4COZ6sPk054Qb%2FTEKZeLW3N2Pm2Gz%2BhINkTOF%2FU5kybF50BOtgDtafm7mqgspkcurzaAOo%2FbRReLbXk31LJi2YwrhkNWfoiZhG7snzltkrq33HbrR5M65SdQDDCHBKZI0%2FPrI0kWcVN%2F11QGpqIAiByAkcE6Hd40CqEq2rmuArc3TYFhMkPdaOXQEhkA2GyjtQTUl3hDtK31aTtbWswMoiyLTwrWTFwc%2FJvLyezhVQGhViDltlN3ZS%2F88kXfk5f1%2F%2FftjsatnEPI3NBhwupAEoRVEnm4cLerHKdsn4h0uKVwoZqhpav7A70RA3a4c6Yk%2Bb%2B%2B%2F7kIn2oJRrkOcLXqaqECeuMsbje0XmuES7qiqh%2F%2BUi8trOoIvR2vJnJvwVEKoofq25FKd6QbvIMMzNwMMGOqUBOhtxcvcITSh%2B4%2BewiQs5dH7gRLG2EqBx0f0i%2B6s7hPwp97ndSmRddVng6A%2BJKQSvgFNPFwqcsqwA5SxW7dbSopvkvG2fES2IZdiPh3ENuxzOr0%2FY2P6nG8ueRBJwfgtKJralS%2BZShcS4KaJIjB5jFOHLRiCNksJkHWD953o2L2T9FEu3B%2BW6Cr5zvgbszhblhk%2FVrAbobMOLRKg4ImvYJjHZQMyA&X-Amz-Signature=1df9fe6a17fcdb1489bc2a1b99cd2c62c6ae201f845ac5d45e7c7ba056ccc626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPBYGTG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCetLAKowdiXg%2BJ3uFcOOaFpgNtsLZJE%2FfPcgB%2BpL%2FkdQIgB7xW3tDxu9HJ3v%2FUieyfBJaUj9MGKWmGcjR3sAplSaQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGhIZYES90SRo60%2FircA%2FT1CGfAp7BLWy9VOFcW1PGpvEMz4izDcls19GcjOZ7mzDBsja6%2FE%2FcI8I4BRG%2B5BP0NTuPPAV%2FPRly4SC65oMdDi7H9UznftSe0VvhYSurebJ4XK%2FrgAF%2FWegziD3pDbYnAouN6z55WVeNcbtjeaEJi5mvEuY8o9L2ais3ehuzSkWWZBUk%2Fo%2FGHR4Ul%2FglD%2BBCoVauo4V%2B6M%2FH5Qfz6MrFEEevs6K9o%2Bt8bZt5y9ZrLIO4COZ6sPk054Qb%2FTEKZeLW3N2Pm2Gz%2BhINkTOF%2FU5kybF50BOtgDtafm7mqgspkcurzaAOo%2FbRReLbXk31LJi2YwrhkNWfoiZhG7snzltkrq33HbrR5M65SdQDDCHBKZI0%2FPrI0kWcVN%2F11QGpqIAiByAkcE6Hd40CqEq2rmuArc3TYFhMkPdaOXQEhkA2GyjtQTUl3hDtK31aTtbWswMoiyLTwrWTFwc%2FJvLyezhVQGhViDltlN3ZS%2F88kXfk5f1%2F%2FftjsatnEPI3NBhwupAEoRVEnm4cLerHKdsn4h0uKVwoZqhpav7A70RA3a4c6Yk%2Bb%2B%2B%2F7kIn2oJRrkOcLXqaqECeuMsbje0XmuES7qiqh%2F%2BUi8trOoIvR2vJnJvwVEKoofq25FKd6QbvIMMzNwMMGOqUBOhtxcvcITSh%2B4%2BewiQs5dH7gRLG2EqBx0f0i%2B6s7hPwp97ndSmRddVng6A%2BJKQSvgFNPFwqcsqwA5SxW7dbSopvkvG2fES2IZdiPh3ENuxzOr0%2FY2P6nG8ueRBJwfgtKJralS%2BZShcS4KaJIjB5jFOHLRiCNksJkHWD953o2L2T9FEu3B%2BW6Cr5zvgbszhblhk%2FVrAbobMOLRKg4ImvYJjHZQMyA&X-Amz-Signature=108337bcf384b9744e48e72b2b3280e31eb77d2da1359d55c69871f2c278b4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XIXKJ7Y%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcdLIiu21tDJFhGpt0deH19eGICEZsKSlKsd4EEtkfPgIhAInSZR1LTQmXHxRXwPgaAgryubhXZwxwrOL6edQObcNtKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkdGS7AZwZjVic1LAq3AMNWeQfvCHJNe8yOlbhOnnnyz8ddH2jryTOWle4vpNACmUA1zPeIROs0EX4ufRZrhopppvaeCOur%2FhlZUtmiKnTI15khroes7Rhe9CA%2F6CkRlDHUHEHqPtC3%2BJKFWmTcT8gidPJ8Jv1kpep0IiiIvDnqg%2F5XqujHSKU551FXQ6AtOVCQnsvqGEPwby9QjaggC5zrgfGclh8e4unIUIOgOJwGlILIPZr%2B8IWpOcNGZMh%2FZwgOlQdUR8qDxRRRtEN%2BXtf5Eq1n3wdNp%2FWoZ4sKdvyKk9%2FKqZu28a58dZwJ3%2BMbkVSUY2qXiRa0PRpzBIZKGc7EXJAKygjp8kntA%2B0PPEvj9buQnuAPDhp53cUjhbQMMd5p1OxoLJaBE2rM3Bv3VcuqpoFKal%2FeD8nb45f9AIBLVWpOI5a4sAKar8b%2FnMkR1xKFEaijJpz%2B1IgOxfE4J%2Fcs9Svek981R47gAWtK%2BQv00GbIXixwskCaUK2C4Pzs6ptu5nL2fhKh3BJvcqb0fjUSu8OaJAcU1oir1eBEa%2BRv%2Fx3zY%2FRhJInc7mt%2BF5fm0kq%2FHVOgLuCsVpfz8zmlVJnDvOkURq0ztuJUXiKxvNcZEBHZCpcOgzA6pj5LhV6fr2PdbsokQN3d2rQvDDvzcDDBjqkAQmS5%2BKWQVo7G%2F6TRQrR3DhGDOgV03ROT4hGSwpcpcZCGFWziNZCzq31ii0sc2BZ4exbBbJCkkY6XHAJw3f%2FBSOUlnSl5WaSpqfNcSIRiazY8pZPyyuHyDLAQUEcz9yPnviAZDzJWl9giDV%2BqDJD4MdbzoF3c07VstT4MfvCJZG9COmD8itasg8bQsWA5VKInJjbgHWrWk04YsBjxO4dkZm2GF%2B0&X-Amz-Signature=b9b882e231cdfd283e60c4affd5521582df5325b953ad08acfde3617f046c668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALIGAT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmLuJL3CPeEEBbZw9iCJOYjrEhMhTiRLz9Y6HFEMpQUAiBAGeZJ22FDj4ADFx9b3QE3%2F%2B%2BYUb3AKssBqnPnQCGACCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJb7HJAtQ0rpT96bPKtwDl6OxM%2BT%2BfIImTgSAQGgCF%2B20cqC7CWavOtbQxlXvaQtAoOQvVy2I7rME4iIiLTPLoo4RPyDxDC45zRz3bv5UK3gWWf2B%2Fg6RM1EpGdPUd7JtEC%2FZxMXLIIj1gFgB7WzVHz3MAkDrdr%2Fonvsdc6%2FKCnnUNv80etjqLMfIFmtotBw%2BELtcSnDv6n87pl5ndhJzCYxcDIUDRnvI4nRuMRnG8g1zN2DkFN4zKSqf6gkI3AF7khQDKu8eC1ZtVpdhL1AcEvS8IUDMzyHuId1H%2Bno%2Btr1h7t0LcSCcIJSm112YRXZtTGj9aL5HO7UsNbRECM%2BUBMc3L6blnJ6pUquij4KveRcqab8%2FwG3Usoxote9OiaoqKQVBcYB0gFYB8mXONzuOgzpGQSUiC4wLRwf8G09C9UplaOhG1NnQHLTQJGwcpRa1tRSCTH4hg%2F67NxUXJB37QjyAw1z1zyQq3VkMhPRcCjLJUEp1fgy8rGlR7pKUx7yMTZ5mDsRvvpB4MX2NE53q1mvDxlovrYXEGDxpzJrI%2BQLBQrJP85iWF%2FHL4XoEPHnC%2B%2FntwbZ9Wd17hsITKBZZz1YwGYDd%2FhDcr2kZfShOKpwcpTigMH5ZjqrnlSB01v1svaIp3DhIxnulHU8wiM3AwwY6pgF8dbhzbQvyz4FESAsg9GNAyFrKJcyRsvAveo%2BZkpo0DTAABVMIMY7oZ%2Fyf9DVq5bfuBmAMFIgO5JuEF4vWwQI9AKF0ZY4uezxHsPHZ51YbNgeUS4gql20i7DztwA%2FBBXyGxgCcftSqDUIK0PBK1M0lQShkuZbpoItJJHffTzvF1rSRQknhCaxfKmPBW67VoSS650a1blUK7ZUZKg5iYV%2FZ1cotvqsp&X-Amz-Signature=946176944dd0abb7f3ea1edda19650290b4a9fcad624cbd57cd686b1b3433458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPBYGTG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCetLAKowdiXg%2BJ3uFcOOaFpgNtsLZJE%2FfPcgB%2BpL%2FkdQIgB7xW3tDxu9HJ3v%2FUieyfBJaUj9MGKWmGcjR3sAplSaQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGhIZYES90SRo60%2FircA%2FT1CGfAp7BLWy9VOFcW1PGpvEMz4izDcls19GcjOZ7mzDBsja6%2FE%2FcI8I4BRG%2B5BP0NTuPPAV%2FPRly4SC65oMdDi7H9UznftSe0VvhYSurebJ4XK%2FrgAF%2FWegziD3pDbYnAouN6z55WVeNcbtjeaEJi5mvEuY8o9L2ais3ehuzSkWWZBUk%2Fo%2FGHR4Ul%2FglD%2BBCoVauo4V%2B6M%2FH5Qfz6MrFEEevs6K9o%2Bt8bZt5y9ZrLIO4COZ6sPk054Qb%2FTEKZeLW3N2Pm2Gz%2BhINkTOF%2FU5kybF50BOtgDtafm7mqgspkcurzaAOo%2FbRReLbXk31LJi2YwrhkNWfoiZhG7snzltkrq33HbrR5M65SdQDDCHBKZI0%2FPrI0kWcVN%2F11QGpqIAiByAkcE6Hd40CqEq2rmuArc3TYFhMkPdaOXQEhkA2GyjtQTUl3hDtK31aTtbWswMoiyLTwrWTFwc%2FJvLyezhVQGhViDltlN3ZS%2F88kXfk5f1%2F%2FftjsatnEPI3NBhwupAEoRVEnm4cLerHKdsn4h0uKVwoZqhpav7A70RA3a4c6Yk%2Bb%2B%2B%2F7kIn2oJRrkOcLXqaqECeuMsbje0XmuES7qiqh%2F%2BUi8trOoIvR2vJnJvwVEKoofq25FKd6QbvIMMzNwMMGOqUBOhtxcvcITSh%2B4%2BewiQs5dH7gRLG2EqBx0f0i%2B6s7hPwp97ndSmRddVng6A%2BJKQSvgFNPFwqcsqwA5SxW7dbSopvkvG2fES2IZdiPh3ENuxzOr0%2FY2P6nG8ueRBJwfgtKJralS%2BZShcS4KaJIjB5jFOHLRiCNksJkHWD953o2L2T9FEu3B%2BW6Cr5zvgbszhblhk%2FVrAbobMOLRKg4ImvYJjHZQMyA&X-Amz-Signature=21d7279082d481be83d5797b17a088fed6dca91df3aac6afd1ab24e859cd495b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
