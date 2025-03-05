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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3LPYA4D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ8Qs9ioja3y%2Fy6mQRBhh9G%2FlNQOEs5IgUYylCMkczgAIgFdqn81QEanwy0uyKPB5xgmrlXGM4GfGb7EMBIP5sjjwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP7hYahRKBi4%2BHeoSrcAyiuxpuvR6tTyXB36r33xzeNDUJMz3NLDgFbOD0eOpcaTvVsOI%2BcFBS9UqBK9mYo%2Fm1rrt5F3JFMBDr3igH63UXowEKd0ebu5%2FHDfbZKS3kgE7acn7kNAgxa%2FfT04VtZyNtr4lIkg0%2B9MMces%2FmSJoJwHezsDfGCPWwv79n0s5qSEjEYncXGCnv66H6CzVVnqnCWhLvdtWuHhrC%2F9YTaw0VzLSaAiq53SbLXOvg0Lt%2FxTzuvH84Ick%2BwUHyp5YdVupECrzVMZqrcNqQcVV0h3IdTVryqZp%2BhvgqU470odBQGNjR3a%2BvZjQBNxm%2BNE18azWvqyOIjTQI941oufvdTTYfUXPgMd%2F3cyyddw73LYKxodumvJ6BalPVVILCfiiksDpKDkk1nNcjiR63EPVxBY5YOAPgRHG0l4pSdtl3jl8HWOtRDdKRjVGYP6F4utYriQRSI2b00Qg97ib%2B10cXs%2FsMEr54LSxnB%2F%2Bco14H1lq3h8H%2FMZYu8k6Whla%2B9uljvpxigaCZD4FPTWnoH%2FjBZIW3FYi6U7pWeL75mGguDnu5mr8RY2uFN6Bp3my7BsaFf0OV29Iy%2FIePU2lglGiHMmYYSu9Pq3DJgacdv7pa5EKlPc08hWaKrn3ZdzxKAMNLmnr4GOqUB4N38qS%2BpNFmaOWVoI4e99zvmccVVVO%2Bz540euTGULiIVU5uv7nAwycG6bu%2F8Xd4z%2FanXi2uZNXgAkC0hy76TVM4JIX9qCVcLG8x54dMLmQDAIIo9MnvvsOlvygdCFq8GXTS%2Fk7fnEz4UQGGuutjut5YfwvGKOVeKLm4K54baJ%2Bb5oLW8FJOm7LENNspuY4%2FtSeYY7QQaRooZ5XIyXv%2FFKPTkPmws&X-Amz-Signature=9338bccd4b5d792b787c3afe3bbdc215180a96733db13a27508bb292f6b7feed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3LPYA4D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ8Qs9ioja3y%2Fy6mQRBhh9G%2FlNQOEs5IgUYylCMkczgAIgFdqn81QEanwy0uyKPB5xgmrlXGM4GfGb7EMBIP5sjjwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP7hYahRKBi4%2BHeoSrcAyiuxpuvR6tTyXB36r33xzeNDUJMz3NLDgFbOD0eOpcaTvVsOI%2BcFBS9UqBK9mYo%2Fm1rrt5F3JFMBDr3igH63UXowEKd0ebu5%2FHDfbZKS3kgE7acn7kNAgxa%2FfT04VtZyNtr4lIkg0%2B9MMces%2FmSJoJwHezsDfGCPWwv79n0s5qSEjEYncXGCnv66H6CzVVnqnCWhLvdtWuHhrC%2F9YTaw0VzLSaAiq53SbLXOvg0Lt%2FxTzuvH84Ick%2BwUHyp5YdVupECrzVMZqrcNqQcVV0h3IdTVryqZp%2BhvgqU470odBQGNjR3a%2BvZjQBNxm%2BNE18azWvqyOIjTQI941oufvdTTYfUXPgMd%2F3cyyddw73LYKxodumvJ6BalPVVILCfiiksDpKDkk1nNcjiR63EPVxBY5YOAPgRHG0l4pSdtl3jl8HWOtRDdKRjVGYP6F4utYriQRSI2b00Qg97ib%2B10cXs%2FsMEr54LSxnB%2F%2Bco14H1lq3h8H%2FMZYu8k6Whla%2B9uljvpxigaCZD4FPTWnoH%2FjBZIW3FYi6U7pWeL75mGguDnu5mr8RY2uFN6Bp3my7BsaFf0OV29Iy%2FIePU2lglGiHMmYYSu9Pq3DJgacdv7pa5EKlPc08hWaKrn3ZdzxKAMNLmnr4GOqUB4N38qS%2BpNFmaOWVoI4e99zvmccVVVO%2Bz540euTGULiIVU5uv7nAwycG6bu%2F8Xd4z%2FanXi2uZNXgAkC0hy76TVM4JIX9qCVcLG8x54dMLmQDAIIo9MnvvsOlvygdCFq8GXTS%2Fk7fnEz4UQGGuutjut5YfwvGKOVeKLm4K54baJ%2Bb5oLW8FJOm7LENNspuY4%2FtSeYY7QQaRooZ5XIyXv%2FFKPTkPmws&X-Amz-Signature=45a1e1829112ef14fb5200ed3d97010811178273711161c27882322d262dd0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEI7IVNE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpKd4wTOu8jtRsREWPeNFeMZQAWti%2FgAg89%2F3x2sTPgAiBhX%2BjDqdumlJU%2FhHxQH4%2FwRnA2SnYAl5CImQ1zK9M6IiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzardbRBZEoIgSQIfKtwD0WRUHbwWrqDn54sad6oiY%2F1ifuoEruftUdOq%2BeVp6zEz6HpXmhZ0j6s8Y0ekJroH4pmxa3YMC3GyJZ1o9G7Tq3gJxZGF6mTVPkM5LCjS7mTJrIA0u2dPrgp75guTLqIF%2BGsuMzhj5EAfscFzp%2FoapEDM3sGeuKt%2FPmKSojSdv4uj96dq0Q%2FxSOUTL8HRxs%2FmliOnoWHHyee9u8%2BHms8Xa6QzVMw9Xky2UnUt0I05DPt1JbC2MxFt%2F02kfgy6%2BhEI5mzEyvwZ3epbdaJaoC3iCciLQXEXdJZESgLZt1eUU4Qo4xevklBBz88bX%2FULODeavrc6SfA9nm5y6GtOZRI9rkODinclHp3InMRc5PTPcgvr1gJ%2Btf39OhYDPWWJwcVmT6oB4D4OxIzrBME3wV8oyL2uqivkSN%2FGeOcMEFO1FqRgsPSjt3tOYALBR%2FERtWe%2BNn5BXMx%2Fghkto4hgBDSyPC7l4y72npBTychdW9vx4UxYlbx9vjmTnxDUvzojFx8FhcP6j78YqeICT1CAmZIG1WuCtJnLwwtmftLtEAKzaMJBKMFCKSjD%2BsVkkfgCHXsoQL6l47efBsfd%2BZwqsWv1S%2BErNHxxvc7D1%2F%2BObplEh9Xl4VBpQ%2Bxoz6fKbQkw%2FOaevgY6pgEt0aBqN4y%2FndfOTikZ8OQb8kD1GU7D2Eptj%2Bs%2FLyS1%2FPDSTr9CWW%2F35hWR3zjRXTKSkq6w1SDoQ0yEpLsEXv0nOKrAVpsxg3wyEogbu%2F2qdMOfgqomFE3%2Fe4L2kDLdkJO0xxxiu5NVHk5W0oD24phRQ2BLXIjzdWmnXCjctGFRL0c2mJayLftcdcO2awJhz6nS4ts36uxCs7R%2F1jakNlfxQfAYBTXc&X-Amz-Signature=8a7daf0e1fdd6ac5ce6b52140009dc9de020223c9e4490bdceb1aa2700cf289b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSK6Z4Q3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQNfPqYVPt7jaTlqBKhJ7FUKJNSmlqtkhHENVGglCTqAIgFZABzSgN2Sryb7B3TTH%2BlEgeL%2Bk%2Fhmf4yygIcTrNjKYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQXzVoXWqN4j4%2B%2FsircAzBoD%2FbOUZe5poqY%2B54xsZGlVgXnBPnV%2BgQglgfKFEkoaFnhf8AFdRf%2Fwes13e6YgMol1%2BI6iUEbJJJwLN95srW5LnqR3WdEIkNh1wGughplRS6HXndhxQle4FGMWNLM11CMqmlzm20A3lbM%2FZnLGcE8ACSU9DRgjgrJ8DOiuk4ZrfF1eDdLKXtiU9s6N6FB8AVv8z4I7bYwvbjYGFw4L0oYDlKbD0I4yzas0ORcc2Hi1nvDWbTYQRwUT7ULMZ1Cof7Y%2FU2V6MGVOCazpfCyXY7lmOnRsH80bGd4OXJ%2Fa6HjLRbSBp4TX%2F4qbTxGYoDKNQlcqdhoy3Yl0dKMOhas6dz0rpxqisG3LTG3buZZ76kc6QQY9H3s83rZeQrbhQvMa%2B%2B2Fhi4qGeknlV%2FXSKrs7JVJHTCr4vQ2R1F97WpRNvSTVAnQ0vnH0cYlII%2FG1o7xwTq%2Bk05JL77%2FvWnJ%2F0SKI2%2FdsTGUaRC7D7DiWKcADa002NcfkXM3rmHTw6se99LWi8ESVaqIqiwdC%2BuLL%2FupG8K6UpMA9j5T2mzpiWoWzYq5Tjyn0p%2F3JH0S%2FrdPKq76Q87D682GUrb%2BAqx2mBVh8Y7BK%2Ff01PPb7bpfu5q6Av4Q2STMDBntLtLCdITMP7mnr4GOqUBcT1cKQBeSk3NPBrjzPmBWAFZO4S%2BjBvPoR30cw3rPxs2W%2BZgzaherX7owAV2mKSunn7LElMrt3ybGtVfRvRnrX3V0Zm29HvHsSOyLbE9lTzqGW6tlgKIElI%2F4O%2B0GRFpgX%2Fl8Nn4pUQwZYdILf384pN2u93vvVWCM%2BjdVFaSi%2FjuXRPtB1UheC2J4bK9O%2F%2FRuaUINkI0J6SIxFGQjjqe4JSzmNPx&X-Amz-Signature=941256063adc029092b2ea037218ccd632ca1cf70a4af45423e8bed66b842e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3LPYA4D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ8Qs9ioja3y%2Fy6mQRBhh9G%2FlNQOEs5IgUYylCMkczgAIgFdqn81QEanwy0uyKPB5xgmrlXGM4GfGb7EMBIP5sjjwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP7hYahRKBi4%2BHeoSrcAyiuxpuvR6tTyXB36r33xzeNDUJMz3NLDgFbOD0eOpcaTvVsOI%2BcFBS9UqBK9mYo%2Fm1rrt5F3JFMBDr3igH63UXowEKd0ebu5%2FHDfbZKS3kgE7acn7kNAgxa%2FfT04VtZyNtr4lIkg0%2B9MMces%2FmSJoJwHezsDfGCPWwv79n0s5qSEjEYncXGCnv66H6CzVVnqnCWhLvdtWuHhrC%2F9YTaw0VzLSaAiq53SbLXOvg0Lt%2FxTzuvH84Ick%2BwUHyp5YdVupECrzVMZqrcNqQcVV0h3IdTVryqZp%2BhvgqU470odBQGNjR3a%2BvZjQBNxm%2BNE18azWvqyOIjTQI941oufvdTTYfUXPgMd%2F3cyyddw73LYKxodumvJ6BalPVVILCfiiksDpKDkk1nNcjiR63EPVxBY5YOAPgRHG0l4pSdtl3jl8HWOtRDdKRjVGYP6F4utYriQRSI2b00Qg97ib%2B10cXs%2FsMEr54LSxnB%2F%2Bco14H1lq3h8H%2FMZYu8k6Whla%2B9uljvpxigaCZD4FPTWnoH%2FjBZIW3FYi6U7pWeL75mGguDnu5mr8RY2uFN6Bp3my7BsaFf0OV29Iy%2FIePU2lglGiHMmYYSu9Pq3DJgacdv7pa5EKlPc08hWaKrn3ZdzxKAMNLmnr4GOqUB4N38qS%2BpNFmaOWVoI4e99zvmccVVVO%2Bz540euTGULiIVU5uv7nAwycG6bu%2F8Xd4z%2FanXi2uZNXgAkC0hy76TVM4JIX9qCVcLG8x54dMLmQDAIIo9MnvvsOlvygdCFq8GXTS%2Fk7fnEz4UQGGuutjut5YfwvGKOVeKLm4K54baJ%2Bb5oLW8FJOm7LENNspuY4%2FtSeYY7QQaRooZ5XIyXv%2FFKPTkPmws&X-Amz-Signature=1a99db43a90ee15ed1e82aca2e22c90ac61e1831b9294fa5820777e5757dd242&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
