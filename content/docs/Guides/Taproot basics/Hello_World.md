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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GCOLJV%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY96zCOFGtdDpKAdhPmzuZ6BZdnXbJ85cLL7gV5eerEAiAoxFW%2FdYly32EkOuXksBXp%2FW%2F6uIe3i%2Bb7%2BJvVmFuwjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPFNWNCFt1lC%2BgMrKtwD3r1ishYOO4gtqIcw%2B9sSHThqvEYLRh6xKaYcb7sTY9lvAHD1aw5yoReWvezHc4MbH2w5xXxBSr3TyzMS6UYXNAdQv3MLNte3OpKgSIbcfGDLPUqjI3llaBrc3jYb%2BRJtF7C6LVHXm02ZoMi3lEUa26vm52TL%2BfJO4YAdeCv0UakxWDOp8VXM5o6%2B3vneacKDLZtsmh4%2BTQG56GjFjzkSd5SKbaQOx9Wi68rKRNFOTPOHshyo1QjGjX%2FaesSQH%2BY%2Fxu2KBgXipWr9F3TEen9WL1cFwiAPJt%2BEKxXEj3AwTP4z0HZBfyobdn6drEPq%2FG4s3FbWZC84HUyKpzsDwvc0Z%2FKbTAUFp0rF7w6hozHAfh%2Bf4UKDxtvhnrOJA90iSot3Hnn53SpFMQtKNKvIgqAcvJHnNslRteVxJjIcAEHdkPBN7flwzsUckezA91bUpuETOLBKjfL9A7grNwT3ykU3chbozmtuH6fjkUb0dAkPxmQsL%2BGDbImW5inYJLlMo8VeQrm56O%2FVcgs1i9L%2FFBzpJb%2B3DOBVk6qX8lm2lUYGvEGr07cB4wP5ZhgVfh02VTDewwHsdP3osjPEJk%2BywylK21A4zAHhEDOnXGNdLlgKHjCqRPbx82exooHdCIEwnt%2FpyAY6pgEcgA6F%2B4q0kF92ucfI3kwRsLsL9yAqGvm74XNiV%2Btv5VHuGvIasJMGzDZimps6Ia0Q5RL03g37l7dYyW1fLpycxKEBK2y6%2BXYXuPZlCQawJyI0tpwsvHxIduuNzwlsScC7yT1B71ZSvr0%2FqcalspJ4b8Quset7j%2BSqJI1t%2FMBk0j6o3OOuHOX7FmzvFxE%2FV8bYvymnNNCVS0mKNJRKy8fZC%2F64uRTG&X-Amz-Signature=55c7d4908f95b9e048bf3981f1fbc4ae5c17774ae193ff07cf81f27be8af9712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GCOLJV%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY96zCOFGtdDpKAdhPmzuZ6BZdnXbJ85cLL7gV5eerEAiAoxFW%2FdYly32EkOuXksBXp%2FW%2F6uIe3i%2Bb7%2BJvVmFuwjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPFNWNCFt1lC%2BgMrKtwD3r1ishYOO4gtqIcw%2B9sSHThqvEYLRh6xKaYcb7sTY9lvAHD1aw5yoReWvezHc4MbH2w5xXxBSr3TyzMS6UYXNAdQv3MLNte3OpKgSIbcfGDLPUqjI3llaBrc3jYb%2BRJtF7C6LVHXm02ZoMi3lEUa26vm52TL%2BfJO4YAdeCv0UakxWDOp8VXM5o6%2B3vneacKDLZtsmh4%2BTQG56GjFjzkSd5SKbaQOx9Wi68rKRNFOTPOHshyo1QjGjX%2FaesSQH%2BY%2Fxu2KBgXipWr9F3TEen9WL1cFwiAPJt%2BEKxXEj3AwTP4z0HZBfyobdn6drEPq%2FG4s3FbWZC84HUyKpzsDwvc0Z%2FKbTAUFp0rF7w6hozHAfh%2Bf4UKDxtvhnrOJA90iSot3Hnn53SpFMQtKNKvIgqAcvJHnNslRteVxJjIcAEHdkPBN7flwzsUckezA91bUpuETOLBKjfL9A7grNwT3ykU3chbozmtuH6fjkUb0dAkPxmQsL%2BGDbImW5inYJLlMo8VeQrm56O%2FVcgs1i9L%2FFBzpJb%2B3DOBVk6qX8lm2lUYGvEGr07cB4wP5ZhgVfh02VTDewwHsdP3osjPEJk%2BywylK21A4zAHhEDOnXGNdLlgKHjCqRPbx82exooHdCIEwnt%2FpyAY6pgEcgA6F%2B4q0kF92ucfI3kwRsLsL9yAqGvm74XNiV%2Btv5VHuGvIasJMGzDZimps6Ia0Q5RL03g37l7dYyW1fLpycxKEBK2y6%2BXYXuPZlCQawJyI0tpwsvHxIduuNzwlsScC7yT1B71ZSvr0%2FqcalspJ4b8Quset7j%2BSqJI1t%2FMBk0j6o3OOuHOX7FmzvFxE%2FV8bYvymnNNCVS0mKNJRKy8fZC%2F64uRTG&X-Amz-Signature=05148876b02287cd83ca5af97cfe2b24f1baff660e1cbcf3b7a4bfccd7d94536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
