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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJQCFWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwHIeVNdtZZ85LRNXcK81LxX7iBKvsgbiyFrdVe0bkAIhAIORbNhJViTHAL5KSO90ZuJ1L9Bz7DhdKY2Qrm%2BcL0SAKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVQp26gKFG8d2ifroq3AOJ93chG2YqKtzUw%2BSondbhEai3jwPJo7FidyrmP%2FwJ%2FR7xQNWo%2FzcpSoNSoR9HAKS8jimw%2B00mmKqfv2gq5UKDlE1NpQS1YtWWzhmvAFokfx53lgrXyj7D0WPKJvZN%2FGoWgdQR%2FH%2BBEQbWz7dWFUCYjwfFY03y3PuLO1lRWd11AHRK2D3KfIOFixIBTfKVzdgjoyH2jXh%2F%2FxkVwP1GsSUnLuoeH%2F2vQ1iqXj3Hwt5vAkOlZunfCFF5NOadxa2FFWOW66AUeaHWeBupmeIpEGZ9I3lEkqZl%2FMn3vE4kWZmHbdWVDEOjJOJl8kOT73v11BdQ%2BtZk5dssA6TN6wvX0%2F7xQGnA37Jfj%2F65Jk2GOCbQxPndIdM6QZwHSWTqSQNtqUvKNxK3IJNPaB%2BQU8drnyS4%2FpFZn9Q%2F%2FFdHxOsTCuUY%2BzZs8ebRtW4INRD369b6e%2Bm8%2BqGm7BnycyU0MAitTYrvrhhno3q6SVVjJiazZB8rkOdRIOzwSoTuJ%2BCyUjIFoZRvK4YGn3tPP6eLAemN165E35I0uRdBekY6pPjmyw4ECh1OxO3FUDLuYr9lV93CoPJcFgdWo4BKbkmhncLl4fGQfAIRSZ1VPNe4sTCb37xf2IiY28xb4RCsbyj9sjDN9py%2BBjqkAQcdlBIBKIHO2Zfk%2Fc6TIXEpDCOzWDTV9HHaniIH79g8Y5QCpe3PGOs%2BkWvofGXxXb4Fl36qlzomJpAgc9jz14m7mh8EvDJMruaaIjbqxm5dCrQwxPRSv%2B%2FAUASualk0ry83EArHSx0uVlt6nkfDy85PyF729yk7BsSIi2FcykdTUu2lmrOqlyUzI1dW8dAVmeWeke5EevEHbPE3bEWRaNfdeY%2F5&X-Amz-Signature=d329675ede597224087212e65e68f73b57fea7231ba8af9540a16317116edc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJQCFWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwHIeVNdtZZ85LRNXcK81LxX7iBKvsgbiyFrdVe0bkAIhAIORbNhJViTHAL5KSO90ZuJ1L9Bz7DhdKY2Qrm%2BcL0SAKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVQp26gKFG8d2ifroq3AOJ93chG2YqKtzUw%2BSondbhEai3jwPJo7FidyrmP%2FwJ%2FR7xQNWo%2FzcpSoNSoR9HAKS8jimw%2B00mmKqfv2gq5UKDlE1NpQS1YtWWzhmvAFokfx53lgrXyj7D0WPKJvZN%2FGoWgdQR%2FH%2BBEQbWz7dWFUCYjwfFY03y3PuLO1lRWd11AHRK2D3KfIOFixIBTfKVzdgjoyH2jXh%2F%2FxkVwP1GsSUnLuoeH%2F2vQ1iqXj3Hwt5vAkOlZunfCFF5NOadxa2FFWOW66AUeaHWeBupmeIpEGZ9I3lEkqZl%2FMn3vE4kWZmHbdWVDEOjJOJl8kOT73v11BdQ%2BtZk5dssA6TN6wvX0%2F7xQGnA37Jfj%2F65Jk2GOCbQxPndIdM6QZwHSWTqSQNtqUvKNxK3IJNPaB%2BQU8drnyS4%2FpFZn9Q%2F%2FFdHxOsTCuUY%2BzZs8ebRtW4INRD369b6e%2Bm8%2BqGm7BnycyU0MAitTYrvrhhno3q6SVVjJiazZB8rkOdRIOzwSoTuJ%2BCyUjIFoZRvK4YGn3tPP6eLAemN165E35I0uRdBekY6pPjmyw4ECh1OxO3FUDLuYr9lV93CoPJcFgdWo4BKbkmhncLl4fGQfAIRSZ1VPNe4sTCb37xf2IiY28xb4RCsbyj9sjDN9py%2BBjqkAQcdlBIBKIHO2Zfk%2Fc6TIXEpDCOzWDTV9HHaniIH79g8Y5QCpe3PGOs%2BkWvofGXxXb4Fl36qlzomJpAgc9jz14m7mh8EvDJMruaaIjbqxm5dCrQwxPRSv%2B%2FAUASualk0ry83EArHSx0uVlt6nkfDy85PyF729yk7BsSIi2FcykdTUu2lmrOqlyUzI1dW8dAVmeWeke5EevEHbPE3bEWRaNfdeY%2F5&X-Amz-Signature=57c20b90fd319851b5279a126a18665b18a07eee31c0402da3117afa2a438689&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBLVFLK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMZxVFu5rK6smHApT3k2pRCmOpdGV7YOXcLR5WrzyNNwIgVgEVpNN5TmwRAw2ittV6xMQQWg03BmZ7Vs2SqlUrxXEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2w0DHK4cdx79NoXircA9BZ3Ym%2BJXpEyIibJk%2FiR71U64zoRpH%2Fkx%2B9sSrgEJgnf%2BgKGsZ7c2AYVetAeDv3YJVrjSE1r3wTsHXzy9fxrK5QQ%2BexISMWoukppHkYxBfP6TXrI93NAt6KxMtnVg%2FZ4CCW0i%2Fpd1HFfVAvQqSddiGkDi7ZX2Afor27zKqqRaTM12OT3xYbczljVIMrj14L%2FLxb1YcNGpScjWUWhIAlKtPEkMCrq7VCy9jwm%2F9b5rkOdtw8lEoeYXOMTnkFSxdZOReKWA5aRIFkXvhSWQ1rSBbz7KuDpZiXuoAUuucG7IuyxPiIyHZJimlcDdqCJXU88KMtquKcm8T2kYOU6z8Uj%2BYTNgblrEPLpRL3mM1CTkOg%2B%2BL3I0ltzteQDAFiXDhmotS54%2FzGcNhczMosmHp%2Bk54GYjOIT57N8Y3cTA0brOCgBBV8D9OruiN%2FHOHAXE1ZvFMWsZjkjCWBTilFy4hb2hyVuDYVzrRqysSF9k7OY%2BXFRnGCltYi8l7UWoixWR7CP9FlIoBkcRxBa26ft5DJ%2FoLMkj9kSGgxHeh9Fjx3vozkdCpn69ATzxANkZhKTE6wO%2BgGNceMShrlsjHwgHJI%2BwUs8pQzw0LM5QRCpcmL4Vuu6OQfWbuciHGiNx0oMNz2nL4GOqUBulrqRuwycIhBdBdU4%2BQF8MKahH78Kl6whSbR9IKZXC0onzOfuzTO3%2FD0P9Q5mQdIj%2F1ZHDBnmMxgVvOe2Bhzu0bOeoZO4SY6%2Bu6X1p2mVq7FSgceWygvN5xAbOf%2B17jM0zInzG2Q4i5HK6YyxJvQKkK2Pbg31ekKMtQb7yUE%2B5KXPbd8ku8TGQ1Rm1qlj5FF6zNcvyehyP%2FuM3dKv2X0MLuhWPMC&X-Amz-Signature=5400fc10723735ef4a955ed4bdcc398501ec9382f1b5105e85278a8eb066fef7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKWC4BN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmhs%2Fwe6%2FIUHowzYI3gMOt4ocKvRyZJBOQl5U0rqDNFAiBxqRET04iuwa5Pg6mobmsZ7BJKBBisAj%2FhLx2b4cVBNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjVjiRzDPbasMCKBYKtwDh7ktV908ENBdsQEprZspb4E2U3KG%2FcpxWJgqKnE9WYFGzeXOAdYXjIEKnKD4I%2Baup%2FjqPtq97I6bocBzTkH0dGSunCS5QvoQxh%2B8dSjMrpQRxXp609%2FMib%2Bm%2B3PgcInPXhwtssWUvvDJrsnZpeKBf8E65BQE3mZ24xZ%2F%2FsqvgI6jM9uXEvI18Vw%2FYjIHa16EoOmeB19Qauv607nK%2BOv1OCar8vLJI%2Bi%2F0wwWcAsQWcgCqE0ksc3zTuszNgTf1VvBpLMP2lxOgrhdGTQ4qCq1EvHUQBdc%2FpiWD4G2EO6NbBVSKh%2FQxbYvbjwA49CGHAjdEVhNVW1XN8%2FrEDtMgobyitqMXu0ZkG0SP1RHr0HAcqdplgAa0Hy7XwFCDOXm3QGUwkMIyggBWs3bKYbCPtvxmud5Gdj27beOQzvpRnZy5Cjj2lk%2FlcdWF6UUtyVxd0s6T5K%2FtxBQNrIEUxjvSNz20i%2B4PvUFGN2KX1Odud35lPccJk%2BUrdQFGeVK9USbZAGlgzMxsSvDSdmcgFlCUPiYooDC%2BevsfVTY8q6ZRFy6duZUIfRmr0OCpN7gPKDS2VNuEGhW%2B2mvh%2Fk%2F88sJH0sXarO%2BXa6wUIQcX%2BeGA9aeg9R234%2FEh41AFT9SquQwx%2FacvgY6pgFooMTcbUilUMVB4X4MaAl4VmINNwONF%2BKCbZJXj2arWGVuMM7p3W5wyY3zTwuHG1cdsEmjhL9ofvtsgdD9d6tx08TvEkYq29IIl8HOqiAQ28e72xGfnEZjEYLtCMYUxq5eqnRHJf%2FcWllKbAibILLvHi6eZBkhUzYw1wnNF7rILuZzJVBMP2Qxdcwd44nf4tBn8zM4Fjrmh9p%2BGuopVN%2Fy5JQbwTMd&X-Amz-Signature=12919c22406efb6c9a55799ef617b2c12a800b94999dc669cf8e152bb805e142&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJQCFWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwHIeVNdtZZ85LRNXcK81LxX7iBKvsgbiyFrdVe0bkAIhAIORbNhJViTHAL5KSO90ZuJ1L9Bz7DhdKY2Qrm%2BcL0SAKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVQp26gKFG8d2ifroq3AOJ93chG2YqKtzUw%2BSondbhEai3jwPJo7FidyrmP%2FwJ%2FR7xQNWo%2FzcpSoNSoR9HAKS8jimw%2B00mmKqfv2gq5UKDlE1NpQS1YtWWzhmvAFokfx53lgrXyj7D0WPKJvZN%2FGoWgdQR%2FH%2BBEQbWz7dWFUCYjwfFY03y3PuLO1lRWd11AHRK2D3KfIOFixIBTfKVzdgjoyH2jXh%2F%2FxkVwP1GsSUnLuoeH%2F2vQ1iqXj3Hwt5vAkOlZunfCFF5NOadxa2FFWOW66AUeaHWeBupmeIpEGZ9I3lEkqZl%2FMn3vE4kWZmHbdWVDEOjJOJl8kOT73v11BdQ%2BtZk5dssA6TN6wvX0%2F7xQGnA37Jfj%2F65Jk2GOCbQxPndIdM6QZwHSWTqSQNtqUvKNxK3IJNPaB%2BQU8drnyS4%2FpFZn9Q%2F%2FFdHxOsTCuUY%2BzZs8ebRtW4INRD369b6e%2Bm8%2BqGm7BnycyU0MAitTYrvrhhno3q6SVVjJiazZB8rkOdRIOzwSoTuJ%2BCyUjIFoZRvK4YGn3tPP6eLAemN165E35I0uRdBekY6pPjmyw4ECh1OxO3FUDLuYr9lV93CoPJcFgdWo4BKbkmhncLl4fGQfAIRSZ1VPNe4sTCb37xf2IiY28xb4RCsbyj9sjDN9py%2BBjqkAQcdlBIBKIHO2Zfk%2Fc6TIXEpDCOzWDTV9HHaniIH79g8Y5QCpe3PGOs%2BkWvofGXxXb4Fl36qlzomJpAgc9jz14m7mh8EvDJMruaaIjbqxm5dCrQwxPRSv%2B%2FAUASualk0ry83EArHSx0uVlt6nkfDy85PyF729yk7BsSIi2FcykdTUu2lmrOqlyUzI1dW8dAVmeWeke5EevEHbPE3bEWRaNfdeY%2F5&X-Amz-Signature=50e581bf25e36d1661509116a36e2d8e44885c220ff1dbc39b2ab7a3ff3aeca2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
