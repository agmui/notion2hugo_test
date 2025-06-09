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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGY4UV3V%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9W8O%2FRSJ4jxWZjYtwdns%2BdeobC8a1tutnMsQF6Zp5gwIgbkzQK2ezmmcKW1%2FcEK0edqwZzwTWcRAL4NJ03vHCRfAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3UbZzl9i5Wz%2FweByrcA9EP90qXN%2FaONKQF%2FHfoLf0qIG3TRlXAM%2FECZyexbBYK2tg0j1nzi5Pwj4QgkUol4vRM0kdVi%2Bd%2FqmmOnLNnGTyc%2Fdv5eUN%2FFR08Mg3dI1ogKnA96186ONTDkAJPN%2BSgRzdoi7ySxHEE6olnSi9KtTNQD4m1t%2FxxqidL9rWxdYfqVRJVu0ucLTx%2BPS40rcMPgMu%2FE3zjvu4cfEuVTLzjU%2Bp3MDvsMH%2F4GjXtqF1vxp3IsDb%2BMWS2LMpsghQRxUziz0Y9mMVdLdrjuuOiW1zUw977jKGWWg9OnpkkhWAj4yJNFs2vMpbpWBYTLq04cAm0z5Mbv3%2FlBiaZBHGTtGX%2BFNe6THg1LxILQOOnczjpVNt1E0xLgTWjpZZFh3hqALppoUzPAqDBv0o4iF%2B6fObOe3%2Bn6lhMeq1K75xIjjjbL0OeoKDXOO9HXLmDo%2F7U2ai%2FAyOWZieigiJ8e41lqbmxct%2BL5eQxzLsNVa4S1bwmy0ngkcxXkvNmRkmnBGdLkXCx87Z6EmemsNa63Ne3iXPf%2BzK6KbYlozy%2Fq3Co64sgc7QjPUYe6KDXkbBiwCefYzs8khv95lkrbqOMAsaW9nMiYXiiSqq1Tl86s%2Bv8cd6YWr3N1dLQeB6N30Ted15AMLmVncIGOqUBXma2MkEn%2B6%2BmjljeFULaPAF7CALygWD3OpS7QDNKSAyKpSDS5vFKntxIlRUv%2FLWDr6yKw2MW0awmTsLcFwWkYxVgHnufFFBP%2F%2B8gnzi%2Fv8EMsogaeyp4AVuES3cIxkQPx1aZNyRKMaB3n8Df7dKUWeH0QT3Lf8joD4fQSfyfXRDGBS7dMKdy%2FhsZNlBSldPmh5tFxTcu7zOcANElm6lSrJHHaZJQ&X-Amz-Signature=3adf97ba175f07e350d1bf80f9d0c805912cfff10cca8b7b7b1bc56412617962&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGY4UV3V%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9W8O%2FRSJ4jxWZjYtwdns%2BdeobC8a1tutnMsQF6Zp5gwIgbkzQK2ezmmcKW1%2FcEK0edqwZzwTWcRAL4NJ03vHCRfAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3UbZzl9i5Wz%2FweByrcA9EP90qXN%2FaONKQF%2FHfoLf0qIG3TRlXAM%2FECZyexbBYK2tg0j1nzi5Pwj4QgkUol4vRM0kdVi%2Bd%2FqmmOnLNnGTyc%2Fdv5eUN%2FFR08Mg3dI1ogKnA96186ONTDkAJPN%2BSgRzdoi7ySxHEE6olnSi9KtTNQD4m1t%2FxxqidL9rWxdYfqVRJVu0ucLTx%2BPS40rcMPgMu%2FE3zjvu4cfEuVTLzjU%2Bp3MDvsMH%2F4GjXtqF1vxp3IsDb%2BMWS2LMpsghQRxUziz0Y9mMVdLdrjuuOiW1zUw977jKGWWg9OnpkkhWAj4yJNFs2vMpbpWBYTLq04cAm0z5Mbv3%2FlBiaZBHGTtGX%2BFNe6THg1LxILQOOnczjpVNt1E0xLgTWjpZZFh3hqALppoUzPAqDBv0o4iF%2B6fObOe3%2Bn6lhMeq1K75xIjjjbL0OeoKDXOO9HXLmDo%2F7U2ai%2FAyOWZieigiJ8e41lqbmxct%2BL5eQxzLsNVa4S1bwmy0ngkcxXkvNmRkmnBGdLkXCx87Z6EmemsNa63Ne3iXPf%2BzK6KbYlozy%2Fq3Co64sgc7QjPUYe6KDXkbBiwCefYzs8khv95lkrbqOMAsaW9nMiYXiiSqq1Tl86s%2Bv8cd6YWr3N1dLQeB6N30Ted15AMLmVncIGOqUBXma2MkEn%2B6%2BmjljeFULaPAF7CALygWD3OpS7QDNKSAyKpSDS5vFKntxIlRUv%2FLWDr6yKw2MW0awmTsLcFwWkYxVgHnufFFBP%2F%2B8gnzi%2Fv8EMsogaeyp4AVuES3cIxkQPx1aZNyRKMaB3n8Df7dKUWeH0QT3Lf8joD4fQSfyfXRDGBS7dMKdy%2FhsZNlBSldPmh5tFxTcu7zOcANElm6lSrJHHaZJQ&X-Amz-Signature=13e89fe24cda84dae54fb41658b79d8f2110e6fbe9bf13f2f14330cb9c9fe2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
