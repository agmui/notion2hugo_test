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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OXUGDDT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHhxW5S%2Fejtsr5QPIP8WV6HvNzYoNhTOXDBjB%2FF1blpzAiEAhaqNj3uMPmE3LBsvWfZ2nLHne%2BxmE4vISoa1Pp9rZHMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FpylOwec%2FA3k1L0SrcA7%2FTwnZNlxCrFi1%2BJqtIvssWIV4XkSMLWw28VoRRsy3wKv7Z9TB2HmxIdbqb8QGFOJsU4Yz9yqGWlQum6y30gHzohe5eIHD3xxJftaGJBVDeFDHzOncJDOpJ9%2F0cCX92dPFLzq79idsw9xNltAp7yKrLeYzCfzGgdjSz03%2BmcaRjWvZypJFw5EEkWpar%2B5DMjwxcS4FPB65PI264U7XuuToG4BfTzR%2FgKvdeedutKDR0WNi7KCDGQcFykdzM9E8yJzPo4barHLaUEP%2B21JvNSTQHBVyVdC6f7NoPDlL1ZdQEnk%2F2k1XjmEWJqlD%2FA3PFoKpbITmM51vajwuQFHzAA1mU3MxRWCapum4iBnzmFU8NgXNsdx31fKULB%2FXQlLLCvYzI8GJHWqF%2BAXrV3gx7qfQcaDz9%2BiQvz7ssHkEWIZXp1rEN1Yw%2FdeZ4Gpj2CCyXI6odz8Q2NMffzsZe5qsxe40oX%2BvHJXh85VxM6HMazA4csw4gPUFc4%2FyLW%2B2qM3Yc95b%2FnQzVON09vocd147FbdgKLo8Xc19Uzeg%2Bdmg7Mw6xiTBkKOU6q9A0hrayGXGe2W1ZRy0BL33%2BM%2B72M%2Fm%2BEMutqjqqcpbzgS80ycn82imt8o7Rg6%2BNvvqClrCyMNj9xb0GOqUBbskmrhiHaqcAyq0%2BakT2AUO6tmD%2F89tZLw6yvhrqd9oYsynvi54YdQRr2IzTetpprnqt8106ASzfL514fdP1fIhhQZH%2Br3M5Zy1mMyKGfGRFV5XPCod%2BzzIJ0t8TdjZKXSH%2BJjeQWZZdfNFEhrO3jkvwUDYMpjijiT9FD8ejHqkmk3PioExssYG6XXauAgSUdihDF1%2BgS%2FQDxDTBGF%2BTpBtgXb6a&X-Amz-Signature=e787834e1d2da84a1d5f7d2381704643cf343d12abb874b72927540527cdf4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OXUGDDT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHhxW5S%2Fejtsr5QPIP8WV6HvNzYoNhTOXDBjB%2FF1blpzAiEAhaqNj3uMPmE3LBsvWfZ2nLHne%2BxmE4vISoa1Pp9rZHMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FpylOwec%2FA3k1L0SrcA7%2FTwnZNlxCrFi1%2BJqtIvssWIV4XkSMLWw28VoRRsy3wKv7Z9TB2HmxIdbqb8QGFOJsU4Yz9yqGWlQum6y30gHzohe5eIHD3xxJftaGJBVDeFDHzOncJDOpJ9%2F0cCX92dPFLzq79idsw9xNltAp7yKrLeYzCfzGgdjSz03%2BmcaRjWvZypJFw5EEkWpar%2B5DMjwxcS4FPB65PI264U7XuuToG4BfTzR%2FgKvdeedutKDR0WNi7KCDGQcFykdzM9E8yJzPo4barHLaUEP%2B21JvNSTQHBVyVdC6f7NoPDlL1ZdQEnk%2F2k1XjmEWJqlD%2FA3PFoKpbITmM51vajwuQFHzAA1mU3MxRWCapum4iBnzmFU8NgXNsdx31fKULB%2FXQlLLCvYzI8GJHWqF%2BAXrV3gx7qfQcaDz9%2BiQvz7ssHkEWIZXp1rEN1Yw%2FdeZ4Gpj2CCyXI6odz8Q2NMffzsZe5qsxe40oX%2BvHJXh85VxM6HMazA4csw4gPUFc4%2FyLW%2B2qM3Yc95b%2FnQzVON09vocd147FbdgKLo8Xc19Uzeg%2Bdmg7Mw6xiTBkKOU6q9A0hrayGXGe2W1ZRy0BL33%2BM%2B72M%2Fm%2BEMutqjqqcpbzgS80ycn82imt8o7Rg6%2BNvvqClrCyMNj9xb0GOqUBbskmrhiHaqcAyq0%2BakT2AUO6tmD%2F89tZLw6yvhrqd9oYsynvi54YdQRr2IzTetpprnqt8106ASzfL514fdP1fIhhQZH%2Br3M5Zy1mMyKGfGRFV5XPCod%2BzzIJ0t8TdjZKXSH%2BJjeQWZZdfNFEhrO3jkvwUDYMpjijiT9FD8ejHqkmk3PioExssYG6XXauAgSUdihDF1%2BgS%2FQDxDTBGF%2BTpBtgXb6a&X-Amz-Signature=b22913e1f0d164f2bc71628309445244a1c06925c09f38ae959f543c11d42571&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGXLV4F%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCpjVrFpTNHJuLEnRHg2X9ww6RmqyJoxqqKKWrvcUyPlgIhAOp9CRIda1qgW%2BS9HhqR%2FuFmlphhu%2BWB2CjQcyCEIPYvKv8DCFcQABoMNjM3NDIzMTgzODA1Igx%2BXlCIZrlq832W7Uwq3ANJUIs8bpM1kAMlRta4O4Etg4SBsgn%2FxAl%2BWxo38fCR3O%2BWzISTvGhjJd7Q4Yr6bTdZh6zQe6SuSclwQ8AxcT7lLJzwtBGY%2BEYqO7HW0LkM%2BEuD9VFguwCw7M4K1kkExfkWEVnXJ34OHVrQTHgsendkCZink%2FXRqvSP8qkosDTSOmGDVDFqRtHUmDDTrdjb6cIg4FxcsL7hcDTe%2BZLfoezyWQG6QCDlMAWfT4EWCUZdnjCIW2cDhnxXPR9i6J6v9aKSr%2BMuWsjm%2Fo%2BPYpWl0syVMaZcv5LQc%2Bvbt8ux4MgsQatt%2FHR5%2BDoWsth0jcYAFVeM5R%2B8dZsWr5TqYkXSo0X7cdgEsWYVuStNVo6fVvFwT5PWwj6h5X7n1LvO4FCugeW0Qt3u2EFdvJY5f%2BfJjNLiPK6ohWLHSY%2F0tOC7lquwJ1m8v%2Ft0395NPww687pRSkc%2F8XIm0Q9SulwXBz2xnYpK6k2JEAyaO8ODTisX%2BZ4%2FY95vRKQMJSryjoYno3cc%2BJzK6b7zPvGQwmsOUB8xlgxpoMMPVfcGk2AnqU%2FgZtTO8kyy3BydEcfPymNvq9rJIgrdiUerMf79xn9qc5gbRGZl%2FFgvc%2FfmRGRJh%2FRBbeWbXv9vv7hjgBFasHuAVjDi%2FcW9BjqkAVxFMOXq4Z5s5BjgOcQX65rWUDCGGZxgeDDrDrCcKudlwCv0Q4SCU00xzvgDeHSr6I0rPsWaP4mYOitRgIKSz54ZitX9euvbr7n93CO9qLzu3EZqZqzgjGhTWGYTeXz4nWxbEJAXRpNf%2FP%2FaREdfjmaFFlZT%2Bfo3YlVXqkvNH69ZHq4Yp7yphutwqjjBv9iNLIhxvN6QExzAvJLAes1dg13uGcRY&X-Amz-Signature=c77dd85b849e244f15a48bb89aa4a45e4333a2b8b3e4fc253d1b7917496c473b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UUKMBQQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCrPCEySAJslyCWXeWaVwu90RkLHYPtMG6gC64yC6K%2BCgIgEWYSzoHtjOTFHgCf1YjjY12xGV%2FN2yuTqSiIl%2BNxUGMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOKAQNucec4J%2F3mgZSrcA%2FHBAUmQ97jPj0UdhYMBuCMzUjD19My3qCQoQk5fc1PzCVWgT0QkbW8qx2kQQEIhXyhhqJDE9kMFzbOllFZF15XIaG3xzRJ6G69XUBABmbEnmUcyi8Cv8ksX76zamj6cKhX2spDkqOgSvHGCbgg3qaUAddm64Q4vqdjk5KDUQ%2B4Eo8JYBRHQywYE6oQ7tNnpi3rQwKboKkEumF5EU527OHKBoAXDHYSUgiEHRy03aQuhgXRXx4D8HRwcRfEGQZm4miv6x8B6oGwxlfh7a5iMnI4YOftdOnpcNJ0x70ViKZhw4ubmiGK%2BwjGc7ORpB0cTXGQTZlFZ4OC%2BimKJlRZ1Eo%2FEepFpi1CCXHsYibtumRGbIpuNPLZpok1HhFYHJy9h8HQqvvis63IeghJLbgVnUF8DNAFpxGYqBK%2FexJbkwHt2NKMTdNx%2BEyUO3AshmlV21cpnuOGIEPHaPW3o0WbJLyzWLlbuvobxukCDV9p60T%2BOuC0QdCUr6NM21HtoMN7V4Fa2WWIJoxzPp5YPItr%2BiNisveCzXCV%2Bkf9S%2Fy2XjRRu01Ohm3iPBt2%2BJ2W0dAHdAdMlZ4JdzIWDDUXNdvssjPbiJF6YgKhrCeOyVo%2BglvooNDaHwLGku7w%2F1kMpMNf9xb0GOqUBFPnaGwK%2F3%2Byru8BmkMCnI%2FAeQEjtvv7wtf8XWd3H%2BDDlWlCk82h7lM4YqZvtA8vPVXTsuYXvJybPtVppsgn%2BQ23sHz35QvPdhAKk1hI83oZt3hA3N05NMraUezOKYZ5JrifDNgfKwT1hdN2OkLx%2B7cIina4UJdoabp5e%2Bzs9jOgLcegHhgpMnMh91qjstVrCP%2BobOlFa1BTXytqHghljJmmJdsPe&X-Amz-Signature=770e8bc4f32b7b0183819af324385e735e0330f46c0ba90a9ed482f364c0fee9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OXUGDDT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHhxW5S%2Fejtsr5QPIP8WV6HvNzYoNhTOXDBjB%2FF1blpzAiEAhaqNj3uMPmE3LBsvWfZ2nLHne%2BxmE4vISoa1Pp9rZHMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDA%2FpylOwec%2FA3k1L0SrcA7%2FTwnZNlxCrFi1%2BJqtIvssWIV4XkSMLWw28VoRRsy3wKv7Z9TB2HmxIdbqb8QGFOJsU4Yz9yqGWlQum6y30gHzohe5eIHD3xxJftaGJBVDeFDHzOncJDOpJ9%2F0cCX92dPFLzq79idsw9xNltAp7yKrLeYzCfzGgdjSz03%2BmcaRjWvZypJFw5EEkWpar%2B5DMjwxcS4FPB65PI264U7XuuToG4BfTzR%2FgKvdeedutKDR0WNi7KCDGQcFykdzM9E8yJzPo4barHLaUEP%2B21JvNSTQHBVyVdC6f7NoPDlL1ZdQEnk%2F2k1XjmEWJqlD%2FA3PFoKpbITmM51vajwuQFHzAA1mU3MxRWCapum4iBnzmFU8NgXNsdx31fKULB%2FXQlLLCvYzI8GJHWqF%2BAXrV3gx7qfQcaDz9%2BiQvz7ssHkEWIZXp1rEN1Yw%2FdeZ4Gpj2CCyXI6odz8Q2NMffzsZe5qsxe40oX%2BvHJXh85VxM6HMazA4csw4gPUFc4%2FyLW%2B2qM3Yc95b%2FnQzVON09vocd147FbdgKLo8Xc19Uzeg%2Bdmg7Mw6xiTBkKOU6q9A0hrayGXGe2W1ZRy0BL33%2BM%2B72M%2Fm%2BEMutqjqqcpbzgS80ycn82imt8o7Rg6%2BNvvqClrCyMNj9xb0GOqUBbskmrhiHaqcAyq0%2BakT2AUO6tmD%2F89tZLw6yvhrqd9oYsynvi54YdQRr2IzTetpprnqt8106ASzfL514fdP1fIhhQZH%2Br3M5Zy1mMyKGfGRFV5XPCod%2BzzIJ0t8TdjZKXSH%2BJjeQWZZdfNFEhrO3jkvwUDYMpjijiT9FD8ejHqkmk3PioExssYG6XXauAgSUdihDF1%2BgS%2FQDxDTBGF%2BTpBtgXb6a&X-Amz-Signature=c82973c14b02e9d89b47a7c2db3b4f1293fc89109dd5ace1c815cb21f3d9ec75&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
