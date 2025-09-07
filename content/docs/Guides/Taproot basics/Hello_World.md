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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXKP2P%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIF5ladrh2%2FJrAtApONVDI2CS6kZQrSnXXlbepz%2BguMZcAiAabfgAHPTCmpTQS7%2FB4WqYDEt20lp6PR%2BZogHOpOi20yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAWXG%2FxeRxLtNgTXJKtwDXaDP0v60ucycJwfeNgKNZMWQwdWmbO2jJLLtvujgwjUHIYI5l0AE%2Bdk3uilnsVDm5ImkOdK2NnhgqEsbzcz922Z1ZccNE9GJrwUuxhH0svctidPbV%2Bp2lGlalPbeRFDWKbFm%2FPJ%2FpdsiqQq2cQX%2F4uPpazRcOUkWEbp6bO4OwHT8zBQatoIw44F2XWsu2qFZbTr3CLCO2dsgsUHAPS1lzJf%2FCTJFBcvc7R9%2BAhnBAJRAGYw4rxW3I93dKahqNQWzf0Jtu2Pino0GIy0x2PoJlvGVjX59A3VX1JLDOh4R36AIhUGqrN5oyh8CP1%2BNxkTS7Fhhr%2FYzuHbdXodVWbR8C2ZK8KqdjGSSaEqyR6TPTv5UMQghV5LvinkU%2B%2BkKB3x9xTzvlb472ZCluzy4bCEPP%2BkQl02MO0xaaPWs2k1M2RwKGHkMQKVu41HI3gwvdwaCozNIT0K5IgFbhsaAzvSE%2FPWvEHYPKDrvg5O%2Fmq89H%2BHkxPWhFjIBlN%2B%2BAn6X6PcxX2C8%2BxU8QNrwsLXTcae6S9h4EvBTrAcM%2BZAS1FEj4UGsfaxH%2BWjsmfzLDxguEze1TQTo9QaKpLbOs4R7Kk39sFTVbBKRhhlbuxiYYO9CZBMuTjd9W5GEgQ9zgp4w%2BMPyxQY6pgHUQwjstXNnHGY8AzUwo%2Bshf47uR7%2FRCErJW%2Fu8PLBjQQKf4kp0HmrQyzcL56wc3NRJ%2FqrGv5zKxjG9y7DWLubnuuXG4DhVN5P5BdlJws%2F6fyW3CrkEAcVCcBaJOXAOYD316f34BXD2zrG0seu4Spi6PomsrOhyvgxG6%2Br1k38ujjgRUFuOQ3UPs62JTizXpMIqnVrtlwHHf%2BLzCtYR11rOqG8P0Yyv&X-Amz-Signature=e27baa754d3c0437a4eb86a7191c423fd49a65fbfedc9fddc821120303836a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMXKP2P%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIF5ladrh2%2FJrAtApONVDI2CS6kZQrSnXXlbepz%2BguMZcAiAabfgAHPTCmpTQS7%2FB4WqYDEt20lp6PR%2BZogHOpOi20yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAWXG%2FxeRxLtNgTXJKtwDXaDP0v60ucycJwfeNgKNZMWQwdWmbO2jJLLtvujgwjUHIYI5l0AE%2Bdk3uilnsVDm5ImkOdK2NnhgqEsbzcz922Z1ZccNE9GJrwUuxhH0svctidPbV%2Bp2lGlalPbeRFDWKbFm%2FPJ%2FpdsiqQq2cQX%2F4uPpazRcOUkWEbp6bO4OwHT8zBQatoIw44F2XWsu2qFZbTr3CLCO2dsgsUHAPS1lzJf%2FCTJFBcvc7R9%2BAhnBAJRAGYw4rxW3I93dKahqNQWzf0Jtu2Pino0GIy0x2PoJlvGVjX59A3VX1JLDOh4R36AIhUGqrN5oyh8CP1%2BNxkTS7Fhhr%2FYzuHbdXodVWbR8C2ZK8KqdjGSSaEqyR6TPTv5UMQghV5LvinkU%2B%2BkKB3x9xTzvlb472ZCluzy4bCEPP%2BkQl02MO0xaaPWs2k1M2RwKGHkMQKVu41HI3gwvdwaCozNIT0K5IgFbhsaAzvSE%2FPWvEHYPKDrvg5O%2Fmq89H%2BHkxPWhFjIBlN%2B%2BAn6X6PcxX2C8%2BxU8QNrwsLXTcae6S9h4EvBTrAcM%2BZAS1FEj4UGsfaxH%2BWjsmfzLDxguEze1TQTo9QaKpLbOs4R7Kk39sFTVbBKRhhlbuxiYYO9CZBMuTjd9W5GEgQ9zgp4w%2BMPyxQY6pgHUQwjstXNnHGY8AzUwo%2Bshf47uR7%2FRCErJW%2Fu8PLBjQQKf4kp0HmrQyzcL56wc3NRJ%2FqrGv5zKxjG9y7DWLubnuuXG4DhVN5P5BdlJws%2F6fyW3CrkEAcVCcBaJOXAOYD316f34BXD2zrG0seu4Spi6PomsrOhyvgxG6%2Br1k38ujjgRUFuOQ3UPs62JTizXpMIqnVrtlwHHf%2BLzCtYR11rOqG8P0Yyv&X-Amz-Signature=71c7b224a58d6fbc3f8997d2034ad3660f565359775ba722fae29a63b2880d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
