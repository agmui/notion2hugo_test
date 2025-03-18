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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLSALMZ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDxTQtfXocVF5ZhBPs6ze%2Fm12Gu8QySxXWUMILy5a%2FGBQIgaK%2BxEbnt8LDDZx8BJ3AX12umqo6fs2rgN7LsssgNcscq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ3KQYe60xvlhsUSfSrcA2DaNjgD8L%2FDYVnJ4ciwebbyhDJGb0mMc1n1ZbhIUF0CWvMF3%2FOhsV2NlhydkZPV70mXWCqa2UNkjZNQZgHkXwhzF2FB3DNwEqtp5uawCWl3gxjHv%2BoDKWqaobe0v2KmAC0KDicScAlA7XVC1fYZrnsZQ2%2Bdm1DR1cX8S%2BYMyELbdgJ3tZbMeQN7BJxznV6Ey8hZc1kvecEi2ndez7S1W4XxYlni9L0S%2Fwd6QPhef2ti5m%2FUm9oFf6ySgrDvRvNmlQy6H2gq%2FIchaQXeDAH9t6bPdF9n0L0RLRxWYTqR6ZzfAYASUPCUDSFZZ8tkndRDNz1MnEozSUO%2BQLdTKDDQsgZBkzCxi5Fjf7WGoCcIBIz8nMZXFidGy5MkzRr9nj53%2FmTZWrQtV1JgEKtmACitx%2FJ5o7u6KRvEbeZI9j0ug1WcZ%2FCA1jW0zZgcW10fyow5rMVkw3E7hhwp33dTspkr5b24wt4IPv47XxmE6ED1CiT0AI1yYpvxb35iJfS17PR4a2cPIgIXJ8GtKFVJMW6%2FDCO86XCNuS1b7x%2F4Ca2v7sHKaYiDpkOwL3nnM7sdTmYTkphdrRpmzSbnJQX8ii%2BremZLWDUzN5nB7JjtSY384r9dZP2bBZ5b5H1%2FxLwmMO2U5r4GOqUBPf6rs9k0GcOyGmEGRYDqoyq0KcFA2YUBqYvuCNyfZMsfCho0zcnkhM9p1V22mPVkI6v5gDF5pNVrqaHZK%2Fo9wBKu7YYOVNWMtrhxj10WKoF%2BthlJVvS%2BEmjgVVRTZVoKWK2F9x6Uwhe2NUrf6g2UcFEhwmD6WyAv66QDxAMeuW2gRgx1cOROxB6vHiVy7CfQoxUhSntu6B1%2BBBB8KxqgSG5LB30D&X-Amz-Signature=eeb325f369782bd95c79ff79a17affa6f45653193811dd25d1afff1aab4d1682&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLSALMZ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDxTQtfXocVF5ZhBPs6ze%2Fm12Gu8QySxXWUMILy5a%2FGBQIgaK%2BxEbnt8LDDZx8BJ3AX12umqo6fs2rgN7LsssgNcscq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ3KQYe60xvlhsUSfSrcA2DaNjgD8L%2FDYVnJ4ciwebbyhDJGb0mMc1n1ZbhIUF0CWvMF3%2FOhsV2NlhydkZPV70mXWCqa2UNkjZNQZgHkXwhzF2FB3DNwEqtp5uawCWl3gxjHv%2BoDKWqaobe0v2KmAC0KDicScAlA7XVC1fYZrnsZQ2%2Bdm1DR1cX8S%2BYMyELbdgJ3tZbMeQN7BJxznV6Ey8hZc1kvecEi2ndez7S1W4XxYlni9L0S%2Fwd6QPhef2ti5m%2FUm9oFf6ySgrDvRvNmlQy6H2gq%2FIchaQXeDAH9t6bPdF9n0L0RLRxWYTqR6ZzfAYASUPCUDSFZZ8tkndRDNz1MnEozSUO%2BQLdTKDDQsgZBkzCxi5Fjf7WGoCcIBIz8nMZXFidGy5MkzRr9nj53%2FmTZWrQtV1JgEKtmACitx%2FJ5o7u6KRvEbeZI9j0ug1WcZ%2FCA1jW0zZgcW10fyow5rMVkw3E7hhwp33dTspkr5b24wt4IPv47XxmE6ED1CiT0AI1yYpvxb35iJfS17PR4a2cPIgIXJ8GtKFVJMW6%2FDCO86XCNuS1b7x%2F4Ca2v7sHKaYiDpkOwL3nnM7sdTmYTkphdrRpmzSbnJQX8ii%2BremZLWDUzN5nB7JjtSY384r9dZP2bBZ5b5H1%2FxLwmMO2U5r4GOqUBPf6rs9k0GcOyGmEGRYDqoyq0KcFA2YUBqYvuCNyfZMsfCho0zcnkhM9p1V22mPVkI6v5gDF5pNVrqaHZK%2Fo9wBKu7YYOVNWMtrhxj10WKoF%2BthlJVvS%2BEmjgVVRTZVoKWK2F9x6Uwhe2NUrf6g2UcFEhwmD6WyAv66QDxAMeuW2gRgx1cOROxB6vHiVy7CfQoxUhSntu6B1%2BBBB8KxqgSG5LB30D&X-Amz-Signature=75793cf75bcf10826c259d42963ea94a87e246a4bd25d562200c2c7651bfc626&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
