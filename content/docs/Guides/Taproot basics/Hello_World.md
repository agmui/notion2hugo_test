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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF7AH24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC2Tc5Fn8kfL6Yuy%2FcDK%2Bs1JgIOaHWNn1Mi4IchGdBCSQIgKJmnF3x2KJAAFxVWTryPMO5mXnr1%2FjkopYwz6xqmJqEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEm2mFYDyL0xSlnhbircA016mWB7RelxKARumYdEWJx46spTmUdecC1fMIMGwpcQxw6ded8PT%2FICYZrphUfg7uz%2ByBCDbpLm6sUim%2FqXYSbxttkAoLIQGHkCOVErXPkSD6fIuMY%2F1d6DoTu1PYfaz2QIlr0xU3V%2Ba8RA9jg%2FFDFM2N%2FiJ1F2gKPAod46%2FtX0pwEUIcu%2BpgDiLGi%2BI9kyF47tB%2BwdYbgGvybI3GBl6SW4%2BD%2FYRosBKBhU3eSXEMmFiiD6mkeLiHMiAtvZz8Mb4h%2BJ%2FiU3ft2LuzoF9ktAn5xa0Xc9NcD%2BSUyiBUsnFG6OJ7FF%2BhMuMysZBV1cLrJ8YrcYp3NpcraVGz%2BGGQvgcOcDHqZYgt3K628zr4WPuC0xvbfz1JdJbdfLAnIhvvWO3n%2FXOSYvSlTlXji6UzKEz4pAJJSjMDYVOz7OmRx0PPLBgRYzYdcfdp6js8ArIYnvo1X18s6h4AQH4jvHamViHJEgOVsqHJ2OwmShjL%2BIBoU%2BHbhD1ikBlhq6q%2BzkTmhwkMg9%2Bzd%2Fzt88%2FNA4aey8iFJi%2Fl0qPtn%2FhwaHtB4mBGEOxtPmPATpSapqrbzxYujkApw1O4l6m%2F3i9EnzrmqQKjNxn2rcejsNy7iOfJg%2F21cCQmZMUlue%2FcjIgYVkMPnV0MEGOqUB%2FerXTYF5pFBI%2FyKFSZ605JyHosRqH3FwP0NwcUEIkRzDxfdbTASPznAaf9jdXZqQlOVUzai6Vaox6AHpAJtK3QwOyFMwMCf%2B0kwwb3DXkNJStZYN8ZfTG222pFv1gxKjeb64j6z9mWDOOi%2BF6lYO1gE42N5WkDdNnhwb%2BhhZvRpe%2Fa2vlaZwDqiJK3V17kPqT2f7zyeRZ6gJLkFptRBQ8UKoX19O&X-Amz-Signature=f9173799eefeab1df549e623f425277646358d71eeb7d3dad4e94b816cca1b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBF7AH24%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC2Tc5Fn8kfL6Yuy%2FcDK%2Bs1JgIOaHWNn1Mi4IchGdBCSQIgKJmnF3x2KJAAFxVWTryPMO5mXnr1%2FjkopYwz6xqmJqEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEm2mFYDyL0xSlnhbircA016mWB7RelxKARumYdEWJx46spTmUdecC1fMIMGwpcQxw6ded8PT%2FICYZrphUfg7uz%2ByBCDbpLm6sUim%2FqXYSbxttkAoLIQGHkCOVErXPkSD6fIuMY%2F1d6DoTu1PYfaz2QIlr0xU3V%2Ba8RA9jg%2FFDFM2N%2FiJ1F2gKPAod46%2FtX0pwEUIcu%2BpgDiLGi%2BI9kyF47tB%2BwdYbgGvybI3GBl6SW4%2BD%2FYRosBKBhU3eSXEMmFiiD6mkeLiHMiAtvZz8Mb4h%2BJ%2FiU3ft2LuzoF9ktAn5xa0Xc9NcD%2BSUyiBUsnFG6OJ7FF%2BhMuMysZBV1cLrJ8YrcYp3NpcraVGz%2BGGQvgcOcDHqZYgt3K628zr4WPuC0xvbfz1JdJbdfLAnIhvvWO3n%2FXOSYvSlTlXji6UzKEz4pAJJSjMDYVOz7OmRx0PPLBgRYzYdcfdp6js8ArIYnvo1X18s6h4AQH4jvHamViHJEgOVsqHJ2OwmShjL%2BIBoU%2BHbhD1ikBlhq6q%2BzkTmhwkMg9%2Bzd%2Fzt88%2FNA4aey8iFJi%2Fl0qPtn%2FhwaHtB4mBGEOxtPmPATpSapqrbzxYujkApw1O4l6m%2F3i9EnzrmqQKjNxn2rcejsNy7iOfJg%2F21cCQmZMUlue%2FcjIgYVkMPnV0MEGOqUB%2FerXTYF5pFBI%2FyKFSZ605JyHosRqH3FwP0NwcUEIkRzDxfdbTASPznAaf9jdXZqQlOVUzai6Vaox6AHpAJtK3QwOyFMwMCf%2B0kwwb3DXkNJStZYN8ZfTG222pFv1gxKjeb64j6z9mWDOOi%2BF6lYO1gE42N5WkDdNnhwb%2BhhZvRpe%2Fa2vlaZwDqiJK3V17kPqT2f7zyeRZ6gJLkFptRBQ8UKoX19O&X-Amz-Signature=160b8e262a9a3ffeac1d8bfdd35da006233a48e8de0df0bbde4ebd2c235f8253&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
