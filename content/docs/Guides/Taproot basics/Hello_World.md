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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDNXIIE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDnzlKxD7QjolyuCTa3ZJj0Z6OJnc2y2CA1aqqQTiZ02wIhAP%2Bm0NJvqy4XImV9cwU0B%2BRmgmkieE8GG1hzTknWlz2AKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeGm%2FATHGgQP7IuBkq3ANDYsaGTr7zmsCVoL1fc%2BvC6tC%2BiAt%2BLGS2azYEI4wsGFa6T75Qou19wOyhoCxJlR7x2A9NkSK%2FXuGihgQjwNMEwSt7U0ykK0xvW80AlvG%2BNunHyqiY2QjwrUuqsPx9n1TOj25W8T7F2bmw70OgK062FtEQZ%2B3g60SXq5Ss%2B4H7UUhnKZjNxSN1Ioui%2B3YUUtWh%2Fd9i2Z7UsAeukANJto6K3m8VwYu%2FhPVlvsfBrGERodPGQuT1Qm0FNPlZhuxbRDtUKV7vCwLvukl%2FJVvUUnn9SQCBlhvdmnQ21xz5bGHsCJ72GvqX5Sy0AcLZxpWVwU8hCE1Lbq1wjONpr5zh5s%2BnDk3YcQDbJDnflNdnflhquJbUvalESb2sEEFUnYIHySLeOwsV6BCoI95sf%2FDoQAC%2BLOFUoyeqEHs2l3JcEgr5l8TPrNponTHsr7NcJrapOqEpr0WSfdTpUU9cwrUFBafiuELZ91oFV2CwacRaa6VSuRgCGb67LVXI0ZaMmKV%2FLNO5EmVf1Rvux6a9GFcq%2BZIIi6qVWq5J0EXbXoQsS4TLvcUycNRZ4GeVHhwCb83sea7atNl4q5FyY%2BfZcGLKsUD7Yc69GCu770TrmevkBPszILVoikcjp7Dwj%2B1SwzCkoI%2FABjqkAauz2te%2Fy5IANeUYGu3Fs5b5BLbkzaeeepP%2FQWca4oHQ2BuDPMoKLRtx%2B%2Bc%2BATjrL54RoxJU4w6xSfimKyTh6kUALrHzhNenLrNjlc9TKn9JBz0RW02SPVbuOlrSGz0vNNWCnzyxCyWY7YywAEOGDxSx5LtRIKzq2fFdUNJbfL9sj%2BHrbDy9XJyS%2BnxpN1jn2nS9HnTtq%2F1%2BzIlB2xoZTTUdjY11&X-Amz-Signature=0fedc6a2316624f68951d4a9a3af9b19fafc1b0b390e2c42cca413bd97553169&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDNXIIE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDnzlKxD7QjolyuCTa3ZJj0Z6OJnc2y2CA1aqqQTiZ02wIhAP%2Bm0NJvqy4XImV9cwU0B%2BRmgmkieE8GG1hzTknWlz2AKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeGm%2FATHGgQP7IuBkq3ANDYsaGTr7zmsCVoL1fc%2BvC6tC%2BiAt%2BLGS2azYEI4wsGFa6T75Qou19wOyhoCxJlR7x2A9NkSK%2FXuGihgQjwNMEwSt7U0ykK0xvW80AlvG%2BNunHyqiY2QjwrUuqsPx9n1TOj25W8T7F2bmw70OgK062FtEQZ%2B3g60SXq5Ss%2B4H7UUhnKZjNxSN1Ioui%2B3YUUtWh%2Fd9i2Z7UsAeukANJto6K3m8VwYu%2FhPVlvsfBrGERodPGQuT1Qm0FNPlZhuxbRDtUKV7vCwLvukl%2FJVvUUnn9SQCBlhvdmnQ21xz5bGHsCJ72GvqX5Sy0AcLZxpWVwU8hCE1Lbq1wjONpr5zh5s%2BnDk3YcQDbJDnflNdnflhquJbUvalESb2sEEFUnYIHySLeOwsV6BCoI95sf%2FDoQAC%2BLOFUoyeqEHs2l3JcEgr5l8TPrNponTHsr7NcJrapOqEpr0WSfdTpUU9cwrUFBafiuELZ91oFV2CwacRaa6VSuRgCGb67LVXI0ZaMmKV%2FLNO5EmVf1Rvux6a9GFcq%2BZIIi6qVWq5J0EXbXoQsS4TLvcUycNRZ4GeVHhwCb83sea7atNl4q5FyY%2BfZcGLKsUD7Yc69GCu770TrmevkBPszILVoikcjp7Dwj%2B1SwzCkoI%2FABjqkAauz2te%2Fy5IANeUYGu3Fs5b5BLbkzaeeepP%2FQWca4oHQ2BuDPMoKLRtx%2B%2Bc%2BATjrL54RoxJU4w6xSfimKyTh6kUALrHzhNenLrNjlc9TKn9JBz0RW02SPVbuOlrSGz0vNNWCnzyxCyWY7YywAEOGDxSx5LtRIKzq2fFdUNJbfL9sj%2BHrbDy9XJyS%2BnxpN1jn2nS9HnTtq%2F1%2BzIlB2xoZTTUdjY11&X-Amz-Signature=ceda1710bc91a93f9fd25f5ddbf8b315fc2562c8c947f781d2e7178eec12030f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
