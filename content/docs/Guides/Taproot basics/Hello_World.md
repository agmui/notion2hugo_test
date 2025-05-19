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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPKOFQC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZeVvNpasPJen3%2BnEohGeeJO82vHi0FYBJNfhxR%2Fg3wwIhAJTSsAHvWAMSlT0qavarzNYPE6JeslN1kzY17UT0vExIKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw2LW8M3O8vMvvxk4q3AOgkbRYtxdECl5pMVkIEvUxidhE8LkohU2D6rmWrIUHb3CydOtbVIN4lu61u8uSbIma%2BImlzKNPE%2FJOU7qoVDlpIadqqXZA7LIzdWxCI49O8CdGNPj2jqRM7aGqE4uCXJvp6Jl7Ugm0P1flrLfRL3v6s2F%2BcPl%2BlntejzkuBFklkBB8VIc7Nl37N2p%2FpqfWqJLOO5iuoGhJlB6FoZniHkw0IvhZym4S2tPOyMW1FkJ1LuGuv%2BSOvdcWiEtDgAzJVHSOhdWUcIAT8vGj%2B0%2FDrvfqbmjsmYN42apY8uIqWBY0bsh%2BXCx69vGaopQeDr6CLrgHqP%2BzHq3Hv6S9toCrxrBSD6NduXQjRVtQlqxhEJ3RSOwLZK%2FjP6SErUEqKE%2BZp11kXbFu8s9ANb%2BTycn%2BXGBgDPVojLzTy1TVLHYrrzJ5PMUY75D4KtQSqdMMn1LYWok%2FYGQUAyiJzX18%2Bhei4ydesdKJb2vZiGLTydg%2B0RvWGDAqmb5OQCBWbLkHrZLozcHSIcMiYQ66kzbuTokPk8cYhEssPhPNuhEATryrUvxiaWp3%2B15XQob%2F4cV33eV7zkkBVdmhJp6OF2yPR9LbCPxcjBk%2B%2BA3HT1bGP2%2FWfesW4%2FVDuq0dFKYIrw9aHDC%2B367BBjqkAUzrtcW98yMclfrG%2BEpFqs771d87z7GVEIuQcnJQkpkObmTPfV5OVrhNSU9EeYeCNILbRQdUW%2BSpr99bTkr9mnxRLeB3MfibSwHY8gQACQqGdMuOKbHNKjoLQIz7ljrWY4Pr80KtLo2VLtf0CjCvd3%2BWkd75unn3aoj%2F5WtXxq7jZS1s5aj63rPLPhPLHqY8lj4Sahn9xZQgFCNhWGKwk0VmZ6Xy&X-Amz-Signature=82336758955d78ce5a469a5a194df213b2c314b99564bd76b2bf6619d5476223&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZPKOFQC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZeVvNpasPJen3%2BnEohGeeJO82vHi0FYBJNfhxR%2Fg3wwIhAJTSsAHvWAMSlT0qavarzNYPE6JeslN1kzY17UT0vExIKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw2LW8M3O8vMvvxk4q3AOgkbRYtxdECl5pMVkIEvUxidhE8LkohU2D6rmWrIUHb3CydOtbVIN4lu61u8uSbIma%2BImlzKNPE%2FJOU7qoVDlpIadqqXZA7LIzdWxCI49O8CdGNPj2jqRM7aGqE4uCXJvp6Jl7Ugm0P1flrLfRL3v6s2F%2BcPl%2BlntejzkuBFklkBB8VIc7Nl37N2p%2FpqfWqJLOO5iuoGhJlB6FoZniHkw0IvhZym4S2tPOyMW1FkJ1LuGuv%2BSOvdcWiEtDgAzJVHSOhdWUcIAT8vGj%2B0%2FDrvfqbmjsmYN42apY8uIqWBY0bsh%2BXCx69vGaopQeDr6CLrgHqP%2BzHq3Hv6S9toCrxrBSD6NduXQjRVtQlqxhEJ3RSOwLZK%2FjP6SErUEqKE%2BZp11kXbFu8s9ANb%2BTycn%2BXGBgDPVojLzTy1TVLHYrrzJ5PMUY75D4KtQSqdMMn1LYWok%2FYGQUAyiJzX18%2Bhei4ydesdKJb2vZiGLTydg%2B0RvWGDAqmb5OQCBWbLkHrZLozcHSIcMiYQ66kzbuTokPk8cYhEssPhPNuhEATryrUvxiaWp3%2B15XQob%2F4cV33eV7zkkBVdmhJp6OF2yPR9LbCPxcjBk%2B%2BA3HT1bGP2%2FWfesW4%2FVDuq0dFKYIrw9aHDC%2B367BBjqkAUzrtcW98yMclfrG%2BEpFqs771d87z7GVEIuQcnJQkpkObmTPfV5OVrhNSU9EeYeCNILbRQdUW%2BSpr99bTkr9mnxRLeB3MfibSwHY8gQACQqGdMuOKbHNKjoLQIz7ljrWY4Pr80KtLo2VLtf0CjCvd3%2BWkd75unn3aoj%2F5WtXxq7jZS1s5aj63rPLPhPLHqY8lj4Sahn9xZQgFCNhWGKwk0VmZ6Xy&X-Amz-Signature=f2ab502a874b25f9d06b550f6313dad09181faa75785a01a7ec3d2a461c7de15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
