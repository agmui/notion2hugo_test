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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5R6MU6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCZC35%2FXj0bT8u%2FhQZhp9wayeGwuQgQyhGEC9uyJQzPkgIhAN3mMWmEwIDeSTVnVgdPtV6U7Z4VKlZo1MaUDmnjLDReKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkw0nALuRKhImF1v8q3AOXHZ3VkEYo2If%2FC7rZAmDuHQCtHfC800LWOlkKZx4BD6g%2BfaA4kg3FRQ5qHqDh6PSzDWzsqfcDtot8dNs%2F8%2FDxp2i0LVfO8hNydB8koPapcLl%2BSgqRs4mbvZUZG0yHBudoIgspFulxABLwXON5%2Fkg3WagFt8nuOV8PKmOZdd%2BA68EXy8WuW7MN4jTVyGLcNzt4FqMDgXg%2B12aKTN8YuYXbEEzDWJznWPLTSqM8Jg5IKz9m2Chx0skc9746OaHAuF%2BaOBXnlzZCguy52I14glwai27B3GxHOsEjvgmQK5V7S3j7qpy9GyDsUaA968WVAl8BzQ5TqzBmgQYTQ5h7am65Zdqh3k7pCFxIqEiTZ0jwtGM8%2BxcNQOiQIUdIhnyA4f3X9UhqwBh2LuQPgiNQ9n9AiRgVR4IMCLu97et9bXUzbXSlruCLSuQ%2BE57SxdQFE1ysawsY2Yj23j8on0GoYcM0tudvzbPxRx5JE8QfhS5HDpHKOP2Jc6KrJ8DdTtKhTunfx4CpIM7ysXmkstOkMKzCbszRnI0aEE3y3B1qOYzQYL3PhMKHHUhVQC0pCgRkKKrKk4Lb8qdWIH%2FMJtR8YAtQYVni8MJE0C5sLwUlERxIZ5khJQnBZPXcHHouwzDsh7C%2FBjqkAbkGqW8M%2B1w5cv310Xi7Om5y0hC2Jyy3BRRlpxCfUgLFUlcS270qYYaOphl6uiYvNlrD5YeXZtjafj%2FCeySPsQg1o109vocZxsbQL%2FCfcwkDl%2FNN9%2B3OjgSiDZRZ0gdPRFHO04zfsBJdcC6%2FIHixX4Pw9FUt8K3QBJLkARn%2B64pgz3AUt6NaPxFBYOs6DyeM0PzG60bk96A2w9ibEniNoEsBPk%2Bb&X-Amz-Signature=504b111c0d12177ddba2ff6d69e0295cbf0a659dc751fecae62d12422f425ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5R6MU6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCZC35%2FXj0bT8u%2FhQZhp9wayeGwuQgQyhGEC9uyJQzPkgIhAN3mMWmEwIDeSTVnVgdPtV6U7Z4VKlZo1MaUDmnjLDReKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkw0nALuRKhImF1v8q3AOXHZ3VkEYo2If%2FC7rZAmDuHQCtHfC800LWOlkKZx4BD6g%2BfaA4kg3FRQ5qHqDh6PSzDWzsqfcDtot8dNs%2F8%2FDxp2i0LVfO8hNydB8koPapcLl%2BSgqRs4mbvZUZG0yHBudoIgspFulxABLwXON5%2Fkg3WagFt8nuOV8PKmOZdd%2BA68EXy8WuW7MN4jTVyGLcNzt4FqMDgXg%2B12aKTN8YuYXbEEzDWJznWPLTSqM8Jg5IKz9m2Chx0skc9746OaHAuF%2BaOBXnlzZCguy52I14glwai27B3GxHOsEjvgmQK5V7S3j7qpy9GyDsUaA968WVAl8BzQ5TqzBmgQYTQ5h7am65Zdqh3k7pCFxIqEiTZ0jwtGM8%2BxcNQOiQIUdIhnyA4f3X9UhqwBh2LuQPgiNQ9n9AiRgVR4IMCLu97et9bXUzbXSlruCLSuQ%2BE57SxdQFE1ysawsY2Yj23j8on0GoYcM0tudvzbPxRx5JE8QfhS5HDpHKOP2Jc6KrJ8DdTtKhTunfx4CpIM7ysXmkstOkMKzCbszRnI0aEE3y3B1qOYzQYL3PhMKHHUhVQC0pCgRkKKrKk4Lb8qdWIH%2FMJtR8YAtQYVni8MJE0C5sLwUlERxIZ5khJQnBZPXcHHouwzDsh7C%2FBjqkAbkGqW8M%2B1w5cv310Xi7Om5y0hC2Jyy3BRRlpxCfUgLFUlcS270qYYaOphl6uiYvNlrD5YeXZtjafj%2FCeySPsQg1o109vocZxsbQL%2FCfcwkDl%2FNN9%2B3OjgSiDZRZ0gdPRFHO04zfsBJdcC6%2FIHixX4Pw9FUt8K3QBJLkARn%2B64pgz3AUt6NaPxFBYOs6DyeM0PzG60bk96A2w9ibEniNoEsBPk%2Bb&X-Amz-Signature=feab8e52d0dd5455b312064cd79a2c07e163a3d47824a1a74bf5955b3e581743&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IRYDZZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQClB1D6f3MhdBFuHHMjEq7grVcaq%2FXecf4uUJI4ebn6OgIgBfiBXhFRkT4Hjtk8KHx%2Bb3ksgrOnxQnqzO%2FiO0STpbEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK95dBGHiwl6aQSjKSrcA8lFCZ7uL9yJfWdNKeQravxHpeSpsLJZMX7oadfWVGbmRMQopPh8BT5qlQXWmoBPGq5SMmqISMQRIg5DMqTEQFBop6LBS4GfDLcLezitvO9jhwrnamsyTMq88kES6p2SedXzfZYh6ESf6VBDzypvHWNG7Adi6GyuswK6QDQVJbt4PEYy9lrlQfszGtrZeX6i2Z1EbLjnLbIuK72eWF4amfrs%2FzeLw8DXebMNMEqBIk3eq%2B2x6GxkJECSC6%2FyVkG28wCa4MtE%2BSgysC5qUQ5LfzFhF8YGybYxz9VEV3EEDB2%2BhW8IW2kaiHO%2BkRpmik%2BW2HlUPmESmwjl0UZqbrS6STxnKNkMxfUoyVj0TGexKUsZjbwDtYNDGGmhPwjqLUKgIK0t88QJreCwytKklwmedYqJGXXf%2BJn1kqGzl6N5bTzS6yGKgJOcSBSStlbxAMzxL4ctKuwvndH4%2F9SJ2eNyVcjylTmGcFOFqYUQTNd2QRTQMyhYgvW8cxCLgIE%2BSp1XL9tT%2FsIBbyVbZJ2u0SRQ2P41FcqY1UzKIW%2FWVTr2G32uOBOJlsa3NlTsPQTjgCSa2YcLlksSxlvrF5YW%2BZj9mVT0c0ZczeLZw7yLmNrHcaniNekqMtf9s6%2BhJceqMNmGsL8GOqUBOaJ2x6mQCP90kRJ1rithOfj470hdXNGqBPa2Xq1lc9vuCcnXjG25kgBbwEiWXYAFAY9cZpkbKV%2BIqYIFNHzsZAJ2ngaZEMnLLbNC1Kq3gwJo7HiOmEy15lnudcsxk0Mpa87FiKYFSYtuPoiLzAQYt0vUSeFyMexPQZToqGm7B4r01%2FQBS5NI%2FaIM1XGzgAK9IhlDEEMoGHRzzaXR1poxxypy2QjB&X-Amz-Signature=faabb203d7303f8be9fda0d7aef29448f00fdd759dbc33a548a29947eb070ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FBSRKMB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH4eFby8c%2FSLEt7MHivMn1Tr6HiWjb%2BnR%2FqUlNxs6I62AiBOyeIBW1cMzIYWnjkaAQs1EFoRGsf47k2iDOrU0THiViqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMByvhJ1it31tHXp08KtwDopqDQ6LdKA9tCeonmxd3zPXW%2Bxw8kGs0uUHf8FtTBEEAQCmXWPNIJWlxVide3H5H7RLVDraB8MCeckAPAM5DLh8KHsVwspdzb0PqYIrcUTQoc1E4dMN7orLIYmBeNdLds%2BItmJdqMPBZ3MMa5eInTckzcINqp0EBxrrRduYP97erv5eF3gr7RI%2Bz%2BCVNQvnSttxKskDd%2Fpu2yVAZ%2Fi99%2FytV37s4Ylji55Rywi6sdO1XEWSC7DgQ2gVjbRAJDcVNdGidwCjAedjLJ7qu%2BGW1i9ZrNtSHS4hV5k1sxmGtUNGlrfmEDixScb5tlk%2Bxr9I%2BGkRXqR5BIsvpXcW0M3ZmhrB8b69KMlTKExQyGFkf%2B7%2ByERczy30wE6s73NG1mvR1kB8dPR61hWJINd6v0N5Rl03%2BK99ci%2FeICF9MKBh7UL4a3rJyibj7bUiRrl%2FPa5rBsfuJdlQecXw8%2BSHVG4v%2F69%2F9M3ZX65DXFty1Amu0VfaQLWFYdwOvL63CGSK%2FxsqCB0xP7IqHbhpdP9dMt%2FUczWCE7gpxcWpXEC9OPeE49WV4zb3V9FXB9NLapDKbm6JvKYcVLtrL6HJ6rEdQavmribrXyjsPmVFRAsMqNHx0nGxqRSmDJ0IG9RGInW8wtoewvwY6pgGvMKphvBVy5P6qEzzORFDU15%2FrtwOHFvZucSYltf6z%2F3JqGQWlHQqLlTu7uKikKzQOX%2FdNbITPFAMIjMS2qeqFzEUCvnCfS%2BR%2BjgIc6IF04Mt837Pz2Zn1%2FOgs4yTlDqcYHN7yPR8TEmRM7nCcfEOoQQgPaRU1W9utbgEmBPr2ghaYfXsEeVaM7%2F78M2F9O%2BFezBJtYDuQuCRuLQTg3Ubqx13u%2FOnA&X-Amz-Signature=5653a6e06d1475e047fe915531295b749e989c7859b5404191db7737df3300c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5R6MU6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCZC35%2FXj0bT8u%2FhQZhp9wayeGwuQgQyhGEC9uyJQzPkgIhAN3mMWmEwIDeSTVnVgdPtV6U7Z4VKlZo1MaUDmnjLDReKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzkw0nALuRKhImF1v8q3AOXHZ3VkEYo2If%2FC7rZAmDuHQCtHfC800LWOlkKZx4BD6g%2BfaA4kg3FRQ5qHqDh6PSzDWzsqfcDtot8dNs%2F8%2FDxp2i0LVfO8hNydB8koPapcLl%2BSgqRs4mbvZUZG0yHBudoIgspFulxABLwXON5%2Fkg3WagFt8nuOV8PKmOZdd%2BA68EXy8WuW7MN4jTVyGLcNzt4FqMDgXg%2B12aKTN8YuYXbEEzDWJznWPLTSqM8Jg5IKz9m2Chx0skc9746OaHAuF%2BaOBXnlzZCguy52I14glwai27B3GxHOsEjvgmQK5V7S3j7qpy9GyDsUaA968WVAl8BzQ5TqzBmgQYTQ5h7am65Zdqh3k7pCFxIqEiTZ0jwtGM8%2BxcNQOiQIUdIhnyA4f3X9UhqwBh2LuQPgiNQ9n9AiRgVR4IMCLu97et9bXUzbXSlruCLSuQ%2BE57SxdQFE1ysawsY2Yj23j8on0GoYcM0tudvzbPxRx5JE8QfhS5HDpHKOP2Jc6KrJ8DdTtKhTunfx4CpIM7ysXmkstOkMKzCbszRnI0aEE3y3B1qOYzQYL3PhMKHHUhVQC0pCgRkKKrKk4Lb8qdWIH%2FMJtR8YAtQYVni8MJE0C5sLwUlERxIZ5khJQnBZPXcHHouwzDsh7C%2FBjqkAbkGqW8M%2B1w5cv310Xi7Om5y0hC2Jyy3BRRlpxCfUgLFUlcS270qYYaOphl6uiYvNlrD5YeXZtjafj%2FCeySPsQg1o109vocZxsbQL%2FCfcwkDl%2FNN9%2B3OjgSiDZRZ0gdPRFHO04zfsBJdcC6%2FIHixX4Pw9FUt8K3QBJLkARn%2B64pgz3AUt6NaPxFBYOs6DyeM0PzG60bk96A2w9ibEniNoEsBPk%2Bb&X-Amz-Signature=3bd700ce814be87e375e3ed233e675272988c3317d059ce643cb30230d2aa6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
