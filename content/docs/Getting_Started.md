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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4SXYBX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZ3cDUlmv01jJklTcOAF8Mo9dUnA8U%2BNii11qKoHS5AIgClGTtJp0Rs7RsuDvVyVrJjMs20ftM3fkwViSBgFqJ4MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxOZTwe0Shyajf6cSrcAzkoZwvFUAH5BIyf2vDh86hItLIu39j%2BvGXLlgTfW5d0JiNDCT6JIKQtXb486exXWJEO76pV%2F04CfozjQ4%2BQHfYAvBq8vfDP42r%2FWF7zExv8KAHrA2VO5VnokIXXLbDTNZ0wpz5bwR3il9PIPTtesF23HcQPaOjsMwXinz1jWDmkkxkp%2FYgGgfhqc5lad8tsJmstOewgHPK%2FIV33Ps8Hmh5sI2JW8YV377BM84etFdqzjJikNvW8krbjGI45tEdDY2uydkp6CqBZ0iKO5DHX%2FPmIdiNAiVlo2tF%2Bsn%2B40VHHvZ9UKYH5qkLyPh5INAehyLff81GHX0vCvFAhOjO4d0HPQbnphNxL0jwkVvk0R6VmtohA4aaDrx8t%2FucHNyBpZYcnFJgBT28wySrUd%2Bs4HDpsvclvZeFZl2tVgPUxs40EjnlyVHuBKHEwWBGJsQEXmL55GyZREsLuTycru9HFX%2Bjyi2JVmqWS7uJptPoobPh5Mays%2B%2BG%2BcQw0by1%2FHafDbRebKobkF%2FM5OetseDspO9%2F8UkhTBByN6pzHXsuHf66CQ1yWzH60td5zx%2BPj%2FP35lAhK2uvIfANihkOu0oqD0KUE9IGEI5n3HizyDlgZH1HRac267QmcTwkQMYtgMPi%2FscQGOqUBzCX8kz%2B3Yp8pt6F0q8ApHf%2FDi1pi%2BjNgIEsv3sVd2lnAIVpMTg360pULPNXgH4AA70SoWkmzjULDDknfdqd26XfLiBG1ValRyPAEMID63Y5NsqXZ48ElC1pP6eddQZfpBIXT1%2BaS1ORzFS6vO03P3H4X7ZwBz6cviChO54Ek40tV6PSKSPWbqtGqSKlsZo7Fy4BLkrBWP1eB%2F1ZWv6qLjvr9NEXj&X-Amz-Signature=f71be55bc7bb05eaf0e025161795cd78f793cd60e10b09ed37c241bfbe52f223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4SXYBX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZ3cDUlmv01jJklTcOAF8Mo9dUnA8U%2BNii11qKoHS5AIgClGTtJp0Rs7RsuDvVyVrJjMs20ftM3fkwViSBgFqJ4MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxOZTwe0Shyajf6cSrcAzkoZwvFUAH5BIyf2vDh86hItLIu39j%2BvGXLlgTfW5d0JiNDCT6JIKQtXb486exXWJEO76pV%2F04CfozjQ4%2BQHfYAvBq8vfDP42r%2FWF7zExv8KAHrA2VO5VnokIXXLbDTNZ0wpz5bwR3il9PIPTtesF23HcQPaOjsMwXinz1jWDmkkxkp%2FYgGgfhqc5lad8tsJmstOewgHPK%2FIV33Ps8Hmh5sI2JW8YV377BM84etFdqzjJikNvW8krbjGI45tEdDY2uydkp6CqBZ0iKO5DHX%2FPmIdiNAiVlo2tF%2Bsn%2B40VHHvZ9UKYH5qkLyPh5INAehyLff81GHX0vCvFAhOjO4d0HPQbnphNxL0jwkVvk0R6VmtohA4aaDrx8t%2FucHNyBpZYcnFJgBT28wySrUd%2Bs4HDpsvclvZeFZl2tVgPUxs40EjnlyVHuBKHEwWBGJsQEXmL55GyZREsLuTycru9HFX%2Bjyi2JVmqWS7uJptPoobPh5Mays%2B%2BG%2BcQw0by1%2FHafDbRebKobkF%2FM5OetseDspO9%2F8UkhTBByN6pzHXsuHf66CQ1yWzH60td5zx%2BPj%2FP35lAhK2uvIfANihkOu0oqD0KUE9IGEI5n3HizyDlgZH1HRac267QmcTwkQMYtgMPi%2FscQGOqUBzCX8kz%2B3Yp8pt6F0q8ApHf%2FDi1pi%2BjNgIEsv3sVd2lnAIVpMTg360pULPNXgH4AA70SoWkmzjULDDknfdqd26XfLiBG1ValRyPAEMID63Y5NsqXZ48ElC1pP6eddQZfpBIXT1%2BaS1ORzFS6vO03P3H4X7ZwBz6cviChO54Ek40tV6PSKSPWbqtGqSKlsZo7Fy4BLkrBWP1eB%2F1ZWv6qLjvr9NEXj&X-Amz-Signature=30186c950fcdc82b23bb89ea3a268329499956128f4e7f0a62c93f71fa588d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4SXYBX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZ3cDUlmv01jJklTcOAF8Mo9dUnA8U%2BNii11qKoHS5AIgClGTtJp0Rs7RsuDvVyVrJjMs20ftM3fkwViSBgFqJ4MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxOZTwe0Shyajf6cSrcAzkoZwvFUAH5BIyf2vDh86hItLIu39j%2BvGXLlgTfW5d0JiNDCT6JIKQtXb486exXWJEO76pV%2F04CfozjQ4%2BQHfYAvBq8vfDP42r%2FWF7zExv8KAHrA2VO5VnokIXXLbDTNZ0wpz5bwR3il9PIPTtesF23HcQPaOjsMwXinz1jWDmkkxkp%2FYgGgfhqc5lad8tsJmstOewgHPK%2FIV33Ps8Hmh5sI2JW8YV377BM84etFdqzjJikNvW8krbjGI45tEdDY2uydkp6CqBZ0iKO5DHX%2FPmIdiNAiVlo2tF%2Bsn%2B40VHHvZ9UKYH5qkLyPh5INAehyLff81GHX0vCvFAhOjO4d0HPQbnphNxL0jwkVvk0R6VmtohA4aaDrx8t%2FucHNyBpZYcnFJgBT28wySrUd%2Bs4HDpsvclvZeFZl2tVgPUxs40EjnlyVHuBKHEwWBGJsQEXmL55GyZREsLuTycru9HFX%2Bjyi2JVmqWS7uJptPoobPh5Mays%2B%2BG%2BcQw0by1%2FHafDbRebKobkF%2FM5OetseDspO9%2F8UkhTBByN6pzHXsuHf66CQ1yWzH60td5zx%2BPj%2FP35lAhK2uvIfANihkOu0oqD0KUE9IGEI5n3HizyDlgZH1HRac267QmcTwkQMYtgMPi%2FscQGOqUBzCX8kz%2B3Yp8pt6F0q8ApHf%2FDi1pi%2BjNgIEsv3sVd2lnAIVpMTg360pULPNXgH4AA70SoWkmzjULDDknfdqd26XfLiBG1ValRyPAEMID63Y5NsqXZ48ElC1pP6eddQZfpBIXT1%2BaS1ORzFS6vO03P3H4X7ZwBz6cviChO54Ek40tV6PSKSPWbqtGqSKlsZo7Fy4BLkrBWP1eB%2F1ZWv6qLjvr9NEXj&X-Amz-Signature=f9e0ddfebf0c0f8e452b759687fd08c2b613266587ad4584de51bdadfeb5bb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3OZPJU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQNRkCz3a3sOB47Ny0JVvT3syMN%2F480vwMThIkaX1xDAiEA0zjakNIkXEEn6Rj4BZeVq1o8Y3Me%2BNmSf5ThIYnKBpgqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNjAigu2YfERXyBryrcA13K%2FP%2B996fkrCFjb4npi5l407f960z22LFpweQoGkTjRQ9RXWYfK9dNTHwojDcMRZ%2FBtndZizyvhhVtRvIsPkndDIA4ZIcMSWEqXW9Zr1xkRAlTz7Hx%2FX8mgoE%2FKu7L7V%2B%2Fs9%2B9W4XEW7M5n0G91G6SDUePG%2FtwObTH2bg1L6Fh4LsR1jqUzNcUXAG4Gy43EnWQGVKeNHvbZ261V0e52I%2BrAbslFpFsELtovkF1Aw21JVM6umhc46vmYSE4z9eSQmzcMvDdQQv%2FqdIuLInrWH9jPkQQFtfU9FvwTAS15uDPYVc0pwZqy9kXnzX55B1i0ydB1kR4Q8SXpM9%2FykpBCEyEolpJhuo1s7XilYUOIYMA0zaVGNHyXf4AJ0J02t2D9LMmTF5AWUIInGJHTAoiGk%2F9ckrjXC2YiEJTkaa2PsxZu%2BWwjM0YVZzOfY3gaOvAZQQsrEoAtC2kjaOCNJqck25Rb2YaVrD1a4hA9xlRPhFE4oOds8EYTG%2FLOld9Jbzp%2FicI9iGPYgnMb3pRL%2F0emVWO5Dle4FPMiCE%2BXaIHzqV%2FTqCdhnsh%2FYQsdVCjm%2BQkblLTUACxOIim%2Fj9EgnGCycokRQz9Cpc7F%2Btp21ua3QYmxQvtMwW5YDzjHmIJML%2FAscQGOqUBkYAjLZL9Q00%2BpLelrlwi%2FmiPnm%2F0sqpXp%2BmbM3ZiUc6lWwqVGXqE8QYsSSe2ff9c05RpIa9Y0DmjAuVWDUu7Uw15kwt5AEu8pSIUcvmD%2BqVqAg1luOcocAqdtRBP0DB8tP0%2FI6HxssjvnnWLNwMWxLyq%2BOUVyuCpusP5ZyTsZ7ROAYFjQAVGmQueILPmLSSijCzL6nYlYzMR6f2yizNjozSLBItT&X-Amz-Signature=103eccec82fc38d85debe5b0782a51a6a61bc7d196a03ff6f8c601e57b52553a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEW5GF4T%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDODPPrqJ5evhrVMBZsWSh5Vrcx%2B3vwwD8UTQbPnYLDUAIhAP2tDm6C60AtoFBs%2BkV1ke5Y7bHuzpye0pT1iLv1nO89KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwno78G7ICAxoPfaKoq3AM7XNzP0TAM%2FOMVU3%2FGKcedYqAZB1OEkxuhJc5UUgDYCyPBU2N%2Br5P9S9vUw3%2BfpzLRFFu0HPBJ4xBfz3M6o8ZmLQnP0rbaI5p3gSh%2BNYGBbgf2M9kqyW%2BtP3yjlHnOdh11Fs3y8exTrDejZrRquUlFNLTZ7vaag9VD3aeLk4W9g9epH%2BTgHbhK99ag5S7KbGwPQkbkUGtDmUkjPcRi2ttQHRonLwEBgRxXLLXoth4Tu2E7vZIckyLb1OhP88SH%2BdzOX8usLgEwpAtQHALPI1rSO%2Faj3mp7dF2Pi3TZfc%2BbeE8XfqLT5vh%2B38AWQdGG5%2F7uqE29hQDpBa9QCtJSZajbvH3Mhc685sfcTYhQ%2BAltJnfFF8AHXa90RKYEzvwdHJDiCm3yF1lA%2Bk9sq7MbkaEXyzRp4d5hhKNnh4ShGMHR5mZchJKjVR4wg4YjV9qW8OP8CcRaDGz4cJ04HEz6Nl51k3jP3W5ivkLzVrHtnIFvk47YHdLLw4Wrr50rv7y2dMluv%2BetSHJns17qaZFlpW7ZU1bbcA%2FZNot4oQcM5EmP23CwmPD149XLeaREf%2Br%2BwAsOtPZIIZjU8I4EnGSkzdQ%2BCCv%2BOmCUc63nZGIpK%2FznCM9C6untATrQzqT8FzDlv7HEBjqkARLc9xNVrPiL%2B1%2FGvSpIRdZdQhi%2Bo6TqNts%2F1aMGm3N0s3HyBi6QJM0x3kpa35DmtBrOVDdAoXXYc9VMF6SqYfymf1pCMzO9et9%2FCLq24%2BGLln5SpHjZi7BIYzcLH0O1%2Fj3jX2L8OZnLXqx%2FQERMOH7WTSmCWkKUUAKVnnrbjrG3eCqScgxWyOt6DBaaBQ9FF41lOIWQVXebWOYqNlVDm%2FqrYh33&X-Amz-Signature=3d9d27ce819f70971af0a05c54c6231230beb568243ce4b249fd46fdea777ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4SXYBX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZ3cDUlmv01jJklTcOAF8Mo9dUnA8U%2BNii11qKoHS5AIgClGTtJp0Rs7RsuDvVyVrJjMs20ftM3fkwViSBgFqJ4MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxOZTwe0Shyajf6cSrcAzkoZwvFUAH5BIyf2vDh86hItLIu39j%2BvGXLlgTfW5d0JiNDCT6JIKQtXb486exXWJEO76pV%2F04CfozjQ4%2BQHfYAvBq8vfDP42r%2FWF7zExv8KAHrA2VO5VnokIXXLbDTNZ0wpz5bwR3il9PIPTtesF23HcQPaOjsMwXinz1jWDmkkxkp%2FYgGgfhqc5lad8tsJmstOewgHPK%2FIV33Ps8Hmh5sI2JW8YV377BM84etFdqzjJikNvW8krbjGI45tEdDY2uydkp6CqBZ0iKO5DHX%2FPmIdiNAiVlo2tF%2Bsn%2B40VHHvZ9UKYH5qkLyPh5INAehyLff81GHX0vCvFAhOjO4d0HPQbnphNxL0jwkVvk0R6VmtohA4aaDrx8t%2FucHNyBpZYcnFJgBT28wySrUd%2Bs4HDpsvclvZeFZl2tVgPUxs40EjnlyVHuBKHEwWBGJsQEXmL55GyZREsLuTycru9HFX%2Bjyi2JVmqWS7uJptPoobPh5Mays%2B%2BG%2BcQw0by1%2FHafDbRebKobkF%2FM5OetseDspO9%2F8UkhTBByN6pzHXsuHf66CQ1yWzH60td5zx%2BPj%2FP35lAhK2uvIfANihkOu0oqD0KUE9IGEI5n3HizyDlgZH1HRac267QmcTwkQMYtgMPi%2FscQGOqUBzCX8kz%2B3Yp8pt6F0q8ApHf%2FDi1pi%2BjNgIEsv3sVd2lnAIVpMTg360pULPNXgH4AA70SoWkmzjULDDknfdqd26XfLiBG1ValRyPAEMID63Y5NsqXZ48ElC1pP6eddQZfpBIXT1%2BaS1ORzFS6vO03P3H4X7ZwBz6cviChO54Ek40tV6PSKSPWbqtGqSKlsZo7Fy4BLkrBWP1eB%2F1ZWv6qLjvr9NEXj&X-Amz-Signature=910f7ad9b6e609f3c5a346c9ff89478f63a78b79481ed39fa8b9287e7ffc9347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
