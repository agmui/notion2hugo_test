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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65A6FYN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4lxccPyXRpMGrnvYTvQoxAmnXyEJR0n9zFrvhjWcviQIgTeVvqyn5Aj7KmPj3U7zKEPViZ18BRKBpPwj2KnYuZwMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdpkNLt1tzKGuzuMyrcAzQfQdXBRempt0fxtB0EZT36DLcUNGn0%2BbTg1UdhEpKHxrBnVzVFf2o5BSA%2BSwVa0k2%2FVoscxZxh%2Fu1nl75ZRhbc1rMkI%2FDnpUAFo6w%2Bxgs2i2evsg9bIPu1puOoKpCpHizUrRH%2BqR7vAkSDY1tOypNeB681hE89bw6QaIGAV1LbGfBhdkhH6res%2Ff8ZTiF3HtwhQEWHAi5LbVPLv6aDT0zTXhBZ7dobeuD7qv5Eq2b23Z3pXHxkjQd812Aw6HOq4lGwTOGnTdQDKY3R69VDDRyEIPq9%2FSoo5szevZMlBYqUs1fqcVeXa%2FGNtfX6nnKKBPeB19INzMKUWCtMuxZQyp4zzvhss4NEIohv5WjIP8lx4JErQeYS7BKI0VItK5lbLoBQeJ0TC6Zm8fBA47QKCN2T%2B7GPApTM5XklnGQotbyCKHDHaCjxxsB0Y8uZmgbcVD3140eOKs9zG%2Fdp54CJbYaLv9RyMhbNm%2B1RGHQ3hFg5RGBwOMYiy4Zfdev9oUfuKOg3uTUlP89jmcbaZc%2FRMj%2FH8mtopKDum6yHH1EW4FaN8MhvZQRtpbv7l7FV5dHerjlCnVyO5EGU%2BJjsDo23x%2FfANblrQx1dZ7pU2cC5aJe76ehDorqc%2Fklkmqa5MInfn8IGOqUBc0m4Zhh425wZLtK6xnqizJBBHTHObwTXXH0INzJ8LFMznNSs6kza%2B3gP19ybcmDU%2B9KH06ytnA%2F3AVpYH2iB9J%2FGvEp3nJ8ATB%2BCKT83K%2Fr8xSfLidn38IVj7%2Fu7kV%2BhtBE%2BsfSrNyLTWDTd4L7x2qeUIZdmBhpzFDbxx57qv5YY%2FSq5nNaj5qZRCBnWAFOQEw1Lheb%2FcCL0fAR59TfMoJGqfIwW&X-Amz-Signature=faa71ad2c1de7fb3cba4d956a4b3eddcc5eda3b8517acd26b39438df54a5f37c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65A6FYN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4lxccPyXRpMGrnvYTvQoxAmnXyEJR0n9zFrvhjWcviQIgTeVvqyn5Aj7KmPj3U7zKEPViZ18BRKBpPwj2KnYuZwMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdpkNLt1tzKGuzuMyrcAzQfQdXBRempt0fxtB0EZT36DLcUNGn0%2BbTg1UdhEpKHxrBnVzVFf2o5BSA%2BSwVa0k2%2FVoscxZxh%2Fu1nl75ZRhbc1rMkI%2FDnpUAFo6w%2Bxgs2i2evsg9bIPu1puOoKpCpHizUrRH%2BqR7vAkSDY1tOypNeB681hE89bw6QaIGAV1LbGfBhdkhH6res%2Ff8ZTiF3HtwhQEWHAi5LbVPLv6aDT0zTXhBZ7dobeuD7qv5Eq2b23Z3pXHxkjQd812Aw6HOq4lGwTOGnTdQDKY3R69VDDRyEIPq9%2FSoo5szevZMlBYqUs1fqcVeXa%2FGNtfX6nnKKBPeB19INzMKUWCtMuxZQyp4zzvhss4NEIohv5WjIP8lx4JErQeYS7BKI0VItK5lbLoBQeJ0TC6Zm8fBA47QKCN2T%2B7GPApTM5XklnGQotbyCKHDHaCjxxsB0Y8uZmgbcVD3140eOKs9zG%2Fdp54CJbYaLv9RyMhbNm%2B1RGHQ3hFg5RGBwOMYiy4Zfdev9oUfuKOg3uTUlP89jmcbaZc%2FRMj%2FH8mtopKDum6yHH1EW4FaN8MhvZQRtpbv7l7FV5dHerjlCnVyO5EGU%2BJjsDo23x%2FfANblrQx1dZ7pU2cC5aJe76ehDorqc%2Fklkmqa5MInfn8IGOqUBc0m4Zhh425wZLtK6xnqizJBBHTHObwTXXH0INzJ8LFMznNSs6kza%2B3gP19ybcmDU%2B9KH06ytnA%2F3AVpYH2iB9J%2FGvEp3nJ8ATB%2BCKT83K%2Fr8xSfLidn38IVj7%2Fu7kV%2BhtBE%2BsfSrNyLTWDTd4L7x2qeUIZdmBhpzFDbxx57qv5YY%2FSq5nNaj5qZRCBnWAFOQEw1Lheb%2FcCL0fAR59TfMoJGqfIwW&X-Amz-Signature=d2030f145b5f4bd4bbbf3531d054463ee249b93ae157164663f1d9e31039c4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
