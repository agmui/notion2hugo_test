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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXOX5C6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICa7NY37ezenSIIsbHE%2FASpXprvQvOROVfsZ4xruy8gXAiAIm3k8Up8xWbaKoJ7QebYnVXfhBSFszGwXtk5rcTJ7Uyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmNk3VKEtywiU0umcKtwD8jFjHHNr7%2Bn7hlIqAmg%2FUbdhQpIlpo4kYZ0ycPDijtKpYqPTs1%2FYdkp%2BcfVEinDMeGQPoDUrpNeTqmH9k8bEUWqDlwNOPwbIgLb9JNl5%2Falsh3iizP6KjIuxJsHDr7rRKa3%2BUtyys6dF9mbcby%2FXlkefq88A686VS%2B05QOPZt%2BR5N3SivXzNYJUcb7z25OLJm5MvgCVdVi4BWJr20oKVpbLeJfpfMNWnfpsu2Ze8bKdne%2BZ4QIx133yqnkKr62Y7JyBh8sJKGfAQZEJNed63nT%2BVXCOn32Ldg2mWAgIpSv2GFXaVpApUdzLDQbU0HAK2WQ0q7H2otTm6WLsxNmXjwPmX4JmbZwNAD36nxDyqHk3AES7swoiXi3Dg3B8LrgEY2wQoASn5nHwTqnLLE4y7CWXc%2FJZi%2BPtZQPLEgKRaEKoadk88kThmbELE3zdkCa3kcb8v4EqsFLKgnQWF0h0wWz0dAa8EQtW5%2FiVsVZuTIXjoHSHx5MoHbA6JlumndPwXOM%2FMbDLXPHHlkKmykM6KVasN5u%2BxQE%2FvoYMhXzEGLDdJTTRgwGOGIlm08b3UghQEKRn1FhP%2FBUV4415IHZTYBtuQEkmD2N0Vo4byfZyEQkuWut5TTip0AN1W4RQw%2F6y5wgY6pgG6tflo%2FGBAeS%2BIivR%2BrCl0SR57odOQjHWpvwD7ss50n8GcHZ63fNGAyc4aRNRhD7BqzKcZETSZUnRsY%2FIxsIfPtZk3bE2b77D1ITkwoLHEK%2BJi618zDe4TaJs8ueElJj%2Be1oUD%2F3WY%2B0apt5Gh9SjM6uME0X95n20dGP6Y6HFtI7UPFeKl06UTroMXCx09zjM2FcUYh8lXvJhGzUkLNVcOAt7uS5ka&X-Amz-Signature=58c2795284fd1c082a0a13a7f8062926c75d2b756af14dbe7227ab7028edf081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXOX5C6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICa7NY37ezenSIIsbHE%2FASpXprvQvOROVfsZ4xruy8gXAiAIm3k8Up8xWbaKoJ7QebYnVXfhBSFszGwXtk5rcTJ7Uyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmNk3VKEtywiU0umcKtwD8jFjHHNr7%2Bn7hlIqAmg%2FUbdhQpIlpo4kYZ0ycPDijtKpYqPTs1%2FYdkp%2BcfVEinDMeGQPoDUrpNeTqmH9k8bEUWqDlwNOPwbIgLb9JNl5%2Falsh3iizP6KjIuxJsHDr7rRKa3%2BUtyys6dF9mbcby%2FXlkefq88A686VS%2B05QOPZt%2BR5N3SivXzNYJUcb7z25OLJm5MvgCVdVi4BWJr20oKVpbLeJfpfMNWnfpsu2Ze8bKdne%2BZ4QIx133yqnkKr62Y7JyBh8sJKGfAQZEJNed63nT%2BVXCOn32Ldg2mWAgIpSv2GFXaVpApUdzLDQbU0HAK2WQ0q7H2otTm6WLsxNmXjwPmX4JmbZwNAD36nxDyqHk3AES7swoiXi3Dg3B8LrgEY2wQoASn5nHwTqnLLE4y7CWXc%2FJZi%2BPtZQPLEgKRaEKoadk88kThmbELE3zdkCa3kcb8v4EqsFLKgnQWF0h0wWz0dAa8EQtW5%2FiVsVZuTIXjoHSHx5MoHbA6JlumndPwXOM%2FMbDLXPHHlkKmykM6KVasN5u%2BxQE%2FvoYMhXzEGLDdJTTRgwGOGIlm08b3UghQEKRn1FhP%2FBUV4415IHZTYBtuQEkmD2N0Vo4byfZyEQkuWut5TTip0AN1W4RQw%2F6y5wgY6pgG6tflo%2FGBAeS%2BIivR%2BrCl0SR57odOQjHWpvwD7ss50n8GcHZ63fNGAyc4aRNRhD7BqzKcZETSZUnRsY%2FIxsIfPtZk3bE2b77D1ITkwoLHEK%2BJi618zDe4TaJs8ueElJj%2Be1oUD%2F3WY%2B0apt5Gh9SjM6uME0X95n20dGP6Y6HFtI7UPFeKl06UTroMXCx09zjM2FcUYh8lXvJhGzUkLNVcOAt7uS5ka&X-Amz-Signature=cd14f4b44b12c482e1932b7df70f49296aebfcddcffe0d6c80e0d1b102932450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXOX5C6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICa7NY37ezenSIIsbHE%2FASpXprvQvOROVfsZ4xruy8gXAiAIm3k8Up8xWbaKoJ7QebYnVXfhBSFszGwXtk5rcTJ7Uyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmNk3VKEtywiU0umcKtwD8jFjHHNr7%2Bn7hlIqAmg%2FUbdhQpIlpo4kYZ0ycPDijtKpYqPTs1%2FYdkp%2BcfVEinDMeGQPoDUrpNeTqmH9k8bEUWqDlwNOPwbIgLb9JNl5%2Falsh3iizP6KjIuxJsHDr7rRKa3%2BUtyys6dF9mbcby%2FXlkefq88A686VS%2B05QOPZt%2BR5N3SivXzNYJUcb7z25OLJm5MvgCVdVi4BWJr20oKVpbLeJfpfMNWnfpsu2Ze8bKdne%2BZ4QIx133yqnkKr62Y7JyBh8sJKGfAQZEJNed63nT%2BVXCOn32Ldg2mWAgIpSv2GFXaVpApUdzLDQbU0HAK2WQ0q7H2otTm6WLsxNmXjwPmX4JmbZwNAD36nxDyqHk3AES7swoiXi3Dg3B8LrgEY2wQoASn5nHwTqnLLE4y7CWXc%2FJZi%2BPtZQPLEgKRaEKoadk88kThmbELE3zdkCa3kcb8v4EqsFLKgnQWF0h0wWz0dAa8EQtW5%2FiVsVZuTIXjoHSHx5MoHbA6JlumndPwXOM%2FMbDLXPHHlkKmykM6KVasN5u%2BxQE%2FvoYMhXzEGLDdJTTRgwGOGIlm08b3UghQEKRn1FhP%2FBUV4415IHZTYBtuQEkmD2N0Vo4byfZyEQkuWut5TTip0AN1W4RQw%2F6y5wgY6pgG6tflo%2FGBAeS%2BIivR%2BrCl0SR57odOQjHWpvwD7ss50n8GcHZ63fNGAyc4aRNRhD7BqzKcZETSZUnRsY%2FIxsIfPtZk3bE2b77D1ITkwoLHEK%2BJi618zDe4TaJs8ueElJj%2Be1oUD%2F3WY%2B0apt5Gh9SjM6uME0X95n20dGP6Y6HFtI7UPFeKl06UTroMXCx09zjM2FcUYh8lXvJhGzUkLNVcOAt7uS5ka&X-Amz-Signature=9debcc669d9b9cb6bb0b938022e1780351cf0e67fd0f9c6825cad9b324d65cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3EGJYL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDF4q2IYBJ6ra5ZImCMcF9e%2Bj1G%2F1dw%2Fsg7zDtHSBXVwgIgATHRWZc30pKEymcoZYJE3LL20JQnSoOQuV1xy8wHPbEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG%2FYQJxtcJf7cO9IsircAxy9vAPRuxJO%2BV908BFFRtWDdZe80NqS59RBEPPqxb63R9L5Fa%2FWaFjH8AOTTI5OlB3fE%2BRtygVBbQReCN7zZ8G0rbDr%2B8ieZyNdmeJ74ZB9Rnbgsw6RUzET%2BisbCOt5gPhkiOFyQlRNapNo72CUW%2FMc28hc%2BGTJlhmTAbZFKXsZ0yoAMRHvAkcD8516%2BVhwTX6PR1BuQDTOhU8zaDXeFgzYcCR1wLc3RtY58vO%2FmKu1x2GOQPsSnHmhuHB1GMj8gTItXmAeP7Kz6aKAxmQ2LHojm8Nftjc1pzrWBPDNSHIRWKjtndBiKUtjGSWY6z2jIplJAAHBEebnqvT9HkcTnbUt1sISiH2K3YnoKHTnhh%2FJpXu9%2BCgx%2FEZy3hLDjWC0hva2BxAbvgiZjo3%2BWLVmlfYlKk3kbendiS2TXZc%2FnfX%2FwsuNNal9JBbah8bqo%2Fj8SlpAuyyRUkKr7Hg7NWsqhniuBA%2Bl%2BSmWtbmyorrXMPgPosW6DBNH3pz5h5UX0gz2cmFbJDQGYrW2Hx14QtJpbznMPBv01PDMsttbuphc9qRMUunaVDz4qLNSH4C58RKzONelUdSh%2BpxIYjthLMsP8%2FdNtkYDByGeplzUcE70OpiTOebAqg5CiL1o0fO9MPP9ucIGOqUBrg7MnASq%2B1ebcCrz75mXNA1QynuHQkdhvkgVuuMwl%2BsVV4Ql3QXyRG5r0pbg67qcbL%2BH6a2GaWiZQHTKpZxeKnmsAaYjdMRheK6XJKpWZotRbsVOXvSfFGafmf4mESCjX6VgstibfO66wit5GZFw1F8LPP8%2FvSGQav9sg6WEdgJtlVOKzQ7q%2FuVP9%2BbSI6iG6KXc65ug2kOMsI2LBWcYZe3ag1Ra&X-Amz-Signature=1fdce0de9636dcd62fad872aded1bdd8a284687209b54e528ea6eca90909472f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637G2XUPU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC%2F651KtpS%2BxrjLiSLSnjlzZ%2BiMOxBIqHGEew5J7j15CAIhAJrAe%2F3Uic7yi5wUcMWwzkIHjHCE%2Fck9vWLRPt34ePhxKv8DCD4QABoMNjM3NDIzMTgzODA1Igx09BsEdp54IGs05XQq3AMbW4Cr4Gp32cmJZ9dc0y0H5XxSP1ZOEjXygajBf3b4SG6Wl%2F0H1x5zxvvc72LAnT0nmWTNDTBGpyCyUI59U8h1H9ZAquqm4EQOy5cjq8scUcxcTzyRIJfY%2F8H7eDoBH0xGdteXVkq5XpVOtdKIFdv5RRVeHixFf%2F0eUyU7cq91VuHWhYeR2lKeR8%2Bw1CfE0QO%2BqPWzC1t9d01Od14U%2Flwhu3DcVceBFgYNnrVF49YdcBLxHQAxHZg5WlWBkIe85YDIE%2FHLsNDH5bKBXMLpuJPnjeIv%2Fk3MTPzWQq3M7nSNnrwhJyuWUfQLxHdXZ%2BouYMVBg0DnMVuwlGc9S3BgXNSWaVlcWCdIINPC0pUhxVSArOihH3VpRSIOLMFYXZBC969%2BQVWiZ24i4ZIFpKaG%2F%2F5S0gdC0bxFMaeTuE9dlfKyYFz%2Fut%2FSd3BrQvODVwe073sutpdRfmahX6XiLKhAef%2FACk7G2Rrw2q3YTqIwkVy88GJjQX7z35QLdoUmxwhQaIaHTKrH57rN52yQiCwYLZ94u%2FQhpL5k8oGfLwxwgNe4gFY4aYlqqnqo0LwPH%2FN63hza5Yd0xLJhvU1%2FViP%2BeEQ8%2FzhQ7PUtqJEMbBEkCn21cdbznPDGKWnsNc2fCjCvrLnCBjqkAVbRSuvslXL5oB3dhJubp9JB7RWa2KS5uZMLPN2mdIvhsvu5rvR5Zt%2B9v3pL0lLlZw%2BHz%2BsWD9JLAkjlXUUnos3Pp36OVRV%2BULecKXjm7vLHu%2BaVaxALKgFvTrqcnngDCplum%2BBMWGLWelipHfJf%2BYYwyFOTbQ74y1tcqffSY6Rh0ZD5%2Fj8T0RBGm6mTlCq0%2BBViQdas1P2DEg%2BR5nVmxT3MMSD2&X-Amz-Signature=00a53fdbb4bb196e71d95e58341aaa76934dfabf0f83130b854d829638811b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXOX5C6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICa7NY37ezenSIIsbHE%2FASpXprvQvOROVfsZ4xruy8gXAiAIm3k8Up8xWbaKoJ7QebYnVXfhBSFszGwXtk5rcTJ7Uyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmNk3VKEtywiU0umcKtwD8jFjHHNr7%2Bn7hlIqAmg%2FUbdhQpIlpo4kYZ0ycPDijtKpYqPTs1%2FYdkp%2BcfVEinDMeGQPoDUrpNeTqmH9k8bEUWqDlwNOPwbIgLb9JNl5%2Falsh3iizP6KjIuxJsHDr7rRKa3%2BUtyys6dF9mbcby%2FXlkefq88A686VS%2B05QOPZt%2BR5N3SivXzNYJUcb7z25OLJm5MvgCVdVi4BWJr20oKVpbLeJfpfMNWnfpsu2Ze8bKdne%2BZ4QIx133yqnkKr62Y7JyBh8sJKGfAQZEJNed63nT%2BVXCOn32Ldg2mWAgIpSv2GFXaVpApUdzLDQbU0HAK2WQ0q7H2otTm6WLsxNmXjwPmX4JmbZwNAD36nxDyqHk3AES7swoiXi3Dg3B8LrgEY2wQoASn5nHwTqnLLE4y7CWXc%2FJZi%2BPtZQPLEgKRaEKoadk88kThmbELE3zdkCa3kcb8v4EqsFLKgnQWF0h0wWz0dAa8EQtW5%2FiVsVZuTIXjoHSHx5MoHbA6JlumndPwXOM%2FMbDLXPHHlkKmykM6KVasN5u%2BxQE%2FvoYMhXzEGLDdJTTRgwGOGIlm08b3UghQEKRn1FhP%2FBUV4415IHZTYBtuQEkmD2N0Vo4byfZyEQkuWut5TTip0AN1W4RQw%2F6y5wgY6pgG6tflo%2FGBAeS%2BIivR%2BrCl0SR57odOQjHWpvwD7ss50n8GcHZ63fNGAyc4aRNRhD7BqzKcZETSZUnRsY%2FIxsIfPtZk3bE2b77D1ITkwoLHEK%2BJi618zDe4TaJs8ueElJj%2Be1oUD%2F3WY%2B0apt5Gh9SjM6uME0X95n20dGP6Y6HFtI7UPFeKl06UTroMXCx09zjM2FcUYh8lXvJhGzUkLNVcOAt7uS5ka&X-Amz-Signature=dcb979de070e2b2bdf9dcb894df393093d80abdaea7540ca939a0dd90c90c384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
