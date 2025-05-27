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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQFJJFH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzJWwaxKYtbUJU7fofY8gk2Idy6S3Vhbuq3j4cmm0lqgIhANA0CPmxDZQqIr4J1Jnc9sYvqoTd1u%2FWIObZkbSJNjEZKv8DCFIQABoMNjM3NDIzMTgzODA1Igw24M4zREPcnAgCo8Qq3AMyne0MdvDLcZMSe7B%2FpIQrRFSsyJkRyUsoT7z2BO%2FeHs%2FYxY%2FzLjyKhtA0Vxqr1eqG5QVaBfMB9FwwIClvPfNyRXeJLEYauwe8dNchk3%2BFKIQhUwOq7pYdZefasA1yn2%2FQAFJdk%2BRaSsDzasac4NEsGWpGQOOXxXWcrguguiJF6H8suwKtYMJplkfGSmRqxFAAAtO%2FEuIsx9lcMHXRoqZ3jAp6Y2C3X%2Btbtv%2F259U7uV6SCM0UAnXplDDvUljf7eU94smYTP9pZEX8073e3I44pgkU3CeMCSCxd4uqYFk4nSho5i2RJuMVIp26MPep3sGzHv%2BBS4RPoJuIU8%2Bz7Scs6r60cv2F4fmh66P0OXiA4Jbam27%2F1oST3qRb3VcXZ4zIgo3Dbo0HXH44Ra%2BjK3tUecZV9RDJE%2FaFmn73Evflg%2FVKmAcVr3UsMeSx9m5eJbOEjQohYr6kkQCRlMSvwcUWUJ%2FQ0x3PfJywe2i2CTU5XisVW7Efzj6T%2BHE4Ik6kVNaXF%2B1BUOXvWVT6lINPPIau5vQ2ZEcFgU7btrCrWzlN4RSmhVa9jfhpfurP0k79ad%2FBpKT8wMhp1bTZAA86pcQWBKABSHGAN223FChxPvKXZwkrTm1YmVk%2BQFGLejD8ltTBBjqkASjB6TULTRvPKlbdLxodzA8WevrJNy4onXX9OwwAlVcG3677AYJckSmMi4HUnf7SVrvakox1%2BgESJrxLDxRhwxFed4jIGBR%2FIWJHXwQBMPsRu6NTvYekffNsIUoSO42z8DdI2IqFwdsIxP4MFaQyr3q3230mJ94nUgUOjzyEOOtU5eCLrUEG%2F%2F5NatQ55Zj0skPjrzR11Jjr3Y68eXdwdpfrumyE&X-Amz-Signature=5615f9e4464014a3a3ebaefa042d22feca94a8dd1240843bde91592ec66db774&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQFJJFH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzJWwaxKYtbUJU7fofY8gk2Idy6S3Vhbuq3j4cmm0lqgIhANA0CPmxDZQqIr4J1Jnc9sYvqoTd1u%2FWIObZkbSJNjEZKv8DCFIQABoMNjM3NDIzMTgzODA1Igw24M4zREPcnAgCo8Qq3AMyne0MdvDLcZMSe7B%2FpIQrRFSsyJkRyUsoT7z2BO%2FeHs%2FYxY%2FzLjyKhtA0Vxqr1eqG5QVaBfMB9FwwIClvPfNyRXeJLEYauwe8dNchk3%2BFKIQhUwOq7pYdZefasA1yn2%2FQAFJdk%2BRaSsDzasac4NEsGWpGQOOXxXWcrguguiJF6H8suwKtYMJplkfGSmRqxFAAAtO%2FEuIsx9lcMHXRoqZ3jAp6Y2C3X%2Btbtv%2F259U7uV6SCM0UAnXplDDvUljf7eU94smYTP9pZEX8073e3I44pgkU3CeMCSCxd4uqYFk4nSho5i2RJuMVIp26MPep3sGzHv%2BBS4RPoJuIU8%2Bz7Scs6r60cv2F4fmh66P0OXiA4Jbam27%2F1oST3qRb3VcXZ4zIgo3Dbo0HXH44Ra%2BjK3tUecZV9RDJE%2FaFmn73Evflg%2FVKmAcVr3UsMeSx9m5eJbOEjQohYr6kkQCRlMSvwcUWUJ%2FQ0x3PfJywe2i2CTU5XisVW7Efzj6T%2BHE4Ik6kVNaXF%2B1BUOXvWVT6lINPPIau5vQ2ZEcFgU7btrCrWzlN4RSmhVa9jfhpfurP0k79ad%2FBpKT8wMhp1bTZAA86pcQWBKABSHGAN223FChxPvKXZwkrTm1YmVk%2BQFGLejD8ltTBBjqkASjB6TULTRvPKlbdLxodzA8WevrJNy4onXX9OwwAlVcG3677AYJckSmMi4HUnf7SVrvakox1%2BgESJrxLDxRhwxFed4jIGBR%2FIWJHXwQBMPsRu6NTvYekffNsIUoSO42z8DdI2IqFwdsIxP4MFaQyr3q3230mJ94nUgUOjzyEOOtU5eCLrUEG%2F%2F5NatQ55Zj0skPjrzR11Jjr3Y68eXdwdpfrumyE&X-Amz-Signature=14c15d1289b9beb3c7a650fc2f418f04993f226e620d2a774645efa5c56e5d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
