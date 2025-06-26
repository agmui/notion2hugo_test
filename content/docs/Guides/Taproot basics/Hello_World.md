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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTKCKUI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIG8eq%2FBeGfpyzB3PeK4udVqUzx8O4WTtJFQllldWg0WxAiEAy50yWEH72uhNccPnZmDP%2BIiv5BWlD4W2WSrmBxm0sQMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJms2keUKxccxj04gSrcAwOK%2Br2oZipCbc%2F5s1uQcUZ6N9DINlPAja0k9Mjl0kx%2FcM6r7SSvjAFMFhf1G1Mz4Hz%2B3ZXPLeKhpO68Qoi0E33LVfMqtZEBSukKLHpItUyvcvnCguq140OPBX1zwUJi53q0D93xiyQPd3Xtj%2FXerOHSigo2LqasRBuB%2BII9AQXT93dcJKJ%2Fej8%2Bfyn%2BtxD%2Fo6pYzBGJWOKH69JvpYRFAvL9ECwnLp8%2BZKlYEcaAIDZfK1nhaaEdzNTkWVADSyVWakrZPtUC1nXQhV3Q6lhxRRXI22GWmqI8Ga%2BRFyegdyi5kCbXwcZ%2BRXflkdmXWr7AlJBV82fnW7hW%2FTbOSYhmqw3w7pVfbc2lK%2Fs%2FyrSavqNnL1n7Ydqxmg15HfBh8vY0bWMW5hlwMRI7YLp4%2FfAkTpPJJXCzLs2GlIycZtyAv%2FmMTwiTyx%2FKj76GUCMRHstsuV2z1R0v0Wcivw4w3lxHhZ65UqMrvtbUHzQMVuoIai1Iqk%2FnE5Ya64b2Fh3A2qsWk9NTKaGxuYUlL6NHrVexCWYUuILSFP4kNZiGhbRjhTzlfgssYRGOISNA%2FfezZFDXAFDab9hoZYmDJ5Dr%2F1WHRpDP3%2FRAq3PrLynuKJFrlMOB2%2FANwSvQGRQtfNghMODL9sIGOqUBzi40ReCABj7OkanyFyUQamrphmPsiw%2BUMMvZ7rsrogHIPc54rKuIX%2F5v3iCRXGnTpTOxBv%2BuuWO%2FUl8CB1tDLz8DNnC%2BY8NiFB4OVg36thRuOweqBZ2vaPdf8gi5sLzAWhFJW81gDPtJ5ZGvyZnsQDqKA6epOjqNZNykDI6JqBxWO1A38D7BKJ8HU3LiaL8a2ivcu26lxqtOTINq7pOGreJD7%2FWo&X-Amz-Signature=8caa7da6a714b1725da3064f1779db9f32e3517c0316b4c79f2003da61368a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTKCKUI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIG8eq%2FBeGfpyzB3PeK4udVqUzx8O4WTtJFQllldWg0WxAiEAy50yWEH72uhNccPnZmDP%2BIiv5BWlD4W2WSrmBxm0sQMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJms2keUKxccxj04gSrcAwOK%2Br2oZipCbc%2F5s1uQcUZ6N9DINlPAja0k9Mjl0kx%2FcM6r7SSvjAFMFhf1G1Mz4Hz%2B3ZXPLeKhpO68Qoi0E33LVfMqtZEBSukKLHpItUyvcvnCguq140OPBX1zwUJi53q0D93xiyQPd3Xtj%2FXerOHSigo2LqasRBuB%2BII9AQXT93dcJKJ%2Fej8%2Bfyn%2BtxD%2Fo6pYzBGJWOKH69JvpYRFAvL9ECwnLp8%2BZKlYEcaAIDZfK1nhaaEdzNTkWVADSyVWakrZPtUC1nXQhV3Q6lhxRRXI22GWmqI8Ga%2BRFyegdyi5kCbXwcZ%2BRXflkdmXWr7AlJBV82fnW7hW%2FTbOSYhmqw3w7pVfbc2lK%2Fs%2FyrSavqNnL1n7Ydqxmg15HfBh8vY0bWMW5hlwMRI7YLp4%2FfAkTpPJJXCzLs2GlIycZtyAv%2FmMTwiTyx%2FKj76GUCMRHstsuV2z1R0v0Wcivw4w3lxHhZ65UqMrvtbUHzQMVuoIai1Iqk%2FnE5Ya64b2Fh3A2qsWk9NTKaGxuYUlL6NHrVexCWYUuILSFP4kNZiGhbRjhTzlfgssYRGOISNA%2FfezZFDXAFDab9hoZYmDJ5Dr%2F1WHRpDP3%2FRAq3PrLynuKJFrlMOB2%2FANwSvQGRQtfNghMODL9sIGOqUBzi40ReCABj7OkanyFyUQamrphmPsiw%2BUMMvZ7rsrogHIPc54rKuIX%2F5v3iCRXGnTpTOxBv%2BuuWO%2FUl8CB1tDLz8DNnC%2BY8NiFB4OVg36thRuOweqBZ2vaPdf8gi5sLzAWhFJW81gDPtJ5ZGvyZnsQDqKA6epOjqNZNykDI6JqBxWO1A38D7BKJ8HU3LiaL8a2ivcu26lxqtOTINq7pOGreJD7%2FWo&X-Amz-Signature=f22d82efe553dde4475153f59f56c5260e455b082f6b64a11ef981759fa05f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
