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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DFSXAN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP6ORmBIjtj%2BhmADCszwy%2FYmrAw30BUSRBxjXxY3l3UAiEA9EaVl6W0bQY3hqGjdjdUzZU80XXU%2BxoGwuzqSPu1l2IqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBO9aWnF7Q7L24NnircA4IJ8ZsCq%2FsV%2FKQvyVno%2FcL7VNcPPrMbhG1Mvzve9ZYpUxUsfZO90PhHOnnEcmqVn28VwM%2BrVEEAWcGjefkYyzAeKiF5htv8LHIdMHIK6QbcZCfFxA%2FvpqkG%2BQ7r7mFsr8UaLEYXje8n92LUYoOprf1cBmgUNdFkx9S8IAnlBKLhXG%2BG8qvv1kEgo2%2BM%2B9Ri9lCYGVkODb%2FNRw4ZjlAMHCbLBEDho8YdAxMA3KEEglDYGJel9iaXb99NTU3RuTh322rVdinPnpfM7DbuxlO7F7W9FhYKzhhOka397UUklElZQFx06GH7YfG73nEY2ojnguACcCxKr1OkDRcLa%2FVkB06tlhxT4z0pBwEG4DPkk9lhiiviAzn2ZwQ2SUCAPf%2B6Cu7C5cOeAElxBV6OEp%2FR%2BbYzKV%2B4SGOltt66sODN67D2FDOdGnu6yxn%2Bajjg27OYMIeRJIyxu1n9a6uvj9DyRk2MBeHzb1mdWabMJGndfVkmFcSuk%2FJnDPMNJgfoR%2FwJQm6buWuOyJYGqXuF3D8MbFtITjCmoCEtoXeuvs9Hj67Ky%2FzsfLaiSCDmSAMzCCKMk6NEiuUKGD0X9Y9hEHhLPn0FTOCZTn6XcLYPKxQQGhyPGnD1xhDCMXTDD1lxMIXZpr0GOqUBqkGyvB0%2FCWFKy%2FXk2htiBre56pIvYPBtLCNEQt4kS5Ybi0%2F83k8NVnTA675Ha1DC%2Bt4wilQ0UEyuHIwZ3HvHE51FgD6K2wFRvYKlXXorhrWEPvMNfnOlzUm1iOdYkBcdEP%2Bw6LRy7XBMryS1wRv%2Bw9gSYkPHbbW1yFLDQtGjTuCSljrX5uGX99CKFZ%2FFE70bL0dtOe8NjIbXysBt10uIN6JimytI&X-Amz-Signature=5df376817142b2c7e7675dd63f081caa386094bb28ed775ccab4ac79c119066a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DFSXAN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP6ORmBIjtj%2BhmADCszwy%2FYmrAw30BUSRBxjXxY3l3UAiEA9EaVl6W0bQY3hqGjdjdUzZU80XXU%2BxoGwuzqSPu1l2IqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBO9aWnF7Q7L24NnircA4IJ8ZsCq%2FsV%2FKQvyVno%2FcL7VNcPPrMbhG1Mvzve9ZYpUxUsfZO90PhHOnnEcmqVn28VwM%2BrVEEAWcGjefkYyzAeKiF5htv8LHIdMHIK6QbcZCfFxA%2FvpqkG%2BQ7r7mFsr8UaLEYXje8n92LUYoOprf1cBmgUNdFkx9S8IAnlBKLhXG%2BG8qvv1kEgo2%2BM%2B9Ri9lCYGVkODb%2FNRw4ZjlAMHCbLBEDho8YdAxMA3KEEglDYGJel9iaXb99NTU3RuTh322rVdinPnpfM7DbuxlO7F7W9FhYKzhhOka397UUklElZQFx06GH7YfG73nEY2ojnguACcCxKr1OkDRcLa%2FVkB06tlhxT4z0pBwEG4DPkk9lhiiviAzn2ZwQ2SUCAPf%2B6Cu7C5cOeAElxBV6OEp%2FR%2BbYzKV%2B4SGOltt66sODN67D2FDOdGnu6yxn%2Bajjg27OYMIeRJIyxu1n9a6uvj9DyRk2MBeHzb1mdWabMJGndfVkmFcSuk%2FJnDPMNJgfoR%2FwJQm6buWuOyJYGqXuF3D8MbFtITjCmoCEtoXeuvs9Hj67Ky%2FzsfLaiSCDmSAMzCCKMk6NEiuUKGD0X9Y9hEHhLPn0FTOCZTn6XcLYPKxQQGhyPGnD1xhDCMXTDD1lxMIXZpr0GOqUBqkGyvB0%2FCWFKy%2FXk2htiBre56pIvYPBtLCNEQt4kS5Ybi0%2F83k8NVnTA675Ha1DC%2Bt4wilQ0UEyuHIwZ3HvHE51FgD6K2wFRvYKlXXorhrWEPvMNfnOlzUm1iOdYkBcdEP%2Bw6LRy7XBMryS1wRv%2Bw9gSYkPHbbW1yFLDQtGjTuCSljrX5uGX99CKFZ%2FFE70bL0dtOe8NjIbXysBt10uIN6JimytI&X-Amz-Signature=f05c183af0d7116c353b597b681d437af78ca5a55fc239e5f40c190a632990c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
