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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAZEQB7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDcu4EG%2F1v6fucZERvEUnWaL7Jbp9JUtE1uWx%2Fx6pISAiEAw6nmCXuHi1%2BheVZQprNes%2BpMHURRTg8aZPNLvMqMdDIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEnBLUoSIAAY%2FtmXDircA8zXJOz8B6xROtmWuSvGE9LpbDf0qVYzRIkv%2F3T0ChMI1aWV5lmab9h0rvWyYmJKL90wKSQN%2BobGkLVYwYKZg%2B%2BVOuhfxK3Xz9uz%2BAFkZtaPzW6w%2BMTTQVC7NOkNSW2%2BgQMsO6tXN5qnOCJf6vZcRAOEhLGXcviYRKPhfmqP3R87XluUeLwKLC2Q%2FMIock8jjvLBr7WAohrsYGVVll0ag0XxsS1v8Qk3LIPGM31LLkjLLtzrcQWyrQH7NvYaEBVsCGmTdrwzeRgkwpT7Ip9PgK4%2FpxzEprEngXBC76J073zBRY0Y9s38uvkBMBCNNo6PhxGW3OaMpYfvPHnXGNvVSYvTl5e564ynM0SKKiNIcluVMTBw2Z4e%2Bo1l4Gx5Pe3%2FZeV%2BafdE3sxe34fiAmsOiweDNzBavbpGzxcRssuZ7SfYW%2B8x3jLAjrJsMuopTb%2FRnw%2B%2BoHbS0lFaCGH2xUtaPXompUYkFJ3uiM2dA8uw0Yl88JiofVgMHp1EZBtnlYqJ5e3HmkScJZXcwgBql8SmokHetJHIqHA2bDBTlTcMY3d1r2hTW5bBXqsUJE5q0G1ngl0SYq7nDTCwzVWCTFXV42gQ5DiGUQPMkyrFXfyzn%2FKbwD7AsG3%2Fj4e2I%2FxbMJKW2MEGOqUBv%2F%2FTHkSVkj5c1h9HpfoHh25baSJdtmpRl8eBSb4lrXrKmNQG%2FZkxFdkxCHDhiY55F%2BI%2BOQSpA2TbDf00kfNFQGa2YrhkhUdKjYTE2UYBjCseCDHE1mU4CBM2dXbCgwmSMf%2FZhyPAi1DIM4VIZrQEUDSad%2FJxbuPZWaspqlB639Quef6uDtdP22JwArsmq8tQrLw8bi2Qg6zj24kMU%2F3YiPcZjdlL&X-Amz-Signature=9e00b4441916a69e8abe94cd9a7edf2d8847953e724f38c5d26a9308066227db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAZEQB7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDcu4EG%2F1v6fucZERvEUnWaL7Jbp9JUtE1uWx%2Fx6pISAiEAw6nmCXuHi1%2BheVZQprNes%2BpMHURRTg8aZPNLvMqMdDIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEnBLUoSIAAY%2FtmXDircA8zXJOz8B6xROtmWuSvGE9LpbDf0qVYzRIkv%2F3T0ChMI1aWV5lmab9h0rvWyYmJKL90wKSQN%2BobGkLVYwYKZg%2B%2BVOuhfxK3Xz9uz%2BAFkZtaPzW6w%2BMTTQVC7NOkNSW2%2BgQMsO6tXN5qnOCJf6vZcRAOEhLGXcviYRKPhfmqP3R87XluUeLwKLC2Q%2FMIock8jjvLBr7WAohrsYGVVll0ag0XxsS1v8Qk3LIPGM31LLkjLLtzrcQWyrQH7NvYaEBVsCGmTdrwzeRgkwpT7Ip9PgK4%2FpxzEprEngXBC76J073zBRY0Y9s38uvkBMBCNNo6PhxGW3OaMpYfvPHnXGNvVSYvTl5e564ynM0SKKiNIcluVMTBw2Z4e%2Bo1l4Gx5Pe3%2FZeV%2BafdE3sxe34fiAmsOiweDNzBavbpGzxcRssuZ7SfYW%2B8x3jLAjrJsMuopTb%2FRnw%2B%2BoHbS0lFaCGH2xUtaPXompUYkFJ3uiM2dA8uw0Yl88JiofVgMHp1EZBtnlYqJ5e3HmkScJZXcwgBql8SmokHetJHIqHA2bDBTlTcMY3d1r2hTW5bBXqsUJE5q0G1ngl0SYq7nDTCwzVWCTFXV42gQ5DiGUQPMkyrFXfyzn%2FKbwD7AsG3%2Fj4e2I%2FxbMJKW2MEGOqUBv%2F%2FTHkSVkj5c1h9HpfoHh25baSJdtmpRl8eBSb4lrXrKmNQG%2FZkxFdkxCHDhiY55F%2BI%2BOQSpA2TbDf00kfNFQGa2YrhkhUdKjYTE2UYBjCseCDHE1mU4CBM2dXbCgwmSMf%2FZhyPAi1DIM4VIZrQEUDSad%2FJxbuPZWaspqlB639Quef6uDtdP22JwArsmq8tQrLw8bi2Qg6zj24kMU%2F3YiPcZjdlL&X-Amz-Signature=4a91e1e4ed97b0fa99e4a0bc10a949514bb473488f05575207c20e1921b3a8de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
