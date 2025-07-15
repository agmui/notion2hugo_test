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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNDGJHD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIE2MRY247f0Qet7%2FAkr8NLDT0TpVoIsjgTOSWTCBc%2BR5AiEAvSnGW9szVqt%2FiWHYS%2FCs3qVV84yZjKK5QtDaajWH4lEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLMXikv1rdo9p59VyyrcA1rQDuS7%2BYoA5KE69L7uOFevkUcMPt44xsR7zlblBANLDBaguIe0OQ9c3W4hpNkplEYWfeLtofMnRVGrFvd8%2FdAW9tyV643xYG%2BzCkvy1hLL3W5HprNWx0StAtKXqM5YrJq9TuS3G0cAveI2lRD8zFsRUg0gXQCD3hfc%2Fl51pk56KbDde98%2BvefPAZMIGWMtlGE2xDEqMNXiAq6cLhPCtIhh9Afe9xu0HBDXiTOv1xpxEnMX4OUTBhiOD2DJPCyeHAgqbkX056CFFD59Ogo%2FOBSuVgIsPnUlwsiJcaECv2Lhz3YOFFrX93cqQ4c397BtT2nUOfQviMpEp%2B9%2FE6g%2Bk24rcFVoVXWBBBPdWn4VWtEjxJfvwVzzmHjSaIwJX2IItOp3lsJnSMvh%2BtZ0FUFU%2Bnq%2BFrmFuIhMCVctF06JXHmFcu2YS1uRxRI8ziTmBWP2sLX0k0Skhd0oGW16wtgQu6SOlCakJdrXMBGY8jdENWbU9PvtizoMj6j9asIlG%2FFbk%2F6ewVDCGLm9r0SwORFtY2qHjv4x09QwnDQyaI9m5QGKlWGKcKgJ3UUmlUvGnL6xixSYUX3U080nsGsdhHP%2B95zYTa%2BXmOwk2Wt31tbub%2BdG%2FJSK3VMYd6BWUBEnMKmx2MMGOqUB7PpoZR4fhWmf6UWqSFZ84xabBdZ%2BEpfgLu6PeCSpUH7JynszFljLjVf3XmpBUL3fNP%2BWHRRnLoDhMmcJh253X4dNQFOB4z4TT%2BAyqkicIRZCqL1LuZkijmL9YMEPOcS87QMFilkZTKDy61IXl3ER0Ioox%2FRRBhP78JIfJsbmoHNONtZkt7BmJVSNsjq%2BuZwWZ6XG5ZmyoEAHr3VIOXSsG%2BzggtwC&X-Amz-Signature=748c973212fb0ad49709822a12f9cfecca1d44ced3471b615e6e857beb895873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNDGJHD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIE2MRY247f0Qet7%2FAkr8NLDT0TpVoIsjgTOSWTCBc%2BR5AiEAvSnGW9szVqt%2FiWHYS%2FCs3qVV84yZjKK5QtDaajWH4lEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLMXikv1rdo9p59VyyrcA1rQDuS7%2BYoA5KE69L7uOFevkUcMPt44xsR7zlblBANLDBaguIe0OQ9c3W4hpNkplEYWfeLtofMnRVGrFvd8%2FdAW9tyV643xYG%2BzCkvy1hLL3W5HprNWx0StAtKXqM5YrJq9TuS3G0cAveI2lRD8zFsRUg0gXQCD3hfc%2Fl51pk56KbDde98%2BvefPAZMIGWMtlGE2xDEqMNXiAq6cLhPCtIhh9Afe9xu0HBDXiTOv1xpxEnMX4OUTBhiOD2DJPCyeHAgqbkX056CFFD59Ogo%2FOBSuVgIsPnUlwsiJcaECv2Lhz3YOFFrX93cqQ4c397BtT2nUOfQviMpEp%2B9%2FE6g%2Bk24rcFVoVXWBBBPdWn4VWtEjxJfvwVzzmHjSaIwJX2IItOp3lsJnSMvh%2BtZ0FUFU%2Bnq%2BFrmFuIhMCVctF06JXHmFcu2YS1uRxRI8ziTmBWP2sLX0k0Skhd0oGW16wtgQu6SOlCakJdrXMBGY8jdENWbU9PvtizoMj6j9asIlG%2FFbk%2F6ewVDCGLm9r0SwORFtY2qHjv4x09QwnDQyaI9m5QGKlWGKcKgJ3UUmlUvGnL6xixSYUX3U080nsGsdhHP%2B95zYTa%2BXmOwk2Wt31tbub%2BdG%2FJSK3VMYd6BWUBEnMKmx2MMGOqUB7PpoZR4fhWmf6UWqSFZ84xabBdZ%2BEpfgLu6PeCSpUH7JynszFljLjVf3XmpBUL3fNP%2BWHRRnLoDhMmcJh253X4dNQFOB4z4TT%2BAyqkicIRZCqL1LuZkijmL9YMEPOcS87QMFilkZTKDy61IXl3ER0Ioox%2FRRBhP78JIfJsbmoHNONtZkt7BmJVSNsjq%2BuZwWZ6XG5ZmyoEAHr3VIOXSsG%2BzggtwC&X-Amz-Signature=f7def6cff7e82ba58cf8597464997f0936237d1e560302ed6e7bc70824b620de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
