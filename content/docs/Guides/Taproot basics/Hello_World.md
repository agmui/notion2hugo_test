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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYPPZIWC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtZfucOjy%2BiGayYy0nz1KSXwicRRWC2kp7yT%2F%2Fh%2BEMDAiEA5zgmROdoGyO580KOaapMRVnnKgeRiMEoJcXUwPWAaY0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB474BfwN6pfbiuWzyrcA%2BGa1WoHvmcZ9prMfsTRd7fU23wM%2BGnJo%2FN3UA4tZRVareNhAXR9b00C5klloV%2B5A3Lq4GiWFCTQ6gFgL3SsNW5MG%2B2lZojt%2FaqgzXmMpTOBCni%2FrvgMkge%2B6AhGfeu%2BqhONVDNidU5XOBBagwm8e9RdNhTB3r99Pf46m%2F0ZL%2FVekP34frYWi3v2xBhGFX5RY%2BMcLB1Bg%2BWnLJPaWCEJvVj5HkQeGmWkPw4m33N%2FCznkoYLN4rfDnMV2l7tv4Ox7g%2F0N28OP%2BtDUsKNt8vu1rwRtfGKZnKbBlNXe0gN%2BP%2Fy5vnKoESpvCRGsj%2B2eUxwCsx3wAE9nMdlgpKzJgOKYtWlnZ2AASiMeBufsxgl7B5qRkz7IY0yKgzd9gcUMu%2BIr3AOfEbb%2BMe2GLZUwJrBfynth6MbIspL8eQcz61id6HILs29QpXL7s4RA97pHsIXtYvnNuevzwjJBSAdhJ%2BAF7p3zcKzbINMTUeMnbarBoWzhUGHCarcSUcyW7x4TxCeiP215Ge1icVfw9VDpIxq1drWyRu26SzXVMi6nw0hG4KM%2Ft%2FgSzXwEQfPgDpxO%2Bd625b12fFDcexvAT%2FeKCr5eFVuk5Szd63iFFmlnZPH%2BEFB6TY4boPadPB%2FNgh2pMM27lr4GOqUBttbZQnJPMbvCnqhX%2FJBw4AXLE2KKlunvML%2F%2BO3wIno6jNFeKlrwDFvBGPI%2BTum2KNch9vr0SZAenBMPn0ET4cK6fzfOFVJfNbwoJJ%2FULhHzf3LyZsq%2BBrpperGR9T4lDU2ny84d%2BExdw%2FdqdD6KZA1tcqO5IJ6U7zDNSxrLH35bpFmb1mlKwqAzbQONbXT81WTVJtgiVZiQfnPh2vS1NbShTB7Rr&X-Amz-Signature=b00dd991db17f45bf71b6c1898c5b896c6c8dc58a48c499aef446cf04afc75c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYPPZIWC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtZfucOjy%2BiGayYy0nz1KSXwicRRWC2kp7yT%2F%2Fh%2BEMDAiEA5zgmROdoGyO580KOaapMRVnnKgeRiMEoJcXUwPWAaY0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB474BfwN6pfbiuWzyrcA%2BGa1WoHvmcZ9prMfsTRd7fU23wM%2BGnJo%2FN3UA4tZRVareNhAXR9b00C5klloV%2B5A3Lq4GiWFCTQ6gFgL3SsNW5MG%2B2lZojt%2FaqgzXmMpTOBCni%2FrvgMkge%2B6AhGfeu%2BqhONVDNidU5XOBBagwm8e9RdNhTB3r99Pf46m%2F0ZL%2FVekP34frYWi3v2xBhGFX5RY%2BMcLB1Bg%2BWnLJPaWCEJvVj5HkQeGmWkPw4m33N%2FCznkoYLN4rfDnMV2l7tv4Ox7g%2F0N28OP%2BtDUsKNt8vu1rwRtfGKZnKbBlNXe0gN%2BP%2Fy5vnKoESpvCRGsj%2B2eUxwCsx3wAE9nMdlgpKzJgOKYtWlnZ2AASiMeBufsxgl7B5qRkz7IY0yKgzd9gcUMu%2BIr3AOfEbb%2BMe2GLZUwJrBfynth6MbIspL8eQcz61id6HILs29QpXL7s4RA97pHsIXtYvnNuevzwjJBSAdhJ%2BAF7p3zcKzbINMTUeMnbarBoWzhUGHCarcSUcyW7x4TxCeiP215Ge1icVfw9VDpIxq1drWyRu26SzXVMi6nw0hG4KM%2Ft%2FgSzXwEQfPgDpxO%2Bd625b12fFDcexvAT%2FeKCr5eFVuk5Szd63iFFmlnZPH%2BEFB6TY4boPadPB%2FNgh2pMM27lr4GOqUBttbZQnJPMbvCnqhX%2FJBw4AXLE2KKlunvML%2F%2BO3wIno6jNFeKlrwDFvBGPI%2BTum2KNch9vr0SZAenBMPn0ET4cK6fzfOFVJfNbwoJJ%2FULhHzf3LyZsq%2BBrpperGR9T4lDU2ny84d%2BExdw%2FdqdD6KZA1tcqO5IJ6U7zDNSxrLH35bpFmb1mlKwqAzbQONbXT81WTVJtgiVZiQfnPh2vS1NbShTB7Rr&X-Amz-Signature=20b92725166ceb0cb4538b7aa233be48f35063864de3045b30b953d9acbdcd47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
