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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBBQOGD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCSt0v5SAoIkLhog47gKkqk6Ck1Yt9ccQ%2Bx88%2FCVfMdmwIgFlsgbmzROTZX%2BQwqaqWRD3VMb92ONqdYPwajd5mNcJ0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUsVzxqhvqC3W43vyrcA4TnkkOHdLHsjsMZ%2FZEHLOoXYO8c4fH8w6cC1RMehIY%2BG%2Bw17xZKvEhpwX1OSZY1O3ihaaALrBseUpJg0TIqjq6SAz7jb7tsbQqBEaNnf1pX%2Bc%2Be78ibJy67KaU1v0AEhcWGj5ShonLw4aKJUZX9Wa307qX5%2FAGuJF4JYQkrA%2BjfXVlhB1JAct6oFs3jGpnKa4EMyqHbKqS146mBHKofkCtidVnFQJAOb4c9cU%2BFBjmkecde30J%2Bl5F5tR3TUSL5O0OTG%2Bt%2FmJJP5eb0rTLnmXQ25V%2B6UgEWV%2FPkrRaxsNGTPmJiboCZwwaoENvr6PsHbk970JNKQNyWolu3mUKnsfDi5FOxfcFWcB8UbYCrnGtfcd9f4jCYBibIw4fvHU3vf%2FlTTIj%2B7owNWt0Al2JjZo3LIBUGlx8zbc6p4XZfTKbSbko94iQrONx%2Bqu%2FNUNzbeytLddh6O2mbwrYYidsJ%2F2xYQL7nH5dna5Z9XxgqF7xqhr%2FWyWhPmsKTDYH5jEzs8YMj320MKHVoOYS8evhE%2B9Q%2B%2BEp0jAZIgym9dY9%2B6FXYAXCiJXSpDfxBRfHzBP7he%2F2%2B39R8wmWhDJqPvD%2BkUntxnQADgslGOK2EZ0hZ53XsQtc7t9v3Z%2F10T20wMJ%2FMpsAGOqUBFpmgOwfUbG5GiXnsNYsSf%2B%2BVIr3coF3fyup%2FZpXPNlXxaUzzwaRXSydvUiCiCkU6dFiY5QE4Ek5IIUoV8P6Ev%2BDFBg4kR24B9AZQ%2BSnyBylrnBK2h8emPR0acBonyfiywo4EXvJaD9z%2FdXysvNGe%2B0o%2BbX3SIBlNGxPYoytqLD7iRQV6grKlCOdTRAzuZHgx%2BgkPA2D%2BasSc7n0NrXjnPaPCcnmj&X-Amz-Signature=32d41d9af148e3174b82533969dc6be651a51976a9b87abbe0ce1b942929473e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBBQOGD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCSt0v5SAoIkLhog47gKkqk6Ck1Yt9ccQ%2Bx88%2FCVfMdmwIgFlsgbmzROTZX%2BQwqaqWRD3VMb92ONqdYPwajd5mNcJ0qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUsVzxqhvqC3W43vyrcA4TnkkOHdLHsjsMZ%2FZEHLOoXYO8c4fH8w6cC1RMehIY%2BG%2Bw17xZKvEhpwX1OSZY1O3ihaaALrBseUpJg0TIqjq6SAz7jb7tsbQqBEaNnf1pX%2Bc%2Be78ibJy67KaU1v0AEhcWGj5ShonLw4aKJUZX9Wa307qX5%2FAGuJF4JYQkrA%2BjfXVlhB1JAct6oFs3jGpnKa4EMyqHbKqS146mBHKofkCtidVnFQJAOb4c9cU%2BFBjmkecde30J%2Bl5F5tR3TUSL5O0OTG%2Bt%2FmJJP5eb0rTLnmXQ25V%2B6UgEWV%2FPkrRaxsNGTPmJiboCZwwaoENvr6PsHbk970JNKQNyWolu3mUKnsfDi5FOxfcFWcB8UbYCrnGtfcd9f4jCYBibIw4fvHU3vf%2FlTTIj%2B7owNWt0Al2JjZo3LIBUGlx8zbc6p4XZfTKbSbko94iQrONx%2Bqu%2FNUNzbeytLddh6O2mbwrYYidsJ%2F2xYQL7nH5dna5Z9XxgqF7xqhr%2FWyWhPmsKTDYH5jEzs8YMj320MKHVoOYS8evhE%2B9Q%2B%2BEp0jAZIgym9dY9%2B6FXYAXCiJXSpDfxBRfHzBP7he%2F2%2B39R8wmWhDJqPvD%2BkUntxnQADgslGOK2EZ0hZ53XsQtc7t9v3Z%2F10T20wMJ%2FMpsAGOqUBFpmgOwfUbG5GiXnsNYsSf%2B%2BVIr3coF3fyup%2FZpXPNlXxaUzzwaRXSydvUiCiCkU6dFiY5QE4Ek5IIUoV8P6Ev%2BDFBg4kR24B9AZQ%2BSnyBylrnBK2h8emPR0acBonyfiywo4EXvJaD9z%2FdXysvNGe%2B0o%2BbX3SIBlNGxPYoytqLD7iRQV6grKlCOdTRAzuZHgx%2BgkPA2D%2BasSc7n0NrXjnPaPCcnmj&X-Amz-Signature=1691ebfda50f5b671aafd3420fec555adc6c891f3dbabfb05e023c77e5608e91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
