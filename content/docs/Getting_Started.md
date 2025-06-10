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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YNU5T7A%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHc3uSagEiV%2FSm5Meu3GXkEgnyZbFISDb2xyeLkwoXACAiAlohAmHduqCIJyTvQthkvQy%2BmQr%2F86EmFPZEprTllZZSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXYkb9qdKhyUVRY1KtwDIqn32I7I63yNdelEoC4UqXB%2B6NUsDVBBkhfxza%2BXgQ7bHDRhrtoK5kOFom%2F8mIyTxH6P8JWDskXInKSLNT5BmwKbTx6l%2B2PERoLjanU9UwDkzQO4XIDLdcKb6%2BP%2B3R%2BiZYVO%2B1YumKMyUYYGFN%2BgwmOZdkoN2s%2F0CTeUlMPAIpAYIQbJ%2BSCiEqZTP4YrY%2Fsi2g4r5HPIHUj%2FIlMWdxB%2BZvt4MGr3lpKBFdfdJrcOXlAFbGDAmopN7TYKr%2FclwQP7%2B1vFCs83%2FsQIrT5bo4HgzGeupfcwgkJy8Ode3MgPnwYb6uGKxTD6IE6ndWgBOJq1PtS9bkYICqAYzmMv3sfZIwEJdMCRR5CzLTUO6DfYIgbweho7kunGaENF7fegW0CrUjpy4Nr6BoRTIYiI9Ha2MqC%2FRpojgS7GCGT%2F22QY7RRUOCfqnkZuQ7SxkAEkjEYLOg7v8Jc4ppxfZUC5zJeHeqAF1fBoB5vpAxA0mN2r9L4VJm%2BWmUHQLEfBkrdfzqFm4kpN%2BL7YXySh3VrXXe332VP3XwD8gvXzt8bPXR%2B4Rq2IVTvY3UWLtodH6%2BmVFrUqU2vVsUqvx4nC7EoDBAVzwZuijwbnCgfM3zhowg%2B5yvexebALeVHB1HWynWUw0b6gwgY6pgHe3NlpFE7DB7iPQ6Jge%2BtXEpRA8bLh5T%2FUpYz61BWfIqxNLlcylTajCssanuX%2FvsLJrpeGuOoj5CXmCzN2BZP7yRDyUFtDt55kKx62yB6GYXp6OAaD7lhhPIaQsMFAGLEM3hIzpzji3M3UfNEPHA3Dfkolh%2B7b7JIY%2FlAoF4LzJC7tqN%2Bgpz5f6GvDRigPPZFQIc4ggOn5qQqePUJmviy30tVnwjvB&X-Amz-Signature=6095a09ec066d9cca4e20e61152390d613edcd4967d9f9044846300ae6b34585&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YNU5T7A%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHc3uSagEiV%2FSm5Meu3GXkEgnyZbFISDb2xyeLkwoXACAiAlohAmHduqCIJyTvQthkvQy%2BmQr%2F86EmFPZEprTllZZSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXYkb9qdKhyUVRY1KtwDIqn32I7I63yNdelEoC4UqXB%2B6NUsDVBBkhfxza%2BXgQ7bHDRhrtoK5kOFom%2F8mIyTxH6P8JWDskXInKSLNT5BmwKbTx6l%2B2PERoLjanU9UwDkzQO4XIDLdcKb6%2BP%2B3R%2BiZYVO%2B1YumKMyUYYGFN%2BgwmOZdkoN2s%2F0CTeUlMPAIpAYIQbJ%2BSCiEqZTP4YrY%2Fsi2g4r5HPIHUj%2FIlMWdxB%2BZvt4MGr3lpKBFdfdJrcOXlAFbGDAmopN7TYKr%2FclwQP7%2B1vFCs83%2FsQIrT5bo4HgzGeupfcwgkJy8Ode3MgPnwYb6uGKxTD6IE6ndWgBOJq1PtS9bkYICqAYzmMv3sfZIwEJdMCRR5CzLTUO6DfYIgbweho7kunGaENF7fegW0CrUjpy4Nr6BoRTIYiI9Ha2MqC%2FRpojgS7GCGT%2F22QY7RRUOCfqnkZuQ7SxkAEkjEYLOg7v8Jc4ppxfZUC5zJeHeqAF1fBoB5vpAxA0mN2r9L4VJm%2BWmUHQLEfBkrdfzqFm4kpN%2BL7YXySh3VrXXe332VP3XwD8gvXzt8bPXR%2B4Rq2IVTvY3UWLtodH6%2BmVFrUqU2vVsUqvx4nC7EoDBAVzwZuijwbnCgfM3zhowg%2B5yvexebALeVHB1HWynWUw0b6gwgY6pgHe3NlpFE7DB7iPQ6Jge%2BtXEpRA8bLh5T%2FUpYz61BWfIqxNLlcylTajCssanuX%2FvsLJrpeGuOoj5CXmCzN2BZP7yRDyUFtDt55kKx62yB6GYXp6OAaD7lhhPIaQsMFAGLEM3hIzpzji3M3UfNEPHA3Dfkolh%2B7b7JIY%2FlAoF4LzJC7tqN%2Bgpz5f6GvDRigPPZFQIc4ggOn5qQqePUJmviy30tVnwjvB&X-Amz-Signature=d755c8fe9b86da19226534022289c5861b0146cad587258a7b3bf7a7985b9b54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YNU5T7A%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHc3uSagEiV%2FSm5Meu3GXkEgnyZbFISDb2xyeLkwoXACAiAlohAmHduqCIJyTvQthkvQy%2BmQr%2F86EmFPZEprTllZZSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXYkb9qdKhyUVRY1KtwDIqn32I7I63yNdelEoC4UqXB%2B6NUsDVBBkhfxza%2BXgQ7bHDRhrtoK5kOFom%2F8mIyTxH6P8JWDskXInKSLNT5BmwKbTx6l%2B2PERoLjanU9UwDkzQO4XIDLdcKb6%2BP%2B3R%2BiZYVO%2B1YumKMyUYYGFN%2BgwmOZdkoN2s%2F0CTeUlMPAIpAYIQbJ%2BSCiEqZTP4YrY%2Fsi2g4r5HPIHUj%2FIlMWdxB%2BZvt4MGr3lpKBFdfdJrcOXlAFbGDAmopN7TYKr%2FclwQP7%2B1vFCs83%2FsQIrT5bo4HgzGeupfcwgkJy8Ode3MgPnwYb6uGKxTD6IE6ndWgBOJq1PtS9bkYICqAYzmMv3sfZIwEJdMCRR5CzLTUO6DfYIgbweho7kunGaENF7fegW0CrUjpy4Nr6BoRTIYiI9Ha2MqC%2FRpojgS7GCGT%2F22QY7RRUOCfqnkZuQ7SxkAEkjEYLOg7v8Jc4ppxfZUC5zJeHeqAF1fBoB5vpAxA0mN2r9L4VJm%2BWmUHQLEfBkrdfzqFm4kpN%2BL7YXySh3VrXXe332VP3XwD8gvXzt8bPXR%2B4Rq2IVTvY3UWLtodH6%2BmVFrUqU2vVsUqvx4nC7EoDBAVzwZuijwbnCgfM3zhowg%2B5yvexebALeVHB1HWynWUw0b6gwgY6pgHe3NlpFE7DB7iPQ6Jge%2BtXEpRA8bLh5T%2FUpYz61BWfIqxNLlcylTajCssanuX%2FvsLJrpeGuOoj5CXmCzN2BZP7yRDyUFtDt55kKx62yB6GYXp6OAaD7lhhPIaQsMFAGLEM3hIzpzji3M3UfNEPHA3Dfkolh%2B7b7JIY%2FlAoF4LzJC7tqN%2Bgpz5f6GvDRigPPZFQIc4ggOn5qQqePUJmviy30tVnwjvB&X-Amz-Signature=91372d51c2f28d3ac8ba11ff2d687abf6f9cdc0b93c296fc4bb6d410c8ba3473&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZGX3JHF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhWrllWvHrGka1VKlIclQnFJKrRS83NbOCtX1wawsOTAiBpfkhlOlgspuPYUQ%2FBpdzsDJy83Rb8UoR%2FMOhxuKW%2BQCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNy1VqTw1iJu8jAmOKtwDCY67cncrVhGHfyfV%2BQKpQHwUrd%2BR8rVcC2qyQduPxu%2Fs3XxBpvi76q%2BaR16MUWMJsLRYA0wdyoH3yHEW1pUsKsdm7OvVuzTIR8D4rSpyXfrtNsoCzAjpLhxX3PHbsH5cAsK08AlYs%2BTfHLCn4avnQmIkTVdAYJJhsrYhUko%2F1%2BCvLj9hSOlDpJLsphKTR%2BQw3WpPBXSNSnU8mZHjPI4IaLy0YrxTlP9g0SIsF6GxKwuT2yWPX5uMDWPjSLN9eGq4xKV2toeqn6o%2BOKvuLULMnykTc15BUqfNbHqQGOBA7DIQmpWLipsXb291%2FuWtalLfDJLlw5YDwsVXq4kkglu7NC25kMymIgPBYKV1HbwtI%2BnIbbC2UlBcovVuTVnXcvTniX%2FtuyJiIBLnKcc8PY51Pd2Q%2FzLVeOMjYIuZyzrom01sGBMkt7igdo9Qi4GUcxkPRmqEghwoOY920Yao11gIxXQKMRXUOY444mbe7onzh8wZ7yQFsaGUyTaYmo12mZYAqtz%2FREMNrFqIqCI838%2BU4cqjg8RJgKYpbhTlTV4JyptSI2x%2BsCJmItTpimSNh7ZF8rKEdLOD%2FzIcCmlkD%2Fl6gD8q%2BzDpg25pOf6nQLwhd8PA47CwzHBbwuSq1Y0wrL%2BgwgY6pgFSTgwCHUrDKjxmJE0X1dO0bikbNp6msYPDxf4kN5oGc5DzxQEXynMek1iP2AjOEY%2Baq6XvXsQqqdcXXbWyAcaXSEzvT2Rckoj4yhwyRPJmLKoTB5Yex8gfioCAdns0oZrOlFjlwmnkn3hEwKWh9I9Wi3Lto38z9%2FujC5C%2BUPIj%2F%2BFVkQcNjXCtIyDyGsof9%2FWeUf8MMgJB%2FWgPC8dB%2BACEzxCFxCN%2F&X-Amz-Signature=8a1df6636ac3a190f2dabd9c10677f398476aade247c90a36ff1b3898325c4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSHL4BJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGli6JfaLCwOFyf%2BDbxSnjO3DbbF9C3hz4Zhir%2F3QaMOAiB2VEMO07PEWmGueQ2SlcoxrL%2BqhQgK0hYw%2B0f2G8tjZCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLn0FBKn0i%2BfO5XCbKtwDXEq6uq%2Bzrewsj0XL6buZTUreino8oCRGhnQmyfRV%2BW5EB5Ro70I00BYM0dPNIzkCZoHxqJ8Zzuie1F1zIwIbOE3cvI4WlsincFOpy7%2B4jNaj9CLM3EHxtJ27NKZv6AY1Kx9TUX8iFhJBHSri9Vv3NpdXSXCFUnmPLGUJvTfPWrTsmMi4iKj4a95uXZMyZ09G4ndgyxKS%2FeTajSBnr0%2BIj%2BVDhqAhjqbMZCmJek6i3z3VoR3p8eMbOceg0Inu1TleYl2%2F0dgzHJuf5qN94m1Wp%2BDN79UkRnTJAQhTrKfqHF6X1tZY%2BueNkwUdAPhMiN%2FatnxKkSY5GlcDLh2mJo3xSw0OrppXgFLyRA1uhSgTI4EUnHS%2BUmmPQpwLqXwkV1YRVfPTMJrpv%2BT%2Fa8%2BF%2BSaOqJ2rn2K7s0uenjY5%2BLdPgcflpVglOKCqkIiJ6YsiZ0fSQTKTlPEiBWxjAvmMMH%2FpLJKmJ3f8AKImjTWcTCu%2BqM%2FWiM1gOW0CL7dfwjdERF%2B85a93B0pm7WVO%2Bku%2FGtO30WHImTWA1siLFi%2B9VfOAbHpp9iDDLnyoN3JGfeJNXCvNdJV%2BynURmW6HNpLefNM6k8ILTLaAYifq5c%2FjZkuBH%2FN4JVm%2FV046C4VCWZkws7%2BgwgY6pgGJejhfWCU%2BXi6moILAoT4oRSrjLYenrwZ4%2BKbkNVgPTcr%2Bd4F9%2BRZ%2FrX9UORWZaoTPbS%2BTd44sMzoQtN8Jdg3Prlv7YSxjBmbyB%2BXC%2B9eC9%2B9XAgkXTX2C5HMn0ygIkK7auBewhqPdAkVEQW2zNiMHgj7aKNzJZmuWDFIOU95ylfKPOeaN2kgiE38tDSK7nP1tE2TSUUuloeHuj07VKwmYIGD4WId0&X-Amz-Signature=4c79f313dc1ff8ca43439bcc347d49038df179aa8455e1aa3fb1b9046ae5659b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YNU5T7A%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHc3uSagEiV%2FSm5Meu3GXkEgnyZbFISDb2xyeLkwoXACAiAlohAmHduqCIJyTvQthkvQy%2BmQr%2F86EmFPZEprTllZZSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKXYkb9qdKhyUVRY1KtwDIqn32I7I63yNdelEoC4UqXB%2B6NUsDVBBkhfxza%2BXgQ7bHDRhrtoK5kOFom%2F8mIyTxH6P8JWDskXInKSLNT5BmwKbTx6l%2B2PERoLjanU9UwDkzQO4XIDLdcKb6%2BP%2B3R%2BiZYVO%2B1YumKMyUYYGFN%2BgwmOZdkoN2s%2F0CTeUlMPAIpAYIQbJ%2BSCiEqZTP4YrY%2Fsi2g4r5HPIHUj%2FIlMWdxB%2BZvt4MGr3lpKBFdfdJrcOXlAFbGDAmopN7TYKr%2FclwQP7%2B1vFCs83%2FsQIrT5bo4HgzGeupfcwgkJy8Ode3MgPnwYb6uGKxTD6IE6ndWgBOJq1PtS9bkYICqAYzmMv3sfZIwEJdMCRR5CzLTUO6DfYIgbweho7kunGaENF7fegW0CrUjpy4Nr6BoRTIYiI9Ha2MqC%2FRpojgS7GCGT%2F22QY7RRUOCfqnkZuQ7SxkAEkjEYLOg7v8Jc4ppxfZUC5zJeHeqAF1fBoB5vpAxA0mN2r9L4VJm%2BWmUHQLEfBkrdfzqFm4kpN%2BL7YXySh3VrXXe332VP3XwD8gvXzt8bPXR%2B4Rq2IVTvY3UWLtodH6%2BmVFrUqU2vVsUqvx4nC7EoDBAVzwZuijwbnCgfM3zhowg%2B5yvexebALeVHB1HWynWUw0b6gwgY6pgHe3NlpFE7DB7iPQ6Jge%2BtXEpRA8bLh5T%2FUpYz61BWfIqxNLlcylTajCssanuX%2FvsLJrpeGuOoj5CXmCzN2BZP7yRDyUFtDt55kKx62yB6GYXp6OAaD7lhhPIaQsMFAGLEM3hIzpzji3M3UfNEPHA3Dfkolh%2B7b7JIY%2FlAoF4LzJC7tqN%2Bgpz5f6GvDRigPPZFQIc4ggOn5qQqePUJmviy30tVnwjvB&X-Amz-Signature=8c9e67d87520e741c764878cd38780529cc0cd934dc602b08b315e5199da186f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
