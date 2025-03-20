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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K4MQI52%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC5PA4X5kSoYmJteVG9xdyNSPZytP11sixJcgg7LZYh%2FwIgINnH%2BpE%2Bfv7COu0%2FUuLC4Yfxdi3RCgOvgurgFNn5iccqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLcJX5e8CCOKYoe5SrcA9tptxdP195rkVJ0Zz66BQLQ3vMB1PxtXwLuTnlwMBbN96CqJyquQCqyIT7uMRPEpKtZE7p1sZsYStT4FBXSgUtAc1vUPInRSx41YhV0%2BlKmmUT97BXW8ypxnV6MKx854ZufS3AAIoStFbGgb0xsD%2F5DHSy6Yf0dDm%2Blq2wbZS9QQlhBdlPfXezQYpW7wkaVUKtpDA1wg6p6SxW6CKG%2BIdlu549xQOwSvqG5GkBwS7MayWUqdZv35EP5lz7V1Nd8Rklir06muL9hafgXHb2uCsMxFQkTPZC2ZC2AgZB5V5w7IYyoEZei0U%2B3%2BNGVwZGAZsVLAs1OxY4EGfg%2BpbDHSirmZTn3NsLmGOlCjzJdP2DOkFQwpuM9C2KXv5Ksk21P5zAA06PySgYZkpIVWrXdqFLF%2B%2FuC4yIALE%2F3307veL0H8Ff6TgmP3V1iYOhwT%2FoSO4OgX0ve%2B0f8QXfj1VfwiQgyaQnb0vIAO8sKRltqCI0v6Ytd66RmlyszEk%2BiVfSWBZUUktq8MIHDFgHQi1C3ZK0a0aKd3JZyYBu6KLrq1PT2brPBeXB0WLOo5AlmZetu0v65xnYZMtaXLxyywIWOEjZ9GTxuhchehlKpufz8WNVPsd1ownVqIcvJOJGVMKKn7r4GOqUB0IWIUgUdc4WetneeKfqj%2FtlpPilp73eurUuesrg%2BPZZZQ9D1P0Vw1jMlqwjfezVcbxuHjTnUj9cq7YZZZh1Zg6jzB87EWFZwt5ZEwf4iBTnTz0Qb85fMA3BN2ZnmS4JnmKoqxmMYPpu4Syd6AcQB11P9C%2BLb85bm%2BTLBW17gqEwUXKmwOa5b0e5EjNCyDYmw2s%2BrkeHYYvEfRmLVZnDu1pG6d72C&X-Amz-Signature=fa56f5d6dd87f5d7e42f659aa8503e961a97f17efb0f301fb54b235005392974&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K4MQI52%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC5PA4X5kSoYmJteVG9xdyNSPZytP11sixJcgg7LZYh%2FwIgINnH%2BpE%2Bfv7COu0%2FUuLC4Yfxdi3RCgOvgurgFNn5iccqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLcJX5e8CCOKYoe5SrcA9tptxdP195rkVJ0Zz66BQLQ3vMB1PxtXwLuTnlwMBbN96CqJyquQCqyIT7uMRPEpKtZE7p1sZsYStT4FBXSgUtAc1vUPInRSx41YhV0%2BlKmmUT97BXW8ypxnV6MKx854ZufS3AAIoStFbGgb0xsD%2F5DHSy6Yf0dDm%2Blq2wbZS9QQlhBdlPfXezQYpW7wkaVUKtpDA1wg6p6SxW6CKG%2BIdlu549xQOwSvqG5GkBwS7MayWUqdZv35EP5lz7V1Nd8Rklir06muL9hafgXHb2uCsMxFQkTPZC2ZC2AgZB5V5w7IYyoEZei0U%2B3%2BNGVwZGAZsVLAs1OxY4EGfg%2BpbDHSirmZTn3NsLmGOlCjzJdP2DOkFQwpuM9C2KXv5Ksk21P5zAA06PySgYZkpIVWrXdqFLF%2B%2FuC4yIALE%2F3307veL0H8Ff6TgmP3V1iYOhwT%2FoSO4OgX0ve%2B0f8QXfj1VfwiQgyaQnb0vIAO8sKRltqCI0v6Ytd66RmlyszEk%2BiVfSWBZUUktq8MIHDFgHQi1C3ZK0a0aKd3JZyYBu6KLrq1PT2brPBeXB0WLOo5AlmZetu0v65xnYZMtaXLxyywIWOEjZ9GTxuhchehlKpufz8WNVPsd1ownVqIcvJOJGVMKKn7r4GOqUB0IWIUgUdc4WetneeKfqj%2FtlpPilp73eurUuesrg%2BPZZZQ9D1P0Vw1jMlqwjfezVcbxuHjTnUj9cq7YZZZh1Zg6jzB87EWFZwt5ZEwf4iBTnTz0Qb85fMA3BN2ZnmS4JnmKoqxmMYPpu4Syd6AcQB11P9C%2BLb85bm%2BTLBW17gqEwUXKmwOa5b0e5EjNCyDYmw2s%2BrkeHYYvEfRmLVZnDu1pG6d72C&X-Amz-Signature=29ad918f55f006e38db20563459a9e075a1caac4d92ca2f985808512fd73d925&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
