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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSNKXRM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg1ktXSuR8tfuaQOY6C2j9aiZl4Dk3nPcx8SJkPOtdAIgDfoSC7Ivb%2BkQe0XbouNOyyI6FfYcXuNLe2yhiqhT1jkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZeCWoj1%2F%2Buv9Z0WSrcA3dmS%2BRWsQuadYZRYPnKbRTEp9rBHidELHThkpasPF0cu%2BvLcRxp7NbTOb7mUM%2Bcfp8L71dD%2BMegWgFQ5jNycYjytzHw2vlGT5lb9o4W7psoXNbdyWS4sfM%2Fl04wFB8fvc6LwMxqrXKrfGSRh46oRFvw63aKjxNyM5IarPzNgAoGsYYYOtIIw1QNCifjZJNdkU%2FjF5idLzpAHEKMxnPU6tEeB52QHr5%2BjrX0sqFAIvIBux5g9b7zmGnFqqsVpHw37%2BpQ0es1hURPkA6%2Fsy8tDjwKHFscrX7bJZ1bDwA1kDBG%2BLE1xVJgBdbJ6ap7M8PekQb61lyZqwcA6972ejhR0qvHsxUZUD0%2FGmUEtYvS%2BAOYgZJqTRPONIRFXSlvCfRdWhAHscUMkir%2Fnfaub12uZZ4BQL8IbhXpOy7DlThubfdmxyom5HHj4coi0ZyYiKlX98DqKqTZ0smfFn0G6JMo%2BL1pXkkVvaKGA0I%2FjwKOubqy0b75YtJf9hOyApPumPKUj9lPdxzmshfYiadnupGL%2FwZdDedmzhXSkDxPuf8q1zkU1QXidNVtOOZ9iieILZL5n4T90PgYmzISMcfXMNYay78nbOSk9bKsxhvgIJP0TK6mqqYH2O4CFwurLtBVMK3p5r0GOqUBbfIg3c6XSzX33sQkleUMWevvbS5xL3Udg9oeWyTqm%2BhG50LEf5z2rp8q4h0mUDs10rGuN7yMXEqIw4HzUp0JVzJaa9XW7dRxYaYFYUxEXxoBiFyz2Uebks50MWQ3wN1qLnUBbxnGB1gA%2BkugLvLeuPEyUZZmuLZTvmAbkJYKxtG%2Btej0aKcGRZd9%2FWIEa2WH4Fin4jdAsG9anwmPgjJg51%2FP9FfC&X-Amz-Signature=fcafb13c3ec9a8804e9fa69e6887b15ad813f60804fe80efba68853ab28e3dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSNKXRM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg1ktXSuR8tfuaQOY6C2j9aiZl4Dk3nPcx8SJkPOtdAIgDfoSC7Ivb%2BkQe0XbouNOyyI6FfYcXuNLe2yhiqhT1jkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZeCWoj1%2F%2Buv9Z0WSrcA3dmS%2BRWsQuadYZRYPnKbRTEp9rBHidELHThkpasPF0cu%2BvLcRxp7NbTOb7mUM%2Bcfp8L71dD%2BMegWgFQ5jNycYjytzHw2vlGT5lb9o4W7psoXNbdyWS4sfM%2Fl04wFB8fvc6LwMxqrXKrfGSRh46oRFvw63aKjxNyM5IarPzNgAoGsYYYOtIIw1QNCifjZJNdkU%2FjF5idLzpAHEKMxnPU6tEeB52QHr5%2BjrX0sqFAIvIBux5g9b7zmGnFqqsVpHw37%2BpQ0es1hURPkA6%2Fsy8tDjwKHFscrX7bJZ1bDwA1kDBG%2BLE1xVJgBdbJ6ap7M8PekQb61lyZqwcA6972ejhR0qvHsxUZUD0%2FGmUEtYvS%2BAOYgZJqTRPONIRFXSlvCfRdWhAHscUMkir%2Fnfaub12uZZ4BQL8IbhXpOy7DlThubfdmxyom5HHj4coi0ZyYiKlX98DqKqTZ0smfFn0G6JMo%2BL1pXkkVvaKGA0I%2FjwKOubqy0b75YtJf9hOyApPumPKUj9lPdxzmshfYiadnupGL%2FwZdDedmzhXSkDxPuf8q1zkU1QXidNVtOOZ9iieILZL5n4T90PgYmzISMcfXMNYay78nbOSk9bKsxhvgIJP0TK6mqqYH2O4CFwurLtBVMK3p5r0GOqUBbfIg3c6XSzX33sQkleUMWevvbS5xL3Udg9oeWyTqm%2BhG50LEf5z2rp8q4h0mUDs10rGuN7yMXEqIw4HzUp0JVzJaa9XW7dRxYaYFYUxEXxoBiFyz2Uebks50MWQ3wN1qLnUBbxnGB1gA%2BkugLvLeuPEyUZZmuLZTvmAbkJYKxtG%2Btej0aKcGRZd9%2FWIEa2WH4Fin4jdAsG9anwmPgjJg51%2FP9FfC&X-Amz-Signature=25e816f4ab254a641710782d52aebac428338dac608f00f99d9d10e9c750f517&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTB4FEX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2FFJk5mSmjyuvcCaCT7QNB5glun0HaeGr2zd35AWsAAIgVw6GCKw8w0%2BBqZkQ0%2FxWGHMSnHeHiUUL7l6Gq%2F1MJPYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ7iNUpIokUZLi9hCrcA0H7wZ09rWQOOhtQHvWxjrqxfMj2m1ZhVWcuWhYpFWWBl4kKdbjlLT8bKHCWD2kx5cmMnN19bZ%2F7K8LwGakK%2BE164y2PzM0qhTpn%2BtNJsUxOAk3F5JMIiwbc%2Bu1%2Fz%2BRTu6gNf0nw6SP8qiLCjuSy70G8Falr5FqTAM6Mn5uvrUszmHXiQ77aimcVhzvHCb4HikKEpefviW%2B6VAIFQZr64IEZa2wuaE1lZq9NsoLS3Vb%2Fq3BNCQnKsnHl%2BhB%2FP7uMx6IoUR37%2FFb%2BgPtDYFvWsgNVjg3V1opIanXJ%2F5wKSh7wRiGbbEMCO2pKmBvtQA0Y6AiQhHE6Atnoy8%2F2JRH%2FYEC28LjLuS0ij7ydIMhn%2BdXCt%2BGP2s%2Bvvk%2Fp5kBsvtIlGt7TlgVrl26kyB6NgNwU4gX1kUw5i6TFCoZd%2BwqBrNJ68fuTRtEJzkk0z%2Bm639d%2B6YNQ3f86GG0J%2BWwfMxPsldcKMrrr1vCC6fD7tJgG8iuqblpfNtsgrKnvimrxVkG6jcnF2jrzJmBpND%2F7kVi4Hl1KrYYqO65MDfitYmHGzvastvgH5yUbbj6fiXtG89J1s%2B2J56ER1rf0mv0Rla0LwC9UqQ1gkvityVUfCBiOOrIV8ZVaJee0giLoQLYNMIfn5r0GOqUBJYWBx%2Bcz1%2BMnrKvEKanWP%2BYeQfF8du9oooFHnDDbbadH1J1ZJMDul3rOjiVXeLBRztS7vwhx5eUEnJhGKnacIyRTnc4n7hIFhaWUQY2%2F3s2QpTxycSTh8lVJBarogc6Zz4jMFssNA4x1upWEip2hwFM9wwHAv4AKHWqgU0ABLb7VHWeoudIO9LhCPmiW%2B4Qe5Y9laLeROcwljXC9jo8vAkiTZTSq&X-Amz-Signature=82acd0af810cdfb548cddccb95c83ed564d5add92f218d24a1b60acc72f850df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WBAAH3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvZ5eXUuA1uyXXMiO2%2BQ3VBzTqFGQdrvw50DqkcDABVAiEAtyipNODoAerc5lRcSyd4T3xr3I%2FaeXRNGE4d%2BFJ6el4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLsanhkRF57lJIrWCrcA4erdz5KRhUWJVbUP%2B7sNHO7%2FKKGgJ9BxnMRv2KIbTtwPQbnw7C8kPIAJEZLz6EXvTa5v%2BOBnKm6ZhJ3lmj9ORcYjbESn%2FW8aOZkk4C1zO6wET5aJkbisWEYTZ0SFWe6QfyC5kFMhERbejTap6XHeXUHOQ35isNuiYbG14YhaT19Jd19u0Tv9l%2Fa0y7YNeQsbNKLctv0OQC630XpXRSCSJCMFQ4yyHBXSYjNITzI8NK18AdWQzPBM5gVPt3MTKmQ5aPupV5S9gbLe%2FlDqt9g295QCkQikabA0zTDV3PjVPF%2F3%2F1tBkD%2BXC53x4HB7hR6H6d6BFwulTPIR3LEvVM%2FoTA1OgQcB8%2FzDBfpsYsuvdPY6MEOwvw537FeN144uBcWcnPAFUeWACOGlrd8O2fW8mZyI43hf%2B4B09K6Vxi1xTHKKfXbuEz%2FVj8b9BODgXxdQUMcqaLS6PFa4YSgBFmB%2Bu%2F2GEka03i6tMC0JVJFrL9U8Mia1C3ZzIoGr5xeYN%2FOmL%2B59X%2FSsBG3MzZMqgqdvTqKsWVU8K1k2k681cniQgeQPk%2FgvbedC8wALolmWJIVRiTlO23D69gQbHXfwb2rxHQW8CBXy%2FbCXEQ9DJnzYVTY73GBNT7PdfpZogiaMJLh5r0GOqUBnrWkUjlmvR0ZwHx3pp9nPwKZQJxLLjkK9Kk1kmGnNmX6H5xPuxvnM9KeMluMneARKj7yT6LLeMxNOWqHKxE7B1%2BDjPXdFnPAdCnEVpKxvAnJ%2BSF4CBnbl6XdBGxAewm1iBDDJxNWIoYp8cak6JUaNueHBYEmw%2BJ%2BTEkU3%2FNPtv3kCI6XzMbXYRgaTZHcm63UNqiY%2FDJ7K3k6RX2M0AImpZu5kTcW&X-Amz-Signature=e7235965e0c2f71bd2496d229e7af29a6f62b9854bfb943928d058093cfad309&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSNKXRM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqg1ktXSuR8tfuaQOY6C2j9aiZl4Dk3nPcx8SJkPOtdAIgDfoSC7Ivb%2BkQe0XbouNOyyI6FfYcXuNLe2yhiqhT1jkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZeCWoj1%2F%2Buv9Z0WSrcA3dmS%2BRWsQuadYZRYPnKbRTEp9rBHidELHThkpasPF0cu%2BvLcRxp7NbTOb7mUM%2Bcfp8L71dD%2BMegWgFQ5jNycYjytzHw2vlGT5lb9o4W7psoXNbdyWS4sfM%2Fl04wFB8fvc6LwMxqrXKrfGSRh46oRFvw63aKjxNyM5IarPzNgAoGsYYYOtIIw1QNCifjZJNdkU%2FjF5idLzpAHEKMxnPU6tEeB52QHr5%2BjrX0sqFAIvIBux5g9b7zmGnFqqsVpHw37%2BpQ0es1hURPkA6%2Fsy8tDjwKHFscrX7bJZ1bDwA1kDBG%2BLE1xVJgBdbJ6ap7M8PekQb61lyZqwcA6972ejhR0qvHsxUZUD0%2FGmUEtYvS%2BAOYgZJqTRPONIRFXSlvCfRdWhAHscUMkir%2Fnfaub12uZZ4BQL8IbhXpOy7DlThubfdmxyom5HHj4coi0ZyYiKlX98DqKqTZ0smfFn0G6JMo%2BL1pXkkVvaKGA0I%2FjwKOubqy0b75YtJf9hOyApPumPKUj9lPdxzmshfYiadnupGL%2FwZdDedmzhXSkDxPuf8q1zkU1QXidNVtOOZ9iieILZL5n4T90PgYmzISMcfXMNYay78nbOSk9bKsxhvgIJP0TK6mqqYH2O4CFwurLtBVMK3p5r0GOqUBbfIg3c6XSzX33sQkleUMWevvbS5xL3Udg9oeWyTqm%2BhG50LEf5z2rp8q4h0mUDs10rGuN7yMXEqIw4HzUp0JVzJaa9XW7dRxYaYFYUxEXxoBiFyz2Uebks50MWQ3wN1qLnUBbxnGB1gA%2BkugLvLeuPEyUZZmuLZTvmAbkJYKxtG%2Btej0aKcGRZd9%2FWIEa2WH4Fin4jdAsG9anwmPgjJg51%2FP9FfC&X-Amz-Signature=46c67c21341addf640adccab175ce833f08f8720dd892cc5d458b90657c8aded&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
