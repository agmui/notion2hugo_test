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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZORH3T%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQGgTO9sFM1riswmTWgwRnmWnCxdzUcCjDKzpLdra%2BLAIhAO5E48i9Bu79Z5FbRUeUv973KuCWQ2ynLNV1W0fDvFI4Kv8DCBMQABoMNjM3NDIzMTgzODA1IgybL%2Fv2AWcE2RiK5bwq3ANsniihYfJJ6PnvLqENQ9RPapEkTPxmeov9gx%2Fd16artePe9YpeJXsc8yWIfEDUyj6IWJxGJ3ZSX1DBeUw8mnTJUhWM%2ByIc3WnSgrp1aQIDVMfSw33MMtY8p5d6dqHN1sNWE%2BgmxppNQoXxNsjOcddxa6HDD89n9F7RQDt%2B83qPzmoDZzGUkNB5O8YvfekkZU4z3upRL%2FzqdcwoB%2BB9B6Xm5SC24%2FfiVbQEJsVrSE5h4iHNMqujD4igwEWe%2FjTgWa3OLMHkJu4zC4x6xQ%2Fz2r%2Fl7YOSgR3GGBDkSs2UP5IWdYgG2TqiAMs4NWsyBV1Q2ayyXCGCW%2FE8o305iN6wSkQ0q8nmqZ1zyG5FmDGMItcVhFbGcieOy9GPMBSvM5iZvrvTL1m7cfklGGP6d8q%2FT0lFvweos3vXDaE8Xl5C3Rlo0WsFekty712egZqSgu2Kk6A9WIoeRgajCDZX1NuahvaktyVWk2mUxp0UP%2BJ2fim507d4i%2FQBycdUv1Sp738Hc%2BqdvAG%2BHT2ZxQE8antFJW48sdKKncS4Aj2L7w8pnUmTsJo4pZi68Yhsi8Syd7dR2HAw7VvyW4CvaqZm6fdfruBJfOiX95je1KNSfPkG8OQEk%2BRtnDD36Yr1PAtKKDC85Ou9BjqkAaA3wgWq%2FY2IWixRT28%2BxtcOckOk8r6waPh3x5ZAfTR2N3uas8ecZ3TucU1dDn28JsILa3p%2B2SIWWa3MxosO7vAFa9xNiLsQrE3u4VrB40qZpFvSOuz8FUFyAh3ewbjHf%2B1iHw3gr9FFqAlOKhX%2FPr3FNjGTKc3Jl0oFBwG%2B8IuZ8l%2BwGaxsF7KsrUCwGgKZ4v%2BDtnBZ2QZOuHlrWW7bzEohI2D1&X-Amz-Signature=d1f48a7a38fde1aaf5d11ce9b17e7990349e17264dfdbd940dc341f79940acfe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZORH3T%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQGgTO9sFM1riswmTWgwRnmWnCxdzUcCjDKzpLdra%2BLAIhAO5E48i9Bu79Z5FbRUeUv973KuCWQ2ynLNV1W0fDvFI4Kv8DCBMQABoMNjM3NDIzMTgzODA1IgybL%2Fv2AWcE2RiK5bwq3ANsniihYfJJ6PnvLqENQ9RPapEkTPxmeov9gx%2Fd16artePe9YpeJXsc8yWIfEDUyj6IWJxGJ3ZSX1DBeUw8mnTJUhWM%2ByIc3WnSgrp1aQIDVMfSw33MMtY8p5d6dqHN1sNWE%2BgmxppNQoXxNsjOcddxa6HDD89n9F7RQDt%2B83qPzmoDZzGUkNB5O8YvfekkZU4z3upRL%2FzqdcwoB%2BB9B6Xm5SC24%2FfiVbQEJsVrSE5h4iHNMqujD4igwEWe%2FjTgWa3OLMHkJu4zC4x6xQ%2Fz2r%2Fl7YOSgR3GGBDkSs2UP5IWdYgG2TqiAMs4NWsyBV1Q2ayyXCGCW%2FE8o305iN6wSkQ0q8nmqZ1zyG5FmDGMItcVhFbGcieOy9GPMBSvM5iZvrvTL1m7cfklGGP6d8q%2FT0lFvweos3vXDaE8Xl5C3Rlo0WsFekty712egZqSgu2Kk6A9WIoeRgajCDZX1NuahvaktyVWk2mUxp0UP%2BJ2fim507d4i%2FQBycdUv1Sp738Hc%2BqdvAG%2BHT2ZxQE8antFJW48sdKKncS4Aj2L7w8pnUmTsJo4pZi68Yhsi8Syd7dR2HAw7VvyW4CvaqZm6fdfruBJfOiX95je1KNSfPkG8OQEk%2BRtnDD36Yr1PAtKKDC85Ou9BjqkAaA3wgWq%2FY2IWixRT28%2BxtcOckOk8r6waPh3x5ZAfTR2N3uas8ecZ3TucU1dDn28JsILa3p%2B2SIWWa3MxosO7vAFa9xNiLsQrE3u4VrB40qZpFvSOuz8FUFyAh3ewbjHf%2B1iHw3gr9FFqAlOKhX%2FPr3FNjGTKc3Jl0oFBwG%2B8IuZ8l%2BwGaxsF7KsrUCwGgKZ4v%2BDtnBZ2QZOuHlrWW7bzEohI2D1&X-Amz-Signature=4724ebc1f61ea4e084508036f06417bcc2cfa0d75eef61db5bdbbacfb1603d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5ONIOW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNeb%2FosupLXu3eO8QqIlD400vFwZbwdrInBkpXacPkAAiAsAP8xjRv6cCPSpb1dDi6J5ZMGNirPuQnXUvLS6kde0Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM1OJdCdro5AChoS4WKtwD25mVrgZl6wlzTrsD%2FAAgwxo8RAUiQ5lJ6MCrzrR83aXBXVjSXuAglheP%2FVHOYE6bG3xw7IjceZWrrTjec9VHX127Of9Oe5tfzPCxh0UXsAN889iauCFG%2B0fWRxps4yA0MiPhgo%2BETPekKhO29igaEAD0X60sJ5Nw0GIuJT9CVnqwjf4ZhvZ6Wq52z5dhhWktcKPUuqOM40EVBQcsC2RHH7ZORMd5GtMMXDZmODk7ieD0eICVIiX6jSFWCqq2to%2FRcjkDnF94dg3OEVN3V5t0jP3yCd9sS%2FJ2MtJxC7y9STAyeHJTOndMlkJYASSTavysvgdwolLsWLCDoteKX88j0ZNsJa6rkkBhkUxNrcTxNzDtD%2F%2B1SVOLAoux%2F6nSbfLP1GMDaPlSfV043PNw1Q1JOkT%2BaXS8rm8e7NSSSAh1gP%2FTqozFx%2B15qDCJSJXIPHhiY%2FcVArCL6UkP1%2FCGrsfRo4GIjbewgass4PAiTWmTR%2B9%2Bb4e0JCmQz7jXeoNA0Hjemvo6AZnyCU5xh%2B3o18OqFlh9k9j8uhE8XFscVGZrmfJvKNjjOkJKUWj2hwGFprDPzNX0ccX4yW%2F8tp%2ByDWDZFRxi2bkEBEERVa7t8%2F%2FJj7Z0IxaXsdRHLhW%2FiIQwsvHrvQY6pgHZ7seNmesAKL5g50yMpN3aujTh30QiUd6gIVN%2F0f7IbTM%2FQB26ZJVvoKpDnvms%2FyQNzONmeX0gKtJol%2Bnd3WrhF6n7omOLCGvthB4VUHICOEQ3xOq1n00WVz%2F0aqHMqHsTaab0jFFFF68qmTYypQ7xuMl0D3gyd7%2BOn4LJg8vWG%2Ft5XY1HJXV%2FYXSX%2FLB94GjP88xuQ3OvZlZ3Qb2p%2BRI0zjakWfMN&X-Amz-Signature=39d2624b61850dd0789d50a34adbd5095542819e16d5f40efb78d20bd2879ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZHH6ES%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn3Hm0futUJoGqhRw3qg24YcvaPdSpjrZw4zZOGBYlrAiEAhXKSQ6RkKUIPuv1FUgXONAsjdYUD0UfoEowzm5Fex%2Foq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDI%2Bi92ag9uMOlj8DOyrcA1xmzKP75gJOMYBsw6Fef5pZWzLDrGoCPLpcXQngOL0Ny6qmjoUsYH6Cco06k1TedSATCNEEyejonUhHTrY7X8rgRm5BrIjSRA9dHBAVoEqK3aLWwHSwGJ2wAYrHkd0WNSHCxNT0Vonhfogxc5pnZ%2F530N38IXxXitkWEe1GkI0au0PtAMdqkmOVpfPKvY41Zze25hMCjjPBYum4QlmE67az37nQyUk%2FmITvRTVml0BotdZfYkOZQV3z%2FPmidf4FZomxEJYEQnTF0jxCo%2F248WN5bqkdylVC67cCFmyojKybQvPKrzBNeUNTpJ6yacO7Zm%2BhpVHAHSQ40yuJuOTy3skofACEWlnonPQca4xwh429W4dpMDqmHbc1V9lcDtVZUaqodle1L%2BT8oONOXTcpAEQJqw09qcvWPoiZSDL085vpyrpLBpKtnr2C2pLe%2FWa%2BeT2GSZc8ta3w8Lo4kMGttIV2UAt8qlflZ8g1abNIOBDM3cMN%2Btvsx%2FG5j%2FCZQAOyasEm8CpEgBbG%2F%2B0s%2F3G2ot8SOGgJB%2FFZE41gtPCpeSZ%2FtL2VVJRDGky4%2Ffr94fuBnV3vKXZSCS2ZEoxpLL0DdITq3czc6gEKHceJimWD4smPmOEOjOuzAT3f3ABJMO7q670GOqUBd%2F44Hb29wESdqr00DONo7v0u2Xc8xRJ4kXOkq4xRVF0NU86Q84rGb%2BGxAWoGstx1THHWvv%2BeN%2BFAOdBbLS%2FOma4yDa4xG%2FJmsgJy2btgfcuanNpN1idA35MRKw%2Fo%2F2AmAbtzp%2B31lFix1On3icNcFdIklYskGdRjfZYzCHHwjj7dxdbMLJzdRWxQqUvgaeU2ZFuOpI%2BnMv7ioQw0p6t2AZu5kcIX&X-Amz-Signature=7d5e32def42dff6c6a4b3e1e1968821e2efc06b7490bdfab9dfbec51810b7d39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZORH3T%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQGgTO9sFM1riswmTWgwRnmWnCxdzUcCjDKzpLdra%2BLAIhAO5E48i9Bu79Z5FbRUeUv973KuCWQ2ynLNV1W0fDvFI4Kv8DCBMQABoMNjM3NDIzMTgzODA1IgybL%2Fv2AWcE2RiK5bwq3ANsniihYfJJ6PnvLqENQ9RPapEkTPxmeov9gx%2Fd16artePe9YpeJXsc8yWIfEDUyj6IWJxGJ3ZSX1DBeUw8mnTJUhWM%2ByIc3WnSgrp1aQIDVMfSw33MMtY8p5d6dqHN1sNWE%2BgmxppNQoXxNsjOcddxa6HDD89n9F7RQDt%2B83qPzmoDZzGUkNB5O8YvfekkZU4z3upRL%2FzqdcwoB%2BB9B6Xm5SC24%2FfiVbQEJsVrSE5h4iHNMqujD4igwEWe%2FjTgWa3OLMHkJu4zC4x6xQ%2Fz2r%2Fl7YOSgR3GGBDkSs2UP5IWdYgG2TqiAMs4NWsyBV1Q2ayyXCGCW%2FE8o305iN6wSkQ0q8nmqZ1zyG5FmDGMItcVhFbGcieOy9GPMBSvM5iZvrvTL1m7cfklGGP6d8q%2FT0lFvweos3vXDaE8Xl5C3Rlo0WsFekty712egZqSgu2Kk6A9WIoeRgajCDZX1NuahvaktyVWk2mUxp0UP%2BJ2fim507d4i%2FQBycdUv1Sp738Hc%2BqdvAG%2BHT2ZxQE8antFJW48sdKKncS4Aj2L7w8pnUmTsJo4pZi68Yhsi8Syd7dR2HAw7VvyW4CvaqZm6fdfruBJfOiX95je1KNSfPkG8OQEk%2BRtnDD36Yr1PAtKKDC85Ou9BjqkAaA3wgWq%2FY2IWixRT28%2BxtcOckOk8r6waPh3x5ZAfTR2N3uas8ecZ3TucU1dDn28JsILa3p%2B2SIWWa3MxosO7vAFa9xNiLsQrE3u4VrB40qZpFvSOuz8FUFyAh3ewbjHf%2B1iHw3gr9FFqAlOKhX%2FPr3FNjGTKc3Jl0oFBwG%2B8IuZ8l%2BwGaxsF7KsrUCwGgKZ4v%2BDtnBZ2QZOuHlrWW7bzEohI2D1&X-Amz-Signature=839e6211ace0ef58aa6b5bb97b5f5f4b4c164130d86bc4c89d711a68291c7d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
