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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFGUSYZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZNBxm2QDycLjxr9mWaIBMb%2Fse7xL66MIWf42UeQSxOAiEA8S%2Bg0ZR8%2FTVBwNml3dIb%2BYWpA8ymTd0Dcyc4QMhFwgUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJVb8BivxgYUG5qPircAywjljWj3A2GRZnXngP97QO%2FkVQ9lFfvqJEGTSeLVsBzha2ZAdMZk%2F7bZDgyVuT8b8JEO889XmBHYNUaoKE4HslHUeYe4j8zD6i8N0VyPRrI13sMGkKhS%2B0zq%2BzuC1eCrEt%2Fn9sMRVO2LtpOZyXwDU2bOeIvb58nZVc5%2B7dxDg%2FcEf8lSX1OVNvcUsKe8B%2Fi%2FRF7pXDbJYtsab49XXn1ttky5FL7dQ5L8xCK6L%2F9yTokAuhsqSZKFwxhnpXNVJb%2B2xgxRQFK5iMoCC547HB64FX9er2CLSREizxC21wYfpqZQEbNtjvyUzYG7BPTQhCn2rE1%2FjTSQV1dtXxU%2FI7IjqZ2gwE4QzIDruTl55uYR8znKWIgJ%2FTSEy%2Bp74yDxykHILv7jBq%2FGxGkAbQCoQ%2BZKgGRT9YaF%2FX0HYXyUaQUBsSiOGQqmNLkIndQarbCYCSfn%2Bg93mm53QcY6dCRdlMzxfDXUV%2Fp%2FQhvLiqObLiU9P83ZPJIqUxYzGGSaeIIoKqxciI5xA%2F5ABy03KNiaTsb0EEQ0VnAlkQ4WNFsh8oZvRX6pZ2%2BBVbQWWcGkiNSRyRcDVqKQVQGLw4G4ZhzQm1sPDzOJVqV7DvWaU2rGytHbP4Ww%2BFgXv4NVZ3AcO1DMLee%2BcMGOqUBD2S8XIAuRbk3LaGjSU%2BJ3bGMlOyJOpp13YrkOpglH1kvekjFMZ4uc7NVjBd4kkL7D0C5KD7xdwv3eHLTuLx4JxWbO8Djp%2FNw3miCXEeYegNU80UNYWyKHkNIj309Z2tS2LjoObVf8Jn3%2F9lsrMCEeml%2FAVIj%2BzFdKkWZWFjE%2BB154%2Bw%2FbAQdTlvtNvKluOdJ%2FNgBC2iyyi1RZFEsApYDeFTZDZeR&X-Amz-Signature=33b36f622c6f96326575c621178901c7355c2d41e50c8a5062269c9c056ffb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFGUSYZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZNBxm2QDycLjxr9mWaIBMb%2Fse7xL66MIWf42UeQSxOAiEA8S%2Bg0ZR8%2FTVBwNml3dIb%2BYWpA8ymTd0Dcyc4QMhFwgUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJVb8BivxgYUG5qPircAywjljWj3A2GRZnXngP97QO%2FkVQ9lFfvqJEGTSeLVsBzha2ZAdMZk%2F7bZDgyVuT8b8JEO889XmBHYNUaoKE4HslHUeYe4j8zD6i8N0VyPRrI13sMGkKhS%2B0zq%2BzuC1eCrEt%2Fn9sMRVO2LtpOZyXwDU2bOeIvb58nZVc5%2B7dxDg%2FcEf8lSX1OVNvcUsKe8B%2Fi%2FRF7pXDbJYtsab49XXn1ttky5FL7dQ5L8xCK6L%2F9yTokAuhsqSZKFwxhnpXNVJb%2B2xgxRQFK5iMoCC547HB64FX9er2CLSREizxC21wYfpqZQEbNtjvyUzYG7BPTQhCn2rE1%2FjTSQV1dtXxU%2FI7IjqZ2gwE4QzIDruTl55uYR8znKWIgJ%2FTSEy%2Bp74yDxykHILv7jBq%2FGxGkAbQCoQ%2BZKgGRT9YaF%2FX0HYXyUaQUBsSiOGQqmNLkIndQarbCYCSfn%2Bg93mm53QcY6dCRdlMzxfDXUV%2Fp%2FQhvLiqObLiU9P83ZPJIqUxYzGGSaeIIoKqxciI5xA%2F5ABy03KNiaTsb0EEQ0VnAlkQ4WNFsh8oZvRX6pZ2%2BBVbQWWcGkiNSRyRcDVqKQVQGLw4G4ZhzQm1sPDzOJVqV7DvWaU2rGytHbP4Ww%2BFgXv4NVZ3AcO1DMLee%2BcMGOqUBD2S8XIAuRbk3LaGjSU%2BJ3bGMlOyJOpp13YrkOpglH1kvekjFMZ4uc7NVjBd4kkL7D0C5KD7xdwv3eHLTuLx4JxWbO8Djp%2FNw3miCXEeYegNU80UNYWyKHkNIj309Z2tS2LjoObVf8Jn3%2F9lsrMCEeml%2FAVIj%2BzFdKkWZWFjE%2BB154%2Bw%2FbAQdTlvtNvKluOdJ%2FNgBC2iyyi1RZFEsApYDeFTZDZeR&X-Amz-Signature=f8ca277855ec9e3e52dac615f1c81bdb1a32416a0e4e53269dce0fae4ca9d781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFGUSYZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZNBxm2QDycLjxr9mWaIBMb%2Fse7xL66MIWf42UeQSxOAiEA8S%2Bg0ZR8%2FTVBwNml3dIb%2BYWpA8ymTd0Dcyc4QMhFwgUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJVb8BivxgYUG5qPircAywjljWj3A2GRZnXngP97QO%2FkVQ9lFfvqJEGTSeLVsBzha2ZAdMZk%2F7bZDgyVuT8b8JEO889XmBHYNUaoKE4HslHUeYe4j8zD6i8N0VyPRrI13sMGkKhS%2B0zq%2BzuC1eCrEt%2Fn9sMRVO2LtpOZyXwDU2bOeIvb58nZVc5%2B7dxDg%2FcEf8lSX1OVNvcUsKe8B%2Fi%2FRF7pXDbJYtsab49XXn1ttky5FL7dQ5L8xCK6L%2F9yTokAuhsqSZKFwxhnpXNVJb%2B2xgxRQFK5iMoCC547HB64FX9er2CLSREizxC21wYfpqZQEbNtjvyUzYG7BPTQhCn2rE1%2FjTSQV1dtXxU%2FI7IjqZ2gwE4QzIDruTl55uYR8znKWIgJ%2FTSEy%2Bp74yDxykHILv7jBq%2FGxGkAbQCoQ%2BZKgGRT9YaF%2FX0HYXyUaQUBsSiOGQqmNLkIndQarbCYCSfn%2Bg93mm53QcY6dCRdlMzxfDXUV%2Fp%2FQhvLiqObLiU9P83ZPJIqUxYzGGSaeIIoKqxciI5xA%2F5ABy03KNiaTsb0EEQ0VnAlkQ4WNFsh8oZvRX6pZ2%2BBVbQWWcGkiNSRyRcDVqKQVQGLw4G4ZhzQm1sPDzOJVqV7DvWaU2rGytHbP4Ww%2BFgXv4NVZ3AcO1DMLee%2BcMGOqUBD2S8XIAuRbk3LaGjSU%2BJ3bGMlOyJOpp13YrkOpglH1kvekjFMZ4uc7NVjBd4kkL7D0C5KD7xdwv3eHLTuLx4JxWbO8Djp%2FNw3miCXEeYegNU80UNYWyKHkNIj309Z2tS2LjoObVf8Jn3%2F9lsrMCEeml%2FAVIj%2BzFdKkWZWFjE%2BB154%2Bw%2FbAQdTlvtNvKluOdJ%2FNgBC2iyyi1RZFEsApYDeFTZDZeR&X-Amz-Signature=4d11de4c27a2c1eeb335cc221145d0401b2a0fd10be42e17b25f8bd7c511d0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXAPT5X%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwnGhl57kCB0oIVUxbngvtOnPGJBuNepV6fXsukmXIAIgKtV4JxuEHGXY%2Flcc1%2FtjrpBVn775jSj4l9sXTLXhnO0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR093LcQ2Aa%2Fa5bgSrcAy0VEZxbLfQPSq3Ql4vCzeCbgtjLPIAi6swKIpAZpyZ6XrVxp7nDbfIwUAkQ8eEQfYqGR6W8NGW3ELgIyza4VhIWS4Ll67w4xBOKUigz822xIwL5vn7pcyOojy63s1awsbSOClj%2Baf0l01hHxxa%2F7x4RrHM92FUxBAk%2B9KXDgMe%2FY%2BvYDbGFAHfy5xqc9GpSF9248BqMlatBgwXPyp0D6oy8Qb%2BYw%2FNGBz7kyxEU5lPVcSehyHK9A4mbWVNQkCMS3eX8D7Z%2F9vAcgqxXFRkUYKYm73AZGrOodPBy%2B3tXXdqjCUXNSamU4AQRmFe4si8FKAISpXhSD0yqC914jyKBkrsRkS57X6hc4CUAJvuU7ZJCaGKmTZ%2Bi1StKE65v%2BJjGZ7gX670SOG7ZTl7k%2BqH8MgH8fddQHuzIyCkL60yzLXrmnBnasUn6Pc6TAqcopaHbiSjHQGZ8w8LOcexaB9et7xTlGCnf5pEV5b1GG4k3SHh75qiBTnBUcbOBkPKtyRfwjkfYK72IMIjZAfRsHqhIv4BfsiNQlNH6%2B2cKxDGCEnfJesC8RlhrHY1cOQDPwhA%2BBNnde%2BjRMZ3XbHL0Ai1yB1sN%2FdvbUDls8DbdW5v0yOPSti1DPLupIH9cqkCxMLOe%2BcMGOqUBapQpRZAfhzl99WXH1SAhGcTnBiyksmQtfk7%2FusOYE9wRTJ4hBPoMnvgX%2BaLKJsKwxVfRKFIDBDX%2BHm3CyTAwzDxrRq6%2FWWgm3DmNNyrYwZHIU460zPgLDnapCyehE7g438Qzu1E3xlvXelPB6jjM%2FQIaFin4lHPJPU1rq0Ts3VYvpD8p6K8thtTGyd%2BziVW%2BngUTMoMtSP8mraVEBUcq0HtJjLwI&X-Amz-Signature=0cf112268e4e085b835b81f69603264a2bc8b6a4e2e565ebbfd921d973a09a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOO72O5T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1gUMdSivmeU2pGadWciKm2SisPGq%2B%2FduQg3r%2Bqz1t5AIgO6kRaul4dU0N%2B2imEMSVbXN3lWxOpSZ82pw7YznpV0IqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDuQmw2Bx5MqdwsbircAwGhEUUl1Gf5A8yJEp657uf10NhuKI3GKsJT8gddrTuvnKX8vYHxqaTwKjqK920BUDKi0uVxGEqLctTQ5ln9wgQxYwrkmLuDshLu5m28EJHNvp5pRXZutjb1QxO3FdhUBg1iTvRWxucDCbLgLcuTL1xWFHYIENpHkj9TE6W8JnBVskNmfw6K6crDN6drRYy%2FZiFxAIzVEb3RFTRNXSfgOtE3d5lavOm0AJPw9qX6ym%2BK9%2Fvlxc1HqqDiUsg%2F6wrMvJZQzvw4Oks7BUahcnERoY0%2BEd5eARfkGUtPU4AEDnlBWnd7943X0FzJ1IUUhMP6jGm4D9tsICRYARCDqVRfzjV3QVqdnhOCM7b7aIfTEiCI28folt4SwkzJqVOXYYBtI1roCMGKZgJl9rLP9HL0yPalDhFUhkrV3KFF1rJ06gDCuQOEjUtv6nogyrPBDd4Z92gz5lS0VmXt2ADwtsO2qI2V%2BhQG96EbKtHPG81ciKHJ8jcOxivNvd%2B0A8uc1FF5bkqkiXJS6wv9bERQNjzXYBceqMNl3T6cOvS1986%2BpCdxgGrMctGIfj7Jzn77gu%2BoI4HgUkS2p%2FzIMUBTa%2BTPxhOgIfz%2F5%2B06o7pDJ614FrWC%2F3u603o6LK7makj7ML%2Be%2BcMGOqUBEHKkXnUPqyUfJJvZKxFKqh%2FJ0dWsW5%2B4FI%2FTf%2FgKfPJN0BVa%2FUEwemtjMfxZVMjdtnYeTwQHHcU83ZxVOrT8jgF9%2FliUumSiDhOaFkeo0hR294AyF90abxgn8wjWKSx%2F0Syyw7Q9N6wXfj4hP3RQDbje3k4IvWLlPDMQuCWDJB05Vkn2gR6Ka9I9dPe5r3ywkUFDTSIfVjq9dojrPn9vRKZ81e7V&X-Amz-Signature=e72cf8977e3105611f481559393f07692284f778e69309e9598512416228d068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFGUSYZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZNBxm2QDycLjxr9mWaIBMb%2Fse7xL66MIWf42UeQSxOAiEA8S%2Bg0ZR8%2FTVBwNml3dIb%2BYWpA8ymTd0Dcyc4QMhFwgUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJVb8BivxgYUG5qPircAywjljWj3A2GRZnXngP97QO%2FkVQ9lFfvqJEGTSeLVsBzha2ZAdMZk%2F7bZDgyVuT8b8JEO889XmBHYNUaoKE4HslHUeYe4j8zD6i8N0VyPRrI13sMGkKhS%2B0zq%2BzuC1eCrEt%2Fn9sMRVO2LtpOZyXwDU2bOeIvb58nZVc5%2B7dxDg%2FcEf8lSX1OVNvcUsKe8B%2Fi%2FRF7pXDbJYtsab49XXn1ttky5FL7dQ5L8xCK6L%2F9yTokAuhsqSZKFwxhnpXNVJb%2B2xgxRQFK5iMoCC547HB64FX9er2CLSREizxC21wYfpqZQEbNtjvyUzYG7BPTQhCn2rE1%2FjTSQV1dtXxU%2FI7IjqZ2gwE4QzIDruTl55uYR8znKWIgJ%2FTSEy%2Bp74yDxykHILv7jBq%2FGxGkAbQCoQ%2BZKgGRT9YaF%2FX0HYXyUaQUBsSiOGQqmNLkIndQarbCYCSfn%2Bg93mm53QcY6dCRdlMzxfDXUV%2Fp%2FQhvLiqObLiU9P83ZPJIqUxYzGGSaeIIoKqxciI5xA%2F5ABy03KNiaTsb0EEQ0VnAlkQ4WNFsh8oZvRX6pZ2%2BBVbQWWcGkiNSRyRcDVqKQVQGLw4G4ZhzQm1sPDzOJVqV7DvWaU2rGytHbP4Ww%2BFgXv4NVZ3AcO1DMLee%2BcMGOqUBD2S8XIAuRbk3LaGjSU%2BJ3bGMlOyJOpp13YrkOpglH1kvekjFMZ4uc7NVjBd4kkL7D0C5KD7xdwv3eHLTuLx4JxWbO8Djp%2FNw3miCXEeYegNU80UNYWyKHkNIj309Z2tS2LjoObVf8Jn3%2F9lsrMCEeml%2FAVIj%2BzFdKkWZWFjE%2BB154%2Bw%2FbAQdTlvtNvKluOdJ%2FNgBC2iyyi1RZFEsApYDeFTZDZeR&X-Amz-Signature=e47d5a84bae3c9a54e7a6c1361fca3447c97335e2c568002db1eb6d85a6f181f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
