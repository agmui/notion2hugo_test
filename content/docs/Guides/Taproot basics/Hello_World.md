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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=fc10639a2b0701ffec7d13fbf668a68738cf33bd3bd979d40f09ae14465c496c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRZH434%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJElwTFrAznpuhZoJC%2BuYL7gfhsOVjc0V8T94kXZr6AiEAvPuvQWTPrnwHlMgd7VIBjXjJPvPS72UjZuvEetyVsGEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW7PeNPTomTPWTCaSrcA1lQ0ORCEz%2BlnO8CWamItMqVLMzA7uMMGYMApkdXajXK6N6cNZvW7xXUaim%2F45OPyVlyWli%2FO1OV%2BLsGcY5w4giNPVjc6EBolH%2FX8xyL2hiNCrfqrmNL46T6%2Fu825C1jr%2Fa9Kj%2FBMjfby1MulGRGVfnEgS0vNDKOrmbNJxlo%2BtisYbN8jW52%2BRi8DXrEQXkezRs5vqME2de3LcCkAohZdHbUilV6NP%2BSsKLS93MRK532O9Zwb%2FRoWij3%2FAfhqMjG0pjxs%2B5yYqFaWyDT%2B4GC6dWFeTEodrs1%2BDdq6PQd7so23ZNXx0hDtNNs%2BGlsyRBp86QEfJi54hlwqyuIIygiA1QN6ETyLuGf46fCiDpZ1wQXuePro8TngCGfno%2BvWl6D0Fx%2BKtQpfABT0HYr2oS2EnMD%2BxwNlKx%2FK7ZUJ0%2F2fKzfsGTr5%2BSREh4poxBQm5nmdmfCLg0I4Qw%2FiZXnzTJOXblLpKNPEpYdJvsI7Bim3PkILdP2fZ0cOyZg0Bbv6bCqQY7nvpd4XWDvbPkP1Rd8RlYft%2Fd%2B3IpVuYdVeKEWl9PGziX5swCwFz2R0bKje9o7uTSnEEau3OL%2F0054hykccFh67wQrEPm6GNrPa23t7Q3hNzS7x1Z2reZXz438MNzA4L0GOqUBkaJKxPkKxAKkrXN6XAWSj6x3CA1EeBI4m2JR%2FBO0Vzbv68%2FcVGYmx2Cqn4S8PrQPgQMGsgPU0raf5DXHJ2Aiw6aJcesEP7uyPGIAepBK7SCeUNZlJzN1s0THxkEUlNoxNk4bzgLGD1JYy9u7MzyY4wBaj1oCyWKsEPOyi%2BQ15mGI6ORBdX4nqhh%2FITKuHv62hQ1b%2Fdqu9r%2Bc33QU3HG53DP2DxKN&X-Amz-Signature=6f1033ce696acd6d4f956edbba9ddac381ab224b1a7bb4773dabdf9bc22a1de3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
