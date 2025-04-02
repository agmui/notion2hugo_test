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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMBHWAM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCt5wLE4xs%2FukvrFVwpkhPTlNXuzljGucrBra%2B1GcI%2BFQIhAL19ge9LUIj71W297o3AJYNIBIpxNRJGnWYkQ7gQ%2F7OiKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEuwwoDfx9Jn3V6owq3ANjq0eJQkSY7Cby%2BR41zCJt2Ws6l%2FSWVAMAQy2sFjMsIPzE2TMCPzzJnjLzG6KzTIAU7gaHBWTFeiLjVquvGcfNZkUywU2ZKgMXXUiRN70nqao7q9bENaG2bVGg1VuA61smV%2FGLz7WZ2cj6PIcELvYqLaavZApYC0lzrhRRpktnk8h96ZabskVxDr4y6xcL%2FDgMdnTx1WPAf278vUqlVsI4teWJSYY0vuX%2BkvfQpuTsw91NzaAJlj%2Fus5tW7Ed%2B5bSSPWWoVMDJ%2BsLdBB0%2Br71dy0CI3bJYyCjqTfDsdKaCKN3hi4QomAIKoYKWcN0dScO1m8fkC6uNw308kE2HyYVObd9LmIm20sDHv6uNK5pM9MTprOgZYAoNIuoqExQrM65HpMOVIvUdpqtjeQQdC8GAO06a8sqAteOdjJe3%2F4%2FICEjW5uBgGBUMni9ZwCE59iRMs%2BycHCowoJt8KjsTurMaDvpZynAoPUCy2ZAkADmSS%2BzPET8A5FJw07F2kNrygvXZbDoO3izfKo4PFZq7VI3j77VWSg9SsewbWGIXcztpLlbY%2BUREy133kji4MI42Yu%2FKt3cTUY4sVf271Uo8gXZ9LKpYuTn19J7X0XEp4zyxs0I1zAaJtDFIh3ffuDCK9La%2FBjqkAVnzGa1AlMZx%2BaC1NKBkP8Jvk%2FShbnn0y%2BHWciKraD%2BTuZe2q9m0%2F%2FZ0LBldWX9rsIePBWIX6PhUvAUDdY2GxxH1Q9%2Fqetr9rXq%2F6h8WjGyxl92NB88pZeodvVCriw4DcIYGUq1Ujk2Cv9wxQeZKaV36RGSbRLUS1F66LT3Gdsvd92m3HksgUdZKXApRbfe4Fr77vptdmTe2MLXf4TjzUm16bkRA&X-Amz-Signature=445a7316f8a824844759d06a651af0fbbe7541fd0d5387947a532d6da022919d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMBHWAM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCt5wLE4xs%2FukvrFVwpkhPTlNXuzljGucrBra%2B1GcI%2BFQIhAL19ge9LUIj71W297o3AJYNIBIpxNRJGnWYkQ7gQ%2F7OiKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEuwwoDfx9Jn3V6owq3ANjq0eJQkSY7Cby%2BR41zCJt2Ws6l%2FSWVAMAQy2sFjMsIPzE2TMCPzzJnjLzG6KzTIAU7gaHBWTFeiLjVquvGcfNZkUywU2ZKgMXXUiRN70nqao7q9bENaG2bVGg1VuA61smV%2FGLz7WZ2cj6PIcELvYqLaavZApYC0lzrhRRpktnk8h96ZabskVxDr4y6xcL%2FDgMdnTx1WPAf278vUqlVsI4teWJSYY0vuX%2BkvfQpuTsw91NzaAJlj%2Fus5tW7Ed%2B5bSSPWWoVMDJ%2BsLdBB0%2Br71dy0CI3bJYyCjqTfDsdKaCKN3hi4QomAIKoYKWcN0dScO1m8fkC6uNw308kE2HyYVObd9LmIm20sDHv6uNK5pM9MTprOgZYAoNIuoqExQrM65HpMOVIvUdpqtjeQQdC8GAO06a8sqAteOdjJe3%2F4%2FICEjW5uBgGBUMni9ZwCE59iRMs%2BycHCowoJt8KjsTurMaDvpZynAoPUCy2ZAkADmSS%2BzPET8A5FJw07F2kNrygvXZbDoO3izfKo4PFZq7VI3j77VWSg9SsewbWGIXcztpLlbY%2BUREy133kji4MI42Yu%2FKt3cTUY4sVf271Uo8gXZ9LKpYuTn19J7X0XEp4zyxs0I1zAaJtDFIh3ffuDCK9La%2FBjqkAVnzGa1AlMZx%2BaC1NKBkP8Jvk%2FShbnn0y%2BHWciKraD%2BTuZe2q9m0%2F%2FZ0LBldWX9rsIePBWIX6PhUvAUDdY2GxxH1Q9%2Fqetr9rXq%2F6h8WjGyxl92NB88pZeodvVCriw4DcIYGUq1Ujk2Cv9wxQeZKaV36RGSbRLUS1F66LT3Gdsvd92m3HksgUdZKXApRbfe4Fr77vptdmTe2MLXf4TjzUm16bkRA&X-Amz-Signature=bf8e4407ae346dde26379158802e71d7ae435458fe5d0904a3619719e30ba12e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TRBVGF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEiKhogWrhiKO8TVarYrvWeqkt8QOUMJHTODBTL2d7fXAiEAkprMgF2y1eZ%2FK2C3ajvKXNHkG7FpM52EzaCsrLcxJ%2BgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9AMV%2FWyQFQAn15PSrcA%2F7rb%2B5ii27cZHd%2FaZLbssO6ytG7HCCFybsa2nJcgj3GUCq2voapcxA4CBFqRqsUp%2B3XfGMht9ylVi1QDA%2BE2rRb%2BszSwj8SNVQJGqILdGgTbjmRiBp7Iss9ry8Cw1SwvrEjSR%2Fb5ostzsfthuTlv1E7CPDKZjwmM%2B7lLYqJUeSjQkIbSRNVBAuUApmd%2FVIc9j3Rg%2BZODCyH8ooWWbWuEtJxvB2WnEPM2hjibAzS7sd10EGNY%2B%2FZsff1EIPJWU2PsdamWnO3R2y5GVUcW3lpGUebT2GPLlfcjIuflAeKISCRbV82AQpmcW5Bw9KurvbnAneKLbG7mMRs8Q9CWM8QHLXZgTdBm4uoDKs7qkHCmBoW5VR7U79Dus3o3SOKWhPB5Aww%2BKQNlQnS4MDtY1%2B7cXviBsvSlMyOUVU5rafeLFDI91ZPOSqO1%2BTMl5AwDs8RPQSLgHxpbiotTLxgDya%2F8uWzY5DMsKzNT2SyQzLUrqD0s0BCasw8Z%2Bqf922dBDgnasNKG3oqAN07In%2F4kXQ4AxnXm3cYeDMnldI%2BCLF9wEJbfv9aTMLH2bWzwNss8fX72TZg0mfDYoxrQ%2BTkIY7qo69KT85TNhS7yBlRtEV4Uia4HWVxR7xnrux7YqUNMNPytr8GOqUBMh3XPnlVb9N%2FaSVbH4zeIi4bNw6lBJ0UDjYLSgzpTf39sc7fwzY3g7KkZQj31jvhR8UUzUlZqTVDVx6%2B86%2BLm0GuBTGYKhKGEtTVvyeNjOwM8e65k43SPDCorrxlmXD0ahKcsXA2LLvvxn4iYX%2Bp2O2ttDUVIVBjNcINJAC0YeCaAus2kT7jb8djJL9eRssjgd240ubEOGebwm19Ng7F%2BbAOtHag&X-Amz-Signature=ec695224d925adc8864a6d258d6aeb1a7a8f8c26d49be6f0ada0c66f57aa5616&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUHL7WJR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCIST7Rg775lHzSn5lbntD7IbpG%2FFZEdLVKprYGgdhSBAIhAMwdmgINC%2FAudu%2FHv%2Fp8%2BxhET47PmHgS865S%2FK%2BQsEImKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFoqUb4xXOq5rT6jAq3ANuGvgLoQaS5ia39Uyr9%2B3zWrlP2grFLJCNKKSrkaWSfl90FsMZfWOwPH9J5uxSH29jusYP9GL9%2FB03RGjSzNnpeNdn3lxs0OMuHwGC1%2BJPsiPlvQvlbxgVbQgRV944qjBx%2FUaLtTIXp3YZqIqdc6DLLWK2gApBe9tkr%2B3ajRrIdEBZn3X3gCUI4e%2BX6Q%2FmoUyh4IGSXdemspSim040sZKDszHwAtwV8wpKP1XXJDEzbzU0zcqR9zx4xt2O2UOu2F%2BB83Yqx7PQDl8CI0jdAJqZYXI0myhS0M%2BO933FmNEeOSFZJPWJKBLy1Q39nM5%2FWOzIo%2FT15gyqgfDxnOIrIKxoBzXcZ0X0bKXNv3PiS%2F12p2xkTL1Xcts%2BGRf5IWq%2BKComCV%2BZrX2xtqs8ukX2pumoipD8XMyqi9Zers171kwPv899kUmqthQuZvvYSfvARLHk%2BpZkzVt2OIGjFM6R6Gfs1%2FbBKpe5fAIQ3ilDLR%2BhHlloHul3V3tweHz2ocKsYxmnIDn1qW1wgg7aqe6hHPjlWoCTqQCuhMUq%2BG4lhlbfPCRUS8a0SEhHGDSFyymMxIacGctsg2nTeSK%2BEBKyZgR2FfeqSOhjZc4W%2BpiFLrZro4Si1ltgnGGhDMMq8DCG87a%2FBjqkAc3TN29pp54WCFUpij9xpZEt%2BkhQRDrDIYlsk0hSHGeUXN7OGJRY0WOwM9L%2FKdsA2Im%2BJA3vtihiFAI6%2B4LkFaondNziuh1LVgrE3%2FYULoYGeUIWl9Frf88nG2yGyTsfdPqqLfQzAgdG95Tb3Lobe99I3xkBttdlYb7MrmCD0wKAXDYbxl9JGlXt%2FlqAu8NjVz0snvAWdqvt0Tita1z4cirQm%2BXe&X-Amz-Signature=eb177bf0807825813043a44ab78a9ba6ce31e6886a01def0a6447d54f9f6277f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMBHWAM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCt5wLE4xs%2FukvrFVwpkhPTlNXuzljGucrBra%2B1GcI%2BFQIhAL19ge9LUIj71W297o3AJYNIBIpxNRJGnWYkQ7gQ%2F7OiKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEuwwoDfx9Jn3V6owq3ANjq0eJQkSY7Cby%2BR41zCJt2Ws6l%2FSWVAMAQy2sFjMsIPzE2TMCPzzJnjLzG6KzTIAU7gaHBWTFeiLjVquvGcfNZkUywU2ZKgMXXUiRN70nqao7q9bENaG2bVGg1VuA61smV%2FGLz7WZ2cj6PIcELvYqLaavZApYC0lzrhRRpktnk8h96ZabskVxDr4y6xcL%2FDgMdnTx1WPAf278vUqlVsI4teWJSYY0vuX%2BkvfQpuTsw91NzaAJlj%2Fus5tW7Ed%2B5bSSPWWoVMDJ%2BsLdBB0%2Br71dy0CI3bJYyCjqTfDsdKaCKN3hi4QomAIKoYKWcN0dScO1m8fkC6uNw308kE2HyYVObd9LmIm20sDHv6uNK5pM9MTprOgZYAoNIuoqExQrM65HpMOVIvUdpqtjeQQdC8GAO06a8sqAteOdjJe3%2F4%2FICEjW5uBgGBUMni9ZwCE59iRMs%2BycHCowoJt8KjsTurMaDvpZynAoPUCy2ZAkADmSS%2BzPET8A5FJw07F2kNrygvXZbDoO3izfKo4PFZq7VI3j77VWSg9SsewbWGIXcztpLlbY%2BUREy133kji4MI42Yu%2FKt3cTUY4sVf271Uo8gXZ9LKpYuTn19J7X0XEp4zyxs0I1zAaJtDFIh3ffuDCK9La%2FBjqkAVnzGa1AlMZx%2BaC1NKBkP8Jvk%2FShbnn0y%2BHWciKraD%2BTuZe2q9m0%2F%2FZ0LBldWX9rsIePBWIX6PhUvAUDdY2GxxH1Q9%2Fqetr9rXq%2F6h8WjGyxl92NB88pZeodvVCriw4DcIYGUq1Ujk2Cv9wxQeZKaV36RGSbRLUS1F66LT3Gdsvd92m3HksgUdZKXApRbfe4Fr77vptdmTe2MLXf4TjzUm16bkRA&X-Amz-Signature=ebde9e0248936894d1f42ec02887f6b7a4c1008f2988cdb8b373aa2901f23de1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
