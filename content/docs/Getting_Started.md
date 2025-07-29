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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCKOEZV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7gf3OKfQwSXMDA%2F0Mj3p9MQW6h17ClE3r2F3sH%2FUp%2FAIhAOXugdu6bVa6X8ELG4wPDWKF8ZPEV44PDiKgtuB9O13%2FKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHnt%2FMZYZcRYpBdc0q3APPnLmLktYzs1QAjw9Ok0KwRZF8LOf29bjugBuNIT2s4%2ByIzVigOm3I7Z9w%2F8YP%2Fv0UXqxLDlOxHpsifed2GRchZhvYONVTgPDcm6Jj2yjI1ZZKi2b2ZWKS%2BuruH%2BEUPBkXGUOT9Qo6aADj%2F9R0Sgw0cyao%2Bqph2OblMe642QUevgpLDHEIopPQegQVnl8qS2hPnEWjlGuQdaaVyO2I3Y8dghDhIY%2FxpmWfoCdh7jd%2FxNGIpgGH%2BjrU9msnQY5OVyxF3eVub7lYVmirYZ3Wqi76Z7f1IjAsAM5mwwp34ZwpD%2FhRbwPecOKNEgboadqgTKvcf%2B%2FrOcmye9iOLu5BkdXHAXRojLeWjntGsKHbwXZZzpQhWj0iJQfhmF8vXYec4%2BNlJU3slpYiwkHEviA7QGeF34v8itSeGlarifC%2BdwMWTYmMF1Y3asGCVTyFgOneU%2F5A436MKea0Dj8parz0B1WvnkT2%2FCJsDSA1bH4SOagKztPjQz%2BCi8I8vhQwJBD%2FC348oUDAM7P143pH%2B%2BKEWLOaoPpdUSVj0WyQYSMx%2FJej6oJ5CniAtLrVLqZjQaIazWGhof7wjcRfpzOk4dm0yG4th1aMbwhfp6fjQaPWN09Q%2Fu5%2FOa0z8PhgkZDuYjCftKHEBjqkAeWIlkM4sjPwQ3RkZcjIqpjXCJeYUoVhS2JSpPrp1eruWzAxmIqFwho7hkxFvedJu7je4j9gPtL40Vpo1yr1FP395wu%2BATz9GYeTDjSyKUOnJnCiji3BRb4tRd9EtTxxAKN0wiSMHm0NcHV1y7s9ny3aMrw4lWIjYuV1ZMgyPsw7BaQJUFAgAw1l%2FEFC9w%2FtPiVJYG4WMJ%2BKCI6XjS2YoA4eB4zW&X-Amz-Signature=7fae76ca465b6dcdf9795ee4435304b1376b286ce2081579f5931c4565efcfb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCKOEZV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7gf3OKfQwSXMDA%2F0Mj3p9MQW6h17ClE3r2F3sH%2FUp%2FAIhAOXugdu6bVa6X8ELG4wPDWKF8ZPEV44PDiKgtuB9O13%2FKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHnt%2FMZYZcRYpBdc0q3APPnLmLktYzs1QAjw9Ok0KwRZF8LOf29bjugBuNIT2s4%2ByIzVigOm3I7Z9w%2F8YP%2Fv0UXqxLDlOxHpsifed2GRchZhvYONVTgPDcm6Jj2yjI1ZZKi2b2ZWKS%2BuruH%2BEUPBkXGUOT9Qo6aADj%2F9R0Sgw0cyao%2Bqph2OblMe642QUevgpLDHEIopPQegQVnl8qS2hPnEWjlGuQdaaVyO2I3Y8dghDhIY%2FxpmWfoCdh7jd%2FxNGIpgGH%2BjrU9msnQY5OVyxF3eVub7lYVmirYZ3Wqi76Z7f1IjAsAM5mwwp34ZwpD%2FhRbwPecOKNEgboadqgTKvcf%2B%2FrOcmye9iOLu5BkdXHAXRojLeWjntGsKHbwXZZzpQhWj0iJQfhmF8vXYec4%2BNlJU3slpYiwkHEviA7QGeF34v8itSeGlarifC%2BdwMWTYmMF1Y3asGCVTyFgOneU%2F5A436MKea0Dj8parz0B1WvnkT2%2FCJsDSA1bH4SOagKztPjQz%2BCi8I8vhQwJBD%2FC348oUDAM7P143pH%2B%2BKEWLOaoPpdUSVj0WyQYSMx%2FJej6oJ5CniAtLrVLqZjQaIazWGhof7wjcRfpzOk4dm0yG4th1aMbwhfp6fjQaPWN09Q%2Fu5%2FOa0z8PhgkZDuYjCftKHEBjqkAeWIlkM4sjPwQ3RkZcjIqpjXCJeYUoVhS2JSpPrp1eruWzAxmIqFwho7hkxFvedJu7je4j9gPtL40Vpo1yr1FP395wu%2BATz9GYeTDjSyKUOnJnCiji3BRb4tRd9EtTxxAKN0wiSMHm0NcHV1y7s9ny3aMrw4lWIjYuV1ZMgyPsw7BaQJUFAgAw1l%2FEFC9w%2FtPiVJYG4WMJ%2BKCI6XjS2YoA4eB4zW&X-Amz-Signature=139cd43417ff6fa50e4395e7022a9a427010d2abb94698246c9f4dbe0b840f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCKOEZV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7gf3OKfQwSXMDA%2F0Mj3p9MQW6h17ClE3r2F3sH%2FUp%2FAIhAOXugdu6bVa6X8ELG4wPDWKF8ZPEV44PDiKgtuB9O13%2FKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHnt%2FMZYZcRYpBdc0q3APPnLmLktYzs1QAjw9Ok0KwRZF8LOf29bjugBuNIT2s4%2ByIzVigOm3I7Z9w%2F8YP%2Fv0UXqxLDlOxHpsifed2GRchZhvYONVTgPDcm6Jj2yjI1ZZKi2b2ZWKS%2BuruH%2BEUPBkXGUOT9Qo6aADj%2F9R0Sgw0cyao%2Bqph2OblMe642QUevgpLDHEIopPQegQVnl8qS2hPnEWjlGuQdaaVyO2I3Y8dghDhIY%2FxpmWfoCdh7jd%2FxNGIpgGH%2BjrU9msnQY5OVyxF3eVub7lYVmirYZ3Wqi76Z7f1IjAsAM5mwwp34ZwpD%2FhRbwPecOKNEgboadqgTKvcf%2B%2FrOcmye9iOLu5BkdXHAXRojLeWjntGsKHbwXZZzpQhWj0iJQfhmF8vXYec4%2BNlJU3slpYiwkHEviA7QGeF34v8itSeGlarifC%2BdwMWTYmMF1Y3asGCVTyFgOneU%2F5A436MKea0Dj8parz0B1WvnkT2%2FCJsDSA1bH4SOagKztPjQz%2BCi8I8vhQwJBD%2FC348oUDAM7P143pH%2B%2BKEWLOaoPpdUSVj0WyQYSMx%2FJej6oJ5CniAtLrVLqZjQaIazWGhof7wjcRfpzOk4dm0yG4th1aMbwhfp6fjQaPWN09Q%2Fu5%2FOa0z8PhgkZDuYjCftKHEBjqkAeWIlkM4sjPwQ3RkZcjIqpjXCJeYUoVhS2JSpPrp1eruWzAxmIqFwho7hkxFvedJu7je4j9gPtL40Vpo1yr1FP395wu%2BATz9GYeTDjSyKUOnJnCiji3BRb4tRd9EtTxxAKN0wiSMHm0NcHV1y7s9ny3aMrw4lWIjYuV1ZMgyPsw7BaQJUFAgAw1l%2FEFC9w%2FtPiVJYG4WMJ%2BKCI6XjS2YoA4eB4zW&X-Amz-Signature=6257c8ff425a9599732d821e1d0b47bbbe3edd991522fb0edf4f5d57c87bc83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535RFYUI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDg4FwB%2Bdoj3rEZCeg1c0rnIQlMecoUCdjq23UxuXwqwAiEAp9Jd5DJN6JlwnWY2WHwHd9r1GXooGo6mtO%2FmB5mm%2FzMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6FjnCebHmJ3ZWd1CrcAxGQbCqoEskV0XsubagUqRfbGrnBIRwLsHdubwhzcoRd3OVyZm0Dk7utgHet8ExSGYwPb3wRoYXwn5p849gwR1v6ssv6P6lh8HY58p%2Fw801Z1gz3wB0CQG95YC2OqBXx5N3WwrLnGQfUPVEXt0qoJn6xHGyRw6vEOFOgaycXh7Rifh%2FvUxwA8UDAYK%2FVVtcsdeCV%2BZl%2FNC689fNcCcZp5sVqS9Q1njivo2WD3EB4Z2FkGWU2H6hqjLpTWz9VwyLL1OQy1Z9lQiUVVBLfIxXDrOjWujawPBAwT0N8xK9XQ9IQv7WvDean9vkjgPwabTn8mtVH3sEsw24%2BoV4M3JS4f2eq1mv33gtmRZ2kxA0GMtAefTNQzpHLNWMlKJy%2BI2bquIZeTlI%2F9sgpk0RvQlX5JC2MhPKTXQAhVBHLRUUynSjtcnUtnpIr96F6CYsGDark9uJ1bc6Kp%2FGMmoFigmgoYSD7yD3WhLlYhX9hwy4RYkfDZeid7Hno%2FfDVPUlpyJ0CZungSyh57caV8LMTtgw6Z2wCijlugBTcMNlgg%2Fq4PAPMizgyoI6dVd0ARJFyOQqI7WKadocKtLYWFazLN9XhMuX8U5waDto9GXn20kvsGrAqb43n5XSLR3aP1ZmWMLO0ocQGOqUBi%2Fj9qaCc13bMJyA%2B5GsetkbQLivWOhdf973gsw91tYy97%2FcaxBIw49IxYZaPLMBdIJC%2B6EFO%2FDA042M5s6z6a8Csw632IQiV1A1iXeDdfiN1t26xXIcd1OzkgYfXZQ1GtBHQbjXQ%2B1XDntiFj7WFlVaHigOmbBfXzW9yfS0xEz7yr6gx8gm2NLoSsLq7dBG1or%2BbNnWuwk9DbEhJDLFDUWQwsD90&X-Amz-Signature=f76df90fb1a85706d1e5042d557d52495f76e576a8a94d774e23494a763fff94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBHBQVQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE7SMrSJLYScg0B3Vg%2BjPlmnLExjQpbzdIsAi42LnVhoAiAz86WrsnUtdZPu60%2BYZfRCaeIeqoBE%2BYCAQZFgPnopkCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl5nZmAKBnF5W0Ky1KtwD675Ev%2BIlbHWZsNSJzXku1VVJL2wYZQVqr7cQBB%2FSeDAo%2B9QEeUL5ilcEkZzgSK4xF5qjZ86orzWV3jO2gfdRR9KiRvmiAN2FlYoTotOFlJesBfvNx3USXYBd3TFNExMCc3Hi5MJNBTfXzAJFyBhW3u6CQCqHrWOQ7uQw93A4fGqRnwGC4d9O2qWeDc72cC6tI%2FYyrkyA8ycTHC4SCBfJlsLdvTIgFsLVZUHW%2BJWEIGPYM1rjRodcOzl%2BilDBWLhyW0GZv9eYykvl%2FDTU2v%2FieMffgKdeD9OnVHrh3iOLS2wNi5xnJfspjAiiKIa102osxea1UDYQSAb6ykMPkwD8ywgrfS7iyVPmW8%2B6VCB6aIpcwjosDfgvQq8UC46xh9OkmVEbSEfOdnFZWMjp1wIW05A%2FuW%2BRIQvjXV1zMztSyw4x2WWGPGBFQuKBFsHxCrlfnGEk%2BJLUyuocfo%2F%2FDEPVNsgawGqobyIpwGOZWPix6RU5dwJ8FHkE5p0hRoMa8T5%2FSZ8xX3YHKAGqpYWOKs86O0Eqcgem7neSyaPS8n3baqGeaxAQlZFgeiN8Dhjrz5N1o8FSFcXSyNqeZRLOQZaVEqEadG4A8fgL6qa3DpmJOcNc6wwM1p7dGFIGS1owqLWhxAY6pgFgXcGUoJI2Slo150zivRzEKKyzlfS%2BL14DtjI%2BWKKX29cdBZ5hYvfhsedIEVDVe0rmifgmyPngarfbsLqOjtV7OEwp8hfLEMnW%2F%2FN5rML0bd2ils%2FlVkclK567pblJq5PxI6d3WpsPv4NoX2mIQV7xD3DA%2FQ6xPfQvR267W%2BJ9W4ruP6YTMU2OGQtG48HTCjglThgij6lI%2FUxTnGdsfkICe1Oo4W1c&X-Amz-Signature=5d05e5bfb446dbe8a230fe45a60f5b998e0fb75620506e3e094367cc6db2dddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCKOEZV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC7gf3OKfQwSXMDA%2F0Mj3p9MQW6h17ClE3r2F3sH%2FUp%2FAIhAOXugdu6bVa6X8ELG4wPDWKF8ZPEV44PDiKgtuB9O13%2FKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHnt%2FMZYZcRYpBdc0q3APPnLmLktYzs1QAjw9Ok0KwRZF8LOf29bjugBuNIT2s4%2ByIzVigOm3I7Z9w%2F8YP%2Fv0UXqxLDlOxHpsifed2GRchZhvYONVTgPDcm6Jj2yjI1ZZKi2b2ZWKS%2BuruH%2BEUPBkXGUOT9Qo6aADj%2F9R0Sgw0cyao%2Bqph2OblMe642QUevgpLDHEIopPQegQVnl8qS2hPnEWjlGuQdaaVyO2I3Y8dghDhIY%2FxpmWfoCdh7jd%2FxNGIpgGH%2BjrU9msnQY5OVyxF3eVub7lYVmirYZ3Wqi76Z7f1IjAsAM5mwwp34ZwpD%2FhRbwPecOKNEgboadqgTKvcf%2B%2FrOcmye9iOLu5BkdXHAXRojLeWjntGsKHbwXZZzpQhWj0iJQfhmF8vXYec4%2BNlJU3slpYiwkHEviA7QGeF34v8itSeGlarifC%2BdwMWTYmMF1Y3asGCVTyFgOneU%2F5A436MKea0Dj8parz0B1WvnkT2%2FCJsDSA1bH4SOagKztPjQz%2BCi8I8vhQwJBD%2FC348oUDAM7P143pH%2B%2BKEWLOaoPpdUSVj0WyQYSMx%2FJej6oJ5CniAtLrVLqZjQaIazWGhof7wjcRfpzOk4dm0yG4th1aMbwhfp6fjQaPWN09Q%2Fu5%2FOa0z8PhgkZDuYjCftKHEBjqkAeWIlkM4sjPwQ3RkZcjIqpjXCJeYUoVhS2JSpPrp1eruWzAxmIqFwho7hkxFvedJu7je4j9gPtL40Vpo1yr1FP395wu%2BATz9GYeTDjSyKUOnJnCiji3BRb4tRd9EtTxxAKN0wiSMHm0NcHV1y7s9ny3aMrw4lWIjYuV1ZMgyPsw7BaQJUFAgAw1l%2FEFC9w%2FtPiVJYG4WMJ%2BKCI6XjS2YoA4eB4zW&X-Amz-Signature=7ab4b19dfc1829a611f772c332e91ab5ab9500909204609c1b0c3abcaed08f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
