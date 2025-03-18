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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5JPNV7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDfY3jsb3q97ZY2sTGtCbZwfb3HjitCGkEtyNoG8KxnDAIhANM%2By%2BvanMymA8fUuRHsocG3jTyLXUp6dpAeIgkyIok3Kv8DCGIQABoMNjM3NDIzMTgzODA1Igz667taXeGFnI9Rez0q3AOY5owv%2B9b7sxwMKQBeRZ%2BeZXLmBa9aMlInP34%2BRZaCJS%2BkHtXByuSXVztS0nqPBVeTwz1Qp6wSDIjUm4S7ZncV9ylLl9QbNtw9Y0%2FycjkynSeAqEd%2BoWThUPsLiqfLL89GCAuX%2FUGpttJyMe1a3wZIi9%2BgEfi%2BhuxOqVU38yth6s8MWVkb2bEHEMixAn1u%2BrY10bk%2F8rb%2FtyqOnaoh9sysA6LzI2O%2Bp1kqgPcGVYvenXIoDP5C7Rxx%2FwsHH7ShoOfX8jLFt%2BexUmCdlmab3U0E%2Bzz5gnZYBVIh61pcHwygaCI5mMYuallc2zUmQ4C%2BYINm9KnmkF8DqdZnDkO10uIiZ%2FR3bQ4XURoecNQifbuV1ZIueEs0tp0tCioB9%2BIPknntbwGd%2B0qmtDCurUnMQPWwWgbyYgM6DgpTikSpcNlr4%2BgZJKqqlPbHmbb4PxvCsLULScfRyz0V9vbYhOVBFkVUBESKKpHbg36dUOxpZMSR3JjMfKECTgJUecC5x8rPIdn6f4yBZDNdPkmyKI2RQbmCmhBB7cdYkmgXE6bGd2GL80kwEVvXOY3KjIQOdEHErntazo0qcrOnx6MAjNx5boOIw3jPjvi6GO1BET7BOXIZHetk5n7%2BzMkvVfvmizDH1Oa%2BBjqkAYLsOgx%2FqWPC5P7jDMhRqQ33i7U%2BeWImZy7OM0roSdhsN6AXg3ynM%2BRMW%2FvMpglJzCfOZH0tcoDHU%2Bo7%2BB%2FCRodpZqvQKqhRCcjxMMDHghxnzyXh6oC%2BhHSsIQusClvGDCSOiBtwlczOCliksd6wN7ov6Hsoi0U0gXNyPAw84NISv76tq5NSuiLLwmDp58KA%2BZcK9I95xdf95WpAsqYhnt2LVw1p&X-Amz-Signature=1db817a07bdb0387fd21b9b083c7a80672698c36a81a0afde2c248e8dc9ec650&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5JPNV7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDfY3jsb3q97ZY2sTGtCbZwfb3HjitCGkEtyNoG8KxnDAIhANM%2By%2BvanMymA8fUuRHsocG3jTyLXUp6dpAeIgkyIok3Kv8DCGIQABoMNjM3NDIzMTgzODA1Igz667taXeGFnI9Rez0q3AOY5owv%2B9b7sxwMKQBeRZ%2BeZXLmBa9aMlInP34%2BRZaCJS%2BkHtXByuSXVztS0nqPBVeTwz1Qp6wSDIjUm4S7ZncV9ylLl9QbNtw9Y0%2FycjkynSeAqEd%2BoWThUPsLiqfLL89GCAuX%2FUGpttJyMe1a3wZIi9%2BgEfi%2BhuxOqVU38yth6s8MWVkb2bEHEMixAn1u%2BrY10bk%2F8rb%2FtyqOnaoh9sysA6LzI2O%2Bp1kqgPcGVYvenXIoDP5C7Rxx%2FwsHH7ShoOfX8jLFt%2BexUmCdlmab3U0E%2Bzz5gnZYBVIh61pcHwygaCI5mMYuallc2zUmQ4C%2BYINm9KnmkF8DqdZnDkO10uIiZ%2FR3bQ4XURoecNQifbuV1ZIueEs0tp0tCioB9%2BIPknntbwGd%2B0qmtDCurUnMQPWwWgbyYgM6DgpTikSpcNlr4%2BgZJKqqlPbHmbb4PxvCsLULScfRyz0V9vbYhOVBFkVUBESKKpHbg36dUOxpZMSR3JjMfKECTgJUecC5x8rPIdn6f4yBZDNdPkmyKI2RQbmCmhBB7cdYkmgXE6bGd2GL80kwEVvXOY3KjIQOdEHErntazo0qcrOnx6MAjNx5boOIw3jPjvi6GO1BET7BOXIZHetk5n7%2BzMkvVfvmizDH1Oa%2BBjqkAYLsOgx%2FqWPC5P7jDMhRqQ33i7U%2BeWImZy7OM0roSdhsN6AXg3ynM%2BRMW%2FvMpglJzCfOZH0tcoDHU%2Bo7%2BB%2FCRodpZqvQKqhRCcjxMMDHghxnzyXh6oC%2BhHSsIQusClvGDCSOiBtwlczOCliksd6wN7ov6Hsoi0U0gXNyPAw84NISv76tq5NSuiLLwmDp58KA%2BZcK9I95xdf95WpAsqYhnt2LVw1p&X-Amz-Signature=1340f758d95527f93a07699a4687236ee22f287d9201d6e315479198925870d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
