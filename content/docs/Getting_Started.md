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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUOZMTS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1KSnaZQd6yJugHOyNn50mFBS27X%2BGw4dXoS8LPAu8gAIgBIPWlFU08g0VVc3jjw6rO9Jy8s2hdUZ4ZJJ7Btnvv20qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9SUQvlsuw7fgDuSCrcA2zKoRFbWIQA4NowDvsxRubx%2FYQyaQPTp%2FrGJ%2Bzn5ZUc09gbZ5Sy1dOhizYCAR6glGCBA%2FRzKZBZZEGWS7sY4ND1rhFWm6VxHO6OgkK6Cgs%2B1kbFHfzlEIzhCNOpOzZ%2Bag1ksel8Kjsj9zp0IBelIDWFR346EKazEzE4mJIq88PcNqUemwBxB3Ot8FtzCwV8BKLQNEXPFEyEkPr1mgZr0fgBXUJ7w2sKRptrWg8obw0qmFbg7q1umE45FiVJz71AYQwwJI2LyLu62TZdXLzdkuFpO3SirodzGRPgUsUwzqIThFbdOYThXjqAQ4nBENYscF1oyfQiSN%2FZjkDuoEacrIydO7m5fjJyxceZeOrSx%2F5OevoF2LDBqSLLb8bsq3rlhpgPfk%2Fon93ifzR%2BHPj0%2BRm9kDayS%2FhWKylLFyzLS%2FU%2FxMasFcYtLns%2B41kRLFnxmGeXflelGfMSAYNpmK6V2nKavV6KWhAlBUanHJH4swovlpUujR6JfCUfgWt%2B7sHfMc7NxlnohbPzCfvMsVCMpPOFD%2FOkG4fgJQGKba9fLGnik2nW37%2FKSf1xjVWHCf2tmJK4EzpgTuWkL3HDuEPzkIp83beOq4%2FyWO0q01%2FmQbfQlwCUaaf3eh5Xq5xDMNqrvsMGOqUBcUtWm7D0NjkRcl2fBCqbFljvc4TEFmgzZ3gE7ftmsVCJ7O74%2BVNQtGyK2N2l0XqogWsS0GqPjuQzy%2BtPzOyLeol2xH7qzHhvVRCtHSqYW2mth5XM19LreDUVocg0mJZ5HiTIjt6fZQEpFtcYoz9SutKvhltL65zSD16THpt3KUkKYYTqQgEQncmeQD%2FIGDmuEy35Qq6vcYVIvjZMd33WwTzwPTEh&X-Amz-Signature=f8ff133f9b6eb7faf03244831dba57cfd099d61041f8a0aa8dbb8e797110b07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUOZMTS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1KSnaZQd6yJugHOyNn50mFBS27X%2BGw4dXoS8LPAu8gAIgBIPWlFU08g0VVc3jjw6rO9Jy8s2hdUZ4ZJJ7Btnvv20qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9SUQvlsuw7fgDuSCrcA2zKoRFbWIQA4NowDvsxRubx%2FYQyaQPTp%2FrGJ%2Bzn5ZUc09gbZ5Sy1dOhizYCAR6glGCBA%2FRzKZBZZEGWS7sY4ND1rhFWm6VxHO6OgkK6Cgs%2B1kbFHfzlEIzhCNOpOzZ%2Bag1ksel8Kjsj9zp0IBelIDWFR346EKazEzE4mJIq88PcNqUemwBxB3Ot8FtzCwV8BKLQNEXPFEyEkPr1mgZr0fgBXUJ7w2sKRptrWg8obw0qmFbg7q1umE45FiVJz71AYQwwJI2LyLu62TZdXLzdkuFpO3SirodzGRPgUsUwzqIThFbdOYThXjqAQ4nBENYscF1oyfQiSN%2FZjkDuoEacrIydO7m5fjJyxceZeOrSx%2F5OevoF2LDBqSLLb8bsq3rlhpgPfk%2Fon93ifzR%2BHPj0%2BRm9kDayS%2FhWKylLFyzLS%2FU%2FxMasFcYtLns%2B41kRLFnxmGeXflelGfMSAYNpmK6V2nKavV6KWhAlBUanHJH4swovlpUujR6JfCUfgWt%2B7sHfMc7NxlnohbPzCfvMsVCMpPOFD%2FOkG4fgJQGKba9fLGnik2nW37%2FKSf1xjVWHCf2tmJK4EzpgTuWkL3HDuEPzkIp83beOq4%2FyWO0q01%2FmQbfQlwCUaaf3eh5Xq5xDMNqrvsMGOqUBcUtWm7D0NjkRcl2fBCqbFljvc4TEFmgzZ3gE7ftmsVCJ7O74%2BVNQtGyK2N2l0XqogWsS0GqPjuQzy%2BtPzOyLeol2xH7qzHhvVRCtHSqYW2mth5XM19LreDUVocg0mJZ5HiTIjt6fZQEpFtcYoz9SutKvhltL65zSD16THpt3KUkKYYTqQgEQncmeQD%2FIGDmuEy35Qq6vcYVIvjZMd33WwTzwPTEh&X-Amz-Signature=d9899edec0a795db66567d0a0d15b8125fd93d83dac8f1902d496cb981d2f512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUOZMTS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1KSnaZQd6yJugHOyNn50mFBS27X%2BGw4dXoS8LPAu8gAIgBIPWlFU08g0VVc3jjw6rO9Jy8s2hdUZ4ZJJ7Btnvv20qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9SUQvlsuw7fgDuSCrcA2zKoRFbWIQA4NowDvsxRubx%2FYQyaQPTp%2FrGJ%2Bzn5ZUc09gbZ5Sy1dOhizYCAR6glGCBA%2FRzKZBZZEGWS7sY4ND1rhFWm6VxHO6OgkK6Cgs%2B1kbFHfzlEIzhCNOpOzZ%2Bag1ksel8Kjsj9zp0IBelIDWFR346EKazEzE4mJIq88PcNqUemwBxB3Ot8FtzCwV8BKLQNEXPFEyEkPr1mgZr0fgBXUJ7w2sKRptrWg8obw0qmFbg7q1umE45FiVJz71AYQwwJI2LyLu62TZdXLzdkuFpO3SirodzGRPgUsUwzqIThFbdOYThXjqAQ4nBENYscF1oyfQiSN%2FZjkDuoEacrIydO7m5fjJyxceZeOrSx%2F5OevoF2LDBqSLLb8bsq3rlhpgPfk%2Fon93ifzR%2BHPj0%2BRm9kDayS%2FhWKylLFyzLS%2FU%2FxMasFcYtLns%2B41kRLFnxmGeXflelGfMSAYNpmK6V2nKavV6KWhAlBUanHJH4swovlpUujR6JfCUfgWt%2B7sHfMc7NxlnohbPzCfvMsVCMpPOFD%2FOkG4fgJQGKba9fLGnik2nW37%2FKSf1xjVWHCf2tmJK4EzpgTuWkL3HDuEPzkIp83beOq4%2FyWO0q01%2FmQbfQlwCUaaf3eh5Xq5xDMNqrvsMGOqUBcUtWm7D0NjkRcl2fBCqbFljvc4TEFmgzZ3gE7ftmsVCJ7O74%2BVNQtGyK2N2l0XqogWsS0GqPjuQzy%2BtPzOyLeol2xH7qzHhvVRCtHSqYW2mth5XM19LreDUVocg0mJZ5HiTIjt6fZQEpFtcYoz9SutKvhltL65zSD16THpt3KUkKYYTqQgEQncmeQD%2FIGDmuEy35Qq6vcYVIvjZMd33WwTzwPTEh&X-Amz-Signature=03ac93d8149f5cd9a52f926323519e89f803e70952d159e82216787737ced95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONFNBRS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHADq%2FAclMKqC7GWhz2D%2FnkdOhqjE%2Fuka1nOKbjTHzHLAiAJv5RYmeTH8t5N3xD4dd%2F4iiu6RPDh2rXyJh1lkk%2B%2FyiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bj9aQxfo79C%2FsEgjKtwDXEQvqROKZFIEnlGfdDAR3yadvmpV0uZsn8SZLWk7%2FRrWCPcnhKgDPq6VbXhzc0hhCRTauOTvpDK%2Fr%2FO8XNiNjH1t4N8CUf1wxWWl6yqcUxvmREvSPMzrx7IWoNoUKy0b%2F2g8dLMqP%2FSC36rRglYTaQeEPJ72LIb2LLvRFhkWeujA%2BGOFr6Agwxqe%2BFj5BFrleJao0XubRdoa5kG5%2BHrOa4brh1SEGmcADZ6m1GXT6Oc2tkBSAIAH%2BxEFBeju5iX8Tbh7Uek5Fw3ij%2BtkOh%2FZe4MFH8hELS53z87jHfSunxLeSJHwW1cOpcSLko%2B8fYgHax8fIpVELVfvwK1xDX%2FU7YawmBSshoQZflS74IVGsZdAVpadRHRH2RAjao4ZKtDeBvgU2QkFJSSzZkZmgSs1SVFUs6x0NG29ggIA9N1p7Yl82rTPA0JC2X6Gz2TGxBX4A1BFA8PxgZA0ujqhVeRjTF%2FdSnWUAXMuMBYpRc1An9Y8Udk8QaquXWZ1%2F8e7zwuA5K4A9zEqzlqHOPlK2PUgoSYrouIFVt7xoxSl2n4gL92S0RUtC7H37oRC0wpJu9%2BVFlCD8vjMqkcGNlbWcb3FoBGK3VgYXSRBuXXwSiutVCOsdZt%2FDYK4BEzP6DIwzqu%2BwwY6pgFSf45nc3xud02V%2FXZrZFXaADaAM4WybNyljf8%2FkFdNjnlcwBVHaICyqHnhHQW8Ne6gnQtlA9BYgyrDXlEnbD608jP9qwsPtbbzGtdwBoQLnRK75RHK4wv8uXX0DBpY6xUVfVnST37bWjzHg%2Bq6ZAS0udcKEasAPuPWcsQOSvt5j4CM1JAb5lcOAGfxSVsyl6kc1sQ6vLbxFZyN3umGJlkS9zuPaXXp&X-Amz-Signature=098ac603f4834ff1fc06ef07be79a31aa74a8e227e00587c5c6d3887ad3f8a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6KD7NN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmzXwkyZcv2unO1%2Bf6E8nWcPYSJcldnqw9oSGvlRwe0gIgDPtdqypKb%2FEH2Ib9D6JqoTkN43CQIt3zfCK5buFWxdIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkpBcN6XMvSmeYDwCrcA0bRUhYeKyVyLUTw3bA4fzVAIlFu78HTYhhmdSY8aul%2FxHVstdVnyPE4qXsN3a5Zji%2Fa4OZ5GYZlN3gBsIL34TNBxqz809lpVVRlrb5nO63U34YnRDzLO1BD5Ur79CQWGjx6fQ0KoQtrOfsLCNQZ6TC71mhNzTaTEU7RtpeBbcyApIwpTZxxEFDKIW%2FE584gqXDU5CDEEF6EUjEt%2BamJu0Ya%2FUH7gFMlgm%2B77t%2Bi7ju%2Bb%2F1nArh6jmkFRaBW3WrDnLzk%2FbId%2BV%2BQKReQlvQ4roJR53JbIEn04MBfecwdp64h8FBQWtFs0w7R6vDs9B1hKvRzBn3Y%2Bbm7th7k7RiT80WBMMcEZmgiwnsBRYOOtIYoeuNQqS4j%2BhnIa2rFWUtIrpZQ%2Ft3ceghEE2S50OW5kic9jc3AYkR%2F60yuL7hwh5NGHudNuRFiNklLaGmqdYPat3LrjrXKuK8hGrfpG7RrIgp3ZDc7CwShaF%2F%2FUWktE%2BTRzRd%2FPWf9DG%2BD9NIJM%2FVDfnUsH5Pv%2Ba%2B8vylgOA%2Fas2PWtcOTqqA4%2BHjlnMB%2BCJuR8zlK0%2FFtpDSa4ZwH7hWvHLFTCMWB2uH6LOQB0qOgOiB9Xi89EzjYgNYXDS5lIwAafsO3yennfmzBmZNPMImrvsMGOqUBYhuooLeNpwyMiW6X0dyEJBIdK3Zaodd5qV8iClGhxw0ixez8CDnR13n%2BSsNgSC2BWrBBTd1SFcgaQkEfeCJQAS35TYiSsRobWovEP6kOHh72HVEDTac0z8GEvuzu6o6tgYeJZu5bQBYhrkCMpHkKe9zh1%2FZP%2FV71V4Ft1hFhELdSogEC%2BWIuNHA%2FEzizfWBlPDO%2Fs9mAgfatb0mCaZxQI3OA85JR&X-Amz-Signature=ec2734db70f2d0eba68178bace6ddee255efad2204a6c23c697a10e4c030ab1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUOZMTS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1KSnaZQd6yJugHOyNn50mFBS27X%2BGw4dXoS8LPAu8gAIgBIPWlFU08g0VVc3jjw6rO9Jy8s2hdUZ4ZJJ7Btnvv20qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9SUQvlsuw7fgDuSCrcA2zKoRFbWIQA4NowDvsxRubx%2FYQyaQPTp%2FrGJ%2Bzn5ZUc09gbZ5Sy1dOhizYCAR6glGCBA%2FRzKZBZZEGWS7sY4ND1rhFWm6VxHO6OgkK6Cgs%2B1kbFHfzlEIzhCNOpOzZ%2Bag1ksel8Kjsj9zp0IBelIDWFR346EKazEzE4mJIq88PcNqUemwBxB3Ot8FtzCwV8BKLQNEXPFEyEkPr1mgZr0fgBXUJ7w2sKRptrWg8obw0qmFbg7q1umE45FiVJz71AYQwwJI2LyLu62TZdXLzdkuFpO3SirodzGRPgUsUwzqIThFbdOYThXjqAQ4nBENYscF1oyfQiSN%2FZjkDuoEacrIydO7m5fjJyxceZeOrSx%2F5OevoF2LDBqSLLb8bsq3rlhpgPfk%2Fon93ifzR%2BHPj0%2BRm9kDayS%2FhWKylLFyzLS%2FU%2FxMasFcYtLns%2B41kRLFnxmGeXflelGfMSAYNpmK6V2nKavV6KWhAlBUanHJH4swovlpUujR6JfCUfgWt%2B7sHfMc7NxlnohbPzCfvMsVCMpPOFD%2FOkG4fgJQGKba9fLGnik2nW37%2FKSf1xjVWHCf2tmJK4EzpgTuWkL3HDuEPzkIp83beOq4%2FyWO0q01%2FmQbfQlwCUaaf3eh5Xq5xDMNqrvsMGOqUBcUtWm7D0NjkRcl2fBCqbFljvc4TEFmgzZ3gE7ftmsVCJ7O74%2BVNQtGyK2N2l0XqogWsS0GqPjuQzy%2BtPzOyLeol2xH7qzHhvVRCtHSqYW2mth5XM19LreDUVocg0mJZ5HiTIjt6fZQEpFtcYoz9SutKvhltL65zSD16THpt3KUkKYYTqQgEQncmeQD%2FIGDmuEy35Qq6vcYVIvjZMd33WwTzwPTEh&X-Amz-Signature=80fb987063d0c2b5005b4c5478be76fd53f157596c9eb39150272376b16d7a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
