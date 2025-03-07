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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5UJDWC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6mlE0RIxWzXGsoNnrwwz9%2B6MwWIJpjtCeFaOszg1W9AIhAPfJ3GMWwWsQwimiGKSvZDLD6LaOw%2B%2BctkCVczh5aLLIKv8DCEYQABoMNjM3NDIzMTgzODA1IgwDZ%2Bi5s44azwAPO0cq3APiDmV2Zje1f%2BgHWRcrLbI1Mf4jcNs%2FKmkOHiEJWHjI9R0Bh3H%2FeDbnHxHBXU8Rzl8aVatGF9yd7GQeoc6ls%2Fo%2FduiH5%2F3tcxorprXSj28fS2ZQLnjsv%2FLPO6LbG8pHJh18G0XljgirdOdzb9OJ6uuLXEgdvKZlOth%2BzyC%2BmR%2B2ll5lmGmjZxvj5E8j4XmpyYk2m8JBYghp5fbnJqPgkb0WnPy0YRC7hjNVIDOD2FJBhM6z%2F7KCzOSTLKuXB%2FNG79vGWrwtOIsxIkmU7bczfG6XUM2JRVHxkCsOi8lCA0UfEMl%2FYikpQPyVpWerZYy2BOFo9u0BDd4lROLYe4mPppynRHGPgl%2B51%2B8Rp%2FgzUbAGcQbQaECzYuSIHr9SIHElFOXMSS84BnEK23KbxzImUwn4LN8FGIA1m7vWO0neWd1FpLOgG0tz4KZHaygPzaDqwv52yMakzjROgGlU2yygM8LSbsBiPhOBWPT3XGrsudQXSPgpsIQRqkCFIgh9A9CAVI4hXIMi%2BZ06PmWnHREGG1GEWclD%2Bu%2BW0LQxi9MQk9JbmIDhV1S4EHlgjIQECWCUGKl99nIqcLiep709vX91OowRUiLvdY7kcSXbumCQcPlmfHVQom0hwPHcbbWOFjCG36u%2BBjqkAXvNnF8UYywTJh1stVt%2BYmY5KSpUThE3vjrnyC0syZs70dmx6D71%2FbCFj7MKqbqv7MZgqKWSVU9Ro70HOTQIBuB969rwTUmpFONTtfAlJUh6BZnKCxFVv83ezLD%2FCh0lffC7qno8yrhqWTzysu1xPCKhLmB3WPP4Sz8ROzgw%2FFKAmPoY%2Fha102N%2FntxDAXKrY692bC7uU4bYsgL5cJg3ub4gL6hb&X-Amz-Signature=84f9ff50a712c6b41f99d9f0dccc0f40c7b35b70c72706d4e87cdcb3b647fb3d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5UJDWC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6mlE0RIxWzXGsoNnrwwz9%2B6MwWIJpjtCeFaOszg1W9AIhAPfJ3GMWwWsQwimiGKSvZDLD6LaOw%2B%2BctkCVczh5aLLIKv8DCEYQABoMNjM3NDIzMTgzODA1IgwDZ%2Bi5s44azwAPO0cq3APiDmV2Zje1f%2BgHWRcrLbI1Mf4jcNs%2FKmkOHiEJWHjI9R0Bh3H%2FeDbnHxHBXU8Rzl8aVatGF9yd7GQeoc6ls%2Fo%2FduiH5%2F3tcxorprXSj28fS2ZQLnjsv%2FLPO6LbG8pHJh18G0XljgirdOdzb9OJ6uuLXEgdvKZlOth%2BzyC%2BmR%2B2ll5lmGmjZxvj5E8j4XmpyYk2m8JBYghp5fbnJqPgkb0WnPy0YRC7hjNVIDOD2FJBhM6z%2F7KCzOSTLKuXB%2FNG79vGWrwtOIsxIkmU7bczfG6XUM2JRVHxkCsOi8lCA0UfEMl%2FYikpQPyVpWerZYy2BOFo9u0BDd4lROLYe4mPppynRHGPgl%2B51%2B8Rp%2FgzUbAGcQbQaECzYuSIHr9SIHElFOXMSS84BnEK23KbxzImUwn4LN8FGIA1m7vWO0neWd1FpLOgG0tz4KZHaygPzaDqwv52yMakzjROgGlU2yygM8LSbsBiPhOBWPT3XGrsudQXSPgpsIQRqkCFIgh9A9CAVI4hXIMi%2BZ06PmWnHREGG1GEWclD%2Bu%2BW0LQxi9MQk9JbmIDhV1S4EHlgjIQECWCUGKl99nIqcLiep709vX91OowRUiLvdY7kcSXbumCQcPlmfHVQom0hwPHcbbWOFjCG36u%2BBjqkAXvNnF8UYywTJh1stVt%2BYmY5KSpUThE3vjrnyC0syZs70dmx6D71%2FbCFj7MKqbqv7MZgqKWSVU9Ro70HOTQIBuB969rwTUmpFONTtfAlJUh6BZnKCxFVv83ezLD%2FCh0lffC7qno8yrhqWTzysu1xPCKhLmB3WPP4Sz8ROzgw%2FFKAmPoY%2Fha102N%2FntxDAXKrY692bC7uU4bYsgL5cJg3ub4gL6hb&X-Amz-Signature=08fb1f53f2458f0d9d30ac1952779fa9df2536c09ac4dabcf465acfb3709b6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
