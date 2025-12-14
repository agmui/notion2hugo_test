---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBA5HUZR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDC10g3vHYjg%2FjUmtscAxFk9LZ8Jv7%2BCkuY70iSd%2FpXvgIgLO9IpLMDqT38nqlAcPeROiIEyrU28Vu9%2Fcd%2FkFfnRFsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL6wW06k8%2BougsF42ircAySsu%2FZbMs6kTSX6lFXi9Ogdcc4Q2NDBC%2B0vAYyfOosj0uxYskssuy%2F%2BhKgHrJmaPaipwuwLUAHqw3cw8cPZDRauyIirFCQMLZIHTK5twA7A%2BmdQh8QUX1vfa7uwHr8EBJOjIxsza0IEReAPuh%2FO%2FouhaHXJMF8JWr5tiKDF2E8Z3vUjFBwO7OiXI5cehls3TLFqie6rng6r%2FzOSuZ9veekyFU48Mkzv7NN7ZkBKGGLyGBi3YAU1ZKFaubaURB3sl%2B1YkOKr%2BnDjRPB4zj9Acvfcd40IqDbsIBzTJPpE9gUV%2F0QCIoFfFWxOBHnGYVWsZJX340x34MC6DAoBXYRoe%2BMzOHgknnDiCoPEMn824cgyDPqlxdCUChbO9VA7SMhpgqHMqfHKJiuuvhH21LL4r%2Ffm1RauWwfmb6FKnZegJ5yWsCQN5wH1kKy8D1WfHxmR42QBjXdT%2BC8Nz8%2B%2FYxuDsApbaxTFM3gihgUmeI9c6Vg%2BV6ptnj%2Bv%2FsKXtr2HEnkqsoZtVK7yVNAAOxXCSD574rsC%2FebZimUcXCCJU4Yf4gpIN6%2BaNQi%2F9t8%2BmvHPHGhKI9DquAa1ORKDqZaC7Lh649Q7uxPjfVqzGJK7WYnwMVW7%2FUpXuTmxyfVsfR8cMI%2BX%2BMkGOqUBdioAf5HMeeztW2183VuvmuuFTKac3cpz1CSmuiPfrYInJ5Lvqaqrds9kMB5dHCpiWqffmV%2Bcz6LNFHYa7Iq%2FZjlcsna84%2FvkXSaXekP4HHG33uxLsy4refCYw7JAnw3%2FalNY%2FesCwuFu%2Fi8g%2B%2BNybY8bTCh6JybqWJv3ejH0a9Nl6ezUAWY6ZrzD3BlN6woFc%2FYSNGrN1x89Ken0RHNlkLBsrs5Y&X-Amz-Signature=8eb3baf864d9726b96c1a2cc59282180474d0bf1e1070b39effcedea1cdbaa75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBA5HUZR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDC10g3vHYjg%2FjUmtscAxFk9LZ8Jv7%2BCkuY70iSd%2FpXvgIgLO9IpLMDqT38nqlAcPeROiIEyrU28Vu9%2Fcd%2FkFfnRFsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL6wW06k8%2BougsF42ircAySsu%2FZbMs6kTSX6lFXi9Ogdcc4Q2NDBC%2B0vAYyfOosj0uxYskssuy%2F%2BhKgHrJmaPaipwuwLUAHqw3cw8cPZDRauyIirFCQMLZIHTK5twA7A%2BmdQh8QUX1vfa7uwHr8EBJOjIxsza0IEReAPuh%2FO%2FouhaHXJMF8JWr5tiKDF2E8Z3vUjFBwO7OiXI5cehls3TLFqie6rng6r%2FzOSuZ9veekyFU48Mkzv7NN7ZkBKGGLyGBi3YAU1ZKFaubaURB3sl%2B1YkOKr%2BnDjRPB4zj9Acvfcd40IqDbsIBzTJPpE9gUV%2F0QCIoFfFWxOBHnGYVWsZJX340x34MC6DAoBXYRoe%2BMzOHgknnDiCoPEMn824cgyDPqlxdCUChbO9VA7SMhpgqHMqfHKJiuuvhH21LL4r%2Ffm1RauWwfmb6FKnZegJ5yWsCQN5wH1kKy8D1WfHxmR42QBjXdT%2BC8Nz8%2B%2FYxuDsApbaxTFM3gihgUmeI9c6Vg%2BV6ptnj%2Bv%2FsKXtr2HEnkqsoZtVK7yVNAAOxXCSD574rsC%2FebZimUcXCCJU4Yf4gpIN6%2BaNQi%2F9t8%2BmvHPHGhKI9DquAa1ORKDqZaC7Lh649Q7uxPjfVqzGJK7WYnwMVW7%2FUpXuTmxyfVsfR8cMI%2BX%2BMkGOqUBdioAf5HMeeztW2183VuvmuuFTKac3cpz1CSmuiPfrYInJ5Lvqaqrds9kMB5dHCpiWqffmV%2Bcz6LNFHYa7Iq%2FZjlcsna84%2FvkXSaXekP4HHG33uxLsy4refCYw7JAnw3%2FalNY%2FesCwuFu%2Fi8g%2B%2BNybY8bTCh6JybqWJv3ejH0a9Nl6ezUAWY6ZrzD3BlN6woFc%2FYSNGrN1x89Ken0RHNlkLBsrs5Y&X-Amz-Signature=6f2e20642185b03033c4a6687f9a128acd89c6c46b79f7c5efa7781d6b038629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBA5HUZR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDC10g3vHYjg%2FjUmtscAxFk9LZ8Jv7%2BCkuY70iSd%2FpXvgIgLO9IpLMDqT38nqlAcPeROiIEyrU28Vu9%2Fcd%2FkFfnRFsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL6wW06k8%2BougsF42ircAySsu%2FZbMs6kTSX6lFXi9Ogdcc4Q2NDBC%2B0vAYyfOosj0uxYskssuy%2F%2BhKgHrJmaPaipwuwLUAHqw3cw8cPZDRauyIirFCQMLZIHTK5twA7A%2BmdQh8QUX1vfa7uwHr8EBJOjIxsza0IEReAPuh%2FO%2FouhaHXJMF8JWr5tiKDF2E8Z3vUjFBwO7OiXI5cehls3TLFqie6rng6r%2FzOSuZ9veekyFU48Mkzv7NN7ZkBKGGLyGBi3YAU1ZKFaubaURB3sl%2B1YkOKr%2BnDjRPB4zj9Acvfcd40IqDbsIBzTJPpE9gUV%2F0QCIoFfFWxOBHnGYVWsZJX340x34MC6DAoBXYRoe%2BMzOHgknnDiCoPEMn824cgyDPqlxdCUChbO9VA7SMhpgqHMqfHKJiuuvhH21LL4r%2Ffm1RauWwfmb6FKnZegJ5yWsCQN5wH1kKy8D1WfHxmR42QBjXdT%2BC8Nz8%2B%2FYxuDsApbaxTFM3gihgUmeI9c6Vg%2BV6ptnj%2Bv%2FsKXtr2HEnkqsoZtVK7yVNAAOxXCSD574rsC%2FebZimUcXCCJU4Yf4gpIN6%2BaNQi%2F9t8%2BmvHPHGhKI9DquAa1ORKDqZaC7Lh649Q7uxPjfVqzGJK7WYnwMVW7%2FUpXuTmxyfVsfR8cMI%2BX%2BMkGOqUBdioAf5HMeeztW2183VuvmuuFTKac3cpz1CSmuiPfrYInJ5Lvqaqrds9kMB5dHCpiWqffmV%2Bcz6LNFHYa7Iq%2FZjlcsna84%2FvkXSaXekP4HHG33uxLsy4refCYw7JAnw3%2FalNY%2FesCwuFu%2Fi8g%2B%2BNybY8bTCh6JybqWJv3ejH0a9Nl6ezUAWY6ZrzD3BlN6woFc%2FYSNGrN1x89Ken0RHNlkLBsrs5Y&X-Amz-Signature=f59950617165eac1603bee38e2eb7c774dc55802df1ee4d259c4f68c9edd9626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEIJ5LB%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA5coPLeBf5Yr3CmKZunxfLS%2B7DMuLpiKlzfm03%2Bj%2FSdAiEAj%2FASnqj%2FAloqYS%2FR7cfEiNRyO%2FrIveuJAxpJrf0kkoAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMRtrDK7cN%2BjZUarpyrcA9DvqiAU7OFBrzxCgz5MAJJuV2VnrC3%2BOnoKuF98mcGPxianRO921PDwtyEVVEgsUtOYOjUE7hyD%2Fhxcin27faMEDiGiP5W%2FMysCMvWKoFTAH0q31JEW%2FatV3J4729PGFecnDzSbD61htAMeZHTAIw%2BuC3IdB4S5BL8pXem9utGSr1uxTFSsgeI8%2Bykq7sM1sEkMVaP0Lu%2Fh4yWDrej%2B9rErQXb4hxfEzXGENiWNbwrOCVGhMr2wrTTpzheLTe8WrP6ABzQm6jI87evhBqpY7yabGuIkJo3a3PQF3WaeEEkIrR2zc2LzMlABy4D9Pf6UYAqXgAj6%2FUwZxNPbs8kvRKzuczn49Bb8J8r%2FrFAeLGZwoQQGY8YMwuwjlLvxXNzPPejOnVQ2nZKfnmXo5htPap2w01KDsR1JZSrLK6CLJdKhn%2Bdea35mvPGl%2F8FJoG5nMUGTCx5u72lvAtUxwMmd2JmJ9Jecflu2OpW%2BDO%2Bc5%2BSNlYrp9Xvj3uHctne3h6akZCQIFD9tE0LTD%2FknT1YaBPP0hHllMBY8DcKfKoDMCd%2FAba8f5FqOf%2BKFTwKQuYqlNmr1e9%2FAleDQKd65XowA7wlR6Ng6oWxOSywcY%2B92hR7b8UB2mdS3z1Ynn7DTMOSW%2BMkGOqUBkLZHQuVNKnB7%2FlQKIvBBkaL94LoCa151Ktpz5zFDHWJI5lhRzS8vgejOV1y3axQ7FLfRYsSP2oy4VgQmYN%2FzmN6hUUUeDVKqkxxMgpQL7RHnXQlcMdSuUBmxL0Wxd06RBY6sK88j234T2N8ClMySxri8YUrYK7sFei04u51HYlJTS9jGYWL7at%2BwcEmZGjI3FBd%2FciZGYAXPFuf7NGUiRDVneztY&X-Amz-Signature=2b807ea523968f538af25179ec9866e9991627a07e15d6a6f4282899cf81f3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVO4Y3M%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDrUQuTPUYgnrZYGbt3g8UE%2FDp%2FQFQzmhpKK%2B6e%2BPdczgIhAMYhf5cCkPKJwaF6BNxb8170%2FVamtNsdUScLDhqkwg8iKv8DCCoQABoMNjM3NDIzMTgzODA1IgwVEdYXcTaR0YyyxXYq3AOflFp7U3wnoNWyxWyw%2F1y%2BzHAJDEOQgo4%2FDDqOMINCRIaaQj3jysRk%2F%2BUXKz3bH%2BdCfgESifXihlE4GcSEFOYUIXNop5oxgyXGoq1caT0sckSL1vVzo%2BKQ7S3zw85hQhIlVy5Fl7C18E1i%2BwUde0v9FpWUkGSEpBc6nc1kc7H6jA6OFi2gUtjb0L0vD4F1eyOtnmamJDBMLU5%2F%2FjfISHWftbRSlLtogmpHK2nCat5u%2BjhHc17K1O4WU4tm0c8rfo0MTU4GWfd6abKWTEZWx8KGji4jkhLUQCnw%2FiBW8vmei9gy%2FGBbhs%2FkLl3SugzORdUCzgE4HBOVvzvfuvR8OFS0XUbN4MhbKUY%2Bp9gckSTmcEVJbdMJScHx4PsyD4X9ZA9sHp7dU0QQUOQieUVeccRahipMQmtucNh7ip8bWFtMHcY%2B6nuQpQmL92GgTgsNz0JxNiCVZ9zfrpZeUwJ3wP44AT%2F1SiukyliknsJB%2BG%2BkEGMRDapIE9QQVS2JxwMi0nu0b%2B4LK7Ya9F6RDwlQk1mRI1tes%2BnJjQYtJ9Erz55fPJUlUqzE6poqUdm0tjcpzdLQ6NRzp%2BFqi31nEUHzRz%2BgH%2FDpZ9tIzXdzy%2FzJ8x4P52JTHkROswtKMMPVRDCZlvjJBjqkAWbg7sygv12urKB04cEiAcv6aDHgljvV8f1e6lYx2s4IW0ENtXRYhbKtu4tbMJSjA5QTRjZZJbQj5xKz1d6Lf2ugsk3dQ8nZkZIa%2B7lI0ALeQXqDk0I6fjrQ2kE3YACJWHRW3wRkgjgk9TOp1vlmSbp3332%2Fm4qfz3S59z3lwpM4dbU52VJL44K%2FC8aVaBfcwY7HrTf4656cBkPZ%2Fdq8%2FWBqekN1&X-Amz-Signature=d51ed4b1b04762f0ab7d9c340fc0fef8ad184d17e7a180aa15ec4ae0c5d9e9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBA5HUZR%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDC10g3vHYjg%2FjUmtscAxFk9LZ8Jv7%2BCkuY70iSd%2FpXvgIgLO9IpLMDqT38nqlAcPeROiIEyrU28Vu9%2Fcd%2FkFfnRFsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL6wW06k8%2BougsF42ircAySsu%2FZbMs6kTSX6lFXi9Ogdcc4Q2NDBC%2B0vAYyfOosj0uxYskssuy%2F%2BhKgHrJmaPaipwuwLUAHqw3cw8cPZDRauyIirFCQMLZIHTK5twA7A%2BmdQh8QUX1vfa7uwHr8EBJOjIxsza0IEReAPuh%2FO%2FouhaHXJMF8JWr5tiKDF2E8Z3vUjFBwO7OiXI5cehls3TLFqie6rng6r%2FzOSuZ9veekyFU48Mkzv7NN7ZkBKGGLyGBi3YAU1ZKFaubaURB3sl%2B1YkOKr%2BnDjRPB4zj9Acvfcd40IqDbsIBzTJPpE9gUV%2F0QCIoFfFWxOBHnGYVWsZJX340x34MC6DAoBXYRoe%2BMzOHgknnDiCoPEMn824cgyDPqlxdCUChbO9VA7SMhpgqHMqfHKJiuuvhH21LL4r%2Ffm1RauWwfmb6FKnZegJ5yWsCQN5wH1kKy8D1WfHxmR42QBjXdT%2BC8Nz8%2B%2FYxuDsApbaxTFM3gihgUmeI9c6Vg%2BV6ptnj%2Bv%2FsKXtr2HEnkqsoZtVK7yVNAAOxXCSD574rsC%2FebZimUcXCCJU4Yf4gpIN6%2BaNQi%2F9t8%2BmvHPHGhKI9DquAa1ORKDqZaC7Lh649Q7uxPjfVqzGJK7WYnwMVW7%2FUpXuTmxyfVsfR8cMI%2BX%2BMkGOqUBdioAf5HMeeztW2183VuvmuuFTKac3cpz1CSmuiPfrYInJ5Lvqaqrds9kMB5dHCpiWqffmV%2Bcz6LNFHYa7Iq%2FZjlcsna84%2FvkXSaXekP4HHG33uxLsy4refCYw7JAnw3%2FalNY%2FesCwuFu%2Fi8g%2B%2BNybY8bTCh6JybqWJv3ejH0a9Nl6ezUAWY6ZrzD3BlN6woFc%2FYSNGrN1x89Ken0RHNlkLBsrs5Y&X-Amz-Signature=0a16fd3f6ba0f81507869af92e3004b64bc2827d0916c8d622dc242cfdc12a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
