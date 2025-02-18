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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJAMLDC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFQNA5LNJKxeLptrmYNJmXZuIB5mtjudIHSeIU9shLaXAiEA9Jz%2Ftxm%2BMTw1ESKWccxQl22AFsQ%2BWgGaD1Z0GQuZ1FcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBubRhqd%2BXsqSw5BNircA4MwyCF8%2FPt3uzdnNJXujho%2FVsXRFXQyka5oJI5BHZgGikEAsFD3ny8R8a0unBzjQCFLFy4hKtDIOzwcAQ2lhqivdVi3VOtTul0dlsO5apNN2raBVMfO9abqidGXAF2b0g2ShgFEkics3ZS8OKgcZSxrJomiH0nlWO3rQCglz2SCKAILAjDgPWzJZXixCFI6gB9h%2F6PjltY1VLngqSV%2FsY5%2BIg26mAINSa9XbCNyXrVlEuzXXC4rIFp1u%2F2z4RxtFGxbBSF2emgubuH8P3OPYtVsOtT0dA1IhOG0oWwTr1Wz4r3iJ%2BRDaXUZmJEyLEO6jkxOpMP47fCgW2W2jZYhVokkpweHIXe0oMnZKA%2FAbNFPqP0zhUEffhVrx1QTsVYGtBn5rRfy%2BFwSK0NyyfSjAzY7kikkyEEAPD%2FooonkkVoSE20UYL6aAjikK%2FrXbqj11twYjoRIaD87GEFCtkeUDAumHFZ%2BmBvUBkz22toso2QySuzpuqwZIk6c%2Fsw%2B2vBWBEiv5kIie3DhQsDHRigN1t8aBosZbxkfwFVqydSHCwFSmRptqFmSmXmOL7XThMy0fT6bDuiD14%2B34kvdwE%2BDySxpOFUtMTD2leGiNtM%2BhYXrGQ2LsfPYRgkKwGufMIzFz70GOqUBWfHxqfO1rRLpSe18kC3ZVPCAf8luG%2B%2BiPYJLG9ii0R%2BQ3haZ2QUOY3yxJGfQcLqZmzFeRFzBVtv7PzqbuNvyUXVQWkyfpVv%2BViiWcvmZbgqDJJlAc8K3UVPUo9opFMZhXw%2B1SkWCJGCi9Oq6WmZNJBumb0gmbTKddkU289X%2FfhQzVfU3j4q2Q122%2BHw2OLZTiHDtxR%2FAWIGxxU%2BmghqqsAf9e32S&X-Amz-Signature=32a60f0f48b3a6a1dc8de3a4cf373575e26c6c2e490a3be8d54476a179e22bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJAMLDC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFQNA5LNJKxeLptrmYNJmXZuIB5mtjudIHSeIU9shLaXAiEA9Jz%2Ftxm%2BMTw1ESKWccxQl22AFsQ%2BWgGaD1Z0GQuZ1FcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBubRhqd%2BXsqSw5BNircA4MwyCF8%2FPt3uzdnNJXujho%2FVsXRFXQyka5oJI5BHZgGikEAsFD3ny8R8a0unBzjQCFLFy4hKtDIOzwcAQ2lhqivdVi3VOtTul0dlsO5apNN2raBVMfO9abqidGXAF2b0g2ShgFEkics3ZS8OKgcZSxrJomiH0nlWO3rQCglz2SCKAILAjDgPWzJZXixCFI6gB9h%2F6PjltY1VLngqSV%2FsY5%2BIg26mAINSa9XbCNyXrVlEuzXXC4rIFp1u%2F2z4RxtFGxbBSF2emgubuH8P3OPYtVsOtT0dA1IhOG0oWwTr1Wz4r3iJ%2BRDaXUZmJEyLEO6jkxOpMP47fCgW2W2jZYhVokkpweHIXe0oMnZKA%2FAbNFPqP0zhUEffhVrx1QTsVYGtBn5rRfy%2BFwSK0NyyfSjAzY7kikkyEEAPD%2FooonkkVoSE20UYL6aAjikK%2FrXbqj11twYjoRIaD87GEFCtkeUDAumHFZ%2BmBvUBkz22toso2QySuzpuqwZIk6c%2Fsw%2B2vBWBEiv5kIie3DhQsDHRigN1t8aBosZbxkfwFVqydSHCwFSmRptqFmSmXmOL7XThMy0fT6bDuiD14%2B34kvdwE%2BDySxpOFUtMTD2leGiNtM%2BhYXrGQ2LsfPYRgkKwGufMIzFz70GOqUBWfHxqfO1rRLpSe18kC3ZVPCAf8luG%2B%2BiPYJLG9ii0R%2BQ3haZ2QUOY3yxJGfQcLqZmzFeRFzBVtv7PzqbuNvyUXVQWkyfpVv%2BViiWcvmZbgqDJJlAc8K3UVPUo9opFMZhXw%2B1SkWCJGCi9Oq6WmZNJBumb0gmbTKddkU289X%2FfhQzVfU3j4q2Q122%2BHw2OLZTiHDtxR%2FAWIGxxU%2BmghqqsAf9e32S&X-Amz-Signature=658c1f34f16bf68063e4ab2419dfd57deedcb562865d93dbf9bcc47ce2d228ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
