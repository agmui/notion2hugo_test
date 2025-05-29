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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW2TUEC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXbnOw4j0bsVQFb2FRLv6KuWvcsy2BAhNgaKfgW7Bx6wIgPlcJ8XOrUIz2QKHeEFw%2BysOU4MVqOwkGPXGlFGWE0Z8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClCW9rpbNBCnUGBPSrcA4ripjdYvp%2BWomAf%2BtSf3awrQCEY0UUI5ZhbRyQmTgK2pS5GbNCS5YYkG3UkzYvf%2BAwf%2BEKT92JbnvkmI8pT33mmlZ%2BffuvTZsVNKtly3cotIrOUReEHzEB%2Bleo%2BR8Y7ymZil6ieN745uaqRyJsmppo3t25V3PPeV4ZkhwF6QYMFqtvnUDsK2fHKq9T6vFhrYl17YwdfMZmrwvc9ZaH47ula3zTVd0uc15XOO1ZzxibufF9r0shPm%2FukWr5vFllIuKT22sMI%2FU3S9EHnRY4nyljv0Efhh8ZyXAJL6ULoWT9l%2FUFtuy2jatdldv%2F4tKO5O7d917Kxw%2B86eSB1gbx8869ckiba4XwKUlIla2CtCwSoFFb5fy2oOAHLzpPfGBDYtHEufxNf%2B80or04ff1U9T2hljNiuQvks1x%2FnnM3oY7thuQTVcjiVd07O6vKI%2FX4%2BOLrbIgpBmNRJ1Hl%2Bo9A48YFawkRLSCpwNOB2jrnmhRkEUFv346S%2FMbJzUYwtjpnpRNRkqfg7v9sCPijT1gqWcRXU%2BMzzMpQKG61WyfrEyrRC3sMv9TNsKEfRHjjbHR5Y7fzY06Rr8gai0ABVI1imTmYGPsNhewpGt8uqfDBwOHgn4%2BZdJQ3HrDx6EbeqMPvb4MEGOqUBJVJE8JsSr3LXDP13n8r028ED9DenuyBpJ04D%2FgdK8eWAPVQOtMO%2FIR%2F8Q7jMpvKtUcEz5exvYONFUI0S1DB8eERC6NbBrjWZUEvZAFZObGy9qGRUOvmtjVWVtlN6MDjy8LkAsnGTvGoCPWfqkAS6g3%2FvrScsvl9u11x5u97N0xmwDsjCDXlXIKaDnbJaHg4HDN0S32R9KoXExnQ4NJwsXyI3Av3y&X-Amz-Signature=ffac121c0f006fc093ab51e34395d43a9b3bf5f376341b4a9f56ebd5924b5bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW2TUEC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXbnOw4j0bsVQFb2FRLv6KuWvcsy2BAhNgaKfgW7Bx6wIgPlcJ8XOrUIz2QKHeEFw%2BysOU4MVqOwkGPXGlFGWE0Z8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClCW9rpbNBCnUGBPSrcA4ripjdYvp%2BWomAf%2BtSf3awrQCEY0UUI5ZhbRyQmTgK2pS5GbNCS5YYkG3UkzYvf%2BAwf%2BEKT92JbnvkmI8pT33mmlZ%2BffuvTZsVNKtly3cotIrOUReEHzEB%2Bleo%2BR8Y7ymZil6ieN745uaqRyJsmppo3t25V3PPeV4ZkhwF6QYMFqtvnUDsK2fHKq9T6vFhrYl17YwdfMZmrwvc9ZaH47ula3zTVd0uc15XOO1ZzxibufF9r0shPm%2FukWr5vFllIuKT22sMI%2FU3S9EHnRY4nyljv0Efhh8ZyXAJL6ULoWT9l%2FUFtuy2jatdldv%2F4tKO5O7d917Kxw%2B86eSB1gbx8869ckiba4XwKUlIla2CtCwSoFFb5fy2oOAHLzpPfGBDYtHEufxNf%2B80or04ff1U9T2hljNiuQvks1x%2FnnM3oY7thuQTVcjiVd07O6vKI%2FX4%2BOLrbIgpBmNRJ1Hl%2Bo9A48YFawkRLSCpwNOB2jrnmhRkEUFv346S%2FMbJzUYwtjpnpRNRkqfg7v9sCPijT1gqWcRXU%2BMzzMpQKG61WyfrEyrRC3sMv9TNsKEfRHjjbHR5Y7fzY06Rr8gai0ABVI1imTmYGPsNhewpGt8uqfDBwOHgn4%2BZdJQ3HrDx6EbeqMPvb4MEGOqUBJVJE8JsSr3LXDP13n8r028ED9DenuyBpJ04D%2FgdK8eWAPVQOtMO%2FIR%2F8Q7jMpvKtUcEz5exvYONFUI0S1DB8eERC6NbBrjWZUEvZAFZObGy9qGRUOvmtjVWVtlN6MDjy8LkAsnGTvGoCPWfqkAS6g3%2FvrScsvl9u11x5u97N0xmwDsjCDXlXIKaDnbJaHg4HDN0S32R9KoXExnQ4NJwsXyI3Av3y&X-Amz-Signature=eab60741611120cbe547efd7849b23c1c18d66db2b37d7ecb8a7e5bd300dc49b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
