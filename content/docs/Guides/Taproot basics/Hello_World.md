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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHC7ONF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGU5kwjbUe%2BKwJ7Rk9GL0jE332uAoJ6hWkG3%2F5V6KEBwIgH%2BQ4ZaUiBUi9tzJEhSZSPgHp%2B6GRAoDl6E%2FVENaYuNsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPwHIcUPjQ2fdxksxSrcAxioge%2FC13irtYiuksHzVxL%2BF5yibCj2nKemMgzZAi8VT7AxWRvyJu9Bj9HhFa5O7sLcGZ8QeqGGJsHWUTdSNbfNSvGlnYNLZaJCHSjQyq%2BAzuHOi8irKZsEPito6Wc0djD57xUkq2CgCrvmjwSCkf6HU9Z2G9YA2ssIi1HITWjuZiGM2vuexZ%2FQaUHNuLddxirpaB8GzS0E5oq3vqpHCeSUucCdK%2FemuV4SAY5EKqpQkoAeV520uc4MsVDBv04lFdeQRN7wAKmA35IXhp6XXoWEXFoLAmkM8r5L9eT71KRgtW%2BCAnXTwazsfO7MSoqlhBa8ZmXPnA6M1vTuAyW6KG02HQwP4cuidEuDOL3E1Xo7Y4zysOscMBbkkigPchFCbPudBXX0vmXKnKvfnS9fLkUGDpd8OwPv75eC2C3R96O6oypCokyZpBj7OfQQsTFvZKHRi4%2BYPGbOtwYyuJAg%2BSqYbv0AvNIKWgJzwz%2FV3qBOC9pDEaSooUcO11kzKjEwAjfhfXiTq3WUd%2BB0jrcaT8vuqGDPznuroT8kiyaDbjF1xRzvoppKG1ZPj7EgVOesY7bLHn%2Byb7cTUIpXB8SuspAqhVSva6XYisi5xq3Vv3isij5ZCpIsDjDie6r%2FMJeMn78GOqUB2uISmBBNIxdTTxm%2FpBH855W05ZibZ0s7WLBHzQiqmIgl%2FsPiLtH8rG2Ru%2FRFeVPkOJGrQ%2FAGue8PiW0vBg5sD4HopNikvMEdSSYEKdiicLrHBj7CvM7jco9eiLc5b99%2BE0GfcX9H%2FbvQefFtPzKgG2e7FaGRA8WEzFYWteq%2FXMMeZKGZlHyfDqV3p3o%2FxdZeSEvtLx%2BNHg0fv%2Fn1rJmyQE8mhcAL&X-Amz-Signature=d9c4149ca999d26cef391dcdf2817c6d7c0c20a17bb73947d8eaabc914909ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHC7ONF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCGU5kwjbUe%2BKwJ7Rk9GL0jE332uAoJ6hWkG3%2F5V6KEBwIgH%2BQ4ZaUiBUi9tzJEhSZSPgHp%2B6GRAoDl6E%2FVENaYuNsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPwHIcUPjQ2fdxksxSrcAxioge%2FC13irtYiuksHzVxL%2BF5yibCj2nKemMgzZAi8VT7AxWRvyJu9Bj9HhFa5O7sLcGZ8QeqGGJsHWUTdSNbfNSvGlnYNLZaJCHSjQyq%2BAzuHOi8irKZsEPito6Wc0djD57xUkq2CgCrvmjwSCkf6HU9Z2G9YA2ssIi1HITWjuZiGM2vuexZ%2FQaUHNuLddxirpaB8GzS0E5oq3vqpHCeSUucCdK%2FemuV4SAY5EKqpQkoAeV520uc4MsVDBv04lFdeQRN7wAKmA35IXhp6XXoWEXFoLAmkM8r5L9eT71KRgtW%2BCAnXTwazsfO7MSoqlhBa8ZmXPnA6M1vTuAyW6KG02HQwP4cuidEuDOL3E1Xo7Y4zysOscMBbkkigPchFCbPudBXX0vmXKnKvfnS9fLkUGDpd8OwPv75eC2C3R96O6oypCokyZpBj7OfQQsTFvZKHRi4%2BYPGbOtwYyuJAg%2BSqYbv0AvNIKWgJzwz%2FV3qBOC9pDEaSooUcO11kzKjEwAjfhfXiTq3WUd%2BB0jrcaT8vuqGDPznuroT8kiyaDbjF1xRzvoppKG1ZPj7EgVOesY7bLHn%2Byb7cTUIpXB8SuspAqhVSva6XYisi5xq3Vv3isij5ZCpIsDjDie6r%2FMJeMn78GOqUB2uISmBBNIxdTTxm%2FpBH855W05ZibZ0s7WLBHzQiqmIgl%2FsPiLtH8rG2Ru%2FRFeVPkOJGrQ%2FAGue8PiW0vBg5sD4HopNikvMEdSSYEKdiicLrHBj7CvM7jco9eiLc5b99%2BE0GfcX9H%2FbvQefFtPzKgG2e7FaGRA8WEzFYWteq%2FXMMeZKGZlHyfDqV3p3o%2FxdZeSEvtLx%2BNHg0fv%2Fn1rJmyQE8mhcAL&X-Amz-Signature=267dc5d9741b5000e2220e5a8172392fc15ccd24933e2fe29ad9bc4666cc1e10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
