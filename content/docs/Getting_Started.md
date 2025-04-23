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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLUYYGA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCxmuHFL%2BtVDQJEYHE8nZ6SEWEFDJEPVVTzlKuHCDvbDAIgGvGWkHKYlHdanhMohgo5vFZAyHZrhxZcWZpqOACwrNgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe1rxC7RNySBrkEwSrcAxJ0tTWm9KFi92mQSG1T5aC6Wp3O%2F3%2FVY86qDSw7Hs6Joa4%2FBSUdhlG%2BIgNQBDBv3q4LuDnF03RbLnu5HqcA7ghmIFcAP2d0ZFIyINqAwim5VBLJQT2%2BvPEewzXTWsFZgSBde3ePplityWtVQHTfQ9VCi0rU%2B1dCjEr3erCeBJ2eDNRSVXwQiBRVGccOau%2BKKVpa%2BOuIV3pwea9E3u8C7Zc7uKN5tvrr%2BdX7kgcOgEJq%2F1DNqSiEbcyj3n1Do72yx%2BIPEbKtU82ZmZEUL6gDCrYcwq62%2FtdEazAMg9fOkwmJ4ejTpRMfC%2BlLXaErgdy%2Baqk7MiIneCfjp3ytSzZtR2cfF307iiY9OgSwmxAT%2FQikzk0p9ckj%2BT1wg60FD07oUi%2FjfspH%2F73R5eRzAGpO5I9tZl7Kuxvqr7XXSdiCesh7dh7GfbOq88z4yfnoZQqI%2FeJwLKhpIW4Abcd14i%2Ba6z4FEM3dV9Fy5drqFx3QovptadSXLJRKTfuXRN%2B62kvV2CDlFuaznRjVhZ48HHTytDzUtiYByIM5oKRfiRJKLFlJDz1Ob14v4I5hBb4720xANk30DCZZMRVj%2FM08MF53a41%2BW9J%2FO0UIBePshpBVh%2BNyUhwqAjUEHNF0A25eMM6Do8AGOqUB78pPAfo2ATUk42J%2BWO67Pu05lLGQ%2Bqn06HKENTxIC46OBRaaBjNgHQsQTzZakAyrutmSl9kTPrQ0sqgzBvur8QjQymkz68znKS8V0uERSep%2FlrvA7b2CLqQTCqoO9u7B0muKnJEAIWRxUhZfEFlKdtOVRNyQQaxDPD5AkEIi8rYwJibUFHU1Uh9ZHNIIoZxGg9wQBN73ad2pc7gTv3U1nOLf6XkG&X-Amz-Signature=3518017ccfebeacd598c06697ccb2c9396c9409878a1addfdba8704d3bf8098f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLUYYGA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCxmuHFL%2BtVDQJEYHE8nZ6SEWEFDJEPVVTzlKuHCDvbDAIgGvGWkHKYlHdanhMohgo5vFZAyHZrhxZcWZpqOACwrNgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe1rxC7RNySBrkEwSrcAxJ0tTWm9KFi92mQSG1T5aC6Wp3O%2F3%2FVY86qDSw7Hs6Joa4%2FBSUdhlG%2BIgNQBDBv3q4LuDnF03RbLnu5HqcA7ghmIFcAP2d0ZFIyINqAwim5VBLJQT2%2BvPEewzXTWsFZgSBde3ePplityWtVQHTfQ9VCi0rU%2B1dCjEr3erCeBJ2eDNRSVXwQiBRVGccOau%2BKKVpa%2BOuIV3pwea9E3u8C7Zc7uKN5tvrr%2BdX7kgcOgEJq%2F1DNqSiEbcyj3n1Do72yx%2BIPEbKtU82ZmZEUL6gDCrYcwq62%2FtdEazAMg9fOkwmJ4ejTpRMfC%2BlLXaErgdy%2Baqk7MiIneCfjp3ytSzZtR2cfF307iiY9OgSwmxAT%2FQikzk0p9ckj%2BT1wg60FD07oUi%2FjfspH%2F73R5eRzAGpO5I9tZl7Kuxvqr7XXSdiCesh7dh7GfbOq88z4yfnoZQqI%2FeJwLKhpIW4Abcd14i%2Ba6z4FEM3dV9Fy5drqFx3QovptadSXLJRKTfuXRN%2B62kvV2CDlFuaznRjVhZ48HHTytDzUtiYByIM5oKRfiRJKLFlJDz1Ob14v4I5hBb4720xANk30DCZZMRVj%2FM08MF53a41%2BW9J%2FO0UIBePshpBVh%2BNyUhwqAjUEHNF0A25eMM6Do8AGOqUB78pPAfo2ATUk42J%2BWO67Pu05lLGQ%2Bqn06HKENTxIC46OBRaaBjNgHQsQTzZakAyrutmSl9kTPrQ0sqgzBvur8QjQymkz68znKS8V0uERSep%2FlrvA7b2CLqQTCqoO9u7B0muKnJEAIWRxUhZfEFlKdtOVRNyQQaxDPD5AkEIi8rYwJibUFHU1Uh9ZHNIIoZxGg9wQBN73ad2pc7gTv3U1nOLf6XkG&X-Amz-Signature=e336557f3a5b594e3dfad1bdc3cb2f61b694c650b264888fbb8e9d18656284a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVG5MOR%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDVVVbzgA%2Bvr6blvKG09mdPuBoABNkR6ozzPmNb8vMsAAiBmvzCkUcjFI09lN3QgLx3xFsBkUisqh3lKS5NxnUdOrSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRyMumMXxJ0puqItoKtwDci0fiN2ZNAtpUcbURBes7OhryPvpIptSDASHp6bSvJNEEiJHiTZ3aCwhZgbaDRatTruqsIK6CHi%2BuHQsgOCVi2nYB3Rx4dGQiLmauYOUPUzQ2mgk4kLkxWhgte%2BmtVuX9%2FUH0HdpeYztWvuU85elQgT8KyLRiHMAqQ7fRGOc6D34CCrLeHKiaVjrwxSmbeVHZ8vTqlJCt1Rm6toARO2CV1om8ucjcyJI7GTwTiOpFi5lnLazGRhCsuClc8DQwrH6SVnIaC41x7gbXjtQVVOd%2FGZUrx2I9duRaSgM68YdEItLFJRBO6o%2Bj2vc8u%2F41VIjsFM9SBU0dBy1v2NxgX8uFcAsTGtesawIiIwj%2FfDinjTmxRvKLAwQTZPrd1gGbLbM02KXw6g1%2FksCLkSijYevttcOchv0CEWA6rwopH8eFMetEzqFDDq85IGjPB%2FdbxrH2i8oCaMBKbtDklrhzF%2FLxiWYr8JSBkM3sBvv8AGn2xFBf8CDMKE1W6OcVDCnlKOgWqmEQCmYw2hf0ftkFbYygwd25vqtdMwKMMr1Xid6N61AZCUB3NLtaAovmUZkF6FlijIC%2F7WGyoxuMSiePdltPllfvS6Jr0v1JBTFNbVf%2F69I3aANlH65R%2F8Dsr8wk4SjwAY6pgGbp6H7OKgVl2zOuXa%2BB9H1t%2Bjjd6jUYIL2sjU6Q9gRBJgSS3Dw8UzXsB6FV8M9o2vy15qyVID8d5tGRS3P%2F8LPsOXaWD1wOBTbzaed4ohAFQGXaTQGenXQfEp9InEOJlqVJcZeJZrCK3MBUdHPyKuY6iZ8Rt4aCIYsujn%2B6bBUgKxYOzODbrgTUbotAxnm1w%2FNutzO5W583gcmI2p%2BgYbYRDZ2uwt5&X-Amz-Signature=3bbf53204bed3bd22fdaf3b1eb8f1035ae91b34ebbf1e4b29d8f6d5eca4e2c54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDMCEH3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCBVDRiQXNA76MIbjooem349AqoPMwcMq6x8X9SrEHIPgIhAKuk3IPPmO9aQv3bBcHnKTgK9nXW2X9ygPVpEIyw0eUqKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8iIYRrmq7rfU%2FLRcq3AOpt7D7X%2Bo0w23CqDOhkbNcvSlJ97Uo1xtkN2TCYL7ZpI6yIzTgdHgLAcn7lALGRK2JAW5GVPAHifFQj%2FWtzXMwJzSqV70L7wl8nVdcyLzYG6LWiRFCIFOXmgbknG74KBk50rLXsYP9e1gGwaRqK53mUm90ReO%2F%2FM7Y9yUXRjXmzYqDud1Bvqx4iAze8NUQ9Z3DGNfff5H49LOmvLltvks0wP0hWKVdy7ZuDqvV8WqBAvKCxCL1I0q6P2Da%2FNeu7%2F7mtlBqh3le%2Fq3Denf6ZGR9yUhiKKjHhIkxHT1%2BfNbpq0x9Gbeu3dxiKWjn9uCuRrthAK4ZXTYxLW4hP%2FOwTk0ox1sVmASC3R0onhbBKLiAD7HQrseM1JjzpYWTr4t0srvghMYMh9v%2Br2iaH3BV5KiEUqtiexR7e2L5n9RFRqU87i5TbVhZO%2F8RNOVOB%2BSeYiat8lKRuizwwAky37jtYMxS5Fg40EwHc2DYNZryW5P25Zcyz2RHdSOvxEPSdjHcDKQKntbQbzupK1HZYRHQGJ9L8zIoLpidjiqAt7mhvrRrAFe1aNQ3X2j2zco9%2BtbgV8%2Ba5%2BRCr68Ol87m%2Bf7NQvP7cB%2FPKalnJE750dW4M5rf11iitdcqmufylvf8YzDSg6PABjqkAclpXahUOA8qgN5EPDDuQx%2FkPSEFXuqvsfDmDy5pSYYCuMqzIUfkaKa4hyr%2B9Nwc92CnLjifgXqKqyt1%2B6aqwsKCjQwK4MJs7uHBLJSWtUtZj8FMGgGVxVFV2unshgNbvuDkVxB%2F2RBa8ABoHWTcXdzbQvl%2BMl3qT%2BTG%2Bu%2FEcmtNkbNai6Dx5qiMWcw51iC%2F4EckBVQsiNaytgQT8RcKzSTXzXmV&X-Amz-Signature=a64bfc8353b4bb28bfff590b94cacf0239ff7f0ac97fc520d1614fc12fac9492&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLUYYGA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCxmuHFL%2BtVDQJEYHE8nZ6SEWEFDJEPVVTzlKuHCDvbDAIgGvGWkHKYlHdanhMohgo5vFZAyHZrhxZcWZpqOACwrNgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe1rxC7RNySBrkEwSrcAxJ0tTWm9KFi92mQSG1T5aC6Wp3O%2F3%2FVY86qDSw7Hs6Joa4%2FBSUdhlG%2BIgNQBDBv3q4LuDnF03RbLnu5HqcA7ghmIFcAP2d0ZFIyINqAwim5VBLJQT2%2BvPEewzXTWsFZgSBde3ePplityWtVQHTfQ9VCi0rU%2B1dCjEr3erCeBJ2eDNRSVXwQiBRVGccOau%2BKKVpa%2BOuIV3pwea9E3u8C7Zc7uKN5tvrr%2BdX7kgcOgEJq%2F1DNqSiEbcyj3n1Do72yx%2BIPEbKtU82ZmZEUL6gDCrYcwq62%2FtdEazAMg9fOkwmJ4ejTpRMfC%2BlLXaErgdy%2Baqk7MiIneCfjp3ytSzZtR2cfF307iiY9OgSwmxAT%2FQikzk0p9ckj%2BT1wg60FD07oUi%2FjfspH%2F73R5eRzAGpO5I9tZl7Kuxvqr7XXSdiCesh7dh7GfbOq88z4yfnoZQqI%2FeJwLKhpIW4Abcd14i%2Ba6z4FEM3dV9Fy5drqFx3QovptadSXLJRKTfuXRN%2B62kvV2CDlFuaznRjVhZ48HHTytDzUtiYByIM5oKRfiRJKLFlJDz1Ob14v4I5hBb4720xANk30DCZZMRVj%2FM08MF53a41%2BW9J%2FO0UIBePshpBVh%2BNyUhwqAjUEHNF0A25eMM6Do8AGOqUB78pPAfo2ATUk42J%2BWO67Pu05lLGQ%2Bqn06HKENTxIC46OBRaaBjNgHQsQTzZakAyrutmSl9kTPrQ0sqgzBvur8QjQymkz68znKS8V0uERSep%2FlrvA7b2CLqQTCqoO9u7B0muKnJEAIWRxUhZfEFlKdtOVRNyQQaxDPD5AkEIi8rYwJibUFHU1Uh9ZHNIIoZxGg9wQBN73ad2pc7gTv3U1nOLf6XkG&X-Amz-Signature=bedc4d20383d661e2f08f6fd0d1b06136ac963cc90646e20855040acf58cc636&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
