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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2OVHZ2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDp4R3X9AEN2nDbaq80aPf4NNbBlotR89UA0vDpCtIxgAIgSOE2xTIec7c%2B547bcg%2Fh82cxc0CmZ06%2Fp%2BEzmLArcd8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRCwIVCgR6bSBC%2BCrcA5HbVAP%2Bx0KaKcPhPTt4inO1tOy%2F2BcG1FVMCTdntqP5DIknAe3he%2BgU84KeSde991aZLXZFDJBhNfemRoP2pTicWYlItWZj79hOLShji%2Boae%2BfihGXfQcwt6zz7Pi41BUMJuhbKS%2Fucu5Kf%2FR8HBblZ9cveEX7bkOkYiL6Pc0rzS8bMIKMPSCr%2Fl0Re1gga%2FWNW1ktBLyTtDHPPKle5YWB%2FM7R5agd684HL%2B0CqecdX7We%2FJDkpx33JXOarU8eYpuEhCRA%2FV4FJ6f%2F5hMok%2FweYlVWU6NetGE%2B%2Bju5rbQlLXZR%2F%2FyiW6uQRT8egAqUUwGrWcF2Yat471kTgj3yOm5jQbq511whh8BlNCG6nz%2F43Yga2WspHHEC8o7CickSG%2B81WIMc2ugH8jDXlQzkH146MgeHsLMkxpy6V8qFRz1hMd%2BQB38MGu91gZEH1Ff%2FEUeM7%2B6hnkbOVXrR%2FFeXIWN%2BVbf9hnlim1t2nMUZOhrB82HfQ9MeJNtarojo9xXwRcOs%2BXKW347h0At5%2FNl21Kdk%2FKC8ZOWvWCUhbOj26AqLufLXpE1WgLGbcNWAcRJO%2FvTG8Ehyiy41GIA%2Bt4lmNWEXEUpqB4VpYASZJI%2BnNOdctALbr42nHcNbO4XgwMJ6Z%2BL4GOqUBDMWx%2BekPuMPDWwpe1SuH%2BL%2F7VN50RsGOXrFNasNyyr2YPocDum14alwLisZtCQDO6LvQcpn0cTs8L1GsPDt0j7Jz3rQEMddXzH9ZP3syInMgyercYg91HqHewSCpXIH5nzf8GZFoe1PMAHzJa0T7cFAEd9JJgTMjssDrZxhCHnvop%2BMt976afZ9cAgr9mVCrLqrcSnI8sQNc15MX0dH6aAJojzCT&X-Amz-Signature=f3efff270615cae94983ceaad5e0ab39511f2ddbcdbf391b1b2babd7db69d6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2OVHZ2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDp4R3X9AEN2nDbaq80aPf4NNbBlotR89UA0vDpCtIxgAIgSOE2xTIec7c%2B547bcg%2Fh82cxc0CmZ06%2Fp%2BEzmLArcd8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRCwIVCgR6bSBC%2BCrcA5HbVAP%2Bx0KaKcPhPTt4inO1tOy%2F2BcG1FVMCTdntqP5DIknAe3he%2BgU84KeSde991aZLXZFDJBhNfemRoP2pTicWYlItWZj79hOLShji%2Boae%2BfihGXfQcwt6zz7Pi41BUMJuhbKS%2Fucu5Kf%2FR8HBblZ9cveEX7bkOkYiL6Pc0rzS8bMIKMPSCr%2Fl0Re1gga%2FWNW1ktBLyTtDHPPKle5YWB%2FM7R5agd684HL%2B0CqecdX7We%2FJDkpx33JXOarU8eYpuEhCRA%2FV4FJ6f%2F5hMok%2FweYlVWU6NetGE%2B%2Bju5rbQlLXZR%2F%2FyiW6uQRT8egAqUUwGrWcF2Yat471kTgj3yOm5jQbq511whh8BlNCG6nz%2F43Yga2WspHHEC8o7CickSG%2B81WIMc2ugH8jDXlQzkH146MgeHsLMkxpy6V8qFRz1hMd%2BQB38MGu91gZEH1Ff%2FEUeM7%2B6hnkbOVXrR%2FFeXIWN%2BVbf9hnlim1t2nMUZOhrB82HfQ9MeJNtarojo9xXwRcOs%2BXKW347h0At5%2FNl21Kdk%2FKC8ZOWvWCUhbOj26AqLufLXpE1WgLGbcNWAcRJO%2FvTG8Ehyiy41GIA%2Bt4lmNWEXEUpqB4VpYASZJI%2BnNOdctALbr42nHcNbO4XgwMJ6Z%2BL4GOqUBDMWx%2BekPuMPDWwpe1SuH%2BL%2F7VN50RsGOXrFNasNyyr2YPocDum14alwLisZtCQDO6LvQcpn0cTs8L1GsPDt0j7Jz3rQEMddXzH9ZP3syInMgyercYg91HqHewSCpXIH5nzf8GZFoe1PMAHzJa0T7cFAEd9JJgTMjssDrZxhCHnvop%2BMt976afZ9cAgr9mVCrLqrcSnI8sQNc15MX0dH6aAJojzCT&X-Amz-Signature=32912828fd93406fd399a7e78b7f55ff129f6b930484901c5ada66daaaa319cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPV7RHDR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAKzJOGBg4fRG3IsvlN85mlnXUpNzuGh2nR%2F1V3IHyyUAiEAp8u5lJG3kIG5T%2F1j%2B5NOiwLlos5fuBwv7IoyquoKhZAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJamguD29mYG8rR3tCrcA6y3tmVhAnJBreI2qbaN%2B8EvfzONueLB1hnp2GeOQ38mGI721vjz1aVkYSVJJemUFG8G4dOZMLpJjDXym55ho6GmdN%2FjZ52%2FXvBr7e01M%2Fpi3qo9OjxaDPa0z7h0IYaBA50QP8n54LXM%2FvwU907qhEO%2BYbYnjsL0g0LfAqaSWlrRh1P%2BnYRCFZAeDZ3Ya%2BFWjOTsjSTOVsSWZYdgnx5iWPiB6l%2F26LQRVXTvBYFYgkgYTVfspwuKyD8ud%2BdJuKOxHKSAory8aveDy%2BJg9zvE7Vy6mULfPiVSPbhsjDMqbtdd7DczZL%2FYP1T%2Fu%2BJ5vHdgJnJhFqBZn%2BJ5ufYUW8s91qtPOCYuuiG2UcKH4BfFi4Htp5gHtGTGJbyealbzf9VnUrTx4wr4c36EyGVoukOAjDr7f1I6t8ADGhvNFvi9bpPP8SQ1t44uOCu3SocUCmZ9robOa3ApCtcgDXukcH9LzeI9AKeOYlKbq%2BCPUgzhRT%2BK9xNORdbnCQ67DFaDAReaWPkn%2B4KbRZ%2BzNM9TLQ%2FaD1o5ZT2yxdO%2FoN4QTmF9Fwm%2FNkPASxAiw0%2BCcVLE5GaSu%2BABw0%2BcR%2BKU1MdAnjOvjEWuDs24O974JgcRVMkbQoWzCUcd93n1bVBqn0O0MJ%2BZ%2BL4GOqUBmI7LDMXfqAwm8X3rVNZpswDwawt6DeB8skaI6i8KVmnYS8CpXib3BH3CO87lpoYcZqPRINgJh%2BxYomx8xW7J5resTA%2FHgkRffR9xCBUsYN381MuUoYayhfWG8EYoA4RmML9xpk%2Bb%2B3ahkAJpIJkgtbYpxbHMdgVrGt9tg0vF1TM2fc3vM%2BCYJVlUJmV%2FZO0Xm8JYKzDCXuVmCC50biftSaEx%2FqI9&X-Amz-Signature=7d75bbfbe245eaffcc1192f183e6610cc520b432a8bdd7c95204f4d308c84ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKCBFPBW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAwA61z52v7f%2F%2FV%2BbWuSi2GQ0n3LBGvLZFKkNh%2FOIxSgAiBYq5tqIgozUFkIzIBKkZBRI25sbZ0KDcH0J49v2B5BlSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLPfSObEUsowzhdt8KtwDXu4qeAWcY%2BhDUREAGk3CrBcp4lKBBXuGIMhnH2WppuK3B76lg%2FvzdC4ThWX2QIAg1AjTABTCVmqXmRlPRk339d70fUuXMjglU2l5vPiipW9eUkssTjeVQB26WC1yqaqIumub1qSNqjMsgxYJgDbJcne6e9V9Jr2V%2FBf2XYiI69XN2MZSpjjgW69AM64DEAVoQrez7Tr2fBR1jSpHlsUi6N8FTly8VID9DBeXxIFm4VqCQJa7uB5k5pzjR3Yum5jmcgW3oA9HcQwRW3Jqwke5X3vy4DrdhiwC5xYyByLH0mcBSlEZw4ni38J3p4NlnIQHRbw3yHxlrnShwED%2FpxYfpSxfmnmb9JXRe%2F9uMOy1CPKOiDlJXW0ETrJP1T40FcPAb4TGXCxZHiLDJtGW1XmISyTDuWicPvGmDW2jNiwJ3f0xwY3oql%2BCjITl3dtCXOx7Buq%2BmVrhn1FCRVBK2KjsQC3Spyc8fyCjWLW%2BbLWRdA9ETW2ZlxRot%2BvyzFVYitrhD2AihbdIMuY8MWsGYAy1FwpS0DtqnGwz2tfxcSjUUiy%2B2J6r5YYzKpJaXYIQWfYQcx4f6mQe4G7hw4C8bwyqCg62jVvuN4XhUArL6baQftya4D0nK4AMymQjzZYwv5n4vgY6pgFYB1xw8Ij73bU5mz7gMGlMHd4n36h%2BtQxKj4LJ28915TDAb%2BoT1wSRIB68krTysekJAkR6%2Br%2BBjOn32lHjROCb%2B4QtNp8JAvSMJerqSRmWfFRF%2BKltX3n6IZrAOXI%2F%2FxHQte%2BuE8TOpcom%2FIFXCIX%2Fc%2BJN3t%2FYlbYNZzNPOvjFNVVZ0au3lGoAlClIHYmAypNtL4ybiQS8lgfzZ%2Fl85D1upLtBbrbV&X-Amz-Signature=3cb0878d775480cc826d274c20ab3fe9ce34a4d823ea66190b614810b0b1f62c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2OVHZ2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDp4R3X9AEN2nDbaq80aPf4NNbBlotR89UA0vDpCtIxgAIgSOE2xTIec7c%2B547bcg%2Fh82cxc0CmZ06%2Fp%2BEzmLArcd8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKRCwIVCgR6bSBC%2BCrcA5HbVAP%2Bx0KaKcPhPTt4inO1tOy%2F2BcG1FVMCTdntqP5DIknAe3he%2BgU84KeSde991aZLXZFDJBhNfemRoP2pTicWYlItWZj79hOLShji%2Boae%2BfihGXfQcwt6zz7Pi41BUMJuhbKS%2Fucu5Kf%2FR8HBblZ9cveEX7bkOkYiL6Pc0rzS8bMIKMPSCr%2Fl0Re1gga%2FWNW1ktBLyTtDHPPKle5YWB%2FM7R5agd684HL%2B0CqecdX7We%2FJDkpx33JXOarU8eYpuEhCRA%2FV4FJ6f%2F5hMok%2FweYlVWU6NetGE%2B%2Bju5rbQlLXZR%2F%2FyiW6uQRT8egAqUUwGrWcF2Yat471kTgj3yOm5jQbq511whh8BlNCG6nz%2F43Yga2WspHHEC8o7CickSG%2B81WIMc2ugH8jDXlQzkH146MgeHsLMkxpy6V8qFRz1hMd%2BQB38MGu91gZEH1Ff%2FEUeM7%2B6hnkbOVXrR%2FFeXIWN%2BVbf9hnlim1t2nMUZOhrB82HfQ9MeJNtarojo9xXwRcOs%2BXKW347h0At5%2FNl21Kdk%2FKC8ZOWvWCUhbOj26AqLufLXpE1WgLGbcNWAcRJO%2FvTG8Ehyiy41GIA%2Bt4lmNWEXEUpqB4VpYASZJI%2BnNOdctALbr42nHcNbO4XgwMJ6Z%2BL4GOqUBDMWx%2BekPuMPDWwpe1SuH%2BL%2F7VN50RsGOXrFNasNyyr2YPocDum14alwLisZtCQDO6LvQcpn0cTs8L1GsPDt0j7Jz3rQEMddXzH9ZP3syInMgyercYg91HqHewSCpXIH5nzf8GZFoe1PMAHzJa0T7cFAEd9JJgTMjssDrZxhCHnvop%2BMt976afZ9cAgr9mVCrLqrcSnI8sQNc15MX0dH6aAJojzCT&X-Amz-Signature=08708259ea621d2ef2258a635c9263f76418d755b62405b31369bc92eec248cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
