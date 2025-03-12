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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236P3GLJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIChFBGnsoTlwLl4c1IuEv6WajOSRQ6h8AysJ5xEoA6FCAiBUNiVmGpZbuYMS4LppexbRxu8MAFDOgWT6UKo77QXjqyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjrr%2FgqDmxoXh8bcmKtwDm3kXKyJPgWHmXrZA%2BkxWwg%2Fsz58NzXslOzzfB6%2BHC%2FMfiqqxRxtzFic2fwoN0qWYCvOtJ2TKf2%2BCrLHb5svnOnc9KPxyVu5itl8YpxjonmgTI4gdJ7NQlfl8YrY4WHTZStXupdsxDGMgDUHkloHLTUDwDSbJELvvfBRzYZMpOj9lnSVA2WEOldN6Vccb9G0Mhi%2B1gvmtE6gdgxwEjYYj6loGqUOckDm62sE8XZEVPmzZQn0lF3Pqf1Lvs1Uz%2BfuiZFUg97ddeYTREWDsCbYYOWg%2Bwx1gkfXTzxTvD12YVJwjcY011c06GnZpNS8ztkLN15BiTTmttQ8w%2FYEYopwAi2V8BJJdwh1N3A%2FPCw%2Fcov21kC2sbHuUA3dmPxdOn8OtXtSmCveE1GKfFByiapRqt4d8g0jbu5MerMDGXVLA%2BEZyLxf3dLCrjY%2Fv6DcoyCGA9%2BXPjNnSEuOnEnuLGaEQicOzWwbAYlNatJao%2BIvyKqgENfeyYYZ3Q7saHWJuTKTUUM%2FwoeqsZtFC2RiqVb%2FTdBhBmwz94letz3TUVQ0oar6CXCezSBs4R29VU1Ik1c2yPosfTLOFnwD0t5YQEvIE%2Fg1pE7kdYZ1hrYbXQYO1E%2BClEPz%2FMP0thc5n%2Fd8wyJvFvgY6pgGaopSkY%2FlV9mhepnqzK4WGM72Oisz4US%2BPXOUN9uXtAciijRqxBP31M8YqK3SS9N7gNd5e6ZGn3iUyWIqYi38iwJvVccRWyp2w%2F%2BmlJU%2BX3ie%2F9eaYrlRruYukd2tPnxKnGt%2FigO%2FfA5VBUQe%2BO0OmsFPFV17awyfgJgunLV2hF2emmV5jKlPbOOzvRXUsaMkW%2Bi4ZEvUByRy791Eww0JJwlCT77M%2B&X-Amz-Signature=2281e1d10c78545e4b4db132d6c4fd6e1d5b810faa731991daf8a230120fe71e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236P3GLJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIChFBGnsoTlwLl4c1IuEv6WajOSRQ6h8AysJ5xEoA6FCAiBUNiVmGpZbuYMS4LppexbRxu8MAFDOgWT6UKo77QXjqyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjrr%2FgqDmxoXh8bcmKtwDm3kXKyJPgWHmXrZA%2BkxWwg%2Fsz58NzXslOzzfB6%2BHC%2FMfiqqxRxtzFic2fwoN0qWYCvOtJ2TKf2%2BCrLHb5svnOnc9KPxyVu5itl8YpxjonmgTI4gdJ7NQlfl8YrY4WHTZStXupdsxDGMgDUHkloHLTUDwDSbJELvvfBRzYZMpOj9lnSVA2WEOldN6Vccb9G0Mhi%2B1gvmtE6gdgxwEjYYj6loGqUOckDm62sE8XZEVPmzZQn0lF3Pqf1Lvs1Uz%2BfuiZFUg97ddeYTREWDsCbYYOWg%2Bwx1gkfXTzxTvD12YVJwjcY011c06GnZpNS8ztkLN15BiTTmttQ8w%2FYEYopwAi2V8BJJdwh1N3A%2FPCw%2Fcov21kC2sbHuUA3dmPxdOn8OtXtSmCveE1GKfFByiapRqt4d8g0jbu5MerMDGXVLA%2BEZyLxf3dLCrjY%2Fv6DcoyCGA9%2BXPjNnSEuOnEnuLGaEQicOzWwbAYlNatJao%2BIvyKqgENfeyYYZ3Q7saHWJuTKTUUM%2FwoeqsZtFC2RiqVb%2FTdBhBmwz94letz3TUVQ0oar6CXCezSBs4R29VU1Ik1c2yPosfTLOFnwD0t5YQEvIE%2Fg1pE7kdYZ1hrYbXQYO1E%2BClEPz%2FMP0thc5n%2Fd8wyJvFvgY6pgGaopSkY%2FlV9mhepnqzK4WGM72Oisz4US%2BPXOUN9uXtAciijRqxBP31M8YqK3SS9N7gNd5e6ZGn3iUyWIqYi38iwJvVccRWyp2w%2F%2BmlJU%2BX3ie%2F9eaYrlRruYukd2tPnxKnGt%2FigO%2FfA5VBUQe%2BO0OmsFPFV17awyfgJgunLV2hF2emmV5jKlPbOOzvRXUsaMkW%2Bi4ZEvUByRy791Eww0JJwlCT77M%2B&X-Amz-Signature=ba7ab393d34edb041eb28f7e2f97b934d27b45b42c1eb70bbd6eb02e3bab37b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
