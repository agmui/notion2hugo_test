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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3FLZT4E%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDMbgY2e2mNk1hj9fxls2UXuuwD6EWxK1iolc4%2BRob58AiEApRePEvNdDN9xi5FbszmCoMim%2BsWxGN6q7CYTAR3QhGsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5zXE4KNM4AyNdUJircA5VpVnRwUhrvY2wRKmv5m9WS84kPCM6kkc0A6DneykD%2BmtUr52tSkCq%2Bu05AG8F0rRFFNFzUqjZTwEANgrATx3Gt3xplIQOXawVAT%2B3qVzgW0WF%2BQI%2FbNaxcO7qGoBfZVQApwKT9PjVMCG3xxEcduaoQwjVsd%2FnFv3%2Bf2opoBLrOb8xrEyUw%2BK0OmpXPJt5gS9R92r0jLCtvJn%2Bz%2F%2FtW1qIaInJF97aTwjDrm0FVfTxG1sk88FP5qbCGneDF5Qq5%2FvdgccaQR59zXL3KauLZCL2jSGPbrjekaGAZuOq0z1VA7AlP%2BxSx5XaoN83HPsiUwdxF1eusZ3B8ARaYQToGcEbboCo4cBH1gbed405dO0KgcwNVz69IXn6jw%2FX79kcwBhfYctwg1QUeJc6MhzFy%2Fbx4gx3%2FqIUSmJM1mVrtmVmOUcyVqohx890%2FKxG2cVdOYE61ohmE8Jerm%2FIOxF0X0jzVdMiYsLVycQxttHHLEoldk6EP5xJioRyWTh33VFDdAUHHif00s7DqwJo0cFElYmuyaB1m26MEaO4T1ry4Q1Re1ypmq9DzR7F%2FM%2BAvow1%2FygW93AsOe0hkvj6BoykIlPxKLoz4BtmRxbgsJhWazbpMIe6RBmKWBzWJG0JcML%2B4q78GOqUBXaTSJEzP1m7s5J%2BD%2F8JEeR85lvxfRF5NucT0PuBCVH6u3GeVTtzMjlXQQ%2Bne99e7iOPr5%2BY0xQVRV1ghcXY5DIcvZ%2Bj9BSuE43eAhW6%2Bq0dUFM0cgmfdgJ6MixUp0%2B94dExgejI4vos%2FWSLQ%2FGx3cFIj11qE%2FATCx68FzAew%2FhI7H6cqT3BIbOS%2BsJAbbG5sYclhV6IUjZKL5OYLHv9jn%2FsCkeng&X-Amz-Signature=67c48dc7df5e5a8371b9fab9d80d82eb61a017b5bcea32a178d96b724e7101b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3FLZT4E%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDMbgY2e2mNk1hj9fxls2UXuuwD6EWxK1iolc4%2BRob58AiEApRePEvNdDN9xi5FbszmCoMim%2BsWxGN6q7CYTAR3QhGsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5zXE4KNM4AyNdUJircA5VpVnRwUhrvY2wRKmv5m9WS84kPCM6kkc0A6DneykD%2BmtUr52tSkCq%2Bu05AG8F0rRFFNFzUqjZTwEANgrATx3Gt3xplIQOXawVAT%2B3qVzgW0WF%2BQI%2FbNaxcO7qGoBfZVQApwKT9PjVMCG3xxEcduaoQwjVsd%2FnFv3%2Bf2opoBLrOb8xrEyUw%2BK0OmpXPJt5gS9R92r0jLCtvJn%2Bz%2F%2FtW1qIaInJF97aTwjDrm0FVfTxG1sk88FP5qbCGneDF5Qq5%2FvdgccaQR59zXL3KauLZCL2jSGPbrjekaGAZuOq0z1VA7AlP%2BxSx5XaoN83HPsiUwdxF1eusZ3B8ARaYQToGcEbboCo4cBH1gbed405dO0KgcwNVz69IXn6jw%2FX79kcwBhfYctwg1QUeJc6MhzFy%2Fbx4gx3%2FqIUSmJM1mVrtmVmOUcyVqohx890%2FKxG2cVdOYE61ohmE8Jerm%2FIOxF0X0jzVdMiYsLVycQxttHHLEoldk6EP5xJioRyWTh33VFDdAUHHif00s7DqwJo0cFElYmuyaB1m26MEaO4T1ry4Q1Re1ypmq9DzR7F%2FM%2BAvow1%2FygW93AsOe0hkvj6BoykIlPxKLoz4BtmRxbgsJhWazbpMIe6RBmKWBzWJG0JcML%2B4q78GOqUBXaTSJEzP1m7s5J%2BD%2F8JEeR85lvxfRF5NucT0PuBCVH6u3GeVTtzMjlXQQ%2Bne99e7iOPr5%2BY0xQVRV1ghcXY5DIcvZ%2Bj9BSuE43eAhW6%2Bq0dUFM0cgmfdgJ6MixUp0%2B94dExgejI4vos%2FWSLQ%2FGx3cFIj11qE%2FATCx68FzAew%2FhI7H6cqT3BIbOS%2BsJAbbG5sYclhV6IUjZKL5OYLHv9jn%2FsCkeng&X-Amz-Signature=400dccdcad505b05935ddcadd6d27945fd08401508f05f60929a844fafbaf0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
