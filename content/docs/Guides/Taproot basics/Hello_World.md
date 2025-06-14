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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HG6OZYW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFDNfhzhFfKHhMabVEjf6xObBcJM%2F8nEfer%2Ffyj9dgjGAiAb6WL%2BU5hEablffLO3BWCWhQhwD6NmOOV%2BhfCCvPbqeyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMT1PmrJV9RrH4L3NwKtwDcAbJD2Jm2SWa8R6%2BTdTa4OZVWGBve5lyRfQ85%2FZ%2Bj%2FfvYX8tUrQ%2BIeHWwrlPlP3A7muMii6TbUiuejFO4jHTuz20ynddGD%2FFP8qvP5sPVfDM%2BtvgBtBn%2BFkTZJVOE5I7pU0ywizE0hzMfD34ij%2Bs0Bb6cVMwKEuk%2Bgamn%2FsSxOHRo6NTnlQFgcbXmPdn5sVxISXZ7CpwD7641FCCtBZQI6pPiyGtBC%2B%2BsYegR7qjXEjIWr34tsZn5OOwxSznP4gw69Z050ADnl2JtrjRMQNw%2B6CxN%2BkEqMMC%2BN963a3XochUPAqGKpY4K1J4qv61WYXXIM1ciRpw5rvBK2Ot1Wdk%2FMCrZ%2FFMpGZnCkuR7D4XvJGmdUm6HTEZL7dls%2BwfGHoyLO%2FtBiwCBkbkcmXf9KMYRoSRAvuF%2F4r4H2YSsGlT2aeTUb0ew1KqANQXhCMXX0cTQ0rxOfZq7A7kaZQkF%2F3CPYBCadsb7t9uHGjyolRLvLmwaxSFrj2RMJZN36duo1YB%2FkG8h4DuEmiW9%2BgOf73b9cy2FrvNKgqKCpL6UYNlr5ZO9gCCiUM%2FHcjdpCto6Pj9t2dw%2FeYYp5wadRic3oSy2XCYolP%2FEuUQwvzxoEHvLYCIX5VYPEjebFNdA%2F0wkcy3wgY6pgGcxCmt8qmTS1uxfMV0bwkBXZDHT8Z2NkOf5VLxiJiiYTPqssI%2FnX3qcwMm%2Fck7Wg9N%2BqtFWqCyHM3fh2a062qRCJ6Bf9YjUqU%2BAD3mH9bvyubRucBzDQlOWrQPZl6hxGfg1KVhs71z4lkycjlbDo6DtxQXdjPN5G2L2DMrsbLJuD6V60QbaGaLWylFrbnZcSnO1tc0E4hw39YQpSY1ofMwuTlDQaH7&X-Amz-Signature=421e76b22f6d3e9aa08d6e92cb3d17ff093c64c04a61a7741d41a25de9e000a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HG6OZYW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFDNfhzhFfKHhMabVEjf6xObBcJM%2F8nEfer%2Ffyj9dgjGAiAb6WL%2BU5hEablffLO3BWCWhQhwD6NmOOV%2BhfCCvPbqeyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMT1PmrJV9RrH4L3NwKtwDcAbJD2Jm2SWa8R6%2BTdTa4OZVWGBve5lyRfQ85%2FZ%2Bj%2FfvYX8tUrQ%2BIeHWwrlPlP3A7muMii6TbUiuejFO4jHTuz20ynddGD%2FFP8qvP5sPVfDM%2BtvgBtBn%2BFkTZJVOE5I7pU0ywizE0hzMfD34ij%2Bs0Bb6cVMwKEuk%2Bgamn%2FsSxOHRo6NTnlQFgcbXmPdn5sVxISXZ7CpwD7641FCCtBZQI6pPiyGtBC%2B%2BsYegR7qjXEjIWr34tsZn5OOwxSznP4gw69Z050ADnl2JtrjRMQNw%2B6CxN%2BkEqMMC%2BN963a3XochUPAqGKpY4K1J4qv61WYXXIM1ciRpw5rvBK2Ot1Wdk%2FMCrZ%2FFMpGZnCkuR7D4XvJGmdUm6HTEZL7dls%2BwfGHoyLO%2FtBiwCBkbkcmXf9KMYRoSRAvuF%2F4r4H2YSsGlT2aeTUb0ew1KqANQXhCMXX0cTQ0rxOfZq7A7kaZQkF%2F3CPYBCadsb7t9uHGjyolRLvLmwaxSFrj2RMJZN36duo1YB%2FkG8h4DuEmiW9%2BgOf73b9cy2FrvNKgqKCpL6UYNlr5ZO9gCCiUM%2FHcjdpCto6Pj9t2dw%2FeYYp5wadRic3oSy2XCYolP%2FEuUQwvzxoEHvLYCIX5VYPEjebFNdA%2F0wkcy3wgY6pgGcxCmt8qmTS1uxfMV0bwkBXZDHT8Z2NkOf5VLxiJiiYTPqssI%2FnX3qcwMm%2Fck7Wg9N%2BqtFWqCyHM3fh2a062qRCJ6Bf9YjUqU%2BAD3mH9bvyubRucBzDQlOWrQPZl6hxGfg1KVhs71z4lkycjlbDo6DtxQXdjPN5G2L2DMrsbLJuD6V60QbaGaLWylFrbnZcSnO1tc0E4hw39YQpSY1ofMwuTlDQaH7&X-Amz-Signature=3f2039c226cbf4fdc0d3df2b198053e1707386b4d03f5f60a618500811350f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
