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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7JPOCQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlf873brUA89g%2FTT%2BKEDmBefFtUBGReU3wq6t%2BEXcFnAiEAlCd6PnReNUnl6parSdUXHvQZ%2FI24NEuacuUfeVa%2BZUMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIHfsl7QkzVt481STCrcA%2BdoA8w4E8Qj9uuFF3FiuQH%2FTlq87PlTOTaUBsqJ91dhkBCjAex5XgBs%2Bz3IjxA%2FTCKzw9rlSUEFlkmCStVjkOJN5szatNzFuEhRf5AWtocsYx46hIWFIvCoHVm3VyAeulGLkfMji8FqCqegqvr6lncY%2FgMlq4V3Mnlt8A%2FwZmroZQfxw049M1RNO5jB2DVeUq8yA%2Be7XLCtt0jHUL50Dq6jL6JoL675NCELM%2FBFA2orEb6D0QEjpJ86OcMCxT%2FhvxMirz8QCZwckDJZLtljgBKJRDI2r8lT0L0uJ00XfclKyce0Gr8K9%2Bzuk%2BLH4O9%2Boo2qXBWekmKR8c1P9nkQG6rnKPVjNebQp56IMElL3%2BXGMIrDmruiUVm1Syrhoo0L9C%2Bse5oxxL3ntpd%2Bs4LSmAfrZ9duw0meFlRInqfhLswIfD5MQ8mRN4CDtod3PYBpS0g04s%2B3jNF8mIvwDQz7bFZil1g%2BmVaqbl%2BOj30f0%2F5KU42XdsspLmWHy%2BQKxDJXg2UZnfgU%2F8YV%2BE2Q6fJ8umzh6Uyyhd%2FHw%2BvmzY2Rv3svSO9EG6ASSXz5fOBNzJFJiCx3EeOTVI7ae7nMX3ff25GYPSTlZEWn246DIoNXvnhIVQrVRE3CxkLE4WBWMOmP%2Fr8GOqUBT4ZPf%2BvvsWPF3%2FvotiB334pixCBkZcJuCJ4SJoeqtlhlowC1dwTcZAGNZlF0bFyUkhCzdWVWsg1K0%2F%2BD5cIeOpBEWdkWHvkRCbbgt15ywq4mShDoR8lvTLRMC5jDAdtA9CzxTA1YF9dSsVQwHnZQckAhAZ%2B%2B9Fy%2F2wTQKj2cZS%2F1UM5DkagnSU%2F%2FSazf4yOtpQTDpnA%2BmSfUq47N5RSqgvhjJqGP&X-Amz-Signature=681311b38bfd4f08370a403614b580c5db461e08b55e9a38dbd650ce0adc43ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7JPOCQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlf873brUA89g%2FTT%2BKEDmBefFtUBGReU3wq6t%2BEXcFnAiEAlCd6PnReNUnl6parSdUXHvQZ%2FI24NEuacuUfeVa%2BZUMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIHfsl7QkzVt481STCrcA%2BdoA8w4E8Qj9uuFF3FiuQH%2FTlq87PlTOTaUBsqJ91dhkBCjAex5XgBs%2Bz3IjxA%2FTCKzw9rlSUEFlkmCStVjkOJN5szatNzFuEhRf5AWtocsYx46hIWFIvCoHVm3VyAeulGLkfMji8FqCqegqvr6lncY%2FgMlq4V3Mnlt8A%2FwZmroZQfxw049M1RNO5jB2DVeUq8yA%2Be7XLCtt0jHUL50Dq6jL6JoL675NCELM%2FBFA2orEb6D0QEjpJ86OcMCxT%2FhvxMirz8QCZwckDJZLtljgBKJRDI2r8lT0L0uJ00XfclKyce0Gr8K9%2Bzuk%2BLH4O9%2Boo2qXBWekmKR8c1P9nkQG6rnKPVjNebQp56IMElL3%2BXGMIrDmruiUVm1Syrhoo0L9C%2Bse5oxxL3ntpd%2Bs4LSmAfrZ9duw0meFlRInqfhLswIfD5MQ8mRN4CDtod3PYBpS0g04s%2B3jNF8mIvwDQz7bFZil1g%2BmVaqbl%2BOj30f0%2F5KU42XdsspLmWHy%2BQKxDJXg2UZnfgU%2F8YV%2BE2Q6fJ8umzh6Uyyhd%2FHw%2BvmzY2Rv3svSO9EG6ASSXz5fOBNzJFJiCx3EeOTVI7ae7nMX3ff25GYPSTlZEWn246DIoNXvnhIVQrVRE3CxkLE4WBWMOmP%2Fr8GOqUBT4ZPf%2BvvsWPF3%2FvotiB334pixCBkZcJuCJ4SJoeqtlhlowC1dwTcZAGNZlF0bFyUkhCzdWVWsg1K0%2F%2BD5cIeOpBEWdkWHvkRCbbgt15ywq4mShDoR8lvTLRMC5jDAdtA9CzxTA1YF9dSsVQwHnZQckAhAZ%2B%2B9Fy%2F2wTQKj2cZS%2F1UM5DkagnSU%2F%2FSazf4yOtpQTDpnA%2BmSfUq47N5RSqgvhjJqGP&X-Amz-Signature=b0d1e9a47a1af4166d2c05c9ccccb86d2f30eb9496bdd239dd54d0d41744c82d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
