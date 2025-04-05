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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR35LTK6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtQE41TbBtOloSeR79VRm0HqXmFMj9STRIk%2BDe0zeYAIhAIFP%2B%2BlcjYOYgfGsOPnKziJTRzFVwRK2hHP73RmLlNQcKv8DCDEQABoMNjM3NDIzMTgzODA1IgyOXVfOQj4p56c5J%2Boq3ANw3P8qL2WuFffE%2BE07jz3GVSZmlJznwecP8hpaqM61CpT7C73gGRbvN21kHaJ8waPxCbO4wjVJAyKBRQxyM3Y0WlNQ0d%2BKi6%2F47Hu8oQrl9Y63tIgjswak28EqlFwNV1YefqYpDdZuv46O5xabDJueqxPyZpNDpzoENQkHUMUr5FmfZVBmyB%2BUW74Qd1dwHQwtz3Qe52nqLKF0Cm3zDQhXe%2BHCRwqExOluU7dNyFOpzZJOf7CQEjOeXcCYXWX0PQyWP4BUzK96xKxo1fQzQzVdt1Wag%2FJArj8ILl68l70tPT0IVaPVsDJ1MPd87EIfo6%2FT5m8lz8E%2BU0K8U01f4ThQI2rutNv96vXt%2F%2FHDDYnWg6%2BHEVM9sv8QhU0vMRgjhy1y6fpnssZIQzFJyCoY%2BQ%2FlLH%2FMyKq3zSKfPSh8ywWcRQklUeWLMOn82u%2FdMqr0Sw7vPGhnMQfUzn6J927kzdNp%2Fz9lPeA0npfCKVlmtxbVjzz8dxB6LP38RTtfOKFuhW3Bt0xCIuyfe4QveC0yLJk77hAIdf7U%2FNTiKqxFGdB%2BVkQ0H3IT%2F%2FTBODxcuyvDaro1WAg5xy20sqp3AwvkQWF2HO2gNKYuDIHJ7Bv%2Fb3hXj1KC%2FmvpKXIwNF3FqTCspMW%2FBjqkAQbJDXNrJTiLRJYEZ2CuUqKtBcatkTCvrnksR6Q%2F1H%2BFR7ctSb0NL2mHjKdjAtzekp3XjysX40ejYKRAZchXbqDTG5HfuQKBTNi6JkS1FT8TpwJjPcSHHkB%2F4ZlSRBSlYZdw66egrKtW3xpReOM8AHrHK%2BzMzGq6fdHRSsVmkwx1v4X8UFNmGPH0Qad3yBO%2Fb4SAh0aeRHHTTZEeeT7JLfd%2BzYLX&X-Amz-Signature=e0dcc6f1e1291da16fb8957e4d844b0ca967356b93a05867e37fead25091b9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR35LTK6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjtQE41TbBtOloSeR79VRm0HqXmFMj9STRIk%2BDe0zeYAIhAIFP%2B%2BlcjYOYgfGsOPnKziJTRzFVwRK2hHP73RmLlNQcKv8DCDEQABoMNjM3NDIzMTgzODA1IgyOXVfOQj4p56c5J%2Boq3ANw3P8qL2WuFffE%2BE07jz3GVSZmlJznwecP8hpaqM61CpT7C73gGRbvN21kHaJ8waPxCbO4wjVJAyKBRQxyM3Y0WlNQ0d%2BKi6%2F47Hu8oQrl9Y63tIgjswak28EqlFwNV1YefqYpDdZuv46O5xabDJueqxPyZpNDpzoENQkHUMUr5FmfZVBmyB%2BUW74Qd1dwHQwtz3Qe52nqLKF0Cm3zDQhXe%2BHCRwqExOluU7dNyFOpzZJOf7CQEjOeXcCYXWX0PQyWP4BUzK96xKxo1fQzQzVdt1Wag%2FJArj8ILl68l70tPT0IVaPVsDJ1MPd87EIfo6%2FT5m8lz8E%2BU0K8U01f4ThQI2rutNv96vXt%2F%2FHDDYnWg6%2BHEVM9sv8QhU0vMRgjhy1y6fpnssZIQzFJyCoY%2BQ%2FlLH%2FMyKq3zSKfPSh8ywWcRQklUeWLMOn82u%2FdMqr0Sw7vPGhnMQfUzn6J927kzdNp%2Fz9lPeA0npfCKVlmtxbVjzz8dxB6LP38RTtfOKFuhW3Bt0xCIuyfe4QveC0yLJk77hAIdf7U%2FNTiKqxFGdB%2BVkQ0H3IT%2F%2FTBODxcuyvDaro1WAg5xy20sqp3AwvkQWF2HO2gNKYuDIHJ7Bv%2Fb3hXj1KC%2FmvpKXIwNF3FqTCspMW%2FBjqkAQbJDXNrJTiLRJYEZ2CuUqKtBcatkTCvrnksR6Q%2F1H%2BFR7ctSb0NL2mHjKdjAtzekp3XjysX40ejYKRAZchXbqDTG5HfuQKBTNi6JkS1FT8TpwJjPcSHHkB%2F4ZlSRBSlYZdw66egrKtW3xpReOM8AHrHK%2BzMzGq6fdHRSsVmkwx1v4X8UFNmGPH0Qad3yBO%2Fb4SAh0aeRHHTTZEeeT7JLfd%2BzYLX&X-Amz-Signature=2ff0aefa154a72c0d5707b35a5dc2a02f3177096ca691152383cd96e5518510c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
