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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBAF74H%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHcjVc2sOgiXP5%2FvfYImvCK5fVot%2Fxvb4DB6mn2vU32gAiEAoROan3OyJBAEcz4GezLRvbEkN82tUjkFEeUjajZ8d3cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIvvxnFKprG8%2FG4rqircA7AisIb%2F5VIO00W4RtpE%2BvWtzjUY2X0ZE1nmjh12P9hFuqILgP%2BR9v%2FRkFNx7q%2ByzzNcS9XawS1l3%2BpQQGk0srZPrx6l73Ye9vZghSJOtZaem4U5yjrGOyEvb79hRhEvN9%2Fthe2KLOYvpDgU4UYVMPGwwi7I0MlAWjBduqoeR%2BkhEsiJxeqhIY0Mm813epT5Tn3SzLXF7M6QUHwz4F5suESHnALWrw8XsWerx3zfHYLsFzHPIvtjf%2F8vHsvYKCEKPB0IeLCWbHuhA6nMxwrAfah9WLOSrh7i%2BVDLv8%2F2L4omjwk5QlaXM%2BKUA65P%2FQb0zEFrqfhqNSQKZKzyv1P10NWx2244qgUwEGUHvL42lOce60l1O2FNtOk8Lkn%2BmZbRVSeFVB7YmOauvO8uneLT2G8x8v%2BZERZP70osbK1M78LdX8VKySjSkU24V4xTrBAm1Sm7jVfYpIvdAZVJ4zX9MJUoMS145BJ42k3l2jgIVMTN5wz9avmkyFO2Jkt7G5%2FXgx3bsUmwh0WoHk0e%2FhpscCvgp1%2BtHd53hQSBb2AbnkueOiIM%2BxBtrRjlM4zypNsEo%2F52O%2BoNR4OOUfp4TbLhgzIpVU6TXiY5uGWuzA1hFNWruuJWGj321Uzxn9XQMNnZptIGOqUBSSUceVON3XSzYC2oyjO54ShRhkcsfccir5OAtmXkHCwcU2q6pRZRrM4Ps8FDNk1%2B53veifweBPoN9ef8j2XFhlR5V6eLzAwDrXVF4m9UM9nu%2B4bpqDOv8LndXKOQHx1WUzO2KKHj4j%2F%2FqZ8bGA7nCV9Wp7ER9YQqxQXCuaeiZiJQ1fddKSMLt0XeSoZfATdObBJeg%2BpQP1Rs%2Fwxqq6hqEUKQYJb5&X-Amz-Signature=0ac994df9cb530c72303147511110218f2a0b8fce234885dcc5b8231bb50181c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBAF74H%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHcjVc2sOgiXP5%2FvfYImvCK5fVot%2Fxvb4DB6mn2vU32gAiEAoROan3OyJBAEcz4GezLRvbEkN82tUjkFEeUjajZ8d3cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIvvxnFKprG8%2FG4rqircA7AisIb%2F5VIO00W4RtpE%2BvWtzjUY2X0ZE1nmjh12P9hFuqILgP%2BR9v%2FRkFNx7q%2ByzzNcS9XawS1l3%2BpQQGk0srZPrx6l73Ye9vZghSJOtZaem4U5yjrGOyEvb79hRhEvN9%2Fthe2KLOYvpDgU4UYVMPGwwi7I0MlAWjBduqoeR%2BkhEsiJxeqhIY0Mm813epT5Tn3SzLXF7M6QUHwz4F5suESHnALWrw8XsWerx3zfHYLsFzHPIvtjf%2F8vHsvYKCEKPB0IeLCWbHuhA6nMxwrAfah9WLOSrh7i%2BVDLv8%2F2L4omjwk5QlaXM%2BKUA65P%2FQb0zEFrqfhqNSQKZKzyv1P10NWx2244qgUwEGUHvL42lOce60l1O2FNtOk8Lkn%2BmZbRVSeFVB7YmOauvO8uneLT2G8x8v%2BZERZP70osbK1M78LdX8VKySjSkU24V4xTrBAm1Sm7jVfYpIvdAZVJ4zX9MJUoMS145BJ42k3l2jgIVMTN5wz9avmkyFO2Jkt7G5%2FXgx3bsUmwh0WoHk0e%2FhpscCvgp1%2BtHd53hQSBb2AbnkueOiIM%2BxBtrRjlM4zypNsEo%2F52O%2BoNR4OOUfp4TbLhgzIpVU6TXiY5uGWuzA1hFNWruuJWGj321Uzxn9XQMNnZptIGOqUBSSUceVON3XSzYC2oyjO54ShRhkcsfccir5OAtmXkHCwcU2q6pRZRrM4Ps8FDNk1%2B53veifweBPoN9ef8j2XFhlR5V6eLzAwDrXVF4m9UM9nu%2B4bpqDOv8LndXKOQHx1WUzO2KKHj4j%2F%2FqZ8bGA7nCV9Wp7ER9YQqxQXCuaeiZiJQ1fddKSMLt0XeSoZfATdObBJeg%2BpQP1Rs%2Fwxqq6hqEUKQYJb5&X-Amz-Signature=f1ca32584b515ce9b3b57e542f27dce31178a1445d93831301c26c8c0a866f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBAF74H%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHcjVc2sOgiXP5%2FvfYImvCK5fVot%2Fxvb4DB6mn2vU32gAiEAoROan3OyJBAEcz4GezLRvbEkN82tUjkFEeUjajZ8d3cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIvvxnFKprG8%2FG4rqircA7AisIb%2F5VIO00W4RtpE%2BvWtzjUY2X0ZE1nmjh12P9hFuqILgP%2BR9v%2FRkFNx7q%2ByzzNcS9XawS1l3%2BpQQGk0srZPrx6l73Ye9vZghSJOtZaem4U5yjrGOyEvb79hRhEvN9%2Fthe2KLOYvpDgU4UYVMPGwwi7I0MlAWjBduqoeR%2BkhEsiJxeqhIY0Mm813epT5Tn3SzLXF7M6QUHwz4F5suESHnALWrw8XsWerx3zfHYLsFzHPIvtjf%2F8vHsvYKCEKPB0IeLCWbHuhA6nMxwrAfah9WLOSrh7i%2BVDLv8%2F2L4omjwk5QlaXM%2BKUA65P%2FQb0zEFrqfhqNSQKZKzyv1P10NWx2244qgUwEGUHvL42lOce60l1O2FNtOk8Lkn%2BmZbRVSeFVB7YmOauvO8uneLT2G8x8v%2BZERZP70osbK1M78LdX8VKySjSkU24V4xTrBAm1Sm7jVfYpIvdAZVJ4zX9MJUoMS145BJ42k3l2jgIVMTN5wz9avmkyFO2Jkt7G5%2FXgx3bsUmwh0WoHk0e%2FhpscCvgp1%2BtHd53hQSBb2AbnkueOiIM%2BxBtrRjlM4zypNsEo%2F52O%2BoNR4OOUfp4TbLhgzIpVU6TXiY5uGWuzA1hFNWruuJWGj321Uzxn9XQMNnZptIGOqUBSSUceVON3XSzYC2oyjO54ShRhkcsfccir5OAtmXkHCwcU2q6pRZRrM4Ps8FDNk1%2B53veifweBPoN9ef8j2XFhlR5V6eLzAwDrXVF4m9UM9nu%2B4bpqDOv8LndXKOQHx1WUzO2KKHj4j%2F%2FqZ8bGA7nCV9Wp7ER9YQqxQXCuaeiZiJQ1fddKSMLt0XeSoZfATdObBJeg%2BpQP1Rs%2Fwxqq6hqEUKQYJb5&X-Amz-Signature=e8390c0c57357a90d7dab96c7b7d9bcdbc1b86defc5ca4793a5cea73ec76ae3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XAXLWSV%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC9B2V0iwMfEbdL5rfHF57qrkNF2B2iIeuTft8Tsm3oEAIgTuX9qqmbbEP47JiYMm%2Bg8mUuYN4g9xQHgScHjaxlALUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDI1xl6bKAc8BfRq37ircAxbDL0x%2BXQzWJVnfaS4E9Tcei0xJOhWPOZooiT5N098NqjyGqzSlz8ibUKKOriov0bOfWDfql6FvIiFwrWfvChuM2WBikvwKSkJVPgRhy7YzU6SQZ7tev9Sc7v5eXlQQ2dvXrUO%2BoqvP8xseV8wZhCDcATws404iakypFCAunES7hXn3EYrFEIVPcORy7DfqmoGFOj6dlTujR1vD3fpdNz9NzGFvuT%2F396MZ23w6u4G2OP7Zk7u78sjZbkXP%2FtsHm2FF0xS8HPbAVX%2Fsxlry36ZYBgeU6iFWni4cpnDlzgHcrNMCHt%2BYzttc37oHSATrQdiwFvcFT%2FadeXs935Zyb9UiqGoWAXjcSbGRXkLw42Cmlvt0Zj4UB0KzzSuSRIUcqBIUTZ7%2FBpLxv1k2k9nxvZ1ax1vnYZmSRuQ6OSl1brVw8WH0uV5S%2FXfvJBiD3bIuRy63bJd77179sokiRVjkfIXPSIJBedzsNOeG%2FI8rxLYubqFIxaspCMqY7TyTzd6oE0pow9MzAULn6A%2BzhP90YALwphPSaubfgy4Wv%2B%2F2zry%2Fbellc%2BolpkCo5ReL9ZlTJBsKF3RDqy64PQlzYGxDYHCK4tdndgL1XVH4918BeIWNYy809oCl2Sr2yaDUMK7bptIGOqUBB5F4ML2N7twaULvgijHGzWFjOrmRQDgNuNTiMclNXJZM04SO2EgNXrjv5OELDGy2MJeA3BfA%2ByZywiasWKzOt5JWXQK8tGoJUGSLcLNZToHGErfu3nBIwf5hP%2BMAaZN6Z6mpnDjcBI5gRcRaM%2B%2FHzSyrqJXUOFRdze3l%2B7KdTb4j1Ut3HyCsnwueDLL3QIJluN3EkXS1zzXzD7eaU5PPwbNMmyTi&X-Amz-Signature=2160e525ab97f900f31f20dc78003622c589bca3094f84ccb9cbb623ef9b2c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILJEAZ3%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCwxoTiNaq54HpP2OPx0ZyaYof%2F%2BnULEUclDyvjoXpBHAIhAKVdMYkPX6F5IIkp7q4Jm3rZVYY5TdwZnfTH6NehvtFeKv8DCDIQABoMNjM3NDIzMTgzODA1Igzk9EABJTvTk0yDArMq3AOj1C1QInsZAbIuvE2kBPyXg9%2FrR%2BcnZicN3W4bPyu3u5i4WUt7ziZJmmTT3ZqOZcb7%2FGo3ATaKaCwU7yJ8IzTTQH4%2F3uUgBmayZixQrMLu%2BFdkJZknK69uypNLF%2BRxxNkrTmBZGqGAzITimgjbMm8xOWtRTZ8WNO9QQxAUlh6CvcCvvSECAMvQD%2B7gLM931zJwef0ULvVto7tijGw%2FZWcJgLa6W%2BEWjbgpqfsIh7Qbks8ddnO6Fa1MDnHX5NzKy8G1FxgzyZHRTS7BAE9R0M1VtsEloyob7EcOZWqJCRVTa45ZAglI2JPl4V5KtGKf1Q1s%2Bft6Vlx952YKiTlsV1Ngaez69gr3orayufxv3cKbJYrWa0fQEJ1TWvnjNUo4%2BgJ61J57NOzrSrgvEFgGwzqUzAjPwf7tQi8ru0RjhNoPohq3EVRqjwMTchcP0ctjsiucxfghGPS3rI3tZaLHI%2Bneo6Q8TujAYc%2F%2FazJZ7aEvzX%2BYmXHMwaSx%2FHP28eYwrpO%2B2CMHlOHvA1wa8%2Fi%2BReNXrbnq2R9xIblCjbA6I4SNioEg5emWdmSGRDATGw8a35R4Spk%2F0okboQNqzh%2F5XKmrdv1m7pvVUvDM%2FME9NKFMEayON4lbfdmnJxdgizDv2abSBjqkAcFDIoWdk5z4xo7RCLvEQ6lbN0Q71U4kl3dfROm9pFzOWdvAaTG5Q%2B2EaWV9clTb0d1jzYr54xPcWuf%2BXTuIA4%2BLFtn2MXPsRKSuD0BzwUQEC5T%2F4EhujK6YEaqzevcYOUvDGoqkabNR%2F72zzq5GWTBBO9mr8d0GTyegfcRySrrk%2FDpE2PsJ0i0d7sltJInC%2Fol9maei%2B585RY%2BPwMKAwQQ8Jf5B&X-Amz-Signature=dc7f503d58adc38c1957e95e38f63d83b6a64563428b7fd49696fd932f028449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBAF74H%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHcjVc2sOgiXP5%2FvfYImvCK5fVot%2Fxvb4DB6mn2vU32gAiEAoROan3OyJBAEcz4GezLRvbEkN82tUjkFEeUjajZ8d3cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIvvxnFKprG8%2FG4rqircA7AisIb%2F5VIO00W4RtpE%2BvWtzjUY2X0ZE1nmjh12P9hFuqILgP%2BR9v%2FRkFNx7q%2ByzzNcS9XawS1l3%2BpQQGk0srZPrx6l73Ye9vZghSJOtZaem4U5yjrGOyEvb79hRhEvN9%2Fthe2KLOYvpDgU4UYVMPGwwi7I0MlAWjBduqoeR%2BkhEsiJxeqhIY0Mm813epT5Tn3SzLXF7M6QUHwz4F5suESHnALWrw8XsWerx3zfHYLsFzHPIvtjf%2F8vHsvYKCEKPB0IeLCWbHuhA6nMxwrAfah9WLOSrh7i%2BVDLv8%2F2L4omjwk5QlaXM%2BKUA65P%2FQb0zEFrqfhqNSQKZKzyv1P10NWx2244qgUwEGUHvL42lOce60l1O2FNtOk8Lkn%2BmZbRVSeFVB7YmOauvO8uneLT2G8x8v%2BZERZP70osbK1M78LdX8VKySjSkU24V4xTrBAm1Sm7jVfYpIvdAZVJ4zX9MJUoMS145BJ42k3l2jgIVMTN5wz9avmkyFO2Jkt7G5%2FXgx3bsUmwh0WoHk0e%2FhpscCvgp1%2BtHd53hQSBb2AbnkueOiIM%2BxBtrRjlM4zypNsEo%2F52O%2BoNR4OOUfp4TbLhgzIpVU6TXiY5uGWuzA1hFNWruuJWGj321Uzxn9XQMNnZptIGOqUBSSUceVON3XSzYC2oyjO54ShRhkcsfccir5OAtmXkHCwcU2q6pRZRrM4Ps8FDNk1%2B53veifweBPoN9ef8j2XFhlR5V6eLzAwDrXVF4m9UM9nu%2B4bpqDOv8LndXKOQHx1WUzO2KKHj4j%2F%2FqZ8bGA7nCV9Wp7ER9YQqxQXCuaeiZiJQ1fddKSMLt0XeSoZfATdObBJeg%2BpQP1Rs%2Fwxqq6hqEUKQYJb5&X-Amz-Signature=a33ff1c9e132119ed8eed48601787ecc28d48d3e0edc579850a7d7e542e7fd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
