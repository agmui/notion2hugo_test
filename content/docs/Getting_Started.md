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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOIAMKM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCXpJFIVDUs5HucV7P4M1R439TrUyAuMFCtinK1GoqBNAIgPmztFr%2F19NLRdGFa1H%2Bp3Apiaij%2B8%2FDWu%2FUWXE0P7bsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMoNDHXYvvLKm4afyrcAybMOWDr8TXgUN4RiAu30wvRykv9%2BTrwjb7e99AD%2BZU0okqKRd3ybjobMbOrLW15gEliVBq0z%2Fc34hzq2jzVgP8KK4tiDpRlAKTU7nX94gymlN5VwAMVQAWaR482Ng2goJkLqIDIZqV7LjMTauhUm4Tv%2BqSLa8IyHGHofnr4LhkollvZ9CKUPRNACV9Sgtq2eIlD0qLboeU23FLXpRHWqvhzRWMwBMLjxSdEzEyBul3w7UVTxFQNEkd1MFjGqud2XZGnlbBDv75rrF%2FZ6Zg4vjElOK1vhtdJsW%2BdSt1JbsS3Krnjqcaz3lA6YvBpJQ%2ByagTLGDf2k6oK3DfxtCE4TAKwbUo8jc8qOKovB1bXQCzztTPlr6Yc9PZXOuPtGZCekoBMwqewLjM8ZEtYp3gDhcoEHUqqPfiQo4a%2FbcLX%2FXfQgRa7qz%2B2IIgjJZqL1hbpld5w2vDTwv%2F4m%2BRwHm8Hjo2QOHcggje92b2C8KawT3IjcRN%2BjVHuocXhfDSaztNgRIUQnOVPZzHQUUZE%2FABCnAP%2BxMGXkHV9KlipZ7c7mLPNrdQu%2Behx2edwhs4UtROYi650wk5xdDhBIAOznd9a8U6zKfLG5QX8T7BBSrRBT7Jn0WxAG2tDdgRlbf6%2BMK3Bsb8GOqUB7YYeBbCBtz0sd5rzr96Hw78a%2Bq98KNnRqbvbfGwv4DaMTqO7N65YLVQi560a8cJkoAqTmSiLkwNJeL7%2F6RM284%2FTqk6dk%2F%2FETqr974PUSUBQOcslDtO4xl%2Bl297KdbTXFhDXkdu1uluw9VUo43YJYzbVcpJ0ET6sxSvO0E9nK31MlZNFGMvACjcQ9nC9tHxUEqd8YT4sSDQk%2FqEL%2FJcNwfPzMake&X-Amz-Signature=796c266bb17acbeb14affcdd8fd0835c23768b807e492b3ddc833393df8e72a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOIAMKM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCXpJFIVDUs5HucV7P4M1R439TrUyAuMFCtinK1GoqBNAIgPmztFr%2F19NLRdGFa1H%2Bp3Apiaij%2B8%2FDWu%2FUWXE0P7bsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMoNDHXYvvLKm4afyrcAybMOWDr8TXgUN4RiAu30wvRykv9%2BTrwjb7e99AD%2BZU0okqKRd3ybjobMbOrLW15gEliVBq0z%2Fc34hzq2jzVgP8KK4tiDpRlAKTU7nX94gymlN5VwAMVQAWaR482Ng2goJkLqIDIZqV7LjMTauhUm4Tv%2BqSLa8IyHGHofnr4LhkollvZ9CKUPRNACV9Sgtq2eIlD0qLboeU23FLXpRHWqvhzRWMwBMLjxSdEzEyBul3w7UVTxFQNEkd1MFjGqud2XZGnlbBDv75rrF%2FZ6Zg4vjElOK1vhtdJsW%2BdSt1JbsS3Krnjqcaz3lA6YvBpJQ%2ByagTLGDf2k6oK3DfxtCE4TAKwbUo8jc8qOKovB1bXQCzztTPlr6Yc9PZXOuPtGZCekoBMwqewLjM8ZEtYp3gDhcoEHUqqPfiQo4a%2FbcLX%2FXfQgRa7qz%2B2IIgjJZqL1hbpld5w2vDTwv%2F4m%2BRwHm8Hjo2QOHcggje92b2C8KawT3IjcRN%2BjVHuocXhfDSaztNgRIUQnOVPZzHQUUZE%2FABCnAP%2BxMGXkHV9KlipZ7c7mLPNrdQu%2Behx2edwhs4UtROYi650wk5xdDhBIAOznd9a8U6zKfLG5QX8T7BBSrRBT7Jn0WxAG2tDdgRlbf6%2BMK3Bsb8GOqUB7YYeBbCBtz0sd5rzr96Hw78a%2Bq98KNnRqbvbfGwv4DaMTqO7N65YLVQi560a8cJkoAqTmSiLkwNJeL7%2F6RM284%2FTqk6dk%2F%2FETqr974PUSUBQOcslDtO4xl%2Bl297KdbTXFhDXkdu1uluw9VUo43YJYzbVcpJ0ET6sxSvO0E9nK31MlZNFGMvACjcQ9nC9tHxUEqd8YT4sSDQk%2FqEL%2FJcNwfPzMake&X-Amz-Signature=e748af3b0aa66bb5c481adb93dd330afae3621e750f0a198e1b8f50b6d3882e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3SCSPZ5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGOaIfXAiyCdXUomIYwbydywhHtlLKVliF5fasuqa9FaAiEAllpfyfixkdj4VV%2BPvkZATB2L44l8vpOgq6wFc6v4iGQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5cCg5HFoSwEafGuCrcA5XpNcfgK2HEJ8hP8aJR8hspPPSu7K38sZMm3Hz9EkABCp61yvI1zSPpLcrdXtdOH5yA%2FOxqXDywQr7X78g1xJKzrumP5JS2NK5u4g9IFt2Qiqyzqpv9uMgwfK6m6vg92vAeAIP9pCmxYX3fgzbhHUok%2B139Y23TlvShNgYMx32sAy0YSY%2BPhwqJBZGV9zGVpzy5gF1oVe5XHO0aVUiYgShvBYnNIRL0BonC14F3UxwehdPmslLJqoaiqrMfVYZiCjCPyXzvKav3jU8mLVz70qmgE7sOh7%2F%2Fz386OKxT75jrb7WW1WR1mSpQhXbNOwXTeCToGtrFXsZ4THCdGxd1YUJRUHGtxGDGhWpW5qt9TevlAY8bEFco%2FH10uZj0dtEKzoNOnO7q8gwqp%2BQJYxS7gOxaAfLh9qoy%2F2xAhosWPWYW1qOQDdEQSE1fDT93ooTjyRfjn48GmTFrLv6TIZ6hF8qRgNVTsKeoHkz8ncm6A7HxTaA%2BrlAvdsusbTZRfY5yFItF43%2F2HUqGoB23v0CABoUWD9H874myHXKekySB4Nx7dJaOp3JJOAzbY3UqvjVd09PCUW452QmL01TYiuklFzmatcoLasxm%2BZBmdey9Za2eSn12i3%2Fsdz%2BU7smUMOWosb8GOqUBhcTrI7Fw25%2BoDdD5idODcz50z%2FVak0ui4f%2FlRuXXyNGp6VxYLbAoUpVnX3eQN6Cq%2B2ghLLId3AAkoTEJ9VgHoBq0o9dE4HrPs7VqyEMsPawj9WyDE8tMudX4hmrEHYE7xxWbAZqyLttJAD%2BhfG6pumje5BJQuyvA%2BmyYfp37TJsfz01CH21hfY%2FyLGH4lXBDHL69MArjwz8O7w7gL9q%2FesExANaa&X-Amz-Signature=f393d3403f0cd6fae363323d238d2089e217984ab55272ac8e0a98ae82d323bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIO6PTWK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDYWRgmMyYv5fP7KzF3oaZpbHP3KmjwnQGd%2BfZyd2J%2FQwIhALoZPE%2FrrCBPWw%2B%2FD%2FodmJHLf%2Bh3Pd5iqz3V35bczxy0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeUmmOYBys8nID4X8q3AMexuq2dIjFhoo7EEBIE1joE0%2BzwmftkomWPXpwbb%2B7rrsVpvd3iDU2uuQtZtZdi0edI7OLSfGXqB01keIEML3CQfU%2FcLIgCL2bfI8%2FrL5uO5%2FEres4%2BULYx8SVD0UeuvHc96dVKeH%2Bmxl041gqrSA5l5OfxBcNjBCOfGjI6DOa4cmfxlpolEZl9tV0Iute4y3fjdC%2Fih06FWfZ13SEtH529gJ6ceDYI6aNH57V50lFmpc%2FW5hQ0TSX%2ByaRdOhdd%2FpbA81FvooBkOOj2DjXTNdodZHeynWx%2F1%2Bk4Qup9llQx3VMhyRE4hKSI2Ss7QKfR1WKapQR8NKjifItuC0q2PXEBzkO%2F1dENpXNrd15k6T82y91Hj5GEVc0Hadiyek295spl0RDmMlwnzeHxLTMeNAyM6QQemABnOmMbLrC83aDEQJpSxuHDrgReXSHj0gue9WE19qrhjDyQVt8KosYFcWqDAhLEjIjNhOsjKFoFGmMYqTnSnadqh9RUTciPGwSbyujL7yvykgYQKQMhySA5JLa3cfpb6U5HubhgLCHOHlqhq70A6vrDSCVR5sCg5q6cPhW4t%2FIKmCYmxEdTh8q%2BTskKlxRnNYA9O64uC5Ld0712CaRX9GLTaJMRzaMQTDbqLG%2FBjqkAUvUNmQJQCslvJ5gvhLJPJ7JR%2B8iwO6TJimF6iW0T%2F6ODCrQ0e4JTYZG4HyHammC1nba9t36VyYKB01ug3XOKxuLpjtMoaEOPuFokMyVvV0DOp62igY3kNtJzKo0n7y7f%2FLbUAhQVmBk96OoFZWZNghkYBF9AE1WXt3H4CWlyZCIq8u9CkfdYxswZy5zIngj28SBnnWcS%2BvJvy9%2FZVsq6twBEmS4&X-Amz-Signature=f6083dc4965a73f45dececcf6398dd10d563ee8a32d30a70c3726d6ace65593a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOIAMKM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCXpJFIVDUs5HucV7P4M1R439TrUyAuMFCtinK1GoqBNAIgPmztFr%2F19NLRdGFa1H%2Bp3Apiaij%2B8%2FDWu%2FUWXE0P7bsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMoNDHXYvvLKm4afyrcAybMOWDr8TXgUN4RiAu30wvRykv9%2BTrwjb7e99AD%2BZU0okqKRd3ybjobMbOrLW15gEliVBq0z%2Fc34hzq2jzVgP8KK4tiDpRlAKTU7nX94gymlN5VwAMVQAWaR482Ng2goJkLqIDIZqV7LjMTauhUm4Tv%2BqSLa8IyHGHofnr4LhkollvZ9CKUPRNACV9Sgtq2eIlD0qLboeU23FLXpRHWqvhzRWMwBMLjxSdEzEyBul3w7UVTxFQNEkd1MFjGqud2XZGnlbBDv75rrF%2FZ6Zg4vjElOK1vhtdJsW%2BdSt1JbsS3Krnjqcaz3lA6YvBpJQ%2ByagTLGDf2k6oK3DfxtCE4TAKwbUo8jc8qOKovB1bXQCzztTPlr6Yc9PZXOuPtGZCekoBMwqewLjM8ZEtYp3gDhcoEHUqqPfiQo4a%2FbcLX%2FXfQgRa7qz%2B2IIgjJZqL1hbpld5w2vDTwv%2F4m%2BRwHm8Hjo2QOHcggje92b2C8KawT3IjcRN%2BjVHuocXhfDSaztNgRIUQnOVPZzHQUUZE%2FABCnAP%2BxMGXkHV9KlipZ7c7mLPNrdQu%2Behx2edwhs4UtROYi650wk5xdDhBIAOznd9a8U6zKfLG5QX8T7BBSrRBT7Jn0WxAG2tDdgRlbf6%2BMK3Bsb8GOqUB7YYeBbCBtz0sd5rzr96Hw78a%2Bq98KNnRqbvbfGwv4DaMTqO7N65YLVQi560a8cJkoAqTmSiLkwNJeL7%2F6RM284%2FTqk6dk%2F%2FETqr974PUSUBQOcslDtO4xl%2Bl297KdbTXFhDXkdu1uluw9VUo43YJYzbVcpJ0ET6sxSvO0E9nK31MlZNFGMvACjcQ9nC9tHxUEqd8YT4sSDQk%2FqEL%2FJcNwfPzMake&X-Amz-Signature=4345bd68ff199777ae34850d9d5f8c41a873d8061c8cd1eb5dca1dfc623cce12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
