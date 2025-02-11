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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677S3GDZR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2fNa%2FpqUumQ%2BnyMgndkrIEQsDfFzTwR8PaTPdCX2FgIgVXmP%2BDyyoWkKWB4AEb9MmgjEArjaJHpK8Dd8YHyoqSwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkDjuHKIZdgyLSVoCrcA%2FXFGqSOrJvQz4Jpzc%2Fzb1YdHDCHbrKQ7UwWonG%2F0O0I1D0%2Fm9sIur4p9hJAFZzMwDy2RhYBTBKgLDak0zsTm4y5iRl9WA9iINQTErfdCg98SJ%2BUEDrThcVFWFVHXipqBJ%2FENt11WqpcvtOGHWcA5aH1glsRppC8ObosJQncZvjQ1v2j2vL7OL5SFUe%2BzK8chMndpSS1VjV90IGBGqvTGHSB3%2BvWmVlHI6QXZhINVeZX4PB28Cx2eXxq%2BFWj6jDIGN3IHZSULP7wiqdfjtVUuBGYtZ01OtPPOwkrOjMp1jguk2l1MwHlhVmyPYJwRiMNhxSD%2FsNKMacobcuIfuB4XvP8LSyy3g%2Fo0h6wJ0m%2F%2B43KGvXeZ9UBIBXL6IoKRv1RDWPxd9qpqWKErDku9c1eZS5nA6d5KqFQrlMbB0pLRZPNXgheXJ0U%2FElwQlczZlYjV34hZa6BzsHfL3Scsb5uA3tdZkwUQoWx2aWymHV%2F73sn2L%2FQ%2B7Wm2wgBQweu1moRaPH%2BUBWhsXFtMYzdIw02geE9FJjBwooUYtdL1hKPdXEcSE8AuZmWodDLqSVjDcYrWBYakvoghVr8zGVeDpBycfhrWrDbMflzHXNjFR6NYRsfHtiEBSkwdBVlkJZCMPiJrb0GOqUBiP3pIHujYsvgWH8IFRR8LkhBXZefH0rk1DH96oonwGlZKLhM5jUOF3VTOa66kvATISkGes88DY0Rd55sP%2FUriGfqxCms8hDfnlJ4EldWXaEDk4X0URn5a6LG%2BIz%2ByUfmNeJohNjPpkQyy3gC%2FIHDoPToYujEhIoQFu5Jk%2BVmJRGNBzBRyRCyz0%2F0ZDL8vsANw9T1RemkblojFCrFUH21%2FDCbwxBk&X-Amz-Signature=f0c75623169dd6bc07414d8ba7bf9693a4ec21f29908e4d561864e53751931cc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677S3GDZR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi2fNa%2FpqUumQ%2BnyMgndkrIEQsDfFzTwR8PaTPdCX2FgIgVXmP%2BDyyoWkKWB4AEb9MmgjEArjaJHpK8Dd8YHyoqSwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkDjuHKIZdgyLSVoCrcA%2FXFGqSOrJvQz4Jpzc%2Fzb1YdHDCHbrKQ7UwWonG%2F0O0I1D0%2Fm9sIur4p9hJAFZzMwDy2RhYBTBKgLDak0zsTm4y5iRl9WA9iINQTErfdCg98SJ%2BUEDrThcVFWFVHXipqBJ%2FENt11WqpcvtOGHWcA5aH1glsRppC8ObosJQncZvjQ1v2j2vL7OL5SFUe%2BzK8chMndpSS1VjV90IGBGqvTGHSB3%2BvWmVlHI6QXZhINVeZX4PB28Cx2eXxq%2BFWj6jDIGN3IHZSULP7wiqdfjtVUuBGYtZ01OtPPOwkrOjMp1jguk2l1MwHlhVmyPYJwRiMNhxSD%2FsNKMacobcuIfuB4XvP8LSyy3g%2Fo0h6wJ0m%2F%2B43KGvXeZ9UBIBXL6IoKRv1RDWPxd9qpqWKErDku9c1eZS5nA6d5KqFQrlMbB0pLRZPNXgheXJ0U%2FElwQlczZlYjV34hZa6BzsHfL3Scsb5uA3tdZkwUQoWx2aWymHV%2F73sn2L%2FQ%2B7Wm2wgBQweu1moRaPH%2BUBWhsXFtMYzdIw02geE9FJjBwooUYtdL1hKPdXEcSE8AuZmWodDLqSVjDcYrWBYakvoghVr8zGVeDpBycfhrWrDbMflzHXNjFR6NYRsfHtiEBSkwdBVlkJZCMPiJrb0GOqUBiP3pIHujYsvgWH8IFRR8LkhBXZefH0rk1DH96oonwGlZKLhM5jUOF3VTOa66kvATISkGes88DY0Rd55sP%2FUriGfqxCms8hDfnlJ4EldWXaEDk4X0URn5a6LG%2BIz%2ByUfmNeJohNjPpkQyy3gC%2FIHDoPToYujEhIoQFu5Jk%2BVmJRGNBzBRyRCyz0%2F0ZDL8vsANw9T1RemkblojFCrFUH21%2FDCbwxBk&X-Amz-Signature=c0a349ec2b87abdb283bd2d923d088e96150a10513005be6c4135697cd13a672&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
