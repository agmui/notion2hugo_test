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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHOKUKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjTUQtrFlPIdh2S48pSZN3eOq6WjC0s%2F6T4hFJbNHFAIhANdhr00xciiGVM2sD%2Fi%2BNRb3cPy74HRAlK24ApFnxQr8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwEisTAF6peaYqgeJ4q3AOJRYzdX3kceB4wW73TvGR8WJQfilPfdd%2Fynkfg3edDjWfOREwZC93KOQk96ElafMpbzbqwyXsv4EIgGHu3ULEWtDI7Dphxs0ZglV1ncenkguYXphprDXcxsmGsum2wazTUBBdNXl7DPIT53y7IVtokB7sszv6xI4xX%2BZTRlAM9rqNaH5qT1KbIeX51xVohbXeXIvqLPSA8ztBl5IqmwZP42V1jDnUOXo%2Fg5F6A0z4NQvkxmprxd7OduGrIuJ0e7IY5%2B4kkZg2rlhcQZkQByG4N%2FnuN%2FvQo%2FpAuTyyHlMEl9riNJ1Jp2UtBJXT3yIvuG2nQiIvywB0WBTkb6k9lcnoSjyNjh1SVNcfSPrjU6LvcCeeq7E4P1gA2laQrlHq%2F1lpnbvE%2BwK1Fj544wTTDAbKVKMOK%2BFoh5Iv2zEKAxcN4vxbUD6uZNbFKXDD5btXr6kLy%2FSVCV1kqeDKtxApXtjD7S1jKohiZT3KVwCHB1pLyP%2BaVbcscFYoxniPHBE1jvRHMrGL%2BGPDymiON2UdfYRMoEdsJOzbd6C4kyenzVfzsJgjJFZzJE%2BDoTscfnpRlXIc0AmgbJwXEVScltkqQFkaAoZVaDsXL%2FdahQo4anCt36TdwCqoMRtFixXPvPjDdxdzBBjqkAWyDDXftL8IWP1M7UmcfxSDcK16vYtxh38qqhMbNmQ6sZTiuicuZfqmNFZUn0WVb5CdHdaUqd5ioMsoPjQrovFlK4dazS8XlAM82cioFC0HO6h%2Bt5lD3sWr7U3QjDS1dQspVFN%2BL%2BTr9DNf3spkmIMn1FQ9KA52oy08W5yv3PyiYswDJM%2FVcDsfRI4HJYFFe5CM%2Fp8UjN3AXWx8BhwqxqfgzfNpE&X-Amz-Signature=ed53545ad33207e65392ad5217cc374c93ac790b1c230c5e649084a5dcd2995d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHOKUKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjTUQtrFlPIdh2S48pSZN3eOq6WjC0s%2F6T4hFJbNHFAIhANdhr00xciiGVM2sD%2Fi%2BNRb3cPy74HRAlK24ApFnxQr8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwEisTAF6peaYqgeJ4q3AOJRYzdX3kceB4wW73TvGR8WJQfilPfdd%2Fynkfg3edDjWfOREwZC93KOQk96ElafMpbzbqwyXsv4EIgGHu3ULEWtDI7Dphxs0ZglV1ncenkguYXphprDXcxsmGsum2wazTUBBdNXl7DPIT53y7IVtokB7sszv6xI4xX%2BZTRlAM9rqNaH5qT1KbIeX51xVohbXeXIvqLPSA8ztBl5IqmwZP42V1jDnUOXo%2Fg5F6A0z4NQvkxmprxd7OduGrIuJ0e7IY5%2B4kkZg2rlhcQZkQByG4N%2FnuN%2FvQo%2FpAuTyyHlMEl9riNJ1Jp2UtBJXT3yIvuG2nQiIvywB0WBTkb6k9lcnoSjyNjh1SVNcfSPrjU6LvcCeeq7E4P1gA2laQrlHq%2F1lpnbvE%2BwK1Fj544wTTDAbKVKMOK%2BFoh5Iv2zEKAxcN4vxbUD6uZNbFKXDD5btXr6kLy%2FSVCV1kqeDKtxApXtjD7S1jKohiZT3KVwCHB1pLyP%2BaVbcscFYoxniPHBE1jvRHMrGL%2BGPDymiON2UdfYRMoEdsJOzbd6C4kyenzVfzsJgjJFZzJE%2BDoTscfnpRlXIc0AmgbJwXEVScltkqQFkaAoZVaDsXL%2FdahQo4anCt36TdwCqoMRtFixXPvPjDdxdzBBjqkAWyDDXftL8IWP1M7UmcfxSDcK16vYtxh38qqhMbNmQ6sZTiuicuZfqmNFZUn0WVb5CdHdaUqd5ioMsoPjQrovFlK4dazS8XlAM82cioFC0HO6h%2Bt5lD3sWr7U3QjDS1dQspVFN%2BL%2BTr9DNf3spkmIMn1FQ9KA52oy08W5yv3PyiYswDJM%2FVcDsfRI4HJYFFe5CM%2Fp8UjN3AXWx8BhwqxqfgzfNpE&X-Amz-Signature=c0e54fcb2bba4feb7806c029201c88aca948dec2f7d96ad2fa0e1a614dba72b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHOKUKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjTUQtrFlPIdh2S48pSZN3eOq6WjC0s%2F6T4hFJbNHFAIhANdhr00xciiGVM2sD%2Fi%2BNRb3cPy74HRAlK24ApFnxQr8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwEisTAF6peaYqgeJ4q3AOJRYzdX3kceB4wW73TvGR8WJQfilPfdd%2Fynkfg3edDjWfOREwZC93KOQk96ElafMpbzbqwyXsv4EIgGHu3ULEWtDI7Dphxs0ZglV1ncenkguYXphprDXcxsmGsum2wazTUBBdNXl7DPIT53y7IVtokB7sszv6xI4xX%2BZTRlAM9rqNaH5qT1KbIeX51xVohbXeXIvqLPSA8ztBl5IqmwZP42V1jDnUOXo%2Fg5F6A0z4NQvkxmprxd7OduGrIuJ0e7IY5%2B4kkZg2rlhcQZkQByG4N%2FnuN%2FvQo%2FpAuTyyHlMEl9riNJ1Jp2UtBJXT3yIvuG2nQiIvywB0WBTkb6k9lcnoSjyNjh1SVNcfSPrjU6LvcCeeq7E4P1gA2laQrlHq%2F1lpnbvE%2BwK1Fj544wTTDAbKVKMOK%2BFoh5Iv2zEKAxcN4vxbUD6uZNbFKXDD5btXr6kLy%2FSVCV1kqeDKtxApXtjD7S1jKohiZT3KVwCHB1pLyP%2BaVbcscFYoxniPHBE1jvRHMrGL%2BGPDymiON2UdfYRMoEdsJOzbd6C4kyenzVfzsJgjJFZzJE%2BDoTscfnpRlXIc0AmgbJwXEVScltkqQFkaAoZVaDsXL%2FdahQo4anCt36TdwCqoMRtFixXPvPjDdxdzBBjqkAWyDDXftL8IWP1M7UmcfxSDcK16vYtxh38qqhMbNmQ6sZTiuicuZfqmNFZUn0WVb5CdHdaUqd5ioMsoPjQrovFlK4dazS8XlAM82cioFC0HO6h%2Bt5lD3sWr7U3QjDS1dQspVFN%2BL%2BTr9DNf3spkmIMn1FQ9KA52oy08W5yv3PyiYswDJM%2FVcDsfRI4HJYFFe5CM%2Fp8UjN3AXWx8BhwqxqfgzfNpE&X-Amz-Signature=ed3afca51fdaa056ab4464534320f63a29205b48a4e908e8fbaa339de6449d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROIXUGX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp8uwRCHJR1D8WwWQ6yexkucN2icp%2B2MBeAUOcnaBBaAIgDL2s%2BYrvBFN9nfTQduQK%2FyDVIVeNrXWNlDcdH4T7ljsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDaNEMuSUGXtWaKeQircA9Tq%2Fe54ZDH3rX7blJvLQuyXW8tvrBWmOfEl23K%2BfqsIjP7F%2FQ%2FfTjKcpI4jnypceEZFLfZDJB4oLndO6x6Z4bvgCRo0%2BLHJrNHz%2BQ0jmcZy0Z%2Bbbx7bDxi8HutBvnGd2PVdzLw2Tr2xDm6weHps7KcG%2FZagbNzRePsnJITqBsOzfAzcNT7I9ykZAWWMhFmjheOYRYaN2KoOBwN3xarI%2B2UvPIu0L1jVLvi8j6I3le5EGxqetWTahAY8MzbOgssMdLJbN3N4z4HO7IYgqWwFR8VZZEdjwOD1tQU%2B9GCjvjTepA9S4EGha8ZrA73OwCsnv7meo0VzcJeVbzbqoz8Kqy3XlCv%2BnaxwgElSITgsKpJIHl9ZW%2BjMkAnmvs9%2Bqr5Gaa60TB%2FoJEV3dVoUvA5HeuqM0ymCqpCoYSRjYhUg4BjyRJwtw6bSrdhp34VX7TxNQXy11NQc6PuK%2BbKZMZ2j2ZGgqtTsEur9HgvJ6x%2BzQvnmpxqpFCa6JAwFtXTXe1iujUoGMuwE5I5Hd35lCUgLWT1QCuMOCrcT8uwWL5xGfW49k8zy35zoyYmFKwLgzED30bXFXtqI4gZ2ADVLIbLTOElrCZVLurqJk%2BalXcjEEbhSFYAozysoqHb%2FjdxMMIbG3MEGOqUBJ83XZZaByX6kTIVG2U1hwiEYHOxe9CfNfJOpjKrhfgFFPraY3jIlmecN%2BFFaI4iOJjao87IBt0APsudd9ltxkf0bqkBZKDROUEp9ahZaCDKji0rummJB8BTSTDsX2kUdR9RwzA1%2B%2B1N1MNGiZjTAW7e%2BKTxPRaWaQZlQFTUtMea0fAGJCaxSAigGf35GbUx2r71HYB2cZdH7tChUyUCJxe7F9qql&X-Amz-Signature=3dcff3b7edca698c6623f9ecbe2e0b8a1406e83b240ac1281481f2fa7ce11cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWFLCJ5%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Iy9wN19d0tSjRSgqohvzjarx2zhKArl%2BA7pTkcEBJQIgMjd77Q3hZchvAeJj2IzOxm5vrqxm1JQ%2FjAJdn4e3Nqsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC%2FgMKcetH%2Bz14A5YyrcA7%2FVOZbne9uQ53cqgcgnjxFldTtxDZRc1PU9iNvzMwa%2BU2dO0pIINzV3FQDovuBYpHtlPxE7BZh9E%2Bo5ygreN7c5q9%2BcgGEagEtv0Dp5N0AV%2BmdbQ9jahNv%2Bjb71zzSxnqdUGi7%2FPURz0Tn3aFptM1G%2FEIQnWi%2F5eV92J38sAfpbCrHcHrb1KhHhcLA57AZb9m%2Bi4gxc7B2kAUY%2B2TknE2ceTX%2BUj1Xbsmwhm8lrjdPZAhP%2FDKOVINnaq%2B4RwUr02vOO7JW5uop7H0z9Mpe2dbfrT0J81jQT75i412EMzpCeRFL28M1VNZPRW6suhqWYDb8IZMKte5I%2BEQQDLcpAkvtRp%2BUzwuRWfoo6gGrxaPGeeB0Z1Bju0mnf91N4e6QTuEX78BvzKKczwb%2FzpT%2BEbj1f%2Bx8z%2B2DHQc%2B60jarIWwa%2BFa9lSEoNiC%2F1J5aUudb3sB9Bq7n14WiujXw5GdpX5ItQXdeRbXRbKCneNiJvu25pmHfMlszsRrUurk8jJp3lVm0%2Fg0tR38Oo56zwmQa96ojqCn47whaHSpsdDEU03BtZsTxQR%2F4oyHig7lvVqk%2BVcKLWsGX6mAMwwDHmjBaxk3mTlgUAyuI%2BoTxGhnTycG%2FPbGDH35Cp%2BSUNbuzMI7G3MEGOqUB3Wd3h9yZuD%2B4sj3LbKW6GRsOJ8eP7vmwy2S4VTHzZUC8N2a9o0vDZ%2BTA2KCzdegqJA9AU6yDRgVqH%2B2ceiXyZEL3OPI0YeCuF8nWnF3hVZXl7bAQBMsDlogT0vDa0hNmY8Zv1A8%2B7IgkKW3EssrZxd28MKmdJ2mLPWpIOj%2F0emzAargi82h8pUTZ3PaQTO%2Fa88E52VJIilvc4EphNe5k7nLb5C9w&X-Amz-Signature=4515a3e35daad19c0fcf8195a9568ead0f724936e369f03d3664c80b8aa2aee9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHOKUKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjTUQtrFlPIdh2S48pSZN3eOq6WjC0s%2F6T4hFJbNHFAIhANdhr00xciiGVM2sD%2Fi%2BNRb3cPy74HRAlK24ApFnxQr8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwEisTAF6peaYqgeJ4q3AOJRYzdX3kceB4wW73TvGR8WJQfilPfdd%2Fynkfg3edDjWfOREwZC93KOQk96ElafMpbzbqwyXsv4EIgGHu3ULEWtDI7Dphxs0ZglV1ncenkguYXphprDXcxsmGsum2wazTUBBdNXl7DPIT53y7IVtokB7sszv6xI4xX%2BZTRlAM9rqNaH5qT1KbIeX51xVohbXeXIvqLPSA8ztBl5IqmwZP42V1jDnUOXo%2Fg5F6A0z4NQvkxmprxd7OduGrIuJ0e7IY5%2B4kkZg2rlhcQZkQByG4N%2FnuN%2FvQo%2FpAuTyyHlMEl9riNJ1Jp2UtBJXT3yIvuG2nQiIvywB0WBTkb6k9lcnoSjyNjh1SVNcfSPrjU6LvcCeeq7E4P1gA2laQrlHq%2F1lpnbvE%2BwK1Fj544wTTDAbKVKMOK%2BFoh5Iv2zEKAxcN4vxbUD6uZNbFKXDD5btXr6kLy%2FSVCV1kqeDKtxApXtjD7S1jKohiZT3KVwCHB1pLyP%2BaVbcscFYoxniPHBE1jvRHMrGL%2BGPDymiON2UdfYRMoEdsJOzbd6C4kyenzVfzsJgjJFZzJE%2BDoTscfnpRlXIc0AmgbJwXEVScltkqQFkaAoZVaDsXL%2FdahQo4anCt36TdwCqoMRtFixXPvPjDdxdzBBjqkAWyDDXftL8IWP1M7UmcfxSDcK16vYtxh38qqhMbNmQ6sZTiuicuZfqmNFZUn0WVb5CdHdaUqd5ioMsoPjQrovFlK4dazS8XlAM82cioFC0HO6h%2Bt5lD3sWr7U3QjDS1dQspVFN%2BL%2BTr9DNf3spkmIMn1FQ9KA52oy08W5yv3PyiYswDJM%2FVcDsfRI4HJYFFe5CM%2Fp8UjN3AXWx8BhwqxqfgzfNpE&X-Amz-Signature=c7a12d2b629313f0a07123e793cad8f18d2c753794e1188c54c0e320b8c37eab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
