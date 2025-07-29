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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YIJY7ZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoCA34p3Sxro3mMOw27BIdwi9Wa0siAdbLK4zwlA383AiB6TIHS7UjgVg1BfKvoAr41mm1M9beDeYju%2BjYyGpbSyyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVPHsLZe%2Bkp0v2sEbKtwDGLl1boW%2FDbXu5hcnR6po3m1VQ0gRR7w%2F4bJITsvcWK%2B%2Bx0CTS91tC6dLT0e6An1xkVRgMzCmePvm2Z%2F%2BJ6L7ujyTX0sdjCYvZBMi%2B8wexHZnTstHs4HeDY1d9SPSGi7lKBTcX4B7ebr55N8YOtH3IMqgnK1S9F%2B8SG7qnRmRgCuLRI7Hk%2F6CGrggYrgw9fd%2F98GBKOPEd5O9KkOnL6UHyDx3vk86wMgAFFofPIMjVfWJyWU7%2BYyfyoUcH%2Btr4g6uydkz9PK6lGcbPwdIXlfAAl48e6rGVl7CotkNZ2Fy33Q0k2qvHUC7wHRITDBbSBa4QBjfvDNV9dMPbEL%2FmAtA7nPC4GRO98Fl1MA%2FR73kDQbTgNOzyHF7rKXNHUuTPspJRUtK5XxZAwk%2B1YIPKL%2FkL%2BjdLHVk%2BJAmYIWgs1%2BdoiF1BkB3trrDMdUTLn7UZd6ym1sC58yUUjN5I911GcozPHUrpq2AUEI1xpoV4y11SIgmbjWuFf3ZfznvyPgdUz4y4AUEIAC9ZB61S9dKuFPs%2F%2FJQWeb4zVCFQoWOCNv7GPzTXkpaOlBgL9VRv5%2Fr9Ea2Q%2BbR0gqBFYBwrMDiClxMk6F0E7p0uuJ0gylE5oK622uD29Jl41DBbHUz9Doww62kxAY6pgHNeY8WpIwKxsaP5ZPVQUVW%2FmPCoQuZpI9WSqDJ5TZqn2Z0XtPLxYozyWtPUrIhYMn%2FB5%2Fx0DfsavX5u%2BD5TEsFbDb0miJKmHNtVZGmrbaxvgOTjAFnlBnIHbTCEsHbRFhgdFTmSDEGE%2BvfJu0BNQXor%2BDWb0BxK73dsnRYZfoKq1ozEZ3FJJXNsRzNbt5hthvW%2F%2BgdB2HInWYPqQoFLPjgqUcVSBAN&X-Amz-Signature=dc4441a106fe456ff32f6e5373fa65fb2bcd4cec82542083023939bedd5f93b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YIJY7ZH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoCA34p3Sxro3mMOw27BIdwi9Wa0siAdbLK4zwlA383AiB6TIHS7UjgVg1BfKvoAr41mm1M9beDeYju%2BjYyGpbSyyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVPHsLZe%2Bkp0v2sEbKtwDGLl1boW%2FDbXu5hcnR6po3m1VQ0gRR7w%2F4bJITsvcWK%2B%2Bx0CTS91tC6dLT0e6An1xkVRgMzCmePvm2Z%2F%2BJ6L7ujyTX0sdjCYvZBMi%2B8wexHZnTstHs4HeDY1d9SPSGi7lKBTcX4B7ebr55N8YOtH3IMqgnK1S9F%2B8SG7qnRmRgCuLRI7Hk%2F6CGrggYrgw9fd%2F98GBKOPEd5O9KkOnL6UHyDx3vk86wMgAFFofPIMjVfWJyWU7%2BYyfyoUcH%2Btr4g6uydkz9PK6lGcbPwdIXlfAAl48e6rGVl7CotkNZ2Fy33Q0k2qvHUC7wHRITDBbSBa4QBjfvDNV9dMPbEL%2FmAtA7nPC4GRO98Fl1MA%2FR73kDQbTgNOzyHF7rKXNHUuTPspJRUtK5XxZAwk%2B1YIPKL%2FkL%2BjdLHVk%2BJAmYIWgs1%2BdoiF1BkB3trrDMdUTLn7UZd6ym1sC58yUUjN5I911GcozPHUrpq2AUEI1xpoV4y11SIgmbjWuFf3ZfznvyPgdUz4y4AUEIAC9ZB61S9dKuFPs%2F%2FJQWeb4zVCFQoWOCNv7GPzTXkpaOlBgL9VRv5%2Fr9Ea2Q%2BbR0gqBFYBwrMDiClxMk6F0E7p0uuJ0gylE5oK622uD29Jl41DBbHUz9Doww62kxAY6pgHNeY8WpIwKxsaP5ZPVQUVW%2FmPCoQuZpI9WSqDJ5TZqn2Z0XtPLxYozyWtPUrIhYMn%2FB5%2Fx0DfsavX5u%2BD5TEsFbDb0miJKmHNtVZGmrbaxvgOTjAFnlBnIHbTCEsHbRFhgdFTmSDEGE%2BvfJu0BNQXor%2BDWb0BxK73dsnRYZfoKq1ozEZ3FJJXNsRzNbt5hthvW%2F%2BgdB2HInWYPqQoFLPjgqUcVSBAN&X-Amz-Signature=9f96ffa5ec798b1fddbee289bb20330eb9bc78d421dde00ae708bb714efc57e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
