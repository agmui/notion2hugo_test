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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BIF3KY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F5WsQvY6o3cHysjPUOiTa32Xkwyw42OZ%2F5HuLjgPXyAiABndTdFOMLOdEh5K4qR%2FJvFxp7XyACtbcDUUNJGaHZUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcUvVU8U6dmWT2CbYKtwDgX1X8PRs0fbvLWaneBbWRcEUFG0R8HGCKBfZMVPoPppT7VWjVsGS1UXlSLiY0EQyVsQNNTGdFkK265RYqGAyxRe6RapL8zTcwLVm0XZQWjueIJfa7X4A6FB1jB4zaY3DIDCO1BKCK8z3OxZsTQJDU6Sa6kLLN0KBs1gdGX2%2BX8nwmIOkIEHu5vuSplFsMbTSzWkw%2FaIZTUfk33rN1e7Yhi%2Bgnq0CG%2FFI1rTauN3o22Es1b8P8Wp7nACj9OCotg7ezPuPqypOhBMiQ9GkjUooSmA3%2FnX6nFZjQAO%2BanCr5gcJQLPhaVqe3TGMVOM%2BeFE1U4smxBI1XUdgp5gnXkOGQe03K4teRdZxB7s8zRZQbtWon9%2B0f9Bp7YtjfhGKKwrP0FGFAMz5j8I12zKGXeAcbwRh5nuNWcK1LNrMRBR%2Bqbd%2Fp1xIxueR0wkdy5rqHlsQLXMyd0hcEkVXY1qi50MHhX%2FZA7exSUpH0ZRQsX3o3OSXPJvcbLILMBqzojuCzK708s%2BwRBeeFmi1bi04WlDLOXVYiPD8BHgGCn7NWwkUmpa6rCpUUmUhkk9J9gt8t%2FNMwyZaibZbGJIQfF1ujxY7SyfpT7RQdCjvE%2BfnwDypoFuz1LPvqih1ZvRY5Gwwv9HwvAY6pgFiU9EX73itY2M66LNgsHjHHBhZcjxxKriXZwnxsysQwlFhWPqTolUjgZByAlIkk5O9a7NRwIcR%2FubnntwvTVfPX9Nfy%2BbBnv%2FTfxngQ%2B9D8sUOtlZnBg%2FYe91nHcGfV%2BmGfy1Pdj%2Bdof6AUwspO3nlNzv6KepUXtU3H1UurN7owhZZ1MbjEEYWBbmw%2FyanwcTyKn%2BV0L2F65si8xjuEjvkMxSTq6KM&X-Amz-Signature=d421a69695ccb4de10f09591208738f5466df6eed78fc14a1a1a0fbfdf0f4fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626BIF3KY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F5WsQvY6o3cHysjPUOiTa32Xkwyw42OZ%2F5HuLjgPXyAiABndTdFOMLOdEh5K4qR%2FJvFxp7XyACtbcDUUNJGaHZUiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcUvVU8U6dmWT2CbYKtwDgX1X8PRs0fbvLWaneBbWRcEUFG0R8HGCKBfZMVPoPppT7VWjVsGS1UXlSLiY0EQyVsQNNTGdFkK265RYqGAyxRe6RapL8zTcwLVm0XZQWjueIJfa7X4A6FB1jB4zaY3DIDCO1BKCK8z3OxZsTQJDU6Sa6kLLN0KBs1gdGX2%2BX8nwmIOkIEHu5vuSplFsMbTSzWkw%2FaIZTUfk33rN1e7Yhi%2Bgnq0CG%2FFI1rTauN3o22Es1b8P8Wp7nACj9OCotg7ezPuPqypOhBMiQ9GkjUooSmA3%2FnX6nFZjQAO%2BanCr5gcJQLPhaVqe3TGMVOM%2BeFE1U4smxBI1XUdgp5gnXkOGQe03K4teRdZxB7s8zRZQbtWon9%2B0f9Bp7YtjfhGKKwrP0FGFAMz5j8I12zKGXeAcbwRh5nuNWcK1LNrMRBR%2Bqbd%2Fp1xIxueR0wkdy5rqHlsQLXMyd0hcEkVXY1qi50MHhX%2FZA7exSUpH0ZRQsX3o3OSXPJvcbLILMBqzojuCzK708s%2BwRBeeFmi1bi04WlDLOXVYiPD8BHgGCn7NWwkUmpa6rCpUUmUhkk9J9gt8t%2FNMwyZaibZbGJIQfF1ujxY7SyfpT7RQdCjvE%2BfnwDypoFuz1LPvqih1ZvRY5Gwwv9HwvAY6pgFiU9EX73itY2M66LNgsHjHHBhZcjxxKriXZwnxsysQwlFhWPqTolUjgZByAlIkk5O9a7NRwIcR%2FubnntwvTVfPX9Nfy%2BbBnv%2FTfxngQ%2B9D8sUOtlZnBg%2FYe91nHcGfV%2BmGfy1Pdj%2Bdof6AUwspO3nlNzv6KepUXtU3H1UurN7owhZZ1MbjEEYWBbmw%2FyanwcTyKn%2BV0L2F65si8xjuEjvkMxSTq6KM&X-Amz-Signature=9c9f6f055e91f073c9855b1c87bfc7a907ad673fef9bb761e8b21b43b3aced89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
