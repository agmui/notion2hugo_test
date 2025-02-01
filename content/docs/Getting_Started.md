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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBX5S2R%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDva1T7xC2KHFtm3iVhG%2B6%2BG%2BNT%2Bun1%2B5PGyVfzs9ANlwIgPvsIFYXThrOiOwvgXT%2FiN9MooCQsRfXy4NNg04jMU7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ygcJkBoUMqVXUeSrcA2S5WsB6UM%2FiMJlCeC%2BkJ7FBJpcmZsm9LGTqnSnclLgPHlUGFo7Z1en0cLZAeBblv6jCsSYA1BQRt9IB8EPEmvZESpiIgWw97qnO2b9gquS0w19k0uV6XtIJAm8UVAUaxzpzE1sLQqBDoAK7F%2Be4DvEQQSmE2tlqResb8UH%2B9Ijjg2ieuD60Yw7xwXEyzLpvVovqiAYAZLzFDIY6FLxG7wGZqBQw3lni6Qg9ZGKTfzTPZxq7miLRlShuwtKdysLriXr4Kx4eKSw5yP8u8pjhJ4whzQQ%2FZmDVp%2BVdib7j1wmXvwxuHUXJ7J7N4IoKKT37H03MlDiGOtms70aBuZGm4NOqA2VEvyDNP6f1vOzRZU3wL8wD0z4JrL2PXHZ869wI7WgmQUUWppRgUpTjBsSVwLltn%2F%2FiN3B2xrZ6olPEjXI9kb54bt2moHIa2zOVnP%2BI8p%2FCV5X45PlxBps4bKCzdtEIcBZl%2BwbBVnjuwo5Nf60v%2BEWRldWV6FaatFBoMi4cATxT6L8Zv8KEOs%2BNuypYECFnVVgmMDZiX3QpMVJrB%2B85rzZgsJO2q8VwzVru3WcRoTMfFbuX0YGiDUcMjH85DAt%2BuND4w9IE5DLqP27wUkBhgqSAQoIgctrlXRJ7MLul97wGOqUBWMLlaxdRVSuFTbySBWuL9QwtWVdN8YIdHnv91DW3FJlVsQHkW%2Fu1yI2zccKZexIAwT0UFtutVruAaJ%2FI21BPKrJAE5c9NjFDbOy9wZqdfIaNqglJGHjyR1K6XpXHnenTU2a%2FWdT0iPTdZmyuJ4NL6ZPDEQSHxOno8U9TjbcDILEmON%2BIxABcLzrtQvOCOXewhxCOfiNMo%2Bov1R2RsONDtK6qCQ7a&X-Amz-Signature=af5274cf795836e7f2505f6007ded7e3ef73ebe8d2d5817409c034d9ccdfa161&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBX5S2R%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDva1T7xC2KHFtm3iVhG%2B6%2BG%2BNT%2Bun1%2B5PGyVfzs9ANlwIgPvsIFYXThrOiOwvgXT%2FiN9MooCQsRfXy4NNg04jMU7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ygcJkBoUMqVXUeSrcA2S5WsB6UM%2FiMJlCeC%2BkJ7FBJpcmZsm9LGTqnSnclLgPHlUGFo7Z1en0cLZAeBblv6jCsSYA1BQRt9IB8EPEmvZESpiIgWw97qnO2b9gquS0w19k0uV6XtIJAm8UVAUaxzpzE1sLQqBDoAK7F%2Be4DvEQQSmE2tlqResb8UH%2B9Ijjg2ieuD60Yw7xwXEyzLpvVovqiAYAZLzFDIY6FLxG7wGZqBQw3lni6Qg9ZGKTfzTPZxq7miLRlShuwtKdysLriXr4Kx4eKSw5yP8u8pjhJ4whzQQ%2FZmDVp%2BVdib7j1wmXvwxuHUXJ7J7N4IoKKT37H03MlDiGOtms70aBuZGm4NOqA2VEvyDNP6f1vOzRZU3wL8wD0z4JrL2PXHZ869wI7WgmQUUWppRgUpTjBsSVwLltn%2F%2FiN3B2xrZ6olPEjXI9kb54bt2moHIa2zOVnP%2BI8p%2FCV5X45PlxBps4bKCzdtEIcBZl%2BwbBVnjuwo5Nf60v%2BEWRldWV6FaatFBoMi4cATxT6L8Zv8KEOs%2BNuypYECFnVVgmMDZiX3QpMVJrB%2B85rzZgsJO2q8VwzVru3WcRoTMfFbuX0YGiDUcMjH85DAt%2BuND4w9IE5DLqP27wUkBhgqSAQoIgctrlXRJ7MLul97wGOqUBWMLlaxdRVSuFTbySBWuL9QwtWVdN8YIdHnv91DW3FJlVsQHkW%2Fu1yI2zccKZexIAwT0UFtutVruAaJ%2FI21BPKrJAE5c9NjFDbOy9wZqdfIaNqglJGHjyR1K6XpXHnenTU2a%2FWdT0iPTdZmyuJ4NL6ZPDEQSHxOno8U9TjbcDILEmON%2BIxABcLzrtQvOCOXewhxCOfiNMo%2Bov1R2RsONDtK6qCQ7a&X-Amz-Signature=4dd76da90aaa176ec2f12dfa9f3305e6e15998669f605301fc13a09bcc54c53a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMUQ4ORV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOOj66U7xl7q7xlCaXTs3lON9dLaL%2Fp%2B2l3mPiG0GCdgIhAPlYTQY0oA7mXQWHTvs%2F2VKUFqUUirjzNFVR%2Bkkl1n2qKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwndlqSYIJS6yZPc2oq3AO0iZDwajfWCkZ0NXq41TO%2F83NpPwPV6Tm1MF9x6Zik7EqunA7rNdCraF3G0P4cZbnCJ4A3TP12Exg36ml5VszQXLnuBlm18CyZCXkZIPsXOleeYkAt79ppQ1HCKSRxGVcH%2B%2BWAYFP2BcGtBsRE%2Bh%2FjGnsH356CTMw4r9DDe5v975zg%2BCbpCAavK7wrGCStq4xSNGx55fAPASB7n6vNMaEv7e0%2F5qTWThsaQIrvzvtOXDb3dbT05KKAE1BTMRaIF%2FB%2BQNMyuETZ6PtWqQouG2YyqsTz6LKiT%2FOafNHYbw%2FMMKIRsHjGghea8wYV03iImoRJSJNS10u4RHEcOzqnfl5IYibcplgzD9A88TLny6YCnzWcyDpqzHaCVGyhtWM6ix7ZTdWrzP%2FOpYUv9SNgM%2BKduSlNM68er1NvlEd1Y5ob%2B8AYbUxz4UG2HRRNG3qYSZ%2FBVudxZizuszis1maWm4YIDwazOJ%2Fq2W1Wikr1GwLwF5gKzceKTz0jdsFms55Njox%2BgfrUekp2Ygi19b2h1IIMY7yUb1qh8K5noNS%2FlX9lBrpPqO4hWTZ79tSrXMUYZtRUI5lN2QC%2FVNPlYEFOK9LdZe5rziSLRMvSUfXswoUAQdi%2F62Isi1vTwz2HdjDnpfe8BjqkAXZDSAJCDwjtDkuP5p1ax04rUaZP%2BFieroxOmpIkzaeyXrq%2FtgM5%2FD5v9ubROOg%2F7pd0RVB48vmmzkM2xOYeKPqGgzcmMpnq4nGbzTnr6Ry%2F6LMnLwz113ud1DKVxbeUQngjmSXDs4Mdv0mchX29FLuRjH1BsLVrtjjO9Z1%2BWVsB%2FvRM0WWtGkBMaIe8hrJf8LP5dyN857r2e9CjRnGr%2FarqjL0w&X-Amz-Signature=f81b0e990cf668f8f0d57899fa348b7ff99e8b4ee9599253e7d55fd2d8901b55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLUJ4JE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6MULdmYrsI3Uckw%2BjRV503STiNg1ZvwuJ4PmqRu%2FilgIhAJMkouIMjgwN9DVyXeryqEY65MIpYz6w%2BFypuPXMnbgyKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3QfQJi3HD1bdc5ikq3AMH4zcGoyCISq2iF5QfVSBv%2FgvGMmO4jS4Q2X3ap3vtt9BcRbRU0grone5HUtcbzyn%2FfFPtTYlGqwLTFqEZH8sDk36oiKEOYmjPOvaVp8l0UE6PTsfIDLtd67yQHExINQCpNwllBcj5shZFO7AOWmUemQmUCM0qaMU7iBBqNO%2BPigBLWZ7cQTjjCANPP4pGso7HAk7coG%2Fm6vueR%2FbpfAideKH9ta60q884NOclOysYu0%2BpXKqhv1QLw3BLWMj42mNp8JG9OTLJY%2Fqw%2B7YA%2B70t7%2BVIbe1CEDXKCRcNyydyZfpvDOXur7DHeW7CZPU9JMIc6rN4puf%2BFZ3qsoLWY1jxkUzb%2F%2FWBsq2HXuA06zan6ouLSx1GEGiNF5ygHGOskLYoLD0%2B00hNnlQBOkmgMs%2BDKI7%2BboJqp4tB97CjNzu%2F2Gqj1L9cEbgGO7HARkGVjmJLbncUDfI7TVN1c8UB97p4pAzKU3v%2F5WDb%2BtMJ5SW0%2FDNhC7rbwAK04keXWdHv413%2BxLQkUp9fLO1C%2FW2uBPobLRT2Xu0tLZCxC7Ls2YvmY1On17cKdLl%2BrpEIUC%2Fnht6GaKDqiePsgJKkVstYJSH%2B%2Fv4aDtpbKlWg0vtVzq6tO0RTYqv0wmZ%2FBkDE2TDZpfe8BjqkASg%2FRwRlQwLLO%2BYWyMxxz3ml%2BPmFYIA9GnZCRegh%2B8Kb578t0GuazolriUW1EcrI8PPkCUXYPBxxCB7Lzbc3gKpR5KHCOvxDD%2Fbn1jvne0Il%2FEROxvW8TX6%2FJoSU%2FtTFUsPJB4Ryfgxsv3tKy4dzQE1c4CHi6LU%2BnU0YB3TT1tdaeAB%2Bfj2xf31YzFS8HmlLoJrbxJZEGjCg%2BqCeut0xuh6YXLe7&X-Amz-Signature=fe50534308de1892a25b461c5cb132594e40476625a72020dcd4ef6c4335283f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBX5S2R%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDva1T7xC2KHFtm3iVhG%2B6%2BG%2BNT%2Bun1%2B5PGyVfzs9ANlwIgPvsIFYXThrOiOwvgXT%2FiN9MooCQsRfXy4NNg04jMU7gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5ygcJkBoUMqVXUeSrcA2S5WsB6UM%2FiMJlCeC%2BkJ7FBJpcmZsm9LGTqnSnclLgPHlUGFo7Z1en0cLZAeBblv6jCsSYA1BQRt9IB8EPEmvZESpiIgWw97qnO2b9gquS0w19k0uV6XtIJAm8UVAUaxzpzE1sLQqBDoAK7F%2Be4DvEQQSmE2tlqResb8UH%2B9Ijjg2ieuD60Yw7xwXEyzLpvVovqiAYAZLzFDIY6FLxG7wGZqBQw3lni6Qg9ZGKTfzTPZxq7miLRlShuwtKdysLriXr4Kx4eKSw5yP8u8pjhJ4whzQQ%2FZmDVp%2BVdib7j1wmXvwxuHUXJ7J7N4IoKKT37H03MlDiGOtms70aBuZGm4NOqA2VEvyDNP6f1vOzRZU3wL8wD0z4JrL2PXHZ869wI7WgmQUUWppRgUpTjBsSVwLltn%2F%2FiN3B2xrZ6olPEjXI9kb54bt2moHIa2zOVnP%2BI8p%2FCV5X45PlxBps4bKCzdtEIcBZl%2BwbBVnjuwo5Nf60v%2BEWRldWV6FaatFBoMi4cATxT6L8Zv8KEOs%2BNuypYECFnVVgmMDZiX3QpMVJrB%2B85rzZgsJO2q8VwzVru3WcRoTMfFbuX0YGiDUcMjH85DAt%2BuND4w9IE5DLqP27wUkBhgqSAQoIgctrlXRJ7MLul97wGOqUBWMLlaxdRVSuFTbySBWuL9QwtWVdN8YIdHnv91DW3FJlVsQHkW%2Fu1yI2zccKZexIAwT0UFtutVruAaJ%2FI21BPKrJAE5c9NjFDbOy9wZqdfIaNqglJGHjyR1K6XpXHnenTU2a%2FWdT0iPTdZmyuJ4NL6ZPDEQSHxOno8U9TjbcDILEmON%2BIxABcLzrtQvOCOXewhxCOfiNMo%2Bov1R2RsONDtK6qCQ7a&X-Amz-Signature=791aa8fa9f970360bd880c79e2ddaa7526034d86d46c4ed7794c6dbcde4daa60&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
