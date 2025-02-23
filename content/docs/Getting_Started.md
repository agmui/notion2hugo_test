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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAODYUI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa9tDSbkJmheKrhhxAjbKqQMhqB48fSz1PlMuXiW9WhgIhAONoI2qiNknhUXMq0eluj%2F1iHXqKw2zgjZb6M2HpKoHCKv8DCBkQABoMNjM3NDIzMTgzODA1IgxT9ryJYRjf94nPe74q3AMZQAsFIY9ca1BhcI5fFTT0SkR5%2BCybAV5yjCPFNKseszIqadEu5Ev3VN7jEAb8grGiNvQ0VmChvFgDIZ1byeRbHKPa9fGj7H97HqaHkj7T%2FhNRmuPkZp8KR18Zn80%2FMaSBaydoRZsnJEaZ%2BiHH%2B6rB0SSiULQ4xZYPklyfJjUIwQCb8lcE9ABRy4KWwTvQtuAL9edLFNqgtXqQfUul3yIiMwpSeN%2B84x25S4X5NS%2F%2BazTd5bQNiVlaJm1Vus285R6XzGV8FcH68Ki0nWWCq6xnBM1%2BCPuvYmJFNhdLsceGETGvQkAz1FcXV4RX72JN70Yj9VE%2FhnsmRr1gpLmaOEBpXuPn31s6F8B9De62PGpL9ZMFACG6JeJVFSGaazMA5KpTrqF9TFif4bcja38p5tn9%2F0uY7LHAe97Xbt1hgV2fA3o4PinCMlW1ZhxzK%2BFtcXoKpiTYWE%2Fwuz0yN5TV8upC96VAU9cjX7IwLlVf7MMhwtXD9s36a9zjXYMVvKuZqDFo1TXFcN65v%2FWPoeqLie5KZgAKlcbcqgx1e%2B%2BMgTEzHHczu3d%2BnE0LoV0CQ2gs47hHhxM4FxQRwAekKgR9hO5fr97r7HYv7hbmHCKATSK1F73zMLZjnMxCpKXqoTCqie29BjqkAZsPVSCYpiGsgBK4byEwR7%2Fd5o1W7bIhqwYQssxhpczbrP%2FsnNS0QNbDTHGrLET1KN6eBAhut2KlYctWd7TmONIF0ygfp%2BWl7hjdjkQ3EELlJYzq5PZmtXIqLl8tnEJQUO%2FbdeDj%2BvdTotrlj5Slf85Ijb5ixeNtqOJBYvvLwbrZl3M34%2Bb%2F3flLWKfSqHYYblt4G%2BYJMKLyRzGmQvgvSNYqYj6A&X-Amz-Signature=5ebcef9179204c19c68dbe27d51375c979b21180999252bb774b970c2f09eab8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAODYUI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa9tDSbkJmheKrhhxAjbKqQMhqB48fSz1PlMuXiW9WhgIhAONoI2qiNknhUXMq0eluj%2F1iHXqKw2zgjZb6M2HpKoHCKv8DCBkQABoMNjM3NDIzMTgzODA1IgxT9ryJYRjf94nPe74q3AMZQAsFIY9ca1BhcI5fFTT0SkR5%2BCybAV5yjCPFNKseszIqadEu5Ev3VN7jEAb8grGiNvQ0VmChvFgDIZ1byeRbHKPa9fGj7H97HqaHkj7T%2FhNRmuPkZp8KR18Zn80%2FMaSBaydoRZsnJEaZ%2BiHH%2B6rB0SSiULQ4xZYPklyfJjUIwQCb8lcE9ABRy4KWwTvQtuAL9edLFNqgtXqQfUul3yIiMwpSeN%2B84x25S4X5NS%2F%2BazTd5bQNiVlaJm1Vus285R6XzGV8FcH68Ki0nWWCq6xnBM1%2BCPuvYmJFNhdLsceGETGvQkAz1FcXV4RX72JN70Yj9VE%2FhnsmRr1gpLmaOEBpXuPn31s6F8B9De62PGpL9ZMFACG6JeJVFSGaazMA5KpTrqF9TFif4bcja38p5tn9%2F0uY7LHAe97Xbt1hgV2fA3o4PinCMlW1ZhxzK%2BFtcXoKpiTYWE%2Fwuz0yN5TV8upC96VAU9cjX7IwLlVf7MMhwtXD9s36a9zjXYMVvKuZqDFo1TXFcN65v%2FWPoeqLie5KZgAKlcbcqgx1e%2B%2BMgTEzHHczu3d%2BnE0LoV0CQ2gs47hHhxM4FxQRwAekKgR9hO5fr97r7HYv7hbmHCKATSK1F73zMLZjnMxCpKXqoTCqie29BjqkAZsPVSCYpiGsgBK4byEwR7%2Fd5o1W7bIhqwYQssxhpczbrP%2FsnNS0QNbDTHGrLET1KN6eBAhut2KlYctWd7TmONIF0ygfp%2BWl7hjdjkQ3EELlJYzq5PZmtXIqLl8tnEJQUO%2FbdeDj%2BvdTotrlj5Slf85Ijb5ixeNtqOJBYvvLwbrZl3M34%2Bb%2F3flLWKfSqHYYblt4G%2BYJMKLyRzGmQvgvSNYqYj6A&X-Amz-Signature=c56bb42a9ce82ccd816df94a85f1e4ccfe1abca1604f5f6b765ba6343dc8c875&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQA6DPE%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTIkf25%2FUtibXk5MQJvaahyxPsHuVqT3PXN%2ByavXt1WQIhAPqmupc8RjTagFYsTrRMqeIrOhjEXJKo7DVPqYj64dXYKv8DCBcQABoMNjM3NDIzMTgzODA1Igw7gA5ntmqzVSrLJJcq3AOZeqimInbUxag13lePO5fkdlHt4qCPBQSOEAwGoPTAoqSB3G4scV1%2FBinSencFd93dHADPcYCQLDkk0PzwTgdgnoAiPq%2FylCI%2Bri82DE8%2BTrFiEpSDDyFeVPvHkNYlN%2BcxD7LFV142YUpGmUw8z7ONNp50odnVjuYKqUfKWBNYQvi9XiGtpUXdlZmxME1NMlWMEZUU%2B3qYg%2F7KcOjB%2Bops3zAXTB7UoT2LakbzFMvGgfS6GzMQn0dQWJ2aDJ7BwncsbSQ0ZQfwawmZSz9BP4k5XSV7stv%2BI5cbFBIStooiHAz2YKwiBG8Afl4m9A4Sg5cXShW8TmB3hS8T%2BDgeMME%2FQ7qzesuXeOBawZSQkCB0TckoAoFi8opgP96okeHOnjBTTyenzfDy1HHMNIX6iBRnBlen%2Bs8%2BBbCXPyzIs7GhXZJHBHM1ZgDjAhy2CkLMQCHO5D6bHvaZtuHTcemgv5JMRmgIoOH%2FClrQGw2RpMtBjWvyGx09rB43w8fFz6muqUpMyyFtC6OLduvCzU%2FJHZ4y4KHz%2FZRCGWwYiZsbiL0vaV2flCgas2D8BXm4U7P0qqFyzMWq6%2FtlmDDlK9522fNqZiOi17nDxhhfuTkoQwFNwMOmRsT%2BZ1wkdnUZCjCZ3uy9BjqkAZCuRAyzFZVezopOOfWh3e76%2FwI4x9F%2BHso8Oe%2FafbuBFA4YgaYNwPwla2X%2F4Ow41goaao5i%2BZuCsAb8tGwUkQ2Q8UZhMe2MNMyHUB91ByRlhGLWOtC%2Fp1TjqgvNJaS6IOpMevkixWh1Ii2Mpb2hni3s27962zB%2B%2F83S1GI2RcV8%2F03eQMemaJs072HnN%2FixhANnR4OPRbBQl%2Ba19xErZDaPTk8A&X-Amz-Signature=7a6acc737f7770386f14afdf1e3792b859a73014e83833454d17d8cafb89eb41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XN6EXF7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3PJ6qqxUyb7HiXwWyZH%2FcFjliRexsuqP6SX%2BcIA%2F6iAiEAwfoEMyWMXfyyuyVTuo2NRzHA1ljpckMdCAcqBGlV%2Bccq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDByeFazp%2B63DsronfyrcAwqRLnsTK1oE%2B2M1OEQYTAE7l5eU4BqM09oy%2FClgBeBvuNVcSKlXUBRK0facsqCFfb2yVz9bRVnfkpECIR8oE1yYG8J7%2BsixFHcZ2TwC%2FKkEXSWy0lU%2B2v%2FPdV2Hja4jJto7icCzUcMYzNEhSGWGL2bLxzUoM%2FZkq1v8BgJGct9no86Q6useYhyBy8P5Ee8FKuWfI7uVzTGnwahyt1FTCB18UdXXksqzmgf0LQP%2BnpQd07PTcpGNOeaj0gOXDcA89RlIz%2Bq%2Fgg79NMyhdrkqZFabk%2F1AQ5hPpfdzy1C%2FlIpF8T7OERZyXgtlIpgbi%2FKiH9t6BTfMaod2GByz7x9%2FBrc8D3aMAKZ6S43ifN9uLExkgN9P00T8G%2BL3LOWd5CLo5s3stgu316D4Oenyg6EC6uv4hCWXgNXv0DnTdncqMCDVzYFKDPrLjfVkTI%2F4%2FOQ1Sx6gq7Se3cclIjfK1%2Brll4lXHnmP6Sv4ehUOENoU5gwj63zq30w8uAk94wEN3hL27CrXbBLXCC8R5VW%2FHqgvWAtd%2F4VUYDokILAbq6I%2BzO86rrOgCt0v%2F0FUWpkSwSM%2BdFCEVVpPoiaj7QViVxw2BPT1lBUcP0Nb07qL5pfDpuZ7iUC0WvCLt5CxmEaCMLGf7b0GOqUBeNJnbRzIAVn8ntTREH2dwAnr5npYBGDq0QnQ46RgLUFvVrFa%2Ftm2hzIOEGlylZG%2F2G4nQODTOiwDknoqBYuT%2BPQSV8os61Skku6U%2BD0VDkoDHJ7XUyJClXT34McOCM6QVOPBspA9L%2Fs2%2B%2BdYlx28662ZwnxtQeSuvHOpOl%2Fz%2FrynDCnHRdN5VuZWQGjrO%2B2FEkQfUkVDn4wK13Bon0SEEkp8pmuT&X-Amz-Signature=d21082aed29c3193639e0e39f8583fd85d7077d5f775a6beede5ac177c6cd2a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAODYUI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa9tDSbkJmheKrhhxAjbKqQMhqB48fSz1PlMuXiW9WhgIhAONoI2qiNknhUXMq0eluj%2F1iHXqKw2zgjZb6M2HpKoHCKv8DCBkQABoMNjM3NDIzMTgzODA1IgxT9ryJYRjf94nPe74q3AMZQAsFIY9ca1BhcI5fFTT0SkR5%2BCybAV5yjCPFNKseszIqadEu5Ev3VN7jEAb8grGiNvQ0VmChvFgDIZ1byeRbHKPa9fGj7H97HqaHkj7T%2FhNRmuPkZp8KR18Zn80%2FMaSBaydoRZsnJEaZ%2BiHH%2B6rB0SSiULQ4xZYPklyfJjUIwQCb8lcE9ABRy4KWwTvQtuAL9edLFNqgtXqQfUul3yIiMwpSeN%2B84x25S4X5NS%2F%2BazTd5bQNiVlaJm1Vus285R6XzGV8FcH68Ki0nWWCq6xnBM1%2BCPuvYmJFNhdLsceGETGvQkAz1FcXV4RX72JN70Yj9VE%2FhnsmRr1gpLmaOEBpXuPn31s6F8B9De62PGpL9ZMFACG6JeJVFSGaazMA5KpTrqF9TFif4bcja38p5tn9%2F0uY7LHAe97Xbt1hgV2fA3o4PinCMlW1ZhxzK%2BFtcXoKpiTYWE%2Fwuz0yN5TV8upC96VAU9cjX7IwLlVf7MMhwtXD9s36a9zjXYMVvKuZqDFo1TXFcN65v%2FWPoeqLie5KZgAKlcbcqgx1e%2B%2BMgTEzHHczu3d%2BnE0LoV0CQ2gs47hHhxM4FxQRwAekKgR9hO5fr97r7HYv7hbmHCKATSK1F73zMLZjnMxCpKXqoTCqie29BjqkAZsPVSCYpiGsgBK4byEwR7%2Fd5o1W7bIhqwYQssxhpczbrP%2FsnNS0QNbDTHGrLET1KN6eBAhut2KlYctWd7TmONIF0ygfp%2BWl7hjdjkQ3EELlJYzq5PZmtXIqLl8tnEJQUO%2FbdeDj%2BvdTotrlj5Slf85Ijb5ixeNtqOJBYvvLwbrZl3M34%2Bb%2F3flLWKfSqHYYblt4G%2BYJMKLyRzGmQvgvSNYqYj6A&X-Amz-Signature=de1ea3c2607be00b1705769917811a9a10e59bee5bd8804eade5adeedc997e59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
