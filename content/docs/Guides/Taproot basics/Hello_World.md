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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7764DN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDkEb7iigm1Rfl9%2BMMJxP0Dv1uHDYvdFx%2F8ICCvjHdjCQIgcfCB0yTNKQV2psBV9%2FS5QUn%2Fz3oXX%2FBNj4ozUu0l2tQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDnzQdju%2BdK6RYvPhCrcA4A0GYRAlesvp5x41FtdN%2BwMU%2Fslsb%2B%2B%2FVm6bUWogJLIsUwVrkPAVlmQalLGTQ1hzRUCWxdZw0etj4amp96Gz%2F6q9ipcNq8DG8483tisy%2FtzmvXWcRVs4MIGsi2cDKlhy8wF2%2By3Hel2zYuCJX3%2FjZSA3TgHZYOXmuEKrxZluyKNnKPJjKDkKcdBdsYKDRYvW4oscK6QwrvExeQwdEAEl4y9ZuclF1%2F%2F9rMJGtWoOW95sgv4N5oThvcCaFdLaR5QJx3F5AVwf6YwkV%2BDSHpmU8hwLkE6ADRgGXuhKLYL%2BuP1MwYSx%2BT3SeuYPveg%2FyM1kqL8bcANZTjnLdEc1GKPzIEDsdJczDb8npH9%2B4OaveuT%2FnI5Xfo7aF4bCdkH6qdveQ6kqQOw%2Fo6cGTXUlgbUwA7pcGLWjC6kPDxVjwepujdF2W9P3PBUyaomXi0yOedcKguHvEjnRiH839LLH%2Biy80ZJOVYTbfStA5tEl6pXn7yBU6WTMkQiByIIV9fNouaKzlc%2Fyd7hf7pYkg4UlzQp%2B9nxtiQQp5ewZPS3buECIUrVhnfBdXQGxRLhaPT0FNSP%2B%2FL6P93emtBqPmzN9MRV3TdWPiWCU4XLPgd2QMH7HnwGoOnWtAw8lqV9MITrMIP0iMIGOqUBC2X05796EWm7c%2Bjd7sicrmTXMvJd9Exn4kDvUYabFEAWbkFncVxgkm9SjaOYWPqqCWh2d%2F0qXgc5X0dgExRhAYiGyqPy83ouYGDkqmxY5txUIeldBp1tFswjFalSqkqNeAuoPcZ4aLafSOR2ResnGBIdnn1CcfF78hMInObO4qi9Vb3GXt6xjPNDMP4xIp7P3yb38%2FJ9V9OTkL%2FYNK%2F8M%2BaSXIxq&X-Amz-Signature=f38bac91a455ee334c01b848ac2bd0a46772f12a412297493b314cd45afd0d80&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7764DN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDkEb7iigm1Rfl9%2BMMJxP0Dv1uHDYvdFx%2F8ICCvjHdjCQIgcfCB0yTNKQV2psBV9%2FS5QUn%2Fz3oXX%2FBNj4ozUu0l2tQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDnzQdju%2BdK6RYvPhCrcA4A0GYRAlesvp5x41FtdN%2BwMU%2Fslsb%2B%2B%2FVm6bUWogJLIsUwVrkPAVlmQalLGTQ1hzRUCWxdZw0etj4amp96Gz%2F6q9ipcNq8DG8483tisy%2FtzmvXWcRVs4MIGsi2cDKlhy8wF2%2By3Hel2zYuCJX3%2FjZSA3TgHZYOXmuEKrxZluyKNnKPJjKDkKcdBdsYKDRYvW4oscK6QwrvExeQwdEAEl4y9ZuclF1%2F%2F9rMJGtWoOW95sgv4N5oThvcCaFdLaR5QJx3F5AVwf6YwkV%2BDSHpmU8hwLkE6ADRgGXuhKLYL%2BuP1MwYSx%2BT3SeuYPveg%2FyM1kqL8bcANZTjnLdEc1GKPzIEDsdJczDb8npH9%2B4OaveuT%2FnI5Xfo7aF4bCdkH6qdveQ6kqQOw%2Fo6cGTXUlgbUwA7pcGLWjC6kPDxVjwepujdF2W9P3PBUyaomXi0yOedcKguHvEjnRiH839LLH%2Biy80ZJOVYTbfStA5tEl6pXn7yBU6WTMkQiByIIV9fNouaKzlc%2Fyd7hf7pYkg4UlzQp%2B9nxtiQQp5ewZPS3buECIUrVhnfBdXQGxRLhaPT0FNSP%2B%2FL6P93emtBqPmzN9MRV3TdWPiWCU4XLPgd2QMH7HnwGoOnWtAw8lqV9MITrMIP0iMIGOqUBC2X05796EWm7c%2Bjd7sicrmTXMvJd9Exn4kDvUYabFEAWbkFncVxgkm9SjaOYWPqqCWh2d%2F0qXgc5X0dgExRhAYiGyqPy83ouYGDkqmxY5txUIeldBp1tFswjFalSqkqNeAuoPcZ4aLafSOR2ResnGBIdnn1CcfF78hMInObO4qi9Vb3GXt6xjPNDMP4xIp7P3yb38%2FJ9V9OTkL%2FYNK%2F8M%2BaSXIxq&X-Amz-Signature=531d61c2e469460d2d1fab30b104b94c1c6e2fe57b380f6261c418ba6bdd423e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
