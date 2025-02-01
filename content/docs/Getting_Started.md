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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZABZJ7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOXReK4wYK4lTuxN1eXJScjprYjqOCPoBycBJ1liKMIAiEAr3D0ChhCWRUfdcREFXIhG2IQNnEQrRPYhn5fY%2B18i3wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkdQm2BQ5moBEa2aircA8wvJTstn2wAkn6MFIEbiDqCPXkDBUhALWcqPSF7t0Na9cKQPfpnjZbnO8%2FgxIUZkBYVEpOccTaiD09ne2FwVGfmwmzaIJ3r2G7c5ayPBpS%2FcPgtnPs90HCguYedttXGhCjzj0ZINcDiUK95UxQOhIfhTmyUMfxIripcxUzvIS8F%2FjK3idfE0n55P6hYmcEbxx6RWIA5VPROAWcIo5i1cWkd9joiaxgnus1FFQcwnbvtRy%2BH%2B96GtjnExlw4uVCZLdbS06PAmU3iv%2F4dF67j%2FQN8KQm9c6sxM%2FAK7RJtyPrZwTzLS8MW7ySeOUR1hbSDrPW%2BULfCRrjEYO5TipIWORXU5oNZg5D3esegOzHhIgI938Fr0cc2YT7JarmHXS505MV9AjVOO40IbGzd3I3kfXSUtXPFfzuAP8ZOEZRLu%2B%2FHOIwV0d4ul8jOfuegomJDFEcSWU9q%2F2J%2B7beTz%2BrbPUOhSRKO08qRHouQmSRGQDz4Q1Lb17fqAikHv9xG8RLpzZ6IQCb2uKN1%2BJoaarVDOLdyYOXN3XA6Anm0M4OAYaA%2F5jjkpT31%2FNirkBqe01Zgdri3DITXHx61pFLQ7VPyO5YMj%2FkAb404TyB27EzJrhV2GpPY0OwVi5QVpTxPMLql97wGOqUBneq5epNz1M4Mxwu756VIbZpNSijqlO6WzDg9RChTlIUATLW1aO7W8uEGiv3KKI9UU2RKh2doOOfz8XtQckv7ffIypFKKnTQ70lrXDQI40K1XDjF%2BuYmNlJoqP51SnveembtqeSu0uq6urZfZX1xK6%2BewHzjn%2Fe8ixeAy3OUklt17mnUKjnmik3ucdfO25kcLtqp4lo4fVRXWgosS5%2BaneyBPGSzw&X-Amz-Signature=db51303a6233a3304ffab3a29054e13a04a6ed17424f167fc758532a07e786f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZABZJ7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOXReK4wYK4lTuxN1eXJScjprYjqOCPoBycBJ1liKMIAiEAr3D0ChhCWRUfdcREFXIhG2IQNnEQrRPYhn5fY%2B18i3wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkdQm2BQ5moBEa2aircA8wvJTstn2wAkn6MFIEbiDqCPXkDBUhALWcqPSF7t0Na9cKQPfpnjZbnO8%2FgxIUZkBYVEpOccTaiD09ne2FwVGfmwmzaIJ3r2G7c5ayPBpS%2FcPgtnPs90HCguYedttXGhCjzj0ZINcDiUK95UxQOhIfhTmyUMfxIripcxUzvIS8F%2FjK3idfE0n55P6hYmcEbxx6RWIA5VPROAWcIo5i1cWkd9joiaxgnus1FFQcwnbvtRy%2BH%2B96GtjnExlw4uVCZLdbS06PAmU3iv%2F4dF67j%2FQN8KQm9c6sxM%2FAK7RJtyPrZwTzLS8MW7ySeOUR1hbSDrPW%2BULfCRrjEYO5TipIWORXU5oNZg5D3esegOzHhIgI938Fr0cc2YT7JarmHXS505MV9AjVOO40IbGzd3I3kfXSUtXPFfzuAP8ZOEZRLu%2B%2FHOIwV0d4ul8jOfuegomJDFEcSWU9q%2F2J%2B7beTz%2BrbPUOhSRKO08qRHouQmSRGQDz4Q1Lb17fqAikHv9xG8RLpzZ6IQCb2uKN1%2BJoaarVDOLdyYOXN3XA6Anm0M4OAYaA%2F5jjkpT31%2FNirkBqe01Zgdri3DITXHx61pFLQ7VPyO5YMj%2FkAb404TyB27EzJrhV2GpPY0OwVi5QVpTxPMLql97wGOqUBneq5epNz1M4Mxwu756VIbZpNSijqlO6WzDg9RChTlIUATLW1aO7W8uEGiv3KKI9UU2RKh2doOOfz8XtQckv7ffIypFKKnTQ70lrXDQI40K1XDjF%2BuYmNlJoqP51SnveembtqeSu0uq6urZfZX1xK6%2BewHzjn%2Fe8ixeAy3OUklt17mnUKjnmik3ucdfO25kcLtqp4lo4fVRXWgosS5%2BaneyBPGSzw&X-Amz-Signature=a32fa818719dc20f296bdaa9e588ba6948cc60acdbc7dfbf08cb973fd58fecd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4D7AAW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9MSCj35WtVUbXtHVxWUdF2RQwjR4k2VYm0ute71bFvAIgDgtAU%2Bq0yazKQo23fzZwIiVmyJ2btHnci%2Fc%2FrnHLbQIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7KPTL1L%2FNawVJWxCrcA%2BnamKbKxhGskbS1siPcYD6RdkxC83gNhIAY8VfPgtEeziDcVuLt6CIYxnaZXkR1w%2BUOMUpsD2gaX4xpTOjRhYR5O1GBRExJlcx6%2F2IgwUtRbb289NLxqF9W9a1ul3PgEJ2LCGYUi1vFKf2PrruoX5fNBACSahnmfV%2Bi1Ra8yaFksNqNbgaLA5E64vf2RURIXCkGiK1P0amEzwzFeAEvDuF8zTNFH3LJVWkL9BHixYSdXBXIM%2Be81Z%2FZxvKMeRMdEU8L5%2BLX5qW1K%2F5tDiKpbTWGmymOZDx2OByC7uF5cfPArdS3GOyvSiO3uD6cqmoI5Wm3BV1aGvCfjW9OkJ2zEJ6KUGvt8zOospHa5Sa6T%2Bqk1xEI%2Bwp4kTicvAvJrjqS0vGDJN3wvau2LNkhLTJ2LLVkGNTSVfgZb1sFGYNTN5cRQKj4xS6g67Hr1DK7o8Gkqm38KhZPXtqy4Lr%2FZ9xFs76KJlij11vHKF55jMXiHtQ2u85eFpxD8O5j3PSkCuwnNJoyvbwBqVgvmK1UoKf7vmDP2gqh5sc%2BAufkokdDtgDoNrHyEaH2NPUsuV3yYUwTEwO4AuVGjUTjHc2pwY6AvPgp6fPpWeZnn%2BSG7SktQ6fZju1ZxfMoA5%2ByUeGyMLml97wGOqUBW82aSO6QnbGSV3dhzbZG8Y3BdQSP0h00OXPQpX70xK7Pn4VXWtg%2BX8c9a6IDekPjKERCFCmtd5USTbGXCa4jB%2FnB7MuW5g0rWOo9LaCzrNGGVLOqtzlK0UgdcHdd%2F5gf%2Fe6JG77gkZuhGMyCKFzwaLhoM77r6OJ%2B3%2Bl9Swjv%2F3b2nXX0xXMDiQYxsUsfC1r1tPXNbChUPPllG1sorWIDDrGxGMCf&X-Amz-Signature=6a630c121ff6fd926f86b7134acd78fcc4551e9a3cc26b11754eb61abbe9d9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676S4PY5C%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrVaEK9eAWl5LKhLct7HsOrHBW1dCsfen2dnZZ4kyeQAiEAi%2FGw6aH8mJ%2FC1vf0C0qEOgAoHp1rqOYrIpF8UisEHkwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrF%2FmyLnnzVGTyPICrcA8CFHkkzwCzrJuHWJIkHMOgdnKwVd32MSVvW8rL4XQL%2BCDTKha1OrdcNrfkKCRPILDW2d9CupDCOUK3Ej7TZPofRpnS7yq7mz4r6xiOfsyFSeKNYa1wow9T%2BkYRSoHYqajUEEG%2B9krgoQ5%2F0p0XSVNGm5CGgY9JtsRjPIs8xZTtYARtNSU5NHxX%2Fuz4UnpSq%2FwUcebOlp6pwDkV3%2BQK%2FjKccNvps32qPYfPLfY6%2BF4M%2BMhgZFQ2q0Sw6hUm1CATcwhN3x8n%2B1yzZIu9TXW721ua0OGlgzULoF1feZ1pEZgB3hAnZhh4p%2FHscld%2Fl5BMIFFqo6NFkR2TN9%2BQIEV4lGifpO0RvoTCoOpYB6sxNK0acuYG3dggO9iZY1Vc8WcVBEUNcsejeYuvV%2BmPFf3oPOHaFgNfxC36sOIT0%2FUtXi%2BfZdg6%2F3nEQFdPsKLnawtzJvZhU4dQxZ%2Bbu7VIqt1CXv%2Fkb%2BcriQXUlHTEvNEJrmsTotzQWuSgXmQWHxgM70oKdqpZRDgTrpcFv9RVgeBhKcu7CMD3bPpIdCStef3Dt0AQSHOylFNIuFyJy7Tpf7WpuCgMtGeW7arP6Trxji00m%2F3fH4suSXLlvWPrK6473zw5%2Frxmi8CpabqLxRM%2BcMOal97wGOqUB4Ub%2B%2FbkDcFhDSbX%2FczFzserN%2B9f1ppU6puZcwrE3slUcM%2BgJVCoOvW1nYGDyUU%2FDXazFqUViQEoyw35JbPOQXQFmvWTjpWPUG0rKwjegoLAJamEkmi9dxVEDdXssnTb%2FIc7vpb80jRPa%2FMZeIAfOkOkqB4hknnw2wqWA57OVEg%2BDPNJHF%2BeziCg5auZ5an3jMu%2ByLmgcFpZNT6qbh8CwHrO9lwfC&X-Amz-Signature=5c388050392a12096261acf8b85d39c8da806852da1e21834cb0b41ef3e22a36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZABZJ7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOXReK4wYK4lTuxN1eXJScjprYjqOCPoBycBJ1liKMIAiEAr3D0ChhCWRUfdcREFXIhG2IQNnEQrRPYhn5fY%2B18i3wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkdQm2BQ5moBEa2aircA8wvJTstn2wAkn6MFIEbiDqCPXkDBUhALWcqPSF7t0Na9cKQPfpnjZbnO8%2FgxIUZkBYVEpOccTaiD09ne2FwVGfmwmzaIJ3r2G7c5ayPBpS%2FcPgtnPs90HCguYedttXGhCjzj0ZINcDiUK95UxQOhIfhTmyUMfxIripcxUzvIS8F%2FjK3idfE0n55P6hYmcEbxx6RWIA5VPROAWcIo5i1cWkd9joiaxgnus1FFQcwnbvtRy%2BH%2B96GtjnExlw4uVCZLdbS06PAmU3iv%2F4dF67j%2FQN8KQm9c6sxM%2FAK7RJtyPrZwTzLS8MW7ySeOUR1hbSDrPW%2BULfCRrjEYO5TipIWORXU5oNZg5D3esegOzHhIgI938Fr0cc2YT7JarmHXS505MV9AjVOO40IbGzd3I3kfXSUtXPFfzuAP8ZOEZRLu%2B%2FHOIwV0d4ul8jOfuegomJDFEcSWU9q%2F2J%2B7beTz%2BrbPUOhSRKO08qRHouQmSRGQDz4Q1Lb17fqAikHv9xG8RLpzZ6IQCb2uKN1%2BJoaarVDOLdyYOXN3XA6Anm0M4OAYaA%2F5jjkpT31%2FNirkBqe01Zgdri3DITXHx61pFLQ7VPyO5YMj%2FkAb404TyB27EzJrhV2GpPY0OwVi5QVpTxPMLql97wGOqUBneq5epNz1M4Mxwu756VIbZpNSijqlO6WzDg9RChTlIUATLW1aO7W8uEGiv3KKI9UU2RKh2doOOfz8XtQckv7ffIypFKKnTQ70lrXDQI40K1XDjF%2BuYmNlJoqP51SnveembtqeSu0uq6urZfZX1xK6%2BewHzjn%2Fe8ixeAy3OUklt17mnUKjnmik3ucdfO25kcLtqp4lo4fVRXWgosS5%2BaneyBPGSzw&X-Amz-Signature=07287a6a9f58dffe5c56bcbe358016a7b311acffe3ee97482ae2c0bc387afca4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
