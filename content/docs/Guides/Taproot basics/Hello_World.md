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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECYW4GB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIM6kG5xjLqsIsPOkorp4YtrD%2Fnpbtm2SzXzHbK1kodgIgFFViYifehqwQRXgjumajbb1flN1SjD%2BvflZ3WylPhzIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrGGLzP0uERWHF9uCrcAx5czkv4IYJ4ZL2lEqttA5rONLxLM848EOuP81BYRtLfCWUKcm6wFAFVexjXmzi8zdiRhbWeo5tNibQtZJpCXV5yUD5uPqNZ95RMqrSvzO9edHPWxZ0AG0Juk3Yqnce2m1OQh2N9QemYqy%2BsggYGVlelarY6OQsH8oaU1%2Fp5Xc3W718i9CTGyssSKPxn7HNP1vfsMGEV1FSPHQv%2FxWGrKrYas5mDL2RrY78IkxYtIeCrveLoRZ%2FVtFie3KSOznT9DWh5y9WDY%2Fl0y5mrSjfkGqK%2Bp6A3iBrgtNLzIl5bbpLpz6mt5x7cchHeHn74FYM0gkfrU39FoYmeBtqkVNQ1Icn%2FskF2ycZJO06%2B6TStrKTmywn7yJyLO8gwZFhSakpTGG19dDVVYGGqvUd5qmB0oJ%2Bfb7anA%2FeRD5rTaKvCHa2e8pbm7bIBqGEdJzgVaLz11jADX0n1ADfTdiqDEdc%2F%2BzdXuE0Ii7f55nUnKvIxYnriummGgx4kmMGCBlTGLb9j4b0x2f0tKxdPBg%2B6%2F5gC6E%2Fgl%2FhrTE5urxHDw%2BPG%2Fhe2zpdvUhJH7%2Bh9dYbwby6%2B0GH8at326aQx2y3UMYFVqkJgMRus%2FZaDgTLc3t2H%2F1MqGz6%2Fb4FpYdwmTI0CMNPf2r0GOqUBrPENSrOYyczagQ%2BPe0XCzRAJbRroUGOhOeCDA8nelYvqKAGYSyrRzgLuA8yTYi7zuk701a4lMKhCDhJn0RSw8CcbUGHqNPBoQLyDXLMP%2BONHt463%2FYk4ZghWLhDW7gKIThXoEMpt390EXM%2BjpgaBCyFFUpr2jN2dCpVxCfYumKjXT%2B9l3Vp9yZNkO8cZfC5NS2v%2FOGqV4atUS%2FB0DwIGrnr%2Buxa3&X-Amz-Signature=632984d535ad32dce9aae88e91004cfaf3ac1485c21b22eb47fa1031367e73f4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECYW4GB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIM6kG5xjLqsIsPOkorp4YtrD%2Fnpbtm2SzXzHbK1kodgIgFFViYifehqwQRXgjumajbb1flN1SjD%2BvflZ3WylPhzIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrGGLzP0uERWHF9uCrcAx5czkv4IYJ4ZL2lEqttA5rONLxLM848EOuP81BYRtLfCWUKcm6wFAFVexjXmzi8zdiRhbWeo5tNibQtZJpCXV5yUD5uPqNZ95RMqrSvzO9edHPWxZ0AG0Juk3Yqnce2m1OQh2N9QemYqy%2BsggYGVlelarY6OQsH8oaU1%2Fp5Xc3W718i9CTGyssSKPxn7HNP1vfsMGEV1FSPHQv%2FxWGrKrYas5mDL2RrY78IkxYtIeCrveLoRZ%2FVtFie3KSOznT9DWh5y9WDY%2Fl0y5mrSjfkGqK%2Bp6A3iBrgtNLzIl5bbpLpz6mt5x7cchHeHn74FYM0gkfrU39FoYmeBtqkVNQ1Icn%2FskF2ycZJO06%2B6TStrKTmywn7yJyLO8gwZFhSakpTGG19dDVVYGGqvUd5qmB0oJ%2Bfb7anA%2FeRD5rTaKvCHa2e8pbm7bIBqGEdJzgVaLz11jADX0n1ADfTdiqDEdc%2F%2BzdXuE0Ii7f55nUnKvIxYnriummGgx4kmMGCBlTGLb9j4b0x2f0tKxdPBg%2B6%2F5gC6E%2Fgl%2FhrTE5urxHDw%2BPG%2Fhe2zpdvUhJH7%2Bh9dYbwby6%2B0GH8at326aQx2y3UMYFVqkJgMRus%2FZaDgTLc3t2H%2F1MqGz6%2Fb4FpYdwmTI0CMNPf2r0GOqUBrPENSrOYyczagQ%2BPe0XCzRAJbRroUGOhOeCDA8nelYvqKAGYSyrRzgLuA8yTYi7zuk701a4lMKhCDhJn0RSw8CcbUGHqNPBoQLyDXLMP%2BONHt463%2FYk4ZghWLhDW7gKIThXoEMpt390EXM%2BjpgaBCyFFUpr2jN2dCpVxCfYumKjXT%2B9l3Vp9yZNkO8cZfC5NS2v%2FOGqV4atUS%2FB0DwIGrnr%2Buxa3&X-Amz-Signature=66601b2f1ae9a432d298f3159e054ca3e2f6a164d4d57b184418e8f39c584a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
