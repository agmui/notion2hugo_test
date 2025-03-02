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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBP5Q7C%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1dSPPohuiGPL%2B6wkYvupMPosxo1KmzEC1Rr%2FIDycklAiAe2ZrMRHUyoob1Kp9Uc%2FdYTeWYxpcc3jtxllgC%2BwNx5yqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtLZDGvgOeCxZM15KtwDSuyYQT5YUdzGOJtO5Q2FLIf4u%2BwLrzKZX1kmzG3i9Hpu5p8yQptBPFWUGv34yXcxMR%2Fficth%2F5yKbtMp0jA%2BEeMZVr2ff2GlC%2B84cxjkEN6%2FwYK97mFVG52UnewM3uQ%2BhQqqvyAWptrcXIEmMcjrb229KLPHQqOZ65MB6TvBgoPN%2B5%2B5qo9GMLc39U5nMQu%2B08nic5H0ssvVO1fmkE6gqAuojFbSOwlCd0C7soKRux1QGjmQ5NtZMSeaY8YVNjNq8aLgStxDGsEiWcthtEriEmQKGg09Ayj5LOuBZk7HTsspgSrUOp1TloNUP5198RyCcLtTn39dPDPwsl5k83CU6hD053ZY3rUVgu3CXwLj6qEOlYsA2xfV2%2FU2tkFztHZUw9f2wETrRRIqWPxIydTNtG%2Fdzs9aFP1N0S55aljtnrsK8XeiwIAC4eBAJkk2jmX5PLa0RJKTeT%2FVOi%2Fx9dhUaPzkGFCUF%2F8%2BbsViOQs%2FdMyFQ0Im6MnY2l9PZYVB1hlRNEFfrOxr040E4uOdUjKCpZeaZgtfc1ymjpV2ffOLCtX%2FmxSmgy1PP%2BXPWhEp844BQbUXPqr%2F0%2B2VNlr6hhHbHJEvhUDZ5w%2Fw%2B1f%2FFnJIKYsoFntoaJsEwfz8y0Ew3aWTvgY6pgE5PqdzQeep%2FrqiyHePe8bMlVsIrXVT%2FVMq3kMlR8xj8lypgOJZlTZQbbQQ3ASl0K7sa2%2BOdKUTv5xrpkZrGc3wzxM8tK0OqV1J6zJzBeV6bJ%2Bq2W%2B3dkaDP2nVDEMUfzNTctIhxYRx%2B%2FEh15EzTVzfbJTZ5P3hSLmeBhy41%2B078Lxis3Tv4BJ8wyoqsts17tNk1a015P6stGNL%2BPeieJyjfns1IGHO&X-Amz-Signature=63894180c00d4b3f26ffb0a4b27fc4865a936b325b556e22e9e0a8c22753c08e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBP5Q7C%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1dSPPohuiGPL%2B6wkYvupMPosxo1KmzEC1Rr%2FIDycklAiAe2ZrMRHUyoob1Kp9Uc%2FdYTeWYxpcc3jtxllgC%2BwNx5yqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtLZDGvgOeCxZM15KtwDSuyYQT5YUdzGOJtO5Q2FLIf4u%2BwLrzKZX1kmzG3i9Hpu5p8yQptBPFWUGv34yXcxMR%2Fficth%2F5yKbtMp0jA%2BEeMZVr2ff2GlC%2B84cxjkEN6%2FwYK97mFVG52UnewM3uQ%2BhQqqvyAWptrcXIEmMcjrb229KLPHQqOZ65MB6TvBgoPN%2B5%2B5qo9GMLc39U5nMQu%2B08nic5H0ssvVO1fmkE6gqAuojFbSOwlCd0C7soKRux1QGjmQ5NtZMSeaY8YVNjNq8aLgStxDGsEiWcthtEriEmQKGg09Ayj5LOuBZk7HTsspgSrUOp1TloNUP5198RyCcLtTn39dPDPwsl5k83CU6hD053ZY3rUVgu3CXwLj6qEOlYsA2xfV2%2FU2tkFztHZUw9f2wETrRRIqWPxIydTNtG%2Fdzs9aFP1N0S55aljtnrsK8XeiwIAC4eBAJkk2jmX5PLa0RJKTeT%2FVOi%2Fx9dhUaPzkGFCUF%2F8%2BbsViOQs%2FdMyFQ0Im6MnY2l9PZYVB1hlRNEFfrOxr040E4uOdUjKCpZeaZgtfc1ymjpV2ffOLCtX%2FmxSmgy1PP%2BXPWhEp844BQbUXPqr%2F0%2B2VNlr6hhHbHJEvhUDZ5w%2Fw%2B1f%2FFnJIKYsoFntoaJsEwfz8y0Ew3aWTvgY6pgE5PqdzQeep%2FrqiyHePe8bMlVsIrXVT%2FVMq3kMlR8xj8lypgOJZlTZQbbQQ3ASl0K7sa2%2BOdKUTv5xrpkZrGc3wzxM8tK0OqV1J6zJzBeV6bJ%2Bq2W%2B3dkaDP2nVDEMUfzNTctIhxYRx%2B%2FEh15EzTVzfbJTZ5P3hSLmeBhy41%2B078Lxis3Tv4BJ8wyoqsts17tNk1a015P6stGNL%2BPeieJyjfns1IGHO&X-Amz-Signature=970b3397ae167055e9beed575087e5ea2877f043327ce06eff1623cdb65ce25d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
