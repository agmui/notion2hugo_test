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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=d3d64438368c7d7f2f11b70b73b727cd07673dbcf9c0a454cd25059ec6394401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=73ec8f4790c24b1209b5f7cafff0e18e681a44bc4ec5299f3089da97775a8e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=f41b96defc9e246daa67f3e8ddc96708b1804d22a395c0765aa38300023c303c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNVS25O%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2DT6cFClSckkMKV5RCfGENrXr558w7bGpP8%2Fp1Oyx1wIgKVTwEfhCBggqLB0T03BxrrfwjSerO2HcCMXcBCUv3XoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjav49GkJ6Xc7Tm%2FircAwAYjmjKfnJMIUSlDrkKVQJMqt%2Fgw6y%2Fw3cNGxC5Ivm1VS7nWy5bsQOcps9b%2BJ9FCwvz1QNeHy5LHqgZgDb3SzAUuX%2FBSPUC7xBb3JybgYWC%2B2tj0XETZuLJACWUuVKmaIa3bDKDxEvnDMMwvp1VrEhpsxHhqnRKVSMxSjAbqVPQlTwITnxqmlOCBizecgpNVeW7uoJltMDcUmPJZGvhvKJIyNgHAAtg3kygusTbgP%2BZzM6pC8iFKGEGCcbcX%2BOb9K7FcQ3DPPyzEilwnrbGSUGWR3XChW1AHlBsg2PB%2FT2cphuFgqk9%2BofJLBSMqiJAb2LjTDKHQkn8mDKSwh%2Fp5dX5JuNXVePliBxvjbvmxDlO12erzfqmfQ60OL4ecWyYipOOf25%2Beznk3s6YoxEKHPaYKi2siqh8sGkiSd2AMX8yvzYVjrsbDohvXIGSopmKR6lUjBDu1nAINCx9DqNdKwWTSniDEhbBdGf83N6jn%2Fa%2BB9slQCffyTK2DF6acPEgHCibKYnSaRgsXz5zTpxIWRGn4FBmSyL%2FnZgPUrgWuybFoHK6OEqQFBMXxhEbos0R9%2FaYymDMAIeJdNgBq1dBfXaOHYhGEBM2m08zXby9Bsg8wOGS69xrVubgPQ6GMJmpvcMGOqUBYtBxhLNHNg2ctShYScZHaiS7MJqh6wR5PwxEGA56hKmzvWwFtpF8rB5VM7YWSYa0T0bfqdbCSynoY0%2FEsUG%2FDOceQUk7brxatOncZVpf9VddeH%2FjIr9LMksvO7RujD3D%2FmNOKnmg1ljDcLsuqYtsZhTX2dn5L7HY%2BS%2BBzuRtC5i8meirahWpmC%2BDjnFfWsyzFP%2FxmgR16EBWiol%2B7mPM4YvUrut7&X-Amz-Signature=6f937fda8214439cd06396bcb96e8a9566f228441a042d991af7244c60ae9483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPLZTIH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCghxJ%2B%2BebeICkyko%2BEjjWO6Ml7cB7gRlfUgdsH1%2F2YpQIgeQ6apEP22C2bAmbnI32AGEjJp2wOA%2BmCQdGXqcM7Ro4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8TnhRPRNYQMlqxoircA7a08OkMLR05curbdYh4d3c%2FsQ1t%2F3eBcOgAt9j5lVUW9HHUl%2BCEC2uAvH8ypSWSfFMeqpxD6B2hmEsp8UWpNKvRd2WUmZa3n52OgD3OIJmzeJ0izwPhWLCj3%2BNMgQl4sWfKielQRx5n1uKf469tQuspGYsVf%2BGArr3dzK6N2GtCZ%2B%2Bdy8%2FQgYs3R%2BDCkajsMZmjUdN92Ih5esnTqM0wwJFIj7QFqLLlEUXB3%2Bc9M1EDtJy%2BKlDa27N%2FXc6bXxLiR7EbyAI0VPIhyPxI2rNYxeyjRFDQ9hxZFpqB8WC5F33i461MjqY0aDHhjJ9ENa%2Fh6%2BRyDcMYIgtGcsOWWbEcH2o3vlBJcQUpZ9Y86NWZKJg%2FGYgV2%2Bz59p8vZlHW83g1MdAIFAOEskDgetHdaWcu93zk402OZf8DWf0GpbsjUxGs4WC6GvxLGQ06tJol788i6YVGiogaPf5%2FgSIH3CXW%2BDvYWCTt5KNf%2B8pbjhQ%2Fzod8NQQaP3x3q0QLLD8k44q9VKX9GIIhkXZvK5UpojvLG8K9S%2FiZiNGXjEOTUAUYLzw%2BghRmYj0BTk%2F5ycXYY2M3nFthLxurpg3J91EQyRoXQ8PkzNEyVWV%2BH%2FPx0Kh0hde10wbKeTZQ7p6HCumBMPSovcMGOqUBq2wZVc%2BEeK5J%2B%2BjGRQug5ylZn5pCgL0JmpDtN67LuQtlAz46E3MqTr2Sy3s18S4gppKa3QJA2%2B4ZoicQ7qMgKSSXgYlpDVzk5Ve6cWNI4uMKL5WM1a%2BPI%2FWLMwSkfFMGXmWjmlsQUPTDQbnM3GInEXYBGZ5U2gUbnh5CFyNXzAREUqaz2mSs7g7C%2FaW%2FU3U%2FrBempE3UfTouYnQkn9AGiEAoCtkA&X-Amz-Signature=42f23e693f021e84f332e63b1de0810bf805e48d6d3ad2da52371b6ce4da44ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX5JNY67%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnaE9M%2BDueaDCHcU8fkMvKRkUoSDB%2Bd2ZkTqexVMJ7WAiEAr%2FrhA1njm1fp2eZ2tnWP66spQ8a2yUfpMTBpWGUl0CAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe86gx2KTjctQgsgyrcA5nL3Hb1jlxCJqA0OJYI74ovsRRR9ypu9xTdhP9%2BQNLNdIecMBbqcCs2xgI6toiWXVRf9QyiZI4Y22kIoRWTZzNFrn%2FyXxdT3%2FkVlB95QyAmve2%2FwDGfwWQz%2F%2BqurSb0bt2Jf2HH2zQQtZg2bF6FX3ZBBC1%2Bt6Chzz7IIGMOBaqWDXBk%2FMEOiQjC6GXQOWQ3necKOWGL1afl7xTucGqIZGsmz3ljnJjasOealFAHKVPGQciHRVPWwSBWlV23mGCA2w5Zel22AHx0EETVop%2FzzDlXSKJOaJS0JULVoUe%2BeBuNImk2YeGXRB3LgaEiIPIcxTK5BOTL8zkzYelyR2%2FaXTuvsWB%2F%2FZDdBNDyv8RD4UJ99UdZod2KWiSB8X0NSXiQSJvYGU9sTaatqJJghKBpWnRD6gZ3hfLGk1q3hjcGisSBaGRwlp%2BUvgbOwCWDxQQUBvb0pSps0okdKyCJAeTSc8Kmw2UqKkpMG40yz2vnfEXAa%2FVYpORte3wse%2BJFp%2B45lEWIGC7MOamKCSZkRFZo4uutHWr3EwMftzLjElgSMGo1GreZzuyNhgyON5qGhLyqZTKPQSYnmoCWBeFqnc1cAXvcuC2%2FMLS2QYZB09YBbnEZNQfBQdipUl%2Bs02WeMPuovcMGOqUBdp8jMjbcufZvBmhvNixHUzwby8%2FTA5u%2FSGHQBvuczrjcQqHHXHpvGu4yY%2Bg87%2F8g6iUgBh2nc0w6ATUk70FkXCdD55vPtohWbDywYWtinBD3CfAE%2B2xjAF3wtxbOjeBag6pQ6p4CC9vVWXjFjAdtB3uXjAzb2hSuXUGWdhX7FCUOfHCwxNxPArIaQz2wvryT1FhQOGoS%2BgCJSoqxvbpePUwUqIZJ&X-Amz-Signature=7fe879d876c65d1d309fa219fad41f89deddd67af1b604c61901256157a75643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
