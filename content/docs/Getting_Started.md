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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHKKMOF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmewunvtKA5YsA2FRulUvvDuMYUTCzXHZho24bycjbAiEArW%2F2HIBV4%2BcsrkRrqV58TYrnzpkYgS1gptYwbAiPTvAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMnpiV8wU7lcg0xAMCrcA4fcuyNQwEJ%2FTDrWi9SsgvuqeJtvFeEr9kLYrwquiW0eTHXnAp8sorW%2FNUVwdmIJp%2F2hSwV8B68movj7DPNDpKuNVRWO417Rasv9pH6TrsPmhu9nsN7eTkJfDeNnsJHpEGqyJ8hju0Pz5J5jHZPOgYWezS7rcEtqFBdYO0rlK01zB6DLNRDSC5jqaRukCo8CnXkt31EejAHcyLxrCaMCt3%2BvxvD6f1DkMwmzyYfvfYa%2F9f6hUecZ51aJ0Yue%2BMpKowkVIg6rJSLxZ1woYPXOeVKJzvoKfELgMsZud0ffuqYWEVM0KoUFzQhlHGM4xpMepWfO0cbbHvKeP1yy7hyxo12S%2BNZvKZeWuIQmyjVmamPPBKz%2BCei9aPYgVPtLcBIbz5b5cgVeEWg6gO3Yh2n%2FDI%2BxJWp8tdzzWQndImkawWjbhjSMuxZoXI%2B0KBXW9tJJk9vllhHsHjbcTOd2WYqJBcNNS0RlkIFD%2Bn24IteNDvt8Mc94MlFIs2o6oi6zJArRAUDafhMemefD75NfdmAgPoZtaJ27P6AnPT%2Bh0vy8iz7yRevqKPx%2Br6acCJOY0xd3T8GecfgTT0Tk8%2Fcxq6tNXC6mysX4w%2BJzItdT0qVW17JLyQXU%2BK%2Fa00AOEClrMPv40sEGOqUBddaCLbX4YttE8bUgsZFWWUBYHHYMX%2B54fmGgRLtre2eCc4Q%2B0iceKtbBU32ANvB%2FxWnso4rRPOk2KhM%2F9p0JpZ2%2BGYWe7cVoo5GSChOEKMTvylg3%2F1A5Xz8yauDpqpxFk2ZpUHKIjaXy%2BQioWDh3RYxRYMy6YSfHr4zJeR3voVUDyXW13nM8p7t83XwbEpVaM02yjWoRzwl8oTJWfMaBBbaxnXve&X-Amz-Signature=99d0206973fd31864d7ffe7356b5f8fa49b9fd5ca4d5ff8469e84874f3e3295c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHKKMOF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmewunvtKA5YsA2FRulUvvDuMYUTCzXHZho24bycjbAiEArW%2F2HIBV4%2BcsrkRrqV58TYrnzpkYgS1gptYwbAiPTvAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMnpiV8wU7lcg0xAMCrcA4fcuyNQwEJ%2FTDrWi9SsgvuqeJtvFeEr9kLYrwquiW0eTHXnAp8sorW%2FNUVwdmIJp%2F2hSwV8B68movj7DPNDpKuNVRWO417Rasv9pH6TrsPmhu9nsN7eTkJfDeNnsJHpEGqyJ8hju0Pz5J5jHZPOgYWezS7rcEtqFBdYO0rlK01zB6DLNRDSC5jqaRukCo8CnXkt31EejAHcyLxrCaMCt3%2BvxvD6f1DkMwmzyYfvfYa%2F9f6hUecZ51aJ0Yue%2BMpKowkVIg6rJSLxZ1woYPXOeVKJzvoKfELgMsZud0ffuqYWEVM0KoUFzQhlHGM4xpMepWfO0cbbHvKeP1yy7hyxo12S%2BNZvKZeWuIQmyjVmamPPBKz%2BCei9aPYgVPtLcBIbz5b5cgVeEWg6gO3Yh2n%2FDI%2BxJWp8tdzzWQndImkawWjbhjSMuxZoXI%2B0KBXW9tJJk9vllhHsHjbcTOd2WYqJBcNNS0RlkIFD%2Bn24IteNDvt8Mc94MlFIs2o6oi6zJArRAUDafhMemefD75NfdmAgPoZtaJ27P6AnPT%2Bh0vy8iz7yRevqKPx%2Br6acCJOY0xd3T8GecfgTT0Tk8%2Fcxq6tNXC6mysX4w%2BJzItdT0qVW17JLyQXU%2BK%2Fa00AOEClrMPv40sEGOqUBddaCLbX4YttE8bUgsZFWWUBYHHYMX%2B54fmGgRLtre2eCc4Q%2B0iceKtbBU32ANvB%2FxWnso4rRPOk2KhM%2F9p0JpZ2%2BGYWe7cVoo5GSChOEKMTvylg3%2F1A5Xz8yauDpqpxFk2ZpUHKIjaXy%2BQioWDh3RYxRYMy6YSfHr4zJeR3voVUDyXW13nM8p7t83XwbEpVaM02yjWoRzwl8oTJWfMaBBbaxnXve&X-Amz-Signature=af65370d08ab49cc880d017e74e2abdf5c81862efb3f9c7274abf68d09dcb0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHKKMOF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmewunvtKA5YsA2FRulUvvDuMYUTCzXHZho24bycjbAiEArW%2F2HIBV4%2BcsrkRrqV58TYrnzpkYgS1gptYwbAiPTvAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMnpiV8wU7lcg0xAMCrcA4fcuyNQwEJ%2FTDrWi9SsgvuqeJtvFeEr9kLYrwquiW0eTHXnAp8sorW%2FNUVwdmIJp%2F2hSwV8B68movj7DPNDpKuNVRWO417Rasv9pH6TrsPmhu9nsN7eTkJfDeNnsJHpEGqyJ8hju0Pz5J5jHZPOgYWezS7rcEtqFBdYO0rlK01zB6DLNRDSC5jqaRukCo8CnXkt31EejAHcyLxrCaMCt3%2BvxvD6f1DkMwmzyYfvfYa%2F9f6hUecZ51aJ0Yue%2BMpKowkVIg6rJSLxZ1woYPXOeVKJzvoKfELgMsZud0ffuqYWEVM0KoUFzQhlHGM4xpMepWfO0cbbHvKeP1yy7hyxo12S%2BNZvKZeWuIQmyjVmamPPBKz%2BCei9aPYgVPtLcBIbz5b5cgVeEWg6gO3Yh2n%2FDI%2BxJWp8tdzzWQndImkawWjbhjSMuxZoXI%2B0KBXW9tJJk9vllhHsHjbcTOd2WYqJBcNNS0RlkIFD%2Bn24IteNDvt8Mc94MlFIs2o6oi6zJArRAUDafhMemefD75NfdmAgPoZtaJ27P6AnPT%2Bh0vy8iz7yRevqKPx%2Br6acCJOY0xd3T8GecfgTT0Tk8%2Fcxq6tNXC6mysX4w%2BJzItdT0qVW17JLyQXU%2BK%2Fa00AOEClrMPv40sEGOqUBddaCLbX4YttE8bUgsZFWWUBYHHYMX%2B54fmGgRLtre2eCc4Q%2B0iceKtbBU32ANvB%2FxWnso4rRPOk2KhM%2F9p0JpZ2%2BGYWe7cVoo5GSChOEKMTvylg3%2F1A5Xz8yauDpqpxFk2ZpUHKIjaXy%2BQioWDh3RYxRYMy6YSfHr4zJeR3voVUDyXW13nM8p7t83XwbEpVaM02yjWoRzwl8oTJWfMaBBbaxnXve&X-Amz-Signature=e0cea9024ff88c0d38f179fef84ae6659b80c53343a8da50bfe942d9c7780c90&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVCHZNNZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BXDBEcc8B3MscHOyv6GkXBoejfWtO39U7CE9kpw0JPwIgbQJZ3lNpCSW7I5IveCYoUI3UaYwx4quoMLVLW7E66Vwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDhtbLkQWV%2FJIu938yrcA6JqrxuBXF2BtSfh5J3h%2FKW2F440l4115i%2B9O75YGpEoarq64fw1S3dHArloBV8mbp3wOiDKQ7y4R1ZtmmqWPSs7zDh3%2FuB%2FyFbmEaVzQg78wX0%2FBhJcunR2HMRQUzzBDGQCvZ7hWP6qikQKPY%2BnAp7lJ5%2FlYKxgDgSj3gZEWs%2FGx9I7Ahmnpwt4Uc3QnjGGXzYqush9stxtJ%2FbvF7vRjCWOIyAOarGB4f2O%2FiS9pLmngK957YoTkUJlI3dvWtquAmIcxIvnpnbng2GjHHunJSpayZvT%2Bzo0GVSSVIVZggkJv%2FfbKHrIUwldkc4ZbjcRGL3RmPeJVA66AsgyRxPpUg%2FA81T2EZKf%2Fd%2FBMwn0FDj9i6%2FZBEx8GBconceKcZj02%2FucH44%2B4tuKiad%2FzyYU1LvT5pKakkzHUhRoQYYogMvRwOH0J8xURz64LtN0fD5I6r5tmpjk63H2rzmikAkmERWaEBpYbEwrim8rUyTm41RT0OetbihecCLRmpEB%2FDnWRmLljwAaUa5jUXDIlZFysTvGoNwDGROiHeXv%2FEOwWu%2FtMIyCgGEcG40zHB%2BI5Tm9sFaZ8rLBV%2BOieu5J50elEhLQy0wjxpyig2XQM6n9JK3RlVUWlU5OklWF0A0XMIr50sEGOqUBEh%2BCfa6WZPXyqglloery7sQYygJyHBYe18V%2FxwkHB7g9JY6fxQNy7pP6XrB26I2%2FERa23DEoHIvBTPaQ2UAhpfJdRjLYhD5qm6zz%2FElLzcNh3CIgEymrl1k80xosh5axAVFTiPnUN6jpDxikt4ofkY%2BauHzah63BtUwkFKTfQeSR8mWQQRVILB6BULlRIt7ZmTO2nmIaQEbklBRrmLvSGG3Zl%2FPO&X-Amz-Signature=832eabc67cb59b24bb405b092c0f56e03f2f8e81679943ace8c0d695e02b9cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3K33CTQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrpXVoyZ%2B%2B6iQtjDPO1Niwnfeok7IoKUHjbuRoo%2BJQ8wIgbaXoTcypYcWdiF9mqpEPb7D9iBiCYt4KX8OkrbyosqMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDy%2BxfnYvPVPJTiU7yrcA85fjj85b6eVL48EiZr7QfLXvPSJRQAhsj0kETrCtwv3%2BYRXS4XvkPDqyz6SyLgPRmVdeoSQBsOQNKRhNBO3vFzz1YBFQXBvNQylahkTWI%2BFyTkaqnd2QX07Ll%2BmeFfv46aTJH%2Fk0xyCAob58Se5UQZg6ytWjd%2Fy2evcaxPOGQ4t8tbLCH2BeXGp2gFuSGnJjMgTQW9PxiJQxt90P0xxZ6kTbjVjlDzst5yUe39UGs55BgzTA5RxYbbVoiBm7RZHeuxc9d40PcyGQE7Gu7loR9AGO8eKQ3RwZc5I29MSY%2Bnk0qhifbTWcEtV9NQCrgJGXnSbw9AuGDL%2F8FELpFDAMY9M6G2QoGFd%2BZT%2BiMVy2iVxGGWGYGNdwC75%2FV%2FKJXxmaLz7yBrTs5VbjOyQfa0eG58qB0wBXbYD%2BUifgBWdv6yMN%2Bnu825WJqNmn2RK3zWZoAFZjlFTp0HcBNE5nlFhEUmBzzbGH7LDCKXRBFyxir059qq%2FSIJ5WCbCRfW3v4uD6OfmtC6IJSaEDWTduIE2nWKkyg15Z4mJ3VlrlNI3ZDdANCeMx4fnNwsHhMHZgWHprHylp9fnCaUlA7XYrKytOqu1aSSHWCAQ8g30V5kt81Isxw9AWv3CCoWXfkLZMNj40sEGOqUBwwmxLAH9c2HFMSusMA16buDu09AroKssw1s6hIOYcayf%2F6mLZocHObZb34OnLDC907j9hs7cbSa%2BgXY%2BGTdet0H9XmuTBrnXA4fcq3B0PkVZV1zQ4TOb2%2BuSqrGQlGb5YWk42a3prhEPUN7HVDHa4vCZvavuaQIPTFlRgchxGrmq%2F1hxRsJ003K1zAyeRcOn16vOSTYQMrl1IWoIUzZmQOFvEVF8&X-Amz-Signature=e19c686c76ad66ae1ee920231a8673d8fa108ab6250ff5fbd5f8f2995bce8fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHKKMOF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNmewunvtKA5YsA2FRulUvvDuMYUTCzXHZho24bycjbAiEArW%2F2HIBV4%2BcsrkRrqV58TYrnzpkYgS1gptYwbAiPTvAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMnpiV8wU7lcg0xAMCrcA4fcuyNQwEJ%2FTDrWi9SsgvuqeJtvFeEr9kLYrwquiW0eTHXnAp8sorW%2FNUVwdmIJp%2F2hSwV8B68movj7DPNDpKuNVRWO417Rasv9pH6TrsPmhu9nsN7eTkJfDeNnsJHpEGqyJ8hju0Pz5J5jHZPOgYWezS7rcEtqFBdYO0rlK01zB6DLNRDSC5jqaRukCo8CnXkt31EejAHcyLxrCaMCt3%2BvxvD6f1DkMwmzyYfvfYa%2F9f6hUecZ51aJ0Yue%2BMpKowkVIg6rJSLxZ1woYPXOeVKJzvoKfELgMsZud0ffuqYWEVM0KoUFzQhlHGM4xpMepWfO0cbbHvKeP1yy7hyxo12S%2BNZvKZeWuIQmyjVmamPPBKz%2BCei9aPYgVPtLcBIbz5b5cgVeEWg6gO3Yh2n%2FDI%2BxJWp8tdzzWQndImkawWjbhjSMuxZoXI%2B0KBXW9tJJk9vllhHsHjbcTOd2WYqJBcNNS0RlkIFD%2Bn24IteNDvt8Mc94MlFIs2o6oi6zJArRAUDafhMemefD75NfdmAgPoZtaJ27P6AnPT%2Bh0vy8iz7yRevqKPx%2Br6acCJOY0xd3T8GecfgTT0Tk8%2Fcxq6tNXC6mysX4w%2BJzItdT0qVW17JLyQXU%2BK%2Fa00AOEClrMPv40sEGOqUBddaCLbX4YttE8bUgsZFWWUBYHHYMX%2B54fmGgRLtre2eCc4Q%2B0iceKtbBU32ANvB%2FxWnso4rRPOk2KhM%2F9p0JpZ2%2BGYWe7cVoo5GSChOEKMTvylg3%2F1A5Xz8yauDpqpxFk2ZpUHKIjaXy%2BQioWDh3RYxRYMy6YSfHr4zJeR3voVUDyXW13nM8p7t83XwbEpVaM02yjWoRzwl8oTJWfMaBBbaxnXve&X-Amz-Signature=76cc6ddc2a34f0841690a15f30845da1cd4cf49832650f88e318402d007e2fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
