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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6UNJZX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnv07YdKO8vqaHfe%2BFk%2BUYmloACt1WQclDm8jLPvMq1AiEAw1cmF%2FFwqzZVfEdt2GC%2Bsbb7Cn8fyKF%2BMlwIFpmWl6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4lhaW5wfo9Kd9HGyrcA5rWK3xCvNR9%2Bsw80NOCLonWbLOkk9jWfKWnAPv2tIm033DsMmttAldNq9iqDU24CEv%2FBB%2BAiWnUQACSB2Ku5dkX23EPIMyewa1dYB0RrKPoBrwv1I9U%2FX5vby4KrzZKMTWgYQgWSF2STpHQf8kO6OaLgDpqNVhOXe7cMbjjrp8j%2FEz2pJyM98fWRZqqwr8K33wV4RFUHrluZXEZFz6Os78rAIJtF%2FtMh%2BpX2vcsgZhtAYNA7kcsTae5lgKsML6KZue4EIUNs%2BktDvp7BhSzvUTSDPmINr%2FZ5Cu0HHCKcWjUrv81ydsHRKMX62B3Ngi6a%2Frlv01IqE91Lgv4L4gin0x6LNrNoR%2Bg6rGpKgHq0O2Q2oNQ9lVtJyssUg0Rtsbn9SQTDhZcMXQmAUGetTKKzgypCXCY%2FPdlGI%2F8XuOChRz6M1upkXfH5CBLPp1c1%2BReQDDnBNQw%2Fsv7eAjZ%2FzzVMx4cEpeUR%2BKW1uSneHrxXnZDep9kEaYsWORzQU%2B2wr9%2FI8fCwjEjOa7npIaHX921L6rEdJqzCjx4y3j4Haml6e5TEl3AijQie3YvwXGwaIJBGHpJjHs6gkDGkrtLpTV9AgDkXyvo%2FB87wCV06BvFCXHOF9lklCw8SABvs66hMMbF7MMGOqUBM7W%2FyAVNr3gX9YgUvIAbIoZ7N85jGi0%2BUTPsRYJLsR%2FVtKYIa%2BMKnN%2B2i0imB6AqD34Sr2KgibEjkMBNEY3i4BY5GNw6uW1C6%2BYPF9jz6IuI7canIkhBKP0bx9QIjb%2Bt02koUMkE7eZoNi6Q7BXZxasHE%2Bz%2FeS21nE0eiOFRKQ7TsHHTWafkNObSCiziR4dCtiGUJmygABGtVikE%2F5JfnPJ5N2Q0&X-Amz-Signature=6796be230bb63cec94d89b0457aabd4c8ea17ee387b2ac35aa3c08c06713aa02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6UNJZX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnv07YdKO8vqaHfe%2BFk%2BUYmloACt1WQclDm8jLPvMq1AiEAw1cmF%2FFwqzZVfEdt2GC%2Bsbb7Cn8fyKF%2BMlwIFpmWl6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4lhaW5wfo9Kd9HGyrcA5rWK3xCvNR9%2Bsw80NOCLonWbLOkk9jWfKWnAPv2tIm033DsMmttAldNq9iqDU24CEv%2FBB%2BAiWnUQACSB2Ku5dkX23EPIMyewa1dYB0RrKPoBrwv1I9U%2FX5vby4KrzZKMTWgYQgWSF2STpHQf8kO6OaLgDpqNVhOXe7cMbjjrp8j%2FEz2pJyM98fWRZqqwr8K33wV4RFUHrluZXEZFz6Os78rAIJtF%2FtMh%2BpX2vcsgZhtAYNA7kcsTae5lgKsML6KZue4EIUNs%2BktDvp7BhSzvUTSDPmINr%2FZ5Cu0HHCKcWjUrv81ydsHRKMX62B3Ngi6a%2Frlv01IqE91Lgv4L4gin0x6LNrNoR%2Bg6rGpKgHq0O2Q2oNQ9lVtJyssUg0Rtsbn9SQTDhZcMXQmAUGetTKKzgypCXCY%2FPdlGI%2F8XuOChRz6M1upkXfH5CBLPp1c1%2BReQDDnBNQw%2Fsv7eAjZ%2FzzVMx4cEpeUR%2BKW1uSneHrxXnZDep9kEaYsWORzQU%2B2wr9%2FI8fCwjEjOa7npIaHX921L6rEdJqzCjx4y3j4Haml6e5TEl3AijQie3YvwXGwaIJBGHpJjHs6gkDGkrtLpTV9AgDkXyvo%2FB87wCV06BvFCXHOF9lklCw8SABvs66hMMbF7MMGOqUBM7W%2FyAVNr3gX9YgUvIAbIoZ7N85jGi0%2BUTPsRYJLsR%2FVtKYIa%2BMKnN%2B2i0imB6AqD34Sr2KgibEjkMBNEY3i4BY5GNw6uW1C6%2BYPF9jz6IuI7canIkhBKP0bx9QIjb%2Bt02koUMkE7eZoNi6Q7BXZxasHE%2Bz%2FeS21nE0eiOFRKQ7TsHHTWafkNObSCiziR4dCtiGUJmygABGtVikE%2F5JfnPJ5N2Q0&X-Amz-Signature=bc3a42979a331588f3a365d3c7fd71f64d94b181ae377629641ec437d35fc960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
