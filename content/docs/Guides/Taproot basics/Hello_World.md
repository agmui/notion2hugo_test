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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDB2UGY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7oSTk%2BJZrthuLNG0l9IkMR3zV8nXlFGY3er2YoEvFpQIhALrv2HJUWgH6TGw0lyYhT3QvVuwg8UmhMEtYkb%2Bkq5gHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQK4KleY5AqQvd%2FkUq3AM8RDlVfkP4Cf0rpt436INZWw%2F3jJyKbYsILpeMysdtW626uJ7MYb7%2B4zR1APopnV93beEjpGp3J7p5%2FDChtt9UgDK0d0gks%2F5%2BlOVC7aUoDDMQWi905qhl1M150UASBUgrq5w5j8qqaUYUhDADQ%2FOy%2BArUgpy4OSgTqHKR4Ch2Wx5Fj%2Fo4Hv86kixhOsS0dW4dy2QTILFVvkWC7ln52leFSFo7Lx8q1beufutHsBL4Rzq3UCmEHnPKV9e%2F9AoQCu2onZHAbTKzArTRUKQIqW9JM2KvhzgTYf2JBWrROSZ%2FnIP%2FFYqgmXepHPFiBp%2BhResOn5Iz4PPT04BAzyVwci683Dd5aeOfMobEcsm4IB5MjE8NPlSCLsE5TBMa8IMBymcxBFZQmxwUK9BbaLEMqQ0UrSo%2BOGM5qTr%2BLuwY%2FcRb07M11MAAwXOEWmFoM5%2F49rk2lM6uvVnqpLxDe5pAMJeM9u0%2FsJ9GZU%2F1CfnkNDLgNnhVLHoZwvlBqmGGy562uky37psVIacYm%2FDHuV7uwX%2FwUCjKOVtLkizM0vWF0RkdJ0Q0PUhrecFDqQJE%2BLk%2BwZpjD%2FdXP0kFA7AFQwq9SMQLVbXQZL%2BXGpqhZWrFvtQwoHu065weStMnzlSUEDCHs%2BLBBjqkAbZ4UtEwapJiHVDnlFdjW5NRtu3l8iVLZAaLyTr%2BEdvNCMxEToaa%2Bn8TdvHBbab65%2BXABF9ZHAUMEjyR5vllFy8%2BJdLbtsD35a8B4UPeqyUJOJYRsGtAHInBhrPotttzMizgY2pJcAzmymz6%2F6vlK8YBR0Qf%2Ft%2B5uvHd2kuKd1P3YdFkGa%2FuanEHZ6cDvmySKQ3hCROOFZdSt9bHXShkLFLOR47G&X-Amz-Signature=29d1af7e81c917ca3be09df39ebca9a1aecd67668731b0fca97a560fe93004ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDB2UGY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7oSTk%2BJZrthuLNG0l9IkMR3zV8nXlFGY3er2YoEvFpQIhALrv2HJUWgH6TGw0lyYhT3QvVuwg8UmhMEtYkb%2Bkq5gHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQK4KleY5AqQvd%2FkUq3AM8RDlVfkP4Cf0rpt436INZWw%2F3jJyKbYsILpeMysdtW626uJ7MYb7%2B4zR1APopnV93beEjpGp3J7p5%2FDChtt9UgDK0d0gks%2F5%2BlOVC7aUoDDMQWi905qhl1M150UASBUgrq5w5j8qqaUYUhDADQ%2FOy%2BArUgpy4OSgTqHKR4Ch2Wx5Fj%2Fo4Hv86kixhOsS0dW4dy2QTILFVvkWC7ln52leFSFo7Lx8q1beufutHsBL4Rzq3UCmEHnPKV9e%2F9AoQCu2onZHAbTKzArTRUKQIqW9JM2KvhzgTYf2JBWrROSZ%2FnIP%2FFYqgmXepHPFiBp%2BhResOn5Iz4PPT04BAzyVwci683Dd5aeOfMobEcsm4IB5MjE8NPlSCLsE5TBMa8IMBymcxBFZQmxwUK9BbaLEMqQ0UrSo%2BOGM5qTr%2BLuwY%2FcRb07M11MAAwXOEWmFoM5%2F49rk2lM6uvVnqpLxDe5pAMJeM9u0%2FsJ9GZU%2F1CfnkNDLgNnhVLHoZwvlBqmGGy562uky37psVIacYm%2FDHuV7uwX%2FwUCjKOVtLkizM0vWF0RkdJ0Q0PUhrecFDqQJE%2BLk%2BwZpjD%2FdXP0kFA7AFQwq9SMQLVbXQZL%2BXGpqhZWrFvtQwoHu065weStMnzlSUEDCHs%2BLBBjqkAbZ4UtEwapJiHVDnlFdjW5NRtu3l8iVLZAaLyTr%2BEdvNCMxEToaa%2Bn8TdvHBbab65%2BXABF9ZHAUMEjyR5vllFy8%2BJdLbtsD35a8B4UPeqyUJOJYRsGtAHInBhrPotttzMizgY2pJcAzmymz6%2F6vlK8YBR0Qf%2Ft%2B5uvHd2kuKd1P3YdFkGa%2FuanEHZ6cDvmySKQ3hCROOFZdSt9bHXShkLFLOR47G&X-Amz-Signature=8d02f6a53eb13a42d2ff9e4cee80c779ff0e71729b0be63234bbfe4e7bdc7c79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
