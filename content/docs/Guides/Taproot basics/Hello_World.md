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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC3YMAUN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIH%2FK5FYiKB9V8KPn5m%2B2mE8hZsXWHjAg%2FDSB6n%2F3JUR4AiAGx7QkE8RyFO%2BNRxKfKseTxQgy3qJ0UNIHhSaT6hXhBiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1sw9qYhKdUfBHvRbKtwD1%2FvhywJeo%2BLuSzLFGKMmBtOXpANFKPf7%2FyHFU30FObjXtG6rolMOUeEjpHFCUApGJOhtUl0DiKCuRYI%2BsvTsxGI%2FPMncJkrn%2Bs0I3S2I6WV4fnh7WbZuorxiIoR3p6WoHoQwsgOfQo2qQoaPVlwdia8uEc7vn2ZkNyhZrN9H4UttvBMcQBeRwo1UM1raZOrJbQUj3ZE%2BvtayOLNzRsvH9wcJIrt6NLNP%2FHKzzqbp78bm3SqXqotISvDnqtFcrOzpLW0bDjiJtxQIKtuLqsCkS4FOIYZzAvHyMPHMjQAB2V79TxIQ%2FAqkDgAtMue7UuWcvAkJKtySeHLeDWhW6PVKq4BAy0JfkjoTAa5l8NFdSmVcdnYOwRj1mCQ4fy9ol6RFImmDDo9sdVadfLOQPDhoGrXkRU%2BwCqVKGtR1B8lQtzMTcQEuVaTlgcO44wAXUmFPXLTRXnfZ1ggLXrfSOQaRSkcoiYcueyEwHvMlSPnkGjxASwp9IjQmSErnFfCSJJ8rsYLK9fU9hxLNCB2c7oliIDnU3GvrVhRJvRp%2BHu6OuFSJlK2ttGaI5b%2BlDObSv26YCgbi0WeeRT8GpVPz1IklHwQT%2B5idfVrjkwJjwgSNOKcb2JcjChmzp%2BOrh8YwuPCjvwY6pgF8pp1ImNxk7%2FKUvcJ3Mqbf7r7PW6qTt65yBOsUQOWWmJzFiR1ZTcRnT6zXvXIP8oMAjKGpP2CgmBWCqoYxVIv%2Bl7lBhsSW%2F0j8SeD0qqdzx0g%2FHg6Ldm610NV16NfFET6b%2FZGJuBdCYsPw9YZSL1zCNpfAw61GficXI9HZLuIvXxYWHQ5VyLmbxgBa3RK32pFf5Pz12dyywLp1tkU9JcSz7xRY4afH&X-Amz-Signature=e443f254916204af26cd0c08e4d796026612307c5c1584d2df5734aa4935466d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC3YMAUN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIH%2FK5FYiKB9V8KPn5m%2B2mE8hZsXWHjAg%2FDSB6n%2F3JUR4AiAGx7QkE8RyFO%2BNRxKfKseTxQgy3qJ0UNIHhSaT6hXhBiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1sw9qYhKdUfBHvRbKtwD1%2FvhywJeo%2BLuSzLFGKMmBtOXpANFKPf7%2FyHFU30FObjXtG6rolMOUeEjpHFCUApGJOhtUl0DiKCuRYI%2BsvTsxGI%2FPMncJkrn%2Bs0I3S2I6WV4fnh7WbZuorxiIoR3p6WoHoQwsgOfQo2qQoaPVlwdia8uEc7vn2ZkNyhZrN9H4UttvBMcQBeRwo1UM1raZOrJbQUj3ZE%2BvtayOLNzRsvH9wcJIrt6NLNP%2FHKzzqbp78bm3SqXqotISvDnqtFcrOzpLW0bDjiJtxQIKtuLqsCkS4FOIYZzAvHyMPHMjQAB2V79TxIQ%2FAqkDgAtMue7UuWcvAkJKtySeHLeDWhW6PVKq4BAy0JfkjoTAa5l8NFdSmVcdnYOwRj1mCQ4fy9ol6RFImmDDo9sdVadfLOQPDhoGrXkRU%2BwCqVKGtR1B8lQtzMTcQEuVaTlgcO44wAXUmFPXLTRXnfZ1ggLXrfSOQaRSkcoiYcueyEwHvMlSPnkGjxASwp9IjQmSErnFfCSJJ8rsYLK9fU9hxLNCB2c7oliIDnU3GvrVhRJvRp%2BHu6OuFSJlK2ttGaI5b%2BlDObSv26YCgbi0WeeRT8GpVPz1IklHwQT%2B5idfVrjkwJjwgSNOKcb2JcjChmzp%2BOrh8YwuPCjvwY6pgF8pp1ImNxk7%2FKUvcJ3Mqbf7r7PW6qTt65yBOsUQOWWmJzFiR1ZTcRnT6zXvXIP8oMAjKGpP2CgmBWCqoYxVIv%2Bl7lBhsSW%2F0j8SeD0qqdzx0g%2FHg6Ldm610NV16NfFET6b%2FZGJuBdCYsPw9YZSL1zCNpfAw61GficXI9HZLuIvXxYWHQ5VyLmbxgBa3RK32pFf5Pz12dyywLp1tkU9JcSz7xRY4afH&X-Amz-Signature=d11fa802f3e7a8b3e088375e4784125f6603d917be6db9b4db0ee6aefb63c93c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
