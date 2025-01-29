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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIPCU3V%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0L2J2N21Y6UkJyS4eELO%2BXtLcRXilxVaOLxxN%2FcyKZgIhANhcxZBQTxQzhHdZh6QwEp%2FE4ziivRWl%2B8gt6KA2jOwWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6Atos4ZuxYNaTXXMq3AOB%2F0T6RdAW0gobkjEhYmahXB5LzP81ixGr4PMei8EOYX1WGcCi9MG%2FXvw%2FBlUjUfGuOCw0CaTQL8gkvWczb%2B1LsMh4zWtbkXOU6u7iC4maDcXvSR0t95vH7bdmOTyRO03tid8zhuhoUROaX0SUAuW6fS2ostInWl5HERk%2FUYArrPzvzrdYSPKhdIVtqLVMF5OP0X%2FR7gRiy040rDot1LI%2BBxOaMF6XZsX%2FIsp0gAeGrn1Pa7NFoHe9CPKQbzu9%2F%2BbwfkqEqer6yh7hpot42NYerJVzkDbZbD6N5tnD0wyHzmXVBRjhMMUJUlJMphhVuwaunILBYs8gpRH%2FfpAcd805qiP6le32ti6TSXBhzY1%2BcWb0KwySInE65iE%2BVXmQ88F6iQnOtGraaipsAHwWVKYhBCRltIWDWkqcV0pFPKRZDhJcM3Wktmu8STRFeuRze3C0DegAhv5OGhsEW6fFbM52RUNSmKhScRrMJlx13uUCyesl5lCE1z%2BGCxFYDsauU%2BeEyBjzqT%2F82cRsui4BmsiBuWELApKFFZstXFkOqquwyQoPl9eK6zMFo3Xs7sry4llySnx%2B6zArS76UvlPgp9fInF05BAYVcI9jA7B5i0nLpikiStjqMxi5BMdngzDw6OW8BjqkARH8G38WC9lPr%2Bm5tJj0LBHb0bVSicK8icqNUN%2BiL9MJU%2FASDbJLb%2BFhuCSy7MVYTaXFq6JUzGwu0ACyuyKaqZBVT9xwvBAw4Xvzng2CNC0niKTiSbb%2F1j%2B0STww809s0Y5S84hFOauKlBAxROseNaNknI8VB%2Ftf3SXfWskKEPbd90zSkFpWZMipyQJtIqzXT%2BoEt9qg1bXViz9Z4QB0ciGf6Jm3&X-Amz-Signature=38ea51697083aae9069a1bf9a083c1cce98e3dd6ed3a2a09b60d5e9c5e29d1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIPCU3V%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC0L2J2N21Y6UkJyS4eELO%2BXtLcRXilxVaOLxxN%2FcyKZgIhANhcxZBQTxQzhHdZh6QwEp%2FE4ziivRWl%2B8gt6KA2jOwWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6Atos4ZuxYNaTXXMq3AOB%2F0T6RdAW0gobkjEhYmahXB5LzP81ixGr4PMei8EOYX1WGcCi9MG%2FXvw%2FBlUjUfGuOCw0CaTQL8gkvWczb%2B1LsMh4zWtbkXOU6u7iC4maDcXvSR0t95vH7bdmOTyRO03tid8zhuhoUROaX0SUAuW6fS2ostInWl5HERk%2FUYArrPzvzrdYSPKhdIVtqLVMF5OP0X%2FR7gRiy040rDot1LI%2BBxOaMF6XZsX%2FIsp0gAeGrn1Pa7NFoHe9CPKQbzu9%2F%2BbwfkqEqer6yh7hpot42NYerJVzkDbZbD6N5tnD0wyHzmXVBRjhMMUJUlJMphhVuwaunILBYs8gpRH%2FfpAcd805qiP6le32ti6TSXBhzY1%2BcWb0KwySInE65iE%2BVXmQ88F6iQnOtGraaipsAHwWVKYhBCRltIWDWkqcV0pFPKRZDhJcM3Wktmu8STRFeuRze3C0DegAhv5OGhsEW6fFbM52RUNSmKhScRrMJlx13uUCyesl5lCE1z%2BGCxFYDsauU%2BeEyBjzqT%2F82cRsui4BmsiBuWELApKFFZstXFkOqquwyQoPl9eK6zMFo3Xs7sry4llySnx%2B6zArS76UvlPgp9fInF05BAYVcI9jA7B5i0nLpikiStjqMxi5BMdngzDw6OW8BjqkARH8G38WC9lPr%2Bm5tJj0LBHb0bVSicK8icqNUN%2BiL9MJU%2FASDbJLb%2BFhuCSy7MVYTaXFq6JUzGwu0ACyuyKaqZBVT9xwvBAw4Xvzng2CNC0niKTiSbb%2F1j%2B0STww809s0Y5S84hFOauKlBAxROseNaNknI8VB%2Ftf3SXfWskKEPbd90zSkFpWZMipyQJtIqzXT%2BoEt9qg1bXViz9Z4QB0ciGf6Jm3&X-Amz-Signature=2311c129f33291f031a2026293ac47c65cebf8d441e7eafd8c5375f2cf165492&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
