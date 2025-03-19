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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3LHJDM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCSrhgsUJ5L39zOIVxQspwHg%2FnH93XsoGXFOOXjqE1GKwIgdsQSiQWBJhkF63AMSMYPfgZutwxm%2BLrpGtEywqCFg08q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBesg3JDbncKGIgXpSrcA7RPw2%2Fo29p%2FQCyO%2BIy%2BWNzgjVA0%2BxUqWtCLOqIhXchPPvqT22lEx1TQL64pqTbVZDxBry8O%2Fr0QFi6J0QTKk7wlWDXkEX0BJ3DytzvdCQl2salPOE77YOJwkI9Tts2%2F02WtfCma%2BiNHFr%2BpnY4K5Mlj0DjzoT9gTrQtNjJghSC5sNZXGNxXe69o%2FXfAD4EESgYmcgnuVe0bRy0yY0bwmvpmtrTZZhj4bf3NF4HKhsvACHFT9Q2eRCJYfBLQLREXJeT0uzFbyPdNVzgJ79VwjS7DNj7z0hBzghM%2BM%2FTMptTVw5hOcKwSwBePVKyxEZd0azCaEOPDJtkjCXD5gtYM%2BXWfXR6G1Cszu6Cww4YmLLeLlPxkZzKSpy5cjX1d4LvL5LEx8Tv7mary5uG%2FjzALFt75jfLOH6zqJ%2BqhlqWSHA8ROYSuNVTKb4ImE5aLTSndgRelcbZqvyuylcIrMX4gAnDNNW9SqFNqnHwGy%2FcDE7MhdVq3lm%2Bi33Y%2Bi6VqwSU7UOulyPLZP%2B0UY26IE9iUvitA7HX4C524Uw5BPLMmnpaMaHbHlLBavCFeCaQ0M6bSJlcTgPGFhzUc3GOD%2BWUXeLxB3zDctM0KdPb%2BwNWuRxn7LtGkTT%2BhNedeyvfHMOn%2B6r4GOqUB%2BS9y2g7VrD5U2HlRJYD1grE%2F3G%2BoHHU42JDp8JySo1EYUoDOov5Xg5h2T7Wwj7C6JshkaPU30lcm0BO%2BHLqMYKSCZThcvox3DugX9ehQ%2BuzFKCl8XxmB0%2Bx45XFZeWkUq%2BQpsqhujOC1pBdUpYgeWAAOy%2Fc1JK%2Ft9t9x62PlegEW8V0YTA56CkqKAnenKXTYc%2FgrjhMZu%2FKzikcbrqEIFWPBT6mW&X-Amz-Signature=6d593beeee99d3904fd9bbf3cad6276b89a3da2e140950fdbf7ce4dcc0088ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3LHJDM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCSrhgsUJ5L39zOIVxQspwHg%2FnH93XsoGXFOOXjqE1GKwIgdsQSiQWBJhkF63AMSMYPfgZutwxm%2BLrpGtEywqCFg08q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBesg3JDbncKGIgXpSrcA7RPw2%2Fo29p%2FQCyO%2BIy%2BWNzgjVA0%2BxUqWtCLOqIhXchPPvqT22lEx1TQL64pqTbVZDxBry8O%2Fr0QFi6J0QTKk7wlWDXkEX0BJ3DytzvdCQl2salPOE77YOJwkI9Tts2%2F02WtfCma%2BiNHFr%2BpnY4K5Mlj0DjzoT9gTrQtNjJghSC5sNZXGNxXe69o%2FXfAD4EESgYmcgnuVe0bRy0yY0bwmvpmtrTZZhj4bf3NF4HKhsvACHFT9Q2eRCJYfBLQLREXJeT0uzFbyPdNVzgJ79VwjS7DNj7z0hBzghM%2BM%2FTMptTVw5hOcKwSwBePVKyxEZd0azCaEOPDJtkjCXD5gtYM%2BXWfXR6G1Cszu6Cww4YmLLeLlPxkZzKSpy5cjX1d4LvL5LEx8Tv7mary5uG%2FjzALFt75jfLOH6zqJ%2BqhlqWSHA8ROYSuNVTKb4ImE5aLTSndgRelcbZqvyuylcIrMX4gAnDNNW9SqFNqnHwGy%2FcDE7MhdVq3lm%2Bi33Y%2Bi6VqwSU7UOulyPLZP%2B0UY26IE9iUvitA7HX4C524Uw5BPLMmnpaMaHbHlLBavCFeCaQ0M6bSJlcTgPGFhzUc3GOD%2BWUXeLxB3zDctM0KdPb%2BwNWuRxn7LtGkTT%2BhNedeyvfHMOn%2B6r4GOqUB%2BS9y2g7VrD5U2HlRJYD1grE%2F3G%2BoHHU42JDp8JySo1EYUoDOov5Xg5h2T7Wwj7C6JshkaPU30lcm0BO%2BHLqMYKSCZThcvox3DugX9ehQ%2BuzFKCl8XxmB0%2Bx45XFZeWkUq%2BQpsqhujOC1pBdUpYgeWAAOy%2Fc1JK%2Ft9t9x62PlegEW8V0YTA56CkqKAnenKXTYc%2FgrjhMZu%2FKzikcbrqEIFWPBT6mW&X-Amz-Signature=e3822b23c23a49ab9013ee49f6ee3116b47ff9c47d6b5b2b51be846fb70ccef0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
