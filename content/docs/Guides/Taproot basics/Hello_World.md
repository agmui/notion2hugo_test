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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSPP3L3S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGwv9Dvjcq2Jrd8R76hpf64tqxHaWV9xzt4lIZiigl%2FwAiEAyzX7XpqwR7Cu%2BfFM91KaL6ZG17%2FR3cRoqune31bw%2FOIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOVdLSOWWAPWjljEgSrcA4m7DPOTOR%2Bm%2FX7NfV5ovSyOs8tOcUC0OO2IT%2B5EkJMCe4QxsBGnnAqOKNTGQWdzRd4cdMCPNiRNIHd8WQPk6Z%2FlN3mQy9nblh6uW6JLprFoNdj9L6rhkAYl5Yh67MdbkQSd%2BHDxHdF75tI0JWRqNuEK7E4uy%2BFYmR8%2BuNfl7GyvBROoRUEqOFMyfiwXpCF7y5JRvWvlFdAFNhjpgl0NdEAUE8dh2xhw3658eCqWOIDEokoGW%2F9vxCEnLoZUECqEVOS9iyInsJ2q7pTRz7HWPU1ecDyhFooZQqeuypZ7RusFn9VSnHpj7ZyjPdlBbptsTI5BE8U0L3WYTgPBvi8PUIoGVI2xs%2BgDb2MW4eAt0tbvb4YroFvCPOvclbl1n1xYu%2BZkniLCwoCbhp2Gl3Ir30dAAwz6KcRXcDcf97ccXQxul4txKwlhEF6Y01fBWZNWoRa2T3KiBe1dL7p%2FgA859K4tt7qUhNrraaxDugr7TDIuT005uqcUHNOCo0c%2F5VJYSXe79G7Ge6nIg08sQ%2Fh8NiE6MOpwekAXCMz7LxO%2FlzF52aY0zVOPnZamJ%2BLJiJ2XDFEzfBD%2BhBpOqS1TjTr8O3H%2FOp6yWBP0R%2B692BxbnHeFlXvuvM%2FuB1AVHkr3MLuez8EGOqUB0O662TY6Krl5Bl8iC6Gnif0Us2QHXoHB5xEqsazxAGHNpjJn45QcLBCkwcZD%2BoI4re1y9KGWw6xgN110pe97ABPOR8p7q63NV6SoXNO6%2FWauDpczFRSt9VcL3IqXVBN%2F22WeejlSutAtgpgMtxHvUiQB1aAlv68e6HIh7TfpRL0VqnpP7XFeKZc6LAEfYLqnc%2BzNeFa3sUfsPtGnUyGE%2BCf7vSu0&X-Amz-Signature=22951c4db7938d7e7746c800f3c459c17092f3d13ddb379f45f40bd02a4a769f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSPP3L3S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGwv9Dvjcq2Jrd8R76hpf64tqxHaWV9xzt4lIZiigl%2FwAiEAyzX7XpqwR7Cu%2BfFM91KaL6ZG17%2FR3cRoqune31bw%2FOIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOVdLSOWWAPWjljEgSrcA4m7DPOTOR%2Bm%2FX7NfV5ovSyOs8tOcUC0OO2IT%2B5EkJMCe4QxsBGnnAqOKNTGQWdzRd4cdMCPNiRNIHd8WQPk6Z%2FlN3mQy9nblh6uW6JLprFoNdj9L6rhkAYl5Yh67MdbkQSd%2BHDxHdF75tI0JWRqNuEK7E4uy%2BFYmR8%2BuNfl7GyvBROoRUEqOFMyfiwXpCF7y5JRvWvlFdAFNhjpgl0NdEAUE8dh2xhw3658eCqWOIDEokoGW%2F9vxCEnLoZUECqEVOS9iyInsJ2q7pTRz7HWPU1ecDyhFooZQqeuypZ7RusFn9VSnHpj7ZyjPdlBbptsTI5BE8U0L3WYTgPBvi8PUIoGVI2xs%2BgDb2MW4eAt0tbvb4YroFvCPOvclbl1n1xYu%2BZkniLCwoCbhp2Gl3Ir30dAAwz6KcRXcDcf97ccXQxul4txKwlhEF6Y01fBWZNWoRa2T3KiBe1dL7p%2FgA859K4tt7qUhNrraaxDugr7TDIuT005uqcUHNOCo0c%2F5VJYSXe79G7Ge6nIg08sQ%2Fh8NiE6MOpwekAXCMz7LxO%2FlzF52aY0zVOPnZamJ%2BLJiJ2XDFEzfBD%2BhBpOqS1TjTr8O3H%2FOp6yWBP0R%2B692BxbnHeFlXvuvM%2FuB1AVHkr3MLuez8EGOqUB0O662TY6Krl5Bl8iC6Gnif0Us2QHXoHB5xEqsazxAGHNpjJn45QcLBCkwcZD%2BoI4re1y9KGWw6xgN110pe97ABPOR8p7q63NV6SoXNO6%2FWauDpczFRSt9VcL3IqXVBN%2F22WeejlSutAtgpgMtxHvUiQB1aAlv68e6HIh7TfpRL0VqnpP7XFeKZc6LAEfYLqnc%2BzNeFa3sUfsPtGnUyGE%2BCf7vSu0&X-Amz-Signature=1f973c9cca61b5f6eb6e164b1d9676bdbb88c9dc12ad17454afab0587b43d7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
