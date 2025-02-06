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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4UIJSE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIACxH19BVq7F6wGQE%2Bxhqd88CoqWhmRiCfJA2PyfHwPaAiEA6DDlHi2Y2oLLVbBQBZyD9CH540%2BE1QrzsAH8FvumGPkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFozosqu20siLy1RMCrcA24oo4Y3yrH5O8ZUAmZyMb4phWNV1XXe9uWEhjYq%2BfOSrKS6vXetkR7g2Czn20dgN33IoS8wnxhWcB3aBmkgYmdmzdE4ysWOMnVRX%2Fj3nVfpfqyLmvzULEeqdcu%2B5XXmpz99lc5HlB1l4gSn%2F4TtOMG%2BrSphnGTAhV7d9XTg8FMQbWcWFkXUVvPXQSsnHVe8Sp%2BLwiMbZEuo4SAVve155wUZFwr%2B2aCRGUzPuUf%2FDzyotNw47HJFisORm4CgaHs2GRsVAh8W8J1enJDOlN8hrf1NeJfboYiB85oUxaFpZPdixujUDy%2FhAAxrt7BqSesvNQebizg%2FkswqdJLzcR0BU2Mb6uxl%2FoEjYMGGibOdb5kMa7wqKrKEZw%2BSEM8u9d1bPl3aMt8p7lkFltk80MM7fJL6Tb%2BJUG5t3BB8OEM%2BUxF1k4gFCwDotjxAxhI34qxgd5gQwbsPU8vZ49TxvtvCezoIWMybBKGLMj8wxFgrmKiJUEPTlBuPvD4EC6sXH4RLyMYxl8FK%2Bmo4tG%2BlHCdHVpsBGyvEMKys3qvnxPru9MBi%2FBslSNjFbNAEdi2yfMXB0SK%2FvzPzHCZUuRcxt9JkVbaWfYnwRg2UjipPm8oijxDHxWlD8zStHKhs2Y01MKjFkr0GOqUB57jRYQ2BQXmo7yrg0L0c9Sr4t7v8QoWg%2ByA4Qifd3w173PPP%2FLkEwD49oCLSqAF3WzQCtO03N1O%2BTyCnl3B0WeXFLIx%2B5tXiLZkMMHYbVxaSu75lMdWoRFwJxPDgr0qJC0AHghJ1xSoX7csIP37hf4tylG86gQrP260K3%2Bmah5IPiSHIbK1vESndZWOT%2Btu3hquPAhaD7uVZImTsFFlkiCPulBpq&X-Amz-Signature=19ea2540e0d792787bbb7fa7739c88803e6fda820310e87bb178e5491bd3d263&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4UIJSE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIACxH19BVq7F6wGQE%2Bxhqd88CoqWhmRiCfJA2PyfHwPaAiEA6DDlHi2Y2oLLVbBQBZyD9CH540%2BE1QrzsAH8FvumGPkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFozosqu20siLy1RMCrcA24oo4Y3yrH5O8ZUAmZyMb4phWNV1XXe9uWEhjYq%2BfOSrKS6vXetkR7g2Czn20dgN33IoS8wnxhWcB3aBmkgYmdmzdE4ysWOMnVRX%2Fj3nVfpfqyLmvzULEeqdcu%2B5XXmpz99lc5HlB1l4gSn%2F4TtOMG%2BrSphnGTAhV7d9XTg8FMQbWcWFkXUVvPXQSsnHVe8Sp%2BLwiMbZEuo4SAVve155wUZFwr%2B2aCRGUzPuUf%2FDzyotNw47HJFisORm4CgaHs2GRsVAh8W8J1enJDOlN8hrf1NeJfboYiB85oUxaFpZPdixujUDy%2FhAAxrt7BqSesvNQebizg%2FkswqdJLzcR0BU2Mb6uxl%2FoEjYMGGibOdb5kMa7wqKrKEZw%2BSEM8u9d1bPl3aMt8p7lkFltk80MM7fJL6Tb%2BJUG5t3BB8OEM%2BUxF1k4gFCwDotjxAxhI34qxgd5gQwbsPU8vZ49TxvtvCezoIWMybBKGLMj8wxFgrmKiJUEPTlBuPvD4EC6sXH4RLyMYxl8FK%2Bmo4tG%2BlHCdHVpsBGyvEMKys3qvnxPru9MBi%2FBslSNjFbNAEdi2yfMXB0SK%2FvzPzHCZUuRcxt9JkVbaWfYnwRg2UjipPm8oijxDHxWlD8zStHKhs2Y01MKjFkr0GOqUB57jRYQ2BQXmo7yrg0L0c9Sr4t7v8QoWg%2ByA4Qifd3w173PPP%2FLkEwD49oCLSqAF3WzQCtO03N1O%2BTyCnl3B0WeXFLIx%2B5tXiLZkMMHYbVxaSu75lMdWoRFwJxPDgr0qJC0AHghJ1xSoX7csIP37hf4tylG86gQrP260K3%2Bmah5IPiSHIbK1vESndZWOT%2Btu3hquPAhaD7uVZImTsFFlkiCPulBpq&X-Amz-Signature=73beb9daf7b3d542fa5736116a43e3f6a490e87418a7cd5e7f7f5a2d5170c7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
