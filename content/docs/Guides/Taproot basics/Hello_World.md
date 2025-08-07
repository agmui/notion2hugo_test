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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3JC2VA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDamoUaQ6gBPDeIRm0X7gKj2R85OwPsG94ehHQfppt1YQIgcAjKe3CbgvLpj%2BC4zSiBgMA6xpfUGYwp5lzxGwOKDQ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8ye0xbvVWr%2FSapoyrcA4KMWXLuDEG%2Bynn4yfADxDRx0ekpYATiFH6SyHtS0TmkSoEqfwXprUSjMmmHUgzdEOzj8buhsJIMWBPTtAQcm0Cu6nNG9EHG18QNBVHvcLeIxB51JSMJQMqG1EZgr%2FbpRhs1y%2FwWnCj%2FGmlJMF4Wj3wa%2BwgY5cnEcyLuw%2FD70wz5kM5vRsgtqfR%2B7VQ5YhuT%2FFGBpQ862f7gTMLlOsnDFaYm8KdkLr6hagsilh2LaPQ%2FeoKQyBs%2FUAl9xY6rLint0fWHf0JnTugQGSP8ybk8S4xxAD7%2Fsx2ZU6QgWAPWirrRsG3n%2FuZ8%2BBRZG9aU74Qp3VrOznEDIXQ1ew3VAxWXZX1QpZ41hjmKK6dEAHWP68V1FXwW6UOyC%2FNoq%2FWTf9uy2YWAruEnVbGhnSq3Q5e3kDRQ0IuTjbB0KoFzB2bC9L9W%2BKcSqNSZ4ppOX2gMZmm302Om2HlpzbKjCAzWT8P39BDsImIpB0OV1UdW5pjF1sf2LjG5KPYPWJjEg8StIRTRvqdooQjJFMbDhTTU%2FOdcfVXUmPP9QtPqsvfg%2F%2Bkro9HqNMOp8%2FMWFnJuzvduriE%2BrJ7%2FqaYw%2Fngq8%2FUTpjLZkvt6LyEljumwPVQEEBazsK2HtEzD03uDr1YY5L5aMI2Q0cQGOqUBGCqOvwkcCZNg03CBlqgyzQzxmeg%2BHhapNpksjOQ5FtGilgtEWURWmoiPp0LwyFMXQM7ZuXXkxp7i3vXdBEvjrUe%2FQdjnVOUbHi6vGvKMi2axjFLqClFFRpI1AunJt0nU4FQfj3f7LY2jlRkTElurOoQrilqNz7VL5llVaIrzLtYW7n3N6IoAa%2BQ6zFYtaUWbMSesQix7B9atg23hXYPHJq9wRmeP&X-Amz-Signature=3fc61794d1d868d55c990ab8c7723167a35d66432228a1d097c39e35a9ec30a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3JC2VA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDamoUaQ6gBPDeIRm0X7gKj2R85OwPsG94ehHQfppt1YQIgcAjKe3CbgvLpj%2BC4zSiBgMA6xpfUGYwp5lzxGwOKDQ0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8ye0xbvVWr%2FSapoyrcA4KMWXLuDEG%2Bynn4yfADxDRx0ekpYATiFH6SyHtS0TmkSoEqfwXprUSjMmmHUgzdEOzj8buhsJIMWBPTtAQcm0Cu6nNG9EHG18QNBVHvcLeIxB51JSMJQMqG1EZgr%2FbpRhs1y%2FwWnCj%2FGmlJMF4Wj3wa%2BwgY5cnEcyLuw%2FD70wz5kM5vRsgtqfR%2B7VQ5YhuT%2FFGBpQ862f7gTMLlOsnDFaYm8KdkLr6hagsilh2LaPQ%2FeoKQyBs%2FUAl9xY6rLint0fWHf0JnTugQGSP8ybk8S4xxAD7%2Fsx2ZU6QgWAPWirrRsG3n%2FuZ8%2BBRZG9aU74Qp3VrOznEDIXQ1ew3VAxWXZX1QpZ41hjmKK6dEAHWP68V1FXwW6UOyC%2FNoq%2FWTf9uy2YWAruEnVbGhnSq3Q5e3kDRQ0IuTjbB0KoFzB2bC9L9W%2BKcSqNSZ4ppOX2gMZmm302Om2HlpzbKjCAzWT8P39BDsImIpB0OV1UdW5pjF1sf2LjG5KPYPWJjEg8StIRTRvqdooQjJFMbDhTTU%2FOdcfVXUmPP9QtPqsvfg%2F%2Bkro9HqNMOp8%2FMWFnJuzvduriE%2BrJ7%2FqaYw%2Fngq8%2FUTpjLZkvt6LyEljumwPVQEEBazsK2HtEzD03uDr1YY5L5aMI2Q0cQGOqUBGCqOvwkcCZNg03CBlqgyzQzxmeg%2BHhapNpksjOQ5FtGilgtEWURWmoiPp0LwyFMXQM7ZuXXkxp7i3vXdBEvjrUe%2FQdjnVOUbHi6vGvKMi2axjFLqClFFRpI1AunJt0nU4FQfj3f7LY2jlRkTElurOoQrilqNz7VL5llVaIrzLtYW7n3N6IoAa%2BQ6zFYtaUWbMSesQix7B9atg23hXYPHJq9wRmeP&X-Amz-Signature=5c0d046a16b62a0ea74c1b589b3dd4d05f58992436ca7845e87115aec524faba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
