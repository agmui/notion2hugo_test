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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4RXPQEM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIArm54Rk3UfO576T9ys09FW6Mv50ItlNErqBQDLSl%2FGQAiABYyS1wlc%2BjrepI0JZ1G06b%2F7as8nNRfljaW9AOD13Dir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMptQpr62L%2BkKCK2cgKtwD4U2MrBzJnKgSf0e1yhKsXwAczGvpz6uH1OIAQMqjEJENPI7yL9yoqnkpSUJ9vrJd8zJQLUl047480wSEahvINzY3B6Yui9u9b%2F6z%2FpqfEYgMTh%2Ba9a9gR6PVNR7E3ti6dCfNsnsqWDUlsgc%2FTdEmMZlqkHmJSjOYtfPJZQ5yzpXQ5pustR7P5TwRvey4Cyfszspwrmh7p5OZGPNaa1Ga2mXgnorOBi8A1FpXwcrUMX8fTxA8FNpySbrDngxW2oXRJhJoaylBfyCSxrCyS6jXD%2FPfuFoLCIsIv8zrd66uvaxaxwppk2Y2pFhy3cwwYGWqZU5O%2BT6p9ChXvb2HfPIbbH5xo8j%2Blq9y8Cmr%2FnjbFdBCq4D6dUs52H%2FZuR9UQACS4vEODaY5Pb%2FXv%2Bp8yTY9jB0uD48d1b5Cs36wZwXRxoFaM2cPXTgDuB4F1HfW9a5gZ9S8YAs1QEpyIY3swoSbtmnObTDywHX%2B3Rys9AU7BCjIeY577Da3wkC%2BFO065leFdPcyND8kmvDyvhFZ%2FhvzY40MeztgvF919t8BPLboBUg9kl1FkMH57XVU7h7Q3LN%2F9NEFBQGSyU%2B6S8khZSMNmT7KyzgPMBCxTQ0ORCP7xSQ74tAhd5%2BV6TTxJeYwgOOqwwY6pgF9fDQfQOHwbJmMU0ZVsBPim%2BeH9jjloy5MQdsu3C26wK%2F4%2F3pBKSUzHklaaDLL6LYErKxb7lUj2obRlSacvAEQUNBSRLIFdboCikRi7PX21bynwCb0Pr7hY3WkOLITzFOve8XHGFpnzhshVZywlQyx44ndq0UKOKDIwygpIjmkc3k2TYxg5lspiNdmDZdajAeHZn%2FWHL71gpLkqRPpzkLh%2Bc9AUf8o&X-Amz-Signature=409ba34e4d67c1d1ff944bcc64ba2aec9788a4c100e71ad111612fccbdb6291b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4RXPQEM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIArm54Rk3UfO576T9ys09FW6Mv50ItlNErqBQDLSl%2FGQAiABYyS1wlc%2BjrepI0JZ1G06b%2F7as8nNRfljaW9AOD13Dir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMptQpr62L%2BkKCK2cgKtwD4U2MrBzJnKgSf0e1yhKsXwAczGvpz6uH1OIAQMqjEJENPI7yL9yoqnkpSUJ9vrJd8zJQLUl047480wSEahvINzY3B6Yui9u9b%2F6z%2FpqfEYgMTh%2Ba9a9gR6PVNR7E3ti6dCfNsnsqWDUlsgc%2FTdEmMZlqkHmJSjOYtfPJZQ5yzpXQ5pustR7P5TwRvey4Cyfszspwrmh7p5OZGPNaa1Ga2mXgnorOBi8A1FpXwcrUMX8fTxA8FNpySbrDngxW2oXRJhJoaylBfyCSxrCyS6jXD%2FPfuFoLCIsIv8zrd66uvaxaxwppk2Y2pFhy3cwwYGWqZU5O%2BT6p9ChXvb2HfPIbbH5xo8j%2Blq9y8Cmr%2FnjbFdBCq4D6dUs52H%2FZuR9UQACS4vEODaY5Pb%2FXv%2Bp8yTY9jB0uD48d1b5Cs36wZwXRxoFaM2cPXTgDuB4F1HfW9a5gZ9S8YAs1QEpyIY3swoSbtmnObTDywHX%2B3Rys9AU7BCjIeY577Da3wkC%2BFO065leFdPcyND8kmvDyvhFZ%2FhvzY40MeztgvF919t8BPLboBUg9kl1FkMH57XVU7h7Q3LN%2F9NEFBQGSyU%2B6S8khZSMNmT7KyzgPMBCxTQ0ORCP7xSQ74tAhd5%2BV6TTxJeYwgOOqwwY6pgF9fDQfQOHwbJmMU0ZVsBPim%2BeH9jjloy5MQdsu3C26wK%2F4%2F3pBKSUzHklaaDLL6LYErKxb7lUj2obRlSacvAEQUNBSRLIFdboCikRi7PX21bynwCb0Pr7hY3WkOLITzFOve8XHGFpnzhshVZywlQyx44ndq0UKOKDIwygpIjmkc3k2TYxg5lspiNdmDZdajAeHZn%2FWHL71gpLkqRPpzkLh%2Bc9AUf8o&X-Amz-Signature=792cd830145a77313c64f1fa90c629187200a9beff8eea48d7a88e22faf3d725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4RXPQEM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIArm54Rk3UfO576T9ys09FW6Mv50ItlNErqBQDLSl%2FGQAiABYyS1wlc%2BjrepI0JZ1G06b%2F7as8nNRfljaW9AOD13Dir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMptQpr62L%2BkKCK2cgKtwD4U2MrBzJnKgSf0e1yhKsXwAczGvpz6uH1OIAQMqjEJENPI7yL9yoqnkpSUJ9vrJd8zJQLUl047480wSEahvINzY3B6Yui9u9b%2F6z%2FpqfEYgMTh%2Ba9a9gR6PVNR7E3ti6dCfNsnsqWDUlsgc%2FTdEmMZlqkHmJSjOYtfPJZQ5yzpXQ5pustR7P5TwRvey4Cyfszspwrmh7p5OZGPNaa1Ga2mXgnorOBi8A1FpXwcrUMX8fTxA8FNpySbrDngxW2oXRJhJoaylBfyCSxrCyS6jXD%2FPfuFoLCIsIv8zrd66uvaxaxwppk2Y2pFhy3cwwYGWqZU5O%2BT6p9ChXvb2HfPIbbH5xo8j%2Blq9y8Cmr%2FnjbFdBCq4D6dUs52H%2FZuR9UQACS4vEODaY5Pb%2FXv%2Bp8yTY9jB0uD48d1b5Cs36wZwXRxoFaM2cPXTgDuB4F1HfW9a5gZ9S8YAs1QEpyIY3swoSbtmnObTDywHX%2B3Rys9AU7BCjIeY577Da3wkC%2BFO065leFdPcyND8kmvDyvhFZ%2FhvzY40MeztgvF919t8BPLboBUg9kl1FkMH57XVU7h7Q3LN%2F9NEFBQGSyU%2B6S8khZSMNmT7KyzgPMBCxTQ0ORCP7xSQ74tAhd5%2BV6TTxJeYwgOOqwwY6pgF9fDQfQOHwbJmMU0ZVsBPim%2BeH9jjloy5MQdsu3C26wK%2F4%2F3pBKSUzHklaaDLL6LYErKxb7lUj2obRlSacvAEQUNBSRLIFdboCikRi7PX21bynwCb0Pr7hY3WkOLITzFOve8XHGFpnzhshVZywlQyx44ndq0UKOKDIwygpIjmkc3k2TYxg5lspiNdmDZdajAeHZn%2FWHL71gpLkqRPpzkLh%2Bc9AUf8o&X-Amz-Signature=7ab5569803837cc3ba2fd6b85dd591776f19004b6662eb6668babb4dc8366186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV42T4NL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDoDQO6kq49AQB7VHp0OiSL1tVGlZqiz65jIEF%2Fc%2BeOSAiA12qILjBNqiBd6vHsA%2B5fJdPM5vm48u4UtQdO39lcseir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2FInY%2FG8o6gkPCKWEKtwDDQCDKKqOrkQ4L68dBf61TFbnpQ9jGZJif27TsknSdkcoPkCBaX7RE0ZgkA3FPe7smvfcuCNprWItu3wcViDiKNrAqCcDL8ShjO9WZ%2B42PG6kf%2BMVOCZIhAKZmE5hLlZnQt%2Bs7KG%2BO54T8IWRfjQW5%2FwQyLD4O5H5yIcHO6zGQMXbt3D1iUmYiYA6iyRa4kdt8AVNwhxL9Ufb3VFeKaMw5ssOdJwH80zNAFyHovGounMEzorF0KiUfhiDaYFtb5rWE8oD2bLl%2FdUkvI8BCMw6IHNq4wC7BOMBGZNrtlA4i%2BE6bjvfAHABjDoLfZ4LPI7DyaIgYSAt1tlaMxN5YX2CpJgC07U2vEAtKV%2F0VR31jLDA5LXQaLYCBHwEYdxSPCzDuBoml3X2V8bdNgKmYBRNPVGf1EGvvV518yZuzXWLIrqFgvrQcRbbWCh9goq7QFXVwDl2siqs2COAAj6B7jbDMC9NgJIAHm6%2BkLls%2BpU5%2BwH6aQp2UiL9z7IJhsq3pp4bJdi0CrlK%2Fq0waTcMJJSraIcCvIpjFNURIvm3vtBkhheFDjli2M%2F9jba6hJPIfZrT3MlK8nZymAJOCsLMRFoaKhBPXjtFZJleBocan3Lp0yEFlUvmHC8ON9mYvGAwivKqwwY6pgGHLJAPYNCIXZOs0Fa5CuEkNFSVuUKgHG10QTse%2F%2FZI1lfEjZKwHNt8qaoWiYdANj4IjZP1%2BHggesBWAnxIA3Fn3d6hNRH8iRqDHgdNDqIQGzzrqKtPaelQpu0EP2hstKTPWelzCAV%2FKJlzSrwnUS7s3El7fT1bSucefOt%2F7fwPvwkJ2Ko8QDE%2Bq%2FY4P%2BHzCD8lXwtch%2BRZNmI83VwkokFM%2FWOgrvk6&X-Amz-Signature=5ffe52c67aeb427a2fca06ceb803d53f4c1b9e4650ecc5df8bace2cf2b04fc8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2OQEDL7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCu2kLtzLBHgu8oev0mDb8rFW3vJshdz4jk9k2Hi%2BQGDAIhAP%2Fkn%2FzjCWxTgO5tsfyxaBem0s8J7vPEdxoGGVnVyBYkKv8DCGMQABoMNjM3NDIzMTgzODA1Igx5jbdGNwkebPutbaUq3AOuk%2BUiYCvpRxEiNhA1reN80VU3thmtuHjbysk4Wgh2jvAWWQ62xWX3BywNHBQTIQz4ux2sLII6%2FB9NlqEAW0yL2j57ihBg%2F%2B5Is%2BWI0HBzmQ9L1q1Xp2gDP4BWEcMcufRUCm%2FGwDY47i3dpVDghSKZ4IWVMAxLn0JqBa74NpyL3GbEZk8uTuwfAfQjwqffwJ479ZLQm1DbAqKlX0nA58xzWH%2FHXrlZzPRzS3OvegICla0wdMzsUFLlGUDztBEHD1A2Dco4vMZf72r7IcQ4We3J%2BSM2UloJ%2BrlHqgxRAg0WlacUGtidbfmpRjTi900gx%2Bb6lVnGzk23S58YmLscz7qmcJ7CzOfVAJ4GHXvylKSGxzw%2B2fCf%2BPQ42fDYE%2FU%2BBjGunzaVkTht85ewhB%2BMdCQCsdCi24pw5bYKuUCMPePFBrko%2BR%2BgQL6WjwL5ULpX3dwvsDNa8MkgNYZCA0pR3TtdgUkakCCgwjLUDvZ13mAmdMtSzl5or0Nk6jon%2FDZP3nEsp3HL2j1GtHCKjub0xga7Qf3ka07OCGTVlxpmoKw7BYmSViVhtxzeEJvpnnn7J%2BnCW6TObvF1yI04IMyI0WHXq0GC2GRJnkBnD85j6EekZRRw0aOzwjjoHievsjCW66rDBjqkASgStsETvWSyPsgWkiHln75eB3%2B3eFOzbKWfQ8faGNGHEsu%2BfzKxilpzfVogVO%2BqtTD0ASuiSkzewQ38T69631upPe98i1l91w1KI%2Ff41CCbgixfXBz%2BUirI03%2BymkWuuM%2Ftvq6qJClWgD3KkyNNs%2B5YBhlAot14J2q0hMXhff4sWscb5c%2BHHj00JtQei%2BH0rgkHOfOWHBAJGmEiKtD2Mf1fPuN9&X-Amz-Signature=bcb970972a4ad30e144f1f22cfef2432d875cbbaf65d4fb97b6bbd7467a36eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4RXPQEM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIArm54Rk3UfO576T9ys09FW6Mv50ItlNErqBQDLSl%2FGQAiABYyS1wlc%2BjrepI0JZ1G06b%2F7as8nNRfljaW9AOD13Dir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMptQpr62L%2BkKCK2cgKtwD4U2MrBzJnKgSf0e1yhKsXwAczGvpz6uH1OIAQMqjEJENPI7yL9yoqnkpSUJ9vrJd8zJQLUl047480wSEahvINzY3B6Yui9u9b%2F6z%2FpqfEYgMTh%2Ba9a9gR6PVNR7E3ti6dCfNsnsqWDUlsgc%2FTdEmMZlqkHmJSjOYtfPJZQ5yzpXQ5pustR7P5TwRvey4Cyfszspwrmh7p5OZGPNaa1Ga2mXgnorOBi8A1FpXwcrUMX8fTxA8FNpySbrDngxW2oXRJhJoaylBfyCSxrCyS6jXD%2FPfuFoLCIsIv8zrd66uvaxaxwppk2Y2pFhy3cwwYGWqZU5O%2BT6p9ChXvb2HfPIbbH5xo8j%2Blq9y8Cmr%2FnjbFdBCq4D6dUs52H%2FZuR9UQACS4vEODaY5Pb%2FXv%2Bp8yTY9jB0uD48d1b5Cs36wZwXRxoFaM2cPXTgDuB4F1HfW9a5gZ9S8YAs1QEpyIY3swoSbtmnObTDywHX%2B3Rys9AU7BCjIeY577Da3wkC%2BFO065leFdPcyND8kmvDyvhFZ%2FhvzY40MeztgvF919t8BPLboBUg9kl1FkMH57XVU7h7Q3LN%2F9NEFBQGSyU%2B6S8khZSMNmT7KyzgPMBCxTQ0ORCP7xSQ74tAhd5%2BV6TTxJeYwgOOqwwY6pgF9fDQfQOHwbJmMU0ZVsBPim%2BeH9jjloy5MQdsu3C26wK%2F4%2F3pBKSUzHklaaDLL6LYErKxb7lUj2obRlSacvAEQUNBSRLIFdboCikRi7PX21bynwCb0Pr7hY3WkOLITzFOve8XHGFpnzhshVZywlQyx44ndq0UKOKDIwygpIjmkc3k2TYxg5lspiNdmDZdajAeHZn%2FWHL71gpLkqRPpzkLh%2Bc9AUf8o&X-Amz-Signature=4580bd805d1a23d943a95893143edc130eb0dceec96f71be63d931879c756e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
