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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GK3GSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGVmp%2F6J8aIQ%2BCjeLv5qYaZFZ0wz7%2Fg7afDKacn4L51bAiEAoir6voneHoqy5xkudozghlL6fXaVBtkwTzDTEXPm4Ekq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDC%2FM%2F%2Bibb7WhY02wCCrcAwEPIuaXdjNMVCfkcDQJq9y8Fo5bnRiw75mPeuhQjEpK7Rtbk5K6iZTHnw%2FS3bKUBRK%2FUIandXsubZ%2FM5Q46Z7EBDYPrGoI4vXGrx0XOiJ2%2FPgbY4s6DtLDorwVo0mSO7WRKR58CmPj4ra280NWrhxXPLT5PamKuu%2FAr7sIWKfDaFc4Jkn8zvkkyJT37CJ3yontUzq1f4tKb7Dh01luU8r1of%2Beyci1V68BABNt8%2FgeMsTxBFN1SWv6tu0QCkA2%2Brhy%2BUERGpbRbKquxQ62UVihNqgsilrJjjZgGVaz7ErrwIvWGjGirGDp8sxZm0VXZU6fXCU4OtB9wZEczO793GQXwVcsVGoqMkjkLVln4S%2B%2FTUo48pKwxXi3%2B4Lgi5JB8WRm%2BeKIq16q6TT6njJEpCwQcBE93rolz6xrngAE0Ix1RujR8xRxaDzey5bMYiUsi1giI4uhFaIPrGlf5JpG5KzBPYwGFJac0R%2BFbOhEYPXGkM1RjcD0hZTXENZjXw3poe1TOnyMwDii9RCRHA6UT0Z06cP6mNHsR6aEnJ%2Ff%2FpiupT4pX%2FbBC3Xfu%2F4SANOL7oeFEHLauLJMovAOfSPyTavvaL%2F%2F8ESCG%2FJYWFHlH3ywI5zvBovEg4TdHZ%2BB6MJL54MMGOqUB7Jt9fQaLSaEBZ1FG0AYvPNXmRTqlg1VKQh4JQAGzI6dMGr1x2yynraa9%2FDSSQrhVqgIkH47OjKxKnMsdl6rDFLWXI7vh9GrTVRdKbTQRjFn7VSGkkRt%2BAISw%2Fr4yOMJziOMU6nMWla5Kkm9ZRa%2FZyYT4CC7MnMoTLKYVbjdLpmqDMhTX0%2B5b0OK4pvi9l7Ug463ygsPK%2BQeOgjtTpmMqE%2BctdOLS&X-Amz-Signature=008080dfce5ace4d2e0f9ad3a20f8408814b599f0b48b6377e1c44d6ad3bbd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GK3GSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGVmp%2F6J8aIQ%2BCjeLv5qYaZFZ0wz7%2Fg7afDKacn4L51bAiEAoir6voneHoqy5xkudozghlL6fXaVBtkwTzDTEXPm4Ekq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDC%2FM%2F%2Bibb7WhY02wCCrcAwEPIuaXdjNMVCfkcDQJq9y8Fo5bnRiw75mPeuhQjEpK7Rtbk5K6iZTHnw%2FS3bKUBRK%2FUIandXsubZ%2FM5Q46Z7EBDYPrGoI4vXGrx0XOiJ2%2FPgbY4s6DtLDorwVo0mSO7WRKR58CmPj4ra280NWrhxXPLT5PamKuu%2FAr7sIWKfDaFc4Jkn8zvkkyJT37CJ3yontUzq1f4tKb7Dh01luU8r1of%2Beyci1V68BABNt8%2FgeMsTxBFN1SWv6tu0QCkA2%2Brhy%2BUERGpbRbKquxQ62UVihNqgsilrJjjZgGVaz7ErrwIvWGjGirGDp8sxZm0VXZU6fXCU4OtB9wZEczO793GQXwVcsVGoqMkjkLVln4S%2B%2FTUo48pKwxXi3%2B4Lgi5JB8WRm%2BeKIq16q6TT6njJEpCwQcBE93rolz6xrngAE0Ix1RujR8xRxaDzey5bMYiUsi1giI4uhFaIPrGlf5JpG5KzBPYwGFJac0R%2BFbOhEYPXGkM1RjcD0hZTXENZjXw3poe1TOnyMwDii9RCRHA6UT0Z06cP6mNHsR6aEnJ%2Ff%2FpiupT4pX%2FbBC3Xfu%2F4SANOL7oeFEHLauLJMovAOfSPyTavvaL%2F%2F8ESCG%2FJYWFHlH3ywI5zvBovEg4TdHZ%2BB6MJL54MMGOqUB7Jt9fQaLSaEBZ1FG0AYvPNXmRTqlg1VKQh4JQAGzI6dMGr1x2yynraa9%2FDSSQrhVqgIkH47OjKxKnMsdl6rDFLWXI7vh9GrTVRdKbTQRjFn7VSGkkRt%2BAISw%2Fr4yOMJziOMU6nMWla5Kkm9ZRa%2FZyYT4CC7MnMoTLKYVbjdLpmqDMhTX0%2B5b0OK4pvi9l7Ug463ygsPK%2BQeOgjtTpmMqE%2BctdOLS&X-Amz-Signature=59f0c02fa2a9c991c33114797c8eebb97169e52ad2f683800e689b93ff736a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GK3GSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGVmp%2F6J8aIQ%2BCjeLv5qYaZFZ0wz7%2Fg7afDKacn4L51bAiEAoir6voneHoqy5xkudozghlL6fXaVBtkwTzDTEXPm4Ekq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDC%2FM%2F%2Bibb7WhY02wCCrcAwEPIuaXdjNMVCfkcDQJq9y8Fo5bnRiw75mPeuhQjEpK7Rtbk5K6iZTHnw%2FS3bKUBRK%2FUIandXsubZ%2FM5Q46Z7EBDYPrGoI4vXGrx0XOiJ2%2FPgbY4s6DtLDorwVo0mSO7WRKR58CmPj4ra280NWrhxXPLT5PamKuu%2FAr7sIWKfDaFc4Jkn8zvkkyJT37CJ3yontUzq1f4tKb7Dh01luU8r1of%2Beyci1V68BABNt8%2FgeMsTxBFN1SWv6tu0QCkA2%2Brhy%2BUERGpbRbKquxQ62UVihNqgsilrJjjZgGVaz7ErrwIvWGjGirGDp8sxZm0VXZU6fXCU4OtB9wZEczO793GQXwVcsVGoqMkjkLVln4S%2B%2FTUo48pKwxXi3%2B4Lgi5JB8WRm%2BeKIq16q6TT6njJEpCwQcBE93rolz6xrngAE0Ix1RujR8xRxaDzey5bMYiUsi1giI4uhFaIPrGlf5JpG5KzBPYwGFJac0R%2BFbOhEYPXGkM1RjcD0hZTXENZjXw3poe1TOnyMwDii9RCRHA6UT0Z06cP6mNHsR6aEnJ%2Ff%2FpiupT4pX%2FbBC3Xfu%2F4SANOL7oeFEHLauLJMovAOfSPyTavvaL%2F%2F8ESCG%2FJYWFHlH3ywI5zvBovEg4TdHZ%2BB6MJL54MMGOqUB7Jt9fQaLSaEBZ1FG0AYvPNXmRTqlg1VKQh4JQAGzI6dMGr1x2yynraa9%2FDSSQrhVqgIkH47OjKxKnMsdl6rDFLWXI7vh9GrTVRdKbTQRjFn7VSGkkRt%2BAISw%2Fr4yOMJziOMU6nMWla5Kkm9ZRa%2FZyYT4CC7MnMoTLKYVbjdLpmqDMhTX0%2B5b0OK4pvi9l7Ug463ygsPK%2BQeOgjtTpmMqE%2BctdOLS&X-Amz-Signature=c36783914a077d5c5b44e13163b0299fbd556c8d9709131640fbe961d3c18fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQW5IFT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCSOQD33PL7k4TaL2vJnpuhec2i5mqAYJVKIpCUdsJuYQIgdqxh8p8wboIUMwQH8dAsAZFOKepoXxVybE5dGmp0VKAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDK89uWjtdqx1MKSMFCrcA8R3s4SOYip6Z8pic78aInb9xvudIoc%2F71KwcNLccRUXsB3FIx0sLmGrcl%2FPPnEFOHVun0gqzCOq1fR6GVZAg52GWmrLCcSoh1YDdbGdanm%2Fag4wrT%2B9uWvsCfhQSL53ibblmIHyUYMJeeXxQKXg%2FKhGzDlvgzkwV1JsAA5JMrRuyjDXUHDzB12Mhn08EAC9dWPrikzc1CHK1UNYHG27NvCaQ1cGvb4cxU2DDF6%2F3EVCeTMEfMYrqjdBZFi8FjuJeSUMG%2BoOvnDMhgqMtWBLg45T2NebR4DrY5BozL7chWrjvV%2F6l9TRi7YJXoZvwZ3gQo0wXm0a89bzYVEH4EG%2BLkGeZKqdtjBPHvzSTsH7oMJOQTs2NBGhjRC%2BYbREDSesDT%2FkYjuE2Zc%2B3dMcp8nfR2eNBG52ZhZmCMIBcNPxmUNvVSHXB05Dj9S4wBNkn%2BjpWcb5TPTqwiBhH3dVNxVKbrTqivyLfJTp0H5jWj%2B2ShccPyl08XoHSWpKI3z6cFdtQ77OUCivlzShZ%2FKBivWSHi7iG3QU8EneIB%2B4CPiTNz9ybiMK%2FU4RZD3ZO7eoOVH945GydF6%2B0v9HcalffurjDew5DLI4D1lmW27e7wAqvFPkvKfHk%2FcrQ1hplFZWMOz44MMGOqUB%2BzsmrWZU6CrDH1SLHiX%2BTzGqnZLBlGzsXtIpUrOacY2zln4oQMiHs4leLFYXarstyzINWyVswDUjAwcRYRprFMzKcpOX%2BXLqN%2FPp%2FiD5zENHWhntyaH7pr806c2CRpWCW81KmUAAd8RlCI2DaR%2BtIYUnNg0alzNCBtUeWvwxLbFB0qUO3CivGRSYCfgsAFot3eIL01yEm5I4vIdFjI16r90RehDw&X-Amz-Signature=158fb8f4af550261b01f26321b06edad4aceac6635cd171e7aa3d33d9bbc8bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVX2YDO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICZ1bNWPWqPdtpzeTYsdxs7gzH4glxvIMZwcIDwF07ENAiEA7LqR%2Fx3q3Gd%2BTAY5XC5xF67zgRzWu45%2BnErCTdH9GCsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFZwLBv7yvxoSN%2FHMircA%2B2DmP0kZBsjlO%2BL5w%2FCtHaqCVv9Ez1LECJph5jAfjjFfraVKTRhUm9x5hkUx8ls1%2Bpr0Hf6Nd3ar2T4DlHRDpzQ8uRMpPkTLDAr2%2BxOm%2Fk3E3O7Z35OrdpcNSjapBd4yPaW8geyMhkGzRX9fo%2FVVs9DaKYIZIoa1V0KZfm8zXMXPjig4BQesl1v%2Fl%2FnxBf4U%2FXV1ovIu0zDs8h5r3TD15siEo5AD4LmIUYd5B2jDWZzybcHJFabIzFS%2BYsxi0R7y9tussu48QlSfwLhxcXlG1BYXi477XK9OB%2BBEMVmK%2B6jqvszjs6LRJRRGJTzmPMqb9TJmcoO2Ex59zhIT8Hu5c1SuWjaGxRswIFagQnhQakjvfmSOq38I84BQGeeJl3sohWpiBps%2B0vbEC8HNA77a31kZpkgzEpmNseL2xNlyLj0KnizG46jVY4HKN6OD0ve5Oaw%2Bmz8uA9Nm6CP3MSaaAdkZlkeTIVe32g%2BNttwafcQO2b3kNNjb9v%2FFZnHsOIICePaN%2BD%2BML26u92p4FYkmbzVqXJgz9z%2FHSk5WKBIlerMTOOcbbkH6RervDcFDdQpe2ahPMs07efhrmBx0H9Qc2QNhvAc1w6wPt9S%2BF0Qg6Uqe8mKEMRPaMIHYLF8MKz44MMGOqUBICJO8dVKXqbQv%2FfZkBW9nRVTXVQfXkP6YPqoFrwXmB4POvPr0AyGWVsH678XezBNnXnhnjhjFd9nPiUCUiI5flpJgCYylaxx48mOlwzEhvIHwF8LYkhPGzeslYcKJpGbTnA%2F2S6R%2BvD6PEEdfrN3H5FHQU8fiQjgIN0v7CQv6I1mwpUmmVBXFWfHWjc%2FaTLwuFnkRM6%2FJf0KTAlZ96HSbo3NREXV&X-Amz-Signature=f2c5ecfb07447be169a09e68bada0a96fd843d2e80859e4dfa937d96f24be177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GK3GSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGVmp%2F6J8aIQ%2BCjeLv5qYaZFZ0wz7%2Fg7afDKacn4L51bAiEAoir6voneHoqy5xkudozghlL6fXaVBtkwTzDTEXPm4Ekq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDC%2FM%2F%2Bibb7WhY02wCCrcAwEPIuaXdjNMVCfkcDQJq9y8Fo5bnRiw75mPeuhQjEpK7Rtbk5K6iZTHnw%2FS3bKUBRK%2FUIandXsubZ%2FM5Q46Z7EBDYPrGoI4vXGrx0XOiJ2%2FPgbY4s6DtLDorwVo0mSO7WRKR58CmPj4ra280NWrhxXPLT5PamKuu%2FAr7sIWKfDaFc4Jkn8zvkkyJT37CJ3yontUzq1f4tKb7Dh01luU8r1of%2Beyci1V68BABNt8%2FgeMsTxBFN1SWv6tu0QCkA2%2Brhy%2BUERGpbRbKquxQ62UVihNqgsilrJjjZgGVaz7ErrwIvWGjGirGDp8sxZm0VXZU6fXCU4OtB9wZEczO793GQXwVcsVGoqMkjkLVln4S%2B%2FTUo48pKwxXi3%2B4Lgi5JB8WRm%2BeKIq16q6TT6njJEpCwQcBE93rolz6xrngAE0Ix1RujR8xRxaDzey5bMYiUsi1giI4uhFaIPrGlf5JpG5KzBPYwGFJac0R%2BFbOhEYPXGkM1RjcD0hZTXENZjXw3poe1TOnyMwDii9RCRHA6UT0Z06cP6mNHsR6aEnJ%2Ff%2FpiupT4pX%2FbBC3Xfu%2F4SANOL7oeFEHLauLJMovAOfSPyTavvaL%2F%2F8ESCG%2FJYWFHlH3ywI5zvBovEg4TdHZ%2BB6MJL54MMGOqUB7Jt9fQaLSaEBZ1FG0AYvPNXmRTqlg1VKQh4JQAGzI6dMGr1x2yynraa9%2FDSSQrhVqgIkH47OjKxKnMsdl6rDFLWXI7vh9GrTVRdKbTQRjFn7VSGkkRt%2BAISw%2Fr4yOMJziOMU6nMWla5Kkm9ZRa%2FZyYT4CC7MnMoTLKYVbjdLpmqDMhTX0%2B5b0OK4pvi9l7Ug463ygsPK%2BQeOgjtTpmMqE%2BctdOLS&X-Amz-Signature=e600bdb90feaffe35f7b1451182948efe7a5af1dcb91f31afa2084325fa3a174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
