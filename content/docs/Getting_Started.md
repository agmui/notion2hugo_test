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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSX7ITH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDoeZyG%2BLdhIXCWEuCeipcWEfQjezKbQPUmWFpwzSxw9AIhAPRvQ6i9%2BnCWrs91OSVE%2FDtTR%2F1e4Equ4WMBqZbx3oPPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmbwRFd2FELqnC%2FFsq3AOh81KkAYWvT2nkMPjoj8Iwg8QeJlMae%2BorTVdA6fyn9qkcGB1gUYS7SyEmmhamYk05pmM%2BftMPztQ6IUJrqAlySWeG4%2BlDL3KYVKEAqiQq7ijqIt4ea9Xx7hR8wTWlMErvrS0cmRpTvVCnC5BKErEum%2FnZrLMk%2FagYaUsbsESp37gNgjcFTdD%2BifnTvLwwrpDo0MTCcK00AzTT1sVH%2BFM3xg%2Bl8zM%2FAdrUme55yBwlrx0FP3mC91D%2Fsp03MBdJXcgkgWtRGYqkmc8eGVKZ6EXv9riIAqaLnMbHrHuf7l26M1QZxdwQCGQW5LZ4zg%2FQmoAoyacBAXkyqer1c5OaBH6SlPxI23QjVHJcQRIjeWmlduSbKBv2nOtfveSVJx0YfwIFCaVm8E%2Bzuaa%2FWSNbzdtObEWeW1OPJidR2S9U6fwOU%2FQzOJmbkbsHcoglWmoBzPJG%2FSTys2lA4FxiKrbEhsmsBNETL6HCRB1t6GqsQnD54hp20emruh96898NgKwxkRrmyGTxiq%2BIg3sCsTyCEhBCni0Z0CB3DhT8XMrAO208AR%2FQHUzRkH2Moifj6umdmY095m0p0BlxImaPzpDUa9oT6%2Br1SGWy8SdFrECsSyzeH%2FLNr1nmmAbcK5nDizCkp%2Bi%2FBjqkATgkVRPZerDohlXSdyJOzRunf6zYzre%2F7%2BXtWqCrB58VZYL0%2F23bq4HMFvjdBqiZbQpDRDpobVOUqY%2BThgFqmi5jba8E0KrZ55VupQ7Z%2FKVykkwR3e1%2Bjbf7OogkT8AaI%2F2%2FI81VIJpybbaHtpXhvuVU%2BdO1WnntTPN%2Fvio41x1mzyKnRIk7WlQus6bdy6fHB5dQQhqagVElVPnD1EM4hZED9mUW&X-Amz-Signature=017aca6796e4d8ca1cb8f590ef5368d8c15d205da036d04a4666c181899676de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSX7ITH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDoeZyG%2BLdhIXCWEuCeipcWEfQjezKbQPUmWFpwzSxw9AIhAPRvQ6i9%2BnCWrs91OSVE%2FDtTR%2F1e4Equ4WMBqZbx3oPPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmbwRFd2FELqnC%2FFsq3AOh81KkAYWvT2nkMPjoj8Iwg8QeJlMae%2BorTVdA6fyn9qkcGB1gUYS7SyEmmhamYk05pmM%2BftMPztQ6IUJrqAlySWeG4%2BlDL3KYVKEAqiQq7ijqIt4ea9Xx7hR8wTWlMErvrS0cmRpTvVCnC5BKErEum%2FnZrLMk%2FagYaUsbsESp37gNgjcFTdD%2BifnTvLwwrpDo0MTCcK00AzTT1sVH%2BFM3xg%2Bl8zM%2FAdrUme55yBwlrx0FP3mC91D%2Fsp03MBdJXcgkgWtRGYqkmc8eGVKZ6EXv9riIAqaLnMbHrHuf7l26M1QZxdwQCGQW5LZ4zg%2FQmoAoyacBAXkyqer1c5OaBH6SlPxI23QjVHJcQRIjeWmlduSbKBv2nOtfveSVJx0YfwIFCaVm8E%2Bzuaa%2FWSNbzdtObEWeW1OPJidR2S9U6fwOU%2FQzOJmbkbsHcoglWmoBzPJG%2FSTys2lA4FxiKrbEhsmsBNETL6HCRB1t6GqsQnD54hp20emruh96898NgKwxkRrmyGTxiq%2BIg3sCsTyCEhBCni0Z0CB3DhT8XMrAO208AR%2FQHUzRkH2Moifj6umdmY095m0p0BlxImaPzpDUa9oT6%2Br1SGWy8SdFrECsSyzeH%2FLNr1nmmAbcK5nDizCkp%2Bi%2FBjqkATgkVRPZerDohlXSdyJOzRunf6zYzre%2F7%2BXtWqCrB58VZYL0%2F23bq4HMFvjdBqiZbQpDRDpobVOUqY%2BThgFqmi5jba8E0KrZ55VupQ7Z%2FKVykkwR3e1%2Bjbf7OogkT8AaI%2F2%2FI81VIJpybbaHtpXhvuVU%2BdO1WnntTPN%2Fvio41x1mzyKnRIk7WlQus6bdy6fHB5dQQhqagVElVPnD1EM4hZED9mUW&X-Amz-Signature=5f65b9c897ba1bb5898db12ae46b60366b447b879ab75cff4411233e9db62ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756AUM32%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBfSoexw0mNdw9XlNocvmSYcXyXlLelMoVMc3GTNba6WAiBvpVMRGorFBAqCZfmRCS4Pxne84tfUSQvjzCuAJ449piqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5xy%2B5bXn%2F8fNGBxXKtwDAemnw03TAA0aEv%2FL3Zj8qv2Wo0HtBsHrsWh90AIkdnUYNaqka%2Fr5plQUXOVYNcYwZLNThu9EETug7mB0cm7TgDft6g29Wesu2p2m3ajeXqb14LIYjmHJIWjjvIfPGyqjL6ldv8LrqtAM9fMlbGoijaD2gDf75lpOjWoOFzR%2FzFRE1ee9RE5WXNgYr5UmbjxyjxHKHqA7C9YQxzUPdDbdYfBpfcz6t%2BW5WYkxg05qxqB9O996rEcVnRykDLJcsk6Avr09cbUh5VBpWPMqxiMQRN%2BCpmygY4K8vdM8fdrJX9ho9DLws4pLy%2FsZ83T%2FT4YodSHbSBFnf9xG4MtsoU%2F9XMlr4WpVNBP3If4LNceLhCXUv307PR8uFiGWvFb1blghv1bbj4QUjYR0YI%2FV9Fzp0CClAMvajzELF8CnSJ3G82py5JL0M%2B4Sh1lOx7Vl95Q1ABAyG0n8SklcYlvWEg7zW%2FSH3USKyGycHBJ%2FP8lTdgTi3%2FY6Yiw4k2ZIDaC8n9yNxK%2F1xvTWLQjNXtFBAv%2Bvc7t9%2BMoVeif%2FV2WjkU5u8lTuQU8slAUYcyCDiD7xSNS8vFk0hYLg2v%2BX%2BdRJp3RGQYQ4j%2BL0iRDfqE7%2BdXoKY4TkQzSQJAYITfua4tEwgafovwY6pgHq9X1v0X6mM5CD98ORw7ohuwxS0vcn3MaNWAZdo1dWsNULJACs3rxzyIFSiNCllFZKe8K0WoGY%2BRSJg3UCcyLNfoZFclvukp%2FKZzWSEu5X1WFQU1kE9iFaLOvPd21j7peL1LfBWMOZ7ZNOtx2SSoZmbb%2Br5dYMgbhDAPXeK5LoPjgusMgtOGYyTl3LQ9bYzrwNAHW8Kf07OrUob1EoQGd2iKdO%2Fplx&X-Amz-Signature=72b9116d114733349333841df35e97a321a64d467e710297e6a32c0bf73245aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDQUFWZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDlpnIybWDODO87%2BXJs8KMVy7NTCj%2BgXmsddTanifS7swIgKHI%2Fe3S%2Fh45%2Bftmq6PNCm7ipwdxc7%2Bd%2B8apDc6phE20qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0xjcUGWNhDNEZGeyrcA6Zxk%2Faml0uLi%2BruMglGkrWfMjJxQeOECYmmUvoyXxHoxT1NU3kB3tNbBW22z%2BLu0HzucBQGa2aDxKsROt8ov3FCDIHFf%2FEgd5W92Gq6y%2B8DssW3ARB32IbfW3cJgGrD3FsYGXSgeMfjAN1dTuY97CVbdjq%2FjNf6uTNFkR3PKYMmn6m4Jsv3xzJCesJhuMVxV98Tgc%2FEmiaEvVShkyd1uXRMC6Sr8RLNgJ%2F5zF2YS2ED3m0VhjbtwgDKgfYY7fog%2F%2BYZJmRrG2K5DKUZ4ZJB1fgKB7VK5PWByYb%2BsaciwmoNZMdBIUf4lbhKPGNvMnFDXC1dqTJitggcJAKJHskm8zgRwxa%2B5jE0I24%2Bulvm4ktnCiqlbGdE1jnqNYWXc9%2FJZAaBRHg6HnCnEUT907z%2BnPb30EmzOFXhPY4zu2F7ze7mpWa5E8nOhhGAdumiI3N%2BTiKwGRK5Fh9MRtu8h8tKsUNk5axplq6tUadvE7Ur9Xs4E3OtUO4SrPAVCnJSrVPuGesUYsF%2FnedQhtW1zwqB1aUaKHJh7MzDT7iARqrKH%2F1Jh6xfFsl8g2HLE1%2FbdE%2B47wN4ri9CBmzf1hG7sDlN28tE793Xn7mELnpxwRix4d5BFklXvLO8SwDITbC3MKan6L8GOqUBbfrKPRchUiczClQPl1z2O%2BCTUlgM1VqEoABbg7bO5EK%2F7jpsWBfWNr5BOb5WJMlB4YHQU328yRYVK4V5hU4lMzjy4y7ttlJWgG2q1FIQ4N4ErYx4Q6xoSo3ZZ5EmaYxSdlxfKhKGfllqMvM9ZK4%2BH2ZzV34dVBdXzoMpCfoCNMpbv%2BQMyPRCJ1wD4v6VWrAMqSGB32vzEKmSC%2B4Q2guS2hTBagfd&X-Amz-Signature=2c682b7a65ec67e6e6318d3c73a4b6a1ee362c47bbca0a7e1c7eca8b7fa971a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSX7ITH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDoeZyG%2BLdhIXCWEuCeipcWEfQjezKbQPUmWFpwzSxw9AIhAPRvQ6i9%2BnCWrs91OSVE%2FDtTR%2F1e4Equ4WMBqZbx3oPPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmbwRFd2FELqnC%2FFsq3AOh81KkAYWvT2nkMPjoj8Iwg8QeJlMae%2BorTVdA6fyn9qkcGB1gUYS7SyEmmhamYk05pmM%2BftMPztQ6IUJrqAlySWeG4%2BlDL3KYVKEAqiQq7ijqIt4ea9Xx7hR8wTWlMErvrS0cmRpTvVCnC5BKErEum%2FnZrLMk%2FagYaUsbsESp37gNgjcFTdD%2BifnTvLwwrpDo0MTCcK00AzTT1sVH%2BFM3xg%2Bl8zM%2FAdrUme55yBwlrx0FP3mC91D%2Fsp03MBdJXcgkgWtRGYqkmc8eGVKZ6EXv9riIAqaLnMbHrHuf7l26M1QZxdwQCGQW5LZ4zg%2FQmoAoyacBAXkyqer1c5OaBH6SlPxI23QjVHJcQRIjeWmlduSbKBv2nOtfveSVJx0YfwIFCaVm8E%2Bzuaa%2FWSNbzdtObEWeW1OPJidR2S9U6fwOU%2FQzOJmbkbsHcoglWmoBzPJG%2FSTys2lA4FxiKrbEhsmsBNETL6HCRB1t6GqsQnD54hp20emruh96898NgKwxkRrmyGTxiq%2BIg3sCsTyCEhBCni0Z0CB3DhT8XMrAO208AR%2FQHUzRkH2Moifj6umdmY095m0p0BlxImaPzpDUa9oT6%2Br1SGWy8SdFrECsSyzeH%2FLNr1nmmAbcK5nDizCkp%2Bi%2FBjqkATgkVRPZerDohlXSdyJOzRunf6zYzre%2F7%2BXtWqCrB58VZYL0%2F23bq4HMFvjdBqiZbQpDRDpobVOUqY%2BThgFqmi5jba8E0KrZ55VupQ7Z%2FKVykkwR3e1%2Bjbf7OogkT8AaI%2F2%2FI81VIJpybbaHtpXhvuVU%2BdO1WnntTPN%2Fvio41x1mzyKnRIk7WlQus6bdy6fHB5dQQhqagVElVPnD1EM4hZED9mUW&X-Amz-Signature=52cf4a603e25c210399fa9470c1a464adc155d34064a7683908be26d0858caff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
