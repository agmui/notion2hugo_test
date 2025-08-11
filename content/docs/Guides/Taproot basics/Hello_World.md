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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XAV7RG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBicpVmjYi4GJh7gbTd4jFcuEfGyo9luds1zx7yolikfAiBRduJlQ8Ch%2BiElatSGSkC6u7jODZj3W8H3JOm9yDwAuyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCrTpKcB3782qcUN%2BKtwDPxzzpFNW%2FWLq%2FsyCUBmqQt2RPWpWBWLOhy920SjXy7qVFlL%2BpUo7iFHHJw0u9AhVPhG76ecJFVC9ODJtqIHSPMvtvRd6SXV5aOIGXjFD1qiZ51beMuE1GMZ6eboah0Ck8OuHsGQI3%2FcPhfsOATCnPeKrewbZoEH59y%2BzQ4bAFPj4Lez3VIDQG1nAGs63%2F3SzZ4Uy1Bhs5%2Fxuv6boNLk%2FDc%2FyMLIZeJGrWlUMBCxoE3CIpqXLgiX7qdoC6%2BFksMpTVTLxLHj54TZ0ukhYN0qas8F2BEELbauKvSWIfu2B2%2ByWsADlUq5cWEKIItSc2da82ERSJnj%2B1M49PpxpWZvPBj2cF5hHtx9whIZyl71zePDIjfQCyfsm0HOfsYle99Ey9a7uXxfMvR11tL93KhusvUemS8IJqkdCU6tjod%2FOtgJLSnG6TGGHCnACHT8HyNMDWVO%2Bw7iLEcjR8lIN2sj1OUxsN9YBA%2F4ZDT1z7BFuLV04jKFEYdeOnQJ09J8PVn%2Fn4T%2BfNbhp%2B6JR0vloDE3lcisNGCdvh7zJkQ04Vnj9b4miWJwsLyWdr0LyldKwTQluc1n7rlvZ9fkY23SIMVtzDD7B%2BEfF6cYgEhnsoc8%2FgqmsSaa6fJKXahY9uTww5vflxAY6pgHcQbAyrM2I5bZ32VRaX2TTUN9ZyDR8dRkiggDtRWEoUn6EryUnCWGt2%2BKVa3sW6M0pum9y%2F6dN85XyV495CNlUd7XhefKr0YigYo2nBHxDfp%2B3fEcebdPeZMyr0GxkhpDoo4w8%2FLLA0%2BkXN5hv%2Bcj6uqEnkFGbQ%2B9I18%2B2%2BVjlOkGGfJh5xJQMia8oHhHpzFFLaWRa4a1FDHd14dwrmcTg0dLRHtW5&X-Amz-Signature=39a721a63441c141d18c7fe440010031e12b9829056768b539fcfa3ebd4d0ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XAV7RG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBicpVmjYi4GJh7gbTd4jFcuEfGyo9luds1zx7yolikfAiBRduJlQ8Ch%2BiElatSGSkC6u7jODZj3W8H3JOm9yDwAuyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCrTpKcB3782qcUN%2BKtwDPxzzpFNW%2FWLq%2FsyCUBmqQt2RPWpWBWLOhy920SjXy7qVFlL%2BpUo7iFHHJw0u9AhVPhG76ecJFVC9ODJtqIHSPMvtvRd6SXV5aOIGXjFD1qiZ51beMuE1GMZ6eboah0Ck8OuHsGQI3%2FcPhfsOATCnPeKrewbZoEH59y%2BzQ4bAFPj4Lez3VIDQG1nAGs63%2F3SzZ4Uy1Bhs5%2Fxuv6boNLk%2FDc%2FyMLIZeJGrWlUMBCxoE3CIpqXLgiX7qdoC6%2BFksMpTVTLxLHj54TZ0ukhYN0qas8F2BEELbauKvSWIfu2B2%2ByWsADlUq5cWEKIItSc2da82ERSJnj%2B1M49PpxpWZvPBj2cF5hHtx9whIZyl71zePDIjfQCyfsm0HOfsYle99Ey9a7uXxfMvR11tL93KhusvUemS8IJqkdCU6tjod%2FOtgJLSnG6TGGHCnACHT8HyNMDWVO%2Bw7iLEcjR8lIN2sj1OUxsN9YBA%2F4ZDT1z7BFuLV04jKFEYdeOnQJ09J8PVn%2Fn4T%2BfNbhp%2B6JR0vloDE3lcisNGCdvh7zJkQ04Vnj9b4miWJwsLyWdr0LyldKwTQluc1n7rlvZ9fkY23SIMVtzDD7B%2BEfF6cYgEhnsoc8%2FgqmsSaa6fJKXahY9uTww5vflxAY6pgHcQbAyrM2I5bZ32VRaX2TTUN9ZyDR8dRkiggDtRWEoUn6EryUnCWGt2%2BKVa3sW6M0pum9y%2F6dN85XyV495CNlUd7XhefKr0YigYo2nBHxDfp%2B3fEcebdPeZMyr0GxkhpDoo4w8%2FLLA0%2BkXN5hv%2Bcj6uqEnkFGbQ%2B9I18%2B2%2BVjlOkGGfJh5xJQMia8oHhHpzFFLaWRa4a1FDHd14dwrmcTg0dLRHtW5&X-Amz-Signature=9a7bbc340a09688d42ea3a80020da50f5f3ec94522cc5931c9ac5618d6f49d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
