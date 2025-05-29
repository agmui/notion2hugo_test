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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDT6FJS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrlmc2%2BuXaXLGfwUipZf%2Fk1SPddMRBiG5YbpQjcY2RQwIhAKWGwT90MZLc%2FkBTAzWOVJrJ10TxAs7uOEP79Cy1LRzQKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0fCTULXHnrbLzDpQq3ANVdaGJOIJnPQFxIqwz1kF%2FhdkaYRQ9xuMigCvvYRJ4QKEKTPq%2FeZ6vdzQtByrkMWyU7VWU0O%2BnQxD45DDzpj6a%2FfJy6bWz5hUIK1PXfk6cmJ%2FNbjV5zDZ7CVWXQXEVdvbcTytjW%2FJ28SF5kxzJ2RmOaYJ%2BfFb4L%2FiJRqKzsyp7WPXOxzFTstWKplEShWhgFv5NhGhiqCTTwiNn0Xkw5O8jmTgbrtFNX9fVPT67Cbrv4Eff23i6zqI8Nm6Gz4C8dcZDaJ0icDT6PnLkZlWq2csP8EyeuQ%2BGdGNcybdkWsQcv8RXabrPPbNTvapUZWaNz9qyvTu6pAv6Fj6ivifoSmJUMJX%2BkH4NynNFBlQ6DMpujDlauc%2BY%2BklXiYCCC9ewBpM05EJjGCpQIP8z1zmEMODqW1KK30fJL2DI2R97a2weunXcjlXbsOc2%2BbhpQHGmNV%2BkfYmsLa%2BLxtaKwyzSHdjsP6JLN8sTgIdPHoOfn4RgUN5k2D6ZUNXVYLGWKaXXkMqLnB0yS%2BwQJlczWQIXSrX1xB8KgXCJMrOi%2FUg5QQU%2BXZj7yAKaaOEjj7bHgdDh1YeodeOf1DVeJkM18JHeWM9BDxm8iMQXAmfZAyilwz7sfwjhoHgYrnjC2aMLkDCL4%2BLBBjqkASguG2kgoLhnzQFOouH%2F7EIqAqIS22jx2e0UtOTAJ4ytgUO3%2FjLxEiZOXOvwGYVbvqsJeXxxAgtm1mdaGuEc35eBcuh1UojgFKV4DzvgqfHb9X0CEHBFRZLuHDymz4tjXnKshA1RML%2BqM2HZI91Xy7g%2BtIbwrU86jHkHF339lHW86qXn%2BHexPZMz%2BGLQB62zZQgYM8qO2AM4sUUXMWCuSnFHBLf7&X-Amz-Signature=d7f24d484ae67647f4d0f2a431bcb5a6c92674a214660c20d9fc84b326ae2e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDT6FJS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrlmc2%2BuXaXLGfwUipZf%2Fk1SPddMRBiG5YbpQjcY2RQwIhAKWGwT90MZLc%2FkBTAzWOVJrJ10TxAs7uOEP79Cy1LRzQKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0fCTULXHnrbLzDpQq3ANVdaGJOIJnPQFxIqwz1kF%2FhdkaYRQ9xuMigCvvYRJ4QKEKTPq%2FeZ6vdzQtByrkMWyU7VWU0O%2BnQxD45DDzpj6a%2FfJy6bWz5hUIK1PXfk6cmJ%2FNbjV5zDZ7CVWXQXEVdvbcTytjW%2FJ28SF5kxzJ2RmOaYJ%2BfFb4L%2FiJRqKzsyp7WPXOxzFTstWKplEShWhgFv5NhGhiqCTTwiNn0Xkw5O8jmTgbrtFNX9fVPT67Cbrv4Eff23i6zqI8Nm6Gz4C8dcZDaJ0icDT6PnLkZlWq2csP8EyeuQ%2BGdGNcybdkWsQcv8RXabrPPbNTvapUZWaNz9qyvTu6pAv6Fj6ivifoSmJUMJX%2BkH4NynNFBlQ6DMpujDlauc%2BY%2BklXiYCCC9ewBpM05EJjGCpQIP8z1zmEMODqW1KK30fJL2DI2R97a2weunXcjlXbsOc2%2BbhpQHGmNV%2BkfYmsLa%2BLxtaKwyzSHdjsP6JLN8sTgIdPHoOfn4RgUN5k2D6ZUNXVYLGWKaXXkMqLnB0yS%2BwQJlczWQIXSrX1xB8KgXCJMrOi%2FUg5QQU%2BXZj7yAKaaOEjj7bHgdDh1YeodeOf1DVeJkM18JHeWM9BDxm8iMQXAmfZAyilwz7sfwjhoHgYrnjC2aMLkDCL4%2BLBBjqkASguG2kgoLhnzQFOouH%2F7EIqAqIS22jx2e0UtOTAJ4ytgUO3%2FjLxEiZOXOvwGYVbvqsJeXxxAgtm1mdaGuEc35eBcuh1UojgFKV4DzvgqfHb9X0CEHBFRZLuHDymz4tjXnKshA1RML%2BqM2HZI91Xy7g%2BtIbwrU86jHkHF339lHW86qXn%2BHexPZMz%2BGLQB62zZQgYM8qO2AM4sUUXMWCuSnFHBLf7&X-Amz-Signature=a13e58d536efaae808e1a4ab79c6ef35bbcb6ab0ea5e6ff052e170d1ea128c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
