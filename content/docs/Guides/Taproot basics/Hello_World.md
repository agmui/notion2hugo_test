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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3WOZX4T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlhR2WdCXnWRq8rxvaf7niiH5b0zA3BUub%2BVRsxtri0AiEArGiHwJSqwUhenjugRoYxiGH58GKF09z2qJxgxUkmFmUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHSU1bYedaXx7rQX3SrcA18u7plaXaSlztTP%2Fwd93U6z1zJgVUPRCuqrUAeRAjLqgBYDeXdDWpxxMrlTcBiPs2iOiuy7zy7ip5G%2F%2Fltz4Q%2FT5pLL1JbTGY%2BSTuy%2FC9eDYjnO4pNhe5rSFLGxKVyxPz9iq2zL3L4CHkdTV80qO2TcjtshXofEB3ZynO3YuRvxPMtPKbyKv3tVxQn0Ue1zVGBkKSq8LSoZtf6XGptKJQnNG0Eg8kwXX1j7tdBdHo7ffl6ZVtBDVubYPx9sFIoft8%2FAibf9RwpbZkTctNjuWcIWiVvYbp35sbAgnr3yhoIz68c6B3xnFu0Ms%2BQPsWi%2Fl2nIoUfIa0Jv1%2BQ7iSgOB1Czqq4QS5HV8QXC4%2F2DYRHayk212vpvtzNX1aPEvQQ4Unv6OOXfbpmvJHdEggVtPfpBKC3OpqHMNUNipr37xQswE5W3I5KJLUQkHX%2B6jP3sP428f0yn5QRfw7SB3wd0WwKWYLs%2Fg81vvrSCjeYZNSkmCeCFShEet4amOZIcfT5yn31SSocSZtQEwQozarrVDXiGAgTI5YefA%2BncdJ0YN6e10%2FaeE13fIK%2B%2FyzuQpM9wXRR5BUoy7c9Qd5PWyUFNmsQ03cIeOAs66rh%2BALzQONSHoyHLv6pMqOYMLySjMMCey78GOqUBBvBMZTkR4Ozro5HxjmolZxmgWO%2FURlknLHCe1nusvY48DDrPZY9U70l62DCE%2BgUq%2F2SJJ2JHDyvuDlvJrKpM%2FAG9C6mNCdum%2F92hRIHDEZ%2BAPWkoeeE5U736ZC37CXudnqGJOBNUzqDem8B1pBmu4iowoMoYO1dpj3VoPCpt8%2FBuI0BxOnm4%2FhEosS0dF4g6viHrIie7jCENWu%2F%2FhA4oawOcAFrh&X-Amz-Signature=1806b4a2acbadb16809d3294a51ea97aaac09da94bc05bea1d26bdc1e73a9843&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3WOZX4T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlhR2WdCXnWRq8rxvaf7niiH5b0zA3BUub%2BVRsxtri0AiEArGiHwJSqwUhenjugRoYxiGH58GKF09z2qJxgxUkmFmUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHSU1bYedaXx7rQX3SrcA18u7plaXaSlztTP%2Fwd93U6z1zJgVUPRCuqrUAeRAjLqgBYDeXdDWpxxMrlTcBiPs2iOiuy7zy7ip5G%2F%2Fltz4Q%2FT5pLL1JbTGY%2BSTuy%2FC9eDYjnO4pNhe5rSFLGxKVyxPz9iq2zL3L4CHkdTV80qO2TcjtshXofEB3ZynO3YuRvxPMtPKbyKv3tVxQn0Ue1zVGBkKSq8LSoZtf6XGptKJQnNG0Eg8kwXX1j7tdBdHo7ffl6ZVtBDVubYPx9sFIoft8%2FAibf9RwpbZkTctNjuWcIWiVvYbp35sbAgnr3yhoIz68c6B3xnFu0Ms%2BQPsWi%2Fl2nIoUfIa0Jv1%2BQ7iSgOB1Czqq4QS5HV8QXC4%2F2DYRHayk212vpvtzNX1aPEvQQ4Unv6OOXfbpmvJHdEggVtPfpBKC3OpqHMNUNipr37xQswE5W3I5KJLUQkHX%2B6jP3sP428f0yn5QRfw7SB3wd0WwKWYLs%2Fg81vvrSCjeYZNSkmCeCFShEet4amOZIcfT5yn31SSocSZtQEwQozarrVDXiGAgTI5YefA%2BncdJ0YN6e10%2FaeE13fIK%2B%2FyzuQpM9wXRR5BUoy7c9Qd5PWyUFNmsQ03cIeOAs66rh%2BALzQONSHoyHLv6pMqOYMLySjMMCey78GOqUBBvBMZTkR4Ozro5HxjmolZxmgWO%2FURlknLHCe1nusvY48DDrPZY9U70l62DCE%2BgUq%2F2SJJ2JHDyvuDlvJrKpM%2FAG9C6mNCdum%2F92hRIHDEZ%2BAPWkoeeE5U736ZC37CXudnqGJOBNUzqDem8B1pBmu4iowoMoYO1dpj3VoPCpt8%2FBuI0BxOnm4%2FhEosS0dF4g6viHrIie7jCENWu%2F%2FhA4oawOcAFrh&X-Amz-Signature=6df0bc885f04e78c734b0a3a83001d7de57bd7eb64562668e81a07ee0365b737&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
