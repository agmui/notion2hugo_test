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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTCKG25%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCID5xdO%2Be8L%2BI4lb61i%2FgYlwfo0x9SZUMjhwDvDFe%2BozaAiAvDTo7GOXsqX7le0YyjYX5j2bgDIhx76MW9Y7WJvsheCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2unYwb5fEDIjJx0OKtwDAxHspfrFyIQVu6Q3pkFyRVZbK8e%2BQ%2Fzf2ibV8PiaZXVvhv%2BQkOxWrQnMsZhHh47Qc3KlOPjRjPgGVxx3SusYFKQ1y6vf99kMMYWss19tgSqm7VY7ynz8Zhn3raIoAIGW9IFz787krC3A4jMhhifJsM%2BTRlRw3GFRSTh3VSBfEJagBJavJmzA2nS3p3dS08OlEtu7e7N50uJd7svQs%2FQpi%2F81waA37Ef6IhLaFnM4JX0MqGv8UDMzBu%2FdD2%2B%2BZdneT0ZpbqNj9EtnSjez3l37dkLpfid5FbnL2M5w56sqHmAyIQeTeEdBlNaDvoK4vhAO2VxrjVIkWMaNgZIoRmvorvzEotiqvbQynh7McAfAUjS%2Bej4B6KSqLQIAahRVCh4X%2F%2BHuEqkGWhtCPlsiB8cXJ4h%2BVmwUa6DN0KEW1in8ThDkGOvMvtNMip%2FJR2SrLRAJrFATqeHvzSA7V5YZzw3BtjJoTb2BZ5emjLE5iwvtfUYL97DbQ%2Fm%2FNOxvO%2FBTmSYFRdY3eT6JsO0U4W6inak3ArLMmTUy7ogrcb2CGg1TTXUk%2FF%2BlzvWOogFl00O0vJlkD%2FdYCqz9uYundejUg%2Ft6IcqAbCkXAK1SZ0zlxpMd%2FfnU2kJpuUsl82TRagEw5ZqZvQY6pgG%2F5XAw3ONs18hYD1XiXbnHWJQLuyRXg4YyqRIIYhkyqc2Ooclak6QeDRbnwUG8iIsHecgl%2BRBjeZxrN5gxl9kA5QL%2Bftx7p1i%2FBwDNWqk1RbdZA6fgAC3czckZIOrZegIWfy6PnHU67QJKslPIphOESZ9UQiYQO%2BCVnT07YaowLvuNqqvWoi7vSifVDdsYeC3QMKRL%2BmGaInR3WN5ajyQQ9nkpyDoh&X-Amz-Signature=da7161c08e0db901edb4049de85753f6f31afb8b6456a97352f2b95048ba6862&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTCKG25%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCID5xdO%2Be8L%2BI4lb61i%2FgYlwfo0x9SZUMjhwDvDFe%2BozaAiAvDTo7GOXsqX7le0YyjYX5j2bgDIhx76MW9Y7WJvsheCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2unYwb5fEDIjJx0OKtwDAxHspfrFyIQVu6Q3pkFyRVZbK8e%2BQ%2Fzf2ibV8PiaZXVvhv%2BQkOxWrQnMsZhHh47Qc3KlOPjRjPgGVxx3SusYFKQ1y6vf99kMMYWss19tgSqm7VY7ynz8Zhn3raIoAIGW9IFz787krC3A4jMhhifJsM%2BTRlRw3GFRSTh3VSBfEJagBJavJmzA2nS3p3dS08OlEtu7e7N50uJd7svQs%2FQpi%2F81waA37Ef6IhLaFnM4JX0MqGv8UDMzBu%2FdD2%2B%2BZdneT0ZpbqNj9EtnSjez3l37dkLpfid5FbnL2M5w56sqHmAyIQeTeEdBlNaDvoK4vhAO2VxrjVIkWMaNgZIoRmvorvzEotiqvbQynh7McAfAUjS%2Bej4B6KSqLQIAahRVCh4X%2F%2BHuEqkGWhtCPlsiB8cXJ4h%2BVmwUa6DN0KEW1in8ThDkGOvMvtNMip%2FJR2SrLRAJrFATqeHvzSA7V5YZzw3BtjJoTb2BZ5emjLE5iwvtfUYL97DbQ%2Fm%2FNOxvO%2FBTmSYFRdY3eT6JsO0U4W6inak3ArLMmTUy7ogrcb2CGg1TTXUk%2FF%2BlzvWOogFl00O0vJlkD%2FdYCqz9uYundejUg%2Ft6IcqAbCkXAK1SZ0zlxpMd%2FfnU2kJpuUsl82TRagEw5ZqZvQY6pgG%2F5XAw3ONs18hYD1XiXbnHWJQLuyRXg4YyqRIIYhkyqc2Ooclak6QeDRbnwUG8iIsHecgl%2BRBjeZxrN5gxl9kA5QL%2Bftx7p1i%2FBwDNWqk1RbdZA6fgAC3czckZIOrZegIWfy6PnHU67QJKslPIphOESZ9UQiYQO%2BCVnT07YaowLvuNqqvWoi7vSifVDdsYeC3QMKRL%2BmGaInR3WN5ajyQQ9nkpyDoh&X-Amz-Signature=20560671b2e12152f991f7a018d4ecae520ed6dccb107022f78a42a0d4bdecce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
