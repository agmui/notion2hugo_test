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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGBMFH2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQChmBB9MIAGkEshK8u9kgYdlVqrePcEF9wQTcJR5jPq6AIgSMlIisX3pXl5iS3ZMlw%2FUVO0RnBmffqw7aeBWO6aexcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDCLn8cmSO%2FIPbESxiSrcAzkAKcUL3j8dDZeZfAyu%2FIokrCR7ADK6Xmz5hSIsGLpKiNSioM%2BdIIyjdkt71O13vY1HzWX1nL%2FyuTEPmo97CnmQ3bAVOMLmhd3xh8os%2BlmqlqkWGiDPwH4sYifx4IXYJWgAPO4ZETh7kWHUGyZ%2BROUwlxiqg%2BJ0oFbMHKO6dEnk%2BKQQGsMCueihFOl82djKKbHCVFEIqb0OTOsuE9pNz5CWaeeX1F%2BouTVY6B3tlCKkfasir%2BKmdcZK0RuC7KFrNIqIPDxwz0XXdUqyh9FsZunwhr0rJh042eSOfamSnJbHuILYU65tmVB5UwnBxR3t%2Fq05LFg9h7ZGNrA%2F3Xw0kHKoRTpFNriFxSMWvPolEZJpWpyYieKOyPOftuaTPNiwNMqaWb7LBwcSKLApKnqdIn72Ui6%2B6i4mbTc4RP30Jo5D1xBnR0CSTvWjRCK4aU0kDgKrIHnVaEgA36eFGdIbfaajD51Tu9W5eUtoXbg0YSvxmEkY1qpXXKp%2FPX7HBXe%2FmcIvB4sif2MBB0jFfX4o85DoeA3kP8bhTyeWY6Qpi6%2BEQnZAFNvUYm%2BxlSMRTu7TJAttCB%2BH5bgLMZxSLnexzbHCzXZenk29gvLTGRn%2FLctHLt9Jg1V%2FpN%2BN07kDMPfQk8EGOqUBB%2BO3tAubGojAMtLFkeGiHnVmQNY1QAxIZ9RLaQKjQ6mDZRpV190zz9B0LXSrKz74%2Fuu1Rq3GbZ0kmPYhpZtPFGmETczOriC4fNB6cxsLPm2GV2qlIpeB5OG7hofNvZvqft%2BCEOSNgnxDOSsntCmWUyElXXhgB4bPldsaN49zR0uZrJjVRCEEY8JDf9HL0ByCcW0sE1bV6B8UHcca%2BrjNhhNVrsC4&X-Amz-Signature=31f8a561404f2a8a48593a95a53812b420f563a2df118ee29ce78d0ea2114f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGBMFH2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQChmBB9MIAGkEshK8u9kgYdlVqrePcEF9wQTcJR5jPq6AIgSMlIisX3pXl5iS3ZMlw%2FUVO0RnBmffqw7aeBWO6aexcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDCLn8cmSO%2FIPbESxiSrcAzkAKcUL3j8dDZeZfAyu%2FIokrCR7ADK6Xmz5hSIsGLpKiNSioM%2BdIIyjdkt71O13vY1HzWX1nL%2FyuTEPmo97CnmQ3bAVOMLmhd3xh8os%2BlmqlqkWGiDPwH4sYifx4IXYJWgAPO4ZETh7kWHUGyZ%2BROUwlxiqg%2BJ0oFbMHKO6dEnk%2BKQQGsMCueihFOl82djKKbHCVFEIqb0OTOsuE9pNz5CWaeeX1F%2BouTVY6B3tlCKkfasir%2BKmdcZK0RuC7KFrNIqIPDxwz0XXdUqyh9FsZunwhr0rJh042eSOfamSnJbHuILYU65tmVB5UwnBxR3t%2Fq05LFg9h7ZGNrA%2F3Xw0kHKoRTpFNriFxSMWvPolEZJpWpyYieKOyPOftuaTPNiwNMqaWb7LBwcSKLApKnqdIn72Ui6%2B6i4mbTc4RP30Jo5D1xBnR0CSTvWjRCK4aU0kDgKrIHnVaEgA36eFGdIbfaajD51Tu9W5eUtoXbg0YSvxmEkY1qpXXKp%2FPX7HBXe%2FmcIvB4sif2MBB0jFfX4o85DoeA3kP8bhTyeWY6Qpi6%2BEQnZAFNvUYm%2BxlSMRTu7TJAttCB%2BH5bgLMZxSLnexzbHCzXZenk29gvLTGRn%2FLctHLt9Jg1V%2FpN%2BN07kDMPfQk8EGOqUBB%2BO3tAubGojAMtLFkeGiHnVmQNY1QAxIZ9RLaQKjQ6mDZRpV190zz9B0LXSrKz74%2Fuu1Rq3GbZ0kmPYhpZtPFGmETczOriC4fNB6cxsLPm2GV2qlIpeB5OG7hofNvZvqft%2BCEOSNgnxDOSsntCmWUyElXXhgB4bPldsaN49zR0uZrJjVRCEEY8JDf9HL0ByCcW0sE1bV6B8UHcca%2BrjNhhNVrsC4&X-Amz-Signature=007d081e235b658f2d995ab0a8aea9a9efe842383e0bd83cb3154461ee38b09d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
