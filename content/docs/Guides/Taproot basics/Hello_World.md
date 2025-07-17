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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NML3M5I%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCSL6p0OjJ1Qo%2F079S1Pel7xXnzC7%2Fj6BPLBbIn9tYlzQIgUB6FbedOvMFEf9RCQ8MhXcMk38M%2B3MN4hUHWhepPHfMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOGmNr3uPEIbNFKFFCrcAySDCDe1N6SU3P1uoT%2F1GLQzxJCjysCad3xV52wfEUPCTL1gfOITISrngT3vbB1HFxJ1WgLqmrzz6XfENJf6Vd%2BDuCIdv1dVdmII8fgp3Teys6wyrJxpo4YVuascn6yHRV0h%2B0pEwsXU5IZAWG8H62BDXFLxJH71CBKW0%2BexXdWy8akSkNOKg3nTQfL0xFVNb1Cwl9XrR1lQ%2Fy9bDrxxsfyaC8DeDFJ7g6QXTjQa33VoyOW%2BCw43Poo5DhLozy9yfcfuT2Z%2F0sA78ca0EN2Dldlf8BTo0%2BoTllDrItFNF2Z7%2BCLy5sPEbEQg1cDiJIQdafYNF3nKQ3IuEAuLdIp3HdZ8oS70Q%2FcBPklhfTzomx0Wvy3tmaEsXlAeId4W%2FAKMeG%2FWkvbnUlZgfJQgfKLoXuPU5mBFvoeGnBVB4%2BOQXwyGd9IAGyxIAwD5F4mo98ypu%2BYxBsT5MVtfsCfqZofTvJJSFhnc7i0VRnj0cQodD7me4%2BZbZPPoq3RLERyk1DhRl90iTZ0XAZPCgyTVkN1FY%2Fr77lwaojGCLUsnck7Xdacx4xqO5S5buqLYIrNmssLxEqSHVwwNQaW5a2ShOo11uRX7i8sqCYj1ey7R8a7dUMw%2FuGd0eEK%2Bj%2Fv%2FJZ7QMKXh48MGOqUBJ%2F4EA6X4n4kEDdWNDc7cYi0ocl0X4NfYukSA1huaveSCstowMdMTtXYlL5hjE6%2F7vPVPZNrx1XjRer4mpih%2B6R5bpWqctrZbtzhWKfUOlWTWCkvKOz%2FEgmj%2F0tTJd%2BGNxAzMWrYEwggniqTYrmVCFVxRzojQNJuq2pn7A2J0dH5ZdjnebGLS3CvRPdL4ggam8Gd%2FNFIA8C%2B%2FYDKZY3YiRn6JMRJR&X-Amz-Signature=eded7b102563655bf7ab5ceba0ed3a658d208ec7fa691340d1f4fecae10e81d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NML3M5I%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCSL6p0OjJ1Qo%2F079S1Pel7xXnzC7%2Fj6BPLBbIn9tYlzQIgUB6FbedOvMFEf9RCQ8MhXcMk38M%2B3MN4hUHWhepPHfMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOGmNr3uPEIbNFKFFCrcAySDCDe1N6SU3P1uoT%2F1GLQzxJCjysCad3xV52wfEUPCTL1gfOITISrngT3vbB1HFxJ1WgLqmrzz6XfENJf6Vd%2BDuCIdv1dVdmII8fgp3Teys6wyrJxpo4YVuascn6yHRV0h%2B0pEwsXU5IZAWG8H62BDXFLxJH71CBKW0%2BexXdWy8akSkNOKg3nTQfL0xFVNb1Cwl9XrR1lQ%2Fy9bDrxxsfyaC8DeDFJ7g6QXTjQa33VoyOW%2BCw43Poo5DhLozy9yfcfuT2Z%2F0sA78ca0EN2Dldlf8BTo0%2BoTllDrItFNF2Z7%2BCLy5sPEbEQg1cDiJIQdafYNF3nKQ3IuEAuLdIp3HdZ8oS70Q%2FcBPklhfTzomx0Wvy3tmaEsXlAeId4W%2FAKMeG%2FWkvbnUlZgfJQgfKLoXuPU5mBFvoeGnBVB4%2BOQXwyGd9IAGyxIAwD5F4mo98ypu%2BYxBsT5MVtfsCfqZofTvJJSFhnc7i0VRnj0cQodD7me4%2BZbZPPoq3RLERyk1DhRl90iTZ0XAZPCgyTVkN1FY%2Fr77lwaojGCLUsnck7Xdacx4xqO5S5buqLYIrNmssLxEqSHVwwNQaW5a2ShOo11uRX7i8sqCYj1ey7R8a7dUMw%2FuGd0eEK%2Bj%2Fv%2FJZ7QMKXh48MGOqUBJ%2F4EA6X4n4kEDdWNDc7cYi0ocl0X4NfYukSA1huaveSCstowMdMTtXYlL5hjE6%2F7vPVPZNrx1XjRer4mpih%2B6R5bpWqctrZbtzhWKfUOlWTWCkvKOz%2FEgmj%2F0tTJd%2BGNxAzMWrYEwggniqTYrmVCFVxRzojQNJuq2pn7A2J0dH5ZdjnebGLS3CvRPdL4ggam8Gd%2FNFIA8C%2B%2FYDKZY3YiRn6JMRJR&X-Amz-Signature=8ed00915db7ef1378a2ee778c69fa9383c6711a9c912a0a59d8c2a5a84b14705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
