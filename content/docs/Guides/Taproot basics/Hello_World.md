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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QET25H5L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCHi2ALZ3ZDEHcGlqz0WbDVFfMqMeQTTBDQ2mG7BEiHqQIgS1%2B8xdUtyHO0bD70D1ha%2BvM1XkPn5gK%2FBzM09yIVGrMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpgqOk9x5NagmRwxircA%2F9bFyvgupvDXm2g7gr4AQsuQfMvwYmCFb8WwLFfBjAmnu5NbLG5XSItNjTT6kRHBMq2caI1rNaDzJucqTxZdYZNy7xTWkkEoHMFslft6vumWQ2BEmBFGYIsCugzNl4giLtBNXX9qLNubOC%2Bl9%2FznitLN6KI4W0EktX6XcL%2BGuprXfy%2Fsj86jAp66dY9eUc5n%2FJKclPn0owvShhHavKcBCdhFM1crDOiUufGmcEK8ZcqNc59pYCtEDorOVnyX1Q4euCx%2FyqHpoVQuzGBYoeTwAZZCBW8OnBvCy782ChOvIrNl8hbDWaC%2BWL57AUjtl7tuwSgx1h1afhI2ICO9SHclo3eg3JTgBQPIDEMhhaYQua9JAUs%2FPBq9Q61iXv5IAcqni8CDTySEKF91gFU4CBcMQIIHup42XAb85O4LfmZrn%2BhNQ5OE8AHUDCZtce%2Fb%2Bp4z%2BNZVG6WyhnY9h150K6g0NuYBuWauCWW%2BifLukHPim%2B8oHtMm1Kdgy6qD81OKeXNleC7ir%2FATqDHUXTGDY6OXTgGqi2kqa4U4HrhVtji0IkUAnn0ok663qDliLBrG5vU7SvMQhNwskNTSz6TVysmVRH0%2B5cvOEHOtS%2Fa7T%2FRWfIhMfyoEQVtpgDgs4hKMLe2r78GOqUBxTdodYy6IMAphNzUCwGhcBOuY9nffDhnrDEBzyDPndJzDU8jbqjbf4RiEY7d07YhMuZuGHhUi%2FSiESEJJ2fiNX5%2F4xyhxJywIWjmcTMdvtGyBLECpXBbm0me%2BxM6ANSBmOZ7VrQ%2FN0zEXV6gh3HPd4Pb4RfkKO%2F6DmV8cfZq81pJ2N4BrznGvN%2FdOBzBYvoIz3h0dHOQh60u8gBYr10NFX5%2BUzWR&X-Amz-Signature=4d82e0870e40a9464b73d1c35be60ee35281e4398dd09aae76d644ba5c4c77a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QET25H5L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCHi2ALZ3ZDEHcGlqz0WbDVFfMqMeQTTBDQ2mG7BEiHqQIgS1%2B8xdUtyHO0bD70D1ha%2BvM1XkPn5gK%2FBzM09yIVGrMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpgqOk9x5NagmRwxircA%2F9bFyvgupvDXm2g7gr4AQsuQfMvwYmCFb8WwLFfBjAmnu5NbLG5XSItNjTT6kRHBMq2caI1rNaDzJucqTxZdYZNy7xTWkkEoHMFslft6vumWQ2BEmBFGYIsCugzNl4giLtBNXX9qLNubOC%2Bl9%2FznitLN6KI4W0EktX6XcL%2BGuprXfy%2Fsj86jAp66dY9eUc5n%2FJKclPn0owvShhHavKcBCdhFM1crDOiUufGmcEK8ZcqNc59pYCtEDorOVnyX1Q4euCx%2FyqHpoVQuzGBYoeTwAZZCBW8OnBvCy782ChOvIrNl8hbDWaC%2BWL57AUjtl7tuwSgx1h1afhI2ICO9SHclo3eg3JTgBQPIDEMhhaYQua9JAUs%2FPBq9Q61iXv5IAcqni8CDTySEKF91gFU4CBcMQIIHup42XAb85O4LfmZrn%2BhNQ5OE8AHUDCZtce%2Fb%2Bp4z%2BNZVG6WyhnY9h150K6g0NuYBuWauCWW%2BifLukHPim%2B8oHtMm1Kdgy6qD81OKeXNleC7ir%2FATqDHUXTGDY6OXTgGqi2kqa4U4HrhVtji0IkUAnn0ok663qDliLBrG5vU7SvMQhNwskNTSz6TVysmVRH0%2B5cvOEHOtS%2Fa7T%2FRWfIhMfyoEQVtpgDgs4hKMLe2r78GOqUBxTdodYy6IMAphNzUCwGhcBOuY9nffDhnrDEBzyDPndJzDU8jbqjbf4RiEY7d07YhMuZuGHhUi%2FSiESEJJ2fiNX5%2F4xyhxJywIWjmcTMdvtGyBLECpXBbm0me%2BxM6ANSBmOZ7VrQ%2FN0zEXV6gh3HPd4Pb4RfkKO%2F6DmV8cfZq81pJ2N4BrznGvN%2FdOBzBYvoIz3h0dHOQh60u8gBYr10NFX5%2BUzWR&X-Amz-Signature=16ac9932d37f090f3cce4d7e6fd5f28eeca1fd1bc6c7a5bf13e77fec38b5d39d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
