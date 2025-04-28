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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625L7MIJT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkrTUEOuy7peNSz%2Fp1aTb47NeJSnXfdA02hvBwKydROAiAxCXEMamm6K2n%2BChRaVnf6CzcKN0zj8oocjts4cxaJbCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMw%2FqgYrAiOJt4Qb5vKtwDnOkeW2xlcSLKYjB3PuBKc7AuSPSMGLe69erdxgdDKMGaPqk9Nj8Q%2FF%2FVMCGYkctP9DOhc7N9q26wdJtrg3T3NHBz1ffycrt%2BNRnFjZBMy7R8mPV3AZXyiLjdFHkbiDeHZBngnt688MIvRJ2NguwcgrCZ6OtjZJ93KSjxVHssJk1tJS9jy%2BpE%2BOYcGhcgi16dXB6RILyeH4AyegZwhJha0JegV4QjfdoN1xG9tR5P4Ks6YrqzHmOf5W6kqYJqWeI8%2BfTPlfxKPWvIRzsCgFtHgnaB35VR2VjyDko%2FkJ2EMYdxNJ0VxdimKwjwrz1WRZfgnKbDtbLpijBgamkro77hcshDLT%2FAYRIwvw4mMKkc3HyUPYoJ0X8eQP7YvyXeX7w0OWWqrPhQAyLZvNMP%2FpZc8q0Ha3%2BtyLmPnhHUkUoYfpLA2W%2FwOuCjVF1njbylmXj9Gv6yelmi90uK8rhF5pOJbCm9rqDeNYu%2F1kCS%2FMwSR4s8nJKhz9MeTVCPwq9Rx65PA5kEu8F8Eo95K9dPimjsIjDaGb4tlNADhwAkDFzzlK528iZIrmGL5G6NTRAZylaNCt6o4Ui2hE3VD%2FYVNfooD5Gqmod2Gjq6fLj%2FHgZ7Z0NfnACzkWNgoXGUV60wm56%2BwAY6pgFgIcgzfY9hvOHr3FXdysxGoKLAofmFQYa7z7vd70cPp0tHGPRsrZZH7oDmEJ4OCGDu5EhE3SBwCytM0axTeKv6XpBWG%2BxZiTSG2952y6EPTFK4JTwxX%2FgaLTh2FOu%2BVHHijMwj7iIl9O5iTZz4wxVKxf2ti3md2vwuA37MniyS9rbAUO5d4vfKT98PHoBO8qYyZDoDQ7NwES63UTNKlR%2BWK8vJAxN4&X-Amz-Signature=893fccbc6abc79d5018bdadea0d56fd4ea3be7f042e63f00b96dce34306bcce5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625L7MIJT%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkrTUEOuy7peNSz%2Fp1aTb47NeJSnXfdA02hvBwKydROAiAxCXEMamm6K2n%2BChRaVnf6CzcKN0zj8oocjts4cxaJbCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMw%2FqgYrAiOJt4Qb5vKtwDnOkeW2xlcSLKYjB3PuBKc7AuSPSMGLe69erdxgdDKMGaPqk9Nj8Q%2FF%2FVMCGYkctP9DOhc7N9q26wdJtrg3T3NHBz1ffycrt%2BNRnFjZBMy7R8mPV3AZXyiLjdFHkbiDeHZBngnt688MIvRJ2NguwcgrCZ6OtjZJ93KSjxVHssJk1tJS9jy%2BpE%2BOYcGhcgi16dXB6RILyeH4AyegZwhJha0JegV4QjfdoN1xG9tR5P4Ks6YrqzHmOf5W6kqYJqWeI8%2BfTPlfxKPWvIRzsCgFtHgnaB35VR2VjyDko%2FkJ2EMYdxNJ0VxdimKwjwrz1WRZfgnKbDtbLpijBgamkro77hcshDLT%2FAYRIwvw4mMKkc3HyUPYoJ0X8eQP7YvyXeX7w0OWWqrPhQAyLZvNMP%2FpZc8q0Ha3%2BtyLmPnhHUkUoYfpLA2W%2FwOuCjVF1njbylmXj9Gv6yelmi90uK8rhF5pOJbCm9rqDeNYu%2F1kCS%2FMwSR4s8nJKhz9MeTVCPwq9Rx65PA5kEu8F8Eo95K9dPimjsIjDaGb4tlNADhwAkDFzzlK528iZIrmGL5G6NTRAZylaNCt6o4Ui2hE3VD%2FYVNfooD5Gqmod2Gjq6fLj%2FHgZ7Z0NfnACzkWNgoXGUV60wm56%2BwAY6pgFgIcgzfY9hvOHr3FXdysxGoKLAofmFQYa7z7vd70cPp0tHGPRsrZZH7oDmEJ4OCGDu5EhE3SBwCytM0axTeKv6XpBWG%2BxZiTSG2952y6EPTFK4JTwxX%2FgaLTh2FOu%2BVHHijMwj7iIl9O5iTZz4wxVKxf2ti3md2vwuA37MniyS9rbAUO5d4vfKT98PHoBO8qYyZDoDQ7NwES63UTNKlR%2BWK8vJAxN4&X-Amz-Signature=9752c6f2166c0c12e12638f02e0ebc91c0e47ccdca25d00b71221997c6b40f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
