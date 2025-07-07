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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYD3MLR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC0pjhWOXQmw6H9FPACCqRrqAHuCc4XcBXSTB5Iwm4XYgIgbPvbaeeWdeicikh9y2bCPTuFPezHgaOKQaRAGV6B7O0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDODEz3lxY1gGFMoJwSrcA4%2FI8%2Bq9ih6Nmib%2Bauu6ljq0EpDHwP3QuMY5UJRgCE0EIEiNjGbu69zdm6TGRNI1twqTkpBQL4stBr33akHWf%2FmnZZN4LPgIxCNpsX3NdaTioZifFs9HD3CSYh7moe60kHId8Pa0%2BoDCdBYNQsOa8i1MVBcWGg0wkbzDaGBr6Nd6Owoy3XSoRM5ECGiDZ2uhzHI3nAwnQvlYWeYSHfLfWh5xDEZi6rP5lRBkNMe0qE6RHLPKILK%2BnZFYrSf1GFqV7WnR8JHjhAwoMYZEfh5hdDUeHnTH93zbcP84%2BSyVqi%2BKY4WcSh3Uish8rcux811t71vOHz5ORp9VVO9KCMweJ5uqqnyRNtzLnoccH1ELnOKa0fG03gru8%2FRpE9kV6peNoolcnMba0hyWfRSU96CnMj0sMhlf2bsUMOgXTADjDQmd%2FQz1nVLsA0R6YNkEWKvoL4pQ5BL%2FGTfQY1d83PvpFv%2BLKliC2p0ygg8GV68V%2B7WqNyWmsjXf7k5gCcixvZbIAGacnEZOM52vJoPMXbvjYI3UOF4Jb79fSXoQ0Vy5HpoCvDOrpjyXZmJ3RZYU8UCEeACpbBaNT1vUtv9yzPo4JJDJIkLSpsp3g42f9idl6Jj3dqB9i%2Fgj08oOYj0EMJy4rsMGOqUBbmnMRZjP9yYyQr2xWGKX3oMCL4PZWqdvw32k7NJAq3uRIelmVoaAFUSAl5LlDJ0GANJnZVUiJOyeh0AlskHH94CU1guuXNafwq8kBPtBT2D63iNwgY96Lbi8UMeBggbMWQtxIAuKwtAzJ5RqbRxEyhEVTa%2Fx8xp%2B22Q1%2FCfG4h65P1ey7csDi9qDpJG30f6k6UBJbtAyXSE%2BMIX%2Ftj7PCGntWbMb&X-Amz-Signature=786d5e4a356fae9cbf4104c24e477818f5f5df06cc603b32d7c6d8b1c89143d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYD3MLR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC0pjhWOXQmw6H9FPACCqRrqAHuCc4XcBXSTB5Iwm4XYgIgbPvbaeeWdeicikh9y2bCPTuFPezHgaOKQaRAGV6B7O0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDODEz3lxY1gGFMoJwSrcA4%2FI8%2Bq9ih6Nmib%2Bauu6ljq0EpDHwP3QuMY5UJRgCE0EIEiNjGbu69zdm6TGRNI1twqTkpBQL4stBr33akHWf%2FmnZZN4LPgIxCNpsX3NdaTioZifFs9HD3CSYh7moe60kHId8Pa0%2BoDCdBYNQsOa8i1MVBcWGg0wkbzDaGBr6Nd6Owoy3XSoRM5ECGiDZ2uhzHI3nAwnQvlYWeYSHfLfWh5xDEZi6rP5lRBkNMe0qE6RHLPKILK%2BnZFYrSf1GFqV7WnR8JHjhAwoMYZEfh5hdDUeHnTH93zbcP84%2BSyVqi%2BKY4WcSh3Uish8rcux811t71vOHz5ORp9VVO9KCMweJ5uqqnyRNtzLnoccH1ELnOKa0fG03gru8%2FRpE9kV6peNoolcnMba0hyWfRSU96CnMj0sMhlf2bsUMOgXTADjDQmd%2FQz1nVLsA0R6YNkEWKvoL4pQ5BL%2FGTfQY1d83PvpFv%2BLKliC2p0ygg8GV68V%2B7WqNyWmsjXf7k5gCcixvZbIAGacnEZOM52vJoPMXbvjYI3UOF4Jb79fSXoQ0Vy5HpoCvDOrpjyXZmJ3RZYU8UCEeACpbBaNT1vUtv9yzPo4JJDJIkLSpsp3g42f9idl6Jj3dqB9i%2Fgj08oOYj0EMJy4rsMGOqUBbmnMRZjP9yYyQr2xWGKX3oMCL4PZWqdvw32k7NJAq3uRIelmVoaAFUSAl5LlDJ0GANJnZVUiJOyeh0AlskHH94CU1guuXNafwq8kBPtBT2D63iNwgY96Lbi8UMeBggbMWQtxIAuKwtAzJ5RqbRxEyhEVTa%2Fx8xp%2B22Q1%2FCfG4h65P1ey7csDi9qDpJG30f6k6UBJbtAyXSE%2BMIX%2Ftj7PCGntWbMb&X-Amz-Signature=9f55ffac255c61c6b9f0cd150f8ba0f8a64d2b87f2fc02cf34a690fa33de2a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
