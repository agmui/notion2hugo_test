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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWP52DO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCscL82pocgBQWVUgeKzRdpjGb5dpSl%2F%2Bb57jL%2FpP2QUQIgfMyzIqvCpQ34MCAnMmOW5a2GjMQ6wZzPXjdB%2BB5TuNkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDG65YcL8R4VlVJYriSrcA0xiFeBdbdMOBFYQd2l2hm6cEzWG2KT%2BxKBTv%2BexS4qfGqHd5fpWMUxcUxD8loXjqvruc3EK81cF8qDeqf7KZhOzmRKEaumM8cm%2Fm1RkQpZUref6WGoz6gm9alj1MkbOaDMVLLCzLh313ehzhlCmMRSDzlJmlgu6szIgqiCFoDWrtEGDGu7LWxjKnP%2FhItp9m3h33hMeCk%2FTuI1zPmgtq0rPbu%2FxFidRP7WbW4wPqYZmEZboTZq9vlHxfUg0u4HqGNHT4Cdu91EpDpgpPpDJnmNFaAyHENuJxljL1rfpPn4eda1dG88aU32411vgXBOid9DPHIE1jMuaSEVmQBnpYlIhu1MIemhYo32Bfz3aSa1QBxRj5DRtTJFnn0fuPW1OcfoNzjFdiPsNgr7478AUb4skQZqQSK77WqFBObWoddxAorLK7WwnRYcVgb0SJJAqHyBxvyKi9%2FvEtVJllqq2hcVHPS5PAuoRuyJMnirh%2F5P%2Fnysvrk5ubfQFS20OGZfK4tmsYJfaprPgHnCtClsLIVBPqlrz2En2a3sxFczJwBHA6QFbvoorr3jXWw6qQKbLfomfKh3r4xuMvt6nS55fGdiR4jdQbFmdy65snZyDBAAtPEj%2Bg2T%2B1lSfJzYWMMup%2Fb0GOqUBR8uGy8YHLh%2Fcar4pfs8vXzPeXFtQjoniF1XZRscTUwJu0%2FhqhLCFIjQeV7BSKrGB7BuR%2FoJI2EJVNS8arLaf6TjYxYkNckyn%2Be0m1he3OV%2Blcg4zUG7DIbs0iyMb6c8CgbN3m8o1e6qJLknAdk36%2FgNFCk7GoCLeq2xPUDUHlPbdTje38K6lgwraNBcOWkGTXDdN40P0v1qn1xTG0QYcC18sYurU&X-Amz-Signature=527b027183d64ab6eafd6c835dd71347ee56723104d641e73092f7ff34aba9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWP52DO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCscL82pocgBQWVUgeKzRdpjGb5dpSl%2F%2Bb57jL%2FpP2QUQIgfMyzIqvCpQ34MCAnMmOW5a2GjMQ6wZzPXjdB%2BB5TuNkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDG65YcL8R4VlVJYriSrcA0xiFeBdbdMOBFYQd2l2hm6cEzWG2KT%2BxKBTv%2BexS4qfGqHd5fpWMUxcUxD8loXjqvruc3EK81cF8qDeqf7KZhOzmRKEaumM8cm%2Fm1RkQpZUref6WGoz6gm9alj1MkbOaDMVLLCzLh313ehzhlCmMRSDzlJmlgu6szIgqiCFoDWrtEGDGu7LWxjKnP%2FhItp9m3h33hMeCk%2FTuI1zPmgtq0rPbu%2FxFidRP7WbW4wPqYZmEZboTZq9vlHxfUg0u4HqGNHT4Cdu91EpDpgpPpDJnmNFaAyHENuJxljL1rfpPn4eda1dG88aU32411vgXBOid9DPHIE1jMuaSEVmQBnpYlIhu1MIemhYo32Bfz3aSa1QBxRj5DRtTJFnn0fuPW1OcfoNzjFdiPsNgr7478AUb4skQZqQSK77WqFBObWoddxAorLK7WwnRYcVgb0SJJAqHyBxvyKi9%2FvEtVJllqq2hcVHPS5PAuoRuyJMnirh%2F5P%2Fnysvrk5ubfQFS20OGZfK4tmsYJfaprPgHnCtClsLIVBPqlrz2En2a3sxFczJwBHA6QFbvoorr3jXWw6qQKbLfomfKh3r4xuMvt6nS55fGdiR4jdQbFmdy65snZyDBAAtPEj%2Bg2T%2B1lSfJzYWMMup%2Fb0GOqUBR8uGy8YHLh%2Fcar4pfs8vXzPeXFtQjoniF1XZRscTUwJu0%2FhqhLCFIjQeV7BSKrGB7BuR%2FoJI2EJVNS8arLaf6TjYxYkNckyn%2Be0m1he3OV%2Blcg4zUG7DIbs0iyMb6c8CgbN3m8o1e6qJLknAdk36%2FgNFCk7GoCLeq2xPUDUHlPbdTje38K6lgwraNBcOWkGTXDdN40P0v1qn1xTG0QYcC18sYurU&X-Amz-Signature=5675da5f0670edd933e1e3b0e6c65bde1b58274bd8a95da87d7187951c0e0122&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBS5SHL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC%2BpohUSSy0%2BeIutMUgeScH3932k%2B%2Fm6ZzqXQtQ6MgorQIhANkMlmvH3nUo5J3JhukL99l4V4yE8sPsiMoKIZCpMJJVKv8DCGMQABoMNjM3NDIzMTgzODA1IgxAbHAVaXkpOnmXVs4q3APa7USBAjMJaFgb8HNOqDqV4fgHzQEhoy7QcG%2FSIOqCb6YAzu%2BnAsJzx7RJR7qRcwlA45JmndCbuxx1Jpyj%2F4uubp9QHACT3ZasIrHSwL2rodCltNH8v7nk4MrUAl1tGgJAMBc4ocfOACNNg0CX4Y%2BVR%2FHPpcno4rRA1tWy2Vop%2FHSmaK5urvrao88GwDLM3csTvBi8eVqI%2FmUgDVJ6MWJrinAjgqMR3pAxEnx9Ii9vlA70e7J6jjaa17bcBDJmhQKHptDAT1zYofgIJ4ZeH4rlpa6UwkA8ufAPFWlHYpfM3lP41zpBxmryf5oApRXzkzWjc9uXZ%2F7j0lzsWEd2SMWr%2Be2kO4Q279CkpQ5ZSHVvscx8SxX%2B0Aj6ES%2FE5%2BA3g46q4BHvshZwEHlJZdY3vXcxrZGD9kbA6AfKvLNtwXe9KgunNdW0e%2F%2FB7sBHvqwhuhQI1iENsDnRhh0Md60%2BUYACRJ6Xq%2FLX7wyZ34fVKXkXZ93a4I7Tbc91MXHGXAJbrlelMBBSooO%2Bxum0mKpCPuDRg%2BnzYx%2BeYJ2HmDDAvKtE7oCExeTiWGzXG0s0rrvCBm1hebFKHkXFZb5NaETsnt249eUxMnuXNmxRpk3q%2F1vupFxi5ZbAlyOebQaT%2BzD%2Fqf29BjqkARKTQ2AmZcf6nevJXnnOlV1BKBwEdTv55S2uV8vzsVudPehHHhw3xiOgoTzccbFTaXUdsElC2bqVNtuDMV9XeJ3iqS5dtpFAQ33tn3v41chw1LNvZ%2BvC9Qe1jmLppGti7MZ1%2BdQ%2B%2FAiT%2B7GJg9ihOnVr8VI762GJsb%2Ffe0MkxU3Vgm3wF0nYae%2FXnUIF5K7K2wCzy76qFLe%2Bn65O6%2F%2FsDTKgw4XN&X-Amz-Signature=ae3ad51faa4a593bcf5289d9891d7803bb52d4ec84f48aa2df439c68c9d14c79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QITXMUC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC9lChcmHsbHzeRterivyIi9U6TrNh42OlKKrC3KG9xmQIhAJY0X1M9O4gC0vhQfKsZQp72ycB5D62XfRqc%2BMehLxqOKv8DCGMQABoMNjM3NDIzMTgzODA1IgxTd5I4hYJP706A4Xkq3ANDkbWdYwr3CXyE95ko8cCa8QXkdbcw0FndEF4bz2ipWn5cDbSxMw1S3zi4GRlVsTK2gACLdtNLsHBXmAUg85hKJVeoEGt20Q9e%2FLVILcRxngZvaXxcSiiAOEe7%2FSYmritBikXcvFpgAt6cuyvfwZt3c%2FX9oq7ANxPN97BKU4%2F1RhOb0N6oRsBtkhp6BNGFWvXsjIvO92U82OsqpYWCNqDN1yhDL3hhTDacGtSVQiDxD%2BGwzaPhWmb9ly5l5QAm0ctD0yG90P07BbC%2Fws%2F1xz1hJDlUb2kAC8WD1%2BYalaTvqqP2nxRMmj8Gk1dx1BLFHuYlqwy9GtJalm73auzqJltUqlhzm8v9WOuPSM%2BolLTsBZDgZ5%2FMKv9g9uKyjv%2Fp0QyXMIJO4qNngGfhBt%2FHD68O9SeLY3yzcmeGBac9K027%2FSIgk%2FOQtiillr2eomDgVdgbMa%2FNOkt2wQfoNsE6LMxnT1ndtATCLKfMzGbxZnmsOwafRBRK9wpcjxj6%2B1Jm9yW6DDc8tFoiUVFfvSbwYlpZXdQG5hwb2Fstz6wEKEDGJ2G6ABIIYYWLBjkyyGoR5%2FjiSjKjwqDbKZtnBQct7F3O6UhrfuJ6mGrFdoJklLLbtBCSJiG9ZYE7RXf76TD%2Fpf29BjqkAfZ5EGj1RAVV%2FQCuahOKWiMsgKniNlb21O1qH4mVmQXStUB5PSx06bkqw9KTlsB8ThR4qBduGmjiAUM%2FK8gURBzgfc7ozxw%2BVQ9tLKNgUbPSnMBBb9%2FCnyenjPHrEbxMe6yhcUYijmhIHnC42Ox6Smgsrqho2Oq5c7VELuxD4ox3rtxQJzwODj9su8pGA33rcABdtD5QOu0oC0YwYNHTvycBphf1&X-Amz-Signature=4531d95d0fff72793fc4d054e2d173b11bd866f4b8ef16b9dd7c8f6c6ad1bd08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWP52DO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCscL82pocgBQWVUgeKzRdpjGb5dpSl%2F%2Bb57jL%2FpP2QUQIgfMyzIqvCpQ34MCAnMmOW5a2GjMQ6wZzPXjdB%2BB5TuNkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDG65YcL8R4VlVJYriSrcA0xiFeBdbdMOBFYQd2l2hm6cEzWG2KT%2BxKBTv%2BexS4qfGqHd5fpWMUxcUxD8loXjqvruc3EK81cF8qDeqf7KZhOzmRKEaumM8cm%2Fm1RkQpZUref6WGoz6gm9alj1MkbOaDMVLLCzLh313ehzhlCmMRSDzlJmlgu6szIgqiCFoDWrtEGDGu7LWxjKnP%2FhItp9m3h33hMeCk%2FTuI1zPmgtq0rPbu%2FxFidRP7WbW4wPqYZmEZboTZq9vlHxfUg0u4HqGNHT4Cdu91EpDpgpPpDJnmNFaAyHENuJxljL1rfpPn4eda1dG88aU32411vgXBOid9DPHIE1jMuaSEVmQBnpYlIhu1MIemhYo32Bfz3aSa1QBxRj5DRtTJFnn0fuPW1OcfoNzjFdiPsNgr7478AUb4skQZqQSK77WqFBObWoddxAorLK7WwnRYcVgb0SJJAqHyBxvyKi9%2FvEtVJllqq2hcVHPS5PAuoRuyJMnirh%2F5P%2Fnysvrk5ubfQFS20OGZfK4tmsYJfaprPgHnCtClsLIVBPqlrz2En2a3sxFczJwBHA6QFbvoorr3jXWw6qQKbLfomfKh3r4xuMvt6nS55fGdiR4jdQbFmdy65snZyDBAAtPEj%2Bg2T%2B1lSfJzYWMMup%2Fb0GOqUBR8uGy8YHLh%2Fcar4pfs8vXzPeXFtQjoniF1XZRscTUwJu0%2FhqhLCFIjQeV7BSKrGB7BuR%2FoJI2EJVNS8arLaf6TjYxYkNckyn%2Be0m1he3OV%2Blcg4zUG7DIbs0iyMb6c8CgbN3m8o1e6qJLknAdk36%2FgNFCk7GoCLeq2xPUDUHlPbdTje38K6lgwraNBcOWkGTXDdN40P0v1qn1xTG0QYcC18sYurU&X-Amz-Signature=1f9c848b459df27e8ae7c45d0d2c6c700cb10a47e21d5e877cfd0eaf36436ced&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
