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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIRXIX4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSLtV55jPdF9lqvMLiS2sl%2Fv2XP8NoXjajf1trzzUEQAiBP9KJwSoOroGKAJdpw3gOQgO5UKt%2Blhw5GCkyhNMtvYyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BWJgk5pdS8WFfkTmKtwD8s7d36q5o1ih9%2F6rHrJ4BErpCrOXheggqIWdSgkQrXFsUl6LCzAoXk79M5blT2ADjVtR8SYzMCDO0V1RCPRK74qFuhmsiWr3kRMTakZoUgnUx0E7c5GD8wvTPKMrdmXOI7nLi%2ByD%2FeErJG2rWVJ9rjG4rySzicqgwb2bKakqOldvDW53zvIBQFfDFUNlFQtOqpc3PdK9QAwtktlQdAtTutqr4oboo5rJkyxo3P3vws72g5LR6KNcZFxuSYEiwUzCa6BpTn5ghr%2FeotRHPadp%2FdZF%2B1EheKB9kssj88gJTiS4OWLjBQqTOG1Lh6J279L%2FeAVXJfMx32sWi44y5wkBkUMNWaND2zVgGA2YCJJ21gBlvhM1LNe%2BkiniJjKPwY5xsWtowRXdGNO3LwdjJeXHKZvMZEBWefB6FEH2v93wDVhRnX9H7sybEyS7wCJzCiFlyoKJk30REApBd0ukUYhNzwfmEAUdlsItfJ%2Bp9IZ32oECH5ply6%2BUjcQFyVj5AjJsQ9Frkp7e4cAUExk2qpvnL7V6dKBHsjOSd2TUgEGzIRJiOm6seVgI5q2%2FzxwOiuKP2FEP4F9lzy%2Bcji4qj0zDatNetdI6sHff65dzGlaQKdKz5YpnzMlk29yFoDsw6tLzwwY6pgFQ7Y2ZKfwHmgfvdLyS596YY7gsnFja7KvYjxrsnNqJu5%2F22QAY1G%2FjCBqe987jvjDTPGhXaDsYauMlfvY9u7NnqnAYeGtMK%2BGzCepWEyJTuhNx1gu6vdHuMVFH%2Fs7OvYaVIf3eDZ4e30d6JZYFmWRTDryaw5GFFBRIOp6jTWfsnLX%2BXIqODtPbZuIpyddQzvQ5nmOvfszHwTr5dweFo2tA1LX2EMFm&X-Amz-Signature=e8a5e9b474feb307315f01fdcef4a627704268d2311839b370319a0d42c07dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIRXIX4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSLtV55jPdF9lqvMLiS2sl%2Fv2XP8NoXjajf1trzzUEQAiBP9KJwSoOroGKAJdpw3gOQgO5UKt%2Blhw5GCkyhNMtvYyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BWJgk5pdS8WFfkTmKtwD8s7d36q5o1ih9%2F6rHrJ4BErpCrOXheggqIWdSgkQrXFsUl6LCzAoXk79M5blT2ADjVtR8SYzMCDO0V1RCPRK74qFuhmsiWr3kRMTakZoUgnUx0E7c5GD8wvTPKMrdmXOI7nLi%2ByD%2FeErJG2rWVJ9rjG4rySzicqgwb2bKakqOldvDW53zvIBQFfDFUNlFQtOqpc3PdK9QAwtktlQdAtTutqr4oboo5rJkyxo3P3vws72g5LR6KNcZFxuSYEiwUzCa6BpTn5ghr%2FeotRHPadp%2FdZF%2B1EheKB9kssj88gJTiS4OWLjBQqTOG1Lh6J279L%2FeAVXJfMx32sWi44y5wkBkUMNWaND2zVgGA2YCJJ21gBlvhM1LNe%2BkiniJjKPwY5xsWtowRXdGNO3LwdjJeXHKZvMZEBWefB6FEH2v93wDVhRnX9H7sybEyS7wCJzCiFlyoKJk30REApBd0ukUYhNzwfmEAUdlsItfJ%2Bp9IZ32oECH5ply6%2BUjcQFyVj5AjJsQ9Frkp7e4cAUExk2qpvnL7V6dKBHsjOSd2TUgEGzIRJiOm6seVgI5q2%2FzxwOiuKP2FEP4F9lzy%2Bcji4qj0zDatNetdI6sHff65dzGlaQKdKz5YpnzMlk29yFoDsw6tLzwwY6pgFQ7Y2ZKfwHmgfvdLyS596YY7gsnFja7KvYjxrsnNqJu5%2F22QAY1G%2FjCBqe987jvjDTPGhXaDsYauMlfvY9u7NnqnAYeGtMK%2BGzCepWEyJTuhNx1gu6vdHuMVFH%2Fs7OvYaVIf3eDZ4e30d6JZYFmWRTDryaw5GFFBRIOp6jTWfsnLX%2BXIqODtPbZuIpyddQzvQ5nmOvfszHwTr5dweFo2tA1LX2EMFm&X-Amz-Signature=5bd7a4f654bd139807f6ca8db53293ef583c85aea73bfb100f99f7cb097fff75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
