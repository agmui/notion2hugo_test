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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLM2DUW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgUfUGD7dXdp%2Bv8d0LjiwX6NSgw0arFinTeYxpX%2BLI0AiEAlyXlUC1XdY7yJEceGBR4%2F1wgOL8AgmcDZpnCrHK9nEsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt357qp1%2BspkWZJRSrcA8EhbMYPpt6JOKYVaUcGdbdNSlHAT8JdeeSq08P9brpxZkFovHt9NbwHtv5UyLww4Do5N7hNpMRSPb%2BP53zhq2vsxgMTR0jjZQSjALb%2B%2BLnh2vhPZCoa3OqY6Z7uSq05iOOtSg2eEc1Yjglu3Qj09ZM9t4HQveg1GYXlzGWRqK7%2BTE%2FrkhO6BgVuMioEWpyqyLEZB%2BDNJEBuJlcaKmJlEoDp4q2plGr%2BhmB%2FI5HITkij2KxxhpSNGa9IBbxhXQtR2M%2BA4EnOt1b8VEPnDdjerDLpZYw9S1KJglw7ouVcbna1tr%2F1MCkhxrfBdNUI7vCyjKt%2BDAieUPFK3vDmi61CH5dz5WfnLqR3tdOw8WsJmFu%2BRJkVyEs9cme2WSBycsXGZA3WJy6E0QpJ8tX%2BZNqpDoI5vlj07vYXYXw%2BLLMWSoqOouWxyC8LfyJqTASxTp45KE8P5WQd3ny5K2JJDDGcQpkKCe645kfEiw%2BV9ee9kT9VlhywBVoadi5zAxo20AVGXL8r5xWJZmI1ULj2zOg%2BI0igM7AVHTChooGGGBr9aEtgOXF9cqlFRf56Vjov6HKO%2FYAx3AWZjFsVVkTdnaroOzPeztEXfhbL71hm6onHIp9Wc8lZwsBGVaGZBc57MLmi0b4GOqUBsjybbCJCbDYTIQg38Ky%2FfWEpVKs0k4oCehY8gODj4%2F%2BNY8Dlq%2F0j7kRkGARN%2FwMEjDyuCs6IddA6t6URrjQkx3SryJfJC%2FhIYP8lebQFiJdXn3o484rntuaTDqyKo76z1ZbxIVavVmkxhKFS6QYX9ZglzXAXmmsuHB%2BNqcStj483P%2FGBqfXRjcMqo2jd0PkO8WY0wc1s%2FMEF8Pbz6UcHfSPqCyrZ&X-Amz-Signature=78b57030b6497a6c17329944f9fb4b84f8f808ac9c07e6302f2bdfa17e8b3141&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLM2DUW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgUfUGD7dXdp%2Bv8d0LjiwX6NSgw0arFinTeYxpX%2BLI0AiEAlyXlUC1XdY7yJEceGBR4%2F1wgOL8AgmcDZpnCrHK9nEsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt357qp1%2BspkWZJRSrcA8EhbMYPpt6JOKYVaUcGdbdNSlHAT8JdeeSq08P9brpxZkFovHt9NbwHtv5UyLww4Do5N7hNpMRSPb%2BP53zhq2vsxgMTR0jjZQSjALb%2B%2BLnh2vhPZCoa3OqY6Z7uSq05iOOtSg2eEc1Yjglu3Qj09ZM9t4HQveg1GYXlzGWRqK7%2BTE%2FrkhO6BgVuMioEWpyqyLEZB%2BDNJEBuJlcaKmJlEoDp4q2plGr%2BhmB%2FI5HITkij2KxxhpSNGa9IBbxhXQtR2M%2BA4EnOt1b8VEPnDdjerDLpZYw9S1KJglw7ouVcbna1tr%2F1MCkhxrfBdNUI7vCyjKt%2BDAieUPFK3vDmi61CH5dz5WfnLqR3tdOw8WsJmFu%2BRJkVyEs9cme2WSBycsXGZA3WJy6E0QpJ8tX%2BZNqpDoI5vlj07vYXYXw%2BLLMWSoqOouWxyC8LfyJqTASxTp45KE8P5WQd3ny5K2JJDDGcQpkKCe645kfEiw%2BV9ee9kT9VlhywBVoadi5zAxo20AVGXL8r5xWJZmI1ULj2zOg%2BI0igM7AVHTChooGGGBr9aEtgOXF9cqlFRf56Vjov6HKO%2FYAx3AWZjFsVVkTdnaroOzPeztEXfhbL71hm6onHIp9Wc8lZwsBGVaGZBc57MLmi0b4GOqUBsjybbCJCbDYTIQg38Ky%2FfWEpVKs0k4oCehY8gODj4%2F%2BNY8Dlq%2F0j7kRkGARN%2FwMEjDyuCs6IddA6t6URrjQkx3SryJfJC%2FhIYP8lebQFiJdXn3o484rntuaTDqyKo76z1ZbxIVavVmkxhKFS6QYX9ZglzXAXmmsuHB%2BNqcStj483P%2FGBqfXRjcMqo2jd0PkO8WY0wc1s%2FMEF8Pbz6UcHfSPqCyrZ&X-Amz-Signature=934be33d8fb761731948bafe27ab58f8d5eae881835a3e1f3d926c05fb436835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPZIPUB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFVWxGKxthnhjOTyT8Y0jeThvPsgUVY9L4JRmuuTXtdAiEA5p797EUZg4GkVGVl1Ey9BMi4DBV%2FoMVwoea6shHlWQ0qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr3fexBHSmERjMbUCrcA5jWCgO5HYpFM9GDq5wvv%2BXEep33oZYE7HDHW%2FzbY73MYs7tWhtRwndbflvsSqL%2BrCEvIGhWWQrk0alZBmeESbmyWflyQNXSBZKOplTIpf1%2FzTuqKRKx8JgWFTS5srNmNRcRlltANHbYQAasWeBpoooE62xsey4vu5vsjWIjly99HJlqB1CMufu1OtffD%2B7QHFg0p%2FDeE%2FAdtHToptZBZRdoWfuuEThlhn6Eam0e%2BR4heb3%2FceRnfCAtcuya6LI1IWCcZZKVXpMfWP3mo36%2BytahbOY8SNEb6faBnNg5LZgiFGl4fISDzT55G0lcGt7qqY%2Br7GLRVav4dgr20MIcQRtR9Z9BFCTJg8Mv3lPGhaz%2Fg4d38dzSGUfLzFTfxjtODycu%2B3TFvDJeJ1IcZfy6gv1As1nQdWXPPv3IPBKfdpGH%2BSCXFjjc8FpH5NyVr6hTlrXX5m%2FM1UnbN0VhCjJw1TP4%2F2MJArPaoyivrT3zj3sfqIto884%2Bris7D1gVxkFX5InXfhgoqiTFf4JeECX%2BGBWNd2P8IySIG7jYSigfJGZVsILywuk0ZdmcLvjgUz4Sr1Bd1SoJdBaQrZBI2Oj6HyrfmGT6yQVqJ1TK%2B3TAQ%2FoH14N%2BfW3%2BT9%2FyKE6JMLei0b4GOqUBXTDxNlaxCABlL%2FKQKY4S0WCUb%2F92GT4vn1W%2BzB5hDE%2FZMkSoWF2WsZPCytw27scHqphWpJftg8fFhQJR1AToJgKhJalAX8Bsccm2enCfJxc6pYnElBvUzS0wrLwW0kSSpYMXXElYJbqLu%2B%2FQkD9SjsHqC1HrM%2B3aM2HEH9U3oMWygH33uVz0YTGslMtKyLrolwDYN3s3vL2hmRrq1BWyjxUCadBe&X-Amz-Signature=1e6072ac1862a2b94bdaa741098a804ed1aba3e18439d885682798f4ab636c20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXQW7BB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSX3PBzJGsVyewliEw%2BrajKCL0fevSzOjWoaTsFkfPUAiAfmmE9NH%2FltErT0%2Ftp3EocdorqytvAfZ6VLY%2BzGm0dwiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl2an3oZBWfJppZjMKtwD4KqQuR4uGMxt3dTBgZRN%2BxITsms3rDH%2B4disqqzczMRgD28%2FlGtquMBn1M6FbIrBPRqcbj%2FP51femyhEH2WeueNaGajKDz4By5fQb5NUuG8nrS6cUIYNP7XTABrMlPa%2FPhUEA7zEBSGJLIpoeKF%2BSKEQ7qMlR5YLvJsui1O39n7d%2BLVyWcCz280zStWZeZ0rp0d43ESqs3qYA4WeECEO6TREPrMEIS4RA4xpQZhmcGKm3zK4gpxPGrD2IZvh4%2FqRHQXpw91Ek2C%2FzYw%2F4JWE%2F8P36ovvi0xODwg4%2B0UP39aBIjWdiHZbkxIkUOREsv%2B5k1YrmC4EQ%2FKkRLSvVT0YpfZHPsvNyErfn7kcpBVTNxuHxqhlQVgnq33jwqtcEpj5qFoJZxS8ApNz7A38gyYFa%2B4MJZJsF4kLhV51sVDQynkpjC18f83o5nE3IBhMMTfjWRuDE%2BEYT54VVu63qyjLV2b%2BU9fMZEJxefZhXXEFNg%2BpG18nICgvjLadrNzefv5rzQtrdWIzTWbn62F%2B0jvyhko4OtsCdlvlgJ%2BSwLNo3VnluBJzldpv24ojc0I5vUfpbtP%2Bmv%2FTYPGW7aoi1PJnQLXZ9DaHPOVOAU831YTBh9VTyTAcBCDRH7LUBkgwraLRvgY6pgFJCvhnmSmgfdZNgQ%2BEeWeXw%2FjsMW%2B92ZWqwjHKKowh4rGe%2Fhh%2FpAIjbnhbtX0eVOo%2B32cBl6HUfhX6G%2F4%2FvNCj0bNfzHnwoMZoLCpuInb9dSAt7BgvLW7ckXe5hxHEF4zaJqwRPnyg84hN765%2F4X2xbvR1OIkXczcaQE%2FK7Gmq93P5ft4Wml8%2FG2BLJSSdvVK6ip%2F8dc6x53Xk79bYHg%2FkIPhrVICU&X-Amz-Signature=ae244125042e33caa208b61b73f8d57969763b39490ca3ac1bccd6fe47529688&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLM2DUW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgUfUGD7dXdp%2Bv8d0LjiwX6NSgw0arFinTeYxpX%2BLI0AiEAlyXlUC1XdY7yJEceGBR4%2F1wgOL8AgmcDZpnCrHK9nEsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt357qp1%2BspkWZJRSrcA8EhbMYPpt6JOKYVaUcGdbdNSlHAT8JdeeSq08P9brpxZkFovHt9NbwHtv5UyLww4Do5N7hNpMRSPb%2BP53zhq2vsxgMTR0jjZQSjALb%2B%2BLnh2vhPZCoa3OqY6Z7uSq05iOOtSg2eEc1Yjglu3Qj09ZM9t4HQveg1GYXlzGWRqK7%2BTE%2FrkhO6BgVuMioEWpyqyLEZB%2BDNJEBuJlcaKmJlEoDp4q2plGr%2BhmB%2FI5HITkij2KxxhpSNGa9IBbxhXQtR2M%2BA4EnOt1b8VEPnDdjerDLpZYw9S1KJglw7ouVcbna1tr%2F1MCkhxrfBdNUI7vCyjKt%2BDAieUPFK3vDmi61CH5dz5WfnLqR3tdOw8WsJmFu%2BRJkVyEs9cme2WSBycsXGZA3WJy6E0QpJ8tX%2BZNqpDoI5vlj07vYXYXw%2BLLMWSoqOouWxyC8LfyJqTASxTp45KE8P5WQd3ny5K2JJDDGcQpkKCe645kfEiw%2BV9ee9kT9VlhywBVoadi5zAxo20AVGXL8r5xWJZmI1ULj2zOg%2BI0igM7AVHTChooGGGBr9aEtgOXF9cqlFRf56Vjov6HKO%2FYAx3AWZjFsVVkTdnaroOzPeztEXfhbL71hm6onHIp9Wc8lZwsBGVaGZBc57MLmi0b4GOqUBsjybbCJCbDYTIQg38Ky%2FfWEpVKs0k4oCehY8gODj4%2F%2BNY8Dlq%2F0j7kRkGARN%2FwMEjDyuCs6IddA6t6URrjQkx3SryJfJC%2FhIYP8lebQFiJdXn3o484rntuaTDqyKo76z1ZbxIVavVmkxhKFS6QYX9ZglzXAXmmsuHB%2BNqcStj483P%2FGBqfXRjcMqo2jd0PkO8WY0wc1s%2FMEF8Pbz6UcHfSPqCyrZ&X-Amz-Signature=fde6910eaddd8476fde6762675797a1b0338b9b0a02465e754b153f21a090584&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
