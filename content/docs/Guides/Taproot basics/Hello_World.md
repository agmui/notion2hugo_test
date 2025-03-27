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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657N2TFQ2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7dRW94zXU3%2Fj0kXl9%2Fi7jvs8bf%2FweA64vnDbMG9GisAiEAozSothK5PNqvw81JsO%2FMRBiENvwf8XvsbpljZES2kH4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDM6FArlYj3TrZx%2Fa5yrcAyvm1QNbEMJTOGZH8nore2IKEPv8YwmmYqJ%2FnQLnqy1dmJtNhy86vS%2F0KcGiopNOxKRzX3j6NohoOfCv9mLFhAXIPHV11qBKWc%2BkypQ460Q%2FGrvsyhXiiBcOGkTYLS3a5D%2F1bCRazaVmTHoe5rdTYRQYMUh65cFa71fvIRZvQKuaqik7o95k0sSG95TAwxKZq86JPA86apSNCqFPQsqdnfgZtVSGE9i%2BGZokmEV8toscRooKFnhHK7LmkHjbD2aPDnaEiaDVjbUSImyU8S0Y7dh8j91zSmNCFBEhApeH%2BEg7JzP%2Fg90CG3XShgPDWSccbkPUt%2BPg6bp0RYB5hNanc6NuoyHJQ3nIpQRNGFW7KqDtUr%2BlFnYbBnMIGo%2BZWxyHXah7%2FfbYDLc%2BtHhJ4xrjdCxgDREPAf7nzlNgexoO5hho8MP6XxnLjv%2B33gEOc7jgKqv8wjXbEFDkffNym3XBH2Hoxfc1%2FQ5%2FjeahNe2R%2FFPDt5%2Boz14ajlOS2mbjXanAxQNwEJMFSHBgSHmEeBPI%2BViLaizjT5FYLZd0LfXtmRW80Za7fOcTTNywyM5KUqPuChU0sfrkMbDmTHn7GAQ7GPyrb%2BCazvj%2BdlFhsE4oMD%2FfydEWBr3%2BjZoGjc5gMO3clr8GOqUBcopBiXDkPpIxG8TyfacD5RXo9%2BJUUX5ymQD6qWzxY9KJ%2BGAR6g680ijVGJUvX7bOmADBYJIR4EDv1Fe9jAVND3jJDq3Eww4uAyz0Ti4biyFQ0K13eCGOLRNNqpNQfPMAQoNaEXZy5myZBoBrGMVJE4zhJTfS9Uv9uEIVOpZ6M1iu0XcJ1v%2FLORqXXHTIbLkPwZMRvSVLlxbskGIfrds1eunfHZc3&X-Amz-Signature=46d95c7e5ebeed294658e92c3b2f8e8ae27c9a123a95ac5df610bf703ef43a68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657N2TFQ2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7dRW94zXU3%2Fj0kXl9%2Fi7jvs8bf%2FweA64vnDbMG9GisAiEAozSothK5PNqvw81JsO%2FMRBiENvwf8XvsbpljZES2kH4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDM6FArlYj3TrZx%2Fa5yrcAyvm1QNbEMJTOGZH8nore2IKEPv8YwmmYqJ%2FnQLnqy1dmJtNhy86vS%2F0KcGiopNOxKRzX3j6NohoOfCv9mLFhAXIPHV11qBKWc%2BkypQ460Q%2FGrvsyhXiiBcOGkTYLS3a5D%2F1bCRazaVmTHoe5rdTYRQYMUh65cFa71fvIRZvQKuaqik7o95k0sSG95TAwxKZq86JPA86apSNCqFPQsqdnfgZtVSGE9i%2BGZokmEV8toscRooKFnhHK7LmkHjbD2aPDnaEiaDVjbUSImyU8S0Y7dh8j91zSmNCFBEhApeH%2BEg7JzP%2Fg90CG3XShgPDWSccbkPUt%2BPg6bp0RYB5hNanc6NuoyHJQ3nIpQRNGFW7KqDtUr%2BlFnYbBnMIGo%2BZWxyHXah7%2FfbYDLc%2BtHhJ4xrjdCxgDREPAf7nzlNgexoO5hho8MP6XxnLjv%2B33gEOc7jgKqv8wjXbEFDkffNym3XBH2Hoxfc1%2FQ5%2FjeahNe2R%2FFPDt5%2Boz14ajlOS2mbjXanAxQNwEJMFSHBgSHmEeBPI%2BViLaizjT5FYLZd0LfXtmRW80Za7fOcTTNywyM5KUqPuChU0sfrkMbDmTHn7GAQ7GPyrb%2BCazvj%2BdlFhsE4oMD%2FfydEWBr3%2BjZoGjc5gMO3clr8GOqUBcopBiXDkPpIxG8TyfacD5RXo9%2BJUUX5ymQD6qWzxY9KJ%2BGAR6g680ijVGJUvX7bOmADBYJIR4EDv1Fe9jAVND3jJDq3Eww4uAyz0Ti4biyFQ0K13eCGOLRNNqpNQfPMAQoNaEXZy5myZBoBrGMVJE4zhJTfS9Uv9uEIVOpZ6M1iu0XcJ1v%2FLORqXXHTIbLkPwZMRvSVLlxbskGIfrds1eunfHZc3&X-Amz-Signature=e28165ce49a736765319901a75ebed885485b01e51c113139ec196ab5f23fd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
