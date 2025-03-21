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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLXZVXR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD8LYbeg1tbmt5K6I%2FIM1E0wtTnfdCiqDpg%2F86mFMBRZwIhALn3TjUeVzZ0R74Ow5C1gLKeMwCcEhsXum3A6BBwN%2FurKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuHpbD0s%2B7z9SCRD4q3AOTx0lkuHVt7pO9IabPbk6DW9hcUZp1%2F1Y%2FnHSrE2dhPS8%2FMV2SwNfXTkhBisG7qs1xYWpPmKf5Hd1zlF6qtwMPxZCBpH%2Fo%2F9vTAOBTsW1K3395MujWupQB%2B7z7IZirSrpH7FxbOljtqitgvo8yD93aKcAYjeKHO1OmfY4WdGFQEf8e339EitaS2HRo%2Bj2k7%2B8rbcyAZAJo222U4zvZ5OwlgYq5qIg3UefhECm6bT7hEumnWu%2BHp4OHH8ViWNuE1Ma2FpqGafd7Ld%2B98N%2BmRbEvhQ913cUiCH%2BXuqnJPawwQ1XSC8pHbVa7CAeqUOTM31N5AtZYnEa1qh1161VIJSs04cvfVribQ2xFp14Yi0VVC%2BtwsbNgAnUEzFIRPFPCnuKQJ7U%2B2QajeX15RBjf5RWkt4zdRMwVuBXsAphK22DR436nzewrqc5%2FHOOjI1MLw59LxZoj7c%2FsVtlf4U5H%2FDyFqgKV7zm0faQN4RiupxVjA0hiTZZqoIL5QNHiLvsDLZBEXyAS0OfjawHLkQSXlFXjs5KK%2BEbVgA8rjjjqQbLr9O%2FzVrDWlOr7Dh3g5Oso%2FVsSxTmDnWVFRCq%2B9E%2Fgn7N6dAM03WjQJ%2BSEjD7s9AMO1sblNSMJJIFBgSBEzTDl%2BPK%2BBjqkAU1UATtwr1mjcIb5rrrCVgQpb6e4aunXARp%2FqzjRihWHHkZFvZqA55LfY%2FPX%2FnhMJUtedUz6nkSsWVEbvJDeXdj0bLwB94yweAz5kqEmpSTD6med8pZvKa%2BWaU0Ky7HeZHs1iYVT6QWQ0DzlLcXkgRVKeyWcqp3DyyHvEJzBGI5bou%2FxeR%2FsNWTQNvNVLyb5BVjWmgdEsjGi0a5RXXVNkoHJ1Gd9&X-Amz-Signature=227e2e5e24328be4f9bb410a25a67e4b9b18d5dfabf1d2d3566e85450d13a5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLXZVXR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD8LYbeg1tbmt5K6I%2FIM1E0wtTnfdCiqDpg%2F86mFMBRZwIhALn3TjUeVzZ0R74Ow5C1gLKeMwCcEhsXum3A6BBwN%2FurKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuHpbD0s%2B7z9SCRD4q3AOTx0lkuHVt7pO9IabPbk6DW9hcUZp1%2F1Y%2FnHSrE2dhPS8%2FMV2SwNfXTkhBisG7qs1xYWpPmKf5Hd1zlF6qtwMPxZCBpH%2Fo%2F9vTAOBTsW1K3395MujWupQB%2B7z7IZirSrpH7FxbOljtqitgvo8yD93aKcAYjeKHO1OmfY4WdGFQEf8e339EitaS2HRo%2Bj2k7%2B8rbcyAZAJo222U4zvZ5OwlgYq5qIg3UefhECm6bT7hEumnWu%2BHp4OHH8ViWNuE1Ma2FpqGafd7Ld%2B98N%2BmRbEvhQ913cUiCH%2BXuqnJPawwQ1XSC8pHbVa7CAeqUOTM31N5AtZYnEa1qh1161VIJSs04cvfVribQ2xFp14Yi0VVC%2BtwsbNgAnUEzFIRPFPCnuKQJ7U%2B2QajeX15RBjf5RWkt4zdRMwVuBXsAphK22DR436nzewrqc5%2FHOOjI1MLw59LxZoj7c%2FsVtlf4U5H%2FDyFqgKV7zm0faQN4RiupxVjA0hiTZZqoIL5QNHiLvsDLZBEXyAS0OfjawHLkQSXlFXjs5KK%2BEbVgA8rjjjqQbLr9O%2FzVrDWlOr7Dh3g5Oso%2FVsSxTmDnWVFRCq%2B9E%2Fgn7N6dAM03WjQJ%2BSEjD7s9AMO1sblNSMJJIFBgSBEzTDl%2BPK%2BBjqkAU1UATtwr1mjcIb5rrrCVgQpb6e4aunXARp%2FqzjRihWHHkZFvZqA55LfY%2FPX%2FnhMJUtedUz6nkSsWVEbvJDeXdj0bLwB94yweAz5kqEmpSTD6med8pZvKa%2BWaU0Ky7HeZHs1iYVT6QWQ0DzlLcXkgRVKeyWcqp3DyyHvEJzBGI5bou%2FxeR%2FsNWTQNvNVLyb5BVjWmgdEsjGi0a5RXXVNkoHJ1Gd9&X-Amz-Signature=6cfbbdde3677c263e68b4e406450e7826b60b864c62b1ce1dd0a3e00a8a41397&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
