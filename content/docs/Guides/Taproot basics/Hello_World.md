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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGQA2X7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQP0vqko7k6OqwfgNPFvqRsOsP8Ob2GxfkkqS93pUCOwIhANpPT4R73%2BP8anWeUJfS08WJXRYIsb4BEUq6dBV0RZE0KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgagVOscrcCeHg1KIq3AN7OcUC81Hec3I8Ux2T%2BaOdgdZV0%2FuAEDKIdzGRPBg0NBb9xgTrP33%2FgIDg0e8zPZqrmdrYejTw0pVPi8KNKFapzmQxK3rNLqYWQIjEFLqa%2FMiMeUGqOIVz7xHZTWPifNMPMOi2OfRAo3BZ3MEYFeNHf0Nltfc7jcdXSQgDRdydDWLo%2Fv2afqCm4NRwxsN4PaeklbXYZn5Tbylur9uMpKJBuc%2Bem%2FHWP6n63hdCXT6Z%2FixPs5LhbQBNVj5rn7v0Dgn1JMQqolmPwnUnnXolBJi3%2FcBgI%2FycKqjFCo5miN1Jf1unssZT%2B4Qqq4h%2BxWdamA%2B5frPnuX2ASMSYoR2KFau%2Bx5afAFMMppFiArmcGtPel6Nj810y3TrJ6COsBdOeylCSJWEt9Ja2EkBqBBOZYTXB1y4QqZVYxNx2LF1x8Xog4fnmw7W5djaAGz4XCopskPdy%2FqdNWhGefGV1lk84gCHXFoewP0dB9W%2Fl0ztzu4GOtbaF0N5x%2BUQpERRVpr4ijVJgSauRBI1gDx2gn%2FJIm3w%2Bx9fShF2dz5v3whdwEU%2F4arQqcmGDxKr%2B%2BXWAJTxnanXMXutUO9C9h5xAWgYCt%2FNJTsAe30Xc4LCc5lc5Co9%2BFclsSKOKYXDXZ5%2FcCTCLntu9BjqkARKcyEaohI1oK5AHDEJVxkQEvsDuujF2V313Z3JVYt4so7FmKgDseD1N0LMAjeufRF4ujv2rnLITRp8fZjJ%2FxNJog0uVNUuqMHOH0%2FnmzQrjJWxqd%2BRmTzNy974Z0tVBBXiW6qWEge5klky9uNRqmH6gPlELLVxl7jxF0VsIVsweYxOpN6JY8%2FRmhtI4AMtFxGiblW0gUEbkPfM1YXFgGVbWFiSc&X-Amz-Signature=c08083cce56adfb16b2fb79a072957ca33237d8b29af87304d5f5efc4ef7ae40&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGQA2X7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQP0vqko7k6OqwfgNPFvqRsOsP8Ob2GxfkkqS93pUCOwIhANpPT4R73%2BP8anWeUJfS08WJXRYIsb4BEUq6dBV0RZE0KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgagVOscrcCeHg1KIq3AN7OcUC81Hec3I8Ux2T%2BaOdgdZV0%2FuAEDKIdzGRPBg0NBb9xgTrP33%2FgIDg0e8zPZqrmdrYejTw0pVPi8KNKFapzmQxK3rNLqYWQIjEFLqa%2FMiMeUGqOIVz7xHZTWPifNMPMOi2OfRAo3BZ3MEYFeNHf0Nltfc7jcdXSQgDRdydDWLo%2Fv2afqCm4NRwxsN4PaeklbXYZn5Tbylur9uMpKJBuc%2Bem%2FHWP6n63hdCXT6Z%2FixPs5LhbQBNVj5rn7v0Dgn1JMQqolmPwnUnnXolBJi3%2FcBgI%2FycKqjFCo5miN1Jf1unssZT%2B4Qqq4h%2BxWdamA%2B5frPnuX2ASMSYoR2KFau%2Bx5afAFMMppFiArmcGtPel6Nj810y3TrJ6COsBdOeylCSJWEt9Ja2EkBqBBOZYTXB1y4QqZVYxNx2LF1x8Xog4fnmw7W5djaAGz4XCopskPdy%2FqdNWhGefGV1lk84gCHXFoewP0dB9W%2Fl0ztzu4GOtbaF0N5x%2BUQpERRVpr4ijVJgSauRBI1gDx2gn%2FJIm3w%2Bx9fShF2dz5v3whdwEU%2F4arQqcmGDxKr%2B%2BXWAJTxnanXMXutUO9C9h5xAWgYCt%2FNJTsAe30Xc4LCc5lc5Co9%2BFclsSKOKYXDXZ5%2FcCTCLntu9BjqkARKcyEaohI1oK5AHDEJVxkQEvsDuujF2V313Z3JVYt4so7FmKgDseD1N0LMAjeufRF4ujv2rnLITRp8fZjJ%2FxNJog0uVNUuqMHOH0%2FnmzQrjJWxqd%2BRmTzNy974Z0tVBBXiW6qWEge5klky9uNRqmH6gPlELLVxl7jxF0VsIVsweYxOpN6JY8%2FRmhtI4AMtFxGiblW0gUEbkPfM1YXFgGVbWFiSc&X-Amz-Signature=46c1547fc33407c32289432be0519b0cd1a3a8ddaa340c8b859512f36cb73b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
