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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXHDSIH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAfcBjkuTiQlN3H%2B3%2FfjlASYFA98fDP6Z4NuB%2FRD2QJDAiA2WR%2F2q4nAM%2FLb%2F%2FjO6ltIjjdJRO14E7jHabbY3qlddyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMd0MTpGAeNDICYL9hKtwDRbkf0jqMGnT9VhD7sDvdA7qKKT4pIIwdqcMZTtGDyn2L4Px5a3kW1ezQCRtG9tOqJpwfpgg2ZblvrN55Y0GNfREaR359Ef88oO7rpyIFWGldBVvGo9JsIUViqF5Bgff5yCONMxqMt%2BJY4ua%2BTZW33GjZauPlB9gUmDjHPHt9vwhWlgsNlMszjY9WriOhohHshFQYVpOEpeNxaFL10LixZ0M2E8aUKwhCZ4ynzDIpKDSn7RLqgyUbvMSGS8QnQT%2BTc%2B0clrMWQ0j%2FN5naDQtM6J1sCob2ZT43ff1g%2FUylIk5wg47LrkGW1n9rJ%2FkRCkDZJpYwmOH4KAthOm0yVSrMsYvx7w9NJMCAPJgwNYBeN2natSpXLa5hjI%2BXgL9B%2FoF1JujTq2legycicv6lYPpEzp1Y%2BuPYNj84%2FoBkQ85pGUM%2F1eAYEJ60o0YjW%2Fe%2FdDfgrOFO1DC%2B1RXSvxpEyR%2BRW6U35HM9PeE8DBSbEiEZL2h0LBowPSsjqOdIysqkVuiUaIojMB0EyJbfqpzhChSxZL1tNcGkrmIhRo7E5zGxLMMCzDM4C0hL0Z%2B2LVQhZuVLt52bQVeVDBihIZt3LjPCPCjoFTvVSFdzhEZxNnGjUhghqY%2Beztcxzoo3%2ByEwg47QwQY6pgF9JBGRVbGnL1XV1Q3gLnaxaiEMen7i6qbfEiwyYshTPo9vz3WnWrScD3w9ATo3dv%2BbKfqHD0NYPsPvvzUvOewMHa3V3fIRF6w4okPAhP8B6nVwQbHV1yB2Ozm2PtVQOcoyfiqJAut%2FLuKeZGLAF2yA6LbSUj1dNwnzkdU2L8asjR03jJ3EqL0fGpXLlquFLB42hrTiqLdo3fDa6O9948c6kyFtbOgS&X-Amz-Signature=4b06737e0621bab9faaa97edbabb5536b91707916a952f958847a707102c56f8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXHDSIH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAfcBjkuTiQlN3H%2B3%2FfjlASYFA98fDP6Z4NuB%2FRD2QJDAiA2WR%2F2q4nAM%2FLb%2F%2FjO6ltIjjdJRO14E7jHabbY3qlddyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMd0MTpGAeNDICYL9hKtwDRbkf0jqMGnT9VhD7sDvdA7qKKT4pIIwdqcMZTtGDyn2L4Px5a3kW1ezQCRtG9tOqJpwfpgg2ZblvrN55Y0GNfREaR359Ef88oO7rpyIFWGldBVvGo9JsIUViqF5Bgff5yCONMxqMt%2BJY4ua%2BTZW33GjZauPlB9gUmDjHPHt9vwhWlgsNlMszjY9WriOhohHshFQYVpOEpeNxaFL10LixZ0M2E8aUKwhCZ4ynzDIpKDSn7RLqgyUbvMSGS8QnQT%2BTc%2B0clrMWQ0j%2FN5naDQtM6J1sCob2ZT43ff1g%2FUylIk5wg47LrkGW1n9rJ%2FkRCkDZJpYwmOH4KAthOm0yVSrMsYvx7w9NJMCAPJgwNYBeN2natSpXLa5hjI%2BXgL9B%2FoF1JujTq2legycicv6lYPpEzp1Y%2BuPYNj84%2FoBkQ85pGUM%2F1eAYEJ60o0YjW%2Fe%2FdDfgrOFO1DC%2B1RXSvxpEyR%2BRW6U35HM9PeE8DBSbEiEZL2h0LBowPSsjqOdIysqkVuiUaIojMB0EyJbfqpzhChSxZL1tNcGkrmIhRo7E5zGxLMMCzDM4C0hL0Z%2B2LVQhZuVLt52bQVeVDBihIZt3LjPCPCjoFTvVSFdzhEZxNnGjUhghqY%2Beztcxzoo3%2ByEwg47QwQY6pgF9JBGRVbGnL1XV1Q3gLnaxaiEMen7i6qbfEiwyYshTPo9vz3WnWrScD3w9ATo3dv%2BbKfqHD0NYPsPvvzUvOewMHa3V3fIRF6w4okPAhP8B6nVwQbHV1yB2Ozm2PtVQOcoyfiqJAut%2FLuKeZGLAF2yA6LbSUj1dNwnzkdU2L8asjR03jJ3EqL0fGpXLlquFLB42hrTiqLdo3fDa6O9948c6kyFtbOgS&X-Amz-Signature=4effafa7d057b084fee06ab9a064ddbbe544fb2c73072ebf88189d69476627f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
