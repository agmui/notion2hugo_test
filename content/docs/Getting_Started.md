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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HBQCPC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELw9unQZshm442fxnNXxYs3Eu%2Fm32eeoUGPPzRyrOGKAiEA2upUQUIJP3kQ104N%2B5RMHBKOf1X9n5MjXjuikQDy1G4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5aF4fFymipG9SIACrcA37CxOF4AjBjZCJcchfcStMj33fWZd16GeFmGcxtVFAG%2FZt0P%2BVmDNMbPYiqFQeruyH5LYQbNsUbc87zXQZ%2FwSr%2BG%2By3F2ysCwE5jOYVJhrwv9E2AiR5qIlOPyyeIKAuWHvVlsc8KfvF1dbx0zPVETaf0FX%2BuhcR3KsUiAXdJwMC5dOX2c5NVZOMAgN674VLc%2Bni2D%2Fm0sQfGzvwQszD8HJj%2B0AdWpLw8r4cxBypSmekNmISzzwp6rBgVFeb2Bfw4n7gFcDu6NeBuS5klW8YtFcV%2Fuh68alPoDF1VjICd46IHFP8vuoSTJ3jjv8h6VbrXInE0Ha6aNpgApvr8LUb7vWrLLYszaS7ysY5tcsOMc2te7DNAf6QS0eiD7Uo0Sn%2Bewj3FNQOYk04qE2rf13sBM5DQweAZeA%2BOJIGx8t7gadXVgClLb%2BibTZhDsHsf8oWAIX9DvyIQFAttrXqyRc2akCtXrY8gFeBNW%2Fy%2BYUhNiQuhZRKspMePEP3mDUjKsNHc6RcSd1RXZiEzWEBAX3S6aZA2HlN0AgC%2FdGdGPlEtp55%2B704x8WaPzs9eBNpnwlUEueSAknkpu5l7T4TK6pMLQApw56daf91pUHxR18ZzaKopVakNI9OujxR6qRaMLH3qr0GOqUBROX26EMV4IhDKuolDyVgWBNsRN8oULshIxUczUBgl2dIVzxYhNRALkpKXP8Vzs5E9gvGFDLxFUvv%2FjD9Qfd876SceHsvLYHPd%2FxCYlTGYv22skSRoQO6KEO7i1osLVdRmeE5Enrjfwth8XIh0rdyFoze8vmm0qzQl%2BarzW3A9OQTawU8sQY3PDtyniiqZkvj6ew9XWBH3KxMNtQyOP3ElD17rq25&X-Amz-Signature=e9dd222dd959370fc1e189e8a641f3b83880426f9c30d15c5f6274fb5cb344bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HBQCPC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELw9unQZshm442fxnNXxYs3Eu%2Fm32eeoUGPPzRyrOGKAiEA2upUQUIJP3kQ104N%2B5RMHBKOf1X9n5MjXjuikQDy1G4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5aF4fFymipG9SIACrcA37CxOF4AjBjZCJcchfcStMj33fWZd16GeFmGcxtVFAG%2FZt0P%2BVmDNMbPYiqFQeruyH5LYQbNsUbc87zXQZ%2FwSr%2BG%2By3F2ysCwE5jOYVJhrwv9E2AiR5qIlOPyyeIKAuWHvVlsc8KfvF1dbx0zPVETaf0FX%2BuhcR3KsUiAXdJwMC5dOX2c5NVZOMAgN674VLc%2Bni2D%2Fm0sQfGzvwQszD8HJj%2B0AdWpLw8r4cxBypSmekNmISzzwp6rBgVFeb2Bfw4n7gFcDu6NeBuS5klW8YtFcV%2Fuh68alPoDF1VjICd46IHFP8vuoSTJ3jjv8h6VbrXInE0Ha6aNpgApvr8LUb7vWrLLYszaS7ysY5tcsOMc2te7DNAf6QS0eiD7Uo0Sn%2Bewj3FNQOYk04qE2rf13sBM5DQweAZeA%2BOJIGx8t7gadXVgClLb%2BibTZhDsHsf8oWAIX9DvyIQFAttrXqyRc2akCtXrY8gFeBNW%2Fy%2BYUhNiQuhZRKspMePEP3mDUjKsNHc6RcSd1RXZiEzWEBAX3S6aZA2HlN0AgC%2FdGdGPlEtp55%2B704x8WaPzs9eBNpnwlUEueSAknkpu5l7T4TK6pMLQApw56daf91pUHxR18ZzaKopVakNI9OujxR6qRaMLH3qr0GOqUBROX26EMV4IhDKuolDyVgWBNsRN8oULshIxUczUBgl2dIVzxYhNRALkpKXP8Vzs5E9gvGFDLxFUvv%2FjD9Qfd876SceHsvLYHPd%2FxCYlTGYv22skSRoQO6KEO7i1osLVdRmeE5Enrjfwth8XIh0rdyFoze8vmm0qzQl%2BarzW3A9OQTawU8sQY3PDtyniiqZkvj6ew9XWBH3KxMNtQyOP3ElD17rq25&X-Amz-Signature=741cd0f6ba3ffc7249e85285f4f86d69d61e8644ad159e5612ec32fd9a4ab6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFVR3BS5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCon1XCYvUBko3dPaaf8LExA%2BkMqHTh8rak%2FLF5s88DrgIgNaqbTaF7bkjo84OmipJFa9K9jc%2BHc%2Foou20DmayPe%2B4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9%2BrZnKqkPyVA8A1ircAyidA3WqxfdaxoPc60yVDnHDX7bNIjCC4qgJxiK6IJ2H16k87D78c2dw4eEjC8fr8k53m%2FAAq6eiML995lhN1lW2kLbNUc2fQkOpz4io%2BGqnt2MJ2qrAWWPSie2Py%2Fb4PCX0EbDEUGj%2F7TVJpXoKnZA%2BWEhkaLV22ccoFi9MR01DpV9N4tXYiubqL5e6GVLEt%2FLCDgxeOsJF%2FiRvcR6egiimaXPzldeH7S6O%2BcYKJ1l2WUHtZxL3uHWQEb7X6YIN6iu2uT8YoYgsYnSvB2Sku05A2uVd3v%2Fq8u3i%2BGI4Ul19P6YE6KroW5WmU6F5URdQJc0OURJ7PZojW6pPV0LRHaCfaeB2KfWoTQSVEiogA1vVpcqe00GARxmr06q15DmR6jFj5OWP4HcTPGInGjkxiwH55AecTJEBkC2EY4fxaqnLoXJGA6Je%2Bu8SojyF1Z4RtzWub41lsKxpFoVdCU3niRELncoe12jSC88esAonYugHE7z1bdQatrRQuthCEzMJ%2B2I%2BGjhp6G53lyk01puxzDUm%2FY%2FaW0zneNqxHrDI9w%2BFIXvMlrmL5JXW9AV1SIhtyDk1XenuFoYQICH82nS3hFjxPbkUHnCp1QGgV71bv8QWB%2BGlHEavjDjp6nnFMMf2qr0GOqUBYONlUfELnTSsPPMv2thvUw9OVnQK7B9twuyTrmFaaAeXm47cRCMdDTrs3ya0ykTGJc3nlzbRGDcJzYIuM%2FWObkXzYtvDC%2F6W84lBpQdBJK1l5I9%2B4ZFljxWKj0tni5egSBrkLrniIMdcOcf0BGSo8xFkau0B8WQS7j5Ig3BJ%2FQsBM4YtXOggiOAIS26P12QUZ1UoKidZx9Yo6M%2BRS%2B4G95UJfMih&X-Amz-Signature=8fd1a10038bd49f2ef80e1cf3a244a3eea34cfce07d2d3bb5bdd18d193023063&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHCJ57J%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRh22qUTzBKgheQ7vkl6w9CzS%2FMZrz4HnoboRc%2Fp5WpAiEA%2FUwCykNkL5KoeybB5768pqZyfaayphfvnSJ1%2FoDtoJQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1OGpKz8Hk8lYGX4SrcA7K6PM9gE0HyTxTFIQ5OVxIClV%2Bfzi8oALrPDxOR25D3Sa%2Fx8Qj8tCE4wqyTuYFP5e4dxed2lJaJjpkKxEPM%2BHfuOY7yAQpwTOh47uv3p8LX89SMl%2BEHvi8SyNoD7zN%2BG88gQJmrfF2hulCLdHVDo46tDIRvFIhVVSpTv7d1KP0660piiL%2BXZom3DaDK0d3cbNoYoOjXt34OCKbi9Z7g%2FFRz1cMEEgltDsDZySKqsUpAHnoAv8DwnBFDMuhxWcKNsqJHw6cvpgB5LgF%2Bym2deq1lFVO%2BKRlioBlq6fm0kiEskdjZc8%2BZrNjP4Uh4%2BYzji4BeKfibvu041ijMYr4VznCPaooUhCFhbWkco%2F0UCHfKIJgrB6MQtUmG3rq36gnjp4VyL1o%2FfohEJ7xqNHO5kLQqnyzrfJfViWyfBT8xWlcO0SC3yno26z0MDZxw23GY8mow9mI1j%2FKgIIku8n8URNvV4UJiveI6%2BjNx2qBxF7o8V0iNTxPAQm8QoyEvJs87cOE5zsMt%2FABQdroJdHgUMUZMqEjafuW53VSP8dmvu%2FuhoHNyBZJSNZj2O%2FdfBONU0zWRJZLR7C6%2BBI%2BydLbhAB78qOXJ7bTKsMcvYCexVQrIE%2BfHGn2Bh0oi5PAiML%2F2qr0GOqUBU%2F3gkf%2B7AmvWWCsxAYl5MPUL4YmTjHHTYBedqqZiyvgwJI2fnlC1S6Wg3sW8jADg478KJbS3Thm0IlYt0PoeoUec49pxyrCkw%2BsvmWm9E3sEWitL2FCDGg1bL7RR1EMKodq2%2F2ey3FnbI1UnB6gsMr7mBm31M%2BLhgdagIF0QnMI1xrKRKZVVlTO5Ta1DfEbokyUiDjEpuKJ8E5NsEdmTHoSYSvuj&X-Amz-Signature=992d495f354948af0f575528351ccf4f13e0349549f2c58a3d3689d9c33dd577&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HBQCPC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELw9unQZshm442fxnNXxYs3Eu%2Fm32eeoUGPPzRyrOGKAiEA2upUQUIJP3kQ104N%2B5RMHBKOf1X9n5MjXjuikQDy1G4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5aF4fFymipG9SIACrcA37CxOF4AjBjZCJcchfcStMj33fWZd16GeFmGcxtVFAG%2FZt0P%2BVmDNMbPYiqFQeruyH5LYQbNsUbc87zXQZ%2FwSr%2BG%2By3F2ysCwE5jOYVJhrwv9E2AiR5qIlOPyyeIKAuWHvVlsc8KfvF1dbx0zPVETaf0FX%2BuhcR3KsUiAXdJwMC5dOX2c5NVZOMAgN674VLc%2Bni2D%2Fm0sQfGzvwQszD8HJj%2B0AdWpLw8r4cxBypSmekNmISzzwp6rBgVFeb2Bfw4n7gFcDu6NeBuS5klW8YtFcV%2Fuh68alPoDF1VjICd46IHFP8vuoSTJ3jjv8h6VbrXInE0Ha6aNpgApvr8LUb7vWrLLYszaS7ysY5tcsOMc2te7DNAf6QS0eiD7Uo0Sn%2Bewj3FNQOYk04qE2rf13sBM5DQweAZeA%2BOJIGx8t7gadXVgClLb%2BibTZhDsHsf8oWAIX9DvyIQFAttrXqyRc2akCtXrY8gFeBNW%2Fy%2BYUhNiQuhZRKspMePEP3mDUjKsNHc6RcSd1RXZiEzWEBAX3S6aZA2HlN0AgC%2FdGdGPlEtp55%2B704x8WaPzs9eBNpnwlUEueSAknkpu5l7T4TK6pMLQApw56daf91pUHxR18ZzaKopVakNI9OujxR6qRaMLH3qr0GOqUBROX26EMV4IhDKuolDyVgWBNsRN8oULshIxUczUBgl2dIVzxYhNRALkpKXP8Vzs5E9gvGFDLxFUvv%2FjD9Qfd876SceHsvLYHPd%2FxCYlTGYv22skSRoQO6KEO7i1osLVdRmeE5Enrjfwth8XIh0rdyFoze8vmm0qzQl%2BarzW3A9OQTawU8sQY3PDtyniiqZkvj6ew9XWBH3KxMNtQyOP3ElD17rq25&X-Amz-Signature=08af49131c6b9b501e03ed94790437fdfad5d54b27baf34435afe07a95c4436d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
