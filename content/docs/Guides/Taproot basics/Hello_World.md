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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJHKR2W%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFNZJpK3uvkULcziLAUrZWvDO0gj2b8GKflkOeCpkCQwIhAO%2FEC1%2BovohLmUXaNPLjP9teQBQ4w9WTmPUSN34JJe6IKv8DCGgQABoMNjM3NDIzMTgzODA1IgxwKHnzMIQKPPP%2BUWkq3ANdfBOt6A4KqxWee68xFpnph3ffGYop4IvMgvdlSzJ4l6c%2BkSHuu%2FiDkXOEAov0%2FQaJ1aO4M7uZaZcUzzEmUDr8lX2Ckq8lMReEnYM1yMZLUaEIwi5Fky6OlH8dl1KviPI%2F8cxM3HSCdb6lxGqCxOJvhluU18C5CuAapSUB0jeURQaHAUit0Bd4EYMQWtDvCoSyCbXvD0vjTJik0gSWDD7jIcrSZ%2BvYlq47slxkqowFiXS4i%2Fltu7a012nivc9sCRhWDjD7WZC4QxIEmW51IPaR%2BMwh6HiGpfLNvMrwo%2BpsmJuZMktvhZBYG0xDM4CJZ1BkbkRc1%2FeIb07wVPaypZ%2BNV0AioR%2BXbS9B9HS58lKzGJw%2BKrjLW4D%2FOczJM2pVMF1PpbA5ORBNdoicCxaup7yOTagiSFbiKFpUc5Raz8%2FwuLd1ONFVZR951rV2%2BsvYc8WUigZ4lJ%2BpVv1vzdvFYpXv8X3xP6YCiCVTPwnfSFgtvxZDlSzVobmwaV1dcp%2FHVnOE31kIknqfE6f4Xaf2v6bUG3OhGQV%2FNlkvCD1NiTReE0%2F8%2Bge13PoBF63m5xqZgFXnE5AXg7IlSZBQIU%2FRiI3rUBUQKjNoaX66ZBsZpSoFqOqDFxHYTuxN9H1k7TCkh4bABjqkAa038OsJdVaNYsifiuaaMkkcEUcu8Q7wSPK8SCf8LnirmMgouv9Asm0L279X%2B5ynyt1dWha2s3BS7xATv%2Fbq0WjGazEZhHRG5SgZT4oiEzq8JItkjD%2FQA%2FXgRDfS1S90TwYkUgIQZtcevgkk8ZxUQ8Veu5ltxynn5oERajbI5RzH6SD4Ah42v9vivN70UmsZ63ge2daPKHW44mhgoKiPYWwbTL0C&X-Amz-Signature=601d57c1cacf4b0d9e2fd06efdcd80ca5b8d6d416ad796cc56e1e0d48a7b6ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJHKR2W%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFNZJpK3uvkULcziLAUrZWvDO0gj2b8GKflkOeCpkCQwIhAO%2FEC1%2BovohLmUXaNPLjP9teQBQ4w9WTmPUSN34JJe6IKv8DCGgQABoMNjM3NDIzMTgzODA1IgxwKHnzMIQKPPP%2BUWkq3ANdfBOt6A4KqxWee68xFpnph3ffGYop4IvMgvdlSzJ4l6c%2BkSHuu%2FiDkXOEAov0%2FQaJ1aO4M7uZaZcUzzEmUDr8lX2Ckq8lMReEnYM1yMZLUaEIwi5Fky6OlH8dl1KviPI%2F8cxM3HSCdb6lxGqCxOJvhluU18C5CuAapSUB0jeURQaHAUit0Bd4EYMQWtDvCoSyCbXvD0vjTJik0gSWDD7jIcrSZ%2BvYlq47slxkqowFiXS4i%2Fltu7a012nivc9sCRhWDjD7WZC4QxIEmW51IPaR%2BMwh6HiGpfLNvMrwo%2BpsmJuZMktvhZBYG0xDM4CJZ1BkbkRc1%2FeIb07wVPaypZ%2BNV0AioR%2BXbS9B9HS58lKzGJw%2BKrjLW4D%2FOczJM2pVMF1PpbA5ORBNdoicCxaup7yOTagiSFbiKFpUc5Raz8%2FwuLd1ONFVZR951rV2%2BsvYc8WUigZ4lJ%2BpVv1vzdvFYpXv8X3xP6YCiCVTPwnfSFgtvxZDlSzVobmwaV1dcp%2FHVnOE31kIknqfE6f4Xaf2v6bUG3OhGQV%2FNlkvCD1NiTReE0%2F8%2Bge13PoBF63m5xqZgFXnE5AXg7IlSZBQIU%2FRiI3rUBUQKjNoaX66ZBsZpSoFqOqDFxHYTuxN9H1k7TCkh4bABjqkAa038OsJdVaNYsifiuaaMkkcEUcu8Q7wSPK8SCf8LnirmMgouv9Asm0L279X%2B5ynyt1dWha2s3BS7xATv%2Fbq0WjGazEZhHRG5SgZT4oiEzq8JItkjD%2FQA%2FXgRDfS1S90TwYkUgIQZtcevgkk8ZxUQ8Veu5ltxynn5oERajbI5RzH6SD4Ah42v9vivN70UmsZ63ge2daPKHW44mhgoKiPYWwbTL0C&X-Amz-Signature=7657d02cee0d39059a750c311ccf0d40e2b71ce767b611fafde7cd32258204d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
