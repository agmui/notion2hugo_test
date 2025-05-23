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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPYETFP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHs5mYVdBF3nQREjl2jG%2BKded%2FQjTr7jjRuO35rRA8%2F8AiBYyqZ8wlaAJWdyXyEPsW6mjU%2BX%2BLUpVXuTJHHm9SMm4SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2BHVzaK21r2ylEv1KtwDlI%2FAEfnNf6KQ11YXqjZ9BAG%2BbotF3TSeMjJem7%2FrrTUSLqhaeMOHkZtHXETMVOBJ0QTifNeIGAzT%2BUBPdrIZgpHCatx%2BTe1b5sgwo1ED7a60N07rbmRgCr1wN9B%2F6082fz7EhOcfM8kC%2BT0dsU9nOVU2BJqUMqLkOZ91g0dkKwXUun141j17TbrMcqmqss5s6d04%2F2l9%2FkbczD1%2Bj4jluBIJGSS3QF2WdeZiVmbuJYKpjkT4vXckK87HzAc7fQp%2BYfeM8nlT2qrEB3xuwsOSeU9WBcNDh0g45q2iaRpYjbs%2F7pcapbLqE6IpUvLeMrK1jkt914TxjM%2FKiUqsmB%2BMfmBLecP4IMqY9FVufUk4drfg9cY8Z6biGaoU4h1bycFbyNEE2CPiI3kYmsN2lmAlxffjS7KamtZxNdD1o7pQ%2FDUT1fujr4P97L14dDpHNH2dpg2kTGZ6Y5mJ%2BPoMOrRfS7SfCIRa9UV7GSBjdD2HPrODIF5nCnj7HWV%2B%2FQxl2dMsHBOHMUAP4Xrt2V6uN5mtM8az7LzU8V6VboY0cP19gEOL0H08Gz%2BDyZjAutN3H8LsIYKRBC5T1OlTTxByDK8xjAVsLKQTQDmA%2B6oQFq0UzWnLorIsg%2B132FTzsVUwhOzAwQY6pgGnqULOYb517r5r3ThGi6sAu5GrrPwYrEx41VcuLazo2ZCxtByfJe59EJsrY6a%2Ft1kYGlp5dzb3JzC%2F85Lr2jsJWFJSZCdHoooBIsroxRCQOFELo0RSdDiclse77fU7hKZWhpUXjJkyPWB9FK4FvRNaIWeDGNJPLDh7sKdEB%2BjHcws10V2XRNAOCubXX7hi1xT5hszH0ewTshSP1x2aWAkbi4ERMURQ&X-Amz-Signature=4ebfcb63f3bd71f703eb78e442b93bf80f8f8614b16d6d74b02b471682f0308d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPYETFP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHs5mYVdBF3nQREjl2jG%2BKded%2FQjTr7jjRuO35rRA8%2F8AiBYyqZ8wlaAJWdyXyEPsW6mjU%2BX%2BLUpVXuTJHHm9SMm4SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2BHVzaK21r2ylEv1KtwDlI%2FAEfnNf6KQ11YXqjZ9BAG%2BbotF3TSeMjJem7%2FrrTUSLqhaeMOHkZtHXETMVOBJ0QTifNeIGAzT%2BUBPdrIZgpHCatx%2BTe1b5sgwo1ED7a60N07rbmRgCr1wN9B%2F6082fz7EhOcfM8kC%2BT0dsU9nOVU2BJqUMqLkOZ91g0dkKwXUun141j17TbrMcqmqss5s6d04%2F2l9%2FkbczD1%2Bj4jluBIJGSS3QF2WdeZiVmbuJYKpjkT4vXckK87HzAc7fQp%2BYfeM8nlT2qrEB3xuwsOSeU9WBcNDh0g45q2iaRpYjbs%2F7pcapbLqE6IpUvLeMrK1jkt914TxjM%2FKiUqsmB%2BMfmBLecP4IMqY9FVufUk4drfg9cY8Z6biGaoU4h1bycFbyNEE2CPiI3kYmsN2lmAlxffjS7KamtZxNdD1o7pQ%2FDUT1fujr4P97L14dDpHNH2dpg2kTGZ6Y5mJ%2BPoMOrRfS7SfCIRa9UV7GSBjdD2HPrODIF5nCnj7HWV%2B%2FQxl2dMsHBOHMUAP4Xrt2V6uN5mtM8az7LzU8V6VboY0cP19gEOL0H08Gz%2BDyZjAutN3H8LsIYKRBC5T1OlTTxByDK8xjAVsLKQTQDmA%2B6oQFq0UzWnLorIsg%2B132FTzsVUwhOzAwQY6pgGnqULOYb517r5r3ThGi6sAu5GrrPwYrEx41VcuLazo2ZCxtByfJe59EJsrY6a%2Ft1kYGlp5dzb3JzC%2F85Lr2jsJWFJSZCdHoooBIsroxRCQOFELo0RSdDiclse77fU7hKZWhpUXjJkyPWB9FK4FvRNaIWeDGNJPLDh7sKdEB%2BjHcws10V2XRNAOCubXX7hi1xT5hszH0ewTshSP1x2aWAkbi4ERMURQ&X-Amz-Signature=7ac221fbc2e5c0c9845858b0ffbafc8691b54c16c70aff1c1c0e7a537c4e417d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPYETFP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHs5mYVdBF3nQREjl2jG%2BKded%2FQjTr7jjRuO35rRA8%2F8AiBYyqZ8wlaAJWdyXyEPsW6mjU%2BX%2BLUpVXuTJHHm9SMm4SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2BHVzaK21r2ylEv1KtwDlI%2FAEfnNf6KQ11YXqjZ9BAG%2BbotF3TSeMjJem7%2FrrTUSLqhaeMOHkZtHXETMVOBJ0QTifNeIGAzT%2BUBPdrIZgpHCatx%2BTe1b5sgwo1ED7a60N07rbmRgCr1wN9B%2F6082fz7EhOcfM8kC%2BT0dsU9nOVU2BJqUMqLkOZ91g0dkKwXUun141j17TbrMcqmqss5s6d04%2F2l9%2FkbczD1%2Bj4jluBIJGSS3QF2WdeZiVmbuJYKpjkT4vXckK87HzAc7fQp%2BYfeM8nlT2qrEB3xuwsOSeU9WBcNDh0g45q2iaRpYjbs%2F7pcapbLqE6IpUvLeMrK1jkt914TxjM%2FKiUqsmB%2BMfmBLecP4IMqY9FVufUk4drfg9cY8Z6biGaoU4h1bycFbyNEE2CPiI3kYmsN2lmAlxffjS7KamtZxNdD1o7pQ%2FDUT1fujr4P97L14dDpHNH2dpg2kTGZ6Y5mJ%2BPoMOrRfS7SfCIRa9UV7GSBjdD2HPrODIF5nCnj7HWV%2B%2FQxl2dMsHBOHMUAP4Xrt2V6uN5mtM8az7LzU8V6VboY0cP19gEOL0H08Gz%2BDyZjAutN3H8LsIYKRBC5T1OlTTxByDK8xjAVsLKQTQDmA%2B6oQFq0UzWnLorIsg%2B132FTzsVUwhOzAwQY6pgGnqULOYb517r5r3ThGi6sAu5GrrPwYrEx41VcuLazo2ZCxtByfJe59EJsrY6a%2Ft1kYGlp5dzb3JzC%2F85Lr2jsJWFJSZCdHoooBIsroxRCQOFELo0RSdDiclse77fU7hKZWhpUXjJkyPWB9FK4FvRNaIWeDGNJPLDh7sKdEB%2BjHcws10V2XRNAOCubXX7hi1xT5hszH0ewTshSP1x2aWAkbi4ERMURQ&X-Amz-Signature=a144c341e64377f75538cbdc8b6414771d8f68274807607a1a926674061ecabb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYNKNLO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHrwQh%2FfLa5J8h3gBA1LNKWV3O3L%2F4xyGFLUvjXUBQm%2BAiBbUQbMoTCcFurCOQfkkGma6QueLYWilQsSmPIabyyHuiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNFEWVClaPId34%2FAKtwDqp1t6grS7yfbyuVV0iPx5SMpflwPO6CpVG9lsrTyyLuSQ6nDzJaO0LBSE%2BGfRUGpbdUTClQP6KHMGqytFIdLZ2wkgNLKKiiSnBfyUOijP6CwKHNKJUSxU8QafokK7qu8ghxiv0CdK43YzlypICaOTbEOQqSoImdyeiEQ2BRVtHAk5ok5nZrx7AiQqd96i4dUvdH24H6Fx38NWtfD4ea0dI1supwOnR032X0J1pJhgQteKKsUV1A5BVOckTCGGd%2BpCsIohRwEaOINyJmds2VdzNGRqxrwIPlIPnJIM6KueZcaZt3kIpA9LYqFrEL3k0ZM2CF6CLnaU5%2Fo7KhcBL62dIkY5EVO1tWI21X5Jb07AHh2rTUc2A2KrWU7pgU4DPuCDWMLVzvSFH9LJ7TGPFQ1FsiSABTkRzCkwgJpyYGUSvlIOIoPTQQc3CZORNZi2v0gBmjBmJ%2B%2BRBme3RaUJcRAaJMf6DZAmU7D8Aqe16C1MezUlNnGr65rIcGdSCvTuegsnhSDF25p8SroEKpfzaYOn4wXGzTlOjCqmWdhLJ0mvke5qM6X6CxFrwZDxUZDnX%2BycYs4YGQyvjCF3GKqCUYWwVgOjNoznubydlcrbvPPeJyJi8j1Kds9JtTFKMkw1OvAwQY6pgELw%2FJUfyPj70QxE%2B8ulpEDDLqYF8gcdL5GDe48rkUujbMUVej%2BCug3LCHCvfXvUMwJZ5rtOz3cit2hH6boKqv%2BDpKNlAx5F0RdHkCiEJ4JHApgT%2BYK%2B5Y6q14RJLUOHf9tYXHzlvHmkcVZkwnUEVVbfyCkThhTiXduMGr%2FgtsgwOPjgsy2rBzk7ydbEM9DZCcsg0CR%2F6zxi0Pc7JKgCx66INmJviua&X-Amz-Signature=f26470219142e91a87cfac810135c1b61cd29ac9d3b993b8647a9aa6de08f96f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUO4Z3Q%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC2Jt31lCODEC6bIk%2FrISmGm25u6QbrKrGgeLgY3LQoFAiEA%2BkYksLfiKbjGy7zxuq2qBCHY9cBc2GnUC5zwGpHE9SEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRXCiZdsSMbseeOcCrcA1Uqlrx63%2FR%2FeexBnmbbhc2JadmESVR%2FnJYEh2Nkl7flMLFuak5xYCWsI%2FJQ%2BZ%2F%2Fz5EEil%2Bbf9vXFZNAjuDn8bgzv0nASFyY9C8e7r%2FYZfJlpKBxr1iPvhVpskDy1UbX19XMnVl2aaUydD7NEoYJO6c5Hb4qr4lf6g2K25kbb45obDd%2Bsi8GO%2BJqpUJRn8phLo8uo0KZW5Y1oddZKAw2fwKXEo%2F2Rn4Bo8f7EV7MAMpSsgQ5%2FKAnzHu9TrXpwN4BpY0%2F9ynu5rr%2FzgL9WWaVGEfGTE0yJDOT5er2JeYz6YNhbMxd0IU4vsivl%2FcHLr8SUFBBuAUKx5095lzdl7CP2lE1k%2Fy6CyjnUlEW3gFKhZEf4%2FENkbZ7eAqmaoxgO%2FvI0sJOPMZOrVIFdiWVXBbSZifglnSpAiuX6OygpeuO1qVZ90FpvSCvUsJbWk9NUAV1d2QnFri38GsGr%2FWXxQlwnYl4nCPonezaLIEeva3WMALiZfc6uInWON8A21%2BtATkEWGLXHuay6XJ0SQYwevxHh%2BZ%2F5FuOZbs0cm7WIpk3yV2NbkhhAbWOO70TZPFXQqEJE44pCUkjCL3J8k12K5oAEDsJbIxW68cSg4r3Vfhr3Qt22pmT7SzpoWNbrGP4MOzqwMEGOqUB3uINwnPZlMINnWPdvdEX3V7lvKDyhZZVpF0oIrzs9JPaEISE6O84wpTMS45BinIZUJB6XM6UCE7YRTji0rtgxy3%2BKHpphj6sOA7AvNNnBPbjWMyYlBL%2BoaWJBSwFBMwzdWwwZ42s5uIcDD796dfAdIqMii4P8R3iPjrCHtORC9Iti2Xh5GWEBfAm1bNrGoEoP9wYezhN9B8RppbowX%2BHDywRbFWE&X-Amz-Signature=70896c99202529cb619daecfc8ef76567ded4a08bade5ff6c3a7747731075c24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPYETFP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHs5mYVdBF3nQREjl2jG%2BKded%2FQjTr7jjRuO35rRA8%2F8AiBYyqZ8wlaAJWdyXyEPsW6mjU%2BX%2BLUpVXuTJHHm9SMm4SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2BHVzaK21r2ylEv1KtwDlI%2FAEfnNf6KQ11YXqjZ9BAG%2BbotF3TSeMjJem7%2FrrTUSLqhaeMOHkZtHXETMVOBJ0QTifNeIGAzT%2BUBPdrIZgpHCatx%2BTe1b5sgwo1ED7a60N07rbmRgCr1wN9B%2F6082fz7EhOcfM8kC%2BT0dsU9nOVU2BJqUMqLkOZ91g0dkKwXUun141j17TbrMcqmqss5s6d04%2F2l9%2FkbczD1%2Bj4jluBIJGSS3QF2WdeZiVmbuJYKpjkT4vXckK87HzAc7fQp%2BYfeM8nlT2qrEB3xuwsOSeU9WBcNDh0g45q2iaRpYjbs%2F7pcapbLqE6IpUvLeMrK1jkt914TxjM%2FKiUqsmB%2BMfmBLecP4IMqY9FVufUk4drfg9cY8Z6biGaoU4h1bycFbyNEE2CPiI3kYmsN2lmAlxffjS7KamtZxNdD1o7pQ%2FDUT1fujr4P97L14dDpHNH2dpg2kTGZ6Y5mJ%2BPoMOrRfS7SfCIRa9UV7GSBjdD2HPrODIF5nCnj7HWV%2B%2FQxl2dMsHBOHMUAP4Xrt2V6uN5mtM8az7LzU8V6VboY0cP19gEOL0H08Gz%2BDyZjAutN3H8LsIYKRBC5T1OlTTxByDK8xjAVsLKQTQDmA%2B6oQFq0UzWnLorIsg%2B132FTzsVUwhOzAwQY6pgGnqULOYb517r5r3ThGi6sAu5GrrPwYrEx41VcuLazo2ZCxtByfJe59EJsrY6a%2Ft1kYGlp5dzb3JzC%2F85Lr2jsJWFJSZCdHoooBIsroxRCQOFELo0RSdDiclse77fU7hKZWhpUXjJkyPWB9FK4FvRNaIWeDGNJPLDh7sKdEB%2BjHcws10V2XRNAOCubXX7hi1xT5hszH0ewTshSP1x2aWAkbi4ERMURQ&X-Amz-Signature=b544499ee3ff8c582f13bb0941da2e4654f06f29906c0b71aa2c1c841c0181b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
