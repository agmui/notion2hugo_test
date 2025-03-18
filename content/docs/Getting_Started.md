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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLARCIJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD8NQA1%2FUw8Ag%2F%2B72QcnuvZcbsiAFoor5bBoofz2tcbSwIhAMg238Ha0VmlS868m9yRix4gFvfSMl%2BdfhnmzJsqC4AiKv8DCFwQABoMNjM3NDIzMTgzODA1IgxtAW%2FK%2Bd4Eu%2F8LIGoq3ANKl2iSVnALPbo80bkjKq4yEfMtBw4FdWeralNcEwtJXOChSXRs%2BIWIgPnh%2FVKxuiajqEkx3v7fyF%2Bf17%2BC3KGIQcoGKVHsad8oh1os4iYvHonS6Kq6zTQOUfSSlraRU0FIsPQSIbzyWbSox1KmPS8u1cSHCpRsT86FdQYIvERo9wZPojdMuTb%2FtD3I7TcYZDZftI19WgVYYi1P25LkTcLwU0xzgZ51cvY2TIrKWvNN1cfyuqPXvFUYfwUkgmww7Xa4yEAc8B20vgnePZI3ihKbO0nJHlvMelrwlPel7zNX5e%2FKdo1qIEfHwI%2FRtksy7ifTkzwrm0x0l78hbtGzvgEo4nf%2FyKkJlh8KFao0xdQjHeBzoZF4ZLcVgksg8V6rO7IwsJP9wdn1J5tp%2Bv5P51WM593%2BMC88v%2B0aiuvo9qz5hEq8OPlGWwZHLgb6seOKZDBYzkReyfMzimT6%2B50hsX6AiQ%2BRf8O5fEOMxtjGSTpCvThHP2jz1TLQdEY0PSt39qYyeoC1XNfsXc82mNSn%2FACKS1Y%2ByB95q3R7uEWa3uWOkBndrLtiVHaJN3hgd838swxAJA4F47hSUiCbi69Hp6CRTBFpeAOmtIfTjqZqjWqQEYJCSopWd4alrQ3nrzDtleW%2BBjqkAaWLFn6LBPbYfvBh5aTEETdrr68Hixp32LjtCT67xPoD1DoxLYP2pHd4nYvjemQe2Ji3yNHi4nXCD9EtV2Z0TNvmOdQBwLlHc680%2BQA6lMQnOS%2BL787yqLgpRjsDEi5whURXQa5lbfH7m2zu0PxXjgp5mtA7fCmogIPR53e6IKC4IoRKqtk0TijleUf3m9MYpWGEqGZ2GrA%2FPtZOeWVvA2%2Fgtase&X-Amz-Signature=96cad79c700d0a27e155dd63fa0dbb0faf8919ef5dcd2a07ace27b149e1d113a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLARCIJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD8NQA1%2FUw8Ag%2F%2B72QcnuvZcbsiAFoor5bBoofz2tcbSwIhAMg238Ha0VmlS868m9yRix4gFvfSMl%2BdfhnmzJsqC4AiKv8DCFwQABoMNjM3NDIzMTgzODA1IgxtAW%2FK%2Bd4Eu%2F8LIGoq3ANKl2iSVnALPbo80bkjKq4yEfMtBw4FdWeralNcEwtJXOChSXRs%2BIWIgPnh%2FVKxuiajqEkx3v7fyF%2Bf17%2BC3KGIQcoGKVHsad8oh1os4iYvHonS6Kq6zTQOUfSSlraRU0FIsPQSIbzyWbSox1KmPS8u1cSHCpRsT86FdQYIvERo9wZPojdMuTb%2FtD3I7TcYZDZftI19WgVYYi1P25LkTcLwU0xzgZ51cvY2TIrKWvNN1cfyuqPXvFUYfwUkgmww7Xa4yEAc8B20vgnePZI3ihKbO0nJHlvMelrwlPel7zNX5e%2FKdo1qIEfHwI%2FRtksy7ifTkzwrm0x0l78hbtGzvgEo4nf%2FyKkJlh8KFao0xdQjHeBzoZF4ZLcVgksg8V6rO7IwsJP9wdn1J5tp%2Bv5P51WM593%2BMC88v%2B0aiuvo9qz5hEq8OPlGWwZHLgb6seOKZDBYzkReyfMzimT6%2B50hsX6AiQ%2BRf8O5fEOMxtjGSTpCvThHP2jz1TLQdEY0PSt39qYyeoC1XNfsXc82mNSn%2FACKS1Y%2ByB95q3R7uEWa3uWOkBndrLtiVHaJN3hgd838swxAJA4F47hSUiCbi69Hp6CRTBFpeAOmtIfTjqZqjWqQEYJCSopWd4alrQ3nrzDtleW%2BBjqkAaWLFn6LBPbYfvBh5aTEETdrr68Hixp32LjtCT67xPoD1DoxLYP2pHd4nYvjemQe2Ji3yNHi4nXCD9EtV2Z0TNvmOdQBwLlHc680%2BQA6lMQnOS%2BL787yqLgpRjsDEi5whURXQa5lbfH7m2zu0PxXjgp5mtA7fCmogIPR53e6IKC4IoRKqtk0TijleUf3m9MYpWGEqGZ2GrA%2FPtZOeWVvA2%2Fgtase&X-Amz-Signature=bdab3205852e5e84443aa78458d4f0a2ac0466e9b831f4c5a062e97990fa741b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSDK4QQ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDz5292zySXcFR6gknY3XdId%2B3s5YvVEuYRbo03tTSBSQIhAObfXCgg0DmO2C1JALmriCbhCbyLZ2a517pzrdMzaL5wKv8DCFwQABoMNjM3NDIzMTgzODA1IgxcxoePZTAEahDBl04q3AN6fzjZRw0SH6Ur2nBkMcxYAo8M%2FZhNPl5rBO6s%2F%2FaTOaGsAGi4DmC5Cq3lLsKIco7ls4fTxMO9KEjhL7ZsRWN9Exj0ISuUJcCRUl4OuMpWDNTrmvJG%2FcMOM0vxYCfa8btzzPt4X%2BGEpGRtKIeEtOTJ5RpLo9j4tw0n4kzXt1cIuDmzl%2BTmPHygdfYi00i%2BtYPxJMI07EkHm6XYLaJDyn6ffcxXVnlaEHctoa0%2FObvPOwgaL2O47ajG0eCoLt1e58imB3uJ6wV1PawRJ%2F1zw6j9YR5svYHV5Y2lxsK7U50Jqp8krmQgtlI28rZsUtPWT4nxbKbU3jiMHtD%2BIsoNSg4FfrkoGVQIOwIYY7UW1k8%2BNw6x6YkurtUwEQX3wyiputCpdnNhv7AEMthBYwOiMG9cI%2FJlSMD4vfAZRgTNXO2SF8EGpEakJIoe7dLHu56WFYuFUUGQye7K9RQl7HLIQXzwmqifkk2iaxdU1Gsu%2BubJfCIjqHC6kEM%2BO%2FHexZNWoimBpTZZkIZo0HglCpEbhlFqIGLpyzv%2BC6yghwwvfqZGm5gXjxNDHbXjok%2FTBfFFnPalz1DygOT87kcJLjEyGfOkwFpf3QH%2BojySGkg4QEIQUMZK%2FUx%2Bw2Us05nH3DCfluW%2BBjqkAddPX%2FnCfih%2B4ckCKDO30BqUD96LcFW7ZaAdTQV6a74R9xZ3M3mYgOIF1E1EVcEAHgGLG%2FWxQUI%2BUbWqff9wt%2Bm0IyYr09TgtowDGSMfn%2FP51nKIejCgJuCt%2FhYfa7nztRafEK%2BKSSxjuq6rFaOuAKJBoJ3zj05SZQQLU8E5KmPaJHIKHf1ZO6O6nH9%2Fw7ytBSjhaDNxyCCs1qQXsijvuVWJNvtm&X-Amz-Signature=d4c256800b966caaf56902079adaeb18de1a26b4e8fedaf63e1c9bb9936e1de3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B2LL7NW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDzgeelUXVJnTtQA6eRrAqoeMCtrdn9LmNoF9ORbvrj%2FwIhAIO2Iw4sj4EXaHB2OXWSdwC10KBy9lsrzySOyCzHj%2FETKv8DCFwQABoMNjM3NDIzMTgzODA1IgzZP9m9r6U1tGfbgKsq3AOiF9XlhLnYrtAiv9b5z9uMglELJqk%2B0vzDZXfUHPGR5po1fzbPMWsUEdDmBTsr3qVIQfQWN4AWlikZanqo9Qpy18V6KwgBSho3oVyUL9pY3COdrlwHhD89tHZnORSovO5K9LZmDM13TrAu2egE9daDoToIxlMfaW%2FR9L1Rlxei9VYkXQZHfIQplNa9uhkY61qO%2FvcBtbpuecj%2FSScDEk7taXSfWdgvtcTNMjbl7Iq6a0TckDN4vNnE07r9gCQpOKt0YZvA399o%2B7CzZT6cWRc%2BSM6QD8Y2t%2F6kyzpkVOCfebU5m1kuZzSRgG%2FOArFTCHTXjdU5FmhlnORd7gU0LZPWy0f3lEqYDVwrnW1UDq3gYTg6Xc3OYBXjr4coUOhiK1YvS9RJ61cbAAUOnbSMawy%2FWbq2oQliyZLppkOGLESzD7bTw84IU2rUkrjqCF5XdBXidR92%2FvlIO7eLUtlVgV7NbH1rDLvGPTT%2BaBS9O3cIrEemaiPs0CK%2Boh%2Fr1P33FEtrLgczP6kyGdBjvJMSvYNJiyPEVnqdbBh6PBl9IQlu2FAuKaxgU98Mj7Ocp7TC7vuW5foEimyh8S1maROUYQgYIaFxiEu0DMrTCveQXtoZ1QzuKZsVlEmb%2FMDRhzCmluW%2BBjqkAYAVJh%2Bkgwdg3xdNs6650nq8uIXhFW%2BgzLmo5WrGAara0DYhbSviQ1omKkDuRinBdB%2BZ4yOXb6p0JkB0I1LA6VPXJy%2FJi%2BER%2BN4GexLHOxFNYScT05xJmA3t2oCCPiBOYVYhkKRxbJjf6icpIxNuJJXfwrv4Z%2BnRFDZhH0jTamhiDHkwqFjh2JGl6w4GBiInm6OewcXuOtqEoaSu4SpXZRJd54A4&X-Amz-Signature=875f03e09fed8569eb13a7761fec0c62e559632003d75b4dcd9572393130b8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLARCIJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD8NQA1%2FUw8Ag%2F%2B72QcnuvZcbsiAFoor5bBoofz2tcbSwIhAMg238Ha0VmlS868m9yRix4gFvfSMl%2BdfhnmzJsqC4AiKv8DCFwQABoMNjM3NDIzMTgzODA1IgxtAW%2FK%2Bd4Eu%2F8LIGoq3ANKl2iSVnALPbo80bkjKq4yEfMtBw4FdWeralNcEwtJXOChSXRs%2BIWIgPnh%2FVKxuiajqEkx3v7fyF%2Bf17%2BC3KGIQcoGKVHsad8oh1os4iYvHonS6Kq6zTQOUfSSlraRU0FIsPQSIbzyWbSox1KmPS8u1cSHCpRsT86FdQYIvERo9wZPojdMuTb%2FtD3I7TcYZDZftI19WgVYYi1P25LkTcLwU0xzgZ51cvY2TIrKWvNN1cfyuqPXvFUYfwUkgmww7Xa4yEAc8B20vgnePZI3ihKbO0nJHlvMelrwlPel7zNX5e%2FKdo1qIEfHwI%2FRtksy7ifTkzwrm0x0l78hbtGzvgEo4nf%2FyKkJlh8KFao0xdQjHeBzoZF4ZLcVgksg8V6rO7IwsJP9wdn1J5tp%2Bv5P51WM593%2BMC88v%2B0aiuvo9qz5hEq8OPlGWwZHLgb6seOKZDBYzkReyfMzimT6%2B50hsX6AiQ%2BRf8O5fEOMxtjGSTpCvThHP2jz1TLQdEY0PSt39qYyeoC1XNfsXc82mNSn%2FACKS1Y%2ByB95q3R7uEWa3uWOkBndrLtiVHaJN3hgd838swxAJA4F47hSUiCbi69Hp6CRTBFpeAOmtIfTjqZqjWqQEYJCSopWd4alrQ3nrzDtleW%2BBjqkAaWLFn6LBPbYfvBh5aTEETdrr68Hixp32LjtCT67xPoD1DoxLYP2pHd4nYvjemQe2Ji3yNHi4nXCD9EtV2Z0TNvmOdQBwLlHc680%2BQA6lMQnOS%2BL787yqLgpRjsDEi5whURXQa5lbfH7m2zu0PxXjgp5mtA7fCmogIPR53e6IKC4IoRKqtk0TijleUf3m9MYpWGEqGZ2GrA%2FPtZOeWVvA2%2Fgtase&X-Amz-Signature=7177dc340df417dc0d5dd9ce7b0d4b844bbf7f699dce858f3a4602f7406adb08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
