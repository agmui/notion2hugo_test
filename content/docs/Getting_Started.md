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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666C6FPP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lbGJY37kpYxspSUi70ecf7dEde0NIjmar0kofj7ntwIhAPRpF%2FQQVbay6pDb7MyZTtcKrjUsooG8R4U0KoB3Q%2F4XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybkHvR6QK7A1YKrFQq3AO5t6DqMJj%2FBNFNZGiPXY0ZXP1Z1gtdZmaHwoq0MOlKKGkt%2Fznz%2FyQRy4y79wiszaJLioV59vJ5OlvBM%2BY9iFnZRHzstAhdLGirpR17h9L9FLjJF292Wstg%2Bl0pOPFcqSAQ45CntiS3PL8P23Fkl8FbxZHqjbhYoDzoZ9m9LQAhDUZvqa73x7Z27KRgT4yr9QbqoXx7QAct2CSPKMbvb2NCkrA9YWi1tcLVqAXPgaBTlKt8oqkABQOhSFB4beXx2dUFMCDN2c2H3IKYrn9mJCBY15ifS%2BJ%2FvLa4JTWHT03G4l7mZo01jD8FjIpnTONSaaf7vmyf7GWEwX3jv84m6AefK5Z9BqSIP4nwmpv17xQdpBbf81J0zTaoSPRpys9vE9Z8o8E8KVbZSyJa%2F2yV%2BFEC4dMHoE%2FB9xfiehH4mITGCf3lXWAfWMVEhM6mvfBw0qSotHrSVKHIvKLXxCgHqKBMhW5MI67%2FC2tYgN1oIn8xsCNMTny0NCZ4jvcrnWU23WVnd03ABW%2F%2BrYmBvIW6oXlsnGIYo4BidsfNLiDYAmLC9Gy5TiDScoleOmuqx6%2By4BT5VLytkn34%2Bae1IvSRQg%2BjDpX6xQOs7GmK%2BPRInya8S09I44xGtN01yVqetTDDnfy8BjqkAa%2FFS1fLBVE5Z%2FBtVjiXzaKxkTfA1F4k3VbSOIFNkXNSRAhX%2F5zkvuMs8MkIrINjfOj6zFpvQ%2Bh5zAEUloStNC2t0hr7fEmy1%2FvK6KFC7UkfgGvqckmBI98KkeT9GFgFFofCyGHukXLAbkL4ZTRsbBuaBLT4XkfmLY9QHK3OQP7zLrzVw9S2mIBNCRt0SIJMHRM5bINNFqlbQrGIfgBavyBl%2B1T3&X-Amz-Signature=44ada99d6ead58632823173f6e6e9cc20513a7df4cc62dbd65b4a9e259c7384a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666C6FPP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lbGJY37kpYxspSUi70ecf7dEde0NIjmar0kofj7ntwIhAPRpF%2FQQVbay6pDb7MyZTtcKrjUsooG8R4U0KoB3Q%2F4XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybkHvR6QK7A1YKrFQq3AO5t6DqMJj%2FBNFNZGiPXY0ZXP1Z1gtdZmaHwoq0MOlKKGkt%2Fznz%2FyQRy4y79wiszaJLioV59vJ5OlvBM%2BY9iFnZRHzstAhdLGirpR17h9L9FLjJF292Wstg%2Bl0pOPFcqSAQ45CntiS3PL8P23Fkl8FbxZHqjbhYoDzoZ9m9LQAhDUZvqa73x7Z27KRgT4yr9QbqoXx7QAct2CSPKMbvb2NCkrA9YWi1tcLVqAXPgaBTlKt8oqkABQOhSFB4beXx2dUFMCDN2c2H3IKYrn9mJCBY15ifS%2BJ%2FvLa4JTWHT03G4l7mZo01jD8FjIpnTONSaaf7vmyf7GWEwX3jv84m6AefK5Z9BqSIP4nwmpv17xQdpBbf81J0zTaoSPRpys9vE9Z8o8E8KVbZSyJa%2F2yV%2BFEC4dMHoE%2FB9xfiehH4mITGCf3lXWAfWMVEhM6mvfBw0qSotHrSVKHIvKLXxCgHqKBMhW5MI67%2FC2tYgN1oIn8xsCNMTny0NCZ4jvcrnWU23WVnd03ABW%2F%2BrYmBvIW6oXlsnGIYo4BidsfNLiDYAmLC9Gy5TiDScoleOmuqx6%2By4BT5VLytkn34%2Bae1IvSRQg%2BjDpX6xQOs7GmK%2BPRInya8S09I44xGtN01yVqetTDDnfy8BjqkAa%2FFS1fLBVE5Z%2FBtVjiXzaKxkTfA1F4k3VbSOIFNkXNSRAhX%2F5zkvuMs8MkIrINjfOj6zFpvQ%2Bh5zAEUloStNC2t0hr7fEmy1%2FvK6KFC7UkfgGvqckmBI98KkeT9GFgFFofCyGHukXLAbkL4ZTRsbBuaBLT4XkfmLY9QHK3OQP7zLrzVw9S2mIBNCRt0SIJMHRM5bINNFqlbQrGIfgBavyBl%2B1T3&X-Amz-Signature=069f16e31d1f5759c3ba5545eaf1c4360d7bb68baa4d946c618727d8197695fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZAT57J%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FZ0NQ4hqDsEssfNhcCi%2BhqOglWTctTi6J9TwcJJlMgAIgYQwMzWcSYUBlCRG9xd3SSOEf3gfWYVWfk7NBq%2F5g4nwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP87UAXQ1B%2Bn8JtqyrcA8c677IuYnDibVNEcQg12mbVjpTBAW3cZsEh4Kt0arykMhm1LBl7ufIwwQDxKTdqbRmKXdLXJ%2F2RXfy3C%2BWiFLMp7mKyFjl0OW1HhqcbOHtwLI4R4pxWjcR%2BeDWPmAbNT430EcMq2Yox4hhpX79or6JY7mL44VeCqFGi9qexfDuPFWMCRwbgzorINEW1WisEDkXCLPOHLAe0ombTO2qZusZo1PnVUBrMAyUDUr8sDfp4qCuA%2Bz6qVqMyxggMB1QhJUtBye7r6q3nnad9wuw%2F%2Bh4V4liVElUfPUMF%2FRSm0UJf7BqO%2Fz6EMBRR%2BxPMxGUu0YCpv3bs0wFlkt%2BXqZsZNd1wHNmJCeMlPNkQrLw4V5HCEA6EX6sanTk%2BdDuzDx4P3%2BPvQ81J7GL9J5uxdXGPUZuL%2BbZqcFx%2BK02d10EpUPlUN9mC6%2BZay5oO55k2aZaYg%2FCvFeiSl0fYiuZ%2F%2FZuPolrYWItJ1eZXAsZDe2W6ewVCLYwT1q5vBd8J6lpHt0SadbY0zPoHpLXJta%2BoJdbF1NHDNO1H4usQhQbE3XRwtJv6mILV%2FLEp9tDcFd%2BRiL%2B9lXjx3%2BK0xzsNZYxTm7nnSCZ8CELVXFveweSUxAXmGoWWFZCnoQTHmEW0QegoMKmd%2FLwGOqUBz04wMLvRxtuCeb2NOyOZQNiUf9ybAlSbQdw4VsF4EFh7uwwbK1V0m6BkEssbj7uGt2H6GarkDznW2WElqyfPATyzWqEzeFakybRVFg%2BtLPdc1fmmFVkax5g74tIoFrsEQYXKd4efkYRXBr%2FUngcffb9b7XKp7ENrBip2INFOV15Z3Wk964ZDUr2IM0HaiSa%2FXpnrp8vsdFFg%2F%2Fva%2B7UTPFnxICGw&X-Amz-Signature=13813132ec9c8eec799c78cc514a7349f4061f65a2fb92140b8b05a6fb4e605c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3RQAFZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdec6Qkz%2FeBqjZEBWNRdJYUIc9wL%2F9LSOgGL17VSZlwIgTeXRQnBrsvT%2Fg%2B4urSInZFY4H8oRi4qq4RZ3b5H6LloqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLf3AUAmCI%2F3FSYJASrcAwAQ3TBM2LcylvCBqYdOG9x%2FS94f2xLoTzVAxLLzNiSxZXHgWnzCHNySaYbYJ%2BCsXpjGX%2FVwBpQWwMQ8%2FyBYyMrli7CDDd9RbjdJ%2BUN3vq0ILcj1v3KAm4%2BTcYb5MijQrskxxu%2FLYB18vJLeBhoszwqXSbDaGzOwf2S3P5wF%2Fx%2BugrefzfGuPsWMN5ATwwh1qvlOD2FTPd2MrT%2F88Gk0up2QxIewNYXpOUl12cuZMiC%2BHg6fK1vyshRcXFP1ClSCvkZbGKXJD9uih35ZTCw95TBQvx1U8OSsNombs58nF%2FwYwt9KDFES9PZ5l0O1bsQ7PrUwWlbo%2BDLoT3uFdI7c5i%2BL%2FeQrSdXH4FOEimOw1%2BfrzGslESBZnpXHjP4i4Hw%2FDGfoZIb029CwlW1%2FdHeqY2ivQv6AbbKeu7VKWVlMnPYCB7E%2BQbHrGftKLi2jP3P%2F%2Bz0XFcMYXcHz01jFlMK%2B0f1wp0HzAldHjSxcbaZJ0kWDzXNZapLHZIcUdkJJddsYR1gSbD%2BXH0ZmKFAyPyULE00849CMShU4z2p%2BGd9GBYaiAvYKwOJ7Z3QBmh%2FHlJx33FTjoYORG%2BgOjZwgoEWKNo5zH4CDlrHg2c8gIU0EVKm650VNpU2aEQMYfORdMPqc%2FLwGOqUBBWG3QLMWBzni6CqhJOvRh0RCuOTYIA66ziqDcMcvkUFYTnSbjLD9YjNIKi%2FdvnyjCnsHLklj2Qtyqma894%2FqlsZwLdrjvBhWBUUs5C7oLwLe3Z63p3Xr5gvOiknezHIHV%2F%2FhZFchHcIAXzSRuXbUt3Qq%2FnQHXaEDmQqVjf%2BOSdLX7o8IAcNs5WCH6Z4DqJeqVVHjui3xTWVCY9csIU2L6eEewbdQ&X-Amz-Signature=e1d85946b1c8b8c1f9957b56582213a94bc2ed65698e606b0bf35b363546468f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666C6FPP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lbGJY37kpYxspSUi70ecf7dEde0NIjmar0kofj7ntwIhAPRpF%2FQQVbay6pDb7MyZTtcKrjUsooG8R4U0KoB3Q%2F4XKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybkHvR6QK7A1YKrFQq3AO5t6DqMJj%2FBNFNZGiPXY0ZXP1Z1gtdZmaHwoq0MOlKKGkt%2Fznz%2FyQRy4y79wiszaJLioV59vJ5OlvBM%2BY9iFnZRHzstAhdLGirpR17h9L9FLjJF292Wstg%2Bl0pOPFcqSAQ45CntiS3PL8P23Fkl8FbxZHqjbhYoDzoZ9m9LQAhDUZvqa73x7Z27KRgT4yr9QbqoXx7QAct2CSPKMbvb2NCkrA9YWi1tcLVqAXPgaBTlKt8oqkABQOhSFB4beXx2dUFMCDN2c2H3IKYrn9mJCBY15ifS%2BJ%2FvLa4JTWHT03G4l7mZo01jD8FjIpnTONSaaf7vmyf7GWEwX3jv84m6AefK5Z9BqSIP4nwmpv17xQdpBbf81J0zTaoSPRpys9vE9Z8o8E8KVbZSyJa%2F2yV%2BFEC4dMHoE%2FB9xfiehH4mITGCf3lXWAfWMVEhM6mvfBw0qSotHrSVKHIvKLXxCgHqKBMhW5MI67%2FC2tYgN1oIn8xsCNMTny0NCZ4jvcrnWU23WVnd03ABW%2F%2BrYmBvIW6oXlsnGIYo4BidsfNLiDYAmLC9Gy5TiDScoleOmuqx6%2By4BT5VLytkn34%2Bae1IvSRQg%2BjDpX6xQOs7GmK%2BPRInya8S09I44xGtN01yVqetTDDnfy8BjqkAa%2FFS1fLBVE5Z%2FBtVjiXzaKxkTfA1F4k3VbSOIFNkXNSRAhX%2F5zkvuMs8MkIrINjfOj6zFpvQ%2Bh5zAEUloStNC2t0hr7fEmy1%2FvK6KFC7UkfgGvqckmBI98KkeT9GFgFFofCyGHukXLAbkL4ZTRsbBuaBLT4XkfmLY9QHK3OQP7zLrzVw9S2mIBNCRt0SIJMHRM5bINNFqlbQrGIfgBavyBl%2B1T3&X-Amz-Signature=827ac503f721e9f9b1f5f361be034f6ea41c9f9d744a868b1dd60a3e301f16eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
