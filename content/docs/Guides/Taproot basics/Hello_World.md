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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVFKTVT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsNgiIR0%2F%2B8Sncwars%2FF7Tkdsk%2B%2FPKsU%2BZWFOC1OjbqgIgIMSXp0T6H3T4FaIkWNSknNs%2BKH9Z78wBWvWAvCQR1ccq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBa%2BMBT250FjKnMsmSrcA1vvLwrdWqEuPYGKY2qS4MUq4R%2FIFquyQQ5aHpbe05YZPygnxsc8BnZYRCUVccMt9HbhcMG%2FCddgQ%2FuJ%2FeFvhi6zp3VA8nZmJ7D4MjnviJ7QUze6V8oCM6JAHg64z26TxR%2BA2utsWki5kcEMdFxp463MdVFCL0wdq5MIGu7UlibAB6IOsWTaqXK%2BzQfcjx%2F96sijGHlJtiCr0dFotdP8R7LjlUtEgwUScaKdx94fv2zLNpjaCUiG1GzbqdTYziEd43FAfOZyMuVeSrMB%2BxM7nzDEtDVrwQ8sPAVK7jmc%2BCHXOTdMcGTXjA2e0nzcTxHnefx61B%2FAQol4PZVWxUHMkMHnjRb3%2Bs2Asw2iP5RXRDWx8NWSDWcjF2zgUNwR7cwTJSaQsPIACxPPNuDIa0COJbtX3kDBWfXChEI%2B2fip%2Fo3rTSTC%2BwKyYzxgRnj1%2BGZrjrzgWd6dY4t14eBFunPpEdMcRXoOAlpSp0BD5QQgmixaRJudqMpmP6GC%2FYTSDSuMx0J8l2FaxWDcUxac7cyWvWDKTvUGyS9fg2QBvG%2Bp%2B3zy0IjNk3iXlsU5N7yRWcHgXNMHwAUntZunH1YW0eghSpW%2Fs8UOvu9%2FfxilDyTVRFWsWVxvZ3jG8CS647XyMP2q5sIGOqUBWMvR%2FbwvhgryHGz9kBvODcwUON%2F3o1azn4c0Z7ET7zbIdSzpFZgIMLC2oNazg1diMT6Qe0S27yMozUxfrm0asu81iKP8IYlkUr3strnHpDw%2BvGn%2Bp1X0LyMo82VoD8WAeQSy51v%2BwSejw%2FMmCsKA5ifOotkAwScucTr1r2RkxN%2FhLt5TzYOlrGqvdwJPaLszLqfRiO%2BS61TtRd%2B2NGV%2Fzzevx1FD&X-Amz-Signature=e965b44404cbae6930fafb2055f64569c69c2c6195604ff0a2582fae2cdca0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVFKTVT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsNgiIR0%2F%2B8Sncwars%2FF7Tkdsk%2B%2FPKsU%2BZWFOC1OjbqgIgIMSXp0T6H3T4FaIkWNSknNs%2BKH9Z78wBWvWAvCQR1ccq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBa%2BMBT250FjKnMsmSrcA1vvLwrdWqEuPYGKY2qS4MUq4R%2FIFquyQQ5aHpbe05YZPygnxsc8BnZYRCUVccMt9HbhcMG%2FCddgQ%2FuJ%2FeFvhi6zp3VA8nZmJ7D4MjnviJ7QUze6V8oCM6JAHg64z26TxR%2BA2utsWki5kcEMdFxp463MdVFCL0wdq5MIGu7UlibAB6IOsWTaqXK%2BzQfcjx%2F96sijGHlJtiCr0dFotdP8R7LjlUtEgwUScaKdx94fv2zLNpjaCUiG1GzbqdTYziEd43FAfOZyMuVeSrMB%2BxM7nzDEtDVrwQ8sPAVK7jmc%2BCHXOTdMcGTXjA2e0nzcTxHnefx61B%2FAQol4PZVWxUHMkMHnjRb3%2Bs2Asw2iP5RXRDWx8NWSDWcjF2zgUNwR7cwTJSaQsPIACxPPNuDIa0COJbtX3kDBWfXChEI%2B2fip%2Fo3rTSTC%2BwKyYzxgRnj1%2BGZrjrzgWd6dY4t14eBFunPpEdMcRXoOAlpSp0BD5QQgmixaRJudqMpmP6GC%2FYTSDSuMx0J8l2FaxWDcUxac7cyWvWDKTvUGyS9fg2QBvG%2Bp%2B3zy0IjNk3iXlsU5N7yRWcHgXNMHwAUntZunH1YW0eghSpW%2Fs8UOvu9%2FfxilDyTVRFWsWVxvZ3jG8CS647XyMP2q5sIGOqUBWMvR%2FbwvhgryHGz9kBvODcwUON%2F3o1azn4c0Z7ET7zbIdSzpFZgIMLC2oNazg1diMT6Qe0S27yMozUxfrm0asu81iKP8IYlkUr3strnHpDw%2BvGn%2Bp1X0LyMo82VoD8WAeQSy51v%2BwSejw%2FMmCsKA5ifOotkAwScucTr1r2RkxN%2FhLt5TzYOlrGqvdwJPaLszLqfRiO%2BS61TtRd%2B2NGV%2Fzzevx1FD&X-Amz-Signature=b717125615c8193850cc44e0500f62bf41e465c3cc7af1224801ee76b43d6d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
