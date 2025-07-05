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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZO6X6MA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFN0e3FhX0ybyXc0BoaUubKyLrwuez1iEnHIucBGXFXVAiBeaN8wlnmlrMdWgzR7D9g1no%2BGisdk4y4bGBG9Wq0dNSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMUt%2F2zcTmuLa4oWkyKtwDC9dgfL8sF4pwdRA5v6ZYZ2Ad8tTVH%2BBEwaeCEx8gfVJarjX2Bq%2FspBy9yfUtbjdebiIos0Esy4RcUqtLR4nVJyAJYlwZpnoz4IHVIDInOAV6HgFzzQPxT7nL0Fi4n10u9N9yU8BipzWVAyHamhd%2FTevM1HshUQKaE2XnZhjqb0FUG6rgwclUnqklQsqBznawB79HjySQAHyFlfUut%2BEwi9bfwswTuIMx%2FgEDhD0GeOQU3G1uxiOI2ep3FtPDQRCaaBF9t49ePemaQeF1xetbe82nYobqKQj6jpRyfqz%2BMLJJpR8iZdtq5dgTThUdBY0%2BrWilURmyn7WZ25Upb4bNeJ91Q1RYO3ak9OIttruwQmrzbOXGrR8lAFpiur4roKx6PRR8Zbhq%2FzKSgBXECOiahPdp1W8VMdVsl9HA7Uyz6%2FrJiGUAYr6YGqF4EgXjhQRjEQY5dZ2PfLngfeaiVtmOluxEkWf6h2RLSG2vS%2F1B52j9tCjB%2FahT9yKA23Zn%2FrUGs88GR%2B5FfrVq2d4oq3JgdtMBzSXf%2B%2B%2Fk%2Fyhzrwx5R1QD7hhfjT2HE9VpbR82b6RjXGQ08EyOkj9FXnlFbiDAgpwW8nQTyPZK5vaPgxzaDkcoy%2B4i2kiuNmktD%2FswgPSlwwY6pgGR9dEbzC%2F9fAzdmubGNC0OY6umITrDbrQPa%2F6%2Fgbq%2Budej8KT2McFYgf%2B5LSQZqoiLTYdZJNKpLBFkFqhhYVg3K3RfQqjZnKPIofOAGweVz74pYuiXhvK6kDK0dkLTogHPxsfFNu9mJx7UWjMvhymSflHsMrmTZlcB6oyMz8AmwUphyPGC2AcuGHprY0Gsat7i95aIgZQNfyigaUif4hbzV7LF1mQR&X-Amz-Signature=48baaf0de556d247f57c2bea80f6181080930321c0c7e3b5dbfc0563dba9fd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZO6X6MA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFN0e3FhX0ybyXc0BoaUubKyLrwuez1iEnHIucBGXFXVAiBeaN8wlnmlrMdWgzR7D9g1no%2BGisdk4y4bGBG9Wq0dNSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMUt%2F2zcTmuLa4oWkyKtwDC9dgfL8sF4pwdRA5v6ZYZ2Ad8tTVH%2BBEwaeCEx8gfVJarjX2Bq%2FspBy9yfUtbjdebiIos0Esy4RcUqtLR4nVJyAJYlwZpnoz4IHVIDInOAV6HgFzzQPxT7nL0Fi4n10u9N9yU8BipzWVAyHamhd%2FTevM1HshUQKaE2XnZhjqb0FUG6rgwclUnqklQsqBznawB79HjySQAHyFlfUut%2BEwi9bfwswTuIMx%2FgEDhD0GeOQU3G1uxiOI2ep3FtPDQRCaaBF9t49ePemaQeF1xetbe82nYobqKQj6jpRyfqz%2BMLJJpR8iZdtq5dgTThUdBY0%2BrWilURmyn7WZ25Upb4bNeJ91Q1RYO3ak9OIttruwQmrzbOXGrR8lAFpiur4roKx6PRR8Zbhq%2FzKSgBXECOiahPdp1W8VMdVsl9HA7Uyz6%2FrJiGUAYr6YGqF4EgXjhQRjEQY5dZ2PfLngfeaiVtmOluxEkWf6h2RLSG2vS%2F1B52j9tCjB%2FahT9yKA23Zn%2FrUGs88GR%2B5FfrVq2d4oq3JgdtMBzSXf%2B%2B%2Fk%2Fyhzrwx5R1QD7hhfjT2HE9VpbR82b6RjXGQ08EyOkj9FXnlFbiDAgpwW8nQTyPZK5vaPgxzaDkcoy%2B4i2kiuNmktD%2FswgPSlwwY6pgGR9dEbzC%2F9fAzdmubGNC0OY6umITrDbrQPa%2F6%2Fgbq%2Budej8KT2McFYgf%2B5LSQZqoiLTYdZJNKpLBFkFqhhYVg3K3RfQqjZnKPIofOAGweVz74pYuiXhvK6kDK0dkLTogHPxsfFNu9mJx7UWjMvhymSflHsMrmTZlcB6oyMz8AmwUphyPGC2AcuGHprY0Gsat7i95aIgZQNfyigaUif4hbzV7LF1mQR&X-Amz-Signature=ff6111d38258cad56d3097b353db6517cc4692c940b9ba699dfa02b2eab7f0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZO6X6MA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFN0e3FhX0ybyXc0BoaUubKyLrwuez1iEnHIucBGXFXVAiBeaN8wlnmlrMdWgzR7D9g1no%2BGisdk4y4bGBG9Wq0dNSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMUt%2F2zcTmuLa4oWkyKtwDC9dgfL8sF4pwdRA5v6ZYZ2Ad8tTVH%2BBEwaeCEx8gfVJarjX2Bq%2FspBy9yfUtbjdebiIos0Esy4RcUqtLR4nVJyAJYlwZpnoz4IHVIDInOAV6HgFzzQPxT7nL0Fi4n10u9N9yU8BipzWVAyHamhd%2FTevM1HshUQKaE2XnZhjqb0FUG6rgwclUnqklQsqBznawB79HjySQAHyFlfUut%2BEwi9bfwswTuIMx%2FgEDhD0GeOQU3G1uxiOI2ep3FtPDQRCaaBF9t49ePemaQeF1xetbe82nYobqKQj6jpRyfqz%2BMLJJpR8iZdtq5dgTThUdBY0%2BrWilURmyn7WZ25Upb4bNeJ91Q1RYO3ak9OIttruwQmrzbOXGrR8lAFpiur4roKx6PRR8Zbhq%2FzKSgBXECOiahPdp1W8VMdVsl9HA7Uyz6%2FrJiGUAYr6YGqF4EgXjhQRjEQY5dZ2PfLngfeaiVtmOluxEkWf6h2RLSG2vS%2F1B52j9tCjB%2FahT9yKA23Zn%2FrUGs88GR%2B5FfrVq2d4oq3JgdtMBzSXf%2B%2B%2Fk%2Fyhzrwx5R1QD7hhfjT2HE9VpbR82b6RjXGQ08EyOkj9FXnlFbiDAgpwW8nQTyPZK5vaPgxzaDkcoy%2B4i2kiuNmktD%2FswgPSlwwY6pgGR9dEbzC%2F9fAzdmubGNC0OY6umITrDbrQPa%2F6%2Fgbq%2Budej8KT2McFYgf%2B5LSQZqoiLTYdZJNKpLBFkFqhhYVg3K3RfQqjZnKPIofOAGweVz74pYuiXhvK6kDK0dkLTogHPxsfFNu9mJx7UWjMvhymSflHsMrmTZlcB6oyMz8AmwUphyPGC2AcuGHprY0Gsat7i95aIgZQNfyigaUif4hbzV7LF1mQR&X-Amz-Signature=72443ef35ae20fd032b32a5b9ce037080b30f2e037a8c08d8fa949ce030c8a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQLBM63%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDF709%2BolWvqMsySWS4hfTEtiTvnidW1KU%2BcjoaXdJD1QIgKde3bWKF40NDVL5vzZDFU55Pzaay9T8jf21zXkTUMIMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGeUBN8inAJPQobAFyrcA4depFQ1v902t3UH69FrHVItgGsx5MagacBvFhvQdGa1ncRxYIORDUNdjpjgBZvEz6xnOO7SlkbxoZUIIO8GDBvec7GadxDmuF0ac2uIXvM27cKoUU9JiuaUEgkmBtT0xaytHccS0lGoIjvL2dBXHcdcAZq%2FkzndB0qvRAhoCu2sfM%2BlphrVUbWMIuvReWzWqo%2BvRvQ6eOkHSp2MOOtnRGuCVRX07RW0cR%2BdPTItUzNwKxcLxpEyAgN8QJ5tv2C9ToH4WdU9WtJYVeMgMyKjO5L%2FPJSovJEuu5DJWNtcDu4gqXlIqPgzr4JxAd%2Bq3cyFzDWq4gyLHftrpQ9SGmwH9szw46mQrsWmVxzo21p0kRmAi4dxwSFGIP1hvFHzw4ct38XlL8TQVdIV4bc958NCzqN3aIutVFz7ng6aMN%2BXRqPSYlHe4Xs9UJVtUFCOZ%2F6rILfNHijJ3mHNdlbETRGM7V%2FckeqfQeNH9sjguwidpavI2HOZ5P5Gd0kPKDN%2BFy%2FPsixw3L7Pga02dNw3OF2kdFbMT6JqwE3%2BGMVZH9Edl8fbhOsEfikJhcJfmovpcqJHIi2MV2VzzWPOZu15i0YEBr9T40VghWzE3xdPyDQcQIIyXYFwqdjF%2Ft07K0DmMPbxpcMGOqUBNdNw2RED6JLqm%2BZhGvZrSbb0VVxyY0Dz7APhYX9rXiHDo%2FDDEcU6Ul8EzdYe2AhwdNtFe5mOFK1kgGy0%2FHJB%2B8iNCEny4K0saJuQ6dyHAaHsFUVNmQJPxgzLyCWUtax73hjMSo5alefdbz17OFhqWkjSQMycN3UUykzjnBDm2kxNFpQeBbRICr21FLD5AsZIR4kXuY%2Bf4%2BD3O37x014SPsVgYi4G&X-Amz-Signature=4b0a9ad897d4757ba247da13bcc2ad5bc714aa9ee0ab08e985588b3719c32863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP67BACO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIB8ySDNTr%2FYV2fOF3TWm10YF2%2B6bpVqKc1GxF1jfEs3gAiEA%2BXuT3S%2BoarjOxSTuhDyP7wr5uGTq2eQbRxjWNUIFIUUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNmEuIMYOcTW%2Fjf6kSrcA6zHVDF5nOIq1u860qZHk%2FHMZjvaQrX%2FLYgn2FRz63%2FL7hLJCzGt6I%2F2AG5A9NRpr88Cwk%2B4cYUufcY5wUdasT5T8kMWgT4QUrvuaY5DVbaiEQ4nKz2o3RmzmciQCd13RVrG4zKzjLpMrVUANl5sBmnpES7RZdt1T02clkFqGrX2Ar%2FEcte2ekb7SLugt%2BftQG3OdTlVzW3Q73z8If3u7VzRBNJE4a3T%2F8lBIr1OQ0WRr7FngeVEm4p1n1C7yflDH%2FmT2N0um6JvSWoGrTOxJPtsGOBsJfJaXb7uieonjUGRlSJ6gYOWlCGLWt1dAt89GmVqo35adllUbX%2F6FiPpgYsUEtjCud8HjaLXM0PTOP2L3WhKdjcLwfJhhcXjUjxX4%2Fr9xzsQtkRF6sKG4a3DjeqKzcCQiMdIXBXnBm1QZPZvsd2JXteSljrtC7q%2FCKpVybdLVGp3hy0hjp4nwRyGEsHVKEl1m8Id6ZqwdkcuCF%2FpWpzY9Gge7wxcf%2BwkVRZEgrt9zx%2BZPnZTZnCv7NTt2i%2Ft6pQGkKSA4e32cuVtlE563DITiRHC2zeJULRAjnyH3nmk52s%2BXYMLvh9gx6QVJe9kZ%2Fh6xxay0IVlYEIzsdE%2FhXMklYwhE0h76GH%2FMKHppcMGOqUBVoiPe1NwJnDdxOt5VKDnMRuneYcF%2FLd9d8WTnK7fn5qQh3YftY7kEseOISgeRsiaWXcNQnqKX8TpoutxPzYYcUq6XluGK%2FRM%2FPNyH10rfSveEimpE6h1w%2BfA%2F0lFXoJoYQUTAImrybNyLgdb4zsdf0L2TbRl0Oz42upa7nPcG945osWYbwqDoDCE380t3DcBGiVDHHTeYxcwjmh1g1QgH41zz6zk&X-Amz-Signature=eb785970e9ecaf0c9ae58137d3b30b6af02f2439c88e5bd583212236d9e8c21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZO6X6MA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFN0e3FhX0ybyXc0BoaUubKyLrwuez1iEnHIucBGXFXVAiBeaN8wlnmlrMdWgzR7D9g1no%2BGisdk4y4bGBG9Wq0dNSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMUt%2F2zcTmuLa4oWkyKtwDC9dgfL8sF4pwdRA5v6ZYZ2Ad8tTVH%2BBEwaeCEx8gfVJarjX2Bq%2FspBy9yfUtbjdebiIos0Esy4RcUqtLR4nVJyAJYlwZpnoz4IHVIDInOAV6HgFzzQPxT7nL0Fi4n10u9N9yU8BipzWVAyHamhd%2FTevM1HshUQKaE2XnZhjqb0FUG6rgwclUnqklQsqBznawB79HjySQAHyFlfUut%2BEwi9bfwswTuIMx%2FgEDhD0GeOQU3G1uxiOI2ep3FtPDQRCaaBF9t49ePemaQeF1xetbe82nYobqKQj6jpRyfqz%2BMLJJpR8iZdtq5dgTThUdBY0%2BrWilURmyn7WZ25Upb4bNeJ91Q1RYO3ak9OIttruwQmrzbOXGrR8lAFpiur4roKx6PRR8Zbhq%2FzKSgBXECOiahPdp1W8VMdVsl9HA7Uyz6%2FrJiGUAYr6YGqF4EgXjhQRjEQY5dZ2PfLngfeaiVtmOluxEkWf6h2RLSG2vS%2F1B52j9tCjB%2FahT9yKA23Zn%2FrUGs88GR%2B5FfrVq2d4oq3JgdtMBzSXf%2B%2B%2Fk%2Fyhzrwx5R1QD7hhfjT2HE9VpbR82b6RjXGQ08EyOkj9FXnlFbiDAgpwW8nQTyPZK5vaPgxzaDkcoy%2B4i2kiuNmktD%2FswgPSlwwY6pgGR9dEbzC%2F9fAzdmubGNC0OY6umITrDbrQPa%2F6%2Fgbq%2Budej8KT2McFYgf%2B5LSQZqoiLTYdZJNKpLBFkFqhhYVg3K3RfQqjZnKPIofOAGweVz74pYuiXhvK6kDK0dkLTogHPxsfFNu9mJx7UWjMvhymSflHsMrmTZlcB6oyMz8AmwUphyPGC2AcuGHprY0Gsat7i95aIgZQNfyigaUif4hbzV7LF1mQR&X-Amz-Signature=737d966a5cb5ee14f8650777d8db628f3c5147dad65adcc34d9f0c5e7285793d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
