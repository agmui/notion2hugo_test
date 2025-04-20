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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZL7VV5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH8TwvSTa0TimHbqqJi4rRqicfjbS%2FwGmZJjUZiR5ZP%2FAiBNUqe5IWzLGYl86OPq%2BH1E3O9aBwHQOksUfmA7DXyjLiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq4C1WJcDqVM4LrzSKtwDC0HS2y%2BKTJyWJHDLNO9zuCBqk6wy4CnhrI7WBVCMGJk8SCpFoQ2%2Bja3M85csBnvg%2F%2BYB7ldtb8hm446wrtk%2FgKy98LAId1W5aDyRssvy1%2BbJZ2bfFkqSJMtcpwXjBgbaUAp4aqYhUYNvq3myKSiHdFfRKDVSZRp%2Bjm8KQm3DF1QnOMv1YVkXtfAFQViYXX%2BToXg1X3UFK9OquujQ8CQFcpQdZj3N9Or9UhrfXK5kkv6pfaHfHvUkjczSRZLyJbdFaIIsM%2FBXdIJZCKPhXUvQswDs66WMsJ0s%2BsLkovTBOD%2FkUHNgqZFlJs6ItN7Ksn%2B8602PFWc0%2FCf1W0v9JvwoOBszNLHZI%2Fn9PuCPaXHil7LrpgenXb11tQiF7m8FLuDwYoSzZCSAugSo7hqkTHi0pltapcgcJfZQDYxs87oPGl6NDI13jE72%2Fwqksp1lu9htUUtBICEgOss8p3J0nm318x36U99aTuhYWDn5tUOllIcFhinKsFT7gKcVfoWT0%2Ff5ELAEpyjCnxDzQbnNIQFusTxttWCHSbIUXXqVjZ%2FtybtNjSSfDLkFI%2Bf%2BP%2BPeIC34NSFvlanZiDp01cWwnfVsuxNyQMcC2SW2D%2BryPlwwbh90LKXwlh6S5f3%2F15MwqKSSwAY6pgHEhO20cqqMghfO8j6refsrXB39a7MfFPEZZ9M8emN9MWhxR2X6C7b9my%2BsfnvKRP%2Bovh%2FVw2Pbv9Eg6x18UHflHw%2BMWaThR0Sl9%2Bcj9QNE%2BCQX4AbbLOmU9OO4MsSuGJb8NriEn53vlaA3%2BKRcmK9wCCN1ZnMoYnvGgXsm0BDorzuRItKaZ8AKp4UlYgGeVQUN%2FH5MsOyG7zUXxOWFtzj6kSz%2FtsxD&X-Amz-Signature=9ee6d01355da4927937c6ed80794f42036ac86056d9aac10f854a887a743de23&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZL7VV5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH8TwvSTa0TimHbqqJi4rRqicfjbS%2FwGmZJjUZiR5ZP%2FAiBNUqe5IWzLGYl86OPq%2BH1E3O9aBwHQOksUfmA7DXyjLiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq4C1WJcDqVM4LrzSKtwDC0HS2y%2BKTJyWJHDLNO9zuCBqk6wy4CnhrI7WBVCMGJk8SCpFoQ2%2Bja3M85csBnvg%2F%2BYB7ldtb8hm446wrtk%2FgKy98LAId1W5aDyRssvy1%2BbJZ2bfFkqSJMtcpwXjBgbaUAp4aqYhUYNvq3myKSiHdFfRKDVSZRp%2Bjm8KQm3DF1QnOMv1YVkXtfAFQViYXX%2BToXg1X3UFK9OquujQ8CQFcpQdZj3N9Or9UhrfXK5kkv6pfaHfHvUkjczSRZLyJbdFaIIsM%2FBXdIJZCKPhXUvQswDs66WMsJ0s%2BsLkovTBOD%2FkUHNgqZFlJs6ItN7Ksn%2B8602PFWc0%2FCf1W0v9JvwoOBszNLHZI%2Fn9PuCPaXHil7LrpgenXb11tQiF7m8FLuDwYoSzZCSAugSo7hqkTHi0pltapcgcJfZQDYxs87oPGl6NDI13jE72%2Fwqksp1lu9htUUtBICEgOss8p3J0nm318x36U99aTuhYWDn5tUOllIcFhinKsFT7gKcVfoWT0%2Ff5ELAEpyjCnxDzQbnNIQFusTxttWCHSbIUXXqVjZ%2FtybtNjSSfDLkFI%2Bf%2BP%2BPeIC34NSFvlanZiDp01cWwnfVsuxNyQMcC2SW2D%2BryPlwwbh90LKXwlh6S5f3%2F15MwqKSSwAY6pgHEhO20cqqMghfO8j6refsrXB39a7MfFPEZZ9M8emN9MWhxR2X6C7b9my%2BsfnvKRP%2Bovh%2FVw2Pbv9Eg6x18UHflHw%2BMWaThR0Sl9%2Bcj9QNE%2BCQX4AbbLOmU9OO4MsSuGJb8NriEn53vlaA3%2BKRcmK9wCCN1ZnMoYnvGgXsm0BDorzuRItKaZ8AKp4UlYgGeVQUN%2FH5MsOyG7zUXxOWFtzj6kSz%2FtsxD&X-Amz-Signature=9adfff7efba93b92a65a8163a8cbd92727460f9a87c691aebc0de0fa8d9372ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGM6JQ4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC8krD8iuMasfMIvok2oQQqn6ivUzClipCHbbA4txwSuwIhAIJI%2FD%2BFQ4TnR9FvtQyqSiWTFri5T95bsM5fwFA3n6YkKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnbQG%2BfeNYh9G6jj8q3ANeB3pCrgu3VRJ8uEVy6b1I87aVfmmgmjC0kBclQMgjWtiZ79zT9n1W4BYd%2BNrPi03r%2BjZhTqwNJOTrWT%2FU48FV2RYbSkPbefFJeAJghRrIimm3rw70cCMBy7DOHxp7oKzALbtoQIEMgecNNz1ZH%2FKXmW6GnJKhImxyKMVQPK9kvpc7WbYpUVmYW%2FBagBMvkONtX2XiDUQ4LQIqGmSt8V89Frh%2FW6O859cOLGS5Ix8opH2Kmhu7SbVRN7DeUq4VeElzGUK8Cz%2FxO6Vp1qWNDbRAKJb3SDnL0Ee%2FncWMn%2Be49zacefkes0mwPliwlHPOg4KLHzPRfk7GP26TxkUYHxLnlBNH4Wkt47%2FjO3nn%2BB3%2BZ7ury4DfFhyhQXWj%2FUxqM0c%2FXCMP3%2BzG7LaYVGacRjmzMVdjExaU4fooSqynFUj1DF8UykhFcs3FxtREsIlfTZy6dGtPmdwVZxpopMuBMOgrGHVPAww%2Bnvr%2BmGllGc2OuW7bv5q4Cd0LuwzD709xD6xx4Yvc6AeEGm3EPC2nFAvtdZ271%2F%2F6H8%2BybO3O2ysgoCRv81qjOVHlUVLaKySdyjN1WEhJo%2FhYjhlL9ook5Zi%2B8IXxjgVBZOM6%2B3YPLP20yI%2FMw8JhqoC8%2Bjf%2FqDDao5LABjqkAR%2Bx%2BxwYbEZfRuTEI8FrY4zboPdJ2fGk4eDf5srszC52cALpRbhzF2T5Tw8x61dvm60P5TZ7ENu1WddRyZ0pLdF9kWXMGr2SyLt%2FlDDyTQPt1EB7UuRHLVotR4V7nQi6sZyXPvOTzoE4B2YPigm5E3tXdC%2Bt3Gj1J3WVFDrIs1xb4eAUjASVimh%2FOiezdc5lvKtLKqjxxgjIULnpWeqp5NhGmG08&X-Amz-Signature=8b20858e048d52b0e1cc099dd76a87e321c101f9b42cf3438f5848ebd8b9f719&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6ET27L%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHrCDKkiUg4bH%2FJEDIF8phWjTspqfd5XjZOlbtNjHEVkAiEA8nmRTEh2im7udGPMupSLhnmtgW33GxIBPq5pelfXTHQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAxqVekxz%2BtAQy7ISrcAxbCjLAwuLSr67Ei%2BV1Bs7CyG6wYph%2BZSB2qw%2F7iuFlKZw%2BHQpZSC6AhAipxcrRCIBADzZQhsAoQOHrtCZOXJWBP1ovRkPmtRlHrZtt8YsidZd8WMkCDX8ZSNEpKFxIYMYdMk4BKojuBWziIq1xZfP7ETJc0dBwpzw4Tfozrpf3kYxzWIHgcDfwFD4kKL5gNZfTad2X0074tg7r%2BvATl9ql3QPq%2Bet%2Fv9BP9kboWWES9k1STKL95VOJECX8Vhx03JNskovlabGL%2Br1lEPyEvNbvDejIfM4Yt32BjYZmQR9uN6sWOg%2Frz2ZmZNTy6Cn2KDG4nrmLBQa34OUCidgXm2Q5muAHqbbS5br006HBU5cXkhau4ncxNc%2BRGD06xkoLw3csRvPS7UDvpYE83ILmFKQV%2BkTOw4s%2BlnaP2M5DTKR4FsPI5IQIitB9pWQBPGLHws9F7sJILNmAij%2FH7bq7QYNicdpseD5ybd4y895h1%2FVS8GBVOJ%2FBWDOeug0M%2BihseBhF8suLoAX%2BX8qEbCoAbSTnVJqOBkDNfN676gSHSU7zxmSwkp6jkwt%2FnCsH957sGdMwboV2U4fhjW6JFu%2FrB%2F2wY%2BktH9XH6hf63N0tj6VNWHgqSfynBwLqAVLnKMJfaksAGOqUBMfn1SaXH8aoZfgTHaliL27SaW%2FiA2fuSYC3pwLz6MU4QegodSWGVIq0jY0KIX0XgGYMXXi5GisxCiaisWMlPl3FhE0dMyF0RIifsGL%2Blm9I1YWr60L1PT9vAZkXfGiWlm75h1u8cLBrblRQlrzoXNxb7z%2F8t08VuhgD%2F3c0XhoHyWRrQdzf%2Fi5FBnLmuY1wC2mhyJGdqeBdE5g3KBP3UchltRzii&X-Amz-Signature=8e88a0436d909ac2216450232e187d5879b521bd2c9d4433d62c4a1105a0b3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZL7VV5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH8TwvSTa0TimHbqqJi4rRqicfjbS%2FwGmZJjUZiR5ZP%2FAiBNUqe5IWzLGYl86OPq%2BH1E3O9aBwHQOksUfmA7DXyjLiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq4C1WJcDqVM4LrzSKtwDC0HS2y%2BKTJyWJHDLNO9zuCBqk6wy4CnhrI7WBVCMGJk8SCpFoQ2%2Bja3M85csBnvg%2F%2BYB7ldtb8hm446wrtk%2FgKy98LAId1W5aDyRssvy1%2BbJZ2bfFkqSJMtcpwXjBgbaUAp4aqYhUYNvq3myKSiHdFfRKDVSZRp%2Bjm8KQm3DF1QnOMv1YVkXtfAFQViYXX%2BToXg1X3UFK9OquujQ8CQFcpQdZj3N9Or9UhrfXK5kkv6pfaHfHvUkjczSRZLyJbdFaIIsM%2FBXdIJZCKPhXUvQswDs66WMsJ0s%2BsLkovTBOD%2FkUHNgqZFlJs6ItN7Ksn%2B8602PFWc0%2FCf1W0v9JvwoOBszNLHZI%2Fn9PuCPaXHil7LrpgenXb11tQiF7m8FLuDwYoSzZCSAugSo7hqkTHi0pltapcgcJfZQDYxs87oPGl6NDI13jE72%2Fwqksp1lu9htUUtBICEgOss8p3J0nm318x36U99aTuhYWDn5tUOllIcFhinKsFT7gKcVfoWT0%2Ff5ELAEpyjCnxDzQbnNIQFusTxttWCHSbIUXXqVjZ%2FtybtNjSSfDLkFI%2Bf%2BP%2BPeIC34NSFvlanZiDp01cWwnfVsuxNyQMcC2SW2D%2BryPlwwbh90LKXwlh6S5f3%2F15MwqKSSwAY6pgHEhO20cqqMghfO8j6refsrXB39a7MfFPEZZ9M8emN9MWhxR2X6C7b9my%2BsfnvKRP%2Bovh%2FVw2Pbv9Eg6x18UHflHw%2BMWaThR0Sl9%2Bcj9QNE%2BCQX4AbbLOmU9OO4MsSuGJb8NriEn53vlaA3%2BKRcmK9wCCN1ZnMoYnvGgXsm0BDorzuRItKaZ8AKp4UlYgGeVQUN%2FH5MsOyG7zUXxOWFtzj6kSz%2FtsxD&X-Amz-Signature=15e1b9bc6b17625f6c0f6457137c08c418fc5fbd15161052eebda3adf7722d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
