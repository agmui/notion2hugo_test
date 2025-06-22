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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3EXYES%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu12H1MUvfxN3LHEs73GUvn7%2Fj3mqUfpabKHHkxfk%2FfQIgR1d%2FJeEgNijzRS%2Bko4zPhQ7KwrmwV%2BK7a4cHCPQWVrMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJicU3LKVOaTC1HGircA5ICgDkdHF8IotJIvKih4OzUxc1r3nrSckI3PUnpx%2FAXbPhYwKN17NvW8WnR3IDsMRdQDiVrSHPnhHOajAujRqknz%2FN0CWhbrhFvKOMO0I1k3OKxmpSM%2FFZI8hRq3MGlCiDiSLWoLp4Mk68O7rHvPFDxQOmBsvkJWanmvzkuEqrt%2Bv50S2K8GrkeCol3GyE%2F2OZMKULA2PnLeOo2NJVDM8BYgt%2BcAdaOyueZbbKYrmDH7AZ%2BZZ01gVjGpEZoJYoKnaLotBh6OVWvVbrMDIDrzsQI3Qscl5UpypY6HR9Gcf8amib4TE7J9ts%2FwkkQIbv53FhDqSBai0Zf3%2BINN6U9JGGvy8EUFZkb7FLzhie%2BD2gz4MnSuvhWKHoHIk25E8fVL9JKIdf8GrqNmi0vacpxi0aIrSUugAPAR%2BVCwEEibLZ%2FhlF9kQN8kY%2BZn6jOlf81WfkrQHrEYtDUdceQhAhVxE%2BHZGtf2nzKY0ZwtnISkeLQcwa8HuY3Uht2ua8Rr6KtNgbFBe0deq5Si3Ka69R2by0ae3XMR1JZUVJvzvRulid3LCmFa6Ll6P5lQ4MBa3J1UKWYvVRsX1Gk1KRUdOId9b%2BSRhhonOwhp%2Fvhk0FpPDbSpNYf2yHovbCW1mTGMIuI3cIGOqUBJWg%2BTHQu6cU%2FbEPP4%2FA8ghHAHkxoLRW6xVsUR1TDykrOucVH7PoySNIi2cDCSeuL%2BGrb7NSoY%2BISKlFaOkVk0H%2B3TRSIH09nI%2B3nlcUCX%2BHemcXudy57VI6OkZhKhsrFvRCLZVUB4e75pc%2Bdfl515J5%2F80eQ4V3YGqfdIbL4GbzYMkpF34e%2Br8iwBTbbDxD2cPjCNw1e1PSLzb3Tbef9Nnbtr%2FSv&X-Amz-Signature=4bfe3be75c10c083600d6fb78e4f83d6b6c6f008d7e4f455855210e9b415db1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3EXYES%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu12H1MUvfxN3LHEs73GUvn7%2Fj3mqUfpabKHHkxfk%2FfQIgR1d%2FJeEgNijzRS%2Bko4zPhQ7KwrmwV%2BK7a4cHCPQWVrMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJicU3LKVOaTC1HGircA5ICgDkdHF8IotJIvKih4OzUxc1r3nrSckI3PUnpx%2FAXbPhYwKN17NvW8WnR3IDsMRdQDiVrSHPnhHOajAujRqknz%2FN0CWhbrhFvKOMO0I1k3OKxmpSM%2FFZI8hRq3MGlCiDiSLWoLp4Mk68O7rHvPFDxQOmBsvkJWanmvzkuEqrt%2Bv50S2K8GrkeCol3GyE%2F2OZMKULA2PnLeOo2NJVDM8BYgt%2BcAdaOyueZbbKYrmDH7AZ%2BZZ01gVjGpEZoJYoKnaLotBh6OVWvVbrMDIDrzsQI3Qscl5UpypY6HR9Gcf8amib4TE7J9ts%2FwkkQIbv53FhDqSBai0Zf3%2BINN6U9JGGvy8EUFZkb7FLzhie%2BD2gz4MnSuvhWKHoHIk25E8fVL9JKIdf8GrqNmi0vacpxi0aIrSUugAPAR%2BVCwEEibLZ%2FhlF9kQN8kY%2BZn6jOlf81WfkrQHrEYtDUdceQhAhVxE%2BHZGtf2nzKY0ZwtnISkeLQcwa8HuY3Uht2ua8Rr6KtNgbFBe0deq5Si3Ka69R2by0ae3XMR1JZUVJvzvRulid3LCmFa6Ll6P5lQ4MBa3J1UKWYvVRsX1Gk1KRUdOId9b%2BSRhhonOwhp%2Fvhk0FpPDbSpNYf2yHovbCW1mTGMIuI3cIGOqUBJWg%2BTHQu6cU%2FbEPP4%2FA8ghHAHkxoLRW6xVsUR1TDykrOucVH7PoySNIi2cDCSeuL%2BGrb7NSoY%2BISKlFaOkVk0H%2B3TRSIH09nI%2B3nlcUCX%2BHemcXudy57VI6OkZhKhsrFvRCLZVUB4e75pc%2Bdfl515J5%2F80eQ4V3YGqfdIbL4GbzYMkpF34e%2Br8iwBTbbDxD2cPjCNw1e1PSLzb3Tbef9Nnbtr%2FSv&X-Amz-Signature=607ac4c03ffa3be5d321c16f90610a5970074241618ef6dcf1065a50472a5c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3EXYES%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu12H1MUvfxN3LHEs73GUvn7%2Fj3mqUfpabKHHkxfk%2FfQIgR1d%2FJeEgNijzRS%2Bko4zPhQ7KwrmwV%2BK7a4cHCPQWVrMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJicU3LKVOaTC1HGircA5ICgDkdHF8IotJIvKih4OzUxc1r3nrSckI3PUnpx%2FAXbPhYwKN17NvW8WnR3IDsMRdQDiVrSHPnhHOajAujRqknz%2FN0CWhbrhFvKOMO0I1k3OKxmpSM%2FFZI8hRq3MGlCiDiSLWoLp4Mk68O7rHvPFDxQOmBsvkJWanmvzkuEqrt%2Bv50S2K8GrkeCol3GyE%2F2OZMKULA2PnLeOo2NJVDM8BYgt%2BcAdaOyueZbbKYrmDH7AZ%2BZZ01gVjGpEZoJYoKnaLotBh6OVWvVbrMDIDrzsQI3Qscl5UpypY6HR9Gcf8amib4TE7J9ts%2FwkkQIbv53FhDqSBai0Zf3%2BINN6U9JGGvy8EUFZkb7FLzhie%2BD2gz4MnSuvhWKHoHIk25E8fVL9JKIdf8GrqNmi0vacpxi0aIrSUugAPAR%2BVCwEEibLZ%2FhlF9kQN8kY%2BZn6jOlf81WfkrQHrEYtDUdceQhAhVxE%2BHZGtf2nzKY0ZwtnISkeLQcwa8HuY3Uht2ua8Rr6KtNgbFBe0deq5Si3Ka69R2by0ae3XMR1JZUVJvzvRulid3LCmFa6Ll6P5lQ4MBa3J1UKWYvVRsX1Gk1KRUdOId9b%2BSRhhonOwhp%2Fvhk0FpPDbSpNYf2yHovbCW1mTGMIuI3cIGOqUBJWg%2BTHQu6cU%2FbEPP4%2FA8ghHAHkxoLRW6xVsUR1TDykrOucVH7PoySNIi2cDCSeuL%2BGrb7NSoY%2BISKlFaOkVk0H%2B3TRSIH09nI%2B3nlcUCX%2BHemcXudy57VI6OkZhKhsrFvRCLZVUB4e75pc%2Bdfl515J5%2F80eQ4V3YGqfdIbL4GbzYMkpF34e%2Br8iwBTbbDxD2cPjCNw1e1PSLzb3Tbef9Nnbtr%2FSv&X-Amz-Signature=72fa3dafc15385b71dbe2c7b0d165aaae802568b0c30d27bc80c2837c7bc523a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGA7U5QW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGor2gMs68E%2Fdnh23HBAYFQ545paY6CbsC5hZRK%2BTN7GAiAW7ezTXxIaN1nSsqXG4d9%2FnwLytg0obRyjKYc%2Fd9EYFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXAes%2FSOkK9UcEYCcKtwDiPdyrJk%2Ff8PSZnWItrKWmbybvUavMmVCLA%2BA1%2BlEwZ9rTx%2FdeKygAa7wIE8xRRJDt01u5RVt4gHP8n9E9yekdgr0c0YCSaZErChMq2jlUDnsDNf%2B0blqQZNfLPaS9S1AsPJKoIRQ49nw9ILUWKiJ7p0QV%2Bae3ZTd5jPC50xFRQCVbOeysiUTwgQSu3tPlEMOUSkSU7EaRQ%2FcEfy9gdGSsQzdXF9%2BM06sx4SQDXIYdwoqM%2ByeqCBXYiF%2FqprZS7nvGzL5NK5oMrTBrMh0kCl6nXGMI75VqLPWKc87OFkj8J%2BHgzAbhQD5iFSfplgwoNbCUQIGsBhiphTV%2FX6hSG1qNhSDw3IvlW7jsoLPZAMlatlXEegYpEKlQqkFh0hd%2BxrJq3ebFmSaHI2yEHZ57yvAxpCj7%2FDCep3kYT01eWHRYVld2tnJanMfUhBi2zqkvf9z7vpKUzPVaoQlkEwqYTG7SueKCly37u4%2FfJq8ZrDScLbgY2b%2BJxJp4YovFHdA7W%2FPJShwUyJQVlt5BCUH6auB3BPEStNdkcNJ9qJ%2FkOHtaWLkQO%2FlfnG9YXZdLQeDu%2FcPfDdlVH01ogKavO5ccqDIX3Fnb4QsKthbQkd5oIOXzQJCefDM6YHTKhl8ZtUwvofdwgY6pgGECEgkVGVMu9LpKUPMz7aRXD0Nu%2FbkJ5zsv1uujURY36mkNNH2tt4HUvhaYFCDExp2%2FuWfKgIHqjtUK0gh2F8BCsCRCiMage0GOmpwB69PTtP0zaZLMQv0%2FaRayoValV6t7SvM8GG56xV1OwozlbhV%2F0OAbflXtdVj8QZgJXdmqBIv0vT2sR3SIJ40b7uTlZxUG%2BubY5S6FFYVtaxCIe8R0mTQ0fip&X-Amz-Signature=b39c4796e29be493441e7669e9e3d7c4e5e03bb00e29b5623b6df3cb0e5dd280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LM5PAO3%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwVEa8mDKWDhsfPH4xRdknIiIJaTYe1r0UE74uz6cN4AiEA7Z%2BLQcu7RY5vXVqTs6VgQZ7c%2Bn9Wn7PChp1XbzUvP6QqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEohJbOLEY4uzmpXSrcAxTMLJ2JrYd2oDRZVPdkxtwjezuKuylvCimOpfGtRHuZTklIlzU2se6mOnHbcRIR%2FKFlcO3P6vqKH4Bwk18Hrk1CqUPjAjgQ13ZH8lTLo50UoJ9s0JS9km27aAIBsJOu3pWnhZAx50l%2FkbSlwPD6RlpldsyCN9gO1ySd6jOybv31c5y3bekXw0%2BLJdvx%2FaKkN4jQQr3rMJzs%2F34Z9VeJpcXvzuvByLOFYVd%2BPm%2BFr%2Bgz5sYEp7T8tLfWId5NGKI8fIF0akEgVuRfLqbwd%2BTTLfky9OASkywBp78x5rxjb3FpU7x2xLn7hwZYj5nONV2rRhHuHj1680O7ZmHg8kkqZZsm8x17KPcI1fgpcC%2FBPBpTVrQLMUyzgMvEZ5bDG8OSWPjwkHx%2B8H3BqQY%2Br0o86sUT5cgLY6w1JyisWp2NKeK2B5E3CJYXGlExBvPVmHcGZHzY%2Bl5mS%2BjiXG93ACw9NYx%2BHnaAeHeJOKWkKKwIbRbF%2BkRw125xJ65ofjk1il1oJateFys2NYps%2FyKx61vG4LLHEFYRNPnM6FXR5QFVr%2Fip%2Fsh3oFmkejQJjUboOTy%2BCjyRBoewukIhQTgZ1UjPw9NWrzUqUZuFMFlmOfu%2BIi40G%2FINVubCJf04bfosMImI3cIGOqUBLHU4nyCxwaRLcKqvYzzE%2BTilDn4BZP0N%2BgpxQUSDAzI4AQeOvw736nMiLhYXNHf9XpL7Y1XXafOkt2IvQWnpRD5rmdfOr64lzFxr0qTBmZTAPxNK2%2F76XjF7bgB89QDcfdKoYn1SVQqqG%2BYvcXBlTskf0fmjj7P7xPEwwrQAVYy%2BusOkVQn6jVTkweZAix3y1ngLqGRpyFFaZL6hHYN3FGRtUzIj&X-Amz-Signature=08369bf646263b21df1d2e2f9d81cd3755dcea2c1c5e91b650b983c636738398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3EXYES%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu12H1MUvfxN3LHEs73GUvn7%2Fj3mqUfpabKHHkxfk%2FfQIgR1d%2FJeEgNijzRS%2Bko4zPhQ7KwrmwV%2BK7a4cHCPQWVrMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJicU3LKVOaTC1HGircA5ICgDkdHF8IotJIvKih4OzUxc1r3nrSckI3PUnpx%2FAXbPhYwKN17NvW8WnR3IDsMRdQDiVrSHPnhHOajAujRqknz%2FN0CWhbrhFvKOMO0I1k3OKxmpSM%2FFZI8hRq3MGlCiDiSLWoLp4Mk68O7rHvPFDxQOmBsvkJWanmvzkuEqrt%2Bv50S2K8GrkeCol3GyE%2F2OZMKULA2PnLeOo2NJVDM8BYgt%2BcAdaOyueZbbKYrmDH7AZ%2BZZ01gVjGpEZoJYoKnaLotBh6OVWvVbrMDIDrzsQI3Qscl5UpypY6HR9Gcf8amib4TE7J9ts%2FwkkQIbv53FhDqSBai0Zf3%2BINN6U9JGGvy8EUFZkb7FLzhie%2BD2gz4MnSuvhWKHoHIk25E8fVL9JKIdf8GrqNmi0vacpxi0aIrSUugAPAR%2BVCwEEibLZ%2FhlF9kQN8kY%2BZn6jOlf81WfkrQHrEYtDUdceQhAhVxE%2BHZGtf2nzKY0ZwtnISkeLQcwa8HuY3Uht2ua8Rr6KtNgbFBe0deq5Si3Ka69R2by0ae3XMR1JZUVJvzvRulid3LCmFa6Ll6P5lQ4MBa3J1UKWYvVRsX1Gk1KRUdOId9b%2BSRhhonOwhp%2Fvhk0FpPDbSpNYf2yHovbCW1mTGMIuI3cIGOqUBJWg%2BTHQu6cU%2FbEPP4%2FA8ghHAHkxoLRW6xVsUR1TDykrOucVH7PoySNIi2cDCSeuL%2BGrb7NSoY%2BISKlFaOkVk0H%2B3TRSIH09nI%2B3nlcUCX%2BHemcXudy57VI6OkZhKhsrFvRCLZVUB4e75pc%2Bdfl515J5%2F80eQ4V3YGqfdIbL4GbzYMkpF34e%2Br8iwBTbbDxD2cPjCNw1e1PSLzb3Tbef9Nnbtr%2FSv&X-Amz-Signature=d1371833722b284e5b7725939199d06f9d9a2219616fbd090e6f7cc9c69d6922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
