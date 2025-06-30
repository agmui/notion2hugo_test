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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPDTZNW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZR0%2FXnRIv9LFDfOCrDje8CQq2N5tJKIkWPTafQVZl%2BAiASCzptOUtQqUJspFGKCAk3c%2FyQsEQ5n1M2ZLojNWM8xyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLtvNtEi1IvT9HRGKtwDoutuTtf58nWxaBIA6%2FoNycIZH1xLBiPx2YB%2B6ujhynDwxJ2ZZF0e7z6jvUdh4CJmmoPsq6yMKCljwGhgcuE35vB1vxxYqN8Fm%2B8eECJPSWDKVoGlT05Ds%2FqA5JgvzQODCWN21pld35Ed4FW95yNsmzylvVJkvVJonaojD%2BOnLibNlILem23FkpcwrVYMGT5XpllzKHiJj9avkS%2FG9IPTLDBdvd5bs3Nz8XbWjyRSrJvD5UC7zTTGV0JpepArRkL6Vcxf3Xf7W7jLDWbNeBngI4Qm7AJc7ADB8OOZY9DYTs2FXsIUbYv4QLUkNRhcGIxrGu4X1hdqNAuqeL%2FByCuQC96Kf7m7zRKhJEtED19uUKqCOe4MhjWDi4bB%2FsUdxz76f2hACQYdhGFqCHCaC8RC0rByW7uiNZBZuWLMiMIbtS0a2dKYm92WCX4%2FjUhGezd0d4kHLNWQTRkRUMnZkiNjt2c73lPkLdrNTK1P2GHVy%2FAc%2BjcFeTPdI%2FXW8EwTf248h8EnSjOQuRz8%2F2BvXnsyM58wVIgWT9VPAOBSaECgQdRjHtINT70pUVx%2FbG45PstFWaXNT6xEXewVhEqdhJZrKTWgZtMKq1NcA9DbWepqT5Rhc4gLov7RiH9VLa4wtoSKwwY6pgGV%2Bxt%2Fk1qwoLmlgbfbI%2FNGZnZI2SOoTCSlwRx1uH%2FEFKnX%2F1SeuGfJPoBLbcyvbJD1i4ax1L2Fg7mxmz1pWi1aWTFBOGno2inyXupm5alAZIlGJzNx3v5wIWBgrjif4KVt6B03QUPGXPKGlOCfxqjABT6sppsmNxa0FrmFUzSOStUKW31T93DhP91GwTkyMwE409yQ3HSjUlnP7HiqK9NY1PhXVZ08&X-Amz-Signature=edaf1c7ef6853493c49f6d414f645fa63d3e7faeb14a4097948aa41c009de508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPDTZNW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZR0%2FXnRIv9LFDfOCrDje8CQq2N5tJKIkWPTafQVZl%2BAiASCzptOUtQqUJspFGKCAk3c%2FyQsEQ5n1M2ZLojNWM8xyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLtvNtEi1IvT9HRGKtwDoutuTtf58nWxaBIA6%2FoNycIZH1xLBiPx2YB%2B6ujhynDwxJ2ZZF0e7z6jvUdh4CJmmoPsq6yMKCljwGhgcuE35vB1vxxYqN8Fm%2B8eECJPSWDKVoGlT05Ds%2FqA5JgvzQODCWN21pld35Ed4FW95yNsmzylvVJkvVJonaojD%2BOnLibNlILem23FkpcwrVYMGT5XpllzKHiJj9avkS%2FG9IPTLDBdvd5bs3Nz8XbWjyRSrJvD5UC7zTTGV0JpepArRkL6Vcxf3Xf7W7jLDWbNeBngI4Qm7AJc7ADB8OOZY9DYTs2FXsIUbYv4QLUkNRhcGIxrGu4X1hdqNAuqeL%2FByCuQC96Kf7m7zRKhJEtED19uUKqCOe4MhjWDi4bB%2FsUdxz76f2hACQYdhGFqCHCaC8RC0rByW7uiNZBZuWLMiMIbtS0a2dKYm92WCX4%2FjUhGezd0d4kHLNWQTRkRUMnZkiNjt2c73lPkLdrNTK1P2GHVy%2FAc%2BjcFeTPdI%2FXW8EwTf248h8EnSjOQuRz8%2F2BvXnsyM58wVIgWT9VPAOBSaECgQdRjHtINT70pUVx%2FbG45PstFWaXNT6xEXewVhEqdhJZrKTWgZtMKq1NcA9DbWepqT5Rhc4gLov7RiH9VLa4wtoSKwwY6pgGV%2Bxt%2Fk1qwoLmlgbfbI%2FNGZnZI2SOoTCSlwRx1uH%2FEFKnX%2F1SeuGfJPoBLbcyvbJD1i4ax1L2Fg7mxmz1pWi1aWTFBOGno2inyXupm5alAZIlGJzNx3v5wIWBgrjif4KVt6B03QUPGXPKGlOCfxqjABT6sppsmNxa0FrmFUzSOStUKW31T93DhP91GwTkyMwE409yQ3HSjUlnP7HiqK9NY1PhXVZ08&X-Amz-Signature=35a8e13a5e7dacd5da65abade813633fda4955268be277ec1935eb520c969f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPDTZNW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZR0%2FXnRIv9LFDfOCrDje8CQq2N5tJKIkWPTafQVZl%2BAiASCzptOUtQqUJspFGKCAk3c%2FyQsEQ5n1M2ZLojNWM8xyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLtvNtEi1IvT9HRGKtwDoutuTtf58nWxaBIA6%2FoNycIZH1xLBiPx2YB%2B6ujhynDwxJ2ZZF0e7z6jvUdh4CJmmoPsq6yMKCljwGhgcuE35vB1vxxYqN8Fm%2B8eECJPSWDKVoGlT05Ds%2FqA5JgvzQODCWN21pld35Ed4FW95yNsmzylvVJkvVJonaojD%2BOnLibNlILem23FkpcwrVYMGT5XpllzKHiJj9avkS%2FG9IPTLDBdvd5bs3Nz8XbWjyRSrJvD5UC7zTTGV0JpepArRkL6Vcxf3Xf7W7jLDWbNeBngI4Qm7AJc7ADB8OOZY9DYTs2FXsIUbYv4QLUkNRhcGIxrGu4X1hdqNAuqeL%2FByCuQC96Kf7m7zRKhJEtED19uUKqCOe4MhjWDi4bB%2FsUdxz76f2hACQYdhGFqCHCaC8RC0rByW7uiNZBZuWLMiMIbtS0a2dKYm92WCX4%2FjUhGezd0d4kHLNWQTRkRUMnZkiNjt2c73lPkLdrNTK1P2GHVy%2FAc%2BjcFeTPdI%2FXW8EwTf248h8EnSjOQuRz8%2F2BvXnsyM58wVIgWT9VPAOBSaECgQdRjHtINT70pUVx%2FbG45PstFWaXNT6xEXewVhEqdhJZrKTWgZtMKq1NcA9DbWepqT5Rhc4gLov7RiH9VLa4wtoSKwwY6pgGV%2Bxt%2Fk1qwoLmlgbfbI%2FNGZnZI2SOoTCSlwRx1uH%2FEFKnX%2F1SeuGfJPoBLbcyvbJD1i4ax1L2Fg7mxmz1pWi1aWTFBOGno2inyXupm5alAZIlGJzNx3v5wIWBgrjif4KVt6B03QUPGXPKGlOCfxqjABT6sppsmNxa0FrmFUzSOStUKW31T93DhP91GwTkyMwE409yQ3HSjUlnP7HiqK9NY1PhXVZ08&X-Amz-Signature=e06f2dba410af36f1e4bd19120ff3011f89873c6ff9b3edab3b40c5929ecd41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGXRWK3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVE0koNQk%2Fqljb5yqadi69PjaewX1iQVODOpIcVtEjQIgfBJ17w9xU3eVyGapqHJFEKSabVhWnsACb6wDgDYRibYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhEtrzsyDsj6KMC3ircA2%2FsbW9Q3hQSUXysdlo1tRfqs9BKDyu%2BOaIJsZj1lbEgfg0zY0icnHahZ9%2F9JEnsc2M7rnqRByNCjH4wd0%2BNhnKaPcgBnPCXPeffmvPcWLy9LD2QenNBRvDD8sXdVcEDKIVxPmWkCj6uW6f8wPYAGCmvV7bXKF%2FnhD0I0fDhiCG6Aq1nF6yfaGwt6Pt1rDM8zexoVGJ2mRriqy1H3hfd6w%2BzK%2FxH3QO3Vc%2FIsTM8t2IsJoJGCu3v3Eb0T843Xf%2BbhICsYZX5woGQl3oY8%2F%2FMVI0OZdWT13u1DJmsEzElPPJ7si05iZfwCRzxbPZpBd0KGaWfr09a6l97v9iNydeib7Vemtz1Fc99A8Cgxywmie05VlPitNQOGkYuCYpNfWXE%2FGMaY8%2FCl%2B%2FXp8nN%2Befu%2F8ds0PqZbj2nAoxdSlwa%2Bsk5S3ok6bdG4fHJqP%2BNg7hjeI1LkEnQad1YEPozAVqi6ILW8iu8zqv%2F%2FCNGpxM8VqJXj3zX7J42Ps2%2BGXzHGh8QMVfNzmMLJZAV7U8dZCU986qH%2FO5CtaZhjMcI6FvakRTH3chm23WS%2B3F6EWGhSvc1UB092%2B3AzDmIuZ%2F1zidH50Gj5mpFsg5Iz7JQjXYyltlZQDA63881i468ozdGMIqFisMGOqUBZUpPI6KBlzQCwUAehdtDpCw%2FC1ZjrKmGQr22qtV92kgywqN96OA3nZhdU611j2Puk31pqJJ6FT6BUfenI8yLuEj3%2FoeFfKXKBBNlLU%2FFEoItKbMNFB%2B3%2B%2BNVvKM2aZbGEfvQhoWqrFERK12uvN0Y2ux8VeFUC5rGa9mblrBKdKx%2F0I7xx4ry78PiCnhERkyDoQhxue5zl6U%2B%2BIleyYf%2Bi15xE0y1&X-Amz-Signature=11862f9c65424e6668b6ad9f66960835d7d42a848d6386e4e57b07f176ac866d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6TUHDA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJrmcjskpuNGcYK7c1OQxf6vA3a%2BrxN2vRUNfdWaoR1AiBwzoxFA%2Bcz9IBp%2F31kp7SqgSBqzQMqCQj%2FkPI4MO9dviqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt2n2X7%2BRjZbmeRaHKtwDAUwQ0jC5LZoVy9fQ48IFO3aTqUIbPnGtzrfr0T3lX%2BmPod0O1xzbzaZVbM0D%2B%2FuogFE%2BDzeG0BCTYt8y6YPOtnaPUkQpvLR9gyuQa7IfXWvKBMkXBvpjGH8K6HGG2DljCV1tzBU9vZ8YykSJqyWRLqtuKtrNkIfucP3q2F5gg%2BGmuZZDGyhClPgYlZs67fGLaO6CCHD2QF88zCRgBLSMmRHgpIOYFmxwx49b%2FryFu04b76gRJ1ClAexq%2BuiPsjN%2FrG64W9TRW4RsTvjWTCmFq45vU0Zfy5ElbuthGNvG5ngXZO6raOlohz3lVim0ihfQyaYXtVLdfh1LI%2BJKtV1lfnTC%2B%2BmAZVE4G4u5jztMfdskDw4l5b8Ts%2Bfbil6oQk8lyltN%2BQoeu048rOKfS7zs5NjuBjhnwOYVklbQug6qUQ0g1y9rjYt2isrUIwf%2B9pRMpWo53Qfu97UoPKy194a7iLEHnGBiL7efnbfgfiGrQxrvZi6IaemiYg4VxhRayiI08BIZ6X97yrzklUP8kR0lWK3eHFcQlc1LjtISz0LbZznvU7F%2BOxFrkm6ijCae10jVjycNOKTIz3Z%2Brl%2BIK1VV0xTR1jMCuIE8S0XodhglG5i3xGMqiRhAAWSCEuwwiYWKwwY6pgEMFfSaU6FL1D6JlqFzD%2Fa%2BlZ7ie8Tm%2BEyyy1kyvpilsDgctqtQ4EgFdm8ha2U%2FaCLeALfGbKE93BYqZELYM1x2m%2F8nBjesQ59nJt5aDRTz7vbunqHDgalqr5xsnMyh5tOUozIaT9sKQExy3wYTqrsmymWGCMllGbtwpxb%2FHdrA3VTLjlaRY52pFvF2Q9qweeG%2BvT2Op7iAVg2r3npQwVMaOsinITea&X-Amz-Signature=5603a362d9ecea8eb1b5e25f05e25da86a4c9f50d8fd5a087da5e81be0881ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPDTZNW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZR0%2FXnRIv9LFDfOCrDje8CQq2N5tJKIkWPTafQVZl%2BAiASCzptOUtQqUJspFGKCAk3c%2FyQsEQ5n1M2ZLojNWM8xyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiLtvNtEi1IvT9HRGKtwDoutuTtf58nWxaBIA6%2FoNycIZH1xLBiPx2YB%2B6ujhynDwxJ2ZZF0e7z6jvUdh4CJmmoPsq6yMKCljwGhgcuE35vB1vxxYqN8Fm%2B8eECJPSWDKVoGlT05Ds%2FqA5JgvzQODCWN21pld35Ed4FW95yNsmzylvVJkvVJonaojD%2BOnLibNlILem23FkpcwrVYMGT5XpllzKHiJj9avkS%2FG9IPTLDBdvd5bs3Nz8XbWjyRSrJvD5UC7zTTGV0JpepArRkL6Vcxf3Xf7W7jLDWbNeBngI4Qm7AJc7ADB8OOZY9DYTs2FXsIUbYv4QLUkNRhcGIxrGu4X1hdqNAuqeL%2FByCuQC96Kf7m7zRKhJEtED19uUKqCOe4MhjWDi4bB%2FsUdxz76f2hACQYdhGFqCHCaC8RC0rByW7uiNZBZuWLMiMIbtS0a2dKYm92WCX4%2FjUhGezd0d4kHLNWQTRkRUMnZkiNjt2c73lPkLdrNTK1P2GHVy%2FAc%2BjcFeTPdI%2FXW8EwTf248h8EnSjOQuRz8%2F2BvXnsyM58wVIgWT9VPAOBSaECgQdRjHtINT70pUVx%2FbG45PstFWaXNT6xEXewVhEqdhJZrKTWgZtMKq1NcA9DbWepqT5Rhc4gLov7RiH9VLa4wtoSKwwY6pgGV%2Bxt%2Fk1qwoLmlgbfbI%2FNGZnZI2SOoTCSlwRx1uH%2FEFKnX%2F1SeuGfJPoBLbcyvbJD1i4ax1L2Fg7mxmz1pWi1aWTFBOGno2inyXupm5alAZIlGJzNx3v5wIWBgrjif4KVt6B03QUPGXPKGlOCfxqjABT6sppsmNxa0FrmFUzSOStUKW31T93DhP91GwTkyMwE409yQ3HSjUlnP7HiqK9NY1PhXVZ08&X-Amz-Signature=1027a121762f47e374fcb3b667d20375cabc27f5c41edb4ce8114665d9a81b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
