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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQ5BT4P%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkUBea9yn55vKUbRKTTSRSUKv77kKXUcuYbaHm8YxM7AIgeNK%2BIF6HOQx1oQpbURF1J0OlnGLnZ1naWpeeNADCfdcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLg4byn4sibzNLBE5ircA6evgoHKPA3cHAn4LZJgF7CTj%2FuLgtDJxPkzdkFKgnv9phgrSjnoTHnOfVYnbNCottiHeHBPvcQN1cA0XyTLZL6%2B9D8u7BZ8XowFhZU1XBsgHH7I8Q8UA7zfJCopDteWG6E%2Fvg%2B87uN0pP4bcvb%2BZ2sCCpsAar41Wyl0%2BlOf%2B077FU%2BckV0wvcqJsqxLwuDGRZdX2pd6SFzCG0DRDUmvhEjpZaLBoXzH4MCF11VMzbT9z%2Fj%2B9DAn1OzdERTD4Qh3i5zWxt9lj2i9oW1PoQdIbAiW%2F0eZXxZI%2B%2F6Nve4O8rKr5dPMNlCwuoZYaCYT5izHuvNpCKDnXZC5kUtIshBPn8gOPbbTwnU4MLH%2Fz1gV0wPHyVp%2F1gzocV0jsQe1Mi42AzPzfViEyeXwW0F%2FZBWP4N%2F0zoG66h36iBdIMq0Wxih5zs3Hy1xbULclE6N9OtUb9b2ASw7ulVCWJ%2BfZZQX9jvU3I2ITQyj46ubgIGphI2viz27OehYYplvauvLTYjjb4Z2viFB9UCSnZnD0jui5euAy4WUJ6UKZwFxYo0Sc6QTqPI1xcdKl%2BdmxXB8kOHPzu6VryneoMGWYeUIWinNZvQwuwj%2BBT7jL6zgvL8w%2BV8Y2zyIoyLZnPiKUlUqpMKbTpb4GOqUBJOZgIGc7wVJ%2Fuffxu64KIopFrp%2FJf%2Fph86m3O98fxez7xMtEgLdU0WkkKtnL7SJMT4eQ4b18tyHvpv8hGnbxpGrJ7LE48hIswYp1pX%2FYQXqs5B4%2BkxnqjP80Y1W9Q%2B66SC9%2F0rwCDQVJM2lngKiNNwBJIZWpTdZB9vpGUNXjLd2ifR0XfoWmpVoUjDLdb9uFcyqt%2BUiK%2FgmJaR1cclkY19Jl3%2FOg&X-Amz-Signature=fa2c6e3875ec45f95a043a478b19d8cb1a3d2ea4fe39f961b082f563f5a07e09&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQ5BT4P%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkUBea9yn55vKUbRKTTSRSUKv77kKXUcuYbaHm8YxM7AIgeNK%2BIF6HOQx1oQpbURF1J0OlnGLnZ1naWpeeNADCfdcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLg4byn4sibzNLBE5ircA6evgoHKPA3cHAn4LZJgF7CTj%2FuLgtDJxPkzdkFKgnv9phgrSjnoTHnOfVYnbNCottiHeHBPvcQN1cA0XyTLZL6%2B9D8u7BZ8XowFhZU1XBsgHH7I8Q8UA7zfJCopDteWG6E%2Fvg%2B87uN0pP4bcvb%2BZ2sCCpsAar41Wyl0%2BlOf%2B077FU%2BckV0wvcqJsqxLwuDGRZdX2pd6SFzCG0DRDUmvhEjpZaLBoXzH4MCF11VMzbT9z%2Fj%2B9DAn1OzdERTD4Qh3i5zWxt9lj2i9oW1PoQdIbAiW%2F0eZXxZI%2B%2F6Nve4O8rKr5dPMNlCwuoZYaCYT5izHuvNpCKDnXZC5kUtIshBPn8gOPbbTwnU4MLH%2Fz1gV0wPHyVp%2F1gzocV0jsQe1Mi42AzPzfViEyeXwW0F%2FZBWP4N%2F0zoG66h36iBdIMq0Wxih5zs3Hy1xbULclE6N9OtUb9b2ASw7ulVCWJ%2BfZZQX9jvU3I2ITQyj46ubgIGphI2viz27OehYYplvauvLTYjjb4Z2viFB9UCSnZnD0jui5euAy4WUJ6UKZwFxYo0Sc6QTqPI1xcdKl%2BdmxXB8kOHPzu6VryneoMGWYeUIWinNZvQwuwj%2BBT7jL6zgvL8w%2BV8Y2zyIoyLZnPiKUlUqpMKbTpb4GOqUBJOZgIGc7wVJ%2Fuffxu64KIopFrp%2FJf%2Fph86m3O98fxez7xMtEgLdU0WkkKtnL7SJMT4eQ4b18tyHvpv8hGnbxpGrJ7LE48hIswYp1pX%2FYQXqs5B4%2BkxnqjP80Y1W9Q%2B66SC9%2F0rwCDQVJM2lngKiNNwBJIZWpTdZB9vpGUNXjLd2ifR0XfoWmpVoUjDLdb9uFcyqt%2BUiK%2FgmJaR1cclkY19Jl3%2FOg&X-Amz-Signature=55b2c2c1b782d9542dfb19a982b8e5c31e361777d989673751f0ebf6a66dcdcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
