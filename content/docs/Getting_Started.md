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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVWYCG5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVepI2ezl9FK%2BKEo1sfcJXbVp5nXdqXNsjgrRgZWtrpAiEA4Qw88%2FNw4liHB%2FrIdvCyv04ux32sHWCnep4MwyYDNNIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5nN1pVkFj9n1U%2BfircA5uy9KWd%2BICxW0FcIXQiLZNuXhy03IcjwZbUvKY2t57TCW155w%2FNy3R5nAOB0EgKzRYBXJhAYi%2BaJtQ6neNeDtTe0lux7pVptMQAT8awmK1%2BOtNwR9CDuhGOWU6sZfivkF5XB4PrIWJtm3dfF2JgT50m51oJPE6X6R03f93YEDBDl5k4ufuwE7b02RjsYlcJY4RO1HO8EPbawZjBFpJ9It6UFulNHByn4Rb6d7yQHhGxqMvpknP%2BaV0HAxjtPHrza2MunaChewif0tY1FqJSN25qlhqxono0iT9KFqiowpXp97Rm57Znx9MD9vdY0XMXy8tlRkDNb4i9S1n47F78j82rIdShYo7yxfnyq%2B4udRcpzlplSSIRZ%2BDq5d012vYmWt%2BSSnI%2Fy0h8u44MlIbznlfWCSkPqRpuHz7h2Qqj4hWGM%2BgS4FEwP%2FeTmK0O9cCTWUVmUcFyaU%2Bv4ntJBFuPNSDTYX3WurL06hpIn68XoBEVGR9csYLLOfvdIbrhEdV7bE3UajZwUWXcl38GFovGj91bTXRO4ic4hxkurNi495oSMxRubtBOU8bZdOZ%2FE9tT9S%2BokRiYoeZEBN69mfxYfPtclWfgXWwrJWzRLVaKU5ks3I4Ju0T6EqPkgs%2BOMMrNgMMGOqUBvaXnIme1fEtM36Ns%2B2SzOPApaVnt8yDm5%2B7M77paq6FZk20ZqY2OiFtYOVebZ%2BSC0Tzjv26nyY%2BH44XC9SO698ZzttIevGnanB2bUyxLKB2rEYNgQTeLRM%2FMpMcPBtTwi92cZjxS1I9o5N2cUnafqKLOzSwAWA8rmz5k8a5EmCR7DB%2BuMPyTwnwYzToDUco7U9RCxmJCw1%2FQmZ0BTKXZHj%2FjoZm5&X-Amz-Signature=461bd49a932c94a54ed8709ef1f8cced177d644d95955edf15b332531e4d7ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVWYCG5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVepI2ezl9FK%2BKEo1sfcJXbVp5nXdqXNsjgrRgZWtrpAiEA4Qw88%2FNw4liHB%2FrIdvCyv04ux32sHWCnep4MwyYDNNIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5nN1pVkFj9n1U%2BfircA5uy9KWd%2BICxW0FcIXQiLZNuXhy03IcjwZbUvKY2t57TCW155w%2FNy3R5nAOB0EgKzRYBXJhAYi%2BaJtQ6neNeDtTe0lux7pVptMQAT8awmK1%2BOtNwR9CDuhGOWU6sZfivkF5XB4PrIWJtm3dfF2JgT50m51oJPE6X6R03f93YEDBDl5k4ufuwE7b02RjsYlcJY4RO1HO8EPbawZjBFpJ9It6UFulNHByn4Rb6d7yQHhGxqMvpknP%2BaV0HAxjtPHrza2MunaChewif0tY1FqJSN25qlhqxono0iT9KFqiowpXp97Rm57Znx9MD9vdY0XMXy8tlRkDNb4i9S1n47F78j82rIdShYo7yxfnyq%2B4udRcpzlplSSIRZ%2BDq5d012vYmWt%2BSSnI%2Fy0h8u44MlIbznlfWCSkPqRpuHz7h2Qqj4hWGM%2BgS4FEwP%2FeTmK0O9cCTWUVmUcFyaU%2Bv4ntJBFuPNSDTYX3WurL06hpIn68XoBEVGR9csYLLOfvdIbrhEdV7bE3UajZwUWXcl38GFovGj91bTXRO4ic4hxkurNi495oSMxRubtBOU8bZdOZ%2FE9tT9S%2BokRiYoeZEBN69mfxYfPtclWfgXWwrJWzRLVaKU5ks3I4Ju0T6EqPkgs%2BOMMrNgMMGOqUBvaXnIme1fEtM36Ns%2B2SzOPApaVnt8yDm5%2B7M77paq6FZk20ZqY2OiFtYOVebZ%2BSC0Tzjv26nyY%2BH44XC9SO698ZzttIevGnanB2bUyxLKB2rEYNgQTeLRM%2FMpMcPBtTwi92cZjxS1I9o5N2cUnafqKLOzSwAWA8rmz5k8a5EmCR7DB%2BuMPyTwnwYzToDUco7U9RCxmJCw1%2FQmZ0BTKXZHj%2FjoZm5&X-Amz-Signature=42200746e9396b89bf47513d4daacb2d6321a5581afa0a15435921d771987d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVWYCG5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVepI2ezl9FK%2BKEo1sfcJXbVp5nXdqXNsjgrRgZWtrpAiEA4Qw88%2FNw4liHB%2FrIdvCyv04ux32sHWCnep4MwyYDNNIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5nN1pVkFj9n1U%2BfircA5uy9KWd%2BICxW0FcIXQiLZNuXhy03IcjwZbUvKY2t57TCW155w%2FNy3R5nAOB0EgKzRYBXJhAYi%2BaJtQ6neNeDtTe0lux7pVptMQAT8awmK1%2BOtNwR9CDuhGOWU6sZfivkF5XB4PrIWJtm3dfF2JgT50m51oJPE6X6R03f93YEDBDl5k4ufuwE7b02RjsYlcJY4RO1HO8EPbawZjBFpJ9It6UFulNHByn4Rb6d7yQHhGxqMvpknP%2BaV0HAxjtPHrza2MunaChewif0tY1FqJSN25qlhqxono0iT9KFqiowpXp97Rm57Znx9MD9vdY0XMXy8tlRkDNb4i9S1n47F78j82rIdShYo7yxfnyq%2B4udRcpzlplSSIRZ%2BDq5d012vYmWt%2BSSnI%2Fy0h8u44MlIbznlfWCSkPqRpuHz7h2Qqj4hWGM%2BgS4FEwP%2FeTmK0O9cCTWUVmUcFyaU%2Bv4ntJBFuPNSDTYX3WurL06hpIn68XoBEVGR9csYLLOfvdIbrhEdV7bE3UajZwUWXcl38GFovGj91bTXRO4ic4hxkurNi495oSMxRubtBOU8bZdOZ%2FE9tT9S%2BokRiYoeZEBN69mfxYfPtclWfgXWwrJWzRLVaKU5ks3I4Ju0T6EqPkgs%2BOMMrNgMMGOqUBvaXnIme1fEtM36Ns%2B2SzOPApaVnt8yDm5%2B7M77paq6FZk20ZqY2OiFtYOVebZ%2BSC0Tzjv26nyY%2BH44XC9SO698ZzttIevGnanB2bUyxLKB2rEYNgQTeLRM%2FMpMcPBtTwi92cZjxS1I9o5N2cUnafqKLOzSwAWA8rmz5k8a5EmCR7DB%2BuMPyTwnwYzToDUco7U9RCxmJCw1%2FQmZ0BTKXZHj%2FjoZm5&X-Amz-Signature=fd059f6e77ca9cbbc35610564dd37050587beaa80f2f8dbe8dfb00582113477f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5CTGVR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrYLOGRcDg4f8MFCu5gvYG9HQLNAhkf9ESmm%2FDdK4TWAiASFQPlb0%2FNsFH4h8ZH5Eohrn8HUTGt3kuFFtGApZ7i2yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQSWIkTte8uvvC0G5KtwDThDgLuyRSZTLjC%2BLHLcaUkexxidNiz0m1CtZkOIZ0SP3aRC7dj7bAu6haV6rs0jYcXCCqsXyoAWhMoWZGpyVoobjafti35fDOmmuAp5r5y%2BBVUpjjb1pDddZiDh6Hsza4VfKUi1ufoUaLshg%2BMDgRmM4bWpKLTsPO7vgMOB4oOy9CmezZRlkKfy9YMkVgeZ0Ohx8gYxcuEHCa6RWNpuQfdq8wljnoGUF1NcKMQalc%2F%2BUdBGyhCwPBfNYGpMH%2BDeTgw4wEAKpSyhr02EtHhOUWtVqtr2tDkl9pid%2FRPL28bwz3h2eh58FGG3vOq2RxACA48QNwCYBexZJQM4MXjUZiKP%2FKSMHN013T1Xs6AyIZEQ9zPCU%2BLE8%2FkNAXSpLxTi9vjsltxC%2BSLNYtONRi9K8aeBtZM%2FtMzscwTGl5nc939OEybOVhfSSuEYXa8Vx%2BtwwVXpVdrNdC0jOawTEeis4b9SgNfzsvmUGgL7us0NHkwgi4%2BExyCuVVDwgXimu8TAjDfdPQ1K9hk6rXSFV7qrdkH%2FJtYJFknOK1%2F0zEIV190bbk169yP1zpL%2FJHEvhHyI0wiW03njN5qOtVsV55lQMGkEsOYwfptGAunRnCw3cxo1aGrr1X%2Bgv%2BJ2nTHkwx82AwwY6pgGIdPdqGJo1A7WJM3EHN7yzzkHWxvFYAaAwG3G76hnMNzWM3JRsR%2FhAkMpEjDEP30eLj3VDXPnT%2BhHtJ3z5bYF2nEY%2Bd0UwFNIBsdJK0w4Dsnl7JnxC%2B24DQrwfT43d6f6DUAz96tuOxke4LUhD1YeMDx3VA4UgzaRIVMda8GsqngdzQMUYovbnt1xguUuhI%2F%2FoYBxiAmhpJMTtUhCFMYHpSsEOl13G&X-Amz-Signature=1172cd1fca92afae92af2119429cbd52ba2c301ac483ee310acdc822363aa183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNQGUQ3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvwZ5XuIHopicitrd6Xk6aMML8i6QABhjuZPedgj0wPAiEA4kXKkDD%2FtMi7AEFqlcuzrv3D7S%2FcdowFnSKK8pI%2BJxIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv2yWvgoBEh33MVqyrcA0Usfeb2jF1G%2BcB%2Fr5hqNoKxiyYEQ8zN%2BPgLlbT2u7q0W06agPx9WIZ92Gy3SEvOtjBlNNo3cbRi1AKnH0VgVojhsc%2FwOWm253KXr3FIzGToc413jL8b64Spo%2BItYChkTIQJVJ6QbGRGQiiQyOFoi2B1ruA3rgRCpxYxAT0bOMIgDh0hw%2Fz6fPYiTwlo7ArWTa16BweY49%2F23%2FePEWJCXPgAJnOBfpNMGn4FSY67FYIH0GxCIsw0SsZN0sP2%2BmxEUdxWJbQkwTZgxf3xXstbLVl%2BK%2BxFliDveup4FJkfyNc9x71rTD%2FF67EDVsdAbLUt9a0WgWnIhoe%2F8jos3%2FuNmrWVuLTnSqDEdWncBA%2BbTmRIL%2FoQ36C566LjpRCAY1f122cz9bdVjS9wdPMCF2%2BfcXEujM7W%2F4Z233AIqwEbjSp%2FJRMoeIVY8J6n10OJ1cZoW3wQheZRK0qrqZmLnL4iGbd0njbZDr%2FxzCeu1j2Tg4oJSIT%2BpP9rYuvTrmWKtb6pdC2keS9Nalwjx6k1Vog6UFSCeYIBpWKgdQkctKVV0Y00Uo6xln7boT2xSKU8cU4QOcELKNaq9EgrZWvnp0OpnLHutm0XRx124oXTstz1uDxrhGnkQOm2121yImwDMMLNgMMGOqUB3IQBHeCTBE5Wp8nalYVTQxO5Bo5P4ZQTiJlUcOQeEgth70cRML91dR5c3Z8%2BpdYkkjmUSzyJ6o0hfNpAlX%2BfxrzeF1HBIMN0qg6vjXE8YgjmLlqndsqoJkCA355ZkmTxTYX9o1NCbNjITCYlAX9QwAf7KhsNtP1Zkhe2lQwl324g6i0VdqT%2FYD55ZMsQuo9CyVcl1GKAHA%2B8A%2BtMR8ZnsEwnQ28Q&X-Amz-Signature=96fa331deaa21a9b275196e2f1778d09414b6561fdf34c3f0c5caae8af6862a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVWYCG5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVepI2ezl9FK%2BKEo1sfcJXbVp5nXdqXNsjgrRgZWtrpAiEA4Qw88%2FNw4liHB%2FrIdvCyv04ux32sHWCnep4MwyYDNNIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5nN1pVkFj9n1U%2BfircA5uy9KWd%2BICxW0FcIXQiLZNuXhy03IcjwZbUvKY2t57TCW155w%2FNy3R5nAOB0EgKzRYBXJhAYi%2BaJtQ6neNeDtTe0lux7pVptMQAT8awmK1%2BOtNwR9CDuhGOWU6sZfivkF5XB4PrIWJtm3dfF2JgT50m51oJPE6X6R03f93YEDBDl5k4ufuwE7b02RjsYlcJY4RO1HO8EPbawZjBFpJ9It6UFulNHByn4Rb6d7yQHhGxqMvpknP%2BaV0HAxjtPHrza2MunaChewif0tY1FqJSN25qlhqxono0iT9KFqiowpXp97Rm57Znx9MD9vdY0XMXy8tlRkDNb4i9S1n47F78j82rIdShYo7yxfnyq%2B4udRcpzlplSSIRZ%2BDq5d012vYmWt%2BSSnI%2Fy0h8u44MlIbznlfWCSkPqRpuHz7h2Qqj4hWGM%2BgS4FEwP%2FeTmK0O9cCTWUVmUcFyaU%2Bv4ntJBFuPNSDTYX3WurL06hpIn68XoBEVGR9csYLLOfvdIbrhEdV7bE3UajZwUWXcl38GFovGj91bTXRO4ic4hxkurNi495oSMxRubtBOU8bZdOZ%2FE9tT9S%2BokRiYoeZEBN69mfxYfPtclWfgXWwrJWzRLVaKU5ks3I4Ju0T6EqPkgs%2BOMMrNgMMGOqUBvaXnIme1fEtM36Ns%2B2SzOPApaVnt8yDm5%2B7M77paq6FZk20ZqY2OiFtYOVebZ%2BSC0Tzjv26nyY%2BH44XC9SO698ZzttIevGnanB2bUyxLKB2rEYNgQTeLRM%2FMpMcPBtTwi92cZjxS1I9o5N2cUnafqKLOzSwAWA8rmz5k8a5EmCR7DB%2BuMPyTwnwYzToDUco7U9RCxmJCw1%2FQmZ0BTKXZHj%2FjoZm5&X-Amz-Signature=c745d3ee47a0ef08c1300c058f15625efeb605794df4ceff4a66dda53b31ac60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
