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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYGJYSNU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAFoA8ytbteupLeavY2WQrc2FEoHFjJI5ZNiBiKkujI1AiBIq%2FOhj726LR9JGMWjMxLJbpkE%2F06uBJjEWMgEId3xBCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FsMpPAW%2FYFsptM3gKtwD%2Bd5bxlTkJ7nvOZgN1mlZec5Cnr8r1QQk98QwJfn9rSiuzuy5cbFh21YbyB8FZORNq%2BzjV7UWimqLj39uUGubTfmWAOX05uELIuvxGR%2BogdsOr91ADTLFE4hUql9s%2Frhp%2F%2BcJvyzLajq5897OfyDL%2FwmMMg2gWsCozshfJIhBt9X77T4mr5%2F44oDpbcZAFQakkJbnR3Bil6EjKqhH2qJvsbvnAlSKW6%2B5uZpjz%2BNqEckmYEUv9tHmVgFmCIFJYAfWZAPA6wuRmJiPdPYHgd%2BvPebt4NGqfIL0guVuoy8nXIYAdYtWaabJUdT6hB%2BnLDzqjszHYL1V8%2BQowHuMiu3eupXzSYOveySTF26j52SemMhyuQKRsx%2FzLXagUxj8p1W42XiGTXD%2B0oLjVkJa%2BQ89S%2FmOFBvyrSV20Q1FHAy3W4eTTepax5YkqkrpeodSuiA6EEg%2FJRxha48ClLBbr8KVs5XxK4hRiG6Tn%2BUBMLxxvmeH99T9fLlsUCFMEcLDmzOKsjMH1UlkhEJ63uu6OGfCixkccL%2Bph3Q0BdmCAZYAu%2BgRYwJqnB2tN43GYwkbmTrQVpFOOzFyH7Az46tjyiP9dSZjgeZbjbzPSDqoG8DRVoCGAQfTKd4XL1IlHGAww7X2wQY6pgFtcRPpPYPhXbS320Qbo53yG%2BV9Hv%2BXeyvqSrT%2BaH20ZyYW5xvlhh1uF9HkyNeXIDao1Qm9CB%2FdHwllqnihhQbA5Mwu7yIN2tW7ZV4W6OpydqOfPhh4iISM%2FubEjEaRtCNrpQEpXdVASRVZsIO7sqIcwX2SbpT0Exy%2FwbXa5gDTSJz2XYAxQ8YZSq9pdh17rhkEdSPlQx6TMnQmzXDnU7vY7rKsLSwC&X-Amz-Signature=4608f36cfdd025dd28b6c4c0f151b4ac5c2aa940a60d97ed11bc94b026f49f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYGJYSNU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAFoA8ytbteupLeavY2WQrc2FEoHFjJI5ZNiBiKkujI1AiBIq%2FOhj726LR9JGMWjMxLJbpkE%2F06uBJjEWMgEId3xBCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FsMpPAW%2FYFsptM3gKtwD%2Bd5bxlTkJ7nvOZgN1mlZec5Cnr8r1QQk98QwJfn9rSiuzuy5cbFh21YbyB8FZORNq%2BzjV7UWimqLj39uUGubTfmWAOX05uELIuvxGR%2BogdsOr91ADTLFE4hUql9s%2Frhp%2F%2BcJvyzLajq5897OfyDL%2FwmMMg2gWsCozshfJIhBt9X77T4mr5%2F44oDpbcZAFQakkJbnR3Bil6EjKqhH2qJvsbvnAlSKW6%2B5uZpjz%2BNqEckmYEUv9tHmVgFmCIFJYAfWZAPA6wuRmJiPdPYHgd%2BvPebt4NGqfIL0guVuoy8nXIYAdYtWaabJUdT6hB%2BnLDzqjszHYL1V8%2BQowHuMiu3eupXzSYOveySTF26j52SemMhyuQKRsx%2FzLXagUxj8p1W42XiGTXD%2B0oLjVkJa%2BQ89S%2FmOFBvyrSV20Q1FHAy3W4eTTepax5YkqkrpeodSuiA6EEg%2FJRxha48ClLBbr8KVs5XxK4hRiG6Tn%2BUBMLxxvmeH99T9fLlsUCFMEcLDmzOKsjMH1UlkhEJ63uu6OGfCixkccL%2Bph3Q0BdmCAZYAu%2BgRYwJqnB2tN43GYwkbmTrQVpFOOzFyH7Az46tjyiP9dSZjgeZbjbzPSDqoG8DRVoCGAQfTKd4XL1IlHGAww7X2wQY6pgFtcRPpPYPhXbS320Qbo53yG%2BV9Hv%2BXeyvqSrT%2BaH20ZyYW5xvlhh1uF9HkyNeXIDao1Qm9CB%2FdHwllqnihhQbA5Mwu7yIN2tW7ZV4W6OpydqOfPhh4iISM%2FubEjEaRtCNrpQEpXdVASRVZsIO7sqIcwX2SbpT0Exy%2FwbXa5gDTSJz2XYAxQ8YZSq9pdh17rhkEdSPlQx6TMnQmzXDnU7vY7rKsLSwC&X-Amz-Signature=de44fdc65f5ed8417d761240b43864484733c03d5082730621e7cfaa21e8e8ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
