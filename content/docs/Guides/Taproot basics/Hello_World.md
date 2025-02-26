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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XUSTU2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBdcp8mhEMJseyTuY9w%2F6gToanAC625VFBru2Ick4E6tAiEAqt%2FFpOrh2AXEO9TEQz%2BGJYMI4c1UOgYzbG4LK3KUJHEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKXJc2a4qMFNAwY%2FHSrcAxw7pdBUbYILPQsFT%2BM97CtvDuQwvPDNdwwSwRu4Z1jy6DqjlVwF79oZd8i0x2wdt6kLuffoIHak5RuCq4sq4wzf0V6eD12TL%2Fgk5Jug%2BGM1L%2BzBV80Sw3aaQsbO2Mvedu9UVxby4AjhbBRt2A9J3zVpv1c%2F6esZfCnyL5xJr36C93RMpbDUIqcsBpcZMuIcQi2Mv0E6a7smHdXGO0R4eLB7PO3mkWGNqSu3j73tRyI8%2Fp6xM02cGCl0LPYL8wS%2B4IH%2BwfjLjIff%2ByXK%2BycTa6Iyx6aFwls5L8OmkhF4AaStKIAQ69ZcNhWTw9gapa6a7cyieYzQ7L1wrDTJfT3fuOsWncwkAcCR%2F%2FAZAJHexXsczUa44UE7y47CQptinocOMgQuSkJcg8TzfHQb4MaTc3reefxZHjMUoH52YLLbpg9iR%2B6AfBBjWMWbl9NW3MDHN%2BP9T1RV6W%2FwaLg2DGk8bVbcQw6v8u0sr2rgOxwdt%2B%2BPdFWlL%2FfwLO3PCaT%2BBTG9FhuWnTSMZAdsgWtHiWuu5oDGriNw%2BlQ6pbYSgXaMs7Q0qpMAu%2FtJGcGfkT0EHpgu6gmjdcVJQm59I5ef3cA%2BKLPuyFVllNiM%2BolYAFuBNNc8%2BL4TGCd2KKPZTdwdMMOA%2Fr0GOqUBSNyKp%2FHRvehiJV3oSKc7WD8UvL1gPOZHZDLh3A6tticffZmU7emEzMm%2BU0IuecxTqMWK7yPVhbtsM2L2amjcbIeG9QUEo04b06KaBZoydKvMB44%2FTGzUugsblLgezZ4phKp%2FH4NG2TTQUcoDK6058W6OdRudaergGDMlL3hVRx4lWMjdHpeOkIrfXP2pmsNTuvTRlvCJ8P4Soaaqc2qDd%2BLjCeOf&X-Amz-Signature=199dbc71a2f10636309d4278b1954aaba5ded3fbd1714be65cc08c259cf56e96&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XUSTU2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBdcp8mhEMJseyTuY9w%2F6gToanAC625VFBru2Ick4E6tAiEAqt%2FFpOrh2AXEO9TEQz%2BGJYMI4c1UOgYzbG4LK3KUJHEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKXJc2a4qMFNAwY%2FHSrcAxw7pdBUbYILPQsFT%2BM97CtvDuQwvPDNdwwSwRu4Z1jy6DqjlVwF79oZd8i0x2wdt6kLuffoIHak5RuCq4sq4wzf0V6eD12TL%2Fgk5Jug%2BGM1L%2BzBV80Sw3aaQsbO2Mvedu9UVxby4AjhbBRt2A9J3zVpv1c%2F6esZfCnyL5xJr36C93RMpbDUIqcsBpcZMuIcQi2Mv0E6a7smHdXGO0R4eLB7PO3mkWGNqSu3j73tRyI8%2Fp6xM02cGCl0LPYL8wS%2B4IH%2BwfjLjIff%2ByXK%2BycTa6Iyx6aFwls5L8OmkhF4AaStKIAQ69ZcNhWTw9gapa6a7cyieYzQ7L1wrDTJfT3fuOsWncwkAcCR%2F%2FAZAJHexXsczUa44UE7y47CQptinocOMgQuSkJcg8TzfHQb4MaTc3reefxZHjMUoH52YLLbpg9iR%2B6AfBBjWMWbl9NW3MDHN%2BP9T1RV6W%2FwaLg2DGk8bVbcQw6v8u0sr2rgOxwdt%2B%2BPdFWlL%2FfwLO3PCaT%2BBTG9FhuWnTSMZAdsgWtHiWuu5oDGriNw%2BlQ6pbYSgXaMs7Q0qpMAu%2FtJGcGfkT0EHpgu6gmjdcVJQm59I5ef3cA%2BKLPuyFVllNiM%2BolYAFuBNNc8%2BL4TGCd2KKPZTdwdMMOA%2Fr0GOqUBSNyKp%2FHRvehiJV3oSKc7WD8UvL1gPOZHZDLh3A6tticffZmU7emEzMm%2BU0IuecxTqMWK7yPVhbtsM2L2amjcbIeG9QUEo04b06KaBZoydKvMB44%2FTGzUugsblLgezZ4phKp%2FH4NG2TTQUcoDK6058W6OdRudaergGDMlL3hVRx4lWMjdHpeOkIrfXP2pmsNTuvTRlvCJ8P4Soaaqc2qDd%2BLjCeOf&X-Amz-Signature=3374a1f3d2659f9bd1c998a49d7f9bbffaf8394dff0301561d50f1136d1b2a46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
