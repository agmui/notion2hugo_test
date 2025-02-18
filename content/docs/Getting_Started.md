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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHE45NO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCaaa0lUnFhuNfh4LGH7U9pUuGkxLaFHVuWqyEZdj8%2F8QIgCLpsG%2FATMh92TbO%2Fz1n9x0d6r3dygJLcpDMOj6HFVVsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNd4KhYQC%2BvWVtFgGCrcAyXrqXMaA7cnst2DejMCwaM0xo1c3ENvwDXOQ%2FSCCkxod2tKsCHoT49S%2B315nQVrdiPldWOXgku96QHBv5TLzBMDef3Vk9dODeUM3TVwnPsqBXU7oFUD1o%2F59fePF%2FxB4BJ1i2l3iim%2FqplTkwBh9ipdLWQh9%2FTBLuFKR1fZ%2Fy99ERir33LBR5XAcMUck8NOtWa%2BptrhIuMr8LOTa5QN6yoZ83ZF7cR6BYFQ48fKzHdQmKEncvD5XcE183eBVrdBcVtBWnrN6%2FXEHpcd98Fu4z7fjwAWecMmWEXKuOVVx%2F%2BSuYZ7hbamtGYp4xHZzU5uvHcmyeWi4Dkuc3ZvgH7GlDyDNuR7D0X9pmxXnfKiXO%2Fm7ZV7gCdA3XWEZQVbC2k8n5c6UUZ89Ggk%2Bpcy8KZlfSl8xvGYBTwST81lqEFXEJBX4cRioTMw%2FIMH6O93NTu1D%2BidIT8zb416Ih%2Bwy8FJcQCORhGo10h5dtEXOh3qbnDWJcZIVyGK9Tz51oSFpNrAU4Da76CNXwfvxL3nHujr93Jo6UMuoZuCGo9Ywy5b6icY%2Frj5ioEzSyDUgbFahrHWLrACZ4we0oEOTwsCc60bu9J6%2F7ncljs9Ua9P8fI%2Ba3QOT5EMB6QuY1k%2FObQKMPvZ070GOqUBStOPm2Dj3D6LeN8feZPWK5UJnlHgp7ZY0P%2FeKsFh0xNJ8HP%2B%2BobkWD8ligI9xfJAkSKoovNrYih%2FZHRxBSC18qcIN0tq2qJLfh6%2F1fP6phKxeSZeaswTHecrJD0q%2BgIXlteVPw3d12btXTPus9mWeQ8Si19cWHsvv0edVopqXGQhwFgrLOpQI%2Fr1hWs8zbjHYpFFE4HWMoke1wMaMsg0f3fzCMpi&X-Amz-Signature=bb96182e15a4433dc5967825adbc68e79944526185a9dcc13ab3d05f05145280&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHE45NO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCaaa0lUnFhuNfh4LGH7U9pUuGkxLaFHVuWqyEZdj8%2F8QIgCLpsG%2FATMh92TbO%2Fz1n9x0d6r3dygJLcpDMOj6HFVVsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNd4KhYQC%2BvWVtFgGCrcAyXrqXMaA7cnst2DejMCwaM0xo1c3ENvwDXOQ%2FSCCkxod2tKsCHoT49S%2B315nQVrdiPldWOXgku96QHBv5TLzBMDef3Vk9dODeUM3TVwnPsqBXU7oFUD1o%2F59fePF%2FxB4BJ1i2l3iim%2FqplTkwBh9ipdLWQh9%2FTBLuFKR1fZ%2Fy99ERir33LBR5XAcMUck8NOtWa%2BptrhIuMr8LOTa5QN6yoZ83ZF7cR6BYFQ48fKzHdQmKEncvD5XcE183eBVrdBcVtBWnrN6%2FXEHpcd98Fu4z7fjwAWecMmWEXKuOVVx%2F%2BSuYZ7hbamtGYp4xHZzU5uvHcmyeWi4Dkuc3ZvgH7GlDyDNuR7D0X9pmxXnfKiXO%2Fm7ZV7gCdA3XWEZQVbC2k8n5c6UUZ89Ggk%2Bpcy8KZlfSl8xvGYBTwST81lqEFXEJBX4cRioTMw%2FIMH6O93NTu1D%2BidIT8zb416Ih%2Bwy8FJcQCORhGo10h5dtEXOh3qbnDWJcZIVyGK9Tz51oSFpNrAU4Da76CNXwfvxL3nHujr93Jo6UMuoZuCGo9Ywy5b6icY%2Frj5ioEzSyDUgbFahrHWLrACZ4we0oEOTwsCc60bu9J6%2F7ncljs9Ua9P8fI%2Ba3QOT5EMB6QuY1k%2FObQKMPvZ070GOqUBStOPm2Dj3D6LeN8feZPWK5UJnlHgp7ZY0P%2FeKsFh0xNJ8HP%2B%2BobkWD8ligI9xfJAkSKoovNrYih%2FZHRxBSC18qcIN0tq2qJLfh6%2F1fP6phKxeSZeaswTHecrJD0q%2BgIXlteVPw3d12btXTPus9mWeQ8Si19cWHsvv0edVopqXGQhwFgrLOpQI%2Fr1hWs8zbjHYpFFE4HWMoke1wMaMsg0f3fzCMpi&X-Amz-Signature=4c5eee41ffef7ea7b9780aa08a80ea6bedda4c574cf652641da5bb0092eeaa02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6M5Z7RP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCa%2B1MO1iH%2B%2FWqn9T%2Fp4bJ9W5r6%2Fu6AARg0M9QecMsivgIgd5knKV5v2cz%2FjOKW8tJcWCqyhnrk4UBG9KXN5l2zE4gqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF77O9P33lDPZ5%2F0myrcA6xpBcKoHBltcrVmgfJXM4AbOc4k1RZdUAIuphWbB6XfRRp85b6h4mEXGoFDd9jwVUFOlU8ixWuVOA%2BpzrjTH89wLKl9xSIeAHEuFLW7AolAeAcxBrQ1i72KwFl074jRawrVN7rNsKZWRr152oy7eowaF7DgpIojmwBXIbz%2FBRKgWS%2FtPZo0vrnYRojwuyYAf0VuMXk8hD8aKCSdd%2BP7pS6p5vSxmOq5bpVpLo9M1EO%2FGwKHCwI8YYgL2X1bHbxo9dxFv35QaDVxx8erVwdE5FZma8QSE70Dq9xNDqpc%2FUJpiUXE0y%2FV9WWoHDEvFH9zrxLeQXFeViSsPkXvcv4Y%2B7Tr3FICNJNzuD%2FdZhvqgRivmxLmbJVsAgg%2Fif6rA6AAp9rSXWgMAB7Cjff2wY09VGi3TqY0dfXG44IjKigxh9Rc1PuSqZgHF4apultnuPKob9p%2BG%2FcZ5Qo17VmzKbhwD7%2FVXpU0cjTgEutff6sJQd440x7iFGgU6nzlZZNQyRO%2FV1IufFo8aZibd%2Fth4eT%2FyXV%2BlLJrTgUwKE9qcQUFQbWGvTS9bGXUA38fGq5wRfnwHwAuptxrlbQeFAEHUB3Wl%2BHq%2FgSjDWwwo91fijALWIqR0NCxYD65H2h%2BBogcMOPZ070GOqUBcBBGTOUdhStNHJMl1MMIjvzOwZleLfAlAmZiLd%2B4F03WSvOTAxMlrBbvZ%2Bs5ogWRjZtJ19iraQA7UJTN3f0EBc9IMn5ec8D%2Bz3AoteqlN0QguBH11OdS7gALcEUhmw4LlPj%2FZ8TA4RdZWCm3JOuoALyhMsfryuqobr1Exx6qK56sysdaJbbPk332OGeYuevh51M0gVz%2BM2RK1lvjAa6ZAaY4uzga&X-Amz-Signature=a61f1a04305c8d5d91722afc3eae8da12db64a92c2aa2819fa16e8f72508f8da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLPUKWFH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBb2nuBBbQYqaSrQzpQ00hgaNRwMT7CC%2FMRgGaQI1%2FrRAiEAtzshUm1DsWrtlUGHSa36ICKXTmZXLxay3WJmZe44afIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyV9HZ8cPUbG4%2BN4SrcA8QIcPURlQvdxvnRziH7WOKFbhw9vpObUr9L9L9%2BS%2FtCx171fQhjoSjY%2FiX4g%2Fx8f5igkWBJeb5OKwTR8qP6L7ET9hdYHx4cYZwDBiGkcJk3vBSuSItlWmMYvp%2BweptMGVAr8kUHebV2gfwYKADa46ylqiUKcLkbL0N04Sumr9JmM1Fer79aOZTNujETK3etvlRAH7cTWFEETgrzTNnHRyVUxzN5CFkZCkS8Cyr9BeLWbyjpn8D3EthOW20SZrGwoKiLd30AP6e7ToaM02rQiMmeWaog4dg5lGJGviurc%2FFQFrO36gRJheUJUtIiorj2iCM%2B74lRGIF3pHDSXz7t%2B9Ph9QSw28nKZ%2By%2FYAzyjisWDrJIGqVvl2pespVP1NcTeKEsHkrqGEsX1dJ31ezN1arP0K0R19h87MWkz2%2FDrmDnr2USfT0kdkjN72fXNyLREugLBmuyxhYYvCGwLQjCNpQ%2FMXK44eU0ul3mRRZWerWvRgOYvm%2FDGHXdTerHry4ADOWFYqYg4RmSFNuzabIjWVPatFvzaknm2Kg47U26Egux52jSyBu7AUoRzS0q9p6TKdzdyHv05acfAdcaVpMoesPfveXNpJmdvW4qgRQp4FYU%2FZEbcBN9wXYWM9ZFMIDa070GOqUBf63ESDKPYpUm1Q%2FKGl1iyobhmyw%2BOs18MmUSkzTARveA4VJRwsiQkaJVmFyAsygD%2F8YeXi2MZB5RkbbaMjF3wyHkyZFd2OdqX5wdZtaZ6crU1Q6HMQgKHLHWGufCPCiBkh8sNwnAC4YbQjKkKja8YGgaYGqlUP4O%2FjhANEZSrRbt7JjjlCXYRrGAlOL%2B2c5%2F0DWD6wTBCQd8%2Ffwm4nYIeTycBCdL&X-Amz-Signature=973609c023d694cf443687ba9c7bde6543561de14ff5955eab33c3c14e1bd95f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHE45NO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCaaa0lUnFhuNfh4LGH7U9pUuGkxLaFHVuWqyEZdj8%2F8QIgCLpsG%2FATMh92TbO%2Fz1n9x0d6r3dygJLcpDMOj6HFVVsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNd4KhYQC%2BvWVtFgGCrcAyXrqXMaA7cnst2DejMCwaM0xo1c3ENvwDXOQ%2FSCCkxod2tKsCHoT49S%2B315nQVrdiPldWOXgku96QHBv5TLzBMDef3Vk9dODeUM3TVwnPsqBXU7oFUD1o%2F59fePF%2FxB4BJ1i2l3iim%2FqplTkwBh9ipdLWQh9%2FTBLuFKR1fZ%2Fy99ERir33LBR5XAcMUck8NOtWa%2BptrhIuMr8LOTa5QN6yoZ83ZF7cR6BYFQ48fKzHdQmKEncvD5XcE183eBVrdBcVtBWnrN6%2FXEHpcd98Fu4z7fjwAWecMmWEXKuOVVx%2F%2BSuYZ7hbamtGYp4xHZzU5uvHcmyeWi4Dkuc3ZvgH7GlDyDNuR7D0X9pmxXnfKiXO%2Fm7ZV7gCdA3XWEZQVbC2k8n5c6UUZ89Ggk%2Bpcy8KZlfSl8xvGYBTwST81lqEFXEJBX4cRioTMw%2FIMH6O93NTu1D%2BidIT8zb416Ih%2Bwy8FJcQCORhGo10h5dtEXOh3qbnDWJcZIVyGK9Tz51oSFpNrAU4Da76CNXwfvxL3nHujr93Jo6UMuoZuCGo9Ywy5b6icY%2Frj5ioEzSyDUgbFahrHWLrACZ4we0oEOTwsCc60bu9J6%2F7ncljs9Ua9P8fI%2Ba3QOT5EMB6QuY1k%2FObQKMPvZ070GOqUBStOPm2Dj3D6LeN8feZPWK5UJnlHgp7ZY0P%2FeKsFh0xNJ8HP%2B%2BobkWD8ligI9xfJAkSKoovNrYih%2FZHRxBSC18qcIN0tq2qJLfh6%2F1fP6phKxeSZeaswTHecrJD0q%2BgIXlteVPw3d12btXTPus9mWeQ8Si19cWHsvv0edVopqXGQhwFgrLOpQI%2Fr1hWs8zbjHYpFFE4HWMoke1wMaMsg0f3fzCMpi&X-Amz-Signature=6763192eb5c0d1f7a1ca2c9922cf1a1f5d6604e0efe4b7fc304ff717481bdc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
