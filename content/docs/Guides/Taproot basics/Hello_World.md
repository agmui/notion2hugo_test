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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3K5DDFN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDDLMG9KyVpS2w%2B15HMgSX%2B19xKfn7dls9AP0n4GjWVIQIgR9sOUhWJHk7a2EdFNup3A%2FQdDYaLwxAjdfIGyrJUcHwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2E%2Fg7Z8wZJOehKJircA76z29WfmJfgpxrt1xPBCinHwZlpasNtVf57uGotedvhBnugYHO6gRhSSxDfJ1fC%2FqddKz2Z1JdFs5YxMWod7b7WQlsIxmHvV1WvyZuKx6dNr6PjYBcbBkbA4tLu7DFQrhX8GWp%2FKOPfOqn9OWKBHY75u3WZetKuNzmWHzo1lA7o%2F2dbeQ1Hwpi8eXxHG7UF7mJTvSHPO8WxzoX0nurAPVgPIBxlQ8DsQvqxbUoLEtIo1EWQnDSr%2F%2F87VAYWllqgntXrcQpdaRbP5OdATKpu0EsgaaTjfFtJqPRkILp%2FC0QTqYGvvEftZeVdtz5VI9LF1wMNR89XsFwCOMhivjveRghLPVX%2BjQNTCgf5sCqVWRXACzU0rJYex6ZZJUxJA6aXiHUUYHxF8omBM8SYesex4gg16XzajocrVzyOdhoKcJmdkIyFw%2FmMUvfNe%2BiEYLB9Js3dmglRd7kF%2BIt1GQ%2FhoTIKZPkcOaOCBe64xGetB4QvlYNM7Im5XorHum5%2FLy052EhQXxDRaKu%2BkTQjx20patn00Y5qKJhsHtD6msajzw7LKy%2F4ilugApp1eBNB2AfZ1pCV7vsKR3zAGfL34vodWdVTzVzmRpSX6NM8YU9PpEk4%2BM%2FUyteXSFGDzyj2MMuWzb0GOqUBFzUdah02w2q9MHzZGPILcdT7wN3wKE9phCnvRrbOTvACmqAWHfcnT3yxbhAzDpvIA4gZkXRVqMGXNdVFML74PCanbQWBN8Fl3SUPdTs8iq2uOM3WhZ3nlD89DDWpF5%2B2XHBpNCL9rvB349gJQThJ8pdIFSK0V4SesJoD67bTYGpTBiX5EewlGfRePMcWNe7QWYWxv0WRRxXRh45x79P0cmRNINX5&X-Amz-Signature=27054aeda8cb21f96d2747514332834514bb06eb3506cf22da5b4f9d23621de1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3K5DDFN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDDLMG9KyVpS2w%2B15HMgSX%2B19xKfn7dls9AP0n4GjWVIQIgR9sOUhWJHk7a2EdFNup3A%2FQdDYaLwxAjdfIGyrJUcHwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2E%2Fg7Z8wZJOehKJircA76z29WfmJfgpxrt1xPBCinHwZlpasNtVf57uGotedvhBnugYHO6gRhSSxDfJ1fC%2FqddKz2Z1JdFs5YxMWod7b7WQlsIxmHvV1WvyZuKx6dNr6PjYBcbBkbA4tLu7DFQrhX8GWp%2FKOPfOqn9OWKBHY75u3WZetKuNzmWHzo1lA7o%2F2dbeQ1Hwpi8eXxHG7UF7mJTvSHPO8WxzoX0nurAPVgPIBxlQ8DsQvqxbUoLEtIo1EWQnDSr%2F%2F87VAYWllqgntXrcQpdaRbP5OdATKpu0EsgaaTjfFtJqPRkILp%2FC0QTqYGvvEftZeVdtz5VI9LF1wMNR89XsFwCOMhivjveRghLPVX%2BjQNTCgf5sCqVWRXACzU0rJYex6ZZJUxJA6aXiHUUYHxF8omBM8SYesex4gg16XzajocrVzyOdhoKcJmdkIyFw%2FmMUvfNe%2BiEYLB9Js3dmglRd7kF%2BIt1GQ%2FhoTIKZPkcOaOCBe64xGetB4QvlYNM7Im5XorHum5%2FLy052EhQXxDRaKu%2BkTQjx20patn00Y5qKJhsHtD6msajzw7LKy%2F4ilugApp1eBNB2AfZ1pCV7vsKR3zAGfL34vodWdVTzVzmRpSX6NM8YU9PpEk4%2BM%2FUyteXSFGDzyj2MMuWzb0GOqUBFzUdah02w2q9MHzZGPILcdT7wN3wKE9phCnvRrbOTvACmqAWHfcnT3yxbhAzDpvIA4gZkXRVqMGXNdVFML74PCanbQWBN8Fl3SUPdTs8iq2uOM3WhZ3nlD89DDWpF5%2B2XHBpNCL9rvB349gJQThJ8pdIFSK0V4SesJoD67bTYGpTBiX5EewlGfRePMcWNe7QWYWxv0WRRxXRh45x79P0cmRNINX5&X-Amz-Signature=135fec2b5664acaff8ae56139cc492dff81ce578b806e7c27560cadbacba651c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
