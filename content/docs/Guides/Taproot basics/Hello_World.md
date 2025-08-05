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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDEYQMD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDiQhHuX%2F2oTZH%2FcHTcvU3oHNGhMt9EJPpp6ubws8IwiwIhANCeKLQcFfFY29HZK%2Frhob9BJnG%2B8lIdQoqmwwY1Mu6jKv8DCFgQABoMNjM3NDIzMTgzODA1IgwWuYbE%2BFIyZyC77WYq3APOHtYsiZjDp6ut0B7dQCkKMh5VHvU6wB7jHocicOZ%2F5eUoRfrPzDmx734al9N2oFlI5ltWTSuW0wOkcYUVRXa1selfqrLGJ92UYB8GATwAGygN6Ztc%2BweojY3g2g0RBnovLTUJopa2M9Ez%2F9MOCUxafzutnVAZgoCLFk6iHH6H1EL1pbgowYZ4tKIrIW0gtIF9Ij2Wv3vSYbilBmzRgxcsDFQHcXhx4YNTh3HUMqchfq50G2umKhTineKB1vOUMAhvTSpSUVU1x5BRyP9uh13XONcwpPH1sIehjxZ90Pj2eGUSQC%2Bmdit5EoVMovYYZD4lIlxMMbQ42e%2FcTMJZVlS80WsLZiYxamB0lluDdp5D%2FQe2G3sCy0KilTJoZMkDBM3QWnfQG7dtWovv9OILwCUEZvi93My6q%2BgR6c92WQuw%2B9CSTrUdrMyDbywvB6R4AhCr8hV0s2QxZZOdBwaH%2Bq3uDdPJH7bl%2FbRba4yWPY%2F3E0RqWiQR%2FoEjcOSEu3SgicyKuRyBtziYM02k0BE61bileZ42Me4J1GtkJhTgxQpdIhRLCNLwMEO3ZwHanDudD1zTN4ZzXl9oU3FDuiB87aVLzU56d8t70i1AE86nmz%2B5KW2ni5uVpiMx0bdKCTD%2B2sbEBjqkAQwsiEqszrXInhBtzUwxFkR4FmcIasMCSkBEZZ%2FXFcJZZZ86FuUl2diKhctYQRQS4t%2FpMFIRiJQFlhapurnUZ0zDRCSzDE43C3XUj6QbGRGqDcfADOGam0dN1gptEvzz0o6%2Bt36V3JIHfYuqNmU%2FYFz%2FIVURXKpiBPlRMH1qx9H48dlHwUdbXCdaUiPs8nmuOpy6lHRxBS%2FuCpBXUABpWBOvHU53&X-Amz-Signature=ab7f9a9d763f8f072c02cb2d5da74f35c0614dcdeb9c19dcf3b05e5beb1e0ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWDEYQMD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDiQhHuX%2F2oTZH%2FcHTcvU3oHNGhMt9EJPpp6ubws8IwiwIhANCeKLQcFfFY29HZK%2Frhob9BJnG%2B8lIdQoqmwwY1Mu6jKv8DCFgQABoMNjM3NDIzMTgzODA1IgwWuYbE%2BFIyZyC77WYq3APOHtYsiZjDp6ut0B7dQCkKMh5VHvU6wB7jHocicOZ%2F5eUoRfrPzDmx734al9N2oFlI5ltWTSuW0wOkcYUVRXa1selfqrLGJ92UYB8GATwAGygN6Ztc%2BweojY3g2g0RBnovLTUJopa2M9Ez%2F9MOCUxafzutnVAZgoCLFk6iHH6H1EL1pbgowYZ4tKIrIW0gtIF9Ij2Wv3vSYbilBmzRgxcsDFQHcXhx4YNTh3HUMqchfq50G2umKhTineKB1vOUMAhvTSpSUVU1x5BRyP9uh13XONcwpPH1sIehjxZ90Pj2eGUSQC%2Bmdit5EoVMovYYZD4lIlxMMbQ42e%2FcTMJZVlS80WsLZiYxamB0lluDdp5D%2FQe2G3sCy0KilTJoZMkDBM3QWnfQG7dtWovv9OILwCUEZvi93My6q%2BgR6c92WQuw%2B9CSTrUdrMyDbywvB6R4AhCr8hV0s2QxZZOdBwaH%2Bq3uDdPJH7bl%2FbRba4yWPY%2F3E0RqWiQR%2FoEjcOSEu3SgicyKuRyBtziYM02k0BE61bileZ42Me4J1GtkJhTgxQpdIhRLCNLwMEO3ZwHanDudD1zTN4ZzXl9oU3FDuiB87aVLzU56d8t70i1AE86nmz%2B5KW2ni5uVpiMx0bdKCTD%2B2sbEBjqkAQwsiEqszrXInhBtzUwxFkR4FmcIasMCSkBEZZ%2FXFcJZZZ86FuUl2diKhctYQRQS4t%2FpMFIRiJQFlhapurnUZ0zDRCSzDE43C3XUj6QbGRGqDcfADOGam0dN1gptEvzz0o6%2Bt36V3JIHfYuqNmU%2FYFz%2FIVURXKpiBPlRMH1qx9H48dlHwUdbXCdaUiPs8nmuOpy6lHRxBS%2FuCpBXUABpWBOvHU53&X-Amz-Signature=cf0beb643517cff1500f4e64f4cf2d02a4b7abcd81133c5a9f057c6a42473b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
