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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULMPL7XS%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Slz1QsJe8hPSbDZaB2PNLu9bYNW8zJupNnR2cuR2NwIhAMdTpy50b2c62ZEHMzYQQS0OoOyFVJnYq1KdirWSiLIDKv8DCGIQABoMNjM3NDIzMTgzODA1IgyCKzmQJ5eZ%2BFJN5Ecq3ANaKZjv7IEC7%2BrVegeYjccghk4E5TSepX1nVM%2FNrBijZMt5u0ipmgbHzIi4vJtaadsHl34UsNidKct8v3Fu%2BXIKxLfgd2bCgwVUECDYRS1jow4gV23qcMlgNRDWhW2iJAwgQb2BHUqxeWTOKUyUAWe7nWj9d3K0qswagEaikPviQ8anHz4fW9AUItd4f4pDZoMK5pvtUa3sZQTmImyvCQAORLvKtr33cbEr4WUSjVtVhbK%2F96Qym1p8Gf76%2FC4y%2B7NAfYCb0xxbTEPOZ44qwlJwTDTAQLM1fMYLMiOXVOjS9VvWhj9V5BXj6FfQBsXMFI6yDAdMUxyThGYtqve4WEaYSy157kV5SGZErDLx%2B7Gys6JBCAAGVxDw2vAQHaqQmVCarM7qhdNvpIoO9Z4lllFtpXriulP7TNX8gqwTwnmcrainQhcjNM5GZc2cg7NkDhtXU%2FGr0DKFq1dURNgBM5FCDpOaiOhWYlg%2BK9VGs9grXwgKNqB0p%2BkhP7td%2FEeSjixU26XLQMS0FXXXxVfYBkdWZ3F73LuwqFDxyzb1l5d9ckdQ8akr%2B8kZDFC35zpcNVP%2FnGuVOcxbeHlUXnyLpFeWARD7QAxeEIiaDPyD6m6dQ%2BOssuXJx36fKNeC3TDfgZTJBjqkAYeAw3KmPm8U46pfON%2Be8a149mcjsDBuZnxPzJFiDQneHpr8BIK2aQ7BLMS584gnfQk9CFmtqbcvK1xQ9ItGVcMgrm%2FEIIKxtgcd8eHuMUzzEXeGQ2x9TYk0eXtLhzP%2FuCLrecYGLoFmHkM4S8s9iwxAM722RO%2FoehSDyGx7NFQBnIGd9ThrUExluU88nqv2UsdsRJXuadHtfD1kAGHsfDGdRm%2B3&X-Amz-Signature=e1d8d8fedbd2d45edc7d05bab7a1b2b4655c6eceee54a265c13ac89f607176ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULMPL7XS%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Slz1QsJe8hPSbDZaB2PNLu9bYNW8zJupNnR2cuR2NwIhAMdTpy50b2c62ZEHMzYQQS0OoOyFVJnYq1KdirWSiLIDKv8DCGIQABoMNjM3NDIzMTgzODA1IgyCKzmQJ5eZ%2BFJN5Ecq3ANaKZjv7IEC7%2BrVegeYjccghk4E5TSepX1nVM%2FNrBijZMt5u0ipmgbHzIi4vJtaadsHl34UsNidKct8v3Fu%2BXIKxLfgd2bCgwVUECDYRS1jow4gV23qcMlgNRDWhW2iJAwgQb2BHUqxeWTOKUyUAWe7nWj9d3K0qswagEaikPviQ8anHz4fW9AUItd4f4pDZoMK5pvtUa3sZQTmImyvCQAORLvKtr33cbEr4WUSjVtVhbK%2F96Qym1p8Gf76%2FC4y%2B7NAfYCb0xxbTEPOZ44qwlJwTDTAQLM1fMYLMiOXVOjS9VvWhj9V5BXj6FfQBsXMFI6yDAdMUxyThGYtqve4WEaYSy157kV5SGZErDLx%2B7Gys6JBCAAGVxDw2vAQHaqQmVCarM7qhdNvpIoO9Z4lllFtpXriulP7TNX8gqwTwnmcrainQhcjNM5GZc2cg7NkDhtXU%2FGr0DKFq1dURNgBM5FCDpOaiOhWYlg%2BK9VGs9grXwgKNqB0p%2BkhP7td%2FEeSjixU26XLQMS0FXXXxVfYBkdWZ3F73LuwqFDxyzb1l5d9ckdQ8akr%2B8kZDFC35zpcNVP%2FnGuVOcxbeHlUXnyLpFeWARD7QAxeEIiaDPyD6m6dQ%2BOssuXJx36fKNeC3TDfgZTJBjqkAYeAw3KmPm8U46pfON%2Be8a149mcjsDBuZnxPzJFiDQneHpr8BIK2aQ7BLMS584gnfQk9CFmtqbcvK1xQ9ItGVcMgrm%2FEIIKxtgcd8eHuMUzzEXeGQ2x9TYk0eXtLhzP%2FuCLrecYGLoFmHkM4S8s9iwxAM722RO%2FoehSDyGx7NFQBnIGd9ThrUExluU88nqv2UsdsRJXuadHtfD1kAGHsfDGdRm%2B3&X-Amz-Signature=577acc97bff642ad356bd31f329681ef4734b23ab2248bd79b318bd9ed814d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
