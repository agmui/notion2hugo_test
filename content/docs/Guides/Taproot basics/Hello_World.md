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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PR4APZD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcLaCGdnCz%2FD50bas0HEdmJljm%2B3UXTRcJd1hD7gobAIhAKsWjE0xFbCZFgW95XO6IoSwcVupPLnSvjz3D2LICpJ8KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR6Y0gYIghefTZymAq3AOXXNG%2BjE368yPDeuuovwtYY9issuzug8q84Aq0z2xYDgGsARk4QrkQV3BQtjJ9cAP7Ld9tcu2pmSjA78JGX38sPe2UgnRe%2Bplne0ctHd6iSYujmH3aVdnjyCmZuTku%2BtUhUQOQZ%2B82ltX19T59gMqK%2Bby7O2el7gWebh%2BU8n%2BOUL6619CKV5hCtnjvAD%2FYCrVPVYSs1L7BjMqWZjxjriTvHPvPwZBIYSQ%2BgIBrwxHt7qLSrOqFpFZHSqjO%2BgFIWDnTXI8A8%2F%2FSPczXQyMCQBzFPunaWf6xDA%2Bsu0gDr2XqQqJ7YU1FXI%2BQd8O0iv8657VznwFoIBa4BQzy8mCeGQIojLNuR4Yy%2BMV%2BpABqXTPtrKhQ5iq4%2Bysjjw9aVRJzECO9HE6gNOfmorsL7XHvD7LX5NG1RHIzGvbugt92%2Fw9QzByjjlcp04vko1x%2Fnw2rUs98zATRKQGfSKyOPzTaZdkhwBzrJxGA8n%2FJJ3se%2B43lJRRufL8PDPnqZCUckP%2FTicXBzMZZCH%2BjgHtQ21zRRXJBlh2xf30QSu3vtS%2F48rl6vafaf3aG%2Bm4OAJPa9IlzlrsHwUUVUiG%2FFpq%2FZnknTtME6xAoCZBmApJC%2BT%2B1gdQQ9%2BOUBCJleeNMzrDZSzD%2FvKi9BjqkAQS9ex3hI6wl5jMukRGevYdUaUzEtixjt%2BvSIuNqE%2FjRBQq0ZIC2S7XkDfhtGPb%2FoZ1XMDV%2BYgdAgJ%2FI%2BRkZEs5k3aalXQxkUkDlcRzYhjx4uMI%2FU1KRWkgf%2FyLUk%2F4Z0pOb1s5Y%2B7%2FfMk%2B6xIbfp67HnfUS9m9oPuHf432GX%2FUsY1c5Be9yLLoJ3WOyKY4uKp8Rttt98qW9sONgw7iTbKS13VlF&X-Amz-Signature=3995cd2f9ddf1a778334b6252f804c4afdcd6a30d2acc9762515c6b50f3caf4a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PR4APZD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcLaCGdnCz%2FD50bas0HEdmJljm%2B3UXTRcJd1hD7gobAIhAKsWjE0xFbCZFgW95XO6IoSwcVupPLnSvjz3D2LICpJ8KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR6Y0gYIghefTZymAq3AOXXNG%2BjE368yPDeuuovwtYY9issuzug8q84Aq0z2xYDgGsARk4QrkQV3BQtjJ9cAP7Ld9tcu2pmSjA78JGX38sPe2UgnRe%2Bplne0ctHd6iSYujmH3aVdnjyCmZuTku%2BtUhUQOQZ%2B82ltX19T59gMqK%2Bby7O2el7gWebh%2BU8n%2BOUL6619CKV5hCtnjvAD%2FYCrVPVYSs1L7BjMqWZjxjriTvHPvPwZBIYSQ%2BgIBrwxHt7qLSrOqFpFZHSqjO%2BgFIWDnTXI8A8%2F%2FSPczXQyMCQBzFPunaWf6xDA%2Bsu0gDr2XqQqJ7YU1FXI%2BQd8O0iv8657VznwFoIBa4BQzy8mCeGQIojLNuR4Yy%2BMV%2BpABqXTPtrKhQ5iq4%2Bysjjw9aVRJzECO9HE6gNOfmorsL7XHvD7LX5NG1RHIzGvbugt92%2Fw9QzByjjlcp04vko1x%2Fnw2rUs98zATRKQGfSKyOPzTaZdkhwBzrJxGA8n%2FJJ3se%2B43lJRRufL8PDPnqZCUckP%2FTicXBzMZZCH%2BjgHtQ21zRRXJBlh2xf30QSu3vtS%2F48rl6vafaf3aG%2Bm4OAJPa9IlzlrsHwUUVUiG%2FFpq%2FZnknTtME6xAoCZBmApJC%2BT%2B1gdQQ9%2BOUBCJleeNMzrDZSzD%2FvKi9BjqkAQS9ex3hI6wl5jMukRGevYdUaUzEtixjt%2BvSIuNqE%2FjRBQq0ZIC2S7XkDfhtGPb%2FoZ1XMDV%2BYgdAgJ%2FI%2BRkZEs5k3aalXQxkUkDlcRzYhjx4uMI%2FU1KRWkgf%2FyLUk%2F4Z0pOb1s5Y%2B7%2FfMk%2B6xIbfp67HnfUS9m9oPuHf432GX%2FUsY1c5Be9yLLoJ3WOyKY4uKp8Rttt98qW9sONgw7iTbKS13VlF&X-Amz-Signature=177f08c5afda09761a58c0b8e96a0970f4447b6f5c2d78b99a62c450ab201409&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
