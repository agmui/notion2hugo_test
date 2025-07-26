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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWE6J5G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD9JOUOv0UlDqme9la2AKCV%2FJxsNqOffLtgIP8GHltoHwIgSBHOPyT0L7UBjk671t%2BqLbd1UTINilCccE%2BWOV%2FscPwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ0637cf9Vav2ueeYSrcAyUHIcUb2q1xTsj1WeCn6y1lCB%2Ffam6xhR4O2vQJiSz0y%2BZcvYArZMzniELJKtMI4t1k3e3Deu%2BiAUHX%2FoznuxK1k6znuhQiLhsU6%2FooHcAfmbA%2FE9Hhu2l4lnsI6qzM4Hen77jboJCjw0TduV4a3kkzLLSShdDLppkf%2BvOslxKsZItuvQJ4FP8%2BgYkLQuSFLTFNyWY3%2BWAP8sPm0ebr6m5qU0P3bTsMgwqHWberf6%2FT0mqFijN1sIC2t4uI9CttTdKWjemnKJP6z6USdhG4CPN6EPPwmTy33XRDX5VTyhvindQDALUhgEzNmVFRqJlbG4%2BPq2t%2FwJ8pbHR5Fzsdx5c1TTH4GfMLsx02SuNvEJphERnLhSttOo6VvvHdluQBD12ZSBFMNxLNc1cMOWf8csByfS%2BIYi8toEHGpE5GoZJmdJrohv5SmEN1vPpgRVu3DruIsxP3J1RysJRsLTD4vb3HPAgy%2BmJUJnhgIenX3xsKwnAH%2F4EpaeSf3%2Fra5HJUz15%2FHUHrNVJFaMGCvKy1vibAto6%2Bhzv6%2BbpY1a4rY8zjujoZcsjQ0naxRDXiruVIPFjp8dn1FjAJYQoEPuCGlF2qhgLX08BbZ2At1xrkOdYnUIgXIzhDgXnbf6r5MPeGksQGOqUB3AiQ1d5HUbXHA%2FnV9CCGY%2FAGbBdAv2QGXHopip%2BwFu0jPkwF0m8AUeW4X8AdrwbugX0Y4E0skuHDVTJ2fw8GKye9mqvtPPfxXcSX1Qz4W5Y9n%2FHJk%2BC3q%2FKQcCJvbKU35KYwyVugbdFW959vJlx%2ByPKbpMQbxjbfILaO0531Iyutgq2oq2%2BQRpmDt800R4ZykukjuRqIKbQnKtPo0V%2FzuZIFrEQ9&X-Amz-Signature=1ff6efd61f626fd311989682716d27b12c580060ef2635e869a5be2babc67e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWE6J5G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQD9JOUOv0UlDqme9la2AKCV%2FJxsNqOffLtgIP8GHltoHwIgSBHOPyT0L7UBjk671t%2BqLbd1UTINilCccE%2BWOV%2FscPwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ0637cf9Vav2ueeYSrcAyUHIcUb2q1xTsj1WeCn6y1lCB%2Ffam6xhR4O2vQJiSz0y%2BZcvYArZMzniELJKtMI4t1k3e3Deu%2BiAUHX%2FoznuxK1k6znuhQiLhsU6%2FooHcAfmbA%2FE9Hhu2l4lnsI6qzM4Hen77jboJCjw0TduV4a3kkzLLSShdDLppkf%2BvOslxKsZItuvQJ4FP8%2BgYkLQuSFLTFNyWY3%2BWAP8sPm0ebr6m5qU0P3bTsMgwqHWberf6%2FT0mqFijN1sIC2t4uI9CttTdKWjemnKJP6z6USdhG4CPN6EPPwmTy33XRDX5VTyhvindQDALUhgEzNmVFRqJlbG4%2BPq2t%2FwJ8pbHR5Fzsdx5c1TTH4GfMLsx02SuNvEJphERnLhSttOo6VvvHdluQBD12ZSBFMNxLNc1cMOWf8csByfS%2BIYi8toEHGpE5GoZJmdJrohv5SmEN1vPpgRVu3DruIsxP3J1RysJRsLTD4vb3HPAgy%2BmJUJnhgIenX3xsKwnAH%2F4EpaeSf3%2Fra5HJUz15%2FHUHrNVJFaMGCvKy1vibAto6%2Bhzv6%2BbpY1a4rY8zjujoZcsjQ0naxRDXiruVIPFjp8dn1FjAJYQoEPuCGlF2qhgLX08BbZ2At1xrkOdYnUIgXIzhDgXnbf6r5MPeGksQGOqUB3AiQ1d5HUbXHA%2FnV9CCGY%2FAGbBdAv2QGXHopip%2BwFu0jPkwF0m8AUeW4X8AdrwbugX0Y4E0skuHDVTJ2fw8GKye9mqvtPPfxXcSX1Qz4W5Y9n%2FHJk%2BC3q%2FKQcCJvbKU35KYwyVugbdFW959vJlx%2ByPKbpMQbxjbfILaO0531Iyutgq2oq2%2BQRpmDt800R4ZykukjuRqIKbQnKtPo0V%2FzuZIFrEQ9&X-Amz-Signature=56d3deb05399436eeaac155498b5bb399c75ff7fe6f61ce15b969bdea94ab0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
