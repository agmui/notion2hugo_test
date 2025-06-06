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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKESFWFY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCTaT3TjV6MfTiAqGQiK%2BRdrQPjfBwHzDRDdB4ycDM4AIhALcMLCqnw7kv8Hcr6HZ0PxQw7aVVcUESvTT47ciGgIKKKv8DCGEQABoMNjM3NDIzMTgzODA1Igyz0uO7JztTxeWR%2BuIq3AP1PY27MuclVtVBbx5%2BcIUJXfrMSrzpgIQqup%2B3RV3XnTWXiMeK9SozXA8amugP%2BCp3fG7v0m%2FvnsNzyvUCVSF5zwvoqvqkA7wol7qfqizAIIEgy0OUkD8xYzRC4T%2BzdP5zrJqrOOyVDILUU0p%2FERz5EagGGB55nwEzVQLFI4YH%2F8qJxt1gPygxw3I4V76IeDftG4HQpKxSUM3v1Pw5lTNUnODM2msV4NZzTGgRqFU0ToqNwmtANWHpJOYbUplDvvkUcFOTcAqpVwySH7yL%2BzbnGcMTft0PqwxRA8e1LpWpYZwhqHs9GHW7vtlSiSOQWy2%2BUXTkXssP52yjQ9OV9pN%2F1iiv%2Fsqh8Qj3lNoTaeD%2BkSKskgx3HWL%2BWRQeguvCApK5cxXKZx9xOrKr8hoWV%2FITU9ixW1XspgVN%2FyUi3IhG%2FRZ%2FgZJZDbR4fHq1juHssNoWqA%2Bkmm%2FYi3p2uC7xaOLmYVvzvraJL55KdHqdIwh1F60NQngnv0el9XUXgLg32kDFje1cZ1sYBDPKOdBHvAxA1PB29riaQyHkZhFyJxL4ECeSuEwij51BaoATuy%2FTwo0GJCQPbUb92bBGlKUvOyLJ1dn5xRKFwWzyYO8KsgPQK0iiQF2Ei4i8zR8b7DDgoYzCBjqkAaRz1CXlKkVvVpLIkVMyIuLuzwDqNWVqdyuWU6cNfrMpi%2BySr2ez7KIO1JdVQgiw6Kz1TH8kGoeVhauXRMLGRhnS3MZkfT1myYssMEEqfQKE02oNvDubNQ34LZYIoSdkjoMuCqKt06x6fTOHa%2BL%2BVdPyQ7mwhsbxuUeekOMZP2GiJk4hFofA4cW7NBqgvuFTLwLBwJRZ5FWMIRx7njwbmEELYumV&X-Amz-Signature=867816eb94f38696d6b6384a03264effe77474a121bfb8919549c70972968223&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKESFWFY%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCTaT3TjV6MfTiAqGQiK%2BRdrQPjfBwHzDRDdB4ycDM4AIhALcMLCqnw7kv8Hcr6HZ0PxQw7aVVcUESvTT47ciGgIKKKv8DCGEQABoMNjM3NDIzMTgzODA1Igyz0uO7JztTxeWR%2BuIq3AP1PY27MuclVtVBbx5%2BcIUJXfrMSrzpgIQqup%2B3RV3XnTWXiMeK9SozXA8amugP%2BCp3fG7v0m%2FvnsNzyvUCVSF5zwvoqvqkA7wol7qfqizAIIEgy0OUkD8xYzRC4T%2BzdP5zrJqrOOyVDILUU0p%2FERz5EagGGB55nwEzVQLFI4YH%2F8qJxt1gPygxw3I4V76IeDftG4HQpKxSUM3v1Pw5lTNUnODM2msV4NZzTGgRqFU0ToqNwmtANWHpJOYbUplDvvkUcFOTcAqpVwySH7yL%2BzbnGcMTft0PqwxRA8e1LpWpYZwhqHs9GHW7vtlSiSOQWy2%2BUXTkXssP52yjQ9OV9pN%2F1iiv%2Fsqh8Qj3lNoTaeD%2BkSKskgx3HWL%2BWRQeguvCApK5cxXKZx9xOrKr8hoWV%2FITU9ixW1XspgVN%2FyUi3IhG%2FRZ%2FgZJZDbR4fHq1juHssNoWqA%2Bkmm%2FYi3p2uC7xaOLmYVvzvraJL55KdHqdIwh1F60NQngnv0el9XUXgLg32kDFje1cZ1sYBDPKOdBHvAxA1PB29riaQyHkZhFyJxL4ECeSuEwij51BaoATuy%2FTwo0GJCQPbUb92bBGlKUvOyLJ1dn5xRKFwWzyYO8KsgPQK0iiQF2Ei4i8zR8b7DDgoYzCBjqkAaRz1CXlKkVvVpLIkVMyIuLuzwDqNWVqdyuWU6cNfrMpi%2BySr2ez7KIO1JdVQgiw6Kz1TH8kGoeVhauXRMLGRhnS3MZkfT1myYssMEEqfQKE02oNvDubNQ34LZYIoSdkjoMuCqKt06x6fTOHa%2BL%2BVdPyQ7mwhsbxuUeekOMZP2GiJk4hFofA4cW7NBqgvuFTLwLBwJRZ5FWMIRx7njwbmEELYumV&X-Amz-Signature=edb727372c8b6b99b84b59c7ac8985e75fa5c57448f3d8f96636940dcb4de7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
