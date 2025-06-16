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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACE4GTL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDOkVHBYEh1XiFnj9wEuB5CZRhGhm78bxp4lnWCRK2ErQIhAMfSCkO9ncang7IHFzU6xtITvIzB62UWk0dwrP%2BxHOkTKv8DCGgQABoMNjM3NDIzMTgzODA1IgyoflYsf1HxBzr5n0sq3APJJdrw0jq79Z3BHg%2FNV1s62ilJNHOtS%2BXo7IHqt3UTjOiNfo4gHiFo%2Fv4kdbGeQnq3jzaWidsF6eXAlSFV2gBBF3DGowmzyTRfynKrxPGvHCSk6CCtosxD57YybzJY37ne8aw8g7SUH8g%2Fpxa1Zc3qOU82lwdIDlkC1muhEht82jfZyeoLsR7Wb0wstbJ3DnDN2qHXbGlEW5%2FgLlCgU78ahnDXEcAKRrHC1OAJOvkGunCuC%2BU%2FTNo%2Bg%2Bb9%2FYHgmvk%2FVfiEoIY1vcSNf%2BVXQtXFp38%2BusSxuMxiMFZhDWUu%2FdHYqxdiAM0vj10QGBMDPRzjYKZ%2BluWWjnBZ%2Blf%2Bitc4qnLAQCzI0VaNEqq3Vx0w1%2BI4aE%2BWfqvekhfi1aHe76%2BU4q4VIpslJI3UhAryYRoVdS6JMjf5przhgqwbdZu35uMvmGq9i5sxDkEA8uO3SxMv1qZoOaXicrS71wIhTNtS09MF8txML6gtG3XLIS8L1m%2FwNOhmDme0ScBhQ5Ywn679wofxYSEueZa3KRW0LiNRXXOph5vKQQhOg8bWqiZPJ0YoLtvuDc5xQxE%2BPPzzJ4ahLxIzhKvWXwt7jLIPd8ZBDHw76BI%2BrEkxnrh%2B7uR3Gd72vsry%2BN5UHzMKCjC%2BuMLCBjqkAdc90TfFOD6AKOiZoj5P8nNo7UQa%2F6dyUsYasJMP2hZYvTTLhG49B0meTvqphFxuGPmtPxb0pGePievonelDf7Qi1iJ7T0QK9HycgMWzdvm3uZWqiLD3aGTWTV7J4%2BcYh7%2FKNMPDXh9kCVvwgGOb8iP5P6ZDsuKnDNRW6JbNXb1K0%2Fb6Jdr%2FK8sIRfassBi6aVCShuLjXXeKTKtcbXEdja1frOW%2F&X-Amz-Signature=e20a0a5dbab74c2bd00a61b21db914364dde98d8e6d146c4cf6597e54e24fb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACE4GTL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDOkVHBYEh1XiFnj9wEuB5CZRhGhm78bxp4lnWCRK2ErQIhAMfSCkO9ncang7IHFzU6xtITvIzB62UWk0dwrP%2BxHOkTKv8DCGgQABoMNjM3NDIzMTgzODA1IgyoflYsf1HxBzr5n0sq3APJJdrw0jq79Z3BHg%2FNV1s62ilJNHOtS%2BXo7IHqt3UTjOiNfo4gHiFo%2Fv4kdbGeQnq3jzaWidsF6eXAlSFV2gBBF3DGowmzyTRfynKrxPGvHCSk6CCtosxD57YybzJY37ne8aw8g7SUH8g%2Fpxa1Zc3qOU82lwdIDlkC1muhEht82jfZyeoLsR7Wb0wstbJ3DnDN2qHXbGlEW5%2FgLlCgU78ahnDXEcAKRrHC1OAJOvkGunCuC%2BU%2FTNo%2Bg%2Bb9%2FYHgmvk%2FVfiEoIY1vcSNf%2BVXQtXFp38%2BusSxuMxiMFZhDWUu%2FdHYqxdiAM0vj10QGBMDPRzjYKZ%2BluWWjnBZ%2Blf%2Bitc4qnLAQCzI0VaNEqq3Vx0w1%2BI4aE%2BWfqvekhfi1aHe76%2BU4q4VIpslJI3UhAryYRoVdS6JMjf5przhgqwbdZu35uMvmGq9i5sxDkEA8uO3SxMv1qZoOaXicrS71wIhTNtS09MF8txML6gtG3XLIS8L1m%2FwNOhmDme0ScBhQ5Ywn679wofxYSEueZa3KRW0LiNRXXOph5vKQQhOg8bWqiZPJ0YoLtvuDc5xQxE%2BPPzzJ4ahLxIzhKvWXwt7jLIPd8ZBDHw76BI%2BrEkxnrh%2B7uR3Gd72vsry%2BN5UHzMKCjC%2BuMLCBjqkAdc90TfFOD6AKOiZoj5P8nNo7UQa%2F6dyUsYasJMP2hZYvTTLhG49B0meTvqphFxuGPmtPxb0pGePievonelDf7Qi1iJ7T0QK9HycgMWzdvm3uZWqiLD3aGTWTV7J4%2BcYh7%2FKNMPDXh9kCVvwgGOb8iP5P6ZDsuKnDNRW6JbNXb1K0%2Fb6Jdr%2FK8sIRfassBi6aVCShuLjXXeKTKtcbXEdja1frOW%2F&X-Amz-Signature=06027d241cbdfb09909ad7d12b90840c78ac4f077af1dbc4d9558bb92d414f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACE4GTL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDOkVHBYEh1XiFnj9wEuB5CZRhGhm78bxp4lnWCRK2ErQIhAMfSCkO9ncang7IHFzU6xtITvIzB62UWk0dwrP%2BxHOkTKv8DCGgQABoMNjM3NDIzMTgzODA1IgyoflYsf1HxBzr5n0sq3APJJdrw0jq79Z3BHg%2FNV1s62ilJNHOtS%2BXo7IHqt3UTjOiNfo4gHiFo%2Fv4kdbGeQnq3jzaWidsF6eXAlSFV2gBBF3DGowmzyTRfynKrxPGvHCSk6CCtosxD57YybzJY37ne8aw8g7SUH8g%2Fpxa1Zc3qOU82lwdIDlkC1muhEht82jfZyeoLsR7Wb0wstbJ3DnDN2qHXbGlEW5%2FgLlCgU78ahnDXEcAKRrHC1OAJOvkGunCuC%2BU%2FTNo%2Bg%2Bb9%2FYHgmvk%2FVfiEoIY1vcSNf%2BVXQtXFp38%2BusSxuMxiMFZhDWUu%2FdHYqxdiAM0vj10QGBMDPRzjYKZ%2BluWWjnBZ%2Blf%2Bitc4qnLAQCzI0VaNEqq3Vx0w1%2BI4aE%2BWfqvekhfi1aHe76%2BU4q4VIpslJI3UhAryYRoVdS6JMjf5przhgqwbdZu35uMvmGq9i5sxDkEA8uO3SxMv1qZoOaXicrS71wIhTNtS09MF8txML6gtG3XLIS8L1m%2FwNOhmDme0ScBhQ5Ywn679wofxYSEueZa3KRW0LiNRXXOph5vKQQhOg8bWqiZPJ0YoLtvuDc5xQxE%2BPPzzJ4ahLxIzhKvWXwt7jLIPd8ZBDHw76BI%2BrEkxnrh%2B7uR3Gd72vsry%2BN5UHzMKCjC%2BuMLCBjqkAdc90TfFOD6AKOiZoj5P8nNo7UQa%2F6dyUsYasJMP2hZYvTTLhG49B0meTvqphFxuGPmtPxb0pGePievonelDf7Qi1iJ7T0QK9HycgMWzdvm3uZWqiLD3aGTWTV7J4%2BcYh7%2FKNMPDXh9kCVvwgGOb8iP5P6ZDsuKnDNRW6JbNXb1K0%2Fb6Jdr%2FK8sIRfassBi6aVCShuLjXXeKTKtcbXEdja1frOW%2F&X-Amz-Signature=da9b5d7690b7dc756e7d24f7ef93defa58af5d293419c5596d6012993f3d909a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPZCPUK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIAb6I0%2B4FDIQAGpIw%2BEIyWP0gvID%2FUgECeDMnZmqVJ0XAiA108YJvAhhKu8oVNg30gg4OaP9cVizSYHZ9rTfJ%2BZp6Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMUJZZ%2B38RT0R5qO8JKtwD9JN%2FDUMUJgCI0Hj770kizlc3iTveGw9I4UzcCpJFQz55L5W8Dx56i3hiS%2BcclxnGOnc5IS3QoqcCuRmpu4tbEbB1LEvxDv6d%2BPU029pX6Pp25qZBMEmaGTqi%2Beg%2FSkjF65kwRyHPzwRraDhP%2Fi6S2E9Bkl3v1n9C3DWgaqvhE%2BaahNUE%2BII2VkeYw4bdV8tlIZC2zK2zFB6HSWb8TufCw9NWurWpbZyXVFnqFIhhZuUA3lvPLrvVULXlW09MlvqA7%2Fh09FfSGb7rqYEsC8vVOmZY5oEMXVcbC8RNLABklA%2Fmp828JIALLlQSAWADMSxoMlf11ttveLuVIxOmG6QQ2gonhOc2D1Ov6WWWSgThoQlO%2FBG9uwkWfcs%2BdeYVC2XVRPYDmKd2gRmQBKYwLCT%2Fkkaxtb6iWRkV04QlZ0yz8YSCznxdmikbIwQsqUNcGfxQmyPdgvMPpMVBGKJKoG%2BtMvcT8cF28BJLeyWx%2FSuNRxLQCfegrFR35ByDB6GQgwf8wxiXS2WOCHd99UfmkPoSzI7JReZ0e%2FYDlExtlTMFV3Vd3Xkyc1eltL74bXpBKyh1STuFsuNtoxVTKdfBsZQMbHKaC4o%2F%2FLxWB%2BBpK7e5EOvu%2B7hbGrwXslqBOeEwwbjCwgY6pgHJMYBH1YwV5pZidTEi5zRNsJQO1DMpOJtbW3uBjKphagafotega%2BM2hJ5x6rkXeOtwvfa2Iyip%2FzFN9wK2PlACQTywa%2BioIBLJ7bETPVdbtlDI95IP8Ukx%2FOHa5CrV9X2ZZ%2FiOQrsHP3w4Nn4gZJO6%2B4nDnYI3cGnQ%2B%2BTnua8cu3uspeUQJHdFiIkVt%2B%2Fx2elW6EgRuHcsP9HUKZL8K7io22aXy2ku&X-Amz-Signature=c392ee93b13a177eae9f4ac958b90a2ba9dd678f5cd277d580183e26f69bb545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPXEEK2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC8fnTj68pVCCJhMoBoowLEcRF6FWxfaBcgTZnqX1WZ0AiBKjXRJ%2FybmEGWJo5N3%2B%2FHhYv0xZsGxKhQujQcLLDdeuyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQEAkdeWWf1daHdjjKtwD76yStZasB7KC07E6%2FURH9zd5oPfjAkIQbKZrKHteBAOdgBRzJjNf%2F2CKZ30NHhliUT7Cq8Y0XAPZPi3ZNb2YgU%2FaBOaTti81d3P4X05LVsdQyFL4%2BYZkGcQ2UmEURyfcvkOqsN4fef1zdxk2bnz3b7At%2BSjfs6t6DZ1P5JGoCFCPb3XRwsuNeez%2FHfRyNZDENUF9%2BK9rdGkLYge9yc6clk3d8HjwhmjUs2BcX%2BPVyPXmq1G2BZpB5wc3zGPzA8GwpbE2PY27HePjiNXSqH3Umv0BDCsBxuhs3GnL4IAihvkRQiDRAB3vFiEydkyxYJ3EiOOkx7Inja7cD%2B%2BErtxxoU5N%2BedOMirJZzNexELATVCUGdOxI7SnGW4Dxpfwed%2FmmpWCwQpfOCXjBKZ2Rlj83e2gajgRNSdjon1g%2BhbzNnUEYotqzoJWUnN2Bx1sJhr%2BTtXM0n22IiKWXiV876rRir9w6J8bH%2FiIh327Dzfed7MZCqseSAYvl7xhTZ%2F6Od8LmOWDKSoOlFkS69q9PQHoCULFzRPfYpcsrOKaLhz0hsyRBGefK7QlgNDa5lYVJdOlcYJnKWJTpe16tsd2kZoc%2B26cUsEfR5V1YHcpMMTnwRtR%2BeYEkyXhu%2BiTmY8wyLjCwgY6pgFWDGjSsIL3GHoHk%2Fchq6N%2Bmv4ZoQMOlWq8nqPAMNukd0nhkN0tTzPV0Y%2FcQYTBqIyJ4frEXy5x%2FwrpwJC1WO4XiVlS1WBMH5QBs8KksbHabBd3QqfmXaiIXcMovnxSQNEuUvcZUXJDe8dwhusmFouQZ6EvG7yiw1l3X%2FhfX0xyFzkG7ZNbvOCc%2BuziVkldzXlUfYwRAORQzgrddopWuSYDJNfWfmTd&X-Amz-Signature=372b99c20ee3147c34b3e5e785c482e1ee1ad44d39f3d5654fe8143ffb1bdf8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACE4GTL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDOkVHBYEh1XiFnj9wEuB5CZRhGhm78bxp4lnWCRK2ErQIhAMfSCkO9ncang7IHFzU6xtITvIzB62UWk0dwrP%2BxHOkTKv8DCGgQABoMNjM3NDIzMTgzODA1IgyoflYsf1HxBzr5n0sq3APJJdrw0jq79Z3BHg%2FNV1s62ilJNHOtS%2BXo7IHqt3UTjOiNfo4gHiFo%2Fv4kdbGeQnq3jzaWidsF6eXAlSFV2gBBF3DGowmzyTRfynKrxPGvHCSk6CCtosxD57YybzJY37ne8aw8g7SUH8g%2Fpxa1Zc3qOU82lwdIDlkC1muhEht82jfZyeoLsR7Wb0wstbJ3DnDN2qHXbGlEW5%2FgLlCgU78ahnDXEcAKRrHC1OAJOvkGunCuC%2BU%2FTNo%2Bg%2Bb9%2FYHgmvk%2FVfiEoIY1vcSNf%2BVXQtXFp38%2BusSxuMxiMFZhDWUu%2FdHYqxdiAM0vj10QGBMDPRzjYKZ%2BluWWjnBZ%2Blf%2Bitc4qnLAQCzI0VaNEqq3Vx0w1%2BI4aE%2BWfqvekhfi1aHe76%2BU4q4VIpslJI3UhAryYRoVdS6JMjf5przhgqwbdZu35uMvmGq9i5sxDkEA8uO3SxMv1qZoOaXicrS71wIhTNtS09MF8txML6gtG3XLIS8L1m%2FwNOhmDme0ScBhQ5Ywn679wofxYSEueZa3KRW0LiNRXXOph5vKQQhOg8bWqiZPJ0YoLtvuDc5xQxE%2BPPzzJ4ahLxIzhKvWXwt7jLIPd8ZBDHw76BI%2BrEkxnrh%2B7uR3Gd72vsry%2BN5UHzMKCjC%2BuMLCBjqkAdc90TfFOD6AKOiZoj5P8nNo7UQa%2F6dyUsYasJMP2hZYvTTLhG49B0meTvqphFxuGPmtPxb0pGePievonelDf7Qi1iJ7T0QK9HycgMWzdvm3uZWqiLD3aGTWTV7J4%2BcYh7%2FKNMPDXh9kCVvwgGOb8iP5P6ZDsuKnDNRW6JbNXb1K0%2Fb6Jdr%2FK8sIRfassBi6aVCShuLjXXeKTKtcbXEdja1frOW%2F&X-Amz-Signature=bce1ddbe74df69ef107e50fded387e8b0a1dd82db9ab4a6223b321404dde2ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
