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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKA357A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCozoGL2kSuWWkOAAl%2Fx%2B%2F%2Ffq3NIgOK4JFP6sI7NkhgLQIgV2nB3Zr243P0n9XYEi3%2FdZKqgahgbkO1ifB8tmOTVRwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGcFTSjzaatjk%2FFuSrcAz2nFa%2BVTSAztl2xrJww1ZVqSeNV%2F6qsuh4fVZZXQxMsHyQkcVyjQwM9ATGUEI7PqVDZVW%2BEiFXJaXldp%2F6CnTUKT4guD7jJKAIKS9wjjctTjfvBxKK8kW2h%2Bie7wmboQsCIiX%2BrlQO5E8BsBSa6iDbtCrrsGWzxlTSfiOdzTcFbk%2BUFVE9EkpuFtNA20Q97fz%2FyaXg9Zl%2F3qwlz0lYBcjZ3sdw1cEqUoDDjw7M3AgqQdy7Z0ye%2BrDW7pNYe%2Bi5dq4PHWZAtXe2f%2F5FMLcAPFIEJi7b1j6U3zW0S3nrJsSsOaBGgKiNODyZETrsBnppgcdAK8j%2F%2F4mqH3tsvYBrrhBpBoM%2FpONqd1%2FloAxTX5cZNa4qynQMr0r97dSxug0I8nF5mHh7adZrYj40fnA6pQm0seI%2FMS2DIr5KsUth4%2Fn06KEsM7%2FK7HjIbKuhtRFn4Qi%2B4AqPoXxD4F6ACQuUKCe56JK0x4uxUjMJJRCGz%2BLPwyjst331QEkxAUu%2FeypVKrmWQSc9gT3RzuYbV8Ls3NXcrSNZYrjLTi1GZHj0hNyhj7PLwHc%2FgkFP0yzYAXmbZkqq3Vc4hPc3UWh%2F4%2BSViwAefB25xE0O%2Bjszlg%2F6tj493rYaMEni1IN%2BZA9baMM2m8L4GOqUB8GeKJWmwbbkHzBPkOnQ7A3CUuu5ONJQipYn5zay9kobx6EvBcUL0rCuUxmEbriuObhKQoCdLqM%2FpHhJq0yjraDqjf1ulkKz7j3vZley21%2Bv4KXLqOsYLyUNK9fDnHRfW2feKSUZxYgKAwIUOUobSY1Ena4zh4YYCd5Sz4SLqvOB9VjqaUc2aZ6GnsYhiOfDBby6u75g5DeA%2BO40acVsbE10wpbOJ&X-Amz-Signature=0ae21d43dc90a2178e098f5c7078e8ee569f0da59a60ec9941341f3cdf7248c1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKA357A%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCozoGL2kSuWWkOAAl%2Fx%2B%2F%2Ffq3NIgOK4JFP6sI7NkhgLQIgV2nB3Zr243P0n9XYEi3%2FdZKqgahgbkO1ifB8tmOTVRwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGcFTSjzaatjk%2FFuSrcAz2nFa%2BVTSAztl2xrJww1ZVqSeNV%2F6qsuh4fVZZXQxMsHyQkcVyjQwM9ATGUEI7PqVDZVW%2BEiFXJaXldp%2F6CnTUKT4guD7jJKAIKS9wjjctTjfvBxKK8kW2h%2Bie7wmboQsCIiX%2BrlQO5E8BsBSa6iDbtCrrsGWzxlTSfiOdzTcFbk%2BUFVE9EkpuFtNA20Q97fz%2FyaXg9Zl%2F3qwlz0lYBcjZ3sdw1cEqUoDDjw7M3AgqQdy7Z0ye%2BrDW7pNYe%2Bi5dq4PHWZAtXe2f%2F5FMLcAPFIEJi7b1j6U3zW0S3nrJsSsOaBGgKiNODyZETrsBnppgcdAK8j%2F%2F4mqH3tsvYBrrhBpBoM%2FpONqd1%2FloAxTX5cZNa4qynQMr0r97dSxug0I8nF5mHh7adZrYj40fnA6pQm0seI%2FMS2DIr5KsUth4%2Fn06KEsM7%2FK7HjIbKuhtRFn4Qi%2B4AqPoXxD4F6ACQuUKCe56JK0x4uxUjMJJRCGz%2BLPwyjst331QEkxAUu%2FeypVKrmWQSc9gT3RzuYbV8Ls3NXcrSNZYrjLTi1GZHj0hNyhj7PLwHc%2FgkFP0yzYAXmbZkqq3Vc4hPc3UWh%2F4%2BSViwAefB25xE0O%2Bjszlg%2F6tj493rYaMEni1IN%2BZA9baMM2m8L4GOqUB8GeKJWmwbbkHzBPkOnQ7A3CUuu5ONJQipYn5zay9kobx6EvBcUL0rCuUxmEbriuObhKQoCdLqM%2FpHhJq0yjraDqjf1ulkKz7j3vZley21%2Bv4KXLqOsYLyUNK9fDnHRfW2feKSUZxYgKAwIUOUobSY1Ena4zh4YYCd5Sz4SLqvOB9VjqaUc2aZ6GnsYhiOfDBby6u75g5DeA%2BO40acVsbE10wpbOJ&X-Amz-Signature=fd362acd611a3fd09476777cd1dca806ebce4ee5b31ef67848037e13629b6712&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
