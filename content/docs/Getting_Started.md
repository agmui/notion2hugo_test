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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTCNEFF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECMzY3W4JtiOUh1HkHoNy1xqwTFKquoBn1hdybMUYieAiEA5rKNYgrGu8MBM9pXVgV0vsDmYyldoswx5BNFKuQi5Rgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDkfw8zKVi6Y5jgW7SrcAxz4kEvYytZGfwCy15wL0mQucpbCxTONQnhWJbae%2BtDIn2sX%2BU1HXz5i8ihcd%2B6AGMrhGQBALiWMa33fGTcF16pWKKJ9UcbtbcfNMT%2F4B%2B4X0bT2i%2ByFubZYoe5K5eQGFhKQSS1ELu7ZsfL6kn3HHK5JdkhMKA98giXm9ckdqzz4eLH3Y9zm5cYo31pMIpVk1mbRW3QhuHxxkBn3%2Bc3Xt1gLxpIR9G1t%2BE1UQ%2BE%2B%2B1fnt%2BybDJbnjqDDBSVGAYpoGh50LWE2Ly6%2BzNjqIhwXWFfnMNQmj1%2B4Up9lK%2BcVYTlirfHjJzfAWVx1VH4Xne1W5pEQExNwjERLhDKtai%2BMgH67MZUpC6cFDSx94w1TY0dW4NQr%2BmoHZBcjS7Qo2U0FS%2B7QY3l2jcxRYl4EKwdXUJYAwPRlTzaEE1AKwJ3r29ywupn3nefn69ScgVXdssenQ4imrKLYmQtm4C587CT7d9ImXunCYeLbnhA%2F%2BDeiDq0n%2Fsr7KYEC4clzDH4nJhVHClylCzzGlFm9KiLGcY1LjHO3FrEjqmBek%2FRR63zoCS98Upai5wmc6vBchJ9Jh4rBbmv%2FI%2FPg4TCTXuJ8w1tZjZFMIL6cnkGZUBLbkm84VqRL4nZyIvPceA%2B59MINMMePg70GOqUBypjR0njCYcF72XVE%2BIRmPyeWREdq01NBKDtAjhc4kKKNtweQH4Pf4J2OPLtVAuTRlyD0OiNQ5r%2ByJRX3l4828Hh6t6Y%2BeSg8g7w1X%2FMN1RKqiwycvBcG4A2HkAx96xvZ4NYMN7M%2BsiKBYW5jLoECwPfzSvqE8jowZ%2F5bjIDoEq2gZT3aLe1%2FRlQeAM8nUBf38a67D1lkjGV3w9NyKdadUHXjoXZ6&X-Amz-Signature=2c817da1e26d336df7bf07eefacea270f30fff18e417ef1f2d4178ceabf53dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTCNEFF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECMzY3W4JtiOUh1HkHoNy1xqwTFKquoBn1hdybMUYieAiEA5rKNYgrGu8MBM9pXVgV0vsDmYyldoswx5BNFKuQi5Rgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDkfw8zKVi6Y5jgW7SrcAxz4kEvYytZGfwCy15wL0mQucpbCxTONQnhWJbae%2BtDIn2sX%2BU1HXz5i8ihcd%2B6AGMrhGQBALiWMa33fGTcF16pWKKJ9UcbtbcfNMT%2F4B%2B4X0bT2i%2ByFubZYoe5K5eQGFhKQSS1ELu7ZsfL6kn3HHK5JdkhMKA98giXm9ckdqzz4eLH3Y9zm5cYo31pMIpVk1mbRW3QhuHxxkBn3%2Bc3Xt1gLxpIR9G1t%2BE1UQ%2BE%2B%2B1fnt%2BybDJbnjqDDBSVGAYpoGh50LWE2Ly6%2BzNjqIhwXWFfnMNQmj1%2B4Up9lK%2BcVYTlirfHjJzfAWVx1VH4Xne1W5pEQExNwjERLhDKtai%2BMgH67MZUpC6cFDSx94w1TY0dW4NQr%2BmoHZBcjS7Qo2U0FS%2B7QY3l2jcxRYl4EKwdXUJYAwPRlTzaEE1AKwJ3r29ywupn3nefn69ScgVXdssenQ4imrKLYmQtm4C587CT7d9ImXunCYeLbnhA%2F%2BDeiDq0n%2Fsr7KYEC4clzDH4nJhVHClylCzzGlFm9KiLGcY1LjHO3FrEjqmBek%2FRR63zoCS98Upai5wmc6vBchJ9Jh4rBbmv%2FI%2FPg4TCTXuJ8w1tZjZFMIL6cnkGZUBLbkm84VqRL4nZyIvPceA%2B59MINMMePg70GOqUBypjR0njCYcF72XVE%2BIRmPyeWREdq01NBKDtAjhc4kKKNtweQH4Pf4J2OPLtVAuTRlyD0OiNQ5r%2ByJRX3l4828Hh6t6Y%2BeSg8g7w1X%2FMN1RKqiwycvBcG4A2HkAx96xvZ4NYMN7M%2BsiKBYW5jLoECwPfzSvqE8jowZ%2F5bjIDoEq2gZT3aLe1%2FRlQeAM8nUBf38a67D1lkjGV3w9NyKdadUHXjoXZ6&X-Amz-Signature=8f9518ecf283ee9aef9a370ccf6129b6649d3cc18e0f554bf5b2547265bb4ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKV626W%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqAVe8n8eUNZCaIN4oa7PU2ZEAaPLUyNl6p5D2fn0RlwIgOVeNFw9c3Q%2FLukZjvV8Wg2KoSRbutCAJIyIGOKc4Dzgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFpgeDSmafuAKsX0ZSrcA65OIIptGoSt82Ov6URDbcHhSG0K5dm9D%2FeYjtd9hTfBSQ3PSk%2FnAH68e%2FzqNF73nd4f1QSIpwswa%2F4b79yPYj5AH%2B3a6J3jV9kSnlVG11Srl1KfZ2DQYYh4dXVDFzSMP7IxTq5NwLAlSqRJI7KMy3NW9bTU6C9WNAXGsyyUZ3QRydDuptLU9kDa5cXB7um%2BAWXLhY6IjMs%2FRki4Aed%2BZqu9zkVjaX96xbtqte7tZ%2F%2BjJEyLmJ%2BdgQSB2v6Xu8lc4Q9uBLzKaTrh4YWICPOfGirzPW4kdhV5TfBnEoO5elZnxKYkhh2lASUC5%2FZX4j5CVl8yVimMM68Y0GA5X5dlZR2%2BFMS49%2B8bjLL98m%2BAbvR7G0q6EuoLUIbLRtSgbfsMMSShJu6p2FG7AKvIIlcxCD032oJOGJMiweF7VFgfjXM8BqCvnFrzFErBzmURjovY39icj%2BLN6YYwjR2keS3yHtLYmczUoPfz1rMzUaMggr8kiid2zZb2KEaDMR8lXhzByHJay4LYwqp6YeL6MIP3X502JScvZc4%2Fn%2B3XdKa%2FxlWsqgsa3o0JVD%2Bzy%2Bob5xGyl5ACl677PqvLVc5ZAPvSKr6nzf%2BKj25lyFkMt9ETeempfexkHLKKRKlVxMMaMJmPg70GOqUBml5I87JA%2B95E9W36qMEbUaglrL8X%2B07WiH%2FhYQu%2FzoKHVFMfe4wX1yy3ACoxbancRfoUHUJBTw3bGckJdfCNc80JVxnh4mhRsmnP3sbfJ7AvBz9JK947WLKGVNzMxqLo%2Bar2DMowXxanymn20jLehkql1hF2YTOzVOyjnXiD9%2FyqvQUNyp0YQfwU5WPSgftJ8ArMo2r3LjLtuRY3ydOpT5yLSUyL&X-Amz-Signature=208f109881b22d8afc861ba68741c71ae1436770a697080615134abd18f37958&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5AQHL6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPi9msuA03WsLtw1MANyVbdrd1MC29Cj0%2Bs5vk8LopDAiATLvcuvbtpvWG33L7jRwkUjdwDTfMB%2FXwNHMY6nsVQ4ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM2uD8zMzMAqFjLsj9KtwDEpDp1AU3eLZbAEQn%2B3TtvdM6TqYVSKPUNbcj71OTN0RsB%2BniTWeIHMgXWRMcZ9YwSO%2FnAI13zejGE4pe%2BzUgFtJqhVgPVeAAO33OsMGLrAmB4MRYSPkyF4pV9PIYCK9FLo3DVNnBi2is%2FRQuEYjZpxRO2hAcbBFxLzSBRYcY%2BcjLyTEY5cy48KnpTxWAhEkO%2FcUmnrqNViH4aLBEbbG01PbR2zLE5wHyyzoID34X48NJ5QQn%2B6iRPyInAsh%2BstH2VfOKZuJjCZlKW%2FAnz7OnUXwDIKm5Ijy1AwvAR63%2BpqfmG5Sdf8CvEg5hmd8zjimR8LKtqUyZMg7n%2FFrITYtU6Ppa8dSB%2Bp%2BvNZ1w%2BydLA0uLJni3Ys2%2BKAcygDQ6i7j0neiWSsGDa%2BGsjQQ%2BpOe2a0aZQADArnaLO%2FDYr8qY2HSTBUgyklo0zTzOeRvajwanRe89WMeDaX0%2B99ls0XcItUkBxd7xnM5KP6vE6la5HneNWL5ZQFN%2BMnTJg5TuPjf%2BJ9%2B7DEDpjuiW7SAibuDnf4qBswC%2F4hGtmtMuTUQ%2FTtwraNrzX9t5aoOKMHKoCxOk5b9Lb0ldWYU4SaUmWQbvnvwS2VuFFltXY5dAxZFGpDSxjdwRn5iswwJ7xukw8I6DvQY6pgFDLzOAqKtXPwBHuDj2p16deRf44uBm9iE2bohx9vdA3V8Y1TO4mdIkXAy%2Fii2eTd%2B52GmeeaSEb%2FE9mpIUCMdzIhCypm5Lm2IbAV8OJVggo3242bf88T60yA3pylRlqt847kY4Ffutc%2B9OLpa6RZ%2B0YK1QvDFZXlSXZit9VIZMBa%2FVzJ9RvEaHX8o8IAx%2FPlUscj7nfbhXkdiJR%2BeU6WpMHznvYTiz&X-Amz-Signature=ec278a4a5d72298d8056508ee6ecff6e3c63c36c6673e32e5c27fbea71565e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTCNEFF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECMzY3W4JtiOUh1HkHoNy1xqwTFKquoBn1hdybMUYieAiEA5rKNYgrGu8MBM9pXVgV0vsDmYyldoswx5BNFKuQi5Rgq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDkfw8zKVi6Y5jgW7SrcAxz4kEvYytZGfwCy15wL0mQucpbCxTONQnhWJbae%2BtDIn2sX%2BU1HXz5i8ihcd%2B6AGMrhGQBALiWMa33fGTcF16pWKKJ9UcbtbcfNMT%2F4B%2B4X0bT2i%2ByFubZYoe5K5eQGFhKQSS1ELu7ZsfL6kn3HHK5JdkhMKA98giXm9ckdqzz4eLH3Y9zm5cYo31pMIpVk1mbRW3QhuHxxkBn3%2Bc3Xt1gLxpIR9G1t%2BE1UQ%2BE%2B%2B1fnt%2BybDJbnjqDDBSVGAYpoGh50LWE2Ly6%2BzNjqIhwXWFfnMNQmj1%2B4Up9lK%2BcVYTlirfHjJzfAWVx1VH4Xne1W5pEQExNwjERLhDKtai%2BMgH67MZUpC6cFDSx94w1TY0dW4NQr%2BmoHZBcjS7Qo2U0FS%2B7QY3l2jcxRYl4EKwdXUJYAwPRlTzaEE1AKwJ3r29ywupn3nefn69ScgVXdssenQ4imrKLYmQtm4C587CT7d9ImXunCYeLbnhA%2F%2BDeiDq0n%2Fsr7KYEC4clzDH4nJhVHClylCzzGlFm9KiLGcY1LjHO3FrEjqmBek%2FRR63zoCS98Upai5wmc6vBchJ9Jh4rBbmv%2FI%2FPg4TCTXuJ8w1tZjZFMIL6cnkGZUBLbkm84VqRL4nZyIvPceA%2B59MINMMePg70GOqUBypjR0njCYcF72XVE%2BIRmPyeWREdq01NBKDtAjhc4kKKNtweQH4Pf4J2OPLtVAuTRlyD0OiNQ5r%2ByJRX3l4828Hh6t6Y%2BeSg8g7w1X%2FMN1RKqiwycvBcG4A2HkAx96xvZ4NYMN7M%2BsiKBYW5jLoECwPfzSvqE8jowZ%2F5bjIDoEq2gZT3aLe1%2FRlQeAM8nUBf38a67D1lkjGV3w9NyKdadUHXjoXZ6&X-Amz-Signature=02242152d5e42cea9231b71cca916dfa2faa59fa59be1c32a24fb105b88c2ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
