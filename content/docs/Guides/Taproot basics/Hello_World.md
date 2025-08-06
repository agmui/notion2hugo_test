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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF5V37H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEQAHHALVDAS7dP9wTPlejlR4WFxZv3V%2BveKzm%2F795vyAiEAzj6CxyuUBUZjYHrfKtkvhzxDhaFge0cWF57ma4tQhpMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFKwKIedNZeMWuzpXyrcA0oYqeiaPV299EG5aALW%2Ff0%2FfkXXIS3ncs2lPXqqaKYq00F5iI8hvtF6bPhL2LXN%2B%2B5t4S%2BMaFiepoVicfiujfu1yd98abb9UNJ3qQQcnAZRJ7OHSFJBPQfPimqk6kEff7GnfhG%2B%2BsuQwDcBRLMHh8rCczWX2Is1N4AbpjlN57Q7lMEFCbwCDCoUNQ5YFINJ6IgM1Z0HCg4mHccSvYHuqNGLaf%2F8p7YBpSmQ5ZM2XJrLcyg3T8SWp1kWyEEs3TB8KOQPh8zO1%2FO%2FOrTISKxDiYgrluYJb5Y9IwwvryJMs4FpcDbOtWvIR3I9UDhsQKwIVTXE8v88b%2BHtXq44QzELO4hKJS9trQCtRXmUckMvt%2F8ftgKfCIQLRf1FvmKgB8ECS5naL0J5gkEL1%2B41m%2BquYB3e2L1qbjWKx%2BwT%2FWXoiVn0DFPh5BL4Jr61XKHQfNpQdjSaq1ZxgIS4UVCl4jxS3ja6J7LlyMZrua1yeGaALZq0%2F%2ByHP%2FbGWv1Rl5E%2BQedw9KKsX34X4U6NZF83TOfpBNgqtyKNSbfHjxWEJMp%2F3dZ%2B9z4tlT2xIMoX7rX1gEJi1Wy2Nz7qLIqShO65q6CPEUBCK6TGgq9%2BwyDCwN94d8KKkTnC0WCz1ESar0HeMO6ZzMQGOqUBHoo6ZiudX2C1jccsxmQfHTY4ZbrbMPB%2BEfzQD71V7TEEIhn7S4G6pAGGMDs1fSrgkX6WrMUF4YeIMSe%2Bw%2BR5x%2FCNQ8BoPCyBvleBOCMBHprcLNDdWkLCZmlphroaZF9ukuYVRF%2F5epeRPmEZhZbwXBi0s2ohhn3FQF1xaJXmV86CDdu9cvk%2B0bLA4h6bEq%2BJ6yclqKYhgWSNF5TPv9IbgP4Qvwb3&X-Amz-Signature=b74aa0889242a008c46a8e1f54cb2d8e6e471c1a5eddf417cc33f48f4d852a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF5V37H%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEQAHHALVDAS7dP9wTPlejlR4WFxZv3V%2BveKzm%2F795vyAiEAzj6CxyuUBUZjYHrfKtkvhzxDhaFge0cWF57ma4tQhpMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFKwKIedNZeMWuzpXyrcA0oYqeiaPV299EG5aALW%2Ff0%2FfkXXIS3ncs2lPXqqaKYq00F5iI8hvtF6bPhL2LXN%2B%2B5t4S%2BMaFiepoVicfiujfu1yd98abb9UNJ3qQQcnAZRJ7OHSFJBPQfPimqk6kEff7GnfhG%2B%2BsuQwDcBRLMHh8rCczWX2Is1N4AbpjlN57Q7lMEFCbwCDCoUNQ5YFINJ6IgM1Z0HCg4mHccSvYHuqNGLaf%2F8p7YBpSmQ5ZM2XJrLcyg3T8SWp1kWyEEs3TB8KOQPh8zO1%2FO%2FOrTISKxDiYgrluYJb5Y9IwwvryJMs4FpcDbOtWvIR3I9UDhsQKwIVTXE8v88b%2BHtXq44QzELO4hKJS9trQCtRXmUckMvt%2F8ftgKfCIQLRf1FvmKgB8ECS5naL0J5gkEL1%2B41m%2BquYB3e2L1qbjWKx%2BwT%2FWXoiVn0DFPh5BL4Jr61XKHQfNpQdjSaq1ZxgIS4UVCl4jxS3ja6J7LlyMZrua1yeGaALZq0%2F%2ByHP%2FbGWv1Rl5E%2BQedw9KKsX34X4U6NZF83TOfpBNgqtyKNSbfHjxWEJMp%2F3dZ%2B9z4tlT2xIMoX7rX1gEJi1Wy2Nz7qLIqShO65q6CPEUBCK6TGgq9%2BwyDCwN94d8KKkTnC0WCz1ESar0HeMO6ZzMQGOqUBHoo6ZiudX2C1jccsxmQfHTY4ZbrbMPB%2BEfzQD71V7TEEIhn7S4G6pAGGMDs1fSrgkX6WrMUF4YeIMSe%2Bw%2BR5x%2FCNQ8BoPCyBvleBOCMBHprcLNDdWkLCZmlphroaZF9ukuYVRF%2F5epeRPmEZhZbwXBi0s2ohhn3FQF1xaJXmV86CDdu9cvk%2B0bLA4h6bEq%2BJ6yclqKYhgWSNF5TPv9IbgP4Qvwb3&X-Amz-Signature=fc38b7afd7c47c74ecb115a92646a52040d4c6eb4152f1090bbc56f68d5941c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
