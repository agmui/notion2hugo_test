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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK55AGBZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWNH%2BCbPuBgBZVr%2B4M%2BikA27ls7zVMiTqIzAWCeYceLAiEA%2BWu6mZJhKjOp1h%2FJA6Xi4pYNuBMHdOWxjLi9BLfuVAoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdwI42j9z8WGv%2FODCrcA6DylOasYSIPJ%2B3RjqP1Z4njsEbnxQmrPSZPJH6C1FqQ46TcCxNVzCQqUmRRDwtEp%2BlSCbCqY8uxXWyKSbHkqMac1iIa7ojBrdaaD2XSzR4X%2Ftd945w7FmW0kVvDJxv4P2qxWN6O2qArXz%2FwP4LJgmuCJAhj9QTOwpLdIU%2FTDRdrf1AZ%2FgeM10%2BBKVZNKPGFrcWtxAiJsAN%2BjiOVb5Nz6ikGO9CkgQVtjEwQV2idLudWX3sXQvNP%2BiGlsW6ytWILvUcqEVsIoGk27pqocijxSzFe6dZqL79vquDNmGqvsimsxlSpJ0Avj8zm%2Fbnmz0NGuwUPnAe1nB9DvX%2BgR7SrIxgd9nxYmX2eRAfdY%2BNg8tEPKDRdK5ggiZJRW7ycmu%2BtHdl7FENmq%2BV2k%2BknXQdNqFkM%2BmUSB0QSomD40ulYtwEBwddYDty1n1uNBkv4my3%2BG%2Bl%2FEJLlCpj%2FClmzcPP7Stf8whKs2qN6CBALdZmegWf7lW0IDUurfAq4UG%2BlNffzR4cls2xswZZ3HRfbh7BmREyfCCs%2BrVNZHw5d%2B8Fy0bW41YpuymveiLoFkvKZRM8kjAJtCbhe9bR%2FPXFuu9YomMzE6lnVeo0gZ2%2BEEsKCQWjSvhB6eZ%2FxuDmAlFihMOPu2L0GOqUBwQpjppWicLv7E8b7ADmugEvrIk1kPBFB8tetzLAKZY9wBGe9GAd0Q7ZoBgmQ3w%2F1ixrq2nF4C5Z0ZBOuVwiahvE6q7CGiKBlZsoN5JRMEA8tR5MY1SRi1DyZpaqahEiGCeijeFu0yIj3wHLKP6smcBM%2B%2Bx%2BIOWtsTi2D2DOcETzkqBoNtz%2FRMVyD9aKLPzvbyFKJsvbaAY2oIRcv4czrc8j%2FjM0B&X-Amz-Signature=f23a80581622f26c6606908d46aa5894b46fd8b0435f72d2ecc6daedb5fd7ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK55AGBZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWNH%2BCbPuBgBZVr%2B4M%2BikA27ls7zVMiTqIzAWCeYceLAiEA%2BWu6mZJhKjOp1h%2FJA6Xi4pYNuBMHdOWxjLi9BLfuVAoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdwI42j9z8WGv%2FODCrcA6DylOasYSIPJ%2B3RjqP1Z4njsEbnxQmrPSZPJH6C1FqQ46TcCxNVzCQqUmRRDwtEp%2BlSCbCqY8uxXWyKSbHkqMac1iIa7ojBrdaaD2XSzR4X%2Ftd945w7FmW0kVvDJxv4P2qxWN6O2qArXz%2FwP4LJgmuCJAhj9QTOwpLdIU%2FTDRdrf1AZ%2FgeM10%2BBKVZNKPGFrcWtxAiJsAN%2BjiOVb5Nz6ikGO9CkgQVtjEwQV2idLudWX3sXQvNP%2BiGlsW6ytWILvUcqEVsIoGk27pqocijxSzFe6dZqL79vquDNmGqvsimsxlSpJ0Avj8zm%2Fbnmz0NGuwUPnAe1nB9DvX%2BgR7SrIxgd9nxYmX2eRAfdY%2BNg8tEPKDRdK5ggiZJRW7ycmu%2BtHdl7FENmq%2BV2k%2BknXQdNqFkM%2BmUSB0QSomD40ulYtwEBwddYDty1n1uNBkv4my3%2BG%2Bl%2FEJLlCpj%2FClmzcPP7Stf8whKs2qN6CBALdZmegWf7lW0IDUurfAq4UG%2BlNffzR4cls2xswZZ3HRfbh7BmREyfCCs%2BrVNZHw5d%2B8Fy0bW41YpuymveiLoFkvKZRM8kjAJtCbhe9bR%2FPXFuu9YomMzE6lnVeo0gZ2%2BEEsKCQWjSvhB6eZ%2FxuDmAlFihMOPu2L0GOqUBwQpjppWicLv7E8b7ADmugEvrIk1kPBFB8tetzLAKZY9wBGe9GAd0Q7ZoBgmQ3w%2F1ixrq2nF4C5Z0ZBOuVwiahvE6q7CGiKBlZsoN5JRMEA8tR5MY1SRi1DyZpaqahEiGCeijeFu0yIj3wHLKP6smcBM%2B%2Bx%2BIOWtsTi2D2DOcETzkqBoNtz%2FRMVyD9aKLPzvbyFKJsvbaAY2oIRcv4czrc8j%2FjM0B&X-Amz-Signature=b6c99209c029dee0a466a8d73dde0ecea34cf92fbebf604d1bab88243220cb1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OEO4HBL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBF9vEPP9a7rVFBS9vmImYU%2BM9AL%2FBCUTvF%2FEdJMw%2BZ1AiBsdvmjuGVhhxLRmCIxqbVUqnwCqZmqBSil%2Fs12A5eK4yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ3AZk%2F5g%2FSdsq%2FlTKtwDMQ3KN5%2FtC0UQ7WfRhHVp3mdAkH4XbwySjUK%2BzDwmSrV%2BV135zhg4qxHfSuhC2EGv85D1LlsQfkZHWczoQx9bkmqSzwRtmPXcUoM5mB5t23jmtsArxDanoiRNVyZ8kqeLg9fVPuD%2Fr7EmaHFJbTrWgoywhI02Ho32Og1uhlItGyhh%2FR1lij1Osx%2B%2FlyMsPbwH%2F4Fq39UDGUEmoF7n%2F88hvuwtA3tfWnHU4jCP4INLPwlECixsJksR%2FpmtV12JYbx3MlT6QQkg9qXVivYhrNhQmP5POgg5vNOx3zohFUQKkLa5Df6LsEDLx%2FAq6vG2JqbmW5MfZ4yhcsthI1pW0edwQrP7XjR71RxClN4bn1w%2BezqRgQPFfnUS8j5VLAhn1ANSV8rz3sViOly%2FDdzK7Bz2cWhMpz2ZqE9dudQuf%2FhyorLGAo7PUUCtrboaiJ545YvZW04o%2FSIfeNiD5FAJCSc76cWomPu83LdBGr8OnMmn644jjmw3A07o%2BeSzwKe9dA6PbVzt81JWDQ1EquD10V7OMp68CoA9qvtR73W3h2oqxK8hMFN8RxlqFSKSiUp7lIQ9RNEZndvtPZsOB83ZKo4XOv2RM71I%2FaBpe%2BH4f9D7PL5mX325tipizU%2BkG58w7e7YvQY6pgH7cIp5b5pQdT3J%2BMcuK2O6VHCxvNWxAfGAiRx8W2katcSZnjlXhaUBWVSizwnN%2Bn5EAke0nAeOaRD%2BK5bQD4t41Se%2F0MBRGOzlCDmZtgN1jvhCgyO2IpuBBd3XyGovdIAEhiCddrxJOdLqer2aJ84TzUKvXTXF8k3cKPyTbGfP%2FEhCyljyEu4CxU5h2%2B%2BAnWWMim0ktsAoAPzf647u0uc%2FMi3ikoZt&X-Amz-Signature=361e5069148bac9a9940cb9aa2e25b17057073ff418b0023b415cfd0c925e64f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XY6BLN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQ9FmqtJkIcmJrXO8dWUC8Xup6WhWpssI%2FcvkrvkSjfAiBwiWFROhX79%2Bev8UF2GD96b0Fvjc1KCDgx8qAok4YqSyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWNG%2FbwZiiBOxVnCcKtwD2OuIisOB2b07WDFnYw4v7lxvrBApeVODTy0R53XSiNOe3g1JPjMx6jSLRz36VNnyS5hZnaSu%2BzTaAnn4%2FDt3grJ3c6YiduVcbikSc%2BWuNxsBEqI5rGaIjZQvgS7x0R93VSFj%2Fd1uDgSyiKVK4ZwB8kavxGfqCy4owwxih081Q2BLDtFQYLt5aReH7%2F9cZ8XrU9wNv9%2FwfpaolWWq1DR5Oo6k17EK%2FKhjRR6xUXCZc1SHrYgxt9qTdp%2BQpZh4BNXjA2BYt%2B1XacL9b9JHlSiu2ycMtFexjfhyZvVJIXIAoiSrgN8h8VKMorx5LpXperk5dd1coKaiuqBN%2B9s87hq1ybO7yBGx57ypBvqXZmsytxs9ff%2B%2FXnQYPlQ4O%2FuM1w0wXS%2BgEgKvO0mBFe9ODzPwE3ptSSLi3twsqmS%2FSgI2F2a%2FcD7GNvI%2FZcZcwGP3N9ipXiVhd2eZRfWXR%2FBWeKPaPRMCF0eGQhODrj47AwQsKGSMdDWo6Di90nY5aRr0M4XU01%2BDdRy9DbsfHj2rNzO5GWGqvYpeWbt%2Bath4oE%2F8behAxCUPPWHXcIHoV1%2FDr%2BdmA8bDJoRBNm8yR6YVpNEMzMvXnKsEKjU2xYMDHWuzLePg3vtMK03qkYIu0lkwou%2FYvQY6pgHQtMPo0iyRp4Q3T3OgAdgZZ4I6l4BgkQcNzLJHcYnXz5VOaCsJJXf9VUd3UtsnCMEpvpoXFwoFohXQwx1PBwU3sxfqsSsFzC%2BVaQN73d3aPqr6MpPcPvjomEIIeiD6eGhKxvAlFPD8RH%2Fct29znPBb%2FVMiG3rw7EpGxjUUTXIRfOq%2FWwMBOwZuj8ZhDuJndhyqcbwRo93l8Swtck2AcwaH%2FU6yarmV&X-Amz-Signature=d1553a143e16dc067bcc297e0358e5dc59ff55c8c41dac02213dabd8df1f288f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK55AGBZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWNH%2BCbPuBgBZVr%2B4M%2BikA27ls7zVMiTqIzAWCeYceLAiEA%2BWu6mZJhKjOp1h%2FJA6Xi4pYNuBMHdOWxjLi9BLfuVAoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdwI42j9z8WGv%2FODCrcA6DylOasYSIPJ%2B3RjqP1Z4njsEbnxQmrPSZPJH6C1FqQ46TcCxNVzCQqUmRRDwtEp%2BlSCbCqY8uxXWyKSbHkqMac1iIa7ojBrdaaD2XSzR4X%2Ftd945w7FmW0kVvDJxv4P2qxWN6O2qArXz%2FwP4LJgmuCJAhj9QTOwpLdIU%2FTDRdrf1AZ%2FgeM10%2BBKVZNKPGFrcWtxAiJsAN%2BjiOVb5Nz6ikGO9CkgQVtjEwQV2idLudWX3sXQvNP%2BiGlsW6ytWILvUcqEVsIoGk27pqocijxSzFe6dZqL79vquDNmGqvsimsxlSpJ0Avj8zm%2Fbnmz0NGuwUPnAe1nB9DvX%2BgR7SrIxgd9nxYmX2eRAfdY%2BNg8tEPKDRdK5ggiZJRW7ycmu%2BtHdl7FENmq%2BV2k%2BknXQdNqFkM%2BmUSB0QSomD40ulYtwEBwddYDty1n1uNBkv4my3%2BG%2Bl%2FEJLlCpj%2FClmzcPP7Stf8whKs2qN6CBALdZmegWf7lW0IDUurfAq4UG%2BlNffzR4cls2xswZZ3HRfbh7BmREyfCCs%2BrVNZHw5d%2B8Fy0bW41YpuymveiLoFkvKZRM8kjAJtCbhe9bR%2FPXFuu9YomMzE6lnVeo0gZ2%2BEEsKCQWjSvhB6eZ%2FxuDmAlFihMOPu2L0GOqUBwQpjppWicLv7E8b7ADmugEvrIk1kPBFB8tetzLAKZY9wBGe9GAd0Q7ZoBgmQ3w%2F1ixrq2nF4C5Z0ZBOuVwiahvE6q7CGiKBlZsoN5JRMEA8tR5MY1SRi1DyZpaqahEiGCeijeFu0yIj3wHLKP6smcBM%2B%2Bx%2BIOWtsTi2D2DOcETzkqBoNtz%2FRMVyD9aKLPzvbyFKJsvbaAY2oIRcv4czrc8j%2FjM0B&X-Amz-Signature=46893ed2b5e02fa60dbf4a139a6dfae184886648924c6c980152127c2b19337f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
