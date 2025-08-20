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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NBBMMZV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC63fCbTtjjUTcxAmjImsHAjOVaEqKjmPp1s7KtBaVR9QIgYw%2BAId4QpHBRLY8qqXIu7aK3JJ3ERx%2Bc%2BNKuwUrJ7KwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXwitwFCF9Fu%2FGceyrcAyD6NJtfmi96ZNIOxxZKl4iiOj5F%2B6A4XUz8QITcErewCv5voOAVpF6RBexpPFmMVj5Xy2e1QIz33thiUcrniiRYO3iiumZi7JyQNWbbQ2byWZwZfCXBd2xr9v8%2B4rFKexFfNTBD4WKOeOkP%2B%2BRbiJNOj12svnKA%2BmGiLB2HOTEKieCbmsOColbR3o5f2aS7mh8a62Ay4JhRb%2FGn46DllS0hJse8Lj9Hh8vEZv87ChR8L1xu8lfwQwh3DGbbsn6VwqIOrTHvXHHAiSTH9G8dxT0mIySJgwK1mkUNIphMHAFMNa4o4PZ3A17CWjOtm12w8t9CPdA9QQwvKQCZF6N3de8FnX%2FTCTv8pY82PUyfyW22Hw76M2myrDxr5TKrMqHytD%2FAqUV7%2Fl9qi0a%2BGGDNKB3o2OmNX%2Fv9XF3qbC0QHAdFj5IClS8PjlmBm0efH6rP7svwzVxvxXDoIdQXaFimx3GP15qRe%2BJPZrwcLk2r6jqluQ4Gv2F0cBxfW%2Fxi1ScgywcUp5faRAN6NuaPnyBcvTqgeCUKcT3Ib8lpyp0tRtKy%2FdjM6nikXAbCBL5KNPm4JgOokNt05kfgh7YU6aAhIucjb%2BPXmjkMG8ayORkKSJjlHiArWtBdXf63tvCWMLD5lcUGOqUBzowPRHaRoMSjwsQFWxMP2YtCm6f6GCIXKXkoM6uhDht4Btr4SlztyLgiE7mz7fMWB99UMhUJcx%2BNiB738mOG4uN7I%2FB6ORJN%2BomwtS%2FsxXEmyDpPiBJDy2tnkfbmdp0K%2FlgIKvKWkCK%2BeW2HvkP9ghgklsW3zQ1FkQ%2Fht6GIrJcuNuyRRcH8Xj2b%2BesVq6D47nvFq0prd1O%2BQh4sGGR%2B1co10v08&X-Amz-Signature=c4ab021a6fa83f15b5164eee6e1c3f4e2b36e70e217e23d49dea948c8e9119db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NBBMMZV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC63fCbTtjjUTcxAmjImsHAjOVaEqKjmPp1s7KtBaVR9QIgYw%2BAId4QpHBRLY8qqXIu7aK3JJ3ERx%2Bc%2BNKuwUrJ7KwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXwitwFCF9Fu%2FGceyrcAyD6NJtfmi96ZNIOxxZKl4iiOj5F%2B6A4XUz8QITcErewCv5voOAVpF6RBexpPFmMVj5Xy2e1QIz33thiUcrniiRYO3iiumZi7JyQNWbbQ2byWZwZfCXBd2xr9v8%2B4rFKexFfNTBD4WKOeOkP%2B%2BRbiJNOj12svnKA%2BmGiLB2HOTEKieCbmsOColbR3o5f2aS7mh8a62Ay4JhRb%2FGn46DllS0hJse8Lj9Hh8vEZv87ChR8L1xu8lfwQwh3DGbbsn6VwqIOrTHvXHHAiSTH9G8dxT0mIySJgwK1mkUNIphMHAFMNa4o4PZ3A17CWjOtm12w8t9CPdA9QQwvKQCZF6N3de8FnX%2FTCTv8pY82PUyfyW22Hw76M2myrDxr5TKrMqHytD%2FAqUV7%2Fl9qi0a%2BGGDNKB3o2OmNX%2Fv9XF3qbC0QHAdFj5IClS8PjlmBm0efH6rP7svwzVxvxXDoIdQXaFimx3GP15qRe%2BJPZrwcLk2r6jqluQ4Gv2F0cBxfW%2Fxi1ScgywcUp5faRAN6NuaPnyBcvTqgeCUKcT3Ib8lpyp0tRtKy%2FdjM6nikXAbCBL5KNPm4JgOokNt05kfgh7YU6aAhIucjb%2BPXmjkMG8ayORkKSJjlHiArWtBdXf63tvCWMLD5lcUGOqUBzowPRHaRoMSjwsQFWxMP2YtCm6f6GCIXKXkoM6uhDht4Btr4SlztyLgiE7mz7fMWB99UMhUJcx%2BNiB738mOG4uN7I%2FB6ORJN%2BomwtS%2FsxXEmyDpPiBJDy2tnkfbmdp0K%2FlgIKvKWkCK%2BeW2HvkP9ghgklsW3zQ1FkQ%2Fht6GIrJcuNuyRRcH8Xj2b%2BesVq6D47nvFq0prd1O%2BQh4sGGR%2B1co10v08&X-Amz-Signature=8c947d978fee0f686a792aed9233390c9e3714cacfe2ceb9663d9aa9c71f7223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
