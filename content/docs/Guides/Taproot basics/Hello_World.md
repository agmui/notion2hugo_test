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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYAPBX6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUcvqYsrG82v9QBbY6R2leKby1TKEOQjIFIPIT92Ui1AiEAzF3%2FXTMQvHZouEK7NumD7fF5GYWWuil8YIfXHBvlDuMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7mXKNNeq5eRpHwaircA60rGKEDzCrxikWHbq6vxYg%2FjxhK4e3qaKonu0dDfa0vv5KrCtr0uebOmN%2FmPatd5Y2muYS7QfK0z7FPx8ZafGlLgbPAR2KY6WEqsYjow4WI9hs1vKyWWJHYH7%2B2Pdtofmaz5mO9XBXEfaWgb04zWv569Jt4NCeHiuyXPHP7LOXC2fm%2B8YN1KJlkKHmlxwesO2H7bEdzWnTbXVdM5M4FVuLs6FgiGQZoMkmURCZWW0GZDfmq2%2F3P%2BFyMlLmSICcslVVd2u7TWJ%2BSdhbnpbyyM4RJDeKpdN9X0wdpERacpIrecK3DDt%2BgsHQcVzPTqCfcp7UfFjHfzb5trAUHaK1Yg5fv4l0XbHxK8eP8csYS0E%2F4ponehC%2FWAs2C2d%2FmN%2BKgyg%2B9p6GMGXdSKFtE56kVpQx%2BqvGFw2QR6okOPXyjlkK9goWt16JwLolVom6FNbHJVZuvQSweoC6DlMFX4SdPrGQj8Vi4NFXe%2F3h48aJc0qd7eEQVI%2BMqIWPt8pp9RjmDHoAqQ5keTmC1J2pqd%2BeNVGAd%2BOH2Sxf72iH2LjLdyaU3MQYrRndiRzTCwNzFxdDeuUYnZm0OFTIiEAlYOnvtPSSVIKh78h2IOOTAR%2FASFDfuleOCsS2OiSi4PbxVMLWT0r4GOqUBDmDqTjF9vq1DSHsmeXmoNC41ykbnFyNmP3EStbpX3MDi602UDhHogB%2F%2Fw%2BBcunGPLVXumkUGbC%2FeKjHYxWctWkQrjZfeBHYdmCYxV%2BGM3lYe0n7dLso9sZI6DCSy58M%2BgCkEtMZhLvdDZZCr2A42JWrmgF93vnoW3J%2BILDi7ZkLiXqnjjXmw66PID4dKyGg3vdA%2BE%2FGGtS9XYbKbuzHBtyJ8Gbog&X-Amz-Signature=153c7297923140e2c0cb38af1177353e865551d9d72e356336ec3ecb62023748&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYAPBX6%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUcvqYsrG82v9QBbY6R2leKby1TKEOQjIFIPIT92Ui1AiEAzF3%2FXTMQvHZouEK7NumD7fF5GYWWuil8YIfXHBvlDuMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7mXKNNeq5eRpHwaircA60rGKEDzCrxikWHbq6vxYg%2FjxhK4e3qaKonu0dDfa0vv5KrCtr0uebOmN%2FmPatd5Y2muYS7QfK0z7FPx8ZafGlLgbPAR2KY6WEqsYjow4WI9hs1vKyWWJHYH7%2B2Pdtofmaz5mO9XBXEfaWgb04zWv569Jt4NCeHiuyXPHP7LOXC2fm%2B8YN1KJlkKHmlxwesO2H7bEdzWnTbXVdM5M4FVuLs6FgiGQZoMkmURCZWW0GZDfmq2%2F3P%2BFyMlLmSICcslVVd2u7TWJ%2BSdhbnpbyyM4RJDeKpdN9X0wdpERacpIrecK3DDt%2BgsHQcVzPTqCfcp7UfFjHfzb5trAUHaK1Yg5fv4l0XbHxK8eP8csYS0E%2F4ponehC%2FWAs2C2d%2FmN%2BKgyg%2B9p6GMGXdSKFtE56kVpQx%2BqvGFw2QR6okOPXyjlkK9goWt16JwLolVom6FNbHJVZuvQSweoC6DlMFX4SdPrGQj8Vi4NFXe%2F3h48aJc0qd7eEQVI%2BMqIWPt8pp9RjmDHoAqQ5keTmC1J2pqd%2BeNVGAd%2BOH2Sxf72iH2LjLdyaU3MQYrRndiRzTCwNzFxdDeuUYnZm0OFTIiEAlYOnvtPSSVIKh78h2IOOTAR%2FASFDfuleOCsS2OiSi4PbxVMLWT0r4GOqUBDmDqTjF9vq1DSHsmeXmoNC41ykbnFyNmP3EStbpX3MDi602UDhHogB%2F%2Fw%2BBcunGPLVXumkUGbC%2FeKjHYxWctWkQrjZfeBHYdmCYxV%2BGM3lYe0n7dLso9sZI6DCSy58M%2BgCkEtMZhLvdDZZCr2A42JWrmgF93vnoW3J%2BILDi7ZkLiXqnjjXmw66PID4dKyGg3vdA%2BE%2FGGtS9XYbKbuzHBtyJ8Gbog&X-Amz-Signature=5cbcec55623dce52307684db45a9df215725605b58dfcb0926af99233bb3182d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
