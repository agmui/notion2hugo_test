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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVQWXR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvfI%2BjGm2GyNz%2BdKSo3IjOow9SVYGgm2ReeJekILT5ogIgGzQqh%2F9MzYpUcED1aXlFDgR6CVOhKPBGaGvUlE%2BmVxQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH16jpjSFbshPpQ%2FCrcA8Jw99eldkeOmijvoEtjeahhjVI0PP8xXoQuRIXm0s4z9EmGHdejq47i0x6zx%2BWDV4kAkcywMV3psd580lMZD3doZnNR81X%2Buvhb2OyNXGWVtvlIAu0Lt7XS9gPc5jiDg%2BVnP7%2BcwmRBHqOP6HFomjevhsjmJInHlxwzR5s6IAlVSrM%2FENOPLFGEZYszjntrMYa%2BT7M1FwyI69N9ujeyUEw0bBGvX8%2F9LEqdemR6D3Eoto%2F7xbcIZGydWNsZUJmo2FTlbYlAiWT5tYUAo2%2FliNipjqMhvY9vI4vAg9uEE4qiglrwnRpt4CwW2fmm0%2BOJULtFPSrPpgl4%2B0P54Z1d1oQVdg7uOx0tlcqoibNPGGcK2GbvLkwiP%2B8e3gDcTAhun8rg6v90ZDQbQF0%2Fd01CJQ6%2FCoxM1JUSvz2nVoJrzN2jxuvdTIGCIGbmdG1L%2BLi5x91ffNnk6cLYLA16sK7%2FSyVd7k%2BpeL2zy3FznEjR0VAZNlUNCcytFRv8aSm6ZHcaNrbpIT8hZf1qwKIqYVO4Ln%2FgWKGaGl8LknEtHhFVg%2FH8yHkBIghKv%2FuIuJSogq%2BJFCLGpIe%2BazTupsFZrAOgQwfoW%2ByohepSKZs0jQn4Exs5z%2B2qWAtLD0NWhYvGMM%2Fs%2Bb4GOqUBSpG5LI9NYLIzkDExNxvkD%2FcMEv5MUBvif04cSacrYNuSb%2BD9BI3auh6UJlxy69RTwNW8WpTbuBkn7biEAqBKxvgwj5EcfsBkWjeMbq00g6ay2%2BiEKgvLSLR5vmQ8SN8W9EOo4ugtdIYr9Lkn9ecjYrzU0Jl6uwhfaNT3DQuQz57s4hoX6QeWX9rW%2FcWQHjwKto4DA1B4SzEunIhxjlNliHq7hoKQ&X-Amz-Signature=3593ecfdf13e3e2d15ce95ae19706290b393d416456608c1d6a431c191d002a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVQWXR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvfI%2BjGm2GyNz%2BdKSo3IjOow9SVYGgm2ReeJekILT5ogIgGzQqh%2F9MzYpUcED1aXlFDgR6CVOhKPBGaGvUlE%2BmVxQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH16jpjSFbshPpQ%2FCrcA8Jw99eldkeOmijvoEtjeahhjVI0PP8xXoQuRIXm0s4z9EmGHdejq47i0x6zx%2BWDV4kAkcywMV3psd580lMZD3doZnNR81X%2Buvhb2OyNXGWVtvlIAu0Lt7XS9gPc5jiDg%2BVnP7%2BcwmRBHqOP6HFomjevhsjmJInHlxwzR5s6IAlVSrM%2FENOPLFGEZYszjntrMYa%2BT7M1FwyI69N9ujeyUEw0bBGvX8%2F9LEqdemR6D3Eoto%2F7xbcIZGydWNsZUJmo2FTlbYlAiWT5tYUAo2%2FliNipjqMhvY9vI4vAg9uEE4qiglrwnRpt4CwW2fmm0%2BOJULtFPSrPpgl4%2B0P54Z1d1oQVdg7uOx0tlcqoibNPGGcK2GbvLkwiP%2B8e3gDcTAhun8rg6v90ZDQbQF0%2Fd01CJQ6%2FCoxM1JUSvz2nVoJrzN2jxuvdTIGCIGbmdG1L%2BLi5x91ffNnk6cLYLA16sK7%2FSyVd7k%2BpeL2zy3FznEjR0VAZNlUNCcytFRv8aSm6ZHcaNrbpIT8hZf1qwKIqYVO4Ln%2FgWKGaGl8LknEtHhFVg%2FH8yHkBIghKv%2FuIuJSogq%2BJFCLGpIe%2BazTupsFZrAOgQwfoW%2ByohepSKZs0jQn4Exs5z%2B2qWAtLD0NWhYvGMM%2Fs%2Bb4GOqUBSpG5LI9NYLIzkDExNxvkD%2FcMEv5MUBvif04cSacrYNuSb%2BD9BI3auh6UJlxy69RTwNW8WpTbuBkn7biEAqBKxvgwj5EcfsBkWjeMbq00g6ay2%2BiEKgvLSLR5vmQ8SN8W9EOo4ugtdIYr9Lkn9ecjYrzU0Jl6uwhfaNT3DQuQz57s4hoX6QeWX9rW%2FcWQHjwKto4DA1B4SzEunIhxjlNliHq7hoKQ&X-Amz-Signature=e4edbcaacefd66568cda974aff17b6171f34819543ef51c965444701663f2dff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDI7J2G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEeAzLBlFi%2FgUgWO39pao0oQkPKlfa7ddT99MFcobceXAiA9u5CRDLyffROj7HuGgSoCoT08MllX2mTWlfxNdxB%2F9yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxUszvQ5VMiBtErb9KtwD93%2Bvg9gwPEguJwgWo0XfqSzZrLMEns1eQ7tf51QifKvDscS0xs1RVq86aAA%2BYgm%2BfC1RhZomvCtBGXA%2Foq9M0YyruEmMM0SPtp1j%2FYjm8wRV78a0ObITe1TeiBWHEGjzSCC07ajR08ezppDXJD16gn6WigLyf0yTonTSekULfjyb2AGOz86HXXAQlD5IUUOecAGSX1aZA1dNV3vXjw2hNSEh6fgU7ZTW88ZHgfL8bf19Y33goObpy9jKuhfQym4wlwV10iAREzVGQmc%2BEDLXda%2FQK%2BXXeU74XQEcMqh5QOfkPBA6ZmrEKHLJH%2FyIqhz1Sr0rdITO5uMS9UfMNi5oP3hOErJeN06oSOzmIEuthtYp3WAQO9i%2B4laFTqmr8I6%2B54Vof6S5WHbTJ5lCG3gqqHDGKNvnoLEU5KThkNv%2B99uzsiFhDdlVF5Y5%2FzGR6gG5l2%2FYaeh%2FMI4VpsoPgdJAO5NnuT%2BOUxdoJ0noyeY3RPQc4%2BCsAyUMWRdzzZVWtCDQKzyZRcEkM4SquVG1S%2BICTtsTUAKFF6hxqmHkDTekLARSwARsbP7ESuP6bzEi6BNFESoDWmpe5NQVrG9QlUDA9ioiafu%2BuGEV5tmfzzSkqH4%2BlaPU%2BtBkRboNoz8w5%2Bv5vgY6pgF7i9SOfYRUbB%2Bb3Jv0rYTaUYxGxWHDOR0Av1fncdvWlNJmxngbWQ06rDWeetJWkV%2Fs0JY5yLFYDG6aQzZHM2uacltOtkT2CPq%2FtIDO78hHNMzNxMyKtPidOW1cQo4wrPVjt6raFZR6SUmn1RVN5mQQm6LYyJULHNyufzac1Z65XTZjNKI110W7HrxkUK3xaot8%2FvfC11el7MTfS83BmJHIpgPFGV0l&X-Amz-Signature=83e6b811876fd6c6e0fdb6a96a5494286651197ae3051a753c39fde081205960&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MLNAMVZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHL%2BABTlHhzjfeS%2B6IsMasRlTHVSH%2BCEo8IQ2oX5Ri%2FnAiEA2tOfjROZIPVmy5loRPTuFd6D6wsfs0X8Tk9jz2xbtS8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjF2ClgIT4YQ2jO2yrcA8Ok5YbzuFi37c3YlwxqMTOb39098VsY%2FL3ajZ0BlVgbyB%2B3DyPW1P0zGMb7%2FJ6Oq8carJxRcVGrifu088T%2Fr9W%2B5pGxjg7L3RHeAUC0OFi5K%2B0Aw5YaUESbsIdNhRos1v9wVHPasXCFK6hvXAyje3Hyc8L9YR236FCOXCYsJ%2BHiyitE2OcXFMwBOWinXGZ7Xur1yseMPOvELt8RwKGa8AcuH6Jf%2FLEK0eHSkZJiSqGbAj3r8xpDH5eImN%2FTmd%2BcHAGcAoVDX6pwNzKxXVQFGl1q2qcOStpwy3XZoxi2aTdlQe68i6OKwm5i8ApkO4kUBF3ehxVTcdQAQ3hXFTsxYNoNL%2Fc1UKWU4an%2BqpT7h2vgEpAdwPN0uflAPzRNjeLVXlJHzDrm8aWCcKrshxaXgVCvvKeBtWzKPI3e96%2BXtoCKYZ89XFo9saRL3rlOJ1l1pxkd4O5jCr%2FPzKmjqhfOZFoOlIN%2F22FoW46vCS0OpWMtxPfnnOibPr0vu%2BfTTfDQeZ3xZUEQt1j%2B19EllK7V%2BWQLT8UuByh8JMzd8EqYMaiq2nQmmAlnLGqDlE6RGT%2BsJp0rOysrP7QOoxYHulNUTT1AvO5DJO4VBph0Mg3B2Y9VlSnq3URpm1C5wvZxMPPr%2Bb4GOqUB%2BGd9Fviu6F5ldXLWGC1jJHb3Qr9QgwdCXh0raeT05aYVhOBKrtsPlFFTQ14C%2BBc5pQU9iu2WgO4CT4lTgIVxhC5jRSKj4K5Ty2MYKOqRWJBZm6tgPVq3REpVRjqyVgQEiRPoAYdtzXsXttWzBVGdmiyZiPH7ABqb8Do0Ojdb8BMLz2ub2cUenRNOkh0xd97PYJoa2JpoAcyCTXN5I8arEWOQlToj&X-Amz-Signature=599927f66c56b9129973f8d08d9d38d9e59179995d4400203517ebf2fccae82b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCGVQWXR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvfI%2BjGm2GyNz%2BdKSo3IjOow9SVYGgm2ReeJekILT5ogIgGzQqh%2F9MzYpUcED1aXlFDgR6CVOhKPBGaGvUlE%2BmVxQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH16jpjSFbshPpQ%2FCrcA8Jw99eldkeOmijvoEtjeahhjVI0PP8xXoQuRIXm0s4z9EmGHdejq47i0x6zx%2BWDV4kAkcywMV3psd580lMZD3doZnNR81X%2Buvhb2OyNXGWVtvlIAu0Lt7XS9gPc5jiDg%2BVnP7%2BcwmRBHqOP6HFomjevhsjmJInHlxwzR5s6IAlVSrM%2FENOPLFGEZYszjntrMYa%2BT7M1FwyI69N9ujeyUEw0bBGvX8%2F9LEqdemR6D3Eoto%2F7xbcIZGydWNsZUJmo2FTlbYlAiWT5tYUAo2%2FliNipjqMhvY9vI4vAg9uEE4qiglrwnRpt4CwW2fmm0%2BOJULtFPSrPpgl4%2B0P54Z1d1oQVdg7uOx0tlcqoibNPGGcK2GbvLkwiP%2B8e3gDcTAhun8rg6v90ZDQbQF0%2Fd01CJQ6%2FCoxM1JUSvz2nVoJrzN2jxuvdTIGCIGbmdG1L%2BLi5x91ffNnk6cLYLA16sK7%2FSyVd7k%2BpeL2zy3FznEjR0VAZNlUNCcytFRv8aSm6ZHcaNrbpIT8hZf1qwKIqYVO4Ln%2FgWKGaGl8LknEtHhFVg%2FH8yHkBIghKv%2FuIuJSogq%2BJFCLGpIe%2BazTupsFZrAOgQwfoW%2ByohepSKZs0jQn4Exs5z%2B2qWAtLD0NWhYvGMM%2Fs%2Bb4GOqUBSpG5LI9NYLIzkDExNxvkD%2FcMEv5MUBvif04cSacrYNuSb%2BD9BI3auh6UJlxy69RTwNW8WpTbuBkn7biEAqBKxvgwj5EcfsBkWjeMbq00g6ay2%2BiEKgvLSLR5vmQ8SN8W9EOo4ugtdIYr9Lkn9ecjYrzU0Jl6uwhfaNT3DQuQz57s4hoX6QeWX9rW%2FcWQHjwKto4DA1B4SzEunIhxjlNliHq7hoKQ&X-Amz-Signature=ac6f2aa545ab378c8bd79dc38024ea61d183a84a3510791d2b88c924aaf85885&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
