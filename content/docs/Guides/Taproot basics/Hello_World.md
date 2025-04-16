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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBRERXV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzmfjyhwvFfZZp5Kj3Ri3HLpOvN1xdPGO5fhQMIIr%2FKAiBZgX%2BNmQ3tg3HogKxbtXbu6rBNS4hslXLkSExMMjCYIyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM%2FjaH3sOhxqKOAOxjKtwD%2Fii8tm81ydO63H9dE75Y6X7Fwqa4nrEZ712U62HAypH61gMc5ozN84gyxrU91CrxYlWRtpNHQbVe12%2Forby9U2a%2FNuRRqd9tl9w3yTwFWiIQsAr%2FegDFgTAj5Rikg48oaYiin68TG5Mvma%2FM5sHAAN6i3D1Ek3fSSpzdEICW6VaoJgDcBgbHMRhWhIdrS0xAqQd11g%2Bx7N5AbWPaPrMt6eTh5hr15wG3WMIAHeWTw1IXk9KUVlyPFRU7LyBa5bJ7PY1a5K7aV44xf2wnnq2T9Jwdn16Hj%2BxjqPHmSjmZPkVsuKsFCVIF13etmvLsDztzhLjOdjzGWKNzW6pxhMbUwF4ShwVjWvQ3xuPlp7lZPJFIlV4DXAIcQJgI4IS9ZztQ7kcbRSxXtshIUNx4k7wx%2B5CWDEAt0IHb7z2hiyl3fGgY8nY4g7jUddf8P9NXej4arXcvpWRxKlBCikPOdczoosGVP4BXLYhtfe3v7WXvaDcF%2F2q2ToEBDaf57GIcRBxYh6iNomujnphvlvuhRxiaa7D6lVZR9Ek%2BAhfUfjjhhNtddHMn8oIyqtQWBk3O1GRR4VB540c1Om0df17hMCFT%2FsnKh%2B104c6NIVSn81cYsJwbBWNxbui59CMrJ0Mw597%2FvwY6pgEk5MnIopYs52pfrSsZ3%2BpoxL95KZpKVpzKbp1m9L4VUukpRbPGlEil004r7rWbtJJAAzgubYF%2Fo1RcGMZIg10yGEOpC%2B7WSttUmTQ74YutXikzQkA0jw%2FGbZIenpyQkRcOh0tHIvdPs%2BJ0z1ZHChBJGY%2FRuO39cLvBCD3Eh5lEseQq42UZBNOkUyHjD87I0ZZV3gea8qcKjYDXXw4VNDExnjdufA0c&X-Amz-Signature=a36de523aa7d20d3bfc2f2b7f5f4fcc34dd156876f7e3d3697cf28146f0ee198&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBRERXV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzmfjyhwvFfZZp5Kj3Ri3HLpOvN1xdPGO5fhQMIIr%2FKAiBZgX%2BNmQ3tg3HogKxbtXbu6rBNS4hslXLkSExMMjCYIyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM%2FjaH3sOhxqKOAOxjKtwD%2Fii8tm81ydO63H9dE75Y6X7Fwqa4nrEZ712U62HAypH61gMc5ozN84gyxrU91CrxYlWRtpNHQbVe12%2Forby9U2a%2FNuRRqd9tl9w3yTwFWiIQsAr%2FegDFgTAj5Rikg48oaYiin68TG5Mvma%2FM5sHAAN6i3D1Ek3fSSpzdEICW6VaoJgDcBgbHMRhWhIdrS0xAqQd11g%2Bx7N5AbWPaPrMt6eTh5hr15wG3WMIAHeWTw1IXk9KUVlyPFRU7LyBa5bJ7PY1a5K7aV44xf2wnnq2T9Jwdn16Hj%2BxjqPHmSjmZPkVsuKsFCVIF13etmvLsDztzhLjOdjzGWKNzW6pxhMbUwF4ShwVjWvQ3xuPlp7lZPJFIlV4DXAIcQJgI4IS9ZztQ7kcbRSxXtshIUNx4k7wx%2B5CWDEAt0IHb7z2hiyl3fGgY8nY4g7jUddf8P9NXej4arXcvpWRxKlBCikPOdczoosGVP4BXLYhtfe3v7WXvaDcF%2F2q2ToEBDaf57GIcRBxYh6iNomujnphvlvuhRxiaa7D6lVZR9Ek%2BAhfUfjjhhNtddHMn8oIyqtQWBk3O1GRR4VB540c1Om0df17hMCFT%2FsnKh%2B104c6NIVSn81cYsJwbBWNxbui59CMrJ0Mw597%2FvwY6pgEk5MnIopYs52pfrSsZ3%2BpoxL95KZpKVpzKbp1m9L4VUukpRbPGlEil004r7rWbtJJAAzgubYF%2Fo1RcGMZIg10yGEOpC%2B7WSttUmTQ74YutXikzQkA0jw%2FGbZIenpyQkRcOh0tHIvdPs%2BJ0z1ZHChBJGY%2FRuO39cLvBCD3Eh5lEseQq42UZBNOkUyHjD87I0ZZV3gea8qcKjYDXXw4VNDExnjdufA0c&X-Amz-Signature=b9141296a9ceec57977eb80213a8719360253b06bc5b657118f9a597482a5fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
