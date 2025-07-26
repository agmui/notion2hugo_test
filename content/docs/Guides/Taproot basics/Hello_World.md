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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL7R62PS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIA5wHLStUTTmXfXxSBh610JS5piZ2dnavLBz7dAoDY8JAiAmTmNc94wCnhhuV3wRVqfJvzi2xapl1brVL6Mw6lIiVSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMwYanDXhErte2EsscKtwDP0xgQ755mIbSghetJbckJQZiLLU3AecPlSAegFZb%2FecAdyO%2B0hWRP9RKMswq1HPUjLxRX1JiEjZAO2cvs50X%2FDXeS%2FFMVxVMjDXY1nipIBmUlL25THD4KC48heJAL9llesFNcwGUZAWF05qAJXnrc7SSTO2Dpvg7Y5hCwpBpJLSjntbw9Gd442in8oq5rsf3d7PxSChTgUuErpGuo4fIjQrGoil7RAP%2Buu7uvz6YbhMFcQAO1rIjisCZhuIBiPuI0CLxp0d1Fcfev7dsgNgvyunKIdltJB9Tiv86gHNyX835grDqBLe9sMfnVsy%2BH5heyV67lm0DFYtwRmv0x%2FPNiDbewdFNwFaeXTByURcSYzweRCTf19C1Ee1TFR4b%2Fqe5Cm5ZHTFyi2aU1uvgIeAj4rCI8%2F12v3AjjDLFlRIV73FEWFqm3R0M3wPQzav9plPCQEqozI46SsOx3PZyzacEGKFA2c9kUZklEoXcAjCjs2NvSt5%2BW2nQht6jYJoP%2FY8bTJIfDymtmfGAgDMLRI90KdZeSQhev8VuwvA%2FxgwReLYaX6b65ywY79Hd%2B1RmYobl8vocXGy78O6MZRSDi6R5IhrpM3s90hsezTZFJw6iyIv91jkPlVKL77dxOvkw9f6UxAY6pgF2E7iVLyWt0RPVIKVFu5Qh%2BHBRzqtlnCdrAHuYp3j%2BDnaSscJGF3z9tIJ2q0aQQ04A6j8g%2FKsHlsBdb4U0bRWDF0%2Bt0u78QQICxAu4rf88870s4MO4wQp7HqLRplsnDbgZnIC2oCElberzb%2B%2FgUsgczM5holPq6Qvp1ELIGJ%2FIc7IK0%2F7311M8GvPB%2FIU9vBsG8t51sfHL1CyFte67f7%2Fwx0okFt2u&X-Amz-Signature=6faccbb1e14e6042fe8e9b468dd8d2b3cb94fb6d517d118f9c94acb77194e903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL7R62PS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIA5wHLStUTTmXfXxSBh610JS5piZ2dnavLBz7dAoDY8JAiAmTmNc94wCnhhuV3wRVqfJvzi2xapl1brVL6Mw6lIiVSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMwYanDXhErte2EsscKtwDP0xgQ755mIbSghetJbckJQZiLLU3AecPlSAegFZb%2FecAdyO%2B0hWRP9RKMswq1HPUjLxRX1JiEjZAO2cvs50X%2FDXeS%2FFMVxVMjDXY1nipIBmUlL25THD4KC48heJAL9llesFNcwGUZAWF05qAJXnrc7SSTO2Dpvg7Y5hCwpBpJLSjntbw9Gd442in8oq5rsf3d7PxSChTgUuErpGuo4fIjQrGoil7RAP%2Buu7uvz6YbhMFcQAO1rIjisCZhuIBiPuI0CLxp0d1Fcfev7dsgNgvyunKIdltJB9Tiv86gHNyX835grDqBLe9sMfnVsy%2BH5heyV67lm0DFYtwRmv0x%2FPNiDbewdFNwFaeXTByURcSYzweRCTf19C1Ee1TFR4b%2Fqe5Cm5ZHTFyi2aU1uvgIeAj4rCI8%2F12v3AjjDLFlRIV73FEWFqm3R0M3wPQzav9plPCQEqozI46SsOx3PZyzacEGKFA2c9kUZklEoXcAjCjs2NvSt5%2BW2nQht6jYJoP%2FY8bTJIfDymtmfGAgDMLRI90KdZeSQhev8VuwvA%2FxgwReLYaX6b65ywY79Hd%2B1RmYobl8vocXGy78O6MZRSDi6R5IhrpM3s90hsezTZFJw6iyIv91jkPlVKL77dxOvkw9f6UxAY6pgF2E7iVLyWt0RPVIKVFu5Qh%2BHBRzqtlnCdrAHuYp3j%2BDnaSscJGF3z9tIJ2q0aQQ04A6j8g%2FKsHlsBdb4U0bRWDF0%2Bt0u78QQICxAu4rf88870s4MO4wQp7HqLRplsnDbgZnIC2oCElberzb%2B%2FgUsgczM5holPq6Qvp1ELIGJ%2FIc7IK0%2F7311M8GvPB%2FIU9vBsG8t51sfHL1CyFte67f7%2Fwx0okFt2u&X-Amz-Signature=82f4d019caa1921c4ff8065b8ebcee6fb909eda19402cdea8f660931fdef1fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
