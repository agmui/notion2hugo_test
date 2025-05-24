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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VD3FJ7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFEoF6UYdQEVnvnZz2J4RPsjjp%2B2ZBqmrE2jhBtreB3IAiEAiJXe1arUpCcsUsGcajys8FpSEAVEF%2Flsc6Sn23Wle5AqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFBwA6gp%2FElfMp4UircA9SVJmR1EPavlZdlhDTg0iJ1EWwd8nBzEpT6sUqcVTqL%2Bd1DV3VhKbYoZeH4U9DMAO9f8K0mfXHYcGRpceOkdcxFpNRoCrl1FX376DTYks%2F%2B4utpN3GLt%2BUUtutQfc0OTBEXUdl5aeHdSBAYz1dI4QoUjqbgjFu7iwnOu6CYqCL%2BOcfRjtX6bcdRN%2Bkf4t%2FAg7B0PTL%2FM3gtA58%2F4dIIFkshdCFknlfprKJ8cjCeNgxYxdp3ZUT%2FVTNSBhrR2PnNkuxfx5PtF24SSd8%2BL0dV%2BdRBDVEutXjIYKuQeV8Ae7YExsaw1SzRn%2BQQGLuJvqnPY0SFGNnsNCXrJh%2FNjHOdq5EEjrS2QSRnWFcnKg89xIK3VYCP8rASHgToqrVS8EGVwwfYb3ySfTMnI3liinFqThkDAPlKXgEi%2F8ezGQjzr0Y45yhR0G4s8lUSxU7MpT6Pb609a7cb9D2nb7KBoZFETO6JjzcHsYB%2FluxySw%2FicyQTsbSZlBy4pOsVebhZCKJFyeJZmC5ZaSM5y6znlNDSM1yrFJNRMi1dkBtOeMCHvtR8KvEox7WBxp%2Ffap4dR%2B3wy3xKXv1V1relH1mVnPvLzxzQw6ttLmVWhMVBBYM5b8fviR8sgF3oY6ZfcBPlMNaPxMEGOqUBqGA28MwroBcIOv3kMyw9Nq3LoigePo3IeoB2IXlPLkYMzM20yRD9bgaPWNW2utg%2FTFIkeSGvrrEybu7uERAujSp4xsJ1Ynyc%2BWH0eCiAJxuwigJvUFqhQBovJrqRmPmx7Ai5eNEy9EAz%2BoOJSHAQhetgeIyj%2FBUMExL7ZWnJoiuxros5CQMvhrQ%2FUYTpxoRB8BJYtU5hn5kYSSE5xIgR492QCybP&X-Amz-Signature=eba700526eb73fdb38512a626c7e8ac7b6213eff8b13cb92e87bf2c965b2d100&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VD3FJ7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFEoF6UYdQEVnvnZz2J4RPsjjp%2B2ZBqmrE2jhBtreB3IAiEAiJXe1arUpCcsUsGcajys8FpSEAVEF%2Flsc6Sn23Wle5AqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFBwA6gp%2FElfMp4UircA9SVJmR1EPavlZdlhDTg0iJ1EWwd8nBzEpT6sUqcVTqL%2Bd1DV3VhKbYoZeH4U9DMAO9f8K0mfXHYcGRpceOkdcxFpNRoCrl1FX376DTYks%2F%2B4utpN3GLt%2BUUtutQfc0OTBEXUdl5aeHdSBAYz1dI4QoUjqbgjFu7iwnOu6CYqCL%2BOcfRjtX6bcdRN%2Bkf4t%2FAg7B0PTL%2FM3gtA58%2F4dIIFkshdCFknlfprKJ8cjCeNgxYxdp3ZUT%2FVTNSBhrR2PnNkuxfx5PtF24SSd8%2BL0dV%2BdRBDVEutXjIYKuQeV8Ae7YExsaw1SzRn%2BQQGLuJvqnPY0SFGNnsNCXrJh%2FNjHOdq5EEjrS2QSRnWFcnKg89xIK3VYCP8rASHgToqrVS8EGVwwfYb3ySfTMnI3liinFqThkDAPlKXgEi%2F8ezGQjzr0Y45yhR0G4s8lUSxU7MpT6Pb609a7cb9D2nb7KBoZFETO6JjzcHsYB%2FluxySw%2FicyQTsbSZlBy4pOsVebhZCKJFyeJZmC5ZaSM5y6znlNDSM1yrFJNRMi1dkBtOeMCHvtR8KvEox7WBxp%2Ffap4dR%2B3wy3xKXv1V1relH1mVnPvLzxzQw6ttLmVWhMVBBYM5b8fviR8sgF3oY6ZfcBPlMNaPxMEGOqUBqGA28MwroBcIOv3kMyw9Nq3LoigePo3IeoB2IXlPLkYMzM20yRD9bgaPWNW2utg%2FTFIkeSGvrrEybu7uERAujSp4xsJ1Ynyc%2BWH0eCiAJxuwigJvUFqhQBovJrqRmPmx7Ai5eNEy9EAz%2BoOJSHAQhetgeIyj%2FBUMExL7ZWnJoiuxros5CQMvhrQ%2FUYTpxoRB8BJYtU5hn5kYSSE5xIgR492QCybP&X-Amz-Signature=3f6400a72887e710dd03fc77655c649f9f99a322647b8456c6d6f0b4fab45b39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
