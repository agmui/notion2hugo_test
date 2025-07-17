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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYWWSLO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICQ%2F9%2B%2BCwbZlWL8d4DWdGMmIqylcKKQxuYVqSpcWujFtAiBkUytmwz5pLQp85yWeBrp3bYGe4OlBqmyok%2BqHsEv3GCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDPLksiKgpob7NgINKtwDFPuGe7MFJtAypmFmIVpCtsybppmMPyzNFnJxkrjBdlB0mnXXLdMv9fYV7puFErJzfzt0%2B02rsCLmI1n4b2BWoIQkyHkUsoPpEtPHGk19aa7KZHDZEZVSbX32QYyWglZCfnK6cr6UcxFLsKOn1P1Xbqgs6h2bskuKgoUeLo6%2F9fUHJI8ljDJW37%2BquC3JiB83gdyGuTTKCHVjwmaxvZeH4uIBLMFlKEOBu5C7GLTrOhPR5KOnDodXERYKl5vLB%2F3IRiqY%2F1MCeu2HFnjHpf%2B8CdeCNcleeyJLIVfCJIz1Wbe44UN70bwNrcTUaaImtvmfFm%2FRqclshOeXRq40Z8dOCHZzeeQ%2BsQ09yP%2BeWxeVDaTtHPVMVkma%2FTrxjU3yiIsFVdvSOH%2BqRdaF57P34tmdwBhqS9awRcgHkPqy9mXwuQhxt1rAUVit49nkVGd%2BzoNofhQXZYP54MqA70KbIBKQSi9Jhf0nJ65FYYI%2ButRfN6v2YyaQoRuwdgi%2FYYCM%2F1LQ16yEQNN%2BDPgQq8Q%2BLvxAt9ce5974faYg2Ou7TEcLqCA4ov0WtOc9rMbjrVhABxcaOvS95ZSma2j2Rq1IG4gC09YyWeFhLRI%2FACtwMvJxI8czkKPhc7YCNfRMuxgwgL%2FiwwY6pgEfObIO0JbWD5n0C%2FQuOy9G7%2FtvW7Zho1TRtWoLD0xUnGfwMLhoxkvj7Ywjy1ltUsIUqRSOWpjHsWUlmAO%2Blo%2F6LSZrgZCW4MwUvCZmPXKvgDQm3ZB%2FX1tyin8xfvdKDmdQNzdjF1sgW0iGbJepl%2Bv8UcLCogxu9XcxoV6CFeqC4prmdoN3W4sfc%2Be938GMpsk6LCQauYsnULIbv1Cpjy25xiH7UdTK&X-Amz-Signature=9270403d04e3ed19a3d11fae8a150bf0d7b76a70f47f15970afd1749fdd72a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYWWSLO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICQ%2F9%2B%2BCwbZlWL8d4DWdGMmIqylcKKQxuYVqSpcWujFtAiBkUytmwz5pLQp85yWeBrp3bYGe4OlBqmyok%2BqHsEv3GCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDPLksiKgpob7NgINKtwDFPuGe7MFJtAypmFmIVpCtsybppmMPyzNFnJxkrjBdlB0mnXXLdMv9fYV7puFErJzfzt0%2B02rsCLmI1n4b2BWoIQkyHkUsoPpEtPHGk19aa7KZHDZEZVSbX32QYyWglZCfnK6cr6UcxFLsKOn1P1Xbqgs6h2bskuKgoUeLo6%2F9fUHJI8ljDJW37%2BquC3JiB83gdyGuTTKCHVjwmaxvZeH4uIBLMFlKEOBu5C7GLTrOhPR5KOnDodXERYKl5vLB%2F3IRiqY%2F1MCeu2HFnjHpf%2B8CdeCNcleeyJLIVfCJIz1Wbe44UN70bwNrcTUaaImtvmfFm%2FRqclshOeXRq40Z8dOCHZzeeQ%2BsQ09yP%2BeWxeVDaTtHPVMVkma%2FTrxjU3yiIsFVdvSOH%2BqRdaF57P34tmdwBhqS9awRcgHkPqy9mXwuQhxt1rAUVit49nkVGd%2BzoNofhQXZYP54MqA70KbIBKQSi9Jhf0nJ65FYYI%2ButRfN6v2YyaQoRuwdgi%2FYYCM%2F1LQ16yEQNN%2BDPgQq8Q%2BLvxAt9ce5974faYg2Ou7TEcLqCA4ov0WtOc9rMbjrVhABxcaOvS95ZSma2j2Rq1IG4gC09YyWeFhLRI%2FACtwMvJxI8czkKPhc7YCNfRMuxgwgL%2FiwwY6pgEfObIO0JbWD5n0C%2FQuOy9G7%2FtvW7Zho1TRtWoLD0xUnGfwMLhoxkvj7Ywjy1ltUsIUqRSOWpjHsWUlmAO%2Blo%2F6LSZrgZCW4MwUvCZmPXKvgDQm3ZB%2FX1tyin8xfvdKDmdQNzdjF1sgW0iGbJepl%2Bv8UcLCogxu9XcxoV6CFeqC4prmdoN3W4sfc%2Be938GMpsk6LCQauYsnULIbv1Cpjy25xiH7UdTK&X-Amz-Signature=a142a6b8a5fed6576093df7439215b23d9c834ab76355a91c4a43759197e0506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYWWSLO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICQ%2F9%2B%2BCwbZlWL8d4DWdGMmIqylcKKQxuYVqSpcWujFtAiBkUytmwz5pLQp85yWeBrp3bYGe4OlBqmyok%2BqHsEv3GCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDPLksiKgpob7NgINKtwDFPuGe7MFJtAypmFmIVpCtsybppmMPyzNFnJxkrjBdlB0mnXXLdMv9fYV7puFErJzfzt0%2B02rsCLmI1n4b2BWoIQkyHkUsoPpEtPHGk19aa7KZHDZEZVSbX32QYyWglZCfnK6cr6UcxFLsKOn1P1Xbqgs6h2bskuKgoUeLo6%2F9fUHJI8ljDJW37%2BquC3JiB83gdyGuTTKCHVjwmaxvZeH4uIBLMFlKEOBu5C7GLTrOhPR5KOnDodXERYKl5vLB%2F3IRiqY%2F1MCeu2HFnjHpf%2B8CdeCNcleeyJLIVfCJIz1Wbe44UN70bwNrcTUaaImtvmfFm%2FRqclshOeXRq40Z8dOCHZzeeQ%2BsQ09yP%2BeWxeVDaTtHPVMVkma%2FTrxjU3yiIsFVdvSOH%2BqRdaF57P34tmdwBhqS9awRcgHkPqy9mXwuQhxt1rAUVit49nkVGd%2BzoNofhQXZYP54MqA70KbIBKQSi9Jhf0nJ65FYYI%2ButRfN6v2YyaQoRuwdgi%2FYYCM%2F1LQ16yEQNN%2BDPgQq8Q%2BLvxAt9ce5974faYg2Ou7TEcLqCA4ov0WtOc9rMbjrVhABxcaOvS95ZSma2j2Rq1IG4gC09YyWeFhLRI%2FACtwMvJxI8czkKPhc7YCNfRMuxgwgL%2FiwwY6pgEfObIO0JbWD5n0C%2FQuOy9G7%2FtvW7Zho1TRtWoLD0xUnGfwMLhoxkvj7Ywjy1ltUsIUqRSOWpjHsWUlmAO%2Blo%2F6LSZrgZCW4MwUvCZmPXKvgDQm3ZB%2FX1tyin8xfvdKDmdQNzdjF1sgW0iGbJepl%2Bv8UcLCogxu9XcxoV6CFeqC4prmdoN3W4sfc%2Be938GMpsk6LCQauYsnULIbv1Cpjy25xiH7UdTK&X-Amz-Signature=541c4ed69b41473b6f03a87daea2d361a7bdae0bdd476c505aed6052ba7d6ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSJO4S4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCVn%2BHo9VbZWowE45unsTJO3BbeJHuFV6IR8Itstt7xwAIhAJwRGxy25xl3LJ9sJ4JNF0Auv%2BrgusmI23QdGc0ObcphKv8DCHAQABoMNjM3NDIzMTgzODA1IgwrBnWTUQVqKOjy5Rcq3APvGmGpowTz198a2dYPyYuQmIGWAw6lPm07a2t5zujBb3W1ibd5I%2Bww4JFZYWcg6hF7SXszwW16ooNwC%2FGMhVGHDEKXct%2B2NaLTlK1EQDFgiMKz8%2FASNnApSo4a9I1erblP12oduvRphk%2FpYiPOokVrFHaKBMX34y8Ux8w65wQRm5srJy5t7yzlQkVMobGyOMR7ubUqItxxNY%2BpjWc89nfemOjyTcHv4Vr9hUW0RstbaDW%2FZ0Yz%2BmmkhybgwhXkz1p7PI3DKgSAjjFFlwB%2BaG1%2F7CdL2rSAmcz8BPLNO5UHXIgnylDj5mdEIVvR7CPRqaPGB9Jrle8kydfdHrGiO%2FJgbA1Sacu3VaDFnIMyWDk269BU8nWuqAnMlqYYhEeX4YIvMvuTw%2FkzXjiXi275pvv67eap6m%2FHcX2JLdqxMMSglHtUA5aa%2BbiquyKKIK4teO32Mchza465%2BTt1kogg7lmRqvAlvzcGEVIkpsk85541ed4oHxvqzF%2F2d%2FEcnqMi8zvmQC3oKUKmIpRDatnM3Z2Hzk97n8pfXsAtrB3iNZrRHlj8jR0Avs8cwA3k6i9HwrB7CmliTZGFxCK51UUJkRtehuai%2BPvxAvUlNTBfpPKQRptyiaFDWKa250oHRDDWwOLDBjqkAT1k6dB8fCP3psENq9yB5UUqsUyPm3paRTVHETDtMSV083kW64mqBgknPKkqukxp9LjvR33SbsxrS5NyM9m4%2FgTzCDv1IZ7pvxaHliljf2jGO%2BBd3bBUyfXnt%2Fz0iLhbmY2o98vckEK9D6wFmkHIT035yYhj58FMjo6Qtelc2TZWpB3Lrmf3uloQlICgZzCrJMUKdSyNnJ7%2FLT2DpcMMcnfUOwmM&X-Amz-Signature=7705c2f36d2762909899a16befb2cabbe4cc709eff4d114da919a28098c51384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVOEEOJY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCxJv4eS5k%2ByWhET3ZcpSEen%2FnxV06X9cXQtI3Nddi5iAIhAMCPVMjcNPi5dKPwglfN4IK1PHelWrRIPBn5%2B7bN6qblKv8DCHAQABoMNjM3NDIzMTgzODA1IgyYFrlq9AJb8Iznk%2F0q3AMIq2mKgtKuvzUtClzs5raK12dCFFdmARBo8OxUiSWlUJPgBRTGJan46p3ziH7rYjHIRN9Jsav%2F7gVAqnS2%2F1Tcn9GvR5m2yH6P%2FdM7AZQfygGlBxJl7lDPca8IEhb6EkylVkvTlFOotb5L9hyb5050s5T9dpc6Mly0r0oLFcwIzEJNepbkf4ORu1AFBlOjgAG5%2FzN%2Bs%2FmAaLFOlVNmFcGStbAQS48cwB8Z76GOggitnwDEXNH7adpBgP2ehXcYkxJeoZ7fdWGQJ3df09SMplgQmZq8o0icAhRszAD5dC2LXCW8dqpbezAiwsdF33l0fy79Bih2T3JzeXyyeR1TaMdxqJKZnp998gXJSl%2BoIVYfDS2wjLzFIsULglynxtCNhkJZeTUrVH2d0l10rL6cLBXtLa9pqlnSzExKRiczvsLKyAvFCoHA4Z%2FDi1W63eqp05F8b6Otbp2PGR4ja2UwH4MmflG0UKryvZ4hw2wWiopAZfuvIrwO8MCzhgs1Q8cLXhiwb8Izn1ay9MvhK4nKTHUbNDmL1h4VMNzCNukj1NKN1OZ1muIoc26GYOOpNLgJRqkCsq%2FDXEe%2BnPeULc8qoWe1R1BKXM5bRWz5vBEuYd9a9SVJkyo3ED%2BgypowuDC2wOLDBjqkAQ7CNn%2FA591I%2FCrfIUj%2BTAHtVGdpcOllPP%2FPKBH9IXgkXxVMH76huRnnJNVvCxpdr%2BFCT9BjPSY060zUvA3S1%2FmGNrUh4NNUUj80pwewSGQLonR1d9yWpEvZOAe7Hnr71LXP0EEfwZKS4pwIh4RaCDLHyzx4d7cNZJUz7d%2FCfHUbbds8eeIcYUvXhSvpvcLzTuxIDgwGZEFMFYCZu%2BplpLbm3yxt&X-Amz-Signature=a57c3d977d8c7cc9ea3b536580dcc2c084d388812ec56d0230204f03fb1db183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYWWSLO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICQ%2F9%2B%2BCwbZlWL8d4DWdGMmIqylcKKQxuYVqSpcWujFtAiBkUytmwz5pLQp85yWeBrp3bYGe4OlBqmyok%2BqHsEv3GCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDPLksiKgpob7NgINKtwDFPuGe7MFJtAypmFmIVpCtsybppmMPyzNFnJxkrjBdlB0mnXXLdMv9fYV7puFErJzfzt0%2B02rsCLmI1n4b2BWoIQkyHkUsoPpEtPHGk19aa7KZHDZEZVSbX32QYyWglZCfnK6cr6UcxFLsKOn1P1Xbqgs6h2bskuKgoUeLo6%2F9fUHJI8ljDJW37%2BquC3JiB83gdyGuTTKCHVjwmaxvZeH4uIBLMFlKEOBu5C7GLTrOhPR5KOnDodXERYKl5vLB%2F3IRiqY%2F1MCeu2HFnjHpf%2B8CdeCNcleeyJLIVfCJIz1Wbe44UN70bwNrcTUaaImtvmfFm%2FRqclshOeXRq40Z8dOCHZzeeQ%2BsQ09yP%2BeWxeVDaTtHPVMVkma%2FTrxjU3yiIsFVdvSOH%2BqRdaF57P34tmdwBhqS9awRcgHkPqy9mXwuQhxt1rAUVit49nkVGd%2BzoNofhQXZYP54MqA70KbIBKQSi9Jhf0nJ65FYYI%2ButRfN6v2YyaQoRuwdgi%2FYYCM%2F1LQ16yEQNN%2BDPgQq8Q%2BLvxAt9ce5974faYg2Ou7TEcLqCA4ov0WtOc9rMbjrVhABxcaOvS95ZSma2j2Rq1IG4gC09YyWeFhLRI%2FACtwMvJxI8czkKPhc7YCNfRMuxgwgL%2FiwwY6pgEfObIO0JbWD5n0C%2FQuOy9G7%2FtvW7Zho1TRtWoLD0xUnGfwMLhoxkvj7Ywjy1ltUsIUqRSOWpjHsWUlmAO%2Blo%2F6LSZrgZCW4MwUvCZmPXKvgDQm3ZB%2FX1tyin8xfvdKDmdQNzdjF1sgW0iGbJepl%2Bv8UcLCogxu9XcxoV6CFeqC4prmdoN3W4sfc%2Be938GMpsk6LCQauYsnULIbv1Cpjy25xiH7UdTK&X-Amz-Signature=5dd686b2042fa4ac9dfba43b5f4270e53fd06dc0634e40e084af48843966d9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
