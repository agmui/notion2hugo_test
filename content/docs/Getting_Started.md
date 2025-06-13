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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BFYYA24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDZoaLYikIoOLH4B%2B3uKVmid6k04m2zqm%2BII8d4qUMArQIgGsB8Qg4xvzMzkDmzkdHqaZFVI9ibWiz8nQLau53IJB4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDC2E8SE3uM1dpz8x%2ByrcAzBem%2BST6OsKkY56R41F%2FcpkPM9gZlduMQUylWJU62adqfNUk26Hg9%2BgOuiRC1u%2FtdLXHPdU2XYbcnwYXvDFBs6%2B6jN5WWHn7naeb1C8ss8f7ZIv9fj5gky6R0MfZDg3hY9NzHk8tN9s6ZyG46JihTiTNUfsDg3M3blatCMHGS0Z5mmcuk6BnShb3TLqx26Be1bmO9uEc4NbKDDksJiaYZPhya4GLy%2Bxe%2F6hahd20ERfmWlEZgs1%2FQO8acHYd0HRw1N7cDDB2%2Fu0xoHxHu23dDUDkOldIUAYuBcG0V%2FFSsyKqDV98qf5XZ9%2BaijlCpRKgwUDfGnlEfrxMOn1dgiGDh2zYwaTy9tQG%2F9lVACZAN%2FwA0W9EBEzZdmdsbuzgJ4yPp0%2BOQS8CcLjp9lq2E9O6UkV7SW0SUv%2BPgONfrU5n%2Bk%2Fc05X3fuX2KKGJbdu8XxP58YBd6hqinAw3oDVsl0IKlE4gQTnXwzELbOxpkPIzH%2FaVZgf3%2BVTAjqW5Q%2FnBijwmwkqOrDrTdVkQD1qX8ZmicW6WoqEZhC4gPXgOQEa%2BMD37YFErLXg0UU2xR1H6FQM7Z%2FiMrlruNHGi1RGyQ3RUgdWbCXjR0R83kC%2BWVMkGUCBMkTjJvU1mJcC6PiCMPvSscIGOqUBqy9mwiudLVrAOgl7dfhWJQ6bzb8TuvmfS8Vau1650EmqOA9gFxVh2p3boUGvur9AXIrxyFgtNj1rp71fVnMVu4vkuFeZnIdvM%2BKvZwhJhF6VAfyEe2TF0LCdHlf%2BJRgkXAke34xopUOz2LqnRF1A%2BQzqtvaMHjLuIa2errNodLSAFyyDqfb1duqQIEB%2BMP9GUZyXRizPeGJdDProgrsfxWd4hib4&X-Amz-Signature=4ad0d01845d67a68958e96ce13b062aa93cd3b1111e6e902ae463de2e9ec7d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BFYYA24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDZoaLYikIoOLH4B%2B3uKVmid6k04m2zqm%2BII8d4qUMArQIgGsB8Qg4xvzMzkDmzkdHqaZFVI9ibWiz8nQLau53IJB4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDC2E8SE3uM1dpz8x%2ByrcAzBem%2BST6OsKkY56R41F%2FcpkPM9gZlduMQUylWJU62adqfNUk26Hg9%2BgOuiRC1u%2FtdLXHPdU2XYbcnwYXvDFBs6%2B6jN5WWHn7naeb1C8ss8f7ZIv9fj5gky6R0MfZDg3hY9NzHk8tN9s6ZyG46JihTiTNUfsDg3M3blatCMHGS0Z5mmcuk6BnShb3TLqx26Be1bmO9uEc4NbKDDksJiaYZPhya4GLy%2Bxe%2F6hahd20ERfmWlEZgs1%2FQO8acHYd0HRw1N7cDDB2%2Fu0xoHxHu23dDUDkOldIUAYuBcG0V%2FFSsyKqDV98qf5XZ9%2BaijlCpRKgwUDfGnlEfrxMOn1dgiGDh2zYwaTy9tQG%2F9lVACZAN%2FwA0W9EBEzZdmdsbuzgJ4yPp0%2BOQS8CcLjp9lq2E9O6UkV7SW0SUv%2BPgONfrU5n%2Bk%2Fc05X3fuX2KKGJbdu8XxP58YBd6hqinAw3oDVsl0IKlE4gQTnXwzELbOxpkPIzH%2FaVZgf3%2BVTAjqW5Q%2FnBijwmwkqOrDrTdVkQD1qX8ZmicW6WoqEZhC4gPXgOQEa%2BMD37YFErLXg0UU2xR1H6FQM7Z%2FiMrlruNHGi1RGyQ3RUgdWbCXjR0R83kC%2BWVMkGUCBMkTjJvU1mJcC6PiCMPvSscIGOqUBqy9mwiudLVrAOgl7dfhWJQ6bzb8TuvmfS8Vau1650EmqOA9gFxVh2p3boUGvur9AXIrxyFgtNj1rp71fVnMVu4vkuFeZnIdvM%2BKvZwhJhF6VAfyEe2TF0LCdHlf%2BJRgkXAke34xopUOz2LqnRF1A%2BQzqtvaMHjLuIa2errNodLSAFyyDqfb1duqQIEB%2BMP9GUZyXRizPeGJdDProgrsfxWd4hib4&X-Amz-Signature=7b91e337cb163738d828a35cffaa363011e1f7bdd63760f38056ae2286464928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BFYYA24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDZoaLYikIoOLH4B%2B3uKVmid6k04m2zqm%2BII8d4qUMArQIgGsB8Qg4xvzMzkDmzkdHqaZFVI9ibWiz8nQLau53IJB4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDC2E8SE3uM1dpz8x%2ByrcAzBem%2BST6OsKkY56R41F%2FcpkPM9gZlduMQUylWJU62adqfNUk26Hg9%2BgOuiRC1u%2FtdLXHPdU2XYbcnwYXvDFBs6%2B6jN5WWHn7naeb1C8ss8f7ZIv9fj5gky6R0MfZDg3hY9NzHk8tN9s6ZyG46JihTiTNUfsDg3M3blatCMHGS0Z5mmcuk6BnShb3TLqx26Be1bmO9uEc4NbKDDksJiaYZPhya4GLy%2Bxe%2F6hahd20ERfmWlEZgs1%2FQO8acHYd0HRw1N7cDDB2%2Fu0xoHxHu23dDUDkOldIUAYuBcG0V%2FFSsyKqDV98qf5XZ9%2BaijlCpRKgwUDfGnlEfrxMOn1dgiGDh2zYwaTy9tQG%2F9lVACZAN%2FwA0W9EBEzZdmdsbuzgJ4yPp0%2BOQS8CcLjp9lq2E9O6UkV7SW0SUv%2BPgONfrU5n%2Bk%2Fc05X3fuX2KKGJbdu8XxP58YBd6hqinAw3oDVsl0IKlE4gQTnXwzELbOxpkPIzH%2FaVZgf3%2BVTAjqW5Q%2FnBijwmwkqOrDrTdVkQD1qX8ZmicW6WoqEZhC4gPXgOQEa%2BMD37YFErLXg0UU2xR1H6FQM7Z%2FiMrlruNHGi1RGyQ3RUgdWbCXjR0R83kC%2BWVMkGUCBMkTjJvU1mJcC6PiCMPvSscIGOqUBqy9mwiudLVrAOgl7dfhWJQ6bzb8TuvmfS8Vau1650EmqOA9gFxVh2p3boUGvur9AXIrxyFgtNj1rp71fVnMVu4vkuFeZnIdvM%2BKvZwhJhF6VAfyEe2TF0LCdHlf%2BJRgkXAke34xopUOz2LqnRF1A%2BQzqtvaMHjLuIa2errNodLSAFyyDqfb1duqQIEB%2BMP9GUZyXRizPeGJdDProgrsfxWd4hib4&X-Amz-Signature=76f99fa6ccb83f2d625d216fa7c49ee941a1b8330cb39ca677911bd736839c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRAVRYE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDc8CoA%2BuvekVaEHhq%2FlPaWeB2FwCtxHTCxbSp3rW6jtQIgOhOMH51oJjEza5lc1duYqrGDPHaWayEt2aAB3rjF3Qoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFaFPsICaWGF5XjV6yrcA41NVgEmy929QAYyNtHJQgBWBE4Eu70wHbEW7ah4LtCW3PC1RpdESaRETMLCohltNSZSevYrTdepiRIQu0xyW4H98NOOLkLUiebtoQi%2FCAd0LkZV2R%2FE3YEm%2BLHNXVGZsbBQjcwxlv2FihGTxFtiQH7zBFYkypl5K1HTfhkW3nZMkpQjaARUT8QLzV8czt43UxJwNqLGbALNfwAEfJAYt81yoOWs7aWa6hF8XsN9uphRDago4xN8qmKLHwW6K7KQAH4sIPATSlnCNkb1Ma0L6sy5U71UGTwf3etzNAZ3o%2BLxKBjTe4zDo9ZlKge1tuQ22tzMnorjZcTvj6uuZtGIizHUnJ9moA7MCkfo%2B6rOBSeI3XWkXfW3eXFpUfQA5sXWuQfBVUBiarpWiARHbs29P4n1MA%2BVRaa4cGSmIaHTetpudxNrsrlvcn%2FYEQG2e9kw98wtFYkZVgSL4F3xZdpJCzCwzylmJwjqamh2dg4kFp4902YaqyyohH0tPhSrHMDLMG1toMszSR0jqdV1kXvAke1dO%2FseUylccvimVzKEadz86%2BhLNkn794GHNXxaN52v0Y2PsgKB%2FWHPQO13fPGnnArkn0%2BE7JoMTMB9jlKL9M4I6EVcibSdiXd9OJ%2F9MPHSscIGOqUBqtB9TnP%2BD1OpcSUZ8MRW7D9KcoN%2Bn8V4PsmJfvtBgNGLs4T1bh%2FxrEmg9ElDq7hIKnVuuz82pFIzbvSkPCf9ZJCLsMWo%2B7YafKytGUyqvaACH%2FPvvwMlvDM54FCV5g1A7eOTjBIxFxWxHVwVPemqTish4Xb10sSI4hyB%2BcMDoKSzd1AEBxQHfTJYo9z49Q1ksvFXKPx54t1dzpY4K8KeFAKMHBF%2B&X-Amz-Signature=fc2394c88e2925bbb6cafbf3392a5bffbdd92077f21001660dd80976f747c53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBGBXAO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDOPlMvaFAwannzgL0%2Be0wm8pSDRyz4f895KwnB8ARlWAIhALsZ22WNLSw9mTLJhhROiebq6R7qgisjE74uyZLapaUnKv8DCBsQABoMNjM3NDIzMTgzODA1Igw%2FGB1wTJtV3Hjh%2FvMq3APg6jLWR0YyRT0n3C%2Bj8Ox0qlqbraM6zWxyDy%2B8Zl74Gq%2B4Gg8eF%2FrHBDMlaVJ0Rb53CuHT%2FjZDzdG%2F9TXYjSdY0P5p2h4ugvDZmVNTyktLA6eMlnirQNm7yIUTF0m5IleBxyFzQyjdwwNtTJA5D52Gqnd30qw29faArAtoXbNcFsSeIVK%2B7lPuDtKQbL818a%2BmGYs8yvEsD9%2BMMAbXy3Dwq%2FXHy%2BScbRgcCsjZIjRZkZRxpYO9Z0v6fQNPxvK4wG9Wfp1qoDtKUeFpO8FdSIZPw%2FG%2FTWHtS7shiDb1ol8WwA3%2F%2FeatusGRfWk9Ym4zvCXxrvFK09zDGuIbX5DQO6z6XlyYfyDiLG%2Bow6sguIyToLOdYZwyBHrR1w%2FF05pFdewVenWd1sEYBTLiZwmjoNuIXfZmWfeSfWLm6UM43DGmWfyG2BZTPAYJtOhgNclPl%2BsB46xK4Vh4XZz6DGTmvnLWfeh8Dz40%2FysKyIKZZHaBl%2BNg4f2h5YsPCy1MqAsy7B6Wkme9rl2dOYP9jjq5Mj%2FUwM%2BFTKvVPTJKSy5StD4%2FdQOBtz7vyEJE%2F5Qae6YrE3Y86icn%2FUYCm%2FJR7dIoJqbaZTacPN9Tu3Iiwv9tgDwsxPFSm2buYD8m6uV6fDDS0rHCBjqkAVMp4qJtZojVOV2Uhi8cBb7Vjdc2ATC2zLm8Sqm0T%2BK7oqoxPAEtSqICOzRrHmc2Sn79fjfVOjd2qPDhr8dsCJtaqyST1qL4NvXO74V3N3Il55pbnWcgseJRAUKt3ip%2F5nBPf9dJZmlZ5iKwmRe5AH%2BqnyV5KEhJiPsbXzRQakCHgeEu30Gstmoqss6CyzjCQ2ldvtKgYzuNPQGlH3o2Uv41jcP7&X-Amz-Signature=f4d3eeb679d4dfad87a1b80815a10e3173804874be99b1b4fa0dfd3efe36b897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BFYYA24%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDZoaLYikIoOLH4B%2B3uKVmid6k04m2zqm%2BII8d4qUMArQIgGsB8Qg4xvzMzkDmzkdHqaZFVI9ibWiz8nQLau53IJB4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDC2E8SE3uM1dpz8x%2ByrcAzBem%2BST6OsKkY56R41F%2FcpkPM9gZlduMQUylWJU62adqfNUk26Hg9%2BgOuiRC1u%2FtdLXHPdU2XYbcnwYXvDFBs6%2B6jN5WWHn7naeb1C8ss8f7ZIv9fj5gky6R0MfZDg3hY9NzHk8tN9s6ZyG46JihTiTNUfsDg3M3blatCMHGS0Z5mmcuk6BnShb3TLqx26Be1bmO9uEc4NbKDDksJiaYZPhya4GLy%2Bxe%2F6hahd20ERfmWlEZgs1%2FQO8acHYd0HRw1N7cDDB2%2Fu0xoHxHu23dDUDkOldIUAYuBcG0V%2FFSsyKqDV98qf5XZ9%2BaijlCpRKgwUDfGnlEfrxMOn1dgiGDh2zYwaTy9tQG%2F9lVACZAN%2FwA0W9EBEzZdmdsbuzgJ4yPp0%2BOQS8CcLjp9lq2E9O6UkV7SW0SUv%2BPgONfrU5n%2Bk%2Fc05X3fuX2KKGJbdu8XxP58YBd6hqinAw3oDVsl0IKlE4gQTnXwzELbOxpkPIzH%2FaVZgf3%2BVTAjqW5Q%2FnBijwmwkqOrDrTdVkQD1qX8ZmicW6WoqEZhC4gPXgOQEa%2BMD37YFErLXg0UU2xR1H6FQM7Z%2FiMrlruNHGi1RGyQ3RUgdWbCXjR0R83kC%2BWVMkGUCBMkTjJvU1mJcC6PiCMPvSscIGOqUBqy9mwiudLVrAOgl7dfhWJQ6bzb8TuvmfS8Vau1650EmqOA9gFxVh2p3boUGvur9AXIrxyFgtNj1rp71fVnMVu4vkuFeZnIdvM%2BKvZwhJhF6VAfyEe2TF0LCdHlf%2BJRgkXAke34xopUOz2LqnRF1A%2BQzqtvaMHjLuIa2errNodLSAFyyDqfb1duqQIEB%2BMP9GUZyXRizPeGJdDProgrsfxWd4hib4&X-Amz-Signature=89428e821ea28000e0c1d9babd9c8d60e02ea7b3357db2ba80eadcc1c37c307d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
