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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWKKKUO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXM%2FIz7Y5qy0MVe79t3usi56nw4l4DZE0tuqmp4cd9MAiEAm4GKfaR1SD1zx%2FhOdKKK9ginXNC2xITY%2B1RCcjrWi60qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1XcfpsTjH%2F6YfWCCrcAwOitg6KywyGiAh3wcmy9Z0AGtzg%2BLiXS2U0Jut5c6yS%2BW0Z8zq0PFabgtdc990R%2FZ6fGdBoyLc4RAGD8ak%2Fs13OmJSLQv0jBUf4qKiM1M7pR5meN8NgakRORjrZeHK2YH4lIXWBcwFwURq9ni9SUQOCxqyjv5x%2F4WjJtVTHMLz%2FniEDLIjODxXN7Pl9XSCLKjOs7F1dLTHXUaTGNT8CVG3UOULKjpisJnc2wUtu%2Bdu4ba%2BdIcBg8G7%2FvMK%2B40t3w6HkAfepPYLQo57i3l4gHW8FpOaGYaLXTnuj6XfT5mD60SfSEt8iZlgWNbm0VIFbHT6SGisqQXx%2FDJWaM%2FI1Oq0Fvy84oT4CScREa8jDFYKBwDSjJe9BC1b3NsJ3oZr8dKwaHXKKk3N4WXbhjwlgkaKcl72WCWHyfuM2KJpe5dNM9x4cnMeqqGUb7DEh4nWlJ8cjDeahXdzdbEVdno3cFepZboFeK34%2BJRHs8iZ4%2BAekhHFK2l%2B0yBMtxxUoaY8aa33lRASXx8mXSkGSFcTHQwF2haTGxw5YBnyOAz%2B6QRleVZ3zlui3L%2Bt9jkQskO3sbv188cUAIzAUOXALPz6cxudyvtKg%2Fu%2B9cVT%2BxNnu0FdnL8xjGy%2FNb9Zd6GsIMOq7hMMGOqUBdn%2F8Z9Jv%2FVuOt3FkRD4SH%2FY1fCkE7izPRYLygDFi3EpV2q5zvQDRqYp%2Bwi3V6bk439kZOxDH2m2egPxUvbMWNnnews7SRuwIZ%2B3qTLHUyVXvdmn4IhAAi85ksN5wJbEalpsBeJ9MoWUK0ZoKPciO74AkThARP9%2FlIHULdWRJ0amnk9qSFXkkodjP1ovNs4l4xTKOJu%2Fvj9cpGENzGTRgUkPvcfbK&X-Amz-Signature=e6870da27922ca6ed34fa7d1d72d7bbb8e7557327b3c752f211467be3eaa7240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWKKKUO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXM%2FIz7Y5qy0MVe79t3usi56nw4l4DZE0tuqmp4cd9MAiEAm4GKfaR1SD1zx%2FhOdKKK9ginXNC2xITY%2B1RCcjrWi60qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1XcfpsTjH%2F6YfWCCrcAwOitg6KywyGiAh3wcmy9Z0AGtzg%2BLiXS2U0Jut5c6yS%2BW0Z8zq0PFabgtdc990R%2FZ6fGdBoyLc4RAGD8ak%2Fs13OmJSLQv0jBUf4qKiM1M7pR5meN8NgakRORjrZeHK2YH4lIXWBcwFwURq9ni9SUQOCxqyjv5x%2F4WjJtVTHMLz%2FniEDLIjODxXN7Pl9XSCLKjOs7F1dLTHXUaTGNT8CVG3UOULKjpisJnc2wUtu%2Bdu4ba%2BdIcBg8G7%2FvMK%2B40t3w6HkAfepPYLQo57i3l4gHW8FpOaGYaLXTnuj6XfT5mD60SfSEt8iZlgWNbm0VIFbHT6SGisqQXx%2FDJWaM%2FI1Oq0Fvy84oT4CScREa8jDFYKBwDSjJe9BC1b3NsJ3oZr8dKwaHXKKk3N4WXbhjwlgkaKcl72WCWHyfuM2KJpe5dNM9x4cnMeqqGUb7DEh4nWlJ8cjDeahXdzdbEVdno3cFepZboFeK34%2BJRHs8iZ4%2BAekhHFK2l%2B0yBMtxxUoaY8aa33lRASXx8mXSkGSFcTHQwF2haTGxw5YBnyOAz%2B6QRleVZ3zlui3L%2Bt9jkQskO3sbv188cUAIzAUOXALPz6cxudyvtKg%2Fu%2B9cVT%2BxNnu0FdnL8xjGy%2FNb9Zd6GsIMOq7hMMGOqUBdn%2F8Z9Jv%2FVuOt3FkRD4SH%2FY1fCkE7izPRYLygDFi3EpV2q5zvQDRqYp%2Bwi3V6bk439kZOxDH2m2egPxUvbMWNnnews7SRuwIZ%2B3qTLHUyVXvdmn4IhAAi85ksN5wJbEalpsBeJ9MoWUK0ZoKPciO74AkThARP9%2FlIHULdWRJ0amnk9qSFXkkodjP1ovNs4l4xTKOJu%2Fvj9cpGENzGTRgUkPvcfbK&X-Amz-Signature=b84152638c9705559c59c13c2ba2d063b2ce67d2ce6011946ececee35e406e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWKKKUO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXM%2FIz7Y5qy0MVe79t3usi56nw4l4DZE0tuqmp4cd9MAiEAm4GKfaR1SD1zx%2FhOdKKK9ginXNC2xITY%2B1RCcjrWi60qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1XcfpsTjH%2F6YfWCCrcAwOitg6KywyGiAh3wcmy9Z0AGtzg%2BLiXS2U0Jut5c6yS%2BW0Z8zq0PFabgtdc990R%2FZ6fGdBoyLc4RAGD8ak%2Fs13OmJSLQv0jBUf4qKiM1M7pR5meN8NgakRORjrZeHK2YH4lIXWBcwFwURq9ni9SUQOCxqyjv5x%2F4WjJtVTHMLz%2FniEDLIjODxXN7Pl9XSCLKjOs7F1dLTHXUaTGNT8CVG3UOULKjpisJnc2wUtu%2Bdu4ba%2BdIcBg8G7%2FvMK%2B40t3w6HkAfepPYLQo57i3l4gHW8FpOaGYaLXTnuj6XfT5mD60SfSEt8iZlgWNbm0VIFbHT6SGisqQXx%2FDJWaM%2FI1Oq0Fvy84oT4CScREa8jDFYKBwDSjJe9BC1b3NsJ3oZr8dKwaHXKKk3N4WXbhjwlgkaKcl72WCWHyfuM2KJpe5dNM9x4cnMeqqGUb7DEh4nWlJ8cjDeahXdzdbEVdno3cFepZboFeK34%2BJRHs8iZ4%2BAekhHFK2l%2B0yBMtxxUoaY8aa33lRASXx8mXSkGSFcTHQwF2haTGxw5YBnyOAz%2B6QRleVZ3zlui3L%2Bt9jkQskO3sbv188cUAIzAUOXALPz6cxudyvtKg%2Fu%2B9cVT%2BxNnu0FdnL8xjGy%2FNb9Zd6GsIMOq7hMMGOqUBdn%2F8Z9Jv%2FVuOt3FkRD4SH%2FY1fCkE7izPRYLygDFi3EpV2q5zvQDRqYp%2Bwi3V6bk439kZOxDH2m2egPxUvbMWNnnews7SRuwIZ%2B3qTLHUyVXvdmn4IhAAi85ksN5wJbEalpsBeJ9MoWUK0ZoKPciO74AkThARP9%2FlIHULdWRJ0amnk9qSFXkkodjP1ovNs4l4xTKOJu%2Fvj9cpGENzGTRgUkPvcfbK&X-Amz-Signature=afdd06bd3e1491560059b56ec55d9942fa299f08fd0275b789741f56734c9104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRWMZLP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHOnP9LCqDMIojQfdd3d26bF4VZydnT6GmhnN3tt7uzAiEAhgol%2FR60o%2F%2FhIWuvpUHE2QbTcQnRjUGIgGN2OIPcO2QqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP49LeXEgu33tRXKhircA7IjL3caQbPZeN5Y8SI4ZaH0h46yR0DuIm7l7SLQZcc7tqfdGVXzsu05bTD3epxXaSiLkOB4HRmw8H5%2FW1e7r9apcWX2soakLn7lPOirLEaPmbDqVz0g1If1C7zmKvF0WBTusf3%2FOvfCdMdFYrIvnGIw8qLd0yiX2FIz4LmYsSF2JYACn%2BD3UWLyWP4szYN7s0vIVCNQToH3ERyH3N0rIKMMCWp7Brkaw5M6sgjXsMOhOHseDz4aU6ze5nEeN%2F2alb80BwYkU6fOSGpglUfzPQ2VFerrLijZSJmkEDjM8ROpP7e2w1baF%2B9SXV7G70g2TqwYCkQuv1kwowgd%2BB2SITv7JFeTaQIasM5HnBcFZx5QXeD75%2FqNcLkpneLT72vo8m7fQeHungR4ZnvfYrzbgISTI41vlzHQBdk%2F7GcbYKK5tYxKc8z0fMsIw%2BBlOGhAzvfsrAlfQ2QkSRBXiuDgaL5k1hQDxbKLfEsBo%2F2grgAP%2BQWFvOANYPveHgUe2gWBjBw5EFyza694%2FcBZAuxGM0wNrfD%2Bs5gwPNvUzALJUtb2zMfl6sjKX8O3G3e5SX1UYNIB5QElCKW98oPxiCpnspLxuQ6ld73VtQ%2FzzsINJVFqFyN2GzW2HARNZQhHMJm7hMMGOqUBEgCQaDzlN20IpToZAuhzJFgI7yDb3NZKCZvCYHABtY%2BmdF7zB4zNgCPX67lmYtf0NWF5Z9mFNBPJ%2Fyf%2BBAaJ%2BxwGOIoq9ZVfQQzC5RF8lsi4Lp6ZlEoo%2BUgKEVKb16FeOsqESVYGV409FsEBd1xVcgQgsIV29GNC1T95Dwte9Z8VufUFwnf6KDU4vp4XyRJ4wMva2z5X%2BKEZcBYlInDBkypBWPYi&X-Amz-Signature=9ea976296df63c48b2d0a85dfb50333df2931142349cb6761fb65a34ff6bad27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NLAZQX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk%2BA17GwmpOMHa2HLN2y6DyeSIWpNgMWGqAciQHggLoAiAyk%2BE3E36SLxq%2BSp4UUErJl5%2FQ2qiH2cSzk1y2IDlgjSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUkPfFcazpzydUUkvKtwDxuMJu6rAdoCENvkGx11NJNjCsSAiZEmAwx6Xg4CP51fAM0sim8Swvzd0LHWmIJ%2BSs6Nv0Es5QdpRbRPAfzYn6iWIRjITYXsJQFoCXXPIEXM9NdKvK7Tw%2FN%2FRvxYG%2FZ9aqXWFgtEX9vKPSCd0lLb3jPSm7ZgG%2BX8uXkrq%2FG35tHo0cUhlMjLDybYhI49LZCdQhuBhij%2FdroZDo6bzd2Kv1q3EXzjITci6rnP1bjk0zQzQQzUms7dJTh2CSp5SQXjmYZ2Cwy6yq5vdxP2pdFBGMcH%2FNiBWWIdw0O7a8t4%2FKIgKJ1NtjVLi4bW5cBk1bc69Prhl%2FxvYZ%2FJEW5pzsU6L2HwmcAEo32aVyYGQpG47hKBcI32vXdbZ00gk1iewkanp%2B1I3TMGg%2BZcwPvIUcMyWjUUJ1uHnUIykqjPH4YE3i0wm%2FxkqkQkaFFIvzIdlNMFi1aHY1EUQdJNV2tI5zQxMXj4%2FPkTcsMuALPRF3uz9221imU%2FdQR3TB78Ti66Lhho73lGb4L%2FKoInqvcwOI7fj8SsO18hp8PqYDSb0EXco2JdfBWFcZ7bh03DUX0SpGOkwx4svtZL2kAT4B6MzpODEMRScDMNqEn09FA5IhWyIC4swAO6FrtYYhrolADowgtiEwwY6pgH3ETMP7WDkyxnXh8ilyV4VUkaYUaZvyqBeMkDylHKxARz43frlrRCyr0jlE03PZSMKj5BxwOuTVWj%2FPJ%2FK5s0G9reHRP676KkPx8APOpw4Qbr9wM414Odn4wEevIoqJcv3ekVMxmXJj7TNHtyCfCvLujyfAVorLTqfQG%2FQc7nq%2F48iD%2B9tQRVJ7OO5q9i91iPlDwAXI2u9h9XBVroOtTu%2BMxFMfJuS&X-Amz-Signature=2ee508930140b27d0d33600db6889cb3fcabac969f06b3c05ecd8f2f8ad1bbfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWKKKUO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXM%2FIz7Y5qy0MVe79t3usi56nw4l4DZE0tuqmp4cd9MAiEAm4GKfaR1SD1zx%2FhOdKKK9ginXNC2xITY%2B1RCcjrWi60qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1XcfpsTjH%2F6YfWCCrcAwOitg6KywyGiAh3wcmy9Z0AGtzg%2BLiXS2U0Jut5c6yS%2BW0Z8zq0PFabgtdc990R%2FZ6fGdBoyLc4RAGD8ak%2Fs13OmJSLQv0jBUf4qKiM1M7pR5meN8NgakRORjrZeHK2YH4lIXWBcwFwURq9ni9SUQOCxqyjv5x%2F4WjJtVTHMLz%2FniEDLIjODxXN7Pl9XSCLKjOs7F1dLTHXUaTGNT8CVG3UOULKjpisJnc2wUtu%2Bdu4ba%2BdIcBg8G7%2FvMK%2B40t3w6HkAfepPYLQo57i3l4gHW8FpOaGYaLXTnuj6XfT5mD60SfSEt8iZlgWNbm0VIFbHT6SGisqQXx%2FDJWaM%2FI1Oq0Fvy84oT4CScREa8jDFYKBwDSjJe9BC1b3NsJ3oZr8dKwaHXKKk3N4WXbhjwlgkaKcl72WCWHyfuM2KJpe5dNM9x4cnMeqqGUb7DEh4nWlJ8cjDeahXdzdbEVdno3cFepZboFeK34%2BJRHs8iZ4%2BAekhHFK2l%2B0yBMtxxUoaY8aa33lRASXx8mXSkGSFcTHQwF2haTGxw5YBnyOAz%2B6QRleVZ3zlui3L%2Bt9jkQskO3sbv188cUAIzAUOXALPz6cxudyvtKg%2Fu%2B9cVT%2BxNnu0FdnL8xjGy%2FNb9Zd6GsIMOq7hMMGOqUBdn%2F8Z9Jv%2FVuOt3FkRD4SH%2FY1fCkE7izPRYLygDFi3EpV2q5zvQDRqYp%2Bwi3V6bk439kZOxDH2m2egPxUvbMWNnnews7SRuwIZ%2B3qTLHUyVXvdmn4IhAAi85ksN5wJbEalpsBeJ9MoWUK0ZoKPciO74AkThARP9%2FlIHULdWRJ0amnk9qSFXkkodjP1ovNs4l4xTKOJu%2Fvj9cpGENzGTRgUkPvcfbK&X-Amz-Signature=d8900ee954500b0fe305d7471fe19df3b77d902422e823b6643322e8dd6fbc87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
