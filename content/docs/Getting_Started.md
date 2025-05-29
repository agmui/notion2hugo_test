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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXL3DG2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDkrDEcn4t0ESAKZ5VeDdEE5WKCJ699C5c1ptcoBfStgIgb%2FsKvgFwQrU4%2BQ2AAVBjEBUO94n0wJZxO8gK%2BPWYrTQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeMYaNKvmgJOkHGECrcA2%2FnFEkVyR1Nm1FLOtTyxJEufgGFm8h4Qy%2FwVtxmY8CXJFkkQ7fWYUNQKRBZ4tNgiEN2wxqZaycD0rHdKCtwtuu%2FL27TQMruvYJjwAKQMZ9nLEWSBg0%2Bt355BURsKsQADncee4BzfTOKtQ7F5vaIfTQ0J%2F8t3p3r6RWSZboD6p0EUI26iRTVSVVL0aKAWzJmWtwlzOfDtvJNy9uHa831kPM1vFJfazXKBc%2F9HWae3g50%2FxOIzyGVoh5heOucSabTeEkazatr2lZkPOVUdWsOHZpcEEdUmV8Y9WeMOD2jDEYLaiQMuBaphzzNi1KySPoNrUyKUzWMq%2BNcTCQ%2B%2BuURiT3WXlE%2Fg4KJvvTS6zENvXlu8WUF85CGfcz7pTmInTgxqBZuDD7BlO10UrJ8tYXF5haJ3m334j3WlhOnfj6JMGRHU46tqzueY71fzfdFoZV%2Fo8nxHa9cnc3XHWHprvGkzioPi8ui%2FsleV0xmRwRBy2iWfqnIL%2Fg0Aie3Syd%2FzP9lZB2SAQpkS%2FccDb799wF50YC6Y%2BkIw91PhOc24TTcZvh7cDX%2FX5daFjc7dpH85CfadEJIy5W%2BJ1lelmECkH0qp%2FHzyL0oEr82yHo4I4mHW99irPh0sxPTYJraePf0MMGQ48EGOqUBbrCUlAVLWbSCgxjAv5c7OGqX4zuHIFXwX0M4g9fmW8dAjwzxbc4B696bavsoboDw2qgIiV482ANaQ61DhxJgSwPKVdibfZM0fGgFclguz2UGQhviywX8L75%2FC6E26Ei%2Fuybd%2FTvsz3deDkw8My6JYcsVWStwWsUdNoTntoGSCpntSCTU11pZP3J%2F3gZtY7xa2uty2JGGyP%2BznAIKo900p8uttPaM&X-Amz-Signature=8308cc16a3040711935b2f1b0c77289deb25d1c0342f0a567bcccc9e03db419d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXL3DG2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDkrDEcn4t0ESAKZ5VeDdEE5WKCJ699C5c1ptcoBfStgIgb%2FsKvgFwQrU4%2BQ2AAVBjEBUO94n0wJZxO8gK%2BPWYrTQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeMYaNKvmgJOkHGECrcA2%2FnFEkVyR1Nm1FLOtTyxJEufgGFm8h4Qy%2FwVtxmY8CXJFkkQ7fWYUNQKRBZ4tNgiEN2wxqZaycD0rHdKCtwtuu%2FL27TQMruvYJjwAKQMZ9nLEWSBg0%2Bt355BURsKsQADncee4BzfTOKtQ7F5vaIfTQ0J%2F8t3p3r6RWSZboD6p0EUI26iRTVSVVL0aKAWzJmWtwlzOfDtvJNy9uHa831kPM1vFJfazXKBc%2F9HWae3g50%2FxOIzyGVoh5heOucSabTeEkazatr2lZkPOVUdWsOHZpcEEdUmV8Y9WeMOD2jDEYLaiQMuBaphzzNi1KySPoNrUyKUzWMq%2BNcTCQ%2B%2BuURiT3WXlE%2Fg4KJvvTS6zENvXlu8WUF85CGfcz7pTmInTgxqBZuDD7BlO10UrJ8tYXF5haJ3m334j3WlhOnfj6JMGRHU46tqzueY71fzfdFoZV%2Fo8nxHa9cnc3XHWHprvGkzioPi8ui%2FsleV0xmRwRBy2iWfqnIL%2Fg0Aie3Syd%2FzP9lZB2SAQpkS%2FccDb799wF50YC6Y%2BkIw91PhOc24TTcZvh7cDX%2FX5daFjc7dpH85CfadEJIy5W%2BJ1lelmECkH0qp%2FHzyL0oEr82yHo4I4mHW99irPh0sxPTYJraePf0MMGQ48EGOqUBbrCUlAVLWbSCgxjAv5c7OGqX4zuHIFXwX0M4g9fmW8dAjwzxbc4B696bavsoboDw2qgIiV482ANaQ61DhxJgSwPKVdibfZM0fGgFclguz2UGQhviywX8L75%2FC6E26Ei%2Fuybd%2FTvsz3deDkw8My6JYcsVWStwWsUdNoTntoGSCpntSCTU11pZP3J%2F3gZtY7xa2uty2JGGyP%2BznAIKo900p8uttPaM&X-Amz-Signature=8591789fc27dfb56f6271d3465cad0ab3c781f3406541ded4b0e9dbd1937361c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXL3DG2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDkrDEcn4t0ESAKZ5VeDdEE5WKCJ699C5c1ptcoBfStgIgb%2FsKvgFwQrU4%2BQ2AAVBjEBUO94n0wJZxO8gK%2BPWYrTQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeMYaNKvmgJOkHGECrcA2%2FnFEkVyR1Nm1FLOtTyxJEufgGFm8h4Qy%2FwVtxmY8CXJFkkQ7fWYUNQKRBZ4tNgiEN2wxqZaycD0rHdKCtwtuu%2FL27TQMruvYJjwAKQMZ9nLEWSBg0%2Bt355BURsKsQADncee4BzfTOKtQ7F5vaIfTQ0J%2F8t3p3r6RWSZboD6p0EUI26iRTVSVVL0aKAWzJmWtwlzOfDtvJNy9uHa831kPM1vFJfazXKBc%2F9HWae3g50%2FxOIzyGVoh5heOucSabTeEkazatr2lZkPOVUdWsOHZpcEEdUmV8Y9WeMOD2jDEYLaiQMuBaphzzNi1KySPoNrUyKUzWMq%2BNcTCQ%2B%2BuURiT3WXlE%2Fg4KJvvTS6zENvXlu8WUF85CGfcz7pTmInTgxqBZuDD7BlO10UrJ8tYXF5haJ3m334j3WlhOnfj6JMGRHU46tqzueY71fzfdFoZV%2Fo8nxHa9cnc3XHWHprvGkzioPi8ui%2FsleV0xmRwRBy2iWfqnIL%2Fg0Aie3Syd%2FzP9lZB2SAQpkS%2FccDb799wF50YC6Y%2BkIw91PhOc24TTcZvh7cDX%2FX5daFjc7dpH85CfadEJIy5W%2BJ1lelmECkH0qp%2FHzyL0oEr82yHo4I4mHW99irPh0sxPTYJraePf0MMGQ48EGOqUBbrCUlAVLWbSCgxjAv5c7OGqX4zuHIFXwX0M4g9fmW8dAjwzxbc4B696bavsoboDw2qgIiV482ANaQ61DhxJgSwPKVdibfZM0fGgFclguz2UGQhviywX8L75%2FC6E26Ei%2Fuybd%2FTvsz3deDkw8My6JYcsVWStwWsUdNoTntoGSCpntSCTU11pZP3J%2F3gZtY7xa2uty2JGGyP%2BznAIKo900p8uttPaM&X-Amz-Signature=e7bf1e55396a028a87a2701e7137e4650f5fc69e2ce1671da3b6011ed1eb1819&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEO6XU7Y%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0elhCmTIzz5b63lM%2B6KsBCguWO0pbVEPBQ4B%2Fvz6MzAiB17IL2Q6vU9KfkQdrKnTsZQqVQ3InXdEvgJG6OY2ZWMiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZfU1aKS%2Bbh5BIEu%2BKtwDRfCw4NzGIz8pT5yTEsTPhi987GvLo8WT97L9cDW60j6fWjx6rcut5XSN8sPCGFTZ9k2M8VDcaEpqq6c8y4ojg1V%2BArw%2FIzoZP%2FzTkr4I5b17NdxVDuBznFNaDFgiaOSVYi7y1DcbdG87jL56kdArYgH68dhRc%2F9pL779YA2d%2B5mWxI%2FkOGZ7WMLa9oK8vUrqHqjCLHMH%2FL5bKYpC9RgJaLaTtQ6QIXGP4kfPfmIz8aC7fQiMiXL2uKWX1sYAUsSYvWiZxZM9mHoiL7FR6CnoFSvt8Vv1zt%2FtmqMQCm4M3EpWAcvOOUlxva0CyF3M64jGJlpWhkanqtfgXnyCRuOXIR7AA5k8UagVc64hX3uWyY%2FlesLu4nkU9Bh%2FD91Nf0R9iVrFj42tWdIPSDT3yI4WCyEyX%2BD7wPILjdMTbSR%2BaIIwx40g2qEJIMrcuqPGyiQVaC6owYQvkp5G4p%2FUI8MgtvC2cizqXymzlTCTAYn9gNDocVfB68tYBYDK0NF85DZf0802G8Bdjm8PreZEMTsf73aRaozd5p0tVaVUZKR2wYjsSC333gCw7iAr5ns3zZyddmgg5%2BolhUnbzSmhWlrffBN%2BOTDvSiGvlN0wUI9X8YTxh9MGVnhMRgczkIswoZHjwQY6pgGHl4ne5Jh%2BskBshbY39uu38%2BEP5YUl5H%2FRrYWP9%2B9NBd1v8rvTJl1RQXqM86qrBXEKFYXATm1cNtjucVuiuV5DaWtnCrcKt14vAxv%2BtK3pVNH6z%2FFwQdjaTpMVzsRugeVHIaNR7%2B9I2x3Ns8t0JesdwwOlfO75jshbDUvQpBTDoGOkHqkSKlrZmy91ys7uVT3LFrynnDR0HHfExRxR11FS1p8VoTAO&X-Amz-Signature=64bed0712f77503f5bba6bf1f0d36063400013b045015d002297dd0b58e13a40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTQYUQP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxnhAsmCEeRHLO9MIj9FZn710%2FZW%2Fr0JcDscLGgDTioAiEA4bzYC1ZR3ZgLYAL7fZGJd%2FUs0HJNg2DvnU0SlGTRAIwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUTzsQAaLRsT%2Fl0HircA5YYOQpVeFOze1dJ%2BFtQS2dcNTEHEqGGmxJ1iGedAKCoFl9DKF2CusinU4bZVafzThPkP3nXPgMcBtX3zyQ5Cio0D8qEEh%2BdI9XEaIiSkEwwSPrjJcYPNDQ9941HXgYDZd4bAv45sIkO%2BRXfSW%2BY3hStp%2Fcwu8SxdNLN%2BV1u0FFdwRvHFELYFcYBA2%2FZgyzepb9Ro1kwnFrGFW7%2BorTfx8FIp6ihxLZf8NUCz4mtHhBFNyI13QwrLkDJCs0m5BwYq6B56ccyv2gdYQWtM5D0PRIazFnSOBLQxwLYeNbFuW8adxEyCL7%2FMjq1nt5jWpvrJZjvB4anAQYtoELoq9z%2FOYnKJ9oaXiako%2BVEb2TG0NmultngKbbxbt9JhM1xVePeF5k5rjlHxYN8Q8HGVky9BLboMmUYiXwbLMcD1QzrFmmaFQ0az8LkOx2PHWNpnM%2BTu%2BThLNjiuTIltYGkBUpC0yoIcss5I6l3HLFGmneoMDAiPEAPuqsk0a6otJaWxZlZD3wgxcA6s%2F7O23ZMlxSoGf65PtB4gKePvWTARRRIoZEPR4Frv36UxMzPAxoxuc%2BNvgy0tozHOKcRkbuMAK7qh345zucvfmzJSTwbULCOk8x9etog9CLoFnsw67VhMMKQ48EGOqUBBDh6kZTtgHenj47XGiEdLSYSjD2GF1tg7QmDtugehPmiVhnDBUVGbp5YihMR%2BH6BdFl6odZqDB5r5hpuyN8cto5kwGLpIIsBWS%2BIbTeWzcL3s7ZmYaNPR0J5TJ%2FY81m7XBxCo5IYFPfCaOvJcTKqMJ73o0mFm8FNzJe4mgFgrlYGN9cDPXfkgCUQilWB97SBLpvm8XPwG83eO5OLrtXmhWFaHrGQ&X-Amz-Signature=f896a46dac5ebd2c7a5266336955a020754ee3b036872c46765ebf6fe1506c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXL3DG2%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDkrDEcn4t0ESAKZ5VeDdEE5WKCJ699C5c1ptcoBfStgIgb%2FsKvgFwQrU4%2BQ2AAVBjEBUO94n0wJZxO8gK%2BPWYrTQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeMYaNKvmgJOkHGECrcA2%2FnFEkVyR1Nm1FLOtTyxJEufgGFm8h4Qy%2FwVtxmY8CXJFkkQ7fWYUNQKRBZ4tNgiEN2wxqZaycD0rHdKCtwtuu%2FL27TQMruvYJjwAKQMZ9nLEWSBg0%2Bt355BURsKsQADncee4BzfTOKtQ7F5vaIfTQ0J%2F8t3p3r6RWSZboD6p0EUI26iRTVSVVL0aKAWzJmWtwlzOfDtvJNy9uHa831kPM1vFJfazXKBc%2F9HWae3g50%2FxOIzyGVoh5heOucSabTeEkazatr2lZkPOVUdWsOHZpcEEdUmV8Y9WeMOD2jDEYLaiQMuBaphzzNi1KySPoNrUyKUzWMq%2BNcTCQ%2B%2BuURiT3WXlE%2Fg4KJvvTS6zENvXlu8WUF85CGfcz7pTmInTgxqBZuDD7BlO10UrJ8tYXF5haJ3m334j3WlhOnfj6JMGRHU46tqzueY71fzfdFoZV%2Fo8nxHa9cnc3XHWHprvGkzioPi8ui%2FsleV0xmRwRBy2iWfqnIL%2Fg0Aie3Syd%2FzP9lZB2SAQpkS%2FccDb799wF50YC6Y%2BkIw91PhOc24TTcZvh7cDX%2FX5daFjc7dpH85CfadEJIy5W%2BJ1lelmECkH0qp%2FHzyL0oEr82yHo4I4mHW99irPh0sxPTYJraePf0MMGQ48EGOqUBbrCUlAVLWbSCgxjAv5c7OGqX4zuHIFXwX0M4g9fmW8dAjwzxbc4B696bavsoboDw2qgIiV482ANaQ61DhxJgSwPKVdibfZM0fGgFclguz2UGQhviywX8L75%2FC6E26Ei%2Fuybd%2FTvsz3deDkw8My6JYcsVWStwWsUdNoTntoGSCpntSCTU11pZP3J%2F3gZtY7xa2uty2JGGyP%2BznAIKo900p8uttPaM&X-Amz-Signature=d9e0e3b65856b83fb01cea48dec70248fc686dedf94ff67d69d6b2f96f1ba2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
