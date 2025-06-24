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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BUS2HK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFiEIgAOspcVbkGFdoqSTZ0aZ9B4f056ZYX4HsQNdDPAiEAjHALKbJT89Ovy8khPBE%2B9fJwEMa2iAM0KEdebiF%2B2%2BUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCnZL1RyH1rb89epMCrcA27RNo04ki99D6Xack%2FxCij0tr8p2DPV1MrYsZUAlOspUPZk6qyPfOKCb9QgvObkF%2FFj50RVkN%2B%2F2TocDQ5pPlhgzREmBc%2FYSc7F1LJHy%2BFYXLWnRCgeClNMvF1HoKsZf8KJuDbL%2FUyfxF4EOxFy265q01tza409isB8QzMe%2FfoXVYx%2BaiWn7sgNGpTEPwKMjzSW%2FWa%2BUxvBL8HACSamWdiQrw58lNlBOEI2ghMgjTyG0ACSQDkvF08cAGtReRNHK2quRxrZjv%2BY%2F0LSk2kio%2B4tAZfCxWrn7%2F2RA21PHiIV868jmT7upNP1mhBLVL70p%2BA7fjn54Sv6OZQxw3rWdBPur2Ko9eLr7p26zd7x3%2ByDqyPGOhVb7F9E2%2FEds5v2Qyx4eF7P%2FwoRKvNvvpSJgtUIeDoDPebhP0rGQCXLxqV3cBHJhMRUBK9GdUmi15n%2Buk4AsfTQ4jm4nQjMxBmf%2B8wL9CEeU4gjXQyoOY87%2BwnAKgio89lTx520rmTF2DqeuJLiZJ3sPTDfNUoT3SBun0QTh1gYlyavQicNE8rrG7iqFZTyEmyWl85kBmjfzizSLy5QfM1rsImC1kkTbkMEo07ecl2zsignpaqLx7Wg0H4KA%2B4wGi6sq6CKe3%2BQMKvd6sIGOqUBmoejdxTnq9ylUt7dFWRWBVTSjtkDYBqSxunQG%2BWzCRktVuByqZfdotp1IacovdX%2BDL1Q13WyFUv9S7%2B%2BMaB79b%2FhbvnDVjESQeF3plnpOZodSFZyhBLDv2BMVW%2BpaXpdzQ0gtMMcWGHB74o8Rf5j0wPQTSfu6IXEN9QFTxgn3jam0CymewVR7VVhXBtMXkF2mqXJ4PpOr8r%2Bv7%2BDNQxZZvcBnsqd&X-Amz-Signature=df86506d752022699bb4bbd67f81bdcef634675cc19efed7b3501ab70a0dcf45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BUS2HK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFiEIgAOspcVbkGFdoqSTZ0aZ9B4f056ZYX4HsQNdDPAiEAjHALKbJT89Ovy8khPBE%2B9fJwEMa2iAM0KEdebiF%2B2%2BUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCnZL1RyH1rb89epMCrcA27RNo04ki99D6Xack%2FxCij0tr8p2DPV1MrYsZUAlOspUPZk6qyPfOKCb9QgvObkF%2FFj50RVkN%2B%2F2TocDQ5pPlhgzREmBc%2FYSc7F1LJHy%2BFYXLWnRCgeClNMvF1HoKsZf8KJuDbL%2FUyfxF4EOxFy265q01tza409isB8QzMe%2FfoXVYx%2BaiWn7sgNGpTEPwKMjzSW%2FWa%2BUxvBL8HACSamWdiQrw58lNlBOEI2ghMgjTyG0ACSQDkvF08cAGtReRNHK2quRxrZjv%2BY%2F0LSk2kio%2B4tAZfCxWrn7%2F2RA21PHiIV868jmT7upNP1mhBLVL70p%2BA7fjn54Sv6OZQxw3rWdBPur2Ko9eLr7p26zd7x3%2ByDqyPGOhVb7F9E2%2FEds5v2Qyx4eF7P%2FwoRKvNvvpSJgtUIeDoDPebhP0rGQCXLxqV3cBHJhMRUBK9GdUmi15n%2Buk4AsfTQ4jm4nQjMxBmf%2B8wL9CEeU4gjXQyoOY87%2BwnAKgio89lTx520rmTF2DqeuJLiZJ3sPTDfNUoT3SBun0QTh1gYlyavQicNE8rrG7iqFZTyEmyWl85kBmjfzizSLy5QfM1rsImC1kkTbkMEo07ecl2zsignpaqLx7Wg0H4KA%2B4wGi6sq6CKe3%2BQMKvd6sIGOqUBmoejdxTnq9ylUt7dFWRWBVTSjtkDYBqSxunQG%2BWzCRktVuByqZfdotp1IacovdX%2BDL1Q13WyFUv9S7%2B%2BMaB79b%2FhbvnDVjESQeF3plnpOZodSFZyhBLDv2BMVW%2BpaXpdzQ0gtMMcWGHB74o8Rf5j0wPQTSfu6IXEN9QFTxgn3jam0CymewVR7VVhXBtMXkF2mqXJ4PpOr8r%2Bv7%2BDNQxZZvcBnsqd&X-Amz-Signature=921b3fefcab325f49ecf6a0619370e4e8d606dc601d144afa96ec5230a89f1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
