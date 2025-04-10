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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD6JNB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDLFmgBI0gqtE2i5lDFpKrK0PG%2Faf%2FK32IpDR8YQfgWbAIgNjU0sIgmLgpoMYud0%2ByCD74nGnreHGkV5dUVEbeKsB0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKF%2B88xiw6yqQf8TircA7jkfM29ZHzNSWEEJwYN%2BTZjHyeu6ccSr4Gu8s%2BLGOl%2FPL%2FcuVzOODtqwaF3kqsr74hmLXk%2BXR3fqK%2BeB4hSQvgKMfV%2BpcVeedOd940cX%2Bsy%2B3hX9EoLulA6YBf1wsNLjMwiJdcK7FW89hgUGvPvn1uLGGHhTC%2Fh3z2ASi8tD2TRUnv2OIx2X12ZCb6PRPZiMOraBDiNXvDIQhZBjgj1JBDw1n4LtM%2BCz9FhWMbs38jk19OlxAlBHYs6923Htq7lLxRLPw0zVoipZTvDHzfWO0N%2Fsu4A0xYODQ6KFkrL9X14C7IRfJrxpao%2BvsdC0viSOVm2iNlcF%2FrPUSW6sjUtgcsCVGVtG2GCTCzHuAJCFQIcOiz%2Bco7%2Bgdqkg4ysF4zL3wdiGjmnLwktkHZHGDESedXe3ZdKT8%2FXW3pH9RCOD8GUBk4tdtEV1WZb8xLv1DHOM5ZqrH75jqOZlCxdQE5ocfEimkXgNwCBXlENlfgaP9CyPcOKBRCGRtIPF2jDHMW480%2BcdIw3JdqLyBwnetjRY86JHXmnolMNAhjg0f2JReOLUb%2F19tyUdIndI4%2FrJseiyGT%2FzWBhAwYaoHY1jyxGN42teBFjTXEUETuosvLCoiqVgzbGx5yV0edmh%2BGXMKix4L8GOqUBggIk4%2BEE5r92lq98pu%2BAkfc4Q4cC0KPeM%2FvpEMa75HTWtOLcss68AmrN0deoelaxb1fcEv4NzdivFX3s2F4ywpLuuKi65MnZWwSo4OhbAThkkSHv5hUKzW7JpPWJBWz3Fm6LHRQBUywSMy0BT82lU6e9NsrvaGtzOPO0L3A%2B%2BWeqNrBbGYH7%2FXvaXL0junU6zllaLY6HlD2xaqsNhf9DfiZ7w54F&X-Amz-Signature=b617f02fea36727390a3b80f538bf203f19c671ca468cdff0b7cdeb8b1632a27&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD6JNB2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDLFmgBI0gqtE2i5lDFpKrK0PG%2Faf%2FK32IpDR8YQfgWbAIgNjU0sIgmLgpoMYud0%2ByCD74nGnreHGkV5dUVEbeKsB0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKF%2B88xiw6yqQf8TircA7jkfM29ZHzNSWEEJwYN%2BTZjHyeu6ccSr4Gu8s%2BLGOl%2FPL%2FcuVzOODtqwaF3kqsr74hmLXk%2BXR3fqK%2BeB4hSQvgKMfV%2BpcVeedOd940cX%2Bsy%2B3hX9EoLulA6YBf1wsNLjMwiJdcK7FW89hgUGvPvn1uLGGHhTC%2Fh3z2ASi8tD2TRUnv2OIx2X12ZCb6PRPZiMOraBDiNXvDIQhZBjgj1JBDw1n4LtM%2BCz9FhWMbs38jk19OlxAlBHYs6923Htq7lLxRLPw0zVoipZTvDHzfWO0N%2Fsu4A0xYODQ6KFkrL9X14C7IRfJrxpao%2BvsdC0viSOVm2iNlcF%2FrPUSW6sjUtgcsCVGVtG2GCTCzHuAJCFQIcOiz%2Bco7%2Bgdqkg4ysF4zL3wdiGjmnLwktkHZHGDESedXe3ZdKT8%2FXW3pH9RCOD8GUBk4tdtEV1WZb8xLv1DHOM5ZqrH75jqOZlCxdQE5ocfEimkXgNwCBXlENlfgaP9CyPcOKBRCGRtIPF2jDHMW480%2BcdIw3JdqLyBwnetjRY86JHXmnolMNAhjg0f2JReOLUb%2F19tyUdIndI4%2FrJseiyGT%2FzWBhAwYaoHY1jyxGN42teBFjTXEUETuosvLCoiqVgzbGx5yV0edmh%2BGXMKix4L8GOqUBggIk4%2BEE5r92lq98pu%2BAkfc4Q4cC0KPeM%2FvpEMa75HTWtOLcss68AmrN0deoelaxb1fcEv4NzdivFX3s2F4ywpLuuKi65MnZWwSo4OhbAThkkSHv5hUKzW7JpPWJBWz3Fm6LHRQBUywSMy0BT82lU6e9NsrvaGtzOPO0L3A%2B%2BWeqNrBbGYH7%2FXvaXL0junU6zllaLY6HlD2xaqsNhf9DfiZ7w54F&X-Amz-Signature=ee5d13e6e3bdf313e73817341f049fc21240a3686f523d78b4e22e8f2befe9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
