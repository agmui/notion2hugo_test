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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IS7FSDJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQYeyptMUXr%2BdQ96Cuet0u06cswOKupIBmFwTQUeTeAiEAikXi18kRHkd8K1TQ1k5l5KSuqQgw%2FGNhxxVIQcaqDcwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaC2IaBtdFylUxAKircAwTSxYQTQqrpoqKfIcK%2BW9T3UdbQkoyUdqeG%2F0eqdG5e3kj28Tmj94shy%2BbB51uyGvNBiZ0yWif9eyxK2Y6zyhymSc2LSBTQUMCTpE3IxH7n5Cp8NGrmkz%2BQA7MR5bckCJ2MYitK3ARaf0N29brpPvlu4938MUSPaeGZCCiD%2BCtWvVyBqMzX8cwhqlu5%2BRkTTjnILfWi69pOmOh2v2cAE4PViMrZrqV5i7hSaOAxPy0GIR3YAFT5oP1oktbzirlfcyNDNwB5wD6BOy%2FZvKAbbEjdg5vJjjxpI%2BdtWcj%2B09Q3MtCtiTpe8fC%2BUqARjCjIeODeggFQNoRvlmTO2h5Asr%2F4orWYFfeO2USjCODDvGyhdSAH%2F9cA6T6%2FN1%2BQPOk7GqnHcQ7GNIQ6zv7CHR%2BSTJDJWZloGAGSkHmTdrKEHVw3QSVUaJlJAVWckF%2FEBunakSoBVQCNBKPaSwCno3sCDnLyWq0sw1k7nu2RXLsDmRwQWAlePvU2PhyjxC0IKjl4UlOC8tE29NnwnEvYmP%2Bxl3X5FFrgDljxYQQbAsO8ZvDFSUgXI1z8jtYHHNahVRRd3LJl%2BPcdOp%2FZk1VUDQOFjHpw0Xhq7KiU5WnXyMHhk5rjA7MhihIeBgZQsEjpMIHK%2FsIGOqUBD%2BVJv%2B3nhNAWFSXFB%2B1m6%2FwN26Nx%2BrKaj28UE39RO2n5o%2FuO361TTD2iLTRJSMPcyw1lgDdOoeMMIhovw4OiM%2BXXdTnguZkf%2B3mSF2jxvZ%2B0yHAVAJyVpKdMY8FuP8571cHy5NyAEI9iIpZ7wiABGUIEoU3mN7oRFzlNpXBpFG%2FNf7atN7j1nLWgHgMp9f085HnIWSP98GFwaO0C4ulBTf7ESVt1&X-Amz-Signature=d4b19aa59d1e1a79b68045c42174311441bd00a40bf1ec86a4b3b2251eca44ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IS7FSDJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQYeyptMUXr%2BdQ96Cuet0u06cswOKupIBmFwTQUeTeAiEAikXi18kRHkd8K1TQ1k5l5KSuqQgw%2FGNhxxVIQcaqDcwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaC2IaBtdFylUxAKircAwTSxYQTQqrpoqKfIcK%2BW9T3UdbQkoyUdqeG%2F0eqdG5e3kj28Tmj94shy%2BbB51uyGvNBiZ0yWif9eyxK2Y6zyhymSc2LSBTQUMCTpE3IxH7n5Cp8NGrmkz%2BQA7MR5bckCJ2MYitK3ARaf0N29brpPvlu4938MUSPaeGZCCiD%2BCtWvVyBqMzX8cwhqlu5%2BRkTTjnILfWi69pOmOh2v2cAE4PViMrZrqV5i7hSaOAxPy0GIR3YAFT5oP1oktbzirlfcyNDNwB5wD6BOy%2FZvKAbbEjdg5vJjjxpI%2BdtWcj%2B09Q3MtCtiTpe8fC%2BUqARjCjIeODeggFQNoRvlmTO2h5Asr%2F4orWYFfeO2USjCODDvGyhdSAH%2F9cA6T6%2FN1%2BQPOk7GqnHcQ7GNIQ6zv7CHR%2BSTJDJWZloGAGSkHmTdrKEHVw3QSVUaJlJAVWckF%2FEBunakSoBVQCNBKPaSwCno3sCDnLyWq0sw1k7nu2RXLsDmRwQWAlePvU2PhyjxC0IKjl4UlOC8tE29NnwnEvYmP%2Bxl3X5FFrgDljxYQQbAsO8ZvDFSUgXI1z8jtYHHNahVRRd3LJl%2BPcdOp%2FZk1VUDQOFjHpw0Xhq7KiU5WnXyMHhk5rjA7MhihIeBgZQsEjpMIHK%2FsIGOqUBD%2BVJv%2B3nhNAWFSXFB%2B1m6%2FwN26Nx%2BrKaj28UE39RO2n5o%2FuO361TTD2iLTRJSMPcyw1lgDdOoeMMIhovw4OiM%2BXXdTnguZkf%2B3mSF2jxvZ%2B0yHAVAJyVpKdMY8FuP8571cHy5NyAEI9iIpZ7wiABGUIEoU3mN7oRFzlNpXBpFG%2FNf7atN7j1nLWgHgMp9f085HnIWSP98GFwaO0C4ulBTf7ESVt1&X-Amz-Signature=4b494b9d73a9b19822bbcd0e90fbb459e9ab883803b4fe6ee7a91c17fdb05a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IS7FSDJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQYeyptMUXr%2BdQ96Cuet0u06cswOKupIBmFwTQUeTeAiEAikXi18kRHkd8K1TQ1k5l5KSuqQgw%2FGNhxxVIQcaqDcwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaC2IaBtdFylUxAKircAwTSxYQTQqrpoqKfIcK%2BW9T3UdbQkoyUdqeG%2F0eqdG5e3kj28Tmj94shy%2BbB51uyGvNBiZ0yWif9eyxK2Y6zyhymSc2LSBTQUMCTpE3IxH7n5Cp8NGrmkz%2BQA7MR5bckCJ2MYitK3ARaf0N29brpPvlu4938MUSPaeGZCCiD%2BCtWvVyBqMzX8cwhqlu5%2BRkTTjnILfWi69pOmOh2v2cAE4PViMrZrqV5i7hSaOAxPy0GIR3YAFT5oP1oktbzirlfcyNDNwB5wD6BOy%2FZvKAbbEjdg5vJjjxpI%2BdtWcj%2B09Q3MtCtiTpe8fC%2BUqARjCjIeODeggFQNoRvlmTO2h5Asr%2F4orWYFfeO2USjCODDvGyhdSAH%2F9cA6T6%2FN1%2BQPOk7GqnHcQ7GNIQ6zv7CHR%2BSTJDJWZloGAGSkHmTdrKEHVw3QSVUaJlJAVWckF%2FEBunakSoBVQCNBKPaSwCno3sCDnLyWq0sw1k7nu2RXLsDmRwQWAlePvU2PhyjxC0IKjl4UlOC8tE29NnwnEvYmP%2Bxl3X5FFrgDljxYQQbAsO8ZvDFSUgXI1z8jtYHHNahVRRd3LJl%2BPcdOp%2FZk1VUDQOFjHpw0Xhq7KiU5WnXyMHhk5rjA7MhihIeBgZQsEjpMIHK%2FsIGOqUBD%2BVJv%2B3nhNAWFSXFB%2B1m6%2FwN26Nx%2BrKaj28UE39RO2n5o%2FuO361TTD2iLTRJSMPcyw1lgDdOoeMMIhovw4OiM%2BXXdTnguZkf%2B3mSF2jxvZ%2B0yHAVAJyVpKdMY8FuP8571cHy5NyAEI9iIpZ7wiABGUIEoU3mN7oRFzlNpXBpFG%2FNf7atN7j1nLWgHgMp9f085HnIWSP98GFwaO0C4ulBTf7ESVt1&X-Amz-Signature=d8eeb6f081465320f433595050428cecc3452239e14bab108073168c8f5ca52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLQSO6XZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKt14OTArffkMNNm0CYstX9yIVINeI8mUbnNkgHFBf3gIhALZJizWtBId7Hdc%2BFHFgGW4%2FkmG6w9XtMcMLKchYeEcZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2FDZPKWbmUfdCDK8q3APRO%2BqTdBM4bcH5qgFwyodGB5pvvQv4cW8dE4xyfkKJBMxdRFnsV4ymtMFlyQyUbPoyNitdWgA%2F4q5alZTNP713UVzQl7y7PYiXgR1jjmpYSVwVn%2FgUB0z1YMYr1OGj86uh5C5DsZ5MSf0tprGeipREZeGxcYEQZaQPt4SHjIa1LJ5EFtiPFD3aDfPKR5OyIEIoRL0X5XeJztoYzxkx%2FkNf30QRnETFicbrHN3hFzSgrh04NkPmDHPFhU56hDJS46RursluMS9P9CXKS6Wo%2BwX57FbCp0TO0dmYBkJQoKmra2J%2BvCyIOiamQYvAVLrJujdXWJTbxHRlvojX4EnFFUDk2PAImvUPq9ov7iinpIfHEDeBJELEnp3iickqpatPJXDtLM1XKMkpMJojj5tMAXLv9af%2Fupc6ud0pdZ7UIXzOJFyphy5om8W8%2FdQXHmgPvZZHri52J7P8NgTCMc%2BBPlWTGuvgQJStjq2zideUUA%2BzYJVT4ZV00%2BaZbuAcaoXKsE%2BDUq4ziHdHI0ich9xIvgNJaW7xWQDwmgtgNKaYiiENZdO%2F%2F72BgcPJ49InQ%2Byj%2FwJ9PaxS833ygpwkQndgPkqR9nyEyPSk%2FLfKMyC9cJxNrrcieDNHN1m3r7IOADDxyv7CBjqkARVM7paCmc8F%2Fxjo4qvccFwhRfBUZW4xsUEjvIvHgQCwpDXF7uDqr%2BS%2FmzLgbXR401wD7tis2wfo6ybAO2yak776AGfnJFNQvb%2FwZnfBDrau6tTRUnUSGbO4o6o4u%2B3Ton8rEkMmDMLTghSV8SuLHgmnhQtI0l%2FtB2HjrM362XamTPqVf5hnK2JwSRAeNPoepIS8jSTMcnOQ%2FkOB9V0PZqLxQpkc&X-Amz-Signature=23d3d2f641c80e1fca51a5b16edffbeaa164c10e9d15ee0a43e68a9a7a3d680b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APMQZLC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCii5pLcSpmubjZxoUrmk1%2BMnNivpUEFj8i6e8GNzJN3gIhAI1W4ZQNileN%2BAWl9ck9KVUG4mWRFENOqfs2vuXXR%2FtGKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCTHZu371wRwe9IoQq3AOEA0WZCON%2BU8rP%2BwS6UPqySUXhp%2BChbjhdPaH5DdtT%2BOxoaB3REkE5BIG93Ul5bSZPyUVBM2KiaOlu01wOaWc%2FwRF24ggsydxpddnYtwtbSyQqJ%2FcJuInmZT0RLubxSmYCusLIFsC5J9Q3phlwVgu8BffRK36GxgL3sX9wn7tqavI1HGwlq6GkPts8fnEpa2cJyehZYzA6tqLAH6%2BilFPFY0j0zwu5EjvF8hKa6CGMTxwFf8zcXK%2F2wBA0yrtjBkMDMV1DDY6YEVNiF2D8fOBFJ2tNKOv7GkeBwwq58W4mdd3vGJgwbciLdpcXLPpEdNC%2BxANaftU5OI7%2F337duZGsorzKaJVXgznETYqXTkQMHnPjxZ50IfVcd83mLOojRw%2FrFuQUd4DVuJEPPRFuC4ya1BjmMWdakFUGhsMjrdHVQHKTSxx9pZmKUkZ6MwMvl9XUpovAhBbOcxOy4Q8Ye4MnKEh7ggb6XGCJ2lj5LcNSwTyV3QEcikTSrfzodBQIESms124n5Nrki3LtTE%2BACVNKnqZ9XIJ6KpMV2nr3DznPWP1fBNe%2BQYOExNn1mtwrb2fULZxuTyC8KH7Z%2FT4Rt5Bf8BzjFRyNIdqGJo1gxbz%2BrixRHbRTSfyvpDQ1EDC2yv7CBjqkAS4x%2BWc9TvqYT7ZB6BsfRXvRr8XnkS5cLysrhvXNC77fc7p9p0zV4pUKAjq%2F06F0pXRmNmby60UUrVva5TG2ksDrlXZT7MypvzST%2BSQLP34v7m0NNNVFUq1zxIBW0c%2FEbS%2FAf0%2FnI0tdkyYb1SVgwlJJAhS6IgJND8usdSU1Uj2soI2rjVRvv88JHxoeeaTRa%2FDXUAf2GDDPsnK1tt4xvXW1fsqP&X-Amz-Signature=bb11d1697c4b6cbab2055894ad21bff0ba22b95c987bcb534bb7ec5dec29f70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IS7FSDJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlQYeyptMUXr%2BdQ96Cuet0u06cswOKupIBmFwTQUeTeAiEAikXi18kRHkd8K1TQ1k5l5KSuqQgw%2FGNhxxVIQcaqDcwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaC2IaBtdFylUxAKircAwTSxYQTQqrpoqKfIcK%2BW9T3UdbQkoyUdqeG%2F0eqdG5e3kj28Tmj94shy%2BbB51uyGvNBiZ0yWif9eyxK2Y6zyhymSc2LSBTQUMCTpE3IxH7n5Cp8NGrmkz%2BQA7MR5bckCJ2MYitK3ARaf0N29brpPvlu4938MUSPaeGZCCiD%2BCtWvVyBqMzX8cwhqlu5%2BRkTTjnILfWi69pOmOh2v2cAE4PViMrZrqV5i7hSaOAxPy0GIR3YAFT5oP1oktbzirlfcyNDNwB5wD6BOy%2FZvKAbbEjdg5vJjjxpI%2BdtWcj%2B09Q3MtCtiTpe8fC%2BUqARjCjIeODeggFQNoRvlmTO2h5Asr%2F4orWYFfeO2USjCODDvGyhdSAH%2F9cA6T6%2FN1%2BQPOk7GqnHcQ7GNIQ6zv7CHR%2BSTJDJWZloGAGSkHmTdrKEHVw3QSVUaJlJAVWckF%2FEBunakSoBVQCNBKPaSwCno3sCDnLyWq0sw1k7nu2RXLsDmRwQWAlePvU2PhyjxC0IKjl4UlOC8tE29NnwnEvYmP%2Bxl3X5FFrgDljxYQQbAsO8ZvDFSUgXI1z8jtYHHNahVRRd3LJl%2BPcdOp%2FZk1VUDQOFjHpw0Xhq7KiU5WnXyMHhk5rjA7MhihIeBgZQsEjpMIHK%2FsIGOqUBD%2BVJv%2B3nhNAWFSXFB%2B1m6%2FwN26Nx%2BrKaj28UE39RO2n5o%2FuO361TTD2iLTRJSMPcyw1lgDdOoeMMIhovw4OiM%2BXXdTnguZkf%2B3mSF2jxvZ%2B0yHAVAJyVpKdMY8FuP8571cHy5NyAEI9iIpZ7wiABGUIEoU3mN7oRFzlNpXBpFG%2FNf7atN7j1nLWgHgMp9f085HnIWSP98GFwaO0C4ulBTf7ESVt1&X-Amz-Signature=92b026ec4d1d8105a07170b2108c8eefac41d9cdef19b2b45da8ae1a81f0afff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
