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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7E43DX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESkhe1orcbpoWUC3mYTHAKCJK3Sb2t%2BvtbBS2O3P4lkAiB9bGa9V37BjOSTnilg34fv%2FNin%2B2j1qoSVwoXB7sR9zCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCUy7tqT9N2H8EzYKtwDNDbqQBzG67uvlT%2BRBtp1J7E9zjh0r3ZH0q6Q7qPtLyzDoTBNclRUfRiHtTmAdnIAYQOCqUv%2Fc6%2BhB6pzbQYKyH9uzUry14Ysg%2FlWgCHvwbScpSGlOI5%2Bmz%2BAhb%2BJwh%2FwEFjZlNgdELKPoHvxcb17Ofde4JsgTzkIGkprOJpd%2Bh6rKT7DLSQSFj3AqTRUEmTa88ebiIu6vXxoPgFPLgaK4jw%2FKm0x0OkYaXJ89SbmNg%2FP4FP3KxYRmWAl79GKkqLd76FSoNSVjEtN1o%2FKH2x2IC%2F4ml5hM6x6TAA75zVt4knJKXdvZCFyUpOanePLl%2FJJ2SWDyvQ7eB8bPCGSWDpVgR08F9K8kAGcZiy5QdbjfWPq2QSzMB27cCb8DXXGHaLBpSMFCTbqQYeaKudpZYeMZuNpKgtfYSAxq6bsHHjPeNhgUwb8OEJfuCrHWvvEmuw8KmMRmvAQDRpVh%2FKBxT4k5EKSBVQ1PN9N4oQxwP%2BkLxcvpPfv%2BhmPxoXEr%2Ff3TmDrhWp2wjCLBZDwC2p94SjneYVyfEJm89iZxQIhRbjD2oQrol%2BsGMyHVH2OmfoUTwnVPEPWoQI9nwltyFGz4bZQivb5RwYXJWWftt7B0pGgSWbbVTAImOGl%2BQnWOEswovqlvQY6pgHizEo%2BntAli1yDSSRlbP4afo83NGkndwFUrFakq0dIe3I5Dpeyua8BWdWGmN0KIkj9WSCMn2NqKsqD9Ti1HOIDnBQlHhSAKF6D6YW1s1Ji2gbJn4d%2BpHnYRnxewFossVH4a0FTs583DEGGgY0p7wNMNzP4PfF6WQr1EKO1onGlq%2FFNubMbjLO3A9cBVWC%2BAWp03wuj2uj5ucUFXm90z52zUEufUKj4&X-Amz-Signature=cbc240216de5b46c7d06c0edbcba3e4c306837998187531063f2739c1119e124&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7E43DX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESkhe1orcbpoWUC3mYTHAKCJK3Sb2t%2BvtbBS2O3P4lkAiB9bGa9V37BjOSTnilg34fv%2FNin%2B2j1qoSVwoXB7sR9zCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCUy7tqT9N2H8EzYKtwDNDbqQBzG67uvlT%2BRBtp1J7E9zjh0r3ZH0q6Q7qPtLyzDoTBNclRUfRiHtTmAdnIAYQOCqUv%2Fc6%2BhB6pzbQYKyH9uzUry14Ysg%2FlWgCHvwbScpSGlOI5%2Bmz%2BAhb%2BJwh%2FwEFjZlNgdELKPoHvxcb17Ofde4JsgTzkIGkprOJpd%2Bh6rKT7DLSQSFj3AqTRUEmTa88ebiIu6vXxoPgFPLgaK4jw%2FKm0x0OkYaXJ89SbmNg%2FP4FP3KxYRmWAl79GKkqLd76FSoNSVjEtN1o%2FKH2x2IC%2F4ml5hM6x6TAA75zVt4knJKXdvZCFyUpOanePLl%2FJJ2SWDyvQ7eB8bPCGSWDpVgR08F9K8kAGcZiy5QdbjfWPq2QSzMB27cCb8DXXGHaLBpSMFCTbqQYeaKudpZYeMZuNpKgtfYSAxq6bsHHjPeNhgUwb8OEJfuCrHWvvEmuw8KmMRmvAQDRpVh%2FKBxT4k5EKSBVQ1PN9N4oQxwP%2BkLxcvpPfv%2BhmPxoXEr%2Ff3TmDrhWp2wjCLBZDwC2p94SjneYVyfEJm89iZxQIhRbjD2oQrol%2BsGMyHVH2OmfoUTwnVPEPWoQI9nwltyFGz4bZQivb5RwYXJWWftt7B0pGgSWbbVTAImOGl%2BQnWOEswovqlvQY6pgHizEo%2BntAli1yDSSRlbP4afo83NGkndwFUrFakq0dIe3I5Dpeyua8BWdWGmN0KIkj9WSCMn2NqKsqD9Ti1HOIDnBQlHhSAKF6D6YW1s1Ji2gbJn4d%2BpHnYRnxewFossVH4a0FTs583DEGGgY0p7wNMNzP4PfF6WQr1EKO1onGlq%2FFNubMbjLO3A9cBVWC%2BAWp03wuj2uj5ucUFXm90z52zUEufUKj4&X-Amz-Signature=70dc00c3816f4381df7d21d4698399da1431ead0e59984f12deae6428d071da8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
