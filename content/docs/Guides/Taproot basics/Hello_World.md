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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVHLT7U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVrdUmfN7wcFz8q2UB50klDwQTqdz1DtYrU6zz8wXyEAiEA%2F5xUyFrmA4AZwODGedQ59htSPUQyxPheNHMAZckoBEEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAVxeklnFlX5iiUGCrcA0CoQMxM5rdFt8yT04MFo395FA9mQxrdvaGWz6nF6lh9xSYKMNa%2FnI2ZAffHpBZfjC71Xz5MePvuhK6H4osMm9OBz6Em%2FPEhJI8HmQYM4VsUCc%2Fi7ION3R2LrKmS%2BQW0UCqd63uauXJxkBQ9hcJRcOCU5tR1qempmRkN9jkCf8qwk1RWmm1bHM1h6xIlRriRftJpTS5E0MAvKxNJt8PxwoxZaSlEhWqZmUOpx9ABRy5mew2vtzR6H0S4QnsRFAkR1D7azwoeLNyhldkvG75Jv3ClDxqDrpdCnuY2SBEcXrxRhrKwWyb2WK%2F4%2FiS5Tcx%2F5d3exfYPbrmIM%2FQNhq4FSakDYvTKJCrU2PVsbqJ1rXszGigijF4eYvb8NZbET6P1lRMfEaTWxVJNPSimggTfWqFO87F3OZB8L%2Bk5xEuukCXxO6Jk5bpbac3stoGCqo3mRKGqCTcY6nToJc40bgij5FFp70KzE7aGOgPd0180X6x%2B6hnZsQYfyxFNuwO30g9JTis5LAPKIUTpkhjIsovnO2UQsAtpCUoKUrstdAdOJCHKEJNzi%2F0DxKOMOdTsWOYmtV96UbaSBHOi6XkMLyEwbigdiCXLmgOFKJ6H3D0XOpwj3dsesiGp0dota6AwMOOD68EGOqUB7DsK2%2Blh%2F81rR2seUA%2F6Ej%2BLm55ZKt%2FZA4hYd%2Fc1ZvyvwzwyUKL62GNdwWGlGxIin9V3YiMbpMFuO6e%2FLup3jji4RrWKjtPFm4TVlGYD9XVFYo44eMuoSTOx%2Fkk%2FBVFuAtyNCFg7p4eOVsWWFNFMtWmkUsEtF6j5P9SHXSja512jUvVDi5%2Bdp42ECFoq1h5pi41G4MDuXPxo0YiydTUEJaVhAKMA&X-Amz-Signature=43944a68f0110b3eca1afeeb6a99ab58cb04d26eb77fe6c6832548d719721eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVHLT7U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVrdUmfN7wcFz8q2UB50klDwQTqdz1DtYrU6zz8wXyEAiEA%2F5xUyFrmA4AZwODGedQ59htSPUQyxPheNHMAZckoBEEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAVxeklnFlX5iiUGCrcA0CoQMxM5rdFt8yT04MFo395FA9mQxrdvaGWz6nF6lh9xSYKMNa%2FnI2ZAffHpBZfjC71Xz5MePvuhK6H4osMm9OBz6Em%2FPEhJI8HmQYM4VsUCc%2Fi7ION3R2LrKmS%2BQW0UCqd63uauXJxkBQ9hcJRcOCU5tR1qempmRkN9jkCf8qwk1RWmm1bHM1h6xIlRriRftJpTS5E0MAvKxNJt8PxwoxZaSlEhWqZmUOpx9ABRy5mew2vtzR6H0S4QnsRFAkR1D7azwoeLNyhldkvG75Jv3ClDxqDrpdCnuY2SBEcXrxRhrKwWyb2WK%2F4%2FiS5Tcx%2F5d3exfYPbrmIM%2FQNhq4FSakDYvTKJCrU2PVsbqJ1rXszGigijF4eYvb8NZbET6P1lRMfEaTWxVJNPSimggTfWqFO87F3OZB8L%2Bk5xEuukCXxO6Jk5bpbac3stoGCqo3mRKGqCTcY6nToJc40bgij5FFp70KzE7aGOgPd0180X6x%2B6hnZsQYfyxFNuwO30g9JTis5LAPKIUTpkhjIsovnO2UQsAtpCUoKUrstdAdOJCHKEJNzi%2F0DxKOMOdTsWOYmtV96UbaSBHOi6XkMLyEwbigdiCXLmgOFKJ6H3D0XOpwj3dsesiGp0dota6AwMOOD68EGOqUB7DsK2%2Blh%2F81rR2seUA%2F6Ej%2BLm55ZKt%2FZA4hYd%2Fc1ZvyvwzwyUKL62GNdwWGlGxIin9V3YiMbpMFuO6e%2FLup3jji4RrWKjtPFm4TVlGYD9XVFYo44eMuoSTOx%2Fkk%2FBVFuAtyNCFg7p4eOVsWWFNFMtWmkUsEtF6j5P9SHXSja512jUvVDi5%2Bdp42ECFoq1h5pi41G4MDuXPxo0YiydTUEJaVhAKMA&X-Amz-Signature=a38238bc9bb7afbc55558d15071ed9fa510b02a559717807cf3b7eb0bea26944&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
