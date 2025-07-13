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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWLRMH3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCVqQhHPQ6uB8bpIIxsbGFfwnBIKLQd0NtFpE0lk1vR8gIhANydPHrxCxEG3U%2FeVUOT5UyWROHpmBSTcOpL2xk4ITfmKv8DCB0QABoMNjM3NDIzMTgzODA1IgxmZXAi98HmOpgzTm0q3AOZ5JOWmm%2FXz%2BHWoeGyykSUT0ARdfHlMOg9PdofI1MyaShbq%2FqK56RZUx0luuERwu23xo2MkK8OAhfwrxjRgrd4qUfCWYvl5l39Ifubnv%2FOaYuRHRtsvlB5b7Blm1j5qjO8J6hxKfcyIkwKPaly6wREnOtk%2F15gJY0Fe3zRN2xutCvM%2FcgyRd9%2B4wgzDoErjICkd%2FFPniKx2RvNIuh9mgz05Nb3kADRX1GaqXWYZk6sArMkf39ZJgcpAW1Im1Ol35OoD7x4rC0BjE6tz4he6ECjOjXz0%2BmZrIDH66rVusCctf12CqLlSBQahk1Sifb8thDsEg4T7Wnk56XvBHj%2FORIBnIEkfuTPSQRq2VDVXlaEqgffXM0QPlcamnPbfwG2rnf3dLIEmW82o96DMwJZlQ%2BvzKiT9PD1CLcu5IvKsBm%2FhHZUPUwusFMj3N9zLXCngadHiymUrClMlYjrhLTayZSTGlXBKgtyXDdXVjZ%2FP6K9WyrQDifwVcERyNX1e2gBkG8Mur5XwsJiXgibjxBJuTIllBEVaustNKAt9vzvyMK1Kz4V%2FSGbcLsrujxQYQ0DwPIrhwA3rjLsheFmX4XNtLucNTr18BvzyCqU3nqJ89aFEaFTu7eLB5vORT2oUzD1j9DDBjqkAUFWrCZTVsgMtDAbfuNtzXHHf%2F%2F2nXuhlFG6HaJXgcNqa4Xw1n%2FzaAFfl6wPQ9zt7vW%2BAEEhe61fA2vnUWwnbwqGdt7bbL5M5qbPob33%2B%2FcQ8Bt9VWyuHaQ7sXzgyNhN2PySgZ2g3K%2BuS7SgCvTjgVPCGMHr6Hqcr8wWvxn1HyV88aqjCNUoff6maQ%2B9GgGX5nO%2Fz%2F%2BoMoz9qKr%2F431N73lvToSl&X-Amz-Signature=de919bea7d3084412f099f14fc4d978db5c7a1741b5093b076a98aa8f70719a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWLRMH3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCVqQhHPQ6uB8bpIIxsbGFfwnBIKLQd0NtFpE0lk1vR8gIhANydPHrxCxEG3U%2FeVUOT5UyWROHpmBSTcOpL2xk4ITfmKv8DCB0QABoMNjM3NDIzMTgzODA1IgxmZXAi98HmOpgzTm0q3AOZ5JOWmm%2FXz%2BHWoeGyykSUT0ARdfHlMOg9PdofI1MyaShbq%2FqK56RZUx0luuERwu23xo2MkK8OAhfwrxjRgrd4qUfCWYvl5l39Ifubnv%2FOaYuRHRtsvlB5b7Blm1j5qjO8J6hxKfcyIkwKPaly6wREnOtk%2F15gJY0Fe3zRN2xutCvM%2FcgyRd9%2B4wgzDoErjICkd%2FFPniKx2RvNIuh9mgz05Nb3kADRX1GaqXWYZk6sArMkf39ZJgcpAW1Im1Ol35OoD7x4rC0BjE6tz4he6ECjOjXz0%2BmZrIDH66rVusCctf12CqLlSBQahk1Sifb8thDsEg4T7Wnk56XvBHj%2FORIBnIEkfuTPSQRq2VDVXlaEqgffXM0QPlcamnPbfwG2rnf3dLIEmW82o96DMwJZlQ%2BvzKiT9PD1CLcu5IvKsBm%2FhHZUPUwusFMj3N9zLXCngadHiymUrClMlYjrhLTayZSTGlXBKgtyXDdXVjZ%2FP6K9WyrQDifwVcERyNX1e2gBkG8Mur5XwsJiXgibjxBJuTIllBEVaustNKAt9vzvyMK1Kz4V%2FSGbcLsrujxQYQ0DwPIrhwA3rjLsheFmX4XNtLucNTr18BvzyCqU3nqJ89aFEaFTu7eLB5vORT2oUzD1j9DDBjqkAUFWrCZTVsgMtDAbfuNtzXHHf%2F%2F2nXuhlFG6HaJXgcNqa4Xw1n%2FzaAFfl6wPQ9zt7vW%2BAEEhe61fA2vnUWwnbwqGdt7bbL5M5qbPob33%2B%2FcQ8Bt9VWyuHaQ7sXzgyNhN2PySgZ2g3K%2BuS7SgCvTjgVPCGMHr6Hqcr8wWvxn1HyV88aqjCNUoff6maQ%2B9GgGX5nO%2Fz%2F%2BoMoz9qKr%2F431N73lvToSl&X-Amz-Signature=03300d48a0282afbbff320d8c8958dc5b0d3b7ceca913a7018b83d73c9e83010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWLRMH3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCVqQhHPQ6uB8bpIIxsbGFfwnBIKLQd0NtFpE0lk1vR8gIhANydPHrxCxEG3U%2FeVUOT5UyWROHpmBSTcOpL2xk4ITfmKv8DCB0QABoMNjM3NDIzMTgzODA1IgxmZXAi98HmOpgzTm0q3AOZ5JOWmm%2FXz%2BHWoeGyykSUT0ARdfHlMOg9PdofI1MyaShbq%2FqK56RZUx0luuERwu23xo2MkK8OAhfwrxjRgrd4qUfCWYvl5l39Ifubnv%2FOaYuRHRtsvlB5b7Blm1j5qjO8J6hxKfcyIkwKPaly6wREnOtk%2F15gJY0Fe3zRN2xutCvM%2FcgyRd9%2B4wgzDoErjICkd%2FFPniKx2RvNIuh9mgz05Nb3kADRX1GaqXWYZk6sArMkf39ZJgcpAW1Im1Ol35OoD7x4rC0BjE6tz4he6ECjOjXz0%2BmZrIDH66rVusCctf12CqLlSBQahk1Sifb8thDsEg4T7Wnk56XvBHj%2FORIBnIEkfuTPSQRq2VDVXlaEqgffXM0QPlcamnPbfwG2rnf3dLIEmW82o96DMwJZlQ%2BvzKiT9PD1CLcu5IvKsBm%2FhHZUPUwusFMj3N9zLXCngadHiymUrClMlYjrhLTayZSTGlXBKgtyXDdXVjZ%2FP6K9WyrQDifwVcERyNX1e2gBkG8Mur5XwsJiXgibjxBJuTIllBEVaustNKAt9vzvyMK1Kz4V%2FSGbcLsrujxQYQ0DwPIrhwA3rjLsheFmX4XNtLucNTr18BvzyCqU3nqJ89aFEaFTu7eLB5vORT2oUzD1j9DDBjqkAUFWrCZTVsgMtDAbfuNtzXHHf%2F%2F2nXuhlFG6HaJXgcNqa4Xw1n%2FzaAFfl6wPQ9zt7vW%2BAEEhe61fA2vnUWwnbwqGdt7bbL5M5qbPob33%2B%2FcQ8Bt9VWyuHaQ7sXzgyNhN2PySgZ2g3K%2BuS7SgCvTjgVPCGMHr6Hqcr8wWvxn1HyV88aqjCNUoff6maQ%2B9GgGX5nO%2Fz%2F%2BoMoz9qKr%2F431N73lvToSl&X-Amz-Signature=6e5f5a037432f19074e93095000997d5b70eaf52d64915b92799b2edab1744ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAK7RGJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCYqTs9%2BVaW6EGRVIWa90fXI4u%2FlOnmUGVGguF6le8gMgIhANi2b4GjIBiXFtzizJtgi8ORq%2BXiXZnwPLF3RM%2F2IcOjKv8DCB0QABoMNjM3NDIzMTgzODA1IgzskivahDKE8MFN3BUq3ANkGHMC7qPYrY%2FI6mRX9GERT2ltyE1TXBPsRB0URcxwgwVb3goWqcfW8JcHSNJckwBWOArVbbHj6%2FciXj37J2GWZNo43Mysz8lR34jU2jyxB9GM9b%2Fn4fuPa%2FlOOvYE1%2B29bekb4A%2Bcx5LXhY0cCbi97RXp0NNljugG44UWH8w%2BD%2BXopwB6YXI5EynxAm9cPaMMiDhaBr6Q5thhUFwfwL6a8c7pGF9yN72U4To48jEUdbMWz1LLKcLXRT%2FH7PO9cDhgN8eZnXCWvLdMGRStSwPn%2FYheJSfBnFDoYQ9utxGo%2B8f5C5BK7WnaxVyVfOUpZ9PxKFrJ29MIZGF%2FBCogmYqZk87ti%2B08yjAhOYW6XyNUgKjEctcfVXJ2Qu6deI8unG8PBFMSgDj3qyAZRRvjLy8oYJMIHFpTU%2FJRUSBI8qvrymxW2VTnUY7j4lkjEfltYhidh8QrZKoR3XGtAu9az04zlCXZ9dUlKJ5vv4v%2FJfUZIVyVEmmTJ%2FFEF8fGxJoVuZ4DqKfTVGKPtRs2MgF6XH5zxubE7vX%2FLeQGZsbLz4f%2BjYW%2FUKsGGgaa92Ms%2Fy6eI637Mk6XI%2Be18iRDs3Db5RSMDm4VOsf87dYgHlzZELUHDDVCpDql5aSTxwDa0jD8j9DDBjqkARckcM2eEKXrYPvb0GzbJa4pW4YvVFQKGnT%2BdurZkCVmIo%2B2U8m5xBPCl7UTOGeuwjga1ov11dbfQsNivUUlXm7jYcSZEEvfOrEqiHGkXI4oY%2Bdl%2B%2Bwd%2F6jSm4fIjILlVEjmOrI5JucP3wD%2Fz%2FSh4waQIkL%2F2pM8%2Fwff4Lq%2Feln3uP1QxLe2sCtPqFdqjK8Q9uoXcIdPQWJ3raBBcromgN4xhLJg&X-Amz-Signature=640e0771607faad83ccb77cedb6e18c2000b2e72d64012e882409a918e15050d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XKA4Z2Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6I96%2FUhpoHo%2FmYDbOiJqM9x4GAoSiqXZLT1WiEKQtfQIhAIESyIMsEm3Ik%2FJVZSaHWMvm%2BnW5vKPQEMDlZ5LcMVA%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igy68gcmIR%2BKvD27C10q3AOdZVP8KUIee%2FznVWXx9TIbD5DsQdWxdmPypSD2boPUMiB1lVMi3myuuIW3DfADXODunxEN2ISpsz%2BRJimAa3vGOMLhAvTzpSHzMnB8jqNaa7are11zgRUM7Z7aU0YieG%2BYqq99GS04fLKE2re02lsvu%2BUvrLft8QSD5BXFUohBWV3k7Vt3NtRobAhsFWknZa1BDqCZe94o3eY%2BGST7xQ3uzXKeWpRo1z39CxDpkXi20pjJ8fvCp%2BMRt%2F%2FvbhoqXDN947gfq9XdmDVrSQtFf34IZWmwMxO2R%2Br3sYu80xaY%2BxMSj1cjuWmmfvQMRoBNtxXlHPOS%2FSDq5Z1AL1uDIGSaaAyKinWnxU%2B4pBjVbHBAW86Jqy7pFhB%2Bczt0Pitefp8xrcLx3l2MTLmyQ52uThRokgb3dhhygDNl3Mx4RTv%2BXLbZlaaONQ27KSLubpnC%2Bnw49MQ8UKsT9Bp9fb39qy%2BbZWOf76S5Hl%2FuYXJuVV6poBGroDYI9vc4oRD2%2FvZZxkWCbSXHTCAtkRrUPlxF6BC3r5Kg0h4dJupEz%2FUQCkT714hHTdbXeOFiLcLJglRgYSALBqzGVB7byxtjUmEjGmWnLceFM99wB7lkb%2BFLxOfkhPkB7bwBQWMfWXx1UDDmj9DDBjqkAS9VobOMScCnGt8pXYZcq5YBMP2%2BOhwa0gaV4%2F3cFt7h8xgDDtHXJn19JgdU5ul%2FdF7wf6dOm%2FyWGefLH0NjLsgZFjrDcBzhZaT75wNYHhK6ETevYdqfb20m8ExBuI9mqbPaYC0IXmP%2BL6g5rw%2BAXPtVXY9NbllJpcN60khPtOMQ0LktFwnvUVVtd5SjwlGcgJyVBcNLHac51apIaWY%2F5rx8bQEE&X-Amz-Signature=239603a5ab0e22041429a40813b9ab10370abda5e853eef465f0ff3a47b48da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEWLRMH3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCVqQhHPQ6uB8bpIIxsbGFfwnBIKLQd0NtFpE0lk1vR8gIhANydPHrxCxEG3U%2FeVUOT5UyWROHpmBSTcOpL2xk4ITfmKv8DCB0QABoMNjM3NDIzMTgzODA1IgxmZXAi98HmOpgzTm0q3AOZ5JOWmm%2FXz%2BHWoeGyykSUT0ARdfHlMOg9PdofI1MyaShbq%2FqK56RZUx0luuERwu23xo2MkK8OAhfwrxjRgrd4qUfCWYvl5l39Ifubnv%2FOaYuRHRtsvlB5b7Blm1j5qjO8J6hxKfcyIkwKPaly6wREnOtk%2F15gJY0Fe3zRN2xutCvM%2FcgyRd9%2B4wgzDoErjICkd%2FFPniKx2RvNIuh9mgz05Nb3kADRX1GaqXWYZk6sArMkf39ZJgcpAW1Im1Ol35OoD7x4rC0BjE6tz4he6ECjOjXz0%2BmZrIDH66rVusCctf12CqLlSBQahk1Sifb8thDsEg4T7Wnk56XvBHj%2FORIBnIEkfuTPSQRq2VDVXlaEqgffXM0QPlcamnPbfwG2rnf3dLIEmW82o96DMwJZlQ%2BvzKiT9PD1CLcu5IvKsBm%2FhHZUPUwusFMj3N9zLXCngadHiymUrClMlYjrhLTayZSTGlXBKgtyXDdXVjZ%2FP6K9WyrQDifwVcERyNX1e2gBkG8Mur5XwsJiXgibjxBJuTIllBEVaustNKAt9vzvyMK1Kz4V%2FSGbcLsrujxQYQ0DwPIrhwA3rjLsheFmX4XNtLucNTr18BvzyCqU3nqJ89aFEaFTu7eLB5vORT2oUzD1j9DDBjqkAUFWrCZTVsgMtDAbfuNtzXHHf%2F%2F2nXuhlFG6HaJXgcNqa4Xw1n%2FzaAFfl6wPQ9zt7vW%2BAEEhe61fA2vnUWwnbwqGdt7bbL5M5qbPob33%2B%2FcQ8Bt9VWyuHaQ7sXzgyNhN2PySgZ2g3K%2BuS7SgCvTjgVPCGMHr6Hqcr8wWvxn1HyV88aqjCNUoff6maQ%2B9GgGX5nO%2Fz%2F%2BoMoz9qKr%2F431N73lvToSl&X-Amz-Signature=c5d2e3c8879d7b9d9312e5ad8cea61f5b995d4df34be2325074ee3b81fdf8361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
