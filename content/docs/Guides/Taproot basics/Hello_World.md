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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIQFUWV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnrOmfSD5m1MA5Jemf%2BB2eFiAbdrTQ1w%2BUD1mFY3RS%2FAiEA6GP8zm2NNcvX6vTa1zM8bGllhdyGOfk7M8t5FzXM074q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKk0uXrvQtxMv%2F16ACrcA2UmX6tuIj6ci727JQLVxXz8TexaBeRdwacsCptNcHAl10lq7FJbbC8vb%2BrNdF5w3CPG1x6pIbCoVPS2%2Bco4PWFyzcqh3cswLIRBSee4SmjFzAkG6FtM9rweCLlPfrYNE3cKCoaJbUECB0B84QsO53FEM5cTsb4b43kAldCNR6nEeUef4V8uDjPO0aFChHGZkSTdkeXYH%2B7i6GFUG8em7C%2BmOt8TPxtbZWpLhq1TZMjQX9JqQEhbAUt4Fsjc%2BYVlxfSEVjZ5wuxxPdB4yhDZ3eFI2JVTPmp%2BCfBbScEjYwNorfPx%2FX5ntayjqza5QS2PRjb6WRb5Qzd%2BBzy47lG2nLJJPFAQ8APjr7JxPT3Y2N4RTC9S%2FyCX4k8Mj0ts3Y1wsTW2choWMHV5bK4XoejcR5xE%2B6uuVpEaJp8oWNjD7auJNPTjjlSqjnz5GG%2FzkydZP%2Fo7RzhZXXL40LpKLb0bfVEBoJvECT4CYFMj3U2cQVLhDZHBRRn%2Ba3s3xq9YXxCz6LWj2Zs%2FRSYKLgna9w%2FXH4hU0%2Bt5qjijn4bcMyehcxmD%2F27a93SFlTMEcFnvPQcjRJirdVlh%2BK%2Fe%2F2IPCJxpSNjxERUUumfI%2BakJMQzCpLqVv8ibuLcq1g62sLrzMLzg8cAGOqUBDWD8MxEVlF4HdWqNU%2BPL5aL64mj9NiGHZrQXRSZCmdVYitthhzh8%2FyQBGCzuPOs9j%2BggpBDVIdhPcy5I595GUPHr%2B5skV8zh2cuzj%2Fxf975LU6JV7mY9oyHHS3RUlbVCtgP0bo2owfcbhTia1v7YMACKJB7zwZvkhsycNhiJ3Lwf6bt812F1w1SsSdbKOn12%2FqFzh4sCLc6LDFlghTPjyYTwDajl&X-Amz-Signature=9132685bfa41924cc49c9dd1ed363abd86e463a4bf84c04500089fc7a4eaa0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIQFUWV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnrOmfSD5m1MA5Jemf%2BB2eFiAbdrTQ1w%2BUD1mFY3RS%2FAiEA6GP8zm2NNcvX6vTa1zM8bGllhdyGOfk7M8t5FzXM074q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKk0uXrvQtxMv%2F16ACrcA2UmX6tuIj6ci727JQLVxXz8TexaBeRdwacsCptNcHAl10lq7FJbbC8vb%2BrNdF5w3CPG1x6pIbCoVPS2%2Bco4PWFyzcqh3cswLIRBSee4SmjFzAkG6FtM9rweCLlPfrYNE3cKCoaJbUECB0B84QsO53FEM5cTsb4b43kAldCNR6nEeUef4V8uDjPO0aFChHGZkSTdkeXYH%2B7i6GFUG8em7C%2BmOt8TPxtbZWpLhq1TZMjQX9JqQEhbAUt4Fsjc%2BYVlxfSEVjZ5wuxxPdB4yhDZ3eFI2JVTPmp%2BCfBbScEjYwNorfPx%2FX5ntayjqza5QS2PRjb6WRb5Qzd%2BBzy47lG2nLJJPFAQ8APjr7JxPT3Y2N4RTC9S%2FyCX4k8Mj0ts3Y1wsTW2choWMHV5bK4XoejcR5xE%2B6uuVpEaJp8oWNjD7auJNPTjjlSqjnz5GG%2FzkydZP%2Fo7RzhZXXL40LpKLb0bfVEBoJvECT4CYFMj3U2cQVLhDZHBRRn%2Ba3s3xq9YXxCz6LWj2Zs%2FRSYKLgna9w%2FXH4hU0%2Bt5qjijn4bcMyehcxmD%2F27a93SFlTMEcFnvPQcjRJirdVlh%2BK%2Fe%2F2IPCJxpSNjxERUUumfI%2BakJMQzCpLqVv8ibuLcq1g62sLrzMLzg8cAGOqUBDWD8MxEVlF4HdWqNU%2BPL5aL64mj9NiGHZrQXRSZCmdVYitthhzh8%2FyQBGCzuPOs9j%2BggpBDVIdhPcy5I595GUPHr%2B5skV8zh2cuzj%2Fxf975LU6JV7mY9oyHHS3RUlbVCtgP0bo2owfcbhTia1v7YMACKJB7zwZvkhsycNhiJ3Lwf6bt812F1w1SsSdbKOn12%2FqFzh4sCLc6LDFlghTPjyYTwDajl&X-Amz-Signature=e58c20eeb6e14c4a154b45f9a84e4aa9fcc2502b0c54852dc2630102459b5c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
