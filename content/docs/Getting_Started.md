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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBOVO4M%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMxE8XcffyhXTBcJqsGlrniPXDiuIkYRbpOv2KjXnfgIhAPj5InVNXrNAZsOtKp9TDq2LfQJjvwwfrsvL0Q%2FPCwgSKv8DCBoQABoMNjM3NDIzMTgzODA1IgxMuRaJwugvn2%2FsKRgq3AMPqv71XdhtV8%2BJTwRoz7USH%2B1p5W2HP%2FagtQkinQt5ifLnEWEq3Pl8xWUfavL8iZzznyfGsKECv55tQ7Yxl0FN9c5GtxYBKfqd3A3QQb5wGlcd8QnWZ4xkqYH1A6qOCtRHcuBTwcnFPDdqGDSGm%2FctKJ3ZQ6t9DFmBrG8%2F%2F2Yr1NP%2FzfFQGsZq3GfDUa%2FTr5ghZ4OG5ZHZHKdviiRi%2FTczbMGEz2RO%2BFJkkX4kFwsOhsDytBXSUgbiqMK%2B8wTRHdwpT4mozTQTin04g%2BkJ844nYc3mkiIXUD%2B2fWcugQ5DYgLEjIIBdlXVZk33BvVWpxijBEql2ZgLPgNv61XdXCHp87RNLrlDA3B8f1MOH1%2Bb2WfmlqnNA34ay%2BQqRdC8EioIeTBs%2FOcl23R1Klkt10yiQzNUhvQK24kyi%2BZX6wxKeoMaCPVnwOvC7cLmgp%2BLK1JEsSyvEqY8miNcBQupyPhXvv%2BdykjvT4SEcLNpfxNNIFVQOJ%2BU332HsIxLwyjQbqOT8CDgKAix8zFRQ87O9XLGTzbLxl5vQflPWY8zMTkRH3fjkN%2FcDoh2%2FtyVvT4GRzVBPTNCnFIwHOq9y4gICec2yJNTvImhimRemSdU349SCpn2fl%2F%2FUYQbWWC1mDD2ru29BjqkAbFqn%2F0KbQicBaWdB9qaxa%2BX3UhTGhmywg%2FfErGfK1DmqRegTNmlSOc%2FmgoJ4YLKU5fQsBCapcreKEYSU%2F189KK0yQVZIvDpqwWFw6u4WUPX1VQF9mlVQYFKF19o7PfsagAR1DzSbOIykCIzPSDs%2BD3eYhiycbRDYPeBU6pb4LBVDFnVwSaUAmCOWXwHPvGQelWR6LY2ppoKCXgIfAph6HP6If2t&X-Amz-Signature=c2440045f0abf36af2b764c89a800504adc04626cd39d36a88fe50ab07b64a86&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBOVO4M%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMxE8XcffyhXTBcJqsGlrniPXDiuIkYRbpOv2KjXnfgIhAPj5InVNXrNAZsOtKp9TDq2LfQJjvwwfrsvL0Q%2FPCwgSKv8DCBoQABoMNjM3NDIzMTgzODA1IgxMuRaJwugvn2%2FsKRgq3AMPqv71XdhtV8%2BJTwRoz7USH%2B1p5W2HP%2FagtQkinQt5ifLnEWEq3Pl8xWUfavL8iZzznyfGsKECv55tQ7Yxl0FN9c5GtxYBKfqd3A3QQb5wGlcd8QnWZ4xkqYH1A6qOCtRHcuBTwcnFPDdqGDSGm%2FctKJ3ZQ6t9DFmBrG8%2F%2F2Yr1NP%2FzfFQGsZq3GfDUa%2FTr5ghZ4OG5ZHZHKdviiRi%2FTczbMGEz2RO%2BFJkkX4kFwsOhsDytBXSUgbiqMK%2B8wTRHdwpT4mozTQTin04g%2BkJ844nYc3mkiIXUD%2B2fWcugQ5DYgLEjIIBdlXVZk33BvVWpxijBEql2ZgLPgNv61XdXCHp87RNLrlDA3B8f1MOH1%2Bb2WfmlqnNA34ay%2BQqRdC8EioIeTBs%2FOcl23R1Klkt10yiQzNUhvQK24kyi%2BZX6wxKeoMaCPVnwOvC7cLmgp%2BLK1JEsSyvEqY8miNcBQupyPhXvv%2BdykjvT4SEcLNpfxNNIFVQOJ%2BU332HsIxLwyjQbqOT8CDgKAix8zFRQ87O9XLGTzbLxl5vQflPWY8zMTkRH3fjkN%2FcDoh2%2FtyVvT4GRzVBPTNCnFIwHOq9y4gICec2yJNTvImhimRemSdU349SCpn2fl%2F%2FUYQbWWC1mDD2ru29BjqkAbFqn%2F0KbQicBaWdB9qaxa%2BX3UhTGhmywg%2FfErGfK1DmqRegTNmlSOc%2FmgoJ4YLKU5fQsBCapcreKEYSU%2F189KK0yQVZIvDpqwWFw6u4WUPX1VQF9mlVQYFKF19o7PfsagAR1DzSbOIykCIzPSDs%2BD3eYhiycbRDYPeBU6pb4LBVDFnVwSaUAmCOWXwHPvGQelWR6LY2ppoKCXgIfAph6HP6If2t&X-Amz-Signature=5286086934c23fb3e1ba11ef2a2a89017c573541fd205f2336fce71bd7d46340&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QY6NFYN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjzMMydfs9m3bMkm%2BxIAAk3O2n6H0ICchP9ZIeIjTKzQIgYkWtOpzaMTCh%2FkjVnuAHbnLQt0Jd1dCJQrlUeENCdAgq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGtbNd0OaCguB1Vp8yrcAyRAHsAx%2BhMtt6mAuHwbmzShO%2BsgenXqZyjozP7y7sq%2Blr5vMQmQscwbfbGd5YdjhrdrJC6JdbvfV3NyizwhWBs1X6DO0iFr68iPnYfTYI7G0xlUN%2BobwZwybvaWlDkndJEd8QjrOSuJPNqQbBuZlvApmxMOZxNARVzJvgve8Lfy6CKUdZ3Rvv0kDQmD0dZFw0I4HIv6YUmK7UD9fac%2BbCFHSqckjyDxI3C3bKiiLJ1AI2Q9TYq0I%2BTADgihwE9DN2pDNn9BUbkuHp9D75fF%2F%2FhvAgVM0ZO2r4buZswPEaMXJ%2FPjTJiOyl9JQcKKKf3x%2FP1hwInTrkWYoXOVxM8rkj2jJWTR3idcx809gqxl4a1sqlQMRI8z%2Fx%2Bp6WOXxgyJzDn3NYYVThZPfKdzIMe9S4PKTMfjj%2BWw2t7W3wJMXilXdKfPDydGxFGglzOrG8Ldu8bUvViGXfh%2BTZvIbOXC9Fj%2B6kwfL5IsdL2bqS3CdtxKWSESXD%2BhcTH9gzcLOBTYH3aLJ85rWRglTAQmq6WOHEQqjGOb8V8IX3Gf7SAQ1Jfr23zr%2B6FCMzYjtyRDuTx9h1CMu%2FUAopxlIRBMz7YtpOhojZJP14Y8w8wAFGyS19E6cHrK2RqDXccziNOfML%2F%2F7L0GOqUBkXmoflp2a5V9YNgz2CRMxCWqUwGt1ig8%2BQYZr5pNpCgvZQs%2F57EySAurIxUPK2pcQG3o%2F8FTVJadrL%2F1iYPA2q6E1Z0uhinUPTsxuCGb2FDgrCjOqoNQiqR14Jyv%2B8sb2m49RoYrg0E7S23M8esLUzbUHyN4iQELpZUSuhY6lcg9k3ssPlVZSdRJUW0B1bWGCySC%2BXpTzDhfmwXHFeI58TkMt17%2F&X-Amz-Signature=f11d271bc3adb55a9b3ff12a63ecbed2580af1327539238f2311685c28fda6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REN3TDV7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXGQY4eh6fnYr7vEogYyAd2Zfgus%2Fl%2FhF5nhAZl8jgiwIhAKe3rgW%2BAVgf6vTREctM2rbxbvwyjRowsAPs2P89kaqDKv8DCBoQABoMNjM3NDIzMTgzODA1IgzctpVhPiK7Iot76L4q3AOZE4he0GxkqtMHRPBksNzbtuAIt0gw%2BVXIZ7metZJhM63EK1aymfNXc6OZjPUvWPjUbVAZYTDRIkgcV2qLgXIdsF5So43A9eh4fq9oUkdfxn1IZUsYOO6oEEOCx20LT17VNc4xI%2FIN%2F8NUwb1QUyVwx9tUgzuGNQBiMk2ANHA4lScxjTKQAa3QAJuA6zffNmjDyM7xWpLrX7D4YU3v12XFANBtgfx%2F3PeDmLyI7ZN9VXpKYIb2w5dgSC%2FSTsaI5JJOUt9HPOPeR2SaXary1tz5I8Eex128XvXsIpww%2Fi6ISQyV4XhlkNkT3FuQ0vxkdtuNv8%2FmXmNfmDF2E2stVgpgE9Sl8ZTmW2rYb7hvJHFIa7z2xONxg7guRethkqLRktIIVXHjLozcN0mANmTymMNQXdt9L9g2h25tFmVPrUxsm9BVMvvSl9BbWSmGz9TzhL8USQqxhRzlRDxk%2Bka4ob6bpiwX%2FsQXthAmRCEA1xRf25x4MepDSX1Pa4HltCQE0nFeLxUzYN7VtYVl%2BUg%2BGjBlyBXscsFibhvJbonXWaMiU33C79QzW5IFITtxMu86XpSaQ1da1z2JMYpRNCBugmTS3TQyVrX9QKYqb3hWCOf1T%2FnAe%2BccaiSG1RulcjDQpO29BjqkATiQrvGE6x4P6EziXAhFo74rvExcls69kKT3M1d3lsjJDQ0xYx3yBeC%2FUSchtDmMfY1yGmjTUxehBegzntbv%2Brm97m42jve%2B%2FDwIqs3uCKYMjL7PjPL68QFZTnqCtJ268AlJKTpQOU6KuZSobj5jlqpLDswirVU2xMxR06lAtYLz1MMzyOMZfN3fGcIpq5Y2YvQaAABUWlU%2BL%2B86IryCydWBSMF1&X-Amz-Signature=6011bf8f60c59d7e110cd307af3db9e928f955941aef06219ea1dcc8510382f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBOVO4M%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMxE8XcffyhXTBcJqsGlrniPXDiuIkYRbpOv2KjXnfgIhAPj5InVNXrNAZsOtKp9TDq2LfQJjvwwfrsvL0Q%2FPCwgSKv8DCBoQABoMNjM3NDIzMTgzODA1IgxMuRaJwugvn2%2FsKRgq3AMPqv71XdhtV8%2BJTwRoz7USH%2B1p5W2HP%2FagtQkinQt5ifLnEWEq3Pl8xWUfavL8iZzznyfGsKECv55tQ7Yxl0FN9c5GtxYBKfqd3A3QQb5wGlcd8QnWZ4xkqYH1A6qOCtRHcuBTwcnFPDdqGDSGm%2FctKJ3ZQ6t9DFmBrG8%2F%2F2Yr1NP%2FzfFQGsZq3GfDUa%2FTr5ghZ4OG5ZHZHKdviiRi%2FTczbMGEz2RO%2BFJkkX4kFwsOhsDytBXSUgbiqMK%2B8wTRHdwpT4mozTQTin04g%2BkJ844nYc3mkiIXUD%2B2fWcugQ5DYgLEjIIBdlXVZk33BvVWpxijBEql2ZgLPgNv61XdXCHp87RNLrlDA3B8f1MOH1%2Bb2WfmlqnNA34ay%2BQqRdC8EioIeTBs%2FOcl23R1Klkt10yiQzNUhvQK24kyi%2BZX6wxKeoMaCPVnwOvC7cLmgp%2BLK1JEsSyvEqY8miNcBQupyPhXvv%2BdykjvT4SEcLNpfxNNIFVQOJ%2BU332HsIxLwyjQbqOT8CDgKAix8zFRQ87O9XLGTzbLxl5vQflPWY8zMTkRH3fjkN%2FcDoh2%2FtyVvT4GRzVBPTNCnFIwHOq9y4gICec2yJNTvImhimRemSdU349SCpn2fl%2F%2FUYQbWWC1mDD2ru29BjqkAbFqn%2F0KbQicBaWdB9qaxa%2BX3UhTGhmywg%2FfErGfK1DmqRegTNmlSOc%2FmgoJ4YLKU5fQsBCapcreKEYSU%2F189KK0yQVZIvDpqwWFw6u4WUPX1VQF9mlVQYFKF19o7PfsagAR1DzSbOIykCIzPSDs%2BD3eYhiycbRDYPeBU6pb4LBVDFnVwSaUAmCOWXwHPvGQelWR6LY2ppoKCXgIfAph6HP6If2t&X-Amz-Signature=51909ccb01dff68c80574f93fc35bbdbc4cb64c2717c8b4e50fad308de701db2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
