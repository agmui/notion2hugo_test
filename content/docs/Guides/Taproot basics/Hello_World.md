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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKP2FS2Q%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGrlnfYCHKsOFFGBljAu5ZakG%2FE07NxBbwgZRzngXaC%2BAiEAgl%2BjHPD7TSXPcy8gDOweKFBqNKgi4KmfVN1kzYgPQPMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW%2FMGLv5LZmAiiY2CrcA8rOMFuNRO2hXgzj3%2Ba%2Fo9i9VDabElzmV6E4QTGG%2Flmnuue%2F3zEuiGAtRYLo%2FP1vtHXrzcnDzjwC%2BkJnHvMThzv%2FHxF7U%2F222CDzBAMtXKqxBCaxullRG7MwU%2FcPNaI2iwOcJhcTB8dx1izSuhqbrSw7ntrmCQZLSvI7Y13FoIaGwR4I%2BbPOUM0Z%2BI5a%2BWF1PXdeuP8wQvsQ%2BXHhgawDlhIVMZwDfsGMrxmqkXE8cHHkub4%2BoTbp3kXk%2B8iW5rsHGoq9MmPAY2KwNFHcIQkMCaYTpwDOQohxkliS4EsyEEu026wclA9QuXWMMG6HFsehFqktcVWVLcDKkDX2ZATV2wJ%2BfxFtjHrv0czxuG%2F%2BYiQHrsL6q%2FEo5so57o3kpzy9O%2BthV0h1M2%2FAt2NM%2F43MnXieI%2FfU0FGQsGc0LvdVY3OWxhIxIbP%2FFe5eETlQUovbE3%2BogA3UzupDQId867WaWDHHiAv5vxfU0QhR42XdK3tTI6%2FCEzpZLHOIKyZc1HE516OBxyhLiLbso76Cx3pXUgZnmJYlals7Kx0sJUXh5z4u8iZtpBE6G2O%2FYqmP13q2LqNgIBpRL5aMrqgwtp8Z4R7dnN5M3I%2F8h1QyqB77LcrtfmKl2N%2FX6W%2FyGRnfMI7cxsAGOqUBpdLHrd0GaAXfPHbiuqHJAAogQe4aERf9%2FPYO6TQAVjVZq1%2FMzNG3YUotyHkNoEhG0jjgGeiR5vLfzd4D21WrF%2FbRGB0fA2gmq0Z6FsjFUMro5vax1VjY6sBm50KXC1fihVBVP6%2BjBhOb3MyUqHHPcA%2FK8xreGyACpej05B83qMvz84DkIDYShX5RO9xrxVD%2FKhn9y9cQk4ZX1halqyo8rMYtbwbz&X-Amz-Signature=5716d35809d36e85b037c2e902099e7a1ec7ae0d5af19dbf507c69d14109db37&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKP2FS2Q%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGrlnfYCHKsOFFGBljAu5ZakG%2FE07NxBbwgZRzngXaC%2BAiEAgl%2BjHPD7TSXPcy8gDOweKFBqNKgi4KmfVN1kzYgPQPMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW%2FMGLv5LZmAiiY2CrcA8rOMFuNRO2hXgzj3%2Ba%2Fo9i9VDabElzmV6E4QTGG%2Flmnuue%2F3zEuiGAtRYLo%2FP1vtHXrzcnDzjwC%2BkJnHvMThzv%2FHxF7U%2F222CDzBAMtXKqxBCaxullRG7MwU%2FcPNaI2iwOcJhcTB8dx1izSuhqbrSw7ntrmCQZLSvI7Y13FoIaGwR4I%2BbPOUM0Z%2BI5a%2BWF1PXdeuP8wQvsQ%2BXHhgawDlhIVMZwDfsGMrxmqkXE8cHHkub4%2BoTbp3kXk%2B8iW5rsHGoq9MmPAY2KwNFHcIQkMCaYTpwDOQohxkliS4EsyEEu026wclA9QuXWMMG6HFsehFqktcVWVLcDKkDX2ZATV2wJ%2BfxFtjHrv0czxuG%2F%2BYiQHrsL6q%2FEo5so57o3kpzy9O%2BthV0h1M2%2FAt2NM%2F43MnXieI%2FfU0FGQsGc0LvdVY3OWxhIxIbP%2FFe5eETlQUovbE3%2BogA3UzupDQId867WaWDHHiAv5vxfU0QhR42XdK3tTI6%2FCEzpZLHOIKyZc1HE516OBxyhLiLbso76Cx3pXUgZnmJYlals7Kx0sJUXh5z4u8iZtpBE6G2O%2FYqmP13q2LqNgIBpRL5aMrqgwtp8Z4R7dnN5M3I%2F8h1QyqB77LcrtfmKl2N%2FX6W%2FyGRnfMI7cxsAGOqUBpdLHrd0GaAXfPHbiuqHJAAogQe4aERf9%2FPYO6TQAVjVZq1%2FMzNG3YUotyHkNoEhG0jjgGeiR5vLfzd4D21WrF%2FbRGB0fA2gmq0Z6FsjFUMro5vax1VjY6sBm50KXC1fihVBVP6%2BjBhOb3MyUqHHPcA%2FK8xreGyACpej05B83qMvz84DkIDYShX5RO9xrxVD%2FKhn9y9cQk4ZX1halqyo8rMYtbwbz&X-Amz-Signature=649a1818c860653f566b318904d03f9d304b91a919c76b7e863a4ed4475da2de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
