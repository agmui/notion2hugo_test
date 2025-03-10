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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOY5RTQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDQscm06IjRsCGVwlldph6E5a2bgmMZ2YdRm3K45ZXZAgIgEUvoRTcnS0%2FGff%2FuSiIko%2B2cnAhl6TXS2g6cQhGV7ioqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkgqiHVtaGOUpJebCrcA9yZoSsM%2B12I%2B4RIl2cbK9Rhl8NEOfZ%2F%2BHLM3VrCc9woYeXFsTyQipf7VeH7vYfKHo0Di5%2BlojplDVLsQmMEPtjJBittzpHUQ63NBA1wsDkcz4%2BIxGiDgz18NkjPMGKJ01FOep3uq3bzF6zoBe2upn1PVYrjbYMNyC4L9E7wctChQRLmknkvHi6wkSXN4HM8wIjjNpDqMRS2mcVcZNx2q78nsUmNHT0eLBFqSrHYNEu6D6%2FmWMzWVqOKoOLdJgGbx%2FwGUb711Kzd3acjnugF41O0VfvY7EnfS8ELqXTnP%2F4U%2FYQnd1e92jb%2BQUQyvgkPeA9TxgKnzJWtf2MYJdS1kVXbtvB%2BeLzmdymxVe8OXPNYVE1M1AvjKNpvPmDhifDrgtMgNybsDpwDXwAomSH2blHgnnSn%2BXkWOsdXzFyjTpr2HPynAPs2guNwlj7S3IzxGIgIRDpHGTC68%2BZiKFZ2xZJ2zlXOmh4A8Fz1zZFY6gdWhaeTSAMNW7rNol8U3R77vG4YL4%2FFJHQuoJ4PwxPIINhX8cLMRdrnNqE0gHYoEnl6hDY37uChgdTdjzdgspzaMoVNUDCTiaEAbVOpwhnDDIUUr3LIAgPr%2BVrEvJxd%2Br5a5oQC9%2BIvXM0w0nK9MNHour4GOqUBS0eEFBQhqXmqTzl0o0gEE03dUNUanNO36zW1bBTX4Z8aqPot%2FQfsKV7ykMzMD46I2wW9EsOzhkHTMx0n7FF4s%2BZApXfLOAebmJy0L%2BR77wq7Aq9MLb16XhAsAC39eHj65qphfR5PjaNgbmkjTW3b2J%2FkbL8T6xnDf3aFQ%2B9J83MytBdICDoqWbVRkPNBxdrYSAZ5iCcvhpIU6Mf%2F7Iw3CmieCDZM&X-Amz-Signature=6d2d5522324e7c1b7fcbafba91875dfaa256214a0a3ea790aac64932b46626b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FOY5RTQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDQscm06IjRsCGVwlldph6E5a2bgmMZ2YdRm3K45ZXZAgIgEUvoRTcnS0%2FGff%2FuSiIko%2B2cnAhl6TXS2g6cQhGV7ioqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkgqiHVtaGOUpJebCrcA9yZoSsM%2B12I%2B4RIl2cbK9Rhl8NEOfZ%2F%2BHLM3VrCc9woYeXFsTyQipf7VeH7vYfKHo0Di5%2BlojplDVLsQmMEPtjJBittzpHUQ63NBA1wsDkcz4%2BIxGiDgz18NkjPMGKJ01FOep3uq3bzF6zoBe2upn1PVYrjbYMNyC4L9E7wctChQRLmknkvHi6wkSXN4HM8wIjjNpDqMRS2mcVcZNx2q78nsUmNHT0eLBFqSrHYNEu6D6%2FmWMzWVqOKoOLdJgGbx%2FwGUb711Kzd3acjnugF41O0VfvY7EnfS8ELqXTnP%2F4U%2FYQnd1e92jb%2BQUQyvgkPeA9TxgKnzJWtf2MYJdS1kVXbtvB%2BeLzmdymxVe8OXPNYVE1M1AvjKNpvPmDhifDrgtMgNybsDpwDXwAomSH2blHgnnSn%2BXkWOsdXzFyjTpr2HPynAPs2guNwlj7S3IzxGIgIRDpHGTC68%2BZiKFZ2xZJ2zlXOmh4A8Fz1zZFY6gdWhaeTSAMNW7rNol8U3R77vG4YL4%2FFJHQuoJ4PwxPIINhX8cLMRdrnNqE0gHYoEnl6hDY37uChgdTdjzdgspzaMoVNUDCTiaEAbVOpwhnDDIUUr3LIAgPr%2BVrEvJxd%2Br5a5oQC9%2BIvXM0w0nK9MNHour4GOqUBS0eEFBQhqXmqTzl0o0gEE03dUNUanNO36zW1bBTX4Z8aqPot%2FQfsKV7ykMzMD46I2wW9EsOzhkHTMx0n7FF4s%2BZApXfLOAebmJy0L%2BR77wq7Aq9MLb16XhAsAC39eHj65qphfR5PjaNgbmkjTW3b2J%2FkbL8T6xnDf3aFQ%2B9J83MytBdICDoqWbVRkPNBxdrYSAZ5iCcvhpIU6Mf%2F7Iw3CmieCDZM&X-Amz-Signature=bee02931a31cd58127919c2ca6e5468353836aca8bc4db933d54dd4c1ecca196&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
