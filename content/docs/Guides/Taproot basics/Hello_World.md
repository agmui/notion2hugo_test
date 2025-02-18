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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BIBWKN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDtph7xCTei8fqPAEfeGjc59XN%2FPk6cO98A22Dz591NBQIgS%2BWDzYizeI2M7T47wlJo0MjF6yMXL9gJuGciWm1Jms4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8AlLByLN2YNhKBwyrcAyErtpGR4gZ0zYpKfZyPN3QVoxA32JFzgwao8NhaAl7fKKa30CyoEmC%2FjJNMcZ2cRC4EbEc6%2FGHGznyY8a1z4%2Fa4Yc%2BKdLhF%2BO40qwhv4CRo4PQROPTQOGb%2B8po9dBEpaxGhSXqiu8h51o%2FCe77xnya95Iowu6P1qYhBfSoA6a898c87OT6RGapMKtjeJTLqmL%2BZzDe2biivWfk29dkBuQeoX5RlnNJYcRcQYdMbImSMIWo08FfOpNt5%2Fistpkkf%2FR2g7pq%2FzRe9vGXVcvxgkfVwf31sCNT%2BxbUgCDQrWC61hUl8WPejZ2C781AhhWxuIXodk9l8W5TLSS7I%2FEEVOT2h8hAv9nNYbg%2FDookrg6F4fwOnR0RgatjrWDIQcrZq%2FBpKlpjGl3SbbXXawuFfz42lcR5XG6HiMeufgb%2BMjKOhpwHFatuZWbStwK33TkxLLdi9VcC0FA2zcJNO%2BK6erXJxtcETBvIVCV7AI5eOqCVEuszsf2GoaAAX2AiEiYCnraSG6UuRaY5BQKa7l71dCB0ywZpkpV6atFcV09EKcUy%2BgoutI7juBO92%2BiBMzw0o8DVOrI4jYh1KxjQeCtbGvEvRwZ%2FBCEZUaKlWRw2g2YsTDLh%2FHm3MxEA6DXppMLmy0r0GOqUBrz4GArFX6pNG6vlmehtU5E5nUll1hJyVZhvyFQM2eaoZu1Sq4kDhADcPjRZUyQ8etIHWSeelFoHkNLqIh%2Fd2hs9KHRVCA9NyfH8c4jJnRSPc3tTMGrMO3EmdF448OMOxLU58OuIv6vIoA6AUdtw1mKIY7zZ5saMMUVdYz%2BWTRwTjU%2BRRBiZkFfne5VeJCnxNgO%2F1E%2Bso%2B9Wxi04TioZ7xmPyAgX2&X-Amz-Signature=226237fdce9e826ac5235b36f3276c3908745544cbdb5b3dab43bd51e30a5fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4BIBWKN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDtph7xCTei8fqPAEfeGjc59XN%2FPk6cO98A22Dz591NBQIgS%2BWDzYizeI2M7T47wlJo0MjF6yMXL9gJuGciWm1Jms4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8AlLByLN2YNhKBwyrcAyErtpGR4gZ0zYpKfZyPN3QVoxA32JFzgwao8NhaAl7fKKa30CyoEmC%2FjJNMcZ2cRC4EbEc6%2FGHGznyY8a1z4%2Fa4Yc%2BKdLhF%2BO40qwhv4CRo4PQROPTQOGb%2B8po9dBEpaxGhSXqiu8h51o%2FCe77xnya95Iowu6P1qYhBfSoA6a898c87OT6RGapMKtjeJTLqmL%2BZzDe2biivWfk29dkBuQeoX5RlnNJYcRcQYdMbImSMIWo08FfOpNt5%2Fistpkkf%2FR2g7pq%2FzRe9vGXVcvxgkfVwf31sCNT%2BxbUgCDQrWC61hUl8WPejZ2C781AhhWxuIXodk9l8W5TLSS7I%2FEEVOT2h8hAv9nNYbg%2FDookrg6F4fwOnR0RgatjrWDIQcrZq%2FBpKlpjGl3SbbXXawuFfz42lcR5XG6HiMeufgb%2BMjKOhpwHFatuZWbStwK33TkxLLdi9VcC0FA2zcJNO%2BK6erXJxtcETBvIVCV7AI5eOqCVEuszsf2GoaAAX2AiEiYCnraSG6UuRaY5BQKa7l71dCB0ywZpkpV6atFcV09EKcUy%2BgoutI7juBO92%2BiBMzw0o8DVOrI4jYh1KxjQeCtbGvEvRwZ%2FBCEZUaKlWRw2g2YsTDLh%2FHm3MxEA6DXppMLmy0r0GOqUBrz4GArFX6pNG6vlmehtU5E5nUll1hJyVZhvyFQM2eaoZu1Sq4kDhADcPjRZUyQ8etIHWSeelFoHkNLqIh%2Fd2hs9KHRVCA9NyfH8c4jJnRSPc3tTMGrMO3EmdF448OMOxLU58OuIv6vIoA6AUdtw1mKIY7zZ5saMMUVdYz%2BWTRwTjU%2BRRBiZkFfne5VeJCnxNgO%2F1E%2Bso%2B9Wxi04TioZ7xmPyAgX2&X-Amz-Signature=61677523bbeed14fbea2355ab02eb9b8e59d43097baa92b8983ba341cd28077c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
