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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2N6U4LS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCcoIbI5tz7UeHJuOFY7Zho%2BNrIEAXxIGy75RHOOljF1gIhAI%2BRluDKrjuKsnwCYRuHCok1X8dWqPBgIQjpC9uOudJ1KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCbRy1zRjyURz5GlAq3ANtx%2F9hMeXDo2VzYmfMQXMVM04AOCpZN5efGYCwuxylE1C5SgVT2YpvvTk2807vajvMa%2Bo5gK1E51uzM6zvZgy%2FS7AJs2CbUwwIxHq3mbC6YTvy27Qr%2FS%2FCX1v5ZR0GZohOYVlg5Be3c6t4CqWvhAS4vDD%2BEOD2DxoIUNHT8WlXZyMz%2F%2FDYtelyBQI%2BveTR5t6rRq5Y%2B%2Bbs0J%2BchbL0CfQ%2FAs48hAePutO6vULxrxs0BlBLSipOh9yjQCw6EaMKw4o1KAL04wFYJ0ijt%2BQMvQgzYZs5oCHhBxF21yao8CM0GMKKf7NSwn%2BRVRXlzDYvY%2BbcFKkfzykkahs91jhKRvu%2Fw3freqQVcQYeAON6EE5lOt9j7Amy3u3DZzPwpdo%2FBtCjz5MJC4514p1Gt61vroSlCr5gt5uJlo%2FJfRzRxpk3B19j1Ia4OwqZUkJp8NjH%2BWd79xKT5bZtJNgZjq15SSxBDHtnUJOlUTESu1Wc5gqitZ1P0Pa6buKgEbw93abhVmYMctG0fbXQsCAxfpdE9xjKbzjVmKNxYjtydXZJElwqiuBOplxnEHegJCi5SiOJIYInI3%2Fb8%2FAychA0qqLtCDNWYcJzHAlJ%2FL3eACswA7LkrZjZRiAD6eO9kHfELzD3rL2%2BBjqkAc4%2BfQKebkQSdC6aMty5OkLJ36HtTCiL81h7tK3mDNHm%2F4xIy8L51bemMHmKpKaLa2k9g2xAnnSk0Xl9u7xYuKE7J0zpmxKmnERI81imW2ZxFtc1am1a0R81ZOYOTU3RFCk9JtrG5DCiFUPxFaYbnuIwgygks4UaSD9JSujq%2F6VV%2FNefk7g3DPLrPW4N6LoQxTb2gGMFAALMr3Or7u9zPlFA0q6a&X-Amz-Signature=3eca9282e1a9d6cef19fa73cf1fc1e479194a305e7fe702b3746f6df264c431d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2N6U4LS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCcoIbI5tz7UeHJuOFY7Zho%2BNrIEAXxIGy75RHOOljF1gIhAI%2BRluDKrjuKsnwCYRuHCok1X8dWqPBgIQjpC9uOudJ1KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCbRy1zRjyURz5GlAq3ANtx%2F9hMeXDo2VzYmfMQXMVM04AOCpZN5efGYCwuxylE1C5SgVT2YpvvTk2807vajvMa%2Bo5gK1E51uzM6zvZgy%2FS7AJs2CbUwwIxHq3mbC6YTvy27Qr%2FS%2FCX1v5ZR0GZohOYVlg5Be3c6t4CqWvhAS4vDD%2BEOD2DxoIUNHT8WlXZyMz%2F%2FDYtelyBQI%2BveTR5t6rRq5Y%2B%2Bbs0J%2BchbL0CfQ%2FAs48hAePutO6vULxrxs0BlBLSipOh9yjQCw6EaMKw4o1KAL04wFYJ0ijt%2BQMvQgzYZs5oCHhBxF21yao8CM0GMKKf7NSwn%2BRVRXlzDYvY%2BbcFKkfzykkahs91jhKRvu%2Fw3freqQVcQYeAON6EE5lOt9j7Amy3u3DZzPwpdo%2FBtCjz5MJC4514p1Gt61vroSlCr5gt5uJlo%2FJfRzRxpk3B19j1Ia4OwqZUkJp8NjH%2BWd79xKT5bZtJNgZjq15SSxBDHtnUJOlUTESu1Wc5gqitZ1P0Pa6buKgEbw93abhVmYMctG0fbXQsCAxfpdE9xjKbzjVmKNxYjtydXZJElwqiuBOplxnEHegJCi5SiOJIYInI3%2Fb8%2FAychA0qqLtCDNWYcJzHAlJ%2FL3eACswA7LkrZjZRiAD6eO9kHfELzD3rL2%2BBjqkAc4%2BfQKebkQSdC6aMty5OkLJ36HtTCiL81h7tK3mDNHm%2F4xIy8L51bemMHmKpKaLa2k9g2xAnnSk0Xl9u7xYuKE7J0zpmxKmnERI81imW2ZxFtc1am1a0R81ZOYOTU3RFCk9JtrG5DCiFUPxFaYbnuIwgygks4UaSD9JSujq%2F6VV%2FNefk7g3DPLrPW4N6LoQxTb2gGMFAALMr3Or7u9zPlFA0q6a&X-Amz-Signature=ac908f17eb217d81310f55079ba5d096013d0401f663cc7210e44ceee1ac34f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q67GPF44%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDsmFSKdMCiVD8tNVhEm%2BvYQ2hRxSOqGbf6EbtlvHA0jwIhAKzlkkXUEeqeDqFi%2FONxVQhxAg0RzuU7yG%2Fhjx8wmN7aKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHdH0Ct12YD%2ByzFecq3AP5DPsBQ10WYE1eF07e1UL%2FMME2bTXzqjYxXzp%2B1mG8Ai74rCXBH%2BpccFLSVuRz2w3Fp16YLEYWP45cM8XIxuSunnAY4Qo1J%2BDHuismKpPuCQB4imdUove98Fq1WuYOAGjDsbIASns3PSGt8lX7lgGStLOyKcpGIB5LSm6RSJJMcIEHt7JiXyRxLIArKy3ZkYkYATHblRogfpEguB2t9QA3rEHU%2Bwy82p%2FgcYBT0vRSXozAHC7rrn542DFiqtHOntSzFzEkm6Fx1XJqAdBRtBSkaSkts1ISsSvl3isZwXHhJw7naepDzKwxSfDvD3%2BgBIn0qoMSIkCkiukqqb9oYMd%2BW%2Fb0rfD3y2vqqLcY%2BN%2BGRCnOTkabhcm34vnX78OAKTdLqoqozUA82VWzakGEL13pOTitWFdRPwWu%2BdZcsffeEjpSKnvu7VVuhw%2B2hovaTZ%2BfRNKaiMU0XHvKEVyJSHfkkfCa4cp5mSZ5p5Jte6LiY7VsM8hH%2FID8DkCq5G5OxPh%2FsGOGrZ2etlqS%2F6mwZXAHzxpngWDNsAwHx%2Ft8eAwWrRCyoijLnX%2BoGCJPcnocDJ0uQ2zKJ1xiD%2BC9tGsQJNfq4n2b6sqDdGFsFqp%2FZKBMSZ45%2BDmDMx8b1zONQzDIrL2%2BBjqkAbvm8l7sYywnJso%2BlpZzmwNWbwynFzOwQzFPpS27BT8M0fNpi4dj8AXXrbS9gfzdWybaK2ICtOlXNaWjUgB0ARrjU01NLRCThy0A2Y2NlWvpJ2I3am%2Br7VebAcCryY8C%2B1IFEuDc6ABePNhIofDbL7lv5xFTNTeSsbgezVyKjpHGSY7scuqV3iiWKG7hephbz5Ftrt%2Fvm7BOd316ESlOU935fnAV&X-Amz-Signature=35d6572c615194becdc83f64f18a90ed4e1430a6e82b41a3fa5c81822e680979&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3LZPON%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGSNb2nUGV04SfLdYu6Xa43ed2RlhDbp8vn5W55%2BpYxaAiB%2Fjtwxgvr%2BPaiDRti%2Bx0Wp%2FAay2Of%2FmiXpAhQrt6u1DyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbuoRqZunMtsMkgi6KtwD%2FV7YUEYpzGaBtAh9EuzXYKvhsUgFq4lBGQSD15FJMTSQgMCkkaTby%2FrAs085tj%2FFItr4iQ9HlcRL%2F1pBUqQEq8nLwuG5NxNml7Quxlu7fO545zN3tils3VsCC3MLH%2Fxs%2BuvtQo1mf48jbx3UsIqYfVNdrviFjG4A2cwx3qF%2FJs5ziFSFCHVsVhwYSRRFopkN8F8YHZ2TwjWLmux6coUzpkZX9zv1vGOnb42q7GHHhXM9BHdYJRjW3S6BgXGEyexbcrsG2eisT5HWl0ffluguvAgOGWVDoHgpqS5CktkpPMkptu4Yg0keB1F0ME6MaOLiUvcSWUX7hZM2sSYPbf2Hl5MtlNwxcWtmqLI5%2Bx2g1U9D9aHP7beUGHOQB5b2ROx3LGTuei5%2FmVEqCFY2PoL7zKPBM9HsJ97raMHQco29%2F9LLgOFRc%2FPtLv%2Ft8upU83CMCfeIjksaYWPUxTBwPtWHCEsAh%2BJyDgO6rtJs7lErLmanqqKsN8225J8xLX5djxU8KWoVl57pDv4X3aBltDUHS14MOx8SIm%2FiSx0hj4LxuHSGeF5EE6Z3iIhPi0vVxXE6deq5uobr7YCNk1HlQhUIw%2FEbKmImx8a3dscWh%2BXHZ7ioZry9xkVcpUPP5iQw%2Bay9vgY6pgEJ9EiuQM%2FO6yaQq6uAZU1vYTsotdwI3lTHsoJPKjdSvNZz%2BrbuwWM0pynZiXIUrt1ZLXbkYot%2BSKTMKLvYYnxnV7unlEOlXBEdosOZTb5pBrT2vPQAtJHhvt3B4O2W1osvK7XYBxb%2BbzABezkIJ1YBrqZUFZGjlWgRnQ3CK3Ck1alt8rpbrWaPETFJ%2FSoH12bP%2FPAUr9JUKu2SYzNzaQmKAVIBDlwt&X-Amz-Signature=775ab748b48a258792b3fbfa3deb87cf80248af8c069b93f4cb32b689b25e23f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2N6U4LS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCcoIbI5tz7UeHJuOFY7Zho%2BNrIEAXxIGy75RHOOljF1gIhAI%2BRluDKrjuKsnwCYRuHCok1X8dWqPBgIQjpC9uOudJ1KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCbRy1zRjyURz5GlAq3ANtx%2F9hMeXDo2VzYmfMQXMVM04AOCpZN5efGYCwuxylE1C5SgVT2YpvvTk2807vajvMa%2Bo5gK1E51uzM6zvZgy%2FS7AJs2CbUwwIxHq3mbC6YTvy27Qr%2FS%2FCX1v5ZR0GZohOYVlg5Be3c6t4CqWvhAS4vDD%2BEOD2DxoIUNHT8WlXZyMz%2F%2FDYtelyBQI%2BveTR5t6rRq5Y%2B%2Bbs0J%2BchbL0CfQ%2FAs48hAePutO6vULxrxs0BlBLSipOh9yjQCw6EaMKw4o1KAL04wFYJ0ijt%2BQMvQgzYZs5oCHhBxF21yao8CM0GMKKf7NSwn%2BRVRXlzDYvY%2BbcFKkfzykkahs91jhKRvu%2Fw3freqQVcQYeAON6EE5lOt9j7Amy3u3DZzPwpdo%2FBtCjz5MJC4514p1Gt61vroSlCr5gt5uJlo%2FJfRzRxpk3B19j1Ia4OwqZUkJp8NjH%2BWd79xKT5bZtJNgZjq15SSxBDHtnUJOlUTESu1Wc5gqitZ1P0Pa6buKgEbw93abhVmYMctG0fbXQsCAxfpdE9xjKbzjVmKNxYjtydXZJElwqiuBOplxnEHegJCi5SiOJIYInI3%2Fb8%2FAychA0qqLtCDNWYcJzHAlJ%2FL3eACswA7LkrZjZRiAD6eO9kHfELzD3rL2%2BBjqkAc4%2BfQKebkQSdC6aMty5OkLJ36HtTCiL81h7tK3mDNHm%2F4xIy8L51bemMHmKpKaLa2k9g2xAnnSk0Xl9u7xYuKE7J0zpmxKmnERI81imW2ZxFtc1am1a0R81ZOYOTU3RFCk9JtrG5DCiFUPxFaYbnuIwgygks4UaSD9JSujq%2F6VV%2FNefk7g3DPLrPW4N6LoQxTb2gGMFAALMr3Or7u9zPlFA0q6a&X-Amz-Signature=e4d11b3c290a382942311714480e5007face65ef6ab1f2b7fc2eb8e3db6030af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
