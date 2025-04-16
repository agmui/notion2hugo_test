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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WWQOIAL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxtZmhnsYx0y64%2Bz8lmksP18mEWtNuqQkFWcgFi2AzQIgYKqanmweUuOXFoy9Q7%2BP%2BgZJlQmwKQFdmEuXv7owQhcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEe8IpU0k824%2BnBWuircA%2BI0ERoHGT83M4cO1H9a0JdNdqJ%2F4XaZtmWZXaqe863nBrmAiXvKuveiN9j4JrRzLBpWwsJ5aiShbqWvT%2Fnq%2FmcYn3R0YXqm5vHuySc4yVLIu%2BA%2BlnbH8F7jfaDAgKxUWP4%2BAQdNDlqFH7lb%2BRDfwFbsoa1IhqkMH8MBbcYuzm63aMg2K%2BPMZy6nOQ5cgm12DTzvUavH3dqfRxBk2hPyXfHcIjJi1OAhyYHBF8mxJ2SYZVggqGe36UZBZgZv97VZ9q8u0ZMDgKpsDU4Fesl03jUlKLuJ1lDZFDxl9RDci2igkGnvSw0sQmoFGQDL7WRnt%2F2XuzZBUlMqFafYLjl3oaZ9NZZqaQyUKB5SIQQ7pjmHk2VuaGvCv%2BnwSr%2BQt1ri6lqN23QkzfDE%2BNrEifTCUzNcSJd2U7Cng3S7UB1InWfJw717xQgIexHBP61RPKU4elaAFSXEx6ga937k%2BMuOmNiXOB%2FlxltpkYGwBqo3V18rKYOByZTqPLzFkaQohPVs5bJlZHkjoUNWKVCRSwWNjWOPdfdj33nI%2B5KjrM3JpDBYO7smbikj4AAkYeLLxc%2FbhZ%2BWAEn87VfqNHih%2Fxup3ZvWl3soGeQt1qnUcd0DRJYX8iOF%2FpOmWeY7utrcMPHV%2FL8GOqUB26iM9U%2FSxa5ASy9xhJfc%2B%2FLqqCUAXDj4kpkccbl3nTTyMQ8ZSDszk5tuNvcOqV9nbX2hWEjIwxYpcYBHdkWJumremM5RGFGtm4ew34deDiE%2B21rvR0BgspZ7nYZ16VIFDiAEVk7ibP9QWJuToyEc%2FXjeUcGXqVtFlJ868SqA0pxcpOa%2Bm%2FI24Irw%2BOPN%2BN6EpDot4evID9wwUBma0nufBxkTDN57&X-Amz-Signature=584a2920d3ef29131baccffd661e4cebaae73eaea040a356d0b8bcb528da300e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WWQOIAL%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxtZmhnsYx0y64%2Bz8lmksP18mEWtNuqQkFWcgFi2AzQIgYKqanmweUuOXFoy9Q7%2BP%2BgZJlQmwKQFdmEuXv7owQhcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEe8IpU0k824%2BnBWuircA%2BI0ERoHGT83M4cO1H9a0JdNdqJ%2F4XaZtmWZXaqe863nBrmAiXvKuveiN9j4JrRzLBpWwsJ5aiShbqWvT%2Fnq%2FmcYn3R0YXqm5vHuySc4yVLIu%2BA%2BlnbH8F7jfaDAgKxUWP4%2BAQdNDlqFH7lb%2BRDfwFbsoa1IhqkMH8MBbcYuzm63aMg2K%2BPMZy6nOQ5cgm12DTzvUavH3dqfRxBk2hPyXfHcIjJi1OAhyYHBF8mxJ2SYZVggqGe36UZBZgZv97VZ9q8u0ZMDgKpsDU4Fesl03jUlKLuJ1lDZFDxl9RDci2igkGnvSw0sQmoFGQDL7WRnt%2F2XuzZBUlMqFafYLjl3oaZ9NZZqaQyUKB5SIQQ7pjmHk2VuaGvCv%2BnwSr%2BQt1ri6lqN23QkzfDE%2BNrEifTCUzNcSJd2U7Cng3S7UB1InWfJw717xQgIexHBP61RPKU4elaAFSXEx6ga937k%2BMuOmNiXOB%2FlxltpkYGwBqo3V18rKYOByZTqPLzFkaQohPVs5bJlZHkjoUNWKVCRSwWNjWOPdfdj33nI%2B5KjrM3JpDBYO7smbikj4AAkYeLLxc%2FbhZ%2BWAEn87VfqNHih%2Fxup3ZvWl3soGeQt1qnUcd0DRJYX8iOF%2FpOmWeY7utrcMPHV%2FL8GOqUB26iM9U%2FSxa5ASy9xhJfc%2B%2FLqqCUAXDj4kpkccbl3nTTyMQ8ZSDszk5tuNvcOqV9nbX2hWEjIwxYpcYBHdkWJumremM5RGFGtm4ew34deDiE%2B21rvR0BgspZ7nYZ16VIFDiAEVk7ibP9QWJuToyEc%2FXjeUcGXqVtFlJ868SqA0pxcpOa%2Bm%2FI24Irw%2BOPN%2BN6EpDot4evID9wwUBma0nufBxkTDN57&X-Amz-Signature=2dd836141c7523a706363a270a8eed72aa434f89473015defeb001a7ddd17dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
