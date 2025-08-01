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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIGQ7IR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOirIWX8cNtBQym3lSHsyxr%2BMEoA7i%2FPJfQHFNp4OdKAiBBqCMwQSP4YlNuED%2Flw0D%2FfsSySCqlubCFATrnHMsodCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIOHYzigzU2wgSZGKtwDbEUlr1Iel%2BxEibgG57jf1LXpuneR8ziCctOkgVD%2Bps7PJKPaTceAeSEtiFzmDBYdfUxFbNaqOG2rjQFBrJNtMupY%2BV3M8B2SVpVNOVhZvQ89g0z90Jdj4tAmjKNH4pFcryBdY37c9HtH%2Bu%2FgeLWZxYxT6MerTX8PVqVyL7q93lhvTBvzUlTQ6tE4X3x7EfEagdyJNs%2B7j4Y52%2B0yFhWeo7B2PHrCn%2FcQfQx1JDswyche19L9CpZNVgZoYGGriM0Fu3cWeQVz667H5a7%2FmaZzuDfti948xk3fzZCEUemRU8daD%2BirzUYdHtyfvXamrnTrjbWlfEL72JXPr0lDupDCiS1mrKJE39bHtJHHSOLX8TytQSuWdGbT6Y9oCF2i30wD67Wm%2FeLHFyZTKI1amn2mfjZQlK%2FCnB1Pa5Ee%2FKHSbPb0VSYTv8EmVYZxk591E8Oy3oDaDy9hqxffoAdZAYIdjzuYVKGBb9BaUPOe4HlUo9bFLeElX7pgj%2B%2FE1nhmrisxhMvqadjOvERrQYu2InKjODZg5CPaQ6mF5291s%2BIaNRCeDO%2FK%2BsT2NkwH6Wt1PWeWVQGufvejm0GhEYJVmxpT4YhzCm9lMFfKahsfAww%2BoBnUm2kHxQRQOQLFRbUw%2FpuxxAY6pgHD%2BpmKctmdAVvj2ZjpppsfzzqVaWmMssu5aauFPJdJMNMQn1q9tYurDhf15tpRpmq5jil8uxPGECENFflr%2FqQAoxt87dKcRW3Dqnf432iCr1%2FKMIV3y25T5ZH%2B2R5KYyRTzO55b%2FZAWh%2BM%2FLSmoEpEt09oc71F3zAVs4FRvj3Xt%2FLeatMwLSTLBmAO3lI5FE4oXY8cBwsbIRjwk0HxyTeMMdgNjX60&X-Amz-Signature=a4b3684b13b8b074b9d29125a22a07af588fb4e5a579829b6ef6ef89c1376218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIGQ7IR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOirIWX8cNtBQym3lSHsyxr%2BMEoA7i%2FPJfQHFNp4OdKAiBBqCMwQSP4YlNuED%2Flw0D%2FfsSySCqlubCFATrnHMsodCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIOHYzigzU2wgSZGKtwDbEUlr1Iel%2BxEibgG57jf1LXpuneR8ziCctOkgVD%2Bps7PJKPaTceAeSEtiFzmDBYdfUxFbNaqOG2rjQFBrJNtMupY%2BV3M8B2SVpVNOVhZvQ89g0z90Jdj4tAmjKNH4pFcryBdY37c9HtH%2Bu%2FgeLWZxYxT6MerTX8PVqVyL7q93lhvTBvzUlTQ6tE4X3x7EfEagdyJNs%2B7j4Y52%2B0yFhWeo7B2PHrCn%2FcQfQx1JDswyche19L9CpZNVgZoYGGriM0Fu3cWeQVz667H5a7%2FmaZzuDfti948xk3fzZCEUemRU8daD%2BirzUYdHtyfvXamrnTrjbWlfEL72JXPr0lDupDCiS1mrKJE39bHtJHHSOLX8TytQSuWdGbT6Y9oCF2i30wD67Wm%2FeLHFyZTKI1amn2mfjZQlK%2FCnB1Pa5Ee%2FKHSbPb0VSYTv8EmVYZxk591E8Oy3oDaDy9hqxffoAdZAYIdjzuYVKGBb9BaUPOe4HlUo9bFLeElX7pgj%2B%2FE1nhmrisxhMvqadjOvERrQYu2InKjODZg5CPaQ6mF5291s%2BIaNRCeDO%2FK%2BsT2NkwH6Wt1PWeWVQGufvejm0GhEYJVmxpT4YhzCm9lMFfKahsfAww%2BoBnUm2kHxQRQOQLFRbUw%2FpuxxAY6pgHD%2BpmKctmdAVvj2ZjpppsfzzqVaWmMssu5aauFPJdJMNMQn1q9tYurDhf15tpRpmq5jil8uxPGECENFflr%2FqQAoxt87dKcRW3Dqnf432iCr1%2FKMIV3y25T5ZH%2B2R5KYyRTzO55b%2FZAWh%2BM%2FLSmoEpEt09oc71F3zAVs4FRvj3Xt%2FLeatMwLSTLBmAO3lI5FE4oXY8cBwsbIRjwk0HxyTeMMdgNjX60&X-Amz-Signature=e60a06066356245c2f0771186a4b866225d1f312b6b1c9f7d851a1b1e695aa5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIGQ7IR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOirIWX8cNtBQym3lSHsyxr%2BMEoA7i%2FPJfQHFNp4OdKAiBBqCMwQSP4YlNuED%2Flw0D%2FfsSySCqlubCFATrnHMsodCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIOHYzigzU2wgSZGKtwDbEUlr1Iel%2BxEibgG57jf1LXpuneR8ziCctOkgVD%2Bps7PJKPaTceAeSEtiFzmDBYdfUxFbNaqOG2rjQFBrJNtMupY%2BV3M8B2SVpVNOVhZvQ89g0z90Jdj4tAmjKNH4pFcryBdY37c9HtH%2Bu%2FgeLWZxYxT6MerTX8PVqVyL7q93lhvTBvzUlTQ6tE4X3x7EfEagdyJNs%2B7j4Y52%2B0yFhWeo7B2PHrCn%2FcQfQx1JDswyche19L9CpZNVgZoYGGriM0Fu3cWeQVz667H5a7%2FmaZzuDfti948xk3fzZCEUemRU8daD%2BirzUYdHtyfvXamrnTrjbWlfEL72JXPr0lDupDCiS1mrKJE39bHtJHHSOLX8TytQSuWdGbT6Y9oCF2i30wD67Wm%2FeLHFyZTKI1amn2mfjZQlK%2FCnB1Pa5Ee%2FKHSbPb0VSYTv8EmVYZxk591E8Oy3oDaDy9hqxffoAdZAYIdjzuYVKGBb9BaUPOe4HlUo9bFLeElX7pgj%2B%2FE1nhmrisxhMvqadjOvERrQYu2InKjODZg5CPaQ6mF5291s%2BIaNRCeDO%2FK%2BsT2NkwH6Wt1PWeWVQGufvejm0GhEYJVmxpT4YhzCm9lMFfKahsfAww%2BoBnUm2kHxQRQOQLFRbUw%2FpuxxAY6pgHD%2BpmKctmdAVvj2ZjpppsfzzqVaWmMssu5aauFPJdJMNMQn1q9tYurDhf15tpRpmq5jil8uxPGECENFflr%2FqQAoxt87dKcRW3Dqnf432iCr1%2FKMIV3y25T5ZH%2B2R5KYyRTzO55b%2FZAWh%2BM%2FLSmoEpEt09oc71F3zAVs4FRvj3Xt%2FLeatMwLSTLBmAO3lI5FE4oXY8cBwsbIRjwk0HxyTeMMdgNjX60&X-Amz-Signature=177e7f73ef78532540a76b2ae863a852ac36246147e445b7c842e67ba3506d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL22OHZQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKD9j%2FP9wYeWvAPNfCfQ5x%2BStDUCZp%2FnOXWtc59XtbKAiEAnBNQeZtA8sAHy1ws8b03wKR251asuqVcX2490fxhIY8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuqhI1MpD8H3s5RQyrcA3%2BFGTWdC%2F8k2fYcuNmxum%2F%2FJD1cqTlHZk%2Beg%2Bl8c7u%2F8oSJ61%2BHZBnEXICeXR52vUWCc35Y%2FlkqIfEWWMAedEbJsQ02Gr6%2FFRxkTGMW%2B5BFLo6trriooTv4zojqiMBGlmU9rKRGE3RKuT2G9LiE8QSI8Ke5gF%2Fy7HeiMet89Dyyu5hcYnwxuowwXJH1SJ4i6DUu8GwxlUkAMiY02XeAvlZmfw%2F%2FjDamMpPC3tKJbt5qlc7PC4YssjVYfzCPL46s6cwKUjKY3HLYYofu5gk9SJRrS5UJPWg4GPV9tFPiLjayXdcvHF0dBr9x8zmOzcz1xQirRk7xXXt0BBtYKK44uSpECAdwCgF506CxcqG%2FP6D7nKdBHrvtyHSEyHvReYpUZ0Dp%2BJeSVoX8C2vXZRM%2FacwojhZoOhjYdMl%2FoX2h8r9ApwEomL4TUnc9PQ2jo8NkuYJC4Pc%2Fho8mFOuo8oLedXHdxjb3GfIcCmmK6erKeJ941jfcPGHvKyBzduW%2BHg4ZNoVseX01FYsCtvGu90P79G4KK8prcqppeNUMC0KII7sY3IC3JH8qB6VRkdNEkQuTxHr36kVlJfvYkbKP2HVPbIOU06KwJ4jgHAExzyldnzFWYSDrm4z4l5f1jSfhMMebscQGOqUBQCHMM8VLjfwCW1yiBjWtHyObouLAQ%2F4uSoqXBEy63Y86uCdfsntIfvKyT6b81dqpgQYV%2BUnN469VX66G6PilzQwTN2IBpLTgF7GHNN8uJamSUAtaKRat9GnrxjShn3EwrsmGfqsje1S%2F2WnJm1ntKaVv9JEhZ2sNLBdpNTtwEnT8%2FMuR4UdZ9w70M7VZrDbxt5CbUsjC21rSJAhZwK73YddwaR%2Fk&X-Amz-Signature=eabb66dc6313ad8ea41f9bdeaa87bf1ed6f100699dd45dfc10077a5ac759055d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7FFHET%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMKjP98O7ihZJfcCX7uRMHXhN9%2FiB81Xh1gJq%2FYh5tpAiBS6yfkXjULXR%2Fubeeq%2FLIw%2FfsBKeMXkTMmFEWFuW83CCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY9ABlsBiVuQ2i05dKtwDKW1ghO%2Fl5seWm4cfx0QT%2BWAYgA7VCEhUwJYmJafBcUUBVI4gSBg7Kj25%2FSmM80pA9z9SoQSvX5YhjU2fX6hTjkDfwkIiNUGireWjJ0eubg7SHgasNTO4ECDGaZldiOmEKFh96%2FGIsF8ARtfZHsycO9xE3GUlscw%2ByoAGs2dWfUebFLVHUS04xBq0FQdDXv3ZxqHsopdT%2BSHoIAEfpR9zyZf8SzIgHF%2FmUwtJ5HAAuZBUovM4NsBvlnjQ4zF2MaBoaLxUsa67ExGY7%2FsWDDqWkdJIUdfzO6b4teXIKusKnEyrrRD8IM8uYCP061bJ2dz45aL45k62zKnjYm6xb8WqIob3L6C7aAr%2FZl5kDaIUQmJvMejlLGD9uOpgbbxb6W%2BbA3nVwYqK%2BXzVoAO6Csu%2FAjqi45SbptcuEkTTTCJo0Vhgb1n3GR%2Ftv44i2jJONU2dusn%2FZ4pfPDomfUHqkWXK4vRKUpMlasFzKVOx%2FMb3pzL4n4NSlarmjzSgZvxodKnbKNM4fvxnaa%2Fvqc5P4HSZPvblg2Zeb83o7OPRv0DrjHF4DjylPJxjO5TXldMiWHLcoAMuw%2B3OEjTouRUyJmszhL38R1DhOMkwk5fc0qyJi1n30Icg7CWxiA2Y3IUwlpyxxAY6pgHbIDGK49jhTz%2BpqaGOC1ktwfz%2B8BMEgxp5bvGGVbVLEhBTXTSftirTd6BSbSIr4iAV%2BTbmcaEmsgJSXnWHufnF2i2GhNjBnAGj9NuDKjujxVdBL0EkP%2F7K0Td92OEvC7zb2muDoOd26BC%2F0KTi7wLozIxUUSXKSf9Se5GuMwdt9qCKiMLPui4Y1gteuRGj6PA3HcBtNAlQn1bFxVyrmU4ohsbqV9MI&X-Amz-Signature=ed4b75ed986a78a05f3e26a0161f62e33061992d5e63ec83b73bf103a9a1e33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIGQ7IR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOirIWX8cNtBQym3lSHsyxr%2BMEoA7i%2FPJfQHFNp4OdKAiBBqCMwQSP4YlNuED%2Flw0D%2FfsSySCqlubCFATrnHMsodCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVIOHYzigzU2wgSZGKtwDbEUlr1Iel%2BxEibgG57jf1LXpuneR8ziCctOkgVD%2Bps7PJKPaTceAeSEtiFzmDBYdfUxFbNaqOG2rjQFBrJNtMupY%2BV3M8B2SVpVNOVhZvQ89g0z90Jdj4tAmjKNH4pFcryBdY37c9HtH%2Bu%2FgeLWZxYxT6MerTX8PVqVyL7q93lhvTBvzUlTQ6tE4X3x7EfEagdyJNs%2B7j4Y52%2B0yFhWeo7B2PHrCn%2FcQfQx1JDswyche19L9CpZNVgZoYGGriM0Fu3cWeQVz667H5a7%2FmaZzuDfti948xk3fzZCEUemRU8daD%2BirzUYdHtyfvXamrnTrjbWlfEL72JXPr0lDupDCiS1mrKJE39bHtJHHSOLX8TytQSuWdGbT6Y9oCF2i30wD67Wm%2FeLHFyZTKI1amn2mfjZQlK%2FCnB1Pa5Ee%2FKHSbPb0VSYTv8EmVYZxk591E8Oy3oDaDy9hqxffoAdZAYIdjzuYVKGBb9BaUPOe4HlUo9bFLeElX7pgj%2B%2FE1nhmrisxhMvqadjOvERrQYu2InKjODZg5CPaQ6mF5291s%2BIaNRCeDO%2FK%2BsT2NkwH6Wt1PWeWVQGufvejm0GhEYJVmxpT4YhzCm9lMFfKahsfAww%2BoBnUm2kHxQRQOQLFRbUw%2FpuxxAY6pgHD%2BpmKctmdAVvj2ZjpppsfzzqVaWmMssu5aauFPJdJMNMQn1q9tYurDhf15tpRpmq5jil8uxPGECENFflr%2FqQAoxt87dKcRW3Dqnf432iCr1%2FKMIV3y25T5ZH%2B2R5KYyRTzO55b%2FZAWh%2BM%2FLSmoEpEt09oc71F3zAVs4FRvj3Xt%2FLeatMwLSTLBmAO3lI5FE4oXY8cBwsbIRjwk0HxyTeMMdgNjX60&X-Amz-Signature=0c09be83011d88baa33b83c7ec410ef955776200d1b273c80287ae744579687a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
