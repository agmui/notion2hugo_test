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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUEX5SE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDvJUKUY1wP8HA%2FU6HrONH0W71RwvsKshK%2Fi%2F59sJOKGQIgeGVIH6e3baSktOV37vaQhOjHwfbdEwz%2F6Wk9urA4nIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDNjeKtRs7fmcANeRCrcA%2BqaHVBBVvJXfFgwQ6T6Hp3d7FBrEjf96iwSFyiY9%2BtCUuAzwOaC27vuYBCtYeLqRoclCDPSD9n9P8atmROOkL1X8phW%2FCUNGeisTUahk9WRVGjisIrXvyqiI0%2F6HaOF0EM%2FqLkojGjbaWMY5AYmZstDnmHkYGeKentP298CQNe3V2OPXj%2Blwpdd4tL73QaU%2FNc%2FHWThVxRUBWy2NeJm0Ums81XMCv17qi4x9EeTKpEeHG1XT1aRchQLi5uAVd6uM63nOe%2FwXlnpD8x0pOwNvy5LAYICPh2ZQIE7ok57Q0vD20jZaEmnmTrZ%2B761QmIZmAO3tV1ut%2BxH25KpzD1NcRpcSxgpsDEmOnfPrZzC5%2FCZmr%2B1B6eUlq6vWk%2B6TBH%2BFzUX%2F3MNqfOlmXQkRlVovC9qXiTB9dRzyvik%2FuS9DMbVA%2ByI%2BndhbZNzZvPTyYxAxJoMmu%2FACxeuAWKMeqroV66ct1C07uz%2B8MivYYe1fVqOIKS5k0lt2jGDTDbwzEiM7FLTfSdsTIGmBNqODdfd2e0DOPtBV8g8JZOoeZ%2FPlZMEPMY9Zr%2Fzacbz%2FJoAoy1dsLYZHenZDMOzHdmecn4i%2FlhJEYSK0R5LsZnVtMW%2Bag5%2BVfLUJU13LetMpXRAMNa1lsEGOqUBQVJKThbmZE7oxKwpO2Y7bua8m1z8mjgEFsUhXRccVetaoNkW3HjStgPrez%2F5lbe%2FA98uIkpwzjNrRP7hJqC6Xsu1yOEuRO9lNBpPnY1rIIu%2FOeb80oZwmvEG0Qu6CVDO9%2BmFqLVyHFq1AZ3Asuzgd%2BWM%2B6h6PoaS5XZVgLxexYuU%2Bk3ExVPsf7UlOMKwdEu0DEmyX7kmOy9j%2Bi%2FzF52mboDF7r0I&X-Amz-Signature=4a8ae57d20bbc71d7fb4c6899279651622f8ed9651ab60e2a8ce9675b8e263a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUEX5SE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDvJUKUY1wP8HA%2FU6HrONH0W71RwvsKshK%2Fi%2F59sJOKGQIgeGVIH6e3baSktOV37vaQhOjHwfbdEwz%2F6Wk9urA4nIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDNjeKtRs7fmcANeRCrcA%2BqaHVBBVvJXfFgwQ6T6Hp3d7FBrEjf96iwSFyiY9%2BtCUuAzwOaC27vuYBCtYeLqRoclCDPSD9n9P8atmROOkL1X8phW%2FCUNGeisTUahk9WRVGjisIrXvyqiI0%2F6HaOF0EM%2FqLkojGjbaWMY5AYmZstDnmHkYGeKentP298CQNe3V2OPXj%2Blwpdd4tL73QaU%2FNc%2FHWThVxRUBWy2NeJm0Ums81XMCv17qi4x9EeTKpEeHG1XT1aRchQLi5uAVd6uM63nOe%2FwXlnpD8x0pOwNvy5LAYICPh2ZQIE7ok57Q0vD20jZaEmnmTrZ%2B761QmIZmAO3tV1ut%2BxH25KpzD1NcRpcSxgpsDEmOnfPrZzC5%2FCZmr%2B1B6eUlq6vWk%2B6TBH%2BFzUX%2F3MNqfOlmXQkRlVovC9qXiTB9dRzyvik%2FuS9DMbVA%2ByI%2BndhbZNzZvPTyYxAxJoMmu%2FACxeuAWKMeqroV66ct1C07uz%2B8MivYYe1fVqOIKS5k0lt2jGDTDbwzEiM7FLTfSdsTIGmBNqODdfd2e0DOPtBV8g8JZOoeZ%2FPlZMEPMY9Zr%2Fzacbz%2FJoAoy1dsLYZHenZDMOzHdmecn4i%2FlhJEYSK0R5LsZnVtMW%2Bag5%2BVfLUJU13LetMpXRAMNa1lsEGOqUBQVJKThbmZE7oxKwpO2Y7bua8m1z8mjgEFsUhXRccVetaoNkW3HjStgPrez%2F5lbe%2FA98uIkpwzjNrRP7hJqC6Xsu1yOEuRO9lNBpPnY1rIIu%2FOeb80oZwmvEG0Qu6CVDO9%2BmFqLVyHFq1AZ3Asuzgd%2BWM%2B6h6PoaS5XZVgLxexYuU%2Bk3ExVPsf7UlOMKwdEu0DEmyX7kmOy9j%2Bi%2FzF52mboDF7r0I&X-Amz-Signature=5719e834609c4f5123358dcae7bcb20f3e38dda29e723f8e2cc7d676b2a58ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUEX5SE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDvJUKUY1wP8HA%2FU6HrONH0W71RwvsKshK%2Fi%2F59sJOKGQIgeGVIH6e3baSktOV37vaQhOjHwfbdEwz%2F6Wk9urA4nIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDNjeKtRs7fmcANeRCrcA%2BqaHVBBVvJXfFgwQ6T6Hp3d7FBrEjf96iwSFyiY9%2BtCUuAzwOaC27vuYBCtYeLqRoclCDPSD9n9P8atmROOkL1X8phW%2FCUNGeisTUahk9WRVGjisIrXvyqiI0%2F6HaOF0EM%2FqLkojGjbaWMY5AYmZstDnmHkYGeKentP298CQNe3V2OPXj%2Blwpdd4tL73QaU%2FNc%2FHWThVxRUBWy2NeJm0Ums81XMCv17qi4x9EeTKpEeHG1XT1aRchQLi5uAVd6uM63nOe%2FwXlnpD8x0pOwNvy5LAYICPh2ZQIE7ok57Q0vD20jZaEmnmTrZ%2B761QmIZmAO3tV1ut%2BxH25KpzD1NcRpcSxgpsDEmOnfPrZzC5%2FCZmr%2B1B6eUlq6vWk%2B6TBH%2BFzUX%2F3MNqfOlmXQkRlVovC9qXiTB9dRzyvik%2FuS9DMbVA%2ByI%2BndhbZNzZvPTyYxAxJoMmu%2FACxeuAWKMeqroV66ct1C07uz%2B8MivYYe1fVqOIKS5k0lt2jGDTDbwzEiM7FLTfSdsTIGmBNqODdfd2e0DOPtBV8g8JZOoeZ%2FPlZMEPMY9Zr%2Fzacbz%2FJoAoy1dsLYZHenZDMOzHdmecn4i%2FlhJEYSK0R5LsZnVtMW%2Bag5%2BVfLUJU13LetMpXRAMNa1lsEGOqUBQVJKThbmZE7oxKwpO2Y7bua8m1z8mjgEFsUhXRccVetaoNkW3HjStgPrez%2F5lbe%2FA98uIkpwzjNrRP7hJqC6Xsu1yOEuRO9lNBpPnY1rIIu%2FOeb80oZwmvEG0Qu6CVDO9%2BmFqLVyHFq1AZ3Asuzgd%2BWM%2B6h6PoaS5XZVgLxexYuU%2Bk3ExVPsf7UlOMKwdEu0DEmyX7kmOy9j%2Bi%2FzF52mboDF7r0I&X-Amz-Signature=47f04398f5b41e972c65bb1ec7f99807d19ce0d77b3ffcdb0d9fa12e00e9be9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWBPZEA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDBIBfUD6f6hqGL95ZBrREVby%2BB13GkkXpqdzkoeclgWgIgENdsSnKC3YHGrlWhnnboPQaRcsKPs75PwDeTn1WYKIcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOHq9y0H6rknBX0VByrcAzb29D2m0SPmDPKp9Kn7Lp2aROVLjXlbHk54K%2F5raRKuEDJRTQpUio1plRA62oiU%2BDZt%2FAtn%2Bzty4rtvv3qKfaT2c1pmAaf5JxO3M%2FmSo21dokOzaAwc221%2BjXK6aQxzB%2BivzJFjgKT%2BZZmseKbLd9Fqh9ZhJOcx%2FPJU4Dq1JuVSIA4UgElFSUG2Np8rqNCMtG%2FsMCcEEUulDomrQgOLCoOEEEv86rGzD4ZuZ7sytXJsn%2BNBED3rq5DexlJ9VjDWnZBv8vJSZUM3PbImaXJjw5aDwouqlvhZdqN0%2BHg4JrxClJ9iOHmVzTqTkpxK%2FifBtJKrjvL31nXIu3cN1FwH8XiTWHOxbxd33dZ03uh1EUAugBB%2F3E5kkzv67wSdKtEhUZgXMzkGbBMggnjNJ3jrglc0UJcXvBRRIlgphtVUpdFXs0ZJ%2FVIerKNh%2BJm2fVOBi4AUzEUxRFzw2ggpHx9YKY%2BCjh4ywIWO%2F0n2e9nyJMX7XdYom3pxnqwE2KCQvHGePTDe5%2BVBWu6Gbk3%2FQVAbzPws85qJVjA1bG7XpPBM8YT8RFX628S3fgEain59dHYjWsHm9ykgCf1DOJ%2BYdSDNWLVVU%2FY6IsnidbN8mUsI443Qidg62NGXFp%2F7LF6qMJK2lsEGOqUBcQKD%2BoCduytED7pGk1aZBXVoTVuf6NIUtDqhRXjCjP86%2F5Nc2hXc38b2OZVKa8mu5uYjVlwlgN07TmYlUFiQJfoNcZF5poPd9oKpUGhmyHFSFgK7vFyQDdzWc7yguoEXZYTp3%2FQqQbQX1P2%2BkcpgHLtDiBBJODJnmY2oSyFEiC6eHyQG8Q1Z2DEreg9H3kuyA4D04YUkpvR6tb6MQVCSJ6jwpzJV&X-Amz-Signature=9bfeb4cb115af2783e1f435e1ead9e3bad11f60e108969ba1b6c3c8bf38aabc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLPZDUV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBLU7IBUVbU0M8lLgMa7ztHJnVuTDUZPr3fnlvNsSss1AiBsW0kDYqEBhw6VUdBBeNbRuUrrKA5IgsAirpKqzmKSeir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMMszXwY03%2FTtmrmj%2FKtwDSie%2FcecAd44m7eFhMrJf%2BSkKu6ydFZCFgZpOiYzgpJ3Gr5EanVsUWSfpGDGqchjkC0ZO8qmwLlKyKS3lvY6jTq1jLTJreKyl3QFnCsQbB9yBDoUhy%2FxXwV8B5Uz6P0%2B5fb3LyKCi4LQtvqWAaLWGZ%2FIVkaBSej7hpw3927cZjuAiSQhs45OUIREC0iM2YtkDD5wpjIsiFJ%2FR3tCtP5OVMaBBS4Cfqfn4xitXx%2BZH%2FYK1hajuebX0nxMJLCL0QEt2rs2Sgr4HEsVNHcXCHSxJrQBbo38QwRZD8DBtDKj6btj6k%2F%2FWspHi6ltlyn7nUWf4uXAKJHmRc5WpZBjr1jHnhOoy1BX%2BCd%2Fg97JSxt4lLDv97mGMG6kcq6PYgHpAZObjJpT4qGEdtuWbuNOj1%2BPH0mYVNIsw3WRwhzuYnFFugTqrLoAsnbbkQir7GujlsuKGProFRbeKKqG5S08%2F2xnwd42ubBz1BoH%2FWsOLehIyl93hVE3JfV6knIOVkMdGQMofCYSZI8eHPck6pWcbbHHliMvui9qIS4yR%2B17Mh6KOAPakl7X1Bj3ytz6eu60XZ%2BICNxUPnLxqY147yavs5xa3qn%2B5EriKjCaOQ4%2FzTz%2BIVvqQ96UE%2FS5sC3SQWsMw0bWWwQY6pgHx9QemmWo87s9EfJyEYsYQ2DqsaSD4hnnikONpIb6MOCPfZBCGHUS%2FCi1KfHS44CvXWxzSrRrkoSIlFQdzyGeqSMrZuiTsjhixTHWAntX4OOzJvvnnVuikRllVRHyLf50Qv753pjjIPEfl3J4Nawy2VaDwjjqdBmPycHndyuBRoSKPShB3viIN4N8El%2B3z607VgxUrrgolPckJ7JtDtQME6YsGn%2Bet&X-Amz-Signature=b661da413c54e6beff53b5d3d10027eb55f43912dd6518c68b913c8a67ce7de0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUEX5SE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDvJUKUY1wP8HA%2FU6HrONH0W71RwvsKshK%2Fi%2F59sJOKGQIgeGVIH6e3baSktOV37vaQhOjHwfbdEwz%2F6Wk9urA4nIwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDNjeKtRs7fmcANeRCrcA%2BqaHVBBVvJXfFgwQ6T6Hp3d7FBrEjf96iwSFyiY9%2BtCUuAzwOaC27vuYBCtYeLqRoclCDPSD9n9P8atmROOkL1X8phW%2FCUNGeisTUahk9WRVGjisIrXvyqiI0%2F6HaOF0EM%2FqLkojGjbaWMY5AYmZstDnmHkYGeKentP298CQNe3V2OPXj%2Blwpdd4tL73QaU%2FNc%2FHWThVxRUBWy2NeJm0Ums81XMCv17qi4x9EeTKpEeHG1XT1aRchQLi5uAVd6uM63nOe%2FwXlnpD8x0pOwNvy5LAYICPh2ZQIE7ok57Q0vD20jZaEmnmTrZ%2B761QmIZmAO3tV1ut%2BxH25KpzD1NcRpcSxgpsDEmOnfPrZzC5%2FCZmr%2B1B6eUlq6vWk%2B6TBH%2BFzUX%2F3MNqfOlmXQkRlVovC9qXiTB9dRzyvik%2FuS9DMbVA%2ByI%2BndhbZNzZvPTyYxAxJoMmu%2FACxeuAWKMeqroV66ct1C07uz%2B8MivYYe1fVqOIKS5k0lt2jGDTDbwzEiM7FLTfSdsTIGmBNqODdfd2e0DOPtBV8g8JZOoeZ%2FPlZMEPMY9Zr%2Fzacbz%2FJoAoy1dsLYZHenZDMOzHdmecn4i%2FlhJEYSK0R5LsZnVtMW%2Bag5%2BVfLUJU13LetMpXRAMNa1lsEGOqUBQVJKThbmZE7oxKwpO2Y7bua8m1z8mjgEFsUhXRccVetaoNkW3HjStgPrez%2F5lbe%2FA98uIkpwzjNrRP7hJqC6Xsu1yOEuRO9lNBpPnY1rIIu%2FOeb80oZwmvEG0Qu6CVDO9%2BmFqLVyHFq1AZ3Asuzgd%2BWM%2B6h6PoaS5XZVgLxexYuU%2Bk3ExVPsf7UlOMKwdEu0DEmyX7kmOy9j%2Bi%2FzF52mboDF7r0I&X-Amz-Signature=a8d3a4d3864e445b4e12ae039ba164cf492125d3e3a477108bf437d046a6fe5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
