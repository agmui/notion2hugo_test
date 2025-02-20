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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UEBRRYN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjRkSGvsKuF0Ey86q2DWCjAm0Dw02hadwepI2pH38vwIgd8wbOx1WqkakTgKfk9ru99JG8g9AIQBCQocvj27HacsqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJB2X1Y65%2FhBgHGtFSrcA9Ti0K4mKKAMxmyzO%2FYuccv8VxjbfCWvw7FPfSEqrYJD5fbEQBFXk382UnHyh966Gn9n9%2BYTTfPAx0eY0qNTVRGh%2BMpsrDAEYXdt4vYWfTLalfInsbmTnJqPXqiDts5c0C%2Ft8UO8Qi0XrenN40w0CFDiHfKO%2Fzq5i7Uva04XCrEBqsPKvtEMNMmDOHelI5kxxYPvjFkkR42qGV8rtf1UiTU7pSgwDx4h550KQ3sc%2Bk%2FDbBKRjJDEp%2FfDjUlUohHG34nU4ekJVq6sWX1G5iPAKEffuHCq1XNafoLrGfXeqEt8kXXjfDneSdqyqYamxN3oAj9H8Hw%2BZSS0cFo9QqhInXTaAvL03g5I9KYeMjzISVhrYaN6AAsBE3C9EVTI8jIeelYlH5Jj2P3GDROrRZ6PsLTHoB72%2B4oCAoGcZ8We3QFrSLJ80KeJ8kgK1iu%2BTr5OVH%2FfJJwPlQ1FQjm%2FAnxmRJx6yJPmzu6mFXtk4OvFwLgFinBZeqcR6EME%2BNIoKAK%2F30ReAXn1hU%2FZJ99M2mH%2FhOQYbch6e618sCoXWNgel8Qy3iyLzkaTFuUkIcflyAYK8pVrKnWWTGjcyvogwY9pcoY05fkdC3zw2QsMER%2Ba2LOtKQwYquHpILysCPe4MOXK3L0GOqUBLrE6SHPyjTDYYP80ChsFn6nCzyJSRUBgJUzMn8MoHV1SYE2Xmc3a9B7KfNrRij%2BC99kJYYuxFM8v97DOVSnFstnOr1Xoqe6REIDPHOWCsil%2FDrZXGuIevXe4b67H0%2BlCuQXlVbJYmznEFt%2FbYgZ4PzVYX6Ji7lEpI0jiL6OTSrdU8gItki81tE%2BjdycLLkaUHd%2Bk37gOkwj73YM6J5JdALAE1bYv&X-Amz-Signature=80043ad2ecf05ae4ee444ca3b7fd59bd2fbd040a01ef737a1b93ff7c3b7df45d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UEBRRYN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjRkSGvsKuF0Ey86q2DWCjAm0Dw02hadwepI2pH38vwIgd8wbOx1WqkakTgKfk9ru99JG8g9AIQBCQocvj27HacsqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJB2X1Y65%2FhBgHGtFSrcA9Ti0K4mKKAMxmyzO%2FYuccv8VxjbfCWvw7FPfSEqrYJD5fbEQBFXk382UnHyh966Gn9n9%2BYTTfPAx0eY0qNTVRGh%2BMpsrDAEYXdt4vYWfTLalfInsbmTnJqPXqiDts5c0C%2Ft8UO8Qi0XrenN40w0CFDiHfKO%2Fzq5i7Uva04XCrEBqsPKvtEMNMmDOHelI5kxxYPvjFkkR42qGV8rtf1UiTU7pSgwDx4h550KQ3sc%2Bk%2FDbBKRjJDEp%2FfDjUlUohHG34nU4ekJVq6sWX1G5iPAKEffuHCq1XNafoLrGfXeqEt8kXXjfDneSdqyqYamxN3oAj9H8Hw%2BZSS0cFo9QqhInXTaAvL03g5I9KYeMjzISVhrYaN6AAsBE3C9EVTI8jIeelYlH5Jj2P3GDROrRZ6PsLTHoB72%2B4oCAoGcZ8We3QFrSLJ80KeJ8kgK1iu%2BTr5OVH%2FfJJwPlQ1FQjm%2FAnxmRJx6yJPmzu6mFXtk4OvFwLgFinBZeqcR6EME%2BNIoKAK%2F30ReAXn1hU%2FZJ99M2mH%2FhOQYbch6e618sCoXWNgel8Qy3iyLzkaTFuUkIcflyAYK8pVrKnWWTGjcyvogwY9pcoY05fkdC3zw2QsMER%2Ba2LOtKQwYquHpILysCPe4MOXK3L0GOqUBLrE6SHPyjTDYYP80ChsFn6nCzyJSRUBgJUzMn8MoHV1SYE2Xmc3a9B7KfNrRij%2BC99kJYYuxFM8v97DOVSnFstnOr1Xoqe6REIDPHOWCsil%2FDrZXGuIevXe4b67H0%2BlCuQXlVbJYmznEFt%2FbYgZ4PzVYX6Ji7lEpI0jiL6OTSrdU8gItki81tE%2BjdycLLkaUHd%2Bk37gOkwj73YM6J5JdALAE1bYv&X-Amz-Signature=4a7b57b4879a9451dde1bf065a3cd256fe713c06d2d2f972fa63d4deff36c437&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
