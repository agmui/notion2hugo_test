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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PU4WVD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA8jvvk21r3ZX5uV689cYqq5lbQ02ZesiG%2BGSyI0A%2BrEAiAqLY%2BMUueJPr7SsrQe9og%2F1X3g4EzcZ7pBIY3Dg5mnjir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMaDNn9XIEYVeVbztgKtwD7nbX0sqWOwfl7ClxnI4Rogn0db3Xc2ztWYuIuP9bYezfEHXS3GWaFUbmEPJAp9aix3Ozj9b7VjyYSCWYPuq6aBaK%2F9Mt70KUaiVTfeGPKPvBz7i8TF02%2BeG%2BZ9q0yTWU4c%2Btzq%2Braqnmy2oolt27to9v7hK7VJEoR4xstJUc5%2FQj2CDdx7e8ao8G3ZoLg5XVGmNcSWENrA3UMI9qa2QhzDveslthuEmGtlZdQq1%2BWjOp4aK3s%2Fv%2BhOYMhjlRujf0%2BKKk5eEi3MOn%2F2L71JzqpsQYjXSIn3%2B%2BAAZ5hm3UKyVNficP8cPSXW1DRHedSlf5FMFKB1D%2BiFCk1ZMY2OON7lGLGlqzk6e33x8UbaRCYMHATc9ZiyY7X1nTMVxawWA%2F6te5U3yCeuS6Llc4evAe%2F%2F3koZcUOsnoBxuX5K%2FH0swGL5V6VYsJtzY2GpvZfnXK8VPOpEjiUvpYN%2FEEUMwdJL7Uj%2FSJdLuwWct887r1K3GKCjK8FSDgzPJJ3iF3mDaGpVB9V8AG6kKYJuVyf%2FjFGthal5HWHUqr6JiiW0x06O76WQzFClcaLf9gTdo26w33%2F%2BseQ9%2BTRAx46IXZ9hkDB97YPmIIGH4DF7DRulFaP6fbA%2BCRASnmqFrJeKcwz8zIxAY6pgE46NsGLi4Z9TaOe4kYhk%2F5YKVDVTB%2FdQfbZDElcyDzsvm3gLoIHIJ4hDHzPcUp1RVdbIx4sWHg%2BOE5Hn7SWc7hogznqpWTcaXOlFlbbveF1TedASs8l86jpqM2W%2BfPaL7iMF%2BBbIW7VC2yuScwO7%2Fa%2BWRvht7D1U5T4bemIMIqVHJITqjUkw%2Fn%2F9k8ucmcuOGdRRK7xOm8aNxqt3BT6XPEoLKGkoPN&X-Amz-Signature=f57b0d805ca16b01db2c1543e624a740803186141f0b74350e88ce546e4d4c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PU4WVD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA8jvvk21r3ZX5uV689cYqq5lbQ02ZesiG%2BGSyI0A%2BrEAiAqLY%2BMUueJPr7SsrQe9og%2F1X3g4EzcZ7pBIY3Dg5mnjir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMaDNn9XIEYVeVbztgKtwD7nbX0sqWOwfl7ClxnI4Rogn0db3Xc2ztWYuIuP9bYezfEHXS3GWaFUbmEPJAp9aix3Ozj9b7VjyYSCWYPuq6aBaK%2F9Mt70KUaiVTfeGPKPvBz7i8TF02%2BeG%2BZ9q0yTWU4c%2Btzq%2Braqnmy2oolt27to9v7hK7VJEoR4xstJUc5%2FQj2CDdx7e8ao8G3ZoLg5XVGmNcSWENrA3UMI9qa2QhzDveslthuEmGtlZdQq1%2BWjOp4aK3s%2Fv%2BhOYMhjlRujf0%2BKKk5eEi3MOn%2F2L71JzqpsQYjXSIn3%2B%2BAAZ5hm3UKyVNficP8cPSXW1DRHedSlf5FMFKB1D%2BiFCk1ZMY2OON7lGLGlqzk6e33x8UbaRCYMHATc9ZiyY7X1nTMVxawWA%2F6te5U3yCeuS6Llc4evAe%2F%2F3koZcUOsnoBxuX5K%2FH0swGL5V6VYsJtzY2GpvZfnXK8VPOpEjiUvpYN%2FEEUMwdJL7Uj%2FSJdLuwWct887r1K3GKCjK8FSDgzPJJ3iF3mDaGpVB9V8AG6kKYJuVyf%2FjFGthal5HWHUqr6JiiW0x06O76WQzFClcaLf9gTdo26w33%2F%2BseQ9%2BTRAx46IXZ9hkDB97YPmIIGH4DF7DRulFaP6fbA%2BCRASnmqFrJeKcwz8zIxAY6pgE46NsGLi4Z9TaOe4kYhk%2F5YKVDVTB%2FdQfbZDElcyDzsvm3gLoIHIJ4hDHzPcUp1RVdbIx4sWHg%2BOE5Hn7SWc7hogznqpWTcaXOlFlbbveF1TedASs8l86jpqM2W%2BfPaL7iMF%2BBbIW7VC2yuScwO7%2Fa%2BWRvht7D1U5T4bemIMIqVHJITqjUkw%2Fn%2F9k8ucmcuOGdRRK7xOm8aNxqt3BT6XPEoLKGkoPN&X-Amz-Signature=9e446db5869dcb5799611116903dcb2cc54aa3c12ef345ded3751bee9d5c51c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PU4WVD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA8jvvk21r3ZX5uV689cYqq5lbQ02ZesiG%2BGSyI0A%2BrEAiAqLY%2BMUueJPr7SsrQe9og%2F1X3g4EzcZ7pBIY3Dg5mnjir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMaDNn9XIEYVeVbztgKtwD7nbX0sqWOwfl7ClxnI4Rogn0db3Xc2ztWYuIuP9bYezfEHXS3GWaFUbmEPJAp9aix3Ozj9b7VjyYSCWYPuq6aBaK%2F9Mt70KUaiVTfeGPKPvBz7i8TF02%2BeG%2BZ9q0yTWU4c%2Btzq%2Braqnmy2oolt27to9v7hK7VJEoR4xstJUc5%2FQj2CDdx7e8ao8G3ZoLg5XVGmNcSWENrA3UMI9qa2QhzDveslthuEmGtlZdQq1%2BWjOp4aK3s%2Fv%2BhOYMhjlRujf0%2BKKk5eEi3MOn%2F2L71JzqpsQYjXSIn3%2B%2BAAZ5hm3UKyVNficP8cPSXW1DRHedSlf5FMFKB1D%2BiFCk1ZMY2OON7lGLGlqzk6e33x8UbaRCYMHATc9ZiyY7X1nTMVxawWA%2F6te5U3yCeuS6Llc4evAe%2F%2F3koZcUOsnoBxuX5K%2FH0swGL5V6VYsJtzY2GpvZfnXK8VPOpEjiUvpYN%2FEEUMwdJL7Uj%2FSJdLuwWct887r1K3GKCjK8FSDgzPJJ3iF3mDaGpVB9V8AG6kKYJuVyf%2FjFGthal5HWHUqr6JiiW0x06O76WQzFClcaLf9gTdo26w33%2F%2BseQ9%2BTRAx46IXZ9hkDB97YPmIIGH4DF7DRulFaP6fbA%2BCRASnmqFrJeKcwz8zIxAY6pgE46NsGLi4Z9TaOe4kYhk%2F5YKVDVTB%2FdQfbZDElcyDzsvm3gLoIHIJ4hDHzPcUp1RVdbIx4sWHg%2BOE5Hn7SWc7hogznqpWTcaXOlFlbbveF1TedASs8l86jpqM2W%2BfPaL7iMF%2BBbIW7VC2yuScwO7%2Fa%2BWRvht7D1U5T4bemIMIqVHJITqjUkw%2Fn%2F9k8ucmcuOGdRRK7xOm8aNxqt3BT6XPEoLKGkoPN&X-Amz-Signature=96eb9ead6d6cb37ef017ff7bd0f06f9169328ca59a36d832e9e5267c182c9ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGA2HGRZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBY5RbTCEr33pFz2tQHqbNqZGU9A7WT%2FIfVTIICZ1UMyAiEAruniS9wFCI%2Bepmrgnsypat%2BQayPAfbOClG3TKAGPH68q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWSx2m5cl4vT8qCISrcA5U6fV6qMy5mrUQrLSEpEzCcCnc3CYrfvOY4MEidn42aEanKfUX4wum%2BPaAyOt8bqQdS55FAMRG1QIhGYzylqUzq4kbITHkTKjfX%2BbPqHtlaAh8SY3MkUrzCdRtkzUawOmSgqH5OueWpN7sBHy1h3xqbhCi2SeFvpNk8wd8xIxgCfpXkHnSQzKhDNfUiCH0AhTkS2tQC5owVjMZ73i5hgLIncoAj4ebLQr%2BTGU8bSuposH3sU%2BdLhqawkkNn7vt63CH5RoyRvV%2FJhmymxMO9rfU4b3Mcy2UmpiuINUpGwVXucDl83JbCp715IjepDU0xvAOQVsJyl8iJti4jAdlf%2BEhjrOimJa8lChydVAIRXQs0dLgcibV288ZYBAe3iMa1bLt41o73M8wZFbWc0gQl1wRGAe0Rf0adsjoZ0aOonUOZdAJsm53iXH4nPWq24Jn7EoXSRId1ueMc2py1SaSe7l5QcSx7ldkOrnuuTn49%2F2O%2BUW8xFScFdOzgQv2ovtv8%2BMt1l%2FyLabdm0CyBmR4zqHFf2GuyjU%2FZFr%2BllwiV68w5EzLYshHQ5ixwlVZS%2FWc72xZAg77imn1g93mxZECd49l5igiPurrAjQwCmh891nG8joLUWd9g770Ma3fPMPHMyMQGOqUBsYAsh1uoXijJgdIh36%2BTnDgX6a816zIdueDKZQrLpXnfyAybxIx6ZRThNyBDfxDaMU%2FLzsJGwHlH4f3Q0jluJiEm6Ij4Z5RQTK5pVay8f%2FCUXU7vPlWTcyz820t7euflwlH%2BoyGEaOim6tWSM5AT5grLdzQvb3otu2NA6yCYliRpeXn0KNn1NUU5zgjmtC4p6WQ2RnNwAi2z03h8pZdf6nggsTXh&X-Amz-Signature=7184371f9ed8e5c4ad0efba29614f284ee2df23fb6aa3a7f6fd1d21e49040a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD2JFC2W%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDTHLPoVftQ613IsSlNRfmBTJwv8tjs64mVKRjwTadunAIhAP7E6xL4%2BGkRCRyPb9cljAwMtPiEjpPohvM8qD5rSPMPKv8DCGEQABoMNjM3NDIzMTgzODA1IgzGywR59vKbx9W3ejoq3AN2%2BF6TfrRxXylUjXZ%2B29HpJukPPzxV973UErmqSu4JZZZqRRYfS6M%2FC%2FDDMh1ptO9jjWhBDUcH5tLsPdU8jd2lNQ5A3SPIpATkXiRwbrQqWWhOYbv8xxwJVIjjO6g4srQ18IO1maZqMGifaMdEubvmgeKEr%2FzETNZLdvJ6dn%2FCOA5UCNsuH3EHqfGnUoAIMI%2FTa%2BjBI7i%2FC%2BXEiN4tJzCZx%2BW1ubF5fcxADyPyPdb5zjmrVP4JLgJQ9%2B1c1BXHbrAACkgZcoFEClgi0kp5RMci%2F3ebumzYeIuAEffKoq7kXhkjuX79OIW6YmH7zm%2B7LCAw5Dp2qg1eETgjWLLt5bGdlEaVpGIAA4MuMnuHwEDg%2F236ezgYktpTqc6eGFKn5zIWXgunX7eR8LVCfNzNp3%2B2dDo%2Bk7p4Asvs8bLmKEJb6cFogNgtTmq6I9RP0GF3wp2Ii6Ucmia80wm68sSk263ckzkOPw1OyD0N4XqfAU%2Fm5K2KKzhZOAuPouKSlrHG14L%2B0%2Fj4RxsVyHP5kIWKpeq7s7%2Be%2B1RLuTOpaGW5%2Fe9lC%2BloIPdfYYBSBqwfnnPbSUF%2BhZo%2B8swZlrjsMFmdZsiFrPES92oNEz%2FvouPMWg%2FBsDnKB7n0bgXznbnTrjCozMjEBjqkAeQDzwEHZNueHNjdVLs7L4ELtno9MOdLYLaTz8TAHza9lKsG5I5UyIfvpto%2F0fx2DqMLiq5cjTQDRqYbA72q72yLtJ4tZz9YAh3yp89xakAX%2FBhH6As7FVVtBrjNw0iedbs4kJJHzb6AP0NpmzQIHbl1cmzvYdZhTA%2Fwr3uT%2FKGFlJ3qXT19EDU3T%2BrdtCA9%2BA7N8e98DnPIwrg8%2FXtH4GpQVRJf&X-Amz-Signature=b4c17eff219f6f7c94217582cfd4b984d6a578628ff91fca3b6eaff714684056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PU4WVD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA8jvvk21r3ZX5uV689cYqq5lbQ02ZesiG%2BGSyI0A%2BrEAiAqLY%2BMUueJPr7SsrQe9og%2F1X3g4EzcZ7pBIY3Dg5mnjir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMaDNn9XIEYVeVbztgKtwD7nbX0sqWOwfl7ClxnI4Rogn0db3Xc2ztWYuIuP9bYezfEHXS3GWaFUbmEPJAp9aix3Ozj9b7VjyYSCWYPuq6aBaK%2F9Mt70KUaiVTfeGPKPvBz7i8TF02%2BeG%2BZ9q0yTWU4c%2Btzq%2Braqnmy2oolt27to9v7hK7VJEoR4xstJUc5%2FQj2CDdx7e8ao8G3ZoLg5XVGmNcSWENrA3UMI9qa2QhzDveslthuEmGtlZdQq1%2BWjOp4aK3s%2Fv%2BhOYMhjlRujf0%2BKKk5eEi3MOn%2F2L71JzqpsQYjXSIn3%2B%2BAAZ5hm3UKyVNficP8cPSXW1DRHedSlf5FMFKB1D%2BiFCk1ZMY2OON7lGLGlqzk6e33x8UbaRCYMHATc9ZiyY7X1nTMVxawWA%2F6te5U3yCeuS6Llc4evAe%2F%2F3koZcUOsnoBxuX5K%2FH0swGL5V6VYsJtzY2GpvZfnXK8VPOpEjiUvpYN%2FEEUMwdJL7Uj%2FSJdLuwWct887r1K3GKCjK8FSDgzPJJ3iF3mDaGpVB9V8AG6kKYJuVyf%2FjFGthal5HWHUqr6JiiW0x06O76WQzFClcaLf9gTdo26w33%2F%2BseQ9%2BTRAx46IXZ9hkDB97YPmIIGH4DF7DRulFaP6fbA%2BCRASnmqFrJeKcwz8zIxAY6pgE46NsGLi4Z9TaOe4kYhk%2F5YKVDVTB%2FdQfbZDElcyDzsvm3gLoIHIJ4hDHzPcUp1RVdbIx4sWHg%2BOE5Hn7SWc7hogznqpWTcaXOlFlbbveF1TedASs8l86jpqM2W%2BfPaL7iMF%2BBbIW7VC2yuScwO7%2Fa%2BWRvht7D1U5T4bemIMIqVHJITqjUkw%2Fn%2F9k8ucmcuOGdRRK7xOm8aNxqt3BT6XPEoLKGkoPN&X-Amz-Signature=dd10e9451d89d19378b24accca7c855e786bf9056421bd214c7e3d13907d5bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
