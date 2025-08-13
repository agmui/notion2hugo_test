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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZ3GKVQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOkKx0RYOfkY0p6PAQbWZ7OkBCr1bLONEf8qCzu7RGWAiEAhv1rLbzDaV30TUHs%2ByohbtjxPrJu%2FwMt%2FW9gznWiVSEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA3KcpZsGl2w1SPzGCrcA6QQqRN73DGWh%2BEtq0wSRGosPKv8CSzd1myYGcheSusGprq3qAiWJFusLN9f2gr7ILWL0sXmUkW7a%2B96MlmSgiLiPtBeT2ZlgAtoON%2BThWyeaRnAgXKZ%2Fuw%2B06cxNbGVtd8dD7lsFuvuvLD3gh7JL%2BXovG96AqWBwHfQDZjVURp2anQKlpSvtygSIGVrVYItBpYbi7IWmnh0Gc82%2FNjrj0JICXGPYtcR5XgNczcHunv8STWJGSFOXpavNhN0OyR4crb1Ke9d5BexFRF%2BzjvZzyyLD6esYqoSRPkcIKfBx7IiEjH0mMDMbcmjQWWQRxBxlqT3QeDuURXlMzAXqDOagEWz4h6%2F2Cf1b4zXnmxiq2Jhka9ZGDxmqmtgCgL1X9jv%2F9tO4fnhRQ7B2QCsqFDw8cjBwAC2VHAwMwZmwAUU7jmX5Z2MYbEZByXeWg67fDZw83tQflWcojoK9sxjWKdMS9F4jJiklYuo7E46ofRYGLGH90GFj4ny7092JNVAHpfcTsa4LkmeTegkHy3liAdz7z70OVUwsf5tYv3BjUdLi669U24iZwJPDt%2BRc3J4aja9ca%2BFNREutFk5JoaD9B2AoQtIbTPe1RENpU5BlUhNE%2FadONYF9t81RbqaJQTcMJ2R9MQGOqUBhI2ACb1MKqXzVvxCllk%2BGR5Sq3KGFkJdUgybGNvS2L%2FkkZJCrf8oh1kE%2BI5NQ9paiDetMxaPDaDLlBst7wQr0Qr%2F9MUc8jQtbLMcYUQYfcnop4VrvmZDqNuEu9a6nAb1DPEHPuzOf0hmUhzMwn8lg0VhdZP0yfAzfPXtzOFkmDs%2FEoD9aAEtB3RDZSjwUIH3Grk924tHJnbOUiCYds8cDy%2FUiw6k&X-Amz-Signature=87ed9c38362c601a16878652c90eac8cd80b2371cf26aafd948758f38fa5d886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZ3GKVQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOkKx0RYOfkY0p6PAQbWZ7OkBCr1bLONEf8qCzu7RGWAiEAhv1rLbzDaV30TUHs%2ByohbtjxPrJu%2FwMt%2FW9gznWiVSEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA3KcpZsGl2w1SPzGCrcA6QQqRN73DGWh%2BEtq0wSRGosPKv8CSzd1myYGcheSusGprq3qAiWJFusLN9f2gr7ILWL0sXmUkW7a%2B96MlmSgiLiPtBeT2ZlgAtoON%2BThWyeaRnAgXKZ%2Fuw%2B06cxNbGVtd8dD7lsFuvuvLD3gh7JL%2BXovG96AqWBwHfQDZjVURp2anQKlpSvtygSIGVrVYItBpYbi7IWmnh0Gc82%2FNjrj0JICXGPYtcR5XgNczcHunv8STWJGSFOXpavNhN0OyR4crb1Ke9d5BexFRF%2BzjvZzyyLD6esYqoSRPkcIKfBx7IiEjH0mMDMbcmjQWWQRxBxlqT3QeDuURXlMzAXqDOagEWz4h6%2F2Cf1b4zXnmxiq2Jhka9ZGDxmqmtgCgL1X9jv%2F9tO4fnhRQ7B2QCsqFDw8cjBwAC2VHAwMwZmwAUU7jmX5Z2MYbEZByXeWg67fDZw83tQflWcojoK9sxjWKdMS9F4jJiklYuo7E46ofRYGLGH90GFj4ny7092JNVAHpfcTsa4LkmeTegkHy3liAdz7z70OVUwsf5tYv3BjUdLi669U24iZwJPDt%2BRc3J4aja9ca%2BFNREutFk5JoaD9B2AoQtIbTPe1RENpU5BlUhNE%2FadONYF9t81RbqaJQTcMJ2R9MQGOqUBhI2ACb1MKqXzVvxCllk%2BGR5Sq3KGFkJdUgybGNvS2L%2FkkZJCrf8oh1kE%2BI5NQ9paiDetMxaPDaDLlBst7wQr0Qr%2F9MUc8jQtbLMcYUQYfcnop4VrvmZDqNuEu9a6nAb1DPEHPuzOf0hmUhzMwn8lg0VhdZP0yfAzfPXtzOFkmDs%2FEoD9aAEtB3RDZSjwUIH3Grk924tHJnbOUiCYds8cDy%2FUiw6k&X-Amz-Signature=6dcbdc0058d7bf4baecc2f65eafd4b9e3c8158716e6eefe69717a3e9f76e6daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZ3GKVQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOkKx0RYOfkY0p6PAQbWZ7OkBCr1bLONEf8qCzu7RGWAiEAhv1rLbzDaV30TUHs%2ByohbtjxPrJu%2FwMt%2FW9gznWiVSEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA3KcpZsGl2w1SPzGCrcA6QQqRN73DGWh%2BEtq0wSRGosPKv8CSzd1myYGcheSusGprq3qAiWJFusLN9f2gr7ILWL0sXmUkW7a%2B96MlmSgiLiPtBeT2ZlgAtoON%2BThWyeaRnAgXKZ%2Fuw%2B06cxNbGVtd8dD7lsFuvuvLD3gh7JL%2BXovG96AqWBwHfQDZjVURp2anQKlpSvtygSIGVrVYItBpYbi7IWmnh0Gc82%2FNjrj0JICXGPYtcR5XgNczcHunv8STWJGSFOXpavNhN0OyR4crb1Ke9d5BexFRF%2BzjvZzyyLD6esYqoSRPkcIKfBx7IiEjH0mMDMbcmjQWWQRxBxlqT3QeDuURXlMzAXqDOagEWz4h6%2F2Cf1b4zXnmxiq2Jhka9ZGDxmqmtgCgL1X9jv%2F9tO4fnhRQ7B2QCsqFDw8cjBwAC2VHAwMwZmwAUU7jmX5Z2MYbEZByXeWg67fDZw83tQflWcojoK9sxjWKdMS9F4jJiklYuo7E46ofRYGLGH90GFj4ny7092JNVAHpfcTsa4LkmeTegkHy3liAdz7z70OVUwsf5tYv3BjUdLi669U24iZwJPDt%2BRc3J4aja9ca%2BFNREutFk5JoaD9B2AoQtIbTPe1RENpU5BlUhNE%2FadONYF9t81RbqaJQTcMJ2R9MQGOqUBhI2ACb1MKqXzVvxCllk%2BGR5Sq3KGFkJdUgybGNvS2L%2FkkZJCrf8oh1kE%2BI5NQ9paiDetMxaPDaDLlBst7wQr0Qr%2F9MUc8jQtbLMcYUQYfcnop4VrvmZDqNuEu9a6nAb1DPEHPuzOf0hmUhzMwn8lg0VhdZP0yfAzfPXtzOFkmDs%2FEoD9aAEtB3RDZSjwUIH3Grk924tHJnbOUiCYds8cDy%2FUiw6k&X-Amz-Signature=a2d0747ad0352b6f535c3755a6c842b83b0a70907ae52547157d51dd265cd764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSPAYKT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fhixbd00i2q7qwT%2Fs56u7vLGEcYTt9OFNz35nUPbMnwIhAJ4NFWyE8I6zwyc1uoS%2FwuzLp5wVoiQrQyYcunSPCqHkKv8DCDcQABoMNjM3NDIzMTgzODA1IgwLRpZB9bIF1N0gBAMq3AM2l2fnt%2FtwmiVYwoIIF4jgMwpFSYO1H2JstzVh%2BZuNTi%2F%2FTLM1nswcGF%2BmP0zZTb%2Bxe3KIRWO%2FzUq6qe8Jdulwz6%2F6UfcQFmfKzADlsueYz%2Bln4I8XJVjzIZXA9LDS5w2k8RshQdK1tJeW3fixvhHrwcK1MixKyutviZvCrPD%2BuvhxL%2FuUi7GoHwwuTfWutv%2B0vmGzZHgpPlSGQ8Klfu1%2FFpyqTEX2Tinn9a3XTOnUDdbmbwJNp%2Bvg2o6pht2J9lcGhAOG7ZXvzB3LvKxAUiQnr22MA4fJUwNhU8NLMjwzuOXNVjPNI8fdZVqQpWM%2F1doNVNjPDUuW80ZEM6%2BwT7xt4%2FutVzA6RgL1m8Byevp2tk6fSGhkpDUkKb7Qdy6VX%2BCDdUVpXuVegfK0%2Fgk0iU6A0TiMOG%2Fof0Hv7HRPkRRRjvShWVL9OgowN85KOeHh%2F%2FodFgqdTz77eXrkznbuGi2xCZ9qN6prI7fSo5rDwsUFsBfiuT3qKKSAX%2FBlfKjxJNIBdfkJvAjct3ADsobXvCZVF%2FNA15U2laweAsYInhmFy22iWRTvXhmRsZYaKQqKAG19cuBikeDZIlcPfmcS057EwEJCc5FG%2BR%2Fa5tay6RkLCi2Xu6k2V63Jzk3G8zDHj%2FTEBjqkAa2Zx1%2BfTPVHxXEkyam0W9Ny%2BlJu9cM8imyPtSfOQ1J%2FrHV%2FjzyzgekyQ4vkTYjNNf5L%2BtJR9xiuiQiJm6eYBMbvKmQpR%2FU5Fo8sWuv4OsZtdFBHNaYnQW82dZnf4Q9mRUTuCA4%2BLcaqMHeurVeF1I%2BP5Dyd7xd1Wd16wHjf10%2FtpqTrN13FXfVExFTwo%2BBXwYjfz4USiF02%2FB%2FVX4I6R4tCUl31&X-Amz-Signature=d81e557db4acad1b1177b6820d02cd9a3e6570881e7425c78c96769e942881a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IAOVODM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5nTzEKNKKYqvtMKfrwQzkhEhJ%2BVh6Ft9HftPq8VMaAiEArqMLtwyjhY%2B32iwE6ujBhcpSRwa1Y5CvmywJ7UeHHkkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEnjjCyGhV4C6zHQfCrcA4FndujQAez%2FZxTS36L0qUlMPusOPaDnrtJVTFGO2TK%2Bbiu5Kbdmum1g299IRMxlC6HD2BcRyGv13hFT0IZZEYNBbEt3Y%2BeXjSd02UfhI0mwwqsarGkjDg6pemRGNu81ofx7JFo7SCa11ehhLeyL%2B1cmJP18ehUqQeUuSMKttlm74XzAzX4PEUCToazV0HFoNzw3NjiHFCswofWAf3uKOjE5GyT5647zvSS8ggZ8KsMkC0zsHWjarqAmOMQHk1ymuo4%2B%2FTvV5R%2Fo4126BKWViM3fH8Ph3izcdVBps4igZWBhHWouQGj881IBgBj8jHld2rwkdhbVa3MJzU9bb7RVlQnn1jrBr976%2BQuIMNo4nFAXEX7i0UQd8u8jL%2Beo0cBxuU%2FOA3BVySseGqeOiBHDrlQCYTYUezll93Vvm0OReLdqDsB%2ByWNLSKf9nk3SkE%2BFBtJdkgfQg%2FckG6O%2BQJGw7HgC7FIMbj9aQCszsDpaGJ7c1QVAFm6kvu2haIZpWHKMKA8grZ%2BQ3PJLdQhHKnCkxxno%2FhRYay2il6rLeFzRMtFyJGWSO35UamY8vUQTCpm0JgTU8N%2FsFPY1hmO3nON2oAzm%2F4Jebb5adOQ3QtFtczVrKSfDKwLS%2F836hpb%2BMOOP9MQGOqUBofyDazh6lJV9KhdkmbsE2h4i365GC4l%2FjkAhpzhZVM7%2Bsne1Xv%2BEbPDX5I3jbGP7W3dmYVN6WFIZghtD%2FAT3gXpO5%2FBLiT9g2GClW1gD%2Fz83R6sYRafrcOzRgVVLhE8V2eRHSoz0%2FoXhYpnOZOlNG8%2BasW%2BeMJ4tWcvHHBSE0X1UpH94mNjuICKHU3RN%2FnRJMAEUfgvRK9UETOmiP4PljQo%2FGopS&X-Amz-Signature=9d9abd29464406dd444bb740e38971e2fb14305f08663e217ef5f22297938be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZ3GKVQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOkKx0RYOfkY0p6PAQbWZ7OkBCr1bLONEf8qCzu7RGWAiEAhv1rLbzDaV30TUHs%2ByohbtjxPrJu%2FwMt%2FW9gznWiVSEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA3KcpZsGl2w1SPzGCrcA6QQqRN73DGWh%2BEtq0wSRGosPKv8CSzd1myYGcheSusGprq3qAiWJFusLN9f2gr7ILWL0sXmUkW7a%2B96MlmSgiLiPtBeT2ZlgAtoON%2BThWyeaRnAgXKZ%2Fuw%2B06cxNbGVtd8dD7lsFuvuvLD3gh7JL%2BXovG96AqWBwHfQDZjVURp2anQKlpSvtygSIGVrVYItBpYbi7IWmnh0Gc82%2FNjrj0JICXGPYtcR5XgNczcHunv8STWJGSFOXpavNhN0OyR4crb1Ke9d5BexFRF%2BzjvZzyyLD6esYqoSRPkcIKfBx7IiEjH0mMDMbcmjQWWQRxBxlqT3QeDuURXlMzAXqDOagEWz4h6%2F2Cf1b4zXnmxiq2Jhka9ZGDxmqmtgCgL1X9jv%2F9tO4fnhRQ7B2QCsqFDw8cjBwAC2VHAwMwZmwAUU7jmX5Z2MYbEZByXeWg67fDZw83tQflWcojoK9sxjWKdMS9F4jJiklYuo7E46ofRYGLGH90GFj4ny7092JNVAHpfcTsa4LkmeTegkHy3liAdz7z70OVUwsf5tYv3BjUdLi669U24iZwJPDt%2BRc3J4aja9ca%2BFNREutFk5JoaD9B2AoQtIbTPe1RENpU5BlUhNE%2FadONYF9t81RbqaJQTcMJ2R9MQGOqUBhI2ACb1MKqXzVvxCllk%2BGR5Sq3KGFkJdUgybGNvS2L%2FkkZJCrf8oh1kE%2BI5NQ9paiDetMxaPDaDLlBst7wQr0Qr%2F9MUc8jQtbLMcYUQYfcnop4VrvmZDqNuEu9a6nAb1DPEHPuzOf0hmUhzMwn8lg0VhdZP0yfAzfPXtzOFkmDs%2FEoD9aAEtB3RDZSjwUIH3Grk924tHJnbOUiCYds8cDy%2FUiw6k&X-Amz-Signature=1c7d395cfb48229a036a0f0704a0bd7479921fab34a9db4b40eff74a98b21369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
