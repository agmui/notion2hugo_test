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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3B6C37Z%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDAh%2BQrzBK3u6f7m3aENYsicHX9xlzhR7iM%2Fk6Be%2B1%2FlwIhANKDXfH7KPUZZYPz9%2FwSp%2BwdyGfHXdAq0l62Iwuek0wDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXobYGSc3ZEGSIbZsq3APUlM2QXK2ycdNiptvqJDMTXifnqaLGESLHNp5IAAbv8%2FElQI17liMmHuRLhyApeK7UfvlAA6ryKhqvrymhVTmUr4NgEpSdTc2TBDqpfKzC4qyE6enFI8qcKCslOL8Pwcpn2HzkxaXHhSm274C8otImS7ht2LOoU8gul7h75mDZm9lT2qaB%2FlaIDGrEhQM17b8pFcC%2F2z7w07Zqd7s6rfogg0SUJDudBmntxCsw9N9TCOQeR8jRI1suN9gOxeRsxbAxTQ0uWdbqczJ3V5us8lR7Qc%2Fjc16jYR%2B6up3vuUAyJVIfyXP5EYojcffC8QaTrqt9uFo5HBf69WR%2FOYh3Hf1SswYKzn1llrxO6pKHnfOGG66NlG1RWH3k%2B%2BlyZYXSYjba6ZkAOjP3u9EY5beTNSQqGkyyrUazvYsNI3t38JEY5m6KsycWGls1zf1QU3vjW80XNsgwItWaPFNq3%2ByMsZO%2FvJWIumZzhNkDjPf3IjKObvWecJxEvn7E1OBlDNXw1iF%2FIOuKV01iaFCmTrabLlNmwL3VrBZBjo4QekrJBPAEgEB0xTBNHsu%2BFHRkmJNPOZOeK25qwAj6xV6m6kmh%2FbfNSHlM9uIJ4HOmDq0ppR%2B0cQd4RwcbPxV54WLAIDDZiPLGBjqkAUMqEbn7bEEjLrOKFtdzHblsrz4WrtwMQEOpWZdZCQ%2FByaQWrotK97n4r0V3YzuYB3iYsbVFkgCX1h5Vinpxjya9Xrdi9kOV0qgNV0VT%2BpXwLd4OfE%2BPXC8cx9VrexDmo21dldmayQ1w%2FVTlaCnSS8%2FTdTtPsvyGfKNTKOeehazFgl64Wh56R1a1qPOLuOm5zX9WOo1yVRtxGtNYvkpIM5tovBWN&X-Amz-Signature=bf707364eba45f1e6823568b780f92e8f7bc6702eed7d0ce39981fb993957df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3B6C37Z%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDAh%2BQrzBK3u6f7m3aENYsicHX9xlzhR7iM%2Fk6Be%2B1%2FlwIhANKDXfH7KPUZZYPz9%2FwSp%2BwdyGfHXdAq0l62Iwuek0wDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXobYGSc3ZEGSIbZsq3APUlM2QXK2ycdNiptvqJDMTXifnqaLGESLHNp5IAAbv8%2FElQI17liMmHuRLhyApeK7UfvlAA6ryKhqvrymhVTmUr4NgEpSdTc2TBDqpfKzC4qyE6enFI8qcKCslOL8Pwcpn2HzkxaXHhSm274C8otImS7ht2LOoU8gul7h75mDZm9lT2qaB%2FlaIDGrEhQM17b8pFcC%2F2z7w07Zqd7s6rfogg0SUJDudBmntxCsw9N9TCOQeR8jRI1suN9gOxeRsxbAxTQ0uWdbqczJ3V5us8lR7Qc%2Fjc16jYR%2B6up3vuUAyJVIfyXP5EYojcffC8QaTrqt9uFo5HBf69WR%2FOYh3Hf1SswYKzn1llrxO6pKHnfOGG66NlG1RWH3k%2B%2BlyZYXSYjba6ZkAOjP3u9EY5beTNSQqGkyyrUazvYsNI3t38JEY5m6KsycWGls1zf1QU3vjW80XNsgwItWaPFNq3%2ByMsZO%2FvJWIumZzhNkDjPf3IjKObvWecJxEvn7E1OBlDNXw1iF%2FIOuKV01iaFCmTrabLlNmwL3VrBZBjo4QekrJBPAEgEB0xTBNHsu%2BFHRkmJNPOZOeK25qwAj6xV6m6kmh%2FbfNSHlM9uIJ4HOmDq0ppR%2B0cQd4RwcbPxV54WLAIDDZiPLGBjqkAUMqEbn7bEEjLrOKFtdzHblsrz4WrtwMQEOpWZdZCQ%2FByaQWrotK97n4r0V3YzuYB3iYsbVFkgCX1h5Vinpxjya9Xrdi9kOV0qgNV0VT%2BpXwLd4OfE%2BPXC8cx9VrexDmo21dldmayQ1w%2FVTlaCnSS8%2FTdTtPsvyGfKNTKOeehazFgl64Wh56R1a1qPOLuOm5zX9WOo1yVRtxGtNYvkpIM5tovBWN&X-Amz-Signature=9ed6e81808aea89ed6745087b76b42292c1d762cdabdf8e8ca8c3d40df56089c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
