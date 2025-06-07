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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLCMDNYI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlPoSpUouGU6KtLhGwJR%2F05Kd9QkgceeX7l6nr8Cka6wIgYxRS%2FwLT6WCNTg%2FukZgyk88WgHQ1h3d8gLY9jF9qP94q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBIbCnR96oHknMsizCrcAzitVVn0Nj6E7ZjMuMV6%2FgdceYLxo81KQKbreHcKzpgtx2cWVO9aGYLK2bKZVHnnlhZQMgK8ow7CryFIAEabLEm%2BKuFzUz%2FU9%2FI8PuXh0dhhN%2BTHAiLaBBMjk1h6e1vu71APvhsG7mvclZ%2FRbHsYppHR7i0%2FhYiox4JSfyKTEQy88Zxnl%2BYnI7iikyoPFAqxb2T4RJ9X0hwrszJqrNWTxgkbVhNFe78yBk2eV%2FXHWAue87RGnr0d5YyRFonP2SPRIGNnp8dtFrYSz2%2FkY9u7RBPh2S8cZlekk4NbHj8nnir4CnlJMr9yAymVGJGG%2BO0RkytQWmawSK1BrdOGBP0QUdEw8RrlKsV6%2BaXo5M%2FJJW2KlB7zN%2FzUkafftHHls%2Bwxeqkd3E1GCcpCJbdjBtwYT3oeTzMcDubqHqEnESlgTrMef24vBCzfJEodBWk%2BG8tLxttIA4roLoWubWkWvroJjyV0nwUgBkSbD9T5%2Fp9WWSuXytmlBzLaZ8SxWmNFsq11RAOii69vw4utMpTe3tCT2elEnJNTFBiBTbUk1x44%2F1MtRkRAxI1orQ%2BkJIxjQIUh1nNJX72NZujlKRN9DarjW3f62iqq6qNcXt1UKPRZcqsnZYQOOiXM6AoHukLqMNT6j8IGOqUBpTQ3%2Biun4quF9PYQqNjdSWBODMg%2Fc274tveKBzkneemAvwvoV7rTqiVsBoFSybccCj3db9r8zIAAZ5MVcIUpw9vBhpi3MJv5cExrOKLmoaGyuzhfOntsFnAxnRr6Xs6vHyTaleZ4x3c%2BNC3u%2FpGNcKNc5tWHp2AuuelnmX4sYp%2FgUFLuzVd7fUmvYjWn5nOhuqC6az0J0Rwr4GTucKW%2FRtki1S15&X-Amz-Signature=609e55c6832791feeddb17b7b541ee8b39dde5c335f7e2dd9ddd9f9e9b8c7def&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLCMDNYI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlPoSpUouGU6KtLhGwJR%2F05Kd9QkgceeX7l6nr8Cka6wIgYxRS%2FwLT6WCNTg%2FukZgyk88WgHQ1h3d8gLY9jF9qP94q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBIbCnR96oHknMsizCrcAzitVVn0Nj6E7ZjMuMV6%2FgdceYLxo81KQKbreHcKzpgtx2cWVO9aGYLK2bKZVHnnlhZQMgK8ow7CryFIAEabLEm%2BKuFzUz%2FU9%2FI8PuXh0dhhN%2BTHAiLaBBMjk1h6e1vu71APvhsG7mvclZ%2FRbHsYppHR7i0%2FhYiox4JSfyKTEQy88Zxnl%2BYnI7iikyoPFAqxb2T4RJ9X0hwrszJqrNWTxgkbVhNFe78yBk2eV%2FXHWAue87RGnr0d5YyRFonP2SPRIGNnp8dtFrYSz2%2FkY9u7RBPh2S8cZlekk4NbHj8nnir4CnlJMr9yAymVGJGG%2BO0RkytQWmawSK1BrdOGBP0QUdEw8RrlKsV6%2BaXo5M%2FJJW2KlB7zN%2FzUkafftHHls%2Bwxeqkd3E1GCcpCJbdjBtwYT3oeTzMcDubqHqEnESlgTrMef24vBCzfJEodBWk%2BG8tLxttIA4roLoWubWkWvroJjyV0nwUgBkSbD9T5%2Fp9WWSuXytmlBzLaZ8SxWmNFsq11RAOii69vw4utMpTe3tCT2elEnJNTFBiBTbUk1x44%2F1MtRkRAxI1orQ%2BkJIxjQIUh1nNJX72NZujlKRN9DarjW3f62iqq6qNcXt1UKPRZcqsnZYQOOiXM6AoHukLqMNT6j8IGOqUBpTQ3%2Biun4quF9PYQqNjdSWBODMg%2Fc274tveKBzkneemAvwvoV7rTqiVsBoFSybccCj3db9r8zIAAZ5MVcIUpw9vBhpi3MJv5cExrOKLmoaGyuzhfOntsFnAxnRr6Xs6vHyTaleZ4x3c%2BNC3u%2FpGNcKNc5tWHp2AuuelnmX4sYp%2FgUFLuzVd7fUmvYjWn5nOhuqC6az0J0Rwr4GTucKW%2FRtki1S15&X-Amz-Signature=1dc11d4cca2671f0117a35675f2023f6a33f496db27b3f0beef15a8fcb77025f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLCMDNYI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlPoSpUouGU6KtLhGwJR%2F05Kd9QkgceeX7l6nr8Cka6wIgYxRS%2FwLT6WCNTg%2FukZgyk88WgHQ1h3d8gLY9jF9qP94q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBIbCnR96oHknMsizCrcAzitVVn0Nj6E7ZjMuMV6%2FgdceYLxo81KQKbreHcKzpgtx2cWVO9aGYLK2bKZVHnnlhZQMgK8ow7CryFIAEabLEm%2BKuFzUz%2FU9%2FI8PuXh0dhhN%2BTHAiLaBBMjk1h6e1vu71APvhsG7mvclZ%2FRbHsYppHR7i0%2FhYiox4JSfyKTEQy88Zxnl%2BYnI7iikyoPFAqxb2T4RJ9X0hwrszJqrNWTxgkbVhNFe78yBk2eV%2FXHWAue87RGnr0d5YyRFonP2SPRIGNnp8dtFrYSz2%2FkY9u7RBPh2S8cZlekk4NbHj8nnir4CnlJMr9yAymVGJGG%2BO0RkytQWmawSK1BrdOGBP0QUdEw8RrlKsV6%2BaXo5M%2FJJW2KlB7zN%2FzUkafftHHls%2Bwxeqkd3E1GCcpCJbdjBtwYT3oeTzMcDubqHqEnESlgTrMef24vBCzfJEodBWk%2BG8tLxttIA4roLoWubWkWvroJjyV0nwUgBkSbD9T5%2Fp9WWSuXytmlBzLaZ8SxWmNFsq11RAOii69vw4utMpTe3tCT2elEnJNTFBiBTbUk1x44%2F1MtRkRAxI1orQ%2BkJIxjQIUh1nNJX72NZujlKRN9DarjW3f62iqq6qNcXt1UKPRZcqsnZYQOOiXM6AoHukLqMNT6j8IGOqUBpTQ3%2Biun4quF9PYQqNjdSWBODMg%2Fc274tveKBzkneemAvwvoV7rTqiVsBoFSybccCj3db9r8zIAAZ5MVcIUpw9vBhpi3MJv5cExrOKLmoaGyuzhfOntsFnAxnRr6Xs6vHyTaleZ4x3c%2BNC3u%2FpGNcKNc5tWHp2AuuelnmX4sYp%2FgUFLuzVd7fUmvYjWn5nOhuqC6az0J0Rwr4GTucKW%2FRtki1S15&X-Amz-Signature=c311467a5b5d8e87ebce0fe0823b6c010e03309d77ce65f0943f9b600448c0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLU22WP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9HK134hONkH83yPX404%2B9QP0DuklyCw1A9jek5BVpnAiEAmFkS5rxO2ZZWxI6DyqvPoncy1Uk0FZY5F3sSlI4lunsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNu7D6TuW6SRqFv6kircA6jgl9E9mtEUXgs5mUpEl0a3yhVcOwp76esTjTQAKk7GFHdUlTy2x%2FwrfVg0qJxfBc1DjwhdaizQihGOQpHkDkCvNK3VzdTh9b48fw27U4P5dgMD3FseYNlp9aTrXiVhxshLGViqCk9jMFLhWJnCf4RFUQniBtnMM1LQ%2BmbwP1BbMU7LUZIR4%2FUDrw3NbztliCXjMvrVAMGV4xPwvDFXQVt9km7yZguCNar2ms489MVh7lRo65LnypXid27SOIEv79VgfixDSFwU904b7M2twqiR7JhJ9Er7cvLOEHnZyO54XwT%2FN4JNRFDgXJywcKLUr2K4YShxQLdTT8x062PKS2WNpATg2GsOubsQ5oTZCljInStQnduz13YPBnuanB7evxcSm%2FeGfoU4e%2BAh5wyXpVgnh0ei5uGbGHnyse%2FAQwIEeiXYYeAP%2FnD6bWiwZBFxzjBHanRjBpEBCJ%2BT7vKMMvGsmH%2F4XTuQb7wiPueZVylRHSleJBUBlEzRakL0beJNZJJ2MwtModzMAWCFBGinEp7K7%2BKNTc6jFsRZYV8Ipx7Mc3PJ4bdbvridCiW0N8XMazipV5pHjPBjL69D4t2DPjBzzbfS6fpuZVFi%2FkzwrEFz37PblemSLGA6Rml5MLz6j8IGOqUBxceEBXnxvfto682Qxz5zGvXXZaPsKqBSRADNlAp66HEuaBv0kpv1vY8i%2F6iGNz%2FmtfLOczfAOOmJlh88m%2F%2FbIMhT9blj7%2BdtIdwrW8TLcC8Hy3jl5qHa1uSLJvoJM60%2BGgT7RnshispxxOxXLjYk%2B7j6FaLsDtV6OuXk%2FLRf0s9SwI%2BDkocwKp9xEndX2UX13dw0QhS5YV7CB%2BBJrp91wCC4iXXN&X-Amz-Signature=bbda03f837aa34851c12114e7317c34ee0141bcfa36cc11cb905948a77fc36f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHLCOAM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1fyI%2F16qVgk1izy%2BpEBGu%2FRv0fWLqu%2FN0OCbAEo7eAAiAkECGrKA8icCBdiw96ZJNEmDuKxf5Tk7WfNqko3kwMzSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM6nJqSHo4jtWbwbOYKtwDQi%2F2nHEcCxJiOke0xi0%2BMAY0ieIylwNwXJ5MxgWdeIYlerTWRXerOkQ6GgNwQ3QJHmwA23y%2BWTrKG12xVfiiTY%2BmMDCwiV1620doD0hKHCs7S9xGbxYEAXFdXLQHh4Ez28bbp3JC8YPArTHLUFMrSWGV%2BC3CcFTwv%2FxA61dC6FbiVMDBwx9gOhg34wt9L54WhbbivjMYD%2Bs6TO1tVZBpwhP9I8LPEE8sLMfSren699uNfqQTvYFfBYBW18Q7%2FZJaPDKqnzGQxY5WJDss%2FGm%2Bdlu%2BCTFoCFsLbi%2B49LYwwQn8yR2c2uSL6WquYx0Q66AYUypzWyyQyhkLJCkA6oNc9ov%2BujcdkmooZPLjoIMm%2FrNw9SooRpBaPtY1o9X5q5bNrVxCt0iOQWpurhRVU8So7iTSfpQhWIjiIxheYSQQyfsUxc0G58enwG5hbgZudXO06f1VWlbPGW0JDRslMra8Clj%2FR%2Bd7WeeQj0jYt9A1RGzjfJdkWXOj8U%2FsT0y7TSKQoiCxXCNdO5DL6VRxJu17%2FjB084RlEpCbneoEpHVMHgdRhYz0FEcSX8ZVYShHIxrOLSpmMmlo029P5pKFSbtsa8IHoQFAc%2BToZshjYYqcARg%2Bfu7G%2BV3ezmQg5Yww0PqPwgY6pgFBQn%2FO8hnrOiCSvlu9uTETZGekluCmmvPTqvoWd8iL%2FnnMZ9%2BadvzDxUNYohXNevavfsknMAbPQKiNNQNjG4UGmng%2B6cTAW6q625%2FSpfEjJ7ZgyqReiFYGQjTq3ccUqK3dv%2FlZKMw0EjKGjZ4AhsDF%2FsQb%2BfEVD0EHAHjQ27i94NoduWH4zgxCFSTeyHtOMHw79PhedyG1%2BOacb4eQX4NEdno5ylEf&X-Amz-Signature=16c0282e69aba049643eeecc5f397e31536aa4206c260f96862c4482e74af143&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLCMDNYI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlPoSpUouGU6KtLhGwJR%2F05Kd9QkgceeX7l6nr8Cka6wIgYxRS%2FwLT6WCNTg%2FukZgyk88WgHQ1h3d8gLY9jF9qP94q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBIbCnR96oHknMsizCrcAzitVVn0Nj6E7ZjMuMV6%2FgdceYLxo81KQKbreHcKzpgtx2cWVO9aGYLK2bKZVHnnlhZQMgK8ow7CryFIAEabLEm%2BKuFzUz%2FU9%2FI8PuXh0dhhN%2BTHAiLaBBMjk1h6e1vu71APvhsG7mvclZ%2FRbHsYppHR7i0%2FhYiox4JSfyKTEQy88Zxnl%2BYnI7iikyoPFAqxb2T4RJ9X0hwrszJqrNWTxgkbVhNFe78yBk2eV%2FXHWAue87RGnr0d5YyRFonP2SPRIGNnp8dtFrYSz2%2FkY9u7RBPh2S8cZlekk4NbHj8nnir4CnlJMr9yAymVGJGG%2BO0RkytQWmawSK1BrdOGBP0QUdEw8RrlKsV6%2BaXo5M%2FJJW2KlB7zN%2FzUkafftHHls%2Bwxeqkd3E1GCcpCJbdjBtwYT3oeTzMcDubqHqEnESlgTrMef24vBCzfJEodBWk%2BG8tLxttIA4roLoWubWkWvroJjyV0nwUgBkSbD9T5%2Fp9WWSuXytmlBzLaZ8SxWmNFsq11RAOii69vw4utMpTe3tCT2elEnJNTFBiBTbUk1x44%2F1MtRkRAxI1orQ%2BkJIxjQIUh1nNJX72NZujlKRN9DarjW3f62iqq6qNcXt1UKPRZcqsnZYQOOiXM6AoHukLqMNT6j8IGOqUBpTQ3%2Biun4quF9PYQqNjdSWBODMg%2Fc274tveKBzkneemAvwvoV7rTqiVsBoFSybccCj3db9r8zIAAZ5MVcIUpw9vBhpi3MJv5cExrOKLmoaGyuzhfOntsFnAxnRr6Xs6vHyTaleZ4x3c%2BNC3u%2FpGNcKNc5tWHp2AuuelnmX4sYp%2FgUFLuzVd7fUmvYjWn5nOhuqC6az0J0Rwr4GTucKW%2FRtki1S15&X-Amz-Signature=2dcc5ff5bead82e6ac83a9baa123f8448abf53c24fc24015a9482883dff561de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
