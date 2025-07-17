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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZI2JY2V%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDyEtgEThx2c4DlvYkqj9WZ8HMBmZdiirdMSKc2eBvaAAiEAtJZ38SswGeu%2F9Ga%2FXpxhZSHX5fHm%2BFRcyFVcEEEl%2Bj4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMf3IbtajHzIPgM%2BWSrcA8wbrCxRrVJQiXPrcMGCLB1QymbHw5Zy1Fu9xbI9MM%2B4p7d38C122b5%2F4Bt5G4C81iw%2BuYv1ba%2BHYeKz54BPmH7%2F9yRtQ7doTaz46vNxemzK1YxuXHXVSUOOoBcVhl%2Br1v5jgYjQLZVbjtmd2J5JwAEi0Kc2qpNoWcxI1JaF7sJ5JuvdSGGsFYKWN3736flrFSxmEqydTf0lVEtOcGVXrgLMpoNUEkmRDX%2BvVM%2FRFFfJub%2BU6SjSkvvivZa9NdhTCHmrNf98a9nLHfdv5VzHdMH5ylXxCDWgrJA2jBzH6yM6eTb7Ytl%2FEfnghUyTWl8PzuHoP6g%2FOieRZepwoF%2BZ1Qk1kI9huOJDWUCp8OTSHRHTf6HsUrBcDMVlNEoM%2Bhqia7EiiLKmOtK1KGO77mIfn9auU8t3WdCIAsNJlfuS9oTXWkp4fwSp1S8NkwFtdJYZsRDAqnyinCxy3o1OlV8EeFofZNUVcPFCdfEfFsCV86mlU3zqSetynMT8toCyqhHRfLSZUUbu8qXz6z24iu1fwtW3FrH2Xo1w3PgAxqVyBlvUWlX61rJvy4LUZSthHnK2rJeNu%2FA2DaDYgxpOd96ISythhPGwvMroSKpFreGA8nbY73nf18yRJFv6%2Fn%2BuMLqW4sMGOqUBie8vpHqvo6plismxSK3OSKBc8iIQe%2Bysl04alK6ZGzwL%2B89B2UxPUCyGEoAU1QVCGqAB2s3wOib7cWyg0oo7%2BCRqfRKJgLkE6n2ys3EDTTEF9udG%2F0RcAyUQ3EITQu%2BNo7W4utHGNZJkyqiaNP7j9PqboYPWSErIqAfzXAs754gQurHce44VKgMvMDy1Y%2FhFZ0fS37YSTDPoknY5KvHOXqNMR5Ja&X-Amz-Signature=14f2eecdee6898d575a7cc132dd118533e6d1474e626673a62eee5d48a2e85d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZI2JY2V%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDyEtgEThx2c4DlvYkqj9WZ8HMBmZdiirdMSKc2eBvaAAiEAtJZ38SswGeu%2F9Ga%2FXpxhZSHX5fHm%2BFRcyFVcEEEl%2Bj4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMf3IbtajHzIPgM%2BWSrcA8wbrCxRrVJQiXPrcMGCLB1QymbHw5Zy1Fu9xbI9MM%2B4p7d38C122b5%2F4Bt5G4C81iw%2BuYv1ba%2BHYeKz54BPmH7%2F9yRtQ7doTaz46vNxemzK1YxuXHXVSUOOoBcVhl%2Br1v5jgYjQLZVbjtmd2J5JwAEi0Kc2qpNoWcxI1JaF7sJ5JuvdSGGsFYKWN3736flrFSxmEqydTf0lVEtOcGVXrgLMpoNUEkmRDX%2BvVM%2FRFFfJub%2BU6SjSkvvivZa9NdhTCHmrNf98a9nLHfdv5VzHdMH5ylXxCDWgrJA2jBzH6yM6eTb7Ytl%2FEfnghUyTWl8PzuHoP6g%2FOieRZepwoF%2BZ1Qk1kI9huOJDWUCp8OTSHRHTf6HsUrBcDMVlNEoM%2Bhqia7EiiLKmOtK1KGO77mIfn9auU8t3WdCIAsNJlfuS9oTXWkp4fwSp1S8NkwFtdJYZsRDAqnyinCxy3o1OlV8EeFofZNUVcPFCdfEfFsCV86mlU3zqSetynMT8toCyqhHRfLSZUUbu8qXz6z24iu1fwtW3FrH2Xo1w3PgAxqVyBlvUWlX61rJvy4LUZSthHnK2rJeNu%2FA2DaDYgxpOd96ISythhPGwvMroSKpFreGA8nbY73nf18yRJFv6%2Fn%2BuMLqW4sMGOqUBie8vpHqvo6plismxSK3OSKBc8iIQe%2Bysl04alK6ZGzwL%2B89B2UxPUCyGEoAU1QVCGqAB2s3wOib7cWyg0oo7%2BCRqfRKJgLkE6n2ys3EDTTEF9udG%2F0RcAyUQ3EITQu%2BNo7W4utHGNZJkyqiaNP7j9PqboYPWSErIqAfzXAs754gQurHce44VKgMvMDy1Y%2FhFZ0fS37YSTDPoknY5KvHOXqNMR5Ja&X-Amz-Signature=bb1be58acce077d3ceab68b74b3541e2bc8a0d1712114719556741cbbca67138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
