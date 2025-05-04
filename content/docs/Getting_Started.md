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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667Z2N255%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDYeN0JO3A0Pn5BULNPWfW8AML6N0ubyGg6pA6OfKJN6AiApJvyS7klykJ2cj%2B4R5%2F2XfjKpVj%2FJkcfvWQDHZE4zZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhFZ%2BtHpVUSkjpZSdKtwD%2F1PDR0g4%2B6WRNGWhSVjyjs4FxqqdyacAz9mqgWxbjwjscXRXpLKCzKkCq0lyXDoy7xBmnLx7uGD9s%2Bvz4uRforS0qcGn%2FSC0MZoESfHzgSWwxZIeRARzJsOvS69ssa58VGRIC9ffsZ0OMm1CWJJRT6FL5ukmwnKhUG4b6bXejGwsnwuotPkLVYLYwv2XtzytHIPOZBvVW9qoCmYWa5RQkp3RzT9dnTQGL5oaD%2F64HbX6q0UplxNhf%2F1owdIL%2Fm%2BCYV7vNS8OT0%2B%2BjGP3Qrpy7pfcOMr0C6DQ%2FqEJZLAJG%2BG0GUeFm4obHrfTJEKRmEuOfGn0H4X0BwvHAU%2BLxKolzQNYY7%2BuwcZmhoBCaouVhGE22POb3CaWKdRnREdkzWa8rbmBUrKZh6lm5N2xFNh6a9Q3QaxIGzaTTt7%2BOeQGa7zpkfUdwzJkavbSda9BIx3sCI0xXY%2FCcyrKkkuI%2F5vpAbktBankX0xtPHjzkYgl%2FgEzmr3gBcRbVW8KNfgEMBaDstwORzFfTbElf0%2BxG%2FirX0bHQvTc9aUALGV66tMM%2BT8cdXe4th%2BCxEis6vAtA%2B5y0K56adIT8VoCv%2BC5bblplYKKsJaT3XhxAEx2RfPpKvVmi7zc25AtETdo7gowi5zcwAY6pgFA6etM%2BzSyafO9kRxd3%2FgQmhtwW7K1JLZ5C2qvaQdEfyKthlTYFSo6rU64ifDWJM1HhCN%2BfhYmUBE2r5ZJmNZF7EVBr78vu3Vtu3y6CQCPo1TtwqZzCn8CnvCwBuJaYpo1CH4HiXr8VLr9V1UwScZOVj7DfcsJd7ZNfp%2F1g5Yos37xVp4%2BrzhS%2FI03psDZ1rPDbdr4Fct3yV3xcuPUfBTKUdH3%2FEsy&X-Amz-Signature=3e8faac50ffa52408e3f9f6d0e23aae9322715052e3ded3ea2a3a6870affba98&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667Z2N255%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDYeN0JO3A0Pn5BULNPWfW8AML6N0ubyGg6pA6OfKJN6AiApJvyS7klykJ2cj%2B4R5%2F2XfjKpVj%2FJkcfvWQDHZE4zZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhFZ%2BtHpVUSkjpZSdKtwD%2F1PDR0g4%2B6WRNGWhSVjyjs4FxqqdyacAz9mqgWxbjwjscXRXpLKCzKkCq0lyXDoy7xBmnLx7uGD9s%2Bvz4uRforS0qcGn%2FSC0MZoESfHzgSWwxZIeRARzJsOvS69ssa58VGRIC9ffsZ0OMm1CWJJRT6FL5ukmwnKhUG4b6bXejGwsnwuotPkLVYLYwv2XtzytHIPOZBvVW9qoCmYWa5RQkp3RzT9dnTQGL5oaD%2F64HbX6q0UplxNhf%2F1owdIL%2Fm%2BCYV7vNS8OT0%2B%2BjGP3Qrpy7pfcOMr0C6DQ%2FqEJZLAJG%2BG0GUeFm4obHrfTJEKRmEuOfGn0H4X0BwvHAU%2BLxKolzQNYY7%2BuwcZmhoBCaouVhGE22POb3CaWKdRnREdkzWa8rbmBUrKZh6lm5N2xFNh6a9Q3QaxIGzaTTt7%2BOeQGa7zpkfUdwzJkavbSda9BIx3sCI0xXY%2FCcyrKkkuI%2F5vpAbktBankX0xtPHjzkYgl%2FgEzmr3gBcRbVW8KNfgEMBaDstwORzFfTbElf0%2BxG%2FirX0bHQvTc9aUALGV66tMM%2BT8cdXe4th%2BCxEis6vAtA%2B5y0K56adIT8VoCv%2BC5bblplYKKsJaT3XhxAEx2RfPpKvVmi7zc25AtETdo7gowi5zcwAY6pgFA6etM%2BzSyafO9kRxd3%2FgQmhtwW7K1JLZ5C2qvaQdEfyKthlTYFSo6rU64ifDWJM1HhCN%2BfhYmUBE2r5ZJmNZF7EVBr78vu3Vtu3y6CQCPo1TtwqZzCn8CnvCwBuJaYpo1CH4HiXr8VLr9V1UwScZOVj7DfcsJd7ZNfp%2F1g5Yos37xVp4%2BrzhS%2FI03psDZ1rPDbdr4Fct3yV3xcuPUfBTKUdH3%2FEsy&X-Amz-Signature=82a0a7d1d7872475911496f06f8f68b597f8dba60f697aa9e4d596b74f73f49c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667Z2N255%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDYeN0JO3A0Pn5BULNPWfW8AML6N0ubyGg6pA6OfKJN6AiApJvyS7klykJ2cj%2B4R5%2F2XfjKpVj%2FJkcfvWQDHZE4zZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhFZ%2BtHpVUSkjpZSdKtwD%2F1PDR0g4%2B6WRNGWhSVjyjs4FxqqdyacAz9mqgWxbjwjscXRXpLKCzKkCq0lyXDoy7xBmnLx7uGD9s%2Bvz4uRforS0qcGn%2FSC0MZoESfHzgSWwxZIeRARzJsOvS69ssa58VGRIC9ffsZ0OMm1CWJJRT6FL5ukmwnKhUG4b6bXejGwsnwuotPkLVYLYwv2XtzytHIPOZBvVW9qoCmYWa5RQkp3RzT9dnTQGL5oaD%2F64HbX6q0UplxNhf%2F1owdIL%2Fm%2BCYV7vNS8OT0%2B%2BjGP3Qrpy7pfcOMr0C6DQ%2FqEJZLAJG%2BG0GUeFm4obHrfTJEKRmEuOfGn0H4X0BwvHAU%2BLxKolzQNYY7%2BuwcZmhoBCaouVhGE22POb3CaWKdRnREdkzWa8rbmBUrKZh6lm5N2xFNh6a9Q3QaxIGzaTTt7%2BOeQGa7zpkfUdwzJkavbSda9BIx3sCI0xXY%2FCcyrKkkuI%2F5vpAbktBankX0xtPHjzkYgl%2FgEzmr3gBcRbVW8KNfgEMBaDstwORzFfTbElf0%2BxG%2FirX0bHQvTc9aUALGV66tMM%2BT8cdXe4th%2BCxEis6vAtA%2B5y0K56adIT8VoCv%2BC5bblplYKKsJaT3XhxAEx2RfPpKvVmi7zc25AtETdo7gowi5zcwAY6pgFA6etM%2BzSyafO9kRxd3%2FgQmhtwW7K1JLZ5C2qvaQdEfyKthlTYFSo6rU64ifDWJM1HhCN%2BfhYmUBE2r5ZJmNZF7EVBr78vu3Vtu3y6CQCPo1TtwqZzCn8CnvCwBuJaYpo1CH4HiXr8VLr9V1UwScZOVj7DfcsJd7ZNfp%2F1g5Yos37xVp4%2BrzhS%2FI03psDZ1rPDbdr4Fct3yV3xcuPUfBTKUdH3%2FEsy&X-Amz-Signature=561b4495c65569ceef7037a43d4d7ba7f388a5aa93631af3f3bcc957c0692a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWKFDO2K%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDnV%2BfLRTU%2F6IoxADFxD7oZevitfSZShbqx4rieMB6A7AiB0Kg6ZJDuVRSJMYDdttZ8PmWrLwpVHeDJn7PSWOeswCyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMt7izlTOf9jcf1iVKtwDN2EZ7z73LgUxePkkrx24wq2TBsh5bqL8xp4OH1YaGHesuMaNxD5RJIpzq5ZfypLewFRrzj%2FR0rLPZjpfqoSirnb3jZSvP8LDN%2Ba0%2BrW7GrofRsRz8xzg013GZWWC818enqlagY4m60LdLepQMfikbEGoJYflypXzxOQ7AZUt7HXMrn9p6YBc3bvxYEH8U%2BNpyFSRoShLBiXAN40itxlfPED2fx9TSbsj7UMBrArWwGjH2xTsrgieXIH6xVvI8l7PX%2FLl1z1oM59OYlnFiHNyPctt9l%2FOm1NOmLWvempM5HU58bFmPlOGR90%2BsWsM8dQMndg7cz6IRKtov3ZikCqYKFfcNyA2dsFIOJUCbFWrLl0mkFbqAie2TIh4zyJDTEkAaKL63wki%2Fhm8u%2Fjikaucf3oQOLFS%2FtyVppRuprN%2BfVwASqTn8rVWQAzMPTWrIRZV9Sa0HbdzHmvApkc71Hf52cx1aCVz7RTrSQi4xEq9Xjgq5rQbqOx8U%2FuabRLfPQQSzJmd8MONfQYD4MXlibl7F2%2FfQ1BjcMpUEzl3aSm4KGLlGsqf%2Fru1wRcyQTf9wZ1Ypfc%2BCB%2BV0iL%2BFWG%2B3kkQnAepPXpn8ogbJByXa7sjb83vbh%2BkRYkB%2FQBXLU8wxevbwAY6pgFiCG9EhV5OBeZPg8RzIcd57uBIhmAbrhVjCkHeGMF2MqzBTuIsDTaN3CLm97ximNNcScYWQDS1DnfQYaTTxLkEG7vXH7Ba0QKLZsmfJL%2F7mYnItAcKEc9OUOt6nkFgXwDdtBxLL0YLlM9IhNj96bXr76nOg%2B3gePpa06D9ej%2BL%2Bl4nChMNwQFzBZYUT5q6wuEqIxJUq45RpdwNVuqOM8HMJYvzMo6M&X-Amz-Signature=bbca71f4e8f3231742755f90292c48f8dab49c282aa16913c0b6b38cbae000d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA72OIE7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEtAYp0j7QFcIQvz2luBsMAWJS2hVsePRbX0F4HvD9WsAiEA7ZHXNhCN2b601xqQyTuB29HZgnL1aGcrkmbG6vNoOGYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBQyM3mY05kWVnZfsyrcA3%2BjZ2ne1xFXtU1y5WT9pVr3KN4%2FNRkmdDBcob%2BsZqi145uyrFYGkVj3ScGMYa9nCVGGsToBnHIaHRuT8kLFdnNg%2FZe2y%2FkLaV0FxEPWumtcRhTfpidBdG%2BT%2FhLsa7oQFNo7kz6tYlwEnbX9sj7K0CYxxDYy1MUgqg%2FGQyRT%2Fif2TtjcLTGeK2uOxbcq6QhJYW1KprjMSoGSMsLOC2azEerlZsX5jThGAIu09%2FU3LEU8Nv5L1gXXRco%2BzuW1TJwgNkiud4npG8ESAlblxJ4IXnlvF1QKpJXV19Pq7dv38snfNGyNfdpyKiPgi2kCy9Qij5ZhaI9rzAngWgydPZbXY8V3mWn%2FfBPplp0lNvLE4ChPCGDMaznCrOWEzFZylP5%2B9U5IP0XeXpepI9QDrvj6VYqQYs2bx9FfkQwytLZQ%2Fw7qeSI4EiMBoxbnZuH9HCfwJL2TUd%2BMdIqt7k%2F3ChYdXq98J5zrACcsgOKgAJoi6K5B2U3NTD29SQLkdwd8JxGE66dyCXeXoTBIT2sIRLPA6aYZClMqtUZFAB7jfTQrzeg%2BH47cjynEUY1ikB01C0mU9aN6LIYpqai%2FjkyV8jukIu1MNmkICx4JwwwiVVeQACu8qfm%2FasTEOeG7I8IzMM%2Fb3MAGOqUBFyUyKv49bCjiY5gHmONpeSF0SPrrCVkFgtKgwYdRuXk4gC2S9z2t1ltYSW4up2d7I31IcUHlxlRtTXws%2F5QCIC46hLH4CwF1vPC3jYQdPH0gXx9vUuTAmNuH1h7aSsfU6fcjVsvdfmaSLpwAkN8fumauYb9j%2FI2SJIzhiUVK4DuqvQfuWJoct%2Bs%2F%2FphMyv99ydm29JlRsxCv2exELV177zQr6itI&X-Amz-Signature=95f722b8defbfbb5a7cc5b41a8aae5d259283c794d49a983b60986d9084a3416&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667Z2N255%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDYeN0JO3A0Pn5BULNPWfW8AML6N0ubyGg6pA6OfKJN6AiApJvyS7klykJ2cj%2B4R5%2F2XfjKpVj%2FJkcfvWQDHZE4zZSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhFZ%2BtHpVUSkjpZSdKtwD%2F1PDR0g4%2B6WRNGWhSVjyjs4FxqqdyacAz9mqgWxbjwjscXRXpLKCzKkCq0lyXDoy7xBmnLx7uGD9s%2Bvz4uRforS0qcGn%2FSC0MZoESfHzgSWwxZIeRARzJsOvS69ssa58VGRIC9ffsZ0OMm1CWJJRT6FL5ukmwnKhUG4b6bXejGwsnwuotPkLVYLYwv2XtzytHIPOZBvVW9qoCmYWa5RQkp3RzT9dnTQGL5oaD%2F64HbX6q0UplxNhf%2F1owdIL%2Fm%2BCYV7vNS8OT0%2B%2BjGP3Qrpy7pfcOMr0C6DQ%2FqEJZLAJG%2BG0GUeFm4obHrfTJEKRmEuOfGn0H4X0BwvHAU%2BLxKolzQNYY7%2BuwcZmhoBCaouVhGE22POb3CaWKdRnREdkzWa8rbmBUrKZh6lm5N2xFNh6a9Q3QaxIGzaTTt7%2BOeQGa7zpkfUdwzJkavbSda9BIx3sCI0xXY%2FCcyrKkkuI%2F5vpAbktBankX0xtPHjzkYgl%2FgEzmr3gBcRbVW8KNfgEMBaDstwORzFfTbElf0%2BxG%2FirX0bHQvTc9aUALGV66tMM%2BT8cdXe4th%2BCxEis6vAtA%2B5y0K56adIT8VoCv%2BC5bblplYKKsJaT3XhxAEx2RfPpKvVmi7zc25AtETdo7gowi5zcwAY6pgFA6etM%2BzSyafO9kRxd3%2FgQmhtwW7K1JLZ5C2qvaQdEfyKthlTYFSo6rU64ifDWJM1HhCN%2BfhYmUBE2r5ZJmNZF7EVBr78vu3Vtu3y6CQCPo1TtwqZzCn8CnvCwBuJaYpo1CH4HiXr8VLr9V1UwScZOVj7DfcsJd7ZNfp%2F1g5Yos37xVp4%2BrzhS%2FI03psDZ1rPDbdr4Fct3yV3xcuPUfBTKUdH3%2FEsy&X-Amz-Signature=3340925ef2989e9e75cf549f025e72f8e4f8ee4b4ce71d80e024fe089180bf63&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
