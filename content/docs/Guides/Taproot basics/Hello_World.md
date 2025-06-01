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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6VJIJY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC9Yq8XXLGBHDhMpQLATRJ0QfsjHL6qBvVelchRjsVWBgIgbCSTyFdYhOK%2BCPFs6XzhVLLZJnH0ExG79R%2FJcPg0meIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKECzoW4Ffsy6c2QhyrcA9kVecREbLqDm4aWnw%2B5oiIXjoe3HGj8834QFqUJlY9dA2L89cXFh7rkB0FTgFKWqY%2FRjDqH0YZKlo%2BhrGnoXqduFm%2FUi5c7YAYe37sGkS40hLhIcvgkOq6uNw3JzO40TCSjredT1T%2B0R7f3SorDx%2F7XLu5zWfJjA0lD6eDF5sP%2B2P4u9UIjGDR%2Fvjsi8g0k5571Mip8Auqywis%2BNNV%2Fanh5J3kcjT60ypc9kOkwqSZmzjrcCaH7PQ55JmBAd0Rl7WUiH3%2FXwhH7%2Bi63oLXBspMd8Vvisc%2B7h%2F%2F8Nu0Xu3XvcCiBzIQCTcxdmDhFWT%2BhRroC1QoB0JTFlDy3nwmvHPRu9o2gzMC6glGlmiuvPrcg2c5k5qpP23vBnn9ir8T3yU19%2B8aFLgpLmAwsj%2FJKnSv2QYd8sNGB7r3w3UnA%2BsBmTJm7rn7Zi0XORkuZqrgqK1olgE%2BxcU1HhBuqzcNkfpeaydqfw79vFoJbIhwF0qdw8SaeS9ZKRHIyf%2Bbex2F%2B%2BtwLnpzFBe01um5aGFkzF5LtB3hAj7bM6TWHMedKJX5jRDlK22TAOf2uov1w0EuZo3IIHKyTIG5qvlNW2VwD%2FMabQKfL%2BPEXMfOw70uBIum%2FkKCFboQ5UgX%2BWhyRML798cEGOqUBrBIqjtQi%2FyopsRTiO7MKMdIOXOlUjkzrzaClvdDNEEQl8xy4Z1HL3dD5E742x%2FbAmJ97sO84s72Esww%2BYCeNaQ%2FY%2F1hegOXoHgphAEMsoAb0Z506VXEo9KJVKMM%2FDmOKT0dXINKUN57UcJMI5bO4aMQARJ9A1kau%2FcxZwH061QpZlYyxxo1%2BHjFrMxPeUgQ3xxyGfaIs9dlrGV0b5PX3eWvZcoo5&X-Amz-Signature=a86a3649a0ff5696f765c82b258519da252c71ea664a635825077f7d10b67b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6VJIJY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC9Yq8XXLGBHDhMpQLATRJ0QfsjHL6qBvVelchRjsVWBgIgbCSTyFdYhOK%2BCPFs6XzhVLLZJnH0ExG79R%2FJcPg0meIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKECzoW4Ffsy6c2QhyrcA9kVecREbLqDm4aWnw%2B5oiIXjoe3HGj8834QFqUJlY9dA2L89cXFh7rkB0FTgFKWqY%2FRjDqH0YZKlo%2BhrGnoXqduFm%2FUi5c7YAYe37sGkS40hLhIcvgkOq6uNw3JzO40TCSjredT1T%2B0R7f3SorDx%2F7XLu5zWfJjA0lD6eDF5sP%2B2P4u9UIjGDR%2Fvjsi8g0k5571Mip8Auqywis%2BNNV%2Fanh5J3kcjT60ypc9kOkwqSZmzjrcCaH7PQ55JmBAd0Rl7WUiH3%2FXwhH7%2Bi63oLXBspMd8Vvisc%2B7h%2F%2F8Nu0Xu3XvcCiBzIQCTcxdmDhFWT%2BhRroC1QoB0JTFlDy3nwmvHPRu9o2gzMC6glGlmiuvPrcg2c5k5qpP23vBnn9ir8T3yU19%2B8aFLgpLmAwsj%2FJKnSv2QYd8sNGB7r3w3UnA%2BsBmTJm7rn7Zi0XORkuZqrgqK1olgE%2BxcU1HhBuqzcNkfpeaydqfw79vFoJbIhwF0qdw8SaeS9ZKRHIyf%2Bbex2F%2B%2BtwLnpzFBe01um5aGFkzF5LtB3hAj7bM6TWHMedKJX5jRDlK22TAOf2uov1w0EuZo3IIHKyTIG5qvlNW2VwD%2FMabQKfL%2BPEXMfOw70uBIum%2FkKCFboQ5UgX%2BWhyRML798cEGOqUBrBIqjtQi%2FyopsRTiO7MKMdIOXOlUjkzrzaClvdDNEEQl8xy4Z1HL3dD5E742x%2FbAmJ97sO84s72Esww%2BYCeNaQ%2FY%2F1hegOXoHgphAEMsoAb0Z506VXEo9KJVKMM%2FDmOKT0dXINKUN57UcJMI5bO4aMQARJ9A1kau%2FcxZwH061QpZlYyxxo1%2BHjFrMxPeUgQ3xxyGfaIs9dlrGV0b5PX3eWvZcoo5&X-Amz-Signature=afd50ad89474dfbe8a79cb8bfaa27ea1f0184e90b281092ce4dc1e938f7eec88&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
