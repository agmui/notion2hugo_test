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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWOX2Y4R%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCjDs4tDdLzf%2B9zRJJG4LkI17FiDDXPl8wmy%2F%2Baxn60NwIgK18BS1dBE%2Fo62Kv7OdOGVzPZTXhqAukGK5NEj1hdqIAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAJvrtrisBWraqGsyrcA8SC8pnzhwoBhDOR0MHjcUETgT2bDKXJEKQqm9%2BEFZCsRuoX3y5Suq4RoYM6YAtp2dt4sRuPEeHHZ1ddeJc4etYDrnITUrPk4JjNM%2FmdOLz%2BWqQr%2B38xuoUTqnm54uzTiOS8mBuLJ63BNbwoxnjcaGuKtwz0dPCPM4tYvJvIXO6Bl19NllPEw6163Bs99lUD%2BdpmtR6vothhdjzgpFMOAdTcBD%2BUj4VmIwO%2Fo2w%2F0UmiqfNRFjGX5%2BVVqIatFEXHEX6aRQVZG%2Bmz%2B9Mgnbw7rkGK%2BN0STGWSRdkNf10aH2SjdXlp8MiPLJBsYWffI5kqzU0L7f6Y6Kic7IZafN2i7Pwbr2MW8N3qXLL3z8L6qL0vfOv6txCj%2BcvivKNcFhZQx1LLOyhYoLFlR4Fy1jf5j6Y90EqXfIu1AF789RbrR5XYx2wubBPrccvlBj0zuzOtmIIxEVLf0BnKnqor6t89af3PH7Bs2EOF%2BFg1BLhA9%2BYPreG2wgADKJJVgFkb0gGdbH74V3R3UIvJhalOmSq9DMZpi4rQGbVfeR6IrVYGdb1zbk2APf9Q4SSdX%2FtLzsC0ARJDiTsXfiZN22fuGNrrFj7rpffDYUfYYnwz8nVDdTT7FstTWtnN4%2Bg%2B6H1KMLiz%2BdMGOqUBNlOb%2FNjKbl8cTGVvalJI7h53zFjR%2FneMoW9cFTFxCsCjH4hUjadHUd8yeij%2FI2GnUm78uXJvdO6wK9mNADsLyejODQeozeUlu83HKZgZbOG%2FGb25vGGXdHovLR6ocErjJhlyOPiIp8TRk1gouUz9c0M9NefEvtxaM7igq7tdND4d8mwMrk3xiK%2BCLcU7Rjzz7OSo%2F06i4P%2F9dPuMWeyNua8v2j%2FE&X-Amz-Signature=749fe9d8541e94153b2a09ac5572badf5304caa779606891ee9bd78e3a084600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWOX2Y4R%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCjDs4tDdLzf%2B9zRJJG4LkI17FiDDXPl8wmy%2F%2Baxn60NwIgK18BS1dBE%2Fo62Kv7OdOGVzPZTXhqAukGK5NEj1hdqIAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAJvrtrisBWraqGsyrcA8SC8pnzhwoBhDOR0MHjcUETgT2bDKXJEKQqm9%2BEFZCsRuoX3y5Suq4RoYM6YAtp2dt4sRuPEeHHZ1ddeJc4etYDrnITUrPk4JjNM%2FmdOLz%2BWqQr%2B38xuoUTqnm54uzTiOS8mBuLJ63BNbwoxnjcaGuKtwz0dPCPM4tYvJvIXO6Bl19NllPEw6163Bs99lUD%2BdpmtR6vothhdjzgpFMOAdTcBD%2BUj4VmIwO%2Fo2w%2F0UmiqfNRFjGX5%2BVVqIatFEXHEX6aRQVZG%2Bmz%2B9Mgnbw7rkGK%2BN0STGWSRdkNf10aH2SjdXlp8MiPLJBsYWffI5kqzU0L7f6Y6Kic7IZafN2i7Pwbr2MW8N3qXLL3z8L6qL0vfOv6txCj%2BcvivKNcFhZQx1LLOyhYoLFlR4Fy1jf5j6Y90EqXfIu1AF789RbrR5XYx2wubBPrccvlBj0zuzOtmIIxEVLf0BnKnqor6t89af3PH7Bs2EOF%2BFg1BLhA9%2BYPreG2wgADKJJVgFkb0gGdbH74V3R3UIvJhalOmSq9DMZpi4rQGbVfeR6IrVYGdb1zbk2APf9Q4SSdX%2FtLzsC0ARJDiTsXfiZN22fuGNrrFj7rpffDYUfYYnwz8nVDdTT7FstTWtnN4%2Bg%2B6H1KMLiz%2BdMGOqUBNlOb%2FNjKbl8cTGVvalJI7h53zFjR%2FneMoW9cFTFxCsCjH4hUjadHUd8yeij%2FI2GnUm78uXJvdO6wK9mNADsLyejODQeozeUlu83HKZgZbOG%2FGb25vGGXdHovLR6ocErjJhlyOPiIp8TRk1gouUz9c0M9NefEvtxaM7igq7tdND4d8mwMrk3xiK%2BCLcU7Rjzz7OSo%2F06i4P%2F9dPuMWeyNua8v2j%2FE&X-Amz-Signature=48cdcf90d4e9423ffcec119be47e50fd2328f7a309f673753a37d7d928591b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
