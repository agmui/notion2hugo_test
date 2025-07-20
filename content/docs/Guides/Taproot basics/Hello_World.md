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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652YPP6M7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9doWxdxfejJTN%2FR%2FF8SFDNIj3ie4T45F4zTSpgLK6PAIhAPhygNuCIn%2B3382T19lhMZOP2OC6H741RJ1Kc7zfB6RHKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiZ5%2BvOQyTv5i1Pwkq3AMkGdFTCiIpoZ1u0trwSanUbu45DULbWhNWm8CG%2B9DRNnMk4fsFCvsGPLnjTyL4vfPiSaCNC4HZZCvsYHe9zmTLRjTPo1kCOJaEUmeiJuLgKCd%2FJfxjx%2FKaym%2Fipg34dPUWnNT6PuU%2BlgWKehvIkeB6ZXdTjKwCGbTdLACpHlRkjqv6pfLs9aoXKDGYL2dzw1Mi29ly5yEHuVarMReF51u3RM8Q57DJheAgOMSyFfxi6BRgUxgdpB%2F%2BaposTJLTHVIu6FnCEih2W2xfUMNSidm%2Fgq00j6L0U5y1rHyUFkLXpPasVJ2wyhLnn5Tj9bfHY9u8CzNdmRlxa3A9Ps2CMCaYamIGyRRWuOzgzMFfU9tIQ2jWyFzZHmWrdboNEdDK3m6b8a6zE4BqRAzZ02XFv5n4b1afb%2FU4gGWZF5e9sauL9McWiCY6VRavYka06JdtWyNRZyeg%2FDKbDUevvOJ6%2FLpCjYAPTw7m0dOLqSowg5ZuLLMfve8Ozt11O1S0BXk96DMoQQq5H3oXQ%2FBDBGmxlRLD7C1O%2Bj%2FSbPu0JqEzWA04o%2BVl1MgptXz38J8uTzFUeNU6v4ZbfIw8Q%2FO0YqKbZenqh6qx0wkQlSH0oO%2B0C2uD3MZRaWRwBz90S5U0ADD3lPHDBjqkAfQ%2FCN509kcbZayWNDJxBffPDQdsnru2NrQLPhlkvgglG%2BNnJbotxgsCA8ydpnB3jIbsULd6V%2FPMkUY%2Fz1Gy3dMsJEQnr3ZtI1cNIUq75cSUk84pxRp8N2OlBtVBARL1BgA64tFJ516B%2FrA2PG1UUSW4QyrYTRx43OPsGpNxB%2BAo0sYuDcmHZRpGFsgawnoAF32tMf54jkoYnj8dmfKA0L%2ByS9aC&X-Amz-Signature=e70fbba0f5c8ecb428d715f5cbd5218b8bb56adee420bd8bc8a4c07d04505e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652YPP6M7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9doWxdxfejJTN%2FR%2FF8SFDNIj3ie4T45F4zTSpgLK6PAIhAPhygNuCIn%2B3382T19lhMZOP2OC6H741RJ1Kc7zfB6RHKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiZ5%2BvOQyTv5i1Pwkq3AMkGdFTCiIpoZ1u0trwSanUbu45DULbWhNWm8CG%2B9DRNnMk4fsFCvsGPLnjTyL4vfPiSaCNC4HZZCvsYHe9zmTLRjTPo1kCOJaEUmeiJuLgKCd%2FJfxjx%2FKaym%2Fipg34dPUWnNT6PuU%2BlgWKehvIkeB6ZXdTjKwCGbTdLACpHlRkjqv6pfLs9aoXKDGYL2dzw1Mi29ly5yEHuVarMReF51u3RM8Q57DJheAgOMSyFfxi6BRgUxgdpB%2F%2BaposTJLTHVIu6FnCEih2W2xfUMNSidm%2Fgq00j6L0U5y1rHyUFkLXpPasVJ2wyhLnn5Tj9bfHY9u8CzNdmRlxa3A9Ps2CMCaYamIGyRRWuOzgzMFfU9tIQ2jWyFzZHmWrdboNEdDK3m6b8a6zE4BqRAzZ02XFv5n4b1afb%2FU4gGWZF5e9sauL9McWiCY6VRavYka06JdtWyNRZyeg%2FDKbDUevvOJ6%2FLpCjYAPTw7m0dOLqSowg5ZuLLMfve8Ozt11O1S0BXk96DMoQQq5H3oXQ%2FBDBGmxlRLD7C1O%2Bj%2FSbPu0JqEzWA04o%2BVl1MgptXz38J8uTzFUeNU6v4ZbfIw8Q%2FO0YqKbZenqh6qx0wkQlSH0oO%2B0C2uD3MZRaWRwBz90S5U0ADD3lPHDBjqkAfQ%2FCN509kcbZayWNDJxBffPDQdsnru2NrQLPhlkvgglG%2BNnJbotxgsCA8ydpnB3jIbsULd6V%2FPMkUY%2Fz1Gy3dMsJEQnr3ZtI1cNIUq75cSUk84pxRp8N2OlBtVBARL1BgA64tFJ516B%2FrA2PG1UUSW4QyrYTRx43OPsGpNxB%2BAo0sYuDcmHZRpGFsgawnoAF32tMf54jkoYnj8dmfKA0L%2ByS9aC&X-Amz-Signature=e84dc5ba1b0f4e56297799b1be48fec1e28430e9ad0293b2c2da4c8f7dad3e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
