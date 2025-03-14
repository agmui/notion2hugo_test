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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEWKE5B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrCUXn7zf9zXKmIcQkmoVCcey0oxw3whRPPPY%2Fhx0Y8AiBXaIlP8Aez%2Fxl8Do27zOHbs9HuH2xQYyNS2kOM8skuKCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEk0J%2Fc5cUoZuBFsKtwDATgxD6Q9CCNlrAs3F4y4CL25kFou9wlqTCXKQ7Y98W2za7yVRw6bMKfw0WRzyvqwtl%2F7eSCumPTGF3d30SDrt42VJHy1EB9%2FKQn6CFyLRz0qVl2jAC2zUw2qqnKV1KKkZEPrKVLkwBRvOagd7al3Ur%2F%2B8DlFZ6LIjOd0pfTC0SQ1NAgt%2FM5Uu7Ssd9GH6dXy5ChDpuG1nlZVDDZUof7YbZ2rHVjf03Lu%2Bqbsu8babQuILhaMeIKUzUadP5IPLoljR%2BxLaQ5StDkSduyJnMzxybi3bMikD1YWuYayx2RHwhMvVT9%2FrhFRxypZ0tEdnp84RGRArf4iY%2FDr1Kuo8DnZYKRCdkNz8t97xULqv4ZN9YL6yIZfooYGXyuV06E1Vgldat5%2FjwWDIyApvXPY7rgA36D20XqfiGn%2Bi6T4zM714%2Bwn4GCY2MMfSQ8KLEHH7ZNVUz7dW4mqL18%2B7DU7ha%2BzsGqPNJlt%2FWKuDPzvN40w9K56GACdv5BAu5ZzoiuvH6jtJ0Pll%2B7D8M%2FcMjQkX57e%2BYoSLezSjmCqocO1%2FrZgitJaYHG3gEYD4M1AtHPcUXLVJYosD3IUyInJ4geFAAKJJcEQ9eXtxBaBUD8aiw6Xk1%2FKECBeIPGssP6%2FwZAw9K7OvgY6pgEJeE9ZONfXorE6de8kRQHZ0KJDfAOEq7T5lmZoJZM9KsiSV3%2FakVAemJAUppUsVOt2Iz%2BjWq8NzfPlY3P544TCcC%2FVTHOq%2Bn6ArXTacNaQLzGSciBxsjkMMXbwWUu9Q%2F6Our0urkAlfsiBcqEdyZcL38nvUAAFSelnFEggY95yEZ4JwvcPjjxyrRt6p1c44GXexIuQO75Efvd4E52ZBxlzQum6ZX4s&X-Amz-Signature=601ffd30a49c2d8060d13a7455855c7ed49b4c04e17c30d1d0dbccef55e8c207&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEWKE5B%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrCUXn7zf9zXKmIcQkmoVCcey0oxw3whRPPPY%2Fhx0Y8AiBXaIlP8Aez%2Fxl8Do27zOHbs9HuH2xQYyNS2kOM8skuKCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEk0J%2Fc5cUoZuBFsKtwDATgxD6Q9CCNlrAs3F4y4CL25kFou9wlqTCXKQ7Y98W2za7yVRw6bMKfw0WRzyvqwtl%2F7eSCumPTGF3d30SDrt42VJHy1EB9%2FKQn6CFyLRz0qVl2jAC2zUw2qqnKV1KKkZEPrKVLkwBRvOagd7al3Ur%2F%2B8DlFZ6LIjOd0pfTC0SQ1NAgt%2FM5Uu7Ssd9GH6dXy5ChDpuG1nlZVDDZUof7YbZ2rHVjf03Lu%2Bqbsu8babQuILhaMeIKUzUadP5IPLoljR%2BxLaQ5StDkSduyJnMzxybi3bMikD1YWuYayx2RHwhMvVT9%2FrhFRxypZ0tEdnp84RGRArf4iY%2FDr1Kuo8DnZYKRCdkNz8t97xULqv4ZN9YL6yIZfooYGXyuV06E1Vgldat5%2FjwWDIyApvXPY7rgA36D20XqfiGn%2Bi6T4zM714%2Bwn4GCY2MMfSQ8KLEHH7ZNVUz7dW4mqL18%2B7DU7ha%2BzsGqPNJlt%2FWKuDPzvN40w9K56GACdv5BAu5ZzoiuvH6jtJ0Pll%2B7D8M%2FcMjQkX57e%2BYoSLezSjmCqocO1%2FrZgitJaYHG3gEYD4M1AtHPcUXLVJYosD3IUyInJ4geFAAKJJcEQ9eXtxBaBUD8aiw6Xk1%2FKECBeIPGssP6%2FwZAw9K7OvgY6pgEJeE9ZONfXorE6de8kRQHZ0KJDfAOEq7T5lmZoJZM9KsiSV3%2FakVAemJAUppUsVOt2Iz%2BjWq8NzfPlY3P544TCcC%2FVTHOq%2Bn6ArXTacNaQLzGSciBxsjkMMXbwWUu9Q%2F6Our0urkAlfsiBcqEdyZcL38nvUAAFSelnFEggY95yEZ4JwvcPjjxyrRt6p1c44GXexIuQO75Efvd4E52ZBxlzQum6ZX4s&X-Amz-Signature=96ef37ad136039073cbb18467752b30dc3ff3e7dccf2e8a3a7d43eae492cb1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
