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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JQQY35%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG47%2FO3zHJjxff8xwcXCgUyLt3Blx2j6DvEuCM7Evh5EAiAkENVOeP%2BBw6F3MPnLipog6m7794yB0iEc8rL%2FfET0pyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMXPw63C9EI73p6ZoZKtwDwaKJNQ4FJT9N6gu17mTKBNoMqIY4ZLxZzRDN7qDd0vhXwnoWIsW8YiiXdB6QeS8F7EzwTB2zre6wHb9L60lVQYWEu0UjS3LbznVRSkDKqwAVMC%2BIBdqWd883doats%2BUoLvP%2FfLoi41CWsB72s2MLWZpdGuOgRzIUJuBy4DdipVu0hUfa2wwQtfAx2k2ZFu8wKW2qRokmfEdKTdYz4p8CwWzwzFRQlZA2iTm80G2ua6r%2FyPFrFYedfsvq25b3Zp15VOT8BlDbD9HJC7FKXZCeKccjDToljqfouYwNSVP0NB%2FNRgD61NBU23j%2FCbBgPsxTjld%2Bgjk3hp%2BJ9IVHX14j%2Fv9x6QrK%2BZzbvNDs5n3dgpGyY5c1QPdIEVGhNf2RmO0fvlPWYBQo5eif%2F2Hz%2B24H4lbzO4BkPqC6pH%2BgHDGO6H5lRZXSYNwd2GBFtxh7%2Fxn99cbpnAcnMwdBwGf8N02wafqV2gZxbgpkYhj%2FeUNgDnyfIkvyXV73FFKSzNAvFgUCWGv%2FI1qMJsQ3Frknm2w6qF2unDZww%2FGOdTB%2FQRM7YXZfc3PVHDnAR%2BCmVR55loGTOfD7VZ%2FVaiONT5U0vLsLP2vWcQOylY1009aFNmqpivC439imyVtyQmIrMd8wkLXMvwY6pgGRHOcbRw5V8%2BO2%2Ff%2F49r69VL0dCxhwyrsbecky0C4TOMnuG%2BKrzJHYxVfZ6EqImkv6P9AVA9b6VOoM0OVRPhfHXkOvDM%2BX%2FaUTe22NjWG8pwffNL5CHRNM%2BJWgHo4SBkUI%2F%2Ft4txKPDpbyuBIV99T%2FVpIKJEBwyRyFdJ4uyjCGammdVyX1mrAESsD2Q10oe%2B%2FLA3UjREvUEZJNLSlfPQsuXsRP6SoE&X-Amz-Signature=aa28ed7ca52e5f2825ae22306eaa147493eeeefaca6c05f72bfcadcdc6e855d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JQQY35%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG47%2FO3zHJjxff8xwcXCgUyLt3Blx2j6DvEuCM7Evh5EAiAkENVOeP%2BBw6F3MPnLipog6m7794yB0iEc8rL%2FfET0pyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMXPw63C9EI73p6ZoZKtwDwaKJNQ4FJT9N6gu17mTKBNoMqIY4ZLxZzRDN7qDd0vhXwnoWIsW8YiiXdB6QeS8F7EzwTB2zre6wHb9L60lVQYWEu0UjS3LbznVRSkDKqwAVMC%2BIBdqWd883doats%2BUoLvP%2FfLoi41CWsB72s2MLWZpdGuOgRzIUJuBy4DdipVu0hUfa2wwQtfAx2k2ZFu8wKW2qRokmfEdKTdYz4p8CwWzwzFRQlZA2iTm80G2ua6r%2FyPFrFYedfsvq25b3Zp15VOT8BlDbD9HJC7FKXZCeKccjDToljqfouYwNSVP0NB%2FNRgD61NBU23j%2FCbBgPsxTjld%2Bgjk3hp%2BJ9IVHX14j%2Fv9x6QrK%2BZzbvNDs5n3dgpGyY5c1QPdIEVGhNf2RmO0fvlPWYBQo5eif%2F2Hz%2B24H4lbzO4BkPqC6pH%2BgHDGO6H5lRZXSYNwd2GBFtxh7%2Fxn99cbpnAcnMwdBwGf8N02wafqV2gZxbgpkYhj%2FeUNgDnyfIkvyXV73FFKSzNAvFgUCWGv%2FI1qMJsQ3Frknm2w6qF2unDZww%2FGOdTB%2FQRM7YXZfc3PVHDnAR%2BCmVR55loGTOfD7VZ%2FVaiONT5U0vLsLP2vWcQOylY1009aFNmqpivC439imyVtyQmIrMd8wkLXMvwY6pgGRHOcbRw5V8%2BO2%2Ff%2F49r69VL0dCxhwyrsbecky0C4TOMnuG%2BKrzJHYxVfZ6EqImkv6P9AVA9b6VOoM0OVRPhfHXkOvDM%2BX%2FaUTe22NjWG8pwffNL5CHRNM%2BJWgHo4SBkUI%2F%2Ft4txKPDpbyuBIV99T%2FVpIKJEBwyRyFdJ4uyjCGammdVyX1mrAESsD2Q10oe%2B%2FLA3UjREvUEZJNLSlfPQsuXsRP6SoE&X-Amz-Signature=9e17f6d7a0435e2b5471a803743e990df91ac6c61e5539870798955f02b4de62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
