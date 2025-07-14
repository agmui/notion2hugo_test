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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJOAIEC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEqoCmD1MgkS%2FMFsd8lOhcLO99QWIYaqZ3PooPqYYaJkAiEA7Juee3y3mowrsCwRspVPIxro8mqCIitDzXVzIk7t7%2BMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG%2BOvzVFt8iWGDEVkircA7uks2uARtWGUV9YttzZARjt0Oou6%2FFAW8zidRL1UA2qkWHlLqZWAHbuO7NeJdNvcjPXFebyYndK5cneGWiEKl7GDa0xBxVy63RdVuTfvnzbsuY2ciXPOrqd%2B2Zj7Z470WfkHhpDqgXE2HAYEw%2F97wSFGtCjdLcs55MVeeUQA2wqCm3i8850CiaRT9PkOMMmgR2APoJX4KaA5dD211FZb%2B%2F3dg4wFuk%2BGhwIAgwc221yw1NVMmYjzXGEPU1VQaelgFg2uBt89mqiDxcVMi9nGFqAkVjeZZZ0%2FmvLcjdUMDYMcb4i0SCJ3isMbzr5zLajUIcprkQNkTR6Iy272oVdVHhkYLRBC0gq0ceMx3rnak90DvxbndsUd%2BRSjYlvfpWWcVq9dwC46HejCP6OZSiWB0n646ZkgFaSxHe%2BTMtRF8h35wH6GjDLci48tEPWwcPchMxUK6mqkODaRU7Tzbtj2HfvmOmTZJpxwXKJ%2BLt4WyUxWaS%2FyVV%2BZyaY7NEwIH2iZCXOe7dg%2ForohtXdPphwTwm5vEKMjUhe11UQtSkaTld3KVYGdbrMl9obz1gSQg%2B9dObTSVqS98aX%2FUXEZRgoNMsVjSNqb5p2gYfSnbS%2Fx2Lp4dthKZnFwL%2FV5iweMOek1cMGOqUBWbuJ8cmcTiLBAQcEyQ5JL6mxDJPzHKncJF4QlRGhO1vptgoPV6BUFdFAoaAprA7RDCPLgmBkCddf%2FwjgZiKwev0FKIIRt834cRHTcXwUyZOJSXWgXlR7w%2B2j5ydC%2BSxFuPI%2FPhqrEPp7dlsnyWyPCPNnAkC3MSnfeHMBp93J8WJRqvWL4zy16BL4kSa2idbXWMNAcVQlSAr5f%2FZdiSALjVXGTOUQ&X-Amz-Signature=cef9be92b0bc659adcb445acb71df64ea9c7342890a658c85c1a5f2b3a3263ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJOAIEC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEqoCmD1MgkS%2FMFsd8lOhcLO99QWIYaqZ3PooPqYYaJkAiEA7Juee3y3mowrsCwRspVPIxro8mqCIitDzXVzIk7t7%2BMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG%2BOvzVFt8iWGDEVkircA7uks2uARtWGUV9YttzZARjt0Oou6%2FFAW8zidRL1UA2qkWHlLqZWAHbuO7NeJdNvcjPXFebyYndK5cneGWiEKl7GDa0xBxVy63RdVuTfvnzbsuY2ciXPOrqd%2B2Zj7Z470WfkHhpDqgXE2HAYEw%2F97wSFGtCjdLcs55MVeeUQA2wqCm3i8850CiaRT9PkOMMmgR2APoJX4KaA5dD211FZb%2B%2F3dg4wFuk%2BGhwIAgwc221yw1NVMmYjzXGEPU1VQaelgFg2uBt89mqiDxcVMi9nGFqAkVjeZZZ0%2FmvLcjdUMDYMcb4i0SCJ3isMbzr5zLajUIcprkQNkTR6Iy272oVdVHhkYLRBC0gq0ceMx3rnak90DvxbndsUd%2BRSjYlvfpWWcVq9dwC46HejCP6OZSiWB0n646ZkgFaSxHe%2BTMtRF8h35wH6GjDLci48tEPWwcPchMxUK6mqkODaRU7Tzbtj2HfvmOmTZJpxwXKJ%2BLt4WyUxWaS%2FyVV%2BZyaY7NEwIH2iZCXOe7dg%2ForohtXdPphwTwm5vEKMjUhe11UQtSkaTld3KVYGdbrMl9obz1gSQg%2B9dObTSVqS98aX%2FUXEZRgoNMsVjSNqb5p2gYfSnbS%2Fx2Lp4dthKZnFwL%2FV5iweMOek1cMGOqUBWbuJ8cmcTiLBAQcEyQ5JL6mxDJPzHKncJF4QlRGhO1vptgoPV6BUFdFAoaAprA7RDCPLgmBkCddf%2FwjgZiKwev0FKIIRt834cRHTcXwUyZOJSXWgXlR7w%2B2j5ydC%2BSxFuPI%2FPhqrEPp7dlsnyWyPCPNnAkC3MSnfeHMBp93J8WJRqvWL4zy16BL4kSa2idbXWMNAcVQlSAr5f%2FZdiSALjVXGTOUQ&X-Amz-Signature=5b7cf65add4736ac823e2774cf7796b77ce0c239654eb43ec9c9dd974569576e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
