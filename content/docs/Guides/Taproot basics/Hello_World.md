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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6UHBNLB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5yzZ3znTZ3Xj2D8bhWKDk0Gia4AWk%2BOcFKicTHLlEwIhAOZiITmvOW6KfUJR5jIawzmCz8dfV%2BGsux423pqRmqy6KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAqob9Ed9hXgjjAFwq3AN4nODkX2Phjn4O6XcoLFe7smO7hLjf0GgRgOxp%2FvCkwDPeGxPiHvZ%2BaSowuCkMbX%2FG511grWoeTZFXHBDoipUv1Qaiq%2FnoB3Q5jU4E9bshB0Ivc2kCF9tN3LngNXCr2DDzTzRcN%2BleO%2BN1TzDF8%2FQAI4H1oHCwghWYonPgo2nH9VQBc6JunskXTillaJ6n1LJv2QPVpu5sTEGdcCHYmyjgKJ4iuc0fOUj9kObjWQ1DmKlZ19hzWzqtzTnL6NovoyKPbv586H07OGolP%2B1GKCbN6q7kVI0312jtkHf2LXAWrkwwq86w5mYbGWW%2Fm%2FtdSgHM4mQgSElxsXYOPSPG5I%2FKyOxwp0%2BnBPzm3tVgAlM6JrGKj7Aq7soH2FyjFwUW%2Bu71pYf8GaaGhHhGq%2BB2ewjkVAgB5QLn%2F3aZDcnMzIPswhgX4OTOav22VKqtkb9OOU2TG%2Bl0AuFKTq2xZpaZOgRNmQlHivK42frOUVIiquxr4nSBWJ6njnED8ajYYKemu6W9YNuEu9Evo63Vxu2ZxBnjTW9tYdL4JBYo5c130vSW%2B3kbdTH7ZgKAXud7%2B9sYI%2F2FiJA%2FIWqwIRcPZ2SS9ksJ6Kjoxvy46OKjS0lZF6IPMk2Hy0CI3sJq0gytQDDfxpu%2BBjqkAQoAIf82NhZsvXCUyh6tybjFeW8oAbI0w9tcrK1KCXnU%2F4yTzcrTW7eufRmENd%2BtF%2Bn1g1p9gRAPCu0GUyN9C4lzAFxOmNU99dtJ0eOJGBBqPGf1Lspe7tDGzYEO%2FLABMHXx1VD769mLWWIKyemVyN7fCul12Re%2B38%2F786%2FGC%2FW38%2BDW7%2F92HRxzHDDndLnJTagVdhzpIC33Ctg6xMssJ20%2FBS%2F3&X-Amz-Signature=6e5277e8f90b865a2f160dd627cf03f0d7db9048301a8160edbaff429d8661f2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6UHBNLB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5yzZ3znTZ3Xj2D8bhWKDk0Gia4AWk%2BOcFKicTHLlEwIhAOZiITmvOW6KfUJR5jIawzmCz8dfV%2BGsux423pqRmqy6KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAqob9Ed9hXgjjAFwq3AN4nODkX2Phjn4O6XcoLFe7smO7hLjf0GgRgOxp%2FvCkwDPeGxPiHvZ%2BaSowuCkMbX%2FG511grWoeTZFXHBDoipUv1Qaiq%2FnoB3Q5jU4E9bshB0Ivc2kCF9tN3LngNXCr2DDzTzRcN%2BleO%2BN1TzDF8%2FQAI4H1oHCwghWYonPgo2nH9VQBc6JunskXTillaJ6n1LJv2QPVpu5sTEGdcCHYmyjgKJ4iuc0fOUj9kObjWQ1DmKlZ19hzWzqtzTnL6NovoyKPbv586H07OGolP%2B1GKCbN6q7kVI0312jtkHf2LXAWrkwwq86w5mYbGWW%2Fm%2FtdSgHM4mQgSElxsXYOPSPG5I%2FKyOxwp0%2BnBPzm3tVgAlM6JrGKj7Aq7soH2FyjFwUW%2Bu71pYf8GaaGhHhGq%2BB2ewjkVAgB5QLn%2F3aZDcnMzIPswhgX4OTOav22VKqtkb9OOU2TG%2Bl0AuFKTq2xZpaZOgRNmQlHivK42frOUVIiquxr4nSBWJ6njnED8ajYYKemu6W9YNuEu9Evo63Vxu2ZxBnjTW9tYdL4JBYo5c130vSW%2B3kbdTH7ZgKAXud7%2B9sYI%2F2FiJA%2FIWqwIRcPZ2SS9ksJ6Kjoxvy46OKjS0lZF6IPMk2Hy0CI3sJq0gytQDDfxpu%2BBjqkAQoAIf82NhZsvXCUyh6tybjFeW8oAbI0w9tcrK1KCXnU%2F4yTzcrTW7eufRmENd%2BtF%2Bn1g1p9gRAPCu0GUyN9C4lzAFxOmNU99dtJ0eOJGBBqPGf1Lspe7tDGzYEO%2FLABMHXx1VD769mLWWIKyemVyN7fCul12Re%2B38%2F786%2FGC%2FW38%2BDW7%2F92HRxzHDDndLnJTagVdhzpIC33Ctg6xMssJ20%2FBS%2F3&X-Amz-Signature=46fff5d664da5a1b9380ab6a397628aec2633d1cd9a3ab8368d16b1854553c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
