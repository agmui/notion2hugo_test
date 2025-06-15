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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFZ3OYT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICft0KGNtWZH60XCg0xNIM0yLalHBD8E3vWwL4wyy1RYAiBB6K1hebJ3KXjl3ZYBkBAl73ru%2FtobzM85jlN8j1MgiCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMGadOwfjQQm8FDr44KtwDG4qYsP5yNSY40SsGfNLVihNCu7NMbPMUKRmmd7quVv126SRrYZ5HotTBk3fSy5KE2F%2F9I0R1N9P1S77OqO7aIDnDJjNlIj3VOLBi21wAnx8Jv7Xwqth5NKea37HjKjhHhhpVBJiPtk1IXiMa92cy24t8t1M19BlYP1HZXECgKSHorsl9Xb3Li5QHJxdzPFyvdUgyyrcrx4TUJ6eBh4gghvyqmb8TYxw5da0e%2Fksb5zlbNDGsOsibeBf%2Bp3usouXN0KuUmmGEmPxI11vhr6b%2FLMqvTIgyWoCIk1XZCeUiidmQsZMJHzAH7ZO3czUJTAzlykreFkY8V9Fhq9B83K%2BqxX769bhVF6rgd4u6XFLT%2FvTNTBleaZcZqNatbreen6Vm3iONn8QIhulMD3uMqsBTVms40%2BelRjtNOPROiQQNOTZvUrgk5PflFxvzgXUJqQfwL0xk%2Fnz7hk8akAsHTf1o8b5RXF66HEnj1nZsLERM98jzaDc%2Bxo5WAGY81qt9TF62Uge7qr%2B2YbPbNStILu%2FEpHzLsGZabnX%2FJ6UzawBjBZgj5gpTUVMiLNab6BNIaYhH9c29nrKo00wb2%2FQ4xX41GeKkqTEGaAMUPwR8f%2FqY2HoO%2BKQ5z0r3ospsKDowt6K4wgY6pgEMaA%2F9Zo%2Bk2b7NEcdvFEZEyjvD11Vy8ysqkTRa940uBRuS%2B9yF3E9IRmrRrpuFTmvZGgAiebZOk%2Bkr1Jk79QlelFr9pewahYuiZj03K%2BMfAfVKtmUksH34L1igp%2B0n%2BS1IP%2BVB90pz6drAsOwcB%2BvWrWEnP5v%2BZ4TKEYnPqpO1v%2FWBu9haN3wgvT6YLCMpG9SaQg98UYwaDrYfFmYhZDzicOkPy2kQ&X-Amz-Signature=895cea171ad17dc1a4a14ed79e228b042f4f4c18b432d5b15149d5630df921c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFZ3OYT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICft0KGNtWZH60XCg0xNIM0yLalHBD8E3vWwL4wyy1RYAiBB6K1hebJ3KXjl3ZYBkBAl73ru%2FtobzM85jlN8j1MgiCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMGadOwfjQQm8FDr44KtwDG4qYsP5yNSY40SsGfNLVihNCu7NMbPMUKRmmd7quVv126SRrYZ5HotTBk3fSy5KE2F%2F9I0R1N9P1S77OqO7aIDnDJjNlIj3VOLBi21wAnx8Jv7Xwqth5NKea37HjKjhHhhpVBJiPtk1IXiMa92cy24t8t1M19BlYP1HZXECgKSHorsl9Xb3Li5QHJxdzPFyvdUgyyrcrx4TUJ6eBh4gghvyqmb8TYxw5da0e%2Fksb5zlbNDGsOsibeBf%2Bp3usouXN0KuUmmGEmPxI11vhr6b%2FLMqvTIgyWoCIk1XZCeUiidmQsZMJHzAH7ZO3czUJTAzlykreFkY8V9Fhq9B83K%2BqxX769bhVF6rgd4u6XFLT%2FvTNTBleaZcZqNatbreen6Vm3iONn8QIhulMD3uMqsBTVms40%2BelRjtNOPROiQQNOTZvUrgk5PflFxvzgXUJqQfwL0xk%2Fnz7hk8akAsHTf1o8b5RXF66HEnj1nZsLERM98jzaDc%2Bxo5WAGY81qt9TF62Uge7qr%2B2YbPbNStILu%2FEpHzLsGZabnX%2FJ6UzawBjBZgj5gpTUVMiLNab6BNIaYhH9c29nrKo00wb2%2FQ4xX41GeKkqTEGaAMUPwR8f%2FqY2HoO%2BKQ5z0r3ospsKDowt6K4wgY6pgEMaA%2F9Zo%2Bk2b7NEcdvFEZEyjvD11Vy8ysqkTRa940uBRuS%2B9yF3E9IRmrRrpuFTmvZGgAiebZOk%2Bkr1Jk79QlelFr9pewahYuiZj03K%2BMfAfVKtmUksH34L1igp%2B0n%2BS1IP%2BVB90pz6drAsOwcB%2BvWrWEnP5v%2BZ4TKEYnPqpO1v%2FWBu9haN3wgvT6YLCMpG9SaQg98UYwaDrYfFmYhZDzicOkPy2kQ&X-Amz-Signature=62fce381144a57d94cbcc1bcedf0cf72f11655845da4007a3380c19d3f339b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
