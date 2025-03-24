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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XKRFHZQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtwEhl5NNcIr1g9gcODjoEUv5RMTu5LPUGuAesBKrxSwIgQHto9NXTRljqZgVPRWMY0GDZokfSsVh1OPp2rWFAnJsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzPFiQ7l5i%2F84AHVyrcA%2Bc9Uay1rNvAEGVzbiz%2BRZfwFgejYlTAry%2F0yzieWvKpUKzuyPfqx%2F8t%2BZgAs3AQVtMfyzqBMivrH3C42J6k2MwTBOubJDlfFru6o28vylndAPwKp2TZlyXcUl0v%2Fm9J2CpzVi2%2FyzycSQn3UzJPgui8v1YfUcWBmPY5HRfLjTkrEWDOZ%2BPySI4RoW5hZpXgS5hnX%2Bt%2BjMnAoF03dChoJRUg477ENCwmdG9CiMknWy4eyrwOxa0C2m1V%2By2ShZGQuUhrCHn3gbI3Rc5DHZ1NtK%2F0lQJtrepbF5qMcTgxannzfLoOA0DwiGKsW08Mh6wUbbbUtoa6NnwKeAXLG4irBcCMLzfaz91KFrtCCQP2nDe%2FLp9x%2BHw4Q2VJgOgOLJQwQcN%2ByetEDF%2B471JtLn4AlTMPJLPMKOUhtKPN6shZ00nIrqogMuaJUc4WLWA5gBQ4GD5u%2FZZkACqayq2186SUS5%2F3SPeyiejlouFGIGy1u%2F%2BV0jq8c9ZmIcrGBdSBskgCA5UaPA028T2jY1cUsv96zn2eAmR6MP%2F6RQ1oZI3YRGzmFldg5fTXO4o%2F5%2BtNEq5QJvJ9Yyw1Yy6g9%2B7mXSGnsQCqe9RH88IKpZSOiCcqulzVlWhvvMkayAfkTI5zMMiPhb8GOqUBRHwrRqjeThEMZve8ohaimtPtpyDdf0slgd1tQvmMeTJKJ%2BKQs%2BHBgWlHtLY8XtDWJiSK2yuVtM8v1xD%2BMxxsEXWgYtbi9wxlaI9tK0%2BRZ0eTJFS9EqWVyeNBk8wQdT%2F8C4mRtpfIF6hYaMF2c7k3OEqyRCAS7KrzD8P8PDJwCYr%2FsP2uxDZc644iJibNNEMt%2FhS3bJiWzh5vkTNa4Uxk0Q9XUjWv&X-Amz-Signature=4972e4f54f4c480ff8f9a4ee3816df9112857e2f651175116305c47c13702b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XKRFHZQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtwEhl5NNcIr1g9gcODjoEUv5RMTu5LPUGuAesBKrxSwIgQHto9NXTRljqZgVPRWMY0GDZokfSsVh1OPp2rWFAnJsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzPFiQ7l5i%2F84AHVyrcA%2Bc9Uay1rNvAEGVzbiz%2BRZfwFgejYlTAry%2F0yzieWvKpUKzuyPfqx%2F8t%2BZgAs3AQVtMfyzqBMivrH3C42J6k2MwTBOubJDlfFru6o28vylndAPwKp2TZlyXcUl0v%2Fm9J2CpzVi2%2FyzycSQn3UzJPgui8v1YfUcWBmPY5HRfLjTkrEWDOZ%2BPySI4RoW5hZpXgS5hnX%2Bt%2BjMnAoF03dChoJRUg477ENCwmdG9CiMknWy4eyrwOxa0C2m1V%2By2ShZGQuUhrCHn3gbI3Rc5DHZ1NtK%2F0lQJtrepbF5qMcTgxannzfLoOA0DwiGKsW08Mh6wUbbbUtoa6NnwKeAXLG4irBcCMLzfaz91KFrtCCQP2nDe%2FLp9x%2BHw4Q2VJgOgOLJQwQcN%2ByetEDF%2B471JtLn4AlTMPJLPMKOUhtKPN6shZ00nIrqogMuaJUc4WLWA5gBQ4GD5u%2FZZkACqayq2186SUS5%2F3SPeyiejlouFGIGy1u%2F%2BV0jq8c9ZmIcrGBdSBskgCA5UaPA028T2jY1cUsv96zn2eAmR6MP%2F6RQ1oZI3YRGzmFldg5fTXO4o%2F5%2BtNEq5QJvJ9Yyw1Yy6g9%2B7mXSGnsQCqe9RH88IKpZSOiCcqulzVlWhvvMkayAfkTI5zMMiPhb8GOqUBRHwrRqjeThEMZve8ohaimtPtpyDdf0slgd1tQvmMeTJKJ%2BKQs%2BHBgWlHtLY8XtDWJiSK2yuVtM8v1xD%2BMxxsEXWgYtbi9wxlaI9tK0%2BRZ0eTJFS9EqWVyeNBk8wQdT%2F8C4mRtpfIF6hYaMF2c7k3OEqyRCAS7KrzD8P8PDJwCYr%2FsP2uxDZc644iJibNNEMt%2FhS3bJiWzh5vkTNa4Uxk0Q9XUjWv&X-Amz-Signature=3c40bf048b26a78e0b7bdfcff81dcc8a212e05682f520d90af683fd47edb1ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
