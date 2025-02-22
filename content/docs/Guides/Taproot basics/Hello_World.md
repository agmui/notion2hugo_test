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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EWAGWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmVnEbVv48m%2FR5IAAZXa%2FJiBytRjOL94Y7RW5hf1e1gIgE%2FQgGoGFTyfJKsDSefzvdecQbiUAcbXatNaOfHz98yMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbqtJhhBmFiwK%2ByXircA7s%2BwPDvezC5FYX91E6%2Btuup8l8xzafySlaQWbJPJWGMJmXbaSTJ0kNvJUPoTPsWA7jS1caBfzwuaBpMg2D6OiboCuV%2FxB8R2u9Ly4wDKA6xPJgU4s1fImvhqYXdKFzj4uavrnrJJyQIUpEeJ7WpcuMnDW43WUBg5DEiUmVaPi418pABPKxoa7j7ODS%2FwH4TeC0Oey0zXW4MY40lrxQxh%2Fypdvh2A%2FvXYCYdTw9xdNCiVdPH8L6wLJFQ1UaEZVTMlTsb4MEqjnPfV2pFfzCC1f73nmKJh3T6uU1%2BVG4eQSetkIPmct0BEYpTqSP9j0tdkqS4xZw96Vk4SUMc2QLCKu1JPRjcIWsziZTlqKyiSdtxi%2Fb5%2F3PdOa6muKv9sznoSkEkw5pqeurm7ktDt1txtyuSnIxDxjyYYZztYVyeoygkbUnkrDULIJGi1K%2FH1e%2BYxY4j9xrtSw%2B0C21BAAQWKoehfQv9hf48FDMAuCKJDqpKEZdPPvBmdfDqQ2X3VNe0WZBXgIVvR8ymJJ5uwh%2Bcs3e1cX6x14vIf4LBWmEkj6S6C8j0%2BHgdKZiO6dKEBTioYQpX%2BQzJSJ%2BeEL03%2BALlVH%2B1E0h7MjvGE%2FwMqINqZTaAN4LqAf94Rk0mcOCLMISJ6L0GOqUBu48hvj2kbachsE%2BbBP27ggXAK49dxvesvk0a1B0KfbKdpPaHLUetoYnTRylc96GbV2wOuLC8fclmsBBzY3ahicyg%2BYBGH3IHsNmXJUGrz%2FVpkVnvzMcw6pPSQeUqLwlV2P2VD4Jpk0d57meVNcV1flw0kGE%2FEgl%2Bv99SH5dENLe5KM04U6Z1ktcXZOkUJ8zoLsT5RWOHpE%2BMZeseQ7eq%2BJIKBCtb&X-Amz-Signature=64f2d549b34879cfd7408d8cfe586644bade97dbebec86c72f28a48f4e105ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EWAGWI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmVnEbVv48m%2FR5IAAZXa%2FJiBytRjOL94Y7RW5hf1e1gIgE%2FQgGoGFTyfJKsDSefzvdecQbiUAcbXatNaOfHz98yMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbqtJhhBmFiwK%2ByXircA7s%2BwPDvezC5FYX91E6%2Btuup8l8xzafySlaQWbJPJWGMJmXbaSTJ0kNvJUPoTPsWA7jS1caBfzwuaBpMg2D6OiboCuV%2FxB8R2u9Ly4wDKA6xPJgU4s1fImvhqYXdKFzj4uavrnrJJyQIUpEeJ7WpcuMnDW43WUBg5DEiUmVaPi418pABPKxoa7j7ODS%2FwH4TeC0Oey0zXW4MY40lrxQxh%2Fypdvh2A%2FvXYCYdTw9xdNCiVdPH8L6wLJFQ1UaEZVTMlTsb4MEqjnPfV2pFfzCC1f73nmKJh3T6uU1%2BVG4eQSetkIPmct0BEYpTqSP9j0tdkqS4xZw96Vk4SUMc2QLCKu1JPRjcIWsziZTlqKyiSdtxi%2Fb5%2F3PdOa6muKv9sznoSkEkw5pqeurm7ktDt1txtyuSnIxDxjyYYZztYVyeoygkbUnkrDULIJGi1K%2FH1e%2BYxY4j9xrtSw%2B0C21BAAQWKoehfQv9hf48FDMAuCKJDqpKEZdPPvBmdfDqQ2X3VNe0WZBXgIVvR8ymJJ5uwh%2Bcs3e1cX6x14vIf4LBWmEkj6S6C8j0%2BHgdKZiO6dKEBTioYQpX%2BQzJSJ%2BeEL03%2BALlVH%2B1E0h7MjvGE%2FwMqINqZTaAN4LqAf94Rk0mcOCLMISJ6L0GOqUBu48hvj2kbachsE%2BbBP27ggXAK49dxvesvk0a1B0KfbKdpPaHLUetoYnTRylc96GbV2wOuLC8fclmsBBzY3ahicyg%2BYBGH3IHsNmXJUGrz%2FVpkVnvzMcw6pPSQeUqLwlV2P2VD4Jpk0d57meVNcV1flw0kGE%2FEgl%2Bv99SH5dENLe5KM04U6Z1ktcXZOkUJ8zoLsT5RWOHpE%2BMZeseQ7eq%2BJIKBCtb&X-Amz-Signature=096f22b9a08149797217de3a0a7b08f6c2394cd89daaef345e6a2f7bca7bf647&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
