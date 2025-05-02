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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLZWDEY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDlAX61rkvjhj60%2FAisi7pdWmJRRZ%2F7F118csR%2Fcn8SsAiEA9CTWYyYbzfYnOt%2BUW%2F0bDNpc%2FYuYTqRsgjedPopgjuQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2Fl%2B3%2B9xWxwZgBiSrcA4A3Wjh4Zhf0DHmbMujtiZ1KVa%2FOs3wSkC4cqTHKVcYch35h%2B2r3x%2FKXJTxseSlg1kdulC84XVbRSKCg2q5pOUQpjedxWCK75kEEUpZ7pxEuojh%2FBmYaqKL7vFyqpdG81tr7XZfEdCpt2wi39WjWDMPZmRV%2FO9KdtmOImWP%2B4jAAOCDwdLTWD2AaOg4Q1ELcrTSKdVRLiFZ%2FT%2Bzl45PPWg2jq2LOBNbrvqRnyRn7LM8098HR5j5kihb44%2Bx7l5JKYJkTOv08wVodY0c%2FfoEaL0UTb1%2F1looWN8bUvtCUzerziFFqrESLz6QTpXi1F4vXs4dDo20ht2StPq1kU9dPIEOYrCxXzk2R6BQSQqpBQ2QZU4k%2BH0BhBOvXh%2FpCcChRukdJpKkjeO%2F%2BNdR7qDSFXIjl62W9G%2Bk7MpN7c%2FdTr5bdSKhT10MXP4reFfb3f3ID%2BNH2OAZk8LnasE549MyLf5wkeGV745RYqYC1xmcZnX3gXcl1KNykzLgUVgFvveKkwbObV9r%2FmoOjbQTibqSY6s92rwrF08GCiTXWK2qoUn0VZWwsdIp7a28noWqDc4Ma3sEwfLhtgBc98zgaNAXFfNswOddVWmKCYsW4CNKz%2BjxYbyO9yre1r7cP3fxgMIrs0MAGOqUBnP1xMOGR8Dq0ttwh99BGDm1inVt%2F5UccPZJaY6GhJypuvyC10Xaw1pz40JNc8NCd1kvqRP9T4x1XqHY8bKNCCEr7%2Fw%2Fm%2BR3kiURu4nyKk6YklkLa9T1b3uz%2BJY1fLH9nIBqebveFsEERp2REjChCZ8Y8sBFEv94lNwaftPu1T3M1JzCG1N4b7VFaBnC3E2Wb%2FtJhEmn3LbtuCGn%2FIscKsQ0szmKy&X-Amz-Signature=ca695d0b1d33a9ce90867be3a366227dc519bbc23547577c37d9aeecef8f840c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVLZWDEY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDlAX61rkvjhj60%2FAisi7pdWmJRRZ%2F7F118csR%2Fcn8SsAiEA9CTWYyYbzfYnOt%2BUW%2F0bDNpc%2FYuYTqRsgjedPopgjuQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2Fl%2B3%2B9xWxwZgBiSrcA4A3Wjh4Zhf0DHmbMujtiZ1KVa%2FOs3wSkC4cqTHKVcYch35h%2B2r3x%2FKXJTxseSlg1kdulC84XVbRSKCg2q5pOUQpjedxWCK75kEEUpZ7pxEuojh%2FBmYaqKL7vFyqpdG81tr7XZfEdCpt2wi39WjWDMPZmRV%2FO9KdtmOImWP%2B4jAAOCDwdLTWD2AaOg4Q1ELcrTSKdVRLiFZ%2FT%2Bzl45PPWg2jq2LOBNbrvqRnyRn7LM8098HR5j5kihb44%2Bx7l5JKYJkTOv08wVodY0c%2FfoEaL0UTb1%2F1looWN8bUvtCUzerziFFqrESLz6QTpXi1F4vXs4dDo20ht2StPq1kU9dPIEOYrCxXzk2R6BQSQqpBQ2QZU4k%2BH0BhBOvXh%2FpCcChRukdJpKkjeO%2F%2BNdR7qDSFXIjl62W9G%2Bk7MpN7c%2FdTr5bdSKhT10MXP4reFfb3f3ID%2BNH2OAZk8LnasE549MyLf5wkeGV745RYqYC1xmcZnX3gXcl1KNykzLgUVgFvveKkwbObV9r%2FmoOjbQTibqSY6s92rwrF08GCiTXWK2qoUn0VZWwsdIp7a28noWqDc4Ma3sEwfLhtgBc98zgaNAXFfNswOddVWmKCYsW4CNKz%2BjxYbyO9yre1r7cP3fxgMIrs0MAGOqUBnP1xMOGR8Dq0ttwh99BGDm1inVt%2F5UccPZJaY6GhJypuvyC10Xaw1pz40JNc8NCd1kvqRP9T4x1XqHY8bKNCCEr7%2Fw%2Fm%2BR3kiURu4nyKk6YklkLa9T1b3uz%2BJY1fLH9nIBqebveFsEERp2REjChCZ8Y8sBFEv94lNwaftPu1T3M1JzCG1N4b7VFaBnC3E2Wb%2FtJhEmn3LbtuCGn%2FIscKsQ0szmKy&X-Amz-Signature=ad12b4bf654b363babc7f1f43288a7fd2bb03e90e1c995f482aa2a323b99ef2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
