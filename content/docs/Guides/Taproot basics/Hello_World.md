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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOJHLRT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYdD8O%2BVoA0I%2BBG9PSvpQOzB5zeTjhBqcdVg3AGzanawIgAJ39%2B92qqwKMPUanNQlcoYYcCiZrICHfORm%2Buicz8Pcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCjWkBzeLF%2FbZXc7%2ByrcA9rw5dbDkhYSILHc5Fh9VCBZipABkAnPXG8cQjai%2BJX91URIFbU%2BKIRVWH4yvytHO1G%2BhA4RY2AONo2VMdB%2F5BBH%2F2NNtFNsUeVtKZU8Wr3IXwqGYSIP7s6wlG3nnGjTI%2BSZK3VWQlX1aTxXY5T2U%2FzpQ2hi0X55%2FV%2F9Eypox7PX9aJMsDR0gEpozTkAdqv3uzUpnomY8E9IcyB8Vrc4ThtFTX3XROjjV%2BrRnHUNcdiod1%2B2ZbG%2BD2iimK2XeH42oFaLL3qeOMTYFcjwckvQkZjULAfa9IH2hhrlUTVjomVD3UlwQW4b3oaNj4U5zaUHPOvoS81Qr%2BFqxQEIDjVxeU%2FBZZJdtWFuGplVDNxvDIDM%2Bt8ZjYTP7uUeIXQTivZlSLM1%2BvjAnyHKRZlJbrovpagKP4SQ%2BBhyscZ%2F92Hiz%2Fm6Y4bh7jUHQBdiuI6JqpUpTg50JQGQebfcYV5HxoTzjUJ4rV1dUU3VCxEm9eAqQL1OmW2ZTOMHCtqZneVqfsduYqXN70JR5o3fBoqJt7Pn8g9UjLBZzh7aiOR8znrcUrePrDZRgcY56FdqwbN%2Fc3xv3Yyoidg3rZFvqkq1sQgmccekAW6W2FGXeER4R07j1JJnxLB2CTA2lOFMzdDzMJP6j8IGOqUBB5DHj%2Bzhy96H8eEnsccjPpLL4thihviecs68w4vTsYEeQWZ2RZXkDhCS%2BTsY6HGWI5IeBax5oplSd%2FR4xY%2Byy4JrHNvHnlMt1zXRCBclXffUT1g7TYBHouy%2Fx5EiVRua%2BzPvo8YlEaleCZaOjO%2BnD7h2COFYzcUAilJoMawtEyjEfzsIuF5Hz%2B5gxf%2Bm0XiqyOYcaO3LzP21ZUNqX%2FLiEEHZmp1z&X-Amz-Signature=6f59ebe2281def9d11881954b5a75ab0be843385df78e012fef394b48182584f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOJHLRT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYdD8O%2BVoA0I%2BBG9PSvpQOzB5zeTjhBqcdVg3AGzanawIgAJ39%2B92qqwKMPUanNQlcoYYcCiZrICHfORm%2Buicz8Pcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCjWkBzeLF%2FbZXc7%2ByrcA9rw5dbDkhYSILHc5Fh9VCBZipABkAnPXG8cQjai%2BJX91URIFbU%2BKIRVWH4yvytHO1G%2BhA4RY2AONo2VMdB%2F5BBH%2F2NNtFNsUeVtKZU8Wr3IXwqGYSIP7s6wlG3nnGjTI%2BSZK3VWQlX1aTxXY5T2U%2FzpQ2hi0X55%2FV%2F9Eypox7PX9aJMsDR0gEpozTkAdqv3uzUpnomY8E9IcyB8Vrc4ThtFTX3XROjjV%2BrRnHUNcdiod1%2B2ZbG%2BD2iimK2XeH42oFaLL3qeOMTYFcjwckvQkZjULAfa9IH2hhrlUTVjomVD3UlwQW4b3oaNj4U5zaUHPOvoS81Qr%2BFqxQEIDjVxeU%2FBZZJdtWFuGplVDNxvDIDM%2Bt8ZjYTP7uUeIXQTivZlSLM1%2BvjAnyHKRZlJbrovpagKP4SQ%2BBhyscZ%2F92Hiz%2Fm6Y4bh7jUHQBdiuI6JqpUpTg50JQGQebfcYV5HxoTzjUJ4rV1dUU3VCxEm9eAqQL1OmW2ZTOMHCtqZneVqfsduYqXN70JR5o3fBoqJt7Pn8g9UjLBZzh7aiOR8znrcUrePrDZRgcY56FdqwbN%2Fc3xv3Yyoidg3rZFvqkq1sQgmccekAW6W2FGXeER4R07j1JJnxLB2CTA2lOFMzdDzMJP6j8IGOqUBB5DHj%2Bzhy96H8eEnsccjPpLL4thihviecs68w4vTsYEeQWZ2RZXkDhCS%2BTsY6HGWI5IeBax5oplSd%2FR4xY%2Byy4JrHNvHnlMt1zXRCBclXffUT1g7TYBHouy%2Fx5EiVRua%2BzPvo8YlEaleCZaOjO%2BnD7h2COFYzcUAilJoMawtEyjEfzsIuF5Hz%2B5gxf%2Bm0XiqyOYcaO3LzP21ZUNqX%2FLiEEHZmp1z&X-Amz-Signature=f0c0d79368ef30c666a2a4d51a61655abaf8106963535045936ca079c54bd65b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
