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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42Q2XJ3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvwo%2BAldwtbKXHhwKCRJdwkjsXPtx%2B0o2DbrDKeiCxbgIgGD0K6bZgXAjv4e9JdjtHn5Xgk3uIq362%2FPDOJ4klB3Eq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIYwH5mbJeyPTiSMdircAxQJGCEDf1mwtk3hJ3KkkXI1xwMqV9NE5WAsos3GuBNL%2F9ShImZ6Shb0fq84DQiEdfQdQMNs3YFirokQSodnDEHqHK3N9OH6pEQjW3bG8CpB66dFj8fGkSuai%2FZOehx%2FrLVhOtzFL8D%2F%2BXaF9f5L1BhoeP3KcX45eLqRRYJ0vuE33rqGYOOJp9S4IIVtFF3UaIHgygrlEWEDhl0P%2BFZKt1spjXyALen2aQDz%2Fhaho%2FdcWa%2B7%2Bqkl3HjmE1gYNM3h1ey5fgu%2FEjSD6kjUkr%2B6J%2FrnkDIR2HPwwlGpGq3QXOTiCj3RoO5DUlS5CFVnyBiA4BgpGSCHaAVL%2FZR2vl1ODfHAkyt%2F4VU5SZqTi3%2BqgOLoOvpz4nQoDen86up9tKAzn8Plo7juPNzGyA542aeqzSIVlttsahvfSYrUOmv49KzIfZhFEuBJNlTMRKAZY6fJj129FMIeB9K9bLFb4%2FBoT0elTJ%2BpAe6IsDNom283nPRJSr9Yb1lWRfnYdrTDjx9g7PdX0JIqdWj98nAqaTBzPXmBVXBQXVOdTDU0GegyS7k3ma9mbgldRk1ulnbVMglNefr0wesncuvgLzcLhMJsx%2FxRZtM2r0en0JqFbh8897FdtGAIoxszxp9FZRGvMJqf0b8GOqUBw6Q2SiphuwruIS2wCVJr3Da6z9t0D3H2Uju49kQR%2BLwXLJc1H774WTJnWL4t1PAwRqww%2FbbaZsPhJL3u1aRDac6Or90NiApcN2Hs1XB5JHyHCuWH1BTUd5b0j3R0n8P1bJr7jUn6Z5pRI0bJY8HmV2oQSoHITph5t9HoGTT8r9rgR4xgojTfljWBOAtQWiJQGYFzF%2BoLn9Wj6COulHwt%2FFu4dbwD&X-Amz-Signature=1be36227496412bd3f80e6b2185a8b2f372a65a4206919aff8c260489de73e67&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42Q2XJ3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvwo%2BAldwtbKXHhwKCRJdwkjsXPtx%2B0o2DbrDKeiCxbgIgGD0K6bZgXAjv4e9JdjtHn5Xgk3uIq362%2FPDOJ4klB3Eq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIYwH5mbJeyPTiSMdircAxQJGCEDf1mwtk3hJ3KkkXI1xwMqV9NE5WAsos3GuBNL%2F9ShImZ6Shb0fq84DQiEdfQdQMNs3YFirokQSodnDEHqHK3N9OH6pEQjW3bG8CpB66dFj8fGkSuai%2FZOehx%2FrLVhOtzFL8D%2F%2BXaF9f5L1BhoeP3KcX45eLqRRYJ0vuE33rqGYOOJp9S4IIVtFF3UaIHgygrlEWEDhl0P%2BFZKt1spjXyALen2aQDz%2Fhaho%2FdcWa%2B7%2Bqkl3HjmE1gYNM3h1ey5fgu%2FEjSD6kjUkr%2B6J%2FrnkDIR2HPwwlGpGq3QXOTiCj3RoO5DUlS5CFVnyBiA4BgpGSCHaAVL%2FZR2vl1ODfHAkyt%2F4VU5SZqTi3%2BqgOLoOvpz4nQoDen86up9tKAzn8Plo7juPNzGyA542aeqzSIVlttsahvfSYrUOmv49KzIfZhFEuBJNlTMRKAZY6fJj129FMIeB9K9bLFb4%2FBoT0elTJ%2BpAe6IsDNom283nPRJSr9Yb1lWRfnYdrTDjx9g7PdX0JIqdWj98nAqaTBzPXmBVXBQXVOdTDU0GegyS7k3ma9mbgldRk1ulnbVMglNefr0wesncuvgLzcLhMJsx%2FxRZtM2r0en0JqFbh8897FdtGAIoxszxp9FZRGvMJqf0b8GOqUBw6Q2SiphuwruIS2wCVJr3Da6z9t0D3H2Uju49kQR%2BLwXLJc1H774WTJnWL4t1PAwRqww%2FbbaZsPhJL3u1aRDac6Or90NiApcN2Hs1XB5JHyHCuWH1BTUd5b0j3R0n8P1bJr7jUn6Z5pRI0bJY8HmV2oQSoHITph5t9HoGTT8r9rgR4xgojTfljWBOAtQWiJQGYFzF%2BoLn9Wj6COulHwt%2FFu4dbwD&X-Amz-Signature=9f87b945adbb546158437c444c67b708e6a20342d5c18cb7653bd57f5eeaffef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZ27SCN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcI9aWYYzkJm1LsXKCuX2BpseLBOj3lPqj33GnWHjeAgIhAMXYtKOCWs0Qx0d%2FLA%2FiuFpAaUq0ErJAFaFvBKKeFFEgKv8DCGcQABoMNjM3NDIzMTgzODA1IgxgKMLk6MCvexXQTyIq3ANxINcf59o28w2u4WeTf3b5Ys7X3aMDuquLiMBDYDSGtMjj7%2BNkpLWNTCmAU%2BenCg6mnl8o85pRo40OjDvyFzq3dkEAXc1b0JRV%2FCkUQ0N5ZJsYShE5r6GAA9iGo8WR1pbd3FgolLGxXEfNaRXvTvgKRrOi21oSAXIGEMbykCkruPVh6t%2FUjVR5N858CC6HoFIJClpX2E8X5GjSHgadGyWG4SnyoBBVoNlzydCuKw98k2%2F6jOc5Fos8BfxFiFspplYvnablp0bvjxNgVlV4HUebIEhR3Qf6lGwyqYWuQ70ZCJvkvBWxWWmtm5yvNru8ciLcjIOEeRKMNZ0nZO1eE%2FbVph0otNDPx2DQBFUEO1OuCF230nUFZEuc0PSgte2TRA%2BB%2FE83KPcGuaw9%2BnT0fc4uU%2B4wTqUqS4LWmPw6cHl45f%2BZqLLdCMx6Mx9ayqIPKKKMRqe9mL7s9kFFAF4wC0rw23TyHX%2BHkOyWtVYH2nwqzf9jcR3Qq8xqrhJYUq%2BkcVaEMrSLuJi9oZ7nEUf57aF%2FQtBgDrpcQWiVOgjiDGvSzJv9qWVj2y%2BKCDkYtmHk5Z9Cs5d4J3pcc74KkoLu%2FIWdwN2jPsiTj%2B21V92rT2w3gTO53ufzdWAL8L9uVjDdn9G%2FBjqkAeUWnHUpXUXgX5yIm7BKxH9Q0aB5Cn8NA2b3utbhKRdFt%2BdeLnFz3eAEmNl7lLYeqldrePuoVz9uvGNgkPgN4jPIpvHxZayhKTvwAX%2FizEk8GKsIzbBWd6PFVt7sGXZn2rQ9x0XSyTJu7yW4x4s27Ex1Z2UXhmHox7N5ns%2FihBPYKFRb%2BmomSRRevJXRgJYgeY6%2Bnk%2Bb9zjF1%2FGeeFpsrELf%2BpL%2B&X-Amz-Signature=95c7d475287c0f447faa8125e4555c68fab1be2eeafbbf1413e65c3f0e35476e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJ2JL73%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL1T4Yv2uzfoGKsCur9lnc0gUUvMDB2s%2FMlo1Db46ZCAiEArFC3ADXyZzQ3tDhQgxOOjCxckFprGfqSEBb%2Bvaq0Pdcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDA%2BCZgfxzivOkGh%2BVCrcAy9xgAmc6FjJsjbi8pvxxO2dWutj%2B7CMpSJEw%2Fa1S5PIwaeSaURo5j7VB%2FFcpR8QnxKQaE1Z%2FPCqkdJHMrzL6Q7VeBNC%2FA%2BiHNN%2FLPdB4qKz1TLTrXgzPS27GkkXl4LzUXFqZs7jVTSdQXxrqT%2BKiNSGML0r7kaMvMRy%2FDa4A%2BCtf8d%2BRjmX%2BQZK36hbZvpDLQ2gxRhrS%2FsMTPW2A2wUKSC8cgR2Yd8ieS%2F%2BjU516OhdXTFlV6IzgI6w4scwJfOEhlm8ogog%2BZFzk%2FEtlaLqVU6TgyPiXiiS8lPqXjFu2Atje%2Bw7tIybHsz4gzii%2BV7sZtJeM5Fg7HbxA95AkHyD%2BTNPiky767xO8WG8sV8ak5eI723%2B5PIlm54BaGhCIJ0InHLWTBnk203%2FDdeXEpWPwQM%2BXIBgkL2zhV8%2FGeFjNuCiXi4D07quljf3oyKdy%2FjRYrPQAjuQRGvvfKjMdmrRIz6oDk7catV6tau4FILoeP1WILBlUCx%2Bz0R24Jg8DhYeiFsTlxnOI6F3C86f98Vhm9nSEM61a2Tadk5nnftO3Fxb0Bg1tXIs2E4bQBRK0yboO22isCRO7URNVDylVY5Z0vmnb27CrsTXbSFMqWgxm675XJ2ckpIZ6mviUhAJMMCf0b8GOqUBj79P0BYZTcUseLzl5g6cLJDb1MuMU%2BtwO76c19Qk78gMzuSVVR3CEvyRX%2FXqu%2BQwjQj8K%2BlCZnxNtR2F8uiKZWiMpNWtPnUCjRTqslo6YtWa%2BGXKtMBxljdr3UEpLcBMfLAZKO%2BjKLQpj5LtwBC9WI2HTL5cuANpXQ5nQcdw3EDuFv4lT7wPWI3DElQeAYjxGuhhZRbIlL%2F063o0Fzd2rYO9VZrx&X-Amz-Signature=ae7369eb581bbc72798cc38a5a133c5ed3631a8eff0eeade15ac822e171acdc8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R42Q2XJ3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvwo%2BAldwtbKXHhwKCRJdwkjsXPtx%2B0o2DbrDKeiCxbgIgGD0K6bZgXAjv4e9JdjtHn5Xgk3uIq362%2FPDOJ4klB3Eq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIYwH5mbJeyPTiSMdircAxQJGCEDf1mwtk3hJ3KkkXI1xwMqV9NE5WAsos3GuBNL%2F9ShImZ6Shb0fq84DQiEdfQdQMNs3YFirokQSodnDEHqHK3N9OH6pEQjW3bG8CpB66dFj8fGkSuai%2FZOehx%2FrLVhOtzFL8D%2F%2BXaF9f5L1BhoeP3KcX45eLqRRYJ0vuE33rqGYOOJp9S4IIVtFF3UaIHgygrlEWEDhl0P%2BFZKt1spjXyALen2aQDz%2Fhaho%2FdcWa%2B7%2Bqkl3HjmE1gYNM3h1ey5fgu%2FEjSD6kjUkr%2B6J%2FrnkDIR2HPwwlGpGq3QXOTiCj3RoO5DUlS5CFVnyBiA4BgpGSCHaAVL%2FZR2vl1ODfHAkyt%2F4VU5SZqTi3%2BqgOLoOvpz4nQoDen86up9tKAzn8Plo7juPNzGyA542aeqzSIVlttsahvfSYrUOmv49KzIfZhFEuBJNlTMRKAZY6fJj129FMIeB9K9bLFb4%2FBoT0elTJ%2BpAe6IsDNom283nPRJSr9Yb1lWRfnYdrTDjx9g7PdX0JIqdWj98nAqaTBzPXmBVXBQXVOdTDU0GegyS7k3ma9mbgldRk1ulnbVMglNefr0wesncuvgLzcLhMJsx%2FxRZtM2r0en0JqFbh8897FdtGAIoxszxp9FZRGvMJqf0b8GOqUBw6Q2SiphuwruIS2wCVJr3Da6z9t0D3H2Uju49kQR%2BLwXLJc1H774WTJnWL4t1PAwRqww%2FbbaZsPhJL3u1aRDac6Or90NiApcN2Hs1XB5JHyHCuWH1BTUd5b0j3R0n8P1bJr7jUn6Z5pRI0bJY8HmV2oQSoHITph5t9HoGTT8r9rgR4xgojTfljWBOAtQWiJQGYFzF%2BoLn9Wj6COulHwt%2FFu4dbwD&X-Amz-Signature=9879a35a876b024895f1c3a25e3e521cc1f13eafe62d44035446255e19f3388f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
