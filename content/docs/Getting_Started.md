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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEPW4XI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPyW%2BzYg8Gn1WxFASun2hHKPkAvQFuWAeOzjJKy7mUsAIgAyiGRHWFsYKh3W%2FcVdf0N4okr%2Fta8C3iI%2FeVWLySHH0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRjfbnxOdHb7uwbqSrcA4dP8VBorQh3uwtvcwyRXmSz%2FukCE88E9Z%2BIgl60kJuulTPUtNqenm106RX13VP0btXFNMlHEcG3D2D7umKGHiDwxQYGauGQ%2Bd6o2tn5sGPoWXyjG4AnZvl0rvRtQ1%2BVwRY3n%2BsIqpkzHx%2FpQw61JNFSO%2BK6eJfXHbVbjLxpL8BncOATciG55X5Pd1SM1KcnmPjAbgEalVZ2v7V%2Bc7znH%2FXG390LVhDzoQ75uRavtF%2By5q7OZPfnjd9%2BozHtesICjpHCD2bGpl%2BkblxSNQGunKX0dnqerfp3dtcfTU1fUN%2BHPD%2B9Xh26%2FVdJe%2FHpPC4ipnZslZPIrgDI1tTPi5Esu0JWLfl9AyFUh%2BCimQPmfU%2FNzLdlyAYdgXInav%2FPC%2F%2BikeMfDjpWC0itRAP5Du0U%2B8AVm7a166YcNo5In9wXU7UaxqPuhfbQKslhF75fglF0yfxIo%2F6MAMHP0ugd8%2FofdSUH24z4Zztz%2BIHKq7PzIPHlm1WEHo70soM3va5jFFMrkIqfCHi0kV14Lj9AgCquOrUv%2FRHXcQZhoJgqRwl3qJ%2FEYAYZviexMfLZQtIzf0njANfTMbqnV0ahWja18aY%2F9NSed2iU33esaTdlpxzHFFMvACPdLjNPqjewLQctMICl1cIGOqUBEdq4siwzBQk5nWNRED0hKgSY3I2%2B5vRKC3PtnNXag2WWUFQUMCm2RcB5ggO01Kj5%2F1iekE0AXDRkmdL8O4ygkxU7EjjqN9z9PSt566UlhVcsw3G0qCTFlieajvA%2Bh3COrbjvNc2pIIgfe1YK%2BzWXjy7ojYyldBAdXZ4DgpvwM8OYya8Cm4uluvDqSXxeszkpZa%2F%2B%2BHgZjikkMivIkWkTdiqXwR14&X-Amz-Signature=2e07af07bb657104fd58795598ba5fecb34bd2e5cfc07a020e385d0aa5353228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEPW4XI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPyW%2BzYg8Gn1WxFASun2hHKPkAvQFuWAeOzjJKy7mUsAIgAyiGRHWFsYKh3W%2FcVdf0N4okr%2Fta8C3iI%2FeVWLySHH0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRjfbnxOdHb7uwbqSrcA4dP8VBorQh3uwtvcwyRXmSz%2FukCE88E9Z%2BIgl60kJuulTPUtNqenm106RX13VP0btXFNMlHEcG3D2D7umKGHiDwxQYGauGQ%2Bd6o2tn5sGPoWXyjG4AnZvl0rvRtQ1%2BVwRY3n%2BsIqpkzHx%2FpQw61JNFSO%2BK6eJfXHbVbjLxpL8BncOATciG55X5Pd1SM1KcnmPjAbgEalVZ2v7V%2Bc7znH%2FXG390LVhDzoQ75uRavtF%2By5q7OZPfnjd9%2BozHtesICjpHCD2bGpl%2BkblxSNQGunKX0dnqerfp3dtcfTU1fUN%2BHPD%2B9Xh26%2FVdJe%2FHpPC4ipnZslZPIrgDI1tTPi5Esu0JWLfl9AyFUh%2BCimQPmfU%2FNzLdlyAYdgXInav%2FPC%2F%2BikeMfDjpWC0itRAP5Du0U%2B8AVm7a166YcNo5In9wXU7UaxqPuhfbQKslhF75fglF0yfxIo%2F6MAMHP0ugd8%2FofdSUH24z4Zztz%2BIHKq7PzIPHlm1WEHo70soM3va5jFFMrkIqfCHi0kV14Lj9AgCquOrUv%2FRHXcQZhoJgqRwl3qJ%2FEYAYZviexMfLZQtIzf0njANfTMbqnV0ahWja18aY%2F9NSed2iU33esaTdlpxzHFFMvACPdLjNPqjewLQctMICl1cIGOqUBEdq4siwzBQk5nWNRED0hKgSY3I2%2B5vRKC3PtnNXag2WWUFQUMCm2RcB5ggO01Kj5%2F1iekE0AXDRkmdL8O4ygkxU7EjjqN9z9PSt566UlhVcsw3G0qCTFlieajvA%2Bh3COrbjvNc2pIIgfe1YK%2BzWXjy7ojYyldBAdXZ4DgpvwM8OYya8Cm4uluvDqSXxeszkpZa%2F%2B%2BHgZjikkMivIkWkTdiqXwR14&X-Amz-Signature=fd8382bd82d81c16bafd004eecfe24f333f39e2d602677edeb444e634ce651d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEPW4XI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPyW%2BzYg8Gn1WxFASun2hHKPkAvQFuWAeOzjJKy7mUsAIgAyiGRHWFsYKh3W%2FcVdf0N4okr%2Fta8C3iI%2FeVWLySHH0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRjfbnxOdHb7uwbqSrcA4dP8VBorQh3uwtvcwyRXmSz%2FukCE88E9Z%2BIgl60kJuulTPUtNqenm106RX13VP0btXFNMlHEcG3D2D7umKGHiDwxQYGauGQ%2Bd6o2tn5sGPoWXyjG4AnZvl0rvRtQ1%2BVwRY3n%2BsIqpkzHx%2FpQw61JNFSO%2BK6eJfXHbVbjLxpL8BncOATciG55X5Pd1SM1KcnmPjAbgEalVZ2v7V%2Bc7znH%2FXG390LVhDzoQ75uRavtF%2By5q7OZPfnjd9%2BozHtesICjpHCD2bGpl%2BkblxSNQGunKX0dnqerfp3dtcfTU1fUN%2BHPD%2B9Xh26%2FVdJe%2FHpPC4ipnZslZPIrgDI1tTPi5Esu0JWLfl9AyFUh%2BCimQPmfU%2FNzLdlyAYdgXInav%2FPC%2F%2BikeMfDjpWC0itRAP5Du0U%2B8AVm7a166YcNo5In9wXU7UaxqPuhfbQKslhF75fglF0yfxIo%2F6MAMHP0ugd8%2FofdSUH24z4Zztz%2BIHKq7PzIPHlm1WEHo70soM3va5jFFMrkIqfCHi0kV14Lj9AgCquOrUv%2FRHXcQZhoJgqRwl3qJ%2FEYAYZviexMfLZQtIzf0njANfTMbqnV0ahWja18aY%2F9NSed2iU33esaTdlpxzHFFMvACPdLjNPqjewLQctMICl1cIGOqUBEdq4siwzBQk5nWNRED0hKgSY3I2%2B5vRKC3PtnNXag2WWUFQUMCm2RcB5ggO01Kj5%2F1iekE0AXDRkmdL8O4ygkxU7EjjqN9z9PSt566UlhVcsw3G0qCTFlieajvA%2Bh3COrbjvNc2pIIgfe1YK%2BzWXjy7ojYyldBAdXZ4DgpvwM8OYya8Cm4uluvDqSXxeszkpZa%2F%2B%2BHgZjikkMivIkWkTdiqXwR14&X-Amz-Signature=250cef47b6141b518ab01261866282d24647dff62487c64e8ac1d092d7a1b7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OARA5DG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR2CF5HliAovWDXK6c4EtoWyyOD6sI7yNgcDGnYcgtGAiBbz04dgoLsQPeow5Ic9qcm88okSQ60W%2F0HjWdJ9jNxuCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUinAx7VxutelAdpSKtwD3%2BwIvn%2FqU7wHpyy91Q5m0Ahlw8iv3Lg43HbDCLv%2BYXp9zC5oNcnizRGR7Q3q%2BE8Rf5PuSGhyZPto4ewoVQ6V3X6ryJ354GlaL3aXfZwREks1DEPqGsUtGtcSz0C%2FD4vdxa7oyWtWy7v9M2eNRhqxchyJ6RiYE7R4hhtjWPv8o%2BnzYcwUrv0i3KDQmFWIpAz%2FWZkmt9IwaR8NYx6YKQenUru06wHSa2W2SDyd6S4WKEVfb5zcUHnbfEMqFWOmCZSrYJpBuqr2QmncynJhukcMz5ccavs0%2FXTGoiCK77OE3s5GWvjLFUHzV12yOeR6nX0JSCJt2voRpUBb3prAy4EiZgkSHOjP6hfJ9thCpvzDYilKIaYtIgxEbNe4IDz9qaUhNUwErAMp%2BewL3vbGF0FSCtAjZG2JRqWTKn1KokPQyf34VtqNTZ0KhiVO6SiNgLfvjO6StAMWffUXDhQHZvZ6oEXDzI3DOfjxVE17r8rYI8L4n572ncXWnn4l4FRO6mjWxeHyBiZVOZHJtt39ANXlhlnyw%2FoqcDLzq8tAsGKCfai0AKnJusvl5yDIx8xry2LufMjDaAfvVqAtDJ9hqN9fURMD29Cv%2FmlTK5tq96tx9YZN5dCFoUGDbCKWZ64w6aTVwgY6pgGrybohO6JCi8n9T%2Fx762%2FPQuI4C2iJHnNfosK11Qc4if7QWmtalLFg6a8aFr2UppIziRQAmDOQ1Qw%2FlAWs%2FSn9UEpw0LTJscqTeAdwLlVSuA5orKKitQ1gfESEjULP7bM1U7h%2BJj0F1Yro1H8vLur7D1xyQiMilEVwoSFC9vvRLp6RfbL2vuSsysfBvm08iV1vWV0mOHsLkI2o%2FmdZSmey0Hm7KgvB&X-Amz-Signature=8604e11df948694fcefa204097f60e2892b8039c234ccecc6a6e26c72331607f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ER4D5A%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Bp8wLwPwh4zfAxvmoQDtAwl2e%2FfLlE2noFbl3nELWSAiBqvoOGNO%2F5yN291kbUuVCQDbeQF4t5lhVlHFDjXD9MqyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXYGw0rEluJbv7s4KtwDhFPqmRsZIy7tJLren3aIIjH3KBtTF%2BdqYtDK7Bmq2pMXc02l3orXLT2ezgD6y0Sq0V%2F68wZdww2yRPcs4ViVJrFJgzMk1oMWKqCCpA9OnlVOIj44wfkeubLjh5SADnG8zQGttQCAOOqBv2E%2B7CxP0q9Qn%2Bj8WOg0NJRLXrlQe%2FG2Mwa1y6QGINfpnp5dcI%2BnK5jRbaEIvYLNKwju8rgBPpHWah%2Bjxn%2BSGS6TWRGb4efGHeTqRmZSuh6ChT55IVyKudWP8djzZAOr%2FTTfz0gpx7hqegCVc658pDmEOtLT02a8IZEwyM6GP4IQSbaw9t3iwuaic%2FF8%2By4hJpiGCrjIfynXsnPP6OKkPYMcxB7cPecYE%2Fk0kpIUwSoL67fZzqW1TaRxT3X6tdEpPMhV4gDb1tUa6BuCXDGU0t7a2Fg8IapOqkmfGsPH5r14vjR9ppdQn%2FzG15CALcMu6J1X%2BW7G4qZzHhrQH9RN4T%2BHVHgl91TMrRFVS2wDYMqzm%2BaPvpMZeI1AFnlWl9HVStwoIVKdxJLWNO%2BDgMrBk76MqRV5ZDZLqiceegWAvle2eUmCZ%2Bdhcli3KQmVVpULHkexkISIjXyGG6gZ%2BthwSBIPux7GEIUDHOtX81zdtYMOqKsw0aTVwgY6pgH%2FLTiC6gtQJWsKlYc%2FlgbkmoEysbPvOCRoURu7R4rQzW5qbBUoZl0eyiCb%2BTIzP7G9R0qDQYWBfZnS0Ux%2Bt92fdNISwZODoEREXbz4%2FhUFNcwbF9CWiolSMiX0To9xUPniztPfesmt%2BrT2riENEFXC8u0FUPf%2B6ww3VFgLRiZhThq0mZeiE%2B38ogbOY6WbvsHv6AfnMNP4ToDxn%2FToqNo3goVNAqaO&X-Amz-Signature=5843407f7047eaed2bbbef631d35af73f3026d1207f93165e1c8d04e2e0d2616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEPW4XI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPyW%2BzYg8Gn1WxFASun2hHKPkAvQFuWAeOzjJKy7mUsAIgAyiGRHWFsYKh3W%2FcVdf0N4okr%2Fta8C3iI%2FeVWLySHH0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRjfbnxOdHb7uwbqSrcA4dP8VBorQh3uwtvcwyRXmSz%2FukCE88E9Z%2BIgl60kJuulTPUtNqenm106RX13VP0btXFNMlHEcG3D2D7umKGHiDwxQYGauGQ%2Bd6o2tn5sGPoWXyjG4AnZvl0rvRtQ1%2BVwRY3n%2BsIqpkzHx%2FpQw61JNFSO%2BK6eJfXHbVbjLxpL8BncOATciG55X5Pd1SM1KcnmPjAbgEalVZ2v7V%2Bc7znH%2FXG390LVhDzoQ75uRavtF%2By5q7OZPfnjd9%2BozHtesICjpHCD2bGpl%2BkblxSNQGunKX0dnqerfp3dtcfTU1fUN%2BHPD%2B9Xh26%2FVdJe%2FHpPC4ipnZslZPIrgDI1tTPi5Esu0JWLfl9AyFUh%2BCimQPmfU%2FNzLdlyAYdgXInav%2FPC%2F%2BikeMfDjpWC0itRAP5Du0U%2B8AVm7a166YcNo5In9wXU7UaxqPuhfbQKslhF75fglF0yfxIo%2F6MAMHP0ugd8%2FofdSUH24z4Zztz%2BIHKq7PzIPHlm1WEHo70soM3va5jFFMrkIqfCHi0kV14Lj9AgCquOrUv%2FRHXcQZhoJgqRwl3qJ%2FEYAYZviexMfLZQtIzf0njANfTMbqnV0ahWja18aY%2F9NSed2iU33esaTdlpxzHFFMvACPdLjNPqjewLQctMICl1cIGOqUBEdq4siwzBQk5nWNRED0hKgSY3I2%2B5vRKC3PtnNXag2WWUFQUMCm2RcB5ggO01Kj5%2F1iekE0AXDRkmdL8O4ygkxU7EjjqN9z9PSt566UlhVcsw3G0qCTFlieajvA%2Bh3COrbjvNc2pIIgfe1YK%2BzWXjy7ojYyldBAdXZ4DgpvwM8OYya8Cm4uluvDqSXxeszkpZa%2F%2B%2BHgZjikkMivIkWkTdiqXwR14&X-Amz-Signature=55e2576d70c1f2e9a87f860108e21f883e561a64acd8e1b6dc0c76ea65638f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
