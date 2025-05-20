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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZMIW5I%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWxHHtwehSllWjXbgbV%2F9N5JhuDsPrOQc%2FAbV0ETW94AiBDfulf3r9GNlnOR3T0LK78LYJ30tZcjEhrEqdipNY4tCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWi%2BzDuePGPu94hbMKtwDHXjlbP7RF8%2BuYRJql1ie06CPcIXuzwH6jpuA3OCDWvn1w98f2XY09wmSTvC%2BT%2FxN0%2BZz3hYQKdYSJSRIh9Z7%2BRrp2rA8EwyF7rEIGpDUrQDDvx4TVDm5WeVAot6UYtXC54E8rx2a9Y2jVPsJQrC01dgFlsh%2FmGGEibURYo%2FP1%2Bd845yOYdm%2BFJRVQsm8BNyqe9w%2FG%2FWqbKI%2BeSO3%2B6ycBXz33YvvvqSupkBzp9aU8u2sUy1ADNd5HRFumFLJ9fvYZMQdAFogAssniZ6J3K22IS1tJl9eZEW9PIegCTFhGFNPI5jm8B1epaI0Su0i%2FnlUvaxPCLYaSQTez%2BecMycAgoZvbTCaU1Efm3UKTmrkaVh16q3ZJJxMQsK08VsfI4eG%2F67OjBjPaNJDzj981JN9SoxHCLkXjVvKlk%2Bc6PPw31229yWiPJdhDFNT0839qoKpoMVD42gHuDdUIdqudpcPo870Mb%2BKeMka%2F2EyWk1pb2vJIRqCNpX06VWz8GNjL2jcfsK3wDaMrPQMdjifpZ8MXRWZWA18xS%2FuB6nvboldSF9hTPxm2gvCrX0HP2GUxgPQmvqjuJivWPKWJ8Qszv9xlgSAYhFhL2EGVo1FktIJBYjBm1dcxeat4JbRBZcwncuzwQY6pgGO78iDRolUWoiFclRdDjnN1zstKiqO054jN4QTRkHS58ibvqVB9gXQBxBnGClqBd0Y%2BhlHcDnaRO3A3tTzOuforG%2FImuYRP8fqu0tn64OmZMiCW0rsFOLO2pjQaSZkx%2F8q0v1PTSUj9itObm5gRpjfmbjLRwUEYRLEuE2rrDohdWchmrunQogQpy381ReINE5nxadYzleir050EphfEy09zNeWg9JG&X-Amz-Signature=2acd21ab11e4822e390e8e5952b8c8876d9d3bb239c3e220fd63e67a8eefa289&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZMIW5I%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWxHHtwehSllWjXbgbV%2F9N5JhuDsPrOQc%2FAbV0ETW94AiBDfulf3r9GNlnOR3T0LK78LYJ30tZcjEhrEqdipNY4tCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWi%2BzDuePGPu94hbMKtwDHXjlbP7RF8%2BuYRJql1ie06CPcIXuzwH6jpuA3OCDWvn1w98f2XY09wmSTvC%2BT%2FxN0%2BZz3hYQKdYSJSRIh9Z7%2BRrp2rA8EwyF7rEIGpDUrQDDvx4TVDm5WeVAot6UYtXC54E8rx2a9Y2jVPsJQrC01dgFlsh%2FmGGEibURYo%2FP1%2Bd845yOYdm%2BFJRVQsm8BNyqe9w%2FG%2FWqbKI%2BeSO3%2B6ycBXz33YvvvqSupkBzp9aU8u2sUy1ADNd5HRFumFLJ9fvYZMQdAFogAssniZ6J3K22IS1tJl9eZEW9PIegCTFhGFNPI5jm8B1epaI0Su0i%2FnlUvaxPCLYaSQTez%2BecMycAgoZvbTCaU1Efm3UKTmrkaVh16q3ZJJxMQsK08VsfI4eG%2F67OjBjPaNJDzj981JN9SoxHCLkXjVvKlk%2Bc6PPw31229yWiPJdhDFNT0839qoKpoMVD42gHuDdUIdqudpcPo870Mb%2BKeMka%2F2EyWk1pb2vJIRqCNpX06VWz8GNjL2jcfsK3wDaMrPQMdjifpZ8MXRWZWA18xS%2FuB6nvboldSF9hTPxm2gvCrX0HP2GUxgPQmvqjuJivWPKWJ8Qszv9xlgSAYhFhL2EGVo1FktIJBYjBm1dcxeat4JbRBZcwncuzwQY6pgGO78iDRolUWoiFclRdDjnN1zstKiqO054jN4QTRkHS58ibvqVB9gXQBxBnGClqBd0Y%2BhlHcDnaRO3A3tTzOuforG%2FImuYRP8fqu0tn64OmZMiCW0rsFOLO2pjQaSZkx%2F8q0v1PTSUj9itObm5gRpjfmbjLRwUEYRLEuE2rrDohdWchmrunQogQpy381ReINE5nxadYzleir050EphfEy09zNeWg9JG&X-Amz-Signature=ee138df2920dd35212f8792f93d329cc4062367768cf37d4fbebe5c6a2dfad97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
