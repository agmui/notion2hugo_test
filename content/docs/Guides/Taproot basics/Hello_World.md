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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRL5JKPU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuMKVSNHvh1WJRN%2FOaHRdUa85TBJMoz%2Fhuq04u463o1gIgGQ05jDf4kDFWiBZq1GU91lw51ysTOS05F3Q9AWQd2gYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6UD2LVNQQzzT0fwircA%2B5yMVK2sNnEpeeGvj%2Fs%2FQrQv3arr9mSfH6mUTKjI%2BFTF70jumM8xZuO4RTtNBdQQoDntP8jVB9cptZJ1NmEwEKSHgP%2Fm9Y5Cmqp3FJ4exzPCyOaSwyiOg4f3abP56dqJG2NXH93sZLHiXimGhzMcVAR9y2P6ETp5x3nsLwhMUdfHxw6sIyVDHlSq6FDU3d0%2BVbwRHyNyNx4b%2BsqrCCpmT7gLx0vvSf6MRwYEeyi8u0aKDcMLa28i%2Brx6U3brD7%2F5YotFTqQbGB%2BSamdzdZMM9MMNJENlxVBUYLJkErcftB8VuXjfOqMu5b0hECQ%2BihbCBJXm%2FmYJtmoCu5agqqDKmt9pSSSE9zeBkwTfksr8ha3QhYoT8gWu2h%2FThX%2FK2Ng2RZwxuecyKLDgm7zfyf8pKrjx7rdYgEbx8uPruMNGcGKbXmGRddyq%2B7%2FRnUG06QNJIzDbjPKDd6L8F3vQ4O0ESZEZiYP7Lh1IKjEQLAbVXgK1cOVJ%2BlukEWrcJr0Hlp9%2BwKyZXNoIzSEhy5oYFbNrsQ1G5kV6T0Wjw4U5J1XG4aKn4YwtF5jem14ifEW7Tc3FTAJAwbgZnAvZgn0cv82e85GT9jqPIDyrVR37Q1aEE4xWkFlAHrmMmqy0%2FsXMOj28rwGOqUBTINGXQMNvk5uYZCVMFpwZ6eGARz2T9X4WaAuXqDIVYiijPEjBcaq3ZMHS27xrV9s5YrnoobayPDdUj2vqJfW6hcC1PyLiTFSeKdHK5bYjfTvDZ58ympaNMgce%2Ftq%2BH9BYxUKA6RGFOeMXdGI5cShIRHpnSBUc9KpTVyPMmIwZGP5H7RCYG0ZzR5plZnTjNVy0iO8sFrEB5YLwojUmPP8PbSk%2Fh8V&X-Amz-Signature=a40020cf685c57bda3b308107c31f3eb2cd0d695971799f3fa0cf6fc2bd79a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRL5JKPU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuMKVSNHvh1WJRN%2FOaHRdUa85TBJMoz%2Fhuq04u463o1gIgGQ05jDf4kDFWiBZq1GU91lw51ysTOS05F3Q9AWQd2gYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6UD2LVNQQzzT0fwircA%2B5yMVK2sNnEpeeGvj%2Fs%2FQrQv3arr9mSfH6mUTKjI%2BFTF70jumM8xZuO4RTtNBdQQoDntP8jVB9cptZJ1NmEwEKSHgP%2Fm9Y5Cmqp3FJ4exzPCyOaSwyiOg4f3abP56dqJG2NXH93sZLHiXimGhzMcVAR9y2P6ETp5x3nsLwhMUdfHxw6sIyVDHlSq6FDU3d0%2BVbwRHyNyNx4b%2BsqrCCpmT7gLx0vvSf6MRwYEeyi8u0aKDcMLa28i%2Brx6U3brD7%2F5YotFTqQbGB%2BSamdzdZMM9MMNJENlxVBUYLJkErcftB8VuXjfOqMu5b0hECQ%2BihbCBJXm%2FmYJtmoCu5agqqDKmt9pSSSE9zeBkwTfksr8ha3QhYoT8gWu2h%2FThX%2FK2Ng2RZwxuecyKLDgm7zfyf8pKrjx7rdYgEbx8uPruMNGcGKbXmGRddyq%2B7%2FRnUG06QNJIzDbjPKDd6L8F3vQ4O0ESZEZiYP7Lh1IKjEQLAbVXgK1cOVJ%2BlukEWrcJr0Hlp9%2BwKyZXNoIzSEhy5oYFbNrsQ1G5kV6T0Wjw4U5J1XG4aKn4YwtF5jem14ifEW7Tc3FTAJAwbgZnAvZgn0cv82e85GT9jqPIDyrVR37Q1aEE4xWkFlAHrmMmqy0%2FsXMOj28rwGOqUBTINGXQMNvk5uYZCVMFpwZ6eGARz2T9X4WaAuXqDIVYiijPEjBcaq3ZMHS27xrV9s5YrnoobayPDdUj2vqJfW6hcC1PyLiTFSeKdHK5bYjfTvDZ58ympaNMgce%2Ftq%2BH9BYxUKA6RGFOeMXdGI5cShIRHpnSBUc9KpTVyPMmIwZGP5H7RCYG0ZzR5plZnTjNVy0iO8sFrEB5YLwojUmPP8PbSk%2Fh8V&X-Amz-Signature=613ec7b55af152ee7ae3c3e68e4b4d171c64b97f7c256cfb1c4109c186fe2d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
