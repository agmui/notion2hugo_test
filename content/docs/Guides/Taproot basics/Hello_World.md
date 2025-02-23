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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIL246M%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrX8qGitHH%2BNmMi5Kjt6MSM9jKaB0z6RhpyjaqrVcqPwIga7GCKxZ0%2FGEp%2B9FTwntkbmKetqJbWFB6nQDjrv%2FYmisq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHB8Rop4e4xT7PZerCrcAzyry4eCiC8IUDSD9zfU7LX7vdqEPQ1hTrMPU27Q3pWlcAZBxmHlzq8ux5ItUYJ33TT%2BfzoqSuOg5J2GFInJhy8Fm3w5hvdVZdolDdUXFbfHJyBGrbxoqqHICa2k8NMgXqVdyY%2BeM8ajvf318s51oYJL7oZnWq4zslgc6KMIx7%2FccqnXBSvxUjGgjkAOnl%2F2fmVbaFQv2FsrpgR1Q%2Bj9jcY3WsJGF%2BI6YeWvgLzpLOB89UgvsddnH2fqgVqKfWVLtNIhi0j%2B1uiSRW4h4SqrQpXAmqJOE1pxhXkTxrrbXGaFWp78G3X5v7FQ%2Bd9QsYOMIr1pWmRWTOIWAAfTxkRmNM6MiSv07qjYPqIGJrGrbkltC6ILzNJ7vFjyzY1FHXi6PXaiK9GJtbNGGMKfosDwO6vB2gUrJyUu%2FcjEel7dMY97fEzY9IYDpReMSbpK23WKE5pkS9WhwRT9vf7EClyUWIUeswFRamBf7OYHsfUPq%2BFgn5SLCHndkC%2B1%2BgJCZSwYgAY1fL53oas3mbWYAlpqdBLv44ZqLz33IXy%2BthJ%2F0dGE97VG6%2BZgCxtGI4FFe8vHxfdOLnSmqUAZJJ10Vi6XmSehaHexT0S2JVszekiJrL5XK8bD8xLvi0SWgEYIML7k7b0GOqUB4GB9cL85I%2FQfU39txoPp0dMSlfZ2ohVuopD1gkEkEii7pnXMsaqMomi3TFt884p9Sw7HLXrkHsLNur5ExgHgaiAOZ1%2FkEzAPLXcFIFoNNPGVhHlnenVDNH8l82H%2BpIYsSnRNlY9mVs6kVpo2J%2F7VifSCgvZGi3ZUA0uYsQ3HkJx3yau%2BHrjMRyPN0jN4CBKRwqngCPxAQINtw%2BKZHMzSrT5ZY%2Bgc&X-Amz-Signature=3667dbec8fd0bbda42251ae46b0a26e291a3aeee0939d79448d58804a0b66760&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIL246M%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrX8qGitHH%2BNmMi5Kjt6MSM9jKaB0z6RhpyjaqrVcqPwIga7GCKxZ0%2FGEp%2B9FTwntkbmKetqJbWFB6nQDjrv%2FYmisq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHB8Rop4e4xT7PZerCrcAzyry4eCiC8IUDSD9zfU7LX7vdqEPQ1hTrMPU27Q3pWlcAZBxmHlzq8ux5ItUYJ33TT%2BfzoqSuOg5J2GFInJhy8Fm3w5hvdVZdolDdUXFbfHJyBGrbxoqqHICa2k8NMgXqVdyY%2BeM8ajvf318s51oYJL7oZnWq4zslgc6KMIx7%2FccqnXBSvxUjGgjkAOnl%2F2fmVbaFQv2FsrpgR1Q%2Bj9jcY3WsJGF%2BI6YeWvgLzpLOB89UgvsddnH2fqgVqKfWVLtNIhi0j%2B1uiSRW4h4SqrQpXAmqJOE1pxhXkTxrrbXGaFWp78G3X5v7FQ%2Bd9QsYOMIr1pWmRWTOIWAAfTxkRmNM6MiSv07qjYPqIGJrGrbkltC6ILzNJ7vFjyzY1FHXi6PXaiK9GJtbNGGMKfosDwO6vB2gUrJyUu%2FcjEel7dMY97fEzY9IYDpReMSbpK23WKE5pkS9WhwRT9vf7EClyUWIUeswFRamBf7OYHsfUPq%2BFgn5SLCHndkC%2B1%2BgJCZSwYgAY1fL53oas3mbWYAlpqdBLv44ZqLz33IXy%2BthJ%2F0dGE97VG6%2BZgCxtGI4FFe8vHxfdOLnSmqUAZJJ10Vi6XmSehaHexT0S2JVszekiJrL5XK8bD8xLvi0SWgEYIML7k7b0GOqUB4GB9cL85I%2FQfU39txoPp0dMSlfZ2ohVuopD1gkEkEii7pnXMsaqMomi3TFt884p9Sw7HLXrkHsLNur5ExgHgaiAOZ1%2FkEzAPLXcFIFoNNPGVhHlnenVDNH8l82H%2BpIYsSnRNlY9mVs6kVpo2J%2F7VifSCgvZGi3ZUA0uYsQ3HkJx3yau%2BHrjMRyPN0jN4CBKRwqngCPxAQINtw%2BKZHMzSrT5ZY%2Bgc&X-Amz-Signature=c3e0697091438ad9fe6d7a3eecbaf4d1fb32abb2533b2717cc0668a92c827d45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
