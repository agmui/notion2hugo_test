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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UXZSWDX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDWBkKsiIFNssO3FPSiJ7WxsNBQfuqOvDizLw8xhCTIUgIhAKK4aeq6rLrGLlgh64fmzkZbrY64bIrc3tAv4xtymUKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgwT9OTZk5BwLyrsUtYq3AMhpzLZ2GaRp3Mpx2ir3Bf2fpGQ3SYy5AJV%2FcDakE4zBFH%2FB3FtaMdxy%2FvZoIaUsMXfrOQcXhsgm72xJLb9JfCAxbgEDfkzY3LHN4ocDS3iHh76nze%2F0jmf0GVBDdUjVELY9JCFLKDLc2j7vKsi2F8zGF9xExuOMhBJ6sc%2FpSIKIkPDvFfA7Z8%2BrmzM5L2CySHVVOMuVD1Upf4gs0yzSdHJ6qQXDq1XQ7IK03Moz1JWWAUVvAG1llGb345xPiaLHxNX0WiGDS00NDQR3gdorAf5wTpQ8Z6LOap42K2SCCgXLrUE5mxgQjuAU4hpYWY%2FUULQBJdH57CooqNmFmASFSd%2FSN2zbCcmMshVB7AUBa2awq1e%2B4XFZa5DxWrQWm%2FWi3WhZt9iNqhstEA%2F8MjLf6nSb7gP7OXbx8OrbXc5n1A23KviYyZj2SyQHdCOdq%2BorVUrSnoeGp2OMhITBNmN2xWhCTw%2FI5UDhUk89FMtEgidyGTATEa7EUIMlBIbHUEBN9sCkPSZq%2FtcADo%2BEm0lhVjvwAvIyex%2Bzdsov5hYkCvBIsIU%2BWqs3eusrdzyvlk3dy84uCF2HMye%2FCpmwIDg4K%2B1z4uMxzLt8odby8nsO7Z8S%2F6XZiLGrWS%2F65TEujCpo%2FvEBjqkARqgksbgSzw9yUfrMP%2BobG6lc5QGtOBPhvUY5YXI2RZb%2FerCNRmStcDIku8mOvExDreDpEZaJTz75jVGxWlbvZmMAem3GswTj1iHoScMfwS2LTVjovAJ3v4bBQnBC6RrfcfG0QzfG7U9xrmBeQN1XmayDrliXBSw9YT3%2FlwGGlmYRa%2B5UdUe9egbsoSEF0mExpDCs9SHRnlDqNAZADkDtmvHDURP&X-Amz-Signature=a4d7d2e853ae2b0247ac7983870e1a3c768b93060b80ad431dca64bed0a66eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UXZSWDX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDWBkKsiIFNssO3FPSiJ7WxsNBQfuqOvDizLw8xhCTIUgIhAKK4aeq6rLrGLlgh64fmzkZbrY64bIrc3tAv4xtymUKGKv8DCFcQABoMNjM3NDIzMTgzODA1IgwT9OTZk5BwLyrsUtYq3AMhpzLZ2GaRp3Mpx2ir3Bf2fpGQ3SYy5AJV%2FcDakE4zBFH%2FB3FtaMdxy%2FvZoIaUsMXfrOQcXhsgm72xJLb9JfCAxbgEDfkzY3LHN4ocDS3iHh76nze%2F0jmf0GVBDdUjVELY9JCFLKDLc2j7vKsi2F8zGF9xExuOMhBJ6sc%2FpSIKIkPDvFfA7Z8%2BrmzM5L2CySHVVOMuVD1Upf4gs0yzSdHJ6qQXDq1XQ7IK03Moz1JWWAUVvAG1llGb345xPiaLHxNX0WiGDS00NDQR3gdorAf5wTpQ8Z6LOap42K2SCCgXLrUE5mxgQjuAU4hpYWY%2FUULQBJdH57CooqNmFmASFSd%2FSN2zbCcmMshVB7AUBa2awq1e%2B4XFZa5DxWrQWm%2FWi3WhZt9iNqhstEA%2F8MjLf6nSb7gP7OXbx8OrbXc5n1A23KviYyZj2SyQHdCOdq%2BorVUrSnoeGp2OMhITBNmN2xWhCTw%2FI5UDhUk89FMtEgidyGTATEa7EUIMlBIbHUEBN9sCkPSZq%2FtcADo%2BEm0lhVjvwAvIyex%2Bzdsov5hYkCvBIsIU%2BWqs3eusrdzyvlk3dy84uCF2HMye%2FCpmwIDg4K%2B1z4uMxzLt8odby8nsO7Z8S%2F6XZiLGrWS%2F65TEujCpo%2FvEBjqkARqgksbgSzw9yUfrMP%2BobG6lc5QGtOBPhvUY5YXI2RZb%2FerCNRmStcDIku8mOvExDreDpEZaJTz75jVGxWlbvZmMAem3GswTj1iHoScMfwS2LTVjovAJ3v4bBQnBC6RrfcfG0QzfG7U9xrmBeQN1XmayDrliXBSw9YT3%2FlwGGlmYRa%2B5UdUe9egbsoSEF0mExpDCs9SHRnlDqNAZADkDtmvHDURP&X-Amz-Signature=e0578c1aec52ef0f02b520687933d8e7b95b15ddb8e16b49fc9d94676adcfaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
