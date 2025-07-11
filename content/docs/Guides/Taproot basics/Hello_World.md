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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWP4X5P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPnwfX%2FxD9efmXqujVmUZ38xR9GaQL5f5DnOC5OuVBOAiEAv7wtDN0he%2FamdQwVBsUWBFbqVBKKO8SPPsdeUgntWPcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2Jg9bOIGYI4zeaHyrcAxwsRLESXVU22k4tsoKViAq1p03SfR%2BhY5F28Ihch%2FyeT4%2F8CiDItNOlWqnDfzh0VwA35a2lrkLmHSTiuZqcj6s2H6wlbligaek%2BOVQEPOJgD2HBCN9NixtZdZTTX1NR%2BOtya2l9Q6Mz%2Bndpt%2BIFS7dJ4PnpMx0%2F2CAWtW37FOn4R29gB8kQ3%2BjwJXl3lQy571smISLwHPVj9wW70zabCKThwlKsZGLvSDf4xhIKz%2B3OUhURrVp0K03R0y5K0nEcUuiBBWnf%2BTtsaQ1%2BDXcfuJXx73giwVd1%2FMQo1G8oaeu%2BG9xSp4VW4dL4Cul%2FprlZAbWsi8vIQfavRMFvWwe8WscTr1rQdbsvXKrqdP0ilvTtumFwGDrzYZef8Zn0i%2FAV4vfGvd9oNEZZdDx0WpKTJZVdhkg%2Fx9iZB5VZBaxsq%2Bd4CGCAYpq%2FTjAO%2BhpMjeCdy3r%2FUmYdPNnDSloRSmHn6svKnEg41U6%2FIcPifcVG5OEWZ1Qmbr0C2J6Rm3Izyxgn0lLe6Q%2Fs2xtbWXEnY4WBbNjltNLYBQYrlA%2BBkdVO1qvJqlXbGeRzPFTj3IJDNLJsso6VnxNPwqg8xt5%2FUgN29BwVBhMrfcNJ0RQXCzWuMN1a8C5fntJozLbJ8JQHMIX%2Bw8MGOqUBy3WWpfB7cjHZHTkLWn22fmIpZbGrPtbNyxVRQUC2jsjc3nrBBTdc5prA9uQ2wA9%2BC9YRlIgUichSXNV6hzI8tFwOwmODVrD4fKDTxgxilmHFo4s%2BB0iOUWZbK3jafZB9oAmhnEYXJ1qbF9mNCP4YwTf%2B%2FqY2bQd0VFSrsz%2BT4LsEpRag1h5v4bjebyqZcxZS2%2BIyzv76F1bAz%2Fi228HbSfA1LN1P&X-Amz-Signature=596138fcb276f9045a634ebc0df273a15c9c92f9af0b17c8e8fb435bb4b1a364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWP4X5P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPnwfX%2FxD9efmXqujVmUZ38xR9GaQL5f5DnOC5OuVBOAiEAv7wtDN0he%2FamdQwVBsUWBFbqVBKKO8SPPsdeUgntWPcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2Jg9bOIGYI4zeaHyrcAxwsRLESXVU22k4tsoKViAq1p03SfR%2BhY5F28Ihch%2FyeT4%2F8CiDItNOlWqnDfzh0VwA35a2lrkLmHSTiuZqcj6s2H6wlbligaek%2BOVQEPOJgD2HBCN9NixtZdZTTX1NR%2BOtya2l9Q6Mz%2Bndpt%2BIFS7dJ4PnpMx0%2F2CAWtW37FOn4R29gB8kQ3%2BjwJXl3lQy571smISLwHPVj9wW70zabCKThwlKsZGLvSDf4xhIKz%2B3OUhURrVp0K03R0y5K0nEcUuiBBWnf%2BTtsaQ1%2BDXcfuJXx73giwVd1%2FMQo1G8oaeu%2BG9xSp4VW4dL4Cul%2FprlZAbWsi8vIQfavRMFvWwe8WscTr1rQdbsvXKrqdP0ilvTtumFwGDrzYZef8Zn0i%2FAV4vfGvd9oNEZZdDx0WpKTJZVdhkg%2Fx9iZB5VZBaxsq%2Bd4CGCAYpq%2FTjAO%2BhpMjeCdy3r%2FUmYdPNnDSloRSmHn6svKnEg41U6%2FIcPifcVG5OEWZ1Qmbr0C2J6Rm3Izyxgn0lLe6Q%2Fs2xtbWXEnY4WBbNjltNLYBQYrlA%2BBkdVO1qvJqlXbGeRzPFTj3IJDNLJsso6VnxNPwqg8xt5%2FUgN29BwVBhMrfcNJ0RQXCzWuMN1a8C5fntJozLbJ8JQHMIX%2Bw8MGOqUBy3WWpfB7cjHZHTkLWn22fmIpZbGrPtbNyxVRQUC2jsjc3nrBBTdc5prA9uQ2wA9%2BC9YRlIgUichSXNV6hzI8tFwOwmODVrD4fKDTxgxilmHFo4s%2BB0iOUWZbK3jafZB9oAmhnEYXJ1qbF9mNCP4YwTf%2B%2FqY2bQd0VFSrsz%2BT4LsEpRag1h5v4bjebyqZcxZS2%2BIyzv76F1bAz%2Fi228HbSfA1LN1P&X-Amz-Signature=95abc99ce9702d2770b30b05d0dbd6057c82089a0163a01b0136cd99fdc7f26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
