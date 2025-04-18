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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GER3UZV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1YAWmfXPLeC%2BCr5C4efflip1IsDCTSt4RqiaJuPUn8CIDe5alHV9Aql7qWgt6nPlax2sLf15LDVYsVvnXhYfU4oKv8DCHYQABoMNjM3NDIzMTgzODA1IgxUX%2BnpQA%2F%2BL8ygbAQq3AP6%2BgH5JmltLP056GPDvQmkB1nIK%2BkrwqK0R%2ByAp9dkcZJUDhMeYlEVV0Jy6Cot1STRAe3la5L46eaiAieQoXPgdFCpgAfb2MuhPHZt6d336IpEAVn9fxcDsDTwq2rAvvK5NgzxHnCw8NXPPbjGFgkqNoRkCeoqmk1zdsEQuXY9EIPmSN2BvTV38lgif1ZBfkpINcdPz67xajQS79wf5Lh%2BZX6NxWzTjj%2B4gUCIBj2MZm3cI5SoMIphJwsbMj0%2FH1mZekVCouB3wW6XKg6x2QZWqvSv82m%2Fb45OLeWLFW9FWlA4LiPmlcabtUQ4Z1LfLpXOAt3DryriJXWpr6VJjsJkmo9XvWwvKAP1CzwTgSWab7RmhLDu2jcpnXd0ufPQFMPRPDUVmin7BNySFYc3VNlp4ynb9lcfvEwKRuDLpmsw27a1brBEZLAB9KULEDiCayJ8HPdYNTZRj%2B5TD3Euu9U8DxhU0BmRzzTnyyLCy0JY3nkyvukWg9Ps1R8V0wZuZHFq2J2EEPZeRz3buI6boshbbvSiDnVVrpJksY3o0Lx9wafBDEDXH79zXtzLqjpPwg%2BWPrOz92i%2B9JCnwBQ0C5Nn9C0%2Fe4SGhHi%2F4314CbY%2B4OftxIAzN9%2BQwJyVhzDhjYnABjqnAZsKEu%2BKVicp8cB1QKaDVVAzJsnmBRWFWxgmiXlSD521%2BJbxnz55fn6OjXS8xb%2Fp%2BYqgenEqWb1mG%2FcU6aCFRafDjkp9VpHxqWzhrdE73rlJpZVf3e9m6BY3wbQmb653o2ubDHtmISLhoSg2h0Tdbg6ajbGOsgrNwaWvS9nWOylOzmFquFPhPIzS%2Fiplj05hLCrblqnnEfZ6UpLjL0ixonLjtVDcwEQe&X-Amz-Signature=b42b95bcf01d8448d1c2fb895269eb0e6454dd1378bb3a9e1d00ef8a9016a4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GER3UZV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1YAWmfXPLeC%2BCr5C4efflip1IsDCTSt4RqiaJuPUn8CIDe5alHV9Aql7qWgt6nPlax2sLf15LDVYsVvnXhYfU4oKv8DCHYQABoMNjM3NDIzMTgzODA1IgxUX%2BnpQA%2F%2BL8ygbAQq3AP6%2BgH5JmltLP056GPDvQmkB1nIK%2BkrwqK0R%2ByAp9dkcZJUDhMeYlEVV0Jy6Cot1STRAe3la5L46eaiAieQoXPgdFCpgAfb2MuhPHZt6d336IpEAVn9fxcDsDTwq2rAvvK5NgzxHnCw8NXPPbjGFgkqNoRkCeoqmk1zdsEQuXY9EIPmSN2BvTV38lgif1ZBfkpINcdPz67xajQS79wf5Lh%2BZX6NxWzTjj%2B4gUCIBj2MZm3cI5SoMIphJwsbMj0%2FH1mZekVCouB3wW6XKg6x2QZWqvSv82m%2Fb45OLeWLFW9FWlA4LiPmlcabtUQ4Z1LfLpXOAt3DryriJXWpr6VJjsJkmo9XvWwvKAP1CzwTgSWab7RmhLDu2jcpnXd0ufPQFMPRPDUVmin7BNySFYc3VNlp4ynb9lcfvEwKRuDLpmsw27a1brBEZLAB9KULEDiCayJ8HPdYNTZRj%2B5TD3Euu9U8DxhU0BmRzzTnyyLCy0JY3nkyvukWg9Ps1R8V0wZuZHFq2J2EEPZeRz3buI6boshbbvSiDnVVrpJksY3o0Lx9wafBDEDXH79zXtzLqjpPwg%2BWPrOz92i%2B9JCnwBQ0C5Nn9C0%2Fe4SGhHi%2F4314CbY%2B4OftxIAzN9%2BQwJyVhzDhjYnABjqnAZsKEu%2BKVicp8cB1QKaDVVAzJsnmBRWFWxgmiXlSD521%2BJbxnz55fn6OjXS8xb%2Fp%2BYqgenEqWb1mG%2FcU6aCFRafDjkp9VpHxqWzhrdE73rlJpZVf3e9m6BY3wbQmb653o2ubDHtmISLhoSg2h0Tdbg6ajbGOsgrNwaWvS9nWOylOzmFquFPhPIzS%2Fiplj05hLCrblqnnEfZ6UpLjL0ixonLjtVDcwEQe&X-Amz-Signature=f9807c18b80f28aca9540e49faef85425aaa622f5eb8da0ba1b7ede51d12b337&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCY2HEH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOrViFMsjv8Zo%2BpRNxMg84nPXyTodwMyM6%2B2%2BDaavhLAIgZKofK6BaM8SaUe2NsydZ6pOS1rrYnRgrItskBE%2FovRkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHPxEt5h0ogZ42us8CrcA8gn6%2BlrV5q9QWtilzn8Zw39TnzkVSeCOIsMhWooYMB1hXde%2FCQYHcuTmQBHw2%2BkTi8Y5Q1Dc4dVO6KnZt3MM8TzLDLm5agoR%2Fa8TiZXvm3IwnVeE5KklY4stVg6fWAnYTYZ8%2BDNiiqcvXLeda%2FNyQrt%2BSi1ncPLeba8%2BLF1ds1SX51Irh3VMY6eFQQuTtleCbzoOcI9cVf3qQoeaSPDXSN4Il0068hRO7kAIZMLNC1c46yqxynkN%2FrGEKHXS3qxPanjBAud3OTclXKnXGLssxwAImOtAHygCZAQvgv5tToG6fVKc%2BRE85FGZuDv%2BNHL6im9Sw%2B2oRgQ61qGk%2BCk%2BnelqDJkc6g5lY6gDjt7rVNnCqiG1NTYAVrm9gr3Bxy5rVuDJXJ%2FJoiJJyX079Qy6zTgdTQONQ69BOoY3ZG2x43DCzwt3XkJohX5lWd3Y5HwoCX06%2B6pbUcGDJNk%2B%2Bfni%2Ba%2FKFTqgos2jnCxvhe9vK%2BkJP4JZyo%2B5BzegIRBZXUQBFMLviScNsrn6iNVvl24dXTgfyVR1O2paar8G0tJ9RU%2BIe65v9jXczpUeLxQq3AYHZuIhBQxklYUGEsxOKvRWOS6mhXl90DDAG6yqoAfqHCRj5uGsFkX6ednZ6GUMMqNicAGOqUB8LG7bQ0JUNAj2e7DRaOmi3CqBiWjxmVkaZqxiG0RqSixqhaRrqD2HmGDnQZ7cMMgMec0Rn8%2BWKo12zEpcF9LEj%2FnSUiR2mvQ0r%2BH9B2t88sKdOZ6kCcHCSH7B7FDG0SPXIJ4xtj3yxDuNp8ZZPLdzAxBP4wAo%2FsaiQPj8ZgTKF4s9WTrbXg4Zx9NUhEanMhFn%2FwvFohNFx7s6vRsYtGm53Fvz7ZJ&X-Amz-Signature=0dc475103c0cd38956ecbce2d4e3a53336376116f742250ee53ba750ac3f0bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6I5VBSY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYWtfbcabD%2FjRvA%2BG87ZidYHMe6Iw744tPZRx5ER3IKAiB2k64z7ieOiDzww4N8ms%2FDn3Y7fNzRWZHfg7jeAPBTOCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMa1E0H3HzgUFuc6sNKtwDXifmgerhYtj6GujJSBCgsFbJjgN6xiMkSlAiBHkpFZRyO7AYdZyy4LKQgTnOVqWfC3Wo1iTrjoHXspkMLF38%2Fg8EPAj50wQCPJI1mbzOv50OkJCyk2k66p%2FLRlEi3Oecs7trfmii3%2BMRAoPQUe3zF5QqK7QKME73mgO4dF1z%2BdS6i9ZJ21U%2FPS7rwYFGvDig3vitntRdYbqEN02d3t6iog1BpAJP6HVju%2BpZ%2BWHv4StdmiIUH%2BoKXNYDlFPOmDzBhei9BxAUly62JeGBrG6D0Dvr7IrifJwxJ2irt6ViSXeT7Zm9V2I0NCul0naSaviLlg3hfIp2EAmiynQMKrWixyQS1myzvdDHrMHRyAgGRqxLIRRVskHEsZ%2BsrghLMx0BwIEsEshQdX0o9mhznE6394tK6WQH8Wn36zN%2FGKMIsUxpwe%2FFprswpTId80WdIAlycEdKbu2PuNTjASbX3lU6wOblmFOuDerpYpcPFww99MSd9GRE5Aa8eaSET1eZIk5XosZ7Zz2NEFFf%2FSRdkMRP6Hro6Crzhs%2F1dzLxJV%2FIE%2BXloiI5IYK6F2hV6xLanT3%2FC9X9do%2FYCzjN2D%2FBfAiJaa6uFZhzCb5yxUvmjysRI18hRkq3tb7szM5%2BIgEww46JwAY6pgGQtMRCZwDpFrGDozJy9CDV%2BsjboA6OA8yKFV5W9VOJ4Uk5zPakzgk25p2ZLc87dWWz%2BYX2kUwMQAOqhXP0iEjNu7nAVlt2G1RmCrHlUIhxegDYaoL9CDqcafnxWAAToYuTLLT3VAkPv4aXNfxaIeTyqiTEKASenQ1SZUqYtqheBmqxRziLjMZjNbeV3puN3TkUYvWhq6Vo1TgqYyfXiHBwWubzav2u&X-Amz-Signature=7f84deb4c290156b0331aa7aa80a96a172bc1d575a89946d0353a028343de0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GER3UZV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1YAWmfXPLeC%2BCr5C4efflip1IsDCTSt4RqiaJuPUn8CIDe5alHV9Aql7qWgt6nPlax2sLf15LDVYsVvnXhYfU4oKv8DCHYQABoMNjM3NDIzMTgzODA1IgxUX%2BnpQA%2F%2BL8ygbAQq3AP6%2BgH5JmltLP056GPDvQmkB1nIK%2BkrwqK0R%2ByAp9dkcZJUDhMeYlEVV0Jy6Cot1STRAe3la5L46eaiAieQoXPgdFCpgAfb2MuhPHZt6d336IpEAVn9fxcDsDTwq2rAvvK5NgzxHnCw8NXPPbjGFgkqNoRkCeoqmk1zdsEQuXY9EIPmSN2BvTV38lgif1ZBfkpINcdPz67xajQS79wf5Lh%2BZX6NxWzTjj%2B4gUCIBj2MZm3cI5SoMIphJwsbMj0%2FH1mZekVCouB3wW6XKg6x2QZWqvSv82m%2Fb45OLeWLFW9FWlA4LiPmlcabtUQ4Z1LfLpXOAt3DryriJXWpr6VJjsJkmo9XvWwvKAP1CzwTgSWab7RmhLDu2jcpnXd0ufPQFMPRPDUVmin7BNySFYc3VNlp4ynb9lcfvEwKRuDLpmsw27a1brBEZLAB9KULEDiCayJ8HPdYNTZRj%2B5TD3Euu9U8DxhU0BmRzzTnyyLCy0JY3nkyvukWg9Ps1R8V0wZuZHFq2J2EEPZeRz3buI6boshbbvSiDnVVrpJksY3o0Lx9wafBDEDXH79zXtzLqjpPwg%2BWPrOz92i%2B9JCnwBQ0C5Nn9C0%2Fe4SGhHi%2F4314CbY%2B4OftxIAzN9%2BQwJyVhzDhjYnABjqnAZsKEu%2BKVicp8cB1QKaDVVAzJsnmBRWFWxgmiXlSD521%2BJbxnz55fn6OjXS8xb%2Fp%2BYqgenEqWb1mG%2FcU6aCFRafDjkp9VpHxqWzhrdE73rlJpZVf3e9m6BY3wbQmb653o2ubDHtmISLhoSg2h0Tdbg6ajbGOsgrNwaWvS9nWOylOzmFquFPhPIzS%2Fiplj05hLCrblqnnEfZ6UpLjL0ixonLjtVDcwEQe&X-Amz-Signature=b19184553518f63a2c5cf6069c882e231597da5519247990cdb430b3d19acba4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
