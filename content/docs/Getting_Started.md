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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7XPEB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPxkFpvJn4K%2FBlkW9EaB0RrgSr6R%2BSilxVs7oMATXmdAiEA%2F6jz8x0M8zDyGBCfM%2FZJ8Nge3BNzCphwNy%2FbnhsAwHgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOKtyzA1u0mALSiQCrcA8ccs1UQ4qu5vBCWkHNf7T%2BOwvW6J46nAC8B5o2GiVVdteBcSxv3XSipVoydNXLAwSg%2F5SFbv2GBGKzIadhBKNfwYjk0asPCh7H%2BSXPeYrVG%2BYrTjM8Y0HwWIQqkOiUCZ5Z2%2BswUfXtU4yFUd0%2BRSLvMm9RoWaeX6mMDaxvRCK03VSfcFNU5Y67wysMeZ3utrPFd7UI1ZsmR3cDGnl8Zt%2FMdIEqbVKadzRKjhXwlhUZVyZzKcrKSpvrCJJk26wOoJ0jMZzCyIvHgP7Ds6rZsD7bbyaB%2FaxQ%2FU%2Bolee98XL%2Bsiqg7SReUK0Z00YCBzg%2BpqooZ36fqryI0F%2B74xcundT9B9Jo4QfNqlupvfH8uCHgQv0dj%2B3zddPQJJ%2BHm25ji2lQp%2BXD78Vb3R4s%2BXWOGN1mHh2IcfHJObKF1tvQOPpj9%2BLO8v8RcgDP0FM5T3iWrGfIC5wxkGIoJ%2FrO2ayx%2FfJKwVlUueG3Z%2FkvH5wGFPX2gxGa0UgEpmY89ZqxEYsHdgjxv%2F7OAkOBEj%2B5kjaH3sENvkiN2g7lK4GQS4ocInDVffQB01%2B84WUs3RwoFBGETeugc62BDKxGIncKotc9%2FJdqXKXJZpQy4orFSx3SYoFDXxd2qRrBZ0i9aPF14MMLehb8GOqUBEC%2FgYtwQAC7H%2F%2BJsmiAy6EdSGD%2BR6f4c5Xr%2Fs%2BJGzOgN1cmn2bP2yrX%2B3lmJGn2mR6T8xZl6hpSgEyvKd9M5nh%2Bljr81yIAKadxkX52q7OMwQglLONJbrbJ3Zj2m2kp%2FF5Exqzvrn%2BOCf0llyoDe%2Fut8AMqiaoSnUhveTDQjAuT1nGLyOeA%2FMSvoyTMDxJw6ITebVOLs%2F6W9hdyXs8VZ%2FH%2BcI9uB&X-Amz-Signature=543e08b45f3b9e02a8f9df26fbfbb61dee3cc0411d8cee240b12c13418a6bf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7XPEB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPxkFpvJn4K%2FBlkW9EaB0RrgSr6R%2BSilxVs7oMATXmdAiEA%2F6jz8x0M8zDyGBCfM%2FZJ8Nge3BNzCphwNy%2FbnhsAwHgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOKtyzA1u0mALSiQCrcA8ccs1UQ4qu5vBCWkHNf7T%2BOwvW6J46nAC8B5o2GiVVdteBcSxv3XSipVoydNXLAwSg%2F5SFbv2GBGKzIadhBKNfwYjk0asPCh7H%2BSXPeYrVG%2BYrTjM8Y0HwWIQqkOiUCZ5Z2%2BswUfXtU4yFUd0%2BRSLvMm9RoWaeX6mMDaxvRCK03VSfcFNU5Y67wysMeZ3utrPFd7UI1ZsmR3cDGnl8Zt%2FMdIEqbVKadzRKjhXwlhUZVyZzKcrKSpvrCJJk26wOoJ0jMZzCyIvHgP7Ds6rZsD7bbyaB%2FaxQ%2FU%2Bolee98XL%2Bsiqg7SReUK0Z00YCBzg%2BpqooZ36fqryI0F%2B74xcundT9B9Jo4QfNqlupvfH8uCHgQv0dj%2B3zddPQJJ%2BHm25ji2lQp%2BXD78Vb3R4s%2BXWOGN1mHh2IcfHJObKF1tvQOPpj9%2BLO8v8RcgDP0FM5T3iWrGfIC5wxkGIoJ%2FrO2ayx%2FfJKwVlUueG3Z%2FkvH5wGFPX2gxGa0UgEpmY89ZqxEYsHdgjxv%2F7OAkOBEj%2B5kjaH3sENvkiN2g7lK4GQS4ocInDVffQB01%2B84WUs3RwoFBGETeugc62BDKxGIncKotc9%2FJdqXKXJZpQy4orFSx3SYoFDXxd2qRrBZ0i9aPF14MMLehb8GOqUBEC%2FgYtwQAC7H%2F%2BJsmiAy6EdSGD%2BR6f4c5Xr%2Fs%2BJGzOgN1cmn2bP2yrX%2B3lmJGn2mR6T8xZl6hpSgEyvKd9M5nh%2Bljr81yIAKadxkX52q7OMwQglLONJbrbJ3Zj2m2kp%2FF5Exqzvrn%2BOCf0llyoDe%2Fut8AMqiaoSnUhveTDQjAuT1nGLyOeA%2FMSvoyTMDxJw6ITebVOLs%2F6W9hdyXs8VZ%2FH%2BcI9uB&X-Amz-Signature=888b1dd53018f203962f1b4ca80c3c30c8e0a2b76fc4eff566e8b78c54c77015&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QX3J6XB%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv8R5aOBqv1MI%2F4FhtrinyaPIfzdloIZBePGz8rEuxtAIhANVis%2BDZ166Q8dOGWDAVJV5KEYqGOkPCYeNq1Malg7X7KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8dyu4yDHeqIosuu0q3AOFNDBpt8nLYA9Zv0DQyzbyA8wv%2FkTbTocAz8I3OGBLn%2FyKE4CfQFu%2BTx5itgQhWXNhuB4KBpGYD0N60e1uTKkiHVvJjIxYlD%2FRTI0cTz5dJukmeF7y4qTe1byBT%2Fr%2BlzMUEha1hGzETmO94SaDP9VMHnCE0K7jt40jKGeZdl%2B4L6Z4wJM6xJSxMsu30piumQMY2KNG5QrjtzUVSR3x1c2BtVAFSe%2BBMPgH1uKswvJYCyTqRaVHPXYsH8LQSLBVZpTaNYMvSMEtohhg%2BluGyyq%2Fb8KaG7I8G61xKg2Ta4MGnFuM8n97XzeezaMQ3HLJ4x5Sy4%2FqPk%2BsMSfLETtloxOaXQ5Ojgefh2pYWxNY0UsIgasDbCoTUJdQJV9JSArH6OAN7d22CZP%2BWvEl7VpgClKXkyFnRI1U%2B%2B3yaoLZES2rUqEEMztYGMao3RBT4Y3L8eFZGbyjRl78wJlZXA3mRaSLhd3q9PF98hGgfBasMOmetCMoWuiyje1W6X8uRZhoGftw4z%2Foz9%2FPFmsgG7IHQu0tpLal1SnbsZ3C4DzOtJqi80JO3WcJF4IKZ7TBlxSrUc5tl6I5FNLaw8dWDvse0ufHbLbcC3SeZjADwDARtjzHhW4Yfv8NJAPBULH27DDL3oW%2FBjqkAd3r%2BW9O2Db6RmKhHryw86sYz227G5KTeh4Xe%2FMZABvBHtkFJxjK83CZPc9XF%2F2ZoFCWg8XnTASHQrxNKPJdICOyw49YeK098c%2B3%2BJ4s2szHiaEZF1dNQQSedVWBtzmMZUGkXHYxGGj9N59GuhlSztwvDNv2sXzt%2FIe5mt4Jbmxv1tPrWSvXEz2Xk8sIBefiNw0%2BlzWQB6Ve8mE%2BU9laO02OwS8K&X-Amz-Signature=a8297aba436d850bbb8a9fa1ea2a5f12d87c9448f000b7142c8df37ca9f4fb55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7EZAO6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCCNLfWiVV6%2FUf2C6Ayjps3C8O7sZoUHmzhd2mNtQSSAIgWl0pmsXCWx6e8YkUh3369CPOqDtrUNE01WCzWkL4eyIqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGA285M4a6MpBa4w%2FyrcA4PTYiUup3bmSpMr9FRN2Be%2F4HQUzcP41p2C7O70q2zn2R6Afy7gjJlQ4WD77ljTAF5qeEcmjmwpYtVUQnHZxpk8bgQG5rht%2B0VmgObhvndqahVZJHioDJvA3LsnFN0oC%2Fe6MMT8xFdhQz9dL8FXSeH5r453qQR3sqGmfIs4gEB8gCC7TpyD677iC7b1kcAIBzQHox13LrFqwifj58wc0WUz0J6kDJniRlV8U9ihQcnoQWC6x%2FmGD1Ovop6lpyRE%2FFKXVwvrnBlV4227BAvXwWZ%2BOD8sfAriZGUUzLYojnAnmxw42L9bLwVqqBeS%2Febdxilj8EBm93ARMHaO%2FJogohchmZ%2FPxsKnKV7psE9uCWraknheUcFVu5xZqbOgKmdC3FCHD885G2%2F3gNGviXy7YnDMkd9JYBU8sabeSMad8pUjhzexnKqs99bKgQoYss2MLwsIjLGYNj6aB2wDVRJ5Xslmz7KS7tzFRk7qfMTbxGjR2R5Chbq7FPUHiA8F1wzTJWRrqXmVPN2sGcwXVHd3pKqRraNjCH6YaHc7PWyxcIx1J1oD0lMpwH29RRV7q8FdYoTOqjAGz%2BJapCO0iLov2NuEDXDecrTbuhew9LfxXlShfR%2Ff7HlJNQiJ8E0qMM7fhb8GOqUBoPXvs0RahL9yxOyG%2F7Z1qDRHRqncUtaNp8LRIXp4fem4EK7jIpZ1KUjxwf72Cy9Zgeo5sacBebt3Y9nNWbbqCrKIGtGT%2BJqqot1ASjT4BYLjwELzay6u6t984zwhsWlp5bCI3GeA1i%2BEDe%2BOglAaBF%2BJ8Lt%2BxX1sSN%2BE3lJxz8z%2Bg0g3AY%2B6EfCMGOGol4obCkcJ8vFGG1QKzCPM1m6QjndJnemF&X-Amz-Signature=afec01d3d216e030fb96d5b8febb8733fb41b6a687a9bb166a08502183514362&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7XPEB7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPxkFpvJn4K%2FBlkW9EaB0RrgSr6R%2BSilxVs7oMATXmdAiEA%2F6jz8x0M8zDyGBCfM%2FZJ8Nge3BNzCphwNy%2FbnhsAwHgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOKtyzA1u0mALSiQCrcA8ccs1UQ4qu5vBCWkHNf7T%2BOwvW6J46nAC8B5o2GiVVdteBcSxv3XSipVoydNXLAwSg%2F5SFbv2GBGKzIadhBKNfwYjk0asPCh7H%2BSXPeYrVG%2BYrTjM8Y0HwWIQqkOiUCZ5Z2%2BswUfXtU4yFUd0%2BRSLvMm9RoWaeX6mMDaxvRCK03VSfcFNU5Y67wysMeZ3utrPFd7UI1ZsmR3cDGnl8Zt%2FMdIEqbVKadzRKjhXwlhUZVyZzKcrKSpvrCJJk26wOoJ0jMZzCyIvHgP7Ds6rZsD7bbyaB%2FaxQ%2FU%2Bolee98XL%2Bsiqg7SReUK0Z00YCBzg%2BpqooZ36fqryI0F%2B74xcundT9B9Jo4QfNqlupvfH8uCHgQv0dj%2B3zddPQJJ%2BHm25ji2lQp%2BXD78Vb3R4s%2BXWOGN1mHh2IcfHJObKF1tvQOPpj9%2BLO8v8RcgDP0FM5T3iWrGfIC5wxkGIoJ%2FrO2ayx%2FfJKwVlUueG3Z%2FkvH5wGFPX2gxGa0UgEpmY89ZqxEYsHdgjxv%2F7OAkOBEj%2B5kjaH3sENvkiN2g7lK4GQS4ocInDVffQB01%2B84WUs3RwoFBGETeugc62BDKxGIncKotc9%2FJdqXKXJZpQy4orFSx3SYoFDXxd2qRrBZ0i9aPF14MMLehb8GOqUBEC%2FgYtwQAC7H%2F%2BJsmiAy6EdSGD%2BR6f4c5Xr%2Fs%2BJGzOgN1cmn2bP2yrX%2B3lmJGn2mR6T8xZl6hpSgEyvKd9M5nh%2Bljr81yIAKadxkX52q7OMwQglLONJbrbJ3Zj2m2kp%2FF5Exqzvrn%2BOCf0llyoDe%2Fut8AMqiaoSnUhveTDQjAuT1nGLyOeA%2FMSvoyTMDxJw6ITebVOLs%2F6W9hdyXs8VZ%2FH%2BcI9uB&X-Amz-Signature=b1e971dd099418d24b3e282a6109314b4ea4c1af4d05c5816fe582ad94d295e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
