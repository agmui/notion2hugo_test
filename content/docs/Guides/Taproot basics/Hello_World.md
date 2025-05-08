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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7TEUKI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ANUoYF8GDDsiG6jD0EjYMvRjM3iFz5mmve9YGMsLUQIhAN9pyN%2FOWg0xroX0qAvNta0tcb%2FgCh4C2720ZnweqlLeKv8DCGwQABoMNjM3NDIzMTgzODA1Igz6Fk8ZtVLbL13cIuEq3AMhKSTDHThM1bT0SMTU1412xBgCTTBEuIzq31LkqAIb1yDBr28GPRlRjkm25Cv0cZiS9Y%2FvJWk3CdyC%2BS%2FMrEjjXfo0O8He0L04GiCoMnzGisUmaT0OumFiL8V64zPyh%2Fhd0ZFZv5p4ktnRbzzfTJslBgnrSJeFzm0n3t9AnXPT36GwulwgDNXjsk58LO8M4Ftx8zZ%2FTeTe%2B4oG%2Fo8GdGNiVdwhI4Iqd706gYhFfJYHIiKdX0M%2B9XDoqsniwIe0u%2Fwb5PMNH8qh3fOLss0M%2BxLEtvKIJr30xbDijKo02Qf7mJ7EdfmhrEyKW9Hd5enIn5xDsNb04dkDd3OIBhtIXQgYgMTQi8i5RZdvVn0MGbnjYgeAU%2B0wLFkt3KCZVYErkXCkvkMrET4l3QRGHKliZHAqkoiYOxky9owIuLHR2Lv%2Frw09VGqhxZKrb%2BnZyTnl0S%2BqhSb99fOnRvmt87KaljmEIi0vnXJ406xHKT8%2FcHEJi7rOTEtw3aasKOWeTYdZOQFk0elCi41re7FCo6AQtG8PFxNkv6bP3i8MlQ4tZfjPEQUx%2FnXLAOeRwaZzXgHbcoq40gEiffKqomx62El5yG8EaNl397KvI9604F31uL7WCIswvgE5Nk6Ty3skJzDCwvDABjqkAUq3CN5N7aZRRby1%2Fz9dZw3CHMMZAu%2F2iyPW5IJbxqriCiucSRGMtpRQ0DjMGojJjZv9qJOkPcoSul5WLAv5AFShNCMq7kJW%2FuOTXzkFSTXDEv2xKIH3FsRLz0eO0dO4bIb%2FgsdinOP%2FwAYI1131a7xdSeAkQ2v36hJcqZhNY9WhLRimF%2FAUfnsCNji%2B6VtGf%2F7m5UEzBmCxn5a0Wk2Bc6LNIsES&X-Amz-Signature=7e613c441c18cc9d615a3321c609e415613eb53ad1f383bbd4f9ff532957300f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7TEUKI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ANUoYF8GDDsiG6jD0EjYMvRjM3iFz5mmve9YGMsLUQIhAN9pyN%2FOWg0xroX0qAvNta0tcb%2FgCh4C2720ZnweqlLeKv8DCGwQABoMNjM3NDIzMTgzODA1Igz6Fk8ZtVLbL13cIuEq3AMhKSTDHThM1bT0SMTU1412xBgCTTBEuIzq31LkqAIb1yDBr28GPRlRjkm25Cv0cZiS9Y%2FvJWk3CdyC%2BS%2FMrEjjXfo0O8He0L04GiCoMnzGisUmaT0OumFiL8V64zPyh%2Fhd0ZFZv5p4ktnRbzzfTJslBgnrSJeFzm0n3t9AnXPT36GwulwgDNXjsk58LO8M4Ftx8zZ%2FTeTe%2B4oG%2Fo8GdGNiVdwhI4Iqd706gYhFfJYHIiKdX0M%2B9XDoqsniwIe0u%2Fwb5PMNH8qh3fOLss0M%2BxLEtvKIJr30xbDijKo02Qf7mJ7EdfmhrEyKW9Hd5enIn5xDsNb04dkDd3OIBhtIXQgYgMTQi8i5RZdvVn0MGbnjYgeAU%2B0wLFkt3KCZVYErkXCkvkMrET4l3QRGHKliZHAqkoiYOxky9owIuLHR2Lv%2Frw09VGqhxZKrb%2BnZyTnl0S%2BqhSb99fOnRvmt87KaljmEIi0vnXJ406xHKT8%2FcHEJi7rOTEtw3aasKOWeTYdZOQFk0elCi41re7FCo6AQtG8PFxNkv6bP3i8MlQ4tZfjPEQUx%2FnXLAOeRwaZzXgHbcoq40gEiffKqomx62El5yG8EaNl397KvI9604F31uL7WCIswvgE5Nk6Ty3skJzDCwvDABjqkAUq3CN5N7aZRRby1%2Fz9dZw3CHMMZAu%2F2iyPW5IJbxqriCiucSRGMtpRQ0DjMGojJjZv9qJOkPcoSul5WLAv5AFShNCMq7kJW%2FuOTXzkFSTXDEv2xKIH3FsRLz0eO0dO4bIb%2FgsdinOP%2FwAYI1131a7xdSeAkQ2v36hJcqZhNY9WhLRimF%2FAUfnsCNji%2B6VtGf%2F7m5UEzBmCxn5a0Wk2Bc6LNIsES&X-Amz-Signature=ac28df01fadc74df112a89b5391fb0c0562aad4ad439063dab5151c08b9067d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
