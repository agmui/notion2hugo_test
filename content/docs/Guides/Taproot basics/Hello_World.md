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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDQIH6P%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIC9jfdIARkj0KrMKJ3NZleX%2B2k2KIqw3sLY8qHFH%2BPr6AiBoTS5aFR5j5vETu%2FYA5W9sQ7WnKpPVd%2BOg4XFB3LgP6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVJEih5EOvV7hvfZmKtwDmNgkDsbHvWv8mftSJPXf6E%2Bh%2FmoSU9Ij1vw4OScdqJgtdQZp2SyiZ78w3MnawDL%2BDNGztInEb0LMaO%2B3jDpp5vF278eXCTdXi5oXup94SN4wJ0rDKlLowijK%2Bp5Vb%2FwGBztez8qSIWTCKhSqTwS%2FGrBHVIIr5lbYVMrFwgsv%2BhoqkDJRztxGxEb7nXbX0HvR4bMitvhvcFN6rZRpx4AOII7IuGHOVWHpQ9Q1X9IMTOwI6uKXoWOBEAwPwHS0wfRZL3sUIWRAMKBlnIXYnRnHGKAaJ1oG4mWp7QnQgI52N3Yi1tORBsJ5EkPLTAPsNV%2B5qJO9PMAuGMLZJaSa%2FwcbXwx348c8qpTMC7iLgHWYc9qmvFWeyVIzdAq75mBKtoVd9f3mUQXea5aValDhLGEbR%2BHt1OD05zzB%2BrkckWORPTbYnPwLKG6BSCvCz1dKWyeq0xgC3hsHqzfVW5kCowTsr%2F60yn%2Fy7OJOEaa%2BExHwhpL6vC07Bmtlnb59Hi%2BjKf5TwpwHg9mPLjzuxws6SzAYNyJ6CrYPK9y0eCDEltRU6ebhenRJREK6Ihl9okcoMwKwitCys2s%2Bpeh4Lp0oSAkZ1r2f2OmYUD76o0kHdILauMpnJ9Feil7En5p8gkowtN3uwgY6pgE8whaKncEjjj0InfA9ztJy%2FRsqISNec7netO7DmH8VwS83q23yMWhRbwm2%2FMh%2Fc9vo4i3q1POi79i0CabelzwenvxLuBfqDWUItowTECOWBVC1WBek754cYWMPVikFElO6WHzKUV3YsNy0jsdP1KP8tKA4Cc1lSkkjo9QqhQIzRChUVaPJepvfppxwXeaOxPZVrwG6L0ZoMgjWowZLTU%2Fb6ePM1eZG&X-Amz-Signature=7673057366014a3b654c166673aca649f4ab3d30d153978c9fbb7e31c1afbfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FDQIH6P%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIC9jfdIARkj0KrMKJ3NZleX%2B2k2KIqw3sLY8qHFH%2BPr6AiBoTS5aFR5j5vETu%2FYA5W9sQ7WnKpPVd%2BOg4XFB3LgP6Cr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMVJEih5EOvV7hvfZmKtwDmNgkDsbHvWv8mftSJPXf6E%2Bh%2FmoSU9Ij1vw4OScdqJgtdQZp2SyiZ78w3MnawDL%2BDNGztInEb0LMaO%2B3jDpp5vF278eXCTdXi5oXup94SN4wJ0rDKlLowijK%2Bp5Vb%2FwGBztez8qSIWTCKhSqTwS%2FGrBHVIIr5lbYVMrFwgsv%2BhoqkDJRztxGxEb7nXbX0HvR4bMitvhvcFN6rZRpx4AOII7IuGHOVWHpQ9Q1X9IMTOwI6uKXoWOBEAwPwHS0wfRZL3sUIWRAMKBlnIXYnRnHGKAaJ1oG4mWp7QnQgI52N3Yi1tORBsJ5EkPLTAPsNV%2B5qJO9PMAuGMLZJaSa%2FwcbXwx348c8qpTMC7iLgHWYc9qmvFWeyVIzdAq75mBKtoVd9f3mUQXea5aValDhLGEbR%2BHt1OD05zzB%2BrkckWORPTbYnPwLKG6BSCvCz1dKWyeq0xgC3hsHqzfVW5kCowTsr%2F60yn%2Fy7OJOEaa%2BExHwhpL6vC07Bmtlnb59Hi%2BjKf5TwpwHg9mPLjzuxws6SzAYNyJ6CrYPK9y0eCDEltRU6ebhenRJREK6Ihl9okcoMwKwitCys2s%2Bpeh4Lp0oSAkZ1r2f2OmYUD76o0kHdILauMpnJ9Feil7En5p8gkowtN3uwgY6pgE8whaKncEjjj0InfA9ztJy%2FRsqISNec7netO7DmH8VwS83q23yMWhRbwm2%2FMh%2Fc9vo4i3q1POi79i0CabelzwenvxLuBfqDWUItowTECOWBVC1WBek754cYWMPVikFElO6WHzKUV3YsNy0jsdP1KP8tKA4Cc1lSkkjo9QqhQIzRChUVaPJepvfppxwXeaOxPZVrwG6L0ZoMgjWowZLTU%2Fb6ePM1eZG&X-Amz-Signature=4a2f5ab4826807dfbfb85bb51d451ffafd075ded04a75c800b99304e0addd5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
