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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NCHRU3U%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASfX5v10%2FhEIbYltMIphksEMUPZvuiDmZAasjMdCSq1AiAZGN2VSJr%2Fakj4xy7w1zwuKSBED1imIv6Wy9fhlF8xeyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2BmnRdNgsktNB4eDoKtwDKezM9Wid4nt0l6AWdtVMKRLpLXAjvMMJ%2FmJIQBuylXwQcu9%2BFHOVnbcBg%2F7wEaXsRMjP3e5rNITZVnPzBFXwEQcVYgca2OEDGWskfXb%2BFNNZLgHVQQ3KL5TERnoYdIWKk2WXh%2BXK6aIHDvWqar6L8HoT3ZxxOpPZkm%2Fb5dpY2RNdIVY9wpx5U0ENS65dQyZmdddfthTnEX8S30ssRjPm7N4OcdmL8bhPsxgVmue1yHAxHm6YyD9STBivURXxr1c15K9nSY9rKtTjrL4TxqqBX5MmCM6P6aZkKmQgZRnIep8turis146GjBA2pOYZlbGqK%2ByeJRWq2ssHXOSlx7XRRALQHt0FTm5Ms0EEbUcnEtwz9LI0cP1eJR6g84FwhpiIqfcqRxIIVQNRRupmVQNeFVCNIr7cD%2FCp6ea2Y5dPQ48xY5WU8MVOCAWb4uIMzhbP6wGDX80kx3Jn6XjC6JpY0MUAN7KeRU%2Fa5QT9u8qJIYd6j0rtAURAa%2Bf37qx2v2X%2FV27p8tSSzJmnrz2Cyc5c3WPzIov7MB4LN93ypYxIdQ9Qgd9KlcLxG%2BW856mlO0o2olQlctatZyq37K9YJRNM%2Biz4UkO2ls9WseoO58H%2F5wvPoaPdeJS%2FsbTZiF4wmoCavQY6pgGeYOgc4hw5IvryEfEFwJS9oFAFX0fUCMZtANiAYNkt6HmMZA284fO%2FAshaMlTsSfRkbnLeAfPPv0%2FUlZIzTuVqpwJtODrUZdrYGn%2BbZQkUylRgI62ZQ%2FPdOESAgrZJOvQHlN10qR4TRg%2BVD8jQgfneZrHX%2F%2BgDu9dkVPPbkMdk9Yxfj0Qsyj0wCoL8N0Cs8saJgFVHWO4XMCCw2vNnkT8%2F3fWWRfns&X-Amz-Signature=0697e0b7b8abf0f9ca072f615e124fbd9a9796b9a86f283cae4278ffc6660b34&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NCHRU3U%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIASfX5v10%2FhEIbYltMIphksEMUPZvuiDmZAasjMdCSq1AiAZGN2VSJr%2Fakj4xy7w1zwuKSBED1imIv6Wy9fhlF8xeyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2BmnRdNgsktNB4eDoKtwDKezM9Wid4nt0l6AWdtVMKRLpLXAjvMMJ%2FmJIQBuylXwQcu9%2BFHOVnbcBg%2F7wEaXsRMjP3e5rNITZVnPzBFXwEQcVYgca2OEDGWskfXb%2BFNNZLgHVQQ3KL5TERnoYdIWKk2WXh%2BXK6aIHDvWqar6L8HoT3ZxxOpPZkm%2Fb5dpY2RNdIVY9wpx5U0ENS65dQyZmdddfthTnEX8S30ssRjPm7N4OcdmL8bhPsxgVmue1yHAxHm6YyD9STBivURXxr1c15K9nSY9rKtTjrL4TxqqBX5MmCM6P6aZkKmQgZRnIep8turis146GjBA2pOYZlbGqK%2ByeJRWq2ssHXOSlx7XRRALQHt0FTm5Ms0EEbUcnEtwz9LI0cP1eJR6g84FwhpiIqfcqRxIIVQNRRupmVQNeFVCNIr7cD%2FCp6ea2Y5dPQ48xY5WU8MVOCAWb4uIMzhbP6wGDX80kx3Jn6XjC6JpY0MUAN7KeRU%2Fa5QT9u8qJIYd6j0rtAURAa%2Bf37qx2v2X%2FV27p8tSSzJmnrz2Cyc5c3WPzIov7MB4LN93ypYxIdQ9Qgd9KlcLxG%2BW856mlO0o2olQlctatZyq37K9YJRNM%2Biz4UkO2ls9WseoO58H%2F5wvPoaPdeJS%2FsbTZiF4wmoCavQY6pgGeYOgc4hw5IvryEfEFwJS9oFAFX0fUCMZtANiAYNkt6HmMZA284fO%2FAshaMlTsSfRkbnLeAfPPv0%2FUlZIzTuVqpwJtODrUZdrYGn%2BbZQkUylRgI62ZQ%2FPdOESAgrZJOvQHlN10qR4TRg%2BVD8jQgfneZrHX%2F%2BgDu9dkVPPbkMdk9Yxfj0Qsyj0wCoL8N0Cs8saJgFVHWO4XMCCw2vNnkT8%2F3fWWRfns&X-Amz-Signature=ac081f94e9397d270d0337a6b767e0f5b958cd2ff68bf269bbd7f5c199a00b03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
