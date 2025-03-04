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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY6DMCI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBJcBA54GLO7U%2BCBF8okW1FdeBbxSo6BBE6yt%2BLMjsKwIgBlWrrWjbIPWIbkDtRJa88cOL3ckRBUMLBgM1QcgXUbIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXPinuhespADV%2BVCrcA3Selklagek60uFdG2ICTw6biRz8B6KZvM%2BJWhfO6RDBzaRurX8GqyEhXkBcMROHXglI1qud6lG8%2FwchD7aPr2md6XZ1f85sjvs%2F3l1Tzr%2FGyRF4YMIovmc%2B6QhZ%2Fo6pnn9zso8sURzTV%2BTpkH07DgABsEBKQy%2FkJxla95vOGB4R6UuT8Pco11R9uBhxkY5SYrxBIsSw6T1Nqjg7outTFD5B4of05ExzLWx7ddzP%2BilPt0LqwRE9Hgm%2FVjBPeobl4w%2FsSEsFt6akpiAK%2BO3v0O8YjBN5uNJBG0LLe%2Bw9tQoq7W8CxicLW3si8tJVe2iP8mguVSWbysessBB4gao1lWaiDI56tBpfhZi71A%2B8WJsEE7aLiBq1J6pZnhanUDPmqwqy5t540uLsKPayzMjoUIxkjKDLdL0KR%2FaNZ9DVFgbeIQtk8sl377hRFWOClI0W9w%2FH6FKXkw%2BkFNw153DAtkRllXQfK%2BpJ6eCd6kKGACsrDX3pdjgm1VHgkobTmaBHahoLowJP%2FA8EoFd5TBPKst8KjSGbfq19iguNxL%2FWEi3cA6IXRM06sU6CRWgBa5dA1gnqGVHHWa%2FplisJbNTgOUDLabPFobCLQBE5bwBm6AcgWtfxlZq3y0K3MiuIMJD4mL4GOqUBjfYyqzVK7vgPLpglNCeB%2BV1F5WzTGdurzkZ6N2O1LX6PAGMy2VsQ%2BFGEzPoh9X4PGzkVue1QHjbPKaPz6VknE2P5XQ0%2FoQwnSlbAylSE4laPQOfKFXMO9vIDtVIYI03YnkbOcZWCSe7PyBXDFC2Sbkcn2ToZMMPUkAn0pfhDSrF5o3xnF4P6%2BTYlZfBgB7yBYUQN9YGuOjo5QIvcX16%2BCo0LyVkM&X-Amz-Signature=eeabf1ab41da1de92be9779dd05847d395ff1e4a4ce1563fb03a016f4c4718d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY6DMCI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBJcBA54GLO7U%2BCBF8okW1FdeBbxSo6BBE6yt%2BLMjsKwIgBlWrrWjbIPWIbkDtRJa88cOL3ckRBUMLBgM1QcgXUbIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXPinuhespADV%2BVCrcA3Selklagek60uFdG2ICTw6biRz8B6KZvM%2BJWhfO6RDBzaRurX8GqyEhXkBcMROHXglI1qud6lG8%2FwchD7aPr2md6XZ1f85sjvs%2F3l1Tzr%2FGyRF4YMIovmc%2B6QhZ%2Fo6pnn9zso8sURzTV%2BTpkH07DgABsEBKQy%2FkJxla95vOGB4R6UuT8Pco11R9uBhxkY5SYrxBIsSw6T1Nqjg7outTFD5B4of05ExzLWx7ddzP%2BilPt0LqwRE9Hgm%2FVjBPeobl4w%2FsSEsFt6akpiAK%2BO3v0O8YjBN5uNJBG0LLe%2Bw9tQoq7W8CxicLW3si8tJVe2iP8mguVSWbysessBB4gao1lWaiDI56tBpfhZi71A%2B8WJsEE7aLiBq1J6pZnhanUDPmqwqy5t540uLsKPayzMjoUIxkjKDLdL0KR%2FaNZ9DVFgbeIQtk8sl377hRFWOClI0W9w%2FH6FKXkw%2BkFNw153DAtkRllXQfK%2BpJ6eCd6kKGACsrDX3pdjgm1VHgkobTmaBHahoLowJP%2FA8EoFd5TBPKst8KjSGbfq19iguNxL%2FWEi3cA6IXRM06sU6CRWgBa5dA1gnqGVHHWa%2FplisJbNTgOUDLabPFobCLQBE5bwBm6AcgWtfxlZq3y0K3MiuIMJD4mL4GOqUBjfYyqzVK7vgPLpglNCeB%2BV1F5WzTGdurzkZ6N2O1LX6PAGMy2VsQ%2BFGEzPoh9X4PGzkVue1QHjbPKaPz6VknE2P5XQ0%2FoQwnSlbAylSE4laPQOfKFXMO9vIDtVIYI03YnkbOcZWCSe7PyBXDFC2Sbkcn2ToZMMPUkAn0pfhDSrF5o3xnF4P6%2BTYlZfBgB7yBYUQN9YGuOjo5QIvcX16%2BCo0LyVkM&X-Amz-Signature=e6802445cbca444fb52944dcd13511f79c002227baab000bcb4097ed0af12c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLIUUELO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUO%2BTiEf4IiLa9srjv4ZKMeoo9s%2FQAD0uv1%2FSSj8kX7gIgRCWJg8g3Bs16X9HXnxGIORzLKkrYUhDFS%2FUuuNFoHvcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRpvEXsCQfjF1oiVSrcA4GRuV9x6UtHA79TUALwZwfQOxmK2IWPuAxAHl%2FIVi4di6ZqlwyqFXAmLkUZAuoLgbBkhkFnXA6U8ydEvVOVaGq2uK9jB%2FVZvx6Va9NRCszUJ%2FNdI6JjDDCTrEI0oosKBT3RtJTjuhqX5PsxDq3dHjLllqkZZbUdrm9IpotYPhoGSiizAwKBy4eWMOP1Vt5bPaFYJsDVj7aHr%2Ffhgnk0tnFi9Gj121qGRYfu%2BL3JG0DevhrL2e51XR3ib0gPOOTJyR%2Bk3QknV9gtr%2BqWCb4XJoZh7GwZ49vb7p4VJcqchu6cvhYXL2FS2BocFbJBRveZ4TWhyplkHCeNmHJafzPEMMq1UJ25mMPgZbjuKE7unByeNkfCtyhtTKkLeNKAZTDrAVvuHsoOW4ig1R1wjjSo6WcGD7sQmyr5EqYJngzI%2Fg18c0k0%2FUyjRTCjfPnbeYT3XT0iLtAzPWeBfBp8vJ%2Fu78AuhppWhYzKXKbrjvz884jTsOUUzpayzTmwmdbGKLa9jlo7f5idXoo%2F1jnBJriAKGMkz7wK2qWwP8XKKFk2LvG9k3MiLIFpSmoFhjZnQpoTtQ3V%2FmG1TlUd4HgxQuATeq0sE7OKpO8%2FmjW69S%2FKD7nRnnHLVyO8I4mSyH%2F%2BMP73mL4GOqUBLlPts5tBBnr20Oht0da1bZVI%2FIsTPgkLm7P1ttvFQyCV%2B%2BDY23TsNsmS6ewQzITsMklzzn%2B7HbqgAIymn413RJH5qnJW8oUhtgNVgOc5XbgfpV31SeGkb6YZvBO9Bgmg%2BMpS1ziDz39hLto8HayuC9RxVbm2stO8AXKN0BgN1%2FIgKE6iJ4W9BEsQoa5fuPzch78fPYDhjgGhYWCDd8iCuTJJtFcw&X-Amz-Signature=f3d06336cec45732db7bb53f78d82093586460d4ca53a10b73ef15b18a793528&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XIJ23C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKYmrFo7X3ifp01318Lp%2FaM71lfrwITQrD7OmlsMf8OAiBgQH259H9tafvhy%2By21owwJARLNM2Lrl2xiO8jK9BhvCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOwy7lLenWOokwrj5KtwDDmxwqzJqcqMfNdgG0aj0N3QP4UvluOez1ZU7nxHgHYs6KFlLTeJ%2FC%2BqEEDTBWvAv5SPM9v%2B3z5Mf8qDX1GzNzWLKvYYhF6WT%2Bg7X9oNvhrt3HFiN9F9DEeYVU08i91YNzCOoQwEoEw6OWPGwYQTmRwqET0UXDSKWVAAIikhxsK5zjLa%2BNb2Ez46p5MHjbFJ5x5DwOj%2BGAYu3hVG7UnKexUDjOcYdlNebLHY8Ad0F3KdLwTlrCCdZ5BIalLGqh63%2Fctex4L3zE1WdfCxgZ%2FrSqCk6L%2F1fBKyoMjLjbYH1Amijt5fk1RUQx4N%2FnHgHgBUGN8Jzq7L3opl%2Fk8%2Fa1j5RAazUtVpT8U9yuruh0RwvulrHvwH7Vge6ZaKi%2BRBdE3wpJS0zFimQ%2BV8cATSJf8C%2BAciQVB1oNB%2BztbYyzlLzQAfdEXk%2BJkEE%2FhyCOUnOH%2F6Yy8FQ9Aos28sUY0BF7D9C1wVZXKSw%2FeQ5fLsEOWckwydMOabndr6b5zQ0T4t0W6rQi0%2ByBU1pVKjlK3MKGvo%2BhnZRDsKiacSN2IqvtySt5f2T4JgkWelzXIOPWkNK2jiLobr3WXaoCixjEFXTEe49ctNAMmUwEHMQb%2BT4jsw%2Bwj3m9kSwce4cH7Km%2BigwkfiYvgY6pgGyzoRkLYRru22%2FVyxF60aO0KMhCF8a8iFvm5coDr5iKicfk%2BoffD4%2FZrzZlXL%2BDNa7xvQc%2B71LXRkuLJH8xFwGEy5shSDCu3qlI%2FJ%2Bp5c66LSEEw4UtgRAUZv90D1iovhyBM2q%2Fi5yGgOAmbpNM4BkVggLCfjHn4rHLGZ2hU82mFlNnDrdYlF9CcfRHXkNEY2SPCS%2BxHZH7dBm1b8Hn0wOgAcsuB3P&X-Amz-Signature=9c49496a0993be1e2ef8897eca547c24289e41faa8c0e6da758dcb8ccc8b34fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGY6DMCI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBJcBA54GLO7U%2BCBF8okW1FdeBbxSo6BBE6yt%2BLMjsKwIgBlWrrWjbIPWIbkDtRJa88cOL3ckRBUMLBgM1QcgXUbIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNXPinuhespADV%2BVCrcA3Selklagek60uFdG2ICTw6biRz8B6KZvM%2BJWhfO6RDBzaRurX8GqyEhXkBcMROHXglI1qud6lG8%2FwchD7aPr2md6XZ1f85sjvs%2F3l1Tzr%2FGyRF4YMIovmc%2B6QhZ%2Fo6pnn9zso8sURzTV%2BTpkH07DgABsEBKQy%2FkJxla95vOGB4R6UuT8Pco11R9uBhxkY5SYrxBIsSw6T1Nqjg7outTFD5B4of05ExzLWx7ddzP%2BilPt0LqwRE9Hgm%2FVjBPeobl4w%2FsSEsFt6akpiAK%2BO3v0O8YjBN5uNJBG0LLe%2Bw9tQoq7W8CxicLW3si8tJVe2iP8mguVSWbysessBB4gao1lWaiDI56tBpfhZi71A%2B8WJsEE7aLiBq1J6pZnhanUDPmqwqy5t540uLsKPayzMjoUIxkjKDLdL0KR%2FaNZ9DVFgbeIQtk8sl377hRFWOClI0W9w%2FH6FKXkw%2BkFNw153DAtkRllXQfK%2BpJ6eCd6kKGACsrDX3pdjgm1VHgkobTmaBHahoLowJP%2FA8EoFd5TBPKst8KjSGbfq19iguNxL%2FWEi3cA6IXRM06sU6CRWgBa5dA1gnqGVHHWa%2FplisJbNTgOUDLabPFobCLQBE5bwBm6AcgWtfxlZq3y0K3MiuIMJD4mL4GOqUBjfYyqzVK7vgPLpglNCeB%2BV1F5WzTGdurzkZ6N2O1LX6PAGMy2VsQ%2BFGEzPoh9X4PGzkVue1QHjbPKaPz6VknE2P5XQ0%2FoQwnSlbAylSE4laPQOfKFXMO9vIDtVIYI03YnkbOcZWCSe7PyBXDFC2Sbkcn2ToZMMPUkAn0pfhDSrF5o3xnF4P6%2BTYlZfBgB7yBYUQN9YGuOjo5QIvcX16%2BCo0LyVkM&X-Amz-Signature=6a7af9e2e9f7079cccb0bd3f8382260d067777df11a14c24685db23cca1e1ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
