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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDDHXXIX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICP6Ua4YE9DByK883tRUaFWEztdNpPLiX3%2Bz%2FS%2Bf6yL7AiEA30zFvEc8qipQhK7cyfGl%2B%2B9o4oVV3RRiDJquk3vwNAsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeZD8dlqzLK26osHyrcA1jwPy%2BBPbY2i7HixxgUC4NE%2FnSFCiyB3fA1vVLDTuLXugIdtMe9hcAAKwsqBWO%2FE9ZFf6wNvugr6DDAteUBiJrtT0jRr2SPWJWFvh8kEYYCVfERv43tSk1WIxW2Wkper%2FBg6zu0dcR0SXrGd8cXMqvgTv%2BSOefkkBS3r8ScKwkRa6LmdbNXaMkbVZH75pE3CgmYjOtCg5hxrjZGbyOxxgxrvuShsWV6OFL%2FrMvLT1NAxqeOvRoyH6suOwip1SYrn8oXORKQyYRrujGYSgSism%2FO%2BS2T7GQG1xWf6MbzHrg2nLeSwycyX%2BhBK0e09UwHtfqb1%2Fv81Xg12qjXSIWPSLU07yyK6b%2FvlU2VGn0%2FaDhYlrGhCJi0eMRSgU4KRFbS54RU1cyUYReKyvYglH%2BNmp7iW05Fj%2B0iYhcq1fPdI3EDusMchUvHBWzEpc%2BvcZH%2FbAUGfSnOiuaw4pJjMAwuDomua6Fvu%2BLJJDJLKdRj0%2FGH%2BBr%2FUDGEDAKcTkdizKkTLMjCvdhRVZA927pIwv4YaO17huIU096se%2F%2BN3ibgQNA2Uz9Db9Un8FBBa0Xf4LVPUjITcxTTQQxHvUXrWMZ4ndQEQoxxZUGbxmLdRp1Z3%2Bkry7zLdi5PnmJDAiuwMMH%2B0L0GOqUB4BXD8LKoZ3flC5m2hQpVghlDkwJI7XvZDlVglSYYyUOiPdwS9uQ%2FJxp75BDi5jR6mIRnYd9QfNVv%2FMuqODgjdzm8pfIrtFMLbhvpuncuDkx3duyfZvdhUV8QKNjY209c6uDwPCCf8MqOfR0AG9kXsqiYg7YO8kt%2Fsy3%2F8uqOMldVmE9zvyxf03tuWjW7pZBzMJy6BVcJ5VmTxI33GyeRae9shaov&X-Amz-Signature=94ba1c710d6e15c345d49852767d975250781dbdc635036d0a1a1ed59fce8543&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDDHXXIX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICP6Ua4YE9DByK883tRUaFWEztdNpPLiX3%2Bz%2FS%2Bf6yL7AiEA30zFvEc8qipQhK7cyfGl%2B%2B9o4oVV3RRiDJquk3vwNAsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeZD8dlqzLK26osHyrcA1jwPy%2BBPbY2i7HixxgUC4NE%2FnSFCiyB3fA1vVLDTuLXugIdtMe9hcAAKwsqBWO%2FE9ZFf6wNvugr6DDAteUBiJrtT0jRr2SPWJWFvh8kEYYCVfERv43tSk1WIxW2Wkper%2FBg6zu0dcR0SXrGd8cXMqvgTv%2BSOefkkBS3r8ScKwkRa6LmdbNXaMkbVZH75pE3CgmYjOtCg5hxrjZGbyOxxgxrvuShsWV6OFL%2FrMvLT1NAxqeOvRoyH6suOwip1SYrn8oXORKQyYRrujGYSgSism%2FO%2BS2T7GQG1xWf6MbzHrg2nLeSwycyX%2BhBK0e09UwHtfqb1%2Fv81Xg12qjXSIWPSLU07yyK6b%2FvlU2VGn0%2FaDhYlrGhCJi0eMRSgU4KRFbS54RU1cyUYReKyvYglH%2BNmp7iW05Fj%2B0iYhcq1fPdI3EDusMchUvHBWzEpc%2BvcZH%2FbAUGfSnOiuaw4pJjMAwuDomua6Fvu%2BLJJDJLKdRj0%2FGH%2BBr%2FUDGEDAKcTkdizKkTLMjCvdhRVZA927pIwv4YaO17huIU096se%2F%2BN3ibgQNA2Uz9Db9Un8FBBa0Xf4LVPUjITcxTTQQxHvUXrWMZ4ndQEQoxxZUGbxmLdRp1Z3%2Bkry7zLdi5PnmJDAiuwMMH%2B0L0GOqUB4BXD8LKoZ3flC5m2hQpVghlDkwJI7XvZDlVglSYYyUOiPdwS9uQ%2FJxp75BDi5jR6mIRnYd9QfNVv%2FMuqODgjdzm8pfIrtFMLbhvpuncuDkx3duyfZvdhUV8QKNjY209c6uDwPCCf8MqOfR0AG9kXsqiYg7YO8kt%2Fsy3%2F8uqOMldVmE9zvyxf03tuWjW7pZBzMJy6BVcJ5VmTxI33GyeRae9shaov&X-Amz-Signature=9cc2c30340a07dc5279d7ec26d5b17aab33b309dd579d0ea988f3a52f02d35f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
