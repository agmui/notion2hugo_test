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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWEIUJK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzguY5P4W4CjSoIKQMSy2sIH86URTBaBcAtC0GawPKIAIgZu409qQhMW3xQ6gUMivfzkQycrzTIXZVxKxldBXP7iwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnHlxLTINTibE3UNCrcA7k7i02STblFJBUCpf5IcTvicL8V67vNMhOlFkyA22tcl08Fkr54MbZSnj3HYPLDHwBf%2BLcHnR3LBbjA%2BeucLgd3Q%2BYdzC49vupPSaXJ3oEoYnz8HZ3P9EZxOS3myvB2lg0qIG3rbsKTjfiljty3sB2IVc8JneoKigqPtM6vMK02ftgUWptxz%2Bn7FFoIS24DgnWpmM9zUhLEFzaNe0DxnyD%2BYMirFUobNmVXVttdKKOVyHSdvZn9tZfXjwcHgE4ep4jVnlztDgS9gzdowxMTwi0Cu9n6CV3%2FnDr%2FDSLk0fBRrVTCLzhlUL9Gx0VQ3hkfKK0twTIuEAiJTnCuAgjeEO%2FMNkOVYJ%2F3mukYdxfCwLhr%2FQVpfkRBajZKgAQEiZiu2BZYK7G%2BnCA3pULwu5kJv5J%2FeqvYMyW5i6nh6ESNt7HiMZEEUjdNrceSc5bFMG3yO%2BVj05jyj6O7lqUDIu68ROoMQCGu70c2H2gLB3QT6YJ0CvQhLGL6l%2F1zbWcHyg9rV1qok3y1U6AQ9641RAU%2BZZ%2FQrUg1dHnRtzm2h%2FDPivWWEf8S%2BoRMgh6jlR7VgwVif1U3s7YEoDl9rNAxe%2B8hK1Wli7kBExrgjpHFOpmwRAasydPmAHmch1XN9LBrMLSf570GOqUBnm2vM5TxTYFJ4xpVOICUqu7AMxXLFSZyYKxBMywoW2cZhmS32DcEFt2zx5IUYH3ctreVYyzyPofiQNmKRpfb1BLNgaP%2Fgyro6iH4wxZuy0WAGv%2FyArO%2BBUzrJu2VkkVQlC%2Bb1oReJyrkFqGqHsPt2DEgFey%2B9x5DL17qvztSIubCAr%2Fsl%2FpH5SEhhcTIfUKACiSwk7WShBiFSyuEFM0TkAZrJRfy&X-Amz-Signature=d118ede4bb23051e01b54008d114c2002aecab05eb11ecf1fdc279f85e92ba1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWEIUJK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzguY5P4W4CjSoIKQMSy2sIH86URTBaBcAtC0GawPKIAIgZu409qQhMW3xQ6gUMivfzkQycrzTIXZVxKxldBXP7iwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnHlxLTINTibE3UNCrcA7k7i02STblFJBUCpf5IcTvicL8V67vNMhOlFkyA22tcl08Fkr54MbZSnj3HYPLDHwBf%2BLcHnR3LBbjA%2BeucLgd3Q%2BYdzC49vupPSaXJ3oEoYnz8HZ3P9EZxOS3myvB2lg0qIG3rbsKTjfiljty3sB2IVc8JneoKigqPtM6vMK02ftgUWptxz%2Bn7FFoIS24DgnWpmM9zUhLEFzaNe0DxnyD%2BYMirFUobNmVXVttdKKOVyHSdvZn9tZfXjwcHgE4ep4jVnlztDgS9gzdowxMTwi0Cu9n6CV3%2FnDr%2FDSLk0fBRrVTCLzhlUL9Gx0VQ3hkfKK0twTIuEAiJTnCuAgjeEO%2FMNkOVYJ%2F3mukYdxfCwLhr%2FQVpfkRBajZKgAQEiZiu2BZYK7G%2BnCA3pULwu5kJv5J%2FeqvYMyW5i6nh6ESNt7HiMZEEUjdNrceSc5bFMG3yO%2BVj05jyj6O7lqUDIu68ROoMQCGu70c2H2gLB3QT6YJ0CvQhLGL6l%2F1zbWcHyg9rV1qok3y1U6AQ9641RAU%2BZZ%2FQrUg1dHnRtzm2h%2FDPivWWEf8S%2BoRMgh6jlR7VgwVif1U3s7YEoDl9rNAxe%2B8hK1Wli7kBExrgjpHFOpmwRAasydPmAHmch1XN9LBrMLSf570GOqUBnm2vM5TxTYFJ4xpVOICUqu7AMxXLFSZyYKxBMywoW2cZhmS32DcEFt2zx5IUYH3ctreVYyzyPofiQNmKRpfb1BLNgaP%2Fgyro6iH4wxZuy0WAGv%2FyArO%2BBUzrJu2VkkVQlC%2Bb1oReJyrkFqGqHsPt2DEgFey%2B9x5DL17qvztSIubCAr%2Fsl%2FpH5SEhhcTIfUKACiSwk7WShBiFSyuEFM0TkAZrJRfy&X-Amz-Signature=9be08338771662f3c6e678a5f23f57bf097b0432552dad39aa06230432e8ebce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
