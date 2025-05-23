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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ULIJRJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDObyjWlQKyEavu2VvvuKVBm9ERDq11huqsEco3ELeqMAiEAgMoAKecynusZYwiPFO989MDF0cZj0rVyJtFb%2F2alqqoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiUWP1CECvFAToIPCrcA6uitQBiib0Bdw9WKIKQP8kmBmhwwwkDyyCeatA602tqqh9vZO6hxJwtq5k2aH8LiO4sKjredyBMWrmYLA%2BsFunQ%2BwMDMEFveMDqIZKmIl4MYvi2UQ72Zso9YasvH2C1kUWBK82ZvAe3yChUBBlWubmz1lIrsEwcWC4BdKZDAWoDJ9nPH%2B7rxR3EnC%2F%2FOA5XWIyNdMnnUIU4YPOhzxTsHpxWVt%2F%2BRbjydLDH1XlwAFNdrAEVD9LRpclA9s%2B6gF3U5MxS%2FQul%2BvkMqa%2F2CNlrqGxg3jH7nGJ%2FDsijF8riasQDcn7sWJL%2BKdJrt%2FEvFerrZ20vT9MEF1WPRqoEKJVRn7amj9zSSEsm4Sdti60ARXY7pXvejQXJhpSHEWnZpki39vmCXytax2d2FtiZgE6xZKRFXMDM8iqo4nH%2BcUpKOSJ3CPlA0to3inHlRrEapdYnHsIlcX5Zv2K3RXW%2BwaSlEYXxlHAAQfYWw0kpobyEEsw96mN%2FgBeG6%2F9rCDZwRq96rBddcZjKylMkMdeuNpCTuYzqtCxL4hETjn7dj%2BOMF%2FRlseH3unh1JM%2FPJNdBtf1cwgzxN89VQTfQGvP5QsMCCm2uFYN2pDP2CW4Z9qip0ADm5mBZ5f%2F7ciDVgfp0MIapwcEGOqUB3WTUOr8V8QEdrYLgIsIPJyJ78n1IajkAQu%2BisIYyY%2Fzw9gpr3lCSr3U%2BTmmoAgaIlbFxIUeQUhy6U0A6HXKkbywULLePXEfEJ6oAxmhsf1Pt1zhHoypAzpwGNDeZtB%2BDs7Fgzfi6j5U%2Bu5KCZ5%2FAUGRRhYkuzwlcrDPpmmfAQnkic7wa5gjsGeELqtzrkSFyiMyBlbAzuFiiJLl9teAUPnGgG3FT&X-Amz-Signature=35afe0ce8ab15c1e4fd9902b70d2cc03733cf1818f02f5ec8f0d7bb257de575f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ULIJRJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDObyjWlQKyEavu2VvvuKVBm9ERDq11huqsEco3ELeqMAiEAgMoAKecynusZYwiPFO989MDF0cZj0rVyJtFb%2F2alqqoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiUWP1CECvFAToIPCrcA6uitQBiib0Bdw9WKIKQP8kmBmhwwwkDyyCeatA602tqqh9vZO6hxJwtq5k2aH8LiO4sKjredyBMWrmYLA%2BsFunQ%2BwMDMEFveMDqIZKmIl4MYvi2UQ72Zso9YasvH2C1kUWBK82ZvAe3yChUBBlWubmz1lIrsEwcWC4BdKZDAWoDJ9nPH%2B7rxR3EnC%2F%2FOA5XWIyNdMnnUIU4YPOhzxTsHpxWVt%2F%2BRbjydLDH1XlwAFNdrAEVD9LRpclA9s%2B6gF3U5MxS%2FQul%2BvkMqa%2F2CNlrqGxg3jH7nGJ%2FDsijF8riasQDcn7sWJL%2BKdJrt%2FEvFerrZ20vT9MEF1WPRqoEKJVRn7amj9zSSEsm4Sdti60ARXY7pXvejQXJhpSHEWnZpki39vmCXytax2d2FtiZgE6xZKRFXMDM8iqo4nH%2BcUpKOSJ3CPlA0to3inHlRrEapdYnHsIlcX5Zv2K3RXW%2BwaSlEYXxlHAAQfYWw0kpobyEEsw96mN%2FgBeG6%2F9rCDZwRq96rBddcZjKylMkMdeuNpCTuYzqtCxL4hETjn7dj%2BOMF%2FRlseH3unh1JM%2FPJNdBtf1cwgzxN89VQTfQGvP5QsMCCm2uFYN2pDP2CW4Z9qip0ADm5mBZ5f%2F7ciDVgfp0MIapwcEGOqUB3WTUOr8V8QEdrYLgIsIPJyJ78n1IajkAQu%2BisIYyY%2Fzw9gpr3lCSr3U%2BTmmoAgaIlbFxIUeQUhy6U0A6HXKkbywULLePXEfEJ6oAxmhsf1Pt1zhHoypAzpwGNDeZtB%2BDs7Fgzfi6j5U%2Bu5KCZ5%2FAUGRRhYkuzwlcrDPpmmfAQnkic7wa5gjsGeELqtzrkSFyiMyBlbAzuFiiJLl9teAUPnGgG3FT&X-Amz-Signature=0ca62cf6584f3ec698046d3d79bbc60554bcf96b05343ac301fefea738b3cc46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
