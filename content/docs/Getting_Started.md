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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPCICUR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdo6IQ5He8bgkKc6HJZfc58XeoetQagTPCd9Xw2%2Fl8rAIgcmspqZ5fxAhCeMjN%2FpH14w48kJ4wppykrdH2hPAwEqQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa61QLyOWYRQ6kqBSrcA9kqDSwgpoLg%2Fc5Zl4v8XU6GC%2Fi2a4U8wFzYnt3ZjO0wY7UlHxWNMUEgT3GnamjZxK0uKpfRPfUEiZKH4CYA8lqz4115j9Zmm3Rmz7NbKOPKUddCyw8qEgPLNuu8RqoA8FBiLvJZesMbc1So57SL2lYjpLxUsjGPrV1V41%2BPblRBARpEpMoC%2BsGcTh9qF8h6guCfKXuGEQ9uaXxS1ScjZjuJtz3o09nKcszf3qX%2FtQqKhUcslDiffW3SuKHfAqwQHwgwGmmSfojYgShqgugsHmXr3QaUIugK3RBHCHQjUww5F%2BkaPOZOFYG78VQ9%2F38Y6Hkk%2Fm7eVbL4DuuxPiaH9hIsq7WLJyGNkaL21BNst1bt%2BgKgBrCj8dXYoIIhsRtnrHM5d8iOU7r4TjOJ7bufsfmMh95qbXeSkaxQ57vDtv7BM3dHM%2FbEifEvO0BSwJDMB%2FkE6OM8glcu7d25fUL16h7bNLzD2QW6ralxR1V1SGjJkmpnUzEnTZX9%2FGBYMvOzBNVAIsOgpbMFWyBqxXO9tdR74mzY%2FTVbCy5hbDqNTJ6cOfoCn3OTgxse7vW65edElG7IVPDAnW%2BcUuW1KtxPgHr%2FSWH4dtqOBumYM2mVb%2FitSj2gphDlPwWuliqcMMLH77wGOqUBjO6KgfBGENb7emJzfInXzV48Tppq%2Frq0KUW9dLVswDFnpDmmQO11FNOtaFPFpzdLMDb3gaC7%2FHAgTEzGcJx8RcR8r1f3LxgAlGOnMLYCH3bPupdX1tu4sAcPJ7%2FZymqi6diENEKvVuXJ4AYoOgZnVdhj0E79xgnGDJySgYtZJTS2gcr%2BMgFRgJ9WGuEZXd8obQMCAlHwQU5BXwL1VGbcwh3OS9dw&X-Amz-Signature=286ee013edc4ff84fca089e229bb897e8cb623977446fd070f601db5d6758a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPCICUR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdo6IQ5He8bgkKc6HJZfc58XeoetQagTPCd9Xw2%2Fl8rAIgcmspqZ5fxAhCeMjN%2FpH14w48kJ4wppykrdH2hPAwEqQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa61QLyOWYRQ6kqBSrcA9kqDSwgpoLg%2Fc5Zl4v8XU6GC%2Fi2a4U8wFzYnt3ZjO0wY7UlHxWNMUEgT3GnamjZxK0uKpfRPfUEiZKH4CYA8lqz4115j9Zmm3Rmz7NbKOPKUddCyw8qEgPLNuu8RqoA8FBiLvJZesMbc1So57SL2lYjpLxUsjGPrV1V41%2BPblRBARpEpMoC%2BsGcTh9qF8h6guCfKXuGEQ9uaXxS1ScjZjuJtz3o09nKcszf3qX%2FtQqKhUcslDiffW3SuKHfAqwQHwgwGmmSfojYgShqgugsHmXr3QaUIugK3RBHCHQjUww5F%2BkaPOZOFYG78VQ9%2F38Y6Hkk%2Fm7eVbL4DuuxPiaH9hIsq7WLJyGNkaL21BNst1bt%2BgKgBrCj8dXYoIIhsRtnrHM5d8iOU7r4TjOJ7bufsfmMh95qbXeSkaxQ57vDtv7BM3dHM%2FbEifEvO0BSwJDMB%2FkE6OM8glcu7d25fUL16h7bNLzD2QW6ralxR1V1SGjJkmpnUzEnTZX9%2FGBYMvOzBNVAIsOgpbMFWyBqxXO9tdR74mzY%2FTVbCy5hbDqNTJ6cOfoCn3OTgxse7vW65edElG7IVPDAnW%2BcUuW1KtxPgHr%2FSWH4dtqOBumYM2mVb%2FitSj2gphDlPwWuliqcMMLH77wGOqUBjO6KgfBGENb7emJzfInXzV48Tppq%2Frq0KUW9dLVswDFnpDmmQO11FNOtaFPFpzdLMDb3gaC7%2FHAgTEzGcJx8RcR8r1f3LxgAlGOnMLYCH3bPupdX1tu4sAcPJ7%2FZymqi6diENEKvVuXJ4AYoOgZnVdhj0E79xgnGDJySgYtZJTS2gcr%2BMgFRgJ9WGuEZXd8obQMCAlHwQU5BXwL1VGbcwh3OS9dw&X-Amz-Signature=62a1c48e09f9eb3c3bf663ab9097dfba6e77bc0a53d50a4410c852115a9d0067&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4CXMYK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeN9B73VDQzEgF%2F99vY05VVFwUGGijL3ULah%2Fh6gdAEAiAmerYV8injjleA9MP5OO1lyX0xRV3xLb6VnRawuPg9iyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfqYSLON2ywcX3rH3KtwDBiL57zR1NZlw84VPCSG98%2FnpEdBiNSYqIFSJAkffjZV0RezX%2BQjRC5NOloEhVYhkTMN6i4ahorqOI9CKbMg838gKLDB4ptPaKa2qWVV2FGH2dDfOmW6iRtGCOIEPpq6gbd%2BunFRbA%2FGxo9MXrZh1UT1VY6MolxFh9LPfiY5u0tK4zUr90WwwH02IG9ScA2dAH4paNNpj41I1I%2F8%2BfRiS0JMqwF3R0895Tx6EOBiDQczB0vDx4FfKBr9iP4YsHluwY5mvCS72jyttEtWNPxNL2wbhhJxy8f2aD298nFJYfI6eh7WQuMtbZBRbi0ACpQ4HSJozzfwOOb4z6Ije1cut7InFC2vxCGOr%2FhSKtovNZSt4PsNNnVw1T0FYnT3Fg8oMmihf5lyAI1UxpFNEWpLTHfBHJW4SbIGHoN8u%2FyPxqIMcjeEqjygzsWfK4qIgtAKLDsdw12%2FxQOggJHa3raPE1zd9i1lNllx9Wa5dGhCxgh2sXFZDqdulg1EExwHJwQq8WMjIkQV3xzIBHuK%2FgiYEGedVN7VfCCyp7iJGtnpFS%2BOvxHyOJwnz0d77iPrwLDp9bRvsCEGcDnSQWknUE78rmY3lrxp4pQN9bG6irJAaYTC55M7dSGpH%2F8Vm63swt8fvvAY6pgEJS9W4WtPJUQ3HvTBneGF%2FQxQrvqMXLTOlVkyU4fqvm14%2BtqkUPbHA03Q6wEWuc23ZVMfA7yLk6yr2O9LSClKzek1TmSLLW0DEbavTdKAyqpeh3U%2Bi%2BA%2F2mWlp36I1tevlS71TZkc3KkTO8CpTei6c8Bm5M1y2oMc2GG2hF9KwVO9acO1gwgQgjM0nIKoyMVofgVhUtvAFACGH%2BUbG7GRzBJYbyDhO&X-Amz-Signature=c937ba0f408cb48696d7b730a3c0c03bf312cd7d9ddc4dcca08f2449189353dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2ZJUYY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICft7HI611hCP7DSIWtHEt5IzC18OVujPvhsjOp%2BxMQZAiEA1BurK16qyxaPFYCj2t81COuKHFYIpcWoBQgoCOkaGVUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuMMfHI8rH7rECBTyrcA2l7cpNTd0e%2FuVWoWWoptREtvuM%2F46pGBNC4gmUJwKiIrY%2FRRM6EK2JUjOjV%2BmHUgtEE%2BpcuNk%2F2oDj5H%2BsVpYkQ2%2Bor%2Fm0MrXwA8MHjt0leEAEdOaNUzvWG5Dwk%2BwFsPGXaCcSz0YyiCA%2BzxsLuo%2FHI7gNaF6%2BBArEwP90XebFRyqx4OfQvM9jrBj3BNp8nX%2FuyyebxWFdxN0xC3zSN%2FjAFbTUsFkACnJ8sWNp8ir7X2k%2F58XG3L%2B%2FYOsp0dB6HT6Ug5jWRZBEZ1tTI6r3JgeIy9u2WLcSxYFpI4VSiJ0qJe2FwzCnAQa8UZYVnV4BeWbZcfh6DA28jrPwyYY1RzBBImcjTdgbEycbsaQ2bIMHNDJnEvF0kLVGsLKFDj082lDpExTCGqQLNhsSLnfDYE%2BRj2ak%2BfggKA6SjxJLlgcF7xU0RotiP%2F82tc5QCfChlisVFXhENHqNDf7g6Y7BEssahmTJnIIL4tDQCRIQVKtoS7UWpAjdD66IEJSfcni2fRLpuF0KeO7sv2mQ6UTVWjnc5i5v4IC2X4VV%2FqssujyBmBQtfMbwKM9KuyOyG0MbB6RmGVoeMqBhdBUU5guxhqPnBk2iZpbzzajLY7sY%2BNnRPfOQYKK8jOLM30FMAMLbH77wGOqUBLvoPdcj9aOGBCL3ODqG2ocrKOWUCODMeKE9knknYRY5acaB6xhRMkucKXdnxycniJZCleBHJP7FP99k8CYGJwq1Dis4q1KieP57rXFVSr37zEIhxfHhj5pJan7z7jXnqUCRMiQG58KWt2K%2Be06Gic4etwQRs0LQrtiPg3kslZjjebxR34HrXfH%2F%2Bb4athcbatsrxvPTx6aEx1aBggCfD3iFrhhuG&X-Amz-Signature=8109000044532a93805bfa6a8c313d7f67b993e3c1d9453f86375aa62c4fc9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPCICUR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdo6IQ5He8bgkKc6HJZfc58XeoetQagTPCd9Xw2%2Fl8rAIgcmspqZ5fxAhCeMjN%2FpH14w48kJ4wppykrdH2hPAwEqQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa61QLyOWYRQ6kqBSrcA9kqDSwgpoLg%2Fc5Zl4v8XU6GC%2Fi2a4U8wFzYnt3ZjO0wY7UlHxWNMUEgT3GnamjZxK0uKpfRPfUEiZKH4CYA8lqz4115j9Zmm3Rmz7NbKOPKUddCyw8qEgPLNuu8RqoA8FBiLvJZesMbc1So57SL2lYjpLxUsjGPrV1V41%2BPblRBARpEpMoC%2BsGcTh9qF8h6guCfKXuGEQ9uaXxS1ScjZjuJtz3o09nKcszf3qX%2FtQqKhUcslDiffW3SuKHfAqwQHwgwGmmSfojYgShqgugsHmXr3QaUIugK3RBHCHQjUww5F%2BkaPOZOFYG78VQ9%2F38Y6Hkk%2Fm7eVbL4DuuxPiaH9hIsq7WLJyGNkaL21BNst1bt%2BgKgBrCj8dXYoIIhsRtnrHM5d8iOU7r4TjOJ7bufsfmMh95qbXeSkaxQ57vDtv7BM3dHM%2FbEifEvO0BSwJDMB%2FkE6OM8glcu7d25fUL16h7bNLzD2QW6ralxR1V1SGjJkmpnUzEnTZX9%2FGBYMvOzBNVAIsOgpbMFWyBqxXO9tdR74mzY%2FTVbCy5hbDqNTJ6cOfoCn3OTgxse7vW65edElG7IVPDAnW%2BcUuW1KtxPgHr%2FSWH4dtqOBumYM2mVb%2FitSj2gphDlPwWuliqcMMLH77wGOqUBjO6KgfBGENb7emJzfInXzV48Tppq%2Frq0KUW9dLVswDFnpDmmQO11FNOtaFPFpzdLMDb3gaC7%2FHAgTEzGcJx8RcR8r1f3LxgAlGOnMLYCH3bPupdX1tu4sAcPJ7%2FZymqi6diENEKvVuXJ4AYoOgZnVdhj0E79xgnGDJySgYtZJTS2gcr%2BMgFRgJ9WGuEZXd8obQMCAlHwQU5BXwL1VGbcwh3OS9dw&X-Amz-Signature=fec3ea396dc0fa974ac07ca5ae9b22134b6c30f3616971a2a6a86939768f1236&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
