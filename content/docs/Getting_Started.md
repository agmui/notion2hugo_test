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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAG5JAFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkvuS%2FRT4DMT8VkxZQuuv%2BvgPNvNjW%2FPviKUEeZd1jhAiAY7BWgbMlfpEZjmIzLFQ7xDHy5sOMd2%2BgSinJX%2BsMlcyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VVMQ%2F9S2Xja1NhQKtwDK3Wy7bnDlE74Z1h%2BI4YDY1a1EN65i6LAhe1uqNTLX3yDOLzZZqpnBwWC%2FlRqEFUQT7ybLjCNkyqXuNlex9ORWONBZdEO%2BzUQjULYmQXoNM4ovTyWavbxOdGyG%2FZ7oRwiyMdvGiXNm9My0znTXXtmrG1knuYi2TgiaMz3esTKW%2BCbnGCwKC4DLudyrbym3kI4ewcjL76tm%2BmP%2FubmOtVbw4WEC7wu5CQG%2BqFEjEdqgPjedDOZ8R2MiwN1ZrR9BAeLnYk0pEMk2uC%2BbLaN7YbDdD3pGtEzQZd3xesZOw4BZCaE94T6BVlGbWjSdtTVEBtq0RZGcalfIRlsJ2aPigzPzYLr6kwyujFW14CK1%2FYX7PYhXxcHJMTTjI6kEHTUmXDdXNWwqz1K2R18wqmytMBg4ysKKvKi0tWg1QrNtgluAgNL%2BUmxaq3Fd7v%2BmhG01pO3rHv%2FaVHsj%2FBeyiKLGLIcXQbGDLy66j8Ycg1D8O1lYk%2BGAXduRc9REb8qLCw0PHED4v4suTzBGKO2OIgbRTIcFrbKpZjGfeXZgzBB%2F5UvvjyHefvwnuPhLji4bp7b24pvmT5E%2Buoqr4SM3aJ7m57qfiV%2FfmmfknkEJPMkRyw344gKQFG1vJutWiTWBPMw6a2rvQY6pgE%2BT2XhFHyTXTHBE7nQMG9%2B3mHcZRgar2WBEgBznIG2fZtRzmvUfJecSFFyCPECY%2FBypowkRLicxQqXVt8Ifoqtd9VCLYalSpe18Hek%2FoeBxsUmaw1SjKFaBtyh6gMY8F6QkKgO4A85ROAz5NYSOp6gfXg8pYTf5%2BQ1XZwzJDyZ1%2BWdyue9Tqf000EuxjNWubGpkKD8Zgaf96m4eWcnHrlkwt%2B9p7Sl&X-Amz-Signature=320c946e44fae0c6625f53cfffbd3185cac6005083adf18d7691f0651ea6fa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAG5JAFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkvuS%2FRT4DMT8VkxZQuuv%2BvgPNvNjW%2FPviKUEeZd1jhAiAY7BWgbMlfpEZjmIzLFQ7xDHy5sOMd2%2BgSinJX%2BsMlcyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VVMQ%2F9S2Xja1NhQKtwDK3Wy7bnDlE74Z1h%2BI4YDY1a1EN65i6LAhe1uqNTLX3yDOLzZZqpnBwWC%2FlRqEFUQT7ybLjCNkyqXuNlex9ORWONBZdEO%2BzUQjULYmQXoNM4ovTyWavbxOdGyG%2FZ7oRwiyMdvGiXNm9My0znTXXtmrG1knuYi2TgiaMz3esTKW%2BCbnGCwKC4DLudyrbym3kI4ewcjL76tm%2BmP%2FubmOtVbw4WEC7wu5CQG%2BqFEjEdqgPjedDOZ8R2MiwN1ZrR9BAeLnYk0pEMk2uC%2BbLaN7YbDdD3pGtEzQZd3xesZOw4BZCaE94T6BVlGbWjSdtTVEBtq0RZGcalfIRlsJ2aPigzPzYLr6kwyujFW14CK1%2FYX7PYhXxcHJMTTjI6kEHTUmXDdXNWwqz1K2R18wqmytMBg4ysKKvKi0tWg1QrNtgluAgNL%2BUmxaq3Fd7v%2BmhG01pO3rHv%2FaVHsj%2FBeyiKLGLIcXQbGDLy66j8Ycg1D8O1lYk%2BGAXduRc9REb8qLCw0PHED4v4suTzBGKO2OIgbRTIcFrbKpZjGfeXZgzBB%2F5UvvjyHefvwnuPhLji4bp7b24pvmT5E%2Buoqr4SM3aJ7m57qfiV%2FfmmfknkEJPMkRyw344gKQFG1vJutWiTWBPMw6a2rvQY6pgE%2BT2XhFHyTXTHBE7nQMG9%2B3mHcZRgar2WBEgBznIG2fZtRzmvUfJecSFFyCPECY%2FBypowkRLicxQqXVt8Ifoqtd9VCLYalSpe18Hek%2FoeBxsUmaw1SjKFaBtyh6gMY8F6QkKgO4A85ROAz5NYSOp6gfXg8pYTf5%2BQ1XZwzJDyZ1%2BWdyue9Tqf000EuxjNWubGpkKD8Zgaf96m4eWcnHrlkwt%2B9p7Sl&X-Amz-Signature=b9d42c50cbce5f9bc3651253f90f338363bbe93fa45508e0b099d43be6aed1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQVPFQW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEivxZRGtnMCmDSjSOOP5dIuA3qb2wcntOJDYDoOPhxAiEAwQaghDtht7wnLiV4M9FCiN9MjNnaV5Mfbxf7Rx0%2FyXwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyQdl9pe%2B80Olz1eyrcA48VOBfNkQKyeCvIOi9dsP36sluBTUGkJQItJxAIswXUSAmMfL1Wvg%2BacUXajMB6f1r22PPxUSG7%2FlcSGEmlo9wmvNli058mKNEVKRgYvgMunndiII4MEHRwB91d8pajwkzjvaNVtNM4El%2BvRF%2BuuMMpJFDVlcI0tZw54hifqrtPupCQGI0MM%2B14H%2BzkvgyvtrWdgYo03lNzXsXQ7KiunmbkdIDhOI1xMzCIOz9Khfkh6uuMXYylDuEn%2BCYew3Pl%2BJNfIciPWlq1iha9Q6KTfLttJ8UGJL8TzYmXSm7A20wXkGFnAI2AusJHW%2B4DgLxdWod7gx8pcaJ2Z6COLu%2BwGs64uQ9jF0A72HMtOzLfKJZrW5uNs%2BsaBKTH6%2FvjliPN%2FT9kHrbIFaoMTjbJxAToop6sm9yMolUumX7rGC2Q9v%2Bm0fNRKqKNIg6VbdrhJtk4%2B23tmp2dT3HtAIL3Ry8Dn7nsv%2FPOe6zh8PW%2FbUoaTvw4cSWXHq7HzywiYdawLQn9CFT1uaOchAc0KFrCtJQSFftAV9SjZ%2FQTjcgvmYjXgVmq2GT5Mb5AxqLhY4rtGcHlglWO6Ja2iGmNRZXSjK7weeR0T752l4OwHpALKAsyh6jjjEY3ggqrvXOFTyyxMMKtq70GOqUB7R5%2FbDavaNRxSdcVLg3X7Lyn7lCxDvUwhLB1FMD7AqoVWPnSP9r3gOFvZ9fIHdRRsdDDExSFv1RjcQG6LYODx%2BH%2FYmhS2%2F8RMja1bf8ct2zqYI7Nf%2FHWxWr2AbZdbTZgFLxq%2BbVHaA0a4Pah0pY6PzA9v%2BD1yCnEC6xcoRfIn%2F5v5jrmeOxRKikN5G6UERyyC2%2FQsYuh8UdOOIQhOkTSjgt64Eki&X-Amz-Signature=c1574b1037857327903bebf110b09c6afc3da8f2a0e2978b17b8a04a94125b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656IYSDEK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClWiqKYxEEYZthR7GLhJwqxfak0lNAtZ0naWi6%2FCawnAiAOUsF5UXOzniW1KiqtwwFJwcZia%2FzxFMSzvYGIYx7LISqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcnJDk5ZBw%2BVvUNTZKtwDBzpdJxXJTy9G6C7OnJuOQRnjEP9FK%2BvLvixUo%2BpSuyRy1i3egW6nz1FQWnhTJ4S%2Bg5Aetum%2FYawzH8K5wLZU6hrGAu7FMRcGScDhh5ZAJXfvValUz5iAnvu8Yw4yG2ulT%2BTOVpELE96mPqAtRsn4h0VVRmcRRf25jGpALvBuqfcHljhRgcU%2FsySFtxHBDpEg5lICuegBSVb%2FePhEH7sln6DGwEW2sNKzZ%2BOSCNIneb6b58Xo7PBmRpq4CkQLpEKt94IT1wfk05mcdoGfO3xhq%2F%2FDlsE7eXyvWV84QTbI8a0ONhGsftcXi%2FG%2F47uxPZfn4qVO81aMFyWSpYPceU7JOrWhSVXnOY4XtHEEOXa1qRp2jIQsMKj9Rm0CcbS%2F4VrjDeCPnihqz5AmyjLtjDMxiNrxtL3zVwE1RogEws2KG9nEf%2B5BeUNOkhgXOFwqSikMe%2Ft6t8IMCb%2BhTZKylJQ3xuMIJMn21zlpRj4eNoVG%2Bm8C2ozWCIBcQgjUj4U9yA%2Bwo66%2BGZNWrrDLayLYPGMiJm64VQDzlao0i0lNoq8hN7rTyc8QlmZXe0pGO8EpT5Rm8ykoiCZwC8iwu34hxoN54ZSKrSsGOlLpLILbRociVwfx7iU2V2hcvewsAhsw7KyrvQY6pgGHfG95A%2F6uENAwr3ANOpyfCzPAIE7OfZeP42ybG%2Bs9AHzqTp3xrVadpklNAGZp6opFT5D6YsO2ISZrTqknNgP6jvH4yXKF2Ge6gbE1QeEr1doRkczPH3914jx1ohc6otCnc6RtgzU1NGynKpzy0COAY2c206Ja%2BiHIOQ0EWZhGXk5n2TNPRzt%2Bl90Nm2%2BNEVcKFwmHJiutkIIx4%2Bc9laIKM2fy%2FrId&X-Amz-Signature=28155df12471a513ee0f9b8861dba6186d6d573aba07b148431e3a0fbaf964d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAG5JAFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkvuS%2FRT4DMT8VkxZQuuv%2BvgPNvNjW%2FPviKUEeZd1jhAiAY7BWgbMlfpEZjmIzLFQ7xDHy5sOMd2%2BgSinJX%2BsMlcyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VVMQ%2F9S2Xja1NhQKtwDK3Wy7bnDlE74Z1h%2BI4YDY1a1EN65i6LAhe1uqNTLX3yDOLzZZqpnBwWC%2FlRqEFUQT7ybLjCNkyqXuNlex9ORWONBZdEO%2BzUQjULYmQXoNM4ovTyWavbxOdGyG%2FZ7oRwiyMdvGiXNm9My0znTXXtmrG1knuYi2TgiaMz3esTKW%2BCbnGCwKC4DLudyrbym3kI4ewcjL76tm%2BmP%2FubmOtVbw4WEC7wu5CQG%2BqFEjEdqgPjedDOZ8R2MiwN1ZrR9BAeLnYk0pEMk2uC%2BbLaN7YbDdD3pGtEzQZd3xesZOw4BZCaE94T6BVlGbWjSdtTVEBtq0RZGcalfIRlsJ2aPigzPzYLr6kwyujFW14CK1%2FYX7PYhXxcHJMTTjI6kEHTUmXDdXNWwqz1K2R18wqmytMBg4ysKKvKi0tWg1QrNtgluAgNL%2BUmxaq3Fd7v%2BmhG01pO3rHv%2FaVHsj%2FBeyiKLGLIcXQbGDLy66j8Ycg1D8O1lYk%2BGAXduRc9REb8qLCw0PHED4v4suTzBGKO2OIgbRTIcFrbKpZjGfeXZgzBB%2F5UvvjyHefvwnuPhLji4bp7b24pvmT5E%2Buoqr4SM3aJ7m57qfiV%2FfmmfknkEJPMkRyw344gKQFG1vJutWiTWBPMw6a2rvQY6pgE%2BT2XhFHyTXTHBE7nQMG9%2B3mHcZRgar2WBEgBznIG2fZtRzmvUfJecSFFyCPECY%2FBypowkRLicxQqXVt8Ifoqtd9VCLYalSpe18Hek%2FoeBxsUmaw1SjKFaBtyh6gMY8F6QkKgO4A85ROAz5NYSOp6gfXg8pYTf5%2BQ1XZwzJDyZ1%2BWdyue9Tqf000EuxjNWubGpkKD8Zgaf96m4eWcnHrlkwt%2B9p7Sl&X-Amz-Signature=0107a5f16cc66eba058826a3b4ef3366b071020208232db5060fc0243f0b883f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
