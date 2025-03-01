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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLLVHLE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAzDujZqMW9VF%2Bs4YW8%2FhefFTLgs7NjWIntVImpIZ%2BMkAiEAudsATn9WuZPslHnxbu7X5P1Of%2F%2FjC%2BFvb3bFdCgZ%2F64qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKdSgywQSBI%2FNoAeCrcA6TpjvUkvzRMVjkZXujQooQY9WiQOMHMmpyQZOxJSq9nH4pp2iF5%2BbedPHDtTeCmfCZQj0o9vdR6ufBMJhdPTaWhh18Kf9LMcfaobJNjqKT9BXM8RPc%2Ffi6%2FZ9xBio0SDUMGlcXHiTy%2Ba%2Bzz2XoGcFHbJXAzVOvW1%2BvL54O%2FyqDaLVJ9NlyRIF2n1bT1LzbDzOg81ldRLEhY0Yo%2BR41Aqkes%2BJ2FGN084kwSWmjiXB%2BffdneU0Wpt%2BVGqjUvRCljGw1WAdcKkxn4KoJK9XmcliM2QhDjQnI8%2BLJEgmyA4ODS%2FzpJ%2Fq3AYqvhY2W2GTTZfkT6FzpOfWDYD4tPXHht2lcF16eZ1VBt%2FB%2B0Oyi3%2BV4wt1DwG3498fbMDi6jkLFMuw8CDfvlHleNOJxxY1VpoeQyN4koxIdbfEIIVZMoFR9Dvl151CuhEGAXSYLUCWvTh2ILxLuh1Nw2YVyjI%2BZiq6HoBDVtUSxu2SuQ4QKRgVCNOOpDYfQbbIbS2rIo%2FwSSqNAB1BMht0zu1orxl%2Fd2gcJU6bHs8lywSSKxfKpVTV7HWsT%2FmvgpP%2FH4PxFxRbGUQm2ErBl9BXTln05vaCHl4rztfFghtRKeGLeB4YiJ%2BlECet5PNRqKtkWKPWR5ML2Qir4GOqUBOngxjRVE%2FOGFSiV4dvRBo5ttz%2FZEdDElUfnK4zRzSqPUQnTAd8I6to%2BK2%2BNtZvGbHAGmDcuhlKvBZjsVU7ot4L02B3R%2B4dda%2BsT5RTVMDZxDxI46p%2FbGN7wkOixsPBvTG1f4BzjmELe71vmhanWhjliQai1MMxo1PK6poC2F98JYOlXavPFVbnj6glaM%2FM33LxMZj9TZttfnCiYcrhgzINtckNe7&X-Amz-Signature=0380436485df1563429e4a15aebb63f71b8051b07f6300d1710a6d7379911018&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLLVHLE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAzDujZqMW9VF%2Bs4YW8%2FhefFTLgs7NjWIntVImpIZ%2BMkAiEAudsATn9WuZPslHnxbu7X5P1Of%2F%2FjC%2BFvb3bFdCgZ%2F64qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKdSgywQSBI%2FNoAeCrcA6TpjvUkvzRMVjkZXujQooQY9WiQOMHMmpyQZOxJSq9nH4pp2iF5%2BbedPHDtTeCmfCZQj0o9vdR6ufBMJhdPTaWhh18Kf9LMcfaobJNjqKT9BXM8RPc%2Ffi6%2FZ9xBio0SDUMGlcXHiTy%2Ba%2Bzz2XoGcFHbJXAzVOvW1%2BvL54O%2FyqDaLVJ9NlyRIF2n1bT1LzbDzOg81ldRLEhY0Yo%2BR41Aqkes%2BJ2FGN084kwSWmjiXB%2BffdneU0Wpt%2BVGqjUvRCljGw1WAdcKkxn4KoJK9XmcliM2QhDjQnI8%2BLJEgmyA4ODS%2FzpJ%2Fq3AYqvhY2W2GTTZfkT6FzpOfWDYD4tPXHht2lcF16eZ1VBt%2FB%2B0Oyi3%2BV4wt1DwG3498fbMDi6jkLFMuw8CDfvlHleNOJxxY1VpoeQyN4koxIdbfEIIVZMoFR9Dvl151CuhEGAXSYLUCWvTh2ILxLuh1Nw2YVyjI%2BZiq6HoBDVtUSxu2SuQ4QKRgVCNOOpDYfQbbIbS2rIo%2FwSSqNAB1BMht0zu1orxl%2Fd2gcJU6bHs8lywSSKxfKpVTV7HWsT%2FmvgpP%2FH4PxFxRbGUQm2ErBl9BXTln05vaCHl4rztfFghtRKeGLeB4YiJ%2BlECet5PNRqKtkWKPWR5ML2Qir4GOqUBOngxjRVE%2FOGFSiV4dvRBo5ttz%2FZEdDElUfnK4zRzSqPUQnTAd8I6to%2BK2%2BNtZvGbHAGmDcuhlKvBZjsVU7ot4L02B3R%2B4dda%2BsT5RTVMDZxDxI46p%2FbGN7wkOixsPBvTG1f4BzjmELe71vmhanWhjliQai1MMxo1PK6poC2F98JYOlXavPFVbnj6glaM%2FM33LxMZj9TZttfnCiYcrhgzINtckNe7&X-Amz-Signature=da0d0fe18442a063697473ba4a57bc87bebfea8e785f9f00bd4fe531c044eef6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJRD2J4H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDQc4Z5sLJG81EMcrkx1Ovg8hGRzvy8s4uRZii5E%2Bu6awIhAPa5xoxu0QmAEg5FwHVUp5JgJoDNymlk1F%2F13sjjhJsJKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdYOWbRNG1w0xnr0Uq3AOGhnIbBzFLe%2B5T3ezCKb%2FlxL1kq4sk3FIxSBAfsjDVvv9FLGxcsK8wQQKxgOFuWne%2F58WMCpcaMwcprK5am7kzi0rCENsopGQWf67%2F75HmX0ULIekS9UNdo%2FM2TIaVcr9sT4NEYHDb7DhOqA%2B7yI4zZvr51XATu9B4B%2FKBZ9RrnZN8u3AsUGirfRxc0Q7mNZmhtneqdWxI54o%2BOZ%2BZC%2FVtP%2BMxK47g5Us%2F8U5lbXBKlRUVur0rIol5u2jIZ9CivjWjaXwnbUHzlHTHO5E7vapeojhP2MSri0SImj3jwu%2BnDtriApvd%2B6LbyFFD9tmUJsq678gN5%2Fe0QqqPtv6sbbtRWmQRIGFr7TT6VH1kRZbgJJ9ARNf%2FOcU7gR4qfi02IiH610Otd4Xr5JYzQ2cIBzmvuWEDFp4BIersl790GTilDwfWsH0aBI6beR%2FCr%2BCKnLZAg9a7twNUaOrXwGghfqjsb6IKvxg00ZOtbc6YK2DoUsT7WgzGXNObcAAOQC2dx9EC7wDhFaH07zyYVA%2F12OgmnXjJZ8ErYXl3za1vhyXsh3MnWcHC%2B61EziNFJz%2B7RJ7eqJkSfpzv5tzvyYm%2FznqAv3odrkjZwp9U1IlWTIwCaKvn05DZ9%2Bc9%2FPJf5TCfkYq%2BBjqkAYH6YA2zKiFtRNyjFM8frcfEbL7kPA%2BHNQ8qdIOzlRXauc1lIw9THdYC4Kub9xygPLnm8XAYncta1mLrZjc6ThoAz4T9j%2Bo2%2F9BqNBXLiiBka2bTTaLDAARFmu7JntiQzdm3RuUDq6f5gND3dB6IDaTlkSADtOKuZZ1bJzaXcyzyRxAKyCBxm1hJPnUphmVXjmH1KbrvchLbYm8J%2FOusMEnWS7ck&X-Amz-Signature=188bc8d174707b3b5b1526670e6e1bc988652fd00dddf8ada790c4bd26c15516&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5X5YTMS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGc%2FdFmexeieGvtqDS%2BMemXmpCWRyBxQ8RLhj%2BrnG57GAiEAhfXR2621nku9WylNYBX3SuM2uCTVZNQ%2BPC1ksUOYvz0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0JxpitjdspEjIccCrcA4%2BkcR4IDkj8d30d7a7KGEZbpdgdrKGhzX9MCukz1Q8mJ7fn6TX0FhDR8jgaIAyBpNccRnUKjE%2F1HjcCk%2BakqmvSutS1cOmCJ8R9oc0mZf0wif%2BR8Q7YQJpMfjQkvCEUbw5M1pDY63uvsOEb3c2pFMdHcibU0jkRfaVPl80sVyGUmFITQeewunCbq8NbRxGf3pfpbnD%2B1NqTR4UznVXvY4b2%2BJi1CWbwYUSdFlnyVIXLJgI1PMJYK9drztjLRyk6OQLY3coYnIn3QFQjijTBRlNg76iw03l8kcTO2CYCdFHXqVZ1V7B8vZVT9omDPfBd5eKqkrRx69jK%2FLsI22kmaH5ClzW85pozT%2FRrcYQB5U5JqBkHXj6Y%2F7yNhfxhV9ooer2BzVWQ8mlbUvYjzLr6jNOytPvFixBLii11ytILcFj%2F3n5WhkI74Uq82wNs07rsHb7lyh14pZOTocL6wJ%2BY2swIt0Fu7RyW4Vc4FKSAw87152N9sbeTYLW%2FQCNWYLSEbWYJqPzQeWiMxy01QQFQM0JchE2HmrNLGlC0SX4d9WQho2HXTrF789X%2FhPowX2og%2FSIXX220Jf5Ssq5QkbqmTpYWidmMI51GpdlzcUCmoBsluJM1x08VGokeNgLDMM6Qir4GOqUB3gGf8lU0AJvM%2BnVPMGUUo%2BzCacdAMPyhkNDjrFvB%2FGhJRVqaCfVBF6nuN61cEtWepO1veNPe%2BFob%2B4hziKgvxVXsW9lu8SO2iY2TVDCgtREvnoxUW7Xc4WplgBr0zdU%2BKDtG8Wn8Eoa%2FhVcu7SB2zKzuIHYcMvBu%2BUibDS6HArMaDIiBYuOc2Ko%2BanPpR%2FWV1XgE2sqsCS9FJkI8vblxlUPrQaxt&X-Amz-Signature=508c98ab54ef8a8e83ce35356e1f85e6536664d50b15b1925987c836ef7c9988&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLLVHLE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAzDujZqMW9VF%2Bs4YW8%2FhefFTLgs7NjWIntVImpIZ%2BMkAiEAudsATn9WuZPslHnxbu7X5P1Of%2F%2FjC%2BFvb3bFdCgZ%2F64qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKdSgywQSBI%2FNoAeCrcA6TpjvUkvzRMVjkZXujQooQY9WiQOMHMmpyQZOxJSq9nH4pp2iF5%2BbedPHDtTeCmfCZQj0o9vdR6ufBMJhdPTaWhh18Kf9LMcfaobJNjqKT9BXM8RPc%2Ffi6%2FZ9xBio0SDUMGlcXHiTy%2Ba%2Bzz2XoGcFHbJXAzVOvW1%2BvL54O%2FyqDaLVJ9NlyRIF2n1bT1LzbDzOg81ldRLEhY0Yo%2BR41Aqkes%2BJ2FGN084kwSWmjiXB%2BffdneU0Wpt%2BVGqjUvRCljGw1WAdcKkxn4KoJK9XmcliM2QhDjQnI8%2BLJEgmyA4ODS%2FzpJ%2Fq3AYqvhY2W2GTTZfkT6FzpOfWDYD4tPXHht2lcF16eZ1VBt%2FB%2B0Oyi3%2BV4wt1DwG3498fbMDi6jkLFMuw8CDfvlHleNOJxxY1VpoeQyN4koxIdbfEIIVZMoFR9Dvl151CuhEGAXSYLUCWvTh2ILxLuh1Nw2YVyjI%2BZiq6HoBDVtUSxu2SuQ4QKRgVCNOOpDYfQbbIbS2rIo%2FwSSqNAB1BMht0zu1orxl%2Fd2gcJU6bHs8lywSSKxfKpVTV7HWsT%2FmvgpP%2FH4PxFxRbGUQm2ErBl9BXTln05vaCHl4rztfFghtRKeGLeB4YiJ%2BlECet5PNRqKtkWKPWR5ML2Qir4GOqUBOngxjRVE%2FOGFSiV4dvRBo5ttz%2FZEdDElUfnK4zRzSqPUQnTAd8I6to%2BK2%2BNtZvGbHAGmDcuhlKvBZjsVU7ot4L02B3R%2B4dda%2BsT5RTVMDZxDxI46p%2FbGN7wkOixsPBvTG1f4BzjmELe71vmhanWhjliQai1MMxo1PK6poC2F98JYOlXavPFVbnj6glaM%2FM33LxMZj9TZttfnCiYcrhgzINtckNe7&X-Amz-Signature=58e9ada46da7beb095c67f3645a5a2e39e0c01c9d251cc12bd472c2cea9c2dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
