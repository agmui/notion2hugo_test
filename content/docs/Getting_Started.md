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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJOAA6E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEoEIqtfqQnvXynXFvBK9gBQLoRZhudbIj6xYhxzjO5%2BAiEA7OxNrtOIhja5uSzxxoMbhV2ZHZpUrhaEclnrCk6LeTwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOfnYBv2bKbK6c3S0yrcA1SNoPoofpLpUvKdy7u1p4jlHwDD6XpWfvviXDyxwVLnjsxRp4GStkwuH4ZuNefUr1ev2ukrgHJHzttNCeq5%2BGcMdZgDaNxpfOplz%2B8WTse3URcPO48uAcpYSE%2FOGxvT9claE4SMXk1L46KVO3LNyKfAiRkcH5pTF1wOijyfcfnoUnUODY1HuZ0bGpmZqrfeiH8jiG6vLN46jgfUvocskEDPj66uIDhVm8DjGgbNNRIrycDakGFlLDbTmCldIHQQPfL5Av7QUnb29zf73JsNMhUO6Qv07HauINYliAsIpWEGOgJYiZRi0IUDD3ov3bnTAeVyDDyOEFUgz80CHokX0SA9o%2FB0V9FzLc8j%2FEQhsU6jzIwUBQJ6mZ1OyId2aXSLlrwX%2F%2FeZhAGrMqTBBD8PS2%2BA3o1dlX2UEkWBjIKxnI4ohjql756RCYzNLGYU7ATm923SW42FMs7jhC6XxHfiGJ3Ldj8ef4Xo%2FK9bq8XhE1EmAlb9F9ku9sB%2F6N67xHwNlV20%2B6PsbpMOJm12EPSD2HT4EQwhzbCDT4StFCXOdeV1QHVFD9Iii1s9BZu5YW%2FvP3fcD1pQSPRmOOfkcqFZXf7M%2BSpnepRlJVfJnVUZTiejL4x8csVXodvM4dW7MNCQ9b0GOqUB5L31Om1NVsKjaPq4NN8NDxEoWA3RDByye%2F0yVxjbPZcxKrmzhRXTNmmGeMz6nmY%2FEn9OPwVGw4sWcsdC1qHZmIcVFHg7tczB32DCmxkc8EgXzWxOxs1x8qjBBvGxy7KDWRKfc7C8Mg0bw%2FAj2GDjrIXqkmRk8gv0%2BDNvoY0TXDwupb%2FxgLnOnRWKEHjpAR5imW3Mq2D99t0EGZ3tuKxk4mV79L3g&X-Amz-Signature=f69b0abe8c6f35c4f720aea148a14ac16ceb11e5a5dd3d3fb47269b96f734154&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJOAA6E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEoEIqtfqQnvXynXFvBK9gBQLoRZhudbIj6xYhxzjO5%2BAiEA7OxNrtOIhja5uSzxxoMbhV2ZHZpUrhaEclnrCk6LeTwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOfnYBv2bKbK6c3S0yrcA1SNoPoofpLpUvKdy7u1p4jlHwDD6XpWfvviXDyxwVLnjsxRp4GStkwuH4ZuNefUr1ev2ukrgHJHzttNCeq5%2BGcMdZgDaNxpfOplz%2B8WTse3URcPO48uAcpYSE%2FOGxvT9claE4SMXk1L46KVO3LNyKfAiRkcH5pTF1wOijyfcfnoUnUODY1HuZ0bGpmZqrfeiH8jiG6vLN46jgfUvocskEDPj66uIDhVm8DjGgbNNRIrycDakGFlLDbTmCldIHQQPfL5Av7QUnb29zf73JsNMhUO6Qv07HauINYliAsIpWEGOgJYiZRi0IUDD3ov3bnTAeVyDDyOEFUgz80CHokX0SA9o%2FB0V9FzLc8j%2FEQhsU6jzIwUBQJ6mZ1OyId2aXSLlrwX%2F%2FeZhAGrMqTBBD8PS2%2BA3o1dlX2UEkWBjIKxnI4ohjql756RCYzNLGYU7ATm923SW42FMs7jhC6XxHfiGJ3Ldj8ef4Xo%2FK9bq8XhE1EmAlb9F9ku9sB%2F6N67xHwNlV20%2B6PsbpMOJm12EPSD2HT4EQwhzbCDT4StFCXOdeV1QHVFD9Iii1s9BZu5YW%2FvP3fcD1pQSPRmOOfkcqFZXf7M%2BSpnepRlJVfJnVUZTiejL4x8csVXodvM4dW7MNCQ9b0GOqUB5L31Om1NVsKjaPq4NN8NDxEoWA3RDByye%2F0yVxjbPZcxKrmzhRXTNmmGeMz6nmY%2FEn9OPwVGw4sWcsdC1qHZmIcVFHg7tczB32DCmxkc8EgXzWxOxs1x8qjBBvGxy7KDWRKfc7C8Mg0bw%2FAj2GDjrIXqkmRk8gv0%2BDNvoY0TXDwupb%2FxgLnOnRWKEHjpAR5imW3Mq2D99t0EGZ3tuKxk4mV79L3g&X-Amz-Signature=4e575156ad6750d726148613fb6f258353734ffdfd64d93887172b18bcca6ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJ3ZSNL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBsb7%2FoYKApSlOc0mincRStPRuAtzQGaw8RdxO0CgLYWAiAQl3kzVgbSpLCLjY6B2w38hTyktoLC%2BslL9HuYLhSJoCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMVGJS%2F2QGpjp0aqxPKtwDpblPAr4%2FznFYCaXaMZLN6gxTJ5FKfqIDZQzlUti8CfBpjr26jAIQN4RLENGPL%2FSUuzHBikYXMdf8ZMUEsorHOVNUDbHmQVpZ80TsT0gPrpK%2B%2FbBEsvfOqRMIlxXsm1eJfXqdskahWB35gre4fhdHFidzqCOa0rmT69iKUg%2FSyoWekrBmGayc4v4OmqlQLPK7TzFR0fU0x75p3Jh8aq07zKG6UauCMSEG58IpeqNWZK650oCd1zOmNZQhgk55Qyla%2Bkc8prXyMweyUm4fRAr7DmH37TQ3fdQASlySbnqEtTh%2FKBr4ZpKpazdjiQW1qKJo734aLRabX2IFmk7VugRsiaZKPW2G0PWeENM777kb6gVKIiwk51b3fkKdpVYQBJBA7%2Fsi%2BRCAgtAbyWduoS9%2BVKVBLwijI%2FdlARfYUuc4CY4kMpmtPeHPQ2xYcMvEyDcOyEgng97K7Ww9kZQ6h9vqvS3l7ddeTles3W5MB58qcz0E%2BgkC11xZBe9QeAQX5bZMEs6fx3NtVufuiKkHEBX0oH7wL6RolTPsasHKl7faRB45pBlL8tj%2FXA0GAIvt7rTXhpMtpRuPQZ4ZpaQ1%2FMIAtXt1%2BkL6%2BrX7YYPeaRLVNjGpMbODj%2FWEUh755Bkw75D1vQY6pgHOAyoF1WBHa9qRxm5i9hMvOKzdEWELlyHNYJJT0M1yKklhGsRzh1nyqGTK5SBIbZlYVMu5CqGcMTUBRNb7IToRFX6GcHHc5JqPQs8D34OOKRZudVBO%2BCLFsmnwx91s32CptPByr27nhiKLmsOJUY37aJiTvdtu%2B1i42SX6N3oQuyv2XcaEwnfJyg5jAL8IQVRPBTYn3CJzsRjaTKwkYGgMSeACI8eD&X-Amz-Signature=85b3a1ab2bf0235663b57bd58c8b228412cce8601f1fa35c84fdd88085695a31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCTV4MA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB1TJBtcdg81AwuGHfHm0HEL4%2B%2F0rXT10m5zt%2BWCA5bsAiEAl2SCXG4%2Bm%2FeYXZz5grm1qrFVQ%2FmZd7lwO9TYJh7x%2BZgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHd3EMJaYwFYSSDamSrcA3Y4W5vLgyvAJhy8HmOyPWyXDLIzYfZcDBwIOnvfBDDGEDRfyKfvJhCLIvDIFscMz%2BxVvv5O9JL9U8nnZ4uw7%2BxXruUser9RoBZYrh3x4oAcOKjhRjONcXtM1Efn%2Fz5twnFKB%2Bu17HxSeH9KD382cRbt6H7ncG23hxLh90Abuewo2LXQM%2F0IF4sPeZOpYtPV4Kq3Seo0X7fw%2F5%2Bs7cxv6rDDmrxs1PJxthrUoXHYWRqEEERc%2F9OAIE6uwhUuTB9NMXkQIKavNdfEZL16YA6DX9MtrUOs99w3AjyGAQ2nPCLBhjXlugE%2BETN0lhspVVjWnp%2F4FgLy3J1c1N5LoydyCowb45CEgR0htzb9CGYmvO2IVF72GtD%2FooCWheW5mfmP9uY9fyjoDi7qFcxOjWRpJONhetmpvY7ZvRbOtU72tgUXFBsQbz8ozkV1Cs8TlQC9EyDPZuF%2FNefnIUApI%2FDLOYf2104ENsShZMEQnvsiXmcCzZh7bvuwqIOCo44Q1KIUbG48WfJ7gcnbvtqmUpb%2F7ina9%2FPC5gG%2F1rogsmlX05BmzAa7aOAZG8fj7R8cQWptbmbilCko6FkjgaOg5wRMDGJ3LC6620fjHpZcaT9h86zH5WpM7PkrF25seY7mMNKP9b0GOqUBImwWXshOeOtIBX8LPrtOPzbiGYoG882zRqobEPk02DqHhXitFtJYucNRwBfyti4TxM8A090eCNemGZds6ha7hjPtvoLOQSkd9RJkMB0tutjZRGkbR73ORAq%2B5oE7oJh309DxzmKbdKwyi387BopR5hXZ3wNK3LXPfCr54MPumxdJDfhAhGiCx8zc4WD6ndv7nnKAVCQccF1WfFPpQuYNA8DxpEdK&X-Amz-Signature=d13c17bd432136d81bd5d067c00020491f6839bec32119ba79991782f1bee09b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJOAA6E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEoEIqtfqQnvXynXFvBK9gBQLoRZhudbIj6xYhxzjO5%2BAiEA7OxNrtOIhja5uSzxxoMbhV2ZHZpUrhaEclnrCk6LeTwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOfnYBv2bKbK6c3S0yrcA1SNoPoofpLpUvKdy7u1p4jlHwDD6XpWfvviXDyxwVLnjsxRp4GStkwuH4ZuNefUr1ev2ukrgHJHzttNCeq5%2BGcMdZgDaNxpfOplz%2B8WTse3URcPO48uAcpYSE%2FOGxvT9claE4SMXk1L46KVO3LNyKfAiRkcH5pTF1wOijyfcfnoUnUODY1HuZ0bGpmZqrfeiH8jiG6vLN46jgfUvocskEDPj66uIDhVm8DjGgbNNRIrycDakGFlLDbTmCldIHQQPfL5Av7QUnb29zf73JsNMhUO6Qv07HauINYliAsIpWEGOgJYiZRi0IUDD3ov3bnTAeVyDDyOEFUgz80CHokX0SA9o%2FB0V9FzLc8j%2FEQhsU6jzIwUBQJ6mZ1OyId2aXSLlrwX%2F%2FeZhAGrMqTBBD8PS2%2BA3o1dlX2UEkWBjIKxnI4ohjql756RCYzNLGYU7ATm923SW42FMs7jhC6XxHfiGJ3Ldj8ef4Xo%2FK9bq8XhE1EmAlb9F9ku9sB%2F6N67xHwNlV20%2B6PsbpMOJm12EPSD2HT4EQwhzbCDT4StFCXOdeV1QHVFD9Iii1s9BZu5YW%2FvP3fcD1pQSPRmOOfkcqFZXf7M%2BSpnepRlJVfJnVUZTiejL4x8csVXodvM4dW7MNCQ9b0GOqUB5L31Om1NVsKjaPq4NN8NDxEoWA3RDByye%2F0yVxjbPZcxKrmzhRXTNmmGeMz6nmY%2FEn9OPwVGw4sWcsdC1qHZmIcVFHg7tczB32DCmxkc8EgXzWxOxs1x8qjBBvGxy7KDWRKfc7C8Mg0bw%2FAj2GDjrIXqkmRk8gv0%2BDNvoY0TXDwupb%2FxgLnOnRWKEHjpAR5imW3Mq2D99t0EGZ3tuKxk4mV79L3g&X-Amz-Signature=16a2966edbed5b270be856d1a66d059acc241c7ffd99a71ddccbe4d7cb5ed1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
