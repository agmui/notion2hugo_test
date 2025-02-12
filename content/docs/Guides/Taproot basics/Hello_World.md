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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDRRVMB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfdmmLDcCuHIo7nGf3kPLtiRqjimH9fCVNVUc6sWCuyAiEAj%2BE0A4CR%2BYhTmCInWwKO%2FaOGgwbCu%2Fr566MwDAkX9OYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqkR4RpofikyBU1EircA6d5L8JG8VQbokxhdENfC8g3BfRnHpmLEPkil16kb4sxi9OLEw81dlLG%2BD8z80Bd8oHV5aa6tAB0XBr81VM9uZgxIBfTOP0zqJagqLt6%2BNa3BBJmLkFp8ucEUqr8cHHC4Kkk08unYnbLC6XlQ3kIY0D0dU2o7hW7vXqivGVzqcebT0jZ9zy1%2B8VYeK0yxEEScgNonVnMAg1WuIUlL8XJ3W73kPxCocYrLLND%2FRtXWakShKSmo%2FsBgPRgzonnIUvHfgxPEkxxs8Ga0nuFE6RMoSwBu7Vw2gCctF%2BBBrlDJgvHCu%2BBlehh2FjNuAqSxJC5vU1uxFisiMHQPNrhs%2BjdEcoz4A0lEkiqXULZzXg2aVfWH8mIUxhV%2BfUOOAq0mO4UxzTnxJRAjht8f2Vnejsh9A%2BSQWNI8ynbULHf3hd2XX4AvjGBRzybu%2FTYAEueol%2FAOFWSj5vwHQ2k11jkyH40oVCVoU1jb0JoqI98p%2FXDjyGzO%2Bs3JYOc9%2BF81I%2B6qG8OFLHVQ8IYLAxIz0%2F4SoVgSJz2XiudW44GH4YAY6%2B0hRXMQ%2B%2BELfM8V7jiuhsC3xtLL9opSYe7FP0aF0vleYUBqxG%2BKdPmoKVyVEnlJ5iDboZx1xI7y01B3yZ1Jl1OMJy1sr0GOqUBBAYwYaF65BHXcfkqq%2Btgf8UZsxrjmAtPsqQVQEDaHSEPZdRvEt5cXOnR452D3A1r0Kb67e92PBbGmrCtl8d7SD2sJnGk9NUNYMPCQ7RTfMoeCpuBWD0uJZpZUuJld%2BWyT4Z7D%2FKcn7Yr7eBjmqsPH%2FSlmtX%2FVo4Ggth3bsRGs2nkrn%2BoH7oKOHWgUjfxAZ6k79pKNufHysxtl9e3lAb3beopr%2Frf&X-Amz-Signature=41d327766be8e4ce101217501d166b02345dc68fd1b13da6b742304eb9546be6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDRRVMB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfdmmLDcCuHIo7nGf3kPLtiRqjimH9fCVNVUc6sWCuyAiEAj%2BE0A4CR%2BYhTmCInWwKO%2FaOGgwbCu%2Fr566MwDAkX9OYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqkR4RpofikyBU1EircA6d5L8JG8VQbokxhdENfC8g3BfRnHpmLEPkil16kb4sxi9OLEw81dlLG%2BD8z80Bd8oHV5aa6tAB0XBr81VM9uZgxIBfTOP0zqJagqLt6%2BNa3BBJmLkFp8ucEUqr8cHHC4Kkk08unYnbLC6XlQ3kIY0D0dU2o7hW7vXqivGVzqcebT0jZ9zy1%2B8VYeK0yxEEScgNonVnMAg1WuIUlL8XJ3W73kPxCocYrLLND%2FRtXWakShKSmo%2FsBgPRgzonnIUvHfgxPEkxxs8Ga0nuFE6RMoSwBu7Vw2gCctF%2BBBrlDJgvHCu%2BBlehh2FjNuAqSxJC5vU1uxFisiMHQPNrhs%2BjdEcoz4A0lEkiqXULZzXg2aVfWH8mIUxhV%2BfUOOAq0mO4UxzTnxJRAjht8f2Vnejsh9A%2BSQWNI8ynbULHf3hd2XX4AvjGBRzybu%2FTYAEueol%2FAOFWSj5vwHQ2k11jkyH40oVCVoU1jb0JoqI98p%2FXDjyGzO%2Bs3JYOc9%2BF81I%2B6qG8OFLHVQ8IYLAxIz0%2F4SoVgSJz2XiudW44GH4YAY6%2B0hRXMQ%2B%2BELfM8V7jiuhsC3xtLL9opSYe7FP0aF0vleYUBqxG%2BKdPmoKVyVEnlJ5iDboZx1xI7y01B3yZ1Jl1OMJy1sr0GOqUBBAYwYaF65BHXcfkqq%2Btgf8UZsxrjmAtPsqQVQEDaHSEPZdRvEt5cXOnR452D3A1r0Kb67e92PBbGmrCtl8d7SD2sJnGk9NUNYMPCQ7RTfMoeCpuBWD0uJZpZUuJld%2BWyT4Z7D%2FKcn7Yr7eBjmqsPH%2FSlmtX%2FVo4Ggth3bsRGs2nkrn%2BoH7oKOHWgUjfxAZ6k79pKNufHysxtl9e3lAb3beopr%2Frf&X-Amz-Signature=b9fdb9f5e4c66eabd8223cdb98d0dd2744c30582ddf70507e34daae27b15792d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
