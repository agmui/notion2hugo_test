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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LVEE5W%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDp1FIPNccfxeAM3R4ZH3drArsI0y7mZZLdhBK9LE%2FjjwIhAL%2ByonfIekHJuN5StWxF8odtQ09RnbB2cJBSG7LRrDswKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC2CgOh%2BnQnkdlS%2FQq3AMSOi9JQhinX8F1bXRStCGr2%2BEq4ky53vBORsMBVdSNssBMQZS40bAu8uRNJ%2BK7imKq%2BhwZ4O2zkjilhcngFUCy3TbKW9wpKRLJLlCtGcwkPrjZ4NZoB5WLd%2BHgh2S3D4m1aCntnu2J8o8IpvA%2BbxbVP0dE2V2EYPZ1s%2BlLiwH0WUwNYb7VckxSLetaIT6pQP8C8yYcwYy7SwXUx99giYr2fRwo2Gwuhsumo19aHgu8jc0yBVCnzYXCvKz4%2FSn3CtyeWQWGI9CvWZrommr784jiMVMD1FhRWanVqYVz2x0vYtiYi0nF3ClBnjIE6N2LcxDxIg4NsnYWUh3m%2FxDvvEXCmK7Dfe%2BZC5kBbBL9Jqw8imZy%2B1FurfanxqcYzopH7Qmm8WZcmhviWzX%2FEGjF39LJjQMMwc6gIE85RNaoPA6TPm1BqJg8Gv7PYyDjrNvYUIYsAo5oBfKdn9yAqPUyQJ5L84IsUsFJo4sTsofuTBTJU%2FfRMuZMPfHowvxFY8tRfSDU07G4A8DIH4MSrCJRfQ5GwoYsMsIUoqtSGvLnQS%2B7Y0g4nxb5Sy75HDVToXMS2LHGchhNfZZEW%2BAtCpbQSbpKhXdvjzgL%2BbsA0aBSDOqUXMJ8%2BZGHp6CZkyJNSjDqsabABjqkAVt2BVpMC3UCDyJa2%2FUDbp1iNEiq17h31nWcbzqXdTFpNlDelFpNaOvAQjiAbQwL%2BL9EcjBvv4As8a7NSzuP99FknFQZm83V%2BBmizHYVQnTsLPGbRX4Jc8iIzCWOGQrvj9jyf1CIfuXzCvqkIlYbiFWIWkMp7GBXnNr0A27noSwAjo0ZnjMJfhHb1zX8jV3UwHPdGtookxw91lDYoagBnfx1vyPX&X-Amz-Signature=364f5d143c566ca0860b125e085cdd645824f3d2b7e7bddf572839254aea80cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LVEE5W%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDp1FIPNccfxeAM3R4ZH3drArsI0y7mZZLdhBK9LE%2FjjwIhAL%2ByonfIekHJuN5StWxF8odtQ09RnbB2cJBSG7LRrDswKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC2CgOh%2BnQnkdlS%2FQq3AMSOi9JQhinX8F1bXRStCGr2%2BEq4ky53vBORsMBVdSNssBMQZS40bAu8uRNJ%2BK7imKq%2BhwZ4O2zkjilhcngFUCy3TbKW9wpKRLJLlCtGcwkPrjZ4NZoB5WLd%2BHgh2S3D4m1aCntnu2J8o8IpvA%2BbxbVP0dE2V2EYPZ1s%2BlLiwH0WUwNYb7VckxSLetaIT6pQP8C8yYcwYy7SwXUx99giYr2fRwo2Gwuhsumo19aHgu8jc0yBVCnzYXCvKz4%2FSn3CtyeWQWGI9CvWZrommr784jiMVMD1FhRWanVqYVz2x0vYtiYi0nF3ClBnjIE6N2LcxDxIg4NsnYWUh3m%2FxDvvEXCmK7Dfe%2BZC5kBbBL9Jqw8imZy%2B1FurfanxqcYzopH7Qmm8WZcmhviWzX%2FEGjF39LJjQMMwc6gIE85RNaoPA6TPm1BqJg8Gv7PYyDjrNvYUIYsAo5oBfKdn9yAqPUyQJ5L84IsUsFJo4sTsofuTBTJU%2FfRMuZMPfHowvxFY8tRfSDU07G4A8DIH4MSrCJRfQ5GwoYsMsIUoqtSGvLnQS%2B7Y0g4nxb5Sy75HDVToXMS2LHGchhNfZZEW%2BAtCpbQSbpKhXdvjzgL%2BbsA0aBSDOqUXMJ8%2BZGHp6CZkyJNSjDqsabABjqkAVt2BVpMC3UCDyJa2%2FUDbp1iNEiq17h31nWcbzqXdTFpNlDelFpNaOvAQjiAbQwL%2BL9EcjBvv4As8a7NSzuP99FknFQZm83V%2BBmizHYVQnTsLPGbRX4Jc8iIzCWOGQrvj9jyf1CIfuXzCvqkIlYbiFWIWkMp7GBXnNr0A27noSwAjo0ZnjMJfhHb1zX8jV3UwHPdGtookxw91lDYoagBnfx1vyPX&X-Amz-Signature=877380b998e01211715dc644261683b802e38334a05de4dbdef27203834a06e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466445O2Y6J%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIH04HUvudw31XWi44q%2FOeT6sU6gcj3aWHRzISU6xtHtiAiBDKw7CYqq%2FqPWIZaIU33vH2k0k%2BBn4gRUR%2B7Tty5GK1CqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0yfodOlLaylcguItKtwDIlGPK2PBOMUD%2BJEJhL7u0wSpRe4hYyL3brlU5s97TA4xssSU93CzcdpTpDq8teEzx1J%2FnTT83zKl08cVyjWhy34Ic%2FE%2FvJE2U18hyXFYjCMejsE75Llzw0ZYzIqwZB8odV2cUr9chee9K2fgdHXKbjC2P67wi1ZKOEVAmx%2BdTCzNnvT5D0ukFWJO8w7FNtFtdLYijxb4mWmGGWkmv2BggH57RB2szsiGuU%2FVVj1iphukRouGUJrfPhxYIvsHvjAWWHs4HrWspGAxFQCc6IT%2BoF%2Bwkah2vGYgt8LRzq9gZ446GzWvBX5c8HOfkGnEHwTy9ENnYdCWktZPdkTHOYqOPqoLL1LvelgAFa3vfv4LotyRZ7OEUmD7e3Rh4rCvJlP%2BA7XjmYBc1nko%2F059v%2B7%2BEmuWPlbuudNn9r4wrCfdpCo1MlCZCCbqX5FJ75CMY%2Bzflp2l0daY86PA%2Bg%2Bh032sH0TzHCBSdXWn5HB3a6umOPqeU3cnhlDLzT5uXNcGmcwGzFzB53DuaY7xQpDdh3Tvwhfm%2BwkvqTyvMwKH19Fu7C3QTFuxeVgOuq1KnJ8CUpb%2FmNMUHXL90Q6v7oh2xcafl8%2BBSGdy75k3FrVcqeYZ6xxdlZ8p0N5WIafCN98wsbCmwAY6pgEUq6h14XtKhpjzWd6vT2mwrUu1K%2Bsmcck6pWd3HuwZCRBO7YTKaWVC3N4HHN%2FdYmuUgSxYjsIGjrwzwhaRECc3iSm16Wvk%2ButEi2XA%2F1YgS8yhMRwwSlE9dcqpneNfNpyVnRk1UEafUG1sg5FySVPyCP%2Fw7KRbb23LFB%2BgBx75zax4qY2OIioHG0MdwfwqOVWNuHqnr0cG5MUgeQQs%2BKjSUJn%2F3yFb&X-Amz-Signature=7236d314203420a0a9952715e15641c44cf02d98af12802f8dd92719215b66c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRTI7VVL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCA9jhnjI0YhGraYVDhKYGHXVBXa%2BztT7mXbraIvZ3RBQIgZ3pJv6M2Za0MkGza8HoNZ84nefys%2Fj8RhrG1ivMAwY8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUkwld7FNPQIoGZHSrcA2TmnMEYh6lcjpeAt3SKbvNz%2BxfPcvk38qXgeYr9%2B3dqevv%2BAJNhy5TR%2Bp0z4dDcehOPYVo84AZWsNXqd5OfEztdtIPs2nS9LnXNRmbuZOlR%2B2h1Z%2B5s938T2wpuC7zqIoVJdfo8o5QL%2BmIDo3wwVvx9mYfXcCpIqSh7ofdAbgUr9SuvM%2F4hpf%2FCzzkG7aZbuzD5d7Wxg5z5Tx%2FGsmuk5rvRwN98Mz9IqWUJppg4sQ2FEPizCH86q%2F7Si%2FEDrQpm%2BfaBQxqV6Uyq%2FJ3EkqHC9MrJ%2BrBf%2BvpW%2FkxqketU5h03uW%2F%2BVDyFVNZWLPflLObU52ntUg78S3C%2FP6HWDWVd%2FLM5yxyfOLyDNupVXR8%2BG%2BmLYT4KqujZTSBkvJxI3XN48fIwfvE0EVD9Nn7nrfXkq696F660ExsDpLpncKHQ5mlMHpQ71co%2BZuNsnf01CMHqIRL3p6fa3Iu%2ByFwMasWLOZCxjkV1K5UfKaQSJuN7Y%2B0u8k6K0Xx7Mb2oC3yYJhYFv5JyNnzeGFso653AAkl9U%2FB4H37USeM4O5ObddvO5oV0AHOEfbCYxYpWgo7JnmW6TEiCkGt1K8205sLnI%2BCf%2BALIFCbH0jVhKZ3w4WxzagsPzTaEh3NkVGGEzPu0MMmxpsAGOqUBpNhoBOY692EZRCupo68YMv7a9VMvamHQ2zJKvlXwyVKgxU7B1a64I6HlvPTh7Z%2FhmO8Lfvzg0J9BPvJccfey7c5oRAsKky%2F0yhKG%2BsMaRMoLFkAeYAK6l2wuWKMNh2aAv6%2F2FI0bkkzgp7PyOeIZLbIwlWXFyy0VyAAkWmXqOg76pL9O1MRkpU2OtiL9pH51JKFpSI6fDhU2%2BdOEKZcdbGDkfw%2F%2F&X-Amz-Signature=e76cfcdae855ac0821a4f459ab3cba82f3cf9da6e3c6d7eeda1b86932ccad868&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655LVEE5W%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDp1FIPNccfxeAM3R4ZH3drArsI0y7mZZLdhBK9LE%2FjjwIhAL%2ByonfIekHJuN5StWxF8odtQ09RnbB2cJBSG7LRrDswKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC2CgOh%2BnQnkdlS%2FQq3AMSOi9JQhinX8F1bXRStCGr2%2BEq4ky53vBORsMBVdSNssBMQZS40bAu8uRNJ%2BK7imKq%2BhwZ4O2zkjilhcngFUCy3TbKW9wpKRLJLlCtGcwkPrjZ4NZoB5WLd%2BHgh2S3D4m1aCntnu2J8o8IpvA%2BbxbVP0dE2V2EYPZ1s%2BlLiwH0WUwNYb7VckxSLetaIT6pQP8C8yYcwYy7SwXUx99giYr2fRwo2Gwuhsumo19aHgu8jc0yBVCnzYXCvKz4%2FSn3CtyeWQWGI9CvWZrommr784jiMVMD1FhRWanVqYVz2x0vYtiYi0nF3ClBnjIE6N2LcxDxIg4NsnYWUh3m%2FxDvvEXCmK7Dfe%2BZC5kBbBL9Jqw8imZy%2B1FurfanxqcYzopH7Qmm8WZcmhviWzX%2FEGjF39LJjQMMwc6gIE85RNaoPA6TPm1BqJg8Gv7PYyDjrNvYUIYsAo5oBfKdn9yAqPUyQJ5L84IsUsFJo4sTsofuTBTJU%2FfRMuZMPfHowvxFY8tRfSDU07G4A8DIH4MSrCJRfQ5GwoYsMsIUoqtSGvLnQS%2B7Y0g4nxb5Sy75HDVToXMS2LHGchhNfZZEW%2BAtCpbQSbpKhXdvjzgL%2BbsA0aBSDOqUXMJ8%2BZGHp6CZkyJNSjDqsabABjqkAVt2BVpMC3UCDyJa2%2FUDbp1iNEiq17h31nWcbzqXdTFpNlDelFpNaOvAQjiAbQwL%2BL9EcjBvv4As8a7NSzuP99FknFQZm83V%2BBmizHYVQnTsLPGbRX4Jc8iIzCWOGQrvj9jyf1CIfuXzCvqkIlYbiFWIWkMp7GBXnNr0A27noSwAjo0ZnjMJfhHb1zX8jV3UwHPdGtookxw91lDYoagBnfx1vyPX&X-Amz-Signature=9e00688dfb3a3e290c2d884e6183438a5a5efdbb2d68b8bb7fd0cf4e4535cd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
