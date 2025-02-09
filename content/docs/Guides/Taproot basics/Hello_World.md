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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDK6ONCT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAUCfYoQjQY4TYCBTkahFLZnFgm%2Fzh2XNP%2BzsyIXO4KAIgQLX62jdpcKn6dCvQ31y34SN7bAg0lEvqxzLkLwRbjCEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM82GG3jbcobDPJXUCrcA%2BKLcYZAsgFcMnigWqtamyygx3uc9TI2%2F5V5ll7qmYN6eGMbo%2Ff%2FWXomZfNpyg%2Bn4a89ymdXKZMs1VMF30H8%2BcVP7aF4tBYg%2Bui%2F2F76bU6ftHypx1OekyW8gpWLA8UuxdDfeJ3MxihS3u4qeC77JCV21UI%2BH22YvuJlEFukuSLYpTcn7RNotijaG3sg1yA%2B8YJj6AR21oBqHGXX8ffSr%2BKAxy%2B2I2dr1NCfVzCWbwJiR9qgDyn8lWESlBvcaYZeHCWbZWDwjxAdlJrut855ZR5Qzgd%2BWGqrfqOS8at743TR9Tyj6lxD5r13oTsuErHhz6m090bFExhq8BUpT64qWiskBha8h4tFnaJw9gBgGqXA4P3sYJs22tgIolffx1vAu1VBIzPmAwmWrwnY2OzrOW%2F8qbuf8TqbstinB5d5WUf%2FRy4EM%2F6K9mo1zvo9uuctNM%2FGuvD%2BLOjF1ZKPrrTyF4USAlNkhGY5TwjwQjitV06mESJ3JkuOUicb9jIbfVT%2BNDJHrKHzcbaSa7wlF3llkkNL3WFGm0YlDeHjY55SVu%2Bbv6dp06SQvLx0JUT9uOl7iMaXJ7bM%2Bivp1s5ceA8AiOrFXPkkPenDQj9GpmdkmqPuBlWnt%2FZScV2dXn4hMMXkob0GOqUBieD2oXTDq0jmHhqGAtzLAQBtgjn1rjeOvHnxHk4C%2ByRzHzWKNujq7qsU%2FgmF0WSM%2FI1iskyLwhYy3dZyLPkSguu0p4ugaM0tyx6wYVEZq8cEho6K%2BepSndVrL91T%2BJJ7%2F%2FbsfMDNbMYrT7DphDhyWA%2BwSFitt0gDzBRbHVjOjl61%2BwbX09wYk1WsCLHVer8tPvLMzLhVsCGzQbdmlXRs5CaasXeG&X-Amz-Signature=b130ea79748c69b084408eb7fd6a88e50b4139ad42226120a81d10dcf4d2e30d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDK6ONCT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAUCfYoQjQY4TYCBTkahFLZnFgm%2Fzh2XNP%2BzsyIXO4KAIgQLX62jdpcKn6dCvQ31y34SN7bAg0lEvqxzLkLwRbjCEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM82GG3jbcobDPJXUCrcA%2BKLcYZAsgFcMnigWqtamyygx3uc9TI2%2F5V5ll7qmYN6eGMbo%2Ff%2FWXomZfNpyg%2Bn4a89ymdXKZMs1VMF30H8%2BcVP7aF4tBYg%2Bui%2F2F76bU6ftHypx1OekyW8gpWLA8UuxdDfeJ3MxihS3u4qeC77JCV21UI%2BH22YvuJlEFukuSLYpTcn7RNotijaG3sg1yA%2B8YJj6AR21oBqHGXX8ffSr%2BKAxy%2B2I2dr1NCfVzCWbwJiR9qgDyn8lWESlBvcaYZeHCWbZWDwjxAdlJrut855ZR5Qzgd%2BWGqrfqOS8at743TR9Tyj6lxD5r13oTsuErHhz6m090bFExhq8BUpT64qWiskBha8h4tFnaJw9gBgGqXA4P3sYJs22tgIolffx1vAu1VBIzPmAwmWrwnY2OzrOW%2F8qbuf8TqbstinB5d5WUf%2FRy4EM%2F6K9mo1zvo9uuctNM%2FGuvD%2BLOjF1ZKPrrTyF4USAlNkhGY5TwjwQjitV06mESJ3JkuOUicb9jIbfVT%2BNDJHrKHzcbaSa7wlF3llkkNL3WFGm0YlDeHjY55SVu%2Bbv6dp06SQvLx0JUT9uOl7iMaXJ7bM%2Bivp1s5ceA8AiOrFXPkkPenDQj9GpmdkmqPuBlWnt%2FZScV2dXn4hMMXkob0GOqUBieD2oXTDq0jmHhqGAtzLAQBtgjn1rjeOvHnxHk4C%2ByRzHzWKNujq7qsU%2FgmF0WSM%2FI1iskyLwhYy3dZyLPkSguu0p4ugaM0tyx6wYVEZq8cEho6K%2BepSndVrL91T%2BJJ7%2F%2FbsfMDNbMYrT7DphDhyWA%2BwSFitt0gDzBRbHVjOjl61%2BwbX09wYk1WsCLHVer8tPvLMzLhVsCGzQbdmlXRs5CaasXeG&X-Amz-Signature=c4073785d125718e416aa1717b8a7846458aa999b189e9fc4b1b65542d15a5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
