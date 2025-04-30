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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRVTPR2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBq5QM3i9k%2FabmQVjhPW0TWThfD3ae2BzsJ29VEUX5ARAiEA36Ev%2F6%2FfU67RyCV8b6Irp98oPTr1LH3mL79Av1J4BHUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNanUVIYx2upH%2BcfyrcA13%2FeArKiT3nx%2F7Ss6j65F%2Fgn7nScikpQIziEDSMZfWHn9HLeF%2Fw1GUPRi5ZIdA4Laske9tWNttuif4%2FVHjWTozQSbB5zGVJ%2B7k%2FPzycwwyCvpzFReOJcwWswIBFqpU4uuHcArrD7sr5Y2R5rhHrD5naEb%2BhtH388dyk%2FUsKGV5UlblAeu%2BXtHdZ86nJ2dqOUs3Tnx70fTndmT32b0J9pFthGgdpbbzWZD3Al7fwqrMXzaaQRrp5dCsc5uMcFDcobS7SNuo9Vfa44mq%2BSrsOFWo6RXF%2F2jqeBcVMAlWkFww70Fj%2BwunQqPF%2F5UUEqWfcyVyJAezUHDCZ3Tcbj3FnTxLD3fUUXcuR2TWeTuOyKO44yM2CEZOk%2BvbYIQMFor0ps%2Bsh1A7cRmzObDn7jissmzRF%2BSiMl5V5MQrBLhwVo17GmgmCeacWuWjo0rPUFNFEFSfV9gLZ%2F5K%2BoQ3vBx8dTL7tc%2BsGr4vcFkVSPHD0LS8xCZXOpiNYdHc3Goocwk%2FnFObvPGuoinN1IBObhbOv8w4MD4OBtBUdcpOZRQZuRK6OuiNDP6AMGxBxZJscO5%2Bqn72Wr4FXVE23XWeGCDvvBo5rzlZ9aGg2G4uVHjAbroMjy9TNquxLlO4N%2B0XBMLimyMAGOqUBhY2i04il%2FnQfXjUoCp6TyxFF%2BWcr3guciFDFfUaOPcXxMxZGNQ9IKcPPXp62TxjCaYVwIw0FaVvY1hCH7Fh8ogRE3z%2FvzTXRXkqMfeDDQ6OF908D2bYazoLWVhcuOfS9VV7Q1A2GnNTc01bg%2BTjSt0%2FteU6n9HJ0MtODYmLozG6uJ2pMy7nau6JXWa9UXHrXcO8oM7%2Boj5B4bngm%2FM7aRS6DyWag&X-Amz-Signature=660410e7eab9d8904ab2b799a5a27c7d49b57f2a083016f3e404a6e4a25bcaed&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRVTPR2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBq5QM3i9k%2FabmQVjhPW0TWThfD3ae2BzsJ29VEUX5ARAiEA36Ev%2F6%2FfU67RyCV8b6Irp98oPTr1LH3mL79Av1J4BHUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNanUVIYx2upH%2BcfyrcA13%2FeArKiT3nx%2F7Ss6j65F%2Fgn7nScikpQIziEDSMZfWHn9HLeF%2Fw1GUPRi5ZIdA4Laske9tWNttuif4%2FVHjWTozQSbB5zGVJ%2B7k%2FPzycwwyCvpzFReOJcwWswIBFqpU4uuHcArrD7sr5Y2R5rhHrD5naEb%2BhtH388dyk%2FUsKGV5UlblAeu%2BXtHdZ86nJ2dqOUs3Tnx70fTndmT32b0J9pFthGgdpbbzWZD3Al7fwqrMXzaaQRrp5dCsc5uMcFDcobS7SNuo9Vfa44mq%2BSrsOFWo6RXF%2F2jqeBcVMAlWkFww70Fj%2BwunQqPF%2F5UUEqWfcyVyJAezUHDCZ3Tcbj3FnTxLD3fUUXcuR2TWeTuOyKO44yM2CEZOk%2BvbYIQMFor0ps%2Bsh1A7cRmzObDn7jissmzRF%2BSiMl5V5MQrBLhwVo17GmgmCeacWuWjo0rPUFNFEFSfV9gLZ%2F5K%2BoQ3vBx8dTL7tc%2BsGr4vcFkVSPHD0LS8xCZXOpiNYdHc3Goocwk%2FnFObvPGuoinN1IBObhbOv8w4MD4OBtBUdcpOZRQZuRK6OuiNDP6AMGxBxZJscO5%2Bqn72Wr4FXVE23XWeGCDvvBo5rzlZ9aGg2G4uVHjAbroMjy9TNquxLlO4N%2B0XBMLimyMAGOqUBhY2i04il%2FnQfXjUoCp6TyxFF%2BWcr3guciFDFfUaOPcXxMxZGNQ9IKcPPXp62TxjCaYVwIw0FaVvY1hCH7Fh8ogRE3z%2FvzTXRXkqMfeDDQ6OF908D2bYazoLWVhcuOfS9VV7Q1A2GnNTc01bg%2BTjSt0%2FteU6n9HJ0MtODYmLozG6uJ2pMy7nau6JXWa9UXHrXcO8oM7%2Boj5B4bngm%2FM7aRS6DyWag&X-Amz-Signature=e931b44bc662e809804300753dc789e798e8dec4dab914515caf976dad567115&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
