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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCUWS6C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHyqgzFUewR%2FdRWvCEznJlQMa%2BV136N1rtshLhL7M92LAiBOC7vpcwGsc6F25V4pR%2FgqNcpycufK%2BhaSVmAz7qv8pyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMTBeX5O%2BUFtWlJFHKtwDgksgt27foZ8UT6j0aMeCrVmJ%2BEmrEmWnhv1UsV%2BySnAR8HTTEdCNoWO1sEgKzbB25zRx%2BsMZ%2BF4ddzXew4SxHV3Ere8Iqi%2BkbpE3z0mqX9g4uHx192pSDRARuJO2AE9%2F2%2FKjcL62WajsxuQjxqsta3m9gZ5MJ0p8ILGUUnu882EzkQFsM%2FVSof95iE4Xpm%2FKwXngk%2F9LU8Hpn%2FSLnMLhMFQZnVsYhC3Bar7TgvLdOvCIpH6G3hirzUcADsUi940Lvoij7jGGYZiGRwkwCsv8NjPRvFAyq5jkziRGnQyf83xK%2F%2BeJJNnY%2Bn6fd%2BTsFSm3KJqip%2FFvs8xDUWkhR93NOgmOiXQ1CG4Oua%2BduCqWA9OvSVRMwJO5r4kYsJ3fZqkb9uS9uzmflBUwxIov%2FFmRgnDqOSbON%2FHbmJSWxKfOGdgn34o3fpwWj0fxXp%2BYtKRXRnx3feCYvtLsHqVThWnpaD0lzWIfI7ZTZoOpVbLnSpzhRwnTMpPL6uhIEBYPcMk0rMh7U8rhXLv7rAE%2BSUGH9q0LCzeAn66RXrHYT3rDCpb4vJ7QSmcyHHJwCrxVG50bALTkp5oIZpHtPoOstXmZwCN1W3GBOsILPLPR%2FkYyCsbHQQMBshfjOV3B9mMw1tH0wgY6pgEHXVnHX8MUcPkfchinTIvmywEnnuhgBo0dhFqjQyvXgcUpR%2BJbsgpMs2UBV53JdRNj2fieiatQn7%2Fab1Zutp4XviiFsUTQqKv9A5dpJnEyeJIdAl5RHB7fsxsqxC0ynnhauVzX3mGe6MS%2BgtbV43rxMoIiQuoV6zwpkbUOU6HkzpIaX3z8uc1ja7SVOTkcd9mo6JTnx3B8gvOqzjD%2FVT4e%2BFCx%2FSDh&X-Amz-Signature=b438d9d3f525999dba120ba57c2115e5cb3e12649dce47dc0f289cda82968976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCUWS6C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHyqgzFUewR%2FdRWvCEznJlQMa%2BV136N1rtshLhL7M92LAiBOC7vpcwGsc6F25V4pR%2FgqNcpycufK%2BhaSVmAz7qv8pyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMTBeX5O%2BUFtWlJFHKtwDgksgt27foZ8UT6j0aMeCrVmJ%2BEmrEmWnhv1UsV%2BySnAR8HTTEdCNoWO1sEgKzbB25zRx%2BsMZ%2BF4ddzXew4SxHV3Ere8Iqi%2BkbpE3z0mqX9g4uHx192pSDRARuJO2AE9%2F2%2FKjcL62WajsxuQjxqsta3m9gZ5MJ0p8ILGUUnu882EzkQFsM%2FVSof95iE4Xpm%2FKwXngk%2F9LU8Hpn%2FSLnMLhMFQZnVsYhC3Bar7TgvLdOvCIpH6G3hirzUcADsUi940Lvoij7jGGYZiGRwkwCsv8NjPRvFAyq5jkziRGnQyf83xK%2F%2BeJJNnY%2Bn6fd%2BTsFSm3KJqip%2FFvs8xDUWkhR93NOgmOiXQ1CG4Oua%2BduCqWA9OvSVRMwJO5r4kYsJ3fZqkb9uS9uzmflBUwxIov%2FFmRgnDqOSbON%2FHbmJSWxKfOGdgn34o3fpwWj0fxXp%2BYtKRXRnx3feCYvtLsHqVThWnpaD0lzWIfI7ZTZoOpVbLnSpzhRwnTMpPL6uhIEBYPcMk0rMh7U8rhXLv7rAE%2BSUGH9q0LCzeAn66RXrHYT3rDCpb4vJ7QSmcyHHJwCrxVG50bALTkp5oIZpHtPoOstXmZwCN1W3GBOsILPLPR%2FkYyCsbHQQMBshfjOV3B9mMw1tH0wgY6pgEHXVnHX8MUcPkfchinTIvmywEnnuhgBo0dhFqjQyvXgcUpR%2BJbsgpMs2UBV53JdRNj2fieiatQn7%2Fab1Zutp4XviiFsUTQqKv9A5dpJnEyeJIdAl5RHB7fsxsqxC0ynnhauVzX3mGe6MS%2BgtbV43rxMoIiQuoV6zwpkbUOU6HkzpIaX3z8uc1ja7SVOTkcd9mo6JTnx3B8gvOqzjD%2FVT4e%2BFCx%2FSDh&X-Amz-Signature=66528d407d5bfb035c5566d36e0fae7b5dca29843289397511c10539c45c2638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
