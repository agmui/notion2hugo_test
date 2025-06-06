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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N33SOOF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDNxzQGdpztjdA7T26oPC0NVs%2F8uf46sEQQRycPBG%2BZGwIgTbaBrLCo3y8jpIvLP8PMRu23ONw7%2B3PWqzBiSdqXoesq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDB1%2FDcHwMqY%2FJl0scyrcAxEmOIGOQAqZfQwEvj2gbzzItDUw4soCnDg4DVLDwvt%2B3T2brJ8JGWtP20%2FRzahVGwuUx1KtJCjzqL5eW8C9YnPlG%2BqxSkVv0tkeIyaQstWpUr3birfgVh9RM1bUlzgcLtHyXEZBF5YkMcHl7cwZ0NpoHTMkMFih8j%2BJRY2Asf%2Bxvosd0LciuYt0ja5Fy6bNxyStMCb%2F0jf21UqIdjShK7Cfj69AtnkxLtlpiP03QJqkDzFeFsHfTv%2F0E572%2Byhq7%2FeKDWyGoaIcTs4BClpto1pbRMZdOJhHtxMXcSJyJVucLO9oJYTMocT02KI0dc9RYBaR335JcS5GnKZSB5wSQgpVgvEevSCMuYUa7UrSS%2BA8Tw22Gjj1BBNbokalELq5Ujgj%2B%2B6SBdr7BXBpXIeCbKm525QYAQfVVRw4QU3ER7N74ZhmwWzwfcsFqg0ribHrF3sNcQNsTbQm56lP2ff0gxpclcZkmiQW8uKZgfl0sXnkg6cd8QZj0FqZl1ysKxlKvxyUjr9OeTWsk6fWR2isOplShmE3DZyvpMo3dcFBZ8CkD56O95JMKV%2FXdsnrpGDWkAp5JdJ%2BbmpeNLRBRAoPkoVTYf83ACqxoyLnbwtv3tnm3rVhfzE1yuCIOZNvMIeZisIGOqUBAvLb%2FRJnwF0%2F%2BtWAwpaJT03vjqdpQwPsYyPgXZSE92qUyKAL9%2FuFRdaF9LoH%2BYwGJHZB%2BcWoePJ0A%2BIdKmTcQSvFEmg51sxVXzJ9RUTqOiqjFE5WlnggLcd4ORfVribiLoBXSZ4bK14UPq0nn01YYNZ%2BVZmEqQxzkHp0XbAFluNc2kOC%2FeIZE%2BOxWYRSc%2FFF%2FBNALby9DxsiNmCpy4%2FR6dguJcra&X-Amz-Signature=7c680f93c9cc329cff244fab3ad99dad162511ecc6251e4855f3f8643fd60a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N33SOOF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDNxzQGdpztjdA7T26oPC0NVs%2F8uf46sEQQRycPBG%2BZGwIgTbaBrLCo3y8jpIvLP8PMRu23ONw7%2B3PWqzBiSdqXoesq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDB1%2FDcHwMqY%2FJl0scyrcAxEmOIGOQAqZfQwEvj2gbzzItDUw4soCnDg4DVLDwvt%2B3T2brJ8JGWtP20%2FRzahVGwuUx1KtJCjzqL5eW8C9YnPlG%2BqxSkVv0tkeIyaQstWpUr3birfgVh9RM1bUlzgcLtHyXEZBF5YkMcHl7cwZ0NpoHTMkMFih8j%2BJRY2Asf%2Bxvosd0LciuYt0ja5Fy6bNxyStMCb%2F0jf21UqIdjShK7Cfj69AtnkxLtlpiP03QJqkDzFeFsHfTv%2F0E572%2Byhq7%2FeKDWyGoaIcTs4BClpto1pbRMZdOJhHtxMXcSJyJVucLO9oJYTMocT02KI0dc9RYBaR335JcS5GnKZSB5wSQgpVgvEevSCMuYUa7UrSS%2BA8Tw22Gjj1BBNbokalELq5Ujgj%2B%2B6SBdr7BXBpXIeCbKm525QYAQfVVRw4QU3ER7N74ZhmwWzwfcsFqg0ribHrF3sNcQNsTbQm56lP2ff0gxpclcZkmiQW8uKZgfl0sXnkg6cd8QZj0FqZl1ysKxlKvxyUjr9OeTWsk6fWR2isOplShmE3DZyvpMo3dcFBZ8CkD56O95JMKV%2FXdsnrpGDWkAp5JdJ%2BbmpeNLRBRAoPkoVTYf83ACqxoyLnbwtv3tnm3rVhfzE1yuCIOZNvMIeZisIGOqUBAvLb%2FRJnwF0%2F%2BtWAwpaJT03vjqdpQwPsYyPgXZSE92qUyKAL9%2FuFRdaF9LoH%2BYwGJHZB%2BcWoePJ0A%2BIdKmTcQSvFEmg51sxVXzJ9RUTqOiqjFE5WlnggLcd4ORfVribiLoBXSZ4bK14UPq0nn01YYNZ%2BVZmEqQxzkHp0XbAFluNc2kOC%2FeIZE%2BOxWYRSc%2FFF%2FBNALby9DxsiNmCpy4%2FR6dguJcra&X-Amz-Signature=ea732a37748b39bad8dfb4c96ff4947e1d4c79152f7a7531e60de53c42f550e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
