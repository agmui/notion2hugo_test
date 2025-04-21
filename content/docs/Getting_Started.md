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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLTX5CK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDglDN42EJFBhKnLnXdfLFoQWjsfwtLRh8EQsJY13mpzwIgSBzRU3Rhq%2B%2BbFhIJcF9T7iGdwxiQlq%2BT4A92t5FxrZQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG2jUO%2FWLMbRDB5LCrcA4yTS5%2B81seva2jl4GuFOz1nUtDoNm3IwpCUwtXolkVg7UDKEx1%2FmW8jhJyB93SFKZiDojEY%2FBxGA7pWVWnzATfOYGeHS8OK6l%2BrzV81pEdx5h%2FzcwE%2F92Si13cCJKM%2Fjxdm1q3dXKz1MhRaOfHlGl3aQE7LXrIOZ7M6LrJ9VyI1gTR%2F4wuDMLfytBfLjEfGJhKEdC%2BLIt4ZohK%2FsSRMYB5KJEdDherNe%2BgyC8jvq3yVsVsvLP9cqaOUZ9RqXePdvnl4lY4UzY4NaTLk3dh%2F68kII%2B8okWuwdQRLxrhmr4Fndq31hpJOdYgExlLX413wo4uoYljzLqb4FlrL1Q%2BqDbpR8pm4%2B7bWViRnG1aR8l9nrgStI%2BsVT3zWdPDR7%2FHORKgFEaOjLBdL%2Btw8%2F0XC68W9xDegtKGbEoTvY6oWewJXpF5ET17u8EYnh7WxK45wgW7x0iHtW6qDJg36CpElV0K%2B4Mluwfe%2BRZyregUxez9OJupTYrt3VwvlUC7%2BLzHpTIqKPR%2F0A8EBJjNqEoTPFnWF460bWfxyboMTiLRhAyHWWFT%2BaJs6s4YjK0A%2Fdljy84cf5pgPwgAtOiMo80ZcDfE0fhuCC1y39y5SydUzWlr5useQKgC77UhJcSKqMLbalcAGOqUBSjeba3vRLnlAniMZXUUL4PrHvvPdthVUqoOLryosM3r%2FzQ4QGp6WuInXpD3JcjwZQfd%2FWbpfvHeCfyp%2FqAP%2BzaxQ7pMCV8sjQvbyg0LTJV6BgukzaKpEZeVyocrBH8b8Bls2ALEcBd439Ww0z5X2FI4hTo6%2BN5eUeOZfAZsVMexv3zSCsZ1GubSzT%2FPTtWUf2QKjJmPrcdji3oC5zij%2FNrzCXash&X-Amz-Signature=fc48c0d193a272caebba52f5eb0054fe1cde84d781dea439d3256a1399b04ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLTX5CK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDglDN42EJFBhKnLnXdfLFoQWjsfwtLRh8EQsJY13mpzwIgSBzRU3Rhq%2B%2BbFhIJcF9T7iGdwxiQlq%2BT4A92t5FxrZQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG2jUO%2FWLMbRDB5LCrcA4yTS5%2B81seva2jl4GuFOz1nUtDoNm3IwpCUwtXolkVg7UDKEx1%2FmW8jhJyB93SFKZiDojEY%2FBxGA7pWVWnzATfOYGeHS8OK6l%2BrzV81pEdx5h%2FzcwE%2F92Si13cCJKM%2Fjxdm1q3dXKz1MhRaOfHlGl3aQE7LXrIOZ7M6LrJ9VyI1gTR%2F4wuDMLfytBfLjEfGJhKEdC%2BLIt4ZohK%2FsSRMYB5KJEdDherNe%2BgyC8jvq3yVsVsvLP9cqaOUZ9RqXePdvnl4lY4UzY4NaTLk3dh%2F68kII%2B8okWuwdQRLxrhmr4Fndq31hpJOdYgExlLX413wo4uoYljzLqb4FlrL1Q%2BqDbpR8pm4%2B7bWViRnG1aR8l9nrgStI%2BsVT3zWdPDR7%2FHORKgFEaOjLBdL%2Btw8%2F0XC68W9xDegtKGbEoTvY6oWewJXpF5ET17u8EYnh7WxK45wgW7x0iHtW6qDJg36CpElV0K%2B4Mluwfe%2BRZyregUxez9OJupTYrt3VwvlUC7%2BLzHpTIqKPR%2F0A8EBJjNqEoTPFnWF460bWfxyboMTiLRhAyHWWFT%2BaJs6s4YjK0A%2Fdljy84cf5pgPwgAtOiMo80ZcDfE0fhuCC1y39y5SydUzWlr5useQKgC77UhJcSKqMLbalcAGOqUBSjeba3vRLnlAniMZXUUL4PrHvvPdthVUqoOLryosM3r%2FzQ4QGp6WuInXpD3JcjwZQfd%2FWbpfvHeCfyp%2FqAP%2BzaxQ7pMCV8sjQvbyg0LTJV6BgukzaKpEZeVyocrBH8b8Bls2ALEcBd439Ww0z5X2FI4hTo6%2BN5eUeOZfAZsVMexv3zSCsZ1GubSzT%2FPTtWUf2QKjJmPrcdji3oC5zij%2FNrzCXash&X-Amz-Signature=3518ff0a5f44231cf93905ac64bd7685dfb815b3542073944fbe02bdf563e34e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OGSUKLE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD%2FkSPiRTQaWpCsfaQbQedDKLzBrhmZlq8yvWNEC%2FNuTgIhAID7NYLl1v1Z5kUS8pJ21aa73zP5%2FIFFRjvKLl38kgW2KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ5CyCgXS%2Bo%2BVOlf4q3AOaYefMRnXSibc5kr%2FonzaAgIcdIlMNmvzQMQAUc8wmnti7OOwvKLbmY4PQQtw3vjWbotZLf8xyFtlXpSNBe5%2Bb9i6FdxbY6QJYEsUcNG38oYpy7A3ocFaN8OvSdUpdkvqel6T%2FzzHrA2UkTUDDCxaalKYz%2F30TOUKFmH7oDUEiO4ma5RGInOgW88jdTdOUeNyHpDpyxff%2Bjnu7kfnCX1VoUxMw%2Bf4Jw5qIwLDlpnq7FnkkQSfwBnpqRaOrHas03boLYl2xKPntCIRlvICu%2BSr9VA3tfuvbvZyZ80jD6R%2FW1QxuaizU5XJfc96qydFFTs6icf1NwpTj9KTAx67LujPcsyCnVpjk3tRCVFVT28OU0aT7i42F0MtUQ%2BK8P%2Bal8dk3MIv3utbZ54qosABaa59MYRsyonHmsPrYRlylyEdvA4tKFxIMZhD8DVaOGwCzzEqwA%2F%2Ftcz%2B%2FBe3CbJlgqRm6MpE9i26hpAJKnItAUhsieBz972sVoo9YXCTf%2BI4XlBD9Uu5D3MfGUbr8rTDWjvXI%2BZAKtYXMzUIIot5tg%2FW0QvH7WSbUEC6gZQQl6A7XP9%2BGEdwxVU4%2FM%2BPKh8Ltm2bk0NpingAyIeSl6bUkX8uxL2ChfPzLYiUs09m1jzCp2pXABjqkAYZUTh%2BgOzjSZvhrS0YAo7uVyHy3KWliIFIc7LVCNwspL7iw1jnDabHDpTMrrlD8iHZzeWUoTTV15%2BpFKYCQzWxKLeoYX0PyCVIhSBA%2B%2FfguHMDdHBl%2F0QQz3%2BBgabwntkXo4d%2F0xmOVP785wHG1g7wW00NWn8LFXJ9Avky8VqCoQHbH5IF%2FwIz6vUHRRjeDheOMuLz6socGq7oLO1862C0PFQUK&X-Amz-Signature=fb067726540201e8de29e935a3e0e967757b1d88ea6f0c688effb787dc00af98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z376X2IH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICbrFcLXMQXnTn7PhmClGqX%2B9OtPLvNA88%2Bv%2FHEJDTePAiAVtwPkjq23STIADitBgqb88vhKBnrcfn4%2F5Wf%2Bh0HW6iqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTZu4XZSHXoOxI5YDKtwDYyz2FtWKDpth16D5rO2gGa2MAkjQufedJOYNf3BTz0ckKN3KxpM3urCvMRrERuqukSed1BepEXpt1kt6nm3qW5HB5g1wmph93g1%2Bk9QQM1rmjI0ka9O20Blwg27TogXirW0Me%2BA9LXxiEnJQIxOlHVlEIiXrrwYZiMB%2BgWAPgAo%2FD99%2B5BBd9gH8iH7eRHXTuyXzyZQ9K7wPd5qAl%2Bt3qIabwwlKVegYfKph%2FiuzLXHniowFmOEM2%2BpMEAh%2F0Sq%2BHVr6LVH1r6st1aGG8Y0l%2B3BM4RsFQMJLNw%2B6amrk1xgDEKvMDKUi9jVKIdTYWn%2F5aeXwDI8KcoZq8FFgpEcnjSozeyNZnllYvRGdLndmYOWrSRXa8fSScOGhwdy5ojSnJmI3c5H2L5jg%2Frc2cUEuv1l1QQZ1IciISJMNyhD20lH2%2BXvoK9MtNBl4FO5pfzttYUZJphf3xJ7Qq3OjW6Jq5HIYSdlI58kxGrD3MB2UcGJw2kD7C%2FxKUbZ3J9lIbg8geZGRpfRXoVHFCRHlWfHAHQ%2FMmYHEB9E2WbQn4CeGBsP4JOSdZT0R4wH5wCfqN5qk%2FbgbU2Btmg9RAKfjI3MjYfzY4xEHa9gUyETzmUa833S1hBuOVu0Ie1mcQlMwxNuVwAY6pgEmvwGwkEzWzjQxcF%2B3Uh4Ji8wTs7vy6FE87NHwUj4ANmGp7UtrnFdtuk8v%2BEW86EottcJ2rw1aFotnE7myFttCU45U%2F%2F95vxP1Z4EU64Ub8nB3s0vcjYLGuPdaPS%2B%2BCK9xY3dcaqgBVdOJkCquKLuRGnV7R%2FfbVDzzfTJ7iXA6Gz8SXhV3vATQqP7ydBPL7G%2FF%2Fzy1acUqsQ29h%2FRVfuP%2FY9%2BNFmJ4&X-Amz-Signature=c38cd441c559853fd7d5e6f725c6f2b1053e36f3ab89690e13fe8150187ea7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLTX5CK%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDglDN42EJFBhKnLnXdfLFoQWjsfwtLRh8EQsJY13mpzwIgSBzRU3Rhq%2B%2BbFhIJcF9T7iGdwxiQlq%2BT4A92t5FxrZQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG2jUO%2FWLMbRDB5LCrcA4yTS5%2B81seva2jl4GuFOz1nUtDoNm3IwpCUwtXolkVg7UDKEx1%2FmW8jhJyB93SFKZiDojEY%2FBxGA7pWVWnzATfOYGeHS8OK6l%2BrzV81pEdx5h%2FzcwE%2F92Si13cCJKM%2Fjxdm1q3dXKz1MhRaOfHlGl3aQE7LXrIOZ7M6LrJ9VyI1gTR%2F4wuDMLfytBfLjEfGJhKEdC%2BLIt4ZohK%2FsSRMYB5KJEdDherNe%2BgyC8jvq3yVsVsvLP9cqaOUZ9RqXePdvnl4lY4UzY4NaTLk3dh%2F68kII%2B8okWuwdQRLxrhmr4Fndq31hpJOdYgExlLX413wo4uoYljzLqb4FlrL1Q%2BqDbpR8pm4%2B7bWViRnG1aR8l9nrgStI%2BsVT3zWdPDR7%2FHORKgFEaOjLBdL%2Btw8%2F0XC68W9xDegtKGbEoTvY6oWewJXpF5ET17u8EYnh7WxK45wgW7x0iHtW6qDJg36CpElV0K%2B4Mluwfe%2BRZyregUxez9OJupTYrt3VwvlUC7%2BLzHpTIqKPR%2F0A8EBJjNqEoTPFnWF460bWfxyboMTiLRhAyHWWFT%2BaJs6s4YjK0A%2Fdljy84cf5pgPwgAtOiMo80ZcDfE0fhuCC1y39y5SydUzWlr5useQKgC77UhJcSKqMLbalcAGOqUBSjeba3vRLnlAniMZXUUL4PrHvvPdthVUqoOLryosM3r%2FzQ4QGp6WuInXpD3JcjwZQfd%2FWbpfvHeCfyp%2FqAP%2BzaxQ7pMCV8sjQvbyg0LTJV6BgukzaKpEZeVyocrBH8b8Bls2ALEcBd439Ww0z5X2FI4hTo6%2BN5eUeOZfAZsVMexv3zSCsZ1GubSzT%2FPTtWUf2QKjJmPrcdji3oC5zij%2FNrzCXash&X-Amz-Signature=8a78793f80e2a6ce5854250aecd2edbb173bfaa01aeecd5d7467de6a21bd9121&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
