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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNQWK4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC1GVDGFzANqrLzWM%2FrF9CkNVdZW%2BAvJKzn9wt79CllAiBNAqwoCRuJHR%2FCK2r9X%2BXpOTxibFVt2o8mZRs3IpkBTiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7erBOXRz5Gil42JmKtwDGazPdh8qGkUvUS4xk45s1EaWrOOlk2RHSoMAyqSRRbPm%2F7Z4gd6jOw7vrkfSwggVd71f35DcvuU7cqSRpVHUYl%2BJgvGCCYVQWXYg0ZdnXW5c0TNaYA3OJEnf%2FeF2vMZdvHnTBYP4ABaYL8LJwCRUrt70nrx0X8hnULbVQG78r54JZqhlg5B9HqNel1s%2Ftpx%2BUTafdENNgd4x4kFRBk5Ib1C%2BXh1a%2F6bk9t28dLN2k2eRd4As%2FjfTapzp89GhFVsOzwZJgk8WUIT41V%2BoDTKE3zKfSr9z4QG%2BtjrjRtQco0TgM9of7qgHrl6H85bs7JbzheO9mXHSx0fluJpJu50rbMwvWZ3rJPJd1TyCDQeKc6CT%2BVKwW2aEgbdMTsi94Cgov9haFYIqeQ14jLuyElNgeTf3uslBBEsZG9vI3R3G1qf%2B9Ann8hb1X6PgV8fsb9rchWcThhCLeaRINDUx0TwQr2OSrZeDfd%2B103nkw0jF7NFZu00%2F%2FhDgLJ8Trne4WxFLVoh8p6Mvc%2BauMSzBf1kYJSawYm%2BsDZAqSNOTdIf3nhtYGq08DRwh%2BMNN5ZNHMZTE4sngPWh1cAl9aNxNx7SEb9DoiFPuJW3ia1Bp2Q%2BwRGpKk5%2BrY4EVVLAbFEAwhOqtxAY6pgE7KRSX3wo%2B3njfZPYlrB46AyH9ehTwmLjJvr7TJ0p7VrHSs1AFyTBMY0doANlmDLZkuwgt8fuJ1szcumutZ%2FjhsD5RclIclTarTdpgeUuXsLwtPpZPJUOVQDgF%2F0QjjEnSi5veSa3bzYkC1%2B65w5f2IZubWopV1u%2FDamnjbKwLbFeP1mv%2BoGrBRKRM0bXm40HNsCWFLB8EqQL7BSLjpjSLoc1D6vpB&X-Amz-Signature=392522690613aea7b7943c9e48137625de36dfb4cbd5e48666d4c07e05fe8c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNQWK4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC1GVDGFzANqrLzWM%2FrF9CkNVdZW%2BAvJKzn9wt79CllAiBNAqwoCRuJHR%2FCK2r9X%2BXpOTxibFVt2o8mZRs3IpkBTiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7erBOXRz5Gil42JmKtwDGazPdh8qGkUvUS4xk45s1EaWrOOlk2RHSoMAyqSRRbPm%2F7Z4gd6jOw7vrkfSwggVd71f35DcvuU7cqSRpVHUYl%2BJgvGCCYVQWXYg0ZdnXW5c0TNaYA3OJEnf%2FeF2vMZdvHnTBYP4ABaYL8LJwCRUrt70nrx0X8hnULbVQG78r54JZqhlg5B9HqNel1s%2Ftpx%2BUTafdENNgd4x4kFRBk5Ib1C%2BXh1a%2F6bk9t28dLN2k2eRd4As%2FjfTapzp89GhFVsOzwZJgk8WUIT41V%2BoDTKE3zKfSr9z4QG%2BtjrjRtQco0TgM9of7qgHrl6H85bs7JbzheO9mXHSx0fluJpJu50rbMwvWZ3rJPJd1TyCDQeKc6CT%2BVKwW2aEgbdMTsi94Cgov9haFYIqeQ14jLuyElNgeTf3uslBBEsZG9vI3R3G1qf%2B9Ann8hb1X6PgV8fsb9rchWcThhCLeaRINDUx0TwQr2OSrZeDfd%2B103nkw0jF7NFZu00%2F%2FhDgLJ8Trne4WxFLVoh8p6Mvc%2BauMSzBf1kYJSawYm%2BsDZAqSNOTdIf3nhtYGq08DRwh%2BMNN5ZNHMZTE4sngPWh1cAl9aNxNx7SEb9DoiFPuJW3ia1Bp2Q%2BwRGpKk5%2BrY4EVVLAbFEAwhOqtxAY6pgE7KRSX3wo%2B3njfZPYlrB46AyH9ehTwmLjJvr7TJ0p7VrHSs1AFyTBMY0doANlmDLZkuwgt8fuJ1szcumutZ%2FjhsD5RclIclTarTdpgeUuXsLwtPpZPJUOVQDgF%2F0QjjEnSi5veSa3bzYkC1%2B65w5f2IZubWopV1u%2FDamnjbKwLbFeP1mv%2BoGrBRKRM0bXm40HNsCWFLB8EqQL7BSLjpjSLoc1D6vpB&X-Amz-Signature=4fc5a574b658952bc8de3fdd761bf04d5954c92ce1df5bb6dde7bf8cd100ef9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNQWK4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC1GVDGFzANqrLzWM%2FrF9CkNVdZW%2BAvJKzn9wt79CllAiBNAqwoCRuJHR%2FCK2r9X%2BXpOTxibFVt2o8mZRs3IpkBTiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7erBOXRz5Gil42JmKtwDGazPdh8qGkUvUS4xk45s1EaWrOOlk2RHSoMAyqSRRbPm%2F7Z4gd6jOw7vrkfSwggVd71f35DcvuU7cqSRpVHUYl%2BJgvGCCYVQWXYg0ZdnXW5c0TNaYA3OJEnf%2FeF2vMZdvHnTBYP4ABaYL8LJwCRUrt70nrx0X8hnULbVQG78r54JZqhlg5B9HqNel1s%2Ftpx%2BUTafdENNgd4x4kFRBk5Ib1C%2BXh1a%2F6bk9t28dLN2k2eRd4As%2FjfTapzp89GhFVsOzwZJgk8WUIT41V%2BoDTKE3zKfSr9z4QG%2BtjrjRtQco0TgM9of7qgHrl6H85bs7JbzheO9mXHSx0fluJpJu50rbMwvWZ3rJPJd1TyCDQeKc6CT%2BVKwW2aEgbdMTsi94Cgov9haFYIqeQ14jLuyElNgeTf3uslBBEsZG9vI3R3G1qf%2B9Ann8hb1X6PgV8fsb9rchWcThhCLeaRINDUx0TwQr2OSrZeDfd%2B103nkw0jF7NFZu00%2F%2FhDgLJ8Trne4WxFLVoh8p6Mvc%2BauMSzBf1kYJSawYm%2BsDZAqSNOTdIf3nhtYGq08DRwh%2BMNN5ZNHMZTE4sngPWh1cAl9aNxNx7SEb9DoiFPuJW3ia1Bp2Q%2BwRGpKk5%2BrY4EVVLAbFEAwhOqtxAY6pgE7KRSX3wo%2B3njfZPYlrB46AyH9ehTwmLjJvr7TJ0p7VrHSs1AFyTBMY0doANlmDLZkuwgt8fuJ1szcumutZ%2FjhsD5RclIclTarTdpgeUuXsLwtPpZPJUOVQDgF%2F0QjjEnSi5veSa3bzYkC1%2B65w5f2IZubWopV1u%2FDamnjbKwLbFeP1mv%2BoGrBRKRM0bXm40HNsCWFLB8EqQL7BSLjpjSLoc1D6vpB&X-Amz-Signature=e92b010e4eafd642cabb29a2d1566c6d10e8a9fc52498fb1b78854a97e7490e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YISIYWVM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo%2BEeE7%2FzAUTkTpfw70TSAzqU1f0yOk21oqEXn2QXxNAIhAITdQ1keleugSPAMleQdB%2Fd6mXa2h2TYpApM8ujCDpgOKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYzob6aI0UHqhVKdgq3AMvodWgou4CuEUuisnAYWyaFdhiwoq0U8tt0Od9i9aCEPCBcQciSAybMFysN8jCI7kdV6NNtrNOgTK8GZh0eB%2F9%2BBOL5eLUDneBXTfS2CLJqY%2Ff7rrxSzEkn3tyTe4JNdYZf0xI07r%2BBqXTKzyDr2M8yGzBiCn5maXfRk7kjZbRXWfCN3dOwd7fxbOXEg%2FLf%2Bko4l0rD5IL8w8eFYIUwsir6xdxjZ1rAeS66anjEbzv7g%2F%2BomgZII179E3kVQn5NG2tzFnSjdwt%2FAuDoKjXpXt4BV2gvn2W2mTLF33yfxV%2Bs4Ul8veYBWXNkkhKCv%2B7AttJtqXPt67LBV0nS970hGf7hYBJGWWMLlPrllrIEwGxCWREq7lCYXFd%2FldoG58HKQQrs4Dx9JMXctpr2i8OjpAq86YfciQ3jO7tzqpNy6kaQ0H2thmd1Lk7nrg3wPg38My3s7PbuUZqV9fhHQLYEMxHCsacSWyl2CnjBeJwp7iwcRheCA8CIgaBqvcdcoFRa%2FaQLfRB0yVKgF50a1k1JL7mxVttqAk2irwRpXdl%2Fk8A41myJcWpflKo4kXn2ysEtoMD8bMCCxuYjSceeWR8Tswhz%2BEmGr7oaRNG8m1GcrOIBPXj2Udn8lCyDawfITCv8K3EBjqkAYWjZGGj29jbLPIzacyNbnBZcPJLkwfPouu8rJGJ8O4cPhF4a2NVTSXtN6LnzrXhvjQzy60hrRmfl1bXxGbhbzW3jQEBA44oNeOnoi8uJUWFEZCqdRtHKWDqR09MOZid%2F9%2BwXdi57TLPXgdMZFpb9TEhd6o311ZwvVmRpzHumCsqpnYAkql45O5%2F7VPmEA%2BcW7kTlnWPrb7vNlnkSOKJzUdhxgq3&X-Amz-Signature=5bf4eaf5af82f06dcadb175bc0e654daea1ef4517f0317040cecff6dc2d5f720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IZHIDC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICy4LB3XC%2F%2FiMV%2FMVy1D4J2lutvAYJjoXissRovM%2F1O3AiAaRNwXMlljHjbIO0klHpMx40iKNjGg4MNxUlhuZJNspyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPb1FQk59v9nlci%2FDKtwD7txbMY8CouhOJ%2FNuUhyXnrnEAQaZXLM5o7cMjsHO7%2BJKMyme7CyFSawkH7P9%2BxB9gSuAp8s3h%2FaZwyi1%2BB4qYb2XfbeWFpUQfGPB4bsIBM9LAJSgoUc53k7iv0xJPYimiwVIETzqnfmJCVLnaoZG76yLFS5DgZwU%2FiK0TXgVmec%2FMXTchLl8H%2FNYyySNU0LVzT7nEQpykOjMTlRs%2FI6%2BNeAO8eK2QQHWXQC0c27PEKdLtQBxinKIJFEZSVigejoE9tAiZBw79OM2SVB%2F%2BYCg2O%2BgRfF%2Fi8YlYDkkHWrqNEGlwXurY%2BN1Q%2BixAQKNfrQ9wTTozqTzzB8fG%2FKXHVPdNst5DdDMb2vIYQBkZOZUfWlkBBUd%2F4eje11oB6s4qwT%2B0J%2Fl6vVOAA3djW34lxyJtsw5YP6h68sfAYl3UfzSfZpa2HewZ2N51D5fO93wbI9PR3seiBCBavrEZODPfmQTBJeDTF2Jz3p2UsOfrEBfFyvKB%2FHNqJ8uybIHkVe%2FQXVbyvne6fCio%2BESZCcqF4uUP72kgJP6vmI8lmJYUm%2FvHCaFb4L704LEGzIssxbdphiY94Wt4BwP9RoQpl5YUv0aU7kQ0z2IBpgu3fTE86kCA4jSg0V1puG2div5HJowremtxAY6pgHoInL5Vvvsar1FOlIpVwTNE1Pe7ke3ZAVj22GB9FX75%2BSjIC3WxM2tolbTHzXY4HF%2F4bUOqg80Ou7Wxu11dS5MP4bM16ixGC%2BNTnJOLf826rYnwDJ8lBK%2BrU97H4Wg%2BsYq8XSTQexY2DUkeR%2BX7hesUrGv5yMK6HEWJ1RwZ85H0vQQmSpWdDKyqK4nb7VMXBHuZO2aJqQiUj3z%2F1T9BLOXhryZi%2Bso&X-Amz-Signature=1124587006126d56da5d75b63a5e8c169a0bf330e85c63de3b02577c9853c5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNQWK4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC1GVDGFzANqrLzWM%2FrF9CkNVdZW%2BAvJKzn9wt79CllAiBNAqwoCRuJHR%2FCK2r9X%2BXpOTxibFVt2o8mZRs3IpkBTiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7erBOXRz5Gil42JmKtwDGazPdh8qGkUvUS4xk45s1EaWrOOlk2RHSoMAyqSRRbPm%2F7Z4gd6jOw7vrkfSwggVd71f35DcvuU7cqSRpVHUYl%2BJgvGCCYVQWXYg0ZdnXW5c0TNaYA3OJEnf%2FeF2vMZdvHnTBYP4ABaYL8LJwCRUrt70nrx0X8hnULbVQG78r54JZqhlg5B9HqNel1s%2Ftpx%2BUTafdENNgd4x4kFRBk5Ib1C%2BXh1a%2F6bk9t28dLN2k2eRd4As%2FjfTapzp89GhFVsOzwZJgk8WUIT41V%2BoDTKE3zKfSr9z4QG%2BtjrjRtQco0TgM9of7qgHrl6H85bs7JbzheO9mXHSx0fluJpJu50rbMwvWZ3rJPJd1TyCDQeKc6CT%2BVKwW2aEgbdMTsi94Cgov9haFYIqeQ14jLuyElNgeTf3uslBBEsZG9vI3R3G1qf%2B9Ann8hb1X6PgV8fsb9rchWcThhCLeaRINDUx0TwQr2OSrZeDfd%2B103nkw0jF7NFZu00%2F%2FhDgLJ8Trne4WxFLVoh8p6Mvc%2BauMSzBf1kYJSawYm%2BsDZAqSNOTdIf3nhtYGq08DRwh%2BMNN5ZNHMZTE4sngPWh1cAl9aNxNx7SEb9DoiFPuJW3ia1Bp2Q%2BwRGpKk5%2BrY4EVVLAbFEAwhOqtxAY6pgE7KRSX3wo%2B3njfZPYlrB46AyH9ehTwmLjJvr7TJ0p7VrHSs1AFyTBMY0doANlmDLZkuwgt8fuJ1szcumutZ%2FjhsD5RclIclTarTdpgeUuXsLwtPpZPJUOVQDgF%2F0QjjEnSi5veSa3bzYkC1%2B65w5f2IZubWopV1u%2FDamnjbKwLbFeP1mv%2BoGrBRKRM0bXm40HNsCWFLB8EqQL7BSLjpjSLoc1D6vpB&X-Amz-Signature=477ac2ce22ab70abb2bb2f53148fc7f3a056769531114f5446758f95f7278a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
