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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSCDZS2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FlCwqWbsb5S%2BZun8oj2NNI4y7EnvQYT4yNo5hcxhtWQIgDBydH6r4Z5xaEocwlbo1nNsH7%2F380CqB4V9nmUgqVz0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqALXds5GEyIDiU6CrcAzbSKcwZ16FjX2zgzyws6Z%2BFG%2B04RGhESvqg4jjQR6nii11HWUm%2BkwelRmYlI174igxAhrKA1Qxg%2FhtPQwDlYRCWHcUpVH2iDJBB%2FKZMmBzJSE36pI%2FUEzQFQqqIgH7eFGG6QVfWnrZgjwuerIPn2QzQxw%2BrCDBDWsK9OtNO0AT9QoiIDee1aWIXGagVWbyMO2qJxEoRy9qxVXBD437V6tInymFLkuPbEYhQEkRDWwv1usi76n%2FX6e8W1I%2FySzGxyBOfwcYtcAAn0qEUXVfpCJfihm9Am9nGPW7Sg8r4wI%2BX8TJO1%2Ffmft7xeEkNnv6L1hYnh33ur7q1QMf1yUiW4sVTin0W%2B0Krt1YrP4ncSGYbJlR2PprHbCBFbsTyKCVjb1GpI5EJ0cEWRK4goR8ILQl1sNC7QaCLpW72DNjHEI2%2FFRAfvlZ6GWUo75qIO31D0DTxk0hP%2BFeP0p%2FVwWarBk61YGr7oPn7HYHwYwRnqBtPnJlrBxEsl80XWsRSVxB4khsX7lv7Z3EAHj3IOVuAa6fK1Yv5rz8%2FgeL2xgsBX05ulHQ9febyfCe2T8QSUD4ih8FAlaoNcJEm%2F78Z0eR7j6vHKb0%2FeJ1eSurpQ8Fc014E0wAK1Fyw5NR%2FKRtuMPaLiL4GOqUBxNqncjM26E9v%2FOpAxGjZhQpLOcB8aitlI8%2Bprt1VNG33GwUQlMxGSTcZEtM3szD3dXu8vJ9I%2Bqe%2FgmhTUaiCMMQABwwRb8IKas4X3HUB5dkayDJcszPZ0rf4Qvj5TQZR8k7xRBKWpJWz4X3QcdKJ8o8T8LMhYFVHfWFbiytCPlgUnXEXUssREaZchxnAmLOypTEQzZwTjalwRye6AIbN%2FCRqcumn&X-Amz-Signature=1e4486d534de773a519c345fa95b10ec95d1f153bf786a2c1d42ed78049bf81d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSCDZS2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FlCwqWbsb5S%2BZun8oj2NNI4y7EnvQYT4yNo5hcxhtWQIgDBydH6r4Z5xaEocwlbo1nNsH7%2F380CqB4V9nmUgqVz0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqALXds5GEyIDiU6CrcAzbSKcwZ16FjX2zgzyws6Z%2BFG%2B04RGhESvqg4jjQR6nii11HWUm%2BkwelRmYlI174igxAhrKA1Qxg%2FhtPQwDlYRCWHcUpVH2iDJBB%2FKZMmBzJSE36pI%2FUEzQFQqqIgH7eFGG6QVfWnrZgjwuerIPn2QzQxw%2BrCDBDWsK9OtNO0AT9QoiIDee1aWIXGagVWbyMO2qJxEoRy9qxVXBD437V6tInymFLkuPbEYhQEkRDWwv1usi76n%2FX6e8W1I%2FySzGxyBOfwcYtcAAn0qEUXVfpCJfihm9Am9nGPW7Sg8r4wI%2BX8TJO1%2Ffmft7xeEkNnv6L1hYnh33ur7q1QMf1yUiW4sVTin0W%2B0Krt1YrP4ncSGYbJlR2PprHbCBFbsTyKCVjb1GpI5EJ0cEWRK4goR8ILQl1sNC7QaCLpW72DNjHEI2%2FFRAfvlZ6GWUo75qIO31D0DTxk0hP%2BFeP0p%2FVwWarBk61YGr7oPn7HYHwYwRnqBtPnJlrBxEsl80XWsRSVxB4khsX7lv7Z3EAHj3IOVuAa6fK1Yv5rz8%2FgeL2xgsBX05ulHQ9febyfCe2T8QSUD4ih8FAlaoNcJEm%2F78Z0eR7j6vHKb0%2FeJ1eSurpQ8Fc014E0wAK1Fyw5NR%2FKRtuMPaLiL4GOqUBxNqncjM26E9v%2FOpAxGjZhQpLOcB8aitlI8%2Bprt1VNG33GwUQlMxGSTcZEtM3szD3dXu8vJ9I%2Bqe%2FgmhTUaiCMMQABwwRb8IKas4X3HUB5dkayDJcszPZ0rf4Qvj5TQZR8k7xRBKWpJWz4X3QcdKJ8o8T8LMhYFVHfWFbiytCPlgUnXEXUssREaZchxnAmLOypTEQzZwTjalwRye6AIbN%2FCRqcumn&X-Amz-Signature=ccd8ffb20e9ed33411cb013403537419c551d445227e725d795fefe24aafc276&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFZ3JSG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD7RvbFEQI6Ml%2Fo2q7xyYKpK8ZyMAEMe%2BzSBlkKDL%2BxeAIhAK5OYv%2FCKsZCZpnfsKRZ2uxZw9IhmGTRVC5dPpsLGajnKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6GnqsKcWiepawtHAq3APXavKDdCxrzI22yc%2Fz962%2ByStMtmzJSEXkbpkZMqEEraOpvZr5ssIZMa7%2BwTgDzuLYXGA8%2Bhcn6dCaqQ6AJYl7yrNGdUZg3FPh5Wh%2BqHVu8Vs525G8tDCkD5CAbG2oIq%2FC7WVVoshx0WwnoG2bU1w0I0L94JkiikMut7%2BZCOeUxGwSwIbSyLulSpRq5j1pIrDfWsK3pi%2B9rbAgryGRtn2hU0MeczEdhJIIiNJTVb%2BqQAXwghYytIUEXktYgfXtP5lt1BweWxpetwF9WNqblos2tMC9zS0HhRTR6WfEGfTFRnIrCliSWnhtFwvz5i%2B5jcZIjPo7%2BxRyjsZA51PR%2Fa3h%2BJbExCO2s2mtKwqutfUAR0xUvZq9FIZbcfNfjVw751nraMlZ74rHVngjRvO0mmpKJPJ%2BeaISPF1sTupmsKdotDadRWFDr1omyOUSwzUrMWVTOT8yDmd6NYJIHbaNq6QZ8eO5lzbK5R7VdpIdyxOasgAev0VaSt94Gt4%2FMOR4DfmMG3MhcPBiTzB5YubpSjqir4XgHVj7NEH8Nr25JruYGPpnZg0af9GkW5VK7zTz3bs8NB%2BpIbsizcBnHt1kGAK2lEKvtetaeS8q85hQAPywgzKxFKmkjtxFWcn8SzDei4i%2BBjqkATJ%2F3Kggn22DKhpmdr8yN5%2F6fNAUOHKsGBcyNVYXnka5cmfA%2BzKlMmsI%2BKgOsvX3b%2Bely%2F3r9OOtRHYKUAc778VrlRrZVWwm79c00JOeFUpjrrjxkxjoxlLKqliYwmUb72m4Mqy%2B5oEP4S3Pn%2FllOPsQv0%2BfbEYGac%2FXXfvw2x%2Fnod%2Fbv5h0XpySiZLTAkGi97y7JL3F592EASiMmnTtzqlzZZZ6&X-Amz-Signature=b419e744d36b58c1eb75b810e4ff93e965d8b7168b2d3ab61a0c038084bb0cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBMNA3WI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDk7fRm03zpA3oZ8CriUCbxGVNbBfTeYCuDIMTsxLPxjwIgKylLr8vAvVVkBmtfJt7cDQxhszargcFE8Tcm6SGh734qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMdyOmXjUchMG44PSrcA%2BRLkkyQGg591O8xyJzSurtM8porCkqdMMQElxUPfznb97anQjggLzVFkmqnR6eswT1kJupmhGV%2B%2FXuOoo7zm%2FEU4B41%2B9iWzgpwwZB%2FL%2F1g38%2BVL%2BFhug5%2FJUjUpvrGAiEojS92XSDxMF4DH1p%2FgWkaPNb6iuqcKas0ZfsS99QubJMDLNUWFtJHW4McR6nK2ntvAqiSQ33JvsHUUmOsEwDnk1ETxT%2BhfLBGJPH6CkeeAwHc11OyMjEVN4Adwud%2BC6b6Y%2B%2FPkIEHvhZGkqjiLcLH%2Bo398H5ystOKrfeV%2BblzekIlijI561afoGbddrBOb%2F9OIRRF8tRUtLVi1H2D7NYcPJsq9R2ZseArnZqwRu2ZGPZ9OVY3Y527x6I8vO1bDbwngqn48Ch4gFzJNYVqliStMcMaXI3lN4xNlqBIzn%2BovC%2BhXglYDUM%2FF222fHXi%2FIkaSFQVV2kBzq%2BByHe7pEIeLbZ5vUlh7Wt6XzVNEldRxQvyD2LXNH%2FBP1HB3s7bUps1i4O%2BZL%2BB7bjmM%2BKLctLyTM4fhJnR0cH3x83LUtsqFE21LInU%2BHYYr%2FlvTqVLT4apZ7QhFrZB88R%2Bd25MhAXgwSAwdUiyRPNvg%2Ft3jkUEkh62jWXc1KP3tBA9MNSLiL4GOqUBKwQSgmAZaGVbHnSy%2FqvQwh1%2FuRZdSMU3AHoOTqe5CaeBjUZEVZ4oVs5Elwt16EkSD0LIF7GoY5TS2hIgYiiZBhz19n7%2FGh5py43pxP8dQcqdvboIzz2Niki0VsOCmw0vPOjEn9tT%2F%2BVtkvv9Cql73MsDHNwhbQmxBzq6FWwwYlBFt3i1TcOhxehAfR8pcZL1RfK2z5E5hgNfx2grFLFPa%2FAm1Q%2FG&X-Amz-Signature=8747cf0e30bd922df4787fb0ecfc6e617145df82f455b5c274886f760858d0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSCDZS2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC%2FlCwqWbsb5S%2BZun8oj2NNI4y7EnvQYT4yNo5hcxhtWQIgDBydH6r4Z5xaEocwlbo1nNsH7%2F380CqB4V9nmUgqVz0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqALXds5GEyIDiU6CrcAzbSKcwZ16FjX2zgzyws6Z%2BFG%2B04RGhESvqg4jjQR6nii11HWUm%2BkwelRmYlI174igxAhrKA1Qxg%2FhtPQwDlYRCWHcUpVH2iDJBB%2FKZMmBzJSE36pI%2FUEzQFQqqIgH7eFGG6QVfWnrZgjwuerIPn2QzQxw%2BrCDBDWsK9OtNO0AT9QoiIDee1aWIXGagVWbyMO2qJxEoRy9qxVXBD437V6tInymFLkuPbEYhQEkRDWwv1usi76n%2FX6e8W1I%2FySzGxyBOfwcYtcAAn0qEUXVfpCJfihm9Am9nGPW7Sg8r4wI%2BX8TJO1%2Ffmft7xeEkNnv6L1hYnh33ur7q1QMf1yUiW4sVTin0W%2B0Krt1YrP4ncSGYbJlR2PprHbCBFbsTyKCVjb1GpI5EJ0cEWRK4goR8ILQl1sNC7QaCLpW72DNjHEI2%2FFRAfvlZ6GWUo75qIO31D0DTxk0hP%2BFeP0p%2FVwWarBk61YGr7oPn7HYHwYwRnqBtPnJlrBxEsl80XWsRSVxB4khsX7lv7Z3EAHj3IOVuAa6fK1Yv5rz8%2FgeL2xgsBX05ulHQ9febyfCe2T8QSUD4ih8FAlaoNcJEm%2F78Z0eR7j6vHKb0%2FeJ1eSurpQ8Fc014E0wAK1Fyw5NR%2FKRtuMPaLiL4GOqUBxNqncjM26E9v%2FOpAxGjZhQpLOcB8aitlI8%2Bprt1VNG33GwUQlMxGSTcZEtM3szD3dXu8vJ9I%2Bqe%2FgmhTUaiCMMQABwwRb8IKas4X3HUB5dkayDJcszPZ0rf4Qvj5TQZR8k7xRBKWpJWz4X3QcdKJ8o8T8LMhYFVHfWFbiytCPlgUnXEXUssREaZchxnAmLOypTEQzZwTjalwRye6AIbN%2FCRqcumn&X-Amz-Signature=87342b78cf5ef8582601e31c1a5e3cc7aa0ed4ac9b8ba0f5fcb242634a0ffd29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
