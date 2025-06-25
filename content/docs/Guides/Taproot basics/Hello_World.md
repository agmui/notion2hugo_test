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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RL7Y6MJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEPA0ijdLUDLdDeWpkAD0DfzG8WPuInvOQjNtNada73FAiEAkPwUBYiTlfEEhONWwv8c6R4wwqMYlEUP%2B6rVZzg7cZcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJc2I6I5xPJUDw64lCrcA9OCuNPLYSEBwOfqUByQlQp580%2Fju6akIKJ7C5OruaFOF%2BgTfuGi0oe4t57soEFbNVHBv0ouKc5%2BnBww4yvIIFiqNf2vn5xSdBHkx7urHUZCVVjnbW03sDkSpJmL%2Frwm4goUwq16IJfDDZhsorF5MzMqCNBP4AuGPb34gLdHUN1P%2FKhZ922qBZf%2FDRbTKy1Z4CZI0sxkHx1Zt6%2FI564k3O0payE5KNhsyqyvtvB%2FtLANBLMiqi0rwi%2BY4CPxKlu2Z9KRxbUZTr7zGrIXknt0Yb7yW5hpTYhp%2FNckyE0hz8DGT0Zj5KE1xtUXvg%2FE1WZ3JSjjNAFCAzHyaCVEq00PkDMvFkz5cVI0EAQxtxnzEbheV7Bn2jPoUl7sbCeoWk7xyMVyrRwnrPaa7oTtfyDbv9FuyVEBAI4Ch8K9DCDKa0SpDmIYo%2BqjMmnz4fFqn%2FDeAFxFy87RCvX1goPuh4y%2FHbEXN7mcgPRxtmoFInObvkLIr%2FwffWVefDwsBmPl35cS08ZWrBwLnx8qAOlPsA1u2FF27ne%2BsMEVaT9M0LCr4AlYB20JDZtLuTsixr1Qya4foj4gywFX3g7rWt8W2kWoE8fGasuFX8q3sjwAKKjBuUEFOgxfWv377vUKMiVeMPfu7MIGOqUB55ptJKPeo36kctqakAuD1U%2BbZwKAjPMagxlyVdvXvC8WlIlcKh5ebB2JcQ4MYa0nZYCvAAnlEROYeR1u55Dig%2B9yr5nefMIDCQJSPkcBhPTB%2BtXxhy12Vl13RtFE7pUi9ciwb5wteiJjHduFzeFjq%2FxdwVEuzUBJtiaColFl957PTHeYr2uoAN7M%2BZ0W%2B2SdbVVVuUKTRkFcngElgq7a7m1p2i9D&X-Amz-Signature=293a3426200a2071ba7a4f3b1eba96bbbd6cddfce36b84bd91c873a4442f9d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RL7Y6MJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEPA0ijdLUDLdDeWpkAD0DfzG8WPuInvOQjNtNada73FAiEAkPwUBYiTlfEEhONWwv8c6R4wwqMYlEUP%2B6rVZzg7cZcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJc2I6I5xPJUDw64lCrcA9OCuNPLYSEBwOfqUByQlQp580%2Fju6akIKJ7C5OruaFOF%2BgTfuGi0oe4t57soEFbNVHBv0ouKc5%2BnBww4yvIIFiqNf2vn5xSdBHkx7urHUZCVVjnbW03sDkSpJmL%2Frwm4goUwq16IJfDDZhsorF5MzMqCNBP4AuGPb34gLdHUN1P%2FKhZ922qBZf%2FDRbTKy1Z4CZI0sxkHx1Zt6%2FI564k3O0payE5KNhsyqyvtvB%2FtLANBLMiqi0rwi%2BY4CPxKlu2Z9KRxbUZTr7zGrIXknt0Yb7yW5hpTYhp%2FNckyE0hz8DGT0Zj5KE1xtUXvg%2FE1WZ3JSjjNAFCAzHyaCVEq00PkDMvFkz5cVI0EAQxtxnzEbheV7Bn2jPoUl7sbCeoWk7xyMVyrRwnrPaa7oTtfyDbv9FuyVEBAI4Ch8K9DCDKa0SpDmIYo%2BqjMmnz4fFqn%2FDeAFxFy87RCvX1goPuh4y%2FHbEXN7mcgPRxtmoFInObvkLIr%2FwffWVefDwsBmPl35cS08ZWrBwLnx8qAOlPsA1u2FF27ne%2BsMEVaT9M0LCr4AlYB20JDZtLuTsixr1Qya4foj4gywFX3g7rWt8W2kWoE8fGasuFX8q3sjwAKKjBuUEFOgxfWv377vUKMiVeMPfu7MIGOqUB55ptJKPeo36kctqakAuD1U%2BbZwKAjPMagxlyVdvXvC8WlIlcKh5ebB2JcQ4MYa0nZYCvAAnlEROYeR1u55Dig%2B9yr5nefMIDCQJSPkcBhPTB%2BtXxhy12Vl13RtFE7pUi9ciwb5wteiJjHduFzeFjq%2FxdwVEuzUBJtiaColFl957PTHeYr2uoAN7M%2BZ0W%2B2SdbVVVuUKTRkFcngElgq7a7m1p2i9D&X-Amz-Signature=d0b95a66c5b3889a4003a6d777b52df4f4cb3bd7386897c81a82885936b8d478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
