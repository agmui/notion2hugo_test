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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLRKCV3K%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlSb%2Bkycsy1VLXZ1vYyI68gpBZtY9Ib2uSVQRXlR6iIAiEA4inHtpoRXPV1ZaVbB0EVhKcrfDXYav6x%2B38mKs7R1A4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDCtwCH2fYgxWe3L0TSrcA7ZaLoNBPBjjCqbjqdaHvZBGqljhIf%2FLYDNB2s5ck3CgXnYeoy0ahmrDx38E8BVNYnBnPdo70hOAAvSB0sq5a3o4xvhSYorqxWPDo6lIZ9Qyip6Euk8av50FNw0G1yrEQ18Av8LQdjOOKm65sLb7AuRImqbO15MZSO5wsEc4fC6Ybih2sbL64mv1NLf3raLP83ti3J3ecIRTURKvGOjp0acq%2BzWNbZ1Wsnr2dXB6kh7ywJjV%2F6FNQ%2B%2BrsTXO%2BOfdCUE7Im5DPCQ%2FxFv7XkSnCCAriUh1HO%2BYF53JWv0AaEHZu8vlzcTax8Asr45lWkTb2sITs2b1n28Oo3ghnOf2woMn4oGsc1kjnpHM59C28%2FEJDeXH6OZDZOnlSqsV5SENJ1gqZg67RlDpRhJeh2MKXGV5ZDsxkIWIPRi9CA%2BeXwRwCQ6JlG%2BKr6zb%2FD3vCXZ7cQiS508A%2BwfrHFPGTFsqPyuLzzeW2b36U%2F70UQfzKchbeVJTFbxn7%2BuSshpzwtpEbdUYW5z7uowWDeYRYJgCOOl9z9cMwIdpEsqACWvjYpcYrBHDtR2vdDQJo6Y7c%2FVUz%2Bm2E43qAg8cd1LV%2FoXaNKhS70Eyqk%2Fxas2qIy5G39Pf8FlkL1IMGDwDB0DaMJqHi8IGOqUB%2FjRgKyNY5b%2BB%2BjMsHrPg6ZjyNmoeIvaa7bxMNjzQoPh0awXhD6W1UbI7WW5XtXRWcMiLcOk1%2BlDF3XGbzdbzo9m6Z2jM7%2BcQOcMnGyOni8y8PAOsm7mRYjAHe6Wf%2Fvrc%2B55nPthLRl3iIGxCHUlzFT9WI0CovmNIUc%2FvsAkFsDBUHczhzi8vYPGxj5zKEmvbvL8Q%2B47EehTAu1CcZ3K99zblknr5&X-Amz-Signature=6fb7d09e164dbc4f0ef86e76d4c2581c83902cb81a995648e5709aeb84f56912&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLRKCV3K%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlSb%2Bkycsy1VLXZ1vYyI68gpBZtY9Ib2uSVQRXlR6iIAiEA4inHtpoRXPV1ZaVbB0EVhKcrfDXYav6x%2B38mKs7R1A4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDCtwCH2fYgxWe3L0TSrcA7ZaLoNBPBjjCqbjqdaHvZBGqljhIf%2FLYDNB2s5ck3CgXnYeoy0ahmrDx38E8BVNYnBnPdo70hOAAvSB0sq5a3o4xvhSYorqxWPDo6lIZ9Qyip6Euk8av50FNw0G1yrEQ18Av8LQdjOOKm65sLb7AuRImqbO15MZSO5wsEc4fC6Ybih2sbL64mv1NLf3raLP83ti3J3ecIRTURKvGOjp0acq%2BzWNbZ1Wsnr2dXB6kh7ywJjV%2F6FNQ%2B%2BrsTXO%2BOfdCUE7Im5DPCQ%2FxFv7XkSnCCAriUh1HO%2BYF53JWv0AaEHZu8vlzcTax8Asr45lWkTb2sITs2b1n28Oo3ghnOf2woMn4oGsc1kjnpHM59C28%2FEJDeXH6OZDZOnlSqsV5SENJ1gqZg67RlDpRhJeh2MKXGV5ZDsxkIWIPRi9CA%2BeXwRwCQ6JlG%2BKr6zb%2FD3vCXZ7cQiS508A%2BwfrHFPGTFsqPyuLzzeW2b36U%2F70UQfzKchbeVJTFbxn7%2BuSshpzwtpEbdUYW5z7uowWDeYRYJgCOOl9z9cMwIdpEsqACWvjYpcYrBHDtR2vdDQJo6Y7c%2FVUz%2Bm2E43qAg8cd1LV%2FoXaNKhS70Eyqk%2Fxas2qIy5G39Pf8FlkL1IMGDwDB0DaMJqHi8IGOqUB%2FjRgKyNY5b%2BB%2BjMsHrPg6ZjyNmoeIvaa7bxMNjzQoPh0awXhD6W1UbI7WW5XtXRWcMiLcOk1%2BlDF3XGbzdbzo9m6Z2jM7%2BcQOcMnGyOni8y8PAOsm7mRYjAHe6Wf%2Fvrc%2B55nPthLRl3iIGxCHUlzFT9WI0CovmNIUc%2FvsAkFsDBUHczhzi8vYPGxj5zKEmvbvL8Q%2B47EehTAu1CcZ3K99zblknr5&X-Amz-Signature=636072bc3dd5828597f9396bbb3b4726f3fdcc305134b8469440311700a058e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
