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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSGU324%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVeP042QQNWLZdyIZJbVxUmg2po3%2B1TqnAc3yPBOHkigIgCPjQIt68lmxQq2n4J8d8UrxbnlkjBnihxKqypoc6Br8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn4DU0QNzngKuQfayrcAwNF%2B2UlW7ZW%2Bxj8rRfc%2BBJdToJS2CH%2BpUU4%2FUkYPG8dTXsy%2BLPGDuZuUD5G%2F8zQ0MTDp1moOkm5hWcdMitCxEluAGa40o4F1SX%2F4xjnlq%2FpL%2FF%2BmrIXisi0G7qK11Xui9pg6PPxSF7iO6e5LD0uG47YvTOzS%2FFkF63sBOO%2Fg6hGz0e%2B1W588ZqpJfHusCcb4aWjfiWBaxMbOUHgrZhan3nJ2BJq3JjuyADUDko5lzjmyGfSgAbHqYjwe8Q9zAedk1pewmENEzM4YnBDbr4mYswiVW8TzITWkSDYPjfcCPoQ%2B22j0s71i4qn72BPeaAeH6vyqwXQ%2BCJ4FDIG9ziPT0Zd7fHzFi%2BO6TKUDz1P2TuoWNBehyArmn8yN7NdO74T%2FTMSEcS3hpXhc6r9IN%2FQw%2BF%2BG1A0Fis6V75vGu%2B%2FspmyqeE5%2FCGrDGM%2FCPeM8vNxSQdyWAGcU71QfArEoijeN3hZqC%2FIweHdO%2FkexvbysqKLou%2BiHCa8Pkfa6rx7e5DWukcUMMLVQEdee4jukZN4GD7VbpodwXgjPtC4NuX9%2FtPg%2BZuTBch704yq8Rdp%2Bfs31%2BeCMlCAtB%2BRBTrC2P03sk7dtRr0s45Kmg4j15ZV4tI49BMivSpwDnxTvoh6MIOBzMMGOqUBLjZbMg7nOJFvMgpihfeEg0OK7dbEjsmO1%2FT3kxv%2FSxmmj4pzF0uCOtyZiAvBToRhwCzGC1CWYznxlO7qoL%2Fa3WAO8WaY0oHCCHfa6hXfTbVoapHck3fLmS3e6cjdXjttdRuleCqOH90cPe2JdOC%2FLuYIYD7l8ePYPyzoUioYX%2BgDu%2BY%2BDIFdIxqYcBXN%2FH9kydytAhgEsa3fGg1AnxrEU9RCcjYA&X-Amz-Signature=d6b1eb07d114213613c9340213b0095fa1a35e242044ed3b4fbd011d045884f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSGU324%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVeP042QQNWLZdyIZJbVxUmg2po3%2B1TqnAc3yPBOHkigIgCPjQIt68lmxQq2n4J8d8UrxbnlkjBnihxKqypoc6Br8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn4DU0QNzngKuQfayrcAwNF%2B2UlW7ZW%2Bxj8rRfc%2BBJdToJS2CH%2BpUU4%2FUkYPG8dTXsy%2BLPGDuZuUD5G%2F8zQ0MTDp1moOkm5hWcdMitCxEluAGa40o4F1SX%2F4xjnlq%2FpL%2FF%2BmrIXisi0G7qK11Xui9pg6PPxSF7iO6e5LD0uG47YvTOzS%2FFkF63sBOO%2Fg6hGz0e%2B1W588ZqpJfHusCcb4aWjfiWBaxMbOUHgrZhan3nJ2BJq3JjuyADUDko5lzjmyGfSgAbHqYjwe8Q9zAedk1pewmENEzM4YnBDbr4mYswiVW8TzITWkSDYPjfcCPoQ%2B22j0s71i4qn72BPeaAeH6vyqwXQ%2BCJ4FDIG9ziPT0Zd7fHzFi%2BO6TKUDz1P2TuoWNBehyArmn8yN7NdO74T%2FTMSEcS3hpXhc6r9IN%2FQw%2BF%2BG1A0Fis6V75vGu%2B%2FspmyqeE5%2FCGrDGM%2FCPeM8vNxSQdyWAGcU71QfArEoijeN3hZqC%2FIweHdO%2FkexvbysqKLou%2BiHCa8Pkfa6rx7e5DWukcUMMLVQEdee4jukZN4GD7VbpodwXgjPtC4NuX9%2FtPg%2BZuTBch704yq8Rdp%2Bfs31%2BeCMlCAtB%2BRBTrC2P03sk7dtRr0s45Kmg4j15ZV4tI49BMivSpwDnxTvoh6MIOBzMMGOqUBLjZbMg7nOJFvMgpihfeEg0OK7dbEjsmO1%2FT3kxv%2FSxmmj4pzF0uCOtyZiAvBToRhwCzGC1CWYznxlO7qoL%2Fa3WAO8WaY0oHCCHfa6hXfTbVoapHck3fLmS3e6cjdXjttdRuleCqOH90cPe2JdOC%2FLuYIYD7l8ePYPyzoUioYX%2BgDu%2BY%2BDIFdIxqYcBXN%2FH9kydytAhgEsa3fGg1AnxrEU9RCcjYA&X-Amz-Signature=6f0d5bf350fb8e6cf85ad7b3ca816d56d8b124fe19912c892a1cc7ff04f103dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSGU324%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVeP042QQNWLZdyIZJbVxUmg2po3%2B1TqnAc3yPBOHkigIgCPjQIt68lmxQq2n4J8d8UrxbnlkjBnihxKqypoc6Br8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn4DU0QNzngKuQfayrcAwNF%2B2UlW7ZW%2Bxj8rRfc%2BBJdToJS2CH%2BpUU4%2FUkYPG8dTXsy%2BLPGDuZuUD5G%2F8zQ0MTDp1moOkm5hWcdMitCxEluAGa40o4F1SX%2F4xjnlq%2FpL%2FF%2BmrIXisi0G7qK11Xui9pg6PPxSF7iO6e5LD0uG47YvTOzS%2FFkF63sBOO%2Fg6hGz0e%2B1W588ZqpJfHusCcb4aWjfiWBaxMbOUHgrZhan3nJ2BJq3JjuyADUDko5lzjmyGfSgAbHqYjwe8Q9zAedk1pewmENEzM4YnBDbr4mYswiVW8TzITWkSDYPjfcCPoQ%2B22j0s71i4qn72BPeaAeH6vyqwXQ%2BCJ4FDIG9ziPT0Zd7fHzFi%2BO6TKUDz1P2TuoWNBehyArmn8yN7NdO74T%2FTMSEcS3hpXhc6r9IN%2FQw%2BF%2BG1A0Fis6V75vGu%2B%2FspmyqeE5%2FCGrDGM%2FCPeM8vNxSQdyWAGcU71QfArEoijeN3hZqC%2FIweHdO%2FkexvbysqKLou%2BiHCa8Pkfa6rx7e5DWukcUMMLVQEdee4jukZN4GD7VbpodwXgjPtC4NuX9%2FtPg%2BZuTBch704yq8Rdp%2Bfs31%2BeCMlCAtB%2BRBTrC2P03sk7dtRr0s45Kmg4j15ZV4tI49BMivSpwDnxTvoh6MIOBzMMGOqUBLjZbMg7nOJFvMgpihfeEg0OK7dbEjsmO1%2FT3kxv%2FSxmmj4pzF0uCOtyZiAvBToRhwCzGC1CWYznxlO7qoL%2Fa3WAO8WaY0oHCCHfa6hXfTbVoapHck3fLmS3e6cjdXjttdRuleCqOH90cPe2JdOC%2FLuYIYD7l8ePYPyzoUioYX%2BgDu%2BY%2BDIFdIxqYcBXN%2FH9kydytAhgEsa3fGg1AnxrEU9RCcjYA&X-Amz-Signature=1b3b1e67ca562a8a3b2795313c2d5d6afd570a60a9fbdff58a2c1460d66b7892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCDMLT3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsowL8EVzQijcMwRrB9miUV0y9fEOCrWcV39HFVZyUpAiEAnshTLsVcdU31zOpRRXunt6k%2FBXqeWxObsSmm%2F9ZPX9kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKE85UlHihtHDpYnCrcA3dFrtIbqc%2F17TXj68qhV4VDNbeHAxWNAmwS7bO4W9FbNG9ieNzpSwqcgoJNJ3jysdvGvB6ETwdrQS1akaIXd%2FcBbSTi3yp4p9ZHPN%2FKl1WQTvT2gorH1fWBR5fqNKvrl4Z%2BFfVdKflvoNpRLZj7JzwUMVKefl%2FuY5yoj1HWF2QXguFv622fNSXyjTGkUaI%2FMD92mgf8J9%2FpVGbTh3THE2fsWLWF6CqZmWc6AZnCAWMiLMsBKt322YvdzCnQ3gd750fWadoPNCQdPoG8O4H%2BGWFNs6uw6wJ02G8tO6%2FJelJnE3tYIRlWRLHRRiVJOyeZ6PWokUNhPjyU1c6htaVAD12XCntxkButarmyxAMliLtiB7mdWm1Ou01dF%2FQeFrn0iB9xFkv0VTT05Cb8z5uR%2BTHXb9WDK1ekGFY3qgCGD%2Bnc2Q66vlF06rRC%2BnTKlFapmf0mJFl7JiDVTCfFmMnncXNM8kEaR5AYNCbEJvV7rfdxkxdKyVkE9CjQTKYlHDQ%2BX6VclYa8Y4K7emIwKIQEUL7%2FYGHsQuq8IAx6RciMVCanE%2FNnYVS5P5PSRe04kZtd7FYQY9Pa84M8CfUZAMPbqUmrPeniHyL8UZTOntzEnusH2nOHv7jSMYSn7PpiMLKBzMMGOqUBxXlLfEKjBhph8Iu6C29xG4vu22rDImZHo9gY1EDiDJBGu%2B9PpNAYz4%2Bt3XsP6q%2FiJLkdqhJljZQ8RNRdx5isoqJrR2gb5fEBAl34zvQ6sW3C2dUB6IoHZS84%2BN0ebdtg%2BYfYoeKiVSYZwvBxPWZbbF8ow51FY2ngSOuHqD1T1hQUGM9Lns%2B097LCxE2mnIlJRb8yWJUCdY35i2yAn%2BW1Ssn8rjJu&X-Amz-Signature=e0f4444c2f72d48f4ad336d90ae58b437ce6f92cee9e8b3e909b2b369d814ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3U4TBRO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQWzuvQzxYUOFq9bySnQgYXkoOluEWilcHukyeU9oGHAiEAhxbrP8JzpHoK84gZl%2BNb47abgL6mV1wGDmlzoi8OrwkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP%2BWdklTfQ0zsn7gCrcA0%2FtcIvncDdRueFPuZHWwEqXfAUKvBjLMRB3alH4%2FoBxkcoG84R1GlDSj16DJl6LehaXsaTLhVYK6c%2FTObyEhtzKurledLMFtoE66yL8mTmfcW82GxMM4ETffqhKmTeUUbgoP54XLGNtBiAWCrQ%2FPzishXBMnBqe521afXqkpVXYp9Yfw%2BP1rOtbyRVGHq61mMUOyP%2F%2FXW7hqXQysluegHv8s0EKW6JPMUARpHOrR3NkI%2BhmOcRuNnyYpermLijzdEyYDgYHfEuU%2FKxIJ2haeb3OETZGuMwjr3njJ181A03cRrjifyFbNo%2BWSLxzNsE1qV7iysS1ZD70C5CkX8Jx7BVSXqB6SRFwWuYI1sWBNIYxUWJUIa5tmfW%2BUe6qnGUNAyWP3dj6J3yjME0Lg2gjhImSQL89s%2BATlrlv9t7N%2BTm%2Bs1QWzm7LGuVcrUDGgoG9oVtlcgXm%2Fcn%2BqrG0MeiQIPT39CYiaDfvP4P50o2mELHJGtGycDZSnZk%2Bx%2Bgc7FihQLdB8%2FRV6MzyIIxmdIxNUZjoORpssCL7wEbgIxzIMaxfwuE6%2Frz59VxJxMG1oWikwE%2FXujkbN4y32oFqpwXP9W20dUy5wMHT5m5EEM%2B6YJeTUy1rHe1he8%2BBqZvmMOiBzMMGOqUBh2Hp2ItcXTkCBliL%2FlLB7%2BpFKWLz3EMUiY4IzkLCnGexHujsKZ4lkz630Ab0mN%2BTrL4VnWkXYwtte7j0vgfHA4pua2VhsQs%2FQMX34lzh75249kpiu3wz7nG4gMM6BRme%2B7j9yHKr0wljsE23RZg69ROtfVTd1KPLcvQLnPDeQCdDLKcezX7uT2IyCfFfjioqDDF9Ys8%2BafU8PVAeFbcEEk4F5kUF&X-Amz-Signature=0ddf21415359ef8d856bfe98ffe462867348665acc9aa34ed5169a7ca3e1b59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSGU324%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVeP042QQNWLZdyIZJbVxUmg2po3%2B1TqnAc3yPBOHkigIgCPjQIt68lmxQq2n4J8d8UrxbnlkjBnihxKqypoc6Br8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn4DU0QNzngKuQfayrcAwNF%2B2UlW7ZW%2Bxj8rRfc%2BBJdToJS2CH%2BpUU4%2FUkYPG8dTXsy%2BLPGDuZuUD5G%2F8zQ0MTDp1moOkm5hWcdMitCxEluAGa40o4F1SX%2F4xjnlq%2FpL%2FF%2BmrIXisi0G7qK11Xui9pg6PPxSF7iO6e5LD0uG47YvTOzS%2FFkF63sBOO%2Fg6hGz0e%2B1W588ZqpJfHusCcb4aWjfiWBaxMbOUHgrZhan3nJ2BJq3JjuyADUDko5lzjmyGfSgAbHqYjwe8Q9zAedk1pewmENEzM4YnBDbr4mYswiVW8TzITWkSDYPjfcCPoQ%2B22j0s71i4qn72BPeaAeH6vyqwXQ%2BCJ4FDIG9ziPT0Zd7fHzFi%2BO6TKUDz1P2TuoWNBehyArmn8yN7NdO74T%2FTMSEcS3hpXhc6r9IN%2FQw%2BF%2BG1A0Fis6V75vGu%2B%2FspmyqeE5%2FCGrDGM%2FCPeM8vNxSQdyWAGcU71QfArEoijeN3hZqC%2FIweHdO%2FkexvbysqKLou%2BiHCa8Pkfa6rx7e5DWukcUMMLVQEdee4jukZN4GD7VbpodwXgjPtC4NuX9%2FtPg%2BZuTBch704yq8Rdp%2Bfs31%2BeCMlCAtB%2BRBTrC2P03sk7dtRr0s45Kmg4j15ZV4tI49BMivSpwDnxTvoh6MIOBzMMGOqUBLjZbMg7nOJFvMgpihfeEg0OK7dbEjsmO1%2FT3kxv%2FSxmmj4pzF0uCOtyZiAvBToRhwCzGC1CWYznxlO7qoL%2Fa3WAO8WaY0oHCCHfa6hXfTbVoapHck3fLmS3e6cjdXjttdRuleCqOH90cPe2JdOC%2FLuYIYD7l8ePYPyzoUioYX%2BgDu%2BY%2BDIFdIxqYcBXN%2FH9kydytAhgEsa3fGg1AnxrEU9RCcjYA&X-Amz-Signature=fec876161aa3f9092712c1e5d240dc6fb6248e32123788ff00b33a45d02d1570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
