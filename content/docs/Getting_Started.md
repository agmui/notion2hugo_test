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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJTDBCO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDen3ZRI0fJArPwqvUi08J0bxlzslS5nz%2Fe8D0LpawxsAIhAK0%2FV6GrFfr99XZx%2FA3Dyb1mSmPtR223Vp7jbLqHZMshKv8DCHYQABoMNjM3NDIzMTgzODA1Igw9fQAcYpQLXLvsL4wq3APU6A%2B8A8YoKt5tBrEJiKeeF%2B84QFzDPTGWBfNHo2xj07DufAvmIZhCCu7hWLW0FR9Lh3jE0SWNdpni0WKLAc7pjkTUwmfa%2F4ay%2BsEpftdiasvolEyc1uUrz2SO7tuiIUcVyEGrY2ulnktfP60LbhikRi4vbnbuABChjWZkkXAOj4rsfWzRksmwio6V3OpU1nkj6JB5pIf4Bxg3y%2BHkqPxwqWD3gU5iKkJ0rFWuRYAv9gOLYxTBbNMKp9fWclr%2FpJKG1UlhQSwikQfhd4wDOtNI4omu5rC%2BhMjv2zDacHzZ7o1MI59WY3buqn1paIZ9NdlzMCwfnoK5A8TZkmZu5%2FuM%2BDIcvG09AqrL0X%2FDydl0vaBFv9cwta%2FVNbElsVzXnUtJVdRirS12lOAfn%2FN1mSY0YsXsAm3%2FSzeA9vWYDtbtKRLPyxEj6NNYqHKrS78mAHUWp41D2bfWUAMDkWkeFCNrkSh7DUlYG0YSzLeqHXokoUe5vnLVtPfWGOPQve%2FRKExfvJ%2BB1OqwNWEkESDDc30QVAlyynLyZbLBKJb%2BxSLjjOLo%2F2yin%2B%2FYrAMBvu5GLLmUqTdR30H1l07RDMwFLDsUXAcKhiSI9l5G%2F7VkPvyTTOXV5eZSanfnE3quyDDZg77ABjqkAWSaDMUOLJHlEBKUWm6oJ04mSx%2B2HydnVt95Dh0HiHggpa%2FNIyP2TXdB442EjTr2dFt90xmvt0prWIi3GeEGX4Hgc2bwWpN6mgYbwWwLFM%2BQk5YhnKD1HVAv7WZQhSDhn10uEP1UCsE4ggkCG7rbL91iP8g5%2FM%2BTsNakKlXXdpTOoCdXE6id9Dg%2Bjzu5nlrTRuh3qjkGg2urK1Snyrnm8DjKlf9h&X-Amz-Signature=6e19f5cfd0273ba55a3a41ae4e1947a82f17a980bab5c0abf6ca40d4ddd6e8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJTDBCO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDen3ZRI0fJArPwqvUi08J0bxlzslS5nz%2Fe8D0LpawxsAIhAK0%2FV6GrFfr99XZx%2FA3Dyb1mSmPtR223Vp7jbLqHZMshKv8DCHYQABoMNjM3NDIzMTgzODA1Igw9fQAcYpQLXLvsL4wq3APU6A%2B8A8YoKt5tBrEJiKeeF%2B84QFzDPTGWBfNHo2xj07DufAvmIZhCCu7hWLW0FR9Lh3jE0SWNdpni0WKLAc7pjkTUwmfa%2F4ay%2BsEpftdiasvolEyc1uUrz2SO7tuiIUcVyEGrY2ulnktfP60LbhikRi4vbnbuABChjWZkkXAOj4rsfWzRksmwio6V3OpU1nkj6JB5pIf4Bxg3y%2BHkqPxwqWD3gU5iKkJ0rFWuRYAv9gOLYxTBbNMKp9fWclr%2FpJKG1UlhQSwikQfhd4wDOtNI4omu5rC%2BhMjv2zDacHzZ7o1MI59WY3buqn1paIZ9NdlzMCwfnoK5A8TZkmZu5%2FuM%2BDIcvG09AqrL0X%2FDydl0vaBFv9cwta%2FVNbElsVzXnUtJVdRirS12lOAfn%2FN1mSY0YsXsAm3%2FSzeA9vWYDtbtKRLPyxEj6NNYqHKrS78mAHUWp41D2bfWUAMDkWkeFCNrkSh7DUlYG0YSzLeqHXokoUe5vnLVtPfWGOPQve%2FRKExfvJ%2BB1OqwNWEkESDDc30QVAlyynLyZbLBKJb%2BxSLjjOLo%2F2yin%2B%2FYrAMBvu5GLLmUqTdR30H1l07RDMwFLDsUXAcKhiSI9l5G%2F7VkPvyTTOXV5eZSanfnE3quyDDZg77ABjqkAWSaDMUOLJHlEBKUWm6oJ04mSx%2B2HydnVt95Dh0HiHggpa%2FNIyP2TXdB442EjTr2dFt90xmvt0prWIi3GeEGX4Hgc2bwWpN6mgYbwWwLFM%2BQk5YhnKD1HVAv7WZQhSDhn10uEP1UCsE4ggkCG7rbL91iP8g5%2FM%2BTsNakKlXXdpTOoCdXE6id9Dg%2Bjzu5nlrTRuh3qjkGg2urK1Snyrnm8DjKlf9h&X-Amz-Signature=4c42f508f04a904114cfef8b0ae31bf3352522f3e958f4cfb22f1125e5431e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6MN7T5M%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZ0NJEYeHs6ByMt7bQmGY98QTzyL0uvEXQL%2BHEbYGsAIhALYdK7R4mC%2B6f4XxAgjomG66nqPuAZvm0HyqMMK7ZPPdKv8DCHYQABoMNjM3NDIzMTgzODA1IgxcU98TwCmPJjuhdrYq3APFuCc2EE4H3bY58DzT6b%2FJSQEhy78W5mJBSyvWldyKpkSeXzQNzKIiuIAK2eG4f1dSHy%2FI0%2F5o6jM4fhm1joe1iuJDIr%2FJ18y86Msal8EEP9zpG0bDZWPr8vofzY%2FDaNf0AzMiadS0O5NRWCvXunTgNwPixDA52%2FIvB60sq6WCWXBEzR4WX06dOAcmFeXFI1CewP82a67bY8MriWwGvKxN1mIrhz8yNRLNblR0OBflmlxvEDLsr86q7Ut8CKlf7AfBtzZoUH2bfrXvh9oakiEFiu9ZAY1AMzJMLuJdBxvVJKwXmoxfcYIVrAwogKYc7%2Fao%2F%2B04%2BI%2FyqCn%2F2pEHb7Kf%2BnMtoRZ1yc5I74qrqHy16Asj7999JJHqBd3Z5eRUN7TD%2BcFChvG3GFDGKxIu1Y0AmDjFV8ZWvPJk1gRzq8nCI9MeAmJPiSuY0CDS2pshfhIlEu%2FhG9x4%2Bv1BvXimDsKBC8z9ZiOf8HhFF%2F%2FGe9gY658YuKmps74CDUdY2lEc1JoHC76wQWGCJcWKgN%2B5OMpc1G%2BbX21O12SqdPIGhFnZ85fdmSkgmKO%2BsrL1VDuclhEbghbH3VUBkjz8jlJgf0j%2B19mzciXDUbkOa9%2B2x7lHe8lvkuR0uovtQL3IPzDugr7ABjqkAWOLFVMGaaOVRP75yldr6cx6jhHoNcTOr6cCCsosoZLZw6oxNEE8iaN2Z7lMgnx0wbhx8nA9C93o5yvFtyEKkCc9Ith9W9RLTs8fXdMaeKbwvkDFCAzF5Iz4P1GvpWBheDUkOm1roNe%2FDkHrPi%2BHNuPm7%2BUKGlJCacHDxNvU7PabgKGklykFWWpeWRlXpEJ4LIM5X3euymT7IArm6jQgFB5KehKg&X-Amz-Signature=fb6c4cc19db25cd77dcb0f96257196980ab0ae36b05759a4b00ee678f8613f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETYPQPX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnmbdflsz0TyNo7kdWSlkMf9eVuzBip2XbcuiDq6oaVAiAujx8sHMkgF564qMO%2F6Qxh2BqOfNhjchAR3sFnmfUsuSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsXrIgc8Z3RFe9NX0KtwDzGDy7DCrmZWU42nYEj%2FToYnlmtC6%2Bpw3q%2Bv0e%2FcWGwGz0a7g6364TzpgO8yjI4VdqXM9JYeDS2orOicPasxAIPrY8Bq%2F0sRr0JoDltnw2RstUchG6L4r2GgtzWbq%2BqQwc9sw07wncZ7wMM3n9Ur9n4UdHhvI4oAHwZCx1LPwgD2O94kiUHHsvQHfa%2Fj45zY%2Fh0pknFXgIOVz4WUt0Z6dMXoZVUHt4AV9l8iVaNYhCwg05snx2AOxynCIlsp1797CwQrot3mDfmcrwnZ2WOWRXNcWQXp9Nnk75FvLBXGrJe9dQY8n7MqEvQK9zEByguX%2BV4wLrDOVNrWQvpmf7uD7N9ITC5bfVoLqxRpf2nY1agQD2%2FdSRDlALZYIYFUCbxBpZJN53k8VgtF6vWU2M9waZ1lr9Aep9IC8XMDgsRrfI1cvI5rwl6aDTSe6rxphWazwnPqnOhC%2BqM38Yqa6Ztxp%2F45UhOArnHO7Q0hU3LcgEGRr%2BIMqr26pYWlWNIr%2BZnRfFmpIuCmAA6bD%2FAGptm82gnp8VzWhwSDoXIrtKzoX0mtdTCBzB3aRb816E5kEINQ%2FfJrJT%2FSEPa0S3GS4obgH5BKKCPbB9hgspCd0Gzk0AA%2BBq4Hj7%2B35ofcc65Ew2IO%2BwAY6pgHaEZ7KkPJ7faGEs%2BRhYAmU4f5UiT2TgvDxuqbyBwZPWTeBsW%2FjX4gJsUzfmDy0nSFUOt8JKV5S1gvJHqsboEMZE24w1KyUZshp2ViAaHYlqA0vtZtfy%2FK2eicy06il6Mdz24234JUB0cNSCoSt7al6P5Axwz3RTlyUVRgREz6DU8QwCCwbdbZCaC%2B2%2BePocR9fIFCGSFaxxGgXA4b0alOlSPyBWGpc&X-Amz-Signature=2420f8f52561a4a0430f9523fdfeeb9aee59d067b997316aef880724342e53c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJTDBCO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDen3ZRI0fJArPwqvUi08J0bxlzslS5nz%2Fe8D0LpawxsAIhAK0%2FV6GrFfr99XZx%2FA3Dyb1mSmPtR223Vp7jbLqHZMshKv8DCHYQABoMNjM3NDIzMTgzODA1Igw9fQAcYpQLXLvsL4wq3APU6A%2B8A8YoKt5tBrEJiKeeF%2B84QFzDPTGWBfNHo2xj07DufAvmIZhCCu7hWLW0FR9Lh3jE0SWNdpni0WKLAc7pjkTUwmfa%2F4ay%2BsEpftdiasvolEyc1uUrz2SO7tuiIUcVyEGrY2ulnktfP60LbhikRi4vbnbuABChjWZkkXAOj4rsfWzRksmwio6V3OpU1nkj6JB5pIf4Bxg3y%2BHkqPxwqWD3gU5iKkJ0rFWuRYAv9gOLYxTBbNMKp9fWclr%2FpJKG1UlhQSwikQfhd4wDOtNI4omu5rC%2BhMjv2zDacHzZ7o1MI59WY3buqn1paIZ9NdlzMCwfnoK5A8TZkmZu5%2FuM%2BDIcvG09AqrL0X%2FDydl0vaBFv9cwta%2FVNbElsVzXnUtJVdRirS12lOAfn%2FN1mSY0YsXsAm3%2FSzeA9vWYDtbtKRLPyxEj6NNYqHKrS78mAHUWp41D2bfWUAMDkWkeFCNrkSh7DUlYG0YSzLeqHXokoUe5vnLVtPfWGOPQve%2FRKExfvJ%2BB1OqwNWEkESDDc30QVAlyynLyZbLBKJb%2BxSLjjOLo%2F2yin%2B%2FYrAMBvu5GLLmUqTdR30H1l07RDMwFLDsUXAcKhiSI9l5G%2F7VkPvyTTOXV5eZSanfnE3quyDDZg77ABjqkAWSaDMUOLJHlEBKUWm6oJ04mSx%2B2HydnVt95Dh0HiHggpa%2FNIyP2TXdB442EjTr2dFt90xmvt0prWIi3GeEGX4Hgc2bwWpN6mgYbwWwLFM%2BQk5YhnKD1HVAv7WZQhSDhn10uEP1UCsE4ggkCG7rbL91iP8g5%2FM%2BTsNakKlXXdpTOoCdXE6id9Dg%2Bjzu5nlrTRuh3qjkGg2urK1Snyrnm8DjKlf9h&X-Amz-Signature=66efcde27136b69d780966a6b4613e102d0f1d096891779207e30a8a2767a5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
