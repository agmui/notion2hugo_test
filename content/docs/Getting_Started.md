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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEA5HJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCjgL7DWfXp5hL2XAMWkRqJJrk6tnj4PPXAjb3H6IiyfwIgUrTDvzAZiU7ACraOG6K1oZ7bEDcebue027qmoaR1ElEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBjk9eQClxMo75%2FzCyrcAxkEjBTxltIUi1KRyxq1E3WqIS75A3mvCsQDAMVbJ4gny%2Fogx2G%2F9LtpiLoF68EpgJQM6ZVzcGyF6ifcCS6UIdP%2FwiMOXL0RN8%2Buwp8BPMsMxihHomRDWa0IPv7gfQVmUGls6d8ED3vM3FKdXxn6ky7fq7vCy3g4918o7yO5HOkmyy2Nq5smrhlQOK%2FJ0oQ%2FYweRd2manr77XgoAw41sRX%2FCPbctS%2FZDaZTmdPn%2FiwdnxiADsO9fl8XeNVQVh2UbqK3s2xufI8MDCxZrvumfjbsunBKkIvz0L4u8thn04RQRiiDcsm89pJVJ4UakAW2oPG7PgpLr4V0%2F8AtqQ%2F%2BwWVDjqbBuy7uJTFNNX9eFUPnyw4K%2BcdgCMrxMiEbOSRQyMdJgmgjrPBoESC%2FFjyam1do8yTcOCMhasvr1QzkwWcpMQDwIUCs%2F5yIxOkC9wqkKiEXGvn38u07bQyOMsk24KQiEPaoV0r3ZOyUVS9ETOFou6eBWj2Jma%2BOaeEzhJB4PCTnKIFXc0zbxUYPkMC1zoFQkiU68ADDKxP0xDlkRLc%2BdQ%2BXzgVMZTxjVxonvgw7Ki6UmMxRkBDX%2FEDEJtmA8Gexrq%2FLXM7WZEwdW%2BtjGjf9BQ28meUTZma5yw%2F8AMK7ooMMGOqUB0BT2cNBUR3i0xnUwdKrPNuHSeqX9F5wfzx0befsLKKEiLVvrwtK8DrHMoT1njpQ0qHt9DUhh%2F%2B2AxHdUE4uxmETWlwUtVUVm90FdDRl5Iklb1Fmt70etNgYB5rqNOvpC6JoGZR7JCDQW9MuGbeCaJUzMmoZcR7HobUBhsYUiiguxjNt1rb2utTovUDwl3u7NAu9%2FxuHEo2DXveJGrJvz9zIhij3B&X-Amz-Signature=9b079b91742044862033b358ad08ca145164bf49162d4f3beff8be0415363820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEA5HJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCjgL7DWfXp5hL2XAMWkRqJJrk6tnj4PPXAjb3H6IiyfwIgUrTDvzAZiU7ACraOG6K1oZ7bEDcebue027qmoaR1ElEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBjk9eQClxMo75%2FzCyrcAxkEjBTxltIUi1KRyxq1E3WqIS75A3mvCsQDAMVbJ4gny%2Fogx2G%2F9LtpiLoF68EpgJQM6ZVzcGyF6ifcCS6UIdP%2FwiMOXL0RN8%2Buwp8BPMsMxihHomRDWa0IPv7gfQVmUGls6d8ED3vM3FKdXxn6ky7fq7vCy3g4918o7yO5HOkmyy2Nq5smrhlQOK%2FJ0oQ%2FYweRd2manr77XgoAw41sRX%2FCPbctS%2FZDaZTmdPn%2FiwdnxiADsO9fl8XeNVQVh2UbqK3s2xufI8MDCxZrvumfjbsunBKkIvz0L4u8thn04RQRiiDcsm89pJVJ4UakAW2oPG7PgpLr4V0%2F8AtqQ%2F%2BwWVDjqbBuy7uJTFNNX9eFUPnyw4K%2BcdgCMrxMiEbOSRQyMdJgmgjrPBoESC%2FFjyam1do8yTcOCMhasvr1QzkwWcpMQDwIUCs%2F5yIxOkC9wqkKiEXGvn38u07bQyOMsk24KQiEPaoV0r3ZOyUVS9ETOFou6eBWj2Jma%2BOaeEzhJB4PCTnKIFXc0zbxUYPkMC1zoFQkiU68ADDKxP0xDlkRLc%2BdQ%2BXzgVMZTxjVxonvgw7Ki6UmMxRkBDX%2FEDEJtmA8Gexrq%2FLXM7WZEwdW%2BtjGjf9BQ28meUTZma5yw%2F8AMK7ooMMGOqUB0BT2cNBUR3i0xnUwdKrPNuHSeqX9F5wfzx0befsLKKEiLVvrwtK8DrHMoT1njpQ0qHt9DUhh%2F%2B2AxHdUE4uxmETWlwUtVUVm90FdDRl5Iklb1Fmt70etNgYB5rqNOvpC6JoGZR7JCDQW9MuGbeCaJUzMmoZcR7HobUBhsYUiiguxjNt1rb2utTovUDwl3u7NAu9%2FxuHEo2DXveJGrJvz9zIhij3B&X-Amz-Signature=3b6034a8e11e2284a78676033d10208d0c2e2208fb5c2dda1e77704ac5a1a851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEA5HJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCjgL7DWfXp5hL2XAMWkRqJJrk6tnj4PPXAjb3H6IiyfwIgUrTDvzAZiU7ACraOG6K1oZ7bEDcebue027qmoaR1ElEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBjk9eQClxMo75%2FzCyrcAxkEjBTxltIUi1KRyxq1E3WqIS75A3mvCsQDAMVbJ4gny%2Fogx2G%2F9LtpiLoF68EpgJQM6ZVzcGyF6ifcCS6UIdP%2FwiMOXL0RN8%2Buwp8BPMsMxihHomRDWa0IPv7gfQVmUGls6d8ED3vM3FKdXxn6ky7fq7vCy3g4918o7yO5HOkmyy2Nq5smrhlQOK%2FJ0oQ%2FYweRd2manr77XgoAw41sRX%2FCPbctS%2FZDaZTmdPn%2FiwdnxiADsO9fl8XeNVQVh2UbqK3s2xufI8MDCxZrvumfjbsunBKkIvz0L4u8thn04RQRiiDcsm89pJVJ4UakAW2oPG7PgpLr4V0%2F8AtqQ%2F%2BwWVDjqbBuy7uJTFNNX9eFUPnyw4K%2BcdgCMrxMiEbOSRQyMdJgmgjrPBoESC%2FFjyam1do8yTcOCMhasvr1QzkwWcpMQDwIUCs%2F5yIxOkC9wqkKiEXGvn38u07bQyOMsk24KQiEPaoV0r3ZOyUVS9ETOFou6eBWj2Jma%2BOaeEzhJB4PCTnKIFXc0zbxUYPkMC1zoFQkiU68ADDKxP0xDlkRLc%2BdQ%2BXzgVMZTxjVxonvgw7Ki6UmMxRkBDX%2FEDEJtmA8Gexrq%2FLXM7WZEwdW%2BtjGjf9BQ28meUTZma5yw%2F8AMK7ooMMGOqUB0BT2cNBUR3i0xnUwdKrPNuHSeqX9F5wfzx0befsLKKEiLVvrwtK8DrHMoT1njpQ0qHt9DUhh%2F%2B2AxHdUE4uxmETWlwUtVUVm90FdDRl5Iklb1Fmt70etNgYB5rqNOvpC6JoGZR7JCDQW9MuGbeCaJUzMmoZcR7HobUBhsYUiiguxjNt1rb2utTovUDwl3u7NAu9%2FxuHEo2DXveJGrJvz9zIhij3B&X-Amz-Signature=0a6c37479b0e48e8693c3980abb12b418509a5b8fe7f56a16e101165ebbc8677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6RCHRL%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIDAW3p1QgTPwBQWi20rVrcQNCZpv8eAGB74vTZxdOCfnAiAyDha7IbqFhX5oT9vVkAi2nCwR5HhMD6Vb2%2FsWkgYG1Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM44UnFU39STL6KEFdKtwDKJ6PKzbzhFZ8niIDb4Jnizr%2BTST8eo1mdAcftLzg1iw53kSeUtIE3a73Ut1Cg7LrYOpdZ51bTEYYkz4DA81iK1vP155jTWHfx80XM3dUKtgS7fGUdBit%2B8g%2FyVVBQMtlBMbNmBAUkgoMigUREaZUYbCGVd%2BdRP10tG3%2BHe%2F9lEjZBkhv%2BjRcu3vmRNipM9Mg411QgM82PX3V7RGE0fkDQpRd7aeYSLLF40ZtmaquT70d8EIlHGFhXTIJurD%2B5wkY7%2Bh25rwTqga2OgtLExfgN3W9VU%2FvNay9Jr%2F3MSna%2BlvU0H9YA%2FLucdqtECPSpI9p0q28olwTHc9fw9WViMZ9zSCBNM0T8jgEBeA5iA8lIa1AOxUiAZV7wrRY0EXHC%2FczRCLVkOY8z0osdTzYbd8vaZzBSU348c3MA%2FWnRDc%2BKa8W2d2d1xDFDiDlmYuRQf9kuP2XX3yxQ%2BXhOa0xHY3p%2FQMrYJNtUfJFieNdliY0kTZ73FcMuBylilhDtQzHDPucrVrW%2BrYV0vL9KpdTf%2B6%2Bp7qjJNGxO4WBTqLHunq8O4toC%2BXJp9aN6ig%2B8RQQGo8R1kaQAeYExJXVQGTMFB7WxiXiMBG%2BJuQonW7oSHfChSnjfjLnurqdxT1qmYUw1%2BegwwY6pgFC96iEyFnqaRYY3PTjx3bhD819oxCy09LnpGUQPjRcP8PB5xlBjdw9gGaEjygTYqKREYQpZMRYUOsIbxVXPWwZdntB3lEIMI%2FA71MNQoBO0WSKKx0HIru9nH3zAcmHIGOtzT7RVstGR4kGg27Us9E2RLK6M0nuXuSHZlhg0DXSVJFEUiUQneya8nIqqvux8RkT6JlVB8Fpbhy7ZQx1mpjn5nRjnTX2&X-Amz-Signature=75768ff4b09906438fc902aeb3dcd34281b21b8272ae65251191e6749a41256c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTXHHOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIE3kZ1Wxicx0R78ho%2BDofFXcO%2Fj3%2BWkkVMKJ2svxtgX1AiEA2o17WS5Y1oN8iX5cSvPIvOLk6oefgvls7Fy8LG%2BGLZ0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FdK%2FM%2BOOnwITTckSrcA%2BwhQtEleLg4Vsmddt6AOKSyl5GVxPkJD8yqkNSmdSUjoOHjF9RQlVeT5K3cdFycaeS8NRe6aOQY3Zr6gAfxfP7vgkyAXwsMXGSWOshbhW9Q97D92ouYJzvH9hTKUzZG%2BIiNlroJoDkZxL599gMfHmqHsMjxddIk35iDfJqKVq0il9D0VSCqhCBv2bXZRmd9EqAaapCsD92vpNpCZ3SP5bHggtTgCQ7FeGap%2FerFuouQtRrp8l4tYjmUADkQ4MLzGD2a5yUiJFEH8xtQG0N2iJ2Dnl%2BFCKLNDH5FUTo%2FSTRfK7nVYTbUkf3kd6UPCEzYrr00YUp1J1oaHWt9APdK33QacEndBGevwhjW%2FYt5BPXf2nBXRgfcKssnUtquuelfc2hZUJgZuN8OFzySxK1pxqOxt%2BcLsdLm8VYPJrUCX3UIsueDXIjUK2bHoUw5YOqpYGSyG820LZhEYlbIjPNH9ERKO5eYnFvWWR2p71%2FhWRxFKxCHExrdzjZlRgd61x3m8PUvN7ZgF5GuEiMPgY46PqYMhSQyE2h34x8qBCR5Bgxc8xxzEloRj2B%2FHz4tORn8ZLP11v7yw2oesU9NNeyy8pxcxQSI9u1egdYpF3NiEyKzgT0GnnkN6znVPzBWMJ3ooMMGOqUBDQrmlOi6NN%2FbVX2YwUQzms4fnDGyqbs3q0zHLAFqZMuofXVjpQOt%2Fsq5ocX%2Fk%2FFUbo%2FThds2cd3lB0VCYTVatnLiXPavv4ibADUZTkQ0G2h1CmVaeue1%2B0nyjpgQO60XaER9irm3BeavfXzGfcEm0%2BNDqtZpBiOKfOXiduLQbZv6Vwch0cgFK%2Fjnqh%2F37ztS6goU104x0McyI4W390QPB0Ms%2FZhO&X-Amz-Signature=2d4cd0319bbfe63988f6590394f9e2067b9240d25afb6488e459eaad5673cf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEA5HJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCjgL7DWfXp5hL2XAMWkRqJJrk6tnj4PPXAjb3H6IiyfwIgUrTDvzAZiU7ACraOG6K1oZ7bEDcebue027qmoaR1ElEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBjk9eQClxMo75%2FzCyrcAxkEjBTxltIUi1KRyxq1E3WqIS75A3mvCsQDAMVbJ4gny%2Fogx2G%2F9LtpiLoF68EpgJQM6ZVzcGyF6ifcCS6UIdP%2FwiMOXL0RN8%2Buwp8BPMsMxihHomRDWa0IPv7gfQVmUGls6d8ED3vM3FKdXxn6ky7fq7vCy3g4918o7yO5HOkmyy2Nq5smrhlQOK%2FJ0oQ%2FYweRd2manr77XgoAw41sRX%2FCPbctS%2FZDaZTmdPn%2FiwdnxiADsO9fl8XeNVQVh2UbqK3s2xufI8MDCxZrvumfjbsunBKkIvz0L4u8thn04RQRiiDcsm89pJVJ4UakAW2oPG7PgpLr4V0%2F8AtqQ%2F%2BwWVDjqbBuy7uJTFNNX9eFUPnyw4K%2BcdgCMrxMiEbOSRQyMdJgmgjrPBoESC%2FFjyam1do8yTcOCMhasvr1QzkwWcpMQDwIUCs%2F5yIxOkC9wqkKiEXGvn38u07bQyOMsk24KQiEPaoV0r3ZOyUVS9ETOFou6eBWj2Jma%2BOaeEzhJB4PCTnKIFXc0zbxUYPkMC1zoFQkiU68ADDKxP0xDlkRLc%2BdQ%2BXzgVMZTxjVxonvgw7Ki6UmMxRkBDX%2FEDEJtmA8Gexrq%2FLXM7WZEwdW%2BtjGjf9BQ28meUTZma5yw%2F8AMK7ooMMGOqUB0BT2cNBUR3i0xnUwdKrPNuHSeqX9F5wfzx0befsLKKEiLVvrwtK8DrHMoT1njpQ0qHt9DUhh%2F%2B2AxHdUE4uxmETWlwUtVUVm90FdDRl5Iklb1Fmt70etNgYB5rqNOvpC6JoGZR7JCDQW9MuGbeCaJUzMmoZcR7HobUBhsYUiiguxjNt1rb2utTovUDwl3u7NAu9%2FxuHEo2DXveJGrJvz9zIhij3B&X-Amz-Signature=3d2be96c5003475ec59adc633d6a1e2dbb0c36ffe91b50690a8b001b0ff2af78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
