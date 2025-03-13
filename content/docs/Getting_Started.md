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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPNQP3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLqHdLH%2BSh8dXSUDbFfcSUC117dmoytpSdFtmVkibJmAIgOr970yTG6JUfmzHzlTHhKS6n2CwEw4IbfpD3JwedYXwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiwW4sqKUPrs35qCircA%2B7AonvLI4jKmlxT8Ja3XRGf0evPCOEHSGnIkxtWTRX5yrYI8snuM6BMLKIbheZurOlRr0GtRxBVmZJDji%2B5%2F9c2fVjvDw%2Bw3PtCU0OxnDC%2B47ZOh6e4YTENNonnk%2F8pQjdBcwQmT845PNmTo8UkiQUQYLeuYq2HHPmhvFXljG%2BMKV4pzGRh32H2bBz3StKzRH7u2%2Bg%2FmqG7clO6s6aeAtRDDxuJxDDb1NV8X8BJpOct8KTk5PZu5s1e4e8xRchy04GCHY0nFLixLD0W4WIPbSpskHntWrF8u1qvMs4Bt8pU%2Figds4ezSf1V0n8ytbFzaWCTBOm07P5mcwWJTh%2FQEATWgMeGFe2e59NVOM8WDZrL%2FjhWd6qKA70Z1HKHRNbce3jHFl04FZYh%2F5SsrQXsVjGX8o7%2FMsTIEMQHUQDbm%2B%2BY6AIvtsso98wBbEaqz4YuuK%2F2xOKdjhqCTMi6gUm2qpKQPMd%2F2cRO2Iqf%2F7gi1pQJa1VBrdredkmlTmZZ5y47Rx%2Foc4WyuDMTTfL61j8jwKKl0xb8s3t%2FOWHXXW6EJGfotbc3tfGHzawSgoPm53L%2B9%2FlgPjeRWvxmLDzdQe7UszEny%2BSErY6KxzTpCTwYz2n7Wh1k88Vf7fymUmk0MNWXzL4GOqUBsZyacBSCtFexfXTMJQofmsVjOzkjfMVp8tZZDiOohX4viEY%2BVOJQCQNU6k1eBjorpfnyyqDQkfMVT%2BpimATcFP5CQM63Bf44MDJFQSIzbDRyeGHj59gf5P6URtgItpRTDHlIFm%2Fb%2ByhdRPqz%2BnEVXTiMjLCmWUjB1slNY92iseJM63PrBdeT1WGrCOm%2FQbaC5VhxClwtd1xm4s%2Fsv3V5nQWd0GRL&X-Amz-Signature=7cafa843d73b231c2818013e4496c7bce05e8424a9aa86d524da55d123edb404&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPNQP3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLqHdLH%2BSh8dXSUDbFfcSUC117dmoytpSdFtmVkibJmAIgOr970yTG6JUfmzHzlTHhKS6n2CwEw4IbfpD3JwedYXwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiwW4sqKUPrs35qCircA%2B7AonvLI4jKmlxT8Ja3XRGf0evPCOEHSGnIkxtWTRX5yrYI8snuM6BMLKIbheZurOlRr0GtRxBVmZJDji%2B5%2F9c2fVjvDw%2Bw3PtCU0OxnDC%2B47ZOh6e4YTENNonnk%2F8pQjdBcwQmT845PNmTo8UkiQUQYLeuYq2HHPmhvFXljG%2BMKV4pzGRh32H2bBz3StKzRH7u2%2Bg%2FmqG7clO6s6aeAtRDDxuJxDDb1NV8X8BJpOct8KTk5PZu5s1e4e8xRchy04GCHY0nFLixLD0W4WIPbSpskHntWrF8u1qvMs4Bt8pU%2Figds4ezSf1V0n8ytbFzaWCTBOm07P5mcwWJTh%2FQEATWgMeGFe2e59NVOM8WDZrL%2FjhWd6qKA70Z1HKHRNbce3jHFl04FZYh%2F5SsrQXsVjGX8o7%2FMsTIEMQHUQDbm%2B%2BY6AIvtsso98wBbEaqz4YuuK%2F2xOKdjhqCTMi6gUm2qpKQPMd%2F2cRO2Iqf%2F7gi1pQJa1VBrdredkmlTmZZ5y47Rx%2Foc4WyuDMTTfL61j8jwKKl0xb8s3t%2FOWHXXW6EJGfotbc3tfGHzawSgoPm53L%2B9%2FlgPjeRWvxmLDzdQe7UszEny%2BSErY6KxzTpCTwYz2n7Wh1k88Vf7fymUmk0MNWXzL4GOqUBsZyacBSCtFexfXTMJQofmsVjOzkjfMVp8tZZDiOohX4viEY%2BVOJQCQNU6k1eBjorpfnyyqDQkfMVT%2BpimATcFP5CQM63Bf44MDJFQSIzbDRyeGHj59gf5P6URtgItpRTDHlIFm%2Fb%2ByhdRPqz%2BnEVXTiMjLCmWUjB1slNY92iseJM63PrBdeT1WGrCOm%2FQbaC5VhxClwtd1xm4s%2Fsv3V5nQWd0GRL&X-Amz-Signature=155f7de7eeddcf09b7032bf5ee64be5a5dac3acc5a64f30c123ea02c81bf7bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHODNJGX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOtUxnDPpq2C71JGNbcGREQdEWHjYA%2B%2Fo%2BhwMko%2FBCsgIgUYaMxmhrr9m8pNoeuQ7mA%2BUSwhE5%2B41Ir3ftzWm1EzoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL08W3E4cAFmWPx0sircAx%2F3EyykF%2BoRhLn7QF85zmHbSnz1zUgIeNc5nLt37vgkanl4LHpzj6fhRwvILRi%2FBHL%2BQwwL32V4EOcIWTxaOEgKd4XX1JbswY%2B5LV6nXw1ivrXWBBeaEiD4uCSCEol455M9wQABrvnZtfVWVQBL0%2BsNafRiBqOxcEP7wwlcTP%2Fd8wIAXPwJBn3NTQIVtjbCsDh5yWPnIDlKvQLMy3WSx8L9nGEbGlXbBvY7INrwAK3rgFTHUsUuDV4lXj%2FqXPJSj5G3ZgYoob0P%2BF%2FUR8VMxHVbOPmc2iK9rZInz5IATFuW5d3MMabdV8ndYBEflao0SMAxMhjKWU2n7Git0dzl0ja8zWLpo8xz4SoRjm5dmSfjSFaxnvL7ep%2FZ2Cb7Pz2ouFe6nTQ1NgM%2Ff9d%2B8G5jFfiIo35Phj0f7Kzm0nPIiynTQtMT52XhPtaS4IibfPVckS1faYcmF89x71CA7DfLGFO73SJ25MzELXSImdJ5qxWRIQaofMwOq%2Bg7Bo9b%2B9cI3tk2e%2BKUQZv5xisFYAO0aAtML83mz0eshV47f4QXEHTHSriLbTwcG6r56MWWFJe5eiF5VX4%2BvmfgjHuOqdN5IRTVn2lI2m%2FrDifDtBh4MD%2BE1gSEeH46CoifGmCsMO6WzL4GOqUBJ%2FAh4GYYuDhpeYVed2H2JHbQ%2FWb21QjNHiUE9a3BknesnmWY3Y4Sf68o2bMjMipnAcbFXMMWqQvUU7B71fIwC43hUCgIJJs1%2BLCufLrnDGdeEdOEEn14TIr8XhL23m2wg2JrtUcNwaJh0LOusp8JpZFpPlV%2FLe2kRR%2FIkNlTip9YV8TTJyzsppk%2BPyVG4EcovbTcCfc4qCai7aYno3RmWIXa9qtw&X-Amz-Signature=4d76842f92b52c1453548c0ff89bc445d550add8289b676cb566eccc6c82379a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N34V7QY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2Bd5Rn5BjO0PT305ozVLDLac1l3P5JDJhuvZuBtfTa0AiBtWz3oVo%2BLSlWf%2Fwsv4UwJ0cnlJiLtMyT88yxl92SosCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvrbMNDQFB%2Fn87l9iKtwD14ZQshTqEz6Sp86sEYrZfYcfHouSxjdPuOVg6HfIGnmtPAyW6BKZDdfy1PBPvccweuMZQxEnQRp1EUiN4cpdzZiufRdYSLRPWHMWq394mdDLpi1D1Jp2bk%2FbKB%2BeXlxcD6P4QCnMSXdJRcUC4xHW5VNUXbaWy8vwNfwcBxXsMoo6G6kuGElvFUPRqOiPls3%2FbaSM9b2LQ%2F2PoDERhArS%2Fgrf%2FHo9kbgIE9h8FYncJsooJssVxaMOAFqPnFSKOd55YE3gxmfVf13ndD279l3obPcSLJVOdZew1qLBom%2FSZkF7hZ0BX6%2FCr9qWZTe5pHX5LwJVA5r0HN1BKvQ2eFlxWVhjJIkihCyLFi939FIa2q7EKutK7MDXzAwFcsjtYZrnY3JedoSt3xHwQWByPET6FMqBjnQOM8Brzwu0dMGPYP2p%2FEE0fWQhR%2BXUK4ATxOVqwevH8JnH0AYhYlvQVQGHT68kbxmWc5cr2T9LLJKjd7QEaPCOOKSAvPuD7R28ijpoH3l5euhoAm845kl7F%2Bj%2BCxXSlJk0nFGFTiUqc1LZstNVjuQYGTrN9mFgEdaxbM0MqBrVl%2BqgXk%2FONVpxlzWUNRlV5ERJyBoP4eTuRRIciBwWksh28OUG8RUwoVYwxZbMvgY6pgFf2Jf4IiU0%2BvBBUEB0hy3i%2FqxFOFUDvPg29lKDq6H0R95P%2BR5MAR3O%2F0pnHoFSzRHOlIzzy9PRm3uMMF5sxLds4e0dqwb3%2BQ%2BEqeTKtR97jNVP0kk4qK4BKUw6%2FqT87hCAuPZ64Puj9DKGQU3t%2Fu6lSblOXmL1DMs8rbhbheLYT3g%2Bey66uiun9geE8zHHOI3ra7c4ZkHMc90lxspJn2HXRWb6Q1nB&X-Amz-Signature=7f1c26baaa644ae587cb805a8d7b234cf5a8f613ea20e801ca3ff0e7d7acb9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZPNQP3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLqHdLH%2BSh8dXSUDbFfcSUC117dmoytpSdFtmVkibJmAIgOr970yTG6JUfmzHzlTHhKS6n2CwEw4IbfpD3JwedYXwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiwW4sqKUPrs35qCircA%2B7AonvLI4jKmlxT8Ja3XRGf0evPCOEHSGnIkxtWTRX5yrYI8snuM6BMLKIbheZurOlRr0GtRxBVmZJDji%2B5%2F9c2fVjvDw%2Bw3PtCU0OxnDC%2B47ZOh6e4YTENNonnk%2F8pQjdBcwQmT845PNmTo8UkiQUQYLeuYq2HHPmhvFXljG%2BMKV4pzGRh32H2bBz3StKzRH7u2%2Bg%2FmqG7clO6s6aeAtRDDxuJxDDb1NV8X8BJpOct8KTk5PZu5s1e4e8xRchy04GCHY0nFLixLD0W4WIPbSpskHntWrF8u1qvMs4Bt8pU%2Figds4ezSf1V0n8ytbFzaWCTBOm07P5mcwWJTh%2FQEATWgMeGFe2e59NVOM8WDZrL%2FjhWd6qKA70Z1HKHRNbce3jHFl04FZYh%2F5SsrQXsVjGX8o7%2FMsTIEMQHUQDbm%2B%2BY6AIvtsso98wBbEaqz4YuuK%2F2xOKdjhqCTMi6gUm2qpKQPMd%2F2cRO2Iqf%2F7gi1pQJa1VBrdredkmlTmZZ5y47Rx%2Foc4WyuDMTTfL61j8jwKKl0xb8s3t%2FOWHXXW6EJGfotbc3tfGHzawSgoPm53L%2B9%2FlgPjeRWvxmLDzdQe7UszEny%2BSErY6KxzTpCTwYz2n7Wh1k88Vf7fymUmk0MNWXzL4GOqUBsZyacBSCtFexfXTMJQofmsVjOzkjfMVp8tZZDiOohX4viEY%2BVOJQCQNU6k1eBjorpfnyyqDQkfMVT%2BpimATcFP5CQM63Bf44MDJFQSIzbDRyeGHj59gf5P6URtgItpRTDHlIFm%2Fb%2ByhdRPqz%2BnEVXTiMjLCmWUjB1slNY92iseJM63PrBdeT1WGrCOm%2FQbaC5VhxClwtd1xm4s%2Fsv3V5nQWd0GRL&X-Amz-Signature=e8eac515be5cdaf279f77e2afd2d5ab00e584f186df4d57719bf650cd1f14be9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
