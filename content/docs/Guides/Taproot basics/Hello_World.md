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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUIKGPR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE91RrqFiFhImbzshNTvW7xa9qMbRng1jky7wyTxv4AiEAuZoNDxwUz6xh%2BF2M2hGOiihfjTf9m%2FEMiElZWd90OXQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB8XoMiunB5stWSkjSrcA9lMnucLdeXf93d3vVLpeyLKn6XJMndYr8fv6ICGcsQ96q%2BGzmpXvVOE8GO%2F90tGehy%2BONEvj9wxldNfJWS%2B4rPlzZfJEa%2BqkqEGwSQnjiskvQxgPLjq%2BrOEmhDQYzFXQNMTauxmjYYnTKyPV75hQjb5t3VXUX52ADbB%2FXSyLX96zUhPYzz4RVHTO2h42mnKc4oIwWrSKE7QMdfXkGc2Zhs%2F%2B7cEPoFseQ1BAzKBYf5xHsl5wvtGHJni4GEIBq%2Bq%2F%2BQK%2BVwC%2F0LrBVxqtxsusuyvNZhTifk3yPVkNsgGhhNf%2BiVmgpyqytjXSqhoFSLJaynWCYD2v311Mj49%2Bg2FxvCclVBNth%2Fba3p1GUNQWZVxITrktMZmqgZtIcAdznidjbRygytKz2i7hKJ%2FBd0srG9bl677g5YdGoy3K2oJpWaL7gBMqDTThp6y84pAS88Vl8GCOw8vNoYtKRPMf3N9omj6%2BXHfFq3QltGVs1eN2xJH0nOOVtnO6PXcds3z6cPzyvXoJ8WHiDsj0oMvAYaHh392Ey4tqxcXBxilcY5xNa52YECRKM5xgE%2FeqY7kYF0SVHNMjobQzNaIw5tXlFDavdfFBOYCu7JuSkZtI7orkhL4B4sXe3gseIXXtT3TMJ3NrsAGOqUBcBTslKHrwMOSPTk7wB24a113Afpqo4i0ahiHmNa3tRmjcdVADiFUUYSCDhvf3MwOS5UacDcihzervIz3AcPA%2BoTwvox9HJi1tnuTbYHHy0tyr8%2BpyhUojRlmvnf2H0TzkNx8L5oJ86k0wZh%2F2KT2Doh7c6njEwEohcO6dp5hWfwQkha4sktNSWQk7JXb83uAJzSagmnUnbEOskO4Emih%2Fw%2BhjTjk&X-Amz-Signature=a202be10f3d25e4e8bd2701931a11efcaac7829a8a04d7396dda1796633e5922&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUIKGPR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWE91RrqFiFhImbzshNTvW7xa9qMbRng1jky7wyTxv4AiEAuZoNDxwUz6xh%2BF2M2hGOiihfjTf9m%2FEMiElZWd90OXQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB8XoMiunB5stWSkjSrcA9lMnucLdeXf93d3vVLpeyLKn6XJMndYr8fv6ICGcsQ96q%2BGzmpXvVOE8GO%2F90tGehy%2BONEvj9wxldNfJWS%2B4rPlzZfJEa%2BqkqEGwSQnjiskvQxgPLjq%2BrOEmhDQYzFXQNMTauxmjYYnTKyPV75hQjb5t3VXUX52ADbB%2FXSyLX96zUhPYzz4RVHTO2h42mnKc4oIwWrSKE7QMdfXkGc2Zhs%2F%2B7cEPoFseQ1BAzKBYf5xHsl5wvtGHJni4GEIBq%2Bq%2F%2BQK%2BVwC%2F0LrBVxqtxsusuyvNZhTifk3yPVkNsgGhhNf%2BiVmgpyqytjXSqhoFSLJaynWCYD2v311Mj49%2Bg2FxvCclVBNth%2Fba3p1GUNQWZVxITrktMZmqgZtIcAdznidjbRygytKz2i7hKJ%2FBd0srG9bl677g5YdGoy3K2oJpWaL7gBMqDTThp6y84pAS88Vl8GCOw8vNoYtKRPMf3N9omj6%2BXHfFq3QltGVs1eN2xJH0nOOVtnO6PXcds3z6cPzyvXoJ8WHiDsj0oMvAYaHh392Ey4tqxcXBxilcY5xNa52YECRKM5xgE%2FeqY7kYF0SVHNMjobQzNaIw5tXlFDavdfFBOYCu7JuSkZtI7orkhL4B4sXe3gseIXXtT3TMJ3NrsAGOqUBcBTslKHrwMOSPTk7wB24a113Afpqo4i0ahiHmNa3tRmjcdVADiFUUYSCDhvf3MwOS5UacDcihzervIz3AcPA%2BoTwvox9HJi1tnuTbYHHy0tyr8%2BpyhUojRlmvnf2H0TzkNx8L5oJ86k0wZh%2F2KT2Doh7c6njEwEohcO6dp5hWfwQkha4sktNSWQk7JXb83uAJzSagmnUnbEOskO4Emih%2Fw%2BhjTjk&X-Amz-Signature=a29a9354cba8fc001ee2e5110fd8c9bbfbbd31b4dcd5f9ff2c67f0de8bd80147&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
