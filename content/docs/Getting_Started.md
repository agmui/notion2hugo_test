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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F4NT6P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDJjInf44%2FBUGbdXwapXedFAKxDy2BLiJF2k5W%2BWAA82AIgC6cz5Cf%2Fj3KBlgIhT9%2BgZ14iief%2FwS3J3WbuYMM%2F3w0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOglRnuQwYdeWRtH6SrcA6YkGOXkm1rFJJTdDsVGwDBNMPYyC5kPz5ZtCXrZvTqscezVsV9QR57eGJSGHOe8aIk8JgGx2qDUuslSxHotl%2Bf518Kfl9vOVHvtvdmj1MT8lDyp2IyICb%2F%2B5L5LroP4P81PfA0WpfFzKf%2BritHuGIQlMwzAnlT5Tbh8hxfIMmj4shgps9puxIdOwSn2jgi7ftRgPSqdXB0RxmMj7zCrkAsjPLcaW46RoRIt53G9aAB596Uokiuin3LSbp%2BUd0aKddLdauHYH0kOd42BLScyCHMimFd7poeShf8PcsgVM%2Bcp22K9AO8N6PoJDwfxvVFadoTT17qSSbhBC1HfKWY82Iq8lbaItL8mwF5835MJGB%2Fl1ydcDtrWFXkhJ3Ey5ngyEgwE1m998dAW6YMEB7BLyskUc7McYI0Tf8G7Qr7eAhdmhZdkDguM74GDoxRrrZI8szPPWs6sBBwC2iGHWcWoYmfL2iR1kFd502oNlj1njDr0EeH41AZjgSoNQQH%2FAzVMXdv6pvIN6uVbNad66xeEjGKygIqmY%2F4RSDBsPn2RnPjDFZ5qsDHmcOxmW7%2BHTB8dsPenrgXYEbXV5idO9eSDj0TnVOUoy5XleAQnIu4Y8RjJh27Ts91JYnZ%2BceYlMPry9MIGOqUBQjEIN7peCehC%2F5S9i14UTuDcu1NWOZa%2BxgxA4dJAfQ%2FdVVAs%2BhrK7FwPEQSnzajAcMqC2fgJ0ej4%2B%2Fm2CREjQ%2Fe01%2FTMdeABgluPyqThDlDj0Y8v%2FXIjrSgh%2BlrVsOIDxdMVHOq6GFyQbun4B9MuqrE9ZV6uh8Q7wtaBjGYRunPZwl%2FUF2EjKNVyzvsYh%2BfkcM6dPFH4r%2BsRyY%2FIs%2Bc8ujrzoBGR&X-Amz-Signature=87c0b2572b736e0c775b9ef14e929465734494c3133e77db1a9f5d2e20e8ed25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F4NT6P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDJjInf44%2FBUGbdXwapXedFAKxDy2BLiJF2k5W%2BWAA82AIgC6cz5Cf%2Fj3KBlgIhT9%2BgZ14iief%2FwS3J3WbuYMM%2F3w0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOglRnuQwYdeWRtH6SrcA6YkGOXkm1rFJJTdDsVGwDBNMPYyC5kPz5ZtCXrZvTqscezVsV9QR57eGJSGHOe8aIk8JgGx2qDUuslSxHotl%2Bf518Kfl9vOVHvtvdmj1MT8lDyp2IyICb%2F%2B5L5LroP4P81PfA0WpfFzKf%2BritHuGIQlMwzAnlT5Tbh8hxfIMmj4shgps9puxIdOwSn2jgi7ftRgPSqdXB0RxmMj7zCrkAsjPLcaW46RoRIt53G9aAB596Uokiuin3LSbp%2BUd0aKddLdauHYH0kOd42BLScyCHMimFd7poeShf8PcsgVM%2Bcp22K9AO8N6PoJDwfxvVFadoTT17qSSbhBC1HfKWY82Iq8lbaItL8mwF5835MJGB%2Fl1ydcDtrWFXkhJ3Ey5ngyEgwE1m998dAW6YMEB7BLyskUc7McYI0Tf8G7Qr7eAhdmhZdkDguM74GDoxRrrZI8szPPWs6sBBwC2iGHWcWoYmfL2iR1kFd502oNlj1njDr0EeH41AZjgSoNQQH%2FAzVMXdv6pvIN6uVbNad66xeEjGKygIqmY%2F4RSDBsPn2RnPjDFZ5qsDHmcOxmW7%2BHTB8dsPenrgXYEbXV5idO9eSDj0TnVOUoy5XleAQnIu4Y8RjJh27Ts91JYnZ%2BceYlMPry9MIGOqUBQjEIN7peCehC%2F5S9i14UTuDcu1NWOZa%2BxgxA4dJAfQ%2FdVVAs%2BhrK7FwPEQSnzajAcMqC2fgJ0ej4%2B%2Fm2CREjQ%2Fe01%2FTMdeABgluPyqThDlDj0Y8v%2FXIjrSgh%2BlrVsOIDxdMVHOq6GFyQbun4B9MuqrE9ZV6uh8Q7wtaBjGYRunPZwl%2FUF2EjKNVyzvsYh%2BfkcM6dPFH4r%2BsRyY%2FIs%2Bc8ujrzoBGR&X-Amz-Signature=bb282482f99428ff8bfedc8f2e7a421d6ac53282d17b932d11b427270144abd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F4NT6P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDJjInf44%2FBUGbdXwapXedFAKxDy2BLiJF2k5W%2BWAA82AIgC6cz5Cf%2Fj3KBlgIhT9%2BgZ14iief%2FwS3J3WbuYMM%2F3w0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOglRnuQwYdeWRtH6SrcA6YkGOXkm1rFJJTdDsVGwDBNMPYyC5kPz5ZtCXrZvTqscezVsV9QR57eGJSGHOe8aIk8JgGx2qDUuslSxHotl%2Bf518Kfl9vOVHvtvdmj1MT8lDyp2IyICb%2F%2B5L5LroP4P81PfA0WpfFzKf%2BritHuGIQlMwzAnlT5Tbh8hxfIMmj4shgps9puxIdOwSn2jgi7ftRgPSqdXB0RxmMj7zCrkAsjPLcaW46RoRIt53G9aAB596Uokiuin3LSbp%2BUd0aKddLdauHYH0kOd42BLScyCHMimFd7poeShf8PcsgVM%2Bcp22K9AO8N6PoJDwfxvVFadoTT17qSSbhBC1HfKWY82Iq8lbaItL8mwF5835MJGB%2Fl1ydcDtrWFXkhJ3Ey5ngyEgwE1m998dAW6YMEB7BLyskUc7McYI0Tf8G7Qr7eAhdmhZdkDguM74GDoxRrrZI8szPPWs6sBBwC2iGHWcWoYmfL2iR1kFd502oNlj1njDr0EeH41AZjgSoNQQH%2FAzVMXdv6pvIN6uVbNad66xeEjGKygIqmY%2F4RSDBsPn2RnPjDFZ5qsDHmcOxmW7%2BHTB8dsPenrgXYEbXV5idO9eSDj0TnVOUoy5XleAQnIu4Y8RjJh27Ts91JYnZ%2BceYlMPry9MIGOqUBQjEIN7peCehC%2F5S9i14UTuDcu1NWOZa%2BxgxA4dJAfQ%2FdVVAs%2BhrK7FwPEQSnzajAcMqC2fgJ0ej4%2B%2Fm2CREjQ%2Fe01%2FTMdeABgluPyqThDlDj0Y8v%2FXIjrSgh%2BlrVsOIDxdMVHOq6GFyQbun4B9MuqrE9ZV6uh8Q7wtaBjGYRunPZwl%2FUF2EjKNVyzvsYh%2BfkcM6dPFH4r%2BsRyY%2FIs%2Bc8ujrzoBGR&X-Amz-Signature=f840927ebbd2a67f6c379995184882466d8e058c145d9d5d3e966dfcc92c0980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV3CXQXT%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCmG3BMu8LoTYwXip3wN%2FmD5J%2FpTrjGf8wlo0eXseAfAwIgY4qFXpikvcZvTsp939RrkI2WngUYij%2FEXwOWV0ipNHIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYI7FkZc3G9%2FmHuHyrcA1aiC%2BXp0o9KWBCBqvlRc8kfwnIRQFf%2BOuSx1itkueokQfx2mx6wD3ctuwdfIOqz1O3jmR4uzRGYwe684s5j%2FDdDoJuCVrPuJ%2FtKctfUsyB1vnIQQoVOSl0QRLZ6AOYJaoM2eYkEMCN6ekW%2BU8ebgSVngl%2FLGwh2QQYKfhr17p2kF%2BZ7Dc8kiNOjQH6Bx9b8PTfK%2FM3A4gB2RCi9IrDqvwzjnrB72Ml0JmdotTJ6JUJMdoQwsscifLqugoTLUKJUqmspSL8Xm4Bxt0wBeMgTfnwvznPfk4C40iDJ7sKaKqrzHDr%2BFGAcG58ER6y7IYjnsO1b1AsBl%2F1zCpoiItJCNBFLaziXtumg5E1XjkUGUFPKRxBvqBSG%2B1QnSuj7GoETuJVGprlu2oggSnWyZpcMYlntbP7N686v962XMilgz%2BiGWemSoJPjMVS%2Fw%2BlWsYqHtGAChgRcTxzN5rzbdXunyHTpWAmUYHJmhpcUV4b2zKLeZgt3dFPQVV3P7PG5acOaYVlW1PDkMlaYwhG8axs86n%2FO6lY4ybxYeFjGjOmAp4%2BgSZCAOMKEf%2FNlxk%2B7LceBm5BnJz7lSQ8WScYm045%2BMgSg7w0Cdc0soCbI8g4%2BWAaShaJatbxLm1trtoH4MOry9MIGOqUB24Z8bnSeDDz%2FRinOosr5RjOGPcgn%2FP3iPTuaVet7rpMd%2FNEDHr1C1HzEINEY4WbSSZgd1P8ONIf5vmBrhi40BQ90u6ncVsfklsHVECZyAyI8vgBUr3RdOfzsKBj8i2cKaC7AdtGa1UlT%2Ff5U1f%2FjR6tahKXeWTu5Pv8%2F%2F4J7akGo%2F81pn35s2bM4DI6G4iXbyr0Yz6vmkkHFJ4FWzID2I7SFFAYY&X-Amz-Signature=b689e6f20b9808be539ca91a51907b362516127471ace703adcab77360746430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4JBDOS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICROcOW733kkOIXwHA6TRJ9dJo41rzUJKoTNQJS9gjqQAiAlg%2FZW2Pb2A26CA4CyFREMlO6p%2B7Zev5wM7wFEjCrPhSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMENrfZaGuXUv9FG6%2BKtwDt96XpfH%2BDhmDrKj%2Fv9eJyeR363K%2FB9Ewfe6EJglIdON1YKHwtpS49d2tiV2WWUGeHbRTNZJm9S0iWvdnE5F6zQxzfDgY5E07tRvVPAZIcRQeth%2B8GXgRNmjXfHZ7L%2FPjVnrzxbSOCHu9Iz5BqPI34dL%2F2fdoErdQ2YNw91PI0uHHK%2F5DYIHwbhAnLxO0hBnMyQGezO9p8CI6TRkYLEOmSbazcuxYZvM1P6eG5Kk1MTJYJvRGMW%2B4lMeMjcVN7Gi2Ac696tLfxLpdFJRXMJNcYi98rPjgwAsFBWWZl0aCq5wNmLcWCpxLy0FcKZAGvZF3YUvn9%2FakbH4aBtN6AiPN9c9gjGsn71o8XREj3lW%2B1F4H376pGEWJ5DczfVF4UStlJZixg0%2FqMJPeeZd4S8%2FsvXIhSwF51%2FASTDWwxbi5z%2FrvR4jROrptN%2Bx98VEBExhEyhARhntgsaQmmtl4JdLfc4LeJIV49LqjJwlTziPzT3jVMjUWOkDd6RzjtyCRlwEdn38hVJWgHGh3afeu0CzdXbm2rH3cPoRsKUMF4TZmoEsHCO%2F6DIGNhLphXQYLWdDNiU0dTk4asz7I%2FWlVbXB8yFB8jX2c3sI6%2FpFGrKKMrCQ2L%2FznTWtBNWNtecMwg8H0wgY6pgEj%2BOC7oivHQq5XxcrkzQ%2B%2FHeS808fuffgB3SvJjxcJjKDvmMqe0jMCOWLZAddUctFfPc%2BvnJ0mGGaue02%2FmKjef2Np34qpLkEDwl9BK7BKJYA5Hy6lO%2FdpQf9BmvTkToG8yfzohCL148PnfHqE%2Bgn5KArSF5yNjLYwaIBci8A0kfotCaHRcgFlpOq8IkG4cy2MyAxDUo2GHH2a74yCBJxq46K5Tkux&X-Amz-Signature=09ce0380d389bcc739f594579b5a67619f9ff21f9b41d91936dba50b60d314ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2F4NT6P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDJjInf44%2FBUGbdXwapXedFAKxDy2BLiJF2k5W%2BWAA82AIgC6cz5Cf%2Fj3KBlgIhT9%2BgZ14iief%2FwS3J3WbuYMM%2F3w0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOglRnuQwYdeWRtH6SrcA6YkGOXkm1rFJJTdDsVGwDBNMPYyC5kPz5ZtCXrZvTqscezVsV9QR57eGJSGHOe8aIk8JgGx2qDUuslSxHotl%2Bf518Kfl9vOVHvtvdmj1MT8lDyp2IyICb%2F%2B5L5LroP4P81PfA0WpfFzKf%2BritHuGIQlMwzAnlT5Tbh8hxfIMmj4shgps9puxIdOwSn2jgi7ftRgPSqdXB0RxmMj7zCrkAsjPLcaW46RoRIt53G9aAB596Uokiuin3LSbp%2BUd0aKddLdauHYH0kOd42BLScyCHMimFd7poeShf8PcsgVM%2Bcp22K9AO8N6PoJDwfxvVFadoTT17qSSbhBC1HfKWY82Iq8lbaItL8mwF5835MJGB%2Fl1ydcDtrWFXkhJ3Ey5ngyEgwE1m998dAW6YMEB7BLyskUc7McYI0Tf8G7Qr7eAhdmhZdkDguM74GDoxRrrZI8szPPWs6sBBwC2iGHWcWoYmfL2iR1kFd502oNlj1njDr0EeH41AZjgSoNQQH%2FAzVMXdv6pvIN6uVbNad66xeEjGKygIqmY%2F4RSDBsPn2RnPjDFZ5qsDHmcOxmW7%2BHTB8dsPenrgXYEbXV5idO9eSDj0TnVOUoy5XleAQnIu4Y8RjJh27Ts91JYnZ%2BceYlMPry9MIGOqUBQjEIN7peCehC%2F5S9i14UTuDcu1NWOZa%2BxgxA4dJAfQ%2FdVVAs%2BhrK7FwPEQSnzajAcMqC2fgJ0ej4%2B%2Fm2CREjQ%2Fe01%2FTMdeABgluPyqThDlDj0Y8v%2FXIjrSgh%2BlrVsOIDxdMVHOq6GFyQbun4B9MuqrE9ZV6uh8Q7wtaBjGYRunPZwl%2FUF2EjKNVyzvsYh%2BfkcM6dPFH4r%2BsRyY%2FIs%2Bc8ujrzoBGR&X-Amz-Signature=bff3d7c594322fd9111a59af1c166df795061130f4e8f9e86ec2460b688ec530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
