---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPZOOR2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCss%2BXe4XO2vq6dsCR3cck%2FtYtQdYruYsscYo0FtZQoWAIhAKpfAszRhV7nkBsy5JPvEg8nvFFE3fl0%2B%2FAX8BSyTPKzKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FdyaVqKTi%2BNeTF74q3AMgL%2B%2BQhQBc4aifqccXPkjvse9vPsRE%2FmAgUCKQphCuOylPN6JIjFbmFoUDQ5Iv25MKlkusZCNx%2FfxJZ7bMTZ6JgzNtJdI9QDZ%2FOgaiHQ6OnaewT9GM9TrnWpCL5dZe9cuOKHUf8xaNnB0jqFN0ZCbjAPL6th6n3VeU7uWH8BhfYBHBJNSNr0UVUzaIeeqAdvVSmoxya4K26ed7iQvE5P9lLo7dRmD6XSecNNQd17lS4gk5K3%2FPQlkZ5p%2B8MU3HrzNg4567aB3RpNOYevUbuxIbiX%2FGjGWZqAdbeA7mZTwsM3yHRbxwE4C%2B5%2BtfFICg8zI3HxTUzORNjiqqVVxaTR6C9JKesm0lZwoxZj7b5XW%2BKq7lLx2e3kZ%2B%2FYPdK9RznCr1BD6gfmq1Y1TMiXXz9zDCb2Pzb3zkISrpMQsxduuLHqxy8glFcFGrxbG9DiaRbf%2Fwq8SiMKuEKYpi6zVE%2BYIsAmGZueucDROEvyg3TsVFIpzsARe4cwkbWo%2BDiw0evr9MVKef4Av%2BWM72ymB2C0xAJ60KwCbEBClgKS5taH%2FRsE0K3wtPJ3PhfcU6C8v9Dh4lBDo0%2BTkfkZuoGGoLsHg66DLrz996%2BX6NKIv%2Fctp8cXaknsYg3UF1PqYPMTCsqbu%2BBjqkAd53DSKsTx4D48hMNNoJhgM%2FIDkr7QSLzK1Beet2D4l3PN1xzMnd0VgaTwa1Hc4004362hbAVip%2FPkWSLUnXfEL4gEi9%2FvEXtgJdRdAPZz2fQWy9cfTBEbS%2BgxqpKj4vNg9DVawxRu7I2UKWvAQnK%2BoefEBrlnZeD0zZGfyE8CeX5ty5F3XJN7MY0nAttFoeKqj7tCnqAWTNF%2BQNxeoYSO61LJ6H&X-Amz-Signature=9c35b7aedecfdf11eca7f4ee40bc58b863c77f448d0b57ae0eef1922ac819545&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPZOOR2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCss%2BXe4XO2vq6dsCR3cck%2FtYtQdYruYsscYo0FtZQoWAIhAKpfAszRhV7nkBsy5JPvEg8nvFFE3fl0%2B%2FAX8BSyTPKzKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FdyaVqKTi%2BNeTF74q3AMgL%2B%2BQhQBc4aifqccXPkjvse9vPsRE%2FmAgUCKQphCuOylPN6JIjFbmFoUDQ5Iv25MKlkusZCNx%2FfxJZ7bMTZ6JgzNtJdI9QDZ%2FOgaiHQ6OnaewT9GM9TrnWpCL5dZe9cuOKHUf8xaNnB0jqFN0ZCbjAPL6th6n3VeU7uWH8BhfYBHBJNSNr0UVUzaIeeqAdvVSmoxya4K26ed7iQvE5P9lLo7dRmD6XSecNNQd17lS4gk5K3%2FPQlkZ5p%2B8MU3HrzNg4567aB3RpNOYevUbuxIbiX%2FGjGWZqAdbeA7mZTwsM3yHRbxwE4C%2B5%2BtfFICg8zI3HxTUzORNjiqqVVxaTR6C9JKesm0lZwoxZj7b5XW%2BKq7lLx2e3kZ%2B%2FYPdK9RznCr1BD6gfmq1Y1TMiXXz9zDCb2Pzb3zkISrpMQsxduuLHqxy8glFcFGrxbG9DiaRbf%2Fwq8SiMKuEKYpi6zVE%2BYIsAmGZueucDROEvyg3TsVFIpzsARe4cwkbWo%2BDiw0evr9MVKef4Av%2BWM72ymB2C0xAJ60KwCbEBClgKS5taH%2FRsE0K3wtPJ3PhfcU6C8v9Dh4lBDo0%2BTkfkZuoGGoLsHg66DLrz996%2BX6NKIv%2Fctp8cXaknsYg3UF1PqYPMTCsqbu%2BBjqkAd53DSKsTx4D48hMNNoJhgM%2FIDkr7QSLzK1Beet2D4l3PN1xzMnd0VgaTwa1Hc4004362hbAVip%2FPkWSLUnXfEL4gEi9%2FvEXtgJdRdAPZz2fQWy9cfTBEbS%2BgxqpKj4vNg9DVawxRu7I2UKWvAQnK%2BoefEBrlnZeD0zZGfyE8CeX5ty5F3XJN7MY0nAttFoeKqj7tCnqAWTNF%2BQNxeoYSO61LJ6H&X-Amz-Signature=2f412daae47e969c1c87d205fa14ce9c82050270ac9279dffef6646ab263d627&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
