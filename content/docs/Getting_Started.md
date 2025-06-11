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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORG6AJT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHrS1lsRC%2BzcYnTMVs9Rtbmism8sk80%2BKAidEgSKwi0EAiEAv7MPYT4ehzCTUDsL9JU9mUL8kfyxseJTNw%2BQdD8E3Y8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7687AWcC%2BPsRMHyrcA4Nym6%2F0SVOV71sJRv1fv2F%2FzxxjE%2BrM4xcY9o6Jcwg2tnMX72uMaIPoPdZm5W6byv%2FmAO9DP88NcAkczUOD1G%2FBTfLbRSg6jTJhRgE8vuis9bUT2%2FWwSyoaIKnTIW%2FLRoImrgtkl9OaPgxm31WmhoqNKYcZGdB48FMN8Wr5ZlRdAHofBQZK7gIR%2FUDYq2Si%2F3lAs5NJbF93j504JTH7Mn5%2BqbP3wly%2BuPtm5NmrCA5C4DEF6E0FUdWOwhHaAL825T0qGDTPLtNx2LviuJZ88XdZvbg%2FM3Z1gZobrWfAywPdYvKAdexgG7Ropsy8o8b%2BDW5fzYxPUBmOPatLPlsA%2Fvri0DX2FXU6AC2edWX2%2B3fTGkAYWTXFlu6cvtGTsWa5aSyK6bNGXEul2K0rY4a15HinNYcywv3c3C3DAVNfKQnQKlOGWQa9TeUNKNlMqlS4du6mc6axeFqntgEMmfFpW9l%2BoWHJUsJxz3ILRop1xlKFZLQJqYHP1q2pmYVX40wSliRzqIfFzc1ju%2FvRsx9JHYSv1A432hBTpq7kw9ECuJ1%2Fb4QPlQNP03HbVYxZ6NFHs4ZbeRypMXVi0UgAqLUF2Ih%2BrdJltDKw1dww%2BZpFDQn6Syo7vP8%2BLjLyznMkMNeGqMIGOqUBXTxRKWcKM6hCc5Eacc8X5SrLgb4DBl74ZdixJ%2FeQsN0FAberqg79GFMf6%2BkVJ%2Fv3JRcj1MmFN5Siz%2B2w4dnRyQ33mdrUpTELGSeXqto4siChOSrl9qrojXfTG8JQRgL96W6nE3LFFocbs%2Bia8HQIe%2F5jW1stbn1Uqf%2FJGbNcVKKYaYQcQy9HAz3%2BP1JVwwOINKS%2BAApchjnrY8UmI%2FdqiNK%2Fc43d&X-Amz-Signature=25abc0f48bf6c1fe91b336beb6fcac771a9af087c3964d02af5c85c7f6e62549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORG6AJT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHrS1lsRC%2BzcYnTMVs9Rtbmism8sk80%2BKAidEgSKwi0EAiEAv7MPYT4ehzCTUDsL9JU9mUL8kfyxseJTNw%2BQdD8E3Y8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7687AWcC%2BPsRMHyrcA4Nym6%2F0SVOV71sJRv1fv2F%2FzxxjE%2BrM4xcY9o6Jcwg2tnMX72uMaIPoPdZm5W6byv%2FmAO9DP88NcAkczUOD1G%2FBTfLbRSg6jTJhRgE8vuis9bUT2%2FWwSyoaIKnTIW%2FLRoImrgtkl9OaPgxm31WmhoqNKYcZGdB48FMN8Wr5ZlRdAHofBQZK7gIR%2FUDYq2Si%2F3lAs5NJbF93j504JTH7Mn5%2BqbP3wly%2BuPtm5NmrCA5C4DEF6E0FUdWOwhHaAL825T0qGDTPLtNx2LviuJZ88XdZvbg%2FM3Z1gZobrWfAywPdYvKAdexgG7Ropsy8o8b%2BDW5fzYxPUBmOPatLPlsA%2Fvri0DX2FXU6AC2edWX2%2B3fTGkAYWTXFlu6cvtGTsWa5aSyK6bNGXEul2K0rY4a15HinNYcywv3c3C3DAVNfKQnQKlOGWQa9TeUNKNlMqlS4du6mc6axeFqntgEMmfFpW9l%2BoWHJUsJxz3ILRop1xlKFZLQJqYHP1q2pmYVX40wSliRzqIfFzc1ju%2FvRsx9JHYSv1A432hBTpq7kw9ECuJ1%2Fb4QPlQNP03HbVYxZ6NFHs4ZbeRypMXVi0UgAqLUF2Ih%2BrdJltDKw1dww%2BZpFDQn6Syo7vP8%2BLjLyznMkMNeGqMIGOqUBXTxRKWcKM6hCc5Eacc8X5SrLgb4DBl74ZdixJ%2FeQsN0FAberqg79GFMf6%2BkVJ%2Fv3JRcj1MmFN5Siz%2B2w4dnRyQ33mdrUpTELGSeXqto4siChOSrl9qrojXfTG8JQRgL96W6nE3LFFocbs%2Bia8HQIe%2F5jW1stbn1Uqf%2FJGbNcVKKYaYQcQy9HAz3%2BP1JVwwOINKS%2BAApchjnrY8UmI%2FdqiNK%2Fc43d&X-Amz-Signature=9fed97f9cb9332812fcd87ab9da3c8d39614ed6b2514c530a3008ece70126caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORG6AJT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHrS1lsRC%2BzcYnTMVs9Rtbmism8sk80%2BKAidEgSKwi0EAiEAv7MPYT4ehzCTUDsL9JU9mUL8kfyxseJTNw%2BQdD8E3Y8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7687AWcC%2BPsRMHyrcA4Nym6%2F0SVOV71sJRv1fv2F%2FzxxjE%2BrM4xcY9o6Jcwg2tnMX72uMaIPoPdZm5W6byv%2FmAO9DP88NcAkczUOD1G%2FBTfLbRSg6jTJhRgE8vuis9bUT2%2FWwSyoaIKnTIW%2FLRoImrgtkl9OaPgxm31WmhoqNKYcZGdB48FMN8Wr5ZlRdAHofBQZK7gIR%2FUDYq2Si%2F3lAs5NJbF93j504JTH7Mn5%2BqbP3wly%2BuPtm5NmrCA5C4DEF6E0FUdWOwhHaAL825T0qGDTPLtNx2LviuJZ88XdZvbg%2FM3Z1gZobrWfAywPdYvKAdexgG7Ropsy8o8b%2BDW5fzYxPUBmOPatLPlsA%2Fvri0DX2FXU6AC2edWX2%2B3fTGkAYWTXFlu6cvtGTsWa5aSyK6bNGXEul2K0rY4a15HinNYcywv3c3C3DAVNfKQnQKlOGWQa9TeUNKNlMqlS4du6mc6axeFqntgEMmfFpW9l%2BoWHJUsJxz3ILRop1xlKFZLQJqYHP1q2pmYVX40wSliRzqIfFzc1ju%2FvRsx9JHYSv1A432hBTpq7kw9ECuJ1%2Fb4QPlQNP03HbVYxZ6NFHs4ZbeRypMXVi0UgAqLUF2Ih%2BrdJltDKw1dww%2BZpFDQn6Syo7vP8%2BLjLyznMkMNeGqMIGOqUBXTxRKWcKM6hCc5Eacc8X5SrLgb4DBl74ZdixJ%2FeQsN0FAberqg79GFMf6%2BkVJ%2Fv3JRcj1MmFN5Siz%2B2w4dnRyQ33mdrUpTELGSeXqto4siChOSrl9qrojXfTG8JQRgL96W6nE3LFFocbs%2Bia8HQIe%2F5jW1stbn1Uqf%2FJGbNcVKKYaYQcQy9HAz3%2BP1JVwwOINKS%2BAApchjnrY8UmI%2FdqiNK%2Fc43d&X-Amz-Signature=f2d7c9f4e5737937ab19fc9ea8a43a78c5fb827da7a130bdd840ea25e3549953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXK6V2L%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCs6qZHVYwVDIoOu6hCAbLiD3G%2FoObH5Q%2B2f2ueywZMsQIhAOWI9WblQXP8pvWEMjWrZLkB4tLR%2F42Q3sIbh3hFw8VfKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQqBUAyXGCnntZTHwq3ANbgeDEow4u%2FvK4jHYc3bS%2FQiSgDpnnWW1q3krCLs2tcrEVFvBAtI2OOTrTxTYhoTevllmHHrFmHc8RThrx4uZQNNtDgOg%2BXs4Rs2wZvxoS00A2ZP6DWSR%2B%2FFRyNwMSLJFJrHNbu8NoBqGfWYp4p3tEHhNB4iAE4LOrZ1CO3bG3Nz6guE%2FYT6U4375hwX6iav%2FeEi9o74lQdzmdlxK8h8okLWSvtnqbr78E45hTVw11F15rQhU7smYGOf8OUtnfDfInEu3F%2BTnazBoa8uN1H8tRJbmBjZvtXxpZkWiz7s1fEbb8rzQsGBol7PE0OxNaomAy5PNBVMC6sQCYvgL83qyIyAgAghzJj4c1L7kp2Wusu0%2Bc2ZeSVwo7c8%2Fr0DXrU4FPk4BdVM5U1S9SpLxzAEZTu0ioEgCTY33ryJSQrP2K894i9vILDUXaew%2Fb%2FpBZUv7lnsf%2FpQ5UmrKtrmuYJ%2B11A3hH24tqhGciP3EUoyyvSPI1zcQQJn%2F4sOGU52ZclF%2BFS2ljXH7TqHpivL13ZgZteay9ZxRlMbP4uOUHymeKMjzCWSJ1BczAgCsip9FmMtYEG4gaa0gi%2B%2BX0ThSYxgM3k3MFf1UE4zAg9aivRdQNZ2rNgI8QYS3iJhDwgDCthqjCBjqkAYfgtdT42Vcchq3RARCsg%2BzSHDPmAb8qtpDbc4KtHiFwk7ZxAgIChYb9SFnEfvJAbPF0W2gcHbqmetdXxUfmJVhPTiqt6TIH9dQl3CgIRdE4WIkR7red0EuRB4HVBcFP7v1WzC%2FQI1U7wC1AgUgKnzjlcJeQGdDQ4WWk6%2B0cRMSrolwph6EZKZ3MeLJK5x2%2BqlQasyJibI%2FNzW7mGogQVibnra%2B1&X-Amz-Signature=dbcdb57669216566eac312cfdcc8da262b65c33a504067ee0ce4270993ea9d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662URRR4ZE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICWiF4HP%2BAFPdb2IxFJB%2Ff7qu72g%2FE3WVk5KzdJtGkqkAiB8kTGgiIDhqbr8FdhiiY0N4QafTbYHSqazqA1LjpotUyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdHNv3JINZXv6t1GVKtwDm5ee1Q9Fq0H8H4N3A6O1bkahjjc8lh%2BeNThztNNnv95VfJffPfhZggwaXj8wXzg9hVY0LFzQhzf4sP5YgHaaZzzY%2FyAO2CL6YmrEu3Grdytuzp%2BChYO5NtLiQharXN68nk7xf30ywInscamgtvqGoNrb4X4WiAJXwH373Itf1CE1rSenJK%2Fw6qoAUWIeDAxeSETK4xmLpqughxKdA3Cu7tfH6xsQ7dw3VI7CV9308rm3YZD921CKQwSg4k1mIv2awAbxZqzRpuaNXxnXVkT9K2%2Fv%2B0AfX%2B30lUsEtehVxW0QZXEWxS2K5z5jWNBYxMKemZMEABwcPSW0H6O839pJuh975B5NEvndpfyaTrMakJdb7KRKDP0j7qLkTnVMtHuMJNCasf66lUGr%2FzT8lrIYMER6NzVrJ%2FwN1%2F0Rve59gH9NGh%2BKjnUPKi5FdMvw1d7updlzWe%2F4t0Zgt9PSimNkueOxufbmaX%2Fwf4LinroBgHTVCNxtg66G9asX89P2ZdBD7MXGLt9KDgpNHzfdCy0rWZqxiqa8gfUItkc22zSFqsqDOxC6P%2FI6zH7c%2BmSZkSXj%2BJNR0g%2FeLVrAqKphVO%2BJToI1U4NQzwSkoWLmQVm8KPVDyDDug3sm9n7%2B5Asw94aowgY6pgGMjlauOo7osEYnwMwF%2FAcAcPDqYffaICvB9%2B5n8rQt0Kw8A5so5UPBbY0KJtrdfoNM3WZQMg3I2Op%2BpVhIn4j9Oos61Adc%2B9QmVAxLlmT70SmvLS0gKtCnb3zhQj50qaTx5khU9Hj4H0VNrc50nOlOsPeVyGS7ILAmz7N7LRR3Xzp0B2KS4n6QQ3zede6jRiIg5AnbHLllIMAfMt1KU2dDOdJu2lRN&X-Amz-Signature=bd00958006895185ad1c43bddd88a5db802ee0979bd86e9826606c2475cb72ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORG6AJT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHrS1lsRC%2BzcYnTMVs9Rtbmism8sk80%2BKAidEgSKwi0EAiEAv7MPYT4ehzCTUDsL9JU9mUL8kfyxseJTNw%2BQdD8E3Y8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7687AWcC%2BPsRMHyrcA4Nym6%2F0SVOV71sJRv1fv2F%2FzxxjE%2BrM4xcY9o6Jcwg2tnMX72uMaIPoPdZm5W6byv%2FmAO9DP88NcAkczUOD1G%2FBTfLbRSg6jTJhRgE8vuis9bUT2%2FWwSyoaIKnTIW%2FLRoImrgtkl9OaPgxm31WmhoqNKYcZGdB48FMN8Wr5ZlRdAHofBQZK7gIR%2FUDYq2Si%2F3lAs5NJbF93j504JTH7Mn5%2BqbP3wly%2BuPtm5NmrCA5C4DEF6E0FUdWOwhHaAL825T0qGDTPLtNx2LviuJZ88XdZvbg%2FM3Z1gZobrWfAywPdYvKAdexgG7Ropsy8o8b%2BDW5fzYxPUBmOPatLPlsA%2Fvri0DX2FXU6AC2edWX2%2B3fTGkAYWTXFlu6cvtGTsWa5aSyK6bNGXEul2K0rY4a15HinNYcywv3c3C3DAVNfKQnQKlOGWQa9TeUNKNlMqlS4du6mc6axeFqntgEMmfFpW9l%2BoWHJUsJxz3ILRop1xlKFZLQJqYHP1q2pmYVX40wSliRzqIfFzc1ju%2FvRsx9JHYSv1A432hBTpq7kw9ECuJ1%2Fb4QPlQNP03HbVYxZ6NFHs4ZbeRypMXVi0UgAqLUF2Ih%2BrdJltDKw1dww%2BZpFDQn6Syo7vP8%2BLjLyznMkMNeGqMIGOqUBXTxRKWcKM6hCc5Eacc8X5SrLgb4DBl74ZdixJ%2FeQsN0FAberqg79GFMf6%2BkVJ%2Fv3JRcj1MmFN5Siz%2B2w4dnRyQ33mdrUpTELGSeXqto4siChOSrl9qrojXfTG8JQRgL96W6nE3LFFocbs%2Bia8HQIe%2F5jW1stbn1Uqf%2FJGbNcVKKYaYQcQy9HAz3%2BP1JVwwOINKS%2BAApchjnrY8UmI%2FdqiNK%2Fc43d&X-Amz-Signature=74e20076161a451c2c8013a036680cad62b548257345b4e782005a9fd612fcab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
