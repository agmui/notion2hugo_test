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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPMG5HU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDrBtLmVD3zBFm3GW%2F63Fy%2BVKHtH9VVpRvMsqj3P607LQIhAPvv6dDWheS%2F6Ass2kVsmKjjDlxFJ2a1aPJockWpo0xcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZAHjswXHdkYtemrUq3APedFsXV4kQboMAJQiMeOfJjzKTwAmIfK%2BhPIDHmtKmYFhjBrCJb8ENJTrt6tQ1%2FnSEGZvn6mpMmvJZXCrcYQCdtds3r3KMJlWI7QoWLv6G5KxRRyEZzHGCCo68gpvk3t9cBZQjfjD3dpmJ2KEQSn85EZOdHMKmx6J3CTBoHI6k8krSYDkA7TdbvUH6q3DcxEuymlIUk%2BMPFKcOJwKuo7BdWGiamKlCMt4%2BvbPCo6iRqaKmrhTB0Yl9O8HuYosWMIMqvrgXYOxIcN8TYxygmd%2FlAqLdhkgJSxrlPP2jHCb7gu%2B%2BYM6dm0kZ2Lpab9VglDs3ZOhK12crYcW6F1bb5m2TkQlDpRbApwb%2BoOfoKhTT%2B8lbnWPA%2BcchAbK4mGLjL7M9nHP7c8aANG0n4Amb%2BAaGSbgnQHM5QzprI261h0aKEJKAqY%2FcXXDOKyS7kfCWSI9UHm%2F3zTIVxHpIZL0GzRKPFeAGQYLOPJBYNxZB%2FifNJlfJwVV6wxt6Iont%2B4oyKUSwkmTatP1rF2UlPgYsbf%2FP26IlG8tHYCCxBXOLpX9DjnICa7cDvuFkQqf3DAflKcbLpXpMINvC2fwT63XkA2ideen5M1mi3JVwb1oEW%2BRS%2FY42bd4ccrMkgW9kgDDxs9rABjqkAaMt0757LWr2q8q%2FUpHuY0IXPxmI1NYVMU9Zv%2Fqtj9uWvFE0hTSd1yfvBWzhsO%2BILdWrDVEAeNZSBK0QCUBIGsVOhStpERTB9QwUKjMTgwnnoykE2X9lwY4Hc6yynOI%2Fz7qyR9kmD%2FXv79sz2vp3Nk40%2FtvLca94AWvIIfTzGBcv9kiBEdJ1Eqfb2aJ50zxKK71NlTh2xMeTaEBoyxo9BLTMdeXf&X-Amz-Signature=15c497430acba985a67c85ad27a97586f8f05374c0ae99592d4a2a2a3f5cf23e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPMG5HU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDrBtLmVD3zBFm3GW%2F63Fy%2BVKHtH9VVpRvMsqj3P607LQIhAPvv6dDWheS%2F6Ass2kVsmKjjDlxFJ2a1aPJockWpo0xcKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZAHjswXHdkYtemrUq3APedFsXV4kQboMAJQiMeOfJjzKTwAmIfK%2BhPIDHmtKmYFhjBrCJb8ENJTrt6tQ1%2FnSEGZvn6mpMmvJZXCrcYQCdtds3r3KMJlWI7QoWLv6G5KxRRyEZzHGCCo68gpvk3t9cBZQjfjD3dpmJ2KEQSn85EZOdHMKmx6J3CTBoHI6k8krSYDkA7TdbvUH6q3DcxEuymlIUk%2BMPFKcOJwKuo7BdWGiamKlCMt4%2BvbPCo6iRqaKmrhTB0Yl9O8HuYosWMIMqvrgXYOxIcN8TYxygmd%2FlAqLdhkgJSxrlPP2jHCb7gu%2B%2BYM6dm0kZ2Lpab9VglDs3ZOhK12crYcW6F1bb5m2TkQlDpRbApwb%2BoOfoKhTT%2B8lbnWPA%2BcchAbK4mGLjL7M9nHP7c8aANG0n4Amb%2BAaGSbgnQHM5QzprI261h0aKEJKAqY%2FcXXDOKyS7kfCWSI9UHm%2F3zTIVxHpIZL0GzRKPFeAGQYLOPJBYNxZB%2FifNJlfJwVV6wxt6Iont%2B4oyKUSwkmTatP1rF2UlPgYsbf%2FP26IlG8tHYCCxBXOLpX9DjnICa7cDvuFkQqf3DAflKcbLpXpMINvC2fwT63XkA2ideen5M1mi3JVwb1oEW%2BRS%2FY42bd4ccrMkgW9kgDDxs9rABjqkAaMt0757LWr2q8q%2FUpHuY0IXPxmI1NYVMU9Zv%2Fqtj9uWvFE0hTSd1yfvBWzhsO%2BILdWrDVEAeNZSBK0QCUBIGsVOhStpERTB9QwUKjMTgwnnoykE2X9lwY4Hc6yynOI%2Fz7qyR9kmD%2FXv79sz2vp3Nk40%2FtvLca94AWvIIfTzGBcv9kiBEdJ1Eqfb2aJ50zxKK71NlTh2xMeTaEBoyxo9BLTMdeXf&X-Amz-Signature=3d2469d553b0a906d2a7475c7a4956ffe620b5c5197c9ea052723667adbb1afd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
