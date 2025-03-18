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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676HNNEXJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICaaZZSE3G2uX%2Bce%2FTkaOyuA%2B1qvhX3qvnCvZlcbTYDXAiEAk%2F2z3aIZTKbdNoUIbjnoT2Texo0GBXEXiKQfU26F2tIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDhje56JQse2P%2Fy%2BByrcAwEZ7wbAZ%2BSs67beVfBiRHoY3dexfUZBVLdr0mMg6eGqXoQCucMFOG6H5q4d6GLURExgpknLGmRso23C5P5WjNFUwDG4LUciVCnqIInY0HlncW9kFurVu%2F7Ka1DL77jGxgS%2BMMSR5AnMmJ8w12hEOQb4Trn2z%2B1w9Zm5HmgqcjBRf2u6sPkgUHvJ%2Ba%2Fe%2FUu4lcbhbJLGiZNYK9sQoXYxGyXVD%2FQ2RQMH71Y5ckjxfqq5PUuhYKjEJrvmayQ7IyKUV1oD0o15id1aezWb%2FkXfZnoXsMox4X%2BuYDFln4AaJsjNV1BN7BH2MF71%2BvDyoyh5BwxuF1UZTn9sfANYm5vBp3XJojDI6x83vBJoxSZzANGfX%2FjPj0wY9%2FRzPeioTNHvvSlBnwF1BnoGuEIuKAw7K2zwirDEL5xtvli8ALPkfek%2FFs3F89jNih1BKBBr%2F3AVeff8%2BY45lry%2BuOdgnalmFHo0jTnsKZcEXAfx75GNlMq8uRMWXEVwGogbzhtZKIqI4yuOyTSlQXVA5xyAe0xNhTNR3k9Xqp4sb6KGdnDdt2%2FQyUFVKSRprmFDD4N%2Bx4udlbzmdny13ptuunBWY2U8Hr8fjhLLVr1V3k2vq6Wk5kx0uWtjLiSleOLbtHcBMNb05b4GOqUBaKy7qytYCtmLGD0dtbTXnTsZ%2FG9cf3g1mWCgemaqwFd8Tp2kJWCR1FQx3eZ2tV%2BDwUlgnsULgcyhoG%2BDUSDasQtu8JFL5KBTMsl2gZZjxx7i8%2BJRTPkUy6CX2Ar8FYXIsXvcyNqfd4yT%2F4XcV8tAHriGK64S%2BlGPsXtfIBpUDIZ%2BxiBpseIE39SS%2Fi4ZB1C96%2F6W0ccPEPOIi4I242YbbKylDUsc&X-Amz-Signature=5d265ccfe0ef607cec90b6b52f9fc644da6638f6926f632755b7b7aa29d11876&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676HNNEXJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICaaZZSE3G2uX%2Bce%2FTkaOyuA%2B1qvhX3qvnCvZlcbTYDXAiEAk%2F2z3aIZTKbdNoUIbjnoT2Texo0GBXEXiKQfU26F2tIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDhje56JQse2P%2Fy%2BByrcAwEZ7wbAZ%2BSs67beVfBiRHoY3dexfUZBVLdr0mMg6eGqXoQCucMFOG6H5q4d6GLURExgpknLGmRso23C5P5WjNFUwDG4LUciVCnqIInY0HlncW9kFurVu%2F7Ka1DL77jGxgS%2BMMSR5AnMmJ8w12hEOQb4Trn2z%2B1w9Zm5HmgqcjBRf2u6sPkgUHvJ%2Ba%2Fe%2FUu4lcbhbJLGiZNYK9sQoXYxGyXVD%2FQ2RQMH71Y5ckjxfqq5PUuhYKjEJrvmayQ7IyKUV1oD0o15id1aezWb%2FkXfZnoXsMox4X%2BuYDFln4AaJsjNV1BN7BH2MF71%2BvDyoyh5BwxuF1UZTn9sfANYm5vBp3XJojDI6x83vBJoxSZzANGfX%2FjPj0wY9%2FRzPeioTNHvvSlBnwF1BnoGuEIuKAw7K2zwirDEL5xtvli8ALPkfek%2FFs3F89jNih1BKBBr%2F3AVeff8%2BY45lry%2BuOdgnalmFHo0jTnsKZcEXAfx75GNlMq8uRMWXEVwGogbzhtZKIqI4yuOyTSlQXVA5xyAe0xNhTNR3k9Xqp4sb6KGdnDdt2%2FQyUFVKSRprmFDD4N%2Bx4udlbzmdny13ptuunBWY2U8Hr8fjhLLVr1V3k2vq6Wk5kx0uWtjLiSleOLbtHcBMNb05b4GOqUBaKy7qytYCtmLGD0dtbTXnTsZ%2FG9cf3g1mWCgemaqwFd8Tp2kJWCR1FQx3eZ2tV%2BDwUlgnsULgcyhoG%2BDUSDasQtu8JFL5KBTMsl2gZZjxx7i8%2BJRTPkUy6CX2Ar8FYXIsXvcyNqfd4yT%2F4XcV8tAHriGK64S%2BlGPsXtfIBpUDIZ%2BxiBpseIE39SS%2Fi4ZB1C96%2F6W0ccPEPOIi4I242YbbKylDUsc&X-Amz-Signature=f0275d4a85b31830cb48310999f0c5e7ba70980282ccf0137573db30058e3254&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
