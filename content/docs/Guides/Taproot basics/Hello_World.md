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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2BJNQU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkwGR10vrY9F8RsBC1JZYXPzfpvCaKhYXeBw1LdaktAgIgPTSyz%2Fzj7NVLH4KMH0Db7l73Em3MtZQ7UbE%2BmFyGUTwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtLEfThjI8xjw6VqCrcAzaoV7XWeVbTo4pW%2BdAr9ypZzqYrzKn%2BRE73p%2BQinDAe1JbUh%2F0Kax8pufIA4NNxtSK50gP0zUu7a7V3DMdPIfF9PPo6ZRf9FbdwU80TlSZJ%2BRO5nda02VWurlZUGmpTgDv79dQ9u58KCPGp6D7RVjztE0xfNTxvoJ4UXCOnaW4OWZPSyYvLe915ArgHTJkqrCnXYNPpMmDLH%2Fr5D1P%2BJ0Dy4UFY9jatDZw%2FSifN4UJcmyD5r7%2Bfk1iFilqKcBsl8ACGox2wSMil%2FpvNGqUKZumAoNFdouryV4DSDvNY5eXbdK1P7vrPUekKdLYeENToGYgGmcFS90dDULTqx6kRBHx2Zhlr%2Be75oSye%2BcaVhEIxhQSUmQQ13iOupB5FGqSKlGfIfUVtHqDwy5Fn82RKw4XEBPQjs13MPUOFv2%2FbDdo2PYI01FknEyW0p5svs1vOwyE873CqeluoloI5pfOccsBmf8gk2dIIvOU15vxr%2BbIoFR8PvXkL7fL3OB3gWCXpH%2Bpv1dMTzAKh6eB0bCvuyTc0Bkrgsbjfvt7aky%2FNzFyWohZsRwA7y%2BkaeP4hoJ66AX04CuGW%2FMwXuuzUtOBZ0uM%2BXWYUpDVLgn%2FcOtnTjaPO4OobDy%2F060%2B%2FyNFLMPP8rMEGOqUBqfpPaZt0LzQVFsqFE6nIR4eIdsYAT15RvOhfL4sSG%2BXRh%2FVB2Hw22LqCV0E2yntuwARvbAUN3tla3rFHd3IsQjhSbKEMmJil7sRUzXGuBESqxy6xDQmSX4LUTV5e0R3t0FP8LimCsMEm7ICLAyxVsrTkUlWNDTr46XALHfqNkkrC65MdE80N7c9LLuKQzt9QHf0Ng%2B4i0%2BSx4TXPTV6SXDHsh%2Fqb&X-Amz-Signature=571f2d8952c4ae60bb82663fec09d16baa776afa468eddd3a696bc2a21ac7ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2BJNQU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkwGR10vrY9F8RsBC1JZYXPzfpvCaKhYXeBw1LdaktAgIgPTSyz%2Fzj7NVLH4KMH0Db7l73Em3MtZQ7UbE%2BmFyGUTwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtLEfThjI8xjw6VqCrcAzaoV7XWeVbTo4pW%2BdAr9ypZzqYrzKn%2BRE73p%2BQinDAe1JbUh%2F0Kax8pufIA4NNxtSK50gP0zUu7a7V3DMdPIfF9PPo6ZRf9FbdwU80TlSZJ%2BRO5nda02VWurlZUGmpTgDv79dQ9u58KCPGp6D7RVjztE0xfNTxvoJ4UXCOnaW4OWZPSyYvLe915ArgHTJkqrCnXYNPpMmDLH%2Fr5D1P%2BJ0Dy4UFY9jatDZw%2FSifN4UJcmyD5r7%2Bfk1iFilqKcBsl8ACGox2wSMil%2FpvNGqUKZumAoNFdouryV4DSDvNY5eXbdK1P7vrPUekKdLYeENToGYgGmcFS90dDULTqx6kRBHx2Zhlr%2Be75oSye%2BcaVhEIxhQSUmQQ13iOupB5FGqSKlGfIfUVtHqDwy5Fn82RKw4XEBPQjs13MPUOFv2%2FbDdo2PYI01FknEyW0p5svs1vOwyE873CqeluoloI5pfOccsBmf8gk2dIIvOU15vxr%2BbIoFR8PvXkL7fL3OB3gWCXpH%2Bpv1dMTzAKh6eB0bCvuyTc0Bkrgsbjfvt7aky%2FNzFyWohZsRwA7y%2BkaeP4hoJ66AX04CuGW%2FMwXuuzUtOBZ0uM%2BXWYUpDVLgn%2FcOtnTjaPO4OobDy%2F060%2B%2FyNFLMPP8rMEGOqUBqfpPaZt0LzQVFsqFE6nIR4eIdsYAT15RvOhfL4sSG%2BXRh%2FVB2Hw22LqCV0E2yntuwARvbAUN3tla3rFHd3IsQjhSbKEMmJil7sRUzXGuBESqxy6xDQmSX4LUTV5e0R3t0FP8LimCsMEm7ICLAyxVsrTkUlWNDTr46XALHfqNkkrC65MdE80N7c9LLuKQzt9QHf0Ng%2B4i0%2BSx4TXPTV6SXDHsh%2Fqb&X-Amz-Signature=1842e1f291859bd64b180580d2dd4718a9acf01ea247ad012d71308a7cd1e059&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
