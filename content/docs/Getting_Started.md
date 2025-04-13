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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Y5LB37%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAaMP0%2Fd0IEfO4nFeAbFQ96t4kY3ZxQ5LMNvufOUin4xAiAiBJUmY5fhEA4gbkvuCYWhn%2Biw%2BOkXmt%2BwVE%2FS4b96JCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKs0LDuqfNXmyxkXXKtwDthIZWKBHp484MftN2Mct3XfppTzwtN%2FELYPZXvbrJPtaP282sC2VYyvn8%2BJdxtKe0TFkpqZB2KWahiwdvuh5jKf9pLJSoZf0a0KvhaRP1n8WghXhagUtOja8JQidFsU3IrGrByGgF4KVPWDu557kbca0QagPNr1lnC011bsa%2B%2Ff3rztwvRoFRV%2BW6LivkEbdrpak7euLxDRE1568kbWVwqiBhqciqzIvb3giAqPgBj3UYxjSWnx2jFWvEFkd6hyCNnEgBmLMODN%2FgmUFtHSmvPJWcMiseYRXYBnqiWAIfFMMEuuwso%2FF%2FXXOAol%2Boz1pFA3%2Bp9dQ6vBUZsN6FsFbZvbyLfA3gixNHTvgauM0UJM%2FqXbW64OQy33bqZnsxmSzK%2FJGDsCe7OS3XalvSQEkHlrHrxeJpj3fR1%2Fb%2BXFYdwNA%2FB7Vb2MGgtOa0x4ghZZigBe9p%2BmssTa18LZ9Fvhs%2Bt%2FUWxV50XbzcKdtQ2ag6k4Wenqhte3Bg%2FmgeBy9ERW3D%2B62KyeFmdDEHrMgPs%2FO7JEXIBcRUuMfFM6wlzmCyxwRjTb%2BEjRN4SUF4vrCj9Syob04rgJxKeinqHhCjnm5ysQq%2BMRXux34LabFRnWPsdKyXDtuawAg70Ep7%2B0w96%2FwvwY6pgH1TxOsO%2BbK%2BzbQk3kbUqs7P08mc3ZT8zLOHwAmHjHGk%2FUNdPJYQA%2BS%2FRXldZqzPvVMXUwwFKkTCsNVD2io4iVgwYIcUt9kdzPA7yTWrWpIUDS2tPzMZ5PH6KL%2BwgZV03fEOjxQoyJUWrTnw9QkQVkwxurYzn1ddVXZn1Z8aWoDdiJIKxXCcGo1nki6nUwYoh%2FL6GvBYQimkXqzT0rnHSQZXrB28r%2FP&X-Amz-Signature=890d7615d50eba9ccd4b69dfcad8e9f46acb8cd0bead0ba3ad5ec5c5e2a17924&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Y5LB37%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAaMP0%2Fd0IEfO4nFeAbFQ96t4kY3ZxQ5LMNvufOUin4xAiAiBJUmY5fhEA4gbkvuCYWhn%2Biw%2BOkXmt%2BwVE%2FS4b96JCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKs0LDuqfNXmyxkXXKtwDthIZWKBHp484MftN2Mct3XfppTzwtN%2FELYPZXvbrJPtaP282sC2VYyvn8%2BJdxtKe0TFkpqZB2KWahiwdvuh5jKf9pLJSoZf0a0KvhaRP1n8WghXhagUtOja8JQidFsU3IrGrByGgF4KVPWDu557kbca0QagPNr1lnC011bsa%2B%2Ff3rztwvRoFRV%2BW6LivkEbdrpak7euLxDRE1568kbWVwqiBhqciqzIvb3giAqPgBj3UYxjSWnx2jFWvEFkd6hyCNnEgBmLMODN%2FgmUFtHSmvPJWcMiseYRXYBnqiWAIfFMMEuuwso%2FF%2FXXOAol%2Boz1pFA3%2Bp9dQ6vBUZsN6FsFbZvbyLfA3gixNHTvgauM0UJM%2FqXbW64OQy33bqZnsxmSzK%2FJGDsCe7OS3XalvSQEkHlrHrxeJpj3fR1%2Fb%2BXFYdwNA%2FB7Vb2MGgtOa0x4ghZZigBe9p%2BmssTa18LZ9Fvhs%2Bt%2FUWxV50XbzcKdtQ2ag6k4Wenqhte3Bg%2FmgeBy9ERW3D%2B62KyeFmdDEHrMgPs%2FO7JEXIBcRUuMfFM6wlzmCyxwRjTb%2BEjRN4SUF4vrCj9Syob04rgJxKeinqHhCjnm5ysQq%2BMRXux34LabFRnWPsdKyXDtuawAg70Ep7%2B0w96%2FwvwY6pgH1TxOsO%2BbK%2BzbQk3kbUqs7P08mc3ZT8zLOHwAmHjHGk%2FUNdPJYQA%2BS%2FRXldZqzPvVMXUwwFKkTCsNVD2io4iVgwYIcUt9kdzPA7yTWrWpIUDS2tPzMZ5PH6KL%2BwgZV03fEOjxQoyJUWrTnw9QkQVkwxurYzn1ddVXZn1Z8aWoDdiJIKxXCcGo1nki6nUwYoh%2FL6GvBYQimkXqzT0rnHSQZXrB28r%2FP&X-Amz-Signature=731aaf0032d1e5c4339831539d332c68036a723073a988b0cb8084327ea82ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6N4QP2Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDPHXXUwZ4wVtn8k0NBq9dqQSn%2Bk%2FTO9In7rQCHQGRBmwIgVw%2FH%2FpsELyFsJuikSdrCsiUIyPA8j5TyXR1%2FxXY%2ByZIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxg6%2FVjKb8NA9l8DyrcA6uaRiL2v3Gk4NAupEkOxuRl5vimK6P14g8qKwBy0sAMN02m6EjEQgcCgbUkO8yfpPQOa4S9weksJ1d7wZvXuQuQpMLd2GaCksX7WCc6vXgmxcoiu8hAGeZhieasBDl2aionCAj%2FMf6ieOUXMD7RORhc1eFPV4TBn29c0yMqLqhzYOI5p4YQzJ7EKh1hU92OZHIuHMud9SgWZUq1zny%2F%2F65OjQJCH4mqF076nYcUZ%2FRpk0uGiVD15QCIOBlfzmiERFTpMKV5dq9Ls%2BS8O6%2FACu%2F7%2F3UCLNMuV8gcZIqhsdWVXt%2BbVw%2Bxu5aXFg6vhHYugUMizFbSXStLQrYyqCG6J3DNN1p4RNmH0QZTzfi%2FS35mirtcwgaiAMlUfKuIDZrP%2BJ5SuPCdSdc7DLT8NDo2TjtfFSgnS1wWzw0AYzglWMRFA7NEMAVOqkZgK0UtfLyceBn0hynxeDImDOVq9udqxB5aory4dkRy0ppP8lezMYQI%2BoAeYuxpldFbv4u8Ny401aDabq0Y9WaRXK1rilghch1O4UyWTStnbhfwgcjlpUuVIoBgUt8DjmaLGtmIoj9HrCFg3wZ28Eu1zX%2FN2lAx6p4hZoSTCCN82kXdCPPkcsrkgAgpX1RcY4tubpqqMLuw8L8GOqUBBUFDIR%2BAr5ejnMDm8Wwai1cIcodeT6BUcXJHwj5CebHzl4Rt2deZZKUY98%2FFlpTKKrDgBv%2FNf5e5q5FjVweGbUzXsxTUPgrLWV0mVvQDEqRE9uBIbGhfvDFvldXjAbUE4mHNQlyBDyvfz8F3uMRMMUv7faMqpMU%2BPi9f782t16EEtjrvQG7CsEGJq36GgbXjQm3ySpIhpSPIMQFwSyJDGbNUsQjE&X-Amz-Signature=28527b7d543c84b57afcd45dbd4452b21580ca341ccae4d427de430cdb8826ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72J55O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDDIaoLM47LPsV2u0qPivyZrI3qW42Jk8TiJkFBC2xICwIhAOQ5OiEq0MMdqQfBMjdU0OOqfVUROcSru9bi5mw%2BvI0FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLrkBxIVevGzv2zYsq3AM0WwfgI%2FDBS7z4xVRMX0DpltMmjJiQof4wlGXh3zdscHPOF3LRayQteMSKBWahXIyuF0Gy5NCOrz6bI2mPVLleQex4sxG44GYTdIpOX9HN8frOZZbET0QIYvO5OIDf340L%2Ba9CpmjxvjnMJyk5klUp%2FHaJge04JGdz95%2BxG3gEtd6%2BpCd1xhzLWNqap9Ekd%2BZSOE8TgOg82zdlNSS%2BlBYUSOJXxaf2KD1ITD7NnhzGSUZ5ps1ua%2BroeqK4YwJxIxuidSYmZv3FdhEVvaFEIgTrjzltIy%2BiexXK3jZ0aiSMH5wIP3LymqOsWQM1pl4pfalzs84jW%2Bt%2BDlogVX%2FgTsOMBQABJbGhtBWPSfKWFVYVSexhzUX8j8Jf3Q95rHc5TKwVGKNI3Thj5EGciZBRkL7Fn23TdGBcjQGsDhaJaTvuH1UKm9ctfOXNISO0fdFbVxzGh%2FyYuVMtI15dgGb0QL%2BLtxGOk6h9%2BSl9%2BRDIZt%2BAvWaV7WIlQnvc9LcQdE3bFp0LL5WK1r6o1i4a7Hs8YbdXd31AZrBTUaSsXTCcj9nsRexeM11%2FrSLnckAqo%2BkP%2FD7p5AqB7WqbmOtLQaHn4Z4q%2FojZMfOGI%2BHuFky82xZBKyVCOkCXR03rqYSPmzC8sPC%2FBjqkAUxf3CyMNMozyvbOa8j0mh01CXfqcjAVXLKve38FxDusY4BKHZ9ukMR3G9XwL1jZs1dAUJ0bxb1vB3lmUH9WR5kVjXK0ttc5Tbf8KBpBzHOHIC%2FqWytzn2OWmxk1iJILATcgzlDXtA5gi6g5ea%2FqcgENd5okTyLB%2BguPyuaoCWQVZIcU7pYVnSeHz5Dp5LAz2CTHj%2B8j1WfCdMWF6t1cnpKbRkAW&X-Amz-Signature=c37a958aeb70198760ba4494ea986af809d773c9046746a804c96023c9e0feff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Y5LB37%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAaMP0%2Fd0IEfO4nFeAbFQ96t4kY3ZxQ5LMNvufOUin4xAiAiBJUmY5fhEA4gbkvuCYWhn%2Biw%2BOkXmt%2BwVE%2FS4b96JCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKs0LDuqfNXmyxkXXKtwDthIZWKBHp484MftN2Mct3XfppTzwtN%2FELYPZXvbrJPtaP282sC2VYyvn8%2BJdxtKe0TFkpqZB2KWahiwdvuh5jKf9pLJSoZf0a0KvhaRP1n8WghXhagUtOja8JQidFsU3IrGrByGgF4KVPWDu557kbca0QagPNr1lnC011bsa%2B%2Ff3rztwvRoFRV%2BW6LivkEbdrpak7euLxDRE1568kbWVwqiBhqciqzIvb3giAqPgBj3UYxjSWnx2jFWvEFkd6hyCNnEgBmLMODN%2FgmUFtHSmvPJWcMiseYRXYBnqiWAIfFMMEuuwso%2FF%2FXXOAol%2Boz1pFA3%2Bp9dQ6vBUZsN6FsFbZvbyLfA3gixNHTvgauM0UJM%2FqXbW64OQy33bqZnsxmSzK%2FJGDsCe7OS3XalvSQEkHlrHrxeJpj3fR1%2Fb%2BXFYdwNA%2FB7Vb2MGgtOa0x4ghZZigBe9p%2BmssTa18LZ9Fvhs%2Bt%2FUWxV50XbzcKdtQ2ag6k4Wenqhte3Bg%2FmgeBy9ERW3D%2B62KyeFmdDEHrMgPs%2FO7JEXIBcRUuMfFM6wlzmCyxwRjTb%2BEjRN4SUF4vrCj9Syob04rgJxKeinqHhCjnm5ysQq%2BMRXux34LabFRnWPsdKyXDtuawAg70Ep7%2B0w96%2FwvwY6pgH1TxOsO%2BbK%2BzbQk3kbUqs7P08mc3ZT8zLOHwAmHjHGk%2FUNdPJYQA%2BS%2FRXldZqzPvVMXUwwFKkTCsNVD2io4iVgwYIcUt9kdzPA7yTWrWpIUDS2tPzMZ5PH6KL%2BwgZV03fEOjxQoyJUWrTnw9QkQVkwxurYzn1ddVXZn1Z8aWoDdiJIKxXCcGo1nki6nUwYoh%2FL6GvBYQimkXqzT0rnHSQZXrB28r%2FP&X-Amz-Signature=81a123f5e02c2951bf522509202966a5d72124a4b3cfdc5c521b1fc7a047e8fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
