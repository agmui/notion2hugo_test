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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EKC5JO%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeNhoLMyfWC5pcNmA97Qul435dacAFVhvzbT91nAEppAiBbATXxxFc7mCrhnz4w46q4nOZvW08iGkCCLJ2thJ43jCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMY1Wf0p1jsO9U6actKtwDvXV8EcU6QIORyb%2F56N53rKN8i1%2Bl5fiqerXH%2B5%2BqltRdpXBe5zMwnrKFSZ%2F2F%2Fm5SKJgILYUVFZ3jVkZkTO2AxABiDT5It9DoePULxLZ%2BE2odoHrl0ozeMERHquDV1y7W9pqJi8Hpuk3blc4bK0W9Rc66eOLB0pPs5h7VhJGYGqw6DgS%2F4TOhVGXJ5IoCLj79Ffid2IgS5XyVQ%2FdnXhY1POIaeMWQVDuAuRYWsbZGNSx5oRLK%2FWgCaPFM1vksTkJg759Gogrm5dNmYQdv8nRyCHGvj9St0QuGIMpj6WLd5OOV2pYoqeVR2SV3Pp8VloLOQg3Acj3NQm0QTmauVrYPpR4Og6RC4jo3fQJ8MVEShGXaiDIcXrDCOmuvvHAfwIMJWq2wvfgjWkicKgQKWtyZCgYhL5t5drClJQnZCE18QXivVcyGLTItgs4yfBec9Z5yI9DBv%2BF%2FXxUEmQNLZqlm2IbhO5e%2FufseH5UwkDuYVeQjJeraXMcLYkXdvkL9QuhF3zMZT9nObZc9orvvQQsDR3jmWTLYIxovu0XWjnpgI14oG9Uej56EAxSXdWV6OBpthQod4EWmRJOFvvrJR4%2BkV%2Bd3T7mxzapgRotWydBUr2OvKlbKPPbNzF2xMgwidLJ1AY6pgHWJOQhXkk102ID4UkVeZ7rbVG5WhB%2BjHJ6%2B1MrbUoPapTj%2BV7VkCvQFw7LQE64xBv4MaBrplKVeWbtAFZ6qXNUYAqqrA%2F68TNy97mK6AiH6Cu%2BHTDcesYVaPbcJ5wUxWKlX2IkELkg8UuKyaTpFjw7y1P6neV2ehzIIN5rW71My%2BFFMjmQNYLbKIoCdC9jOeQ6GfMZk2FTKOj8CjnDGqvn3adeheyv&X-Amz-Signature=8432fa0d50dc83bcf988cc1ecd4bab55ff012574a81c39369618ef0a55bb2e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EKC5JO%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeNhoLMyfWC5pcNmA97Qul435dacAFVhvzbT91nAEppAiBbATXxxFc7mCrhnz4w46q4nOZvW08iGkCCLJ2thJ43jCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMY1Wf0p1jsO9U6actKtwDvXV8EcU6QIORyb%2F56N53rKN8i1%2Bl5fiqerXH%2B5%2BqltRdpXBe5zMwnrKFSZ%2F2F%2Fm5SKJgILYUVFZ3jVkZkTO2AxABiDT5It9DoePULxLZ%2BE2odoHrl0ozeMERHquDV1y7W9pqJi8Hpuk3blc4bK0W9Rc66eOLB0pPs5h7VhJGYGqw6DgS%2F4TOhVGXJ5IoCLj79Ffid2IgS5XyVQ%2FdnXhY1POIaeMWQVDuAuRYWsbZGNSx5oRLK%2FWgCaPFM1vksTkJg759Gogrm5dNmYQdv8nRyCHGvj9St0QuGIMpj6WLd5OOV2pYoqeVR2SV3Pp8VloLOQg3Acj3NQm0QTmauVrYPpR4Og6RC4jo3fQJ8MVEShGXaiDIcXrDCOmuvvHAfwIMJWq2wvfgjWkicKgQKWtyZCgYhL5t5drClJQnZCE18QXivVcyGLTItgs4yfBec9Z5yI9DBv%2BF%2FXxUEmQNLZqlm2IbhO5e%2FufseH5UwkDuYVeQjJeraXMcLYkXdvkL9QuhF3zMZT9nObZc9orvvQQsDR3jmWTLYIxovu0XWjnpgI14oG9Uej56EAxSXdWV6OBpthQod4EWmRJOFvvrJR4%2BkV%2Bd3T7mxzapgRotWydBUr2OvKlbKPPbNzF2xMgwidLJ1AY6pgHWJOQhXkk102ID4UkVeZ7rbVG5WhB%2BjHJ6%2B1MrbUoPapTj%2BV7VkCvQFw7LQE64xBv4MaBrplKVeWbtAFZ6qXNUYAqqrA%2F68TNy97mK6AiH6Cu%2BHTDcesYVaPbcJ5wUxWKlX2IkELkg8UuKyaTpFjw7y1P6neV2ehzIIN5rW71My%2BFFMjmQNYLbKIoCdC9jOeQ6GfMZk2FTKOj8CjnDGqvn3adeheyv&X-Amz-Signature=8ce60deac67cb3eeff30a7873eafac623fc83b3a2db3154a4d740c9cee5df64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
