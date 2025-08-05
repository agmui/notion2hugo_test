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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRKBLCK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFHyZ%2Bxfj20SMphQFQsegdf7RPcvAKnLUORbKLT5ze8AIgISC3xwmL2ywvdtEkAO1%2FqH3jqKaK8IrkeBmpovHkASQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLmwJKLvzG58f%2BU21ircA0cslJQ0gxYY3o6auCci5t4aUawE7IKU1roSQj47KFDq%2Box20N0wcwwNYR8ebCVPhWunodcCUSKfiV4rt4s4CDqM5dIxZmVWtDC5l1McM%2FWn%2BO4b3Lhoo3vhwFH5T0yIcs%2F2FAPYGPs7FGHG7fpFv7mdqiyPzYNReyy6lMuCEnYy3P4LEIqQMwqieH6baDP5gfIFP4zrSgNI1zEKkMCqQKv8XSrpaVaxCJQ2FvOr6XEKLb2cWK6ezomStmtB%2F6Un%2BEe75haaN82ogDHQFqV1U0NUvRfbjXdD9tKAJZPa%2Bp6ehKrE32TeX7ltNAt4n4M7UphEtmULOtfINd5P%2B1z6lB6RQHpkgqhHsZobpImCM5oCVnKqq9r3oTg9KE1e1V%2BAVFXEK1eoeaLmZ9Hx2TTyfir%2FxRzlhVCAV1hT3e4cWTZu5QOL5hgQk2pJHMvnOIg8AwKWbl18iDVgr9cxj6YfkTObFxHyCZM3u5y40yiBwAC2K3TDq31%2FJ20LzQMqnt5w6VmTJPn%2Fy4qY0L1fFh%2FWqjpVG7o83hzUGkxq9bMpXQlFkcCyyQCVCe%2BQ503JN4Upe5%2BGYNTb3y4SQXdQYj5%2ByN2T74K%2B%2BYSpAmhRPIQweOPUgb9Xsr3Gbk%2BkMDaTMKvMyMQGOqUBoWvKB76kbFa6GiOK41qoY1PgoytzrIyS018%2B8h0wt2%2FulPIj7fnqkx09VwwbK4heRIS%2FmAIMtC0X4liy11bldzCwrazFTQJD%2Fg1ZWNtVTcSXWqBtiCF7FgnPQSPXW0RmX2Dwo42Wa3XLhK%2F0ZG37tpiTjGYqLB9SsJ9V6rtDSp4pmsfzH5oGlVj1IDScsOfmRZ%2B%2Bv3mM03NpGHOuQBXvimm97MkM&X-Amz-Signature=57de582b424dcba949063a33f0111ebe348291f1d396a30a7819983a37657aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRKBLCK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFHyZ%2Bxfj20SMphQFQsegdf7RPcvAKnLUORbKLT5ze8AIgISC3xwmL2ywvdtEkAO1%2FqH3jqKaK8IrkeBmpovHkASQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLmwJKLvzG58f%2BU21ircA0cslJQ0gxYY3o6auCci5t4aUawE7IKU1roSQj47KFDq%2Box20N0wcwwNYR8ebCVPhWunodcCUSKfiV4rt4s4CDqM5dIxZmVWtDC5l1McM%2FWn%2BO4b3Lhoo3vhwFH5T0yIcs%2F2FAPYGPs7FGHG7fpFv7mdqiyPzYNReyy6lMuCEnYy3P4LEIqQMwqieH6baDP5gfIFP4zrSgNI1zEKkMCqQKv8XSrpaVaxCJQ2FvOr6XEKLb2cWK6ezomStmtB%2F6Un%2BEe75haaN82ogDHQFqV1U0NUvRfbjXdD9tKAJZPa%2Bp6ehKrE32TeX7ltNAt4n4M7UphEtmULOtfINd5P%2B1z6lB6RQHpkgqhHsZobpImCM5oCVnKqq9r3oTg9KE1e1V%2BAVFXEK1eoeaLmZ9Hx2TTyfir%2FxRzlhVCAV1hT3e4cWTZu5QOL5hgQk2pJHMvnOIg8AwKWbl18iDVgr9cxj6YfkTObFxHyCZM3u5y40yiBwAC2K3TDq31%2FJ20LzQMqnt5w6VmTJPn%2Fy4qY0L1fFh%2FWqjpVG7o83hzUGkxq9bMpXQlFkcCyyQCVCe%2BQ503JN4Upe5%2BGYNTb3y4SQXdQYj5%2ByN2T74K%2B%2BYSpAmhRPIQweOPUgb9Xsr3Gbk%2BkMDaTMKvMyMQGOqUBoWvKB76kbFa6GiOK41qoY1PgoytzrIyS018%2B8h0wt2%2FulPIj7fnqkx09VwwbK4heRIS%2FmAIMtC0X4liy11bldzCwrazFTQJD%2Fg1ZWNtVTcSXWqBtiCF7FgnPQSPXW0RmX2Dwo42Wa3XLhK%2F0ZG37tpiTjGYqLB9SsJ9V6rtDSp4pmsfzH5oGlVj1IDScsOfmRZ%2B%2Bv3mM03NpGHOuQBXvimm97MkM&X-Amz-Signature=c4671d7eb1a3fdf9a9b9e5d56141ed86c7d0aa485c90c783b8af5ef78bea58ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
