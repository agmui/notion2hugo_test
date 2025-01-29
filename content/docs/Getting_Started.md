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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F2GP2D7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBigm%2BIn3h8iwzBZRZZmZz3IIDWfYgvWTZx9uxJcRaATAiEA9PmUvuBFlWcLdEePYR%2FuOyygSGy%2BCiW9Ie8ekCM7bv4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLpojKrtFEL1eK9xircA4jugTFZRr1jQf1fllCKl8hc21gsDCH0hdrA0rIoz%2Bg2%2F3SqpA2Wa4qALU8cN9sfTdmD2Ea2oThZOqxsxaBev%2BXoLYhSYoHYtKHmbarai9ECuEl61H4PZXEemSxAtgSkZGqVYJrYdzyBEw%2BNXlY6X%2BmEZVW9kaRI3mHsPbuqj42iz2nZAmAy%2FO2wuGLOV9DAiQlcu3tzeNMNQxdPi1x8WxHvG71Yh5JC94J7IK%2FRlIN%2FXngBOe1aj4TCzMCahxMULdL4JIY%2BZp91YrOO1WHv4lp8WAUIcf6jS3Nk7yTua%2F4XJ45Zyao0AepEqaIPjnvDhWG%2BMyfo%2FpPcMbY0E6gJkpekXjiL9vtlRgBrmDuxFA5lSKLgOlHSHv%2BmMyS8I4SRUHFsM6hc2V7HeX5EXCTdNFzuTz%2BYb6TAERFw%2F8k%2BuqRRReNzT816rw5YA9Mou5x3RhrUAGVosA3olnmrxMYe44nmFT57AaPHlkeQSrfDx9gdpCOqB%2FsEU1lqo0cVRqA%2BwsmLLPwydkKYwYZeH4EKUqgSQOnj3%2F%2BxYQ5XS8z5g9ONVnQIKP91yWPb2RHhT5j0HzCgqxpKJdF%2BhnP9WgBje4oDkBhAvhf5GuO4ftIZ0BAsaxKTdsNHUfQAqK0AMLTZ6bwGOqUB6Nytp2rujHdGuHac6EXvcs5Mo5npkCcWaEV85BmkpK1ERdz8tOFnG%2FxcgRnj0opz3zaL%2FZgwez6t3I9fhEY%2B19JzJLX0YGUnO5EfBPYS6%2BvPoavDNRxbkV%2FjsvNF5tUFL%2BWjR9HMENrK8rogrNp%2FrOyTFkoo%2BUnYdNXjgmpuQDRk2II6i3g1doiypQ%2Bsu89i6ox36FtDXsPxY8vQIor7kJnUlgED&X-Amz-Signature=9778691ef4d2a070cfad59166e3f5e2a7a8d96ec702e0d9ea426d1e156870010&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F2GP2D7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBigm%2BIn3h8iwzBZRZZmZz3IIDWfYgvWTZx9uxJcRaATAiEA9PmUvuBFlWcLdEePYR%2FuOyygSGy%2BCiW9Ie8ekCM7bv4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLpojKrtFEL1eK9xircA4jugTFZRr1jQf1fllCKl8hc21gsDCH0hdrA0rIoz%2Bg2%2F3SqpA2Wa4qALU8cN9sfTdmD2Ea2oThZOqxsxaBev%2BXoLYhSYoHYtKHmbarai9ECuEl61H4PZXEemSxAtgSkZGqVYJrYdzyBEw%2BNXlY6X%2BmEZVW9kaRI3mHsPbuqj42iz2nZAmAy%2FO2wuGLOV9DAiQlcu3tzeNMNQxdPi1x8WxHvG71Yh5JC94J7IK%2FRlIN%2FXngBOe1aj4TCzMCahxMULdL4JIY%2BZp91YrOO1WHv4lp8WAUIcf6jS3Nk7yTua%2F4XJ45Zyao0AepEqaIPjnvDhWG%2BMyfo%2FpPcMbY0E6gJkpekXjiL9vtlRgBrmDuxFA5lSKLgOlHSHv%2BmMyS8I4SRUHFsM6hc2V7HeX5EXCTdNFzuTz%2BYb6TAERFw%2F8k%2BuqRRReNzT816rw5YA9Mou5x3RhrUAGVosA3olnmrxMYe44nmFT57AaPHlkeQSrfDx9gdpCOqB%2FsEU1lqo0cVRqA%2BwsmLLPwydkKYwYZeH4EKUqgSQOnj3%2F%2BxYQ5XS8z5g9ONVnQIKP91yWPb2RHhT5j0HzCgqxpKJdF%2BhnP9WgBje4oDkBhAvhf5GuO4ftIZ0BAsaxKTdsNHUfQAqK0AMLTZ6bwGOqUB6Nytp2rujHdGuHac6EXvcs5Mo5npkCcWaEV85BmkpK1ERdz8tOFnG%2FxcgRnj0opz3zaL%2FZgwez6t3I9fhEY%2B19JzJLX0YGUnO5EfBPYS6%2BvPoavDNRxbkV%2FjsvNF5tUFL%2BWjR9HMENrK8rogrNp%2FrOyTFkoo%2BUnYdNXjgmpuQDRk2II6i3g1doiypQ%2Bsu89i6ox36FtDXsPxY8vQIor7kJnUlgED&X-Amz-Signature=7d9a5c970c6ffa516cfce65e7065ffa420e2291d015a175b785f8570b270601d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSNVZHV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqa6c9ZTAMQbmCKEr%2B6dyT2DgCbYPgtv17PzyCTlx%2BHAIgQpxzTaahugb%2BHopjPrfRs9fKazm%2FAdNymrgJ8gm2qoEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuef2ipW2qZsrTWcyrcA5disgeHVGve16xJJTMwZPxo4BRHeTSwFdZMmLEHmpwImkmHaZsy5JHdbuYSG41GSBcDJN%2F5442zehjW8oHTKtn6bkl7EY73TjB5tM1BTWOMLjQ5MLwpIjQ5JZG%2F6PWyREvtHKJESQ9CTTCA2llFRF%2B%2FRPS1NkRG03gOvH%2B%2Blex1ecvIoYyxqEsDDVuI1S7NN1tibFEWWiiWHKSwct6ZYp57pilgOO44WBCL89RLYaldh7xsIHCC1ZTPECbykOrm9Un4TP%2F7UgLkEZ0lXrPIJCV7JiaBQeHndHTvXT6L6IF5wogAEeUhknXPJyvo6FF2jXsJ3anOd%2FdTGU51jPGZ0XRPPYyQoEJxk2G6bCQkCSfRP9GtJpF%2B8%2B4hmapFYHRFdaWk%2BygEUoHyHucXH6An4Ckdg2b5wBR7sLl8931xum8rwzDOtVucfIAcvVPSegjuxCCRE4ax5eBjIqsaI1ZhUFMUuyGuMvlL2RUpUTo36OjFGau%2BGdzv8nTSTNNAj2nbpHh06BascPoKnBu4w9i2wIGq0LO8dQu8DbwLHEusEKbRaP0lTsNqGq6DQqRZ9JJQCI0LCRo1Yv2%2BPsO7qwurFwfXY1LG7f%2FupVFrATvLd3yuo1wEKwihfDXOnMENMMzZ6bwGOqUBaDDtuQfVNh31UIpetW4qTAEwey0pXJkikbBhZYTXDj16KrT8J5h4V%2B6PUdOYmjDGthdBBgXneSUKDsfyaXFWrJ9szbOUelbr6eDnoHnEsYepLnBKOx5Ma%2F6K%2FQQS7u9R3wvl0Qv%2FJFtBV7GdK0ea0HwgjMLTYk3bcmaCZAnAkdtae5wHD6Tt9OhzcZtXz%2Boqb%2FXmLe%2BdxOMtVo7oNq4OWPp2DMuS&X-Amz-Signature=2e33ad5fb09e93c671122b0331c82d7ab8cd43bf0a2540f80dc0ad5cc47115b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJW4SJOW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzqRiP2lxLM%2BUOOMr7iMhqMMpgUG%2BmtkMSndT%2FZ0RaBAiBw5FmUIDO3S7x44UE%2B0HRWstNloZTWmblVl7VXQVTigyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiEN6msH2oeu2V8TdKtwDYBDeixtZttaTq5nViHh%2FwIjjnnXhiVFpHy%2Fma4J19DIt5Xitjm7FjynCIQVQzq213t0NB4v47QjeJBbjxQb2RqWv1ZHYTIp%2B9GeCED%2Bj7BVnxsK%2FcnPveit5a3nEg9j04S%2FqpWzYUQOKiRDieouPmg1uLHOoBC4b7X0SYY8yG4YwVvKXXR9lOc7IxzFd6usz9GfhXDSUW%2FdYoFOLGfkSnqQjeqUVgtiAfPPUJsXCpvpEwV980ow%2BdEtHLM3kWMcNz0uUkyhyXFz2jlb2QJQnEw%2BUHfxDH25UKzy%2BRQB2FuOCIgx7C7rnRIelqRD6KfdCIGIvKe3OK73NQhbLX9FEqVY7fPoCIHer9FmXPBNUt%2F0%2Fi7ozR7KfbJBj9DTI75%2FxvMrWAQXQA4YqPMu7lR8DXZa31RKTA4OQtajtvOdakyK4YOltq%2BcBBNcsYQdJgPqClhTaDzfPXK5kYhL1cqf9eRKxLYFM2o%2BXZA%2BERqFIu0Wql9TUc4IFGqou4BA6Yv5x5sLcUCuhu5739DxFwLg9Y9HVzP2bkGIOaTBIVp0%2Bj6lJzJKyJhvhdrbwZ9K2JDv1cN3QeWpR2vqAwQh%2Fgtiw2sB5Auycszwpr8%2B6jSHoxTGZ5vE5ILpz0m5GPokw4tnpvAY6pgHYOT9EhzYS%2BrfyRffoHqQVkAsCrvFOQJBouTJ6ahIeY3eYrZW0wq9QmdAPWp29R6VYNPzfWinA4CqOHXpc1Lf7RhX2OqCJ2T7FifU%2BOyVsaNyxIRlMtOfe1EnkaIIxtiKmnYnGHF%2FZpTUXpUs1mN9nGEOY6RHqZslYBnSIPIX0jUW25g%2B%2BVIJL%2FFlQ1%2FUe8drKpzBd1b2v%2FstwDDlowRS8bbscz7mF&X-Amz-Signature=a5025b3da5dbfdbb3bdab3c04d5c0fff5b2152729cc3262d3898261cc37f198d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F2GP2D7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBigm%2BIn3h8iwzBZRZZmZz3IIDWfYgvWTZx9uxJcRaATAiEA9PmUvuBFlWcLdEePYR%2FuOyygSGy%2BCiW9Ie8ekCM7bv4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLpojKrtFEL1eK9xircA4jugTFZRr1jQf1fllCKl8hc21gsDCH0hdrA0rIoz%2Bg2%2F3SqpA2Wa4qALU8cN9sfTdmD2Ea2oThZOqxsxaBev%2BXoLYhSYoHYtKHmbarai9ECuEl61H4PZXEemSxAtgSkZGqVYJrYdzyBEw%2BNXlY6X%2BmEZVW9kaRI3mHsPbuqj42iz2nZAmAy%2FO2wuGLOV9DAiQlcu3tzeNMNQxdPi1x8WxHvG71Yh5JC94J7IK%2FRlIN%2FXngBOe1aj4TCzMCahxMULdL4JIY%2BZp91YrOO1WHv4lp8WAUIcf6jS3Nk7yTua%2F4XJ45Zyao0AepEqaIPjnvDhWG%2BMyfo%2FpPcMbY0E6gJkpekXjiL9vtlRgBrmDuxFA5lSKLgOlHSHv%2BmMyS8I4SRUHFsM6hc2V7HeX5EXCTdNFzuTz%2BYb6TAERFw%2F8k%2BuqRRReNzT816rw5YA9Mou5x3RhrUAGVosA3olnmrxMYe44nmFT57AaPHlkeQSrfDx9gdpCOqB%2FsEU1lqo0cVRqA%2BwsmLLPwydkKYwYZeH4EKUqgSQOnj3%2F%2BxYQ5XS8z5g9ONVnQIKP91yWPb2RHhT5j0HzCgqxpKJdF%2BhnP9WgBje4oDkBhAvhf5GuO4ftIZ0BAsaxKTdsNHUfQAqK0AMLTZ6bwGOqUB6Nytp2rujHdGuHac6EXvcs5Mo5npkCcWaEV85BmkpK1ERdz8tOFnG%2FxcgRnj0opz3zaL%2FZgwez6t3I9fhEY%2B19JzJLX0YGUnO5EfBPYS6%2BvPoavDNRxbkV%2FjsvNF5tUFL%2BWjR9HMENrK8rogrNp%2FrOyTFkoo%2BUnYdNXjgmpuQDRk2II6i3g1doiypQ%2Bsu89i6ox36FtDXsPxY8vQIor7kJnUlgED&X-Amz-Signature=54a0d6ffd030d9c1174b893452f6cbabca856e5effb4ee6572b3879a385d22be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
