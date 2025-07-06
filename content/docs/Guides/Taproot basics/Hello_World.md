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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYZL7NRY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDN%2FyMmQdlAazv6pv%2F74CyOnIb6T7OfmI7yeN9DqDaNhAIgIQDVQk%2FbmlZcYdHwa60Bwf4HwOGV0YPb6jSHdQrOF54q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDClTGWWof8Ir15hsxircA3TCbYrXQXKpkFeTLuSf5j6gsQgw%2BX3hKRzxg5QDs5XzaO5IJcd23FLpJvh1Cand5jN0XYUf%2FX%2BCqeRQadZZLOqv3aZjBWNn2kgA9bX2atIjhGRTjDgNHIQz3T%2F8ZFpfz%2FAODALGKXV4Tzv24iBID5feNDcUXu6zW%2FgGsxf5%2B%2Fu%2BCblwemb6i0N4h7YosOcpx26I8%2BaUjk1048oZ4CpS6eu6RVUOnR22XM4QUm%2BApAiusjM3TVFfHMpe20u6qW%2FYrpRHpFxPR6sPwZMdTSb%2FE4YmYmlc7EL8AlHi%2B7qXW3B8eqbtWB%2B8Zxe4PAMoRa7MZWWdVcQ6tfucVLxIeyqAgHLZrvMqWHlf%2BWZ8DDj3oC5MR0z0PPgFSTSGty0JUhL%2B66SeGQQ6SCS68zwqaT7vj2vk9CppyfVa3PbtKXWRzGidHoSrjFG58bHh4Gl314X9SYB4PhQxWkFfe91MuP0JZlKg6RB1JYLhlu1gw1ZomdD6JndmkrCfWW0%2F5OiCMF%2FzhZAktB8%2FlubLdASXaxWvYtY4xc4egSGsiLqWYSKpqn3dIH86XyGxNvXRrWVATedEJiCOrxq8ytzOx2HG8YaC6SX7q1dJpigGmSbKCcSNOucVuzbX3a2iROLRxEDNMKyKp8MGOqUBCbr2G7cX8gZ%2FJxUtnQ0LWxlifIyMY%2FsjC1AEoUdAiIitAzVP7JP%2Bk74KKFakQTK%2BmpfM2kLQ0QbZFrmnDKP3Wn5nYZ2xzuYV%2BtnG0k5urA3fe7gcFTPGef7VtZsiCcFuh8Y2EI1R%2BJfWW6RVSFVl8ZbifEIA7V5L1nFlH22amadWefAE9bY9lgNTcjlelhAh%2FbK%2BW1Kdj0T4cNHKvtd1p5Hvdr0O&X-Amz-Signature=4775a4031715682623aa8b8c25d8255fea39d92ac9b91abbb9ba9f7aba334290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYZL7NRY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDN%2FyMmQdlAazv6pv%2F74CyOnIb6T7OfmI7yeN9DqDaNhAIgIQDVQk%2FbmlZcYdHwa60Bwf4HwOGV0YPb6jSHdQrOF54q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDClTGWWof8Ir15hsxircA3TCbYrXQXKpkFeTLuSf5j6gsQgw%2BX3hKRzxg5QDs5XzaO5IJcd23FLpJvh1Cand5jN0XYUf%2FX%2BCqeRQadZZLOqv3aZjBWNn2kgA9bX2atIjhGRTjDgNHIQz3T%2F8ZFpfz%2FAODALGKXV4Tzv24iBID5feNDcUXu6zW%2FgGsxf5%2B%2Fu%2BCblwemb6i0N4h7YosOcpx26I8%2BaUjk1048oZ4CpS6eu6RVUOnR22XM4QUm%2BApAiusjM3TVFfHMpe20u6qW%2FYrpRHpFxPR6sPwZMdTSb%2FE4YmYmlc7EL8AlHi%2B7qXW3B8eqbtWB%2B8Zxe4PAMoRa7MZWWdVcQ6tfucVLxIeyqAgHLZrvMqWHlf%2BWZ8DDj3oC5MR0z0PPgFSTSGty0JUhL%2B66SeGQQ6SCS68zwqaT7vj2vk9CppyfVa3PbtKXWRzGidHoSrjFG58bHh4Gl314X9SYB4PhQxWkFfe91MuP0JZlKg6RB1JYLhlu1gw1ZomdD6JndmkrCfWW0%2F5OiCMF%2FzhZAktB8%2FlubLdASXaxWvYtY4xc4egSGsiLqWYSKpqn3dIH86XyGxNvXRrWVATedEJiCOrxq8ytzOx2HG8YaC6SX7q1dJpigGmSbKCcSNOucVuzbX3a2iROLRxEDNMKyKp8MGOqUBCbr2G7cX8gZ%2FJxUtnQ0LWxlifIyMY%2FsjC1AEoUdAiIitAzVP7JP%2Bk74KKFakQTK%2BmpfM2kLQ0QbZFrmnDKP3Wn5nYZ2xzuYV%2BtnG0k5urA3fe7gcFTPGef7VtZsiCcFuh8Y2EI1R%2BJfWW6RVSFVl8ZbifEIA7V5L1nFlH22amadWefAE9bY9lgNTcjlelhAh%2FbK%2BW1Kdj0T4cNHKvtd1p5Hvdr0O&X-Amz-Signature=fe9a6cbb63f5ac65b45c5f062dfb5512662bce37a58514612e84ff388518a828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
