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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6I33LV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2vWBViY9TN4aFSfx5zoGKCb8BqfnGgjRfV6zQBrn%2BAIgDb1xxQaBGkC%2BZOx%2B3cBXBcLATVRoCtQw6QB%2BXfxtJhgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi8u21pR4NwAbXqIircA7J8Z9ciTStTN5DA2lPjmmAsNLfyEk0v9M5qbMWnTf45GXc3vv04yV20kyTqjIdAJtGQc7ubSWkPglePsisPnY9Gig%2FwrOWIEYuVxJAAvvog8FkDObezO%2BaOxJHmfrR3r4Z%2BK%2ByLWBgaGAzORnyp6OnhMlCUx9NJR4%2FVXUgifswzQV66w1AbuPiWDDeX5jmcVKn0w%2FwRPfXNT1%2BCfKkxTvU3gUFvuX3gFlwPFk66CZF0NEWPCktGngAwFn6n1UwdgO9uGKDqeju8CG2b%2F4qqcMBGgTbt5LvncttLWedLsWbZHyIRS2tXGdWKl1hxuxPbL0H1CzJMVtkXCm1Y%2FJl9nhhG4dtWtcspg486rDEZu1%2BtfwFDbyuE6E%2FSxHJALwvjsdpQeS2Tc2hM8FPjMDdFxnYLnMPV97tW%2FS1RfYuwOzAhLIy6NNWLrsahBzyWntihIGqM%2F4cGazqiZIhBN2w97b6d1YLhoVmRxCdgrbcUd26zQXcq6cL%2F%2Fc9kU9RjMtVOqIQMUM8wk%2BVUOf5wm40uTS7R4Kja8rqh6qRK1XIwOqL5BoyryQ3NFfyre8WQHpLBFeGkyqkpFKPmShijIS3tmzCFOYAAjq40RcXcPMyGv6fcLuqZEeR%2Fd4yTrxqNMLzT2cIGOqUBLZj9ETg91w%2Fwm44TbIls0uImvGszHbVNqfzv5emxjyKuW98hnkoCoqXmXVmIwBnhOn4luqfB0qBAKpLCYifpOmlTxNF7iYpqhPALsuPPUqU6a9gPWuNpIN%2FsUeZSe9EIv3wsK4WxHXPdDvaHgRrBhIqOHH0DNKT3Yz4Aa%2BUgrbwaS8pMf0QjX6J8F45O4jMfxW1Wj3777IOAVFRmMOYdCGY46PTF&X-Amz-Signature=81884913b107cbd28b264860b526367ed8e8b0d9a8e9bd3e19c5835bcb4f8bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6I33LV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2vWBViY9TN4aFSfx5zoGKCb8BqfnGgjRfV6zQBrn%2BAIgDb1xxQaBGkC%2BZOx%2B3cBXBcLATVRoCtQw6QB%2BXfxtJhgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi8u21pR4NwAbXqIircA7J8Z9ciTStTN5DA2lPjmmAsNLfyEk0v9M5qbMWnTf45GXc3vv04yV20kyTqjIdAJtGQc7ubSWkPglePsisPnY9Gig%2FwrOWIEYuVxJAAvvog8FkDObezO%2BaOxJHmfrR3r4Z%2BK%2ByLWBgaGAzORnyp6OnhMlCUx9NJR4%2FVXUgifswzQV66w1AbuPiWDDeX5jmcVKn0w%2FwRPfXNT1%2BCfKkxTvU3gUFvuX3gFlwPFk66CZF0NEWPCktGngAwFn6n1UwdgO9uGKDqeju8CG2b%2F4qqcMBGgTbt5LvncttLWedLsWbZHyIRS2tXGdWKl1hxuxPbL0H1CzJMVtkXCm1Y%2FJl9nhhG4dtWtcspg486rDEZu1%2BtfwFDbyuE6E%2FSxHJALwvjsdpQeS2Tc2hM8FPjMDdFxnYLnMPV97tW%2FS1RfYuwOzAhLIy6NNWLrsahBzyWntihIGqM%2F4cGazqiZIhBN2w97b6d1YLhoVmRxCdgrbcUd26zQXcq6cL%2F%2Fc9kU9RjMtVOqIQMUM8wk%2BVUOf5wm40uTS7R4Kja8rqh6qRK1XIwOqL5BoyryQ3NFfyre8WQHpLBFeGkyqkpFKPmShijIS3tmzCFOYAAjq40RcXcPMyGv6fcLuqZEeR%2Fd4yTrxqNMLzT2cIGOqUBLZj9ETg91w%2Fwm44TbIls0uImvGszHbVNqfzv5emxjyKuW98hnkoCoqXmXVmIwBnhOn4luqfB0qBAKpLCYifpOmlTxNF7iYpqhPALsuPPUqU6a9gPWuNpIN%2FsUeZSe9EIv3wsK4WxHXPdDvaHgRrBhIqOHH0DNKT3Yz4Aa%2BUgrbwaS8pMf0QjX6J8F45O4jMfxW1Wj3777IOAVFRmMOYdCGY46PTF&X-Amz-Signature=3e6c708e67e94e0ff7f124bbd727158b7cb4c17c18e884dee46ebc4b970022ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6I33LV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2vWBViY9TN4aFSfx5zoGKCb8BqfnGgjRfV6zQBrn%2BAIgDb1xxQaBGkC%2BZOx%2B3cBXBcLATVRoCtQw6QB%2BXfxtJhgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi8u21pR4NwAbXqIircA7J8Z9ciTStTN5DA2lPjmmAsNLfyEk0v9M5qbMWnTf45GXc3vv04yV20kyTqjIdAJtGQc7ubSWkPglePsisPnY9Gig%2FwrOWIEYuVxJAAvvog8FkDObezO%2BaOxJHmfrR3r4Z%2BK%2ByLWBgaGAzORnyp6OnhMlCUx9NJR4%2FVXUgifswzQV66w1AbuPiWDDeX5jmcVKn0w%2FwRPfXNT1%2BCfKkxTvU3gUFvuX3gFlwPFk66CZF0NEWPCktGngAwFn6n1UwdgO9uGKDqeju8CG2b%2F4qqcMBGgTbt5LvncttLWedLsWbZHyIRS2tXGdWKl1hxuxPbL0H1CzJMVtkXCm1Y%2FJl9nhhG4dtWtcspg486rDEZu1%2BtfwFDbyuE6E%2FSxHJALwvjsdpQeS2Tc2hM8FPjMDdFxnYLnMPV97tW%2FS1RfYuwOzAhLIy6NNWLrsahBzyWntihIGqM%2F4cGazqiZIhBN2w97b6d1YLhoVmRxCdgrbcUd26zQXcq6cL%2F%2Fc9kU9RjMtVOqIQMUM8wk%2BVUOf5wm40uTS7R4Kja8rqh6qRK1XIwOqL5BoyryQ3NFfyre8WQHpLBFeGkyqkpFKPmShijIS3tmzCFOYAAjq40RcXcPMyGv6fcLuqZEeR%2Fd4yTrxqNMLzT2cIGOqUBLZj9ETg91w%2Fwm44TbIls0uImvGszHbVNqfzv5emxjyKuW98hnkoCoqXmXVmIwBnhOn4luqfB0qBAKpLCYifpOmlTxNF7iYpqhPALsuPPUqU6a9gPWuNpIN%2FsUeZSe9EIv3wsK4WxHXPdDvaHgRrBhIqOHH0DNKT3Yz4Aa%2BUgrbwaS8pMf0QjX6J8F45O4jMfxW1Wj3777IOAVFRmMOYdCGY46PTF&X-Amz-Signature=8ddeb2ea022b4ea3301b0e88f9fd012234ff6bbdcce0fb94a70b842e7252420b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5QSQ4CL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXXoC%2B6L%2BUreeuavoAA3%2FpT1xt3W%2Fd6sH52I8gBUlaAAiEA3XijdBnfAZsNmHN2jWZoCWfm9PE9kwu9DQVodD55utUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLST7eUaX9eXCYzaASrcA5kExuyAOo9yC%2BZRR07a8WVbG6rXsK9pCYlZqSP6trR2eitZksK0RVjCl6WQloJJ3vNehvrkEl0iYBkAhXNimOclyNMlD7U%2F95xj3v3A8hASCQ91cqfMYeEbWJnJU%2Bi%2FSokuGc%2F8bubtJWZTUV%2ByRvog4toFMZZ%2BH4jm2pu5qLharBVcT4MiF8gUxfa474I3tZZSMGVmfi03rN9X7MSUaQK3qGNsOIpLye4QxYiEUD75zu8t7MSAKUaRnFmdOh6%2BiXWLhlnT9Ht6qgLariCtI5I2VljOCZfkhnRjUI5kCwDeyzXj3kA2gfqpr6xDDCcBsTIlwL9su0V05I%2BJywM%2F%2FM0CwH4saYtklAltxXMoznYtUjwdVHLvhpZSp8zrFSigkXH%2FWAIZ%2FWrU11tbctpwrcyBhVg1mpmuBQ79Hml5ubx8IXQo%2BZXkRka1NTw7Qv67A7kydGhd84rbfvKfbXcLklWwF9zsgdTEz1ErBJ59psmdR9hCT0mtdVd2jnVfHPtQj8TfU1Q0VQJ0YR6uQoHj%2F6PGu%2Fv4PMvv9P8xKJs7FzvTmVxxpiqnO9uqRP7TSscRTmPhBl85vBCMkNveSzCyT8PEqylCnznJ4vxJ4vCN3Au9RRW%2FH2uZP6mVa5dxMMaG2sIGOqUBUFijSvNXlW%2BmA%2FGVgH%2Bz2sW0GAyzM5ubWz8kBTCRMLcwOkc6fU4thvr60EFF8HoLfb%2FNeaxJYsO4GgeyQbmK%2FW0QnFQfZXwyjcgw9A7zjFCSBf%2FCtgrmowA6riiAg2iYEdeLwvircMwFVqiwps22yIaIuc%2BxmTB5HEb5ChQMxslYp4lL4B84VX87oGWvZ6i1btBjONXULMh2GR8BK1z7RpgxPTRV&X-Amz-Signature=14be0f39e669f314e2818b8cb5b0a7285feb19c26464bc6c33b677c530bf9f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRQTONLC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9Z6gH1DYwb3gZ8fmAvKynsf06opAtrJChGmll4FobKQIgT4Yuh4eYvqQnnu4aKNJtsUZ6YzPhaZZTGpvpzgiY6RMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHf%2FJZpnXXn%2BpGOJXyrcA19C8y34rLwOWLO%2FmgFVrjbMzGZm2N6IHI4i%2F1YNXL44jPifbackNQkgUlp9mS5VYpdgAwFLVihSowbH7gs9kTnyJztxXjOr%2FIJPI4pxjZ3rBVHSxVTbyloNZeNfUgcPemKl1jH8mH5MpGEVSM9Jjhw9JefeLtyJdIaXk3EwWES8pUU%2Bhz14Mtx47Jryv1HkGWLyv8px6KnSJn8sjfwaF3m8ClC5FvXI9NA8pRVQsgXJkXNDQ%2BeRtso%2BS%2Fv5I1Tw%2Bl8jXNVOU9aGJwEF%2FV23MqWF7LyHYzmLvFq85UHToP%2FeSZqlLA6yx0uPwbTn5yHxSwTuY%2FYu2DIJuaKtVdRgDhX69tkkUx4r2Ta0ax0oS2qMZ7e2tRuvn8hRUME%2FiklpH8xxZj2R8YB7w3YcS0gK8O4Lxk8wlsRngOTqzhvcgy6ml5gkRSBdK%2BHDcUXf7VoRtz76tLkUt8uP5ILo%2B5lwIIyYmAIUgr2s4HMSYOqQ42eVDNHd3CoHHs7Ckq64ru3LYSCXwkmS8dv5nNU3tAPMax3phP3uH1bRBi%2FHm9oXDOfPRSEF%2FfpMyEhP3BLZ3looU10cdAJ2UmI5gyfo%2FrdolnxojJfJcevo%2Bz7Bb9NAvUpBY4iKNMa4yMBc9djuMMjv2sIGOqUBbISvkMSrpoW0b6BA2TIySbElEWAdssjRzvliiDbRmcbWq1IjffEqonnkHSsooiIbfSfdkMvHVS2trHQaooSR9gKhsZ26E5m8oXzVekC03gIVkpDhNFfALRkBYX51rmJnA008OeiQRN0IotLFUicWGl9Jj3NkwNq1k6lVYFWIxh8W%2BGeb3AJdwmK4m4cuWBDhZTNdNZckINjy1Dh73SOQj%2BTidArX&X-Amz-Signature=e22637b746691faa772c1c8b3f1dfe585f365e19f759e3abf4bdf0f3137184a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6I33LV%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2vWBViY9TN4aFSfx5zoGKCb8BqfnGgjRfV6zQBrn%2BAIgDb1xxQaBGkC%2BZOx%2B3cBXBcLATVRoCtQw6QB%2BXfxtJhgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi8u21pR4NwAbXqIircA7J8Z9ciTStTN5DA2lPjmmAsNLfyEk0v9M5qbMWnTf45GXc3vv04yV20kyTqjIdAJtGQc7ubSWkPglePsisPnY9Gig%2FwrOWIEYuVxJAAvvog8FkDObezO%2BaOxJHmfrR3r4Z%2BK%2ByLWBgaGAzORnyp6OnhMlCUx9NJR4%2FVXUgifswzQV66w1AbuPiWDDeX5jmcVKn0w%2FwRPfXNT1%2BCfKkxTvU3gUFvuX3gFlwPFk66CZF0NEWPCktGngAwFn6n1UwdgO9uGKDqeju8CG2b%2F4qqcMBGgTbt5LvncttLWedLsWbZHyIRS2tXGdWKl1hxuxPbL0H1CzJMVtkXCm1Y%2FJl9nhhG4dtWtcspg486rDEZu1%2BtfwFDbyuE6E%2FSxHJALwvjsdpQeS2Tc2hM8FPjMDdFxnYLnMPV97tW%2FS1RfYuwOzAhLIy6NNWLrsahBzyWntihIGqM%2F4cGazqiZIhBN2w97b6d1YLhoVmRxCdgrbcUd26zQXcq6cL%2F%2Fc9kU9RjMtVOqIQMUM8wk%2BVUOf5wm40uTS7R4Kja8rqh6qRK1XIwOqL5BoyryQ3NFfyre8WQHpLBFeGkyqkpFKPmShijIS3tmzCFOYAAjq40RcXcPMyGv6fcLuqZEeR%2Fd4yTrxqNMLzT2cIGOqUBLZj9ETg91w%2Fwm44TbIls0uImvGszHbVNqfzv5emxjyKuW98hnkoCoqXmXVmIwBnhOn4luqfB0qBAKpLCYifpOmlTxNF7iYpqhPALsuPPUqU6a9gPWuNpIN%2FsUeZSe9EIv3wsK4WxHXPdDvaHgRrBhIqOHH0DNKT3Yz4Aa%2BUgrbwaS8pMf0QjX6J8F45O4jMfxW1Wj3777IOAVFRmMOYdCGY46PTF&X-Amz-Signature=eeb57b700b658b5ffe59f2a03e502bc62ac9eb263a6a2abe1179b3ab0bbb8392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
