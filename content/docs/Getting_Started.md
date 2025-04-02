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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSLEZSW%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIC0dvwOFgIm6W6Y%2BsqCWc0Ey41b5m2KnmKtijMsDLlHqAiEAhOnscHzTXD%2F63ZQ6clFef%2BkPCFx1jE2S1ui%2BsiSK6UYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxErNeNv6eCvR3WSrcAxuiWpzyPIVooOLjIA8xiLKCuNaGycgQwNOp%2FKNLsQQ3NRNKd5UcMZhvoxMQ1p2jzefXCqaaY7ZyHsZXT08YGKIat8jv%2F1XNyNCaJ5q1BPDvkXS%2FuIisLR6s0457qyX8pTmlyjKCt9JAeAqZ9yxY0Su7gFEsbhlTIL0643bMjJOS%2Bm0A9R78HqEEhBLR74fHpH7A41XX%2BmS93INpV5vVTGckftgR175H%2Bh5L2BjLT3Yc90nmurcEvn%2BOUHUMOLzv9%2FOR2VIJVXmaLw35mfnIvM2WkHku7uQcjteZmFKnj1JbAaBZUtxRQV5kjb1%2BRCMDXKVGDsFv8EWrOqkiNOgSxJGAstsRg60UyjVfNcvJHdwyV0N6NGy7HVqpMgAJ%2BL428KUNHk3JlLhyL2pE1BvafoTb5LJifBIGY0oYRK4DP82wvx%2B2yCS8y%2FiLoR4brK7up55vif%2BYyH3NJbk0nft%2F9TPbQc0DCw7RL%2BCPZNcaQTTMoi73f63yelQTmQN09fwLWN2I1bXxrM2%2FWKmozsDb0ZEaj4dwYhJ6RnQMbgib3cnX2x3rjoHtKMJLDp2vaCmpCb%2BqY%2F9egSljzOCgCOIv1SbaRwapFcmGBMdq42qriTpRAqqs3JTgTA7RCvflMMqKs78GOqUBCmSiJUU2l0AfyRpvsBiGkBxmtTlfEeyI49t%2BTsDm42yguGshGqgQWQHv%2BYHhvC3ZWUr2j9e4cMzk8%2BdWC8UmP%2BG%2FBPzxJhh47NCzBJmhoa8QrRaDIIO5bz17ukvStrlFBkvEI6XMRGzvlqLSPGbTEfatx4wwQIBNWs3tyiieOzZE1VKWklqYpX7%2Fqdmd2MmgP0KGx8TIgTwz8ENrsmgBwFpUgY44&X-Amz-Signature=729ec3192fac49074ebdfe6be3a30d6bb983dc0531c8627a17438347e80d8ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSLEZSW%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIC0dvwOFgIm6W6Y%2BsqCWc0Ey41b5m2KnmKtijMsDLlHqAiEAhOnscHzTXD%2F63ZQ6clFef%2BkPCFx1jE2S1ui%2BsiSK6UYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxErNeNv6eCvR3WSrcAxuiWpzyPIVooOLjIA8xiLKCuNaGycgQwNOp%2FKNLsQQ3NRNKd5UcMZhvoxMQ1p2jzefXCqaaY7ZyHsZXT08YGKIat8jv%2F1XNyNCaJ5q1BPDvkXS%2FuIisLR6s0457qyX8pTmlyjKCt9JAeAqZ9yxY0Su7gFEsbhlTIL0643bMjJOS%2Bm0A9R78HqEEhBLR74fHpH7A41XX%2BmS93INpV5vVTGckftgR175H%2Bh5L2BjLT3Yc90nmurcEvn%2BOUHUMOLzv9%2FOR2VIJVXmaLw35mfnIvM2WkHku7uQcjteZmFKnj1JbAaBZUtxRQV5kjb1%2BRCMDXKVGDsFv8EWrOqkiNOgSxJGAstsRg60UyjVfNcvJHdwyV0N6NGy7HVqpMgAJ%2BL428KUNHk3JlLhyL2pE1BvafoTb5LJifBIGY0oYRK4DP82wvx%2B2yCS8y%2FiLoR4brK7up55vif%2BYyH3NJbk0nft%2F9TPbQc0DCw7RL%2BCPZNcaQTTMoi73f63yelQTmQN09fwLWN2I1bXxrM2%2FWKmozsDb0ZEaj4dwYhJ6RnQMbgib3cnX2x3rjoHtKMJLDp2vaCmpCb%2BqY%2F9egSljzOCgCOIv1SbaRwapFcmGBMdq42qriTpRAqqs3JTgTA7RCvflMMqKs78GOqUBCmSiJUU2l0AfyRpvsBiGkBxmtTlfEeyI49t%2BTsDm42yguGshGqgQWQHv%2BYHhvC3ZWUr2j9e4cMzk8%2BdWC8UmP%2BG%2FBPzxJhh47NCzBJmhoa8QrRaDIIO5bz17ukvStrlFBkvEI6XMRGzvlqLSPGbTEfatx4wwQIBNWs3tyiieOzZE1VKWklqYpX7%2Fqdmd2MmgP0KGx8TIgTwz8ENrsmgBwFpUgY44&X-Amz-Signature=988fde2104858bdd0fe515e1060034edf288ec810b83bf691e33b34fe3943e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6A6HI6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBNqd56kca6WWCFY9tEw1oJCTUsy%2Fi2aN8NQe13A%2Fp%2F0AiEAi2wabPP2Ds7EA4hFhPMaLL7aLVglrV1yXjkb8AXu6jQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BdTK57XV8ashAjHCrcA8NV%2BBYKuA%2BFftZgTzccWgAL02vD496%2BZIsJ27jYl5TadpY9WumhxoibXirni%2FkGWdlCKhGLqT0xNAW%2FlWkWsni%2BvN2RYQ0jnxV41jM0vD9yRcTn2C13L6Ajb9FaFUkon6s5zz4eWXYv7rSso1r1HGIykmu79eetGC3ce%2BXIxVAKFZigjE3zCv7kmonucFW%2BgaQJ2roxwtS%2FMuujUYppwn9PImqcL3ydlTFrIFGnlVjZDvNsqBZ3iPlsGehgAZq4ZNXvno%2BpRxmSa0MCW0GntHGB6I%2FacNi5sF5ZWftXNL5oTaBFZt0MypbmXAWJp1mZbSksToDDh4dBCbMQAnlkQf53k55j1f6X4nrD%2FYAeqwmk%2F1UdXlKshZ%2Fubioe6Z73owRGuLQ8O2lOGMy2FVFHoZzI1pQrRKGle0FTJozBIS%2FGXHhU5sd%2FDI0o0%2Fy4fOdg24B7BBfnRyanbjpqgP843Y%2FbqijVl1BTYInu4rgnNlY0PfwBaCNKdAD3tZwipEbDIztrjqHai44kGdXqsEiOBs28PI%2FNvI90OB5DOvfjGFdJGB3EYyK%2B%2FtT%2F0nUqhX8P1RY63rfLdf2TlTl3QqnYp7lrSGpwXsoFCYKMZdlCw%2BBl%2Bn%2BPBY7RC6fUimaHMLeLs78GOqUB66Ryi8uccSc1TQIKnp%2Fpf7SrK%2FkzoQ%2BkV4LBBbhR1LVsmM8D1ENRpR%2B8rTAunpKirrGBpL6VUVDOx912JZ93mZIVnbOI0JUuMs%2F0NPJZgK79MLaTge7UfkvyYJqT%2FHwxliXdh8EgFeimqUMa8FoNcUmD3RxG7mUIoUWYXX5c6nVXeIp2YUYMpfSIpeeCPHu6l%2BSie46WCnR1FSgD%2F9FDFcWWuPuB&X-Amz-Signature=4d819f5fb390156e90836efa98f4ba0c16e39c8bc1a78f26ab964573007dcd38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MHF5LH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDixocM19aLyngLkf3Cb5aBGi0oMrHfxyA4gBY9ftgudwIhAJjW5grogbfVjAUgku851sd%2FDP2C3OUUgtDeehCrm1XHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoxuLGGvbm96epmrIq3APTAwIjcUP6mY5f48ijWp8THgJqtI1Enzcdg4KM7uu6ALxdwyPBfqCec2RXZm4sq9Ru3hV1c%2BNYo7x4su4jRIpntup%2FSGZ4xn0koruyhJj0H288N%2FFyDn5p0wqcB4TdtRv3ebV6HtlmsGfSuKEMvmkFF22Rj5ZNSO%2Bhe%2FTRsLDEAe5t6a0irz8mg12Are3CGJxyru3c8xNuK2Mexo4xibjm5AEzfdXa7d7%2FDMha%2FkDQisWs%2FEjK6PeMPLTUbMmrXE2eDExv5XSzW%2B7wWK8il5RRS4hkNGIwn%2Fd91%2FCgNi3%2FNEd92YSY9JkU1kywBHvSveSvZNA4nmr%2FDwfvlQXHioiHpA8olVOQqxRogoOLXYEDBufIzjWGckiWoJYDGjrv8EznOWTV45QGbZdrmHyxxsQ2OzcQzYIJf6037oCuqUbLo5P7LXEzsQNHqQX8TPH4pDVSzrGoUnnYXIEcycte8PJvmlBJ1ust1xCBcyZzBF9ygyLmwq6SLmdVJqibtg%2FeRazRF3iHQqBzFRspyYgDejKdY3vCttzfXoWMzak3%2FJIU4km3Tu7fZJAzs6hrq0UeplHBH5ANoYe82J8bx%2FFirE%2BamEouFe1nOEfXQEZ5128XIbfHZWyvGvQvpRgylzDDirO%2FBjqkAe2amxu12d1vVh8gcix0W9Pom6h%2FVRpbf3CqAt7Ouanh5fZLyYeo5q3HarwaUw1Yku1bro5hPQB0CJiYjFUBzW62coR6fXNbd8qe6V8yKcFbtk%2FSxSIxXOy7HnrCRPRzgYPoDNDf7Liq162PlhQDMInvk6CagYy1ul0XD9%2FmVOMWqWnzO6XDoaJgLFIaDZrb2A84nNrz5%2FU%2BLbnP4%2FCBvtKLBzly&X-Amz-Signature=d809a244b56505bcd4335d825b06d5ec7f446b30f3aa32450b16651d75b0252c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSLEZSW%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIC0dvwOFgIm6W6Y%2BsqCWc0Ey41b5m2KnmKtijMsDLlHqAiEAhOnscHzTXD%2F63ZQ6clFef%2BkPCFx1jE2S1ui%2BsiSK6UYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxErNeNv6eCvR3WSrcAxuiWpzyPIVooOLjIA8xiLKCuNaGycgQwNOp%2FKNLsQQ3NRNKd5UcMZhvoxMQ1p2jzefXCqaaY7ZyHsZXT08YGKIat8jv%2F1XNyNCaJ5q1BPDvkXS%2FuIisLR6s0457qyX8pTmlyjKCt9JAeAqZ9yxY0Su7gFEsbhlTIL0643bMjJOS%2Bm0A9R78HqEEhBLR74fHpH7A41XX%2BmS93INpV5vVTGckftgR175H%2Bh5L2BjLT3Yc90nmurcEvn%2BOUHUMOLzv9%2FOR2VIJVXmaLw35mfnIvM2WkHku7uQcjteZmFKnj1JbAaBZUtxRQV5kjb1%2BRCMDXKVGDsFv8EWrOqkiNOgSxJGAstsRg60UyjVfNcvJHdwyV0N6NGy7HVqpMgAJ%2BL428KUNHk3JlLhyL2pE1BvafoTb5LJifBIGY0oYRK4DP82wvx%2B2yCS8y%2FiLoR4brK7up55vif%2BYyH3NJbk0nft%2F9TPbQc0DCw7RL%2BCPZNcaQTTMoi73f63yelQTmQN09fwLWN2I1bXxrM2%2FWKmozsDb0ZEaj4dwYhJ6RnQMbgib3cnX2x3rjoHtKMJLDp2vaCmpCb%2BqY%2F9egSljzOCgCOIv1SbaRwapFcmGBMdq42qriTpRAqqs3JTgTA7RCvflMMqKs78GOqUBCmSiJUU2l0AfyRpvsBiGkBxmtTlfEeyI49t%2BTsDm42yguGshGqgQWQHv%2BYHhvC3ZWUr2j9e4cMzk8%2BdWC8UmP%2BG%2FBPzxJhh47NCzBJmhoa8QrRaDIIO5bz17ukvStrlFBkvEI6XMRGzvlqLSPGbTEfatx4wwQIBNWs3tyiieOzZE1VKWklqYpX7%2Fqdmd2MmgP0KGx8TIgTwz8ENrsmgBwFpUgY44&X-Amz-Signature=86acfd6a77b904e94c97952585826b7f74c565cfc68c7e2696540e6106de5e68&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
