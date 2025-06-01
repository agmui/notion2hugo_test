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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WRAQCR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCKADnHvWi100TOLA1FWYsFyyxRxmppoIQmGhRCRzflyAIgcEpqjpad5Hp0yEu9cIlGxUlheskWLMC6bxHT%2FbffOScqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl%2BsiqY2rkdwKZBmyrcA5qRKhU0CpkQB0SRk5lGoQZ5TLDi%2FctR3pZKHCAB5PO1jqMzKneJpiB3iWb7ko4JiGbX950PGnrF%2FCPR%2Byl2iH8romKzxIhPR%2Bi%2B98V%2Fnrr4l2BzydbToRKl%2F%2FvV%2FnX2XgY%2FisKRCqTWiC4%2BbKYiUg9m%2B3Uu4qMq8XK7FPqadbneoJ9czlGxCk%2FnE9hnP6a1p8gxBTZU9yvylRkYYf0aGNsZ98u0ocY0cqa3DtFNn%2Fxd%2Bi%2FxOasx2Nvf3A4cgv%2FC%2BmbaV%2B9UJTAZBJSPtlpLGqyEOJ6M%2FdtBuZcRbTfeybqWqKbnXiQ6i1tysXlUuAhK4yOrxr%2BKHcI%2BJO%2Brlc5U88%2FMC8cjUeZhEnNlEWx%2FsaBhWKMSAkhGzEcgnw7Av3Hfn%2BihqNgW1YGOa6Xv7R%2FdCNS7bJDWY4IMSEpdr7tix9dXNHV5unIrfUp0ROXUsB9OytbT5gG5LxcsIDDG%2Bx1mh4OolDM34HXsPGbSukRM4vJl5F%2Fel0Pd%2F7zbjHLirDIv6F8p7hEC77UZFaOMCgd7zGE8wC%2F4NnAP2ZbLR0XIf%2F9uDKmMJwYZyjEl8hwDPy9riehGDVlHhbJK5jcq%2BNGLQntSmpsaucuu93qPpmELnQwOsYyuryEaW5vxjRSsMN6a8sEGOqUBQNcW5I3TPHrqx%2FIsbZ7kCCdDtOUFr8drGKYmfuuyYgZ%2Fa6YWmMR51tWF4EUj3ChlXGieY%2Fz91zLMkPtaRW0X5Kc23pNIA%2BlgCL%2FJGaOAQAMcqJByoqGhRo0Kow%2B0rOjuaBCu%2BrOCNAhbg5Peklqfr%2F9XNCu8oKCRmcGXHgEaxov7dk%2FA%2Bzjm4p91RvLibixRQqUm21ku9Tch5K1U1sV8pioMkx9d&X-Amz-Signature=a622db9ed3f852711217da485951a18d5a2a1c4233d1f2f205b4fe68b8e235e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5WRAQCR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCKADnHvWi100TOLA1FWYsFyyxRxmppoIQmGhRCRzflyAIgcEpqjpad5Hp0yEu9cIlGxUlheskWLMC6bxHT%2FbffOScqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl%2BsiqY2rkdwKZBmyrcA5qRKhU0CpkQB0SRk5lGoQZ5TLDi%2FctR3pZKHCAB5PO1jqMzKneJpiB3iWb7ko4JiGbX950PGnrF%2FCPR%2Byl2iH8romKzxIhPR%2Bi%2B98V%2Fnrr4l2BzydbToRKl%2F%2FvV%2FnX2XgY%2FisKRCqTWiC4%2BbKYiUg9m%2B3Uu4qMq8XK7FPqadbneoJ9czlGxCk%2FnE9hnP6a1p8gxBTZU9yvylRkYYf0aGNsZ98u0ocY0cqa3DtFNn%2Fxd%2Bi%2FxOasx2Nvf3A4cgv%2FC%2BmbaV%2B9UJTAZBJSPtlpLGqyEOJ6M%2FdtBuZcRbTfeybqWqKbnXiQ6i1tysXlUuAhK4yOrxr%2BKHcI%2BJO%2Brlc5U88%2FMC8cjUeZhEnNlEWx%2FsaBhWKMSAkhGzEcgnw7Av3Hfn%2BihqNgW1YGOa6Xv7R%2FdCNS7bJDWY4IMSEpdr7tix9dXNHV5unIrfUp0ROXUsB9OytbT5gG5LxcsIDDG%2Bx1mh4OolDM34HXsPGbSukRM4vJl5F%2Fel0Pd%2F7zbjHLirDIv6F8p7hEC77UZFaOMCgd7zGE8wC%2F4NnAP2ZbLR0XIf%2F9uDKmMJwYZyjEl8hwDPy9riehGDVlHhbJK5jcq%2BNGLQntSmpsaucuu93qPpmELnQwOsYyuryEaW5vxjRSsMN6a8sEGOqUBQNcW5I3TPHrqx%2FIsbZ7kCCdDtOUFr8drGKYmfuuyYgZ%2Fa6YWmMR51tWF4EUj3ChlXGieY%2Fz91zLMkPtaRW0X5Kc23pNIA%2BlgCL%2FJGaOAQAMcqJByoqGhRo0Kow%2B0rOjuaBCu%2BrOCNAhbg5Peklqfr%2F9XNCu8oKCRmcGXHgEaxov7dk%2FA%2Bzjm4p91RvLibixRQqUm21ku9Tch5K1U1sV8pioMkx9d&X-Amz-Signature=ef498817992664449f259fb6a4391f2448f0223892b7e96ebf699f9ba140c05e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
