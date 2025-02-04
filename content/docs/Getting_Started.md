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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMI243S%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCLwYPclDkHX3li3EzSnsYS%2BtgEGdoacJy0UqdAbeyFgwIhANhO8qIDpQbCDjc5sESsIc1bffXB3pbvP0H2o13wYB%2B9Kv8DCCYQABoMNjM3NDIzMTgzODA1IgynxFL8PXDiAu9KJIUq3ANC%2FlzroT71G%2FrAvyi1kl%2BnpA6SN0wpNyg%2FVvZNV7DN0m1y6feNbfi5u%2F24NN%2BzB3wmflzvsFx6XKJB87ajYqLASlcIjHZNVoD0llZQ%2BRkBiljwQiaxL%2B%2BLkJoHNZ4t0ZYgbTsInXK%2FaM3Q2EPznLQF%2BmFVuoKMxpcfni2iOhdssChqj4v6aJXAi70z3cRzl%2FuoIX2APJvNPO8gwjOP9QRYV7jnAZjHMQ6Bj4%2Bjmj0xmuQ5JfQqTwUpifJbHa%2BpIO5Hc4MWrbCaAZ%2BQsVPgnIIZiJytAg3Gllb2AzCQobS58df2Ddnkc0%2BAEULYSghbBFfcWRIPGCsmzGu7l39X0UCqrzLSK6iGhCN6OzDDIaRcucmvsX7oDFLc7qouYLtVTWVb4Q%2BihQDh8otLO7jjOIV79LnwNA5ojLEMo%2FKgMvO%2Fd2xEHadGuSR0z8sSGadtyCMgRJuX1AZEWoWnSRNfpvArlq3NWZ8Jii1gzf6FBBQmsWs1SAGKzjMDsqIcqu3XWfVi088evkyCjR2h7drs14wPCkkt%2BFQSSOAaFXGIHAucM2%2FhBr0jqvF%2B7SmC3xvqbVe%2F8KGiqo9HII80uNZP%2B4wiv15xTYfnXEqDCB7fiXC3GR7G%2BfjNgMN1BjpQMjDwv4a9BjqkASvY8CACa%2FiIhzeYxTGfUoj6di2yU0%2BrFTIdI%2BfSJqUoEKX9xvLwaUj7T46aCH8tucndDew22w4gI5DZ07Rmo%2BePtDpAydBXc7RR98%2F3J5A1lVLnGLvTFxoHDoF8DJHkZbnp03Tj8ktLfZSIR6ARHxkzS2hl11RB19MwK6J1luSfGgDzKV9RHIr0ABO3a2v%2FLUNppjARhXvTZBHq2GPOSLZFVsEU&X-Amz-Signature=37407dccbc3dc17189e62d05424ce453b9adc70dd9ecb8e96e4829db717de65d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMI243S%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCLwYPclDkHX3li3EzSnsYS%2BtgEGdoacJy0UqdAbeyFgwIhANhO8qIDpQbCDjc5sESsIc1bffXB3pbvP0H2o13wYB%2B9Kv8DCCYQABoMNjM3NDIzMTgzODA1IgynxFL8PXDiAu9KJIUq3ANC%2FlzroT71G%2FrAvyi1kl%2BnpA6SN0wpNyg%2FVvZNV7DN0m1y6feNbfi5u%2F24NN%2BzB3wmflzvsFx6XKJB87ajYqLASlcIjHZNVoD0llZQ%2BRkBiljwQiaxL%2B%2BLkJoHNZ4t0ZYgbTsInXK%2FaM3Q2EPznLQF%2BmFVuoKMxpcfni2iOhdssChqj4v6aJXAi70z3cRzl%2FuoIX2APJvNPO8gwjOP9QRYV7jnAZjHMQ6Bj4%2Bjmj0xmuQ5JfQqTwUpifJbHa%2BpIO5Hc4MWrbCaAZ%2BQsVPgnIIZiJytAg3Gllb2AzCQobS58df2Ddnkc0%2BAEULYSghbBFfcWRIPGCsmzGu7l39X0UCqrzLSK6iGhCN6OzDDIaRcucmvsX7oDFLc7qouYLtVTWVb4Q%2BihQDh8otLO7jjOIV79LnwNA5ojLEMo%2FKgMvO%2Fd2xEHadGuSR0z8sSGadtyCMgRJuX1AZEWoWnSRNfpvArlq3NWZ8Jii1gzf6FBBQmsWs1SAGKzjMDsqIcqu3XWfVi088evkyCjR2h7drs14wPCkkt%2BFQSSOAaFXGIHAucM2%2FhBr0jqvF%2B7SmC3xvqbVe%2F8KGiqo9HII80uNZP%2B4wiv15xTYfnXEqDCB7fiXC3GR7G%2BfjNgMN1BjpQMjDwv4a9BjqkASvY8CACa%2FiIhzeYxTGfUoj6di2yU0%2BrFTIdI%2BfSJqUoEKX9xvLwaUj7T46aCH8tucndDew22w4gI5DZ07Rmo%2BePtDpAydBXc7RR98%2F3J5A1lVLnGLvTFxoHDoF8DJHkZbnp03Tj8ktLfZSIR6ARHxkzS2hl11RB19MwK6J1luSfGgDzKV9RHIr0ABO3a2v%2FLUNppjARhXvTZBHq2GPOSLZFVsEU&X-Amz-Signature=65a6684aca6e93c5603fb69d2e5d299ba8f80a28cbee6a7081616880ddcce832&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AROB7FG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCFf%2BBKOUZMZhwGVhhWU%2FeKcY5ZcxnWgXyvqymRBz17JAIgKHqqdyROOaX9152EwUKoX%2FrHiaWt8NctgEqyLR%2B4ILIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDP4umVaOBkzUbYJvuyrcAwKIJLzLvDQgFDanuiivViAO0zyrsPtx4i2eXn60aTwqlVKouKxGEQO1ZVn%2FFXOyp1rnLtA9jLVK28k24SKw4lp2fVezYlgJnsIotR%2B9TXBvymwGgBQIRo5swfqETLw%2F98ivMj2sKGq6gGrC50NfXeEZ8IdokDXKsoMoJBzb4ZOu%2Fh5ogkGdGFlnEoOA61WrvuRjrVE0KB9kwYROEmOuKBaxX%2BJTyOXzYXpKb5Kx6jNs4s94X1vNQCWw8yLlnJY%2BeSesIDWBGR59lAUiawQfLaO9FLzQi%2BsZL75s0fvf94DGpdzZ8RVArXxtFu3LK47JIENWiBXoDB6Vt0RbpkS1Dh3Ii29oiDf41w1gc8hCY0tCUt3KOOwq49fbm401%2FO6XtpM1zYrviHUAEVn%2BWbLt%2BjdYhSbGabsXx%2Bgip6xJWPw1SNjsq64v2dlSlz9DFOOf1cQDma%2F%2F3Fkf15eDyY7mhpeblf378yeucjpndcyEdXkjUPggc1GsMJ0NXCrbI5t6kZAoBwuJFxbE2nnTaw4OlrSap7ZiIwYfzGZ07%2BTI%2BaT1t7AkV20F0rTyD0Rf%2FcUma2Yg%2FHJDHoVjJCGnbZR%2BJPjzSvrOf6oigTmZNs4WOmE670%2FDbqHQuh4R7qUHMPG%2Fhr0GOqUBzuzj92r67DIu7jDAlM3CS%2FpGOwfAPH5SzJvKjuCPW%2BVDVSyEJMvhetnOnkpEbdDWsxapQf18INmWfLrANF6BfPheQjfy5lB%2FZsKUiU1NLVB%2Bd70vsoX%2ByTCa0IfqBqC053l0NPsIKgKlGAzo4IsdqLJAruPjPMgwbIFUHRkHgwENrl3kqmax%2FgJDif1oD%2ByL%2BSvJGGvI58zvbp1QaYEmc4WFZSNW&X-Amz-Signature=92fea97625a5a560b23dcfd0a6b8ee5d99d3964b7a40056f058054ec203d321f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YD7W7KO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCg4UTvZvRBNHvyPTun7crP89IgQ6LbrM8Li6rs%2F17fhgIge5%2FLaoRbdxo2WIPTOJuRwXpJVdTncWmoFzAcVD6pF74q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBNzgMEkXAaqwcHcRircAyKf0otOg3lixr0rle%2BqoJUs5o4%2FFNTYfXObljAtq3lt5tQPQjebGkl38%2FDqwFTg4fIteHLLYsrRCTAMlR3pIIftCTxYvx3LhY5UiC4MoKGOHEoZ15LldsHl%2FIE0ndyLTCSdhTIA%2FPMkSzpvBjXvMdXdXheUhd%2B7y13WV8%2BK3yEzewXnOde5hxMu4l84UGg5aUxs%2B3Irs6tZ6j80n2hmG7MEvY2fVuiwaZ6eWDGDWUgYMEgIT%2FI%2FjEdvfdp8F5zXypBL80N%2F5Txm6d5kFIBG%2FRDZEH0oW%2Bi7ylEcmC7u2VEko%2B%2BGPvmSaShG5x%2F3VbIC331PTh0tg2EGWCr5fPHOwlawmOJdESzMt0cK7YgaSK0BgX1HvlKoCvnzD4aYbwpxO6m2RGF%2FwFzhT5jqxF2pgAZ4OpOyC7z%2Fo1WsLtaFe7BRUyq95KMG659mEl2se1RampKCDXPgXdbm6eutLGCK1aLExGHLu3XwhgVJIuNpBkWIPdnjhd3QvGe55iLr6J8QV2g6hOxW7ssH%2BxUuZ5%2BNf2b%2BqBR0qzJum8K%2F4oHpisUK3oRDf6E76nku%2FsXhW895LdoQyF2%2BmKwCoYXiemfKBocNuzJU5cXidC9kBj%2FhaVB%2FpIDFQraTE71dZ0E3MNC%2Fhr0GOqUB1MMceENEUMoLWpA2arE2ES%2B0WyahsSqp6iqA%2BKW49KpLp%2FQe5ls6kCuNY8KZxCLaJKirlTCAF0zonRF8wLEcclNKtZkGGZM5zIFi361lPtyOBKlbBcRuwRC%2BNYD%2Fvy%2FAMh5Ae2NSRk%2FhzavqwtjVSAjRBlH5Ms2yXcIVVXzaFQ2zt6elKshKwRf8sVT5%2Fp4W%2Bu4uqDcZ7kesIGuEhDxFR%2BDqk4UI&X-Amz-Signature=c0d081e769d4cd6ba70c7b40f8bfc56796fe500dccbb3f16aed28e476bbed23a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMI243S%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCLwYPclDkHX3li3EzSnsYS%2BtgEGdoacJy0UqdAbeyFgwIhANhO8qIDpQbCDjc5sESsIc1bffXB3pbvP0H2o13wYB%2B9Kv8DCCYQABoMNjM3NDIzMTgzODA1IgynxFL8PXDiAu9KJIUq3ANC%2FlzroT71G%2FrAvyi1kl%2BnpA6SN0wpNyg%2FVvZNV7DN0m1y6feNbfi5u%2F24NN%2BzB3wmflzvsFx6XKJB87ajYqLASlcIjHZNVoD0llZQ%2BRkBiljwQiaxL%2B%2BLkJoHNZ4t0ZYgbTsInXK%2FaM3Q2EPznLQF%2BmFVuoKMxpcfni2iOhdssChqj4v6aJXAi70z3cRzl%2FuoIX2APJvNPO8gwjOP9QRYV7jnAZjHMQ6Bj4%2Bjmj0xmuQ5JfQqTwUpifJbHa%2BpIO5Hc4MWrbCaAZ%2BQsVPgnIIZiJytAg3Gllb2AzCQobS58df2Ddnkc0%2BAEULYSghbBFfcWRIPGCsmzGu7l39X0UCqrzLSK6iGhCN6OzDDIaRcucmvsX7oDFLc7qouYLtVTWVb4Q%2BihQDh8otLO7jjOIV79LnwNA5ojLEMo%2FKgMvO%2Fd2xEHadGuSR0z8sSGadtyCMgRJuX1AZEWoWnSRNfpvArlq3NWZ8Jii1gzf6FBBQmsWs1SAGKzjMDsqIcqu3XWfVi088evkyCjR2h7drs14wPCkkt%2BFQSSOAaFXGIHAucM2%2FhBr0jqvF%2B7SmC3xvqbVe%2F8KGiqo9HII80uNZP%2B4wiv15xTYfnXEqDCB7fiXC3GR7G%2BfjNgMN1BjpQMjDwv4a9BjqkASvY8CACa%2FiIhzeYxTGfUoj6di2yU0%2BrFTIdI%2BfSJqUoEKX9xvLwaUj7T46aCH8tucndDew22w4gI5DZ07Rmo%2BePtDpAydBXc7RR98%2F3J5A1lVLnGLvTFxoHDoF8DJHkZbnp03Tj8ktLfZSIR6ARHxkzS2hl11RB19MwK6J1luSfGgDzKV9RHIr0ABO3a2v%2FLUNppjARhXvTZBHq2GPOSLZFVsEU&X-Amz-Signature=18efe0a3fe5885231980c12daf37c1f9dd81b859fab6d034fd4fbd1f810b338f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
