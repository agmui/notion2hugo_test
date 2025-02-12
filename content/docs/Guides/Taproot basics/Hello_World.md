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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TJHL2Y%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1j3RbYq%2BCr2gnMSpgUqvsh0jza1zukSSVAhwg0JgeBAiEAuzCabok0xvbPaIiWb2FNGyoFUNYCUpqL8lS7j8uOBg8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbZKPQp9Vul2YJf7ircAzFjyHaY%2FSgC3Sje%2FUMsri4N0fNBa6nbfBLpv8KF1Z%2FDUwA4ULm9aTJFuyWo4XHwbZXCaHZvVRjPLYE4Dj%2BQp5hhm4SdJySL7%2FALna6dfOYAWlKuh8hkgBQh9xmwQp84CL7tCcf4HI7xfcv7UHAWmFXlEnWw8rwUMEuFyvhlFPi2mA41htY45xaLr7RFGTnJYtgf9bGS7zFx3gDG%2BMBcSh2wGfTgO%2FDCX9aJxKBrB11gEVP7gQK24QG5aXqdo%2BvqSVfZhqARKQ0pmxWXeIVfHLbX%2B021Kc2VvVBv5aXfVVFn5Zq%2BEoIMpL8dwqQLZqIvczEoAc4CaE01kuTTcBj8C2hqU%2B9dvEfOfKHNQSRAhWgBNgzlBODwA4gwdcnvSRwpBQciF3y5i6erwyB6vmX%2F5Nfy7QtBVRBdH8QyhHr1%2BG7pxH8Xjn1xnsvUg1FqnYlESR2E2O5iQgoAWrcmbpKW5tSLfbvmRyD7y%2FEoyyzjL4jRt1SbyeMteDE9guRXoq9uL9coSf2RzV4tAzIrtsAf%2FISiXFW7AioZ2l%2FdGvLYovjXronpr3ZQFYaZd%2F9F%2F5pdDYCpnC3wfuloa%2BHaL1V%2FNEADoUpqbA7nix5cu3kQAYlUOzDx0wQCk16B2PcBMPypsr0GOqUBZ1gj2UDYBmBQpfhm2RsRW54H3mLJXPtrD5DAmUSuyeIZfb9GpvneeqV1wlTK3nWocZMghPn7SPtE4xezH6TDd%2F3shhYYAx4xtXjFpwt5y4PEwjzlOAdzRLz7KZKw5TDaCnlcikcIoi6Grb8mys0SLqUBy%2B6Ss%2BuyG9AKytNnnyJgVXpcSChmULtbjHwSbqtyfYT%2FDtD6DmmblRjsgzf3LB9A30%2B6&X-Amz-Signature=d543ec003f64897d3b6fb1cb6048548096abaeaa7a3e70ef58b2cfe2a42d700f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TJHL2Y%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1j3RbYq%2BCr2gnMSpgUqvsh0jza1zukSSVAhwg0JgeBAiEAuzCabok0xvbPaIiWb2FNGyoFUNYCUpqL8lS7j8uOBg8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbZKPQp9Vul2YJf7ircAzFjyHaY%2FSgC3Sje%2FUMsri4N0fNBa6nbfBLpv8KF1Z%2FDUwA4ULm9aTJFuyWo4XHwbZXCaHZvVRjPLYE4Dj%2BQp5hhm4SdJySL7%2FALna6dfOYAWlKuh8hkgBQh9xmwQp84CL7tCcf4HI7xfcv7UHAWmFXlEnWw8rwUMEuFyvhlFPi2mA41htY45xaLr7RFGTnJYtgf9bGS7zFx3gDG%2BMBcSh2wGfTgO%2FDCX9aJxKBrB11gEVP7gQK24QG5aXqdo%2BvqSVfZhqARKQ0pmxWXeIVfHLbX%2B021Kc2VvVBv5aXfVVFn5Zq%2BEoIMpL8dwqQLZqIvczEoAc4CaE01kuTTcBj8C2hqU%2B9dvEfOfKHNQSRAhWgBNgzlBODwA4gwdcnvSRwpBQciF3y5i6erwyB6vmX%2F5Nfy7QtBVRBdH8QyhHr1%2BG7pxH8Xjn1xnsvUg1FqnYlESR2E2O5iQgoAWrcmbpKW5tSLfbvmRyD7y%2FEoyyzjL4jRt1SbyeMteDE9guRXoq9uL9coSf2RzV4tAzIrtsAf%2FISiXFW7AioZ2l%2FdGvLYovjXronpr3ZQFYaZd%2F9F%2F5pdDYCpnC3wfuloa%2BHaL1V%2FNEADoUpqbA7nix5cu3kQAYlUOzDx0wQCk16B2PcBMPypsr0GOqUBZ1gj2UDYBmBQpfhm2RsRW54H3mLJXPtrD5DAmUSuyeIZfb9GpvneeqV1wlTK3nWocZMghPn7SPtE4xezH6TDd%2F3shhYYAx4xtXjFpwt5y4PEwjzlOAdzRLz7KZKw5TDaCnlcikcIoi6Grb8mys0SLqUBy%2B6Ss%2BuyG9AKytNnnyJgVXpcSChmULtbjHwSbqtyfYT%2FDtD6DmmblRjsgzf3LB9A30%2B6&X-Amz-Signature=714e25044ac538b7fea09b8ef706b2bfa3055261039645257c36e7259d8b7fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
