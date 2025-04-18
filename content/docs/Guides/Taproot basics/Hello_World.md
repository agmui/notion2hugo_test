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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM54C36P%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUI3Qum4iz%2FeYYEFbFKSgnGRNWxeWHIP%2F0Bk%2B1y%2FNeiAiEA2JQvpsDAWXgmk28zXPb4KiZG9xIzvHcMmCYdue1GkvMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDAayOVvSYnG4lFKrsCrcA68nx3PHsZir1ARYrr3Ikj7K6nXGh5cf%2FBDnlAlHJfJA3BtU1JqwHd0n0ngU1q%2B07Rr43PsDrLRLCLkEXxqXn3D%2FQ%2BO3B1fXe8pXg1Mk1fVHLwQP%2Bd8TcdT1DnMLdgCTQVQ1k8JUEJVZcJay8pYsdpv%2B2NTAdA%2BcugJxoHw7rcBa1PKE0CYC8h418mxk4PeUNxtFqUzWkZg0urmguth%2Fy7%2FnPdiSYhcPNbgWRaj6pfElVv4W0hDxxlP8nh2CZzsahJxAWShoBNWsAS5gecAmdXx8KTnGvUVLLCJNZXjN0VHNKFiv1ourQQav3PhwspIzzbP%2F18oTb2PLVIVm43MgZD1HPtlPyZvwz9lFIru9nEr1GImIZlBzF1lURznYwNn1%2BmRg25CkQ7szejo%2B9ZYgs%2B9BQ1JauzD52%2BoVitnJerWrHKvNBGv0cI8r7eSC4fKCOhz6fValI%2FknEa%2BjESkCh43tYGveqm9RGvFzraM9khndzfUltUB%2BvLlEaBd4N33ooSrehUHAPHAr2eL0fbJvBa1PEI%2BhQ7BzJxGMRQ10FD9pDpeFeoNNe6YHPYuUsxgA7y6eizReJBOHeYxjnOqDEHcJFk8QlwQmH4t4uPFsqw1YbvescUL0XkYpCkAjMMyghsAGOqUBjrTwK1OeJIG3NY8Zcd3JJqOISYK1tYM8TFNudVSuUufONKI7BcMPvV4jTa4ygUWyEIHTvaUTp2VZWpfCWBVo%2F%2BBwKDJjJN3x5Ztd%2FCMMW7z0EiLkoGwe7E7aNMjjqROUOHl8xpxwqzgCilvObcllUCL8AJe9YcKEyh0tc1CGz8nV7fG8WkB2vLz8TMZHp4zVfEsiTN2RvkxnkvesD7au7sq2wArO&X-Amz-Signature=931e224a4ce9d089c765049e7d35ca871ce084468a04173ec86a8546d94838f3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM54C36P%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUI3Qum4iz%2FeYYEFbFKSgnGRNWxeWHIP%2F0Bk%2B1y%2FNeiAiEA2JQvpsDAWXgmk28zXPb4KiZG9xIzvHcMmCYdue1GkvMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDAayOVvSYnG4lFKrsCrcA68nx3PHsZir1ARYrr3Ikj7K6nXGh5cf%2FBDnlAlHJfJA3BtU1JqwHd0n0ngU1q%2B07Rr43PsDrLRLCLkEXxqXn3D%2FQ%2BO3B1fXe8pXg1Mk1fVHLwQP%2Bd8TcdT1DnMLdgCTQVQ1k8JUEJVZcJay8pYsdpv%2B2NTAdA%2BcugJxoHw7rcBa1PKE0CYC8h418mxk4PeUNxtFqUzWkZg0urmguth%2Fy7%2FnPdiSYhcPNbgWRaj6pfElVv4W0hDxxlP8nh2CZzsahJxAWShoBNWsAS5gecAmdXx8KTnGvUVLLCJNZXjN0VHNKFiv1ourQQav3PhwspIzzbP%2F18oTb2PLVIVm43MgZD1HPtlPyZvwz9lFIru9nEr1GImIZlBzF1lURznYwNn1%2BmRg25CkQ7szejo%2B9ZYgs%2B9BQ1JauzD52%2BoVitnJerWrHKvNBGv0cI8r7eSC4fKCOhz6fValI%2FknEa%2BjESkCh43tYGveqm9RGvFzraM9khndzfUltUB%2BvLlEaBd4N33ooSrehUHAPHAr2eL0fbJvBa1PEI%2BhQ7BzJxGMRQ10FD9pDpeFeoNNe6YHPYuUsxgA7y6eizReJBOHeYxjnOqDEHcJFk8QlwQmH4t4uPFsqw1YbvescUL0XkYpCkAjMMyghsAGOqUBjrTwK1OeJIG3NY8Zcd3JJqOISYK1tYM8TFNudVSuUufONKI7BcMPvV4jTa4ygUWyEIHTvaUTp2VZWpfCWBVo%2F%2BBwKDJjJN3x5Ztd%2FCMMW7z0EiLkoGwe7E7aNMjjqROUOHl8xpxwqzgCilvObcllUCL8AJe9YcKEyh0tc1CGz8nV7fG8WkB2vLz8TMZHp4zVfEsiTN2RvkxnkvesD7au7sq2wArO&X-Amz-Signature=d381e3d43992c662a515b3458714434357a6fa557e09022257a20f25e32f1d56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
