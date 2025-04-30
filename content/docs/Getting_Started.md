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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Q5HVKM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFkK8bE%2F%2BTmFXqUKO4pt8TtmFVajlTaE9ybrLt2CuASkAiEAs8WVw9A3kl6a9d3xI6WfB9uboLD9h9YWt35eymiPvvAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6wjwT%2FS7MJSNRklCrcAwsczx%2FjnUVr7lD50TxHaq%2BaApa7bo6yGwHpTKMilCuul%2F%2Bi2mYxnOYougXrw%2BUiTVfcTE9fYelKJJNPPZ4VtC3XXOF%2BlZ7RswqSB4CklBhNu9gwsXoRQy3HO5wC8s9lWVolmVwDrHX8xBDla5w6puLk%2BMqiGOoKZ3s6EztPEglz9BLZZ7JHyMmZJGCCA%2FzgifX8YOqUnHM4INbpkNZOcxeJtq6khG%2FyodYskClJ64DM5nqCMP6px6v5iJL7hKSaMN8B3wS%2FEdAh00b7PCAGA623IMIvc7%2FSf3Mgov%2F1wr%2Fn268IuCeyqnvh8RicI4WQYgBFzJgHMvXgAxMIY5MGJ4Sb21%2FxefWsJveiVjiC34w2SG%2F2WiXrTy%2F6ykXf0CaT1B13iCSdZTzeQ00ZV8wH%2F4%2FgaJzTDop12GEnsCYt4A%2FKw64JoG8Y11N5p5VgV7H9lL%2BDXVzIAnPwC3gWxkVrlM8R2fKcDnqRrYBRGGVFCT5DyNdLFqHlPFQ%2BSjIIMdcGRf4lhcOHAPobhfKySqrO1SEbnOUMmBpDew6N9M3N0fudZiRn3%2BZnhgheohtebmDbLUOczEyQzpSTdgF02QUj6pbR%2BBEdPYrN24iMmwaR%2F14%2BAZjTx9rYNp1fz7CMMMWAycAGOqUBrWOR9dEfj3Al51noSoxR6AsCfsrBxnLe3yF0iouj3%2BfF0KKrTYbQEJwsBTyCd0vDbVLo1DQ140QhXLWj2Tel0rsNbQpMr7l7AkuJZdZvuEU1zugpkVtf4kWRp2LM%2B6wNACa3hyWD0%2BC6mt5yZbSuk7d7DhzxfYPHzwPiFYMWaG79T%2FG6hOQJWZoXBW1KzyvTtU4PZjqFclnvP6GdeFCl67cLaUiS&X-Amz-Signature=d6f25bb239d3f3cdd23812ee6740f250a84473df0326b930b41c5d07635c531d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Q5HVKM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFkK8bE%2F%2BTmFXqUKO4pt8TtmFVajlTaE9ybrLt2CuASkAiEAs8WVw9A3kl6a9d3xI6WfB9uboLD9h9YWt35eymiPvvAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6wjwT%2FS7MJSNRklCrcAwsczx%2FjnUVr7lD50TxHaq%2BaApa7bo6yGwHpTKMilCuul%2F%2Bi2mYxnOYougXrw%2BUiTVfcTE9fYelKJJNPPZ4VtC3XXOF%2BlZ7RswqSB4CklBhNu9gwsXoRQy3HO5wC8s9lWVolmVwDrHX8xBDla5w6puLk%2BMqiGOoKZ3s6EztPEglz9BLZZ7JHyMmZJGCCA%2FzgifX8YOqUnHM4INbpkNZOcxeJtq6khG%2FyodYskClJ64DM5nqCMP6px6v5iJL7hKSaMN8B3wS%2FEdAh00b7PCAGA623IMIvc7%2FSf3Mgov%2F1wr%2Fn268IuCeyqnvh8RicI4WQYgBFzJgHMvXgAxMIY5MGJ4Sb21%2FxefWsJveiVjiC34w2SG%2F2WiXrTy%2F6ykXf0CaT1B13iCSdZTzeQ00ZV8wH%2F4%2FgaJzTDop12GEnsCYt4A%2FKw64JoG8Y11N5p5VgV7H9lL%2BDXVzIAnPwC3gWxkVrlM8R2fKcDnqRrYBRGGVFCT5DyNdLFqHlPFQ%2BSjIIMdcGRf4lhcOHAPobhfKySqrO1SEbnOUMmBpDew6N9M3N0fudZiRn3%2BZnhgheohtebmDbLUOczEyQzpSTdgF02QUj6pbR%2BBEdPYrN24iMmwaR%2F14%2BAZjTx9rYNp1fz7CMMMWAycAGOqUBrWOR9dEfj3Al51noSoxR6AsCfsrBxnLe3yF0iouj3%2BfF0KKrTYbQEJwsBTyCd0vDbVLo1DQ140QhXLWj2Tel0rsNbQpMr7l7AkuJZdZvuEU1zugpkVtf4kWRp2LM%2B6wNACa3hyWD0%2BC6mt5yZbSuk7d7DhzxfYPHzwPiFYMWaG79T%2FG6hOQJWZoXBW1KzyvTtU4PZjqFclnvP6GdeFCl67cLaUiS&X-Amz-Signature=32d2283a1476661526aeba61fadfdb5c8d7fa9606ca6c997bb3e1702aecb5ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Q5HVKM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFkK8bE%2F%2BTmFXqUKO4pt8TtmFVajlTaE9ybrLt2CuASkAiEAs8WVw9A3kl6a9d3xI6WfB9uboLD9h9YWt35eymiPvvAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6wjwT%2FS7MJSNRklCrcAwsczx%2FjnUVr7lD50TxHaq%2BaApa7bo6yGwHpTKMilCuul%2F%2Bi2mYxnOYougXrw%2BUiTVfcTE9fYelKJJNPPZ4VtC3XXOF%2BlZ7RswqSB4CklBhNu9gwsXoRQy3HO5wC8s9lWVolmVwDrHX8xBDla5w6puLk%2BMqiGOoKZ3s6EztPEglz9BLZZ7JHyMmZJGCCA%2FzgifX8YOqUnHM4INbpkNZOcxeJtq6khG%2FyodYskClJ64DM5nqCMP6px6v5iJL7hKSaMN8B3wS%2FEdAh00b7PCAGA623IMIvc7%2FSf3Mgov%2F1wr%2Fn268IuCeyqnvh8RicI4WQYgBFzJgHMvXgAxMIY5MGJ4Sb21%2FxefWsJveiVjiC34w2SG%2F2WiXrTy%2F6ykXf0CaT1B13iCSdZTzeQ00ZV8wH%2F4%2FgaJzTDop12GEnsCYt4A%2FKw64JoG8Y11N5p5VgV7H9lL%2BDXVzIAnPwC3gWxkVrlM8R2fKcDnqRrYBRGGVFCT5DyNdLFqHlPFQ%2BSjIIMdcGRf4lhcOHAPobhfKySqrO1SEbnOUMmBpDew6N9M3N0fudZiRn3%2BZnhgheohtebmDbLUOczEyQzpSTdgF02QUj6pbR%2BBEdPYrN24iMmwaR%2F14%2BAZjTx9rYNp1fz7CMMMWAycAGOqUBrWOR9dEfj3Al51noSoxR6AsCfsrBxnLe3yF0iouj3%2BfF0KKrTYbQEJwsBTyCd0vDbVLo1DQ140QhXLWj2Tel0rsNbQpMr7l7AkuJZdZvuEU1zugpkVtf4kWRp2LM%2B6wNACa3hyWD0%2BC6mt5yZbSuk7d7DhzxfYPHzwPiFYMWaG79T%2FG6hOQJWZoXBW1KzyvTtU4PZjqFclnvP6GdeFCl67cLaUiS&X-Amz-Signature=e6088ba2c3b22cca9e004f36922052ba8a6182a0f50eade768c6123b1712dcc4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73HB47D%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCmAQ2%2FB6mQGfaklOgVdpEl2ZrbOvVWjUnsJIj3x5UD9AIgT7Xz0BeFKzXrawdzpCJJ%2F8eM5kxlheCKVlPQ5B%2FPFlkqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvq3Rv6Z%2BjwhtKiDircA1czgdgVqf9ln1JtWGnR2ekE%2B7NbcTd3r7yfj8JINFCOhg0W%2B6S0%2FqqKl3M92ReS%2BKHOdu9mU%2FzR9M0BXowlddghVNVfqymWuyXpwgrBYYdmabKXT4AeyYhVFQGCz%2BwZCic6MGFSlZi4FkFkOg8lRO5qaZ4Efk2cA8JwWcnZF6sjm8oLhTU91s%2Bd3vNYgdl%2FsKXq1gTpS%2F6mwbQSlLKFQQ1aKkKI%2F1fuYK0BEKntBLv3%2B57nYOrSSzO%2B%2BVhJtGDeLG899Jja%2F4784yZsPTbq3W4hN5zQVWkaar0wF3Q73NqvzRw1T9wlvlo%2FV2k1iq%2BF6KRgZgCFecfq%2FnK%2FN8cqTlGv9k0ccXHvF5v601EMx%2BOueHa0DZKFeJ61l5XSowQsNMpzT8rA70BJnYbMT2Pbq9mT8nFl4OtsU%2FKdYAJBYBuZhajhcQEk7jbxfYVgrhMLQWLlGLR6r8QYKnIGRshgr%2FpriqYTo%2FCAsT1TgQ9FWQhf3rwyoF%2BRsSnIyCvtEOXbEnyN85Bs8f7XBLWprI5ZzbLs3w7yUSQ4Ur5bahv%2FyC3ZklnvSNMhEvQbGbti9mbVO%2FzGrvTqk4jnF%2BEtMD%2BI45E7zQHRK1uM9LvjG5Ga3jKUFQwWtKgabLPdlN0JMNmAycAGOqUBvzexOhTPNt9vMvcWEVRdE1gq4XLnls55qHSxPo7EZlQpX415vAPGpHww5MDIAAsRWAYYPIO8P2z5XNy379hZYfUMA7IXN4eAioWucneiq%2FCX7WYS0fxhZzzm4JjrkbuWGUOz2AWN4BcBL5W%2FfIiE6%2B9714wwFSvD1wL5aYPQ6h4bIWnPmcvwKwPro1AmxQmsJ6POqnpMY0jhxqEf7G%2Fy4chBotVA&X-Amz-Signature=d504cbd8ac18771baf10a7053a2abad0c61925b01f337063da7d2aa46ca3833e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XJLKZT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHOLCycaaxyfEfyFnxrJfHpde%2Ff%2BFBxUIJREyygq8PtAAiEA7zMPyX4c0A8Ui8%2FyLEUTlhEgp2BC9N1E4JQNlWu8Q5AqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMPP3SelrJNLjb4rSrcAy74lQCD1tWQfq6tTnK1BY%2BSukqexbW0LNmx9s98BbNryrKXTIrTx42r9qN%2FxRbG8mc%2F3GEYlG%2Bj14h5HZ5Fmcv0xO5Q0j6Qlm44u5c719nEAt73zbg3q8pWZLWG6gImqYHLKLjK0%2BbRTEMnN8CAxp8puaynkXJbROPBdnC2AKFwiBdzKBDgZm3ru36Rn1ggeEuTNTXA8eyeZRTZN0nm1QjQioAHh9TP33OEBtbWLY3TTyHkPI0%2FsKFwG6XypYJED43yQyv0Sp5PUBP5lsTjHGiaTG%2FcWobWlp4mA4z0IPPwvUbY3AzWr8pACjrdS3nMjVIEbL0%2BZPUMavH%2FMUy%2Ftg9KJtXqbt0ea3xzTLKexIivCQzcxHVa5zWo8Z%2FksYfGQ%2FxLxFHv1ncavInB4KZpwzpWzulk9EByh0BQL0efiNB7hj2ZB5k%2BV0gBSIem2vbBlaHg9q3oFcovRNzYFEBMwsLCiXJLQnfxLpaJOXq%2FIWDiqqhNhuQ0DwiTwx%2BItXxJ7YjhMgdIpZ2ZMKxlFHNB3vzppW9pAQhv2mKCxGM36pUkE6MGCXcibCdLhfLMXHOy0CZVKPpEroUyUZt2PdZScg1lP4Dp5z1dbX6vrZ6OrQ%2BNsc%2BX%2BAHMPpAd9smrMLCAycAGOqUBcCi36oa3YZNAzA8ly28%2Fm2KNUlV1POn0Qj5ejx6Vh3%2BQrIKEsJfF%2FCM%2Bokyvqp3Ps30HPTajmVaabjRNIpYUuplm6tdn3SBGRdZf0N4drjMK%2Bdz%2F70ff3OibQc06cSbQP3KDaLsPVNHrNu75NZHFC9C5vmhMBW3foAOvrQX8riDpC7zKDeRyd2m7pnmOvXH7hy8TsHjSJm9uTCk0iGGAfYQ2Q7AX&X-Amz-Signature=dd51b36215749f72a409d9cb6ff8a2843fb6c2c331ab0d7199be468f81aad8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Q5HVKM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFkK8bE%2F%2BTmFXqUKO4pt8TtmFVajlTaE9ybrLt2CuASkAiEAs8WVw9A3kl6a9d3xI6WfB9uboLD9h9YWt35eymiPvvAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6wjwT%2FS7MJSNRklCrcAwsczx%2FjnUVr7lD50TxHaq%2BaApa7bo6yGwHpTKMilCuul%2F%2Bi2mYxnOYougXrw%2BUiTVfcTE9fYelKJJNPPZ4VtC3XXOF%2BlZ7RswqSB4CklBhNu9gwsXoRQy3HO5wC8s9lWVolmVwDrHX8xBDla5w6puLk%2BMqiGOoKZ3s6EztPEglz9BLZZ7JHyMmZJGCCA%2FzgifX8YOqUnHM4INbpkNZOcxeJtq6khG%2FyodYskClJ64DM5nqCMP6px6v5iJL7hKSaMN8B3wS%2FEdAh00b7PCAGA623IMIvc7%2FSf3Mgov%2F1wr%2Fn268IuCeyqnvh8RicI4WQYgBFzJgHMvXgAxMIY5MGJ4Sb21%2FxefWsJveiVjiC34w2SG%2F2WiXrTy%2F6ykXf0CaT1B13iCSdZTzeQ00ZV8wH%2F4%2FgaJzTDop12GEnsCYt4A%2FKw64JoG8Y11N5p5VgV7H9lL%2BDXVzIAnPwC3gWxkVrlM8R2fKcDnqRrYBRGGVFCT5DyNdLFqHlPFQ%2BSjIIMdcGRf4lhcOHAPobhfKySqrO1SEbnOUMmBpDew6N9M3N0fudZiRn3%2BZnhgheohtebmDbLUOczEyQzpSTdgF02QUj6pbR%2BBEdPYrN24iMmwaR%2F14%2BAZjTx9rYNp1fz7CMMMWAycAGOqUBrWOR9dEfj3Al51noSoxR6AsCfsrBxnLe3yF0iouj3%2BfF0KKrTYbQEJwsBTyCd0vDbVLo1DQ140QhXLWj2Tel0rsNbQpMr7l7AkuJZdZvuEU1zugpkVtf4kWRp2LM%2B6wNACa3hyWD0%2BC6mt5yZbSuk7d7DhzxfYPHzwPiFYMWaG79T%2FG6hOQJWZoXBW1KzyvTtU4PZjqFclnvP6GdeFCl67cLaUiS&X-Amz-Signature=16688311861c50fbd6828c783235b4b1486bfe39d24cad0cfd519e4b203ee222&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
