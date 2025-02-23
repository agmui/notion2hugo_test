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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5GAACP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwAD9pYMqXWbeHoxpSsQmaamCsMQO3FTCCutfdZ%2BESVAiB0U%2FD7sbM45%2BH6%2FjL6tz1fuKN8becTV%2Fl5EAPZE6npwCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMig%2FnkbZIddmzZlrtKtwDeOR3VhOlfPQ2K8%2FfjUzr9lxRyIbhTiMD9oa0K%2Blb1Bp59aKyc4Aqo4wUtRQxxJh9jG%2BuS8FKBZRBsLxtOwNoX2Rfc2sJEwB3vrP%2BKUfsj7ifc%2Bzr4jOv3IIHn0JQjImb8r0g5MCnAeu8z3tCwkNioIwk%2FBrxwRGzI3O%2Bl7w5RNGFRghMIo2MDYhfba949yxCbDqt35FNOmujZndFk18ueGKyPTKTDnyRdKBcBdKTrMI0juxwBjrySLgTeZZJIzdck9yV0d0x7DrT7mj%2BjPEpGIak1B4rjnwmESpYrKLUQoXDKMnLnjkPYBiiF85MDLaZvalrKVoWtz05%2BIGOHGLMh2GAgplQnUUZwdMoZp0Ug90dMuMqG8tokICPfgFl%2F12leYBXrKNWyi1qsLoSFbT84WYRW0LRUOVo%2BxjpuCTW3ijVyzpQgndIyixuEQRuhtwPJqB33vmBNsGLfwn3SZkLV0qSYupeoHPc9nTX3bdmEFs0xuVlkSedsSMozMmb00WlzlEjXkJGp31CuCY6Ugs1l10EHigdvf7FBUOgWpbLM7Ku6Rp2mrqwn0dPJQtqaGu1ufDcVWPZkTXGykmb1A7ZUM%2Bn5F9vz6uj7BqSxronp5LpYT%2FaGKe71OSB2p4wlMbtvQY6pgEBn9wv7ritTbP1%2BUIWfTzCbAT1ooqlbo1iNsrQ9QEb73bBSfa0A5SgAGOgFVj7gNnPbuaFieiCGcw%2F6isjKlf4Zen%2BwRnSGmjNXOaerYKZRvH0Z%2FL2OTxtjtXcRYPOB5bRElCv4e8gXQsYu3P08Pr19X0fmpa0HL08MZS6ynqWosJFZmNBlTLa%2Fx5FJhy6ILN9iqAIhjq10%2FBayl6tXo5KUJvA1mdj&X-Amz-Signature=8ef1f9cb63058d98f90b148e63d8114466add9b627bda2081db1221e0a92e033&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5GAACP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwAD9pYMqXWbeHoxpSsQmaamCsMQO3FTCCutfdZ%2BESVAiB0U%2FD7sbM45%2BH6%2FjL6tz1fuKN8becTV%2Fl5EAPZE6npwCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMig%2FnkbZIddmzZlrtKtwDeOR3VhOlfPQ2K8%2FfjUzr9lxRyIbhTiMD9oa0K%2Blb1Bp59aKyc4Aqo4wUtRQxxJh9jG%2BuS8FKBZRBsLxtOwNoX2Rfc2sJEwB3vrP%2BKUfsj7ifc%2Bzr4jOv3IIHn0JQjImb8r0g5MCnAeu8z3tCwkNioIwk%2FBrxwRGzI3O%2Bl7w5RNGFRghMIo2MDYhfba949yxCbDqt35FNOmujZndFk18ueGKyPTKTDnyRdKBcBdKTrMI0juxwBjrySLgTeZZJIzdck9yV0d0x7DrT7mj%2BjPEpGIak1B4rjnwmESpYrKLUQoXDKMnLnjkPYBiiF85MDLaZvalrKVoWtz05%2BIGOHGLMh2GAgplQnUUZwdMoZp0Ug90dMuMqG8tokICPfgFl%2F12leYBXrKNWyi1qsLoSFbT84WYRW0LRUOVo%2BxjpuCTW3ijVyzpQgndIyixuEQRuhtwPJqB33vmBNsGLfwn3SZkLV0qSYupeoHPc9nTX3bdmEFs0xuVlkSedsSMozMmb00WlzlEjXkJGp31CuCY6Ugs1l10EHigdvf7FBUOgWpbLM7Ku6Rp2mrqwn0dPJQtqaGu1ufDcVWPZkTXGykmb1A7ZUM%2Bn5F9vz6uj7BqSxronp5LpYT%2FaGKe71OSB2p4wlMbtvQY6pgEBn9wv7ritTbP1%2BUIWfTzCbAT1ooqlbo1iNsrQ9QEb73bBSfa0A5SgAGOgFVj7gNnPbuaFieiCGcw%2F6isjKlf4Zen%2BwRnSGmjNXOaerYKZRvH0Z%2FL2OTxtjtXcRYPOB5bRElCv4e8gXQsYu3P08Pr19X0fmpa0HL08MZS6ynqWosJFZmNBlTLa%2Fx5FJhy6ILN9iqAIhjq10%2FBayl6tXo5KUJvA1mdj&X-Amz-Signature=1a078ec52eb0a76a84ecc1d9edca844324a5053ead90f2e0f97509c2163522dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5EEWMJG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDii2PT5qlOiylsmr%2FgGPoPhKt3PLmt9haM2HD2ZFVh6wIhAKQ7uefjvheshdpolqz7JP1guGwppFUR%2Fa19Arn1mD9zKv8DCB8QABoMNjM3NDIzMTgzODA1Igzthuwo8S7EopqKXYsq3AP9L%2FsiM6Ok%2BtRbDx6FwpQxdvYkzsu5oEyz9JK0QhWcvWaxE57p7hjkWveRTXBe%2B34ss%2FK9yNYLDRRPi8pkOYx1gGaXVYz8%2B6Qr5k6h50JlPPzHwL7lNprjGmPNc%2BeaCUSENvvMohQbYRq%2B4eiv1%2F2TXteFRDJ2g%2BjkbWZeNcrZp8JO5b6%2BAjb0%2BqMTI6tzzRci0FEMSNCkFxaHaIZGmVMa1VifIPf50t5T%2B7RyKcIVsWISt9k8LrCCps5Ft2lce78C%2BTRCtHebbm4v%2FnOxPY4KIGsMg0d4CtxBJQPIYAm1E1c2TBLj%2FBTlc7vb3A1%2Bo7%2FxLcNzL3%2Fbtl5ghiBqjjzBao3koggNCPiqxJnuUUujdjIcuyt6AAQ2zyW5jfcyedT2o%2F5GChBw4QwTQj2Itqh6swuFb%2FLvF3VRtm86dYxRCVVBSJAE4M%2BOitTemsrMX5wNaETOcngp%2FmJzPqESc%2FsY121M%2BhUvHAUL1%2BdrU7KXnT2eV5a8XMhbvPAoOhGcnC3HmeSPJV60nM3MrlfMQcMTEnMtGYcFb8t%2BnxOjlo733uVh5Tw2p8YuYh5pLQIhBoTY7DKDTR2vdfC9JUWWT6inSATr3wIRPi61Qef9ZIJP5h3BtxhtRKGrxcEf7jCEuu69BjqkAXbv8KMMUZB%2FpP0%2Fg5Wh0cHhbD%2Ba1KWwnQzYhMZ2%2BrqabKUT0sutg3Qq0NCDse%2FNEWH5biPksO%2FaH2y39G7SFHKveHlBbXHvuZJmPh4yaFIqWGo5IZwwK2SKH80jB675akzg%2B%2B5AURrAJVLx3LP3yAAsqtyB1HuwkiXE8NDwCJUiGdFpa2Q367cs0ThzLXR%2BhRRMbnouXttXsLoOPt4PCw98KxgB&X-Amz-Signature=ecc5bc6e0b8f0a851317d1c87eed9f5023a743362602e7d1e8cf26884417c6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF3CRAD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV8mwB7g6fyVgugAB8Dm70n64CzLPj8lSLh72%2FVx2lCwIhAMiAZXDG3eNBwvoMzFOwMPyPGTSKpDXAjtfqoT0JDaUOKv8DCB8QABoMNjM3NDIzMTgzODA1IgxzCY1niKQYWmn1a6Mq3APc4ipso9GUbsX2PEJEjNzpK5TfuY7k2xRA8KigY%2FC9Vevs1xRHCUQDO1GlsTaOejrA7tn%2F0Du%2B9nZL3%2FZjf6ZgJ5heP3GE3JomRRLp8M2MKPEkbJnl8oOArQNuCFiqcwHaOmWL3%2BuMo4JXjs7K3PZK2E5AG5xSC4E8vt2IvBn3dM4W1D0Yvg3R62itHaIKqrGfI1LRbhQwPSwMU0vd%2B1i0pINFg3bDA55mI%2B2TFz%2FYC%2F6FcdaLuEuDlyJ77h6xyG7tZBzLkhZmm71EOps%2FvE1Hhy7811PkXFXadDkLKGK4VXVS4j9C0gC5BqgF6egLt6QdkphMQggOPTBv9fDPZ%2Ffur5NJvNXcKESDdazNb6L%2FxzH331mUu%2FMdbWPBfFJgsFP7i5SoDx48RpSvZh2z6K%2BoOSQB1CNgtqAy2BIBjFszY%2FMdGLdkfnQ1EGt1lUQyv%2Boe%2FbzO0oF67fqkWleIxhUyBMgbbgt1iJqx%2F8EeJxMTrPd7Rtq0kohAO4O45T3APpmjrqYNn33NQBaVVlJjhKWrUmkfw0ZGj351INQfRch6iWDDAPKU5u6TAwnz7P1k%2FBcTi6bIq11V535eL1iDjb1yypj7PP4ZH1alqWT65NtbD8Fgo4iyHyopMdoJ3TC%2Fuu69BjqkAX4lzgYIpb51UALG4uCaCd6Q%2FE%2Fwf%2BIhHZ4Fa5aG6A6Wrrz0Iri4vkRyCz9oMxj7gUEJatKfS4MgrHpXJukZLb0NnfB8QNTjWNPrHLoYFQ1OL0SsBNY3yUnR4efbJsZiNvu8a%2Fv63WL23OGEOxD4jMkf8rdGkoA8kGPL6qebiX7vC9ugd88yMwFXzgfNJkeqoelMY0e7ibYj4Gkkqq%2FmzT76BqY5&X-Amz-Signature=58dcaa024e4130338302a8a65606d807153be9364ee0eb142d7727b953e530f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL5GAACP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwAD9pYMqXWbeHoxpSsQmaamCsMQO3FTCCutfdZ%2BESVAiB0U%2FD7sbM45%2BH6%2FjL6tz1fuKN8becTV%2Fl5EAPZE6npwCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMig%2FnkbZIddmzZlrtKtwDeOR3VhOlfPQ2K8%2FfjUzr9lxRyIbhTiMD9oa0K%2Blb1Bp59aKyc4Aqo4wUtRQxxJh9jG%2BuS8FKBZRBsLxtOwNoX2Rfc2sJEwB3vrP%2BKUfsj7ifc%2Bzr4jOv3IIHn0JQjImb8r0g5MCnAeu8z3tCwkNioIwk%2FBrxwRGzI3O%2Bl7w5RNGFRghMIo2MDYhfba949yxCbDqt35FNOmujZndFk18ueGKyPTKTDnyRdKBcBdKTrMI0juxwBjrySLgTeZZJIzdck9yV0d0x7DrT7mj%2BjPEpGIak1B4rjnwmESpYrKLUQoXDKMnLnjkPYBiiF85MDLaZvalrKVoWtz05%2BIGOHGLMh2GAgplQnUUZwdMoZp0Ug90dMuMqG8tokICPfgFl%2F12leYBXrKNWyi1qsLoSFbT84WYRW0LRUOVo%2BxjpuCTW3ijVyzpQgndIyixuEQRuhtwPJqB33vmBNsGLfwn3SZkLV0qSYupeoHPc9nTX3bdmEFs0xuVlkSedsSMozMmb00WlzlEjXkJGp31CuCY6Ugs1l10EHigdvf7FBUOgWpbLM7Ku6Rp2mrqwn0dPJQtqaGu1ufDcVWPZkTXGykmb1A7ZUM%2Bn5F9vz6uj7BqSxronp5LpYT%2FaGKe71OSB2p4wlMbtvQY6pgEBn9wv7ritTbP1%2BUIWfTzCbAT1ooqlbo1iNsrQ9QEb73bBSfa0A5SgAGOgFVj7gNnPbuaFieiCGcw%2F6isjKlf4Zen%2BwRnSGmjNXOaerYKZRvH0Z%2FL2OTxtjtXcRYPOB5bRElCv4e8gXQsYu3P08Pr19X0fmpa0HL08MZS6ynqWosJFZmNBlTLa%2Fx5FJhy6ILN9iqAIhjq10%2FBayl6tXo5KUJvA1mdj&X-Amz-Signature=a13a7d74eb94695e58241da7f0890c0fc6b898616151a828a90c67abd9812a35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
