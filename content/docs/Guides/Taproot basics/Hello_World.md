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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYEY3PB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcKmWjFaw52IBf%2FiGSXTGg7xZnzTfKiZfW3rriFiYAKAiEA%2BVrncOvDpG2ePPXqfoMiA6cA%2Bs9AUBJD9s45nBV8JDcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0NIwzykmua%2FuEuiSrcA8w8sZG5hLwNqiQsk2s%2FR5NBsEWmOybPuopwRuc9IueGV8UKT7gIrWE9N0ZRmvUwxAKyvDzd2Ixp5qo%2FpIgC%2BuCdwuJAHi0w7QjC8NK09LrmyB9Ceq9nqkGgRKVTWj4RzKUtX9mxO8xIpA0wZKI5U3JvHySw5gj00MM9U2Tzqy0HwpVKvt3NbTer3Pzu8qpUf5DqTzc4pNxi1Wiwy4yQ%2BYILFhDqjJPrGv3JB9zX3X6pSxGZMQtN48h%2FlVZrkvIVu8BbqERrEVgr5FJQLcAnjBFv0rOCrBie1bbjPxmjkG1w6%2BYuf8Qf9bQVe%2BeTb5cpDvnDNNDtyMpKdXzzOJieXB53mX7CmqLTjhEzefwG6SH6SgxnTO4zObU%2BJGe%2FYkaMFzC885SBcm%2FAFpppAimQmuYxScSx5RNXVaGtFU%2FwaUskujeB1qH%2FrUReuwrFzxpSMwhulqJk0O1OH0qthOXtNAN4Vb8WObMermZa3FjQrIwlCFLwmhZueAcK65D7x50owfHVLD8VtkqGIhPnHduOse9siJNsv6RbZJlfo5LwZe3DwKj6uvS3rD5YjuP0w65UD2vWO7vnHq4pF0iTsntZuuKKvltKK8Rjc2qhyBEpaVazezdvbYmJOEaO5%2BAuMMyy3sEGOqUBuSSpSr56BciSGPf0ZSLYAPF8hcuQ7MR90sJq0P%2B%2BoONmtBaNxN%2BSrCUZZguyBf9%2BT2CEEvY%2BWVRPkirAaF1RyvHY1m626wp04T8f%2FfP9l1MTYhlF8jr4LD8VccZ5p729aE4wq%2BYrT1dt1U98wbD%2BxkkCvz0RhLXUJ7dqDy1dOKsCPKdYlTI4OeCwuaAY4095cOPcNqOKO2YA53SXeSb4IUhoW0bu&X-Amz-Signature=91158e9ba6343c6fd4072fbed2ab42cd9d431f5c9d9dd3dba9fa6e18120f4629&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYEY3PB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcKmWjFaw52IBf%2FiGSXTGg7xZnzTfKiZfW3rriFiYAKAiEA%2BVrncOvDpG2ePPXqfoMiA6cA%2Bs9AUBJD9s45nBV8JDcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0NIwzykmua%2FuEuiSrcA8w8sZG5hLwNqiQsk2s%2FR5NBsEWmOybPuopwRuc9IueGV8UKT7gIrWE9N0ZRmvUwxAKyvDzd2Ixp5qo%2FpIgC%2BuCdwuJAHi0w7QjC8NK09LrmyB9Ceq9nqkGgRKVTWj4RzKUtX9mxO8xIpA0wZKI5U3JvHySw5gj00MM9U2Tzqy0HwpVKvt3NbTer3Pzu8qpUf5DqTzc4pNxi1Wiwy4yQ%2BYILFhDqjJPrGv3JB9zX3X6pSxGZMQtN48h%2FlVZrkvIVu8BbqERrEVgr5FJQLcAnjBFv0rOCrBie1bbjPxmjkG1w6%2BYuf8Qf9bQVe%2BeTb5cpDvnDNNDtyMpKdXzzOJieXB53mX7CmqLTjhEzefwG6SH6SgxnTO4zObU%2BJGe%2FYkaMFzC885SBcm%2FAFpppAimQmuYxScSx5RNXVaGtFU%2FwaUskujeB1qH%2FrUReuwrFzxpSMwhulqJk0O1OH0qthOXtNAN4Vb8WObMermZa3FjQrIwlCFLwmhZueAcK65D7x50owfHVLD8VtkqGIhPnHduOse9siJNsv6RbZJlfo5LwZe3DwKj6uvS3rD5YjuP0w65UD2vWO7vnHq4pF0iTsntZuuKKvltKK8Rjc2qhyBEpaVazezdvbYmJOEaO5%2BAuMMyy3sEGOqUBuSSpSr56BciSGPf0ZSLYAPF8hcuQ7MR90sJq0P%2B%2BoONmtBaNxN%2BSrCUZZguyBf9%2BT2CEEvY%2BWVRPkirAaF1RyvHY1m626wp04T8f%2FfP9l1MTYhlF8jr4LD8VccZ5p729aE4wq%2BYrT1dt1U98wbD%2BxkkCvz0RhLXUJ7dqDy1dOKsCPKdYlTI4OeCwuaAY4095cOPcNqOKO2YA53SXeSb4IUhoW0bu&X-Amz-Signature=3ed06eefd7f70dfac0b8d29ee2466fe11e6df23ffb66a993fc5f8162f38b092a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
