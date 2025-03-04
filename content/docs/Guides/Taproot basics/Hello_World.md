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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AXYL2K%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjRMaGV3naXEAdSuBjzLDw1yWtP5CIlInXY%2F33ebcjOgIgePIuIVtNT1KvelQ%2FqZORHEMZm5gRD77GtWZgKL0kkU8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVf2qs2JTY%2BhkFaLyrcAz4N2FoAedgrmtIFoH3Pj0mNtnV7p9nbX8dVMAErA3Iw8hkSUsBXdDWOpXqXMIVb%2FyCeFfWZsoKEep67%2BTYCbLSvgNOPocB%2FU0H82jqFr68R%2BK3Nm51cgVvb2OL0INgesDlAzu%2Fny5C%2BrqQXaqKm3amP%2FpDvnvKA5fCRSutxsw7MCpP5unQxx%2Ft7YTwy1lIXA0iEXNvSxvZP09Dbg%2FQFaYFg285nOL8masH9oxHJWTCZLXFs9EN6io%2FMDegbUwTeMxmsSlDHi6v3LP%2BZKcF8RDViX1XROsRhXrmFhLyMMMo9GS6lVP09qzpVy%2B3sy%2FjnkgrrhkGSi2im6vG2JcPfVbOyzAZ%2FoMvS1PCt6ml4EHUJEYqoLwzXDkLYQXWqTym%2B5huVxGqNTw8AMo0aWwnNKB1F9wmpiIcRCEfkGx%2FhEmDkFW9kfj7heWqK4bbomKRKx5zxqx53cLd8kTNQUTSEjLoTMmmtLxnJBtTkWKWd0Ojsy8ptBKLTPm%2FwaEqa0sNxiVKu6Tb%2FW7QLxnyHfDAZVopJVtOS%2BFO%2BQGn%2BiV3jbwuuop6e4DxSZIcVH3qNWY7rbdXka7tExykIL3J%2FNipSLTzcth1tQ7EP0wZ3rolkpCpMT9xeoOGZEh6kcYq7MOzhmr4GOqUBkNGf4oa%2FDQXDuECFvgC3JEShaDckFTIMP0lm32UI2FXW%2F1u099xCr6Kby%2FCR1A4ZisSeB6ZOf8daOD9JjdcDPeZjKo7QQ1kmQp%2BFeqv3Y2Dqa%2F%2FUYE%2FCRvBHD5Oqxy5JpWbQQtu9Cx%2FggZdDn0DWfHBTGs90pgELQg5BQib2MDo5eeneng7aX8%2BgCpeeyyIG9Ps4YTHMTtR%2F4O%2B13SeQMqdIaWso&X-Amz-Signature=b685c20f4369a440e61b1d9fb08fadc33c5b46d92711a3aa814a1d85918b74d0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AXYL2K%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjRMaGV3naXEAdSuBjzLDw1yWtP5CIlInXY%2F33ebcjOgIgePIuIVtNT1KvelQ%2FqZORHEMZm5gRD77GtWZgKL0kkU8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVf2qs2JTY%2BhkFaLyrcAz4N2FoAedgrmtIFoH3Pj0mNtnV7p9nbX8dVMAErA3Iw8hkSUsBXdDWOpXqXMIVb%2FyCeFfWZsoKEep67%2BTYCbLSvgNOPocB%2FU0H82jqFr68R%2BK3Nm51cgVvb2OL0INgesDlAzu%2Fny5C%2BrqQXaqKm3amP%2FpDvnvKA5fCRSutxsw7MCpP5unQxx%2Ft7YTwy1lIXA0iEXNvSxvZP09Dbg%2FQFaYFg285nOL8masH9oxHJWTCZLXFs9EN6io%2FMDegbUwTeMxmsSlDHi6v3LP%2BZKcF8RDViX1XROsRhXrmFhLyMMMo9GS6lVP09qzpVy%2B3sy%2FjnkgrrhkGSi2im6vG2JcPfVbOyzAZ%2FoMvS1PCt6ml4EHUJEYqoLwzXDkLYQXWqTym%2B5huVxGqNTw8AMo0aWwnNKB1F9wmpiIcRCEfkGx%2FhEmDkFW9kfj7heWqK4bbomKRKx5zxqx53cLd8kTNQUTSEjLoTMmmtLxnJBtTkWKWd0Ojsy8ptBKLTPm%2FwaEqa0sNxiVKu6Tb%2FW7QLxnyHfDAZVopJVtOS%2BFO%2BQGn%2BiV3jbwuuop6e4DxSZIcVH3qNWY7rbdXka7tExykIL3J%2FNipSLTzcth1tQ7EP0wZ3rolkpCpMT9xeoOGZEh6kcYq7MOzhmr4GOqUBkNGf4oa%2FDQXDuECFvgC3JEShaDckFTIMP0lm32UI2FXW%2F1u099xCr6Kby%2FCR1A4ZisSeB6ZOf8daOD9JjdcDPeZjKo7QQ1kmQp%2BFeqv3Y2Dqa%2F%2FUYE%2FCRvBHD5Oqxy5JpWbQQtu9Cx%2FggZdDn0DWfHBTGs90pgELQg5BQib2MDo5eeneng7aX8%2BgCpeeyyIG9Ps4YTHMTtR%2F4O%2B13SeQMqdIaWso&X-Amz-Signature=1285043743a493e9696569c33003c11dfd3957283a3ccf4ca72e25498c730ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
