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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYD3IXSI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIC7o%2FYAj%2BPFuRITF5p%2BDP8fmS0KYUrixGzCEqGjSCUq9AiEA%2B1ntMuItAwmKTbrnpJ%2B7HO5XHWkHtuD3oziUp7yT8HgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWQvy%2Fm2Su2QzoldyrcA4boDJztEmOl6gCkgm6%2Ba5fqNPX0gg8mtweXYPMMOLCIs%2FPatKiVlh4W0PuQSNTMyNS0P0azVx1CZkpks5rqpVkZjDarEbQPDATHApAs3zi9nFAuEvXvv4sy%2BRVL7wDOb0ZmfUcCLZTC0g8ePePr2etHeFrE4vTOovsj%2BDTH%2BT6MKgLO%2BjmN089SohCZE7iFxdAyjOhU2mfV5RPlMx8h%2FDzOgotuyWjtf35Vx%2FNXppSjT8AT%2FxmG%2BkPsgosnDl%2BeUYY6oMUbkwF90Jk62OGn8VbLasDaBvdDb8A69JlT4qAbzWOiAxZ7vkDGw9eqoKqePJjXti443VCN0HKPnaoLIemMP5NVAO6qPvyAJgexK2AVyBoZQvYgAYXlRXHvPZEQdynsA68eXwUN%2B3B5aLQE0eIE6xfEscnl8v2UZBEu9bAW%2Bn0qhdUbaGd6SFP%2F9mCDb2Pbbkv2i9mlFVL68aHz2%2BNeWc374a2%2B8FXbTtYP1YZfaJw5H8NjDoyZS2FTtQdhLTy5xh6h4n1BxhVUty6YlqxkMCk8WxQJpclMMRbgkAWEsP0Y4mNaocGRItxX4hDBAzQA6doMd16v%2BDsVd%2BTV9gMD5D4iiM5hYP4n3B9ZXB93eL3ZeImwc%2FhRtQxfMJjyi8EGOqUBE2x4hacnLCgXT0GQIJ3MNZYqFzrSvnke%2FY7wCi6jwNg8kTcyHl0lVJa7TOnjF8LlnKFvEx1WoZZC4eOhAKy%2BShDWgDcTdTiUr4qrvh8lDxVzooc1McEuFz95g%2BFV4vr5599D4cczF2WQvRf%2BmMV02XiJKBpwOI5zXSt8n2KxIJ4rBj6Bwn78QkxPuk77XuduJPeMMNOSostA7D3f7L1Njpda1Dzz&X-Amz-Signature=38ceb8ba546ff7350c3fc49bbb40d7ca00a0ecacde706278ba66a132269637a7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYD3IXSI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIC7o%2FYAj%2BPFuRITF5p%2BDP8fmS0KYUrixGzCEqGjSCUq9AiEA%2B1ntMuItAwmKTbrnpJ%2B7HO5XHWkHtuD3oziUp7yT8HgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWQvy%2Fm2Su2QzoldyrcA4boDJztEmOl6gCkgm6%2Ba5fqNPX0gg8mtweXYPMMOLCIs%2FPatKiVlh4W0PuQSNTMyNS0P0azVx1CZkpks5rqpVkZjDarEbQPDATHApAs3zi9nFAuEvXvv4sy%2BRVL7wDOb0ZmfUcCLZTC0g8ePePr2etHeFrE4vTOovsj%2BDTH%2BT6MKgLO%2BjmN089SohCZE7iFxdAyjOhU2mfV5RPlMx8h%2FDzOgotuyWjtf35Vx%2FNXppSjT8AT%2FxmG%2BkPsgosnDl%2BeUYY6oMUbkwF90Jk62OGn8VbLasDaBvdDb8A69JlT4qAbzWOiAxZ7vkDGw9eqoKqePJjXti443VCN0HKPnaoLIemMP5NVAO6qPvyAJgexK2AVyBoZQvYgAYXlRXHvPZEQdynsA68eXwUN%2B3B5aLQE0eIE6xfEscnl8v2UZBEu9bAW%2Bn0qhdUbaGd6SFP%2F9mCDb2Pbbkv2i9mlFVL68aHz2%2BNeWc374a2%2B8FXbTtYP1YZfaJw5H8NjDoyZS2FTtQdhLTy5xh6h4n1BxhVUty6YlqxkMCk8WxQJpclMMRbgkAWEsP0Y4mNaocGRItxX4hDBAzQA6doMd16v%2BDsVd%2BTV9gMD5D4iiM5hYP4n3B9ZXB93eL3ZeImwc%2FhRtQxfMJjyi8EGOqUBE2x4hacnLCgXT0GQIJ3MNZYqFzrSvnke%2FY7wCi6jwNg8kTcyHl0lVJa7TOnjF8LlnKFvEx1WoZZC4eOhAKy%2BShDWgDcTdTiUr4qrvh8lDxVzooc1McEuFz95g%2BFV4vr5599D4cczF2WQvRf%2BmMV02XiJKBpwOI5zXSt8n2KxIJ4rBj6Bwn78QkxPuk77XuduJPeMMNOSostA7D3f7L1Njpda1Dzz&X-Amz-Signature=3fdcf08f28abb20df78adcb03a1c1edb8e9fb4d7ed5ccb42b4e73316025fb054&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
