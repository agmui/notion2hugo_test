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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHH533U%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B9wJkcBYszv5RS8QfKsWXcG5iAxP%2B0haKHZjuHSaACAIhAOc9lrgss0Fl%2BpRogycKTwxZnZLycjUHHCc1GKSoOiJ%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymtjbtASvPwvSWDsAq3AO369ALy5wu%2FBlnL8eL7OIqrm0Nl3qYlJzZrdz7A%2BmIQn8a0OoCNgYPBX9AbHnlXT9retljR3qotSq4YFqueX79fvJ1LKHRzEqVgDRzB7HSLxjvScZND42Ax%2FgJGgHcOJXefy8hIYIhoPr3H2vgw5rCPLdEL50K6TeqEj9Up0S9%2Bs42WD5rpJbWbosFMz7SgUc54axBk0yfHsopxLXUTJr81W02iJnyTbkGYGDZt77FU4Qw7jmLlHS9RyFp%2Bj4ATIs08pE%2FLpblZDWdXz50%2B2i6M67IVvz7Vb33jQ5f5WfUVo7ZIsQh%2FRU8CZPSiALROlcU6nXIwHoGmWb0F2sFzZoUKAns7V1D7zUvGixcbu0QuXCGI6%2FPQPSaQ7yWetSfScDBQSapJbKJqHojleMffR1VaVKVRF2hhw98u95koIpqfLh%2FTNG%2FexpOj%2BxagVmvZpy4SXq7a7AVnI2%2F9nwNfzwAJ0IM%2B5fJG%2FLKIpP3uQIIEIlHwda9zn6WDPYienK20QipPKXrM7DwzOAZ5Rcc8rV1%2FbtM3%2FD3N9JFaXrhLzxEw89egmtqTXAnqWKXvtHYgojjZVjGQ3i706JOscsHv5z%2BCTdcwzJbNvCJ0GhbY75Q7oGUx7eJ0gf2IvnWCTCO5azBBjqkAXOhD1BiO4zFCtpViQw5MWljIGxg4uFKvDzP4uKIbdIr5OmzNhhhrnB1oi4vnvVvIenanFQtg9Y%2BRcIXlLfsfddJyGU5TqkLr%2BrQ0NrauwrtRNTv%2FG6ZeRB5yEqOHoH%2B8Cw6TwrXsrx%2F9LqXqbQYFMBRvJfprkY4Dp0YoK%2FU%2FO9wUAnM%2B64zDGl%2FrapibYyKbuKFC3FdZkIt5%2BeltVfqM%2Bo0tEGl&X-Amz-Signature=dc7d1969571e8f4a9996bb58b9810147f5f46add3fa56883e361fefa0a36e37b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHH533U%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B9wJkcBYszv5RS8QfKsWXcG5iAxP%2B0haKHZjuHSaACAIhAOc9lrgss0Fl%2BpRogycKTwxZnZLycjUHHCc1GKSoOiJ%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymtjbtASvPwvSWDsAq3AO369ALy5wu%2FBlnL8eL7OIqrm0Nl3qYlJzZrdz7A%2BmIQn8a0OoCNgYPBX9AbHnlXT9retljR3qotSq4YFqueX79fvJ1LKHRzEqVgDRzB7HSLxjvScZND42Ax%2FgJGgHcOJXefy8hIYIhoPr3H2vgw5rCPLdEL50K6TeqEj9Up0S9%2Bs42WD5rpJbWbosFMz7SgUc54axBk0yfHsopxLXUTJr81W02iJnyTbkGYGDZt77FU4Qw7jmLlHS9RyFp%2Bj4ATIs08pE%2FLpblZDWdXz50%2B2i6M67IVvz7Vb33jQ5f5WfUVo7ZIsQh%2FRU8CZPSiALROlcU6nXIwHoGmWb0F2sFzZoUKAns7V1D7zUvGixcbu0QuXCGI6%2FPQPSaQ7yWetSfScDBQSapJbKJqHojleMffR1VaVKVRF2hhw98u95koIpqfLh%2FTNG%2FexpOj%2BxagVmvZpy4SXq7a7AVnI2%2F9nwNfzwAJ0IM%2B5fJG%2FLKIpP3uQIIEIlHwda9zn6WDPYienK20QipPKXrM7DwzOAZ5Rcc8rV1%2FbtM3%2FD3N9JFaXrhLzxEw89egmtqTXAnqWKXvtHYgojjZVjGQ3i706JOscsHv5z%2BCTdcwzJbNvCJ0GhbY75Q7oGUx7eJ0gf2IvnWCTCO5azBBjqkAXOhD1BiO4zFCtpViQw5MWljIGxg4uFKvDzP4uKIbdIr5OmzNhhhrnB1oi4vnvVvIenanFQtg9Y%2BRcIXlLfsfddJyGU5TqkLr%2BrQ0NrauwrtRNTv%2FG6ZeRB5yEqOHoH%2B8Cw6TwrXsrx%2F9LqXqbQYFMBRvJfprkY4Dp0YoK%2FU%2FO9wUAnM%2B64zDGl%2FrapibYyKbuKFC3FdZkIt5%2BeltVfqM%2Bo0tEGl&X-Amz-Signature=3d692397b48b4743fc9495e18d9aedda719cdd8f1f294fcfbffcbe3bd8b01410&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
