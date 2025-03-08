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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKTL2KB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC5niqcfYSQ%2BXqX24oeChdWJfRLBcDMfjC9EpSqJAAxiwIgAmCJXByraAkVJB3srAxw%2BslPwsmGq8smlp9e4kAuZ5Uq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO2rl%2BSkvAaOTf%2BUkircA21f%2BhLn9PiKGuflcEJnByBpnyfor2Saj5AUBh%2FjlHRzas%2ByeeOac6uyD8gGM3ZStUQ1ArCH0%2Bv5SytrGMzReeEbWufJfXKXAELZ6JhZKD88X%2FvkTFUcr35iv7GDvrGy3O%2FS6Z5YebdIBxNc2bFpQcAXhbguYfHqyUSMqfLKdvxQtAEcrsZD1j71%2B0PLFLBJ1a7soXpN1pjtBJ80223Ykir7Qs5r7ecdqc9DBSX8AIp2T2bpayMKTkLZBPJZ2rU3Xe5%2Bpu8MJeMXlg%2BtjGfWDNaaXr%2BNFxvcuU%2BY%2Bb3QT8HDAyMDfVuyP6qo2mG%2FYWEOcDjW2drwubenKtoLvVtSTMR1zb1%2BshdCQ8PQnAUvQH4yA2HKFbOaWUjwbk38S343lS5z%2F5ZaqqkM8Ee2ug4ov%2Fn%2FYBt9YCJUUWvMM5pisE%2BgHTddw5j3otbxGDrdrYeTdoSVk%2BRd6gJoyg8w5fxLrPmrWnSEI3Z5qv8UdCkXmbnUXRy%2F2fiFBTyyb8uN50cTdOxBKnUvVMVzuuq5VM9OMpqW5V9QgNcRvZ%2FafkALbDMho8XaradVnnqGOUrj0JmKbEwEKg2Hy6Hyf2BQcx4GVsgnyk8pd%2FpXlDayryXE48UEm%2FyE2K%2FGeuVqfQNcMNTysr4GOqUBXX2Ntan8YlmK5vcZgIKpMBKQSpwm3fZ8hU%2Bh8r%2Bslu8xnvUFenqnZ5TukCaicAtNKLamxhhsEVwBZSRhXNEcRxzwsyjQ10HmA0rS6bKyZpTDGuegjoynniBcvcmQoX11qU05r6H5pgOdv12fV4rZ4MthBNMi4rYqTTbE1VysYmyvEa1Y%2BMEdjkVz9EPDwbwH0O9OJCW8soR98G8CSV7G%2BJgdY1Vr&X-Amz-Signature=9c299b3a42921989602dbcfbad8c2b9d801f9ce1d9f1c6fbefdf80bb2af2be18&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKTL2KB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC5niqcfYSQ%2BXqX24oeChdWJfRLBcDMfjC9EpSqJAAxiwIgAmCJXByraAkVJB3srAxw%2BslPwsmGq8smlp9e4kAuZ5Uq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO2rl%2BSkvAaOTf%2BUkircA21f%2BhLn9PiKGuflcEJnByBpnyfor2Saj5AUBh%2FjlHRzas%2ByeeOac6uyD8gGM3ZStUQ1ArCH0%2Bv5SytrGMzReeEbWufJfXKXAELZ6JhZKD88X%2FvkTFUcr35iv7GDvrGy3O%2FS6Z5YebdIBxNc2bFpQcAXhbguYfHqyUSMqfLKdvxQtAEcrsZD1j71%2B0PLFLBJ1a7soXpN1pjtBJ80223Ykir7Qs5r7ecdqc9DBSX8AIp2T2bpayMKTkLZBPJZ2rU3Xe5%2Bpu8MJeMXlg%2BtjGfWDNaaXr%2BNFxvcuU%2BY%2Bb3QT8HDAyMDfVuyP6qo2mG%2FYWEOcDjW2drwubenKtoLvVtSTMR1zb1%2BshdCQ8PQnAUvQH4yA2HKFbOaWUjwbk38S343lS5z%2F5ZaqqkM8Ee2ug4ov%2Fn%2FYBt9YCJUUWvMM5pisE%2BgHTddw5j3otbxGDrdrYeTdoSVk%2BRd6gJoyg8w5fxLrPmrWnSEI3Z5qv8UdCkXmbnUXRy%2F2fiFBTyyb8uN50cTdOxBKnUvVMVzuuq5VM9OMpqW5V9QgNcRvZ%2FafkALbDMho8XaradVnnqGOUrj0JmKbEwEKg2Hy6Hyf2BQcx4GVsgnyk8pd%2FpXlDayryXE48UEm%2FyE2K%2FGeuVqfQNcMNTysr4GOqUBXX2Ntan8YlmK5vcZgIKpMBKQSpwm3fZ8hU%2Bh8r%2Bslu8xnvUFenqnZ5TukCaicAtNKLamxhhsEVwBZSRhXNEcRxzwsyjQ10HmA0rS6bKyZpTDGuegjoynniBcvcmQoX11qU05r6H5pgOdv12fV4rZ4MthBNMi4rYqTTbE1VysYmyvEa1Y%2BMEdjkVz9EPDwbwH0O9OJCW8soR98G8CSV7G%2BJgdY1Vr&X-Amz-Signature=7fce90c7ac5433ae4cb145eb6e9aa4f84fe3224cc07bbe3a22712111a3c4b9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJCLRN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDTqneVegnj%2BWkjr1Gmhdwy6K54gBwdF6MGLaFuhd0miAIgMm%2FWLawJlAl77NfA3Ti347stq3VZToziLREyzJ2svEcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMD%2BNzt0X33TOm3nVSrcA%2Ft9z9hxQkrY9uGCrSayyiCoNWDKXL2hZ%2FQ54BgnzJl5JTmOi8Xvp%2FNYKxJCXRons1fj0IL7P07bb5LOX3vm74rj%2BX3tW1eLLdrctnLjuXmVM81d%2F75e5iXmu6qNbtMspEluxvHoogFjsFH9iu7xH4IIpL7fgG8wUtjjlACNeiLR61yXwHpgcr4SjJH957SJA3VQdytJMz3nQGgUAli8pM4tTeuUq2c0FFR4ehSLlUdFiDm6UOTt%2FxMjRpow%2FigWdW936nlazHTYVJFzJwMqp4wVG07HdxvEWbEOPrMTrcZK5n9T6uQTy8GJvJeyCdSlqy0hsCTYNCVRes74kVXgdOSODpH0A%2BrctzSmmFu17py5aY0DNbuQijYbGyuuo%2B9zySXrYboqdID1T6FxRVCUZGJp1XK6t%2BmsSm7LQHf5dCSv3%2FEHfkpaHrCZEQCntZ5WAWq0M4N6mAgijijqVQU0gsK4AY7WcKo%2FdTzpLk8B0n%2FyO%2BaYKh8lKx%2Fou84uhN%2BKeNhbOtWOg%2F5rckY4GZks7bhqUBAvoKLm%2FNoLdTZ%2Fj4LMyBcvr2Rzkw%2FQ5It38ykbsgdGHwzfZsWB7MHdmU5bOfNGx1ynbe8rgXKxIn%2FSppRKoj%2FcMbcaEyCGMLZHMJjzsr4GOqUB5E%2BnyfIocthxsbH2SjI1Gkm00Fb9VH%2Fr0xppPTWjUJQVTQxqw0ekmka5j4%2Fla%2BxdxagpUVER9GSJ%2BsryNYXBcmNFpiXEILT9XWI1vOMCxj2vONenfVdXTAuiuiCKAvZg%2BG8kuUZhsbbkINY8Rrac7FudhbxEkOazrQQcqtTqBjfHgcXl46jTODywjnD5GNNDz%2BUnL48wsoj%2FWtzPqS8soSzlrYUS&X-Amz-Signature=9b0a0052d6e7b22c45116f63064ea3542a8c5796ddf28df368d2f15630774480&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX7PSCVJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFbwHMKRzbbmiEW2FpwDEBewk5nX0QP%2Fm7E3l2tXFh1FAiEAgey8acny%2FzX2qJlV9Jg574UKSz1P1yZ%2BkUaH9TxgdxIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFNUZFHrj5zSUzlwESrcA1i4EozJwW0qyi%2BWY3wgqxT%2BN0Cu8uVunPIx16ssqpfAtkF3%2BWjRkSuifwp3HXWZYMtV8VVHcv1BWI63cDoajrw4zwGcyRvFRFE%2FIw4gE5Cz16WZdnJwsupfeaoLB0KCwYl4ySJLnyWAGrng5LyDcn8ayEeHGNfpdqFz7OPU6SkRhM04n2MgDiRBE7eFChGAqHc7cMLqVXeVK6aje6YLSnTDDqq6FOLm1hnxREOI2yl68fAjH5qiV0%2BoNGk4zlF75crSnTE4uVWC61EJu6iUpXPn2gU77hHMKfJgSMkmugSFVdIig2knL6m8yuUcbOJ2z6%2FXKKznzyVhyZ%2Bbo%2Fluya1d9mxm696EqyGJRrn0uxxBpB%2FUbfA3%2BVwPBHrH03x0Mf%2FFh8Dl2L65Te4onDsKhK4TgGURwxhgglbY48ACBECsuC8D2kd4FrAKuLaeYunx1y7G18IP3Fn2OW96PHRqVblCPURlM6YSEdfEiHviO1HDoza8JiFrONO4fVimGyND%2Bn435SwiyafdI5M8DHrzX8XjPcKm4LhkJ3pDjgBS35KKxAMhQfjGcn8%2BphElJojAp1gI3Mq42oV1Os3opAnXXSWfPb8f3%2BIAvoksVQ9ezR251HFVuJ3F08VWg0ieMODysr4GOqUBmBCVKUPwh9rFj3hEGIrUaoKEC5aBgRaNCa1eV32SURspPl%2FcZU11PyN7U2u7Pt%2Bm8IqnNSa7I5EzkDDhDHF7%2BeowquU4tSxNmCIUTCm8TR4ZOvLl3dXpEAnqisCEdxupu54XGPbB2zRpX3KhzWAUmfEkcy7gUWyEGta69xfvUngE1ZmwgUpb9kBK0DeZgfZUQcAhhiY7wVelgVNAxWz0GPwtRTpn&X-Amz-Signature=6905dc5c41c171f143466fc4e68fad18f6038b58acfe2108f44a279ceae8f780&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKTL2KB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC5niqcfYSQ%2BXqX24oeChdWJfRLBcDMfjC9EpSqJAAxiwIgAmCJXByraAkVJB3srAxw%2BslPwsmGq8smlp9e4kAuZ5Uq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO2rl%2BSkvAaOTf%2BUkircA21f%2BhLn9PiKGuflcEJnByBpnyfor2Saj5AUBh%2FjlHRzas%2ByeeOac6uyD8gGM3ZStUQ1ArCH0%2Bv5SytrGMzReeEbWufJfXKXAELZ6JhZKD88X%2FvkTFUcr35iv7GDvrGy3O%2FS6Z5YebdIBxNc2bFpQcAXhbguYfHqyUSMqfLKdvxQtAEcrsZD1j71%2B0PLFLBJ1a7soXpN1pjtBJ80223Ykir7Qs5r7ecdqc9DBSX8AIp2T2bpayMKTkLZBPJZ2rU3Xe5%2Bpu8MJeMXlg%2BtjGfWDNaaXr%2BNFxvcuU%2BY%2Bb3QT8HDAyMDfVuyP6qo2mG%2FYWEOcDjW2drwubenKtoLvVtSTMR1zb1%2BshdCQ8PQnAUvQH4yA2HKFbOaWUjwbk38S343lS5z%2F5ZaqqkM8Ee2ug4ov%2Fn%2FYBt9YCJUUWvMM5pisE%2BgHTddw5j3otbxGDrdrYeTdoSVk%2BRd6gJoyg8w5fxLrPmrWnSEI3Z5qv8UdCkXmbnUXRy%2F2fiFBTyyb8uN50cTdOxBKnUvVMVzuuq5VM9OMpqW5V9QgNcRvZ%2FafkALbDMho8XaradVnnqGOUrj0JmKbEwEKg2Hy6Hyf2BQcx4GVsgnyk8pd%2FpXlDayryXE48UEm%2FyE2K%2FGeuVqfQNcMNTysr4GOqUBXX2Ntan8YlmK5vcZgIKpMBKQSpwm3fZ8hU%2Bh8r%2Bslu8xnvUFenqnZ5TukCaicAtNKLamxhhsEVwBZSRhXNEcRxzwsyjQ10HmA0rS6bKyZpTDGuegjoynniBcvcmQoX11qU05r6H5pgOdv12fV4rZ4MthBNMi4rYqTTbE1VysYmyvEa1Y%2BMEdjkVz9EPDwbwH0O9OJCW8soR98G8CSV7G%2BJgdY1Vr&X-Amz-Signature=59ae85f2e1b39a782a56a7b7d92e55c6b60126dda166eb69c6ab8e67aaba16d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
