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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPBKRDX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6ET1EeZPDlDLqlku4xonv8u71be6%2BuFqnfjADKF%2FQkAiBOY2fSU2EvtNZef%2FJACfbNyRd2Gub2EFaaJenyAPu5Tir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMgd5p4k1p7k0Nk04XKtwDQrTCILc7Mbi7KccFmyoyYKyDr%2B1vzMMeelIyKEmaTHLqw6vh9cZDcXtxBXlKs288X8ioEuSrYD0niAuuY27mE1Yugl0GxEFPPTyYgL8ZGV%2FtKd0AgLvB2ZkZLURR6ulE1t%2BzcN6%2BJ6sFPxxLzLJUSJBJZ1uIeNPWDqcF8OvJEMzxrTzlA2Z7RHqN05rRfnXxjKj02JBtu%2FpyktY7nr69HIs3C%2FfLGUYSD3vVb3x66Aq1wNI8Bhbls6HMmHKvCB%2FowvwvA8dgGmBl3qoth%2B%2B%2BsuIjOFwAhFLdP9c4qh%2BEwmjj9f0UU3nO9%2BaJZkGykwU3%2FmyBeqjGZeQIck66z1tBpwrool5cE4IXGxogrrYL4xKLUKZJb1gItEJpN%2FRTx%2FARAGYSslQbHvHGpAyf0WusFai7kJoHWj7ePGyXud6JJiYtP3VmewvW2IFMapD%2FmljODv8N9jzLZyZ1tzWyiE%2FYjVFor4KhQdZr6IbacvUPUQyObIbHBwHBeFKPeLG0WQx%2BvwcGxeaaDaeikecCVgZwvRbLR0ceG9d8bl4hHyJOhDm%2F1WoPVLP1gpmwA8NpiYya8vNvnlkrTl6KRAgZn%2FMAVfm9aFkLIKundv4pcfyxQ8MzTPWPN9nkQ4d629ow54q6wAY6pgGJ3lnChOWSQzKYqztdZtriYUXa%2BXOKOEcMOleVwHKSitniJnr1giueT7eb38A4kk9km5j7UGWRDavH4DKlXY07kfObeDkbFPkGJOLWrx73fqpjxyvq1OIrbxIumdLFtN15%2B2w6qF%2F9Z2FQsdtvANuYIQGisfkzCPPuAdRq6Oemm692IYDTF4gsM1Zk4jaoDTD%2B%2Brs%2FEePITsb3pl1PVngdQjJNUd7V&X-Amz-Signature=03e6320361636aeec10943bb7008c07d289b2ca20cb02b04aa215414540c7fef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPBKRDX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6ET1EeZPDlDLqlku4xonv8u71be6%2BuFqnfjADKF%2FQkAiBOY2fSU2EvtNZef%2FJACfbNyRd2Gub2EFaaJenyAPu5Tir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMgd5p4k1p7k0Nk04XKtwDQrTCILc7Mbi7KccFmyoyYKyDr%2B1vzMMeelIyKEmaTHLqw6vh9cZDcXtxBXlKs288X8ioEuSrYD0niAuuY27mE1Yugl0GxEFPPTyYgL8ZGV%2FtKd0AgLvB2ZkZLURR6ulE1t%2BzcN6%2BJ6sFPxxLzLJUSJBJZ1uIeNPWDqcF8OvJEMzxrTzlA2Z7RHqN05rRfnXxjKj02JBtu%2FpyktY7nr69HIs3C%2FfLGUYSD3vVb3x66Aq1wNI8Bhbls6HMmHKvCB%2FowvwvA8dgGmBl3qoth%2B%2B%2BsuIjOFwAhFLdP9c4qh%2BEwmjj9f0UU3nO9%2BaJZkGykwU3%2FmyBeqjGZeQIck66z1tBpwrool5cE4IXGxogrrYL4xKLUKZJb1gItEJpN%2FRTx%2FARAGYSslQbHvHGpAyf0WusFai7kJoHWj7ePGyXud6JJiYtP3VmewvW2IFMapD%2FmljODv8N9jzLZyZ1tzWyiE%2FYjVFor4KhQdZr6IbacvUPUQyObIbHBwHBeFKPeLG0WQx%2BvwcGxeaaDaeikecCVgZwvRbLR0ceG9d8bl4hHyJOhDm%2F1WoPVLP1gpmwA8NpiYya8vNvnlkrTl6KRAgZn%2FMAVfm9aFkLIKundv4pcfyxQ8MzTPWPN9nkQ4d629ow54q6wAY6pgGJ3lnChOWSQzKYqztdZtriYUXa%2BXOKOEcMOleVwHKSitniJnr1giueT7eb38A4kk9km5j7UGWRDavH4DKlXY07kfObeDkbFPkGJOLWrx73fqpjxyvq1OIrbxIumdLFtN15%2B2w6qF%2F9Z2FQsdtvANuYIQGisfkzCPPuAdRq6Oemm692IYDTF4gsM1Zk4jaoDTD%2B%2Brs%2FEePITsb3pl1PVngdQjJNUd7V&X-Amz-Signature=63d40a0ca08cc1fbbe400c04184754f00b74280b21bc1bcdbdee6e6aa9a9fe13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
