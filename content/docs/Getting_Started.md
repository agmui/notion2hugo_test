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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HEU7N2I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBgCoa9N69BorQMUqVgkw%2FPE0LEh2mZdFIZSrdICXzDwAiAGYdUz8JvGROCpHh8oQDVDwJ3RGnL2L4KnavxW41YhaSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMWU3Xr6FFOjKhpOilKtwDyiRt1lpjOKPguvr6ZvQRvA39vze54YI5i8nG2a5z7pra3J4lzlygPzhy4sQ80xMtAnDK%2BMxL9bj91q14LBpmECgmJjUkr%2FC%2FePZWHLi7W6DAdOEvoRIXjzRecu%2B5yDRnmK8DjJdvXtoVw%2BckCkwRDdrvVwecuKpviu7SQj0cLl5GlaZnfVu3YjV72atkdjETSBgETlS4tBSXSk09tCYAkZ0pwQVOYx7zvt60F4pSM%2B9h8H%2BDaCeJ8v6Ap5UCdhq6G9wHzptLph8U98iNFDIBP%2B%2B%2BtkjGk2FKAYt2YcqA%2FugypAj4SlsfN4zrqFuIEsXkX12yoM4bdRB0Sk%2B%2BovooyFzGlAz1nEg05O0PplSjLUkPOlOq0qki%2F5Ph8y9s6BEcUAJrMtim5vk2anqhZk19H4jA3%2BNSI5e0SFVN5Wm%2FK47gwc54vjW2oT0DuSJpnXMxP6VMgONqsmyXhnZ6GBtgDKjLGNQuiAkFB5ibyolJtV1uSzCq760QrHDKKe13f5%2BEpJc2ASmLzd80RwOtxZvE4jXCOqd3czUCmQJV%2FHoyOuMFxHlV6RrnK2rdQZKc7F9bfOX%2Fs3QmX6XDt95NJf9%2FhcNRtsPTUOPwhXAE32%2BKKHRlEbtuf7de6lsPZH4w8MXCvQY6pgELiZwpIZWUiC%2By1amOa7%2BQ5MgwE%2BoeZc%2BQwl58SicClNqEWyrzN%2BEzT6Eqf3soisncPoJz4qsUvU0lgmA80BShL3HcNPlpjQG0Rg3X5eszkei%2B8H2GQbhcOhi3EyampwFrGvJAB0b5k2WbTDVL%2BSmoi0tjTUR%2FxRP3U6smsJvFP%2F4yseOvMJVuTwxKIylNRcBJErUgudWk7W24dNAjTiOtuwxuvnfM&X-Amz-Signature=40118b923a9830a7837a0cd547fc53e298b97d643aefcbdb7aa127278375c9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HEU7N2I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBgCoa9N69BorQMUqVgkw%2FPE0LEh2mZdFIZSrdICXzDwAiAGYdUz8JvGROCpHh8oQDVDwJ3RGnL2L4KnavxW41YhaSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMWU3Xr6FFOjKhpOilKtwDyiRt1lpjOKPguvr6ZvQRvA39vze54YI5i8nG2a5z7pra3J4lzlygPzhy4sQ80xMtAnDK%2BMxL9bj91q14LBpmECgmJjUkr%2FC%2FePZWHLi7W6DAdOEvoRIXjzRecu%2B5yDRnmK8DjJdvXtoVw%2BckCkwRDdrvVwecuKpviu7SQj0cLl5GlaZnfVu3YjV72atkdjETSBgETlS4tBSXSk09tCYAkZ0pwQVOYx7zvt60F4pSM%2B9h8H%2BDaCeJ8v6Ap5UCdhq6G9wHzptLph8U98iNFDIBP%2B%2B%2BtkjGk2FKAYt2YcqA%2FugypAj4SlsfN4zrqFuIEsXkX12yoM4bdRB0Sk%2B%2BovooyFzGlAz1nEg05O0PplSjLUkPOlOq0qki%2F5Ph8y9s6BEcUAJrMtim5vk2anqhZk19H4jA3%2BNSI5e0SFVN5Wm%2FK47gwc54vjW2oT0DuSJpnXMxP6VMgONqsmyXhnZ6GBtgDKjLGNQuiAkFB5ibyolJtV1uSzCq760QrHDKKe13f5%2BEpJc2ASmLzd80RwOtxZvE4jXCOqd3czUCmQJV%2FHoyOuMFxHlV6RrnK2rdQZKc7F9bfOX%2Fs3QmX6XDt95NJf9%2FhcNRtsPTUOPwhXAE32%2BKKHRlEbtuf7de6lsPZH4w8MXCvQY6pgELiZwpIZWUiC%2By1amOa7%2BQ5MgwE%2BoeZc%2BQwl58SicClNqEWyrzN%2BEzT6Eqf3soisncPoJz4qsUvU0lgmA80BShL3HcNPlpjQG0Rg3X5eszkei%2B8H2GQbhcOhi3EyampwFrGvJAB0b5k2WbTDVL%2BSmoi0tjTUR%2FxRP3U6smsJvFP%2F4yseOvMJVuTwxKIylNRcBJErUgudWk7W24dNAjTiOtuwxuvnfM&X-Amz-Signature=433f82aabaff4c57949b9592724a7d01d0e9ecc19ff9ea7118f85ff562acf1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBHU6AG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHHw7UUmC1JVur0sdcCgCWfJthTzTKLACGS8O0Sae9KLAiBatrL2SsFfBIAE6n436G9aNU9vwkgxMtvKigVeGXT8cir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMnXK4kOi%2Bbk%2Fv7F34KtwD03KFCra80GPRN169IQQRZz4YjqPteAwJaMi%2B5kWnvbfZoGxOGLnJ9L79f%2FICmB0CKfSUdwQF3HCjF1MX1MrDKHqKSGXR8u1g2MUc6aKUwGOKpUmIbyOX5ra7nYufodNtXRS9dHPpQe4X0LAI48%2FQEw8lnfv%2FOvQ%2FTm8Aewx9qm9D6Noi1aee5pnz7JN3bBva8aGTfA9y%2Bzq3U0D0H19bbYkXpKtBn8Lg%2BZlpSJinuh6yNYvsNNEmOQeutGkbp7B4zFrfMUPCNDvqOZ9p61yVobQkLcHNIEPR9aMxmRclyja12lGE7dwOkbRadvHf7nXcAq6qvMXOdSceBLRr1crycOSrcge0j7O6FUOxkIgaSDwNbTtVXfqio%2Bsda1yylCJjHhw0LHRA9alW90N0G5dOg5gw7Ied8QhxulKVlL3VTnIcI4md%2Bu6PrZm6g89Y4%2BNJTiI0KuJyCXbfZqqoktxXcqcM7meqroxHOmGrqEW5vY9VakBUgGAgZxsGU%2BdE39QUJjFXjr%2FAbYxrjOFtb3YSfsGYqmLrOxK7YnJoF3H0qnrAhpGRjZK6%2FDTHxFSsfViCEyQnlfx5DfqwHAT80mPmEUp45PbgWLLNCBmRPYlPmZ8jlu2fxVdOm%2F%2FLvmkwvcbCvQY6pgFSMWMwozIKJutC%2B8%2BPY7IY4FFijciquuWxs4n3hguQBPlE%2FofARzQA1eLGSMJg9gCWdHTMkzrelSM8C4j7hzku2YvEezxNXBplRusBKTR%2FWhMFvzlDLzhkwbfwkve01JFITAD23EQI43SH4gpV1esp%2FFPmxwSAK6KxSxWbJS6KJ5MTX7Df9grrhVCOhBKQhT8y6xABAptlbUbMiztkBOy8PgcNaxwh&X-Amz-Signature=0c252f2ae1f4ed7318b2597ccdf43fe253b81929cddcb775e0983f4de8c2861e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWZ23VHU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID7%2FPs3q0eOOC1ntqclZaM3XqPBXwZHNSQuNRf0Be8W1AiEAv%2BTui9pG6NUNMba60rvZBqkZVh0oFM07Ir9SH7Sh4XYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFLwtCEfAPY6rcqsSyrcAwK2kCEFjqpUDh4Fz%2FM0tLegKjKqv7hpX3A87x20PkDK1ONDDcGhaRa4aBz04hjgA4UXh7Psii5922zDlhT7zceWAuJhx4NeRGq6cSvTulY1n7%2B0ZcsjVVs62kqBPqEouSeWMNqL4bsVwwqkABX%2FKnUF6Pb2GkDxjN%2B4AsygfDrgJzGmgp2fNtV67drmWO1%2BAjOGavl8c3uYE5Re9532jHGzKl2dHv1Kno7Uf0yC04bxGkv%2F83y9nmLksoYUGxBryaMiMG8Witu8Kdtvi0l47dgSZ23UxqRW%2BTHDURMqdm%2FpzWBuxwZJOHLwMz9lJawLlfWFbXUSz%2F66ZlICVaw8R%2FGgtwHYfrfkzgx0O%2Fy7P47yVzlKe7mF%2BxoJQTZejhX%2BXLrZ1vi%2Fz85XlT6Ai7t00FX1oLjdqxNh18%2BILeWHdwg5V%2FC28dyBiOCkvU6KUkilRxq3yv3zj%2Fm%2FbgFOnyywn9U0VWdc4x9Gm144cOtig9Nk7e76zkMzdHe7ymyawLj%2FtZp8afwNW3d9ME%2BnxE4ui%2BXjPEzS3OglJZcUJ16dvel%2FjcARsZ1QSFF5jo%2FMjjf9TYOsbhWgZ1Csoj1OiBw8ffvSDBIG3OnuZ8OBAK13Uy2zvT8oo63tOANo0tr0MIXGwr0GOqUBKkok3WqX%2FjgTZl03X2s%2BVRn0TAZFNvGSS%2FgufMYjhyqyBbBOb9mL4VI7Oja%2BvXTZJh9SSGT9FyJO6WEUml9JyyfUs5UYyL69FCDIV%2FNCFhfDwS%2FW%2FtuRwqs2goL0xmIeVJknlGdIhbDQN6MoI9WCl7hKP%2BIFRz4HTCBrMO4hHpAfduUaImM%2FtvCW0CU%2BbiXhHejahqaaee2ywn0C3pjRShcVUjXL&X-Amz-Signature=d1d3106590cad636fd1de005de627662c3e503d02b1c126b2b92076d0612ad2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HEU7N2I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBgCoa9N69BorQMUqVgkw%2FPE0LEh2mZdFIZSrdICXzDwAiAGYdUz8JvGROCpHh8oQDVDwJ3RGnL2L4KnavxW41YhaSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMWU3Xr6FFOjKhpOilKtwDyiRt1lpjOKPguvr6ZvQRvA39vze54YI5i8nG2a5z7pra3J4lzlygPzhy4sQ80xMtAnDK%2BMxL9bj91q14LBpmECgmJjUkr%2FC%2FePZWHLi7W6DAdOEvoRIXjzRecu%2B5yDRnmK8DjJdvXtoVw%2BckCkwRDdrvVwecuKpviu7SQj0cLl5GlaZnfVu3YjV72atkdjETSBgETlS4tBSXSk09tCYAkZ0pwQVOYx7zvt60F4pSM%2B9h8H%2BDaCeJ8v6Ap5UCdhq6G9wHzptLph8U98iNFDIBP%2B%2B%2BtkjGk2FKAYt2YcqA%2FugypAj4SlsfN4zrqFuIEsXkX12yoM4bdRB0Sk%2B%2BovooyFzGlAz1nEg05O0PplSjLUkPOlOq0qki%2F5Ph8y9s6BEcUAJrMtim5vk2anqhZk19H4jA3%2BNSI5e0SFVN5Wm%2FK47gwc54vjW2oT0DuSJpnXMxP6VMgONqsmyXhnZ6GBtgDKjLGNQuiAkFB5ibyolJtV1uSzCq760QrHDKKe13f5%2BEpJc2ASmLzd80RwOtxZvE4jXCOqd3czUCmQJV%2FHoyOuMFxHlV6RrnK2rdQZKc7F9bfOX%2Fs3QmX6XDt95NJf9%2FhcNRtsPTUOPwhXAE32%2BKKHRlEbtuf7de6lsPZH4w8MXCvQY6pgELiZwpIZWUiC%2By1amOa7%2BQ5MgwE%2BoeZc%2BQwl58SicClNqEWyrzN%2BEzT6Eqf3soisncPoJz4qsUvU0lgmA80BShL3HcNPlpjQG0Rg3X5eszkei%2B8H2GQbhcOhi3EyampwFrGvJAB0b5k2WbTDVL%2BSmoi0tjTUR%2FxRP3U6smsJvFP%2F4yseOvMJVuTwxKIylNRcBJErUgudWk7W24dNAjTiOtuwxuvnfM&X-Amz-Signature=0cce36ffe297b8a4275f479ba217b45c2193efca59caeb929e880cc21ac562d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
