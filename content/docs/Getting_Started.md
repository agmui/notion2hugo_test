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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KVZH6Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDcYOggIVPu3GLAAJyWR1Wbqt8fbXH7d6dr9uYOf5MOUwIgMAuQZgfet4VNwMxyu6uOpFZOZgVv4grD7haidB6fBxEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACJgrN7mhCazdJNqSrcA6bwY9KIbmgFQv5X9%2FPrBXXZGmPtnCzJk%2BECvBow9TJJwZoC3vbp0nsnENVelQ8kyLGGp3Mu1xDvtedudOSY4oJrt5hstt9uKkeWcLODaSxFKR8idmSazuJW7DICiDIRrwdkD%2F2Sp4AMqqrJ9vaNJLgxayBprwPsAua4aR7LYg%2Bb9%2FnlPaf8DbzBSrtVff%2B22f9jiG05OOf8vSIydNYCNPlrrbsICRLZ0Ykvlc0H%2BPYwdm0pBCMuNLye%2BmbdRGyo73%2F0q7TJ3YuwvZCClnSKwj84hAlf1gA5E5wE6jckf7LXs%2BJAyar4kHxAbAd6kphxwQrs7b5c2g4td1qTH%2FPzsfRCEfIxrjzquaQVXwIWidndP24L%2Fn9tOKe4bLKLcbsIr3qnOT3j4GxuERm%2BXVUn77uybcaW%2F6xbXyIdthHfckKStLA1VrftVWVJXyhRCu%2BmiyMiCzbuBBQ8EQ47qlZWJ7yp%2FTdrXSwiouIn3kBg7YVQ%2BEn6O2S%2Bwgfn%2F2bT5oKuEWVKUsecdaezIjF6vlAWng2oiK8gD6%2FWKWRIE67KCiSjHS638rp61ubQPV5Zb3U%2BpT65AJyRYtFbT0WnnHmJSCtPnGB8jczD3E9PxBxXWUKBtmmdbvxhhkQUiMRSMLrvhr4GOqUB6GyhKJZ9VJ0KmMvpiwo2exmoQ%2ByElu%2F7HM1SwQ48f03Ij%2BzkVEv2yGF6mSj6rSRrbjuuS8mNKwI501KGJf4QnxofX0rU%2FENuGwKucCf2vgfzsxJGHWb8X%2Fp6zNF%2BkZgjdSsb6bOEl1lSJlLKycyIYL7OVJEwiFBDTZbfwB60SZfCN6exw%2FMTnQB5HpDFV2%2BJgZm%2FBj83gSIJHkCqMYcQheLCbEzp&X-Amz-Signature=09bd971981d22c2095f5436b2f38e9289aab1410de7c4e620ea27c92dfbc5443&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KVZH6Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDcYOggIVPu3GLAAJyWR1Wbqt8fbXH7d6dr9uYOf5MOUwIgMAuQZgfet4VNwMxyu6uOpFZOZgVv4grD7haidB6fBxEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACJgrN7mhCazdJNqSrcA6bwY9KIbmgFQv5X9%2FPrBXXZGmPtnCzJk%2BECvBow9TJJwZoC3vbp0nsnENVelQ8kyLGGp3Mu1xDvtedudOSY4oJrt5hstt9uKkeWcLODaSxFKR8idmSazuJW7DICiDIRrwdkD%2F2Sp4AMqqrJ9vaNJLgxayBprwPsAua4aR7LYg%2Bb9%2FnlPaf8DbzBSrtVff%2B22f9jiG05OOf8vSIydNYCNPlrrbsICRLZ0Ykvlc0H%2BPYwdm0pBCMuNLye%2BmbdRGyo73%2F0q7TJ3YuwvZCClnSKwj84hAlf1gA5E5wE6jckf7LXs%2BJAyar4kHxAbAd6kphxwQrs7b5c2g4td1qTH%2FPzsfRCEfIxrjzquaQVXwIWidndP24L%2Fn9tOKe4bLKLcbsIr3qnOT3j4GxuERm%2BXVUn77uybcaW%2F6xbXyIdthHfckKStLA1VrftVWVJXyhRCu%2BmiyMiCzbuBBQ8EQ47qlZWJ7yp%2FTdrXSwiouIn3kBg7YVQ%2BEn6O2S%2Bwgfn%2F2bT5oKuEWVKUsecdaezIjF6vlAWng2oiK8gD6%2FWKWRIE67KCiSjHS638rp61ubQPV5Zb3U%2BpT65AJyRYtFbT0WnnHmJSCtPnGB8jczD3E9PxBxXWUKBtmmdbvxhhkQUiMRSMLrvhr4GOqUB6GyhKJZ9VJ0KmMvpiwo2exmoQ%2ByElu%2F7HM1SwQ48f03Ij%2BzkVEv2yGF6mSj6rSRrbjuuS8mNKwI501KGJf4QnxofX0rU%2FENuGwKucCf2vgfzsxJGHWb8X%2Fp6zNF%2BkZgjdSsb6bOEl1lSJlLKycyIYL7OVJEwiFBDTZbfwB60SZfCN6exw%2FMTnQB5HpDFV2%2BJgZm%2FBj83gSIJHkCqMYcQheLCbEzp&X-Amz-Signature=d3852bfb55a9965e943761153e2b571835b38958748e91b45f57cdb3417832fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNABLEK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDdcTodQs3A4p7mTN4u8YE4xQI%2BSykaH%2BPt3vUTaEPbxgIgQ2lzJbmk%2BywF7WMzKy8KWBx%2BTRcl9WTOOCzFOOSyE0UqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgtOcPBeok9WtsdECrcA%2Fu4qR4j37KIeaMYPSZAwdC3yxXcEib3lRe3n1Qd4lffso6WcFYihFkX93LNd1zjoN0WD%2Fqqbw48DFZwxt1reuvFDEAVlTZN%2BdnnITw9mnLpZq2gYGS8VqADvNGV%2BF%2F%2FY66vwBAwigCyehYFh0PBKvdMue9k4ZTQgD6%2BKOJgBJD6D0p1Un8gY42nKm9fk4WrKUdiywDfiUhVN95F8HrejsTGC%2Ftzix%2BXsALVw026STMZ%2BZY%2Ff2dmDK84CuGRjgBO%2Bzt0ianK1BkCT04XzYkujR7uk2CNRKgYYB7%2FBkFMYUvFdsQ%2BSCSxT%2BCyXTSOwJAZw4%2FYEIp4%2FZ7Lp%2FXxOblGCVe9EiZA7PPtXVC8RclEETdpw%2B8PFQgW%2F0uVkef%2F62FYdSmvl3Bbd86GyTYA1gkwQgioFAr3aJowcLlHx%2BPQxf9LDEM0DKSIHhiTgo7Gogfz3Zk07PXxT0JL1lbosrsWIaK5zrD%2FY9NDJtvtLTYwSC1rjmEVq2qJs9xX%2B3qghjOalC9KlUfLDER7MTGjfahMMjXxGnf3Cbe8MiNVlwhkWaAtY%2FHrWtrlflarUr0u4YNj6TVZafj3aIlou3siBo3m9ysFMM5m0NWbbdk3ufVnVwzmgFctJBlj0vj4DaRQMLLvhr4GOqUBzeG86m5ncfnaAhAwgaDdRSiFgKQ%2BCfT7gvDzXVYRfQ0%2BCHe6zTdWveXhsiZ1aii8lyxcRZ4z1tPXwtJt6WY%2B694cdBiNRh%2B3wQqVHXZ5CEUxN2ICv122FxLKWNKgUsX0V6X3426acIU9gxP6tBdcTEfoJZ1GiCqiZSWG2lPo8HXb9D%2BjiYFVpt5XeP1r7HF1A6D5XpU7SQU7FGgmg6whYsK8k6sA&X-Amz-Signature=b6ba210697aec1593a2883eca81d2bb99e95f355be1712889e09947d6740b9d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W424K5NY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCqv9o5re2tPfk5B9BsJjFx%2Fw%2FGGThsU5ZIibPgtnuIawIhAI0lhwi1mRa7HnyY8uvhmkO8EAousV1sR4aXM1SQJvxqKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzRR0vBlQir5Bfz%2BYq3ANx%2BaX5ZqRPFQ6mVLNXK9aSWg3RTOT8tu48omIi9JHTx627W33dKjz7gv718QnIDFaQATBqEusTB6SFUMEyqy4f5Zw0yvitMLwvDY4UYRP4eEJhXLcdE%2FraGBg%2FhHg1an%2BwamVRAaH0QQGTGhViZMT%2BbMmGQv%2FTBAUbRGIFUH40Ry2U2Sm%2BcTG62MT8VcDb%2Fd2a3EcPuO%2FGrWGo6rZX0COmsALZBhFj68qh00NQhKkvjR%2FCjvBk6PsCo%2FWSJ71ZtwP7kp4KPlRlUzV%2BntmAGkYGxuafww01oPRDhHt6vN7AxjzJwx6Zn0yAgsgHJOLcfRJariFfmF3M2cslOkQRrqMI2N9YNwa2IvqbfuRgcIX0FpGZ4N5xL3gMsiPVOriWZ7s7Qw9pFsg4ogXqX7knro9JexkdvN1do%2BP65Ogmpo0lDtBbzpROeHUrCg941PtFDGke%2FpxsWt66qL2x0lWQ0FRH7P%2FX3zXgsXfL%2BH%2FEwSQ8K1ATKjaAyGtqeCTSxYj5dpf7KNcg5xq5NP9Sfd5D6q9qZmkMnpLVwavKeH4hewcMLzrd%2FJ3zXcxS02lgmzgX3wJJyiHJR5Yd7vzEq3zCElYGskrxoK2E39Oo04inL1ipiaYbf7cJERhqP%2BZriTCt74a%2BBjqkAbVuMInLeRMt3u5SdG0Yx87HlJYy7yhfm%2BqGalKJeRXj0DQ59ik6eESdmRMnAXgqjDdyGdOM0OZHB%2BinI686sy9b7XN6b4CIlTYmOOLCOZHbXoE%2B7tHPaC0DzaDvp3zAzqgMzN%2FDdu3hxNonelg3bWLYcKP2A55dWWH%2Ff%2Fm6mE%2B4KbzyCVfMYiKBo3zB1RdNNw36TaQjL5BL0Pn04Jjgq0FYn1f7&X-Amz-Signature=0ca8d7f822fcfd3a532b6ca6940a20a0119a551d35392cfff17c566705bc8eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KVZH6Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDcYOggIVPu3GLAAJyWR1Wbqt8fbXH7d6dr9uYOf5MOUwIgMAuQZgfet4VNwMxyu6uOpFZOZgVv4grD7haidB6fBxEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACJgrN7mhCazdJNqSrcA6bwY9KIbmgFQv5X9%2FPrBXXZGmPtnCzJk%2BECvBow9TJJwZoC3vbp0nsnENVelQ8kyLGGp3Mu1xDvtedudOSY4oJrt5hstt9uKkeWcLODaSxFKR8idmSazuJW7DICiDIRrwdkD%2F2Sp4AMqqrJ9vaNJLgxayBprwPsAua4aR7LYg%2Bb9%2FnlPaf8DbzBSrtVff%2B22f9jiG05OOf8vSIydNYCNPlrrbsICRLZ0Ykvlc0H%2BPYwdm0pBCMuNLye%2BmbdRGyo73%2F0q7TJ3YuwvZCClnSKwj84hAlf1gA5E5wE6jckf7LXs%2BJAyar4kHxAbAd6kphxwQrs7b5c2g4td1qTH%2FPzsfRCEfIxrjzquaQVXwIWidndP24L%2Fn9tOKe4bLKLcbsIr3qnOT3j4GxuERm%2BXVUn77uybcaW%2F6xbXyIdthHfckKStLA1VrftVWVJXyhRCu%2BmiyMiCzbuBBQ8EQ47qlZWJ7yp%2FTdrXSwiouIn3kBg7YVQ%2BEn6O2S%2Bwgfn%2F2bT5oKuEWVKUsecdaezIjF6vlAWng2oiK8gD6%2FWKWRIE67KCiSjHS638rp61ubQPV5Zb3U%2BpT65AJyRYtFbT0WnnHmJSCtPnGB8jczD3E9PxBxXWUKBtmmdbvxhhkQUiMRSMLrvhr4GOqUB6GyhKJZ9VJ0KmMvpiwo2exmoQ%2ByElu%2F7HM1SwQ48f03Ij%2BzkVEv2yGF6mSj6rSRrbjuuS8mNKwI501KGJf4QnxofX0rU%2FENuGwKucCf2vgfzsxJGHWb8X%2Fp6zNF%2BkZgjdSsb6bOEl1lSJlLKycyIYL7OVJEwiFBDTZbfwB60SZfCN6exw%2FMTnQB5HpDFV2%2BJgZm%2FBj83gSIJHkCqMYcQheLCbEzp&X-Amz-Signature=b9352294cb5e657881a912dc5ee553087564e39c2b8ed578a041a2fc84857658&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
