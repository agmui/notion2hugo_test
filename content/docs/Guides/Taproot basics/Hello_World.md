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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MSLSFV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwnIUjS4VSKK8tmxzArm%2BL9uHwuo%2FSoIjipay3zgcWsAiEAk658U%2BXAGCdOMLUhi0xvNdEp7RMjmc8sCC8wOMtFMAkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBozy7kiV5tPYawVVCrcA9uWz%2BtiAdTMB7yaFWaYFs4pljJzGCnizJFqQJIVrM06VB1ctemV7YZTWwbBFgKo04MNYx9%2BqXIKekb8tdsZAkkhO%2BlFaLCY1L%2BuEsfwk9Soi60idRRhc6SphdH8cRE2SDa%2BiSnNxh%2Fp%2BXe7TrOXBOT5FaJysfLpkZ6sPkAkwAoStC99vieaBurwf6jD6ldFBDpgazz6K3DlGGe4n6YyE%2B0sbFjkA1sf3NruxatbGrRFb2KDiUFHH9Yekv0w%2BUyqSmLbr5ZCD3cOsJbFJaUTCho9fOmhVlIEFBL%2F%2F8oy2x5QD72QOyE480QCJMwK5eJDJyMWWB3Tw23sx8DE6CphAwFsx8dmn3iLlY9LyF23jXjxae0qHj8QGir6dNPxsdcAU%2F6YlDms7NMjuvq0MyDAH%2B%2F8GbpVtGvCjlUxYFpSH%2F6boL7KhqPE1QM0MDaEUpUNMLWhnUVlK6wK99NjhihauLl99tJxFpFDC7QnkWcE4JDVXycLcytIWTMy77ewQ66DpoOADSHb2r46F8ajQ9wyXD%2BGfcJ1dR%2Bptb9hPLkC%2Ff3T5vi09kJltyTx9CYCJ5kvyN3CCBem%2BkZP6XRT5lUDdSsZdvIzTQLN3LS83zKBW08lsFe0ZfS1UeHSIpx9MP2VksIGOqUByhej5JbHafMdwxIrUxdnaWDarlHMOiycYI7aObYCCgMke8QTU1dju8E4MhOxufvdbkxUosHZ6CW6FLbjaj4K%2B4Zuivfw8lUNkdjJsoAAYn6rOiGAra9DhGv4uLXlaxz6r5dH1s2kv7bZziurRWbKv5PzbhwWR5Vsjy5KkZZ3AgviBufKDcDBRO8qeQ3x5bXDa0jB6SFUg7tXrzhiZvKjqrrDZUDh&X-Amz-Signature=6c8efb7e6fc6a1fd4edb7d3ae227846d28f8329c4c93b4a5be56190f19c003bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MSLSFV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwnIUjS4VSKK8tmxzArm%2BL9uHwuo%2FSoIjipay3zgcWsAiEAk658U%2BXAGCdOMLUhi0xvNdEp7RMjmc8sCC8wOMtFMAkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBozy7kiV5tPYawVVCrcA9uWz%2BtiAdTMB7yaFWaYFs4pljJzGCnizJFqQJIVrM06VB1ctemV7YZTWwbBFgKo04MNYx9%2BqXIKekb8tdsZAkkhO%2BlFaLCY1L%2BuEsfwk9Soi60idRRhc6SphdH8cRE2SDa%2BiSnNxh%2Fp%2BXe7TrOXBOT5FaJysfLpkZ6sPkAkwAoStC99vieaBurwf6jD6ldFBDpgazz6K3DlGGe4n6YyE%2B0sbFjkA1sf3NruxatbGrRFb2KDiUFHH9Yekv0w%2BUyqSmLbr5ZCD3cOsJbFJaUTCho9fOmhVlIEFBL%2F%2F8oy2x5QD72QOyE480QCJMwK5eJDJyMWWB3Tw23sx8DE6CphAwFsx8dmn3iLlY9LyF23jXjxae0qHj8QGir6dNPxsdcAU%2F6YlDms7NMjuvq0MyDAH%2B%2F8GbpVtGvCjlUxYFpSH%2F6boL7KhqPE1QM0MDaEUpUNMLWhnUVlK6wK99NjhihauLl99tJxFpFDC7QnkWcE4JDVXycLcytIWTMy77ewQ66DpoOADSHb2r46F8ajQ9wyXD%2BGfcJ1dR%2Bptb9hPLkC%2Ff3T5vi09kJltyTx9CYCJ5kvyN3CCBem%2BkZP6XRT5lUDdSsZdvIzTQLN3LS83zKBW08lsFe0ZfS1UeHSIpx9MP2VksIGOqUByhej5JbHafMdwxIrUxdnaWDarlHMOiycYI7aObYCCgMke8QTU1dju8E4MhOxufvdbkxUosHZ6CW6FLbjaj4K%2B4Zuivfw8lUNkdjJsoAAYn6rOiGAra9DhGv4uLXlaxz6r5dH1s2kv7bZziurRWbKv5PzbhwWR5Vsjy5KkZZ3AgviBufKDcDBRO8qeQ3x5bXDa0jB6SFUg7tXrzhiZvKjqrrDZUDh&X-Amz-Signature=ad4f4e55a668d7b2a8c54b363222315dde042c4b6a521de0447438e6d94af32a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
