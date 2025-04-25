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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JHAQZS5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6G35c8DfqYpYbOtkeHuk6U%2BAxqIr%2BCej4cgQeKBEZeAiEAs%2FJtgnlfj7gAxcQ2U8oxXj7KsRQsCVKstM8kAeWd2Ngq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB%2FxNH8m%2B2czgNI4KircAyEizI37hT2Jsjzl%2BTwTFEPF6F8zEybQDWCR8jMPyrXKRL2iikpXBVGQlRAzdUP5sNRTnJRMxDbXVMp0LW1n2w9sW1WuOjJ2c4b3Ic4gw915JXFVao67p%2B8c2xRuntFsUoek%2FbSpkOmDijLdiALmrUTeEop9Ii%2BDo8Kh1EtSUO%2FoGZon54l4ODpAaZR1Co4RM16I9ElKBric5EotPUyVRzf0zThgYNHOlV0oRxsfhJjmFl2WNx0NvopQnUQQ75UIAPQAreSwa1%2FqJd1x%2B%2FnWy0%2BeRNIztwtIk53sQBP3gVlKCHyuIPu29R%2B4Fn0R4h2touAKNHTB49RE6t%2FvmljOz91wosW7qA5lIhwzh3bmQIm%2BbN42iOsj95E%2BdKjbV3%2FOqacTnMcrhQuAveEcxWJunymQSsnom2COPjtCivJhCjbXPtKGfVIxnQazOBZFXdX2tuG6EWUuZ8gnGfCoMYzA2boXCo94db%2FHqoam8gwPok7QoDrnJClUCmtICw5cFzYAY9CsHHdZ6jWYe4ceAXFVwHA9xqB91LRHKFpBprpQKbqtoWIWDPoxgJNfiy9Z54az%2FQ8Hd4Fac2581kMuohs9OnAKQE7yaLJwdEdET8%2FmL3N%2FHo0QHoNS8l5IzcSXMOj9rcAGOqUBRGK1fwvLvbcikWDcAEEJ0XiunLlZJC%2FmzEe4OhrLofZW%2FYFxYQAY6u1DeoNv%2B6DVp7Y24mZ1M%2BKeBPNF50HjkxJngElWAGQASN3uPoaQUtM4qLYJRa11XikQd2TO%2B7JqILsRH5mD50jBXyw4pUIGOyeM5RhrE3NVVdwm%2BKuoHyzWezLm866nVKVesUhT4dfu42I49XSu%2BrN%2FTObRbwcDv4xAipdf&X-Amz-Signature=03f51d61c374de9f11612eed61bea6b8f6d1003fc174e24da6b8913bedc27420&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JHAQZS5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6G35c8DfqYpYbOtkeHuk6U%2BAxqIr%2BCej4cgQeKBEZeAiEAs%2FJtgnlfj7gAxcQ2U8oxXj7KsRQsCVKstM8kAeWd2Ngq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB%2FxNH8m%2B2czgNI4KircAyEizI37hT2Jsjzl%2BTwTFEPF6F8zEybQDWCR8jMPyrXKRL2iikpXBVGQlRAzdUP5sNRTnJRMxDbXVMp0LW1n2w9sW1WuOjJ2c4b3Ic4gw915JXFVao67p%2B8c2xRuntFsUoek%2FbSpkOmDijLdiALmrUTeEop9Ii%2BDo8Kh1EtSUO%2FoGZon54l4ODpAaZR1Co4RM16I9ElKBric5EotPUyVRzf0zThgYNHOlV0oRxsfhJjmFl2WNx0NvopQnUQQ75UIAPQAreSwa1%2FqJd1x%2B%2FnWy0%2BeRNIztwtIk53sQBP3gVlKCHyuIPu29R%2B4Fn0R4h2touAKNHTB49RE6t%2FvmljOz91wosW7qA5lIhwzh3bmQIm%2BbN42iOsj95E%2BdKjbV3%2FOqacTnMcrhQuAveEcxWJunymQSsnom2COPjtCivJhCjbXPtKGfVIxnQazOBZFXdX2tuG6EWUuZ8gnGfCoMYzA2boXCo94db%2FHqoam8gwPok7QoDrnJClUCmtICw5cFzYAY9CsHHdZ6jWYe4ceAXFVwHA9xqB91LRHKFpBprpQKbqtoWIWDPoxgJNfiy9Z54az%2FQ8Hd4Fac2581kMuohs9OnAKQE7yaLJwdEdET8%2FmL3N%2FHo0QHoNS8l5IzcSXMOj9rcAGOqUBRGK1fwvLvbcikWDcAEEJ0XiunLlZJC%2FmzEe4OhrLofZW%2FYFxYQAY6u1DeoNv%2B6DVp7Y24mZ1M%2BKeBPNF50HjkxJngElWAGQASN3uPoaQUtM4qLYJRa11XikQd2TO%2B7JqILsRH5mD50jBXyw4pUIGOyeM5RhrE3NVVdwm%2BKuoHyzWezLm866nVKVesUhT4dfu42I49XSu%2BrN%2FTObRbwcDv4xAipdf&X-Amz-Signature=a64f393e0c8d83b6eb39e0d7c49b1f7eadc2e4c7e3c4e13209f53769a4d55754&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPF3JVFB%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2phBWIYRKr8%2FVhdWk2P3UDm4x8pRPgKyb2mGORWTa%2BAiEA5gZZ5XLKV9xFIRO12TbcypDgudIGXrttY6z1fR7REF0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBbguX%2FVjZzFAabByircA7AVngct31PYh3NLLIQ2aTCCVMm7oLiRINpdvudUYiHJ63tB3h0TbP5HWp3TfisGKLbd3tetqK3awNSfCNAfKT7QgHsidb6KV8VkB6D4hfisnayW6mu9Nu7Vv53HCZcnMVCz83TJw5CVfhhwFKYtM5pZ1GN%2BA3fyduIZq68jQ%2FXIZY%2FQ08vIQ5%2FtOEWnH5LCeml0EKaghmkAcS%2BU1xVOYxUkg%2BfX%2BIGESmpfs9J75puPpS7bVLz5KYyIT0s17%2FTbk%2B63Tnkja9%2FKfDwaExCNbYIS8bUIGo7vBxHwTrlLAfiPue6O%2BvD0AALJO74XO%2FFrGpTFKkkCim%2FfQBCXIZLtgxH2Z59qLJJ8KaW2URgRFuPwWo5gAw9qKwQfwUpx%2BSSJLyLLULpHbAvOPNdCcNbVIo7fxAT1ROBKW5Vc9kK6HxbZztgGz2qx%2BQXDjjKFjF%2F0hl0lgC4SR9IlfCpbyg3yyo8r8ICijkOS2afj9aqI9DxScOxgB9iq9WOkFB7cT8T9GfRhGziufH8J%2BfdA3liGZhAA3Q%2Bagb5L5N75jNv1LPFEXrepHNu6N2qiGRujj01DGijTM3NidPZAkCT1dsBeRijmGc%2FtGlrvF%2BcyXsKl5o7zUJScQ0uDNd%2BsYguhMIf%2BrcAGOqUB2KYSeX9j5Nu%2FpvH4G6bW4xbAtv88MejuQDLcP3hukN8bM7MTqkrFMOMsWkXZaV%2FqjXzUfqW3fuYAhnwKqXzdF1mVMuJnMSClTAkssJLbPNRl%2B8AoJljBOV23xo%2FrTiCRvoiHIKjvzJHIFFpa2vojhvE9BQJvDX2HLL2GZ26CtciBYyqc4F6Brst0HzmCRJMFJVePC9CE75uZeVIkxMjgd8ybBNWI&X-Amz-Signature=e5b920de34d69430b8db459a00ddfa6b423e97b872b46d2acbab595a79c3bf7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X44RUNF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyqT1EZzhFCFQHYWo6rwrQNWWJQZWsoerAdeWzqDwUyAiEArr7O30msRdfeloymMFiajAhPJba3U3BYuyfIHEOb3bgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFXa9tSmDcyZNFspiSrcA9cMEWjX%2FKTV18jlQERcQnlhzDsq9zUsUz0Z0dI6SW4Ab6y4n85zJIl%2BQWYbTX%2Fd0urosHF1HJmXxxLB3M%2BuZFCXWFKkO9p4JSfvlDQRqqq5acks4%2FjE8IrxpXe%2BWCPl3gU0A5jVgnv7FdGypHaLoyU7WXiC%2FSkZBmoyH6xIpADJGB7xApJtKJ5yUmqzshpbW%2FbwfNL%2BTnC5MRVoB7RnK0erX6cKfZOLOV9ajtxOtohbKsQarHDqouPJF4JDWXJykMqXimbpZTWm06gh9RHNSz1u6Dohjyx%2B7rpgw4gJxkhZ%2Fp%2FxWEd%2BCQOoSuCyBgbxmQyPGHCihoTV0zCFV0H0knFEHg9M%2FO59hr4gUy9N8naXLj9SuveJo8g0RubsLPTXDwz1sdzaagcxk4Re3608UeteRpKVaMTWp2aGgxn2%2BmjWfEOI2Azv5XTmZ3ZD%2BEPg8mH2EN77PHahGm2DSwi5DQNeCs1h1%2BhAyiPtcNjZNBFvchfJcVQY0OnFqVF6hgMmnpIs%2BQGrp7DqUovuvillt0Iv4dMBe3LCOXioKDHCzLIIgcLnVwT0J0%2Fzy488Zr9YG1uuoHKXM%2BK0wNoSuwWLDU%2ByzCh2ktRZ1ztnHoTb9wLfzMpKHTQ%2FgVRaZHIEMJH%2BrcAGOqUBCA8zWC%2F0Gx0ltb8gqDR7PNcNtVqLGYkuZG6WwCnaAbVYS8kZ0jSrm9ep3moVWgN0MjSpGZtXJsgJi7CLZco%2Bp1jfGu%2FJCI6%2F1eQMkmfv1Bsl%2BZpaJbaz%2F%2Fa%2BYLVCstant1gMdPMuvrVhr67ZtdGw0ttQsyleth8U2jpq87pwNAHzFGYfXnGAPLeaH%2B1OfnyPF1iM4lBBctnsRyZPJlXAyxqSy1La&X-Amz-Signature=e9403778a29a26fd4568080a5c6c5de226484fa2c0f63915a056f9ccbd9ab9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JHAQZS5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6G35c8DfqYpYbOtkeHuk6U%2BAxqIr%2BCej4cgQeKBEZeAiEAs%2FJtgnlfj7gAxcQ2U8oxXj7KsRQsCVKstM8kAeWd2Ngq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB%2FxNH8m%2B2czgNI4KircAyEizI37hT2Jsjzl%2BTwTFEPF6F8zEybQDWCR8jMPyrXKRL2iikpXBVGQlRAzdUP5sNRTnJRMxDbXVMp0LW1n2w9sW1WuOjJ2c4b3Ic4gw915JXFVao67p%2B8c2xRuntFsUoek%2FbSpkOmDijLdiALmrUTeEop9Ii%2BDo8Kh1EtSUO%2FoGZon54l4ODpAaZR1Co4RM16I9ElKBric5EotPUyVRzf0zThgYNHOlV0oRxsfhJjmFl2WNx0NvopQnUQQ75UIAPQAreSwa1%2FqJd1x%2B%2FnWy0%2BeRNIztwtIk53sQBP3gVlKCHyuIPu29R%2B4Fn0R4h2touAKNHTB49RE6t%2FvmljOz91wosW7qA5lIhwzh3bmQIm%2BbN42iOsj95E%2BdKjbV3%2FOqacTnMcrhQuAveEcxWJunymQSsnom2COPjtCivJhCjbXPtKGfVIxnQazOBZFXdX2tuG6EWUuZ8gnGfCoMYzA2boXCo94db%2FHqoam8gwPok7QoDrnJClUCmtICw5cFzYAY9CsHHdZ6jWYe4ceAXFVwHA9xqB91LRHKFpBprpQKbqtoWIWDPoxgJNfiy9Z54az%2FQ8Hd4Fac2581kMuohs9OnAKQE7yaLJwdEdET8%2FmL3N%2FHo0QHoNS8l5IzcSXMOj9rcAGOqUBRGK1fwvLvbcikWDcAEEJ0XiunLlZJC%2FmzEe4OhrLofZW%2FYFxYQAY6u1DeoNv%2B6DVp7Y24mZ1M%2BKeBPNF50HjkxJngElWAGQASN3uPoaQUtM4qLYJRa11XikQd2TO%2B7JqILsRH5mD50jBXyw4pUIGOyeM5RhrE3NVVdwm%2BKuoHyzWezLm866nVKVesUhT4dfu42I49XSu%2BrN%2FTObRbwcDv4xAipdf&X-Amz-Signature=2d38b74087e68b5093eb212c982dc1da77fd32d08ded3a04069adb150d9c6039&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
