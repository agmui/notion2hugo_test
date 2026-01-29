---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRES6RL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpY6aXwsLzf6ihOMeQ8C1Kbzfv8xCZGy8n%2BvmRZ3QQQIgbSeQjGO%2BTshNIiHE6936QLfuZj3NKAi%2BEM5qPt7So4Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFpFykRr6P6EPqBMeSrcA34dshfEY9aeaJ4bOr50%2BIWeXiQ5inyeTH5VZNuzaC6XW51gIEkSSe956yCV5pCMTvbv%2FXA77tkZlOZzW%2B%2BS8fafmXktLmmoE2FmBQpd7vaXjmSHHY6EAKl%2BP5e4z7WcB64fGO2A3l38sBOqVNAT6379bsnOHMM8aA4neM6%2FcvcNyFQl0toPRWlWIBDB5GYxcoWGFlyLl0T99r2Kt6YzxtwgfiUY90mdA1X%2Fz0RYwV%2BgbDW%2FTECejDhib2K5UWvH1j2VL%2BKAXfG0LLu494YC4K2OO9z35wRVrEMAzDLkFRa5nX3AjAn1qNSmz6QmpjifjeSy7cnpYc6bQ9QPxZ0j63pG8yrwRNzkcOZnd%2BxB5aFZX0V6IqLmDz7rzJnJdmzGATvBIyBm6S5EGtuq9otU%2B%2Bk8BxDnn3l4G1a2Ah0SrnK5E%2BCTuLk0tZqfEegJT%2Fm2QNNL%2Fz%2BMPbHLmu%2BR%2FbYVbeyn1qP0MgswfJIWx4vee5mNrzoZxHRtOLOUKvUjqnco4U6oYimcsh1irQLIG0HaeK15d%2Fgmj9km5WzoAKr%2BXAHyOhs37puhFLfpme3vuKKWDFbFNF47FoyR1ua%2FEOXN77HvPkaLrQpA5nuxxOE2VWVJRX3pfWNXJHKhNa93MNz16ssGOqUBm37cEAs4Sauj%2FSlwjJKt6VPnIlXhur0j0xjUQSVniEFkyGHg0VqK6jDToC5e7GSZcpT4WiupZwDKe9I%2BZw%2Fo6DVU9R%2FxIF%2FVf%2BSoCZ1%2B%2F8rd87ttvmkgrcMpuYsjd%2BbH3dnoCX1DEW4%2BTYgb8Nz%2FTqWzTDjjk6GhP0lCl5qvGr4SKd59smRJcoKQ0Oge5F1jOapskzOP%2F936bRXamXC9qdWl7Jr8&X-Amz-Signature=97a78da5ce70fbc0f6a6ca016cdf34b215757ac8bbd496392627ab082fc95573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRES6RL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpY6aXwsLzf6ihOMeQ8C1Kbzfv8xCZGy8n%2BvmRZ3QQQIgbSeQjGO%2BTshNIiHE6936QLfuZj3NKAi%2BEM5qPt7So4Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFpFykRr6P6EPqBMeSrcA34dshfEY9aeaJ4bOr50%2BIWeXiQ5inyeTH5VZNuzaC6XW51gIEkSSe956yCV5pCMTvbv%2FXA77tkZlOZzW%2B%2BS8fafmXktLmmoE2FmBQpd7vaXjmSHHY6EAKl%2BP5e4z7WcB64fGO2A3l38sBOqVNAT6379bsnOHMM8aA4neM6%2FcvcNyFQl0toPRWlWIBDB5GYxcoWGFlyLl0T99r2Kt6YzxtwgfiUY90mdA1X%2Fz0RYwV%2BgbDW%2FTECejDhib2K5UWvH1j2VL%2BKAXfG0LLu494YC4K2OO9z35wRVrEMAzDLkFRa5nX3AjAn1qNSmz6QmpjifjeSy7cnpYc6bQ9QPxZ0j63pG8yrwRNzkcOZnd%2BxB5aFZX0V6IqLmDz7rzJnJdmzGATvBIyBm6S5EGtuq9otU%2B%2Bk8BxDnn3l4G1a2Ah0SrnK5E%2BCTuLk0tZqfEegJT%2Fm2QNNL%2Fz%2BMPbHLmu%2BR%2FbYVbeyn1qP0MgswfJIWx4vee5mNrzoZxHRtOLOUKvUjqnco4U6oYimcsh1irQLIG0HaeK15d%2Fgmj9km5WzoAKr%2BXAHyOhs37puhFLfpme3vuKKWDFbFNF47FoyR1ua%2FEOXN77HvPkaLrQpA5nuxxOE2VWVJRX3pfWNXJHKhNa93MNz16ssGOqUBm37cEAs4Sauj%2FSlwjJKt6VPnIlXhur0j0xjUQSVniEFkyGHg0VqK6jDToC5e7GSZcpT4WiupZwDKe9I%2BZw%2Fo6DVU9R%2FxIF%2FVf%2BSoCZ1%2B%2F8rd87ttvmkgrcMpuYsjd%2BbH3dnoCX1DEW4%2BTYgb8Nz%2FTqWzTDjjk6GhP0lCl5qvGr4SKd59smRJcoKQ0Oge5F1jOapskzOP%2F936bRXamXC9qdWl7Jr8&X-Amz-Signature=920724f50d64660c7208b783f06c4bf2afc299fc579027b4fc3ffa605a6e1315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRES6RL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpY6aXwsLzf6ihOMeQ8C1Kbzfv8xCZGy8n%2BvmRZ3QQQIgbSeQjGO%2BTshNIiHE6936QLfuZj3NKAi%2BEM5qPt7So4Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFpFykRr6P6EPqBMeSrcA34dshfEY9aeaJ4bOr50%2BIWeXiQ5inyeTH5VZNuzaC6XW51gIEkSSe956yCV5pCMTvbv%2FXA77tkZlOZzW%2B%2BS8fafmXktLmmoE2FmBQpd7vaXjmSHHY6EAKl%2BP5e4z7WcB64fGO2A3l38sBOqVNAT6379bsnOHMM8aA4neM6%2FcvcNyFQl0toPRWlWIBDB5GYxcoWGFlyLl0T99r2Kt6YzxtwgfiUY90mdA1X%2Fz0RYwV%2BgbDW%2FTECejDhib2K5UWvH1j2VL%2BKAXfG0LLu494YC4K2OO9z35wRVrEMAzDLkFRa5nX3AjAn1qNSmz6QmpjifjeSy7cnpYc6bQ9QPxZ0j63pG8yrwRNzkcOZnd%2BxB5aFZX0V6IqLmDz7rzJnJdmzGATvBIyBm6S5EGtuq9otU%2B%2Bk8BxDnn3l4G1a2Ah0SrnK5E%2BCTuLk0tZqfEegJT%2Fm2QNNL%2Fz%2BMPbHLmu%2BR%2FbYVbeyn1qP0MgswfJIWx4vee5mNrzoZxHRtOLOUKvUjqnco4U6oYimcsh1irQLIG0HaeK15d%2Fgmj9km5WzoAKr%2BXAHyOhs37puhFLfpme3vuKKWDFbFNF47FoyR1ua%2FEOXN77HvPkaLrQpA5nuxxOE2VWVJRX3pfWNXJHKhNa93MNz16ssGOqUBm37cEAs4Sauj%2FSlwjJKt6VPnIlXhur0j0xjUQSVniEFkyGHg0VqK6jDToC5e7GSZcpT4WiupZwDKe9I%2BZw%2Fo6DVU9R%2FxIF%2FVf%2BSoCZ1%2B%2F8rd87ttvmkgrcMpuYsjd%2BbH3dnoCX1DEW4%2BTYgb8Nz%2FTqWzTDjjk6GhP0lCl5qvGr4SKd59smRJcoKQ0Oge5F1jOapskzOP%2F936bRXamXC9qdWl7Jr8&X-Amz-Signature=0073675cfada6e2dc327c6594cf671df5661242908870bff0ebd9727851f729d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2NP6IP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzbJ%2B0FF4VOWqfp2wfuWdusD%2F6CWXlTbvE8kpKqbpLrAiAHN8FQ2700c6LI7wLA3G9Bh6o8nq3a%2F5aZYMnueH%2Fy4Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPim47lhdju%2BGNCyDKtwDPIZjHFrc6IqYYRm%2FvsB0es9ZTSZ1CNsmCq0m4yl0wezKPvMRlm9SM7SlPRKLIKcFC83Srms9xXjhJTlx%2BUROjLrNSC3wVVLxouRoNyh%2BOty1RPnKSl5oDdW2lB0EwWpzzdTiNgwlwK3%2FFPNhVPbMDYwaTo7ehz8u7Wdk9%2BRy3t0DL8RMgwvKLbqU2EMlfZN5jZPUOdIpwyBYT%2FT0RKY9D%2BHBETYs2g0%2B3w8v1lmFrDflP0xU4SpOX4jEgezYYCzmqsFwMxeSFBMhLegWThFCyrdRdY5N02nSN60YS5pLKPLnhf98SVbF5TtuXHkN8u7mUT6ThACUWIyeEtD64Rxf4t1AYI%2FdVJhnikaNHMwIrHUtKNeWep9tDdH1xxWfeM1v4yRFyp0iZ9YdsrTE6S0vHWea88I1ci5OdRXh90UZL9RHXaMeGWzhbAiWShAoQAcRTW4j9TxesTEVQ1sX4%2Fz9e%2FiPepU3KD%2FXBV4ip9zWBkvNZHEQdelg1Lc5htqcGxsqNBegchqQZrRyxh6xSf0KaJS7kfSyhpI4VLZm84ODtCVW%2FSzoDu%2FvrYzwJBa%2B5R4t3zYUEL3%2Fi9JUbVTA1VjCStIDURfsLlv%2B5%2BZwIJ6hMGV8ovu5B%2Ftg8Zj7fXowhffqywY6pgEpfiVXUFT3rMtnbkwAnSSnCTkqtj7Etl6YzZTHpfJwApXzJ2f5%2BvV6xkQQlLQ200SM%2B88%2FZqdWfaHJb2hs6sekIgvKXepJTepQeEbV6H8%2FX6lFZ5TQo24vnjEbKrJ52TJcWVFX6rEg%2FORjWd0hALiTG5Cpuy5gmcv0qPgE%2B2LRRk706nlhlPGNjVnKqmkG5x50b9%2FHmlpybwbaOYtocjornsetKjv3&X-Amz-Signature=48cb67dab096ba17319e8a589def08578e4d087b32d66ff6142ce0c46fd02f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBUGWILI%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wUa%2B4rR3v%2BiwgSN6mh6fjLRyPYnluropL23C9AK7OwIgfa3YAoO35Y4RWU36FaLE9FcN7NkK3SVKzeRrQnN4U5Qq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHaWsHxTXN0WKZTT%2BCrcA3rYAAS%2BEDcGj21nSvsrcJ%2Bg72KELw8JBJmTLiFUsENpkO0Gk0LcwMujkmRLcoT1b3csJc8udGADHkcbIh3YuiKD8Jqh%2BQGdJuq0B%2FVd2OJdewL%2F%2F%2F%2BZzmQ38FX6a6FcJ%2Fck4ZQqpOCPUbCWXPAdWlEjLKsm0WzcsCgeoeeM8utrlbFy%2Fi5W6AHriy50L63s0QytfsJ%2F9lFDHKMVHgtOYKIaZFKj3Y1voqLnVaLorWBwc3tybG5FWIuuHqE6J21uWQSBOlBfibLHj%2BeXMf888UlQobR23YR%2BtcLbwxaR1AS%2Fi2iWMDkN0N7jxMdatQ3vLKm3UQKDv1ebXF8ScqhQhORM4NtYMHaJ9PqPya32gFNyx21xFhw1RWPntO2W%2BclaXpl5Sy%2FRuR6Po9vrbs5DuVL4BIooRPsLIRV%2BF40ZGkVAalyPM9Hes5y1OvCpSjzUZAuPFSmB5WIJv4%2FS%2F0YHtmUjadf%2FHREh0aBog0tkvs70LxT7nUGKoPkZCjH04PdseikGOGrC%2FhSGL9%2BaNxxBCsASNTSJ%2Bwj5W88AV6aSfUFhpEocjDeruT4vZ%2B0QdVonx4jxXZKl1qRYM7u4joz2ydKg2rPpE4Gn2aIwS1aRL2Hv1MuWk8tMZ3jW%2Bg5wMK%2F16ssGOqUB48rF0MMIe95vaET8kUMvkRRLH42pz7fBIv0j5FemK8Gz0iI0ZliOvjQqw7CFl6AoxgVPMJeoHCL0UZvS1OVg7tr%2BaquWEXQR6OcBcVsAvd%2Bx8SSHk1%2Fc8Iz0t3I1SkfNKc%2FfBF2JASY6Ijr%2FQuzKyR8YVncZ%2F7MosbOZMJRsg8a%2FAzAsSexZ2%2FQd4JSltt2sPa6DoX3%2F8GH3Z5r4rwI2nFfKHp3G&X-Amz-Signature=ed4fab99c8c5085ce4031803b1f9384714ec91dc65dcb16444a93470a9cbc593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKRES6RL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJpY6aXwsLzf6ihOMeQ8C1Kbzfv8xCZGy8n%2BvmRZ3QQQIgbSeQjGO%2BTshNIiHE6936QLfuZj3NKAi%2BEM5qPt7So4Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFpFykRr6P6EPqBMeSrcA34dshfEY9aeaJ4bOr50%2BIWeXiQ5inyeTH5VZNuzaC6XW51gIEkSSe956yCV5pCMTvbv%2FXA77tkZlOZzW%2B%2BS8fafmXktLmmoE2FmBQpd7vaXjmSHHY6EAKl%2BP5e4z7WcB64fGO2A3l38sBOqVNAT6379bsnOHMM8aA4neM6%2FcvcNyFQl0toPRWlWIBDB5GYxcoWGFlyLl0T99r2Kt6YzxtwgfiUY90mdA1X%2Fz0RYwV%2BgbDW%2FTECejDhib2K5UWvH1j2VL%2BKAXfG0LLu494YC4K2OO9z35wRVrEMAzDLkFRa5nX3AjAn1qNSmz6QmpjifjeSy7cnpYc6bQ9QPxZ0j63pG8yrwRNzkcOZnd%2BxB5aFZX0V6IqLmDz7rzJnJdmzGATvBIyBm6S5EGtuq9otU%2B%2Bk8BxDnn3l4G1a2Ah0SrnK5E%2BCTuLk0tZqfEegJT%2Fm2QNNL%2Fz%2BMPbHLmu%2BR%2FbYVbeyn1qP0MgswfJIWx4vee5mNrzoZxHRtOLOUKvUjqnco4U6oYimcsh1irQLIG0HaeK15d%2Fgmj9km5WzoAKr%2BXAHyOhs37puhFLfpme3vuKKWDFbFNF47FoyR1ua%2FEOXN77HvPkaLrQpA5nuxxOE2VWVJRX3pfWNXJHKhNa93MNz16ssGOqUBm37cEAs4Sauj%2FSlwjJKt6VPnIlXhur0j0xjUQSVniEFkyGHg0VqK6jDToC5e7GSZcpT4WiupZwDKe9I%2BZw%2Fo6DVU9R%2FxIF%2FVf%2BSoCZ1%2B%2F8rd87ttvmkgrcMpuYsjd%2BbH3dnoCX1DEW4%2BTYgb8Nz%2FTqWzTDjjk6GhP0lCl5qvGr4SKd59smRJcoKQ0Oge5F1jOapskzOP%2F936bRXamXC9qdWl7Jr8&X-Amz-Signature=b05d627bfa713fe0897def84d4314cb8af0da033b9cfca2954f4906870e274df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
