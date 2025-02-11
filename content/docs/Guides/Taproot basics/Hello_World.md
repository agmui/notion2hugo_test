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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HLEMJUN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICI%2Bd98VxhFEYL1pOeINQNX3Uu2oPNWeV%2FKF9jgflUvJAiEApyn6ch9LEvoEomQcISzYVdBphh4pmungeNhliYYmeW4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRheKv2vC0XacpJzircA8poROZ%2Blc9NnFbzm1IoTGoHzwDp991%2F88lL5NChkyLjoYimUi95F1FB%2F7I5OO4xeYBNmhxd5kt3iFrfWaonYJUXkOpfUZrxv9lzT77yMCN%2B4HJNG9fC7eOho299d9mobegbytuYdEDW8jCmCahlmrANd8fmQpbuVEleHHxxlymJgfQo4%2FONEFr3zB8UIy5sCZiHgkGWIK4Zx1lccdwwDICbituSNfACGeL4Hq9FRDSgoOXBM1cUP%2BkhxToI2LDcuCBBUyZZb8wBV1roZuaQhKO92CqKiy8b%2BrCFgCi4Mix%2Fabxkg2rv%2FUqjlI8FGrFzSuFcfdP7NQdoGtm73hnND9eAz%2Fe3rWQEYvKjDK%2BJPY%2B70Ub2NYDrNVHYJ03YC9SrY%2BY1wX4JzZmbQJ3vPROTgybsZuefRskRvV1tujL7fLD%2F9MSJmyhZxl0tOjP5P7oixji7R7PShK7HcAfkNru9FURwX9VjJPNH%2BbsKMWPw8V%2FLOu7OtZeAZYNTx2QS6azzb6doZpBIzs6PKwnGwjuUEBzCrpm%2Ftr4%2Frssrmbku5sH0CEg4SNMnoUqneNtNWdCGElxQBUox51O6rgBgTAewel%2BOb%2BDiCiB2x0lNgxJ%2B%2BDr6FpMa5lYAlt0P1THrMMfSrL0GOqUB0JprKsLJJTnEZ%2BI6gtv6j6X00m2H%2FD7OTdFbgmj39qEpwtIEx7cCrZigXZ8fKpCNVA3ZbVNxNZxtVId5TCr17MGX8FXrvbp%2B9EwOxUI0EnvXWd2N79PUg5R226%2BVmvPAID8aJAFXuLj%2B3uF5id7nJ%2FoKy0qufCMxltFhcuc0QYYSA6yKnI5PWwGLHF4DNPA50MFzcry2bKTfXo1QhkwTlw0yjdT6&X-Amz-Signature=ee03de53590020e178fcadd778318ec6bd53497b67bf639c5f6b654299b83546&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HLEMJUN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICI%2Bd98VxhFEYL1pOeINQNX3Uu2oPNWeV%2FKF9jgflUvJAiEApyn6ch9LEvoEomQcISzYVdBphh4pmungeNhliYYmeW4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRheKv2vC0XacpJzircA8poROZ%2Blc9NnFbzm1IoTGoHzwDp991%2F88lL5NChkyLjoYimUi95F1FB%2F7I5OO4xeYBNmhxd5kt3iFrfWaonYJUXkOpfUZrxv9lzT77yMCN%2B4HJNG9fC7eOho299d9mobegbytuYdEDW8jCmCahlmrANd8fmQpbuVEleHHxxlymJgfQo4%2FONEFr3zB8UIy5sCZiHgkGWIK4Zx1lccdwwDICbituSNfACGeL4Hq9FRDSgoOXBM1cUP%2BkhxToI2LDcuCBBUyZZb8wBV1roZuaQhKO92CqKiy8b%2BrCFgCi4Mix%2Fabxkg2rv%2FUqjlI8FGrFzSuFcfdP7NQdoGtm73hnND9eAz%2Fe3rWQEYvKjDK%2BJPY%2B70Ub2NYDrNVHYJ03YC9SrY%2BY1wX4JzZmbQJ3vPROTgybsZuefRskRvV1tujL7fLD%2F9MSJmyhZxl0tOjP5P7oixji7R7PShK7HcAfkNru9FURwX9VjJPNH%2BbsKMWPw8V%2FLOu7OtZeAZYNTx2QS6azzb6doZpBIzs6PKwnGwjuUEBzCrpm%2Ftr4%2Frssrmbku5sH0CEg4SNMnoUqneNtNWdCGElxQBUox51O6rgBgTAewel%2BOb%2BDiCiB2x0lNgxJ%2B%2BDr6FpMa5lYAlt0P1THrMMfSrL0GOqUB0JprKsLJJTnEZ%2BI6gtv6j6X00m2H%2FD7OTdFbgmj39qEpwtIEx7cCrZigXZ8fKpCNVA3ZbVNxNZxtVId5TCr17MGX8FXrvbp%2B9EwOxUI0EnvXWd2N79PUg5R226%2BVmvPAID8aJAFXuLj%2B3uF5id7nJ%2FoKy0qufCMxltFhcuc0QYYSA6yKnI5PWwGLHF4DNPA50MFzcry2bKTfXo1QhkwTlw0yjdT6&X-Amz-Signature=021eb369d647d73788e6aeb7cee72e61c389e57911e271e49b6f8be25d933e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
