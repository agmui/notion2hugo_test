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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GIF7VP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIE1z2PQpaihz1kUnxjoxTDxnQMHB6AfMqfeK1iv0g2ByAiBqJH7ZUY3yfHV0%2Fos8OoUvBYbJsxqRpbJ%2BBzFuz1r4%2Fyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUsacws83zbB3RQ83KtwDMGHRi2eaQUbCpElWqjLPk%2FLLCG0GN9n9eipQAQCz%2F6867ACFkrYvSribmFaPMrDkT%2BCqXUIZxmUSBiwJsECpxEZvGVCKb4YiBE%2FjLBLwgVCWLjIslK4b7DP0zTov14u73jeqerdC01ji4Mx%2B6xrf8wjomAiI7c9VKffqUoLuLBwr8L9WCPKm3IgOUvA6qnFXozdO2lvkPzqW3fy7pthAbcQyPUOE3nWmtW1vYYkJt30h3tSwo75UVbIWFo8yeEiqEYeg5NA9XhrnuitAbu6rJC73B92KWQeHBYdgQRUYtxZ55%2FAREJsrMipamcVAOKIAUgdReFKzzhulsZAFmJmu%2BA53Ok7YnmnFzvOS9bu9HexHmMJF%2FfGBBQuI2xHBWVD46yaQ0zyexqFXsNHZWINEmWOUtJRpiScHeXHvIbJGx1%2F%2Fizw33S9XbSYnh7otB2X0T%2BJiE0XICBR54vRgiz31aSJ7JUCmsGyl05DgnKrBWFdDsElAht%2BPc3ipi9fh0NPcWOkOIASrkje7lqeSws27jOErtznQRI7OqJyBpYvi%2FCmdwyz5A9R0HlZFWYDkFG0ySv%2FxRQk7fZEzZfjeVHpd8uuPXDcs%2BKEZFkkBIQKDnIWt74klMAe0B6CS0YgwgqrmwgY6pgHgGP0r1qPLdhYC1DGLInrsgLecnyflvQlNbuRE5bvfpSbc%2Bv0gp2Y5263diLi4PG%2BPgFEFHyktqGLC4he%2FMY1gXdgvdmIe3TXOu0mq1CbpPeWrUoS0XmU5Rpo5CLsDfo%2BKRZOSmTedssJWR8KuUskxeuLLs%2FBJFPhuil9Euk%2B7TYGaN7V8wjOhtX7ryyg5d59X9FsqOphF%2FAUY9TyulP4pXCAz6s37&X-Amz-Signature=e95c3ed65ec9976f60db1217480d276e1aeba1e3596d49905b711a06ca7f5030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GIF7VP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIE1z2PQpaihz1kUnxjoxTDxnQMHB6AfMqfeK1iv0g2ByAiBqJH7ZUY3yfHV0%2Fos8OoUvBYbJsxqRpbJ%2BBzFuz1r4%2Fyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUsacws83zbB3RQ83KtwDMGHRi2eaQUbCpElWqjLPk%2FLLCG0GN9n9eipQAQCz%2F6867ACFkrYvSribmFaPMrDkT%2BCqXUIZxmUSBiwJsECpxEZvGVCKb4YiBE%2FjLBLwgVCWLjIslK4b7DP0zTov14u73jeqerdC01ji4Mx%2B6xrf8wjomAiI7c9VKffqUoLuLBwr8L9WCPKm3IgOUvA6qnFXozdO2lvkPzqW3fy7pthAbcQyPUOE3nWmtW1vYYkJt30h3tSwo75UVbIWFo8yeEiqEYeg5NA9XhrnuitAbu6rJC73B92KWQeHBYdgQRUYtxZ55%2FAREJsrMipamcVAOKIAUgdReFKzzhulsZAFmJmu%2BA53Ok7YnmnFzvOS9bu9HexHmMJF%2FfGBBQuI2xHBWVD46yaQ0zyexqFXsNHZWINEmWOUtJRpiScHeXHvIbJGx1%2F%2Fizw33S9XbSYnh7otB2X0T%2BJiE0XICBR54vRgiz31aSJ7JUCmsGyl05DgnKrBWFdDsElAht%2BPc3ipi9fh0NPcWOkOIASrkje7lqeSws27jOErtznQRI7OqJyBpYvi%2FCmdwyz5A9R0HlZFWYDkFG0ySv%2FxRQk7fZEzZfjeVHpd8uuPXDcs%2BKEZFkkBIQKDnIWt74klMAe0B6CS0YgwgqrmwgY6pgHgGP0r1qPLdhYC1DGLInrsgLecnyflvQlNbuRE5bvfpSbc%2Bv0gp2Y5263diLi4PG%2BPgFEFHyktqGLC4he%2FMY1gXdgvdmIe3TXOu0mq1CbpPeWrUoS0XmU5Rpo5CLsDfo%2BKRZOSmTedssJWR8KuUskxeuLLs%2FBJFPhuil9Euk%2B7TYGaN7V8wjOhtX7ryyg5d59X9FsqOphF%2FAUY9TyulP4pXCAz6s37&X-Amz-Signature=7dbb4d6856be760dc6caa523c7fac9bb29cba9185751035aabec26b0fe886d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
