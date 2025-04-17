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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CP2N4RK%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMJo7QXxbkEmC9715W0%2BLJXSLPWSrX%2FUHfh6tfhRnJMAiEAs18%2BeUq3iPcO7Wd3FSLdl%2FMGGxCmxZaFd9APVhirN1cq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLIL1gl0NPtgorZJQCrcA5SGc1dCBw990kXSTkrdzw3wk5Uaq6xLmeAhIyE%2Fo0ollyluEkQ%2FxXltx3LVIyyYV4SByvirHcAv81tfnW16vmIU00gGrImf%2FZ14IW4%2Fx4vfY7VuiczFCWokr5NSFr1yFnltVsYD%2BEFAzvGTHii%2FW8aHGlxusa%2BjoQtCBrV9nufs8e6Q4HtfO4XfugEtarjhAuTiLS%2BL8j7tEW3uV2%2FJs%2BpyRSWamkPvg6hUKOzzI7PQ3%2FnlrEWHP0w8Xhir6FEUIoofH13eg2kz%2FRaV3yfVWjIzfUuCWdtd2ATsF31TTc8jcfG8mzwrU1vzywFv296HUWAGJF2qLmqhDaVIw%2BE8cgmejnzsY6aOrjjTAgsfGH%2FlwF%2Ff2e9Gm%2FVbOomwvP40PXMzXKxWODgTIULMnK%2F5nEK1%2BSviWyCxi4Rc3UREE7BS7lW7K6U64iloscB91bVdQ2nTtMBYgJwsGRVBHmW5XaopwnFT8%2BV1DK9uVDgxqRnY7UD7nwWch%2BWUuW5pWCU%2F9fblWyjEGTxrh3qfIRhc5NYe1i1vNSzgY6SUG2r0FpXfP5LerTl1ZEakuXYPrLvRiF7cQb6ixcxugvYNVEnpt7weIyo3PtzGHvE4G7%2By1THVuHfdr1vaPeWrBvCIMMv7g8AGOqUBtt%2Fhii58CBLFRWNkA25FAl2uFoxyoPJAjeu3DQcqB%2FF7T%2BHllom6AyvLl3eQnW5c40%2BrNn0jpnax%2Bdq7JYlfLJYzKcAlD0%2FkwGPKFYDn%2Fgm74%2Bsk130qJd5cAFRosm%2FNYiDz8TNQ%2Fjb8DjubEvjV3kaOMQqg9bBm%2FNQOfZYGICZ6defpI7lqnYn7pGKiXFQVrEqYK3m1CD0CkpCQuMFNhQ7uJL4U&X-Amz-Signature=d4614388ce0e171fea9ca84fe221030ca7369cb617b55e0532c545a344479570&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CP2N4RK%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMJo7QXxbkEmC9715W0%2BLJXSLPWSrX%2FUHfh6tfhRnJMAiEAs18%2BeUq3iPcO7Wd3FSLdl%2FMGGxCmxZaFd9APVhirN1cq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLIL1gl0NPtgorZJQCrcA5SGc1dCBw990kXSTkrdzw3wk5Uaq6xLmeAhIyE%2Fo0ollyluEkQ%2FxXltx3LVIyyYV4SByvirHcAv81tfnW16vmIU00gGrImf%2FZ14IW4%2Fx4vfY7VuiczFCWokr5NSFr1yFnltVsYD%2BEFAzvGTHii%2FW8aHGlxusa%2BjoQtCBrV9nufs8e6Q4HtfO4XfugEtarjhAuTiLS%2BL8j7tEW3uV2%2FJs%2BpyRSWamkPvg6hUKOzzI7PQ3%2FnlrEWHP0w8Xhir6FEUIoofH13eg2kz%2FRaV3yfVWjIzfUuCWdtd2ATsF31TTc8jcfG8mzwrU1vzywFv296HUWAGJF2qLmqhDaVIw%2BE8cgmejnzsY6aOrjjTAgsfGH%2FlwF%2Ff2e9Gm%2FVbOomwvP40PXMzXKxWODgTIULMnK%2F5nEK1%2BSviWyCxi4Rc3UREE7BS7lW7K6U64iloscB91bVdQ2nTtMBYgJwsGRVBHmW5XaopwnFT8%2BV1DK9uVDgxqRnY7UD7nwWch%2BWUuW5pWCU%2F9fblWyjEGTxrh3qfIRhc5NYe1i1vNSzgY6SUG2r0FpXfP5LerTl1ZEakuXYPrLvRiF7cQb6ixcxugvYNVEnpt7weIyo3PtzGHvE4G7%2By1THVuHfdr1vaPeWrBvCIMMv7g8AGOqUBtt%2Fhii58CBLFRWNkA25FAl2uFoxyoPJAjeu3DQcqB%2FF7T%2BHllom6AyvLl3eQnW5c40%2BrNn0jpnax%2Bdq7JYlfLJYzKcAlD0%2FkwGPKFYDn%2Fgm74%2Bsk130qJd5cAFRosm%2FNYiDz8TNQ%2Fjb8DjubEvjV3kaOMQqg9bBm%2FNQOfZYGICZ6defpI7lqnYn7pGKiXFQVrEqYK3m1CD0CkpCQuMFNhQ7uJL4U&X-Amz-Signature=122996962e777dee8c0b168efeadbdd7a2180cfe4fe4182de662e292602cc1e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
