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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=f113843571a7fb3cd89c1ee1cd4715b734ae4b84701fc5544a0d8ae45f649b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=b179664f676c00918f9b8427745ecd53460c9005555a5200466cbf08ddb8c733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=3107f190690f2907e1d46d6a901144285b36bcb377d89acc76f88c63d13477f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFKOS5JO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkEHeNOL96CmaxSHrApmuxUBC3cibJHN%2BPVlyKt5qonAiEAjyxsdhFw8e7up51a8xn6QI6GXbiiKeHrGv71cooVJp8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMgEqUD2%2FCcuhsBUircA70AoxFCwhuSvjMfzCmKTaunFJtDY5ucEzmwSzG03sQQEgtwZpSYDhMpvxTuhhzjZnfRKxPuiAA8p3QYUIyiyGHwDArqu93J3IIitiNfmRHBba624qof2eeH%2BMWZkenFy%2FPJm66fRaUoqrR9YshnNT52vGUFmdF0rQtUDZDyK%2FoC6ZrYBnA73JumLv657G721q7CiwDrkSSAjgszt0g%2FT6MKIg300oSZ7WwojVfUIqLDwv4%2FOT%2FNhYR3PLG75rVwuiDasPNDLf0buubMRCCh%2BinjnVlc99eMlgTErhG26rx52Zy6OKPxIIxf1OO2%2FIzLnZUS8RtYDqv8pGaw8CKzZQiYRu%2FM%2B1cQ1MuKHgMtR7AOScPTpCKoKf12X%2BAs1U5EZ2WY%2BU47wDjSylindaR2yus7BBionHrPmnlrvF9gOdvFnxy9MF1d2tEVPCPKugXtwl8f%2BQ%2ByZP66kGq%2Bc49kGXKxyfUafH4gN0WY%2BJWhcGl6HyrSkf7JWrIpTtLe0TpmYsI1asTTwLXQLIHiqJJL4tI3rVJCT7ViYkEZ0O9DBHUxIUG6%2Fuz0nqXi9N6cY4ujnn8Yfl%2Bu46sFNcoOJbDnf30Ah6QsCl5wQ%2BR9IJt7xH1%2B4EIo8pG%2Fgh%2Fux0IuMNiarMQGOqUBExsFAVTVrgta2fWAfRR0KcLF%2Fs%2BmKq2lFOCRG%2FMKIad1iRzslzIAVHj2k3lqocyXKgUX4okFfu1EG%2FKLZBpo9SDHUnCz6AH86%2FiLiqJrKfGrVe5bqdL4Km%2Fd2jU3CIucd035SQoZgocs5FK9x8N8lRyIH8tv9SnKb2vZoNvf678VlmCGlePOtCZUJ%2BoH2EVHb4HqADtMxt6qJLY7fFfeoVNNVeNO&X-Amz-Signature=29733d92077448bcc012cd1161a092bada2d0f6228a4c2ee74b16645bc0662c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJUA4SS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ZL0WLYVHE%2BTRPAvd2aFi5EpE1M6Yf0bw5Pp70J2uKAiAd9c6JuaziDdEEZ%2BulB7suYturVaF5ZVx6ltoYc7rd4CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0K52XqIyTDlkFrXeKtwDuBqD1xc2H%2BR0okYsbvuiKiDCn9y%2Bwrk4YdeC7BTHKjj5BV0u4RCgfB5chYFQHDxcVLU%2B3UUsWS3Tj3HMjRJ83aE3XwVBuaQlMquutxOp3DCTi83rRDBmKKt32Qm2G9xkC0LKgEhP%2FvbM3JZ4j8oWcBcKMKZKMnxhWb1OLPN7eOqE8yd9vFRQA0Ro0lukwpCwBdyC8CNAa7dv9S9zu89VnqUa%2BBSzuId6luGil8KCPXZknwZGO%2FAgRgADf4FM7iOtWrxOrwxJfDS3qM5m2UXO0kTEZywN%2BKIyyqSManTaIo3QxxDlU0BK7T7wHx8XtbAoA%2BSYKX8Nvn2EVPg4d%2Fj0HhND3SASdOcFzE0lWZty8EYvQRsyW2FrkEZwosJjrGgAvVbRgXSFZXLPTyZnDkysqbYla%2FGOKHzEx6zgmaSjULBJRCk64zDdUevSEjp%2BzzcgK3Oo%2FKJ0rKaXu5E0M4JQQms3SRUU11Iz7Gq1fRTn8At1%2F9DCAyAgBh7mmER2uuCKgMleA9%2Bb%2F1D6tGG3B%2FK1lmEWumE5DYHhuNMqeneVsKZhJEABH7fwAfW2wOVaNmufEROawEJjwQ821L8dqAHildir1z7qcWgkwNkFKeY1Ns3f7Y6UxrOFCGY4XdowkpusxAY6pgHYKQWFktVQSXYP%2B1HNEjur%2F%2B%2FMC3%2Fmp8M19N%2FzsXlzwXH3O5Lq1JdRlp0KT1wlD8LquBhGDzJORnJfRlR1ZzzPDYJ1FyBQ7j%2B4EZWPJcpdxwTIDNJ7bLZ2DcjscIGqLhWf6VYOMrF2XEaZqBxdvPNwK7%2FaYJUlYRxWw7B4SHbYW6o2PEqcWo2O2ED9LsQM%2BgL5g88wN1lMvas2hoNIZgTEx9DZc%2BoS&X-Amz-Signature=f17dca0112b538683b6aefce9445b8551b6d46955166429b02c9617555e13765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVCAP23%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDmDlsVgNShJBr%2B3wGsIJiDThA1ela156GsUd2gsZADdwIfL1oKrIVoFX6Zpz458pJLruxcJMyIBKOWyYXEDUm%2BxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi19XNXJXVRq8uPgvKtwDESQukxSf9LsLjAufx0pUh8EQ9oCusD3e%2BjxfEhiQcF2urXrkGTEc1ehWCzpN5p%2B1Ne6p5rhHsGd6htjDjhz7nB44JC59G%2FBwBV804Km7PUVrhq3Hapqk%2FPIp2ksuFsUXDpRA6KHmiYVHsQjFEHPfja3ETI4%2FM27YyfnZaX7qyy4Hc3LmXAev%2BjjbEYQVBkMWZ5x13y7FnO%2B%2FUWdVOYfcy6G2a7ZNPwqbGJbt%2F1u%2BiXM%2BhCn%2FmUcMt9HXePsiL4mq5UBlEzIm2ZLNL%2FIdIEvFnFdQ%2BZgfjlYQ1tXUIrCqJiw39DCaO6jYASl83KJO5S1ih7b1z4V%2BaBqux3%2B6O1osBR1K%2BQFqDbL08KsaEvWbJIH9N9pN41FfA8nOHvxcYQkP1jKQUhXSyjRNkhga1ySJLcxVQaSF0c633XRxK9p2VUF24VCB3YNg3P%2Fi4LW%2F%2FOQKRduzA4D969XJugKIDC%2Bf1CL9r6wHOpS8RR0D12n4xFiA%2FNXL1dFAMuAv4kA4XvZ16OihZhLUjX0qmUYZStH1AhreHLJnIQoh31BTQlmmgaHwU4%2FgK4Hi6KTEEJh2QoIWuVwHHo7RHR9Sq%2F4ihGTkthvelEr4jKq%2FRfIwhZoC1YjkFOAwSjQQZeg1%2BxUw1JqsxAY6pgFYAqZwc%2Bdz%2BzB5B3GRi23A3OCz8wJH4Q%2BmH0VHbPIx64fq9E3qNXxQJK7xr%2Fsx3Je7yzic7qvC2QN5g8JnxNfjtXENO%2F%2BiOm8NuY3Qar8XSoyqaDFSmaUAfr8TADGPGrrBsWViZUfOR4ea9XDURAOwE42Vpva%2B2RjqoSM1NealNC8bY4TZRaEsbsdzj1eKWzmsuM6FxDqlfLZwOdfJw72nS8LMaCva&X-Amz-Signature=8da7b1494f91d2f6dd7fd89e68d04532b1af99386cbe60c525d59fd436c44576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
