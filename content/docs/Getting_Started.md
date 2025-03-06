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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4J4QR6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGNQVbK1oepPIiZoOcbEugY5VdJl6CIbM6wFIcfVzXtAiBfpQvdXG%2FRBpKcgVsFoD3Y5W%2Bvl1N4Y2ere70rHYPQeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMyog2%2FkRraBk5XB4TKtwDCxfLUyeVfGuX66LIUGCZ3aQ8NOVIRNFFA9jIcWx%2B1EOIodGG%2BGXXVNz08qXlSmh1LXwLu8GAsaIzSF0JWJ%2FJvWWksauARu%2FMy9BsYlApjyQToNThV%2BD9J3o%2BITD%2F0B8ad5pVZk36pB9l58lY%2FX%2FVc7jT%2FeRfc9Jjw2M5zg4BsZ8o04HJJu0olYQKjYdfXDKoMKWY8ICXF8sOr3%2BCTvADf27ZrCouINp0Oz%2FAACsvWU1TgUWZWsTqTWuq5MKjZIbs6AdHjMX%2FGJnELLXB7vHNbD8Z2lbY2qge7XE3izoFPZm2G0%2BOmkKcGI7pVZckAlw6Ok2qUdnLph95CM72sccfKuoaN6CwLMAGK5HPVh01JW02gFMzLaX%2FC3saP9rBv8AmTpDVMC66yDgxFz58n6fZRQj5Aa%2FfpIQSPMs4ZQOD7HFbaL09qC0SnFsfcmWElJnSUQQQFIpiUk4OpxbAZUqmCTJifmknzCQSpRASt%2B9ixwzWK86khwzAkZfhYVPhSzyPatExxA5r0UtQWTnphsE453yXG9GGF2RGxcN0yA6qX3PX38N5NwXcKkS1p53vxjoP%2FC3Fw4CSHihlsXh3%2BbBl7kdoa38MCIEJXykJgNLv082p7rz3RiUbvFMnVFUw5MajvgY6pgER4%2B4ShPxQV%2F%2Bc%2BuGNgtEQvD68OmaXv%2FasqFxNDA0tAMl24U4mRbd3rIT%2BShGT9AVPHvNdHRXBnV76wyzbfu9zDYhbL4h%2BpISJD%2F6XdlDq%2F8IF4r2z%2BRGe7WmwSCg3p19u52SlG83MoKGB8p7Gy6jjwfuC5fw9tOkb0g9rrxMdHvKE5XTwbG4cLKogbfjU0vtXad1jsuLRr9Ym8EHJsO6ooRXUMjcW&X-Amz-Signature=1a8f053e71647035b8917638b56ab643423e816d4a4e2da7419c514ccba1802b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4J4QR6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGNQVbK1oepPIiZoOcbEugY5VdJl6CIbM6wFIcfVzXtAiBfpQvdXG%2FRBpKcgVsFoD3Y5W%2Bvl1N4Y2ere70rHYPQeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMyog2%2FkRraBk5XB4TKtwDCxfLUyeVfGuX66LIUGCZ3aQ8NOVIRNFFA9jIcWx%2B1EOIodGG%2BGXXVNz08qXlSmh1LXwLu8GAsaIzSF0JWJ%2FJvWWksauARu%2FMy9BsYlApjyQToNThV%2BD9J3o%2BITD%2F0B8ad5pVZk36pB9l58lY%2FX%2FVc7jT%2FeRfc9Jjw2M5zg4BsZ8o04HJJu0olYQKjYdfXDKoMKWY8ICXF8sOr3%2BCTvADf27ZrCouINp0Oz%2FAACsvWU1TgUWZWsTqTWuq5MKjZIbs6AdHjMX%2FGJnELLXB7vHNbD8Z2lbY2qge7XE3izoFPZm2G0%2BOmkKcGI7pVZckAlw6Ok2qUdnLph95CM72sccfKuoaN6CwLMAGK5HPVh01JW02gFMzLaX%2FC3saP9rBv8AmTpDVMC66yDgxFz58n6fZRQj5Aa%2FfpIQSPMs4ZQOD7HFbaL09qC0SnFsfcmWElJnSUQQQFIpiUk4OpxbAZUqmCTJifmknzCQSpRASt%2B9ixwzWK86khwzAkZfhYVPhSzyPatExxA5r0UtQWTnphsE453yXG9GGF2RGxcN0yA6qX3PX38N5NwXcKkS1p53vxjoP%2FC3Fw4CSHihlsXh3%2BbBl7kdoa38MCIEJXykJgNLv082p7rz3RiUbvFMnVFUw5MajvgY6pgER4%2B4ShPxQV%2F%2Bc%2BuGNgtEQvD68OmaXv%2FasqFxNDA0tAMl24U4mRbd3rIT%2BShGT9AVPHvNdHRXBnV76wyzbfu9zDYhbL4h%2BpISJD%2F6XdlDq%2F8IF4r2z%2BRGe7WmwSCg3p19u52SlG83MoKGB8p7Gy6jjwfuC5fw9tOkb0g9rrxMdHvKE5XTwbG4cLKogbfjU0vtXad1jsuLRr9Ym8EHJsO6ooRXUMjcW&X-Amz-Signature=4d507eea24934bd75ec771dd5c9ae51408d44502822fcb058d9877d8dcfb5b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFOAXXK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyPIBLqyVp2qPY87%2FoU190GBw1RxmB84zoGjrDENUIcAiEAr7kcSLptJVftcdzTMmlzODNbjifVTUxVsUV4S2kr58cq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCdJJ0vXEyNPuKdPJyrcAykG6LR30KhknSHJdbA8r%2BbPU01tiHIJuQmrf8BPFHvCZqP82n7ntnVfp2jkGs479Ln4euVadhxcRabfAuZP8wtCna%2BI%2FOUjos3VO5aP%2FpwpGicoCtZqlkeZWbhhkn1y%2BRQ6YKVOppMcKCTttIMltOmsNZY64x%2Fw2gDoXCyqdY8avhT02WNx75AfkB5JtquyROFJQMhjcE3SLk0LXLL9VwMwMIg1BWiN%2BS4EpUjTI7DtHl7E855T1cX5xa7Fno2WrPQVQcao%2BhjBrRqfdgZCA38VvrfgYufLriP3MOihcJJ%2FDiddjirxmDj1EdENz%2FfnwOzQ0CfTRu2vbu8RfHDyloVNe04i7GXF96Nze2cTvPKYln2hCaXwdAeL2CSlz3jKh294cvOVujCogIsz%2FRcTOg%2BAFn3BvAqiRm95Dv3NZjAiUgQXQLFujXfu42bcfAWILMTBAC7AM4tjQDQFqRCNSvaXHwVB2VdYbFqPzxBe%2Flz5XI7TyKTVFKp2FA9sLQoxNbMF2t%2FqYRIB4v%2FipPPpNxTChRYT7nEA%2F8t0QLA9wPcCDNndCWWUbfkykoSQdR03CN9QeoL1xPkLZNiTAXnk2TB%2F50CIP1gfoB4P%2BY%2B3ywf60Tsz4XkaO%2F3%2BggpzMLTGo74GOqUBcbvoVC%2Bod4J4c90q0VF4zr3hNFXCbJJdDK5lHgolzffYIGU9Z6GxaoIlMK2akRlZGL8UNKbPALxDrZu90FRr5WB4Sb76GA3Z4em%2FP%2BR5D7w73j34rCGNxvSGlel3XzF5pK1JHJJwtNjt8mvZxHI1P5jOz0kVLm1xv7ubf5V9lLjbccK3iZpGQ7YWx5GkGJCfhgiezgaOo2rZjxS0v8Xn0WcKTvZV&X-Amz-Signature=c1e0b0e4817e6a0f04370ebcc47b671726969c141cd722492cebdf970026dc39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZ7X5AJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7YtVYfT%2FtC2OeQbX9cxVdvqeo66QsAs64B%2FmADobJqAIgBKKsbIhrqRxMkeH%2B%2FrF1zGIJMX0gyeWc7N7os24qprcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLCLsPJUXfylODWWKCrcA3uaDNO8v9eueQXMNjKrh1%2B0d5ayWhGXIy4qDsTSlozEZRcTPuFsTJbpDBQoMppbao2VNMsYvKpgXUcEsXnjuovK1PiUjcjrinrEQplOfcZCTc5gbqJET0f9omS%2BZqvKIXC5NJyv1ATFdnfwWce0vnWQI8UJ0VRPdiOOilDH7qWPKwBdzcbQyYDol4W%2FTvibSaq%2FcJQ53zoDv7nWC9ETB7OhZSc4OPzE9dv7GrcTOaQ%2B72KtBKMIwlSLqwzIYP9SVyGTHwgSZBpPB1W%2F0R1KQzNr1cRfMfKDLJpvjOvKhz6kUhgRKqD8H0ixB9TuiI%2Be60GNvvEUew9bAzwJxsXExsrfuwaGbOn7ksxMdWX2tBjujFdX8PKXaGTDTEKdYSe2AiT61WU9Q1ASL1nHmc2DOJQo%2FX0hYANrBcH9y9KPTZ38MsR1TnsBJSKwSmheiNUiiqebt%2FJ7QgzoYZw8ouwnLiFDF6ibJPvPQwE2xV1nnaZmglfjHmK4k4bxMOAZ3xKzCQWqkEN8hrgcZlFGCa5FyQ4sP5%2BAD51XJWZyLMr0UuknTjkKf4Kz8jHF3gjMf0%2BxG9DqJbG%2FOJ%2FPD4TuTV3RqocTbfP896lVEjCUal1%2FZ4C1dcWOF3FXIJx0KQxfMO7Go74GOqUBIK%2BKeQI%2FirwQKt3p7nXeBA6kkEcYbXG2IYpjlvhRSGqnlcl0%2FoxWpqjzyh4DHopMujLxQy62hEMV6OHPbQZKB3yrJi0W7PFD3OSxLB3rVJADwAIQMezUOR5q4TVEB%2BrUmITyoZuUXDJmsPWJ7nfafvvMQj18X21uiez8fmuYG3rYVrkiYRSmk%2FFVoHcxpaaY%2FkMCM3b7YLi36K26quD1e9RufH33&X-Amz-Signature=63024e4a56df36f51275da8804616ec7bba36c0cf3b4c804125194683ee82466&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4J4QR6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGNQVbK1oepPIiZoOcbEugY5VdJl6CIbM6wFIcfVzXtAiBfpQvdXG%2FRBpKcgVsFoD3Y5W%2Bvl1N4Y2ere70rHYPQeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMyog2%2FkRraBk5XB4TKtwDCxfLUyeVfGuX66LIUGCZ3aQ8NOVIRNFFA9jIcWx%2B1EOIodGG%2BGXXVNz08qXlSmh1LXwLu8GAsaIzSF0JWJ%2FJvWWksauARu%2FMy9BsYlApjyQToNThV%2BD9J3o%2BITD%2F0B8ad5pVZk36pB9l58lY%2FX%2FVc7jT%2FeRfc9Jjw2M5zg4BsZ8o04HJJu0olYQKjYdfXDKoMKWY8ICXF8sOr3%2BCTvADf27ZrCouINp0Oz%2FAACsvWU1TgUWZWsTqTWuq5MKjZIbs6AdHjMX%2FGJnELLXB7vHNbD8Z2lbY2qge7XE3izoFPZm2G0%2BOmkKcGI7pVZckAlw6Ok2qUdnLph95CM72sccfKuoaN6CwLMAGK5HPVh01JW02gFMzLaX%2FC3saP9rBv8AmTpDVMC66yDgxFz58n6fZRQj5Aa%2FfpIQSPMs4ZQOD7HFbaL09qC0SnFsfcmWElJnSUQQQFIpiUk4OpxbAZUqmCTJifmknzCQSpRASt%2B9ixwzWK86khwzAkZfhYVPhSzyPatExxA5r0UtQWTnphsE453yXG9GGF2RGxcN0yA6qX3PX38N5NwXcKkS1p53vxjoP%2FC3Fw4CSHihlsXh3%2BbBl7kdoa38MCIEJXykJgNLv082p7rz3RiUbvFMnVFUw5MajvgY6pgER4%2B4ShPxQV%2F%2Bc%2BuGNgtEQvD68OmaXv%2FasqFxNDA0tAMl24U4mRbd3rIT%2BShGT9AVPHvNdHRXBnV76wyzbfu9zDYhbL4h%2BpISJD%2F6XdlDq%2F8IF4r2z%2BRGe7WmwSCg3p19u52SlG83MoKGB8p7Gy6jjwfuC5fw9tOkb0g9rrxMdHvKE5XTwbG4cLKogbfjU0vtXad1jsuLRr9Ym8EHJsO6ooRXUMjcW&X-Amz-Signature=d41aa29825bc0326874db66ae7750d3607b7a04555fd44ee03e167d588ca739f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
