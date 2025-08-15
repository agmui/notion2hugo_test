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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYNQT3H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC4HH6%2BTMvNCEm0g1yQIRBOBbGfBCHbbZoxOYMg3YNDZwIhAKQSyi7yerGzAOOZGWPcLuE4VjpP3KZJLoPskUDcWtsuKv8DCGcQABoMNjM3NDIzMTgzODA1Igy7ETWVojxVX3KUx0wq3AMCOToA2pftl9OtVEY4UzWU5z23u8QGoABTY4Hx97F%2FYoLtJMFGKZQGPxUP39gt%2BQPeWRvmI2ogsoIsekV%2FTjaZ7zpsNW%2FCJe7T6Grmyf8srTvpPACGHzzY7Tja3nJgJskfmQWLqedU8YnH7nmIJsp%2BpJDLm9u65QnGLjalx5%2F0N7ZNI2L9%2BjyV7i8NXKc82FGUWGTmf2L3vsWSCgR0TeiF13jkvHlly2vvzwuaoxPY6oCpGlaYbEZnxkS8yaVbORh6DT11J9%2ByJzZ1NZVUFlisI7CgSMS9cbPPck%2B2bknAtFkw1i2AsDbCMjafbblFymaOKagle4GzPkhZux8DCbHCAfFphvNC8yoZW3NnnfcqmWbV3bPGY6rU9FUfzm4R4tAwxgmFPIQUtQ5NWbjofFVHdLlPek3iQ5SMcm9uoNexY7EjtOrt6%2B1%2F5H4suFZgvdrBtMxM0cnuP9putiuNm2zVGNB%2F5P3q2pG%2FxDP%2BYVI94xMOc5GC7PFfGPzCs9fehCeUIwnbztohd2BXs3KciPEdGR1vPFKDeURIKCOGf80uChLJyvzkKaH6ii08ukAvjJtr3qICzUnuslYQK9D6pJGw9dFdINdRhvyIHLHoLThSIs%2BxIv%2BNaDiVe7AUdDCL2P7EBjqkAYPoAhZfoY%2FXPwlUUoY8hA9WmrQ5XFLGqFmhYsJP4v6RMruUQTIzFXYMt49u9SXderDS2vaeyajPpf2MdGRgFrTz%2BqGuJSCqlpkNQcvcnvAzw1lAhdHBqrskebprT2cNVg5bR%2B3Tp2q8ka5gkOX21lcdEpFByLDMo%2BxUGXruC3%2FSQSPTmqmAqX9zpB3d8ovyhKsHQcvHbnKqDw59iTflJRctwGON&X-Amz-Signature=f5a607eab96c12ad45626f3cedf2659f351aa91495958746e41c95055e8b0499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYNQT3H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC4HH6%2BTMvNCEm0g1yQIRBOBbGfBCHbbZoxOYMg3YNDZwIhAKQSyi7yerGzAOOZGWPcLuE4VjpP3KZJLoPskUDcWtsuKv8DCGcQABoMNjM3NDIzMTgzODA1Igy7ETWVojxVX3KUx0wq3AMCOToA2pftl9OtVEY4UzWU5z23u8QGoABTY4Hx97F%2FYoLtJMFGKZQGPxUP39gt%2BQPeWRvmI2ogsoIsekV%2FTjaZ7zpsNW%2FCJe7T6Grmyf8srTvpPACGHzzY7Tja3nJgJskfmQWLqedU8YnH7nmIJsp%2BpJDLm9u65QnGLjalx5%2F0N7ZNI2L9%2BjyV7i8NXKc82FGUWGTmf2L3vsWSCgR0TeiF13jkvHlly2vvzwuaoxPY6oCpGlaYbEZnxkS8yaVbORh6DT11J9%2ByJzZ1NZVUFlisI7CgSMS9cbPPck%2B2bknAtFkw1i2AsDbCMjafbblFymaOKagle4GzPkhZux8DCbHCAfFphvNC8yoZW3NnnfcqmWbV3bPGY6rU9FUfzm4R4tAwxgmFPIQUtQ5NWbjofFVHdLlPek3iQ5SMcm9uoNexY7EjtOrt6%2B1%2F5H4suFZgvdrBtMxM0cnuP9putiuNm2zVGNB%2F5P3q2pG%2FxDP%2BYVI94xMOc5GC7PFfGPzCs9fehCeUIwnbztohd2BXs3KciPEdGR1vPFKDeURIKCOGf80uChLJyvzkKaH6ii08ukAvjJtr3qICzUnuslYQK9D6pJGw9dFdINdRhvyIHLHoLThSIs%2BxIv%2BNaDiVe7AUdDCL2P7EBjqkAYPoAhZfoY%2FXPwlUUoY8hA9WmrQ5XFLGqFmhYsJP4v6RMruUQTIzFXYMt49u9SXderDS2vaeyajPpf2MdGRgFrTz%2BqGuJSCqlpkNQcvcnvAzw1lAhdHBqrskebprT2cNVg5bR%2B3Tp2q8ka5gkOX21lcdEpFByLDMo%2BxUGXruC3%2FSQSPTmqmAqX9zpB3d8ovyhKsHQcvHbnKqDw59iTflJRctwGON&X-Amz-Signature=634c7837229b80aa3826c85cd5fe82e99237bf2832d0d90909ea8929d625e62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
