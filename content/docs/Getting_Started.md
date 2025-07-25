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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEPPESP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICSlywBqYozWvWOI3HDRU7pQHz4X4HYJ44jxBvdZdgaYAiEAwRj7%2Fb0aZEkywmfpZ7Grqs51ROJELuRkNLpjkccpJ0oq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKrhyMd3EilmLwf9VyrcA%2FF41eaD6dHFCUKq16AsYzMTL5T3x4U4asBGCmpmX8ppxQfpk5h5IooqPXI8D99XnnXgf6oC2hk%2F2qdr03CmapiDAqbLNRZE8TSK5FAU909diAmvyBatH%2BSz2U1Uj5h24gDBgQ%2BIYbhzJY%2FfRQatXRDsCsni%2BWz7EXbdp8zSEXtaWxsq%2Bi%2BUOZqZltUO2THwHqCiIsfPLYulEEoeeVPKrdXw8U5CfgifYT7BY3szHi1F2VKZfEdiQsV3sySmiqlGrd1ggsrWmvnD%2F39rWc7R3v03zgi4%2BwIdQiqhwfzzkBKeKDfnO1cgUwP1TazN23kagtvUwkuLRbNbpmqshPYXEwMaqvJnor1QinCM6YAsih2JoMP%2BpBGdkNv3cbfE2aq2y%2BLWuFccJVw3Mn3shxYtOEELmwFPaAaF7bjI7aDwGxIpVyMkvJ7WABivrx139mkRByG2mdLuVWoBxS0dp5bYUFyXrNKUCH%2Fm%2FTk1nwoC2IlOgidNoqAI0wDyB9GEnTMzxWPfgfKTA0cIh1kJ%2BLONzXcQs0WkIfd8cXoAYZVtMczfGk3qxivyrTGtM953jCfvnldVGcT2zGE%2BsEtLE%2FKzE6X618YhlFjk0ByOUXosnik7GsyNqtSCIIFFXTyYMPaqj8QGOqUBzm%2FrZbFfDg8k7aGlkAD4YIXdr8CyGilZ81wRRtv8CNrPly8v26td3mYldNuv9NxOVQpvEKSv05Hpy029eBjnTILomXy7TJB5EymLPAGjY38LBJaKw0vbVp5CjaUlBUbX5jBDpU8c6NU71hwrLq7KuiF%2BUynVWr5hVwlXAnpvRX4ZGSuzd8J9FZ3vUStgrmx15u9jQPeqy0soyiGaBEePBk3OsZuv&X-Amz-Signature=9afe43592230e7ff634da45eb8a9bfbf06af834b1fab92d51d3d955fb885e522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEPPESP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICSlywBqYozWvWOI3HDRU7pQHz4X4HYJ44jxBvdZdgaYAiEAwRj7%2Fb0aZEkywmfpZ7Grqs51ROJELuRkNLpjkccpJ0oq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKrhyMd3EilmLwf9VyrcA%2FF41eaD6dHFCUKq16AsYzMTL5T3x4U4asBGCmpmX8ppxQfpk5h5IooqPXI8D99XnnXgf6oC2hk%2F2qdr03CmapiDAqbLNRZE8TSK5FAU909diAmvyBatH%2BSz2U1Uj5h24gDBgQ%2BIYbhzJY%2FfRQatXRDsCsni%2BWz7EXbdp8zSEXtaWxsq%2Bi%2BUOZqZltUO2THwHqCiIsfPLYulEEoeeVPKrdXw8U5CfgifYT7BY3szHi1F2VKZfEdiQsV3sySmiqlGrd1ggsrWmvnD%2F39rWc7R3v03zgi4%2BwIdQiqhwfzzkBKeKDfnO1cgUwP1TazN23kagtvUwkuLRbNbpmqshPYXEwMaqvJnor1QinCM6YAsih2JoMP%2BpBGdkNv3cbfE2aq2y%2BLWuFccJVw3Mn3shxYtOEELmwFPaAaF7bjI7aDwGxIpVyMkvJ7WABivrx139mkRByG2mdLuVWoBxS0dp5bYUFyXrNKUCH%2Fm%2FTk1nwoC2IlOgidNoqAI0wDyB9GEnTMzxWPfgfKTA0cIh1kJ%2BLONzXcQs0WkIfd8cXoAYZVtMczfGk3qxivyrTGtM953jCfvnldVGcT2zGE%2BsEtLE%2FKzE6X618YhlFjk0ByOUXosnik7GsyNqtSCIIFFXTyYMPaqj8QGOqUBzm%2FrZbFfDg8k7aGlkAD4YIXdr8CyGilZ81wRRtv8CNrPly8v26td3mYldNuv9NxOVQpvEKSv05Hpy029eBjnTILomXy7TJB5EymLPAGjY38LBJaKw0vbVp5CjaUlBUbX5jBDpU8c6NU71hwrLq7KuiF%2BUynVWr5hVwlXAnpvRX4ZGSuzd8J9FZ3vUStgrmx15u9jQPeqy0soyiGaBEePBk3OsZuv&X-Amz-Signature=66a0b5a20fbc9ec8760f1091562ef962722a0f1dc3d097af49e7a8f8f6b80309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEPPESP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICSlywBqYozWvWOI3HDRU7pQHz4X4HYJ44jxBvdZdgaYAiEAwRj7%2Fb0aZEkywmfpZ7Grqs51ROJELuRkNLpjkccpJ0oq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKrhyMd3EilmLwf9VyrcA%2FF41eaD6dHFCUKq16AsYzMTL5T3x4U4asBGCmpmX8ppxQfpk5h5IooqPXI8D99XnnXgf6oC2hk%2F2qdr03CmapiDAqbLNRZE8TSK5FAU909diAmvyBatH%2BSz2U1Uj5h24gDBgQ%2BIYbhzJY%2FfRQatXRDsCsni%2BWz7EXbdp8zSEXtaWxsq%2Bi%2BUOZqZltUO2THwHqCiIsfPLYulEEoeeVPKrdXw8U5CfgifYT7BY3szHi1F2VKZfEdiQsV3sySmiqlGrd1ggsrWmvnD%2F39rWc7R3v03zgi4%2BwIdQiqhwfzzkBKeKDfnO1cgUwP1TazN23kagtvUwkuLRbNbpmqshPYXEwMaqvJnor1QinCM6YAsih2JoMP%2BpBGdkNv3cbfE2aq2y%2BLWuFccJVw3Mn3shxYtOEELmwFPaAaF7bjI7aDwGxIpVyMkvJ7WABivrx139mkRByG2mdLuVWoBxS0dp5bYUFyXrNKUCH%2Fm%2FTk1nwoC2IlOgidNoqAI0wDyB9GEnTMzxWPfgfKTA0cIh1kJ%2BLONzXcQs0WkIfd8cXoAYZVtMczfGk3qxivyrTGtM953jCfvnldVGcT2zGE%2BsEtLE%2FKzE6X618YhlFjk0ByOUXosnik7GsyNqtSCIIFFXTyYMPaqj8QGOqUBzm%2FrZbFfDg8k7aGlkAD4YIXdr8CyGilZ81wRRtv8CNrPly8v26td3mYldNuv9NxOVQpvEKSv05Hpy029eBjnTILomXy7TJB5EymLPAGjY38LBJaKw0vbVp5CjaUlBUbX5jBDpU8c6NU71hwrLq7KuiF%2BUynVWr5hVwlXAnpvRX4ZGSuzd8J9FZ3vUStgrmx15u9jQPeqy0soyiGaBEePBk3OsZuv&X-Amz-Signature=84fa6038be0b17f29ac6ae91e029915b02808719a84982d4bf735cce222d0d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAJTKHT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDg3nmNHmUV901sEZBovGKKZ38HokDZGZpyEpV6jAziiQIhAPJYmO2Lv20b%2F2sl0aN3InHYkWNNeyhvs1Bg5Iuwch5uKv8DCEwQABoMNjM3NDIzMTgzODA1Igzq7wDzW34r%2BmjD3XYq3ANnFVUP93go49kp%2Fsb2ujzwhR4pj0gzKHvYOpVvQ8JHWZ6bxnsKJ8R%2F0Mh%2BIzLaRBIOcADWswCxm4mdt0Pu8%2Fc4ugibLZQQZSj1D83jgafbyD0lgQAlH2RvjEcPF2erErfQRZKAX%2BQtNHRV0LZKFDZ3OHnPF2fVIK58Uto9iljmFvj11YI8T2%2BdEKsj0MdMkHTpTL1q7FF1vwEU2ouwYPAGpnGcAbLwxD5monziF%2Fy1zT72lmFyU%2BOJXpWJOPZrzuc1kgi3ru%2BONEEC5%2Fp103yMoE3LHFcR%2FGblkXR%2Bdk5JvAg3qHNY1YQhXpWZi0IYeCsaMLxQA99CHVB%2BhSl5AUq5iG3CxW%2Frx5iOw90liV9aa6C8YMzAW1%2Bgta43KQdGMiScw80MDWXYoruamDNuuzNQM35E3%2BxabpnJQGrxyzTjtm%2FNtZZ34VG51NwcwY0h%2FguBiHSRn7FmkUsX4p8ofWatFEiqWp5TAjRRyI40Qh1umGXWFeT3KCTjUxc7LXNIsPFUeLiroL3I%2FVVrP0bDSMMMWAne1WT5SRu4QaiJIdzaLVVfHWhQGsacfBqBjjoFhmVDIQD054I59uBQnBGpkdZFWPSHhvrb4WZK3v%2F2HIzmLQc4i15jglvF64TApzDdqo%2FEBjqkAQD3mSi84llOOtvtZ44FJyj2rr42Xy6F%2FaqsQQCgSj4Rx0dgfhCgNhKrstfBWM%2FGE2bJnabHMoNbXIAyf2DleizoF3LyNdODLk1RU%2BHXKDvlMC8g5FFN76qCHFpg0DVQhUBxSemAaztDvv2K%2FFb3eAsh1yVITWUqYE6SffNNJVi%2BfCcixtw4BfKh14D%2FU3nbsDzBXxA2xn0cKfD30KPnNrlfK7G3&X-Amz-Signature=c2bbd53015b66ecedfe05e2beecd4e7266fbd99314be484349fb30198cd735cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6F7NHU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIH681n85YJv8dW%2B%2BOgLqzaJfNA%2FN8byR6lHFd%2FSkxSQGAiAXvVCD1r8CZQ6lsllrHo0R9aALY75juaKNk9U0DSuqyCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM%2B%2ForGEbiqRWA4e7SKtwD6ApDWCLtC0HdbBzmqfRjAOHk03jHGMxSHlDSLs4T%2BtCQzz3hv9C2ICBYn%2Bk1%2FfVrwoFwJnLcMt3M%2FaCGy7duqCS8KeVIrM8luYwmqkLFm9byc9ASK0o3ibYXOgXBUUbAhd3GHkHpdJHH3zelzHJMML4qzDSuAc0k2BBYdia08hVKHSryAZKq1jdOv5T0sRyX5sv6XViNaKM0kFHLy8hLgz9E03tS5IdWmKlHXXgO8KOTL5FfM%2FFkGf2qY2z%2Bg11O90JsG99xLjXCm4pSnp%2Bi98biA6zCIV0bd455iWZHIJmg88v7z8Fax7PEUJgw179fqOM5AsVJG4ACWwkYYA9iP4RZal1cHP2JKC2POLJawgdSX2Jl5zrDeOHo%2FMAInyIjQvUTeT9rkiqLt5HfZC9OAgHD6iW6raliifDxHT48yjK4U1%2FELxzlecEQc4YNb17Fxi4oGUIIlpfduRWwstCauLlGHJt60dUWJm%2FdAR9eSDJTDXHxXUpXOyxjX3YWgff6Z9i9h54FMG2LO6WRcGiAzi2WvaFEJXp1vvboTbnHKGqcUXmkaFHA01FRQ1i8JY56lDt4M%2B9hpPSscnORtMuypliSXPY%2Bu2lZ1Lh6G2Im3bIk2GP%2Fm2qbM8YMfaQw5aqPxAY6pgEwKL3hCAw6qTaAUhwNsjQ%2FLvy%2Buaa7urlFrlYIYSBRUBzWjIm2tWdWl0Nz8t0KNgy7jy%2FA9tm7p6xO3%2FiGFO4ic41Rm6TKxd9j7X1O4jVNzZ4tCoaZqRvpcrjJVRk%2BbVxodi52eFm7W142pyYjCYzoOUXg16E8gCyEBSuNlaax1IXkJb64aAN6%2B4GhJyexVDVz9KD92uYtw116f9EBPNStXbh%2Fcz68&X-Amz-Signature=23835a61b29ff286adf665a1051fa34a756ef556a5cc4721738d56ece5871649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEPPESP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICSlywBqYozWvWOI3HDRU7pQHz4X4HYJ44jxBvdZdgaYAiEAwRj7%2Fb0aZEkywmfpZ7Grqs51ROJELuRkNLpjkccpJ0oq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKrhyMd3EilmLwf9VyrcA%2FF41eaD6dHFCUKq16AsYzMTL5T3x4U4asBGCmpmX8ppxQfpk5h5IooqPXI8D99XnnXgf6oC2hk%2F2qdr03CmapiDAqbLNRZE8TSK5FAU909diAmvyBatH%2BSz2U1Uj5h24gDBgQ%2BIYbhzJY%2FfRQatXRDsCsni%2BWz7EXbdp8zSEXtaWxsq%2Bi%2BUOZqZltUO2THwHqCiIsfPLYulEEoeeVPKrdXw8U5CfgifYT7BY3szHi1F2VKZfEdiQsV3sySmiqlGrd1ggsrWmvnD%2F39rWc7R3v03zgi4%2BwIdQiqhwfzzkBKeKDfnO1cgUwP1TazN23kagtvUwkuLRbNbpmqshPYXEwMaqvJnor1QinCM6YAsih2JoMP%2BpBGdkNv3cbfE2aq2y%2BLWuFccJVw3Mn3shxYtOEELmwFPaAaF7bjI7aDwGxIpVyMkvJ7WABivrx139mkRByG2mdLuVWoBxS0dp5bYUFyXrNKUCH%2Fm%2FTk1nwoC2IlOgidNoqAI0wDyB9GEnTMzxWPfgfKTA0cIh1kJ%2BLONzXcQs0WkIfd8cXoAYZVtMczfGk3qxivyrTGtM953jCfvnldVGcT2zGE%2BsEtLE%2FKzE6X618YhlFjk0ByOUXosnik7GsyNqtSCIIFFXTyYMPaqj8QGOqUBzm%2FrZbFfDg8k7aGlkAD4YIXdr8CyGilZ81wRRtv8CNrPly8v26td3mYldNuv9NxOVQpvEKSv05Hpy029eBjnTILomXy7TJB5EymLPAGjY38LBJaKw0vbVp5CjaUlBUbX5jBDpU8c6NU71hwrLq7KuiF%2BUynVWr5hVwlXAnpvRX4ZGSuzd8J9FZ3vUStgrmx15u9jQPeqy0soyiGaBEePBk3OsZuv&X-Amz-Signature=88e52dbddbf9750646fb97effc6d13db3b1e7d3eb0f221c12ce4d94ea604c02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
