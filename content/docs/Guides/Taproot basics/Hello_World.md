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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQXB7WN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLQ%2Fz2hoSqqFupkbrQHj9XWm6cRa4ezHRzXadAJOAMrAiBCkXmDBbr0SRr23dpkKDht3auNaOzOfGtevBLUlNXakiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1EB6mXVTtrtJXaVKKtwDcru7b%2B2HFZCUfkpU8QHtC1mL7ymU5%2BU2kTPYvg7IfzUN6SZsORlGclw8agteYsccOVHnOvx0OHb2XWRr6fmBiaFf%2Fo3GW3q6dJI4T7m0FvG2P754CjtwCvDz2nb5qfLwvCC6Cm6kHIXFgegXVWGUZyBYMLs4%2F0%2FOH2dBPVVxJd2l2zvsLDh6P7j6zgOKIkvWocyUQ6cK9UhQgZX5dYH%2F41YLO9Y8IzUN47J71yqImKIIq8XtJMSVLNLliZcILpV03cOMmm%2BNBglDstPvNaDpYyOjLkhPGZLfcU9p70T6ZK4lCbc53YsKKzVqMIGaOay8dr9BC%2BJbo3mLZyei4T4xk%2Fm7sigupuI6IYY%2F%2FaS6tFOELKnrbIDkICwuY2PM7Ev9ZOMvFHsu2nNVG2Vc6MuaJijP9QN3drVVQ5s6QdMtoASXWRrIrW9fu2v5glK8fIfkHoQGS3MOt0RrKO2iSWVOXGU6pATZYQpPXVXuJ%2BSM%2FKklT5sByYzxrmDSa%2Fx%2FGjEta8SQjt%2ByGHvKTZpTpYudgKJ0yIBOQguYI1CEwEOVrq6VzFEM3LNMWF7EObAPjk%2FWZ5ZXLzrbzPaPrB2KQVj9vv8AFRF3NEm9MdJNgzXt1tER90BTJsyQe4NC8PYwtqywwQY6pgF%2B1iVuelJQkJK6beUf1GS6pUnIpEKpnP6Oili8ePphNLKo5DJk5tueK8JhGqikHXJ%2BTkVdr%2FwZb16wthINdVai%2Bq8M7FsS6UMfU99XCa%2Bm3LOUatxI0CJSN0ksDI1%2FAXWbxs4c6CiCkku8JbxyAHRnXHeH9vpOUQ%2BTDzm8GsmQ0U8hnvG28fJXgdS9ea2rgOSavnjYilUyDYj7oYxC9pwJnGmKk%2Fw0&X-Amz-Signature=b7013a88abff3f7fea09cf4a6d5225c0f68e391a06d2cb8f4c9292a27ad60879&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQXB7WN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLQ%2Fz2hoSqqFupkbrQHj9XWm6cRa4ezHRzXadAJOAMrAiBCkXmDBbr0SRr23dpkKDht3auNaOzOfGtevBLUlNXakiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1EB6mXVTtrtJXaVKKtwDcru7b%2B2HFZCUfkpU8QHtC1mL7ymU5%2BU2kTPYvg7IfzUN6SZsORlGclw8agteYsccOVHnOvx0OHb2XWRr6fmBiaFf%2Fo3GW3q6dJI4T7m0FvG2P754CjtwCvDz2nb5qfLwvCC6Cm6kHIXFgegXVWGUZyBYMLs4%2F0%2FOH2dBPVVxJd2l2zvsLDh6P7j6zgOKIkvWocyUQ6cK9UhQgZX5dYH%2F41YLO9Y8IzUN47J71yqImKIIq8XtJMSVLNLliZcILpV03cOMmm%2BNBglDstPvNaDpYyOjLkhPGZLfcU9p70T6ZK4lCbc53YsKKzVqMIGaOay8dr9BC%2BJbo3mLZyei4T4xk%2Fm7sigupuI6IYY%2F%2FaS6tFOELKnrbIDkICwuY2PM7Ev9ZOMvFHsu2nNVG2Vc6MuaJijP9QN3drVVQ5s6QdMtoASXWRrIrW9fu2v5glK8fIfkHoQGS3MOt0RrKO2iSWVOXGU6pATZYQpPXVXuJ%2BSM%2FKklT5sByYzxrmDSa%2Fx%2FGjEta8SQjt%2ByGHvKTZpTpYudgKJ0yIBOQguYI1CEwEOVrq6VzFEM3LNMWF7EObAPjk%2FWZ5ZXLzrbzPaPrB2KQVj9vv8AFRF3NEm9MdJNgzXt1tER90BTJsyQe4NC8PYwtqywwQY6pgF%2B1iVuelJQkJK6beUf1GS6pUnIpEKpnP6Oili8ePphNLKo5DJk5tueK8JhGqikHXJ%2BTkVdr%2FwZb16wthINdVai%2Bq8M7FsS6UMfU99XCa%2Bm3LOUatxI0CJSN0ksDI1%2FAXWbxs4c6CiCkku8JbxyAHRnXHeH9vpOUQ%2BTDzm8GsmQ0U8hnvG28fJXgdS9ea2rgOSavnjYilUyDYj7oYxC9pwJnGmKk%2Fw0&X-Amz-Signature=f9c18504aad5e47cd64879333ebc9c54aa3214a0bd5499bff14ff3a0c95e5ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
