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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHIBIMM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4aaidn5%2BNpGGarxY1KfKztYuzUdot%2F5xx7vwyrGnVuAIgOMHo6Vr0rkEFqRg%2F4No%2FbNOAcdv2%2BytSX4gF33%2BwkPsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR73MQ816SwZofxECrcA2t4R2otTsefCHSfDrpMkgwzuwR9B6G1uiZYB1cZZDZvCZ5384bbgpvoPpAEkFEhNDRExY1fThTOJDKw1ABnUnUtOCxctILgXIT23ZjRvf0HMIIWpjkzuA7s%2BcI4py4Jsso05slU8DHD%2FcmELkwl%2B0ye3PeKfXf7FN%2Bi1pH832arfv5cW06nd57G4DJjNCYV%2BaMDfUtiAxhzz%2BUlo5CcwBgS4v3f1D0XCIB0HSRSYMMEGuOXSMLyD1K8pljhBzzMfIrQZ1rLglTfw3u%2ByTr3YDhuQxbpacjoD7zI7mn1MmG4Dm5EmKnuVDD87BFec8ywllhD0XdcIo4KHi4l7MuBL4myOp2rA%2FjJbIw0RCa6SeIG8O06ur8id3kjfO5sGjVnu%2BrN4KoIkqxRYPUR3QyLGJgtUcF0Ub%2B2sV%2F0W5XKpBVBbdVXE%2BgVpG7fKEykpaJsmPvq5o7VNM6VsPJFcvll%2Bl3G0aCV%2BD3A%2BThTWF4hHhd5nbufBQt8JcHOVFxJI7oUyy8%2BKTAUYcw%2BS93Leq%2Foc%2FVst88TUZB6NArLj83Mo53R3OE1kOUWsxUHGIHXKDhUw3iDijKujA4Da1Eifx888w%2B%2BsQuygs0K01YSNvTLNMvl3ek0RLl%2FFTebkVdUMIbu9bwGOqUBCFQaWYTNs7Yf3saejoic1lSZ4IDkg51yKEmhCT4MhIVj%2FiJzvU5V2AJtrZ10%2BvfxXycc6ORxOdOCEyIBudnOuWiaI2loQZzJJB%2BaHGeZ3zqUxlODiifch9cFKBc3DtHhOqCWueQU%2BRzPrOu2rjBj4PFCg0Vu13bbacd13sdk54sUPGPII4IUpVHh6hRPLljke8QBzej9zBMtZMTytbrKpoJ1aOAM&X-Amz-Signature=5f3009083cc26e7c2bbfd0a146a1c1da80cdeb7ef49839a66addcb4b073e5d2e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHIBIMM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4aaidn5%2BNpGGarxY1KfKztYuzUdot%2F5xx7vwyrGnVuAIgOMHo6Vr0rkEFqRg%2F4No%2FbNOAcdv2%2BytSX4gF33%2BwkPsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR73MQ816SwZofxECrcA2t4R2otTsefCHSfDrpMkgwzuwR9B6G1uiZYB1cZZDZvCZ5384bbgpvoPpAEkFEhNDRExY1fThTOJDKw1ABnUnUtOCxctILgXIT23ZjRvf0HMIIWpjkzuA7s%2BcI4py4Jsso05slU8DHD%2FcmELkwl%2B0ye3PeKfXf7FN%2Bi1pH832arfv5cW06nd57G4DJjNCYV%2BaMDfUtiAxhzz%2BUlo5CcwBgS4v3f1D0XCIB0HSRSYMMEGuOXSMLyD1K8pljhBzzMfIrQZ1rLglTfw3u%2ByTr3YDhuQxbpacjoD7zI7mn1MmG4Dm5EmKnuVDD87BFec8ywllhD0XdcIo4KHi4l7MuBL4myOp2rA%2FjJbIw0RCa6SeIG8O06ur8id3kjfO5sGjVnu%2BrN4KoIkqxRYPUR3QyLGJgtUcF0Ub%2B2sV%2F0W5XKpBVBbdVXE%2BgVpG7fKEykpaJsmPvq5o7VNM6VsPJFcvll%2Bl3G0aCV%2BD3A%2BThTWF4hHhd5nbufBQt8JcHOVFxJI7oUyy8%2BKTAUYcw%2BS93Leq%2Foc%2FVst88TUZB6NArLj83Mo53R3OE1kOUWsxUHGIHXKDhUw3iDijKujA4Da1Eifx888w%2B%2BsQuygs0K01YSNvTLNMvl3ek0RLl%2FFTebkVdUMIbu9bwGOqUBCFQaWYTNs7Yf3saejoic1lSZ4IDkg51yKEmhCT4MhIVj%2FiJzvU5V2AJtrZ10%2BvfxXycc6ORxOdOCEyIBudnOuWiaI2loQZzJJB%2BaHGeZ3zqUxlODiifch9cFKBc3DtHhOqCWueQU%2BRzPrOu2rjBj4PFCg0Vu13bbacd13sdk54sUPGPII4IUpVHh6hRPLljke8QBzej9zBMtZMTytbrKpoJ1aOAM&X-Amz-Signature=66f5527ddd1ab577142b66915bc8877d7ef5779ca17aa230493f4404a4897377&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T22F3RX%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUM9IV7U7%2Fw9q8%2FudHth5opG2Y4P4%2BRToPxhbFTHBxZAiAHh9e6YNXay094RpHMoDgzQZEDYqUXQ%2FPQ6B%2FJQ6GXmyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2Bcg%2BHKeGgGRnVBHKtwDZOXApKo3XDlTSoaxLHDEM9nhvp0sos1UarAglDLNkfd8rEhKk2YgNRsRWoluNyVrlXpTw%2F3Z3IlzG4%2BD3Ir3xAj4V22q81zvqeQSyuds93LIRJBM15P4A2NJdRyGTKy0mI0XqJg7tr1zWw%2FwGKVZvBTJwZcZgpV3%2Bonvi3fCrqL7%2B9GVNNV7ZoweNB2eZaqrSvhsa29qhOI73P0EFODyg9D9tqn3124zouJHsBXFnxd%2BbradfXjR7bhkBJKIbnlNBcwGXUqLBne2VZ%2Bnm9tgZxiEq2uyc%2BMdv9INZraYHUTBBRolLE4uL1z3yeTpw4ySPnm1HGD2r1MlEyGQ0x18JDZrMET%2F41Tetc6%2FqyQT6GYv1%2BwTF7dkhe0khfkYgILGeA1OZXfB5wBbU%2BENUBPe0ZVXbUHl06qus56wmJrU6F5a%2Ffnj4tcWMQ64AzxqTeNKR5MWMHa6t3Cd2OkzPcGFY8R9lCFAQ%2Bm3gL44vlqbIoNh%2FScqM6UbX4%2BibZs39Q5czislZJ%2FCTAClqG3NIvxK094zpevLqxtnS6oIjtiMbS6sLvoPFTMagEhOY6Ow1RgjLg7gK6YYji6uy%2Ffj%2F8mztWU8ZehjKuJSOrLHo8Q3amHdQfaAY0%2Fwwk1SgBYwoO71vAY6pgEpO0JO3lsoOK8VeE5v7qf3Dah0L%2BkWw%2BtJNYOvPl%2Fvi4Dxrm1b5TTqM%2FrF13iVFoRsCGXJ6vOq6QpzPLREfaIj72ebAueboGaRtoXCuhylDEnIaPC9wqn%2Bh4IkTS0mTQTHGRpBnVzvB%2BvRkaJ7IBQqvemUpGw5m1GHfnA0pUfL5F13vXP%2B81VnMdozTBikA9%2BFBGcC9%2B1tgG4rZ6slcJF1RQMaREjd&X-Amz-Signature=bd4384ee8603150b2bb654b449ace4491b649086c8627307d68740f131ae361f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QII7GEC4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWBZl%2BUilipUxipQO904jkIJmbAVLmTbgjsk1VZpTzsAIhANzGt3BCqp3FxtmXmUu6jQNQbG9d9X8QpWXXQ3wjsUHHKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBOjP0vwsxMOXCS30q3AOZu%2BpMas1lOKVYy80Aj2pbPFXXAK4lg2K85gNaYH%2FO82zbJEpZ6IK%2FeANLf72KuxefkYXBMY8LueCoWqhNn6s16EboVBlt7iZFVTbSG5kZuS9Q4aG%2BqzOarS1uJlANatrZ8k7yGxO%2Be4Z%2B8D68%2BBH7Zq821caCDQM8rQpNr2NiF%2BDi3XtJ0WoXB41NgGZmHNE1ZkLN4KvLGiGHDLRzJdCi00pGagA4g6W9%2BOEqO%2FYb%2FI33LmafnMIs8oZqJX9igoZw9yvbfrcrYcv67pYwUjR6m8ZZ0wE1ndAzQW886GDCI9ZOe2cf5ghFWFPV%2FZwJcsfSWVM3NYB%2BkfK%2FCuXk867HQbqRzsMC0IV%2BdBsIhz9g616rAlJgLPhCj80ub2Olh2A5uAeRNDYqsG2kEzZKsvMUYQlzSlDA1%2BU6QTN9lFQ0DfEfKEjORXCa3A57h9FarByKf3JiMroSAlw6F8g0Zo5Mtrp4xgN2qkj3mrR1eRxJ8hiDdQBrOVHZoTHU9Qr0KltZI2%2B7gC%2Fc3nIhw23DIZp3Z81Fbj3c3Ml33ro6SI2y2dJ%2FO42m%2Bpj3g0SAnDDD7Qv5MDn3DsLCxtpbwZW3AtPX0HXEoaISTXxYbR3i3ICb6MC5kAnVzGUlWBSBcjCr7vW8BjqkAbExJqwHsweVzXpvoLs3IlW0dcNW7YKbXIdw%2F3pkqlurH0spEtI7tAOt2QMfZwWDpVnIq%2BsI08KDyTNa%2Bu2vWyeIQ2Gb6GJq5mtYe%2FBdh0w6EgVx7gqwK%2B7i5sp8cASTdKd5%2B16iSsC5IXCQw7vfFPJsTUNteyqEDOEd6%2BAN02DdQaa2DlwsfY2A50pZahLjLm2NYK9w7dTV2Dfxmr3CbH%2FXU0De&X-Amz-Signature=d9191820be15232292b5ddd1991f3f2ad38c3ea6540277d0163915115262128f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHIBIMM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4aaidn5%2BNpGGarxY1KfKztYuzUdot%2F5xx7vwyrGnVuAIgOMHo6Vr0rkEFqRg%2F4No%2FbNOAcdv2%2BytSX4gF33%2BwkPsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR73MQ816SwZofxECrcA2t4R2otTsefCHSfDrpMkgwzuwR9B6G1uiZYB1cZZDZvCZ5384bbgpvoPpAEkFEhNDRExY1fThTOJDKw1ABnUnUtOCxctILgXIT23ZjRvf0HMIIWpjkzuA7s%2BcI4py4Jsso05slU8DHD%2FcmELkwl%2B0ye3PeKfXf7FN%2Bi1pH832arfv5cW06nd57G4DJjNCYV%2BaMDfUtiAxhzz%2BUlo5CcwBgS4v3f1D0XCIB0HSRSYMMEGuOXSMLyD1K8pljhBzzMfIrQZ1rLglTfw3u%2ByTr3YDhuQxbpacjoD7zI7mn1MmG4Dm5EmKnuVDD87BFec8ywllhD0XdcIo4KHi4l7MuBL4myOp2rA%2FjJbIw0RCa6SeIG8O06ur8id3kjfO5sGjVnu%2BrN4KoIkqxRYPUR3QyLGJgtUcF0Ub%2B2sV%2F0W5XKpBVBbdVXE%2BgVpG7fKEykpaJsmPvq5o7VNM6VsPJFcvll%2Bl3G0aCV%2BD3A%2BThTWF4hHhd5nbufBQt8JcHOVFxJI7oUyy8%2BKTAUYcw%2BS93Leq%2Foc%2FVst88TUZB6NArLj83Mo53R3OE1kOUWsxUHGIHXKDhUw3iDijKujA4Da1Eifx888w%2B%2BsQuygs0K01YSNvTLNMvl3ek0RLl%2FFTebkVdUMIbu9bwGOqUBCFQaWYTNs7Yf3saejoic1lSZ4IDkg51yKEmhCT4MhIVj%2FiJzvU5V2AJtrZ10%2BvfxXycc6ORxOdOCEyIBudnOuWiaI2loQZzJJB%2BaHGeZ3zqUxlODiifch9cFKBc3DtHhOqCWueQU%2BRzPrOu2rjBj4PFCg0Vu13bbacd13sdk54sUPGPII4IUpVHh6hRPLljke8QBzej9zBMtZMTytbrKpoJ1aOAM&X-Amz-Signature=025a03c0258ff4c06ea1757612cc438bf2683dc435a4e5467de46be8a7b46364&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
