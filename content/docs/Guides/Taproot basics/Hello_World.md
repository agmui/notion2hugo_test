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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42VXKPV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAwtafzYH8C9ZSkzT2K8JnLVr%2B0%2Fads8X3xmRt2UNb3CAiEArO%2F6lmNe7KXpkmGuqfl%2F9UX%2Bm3PWYxeLkxEj4ac5zdcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD698Lga9nIc%2Fu702yrcA12uL1qB5bZ%2FYvhn1eRg0tB6Bj8z%2BHE1%2FcTqgm2zOK1MLaheABpbZEvOs%2FqG9NaP%2FwiCzFlQGOHclDRS4yCt7BvdQjclwQx%2BeA5LliQGFpWTsw0oy8R7tHugEsw3Z5X%2FVqH7sOhtt7nbrRoMVy%2Bfi9uTPaee%2BA9V4L68rYfibgoLjN48wk%2BsTk%2BzYjVmUNsa7c3tkCZcp65yExgfSs5fF9nIM%2ByYrp24cZWFOxMHh%2B1m4ReKYuOU%2Bd%2BzS2fotcexXgyfiTtmFTuMFm7aHoenmkbEv2nglpvXYUP24U%2B5ZpL9UiN31tipEdDvuDh96qzwNgJkDP3CywbVPSjFTixcdT3n1AOgD1%2B4yYu2JLkOlhnGpmANCvLU4u14wBiSE%2FM%2FbnAK4VhNY47533ZgXaf%2BrXg22m8LDAq0tjaDUHR8NE9o49dQSArmxXuXOyqazYO0bbKW3bdOclY6hruOHfjK%2BLcgndxwL8Xuz9NyKiut0LRahs4%2F36eQNCDFcI%2BXSsb7EsS4tdONZc%2BDZ9f0YNG0Wml4gLcsE5uO58jkmz91SIaTKhj1NrK3n1KE5c2uUMjjyQ62xpu8uQ5XRbWXOg5d4BPv8choY%2BIJoNrvUnAzwE2KSZlktCQkcvRBmUKFMMno9b0GOqUBn3y7vay9Hfg0sBHvwMoaOAWUamX%2Fg3EfRdP0Eg5r%2B%2BjbCzxsrKYvVpECp%2BRo8uWQ4CsKLU%2BYjjlV2eeJ5F7Bi7NcT9soo8Ij87wxc0GjM5sOBY4i5%2Fu%2BNr2aVgpS0Ha2OSOePsmsq51IbD27Vdd4jbZyyc%2FgEtkzHq9ib2NTVWbJWrzYx8%2BsSEFXsynuiFTMrdyFEk1zH5SkBRHpzqHnwtleExSD&X-Amz-Signature=ee7e79604742e216b17b2b32799d3d343d5c0ea892764130771596bc3b8bcf06&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42VXKPV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAwtafzYH8C9ZSkzT2K8JnLVr%2B0%2Fads8X3xmRt2UNb3CAiEArO%2F6lmNe7KXpkmGuqfl%2F9UX%2Bm3PWYxeLkxEj4ac5zdcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD698Lga9nIc%2Fu702yrcA12uL1qB5bZ%2FYvhn1eRg0tB6Bj8z%2BHE1%2FcTqgm2zOK1MLaheABpbZEvOs%2FqG9NaP%2FwiCzFlQGOHclDRS4yCt7BvdQjclwQx%2BeA5LliQGFpWTsw0oy8R7tHugEsw3Z5X%2FVqH7sOhtt7nbrRoMVy%2Bfi9uTPaee%2BA9V4L68rYfibgoLjN48wk%2BsTk%2BzYjVmUNsa7c3tkCZcp65yExgfSs5fF9nIM%2ByYrp24cZWFOxMHh%2B1m4ReKYuOU%2Bd%2BzS2fotcexXgyfiTtmFTuMFm7aHoenmkbEv2nglpvXYUP24U%2B5ZpL9UiN31tipEdDvuDh96qzwNgJkDP3CywbVPSjFTixcdT3n1AOgD1%2B4yYu2JLkOlhnGpmANCvLU4u14wBiSE%2FM%2FbnAK4VhNY47533ZgXaf%2BrXg22m8LDAq0tjaDUHR8NE9o49dQSArmxXuXOyqazYO0bbKW3bdOclY6hruOHfjK%2BLcgndxwL8Xuz9NyKiut0LRahs4%2F36eQNCDFcI%2BXSsb7EsS4tdONZc%2BDZ9f0YNG0Wml4gLcsE5uO58jkmz91SIaTKhj1NrK3n1KE5c2uUMjjyQ62xpu8uQ5XRbWXOg5d4BPv8choY%2BIJoNrvUnAzwE2KSZlktCQkcvRBmUKFMMno9b0GOqUBn3y7vay9Hfg0sBHvwMoaOAWUamX%2Fg3EfRdP0Eg5r%2B%2BjbCzxsrKYvVpECp%2BRo8uWQ4CsKLU%2BYjjlV2eeJ5F7Bi7NcT9soo8Ij87wxc0GjM5sOBY4i5%2Fu%2BNr2aVgpS0Ha2OSOePsmsq51IbD27Vdd4jbZyyc%2FgEtkzHq9ib2NTVWbJWrzYx8%2BsSEFXsynuiFTMrdyFEk1zH5SkBRHpzqHnwtleExSD&X-Amz-Signature=c5940c6cd4786dd9a27d00f0c4a279d42ff937a47be39fb664302d1410da4145&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
