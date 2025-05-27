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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTOLAUD3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaQx%2FeC6oJ3MRxgRbZyBFLh3lV9pSj5lmKN%2ByM0V%2BR4AiEAwPZuRZ3bLXykqp4fFWXe4wR3IteBhg3XhlsO1EQlq7Mq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOJBwfBpSPyEX4aqUyrcA46nh02mw32bR0QZrHmVjpLcI8bk1ObSlN47JtX7n2WAekIkam0daPNZyRQNfG2%2BTcXxUtM6p8lC%2FYV1%2FekGr%2Fsxs0C01xEruBhYyEazFSDtqiLSEgdRdMDz1xc7FpbX9qrQHAamCrACEvXFR0CG4KyTntjXhJAH9VTEeCPjBSNudThctWsK9VwJvqFQlb8lEgekPDaJ%2B1eCPWLdUmTxWsiGDLdUa21XTIWePPOtUG5oaN9EbjQjXBMPlgg%2ByIqGpFGqumyKY5BPoqoVQfh14gcyMi6DrHhDUW3WmRJrC934rX57FDF9BzlMz6puBMiMijABcjoScLVI%2FFzELjaGw49AQqAcHN8xFJC4m1570T5agvyU91IEdWkpK8Pq2snM9Q85jMAWz8t4thvNm%2Bhsc5h4zkHv8FS5Jk7tC7Ll%2BU3sBsk3XQ2amEmNUAh6CmaE0GpGE9%2B9xvsL%2FADltSNgMnWumCO%2BwRRrVP6%2BGcKhnbpT%2B7e1%2FIhfNSrr0lbE%2BuJQgEemudfDa6Vz1NgCR4W0GCEjTEgbknsgEw0q0HS8NT%2FppABLTh8tNGLStX99oBWjP9p%2FbQF163%2BDxF3lKyPm%2F7Np4h%2Fs1u0KgrxboEmOnxxHB9PPJtbPyjMiy7OUMJrU1sEGOqUBhMSQx%2BtrLLCmK6r2OoGBehbcmY9MsP6YjCLjZMXm23mUFh38NZBZuOfJuE2H3Q%2B8MQuyj74HUITj2tHqAT%2BbDS7La8u%2F8bzvRNN2bdJy8FGh76kQkU%2FrjgqcHyBS4RxDm7XcO7YC127l7SQOG3TbeAT%2F%2Br5ZhLFlVN5C4OrATnC09pD6QM65%2Fm2eyP%2FI6eSbdSK2cMYmcAr9mZDHYakDfxU%2Fj39w&X-Amz-Signature=8c3b0ba15c325e28650178205c74f7495a515d07dccd8faa051727faa0a7912c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTOLAUD3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaQx%2FeC6oJ3MRxgRbZyBFLh3lV9pSj5lmKN%2ByM0V%2BR4AiEAwPZuRZ3bLXykqp4fFWXe4wR3IteBhg3XhlsO1EQlq7Mq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOJBwfBpSPyEX4aqUyrcA46nh02mw32bR0QZrHmVjpLcI8bk1ObSlN47JtX7n2WAekIkam0daPNZyRQNfG2%2BTcXxUtM6p8lC%2FYV1%2FekGr%2Fsxs0C01xEruBhYyEazFSDtqiLSEgdRdMDz1xc7FpbX9qrQHAamCrACEvXFR0CG4KyTntjXhJAH9VTEeCPjBSNudThctWsK9VwJvqFQlb8lEgekPDaJ%2B1eCPWLdUmTxWsiGDLdUa21XTIWePPOtUG5oaN9EbjQjXBMPlgg%2ByIqGpFGqumyKY5BPoqoVQfh14gcyMi6DrHhDUW3WmRJrC934rX57FDF9BzlMz6puBMiMijABcjoScLVI%2FFzELjaGw49AQqAcHN8xFJC4m1570T5agvyU91IEdWkpK8Pq2snM9Q85jMAWz8t4thvNm%2Bhsc5h4zkHv8FS5Jk7tC7Ll%2BU3sBsk3XQ2amEmNUAh6CmaE0GpGE9%2B9xvsL%2FADltSNgMnWumCO%2BwRRrVP6%2BGcKhnbpT%2B7e1%2FIhfNSrr0lbE%2BuJQgEemudfDa6Vz1NgCR4W0GCEjTEgbknsgEw0q0HS8NT%2FppABLTh8tNGLStX99oBWjP9p%2FbQF163%2BDxF3lKyPm%2F7Np4h%2Fs1u0KgrxboEmOnxxHB9PPJtbPyjMiy7OUMJrU1sEGOqUBhMSQx%2BtrLLCmK6r2OoGBehbcmY9MsP6YjCLjZMXm23mUFh38NZBZuOfJuE2H3Q%2B8MQuyj74HUITj2tHqAT%2BbDS7La8u%2F8bzvRNN2bdJy8FGh76kQkU%2FrjgqcHyBS4RxDm7XcO7YC127l7SQOG3TbeAT%2F%2Br5ZhLFlVN5C4OrATnC09pD6QM65%2Fm2eyP%2FI6eSbdSK2cMYmcAr9mZDHYakDfxU%2Fj39w&X-Amz-Signature=3a4c3c17f35dac2f5103887507d29688068524e133126a7775407dc905d4ea5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
