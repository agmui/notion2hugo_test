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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7LS7IYV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIE0XkXIeMM7nsyPv4l44ZIb6LeYMiUpa79uQjN%2FEPfBcAiEAi828pi0PC87dA7xMUMH41wqS6Bq2t9y%2FjaEs4rE8kgIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDF8p1D%2FWARzOX3eHSCrcA%2FxVqdZJsPdTbF0m4veNiFrLZN47j%2FlbNazz6V3IT%2B43MqnD2sAEBzZuLgto0oWbV7toWjm0BajCOypkoFx5Bz4lJ0dVEWc%2Feedkh5Ar4gj8CAMwrub8WuHEX8P4qsz4dMT9AhHmo5h3V9TuEZXuENzRp%2Fqyigtzxbd035CI33XKFN%2B25MTX8yCXrht%2FbfxhPelV9WLh8gWVoEYABWC3oztx1lS5G9BRxYbidAXntLUCeK3Pzvl1ZkJ7iz%2F7kJPlu5ocahdoroSpyX2RhrBpQWrechSfrspcqdTD4Uv6yFBPimf2bRR76hMJYw0cI5Xdjbx0NBA5jsdtodffjYuXXEm1Q2zSM2FN7EhQ%2BnmoWN8iRh7aJT%2FVQdFmIHinQ1w%2FlQwCpp%2Bw3O9gU5PxZyVEF7515%2B5pCPPQ%2BBOX%2Ftwm%2FxgszwpYKbFULdU9Z1%2Bvp054pZScl6i03vgAo3jO5gy8LrmRtKM0cequkECTx6KCuNCoJrw%2FFvmej0uaOCVIab1NWp68VatrZeFOu1u%2BpmLvoaDpRE1r3aGFIP1gN7MYsLDmARBLhAi4eMYIWnwrmbxNtORr1UFqYQXy2FMsVc%2FSE2sDqDcqMt0i1dzPgwUb4A%2FlG5ojOzgxkHk068KqML2N%2BL0GOqUBiqytcBPyoHKsk3qlaI2gb4Os4r%2B3oJhJiIoGasljzqSs%2FogXGW883rEIfg8EiarV2bxeVlnolYQkp2RXZEDAXRCE3pRnDiLxzLRW0AueSWz5%2FQ0V3S0sclFn73UCmC5sn1%2FQOJK785PEX6wzxyZfZHO%2F2atPGk4kF2FtEYo9UU0IrqngKh%2FyCLH9L5wk7cxyQo4tG8%2BNN7NPZKYZNLdtkpGEAfG%2F&X-Amz-Signature=7df4264a8443f566276b81debdd96d0c3fe1d0a606b5567e64dd4b12f4ae294b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7LS7IYV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIE0XkXIeMM7nsyPv4l44ZIb6LeYMiUpa79uQjN%2FEPfBcAiEAi828pi0PC87dA7xMUMH41wqS6Bq2t9y%2FjaEs4rE8kgIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDF8p1D%2FWARzOX3eHSCrcA%2FxVqdZJsPdTbF0m4veNiFrLZN47j%2FlbNazz6V3IT%2B43MqnD2sAEBzZuLgto0oWbV7toWjm0BajCOypkoFx5Bz4lJ0dVEWc%2Feedkh5Ar4gj8CAMwrub8WuHEX8P4qsz4dMT9AhHmo5h3V9TuEZXuENzRp%2Fqyigtzxbd035CI33XKFN%2B25MTX8yCXrht%2FbfxhPelV9WLh8gWVoEYABWC3oztx1lS5G9BRxYbidAXntLUCeK3Pzvl1ZkJ7iz%2F7kJPlu5ocahdoroSpyX2RhrBpQWrechSfrspcqdTD4Uv6yFBPimf2bRR76hMJYw0cI5Xdjbx0NBA5jsdtodffjYuXXEm1Q2zSM2FN7EhQ%2BnmoWN8iRh7aJT%2FVQdFmIHinQ1w%2FlQwCpp%2Bw3O9gU5PxZyVEF7515%2B5pCPPQ%2BBOX%2Ftwm%2FxgszwpYKbFULdU9Z1%2Bvp054pZScl6i03vgAo3jO5gy8LrmRtKM0cequkECTx6KCuNCoJrw%2FFvmej0uaOCVIab1NWp68VatrZeFOu1u%2BpmLvoaDpRE1r3aGFIP1gN7MYsLDmARBLhAi4eMYIWnwrmbxNtORr1UFqYQXy2FMsVc%2FSE2sDqDcqMt0i1dzPgwUb4A%2FlG5ojOzgxkHk068KqML2N%2BL0GOqUBiqytcBPyoHKsk3qlaI2gb4Os4r%2B3oJhJiIoGasljzqSs%2FogXGW883rEIfg8EiarV2bxeVlnolYQkp2RXZEDAXRCE3pRnDiLxzLRW0AueSWz5%2FQ0V3S0sclFn73UCmC5sn1%2FQOJK785PEX6wzxyZfZHO%2F2atPGk4kF2FtEYo9UU0IrqngKh%2FyCLH9L5wk7cxyQo4tG8%2BNN7NPZKYZNLdtkpGEAfG%2F&X-Amz-Signature=6dfde03ddb0bf245893f96e309f0f6ea9bc7f02e583955651cabc680540e7d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
