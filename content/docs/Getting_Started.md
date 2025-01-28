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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPR5ZBI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGlhQnt%2BaIbPR0IRGl4z8j6gLnY1fM2vS9iYohto1h8mAiEA5ikecYnKVSrBRw%2BIRtRvgjvqVkW5zvVk1AeiEnstmGcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKLuPRvhAOFqGuHhEyrcA7GZ49LzGjM7YWFh0GowW3vN1jYL%2FWOKWSnajHuQmnvdjMREisp4kDrqe63VE9l1vl4VrJJjBBswIawylWBCA%2BkzWlCsaOGFS9MptPkPrc%2BJMKwcqdkujwaOl2Y3ktPmAh6Ae7zG%2Bk0GMHrr7hswSjO6yyP6F%2BRv9r%2BVY77d8gKPJImY3rvVuidsKDu2kRHNQsmakTKluExncupVu1h0EdaC3OHVE7k%2FQ%2F6koAx3DoJY1XA%2BwOWQ9xJfuOyhuGtTxX0hfjwdkwyn%2FDtY2l94AwgJpcRKKI3cfvr4ouGAaWp%2Bc9T1iCjhPtj1rS5lt9u2r9d1%2BFmgRij5tRJMbJgYZtdxbTsZg9xxGUolHVW9L0veum%2F0HLgKQyj1Kd84xd6VPDQWJPQU322ZeHVel8remgMChalZb2spDbk4QJ5k9mZLNfi0DzUB7d6WUWWSgiqV4okj%2B3%2FIxL6aoVSX%2FFBlKBhpIKtN2dM7bR2v5vPXAL4SCUrQELGBNvejvqApMRqxUj%2FkpqF%2BGDAJwjiEixE3oo%2FpixvEU%2FSp%2F14n670aQW8VZ97UxEFnehH%2FnRLXj7FOPYTtAbEQ4Ee5MQjTe5m9JXZA2tYY9vTfD2iXFtp1s0t2oXeAsaxH6k7jhJZrMOf85LwGOqUBTQt7wSfvOkf9o0LcsAfe1KgaGuyJRxj2FJ3XpY3GEygqV%2B9ZhU5ah%2BChDvJPC00JsyRIg78MG2uG%2FRqah7dSm%2FJKXJJsR8WteEgIM%2B1NKWvwzyJajQ9z6neQsu%2B1kiEThp3WQTR39kJAOlQPwYBl5jVBHoXX9fGzZEER9EIP0jAYx04nSJSgOHfK8QwX1EFyBHf0WUbVb1tqCL9HZSo1DszS55wX&X-Amz-Signature=d52fc126c48310068b4bc620e969ca76261f27bba5c0a89e034dadde7729e270&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPR5ZBI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGlhQnt%2BaIbPR0IRGl4z8j6gLnY1fM2vS9iYohto1h8mAiEA5ikecYnKVSrBRw%2BIRtRvgjvqVkW5zvVk1AeiEnstmGcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKLuPRvhAOFqGuHhEyrcA7GZ49LzGjM7YWFh0GowW3vN1jYL%2FWOKWSnajHuQmnvdjMREisp4kDrqe63VE9l1vl4VrJJjBBswIawylWBCA%2BkzWlCsaOGFS9MptPkPrc%2BJMKwcqdkujwaOl2Y3ktPmAh6Ae7zG%2Bk0GMHrr7hswSjO6yyP6F%2BRv9r%2BVY77d8gKPJImY3rvVuidsKDu2kRHNQsmakTKluExncupVu1h0EdaC3OHVE7k%2FQ%2F6koAx3DoJY1XA%2BwOWQ9xJfuOyhuGtTxX0hfjwdkwyn%2FDtY2l94AwgJpcRKKI3cfvr4ouGAaWp%2Bc9T1iCjhPtj1rS5lt9u2r9d1%2BFmgRij5tRJMbJgYZtdxbTsZg9xxGUolHVW9L0veum%2F0HLgKQyj1Kd84xd6VPDQWJPQU322ZeHVel8remgMChalZb2spDbk4QJ5k9mZLNfi0DzUB7d6WUWWSgiqV4okj%2B3%2FIxL6aoVSX%2FFBlKBhpIKtN2dM7bR2v5vPXAL4SCUrQELGBNvejvqApMRqxUj%2FkpqF%2BGDAJwjiEixE3oo%2FpixvEU%2FSp%2F14n670aQW8VZ97UxEFnehH%2FnRLXj7FOPYTtAbEQ4Ee5MQjTe5m9JXZA2tYY9vTfD2iXFtp1s0t2oXeAsaxH6k7jhJZrMOf85LwGOqUBTQt7wSfvOkf9o0LcsAfe1KgaGuyJRxj2FJ3XpY3GEygqV%2B9ZhU5ah%2BChDvJPC00JsyRIg78MG2uG%2FRqah7dSm%2FJKXJJsR8WteEgIM%2B1NKWvwzyJajQ9z6neQsu%2B1kiEThp3WQTR39kJAOlQPwYBl5jVBHoXX9fGzZEER9EIP0jAYx04nSJSgOHfK8QwX1EFyBHf0WUbVb1tqCL9HZSo1DszS55wX&X-Amz-Signature=43313da74af03aa923d3971ba02c601c99b7ff4cc421f31be1a78d1f8ce45e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIIIPESR%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCMeCw5Kfefs6%2FSb3NuxnpQU0DU%2Fl1ckkK8kargNNpiGAIgGAUj30EbHXU51%2FL9vieS1gYG%2FPq6Jcgl2cReOMxJwX8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDC0jO3GnDhY8vqjW%2ByrcA6%2F3aSeIdaDQzh3AgZKNbVS6KGuqrA%2BRM0jM9sHDLGVfQ5WOmb4Wxvr0PShj9YvxmW9cQincA%2B5HcghL4mQ32w9VWYMzcRpsrQ3WrBgZ6Zv4clezGCrdCDTmTI292cV9TbmedUWI0HSFnGS1uru6L979SPuy2sXw2YH9B6W%2BCPuLdcGeK9vMlnUR5M1Mp%2FZm1ynMxOCUZnodADEQdU4Kj0ZOwz%2Fgg6MyYBUhmMq%2FxVEtWdRivrxRtcBwEiwyBQKGQ7s0Mzp06Q4W2lfsxrpJRiZj9%2Bp1QCHbA438OnOPQ0bwL3F61QFw0fAfNEE%2BPhTtZtH1kmGgWItOJtN6ue4v5NTcssap5K0IBdiVX5Se7BmI88tFzYL2F0dnt2dnxj0AOruTHAWSV%2BEEYFXkwStZh0opeWVYRwZRWm5NtGXBAbyKmiG8UoFYboSkcZuj7ucEKg6r6iR%2BH9KTmMh71pCu3lQ2rzkBEp1pYoSAbO8V0gvLiTe0pPPtao5yrdnSKWFH71of%2FDixhUUmd8kvbhul00cEDDTOGZZ8KEIgxKF3tDWuJUkDylZPDY5jLQyBjN7MI1nV06oqO178raWeVxnlnqKCKLhdo0yscNZQrpSYOyL4Z%2BUh%2FNrzg3fm1sTpMI385LwGOqUB72ca0G98%2BcgrANpKKizo47DZhBHhalLrmQIchG0DML8wZ0Rl%2Fhkn%2F5DYX9Fovf%2FUB1A5bfLD7t0e5vlXLiJzZ3o%2BMUlG5RHqAnfr6oR7pbKXrSc%2F76k3mzya33R3Ho7j30fD8jT%2F1IRtv4%2Fi3OC6FViZVC2Yt1v4NqLx5PScJ5A5whBfZZV%2Fe2Y7mCBPW%2F%2FYVhxkoHlgW1Z%2Br%2F6zx5zM52zucEvM&X-Amz-Signature=001f9810426309b8cb5d828ce48b436129426c33ff59db778235f6e30288d3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VLVRIC%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD3EbLzHUkpfoOM8ZnORbvmqabTck6S7CcSmv8I2DtIpwIgPmxeXu5y0ASDZdtaBtr4qbqpZyBjDO9censq6uKC8Uoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDALyFdiPtenyW842%2BircA%2BiF7rLigeA0WJDz35D%2FCTDrMt6bT2MtWaVULcsnW%2BTtq6VT9eRucaK1NpUVFqHnpXOKF2KSI892aXhAh00lcmfSnX7j%2BC3sTYPyLvJ7f8OG9JciCJwz1uaULq1zUujyqLCL5v6jF1RH3DPhoffQ6OhYgFDbZWksahMq%2FYpO078ggjay3OLUMroTertg7unNxvekEEB2CTJ8EJpKvUYduHB2faSnV5IKms9sO2iakRd1Be51Rlaao4TUWq3s3l5OKL4V2G%2FRf%2B6TrdQAwZOzOoOb1vvMXz8MG1%2BeopH%2FMx03BDps9WrgQ%2BoG7LBvLtYPWOyCgBK0J2yY9WuzMeSm5XriQLZ33G2TxqTpzt8w2%2FBkh9rInDZoMF71%2FkwdLq4ZgoyMO8ncJ0MLHTG52AVEM498PAOME5oJMXEZMP2NduESsMAvLJa%2Bzf8QtECTPmmoeY8b9AGST9HKmcKgzlU5royOOWj22jXKW503mBj0Qyz%2Bzgswos9QYCu9%2FE%2FQ4SE1vsOfbHsTY98f%2BBb16pkHvVILlNKg6694cvW3ACfBHXv%2FsHv%2Ff64fQd4mIc%2BTgJeY%2FBfFr0HrDy30QKyuKyKyg5bZutAWLF%2BVrYhAHyBxkBiyxEFzfsKOvUDWavvRML%2F85LwGOqUBolV1P01iYHfAVEoM95EmZ9MaheqaPRcOfSTphrC1amh17GT03EL%2FKZdMRKucSa%2FFqTgmmej7rol77moRrldmyFLAsIt%2F%2FOdFLRg7WKU4BUJMWJlseu2huo5sjCSf%2FZX9DmhiE54Rh8%2FZ7DmQywCj%2FvRdm5%2Brl54fIzc3buOG40XIFNxgLhYwWav%2Bkdzqy8oPyPcsgZwMHUntE4ScwzcPrKNgBJXG&X-Amz-Signature=e4f5ccb58f5d81466fa89e13b6a907a4ead29bfa97e9b4fefd61ec66f3f635ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPR5ZBI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGlhQnt%2BaIbPR0IRGl4z8j6gLnY1fM2vS9iYohto1h8mAiEA5ikecYnKVSrBRw%2BIRtRvgjvqVkW5zvVk1AeiEnstmGcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKLuPRvhAOFqGuHhEyrcA7GZ49LzGjM7YWFh0GowW3vN1jYL%2FWOKWSnajHuQmnvdjMREisp4kDrqe63VE9l1vl4VrJJjBBswIawylWBCA%2BkzWlCsaOGFS9MptPkPrc%2BJMKwcqdkujwaOl2Y3ktPmAh6Ae7zG%2Bk0GMHrr7hswSjO6yyP6F%2BRv9r%2BVY77d8gKPJImY3rvVuidsKDu2kRHNQsmakTKluExncupVu1h0EdaC3OHVE7k%2FQ%2F6koAx3DoJY1XA%2BwOWQ9xJfuOyhuGtTxX0hfjwdkwyn%2FDtY2l94AwgJpcRKKI3cfvr4ouGAaWp%2Bc9T1iCjhPtj1rS5lt9u2r9d1%2BFmgRij5tRJMbJgYZtdxbTsZg9xxGUolHVW9L0veum%2F0HLgKQyj1Kd84xd6VPDQWJPQU322ZeHVel8remgMChalZb2spDbk4QJ5k9mZLNfi0DzUB7d6WUWWSgiqV4okj%2B3%2FIxL6aoVSX%2FFBlKBhpIKtN2dM7bR2v5vPXAL4SCUrQELGBNvejvqApMRqxUj%2FkpqF%2BGDAJwjiEixE3oo%2FpixvEU%2FSp%2F14n670aQW8VZ97UxEFnehH%2FnRLXj7FOPYTtAbEQ4Ee5MQjTe5m9JXZA2tYY9vTfD2iXFtp1s0t2oXeAsaxH6k7jhJZrMOf85LwGOqUBTQt7wSfvOkf9o0LcsAfe1KgaGuyJRxj2FJ3XpY3GEygqV%2B9ZhU5ah%2BChDvJPC00JsyRIg78MG2uG%2FRqah7dSm%2FJKXJJsR8WteEgIM%2B1NKWvwzyJajQ9z6neQsu%2B1kiEThp3WQTR39kJAOlQPwYBl5jVBHoXX9fGzZEER9EIP0jAYx04nSJSgOHfK8QwX1EFyBHf0WUbVb1tqCL9HZSo1DszS55wX&X-Amz-Signature=9d846329135ce69ab2c14f0dab5d68368b50580f12d1111a55626f7be95ac225&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
