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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDN67MQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF6vTxhpp1PK7C4pQxa16IoAVPmbRuCvYROK3%2BEajkqIAiAO7zFlJEgIa92zyC5cxp2TgouObdTaM9mWKBrMWoGIoyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ZyN2Mwy7VuStDX2KtwDRrCyl2GL2hfMo%2FzKue1lbmJ6A9tpzYrrb3%2FzFe0nKS1O5nISP5vZlzTrZv1eq3xuEisCUVTVngP6l04QdjrSe4a%2BxBWI%2BGsNw7j17BVvVd47DmPgPZS20eCpQTAZ5VhxvOOAiuTNPCxYblqXPJZZUf5Q7SGDwDiDw5%2Fp2oxx1hYPuZNHWzguVe59HaIZS9oOA0JjXXdHKN125QdOkD%2FLQr5fGrc6zxkJ3lSe9cg5oL8XupTTS%2F9uwfQbCbZVvkO1nyFbatVWD1nKc9pcW0Qs%2Bu%2FcbzEQpk7gyLwiJzL%2Bnrfz0tWJKjs1VBNl0E73ZTzU4ZyoIXLR%2BqZyKI9gO0WNmExjSsluWCS85R7PuQy6mfMnCygH0uqI4DBpOUpIta8RCG6%2FH4hvlbpxBuszMIvuN1ExWGwB%2BspuAWLD2sMgmU05e%2BB6Y1JJFNnaXWRnbEG%2FOsfeRUNoWckyYEG3KZXSoxPX%2BllcjQ0g77pzDcxBPT7RH%2F477uyD%2Fgcq3FrWW34zb5%2Fdbp67JOj%2B%2B0%2FTXGkJohl%2BQZtjsB7IdhyRqTbQWvS7g9P6%2BdQ%2BX9NU%2FUUFITPPb2%2BPzm1kyDsQlkYxfbOos0RuuT8IbsHtjM%2Brj8FZM92CO%2FeFeBqpmGrDSpUw9cT5wQY6pgEVg%2BUm0dEjUHgx7XRzQra%2FxbVPH%2FgPZ77Y43BAJ%2B3BKskbKhZDMsKQVisIFZjgRzE0m3IFLOoQ7gG9mdwg6WPXIsic1sIV5P8WQNi16GJwEb5KI8%2BCCINsR5CNVCOcJMFiZ8967o2C7d2x6teYY4AXWsVbvXOkSeZPAyke43aVA0zr5ELCuOqh00%2FcXttgYdmUZUBAWU9Z6m0d7%2FH%2BQNBzsfgf3KGt&X-Amz-Signature=8b305ce454087e2ed8b67f03be1d2c6c4329f2a817488af5234313176da8c5a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDN67MQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF6vTxhpp1PK7C4pQxa16IoAVPmbRuCvYROK3%2BEajkqIAiAO7zFlJEgIa92zyC5cxp2TgouObdTaM9mWKBrMWoGIoyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ZyN2Mwy7VuStDX2KtwDRrCyl2GL2hfMo%2FzKue1lbmJ6A9tpzYrrb3%2FzFe0nKS1O5nISP5vZlzTrZv1eq3xuEisCUVTVngP6l04QdjrSe4a%2BxBWI%2BGsNw7j17BVvVd47DmPgPZS20eCpQTAZ5VhxvOOAiuTNPCxYblqXPJZZUf5Q7SGDwDiDw5%2Fp2oxx1hYPuZNHWzguVe59HaIZS9oOA0JjXXdHKN125QdOkD%2FLQr5fGrc6zxkJ3lSe9cg5oL8XupTTS%2F9uwfQbCbZVvkO1nyFbatVWD1nKc9pcW0Qs%2Bu%2FcbzEQpk7gyLwiJzL%2Bnrfz0tWJKjs1VBNl0E73ZTzU4ZyoIXLR%2BqZyKI9gO0WNmExjSsluWCS85R7PuQy6mfMnCygH0uqI4DBpOUpIta8RCG6%2FH4hvlbpxBuszMIvuN1ExWGwB%2BspuAWLD2sMgmU05e%2BB6Y1JJFNnaXWRnbEG%2FOsfeRUNoWckyYEG3KZXSoxPX%2BllcjQ0g77pzDcxBPT7RH%2F477uyD%2Fgcq3FrWW34zb5%2Fdbp67JOj%2B%2B0%2FTXGkJohl%2BQZtjsB7IdhyRqTbQWvS7g9P6%2BdQ%2BX9NU%2FUUFITPPb2%2BPzm1kyDsQlkYxfbOos0RuuT8IbsHtjM%2Brj8FZM92CO%2FeFeBqpmGrDSpUw9cT5wQY6pgEVg%2BUm0dEjUHgx7XRzQra%2FxbVPH%2FgPZ77Y43BAJ%2B3BKskbKhZDMsKQVisIFZjgRzE0m3IFLOoQ7gG9mdwg6WPXIsic1sIV5P8WQNi16GJwEb5KI8%2BCCINsR5CNVCOcJMFiZ8967o2C7d2x6teYY4AXWsVbvXOkSeZPAyke43aVA0zr5ELCuOqh00%2FcXttgYdmUZUBAWU9Z6m0d7%2FH%2BQNBzsfgf3KGt&X-Amz-Signature=e5ae8fc56c45d848625009366fe1fc4ce486ad90c0b833bf022871fb293962db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDN67MQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF6vTxhpp1PK7C4pQxa16IoAVPmbRuCvYROK3%2BEajkqIAiAO7zFlJEgIa92zyC5cxp2TgouObdTaM9mWKBrMWoGIoyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ZyN2Mwy7VuStDX2KtwDRrCyl2GL2hfMo%2FzKue1lbmJ6A9tpzYrrb3%2FzFe0nKS1O5nISP5vZlzTrZv1eq3xuEisCUVTVngP6l04QdjrSe4a%2BxBWI%2BGsNw7j17BVvVd47DmPgPZS20eCpQTAZ5VhxvOOAiuTNPCxYblqXPJZZUf5Q7SGDwDiDw5%2Fp2oxx1hYPuZNHWzguVe59HaIZS9oOA0JjXXdHKN125QdOkD%2FLQr5fGrc6zxkJ3lSe9cg5oL8XupTTS%2F9uwfQbCbZVvkO1nyFbatVWD1nKc9pcW0Qs%2Bu%2FcbzEQpk7gyLwiJzL%2Bnrfz0tWJKjs1VBNl0E73ZTzU4ZyoIXLR%2BqZyKI9gO0WNmExjSsluWCS85R7PuQy6mfMnCygH0uqI4DBpOUpIta8RCG6%2FH4hvlbpxBuszMIvuN1ExWGwB%2BspuAWLD2sMgmU05e%2BB6Y1JJFNnaXWRnbEG%2FOsfeRUNoWckyYEG3KZXSoxPX%2BllcjQ0g77pzDcxBPT7RH%2F477uyD%2Fgcq3FrWW34zb5%2Fdbp67JOj%2B%2B0%2FTXGkJohl%2BQZtjsB7IdhyRqTbQWvS7g9P6%2BdQ%2BX9NU%2FUUFITPPb2%2BPzm1kyDsQlkYxfbOos0RuuT8IbsHtjM%2Brj8FZM92CO%2FeFeBqpmGrDSpUw9cT5wQY6pgEVg%2BUm0dEjUHgx7XRzQra%2FxbVPH%2FgPZ77Y43BAJ%2B3BKskbKhZDMsKQVisIFZjgRzE0m3IFLOoQ7gG9mdwg6WPXIsic1sIV5P8WQNi16GJwEb5KI8%2BCCINsR5CNVCOcJMFiZ8967o2C7d2x6teYY4AXWsVbvXOkSeZPAyke43aVA0zr5ELCuOqh00%2FcXttgYdmUZUBAWU9Z6m0d7%2FH%2BQNBzsfgf3KGt&X-Amz-Signature=409f1994cf6d1763c2eb1863d87e939e480649116075cc128bf0c91248a0000f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VXNU4UM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCICGlUQSZrnrkmyJxQMGMT6Co09STZU%2FKk1KMSi2cuEFQAiEAgrVCb66fHuVA1zcdKcgns0jq80Gg443oz9EMQyg0WbIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4a93rXWzd8ghK7QyrcA914Q47Tq%2BAYjx1tBW8YhiuUdVdt%2BfoQVEGJJFhBWPrhBAnODo35MUKBWXeUSiX3r6crg8OhfkDkbmd5Pi6b2z9T7tvXjkzTw9VzxkRz2Dd81rfew82cFRjQQgrf2BaBgiJi6HVak8%2BzT787ivPlrvGJf7c4ueJwbnC1lU5VDmEszELLpteF3AC%2B9hPpQUBBJA%2BL16n9l2AP0mPsHVuCVgWaanRQ3AJjcOoGS%2FODMfbolNQi4rooyx92bABapBBJzIiIaGJeAE29oUSk1UGv%2FGEgxgTQyzjij%2FQnk5mnPU37lHyzI4EDj8IuxJdNo9L88wFW8oOs2WPtKGRnM1EbGDVm3jGZjxowv7DdkJBgsjgnepJoJKhUyuO9pk%2B17Zn9SstMSXGFVYwUoqw1EaaNNZho8ltwaQIw1UyF8lY86KyvaehK%2FQa3M0Cu2Pkh%2FkEIzrrD%2Fd5u07aaquFxKm%2BPiINJRX8srS7yPPbx13AQJvT4a0Gk%2BwZixrOUhGNbd%2FNUtA6YluvWesOaDJqYK4OTshxQCxKgK0x%2BD6qrhuTfM3EahshGOROI8xOy20Bf5nyDrsitOjzQ4uCUuzmwMFv1vgcdoeztTkYNd7swl9q1PdjZ1HLEAfOpd3wYoMwHMM3E%2BcEGOqUBzxD%2BAPhMereuk7u682yPwGp95mr1DdFmxh0VhpLB3GeUErDgy8U9LOhWVbD%2B9MdBHYhqYNhaPSTnSpNaYGOj499NwbewN1br8sIL78TuNLZza5E70VCsV2EnNiJzbnx49xfnHjXSM%2FzuVIyeXDIxe3HH7nbLESfJ1aCJMaiaOz9q4fUZ%2Fg5gikNujPyVSkeSlsB5GMHdBfqvLC8VdBbIQKbZATVi&X-Amz-Signature=322f4adece030ede235288577e5cc3d7b05573c33ee03e58ecc999accf95f8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGVU42X%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGHhbYjT5KFnKxbR%2FwsU1TCX3LhL%2FKZFe1Me%2B1d7hi2JAiEAlTownsOd4Qtzwh0Y2vcYsQJjhdPHpAbSxrZ93KInyCIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtvm%2F%2BoprGaNhJJOircA1ei853rww3Eudk7jhNKdTs4%2FRuBREfjr9JGQi2Gg%2FiEpO%2BsihS%2F5w6nXqh4X1onFV8nxQjK5%2FYB3bjXIDYqgW5%2F8SuXfWB1lqSG%2FXxj77ZZAYDnBhfxBIBr%2FlvBwLHntqQAGSAt77CSwwc8rrlVIWBvWZ3hGWyGG6dABTRHEx94yy0b2QkJ3q93sp9U4xtj%2FyHeAQAJUYzYCmwMgd6Jfkxw5F1MX1rv3PxCQp9eLONDXO3kPX39S1SQ2yW6Efs%2FoPk4GKGAXSuEVRpi4QK3M82at1arapKLiANyx5BMl65b7gSf%2By4SMZ5uYz1aMYJFEhBcitWdx5G6Jqk9Qk7Ehv%2B6E5cQfjW%2BZovIRzRXOqdnQE6Wu7RnBMpB9jvxrEW5JE1fIhk7KW%2FwLLgB6pOBitkbxFZJXoxSkcntB9XNvZLFIm%2BwsBnDgbcog1KPcmi%2Bd4PBtbW72ETBTJ4UVMvChhe0sBlrzoT1dhkF1GUxxik6u2RI2dbD2BtvtKnbZa7F58kFqNUbpHFC39OUWhe25%2ByGIcFzU%2BM1v7XUsP%2BO8X34%2B8arTi0Yf1ytELtJPEfQtjX1rdhToTgSvUwBEMaDyss67O6YRyoLeE6Jb4i1ntGRJhUs3abiBOioXH57MMPE%2BcEGOqUBL6rXiWs1o98Gsuh70IOwj%2FjhTY%2B46kK2Dc3TQW8EwuqJP%2BOr5GVYeBk8mfgnw4qtwheW69%2FKwXKAz4whfE4aZR9pax1iucukbjeJBjRdA3yc%2B4jr%2FFl2y0CvTT2TIucJ3TSDbtF%2FDDi942gjLRKskpXic2%2BW47hKwvDhs2YOSmaD3q1fHVHeGmkO6Hc7p55sPcZtRGpmWUGLpYWrtxqmcAfCk0df&X-Amz-Signature=b876aeaebd916e37aac0db71169273280dbad0909f5a57c0e14040bdb4e3e091&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDN67MQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF6vTxhpp1PK7C4pQxa16IoAVPmbRuCvYROK3%2BEajkqIAiAO7zFlJEgIa92zyC5cxp2TgouObdTaM9mWKBrMWoGIoyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ZyN2Mwy7VuStDX2KtwDRrCyl2GL2hfMo%2FzKue1lbmJ6A9tpzYrrb3%2FzFe0nKS1O5nISP5vZlzTrZv1eq3xuEisCUVTVngP6l04QdjrSe4a%2BxBWI%2BGsNw7j17BVvVd47DmPgPZS20eCpQTAZ5VhxvOOAiuTNPCxYblqXPJZZUf5Q7SGDwDiDw5%2Fp2oxx1hYPuZNHWzguVe59HaIZS9oOA0JjXXdHKN125QdOkD%2FLQr5fGrc6zxkJ3lSe9cg5oL8XupTTS%2F9uwfQbCbZVvkO1nyFbatVWD1nKc9pcW0Qs%2Bu%2FcbzEQpk7gyLwiJzL%2Bnrfz0tWJKjs1VBNl0E73ZTzU4ZyoIXLR%2BqZyKI9gO0WNmExjSsluWCS85R7PuQy6mfMnCygH0uqI4DBpOUpIta8RCG6%2FH4hvlbpxBuszMIvuN1ExWGwB%2BspuAWLD2sMgmU05e%2BB6Y1JJFNnaXWRnbEG%2FOsfeRUNoWckyYEG3KZXSoxPX%2BllcjQ0g77pzDcxBPT7RH%2F477uyD%2Fgcq3FrWW34zb5%2Fdbp67JOj%2B%2B0%2FTXGkJohl%2BQZtjsB7IdhyRqTbQWvS7g9P6%2BdQ%2BX9NU%2FUUFITPPb2%2BPzm1kyDsQlkYxfbOos0RuuT8IbsHtjM%2Brj8FZM92CO%2FeFeBqpmGrDSpUw9cT5wQY6pgEVg%2BUm0dEjUHgx7XRzQra%2FxbVPH%2FgPZ77Y43BAJ%2B3BKskbKhZDMsKQVisIFZjgRzE0m3IFLOoQ7gG9mdwg6WPXIsic1sIV5P8WQNi16GJwEb5KI8%2BCCINsR5CNVCOcJMFiZ8967o2C7d2x6teYY4AXWsVbvXOkSeZPAyke43aVA0zr5ELCuOqh00%2FcXttgYdmUZUBAWU9Z6m0d7%2FH%2BQNBzsfgf3KGt&X-Amz-Signature=e710f1fe2c4a2d75b8d4b1e776023ee38010a7b96a92dfd8cc1a8a703811a5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
