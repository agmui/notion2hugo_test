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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674H7GNPV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBowKQfiQzPOOlVUTAKSHSXVZvGJlWG%2FLPKfsyBJElGMAiEAs2h6BVFBxRM6FNM8RTNSp9ZRUbB3YaymJCGf87jw3vQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHXoG%2BtC0G47Me6XiSrcA8%2Fd1qU3nLulv5%2F3%2FVjl0T47TdE0aKfnW4o%2Fsq643BNKYOc4X8Fh0zYjYmnaYV2j26R356HjIFenhyN0AKKMiyRqlLs90MBrp5zIQ6pX%2BAINdcjZt06FxHX35%2B%2BaJMALkKzGgql1%2FqZhcIrCb4Ej0BCE9Yn3v23an5ovsII0WyQ2D5xxUgaa%2BoFpNiXSPvaWXaD6SyUMqLrwY%2B9dFOlL1nP%2Bn2xWl%2BeuV6JoQvWvzIP5ih8g4MZAbApu0yQ0%2BnBb6BA6FvGV7zJkBHisWJPohZil0AqR3Lt0u32m8TZjwwQKlJGdZmIidOajaSXwdEtO9alariyH8%2FWwmiMrTsDXHGhY1iqzzDRMmMIWFqC3%2FQ%2Fx%2Bwt6WaJSuTnxSeZLX4pBJHzMSZWsx8bu85qTfegaZBnobSPjqxGol2N2naiWVxwwQGaLG%2BfRrAoQtjBo%2FEk9rshqeUtQORKIGnvZ4eRcrcH224aYJhOAadwz92dpZ7cJ%2FsntMZAwaQjVVe%2BAj%2FzhY8Bg6226io75FGCQ6wO6YguxueaWPRv5SMFt%2F3FfgCPkxh%2FowtmP4%2BfOU6SRbdxAE3%2FZY3NOQEnHHpxJgZ0g%2BMzBuQ%2BDy%2FiTQJn2uE5lC5eoJ7IzS8nPGLmHVobXMK6Njb0GOqUBvsNJHempsGr2zyoqpaDO1lPSquVktwIF8TC%2Fft6f5Xt2Qqyb3fQojK41Hz%2BXqk1Q9f7APAjVctWraUH%2FKmtbRA9uG4MAYhwCzBPY5eKSCwzHtuP6yW6rPoxINXG9feQb052cDQfSH46csYQOd%2F4YOoQY50ktgc%2Fdw3KY%2BTOV%2FN3QKbOayGmauzDNMJyKHXkIZqfeetmtHUFseuqDi65OSsx%2BNaMO&X-Amz-Signature=04db2704ad7aed9f9e67b0a78f0ceaa928e2b7b771cd8cd16fecd63263424ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674H7GNPV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBowKQfiQzPOOlVUTAKSHSXVZvGJlWG%2FLPKfsyBJElGMAiEAs2h6BVFBxRM6FNM8RTNSp9ZRUbB3YaymJCGf87jw3vQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHXoG%2BtC0G47Me6XiSrcA8%2Fd1qU3nLulv5%2F3%2FVjl0T47TdE0aKfnW4o%2Fsq643BNKYOc4X8Fh0zYjYmnaYV2j26R356HjIFenhyN0AKKMiyRqlLs90MBrp5zIQ6pX%2BAINdcjZt06FxHX35%2B%2BaJMALkKzGgql1%2FqZhcIrCb4Ej0BCE9Yn3v23an5ovsII0WyQ2D5xxUgaa%2BoFpNiXSPvaWXaD6SyUMqLrwY%2B9dFOlL1nP%2Bn2xWl%2BeuV6JoQvWvzIP5ih8g4MZAbApu0yQ0%2BnBb6BA6FvGV7zJkBHisWJPohZil0AqR3Lt0u32m8TZjwwQKlJGdZmIidOajaSXwdEtO9alariyH8%2FWwmiMrTsDXHGhY1iqzzDRMmMIWFqC3%2FQ%2Fx%2Bwt6WaJSuTnxSeZLX4pBJHzMSZWsx8bu85qTfegaZBnobSPjqxGol2N2naiWVxwwQGaLG%2BfRrAoQtjBo%2FEk9rshqeUtQORKIGnvZ4eRcrcH224aYJhOAadwz92dpZ7cJ%2FsntMZAwaQjVVe%2BAj%2FzhY8Bg6226io75FGCQ6wO6YguxueaWPRv5SMFt%2F3FfgCPkxh%2FowtmP4%2BfOU6SRbdxAE3%2FZY3NOQEnHHpxJgZ0g%2BMzBuQ%2BDy%2FiTQJn2uE5lC5eoJ7IzS8nPGLmHVobXMK6Njb0GOqUBvsNJHempsGr2zyoqpaDO1lPSquVktwIF8TC%2Fft6f5Xt2Qqyb3fQojK41Hz%2BXqk1Q9f7APAjVctWraUH%2FKmtbRA9uG4MAYhwCzBPY5eKSCwzHtuP6yW6rPoxINXG9feQb052cDQfSH46csYQOd%2F4YOoQY50ktgc%2Fdw3KY%2BTOV%2FN3QKbOayGmauzDNMJyKHXkIZqfeetmtHUFseuqDi65OSsx%2BNaMO&X-Amz-Signature=e921fa58df86f244f3d14ff456dfb378c1d26079c95997be23b9cd9193e7d99f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
