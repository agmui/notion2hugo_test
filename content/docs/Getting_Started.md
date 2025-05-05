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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LEJN7A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdZHY%2BfkC4M9gRhPYrBhxYS1kRjraePXnTjC%2BHNsQNOgIgX3RSPdZCOvvM7I9gI%2FNYKSN2lzsEi%2FHR9TGXKE%2BkLdIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNCecdUhVKDXlPGa2SrcA87xTkafVnaV79NRJ48NfeSS0ukE6Yw36Ix5QTC1dUqaDCQiDqcBlJxlJXfRkg4RFY2b54DrRmM5DDfjD0RVM7zx99yiJRPOFVlG6AFsf8ZJPtXvTVgrJ47xkamIVRUFnGYQT7LkvfNTfBXNibLJ0I6S2%2B%2FuQjDKZEB280hKFc2%2FPSWavaWmCvBz8tC4T8uQ0aQZ0bn9ybs26ujHcRZGYuVFxWTqxM6798JFxvQy5FDKlJO86csD%2Fb24ghpQgKlXfX2KwTgTrIKsj9wJhKucyoZVSg65qT8ujGD9fVEmuS3rYcbnhIYeK1KjpG%2FGELjGJ78Yuw5gUSJHup9jUU%2Bc3%2FboTJwLXKamSH4NQKywu2Fcy4Qox6Ruj9D9CtMWnJ%2FPQcp5w7%2BeAbRnZSVpYF%2BEmzozMyFULuo9opb6gP7LxMYzYdtxPK4ny2DvEokRSkZNg8iwll87F1S3m9kU60LjhrEyExOyWknIFNsQxA56WZDE1RY%2BdctUYH3scZl7xllUxuYz2wSbx2VuFnwK8%2BsRl761yLr4AM8Bi2k45obp2YwtfeQirGCi0v2Y9JjWFMN5WwiOqyrjv5e7l3CmxHwK4keL4nQQBSkGzq1gL8me23modqxWg%2F9T2g%2FSOYn1MJGX48AGOqUBJRkI0u2ulSgSxncj3pWt%2BOVoW6E010FRQAZOKGdbr8BPSEAw69HHWzYne23mIP%2BNP1%2B2CoFNOPFV2cF7kQBxqcopmRUFeubVNOmlGKtacn0HKE1x4mCKSSU%2BT1fcRfLJKmGQuEtwg0AdK80fN0OYBLtPRnwmlCXPz%2B4GrQvdTtVr0QsUvrVe2e%2BIzHjcfeq6BBC8nKNMFl8g9pwppw8J%2FriJ7NZ6&X-Amz-Signature=46605d48513a9a1d718e0278437c24d67187443fec3882d84e2852f79bee5c67&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LEJN7A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdZHY%2BfkC4M9gRhPYrBhxYS1kRjraePXnTjC%2BHNsQNOgIgX3RSPdZCOvvM7I9gI%2FNYKSN2lzsEi%2FHR9TGXKE%2BkLdIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNCecdUhVKDXlPGa2SrcA87xTkafVnaV79NRJ48NfeSS0ukE6Yw36Ix5QTC1dUqaDCQiDqcBlJxlJXfRkg4RFY2b54DrRmM5DDfjD0RVM7zx99yiJRPOFVlG6AFsf8ZJPtXvTVgrJ47xkamIVRUFnGYQT7LkvfNTfBXNibLJ0I6S2%2B%2FuQjDKZEB280hKFc2%2FPSWavaWmCvBz8tC4T8uQ0aQZ0bn9ybs26ujHcRZGYuVFxWTqxM6798JFxvQy5FDKlJO86csD%2Fb24ghpQgKlXfX2KwTgTrIKsj9wJhKucyoZVSg65qT8ujGD9fVEmuS3rYcbnhIYeK1KjpG%2FGELjGJ78Yuw5gUSJHup9jUU%2Bc3%2FboTJwLXKamSH4NQKywu2Fcy4Qox6Ruj9D9CtMWnJ%2FPQcp5w7%2BeAbRnZSVpYF%2BEmzozMyFULuo9opb6gP7LxMYzYdtxPK4ny2DvEokRSkZNg8iwll87F1S3m9kU60LjhrEyExOyWknIFNsQxA56WZDE1RY%2BdctUYH3scZl7xllUxuYz2wSbx2VuFnwK8%2BsRl761yLr4AM8Bi2k45obp2YwtfeQirGCi0v2Y9JjWFMN5WwiOqyrjv5e7l3CmxHwK4keL4nQQBSkGzq1gL8me23modqxWg%2F9T2g%2FSOYn1MJGX48AGOqUBJRkI0u2ulSgSxncj3pWt%2BOVoW6E010FRQAZOKGdbr8BPSEAw69HHWzYne23mIP%2BNP1%2B2CoFNOPFV2cF7kQBxqcopmRUFeubVNOmlGKtacn0HKE1x4mCKSSU%2BT1fcRfLJKmGQuEtwg0AdK80fN0OYBLtPRnwmlCXPz%2B4GrQvdTtVr0QsUvrVe2e%2BIzHjcfeq6BBC8nKNMFl8g9pwppw8J%2FriJ7NZ6&X-Amz-Signature=4884150d10bab2ec20bc2890b340414851aa75367b3dc3b04ab96fbac72f0248&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LEJN7A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdZHY%2BfkC4M9gRhPYrBhxYS1kRjraePXnTjC%2BHNsQNOgIgX3RSPdZCOvvM7I9gI%2FNYKSN2lzsEi%2FHR9TGXKE%2BkLdIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNCecdUhVKDXlPGa2SrcA87xTkafVnaV79NRJ48NfeSS0ukE6Yw36Ix5QTC1dUqaDCQiDqcBlJxlJXfRkg4RFY2b54DrRmM5DDfjD0RVM7zx99yiJRPOFVlG6AFsf8ZJPtXvTVgrJ47xkamIVRUFnGYQT7LkvfNTfBXNibLJ0I6S2%2B%2FuQjDKZEB280hKFc2%2FPSWavaWmCvBz8tC4T8uQ0aQZ0bn9ybs26ujHcRZGYuVFxWTqxM6798JFxvQy5FDKlJO86csD%2Fb24ghpQgKlXfX2KwTgTrIKsj9wJhKucyoZVSg65qT8ujGD9fVEmuS3rYcbnhIYeK1KjpG%2FGELjGJ78Yuw5gUSJHup9jUU%2Bc3%2FboTJwLXKamSH4NQKywu2Fcy4Qox6Ruj9D9CtMWnJ%2FPQcp5w7%2BeAbRnZSVpYF%2BEmzozMyFULuo9opb6gP7LxMYzYdtxPK4ny2DvEokRSkZNg8iwll87F1S3m9kU60LjhrEyExOyWknIFNsQxA56WZDE1RY%2BdctUYH3scZl7xllUxuYz2wSbx2VuFnwK8%2BsRl761yLr4AM8Bi2k45obp2YwtfeQirGCi0v2Y9JjWFMN5WwiOqyrjv5e7l3CmxHwK4keL4nQQBSkGzq1gL8me23modqxWg%2F9T2g%2FSOYn1MJGX48AGOqUBJRkI0u2ulSgSxncj3pWt%2BOVoW6E010FRQAZOKGdbr8BPSEAw69HHWzYne23mIP%2BNP1%2B2CoFNOPFV2cF7kQBxqcopmRUFeubVNOmlGKtacn0HKE1x4mCKSSU%2BT1fcRfLJKmGQuEtwg0AdK80fN0OYBLtPRnwmlCXPz%2B4GrQvdTtVr0QsUvrVe2e%2BIzHjcfeq6BBC8nKNMFl8g9pwppw8J%2FriJ7NZ6&X-Amz-Signature=b84db18eb17f0af37a8db43e330de0d18c05ac3adc813a543d935b6d3d1be690&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZC75XN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOROBy%2F3hcgNDZGh3TVY%2FxKMiNACNdnPy%2Brl5IeMKzDAiEAulIt36RWNapHZJAGulcMcrigUeByYd5G58Pa8jzeX3Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDBbFDdBK9%2F5tracZ8yrcA7PtBOtWm8uVseAe2bj95V2sm1FEqz3LoHeO744cHxlz%2BqekVaoDU1cirMSiAWFWHdjvwO4A%2Bss9QW9NJPWsPxxYq4DvvcBgcXH%2Br3Ee3izJGBPwjqy26tYJZoNRiImTNvaItF359NfwWCnXYnm6IksiuWGPqRBvxqTNqjYCcA06cOOMX3y27A%2BZvYAVESmivfu2h7lUVd380BCk4WYwgcz2mkP%2Bx5pIi8qAJqQKlFzXfu2bZtPyrN7RUnGxUj%2B0ekSwQnSmW5h3yM2A2ZxtG1Q3jkeIdY1jRuavrXQA375qrn%2BLUcRBScdXk0mOSCc2zSuGYBg3PHLqXelAV7SRhvYrhdV17ws%2F7VX6GprDz%2FWqYBFYqnQ3YzU2upkudB7FSQ%2FLvuH%2BQXtKwMWvpElQBzIba1wsXTCGQcuRVADjE101gYzym2MGApyuB0NTZxR9wSrmVX29NzVHZa5yEq8OhvN4NsY9hBG8TW3Ch3tNodmgohmIeD0ZhpIhaAnemKVmjQYo0DbqadclhsofEBv%2F5Wspi2SV5iZoRow4gPDngStvqdj0mufrzbCEl91F1WiCL2GPcITGTBN4w9tj4x7kKJ8yAF64P3WHC2GmtmoprL6JMm8UYPLKDQtvLvQrMP%2BV48AGOqUBLIGhRF5%2F4TRlvzTQtvfizSnk5tXM3uqaADKQhOsSkP4aqrGaj0jb%2B30pqYw%2FP%2B6XsusVXh1aQBk8U6SL%2BiWys4XS0sXYJAFF5b6L%2BB%2BFdobf9sXb05hqRmPW6GW3lo5W9lbKLTprcXr%2BdtgM%2BNCNxgThgaBWKteOcuL1mdkUyeMatENfyHZWLQKBUbSVfSmtFynCQxEahL994QNaj56RhBVehhSm&X-Amz-Signature=4a5b334e4f43ba46e1b576a842f23717a3074b8935a9604358c2b46c5d68f3fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USM6DFRQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDArCpSFPNPuU5GSangqbZoEgOKB7VFjb8zW5SmLrEsAIhAJnUY9UrXrO%2BL3%2BA4atD4AWSUS8VWvbs5oaV%2FmzQ%2BfhMKv8DCDAQABoMNjM3NDIzMTgzODA1Igy1k0I%2FVW35WlM%2B9doq3AOV9im7pu4LUFgPRXZP4KrgKgnebdZAfrceHTTVWO2Xxz81FGEf4GxgRd7fv713guL2a2tbe4w7orafGlTVtNFVntYs66r3Z29JIcbkukVEgVBaEZWZhZvYbqEUU6GIA1WHrrGg3eN69kNTS6cr0DjYwtNM6pp0ZflQTG6pTAtu2QdFoLcW7awpyenwtxIEJND6TALh5w9zpXx9SM3WiD5qvSmFpP9Pz6mB0tlGw9qynx13jNnBHY5ENGIWHorWKy9sPguoQc183%2Bt28q%2Fsl55vz8In95aZ3rhg%2BHXUENjPv%2BdURQP0dEwsbX4iD8AV2fwLFbda4qi0S3ZmMJ%2Fqq5aiozb1y94zHy3BQIMtmr%2F8r5FZVvm%2FZYa%2BD0wCPGCWnlDTluE7SD7lEKQDccK%2Ft%2FNpEZeqDhB5Bc24TbHWOdwqyjn3Fi7jV2KxSQS7Td3IWMnodOPIGSCvPO%2BihG0%2FXjWFHfavWVqxI9Q9xy3wZuDtZaO3wKEiviIt9JQbQHNTF85V9Dmxpq7hbaDZnzga1uzIuJqa69T73INITX5jI%2BJwNd7ahqZYCCFz8gTp8Z6kBZPm9wx%2FK5UOL2px45GJ2oA41fkKkzwp01k2pQpOFkxtannLU2N%2BnVOKFF72ZTCol%2BPABjqkARHWNRPkskI3XrRH4%2BqqCyr5g3q8XyELGfBzrZRhNOKuVkT2QIPJSsoM7Cnd2x3ZGr%2BYoOE%2BvzXfCc5cp2Tvii02VLXlC5JLToITzGUfWEzH3ekdlprvKiaQ%2BfEkMghIN6Hg0Nbof3yaadiZTrFi4NluVLKC7M38TWDyVd98AGS5BVClE91MXRGQXZAnE6OlWsLYa9buSCtkyUz3tJfhKZSKvh2N&X-Amz-Signature=a0f55fb81dc50f88e79c771f0d6a1a98df32cbf9386f91641208513a8a9a3007&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LEJN7A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdZHY%2BfkC4M9gRhPYrBhxYS1kRjraePXnTjC%2BHNsQNOgIgX3RSPdZCOvvM7I9gI%2FNYKSN2lzsEi%2FHR9TGXKE%2BkLdIq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNCecdUhVKDXlPGa2SrcA87xTkafVnaV79NRJ48NfeSS0ukE6Yw36Ix5QTC1dUqaDCQiDqcBlJxlJXfRkg4RFY2b54DrRmM5DDfjD0RVM7zx99yiJRPOFVlG6AFsf8ZJPtXvTVgrJ47xkamIVRUFnGYQT7LkvfNTfBXNibLJ0I6S2%2B%2FuQjDKZEB280hKFc2%2FPSWavaWmCvBz8tC4T8uQ0aQZ0bn9ybs26ujHcRZGYuVFxWTqxM6798JFxvQy5FDKlJO86csD%2Fb24ghpQgKlXfX2KwTgTrIKsj9wJhKucyoZVSg65qT8ujGD9fVEmuS3rYcbnhIYeK1KjpG%2FGELjGJ78Yuw5gUSJHup9jUU%2Bc3%2FboTJwLXKamSH4NQKywu2Fcy4Qox6Ruj9D9CtMWnJ%2FPQcp5w7%2BeAbRnZSVpYF%2BEmzozMyFULuo9opb6gP7LxMYzYdtxPK4ny2DvEokRSkZNg8iwll87F1S3m9kU60LjhrEyExOyWknIFNsQxA56WZDE1RY%2BdctUYH3scZl7xllUxuYz2wSbx2VuFnwK8%2BsRl761yLr4AM8Bi2k45obp2YwtfeQirGCi0v2Y9JjWFMN5WwiOqyrjv5e7l3CmxHwK4keL4nQQBSkGzq1gL8me23modqxWg%2F9T2g%2FSOYn1MJGX48AGOqUBJRkI0u2ulSgSxncj3pWt%2BOVoW6E010FRQAZOKGdbr8BPSEAw69HHWzYne23mIP%2BNP1%2B2CoFNOPFV2cF7kQBxqcopmRUFeubVNOmlGKtacn0HKE1x4mCKSSU%2BT1fcRfLJKmGQuEtwg0AdK80fN0OYBLtPRnwmlCXPz%2B4GrQvdTtVr0QsUvrVe2e%2BIzHjcfeq6BBC8nKNMFl8g9pwppw8J%2FriJ7NZ6&X-Amz-Signature=e09c29b1f145a055f14074a15a2fb5250bbebb3a00ddff848f6bffc031836a94&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
