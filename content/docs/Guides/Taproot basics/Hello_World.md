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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCJZLNW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3IBUEMos8bU1XzVpT60aMdLwUCi%2BelQFyUPU4cfc4wIhAIR0T2oUpjpMeKefU5AdieYWm0GZTHRwW1hjVRFWUeHDKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSJ1H7gKBrMM36Cqkq3AN1J9Hfmng2H%2FbV4XqKXx5Gzrrj9LtZHPdHm1q9122rbFM11qU6b6llskF4F3sYmGplsDPBUdkf%2FjEREGvp6IS6xpbli2AI80sFKA9wGFcl9ZVnJPBaBypmDb89WxGMEDZrnZrVs%2FBO3QL9%2FXGF2E2Hrszt3e2hr8I57FI4fyhFalkiUtSNecXIGpn0x9tOgBHkaNlRHfr9PFyCFbuj324D6SqgQ%2FN4K7JxC2IUU4IAnbN0F2RF0KmsE%2Bg%2BbcL1KdM627ECLzHxFm7GBXTa8ViREi9hERV97ei5LmO%2B3UgFzVA23r%2FBOzsdJ2nFE8oEVueECvphRcpI%2BARJEwdiR28AiW%2BdEV3%2B8WLQSlDuRetanfn9n3qBwa5v6956fQLF1c68YTzydI1eoMhNDub51wJmzETRjoxCZte5ozsA1EqmpEqcpuAfSFvDiTxfYlpnF4ujKg9Ow6oWTQsHXUXaKO439c2nDVe8VoViViwbP5LBAKyFrfNuFXkHmo4%2BPbbvdL1RES57%2B5upbGQgP6ZS4dOq8Ieibaoh9y0g3RQJUEZSkIWaL4QCfKh1KOcWAAQUgE7nDq1BGXshqInOqkcXXYHHMkCTuy%2Bgd9Lkd3jThXA557l0TogxqKXPaUKpgDDO88rCBjqkAZEEgpBxFoW2wZDPZ%2F6DWNoVFYIw3fzzsm2iwq3I6IzA%2Fg6Ah%2B%2FomHk%2FmCElOdGWfWocT95UfrHZtqTQFcFbpNgNppfE2Lqm2YSpAAfR0VplBrF%2F0cO%2Feq69p3T8l7cnZK2PwV8B7PeuwFYiQjswAcBrduRVAXQYV8fw%2BwI%2FTvS77aoWvwSvO%2F2pWIy2oHJbh2mhinRl6ntaPdEK8YzkmbYn7cPY&X-Amz-Signature=b33115e0bd3faef50d83b6a5197ac8126e642d7a50d819153238bbd8b9e05d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCJZLNW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3IBUEMos8bU1XzVpT60aMdLwUCi%2BelQFyUPU4cfc4wIhAIR0T2oUpjpMeKefU5AdieYWm0GZTHRwW1hjVRFWUeHDKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSJ1H7gKBrMM36Cqkq3AN1J9Hfmng2H%2FbV4XqKXx5Gzrrj9LtZHPdHm1q9122rbFM11qU6b6llskF4F3sYmGplsDPBUdkf%2FjEREGvp6IS6xpbli2AI80sFKA9wGFcl9ZVnJPBaBypmDb89WxGMEDZrnZrVs%2FBO3QL9%2FXGF2E2Hrszt3e2hr8I57FI4fyhFalkiUtSNecXIGpn0x9tOgBHkaNlRHfr9PFyCFbuj324D6SqgQ%2FN4K7JxC2IUU4IAnbN0F2RF0KmsE%2Bg%2BbcL1KdM627ECLzHxFm7GBXTa8ViREi9hERV97ei5LmO%2B3UgFzVA23r%2FBOzsdJ2nFE8oEVueECvphRcpI%2BARJEwdiR28AiW%2BdEV3%2B8WLQSlDuRetanfn9n3qBwa5v6956fQLF1c68YTzydI1eoMhNDub51wJmzETRjoxCZte5ozsA1EqmpEqcpuAfSFvDiTxfYlpnF4ujKg9Ow6oWTQsHXUXaKO439c2nDVe8VoViViwbP5LBAKyFrfNuFXkHmo4%2BPbbvdL1RES57%2B5upbGQgP6ZS4dOq8Ieibaoh9y0g3RQJUEZSkIWaL4QCfKh1KOcWAAQUgE7nDq1BGXshqInOqkcXXYHHMkCTuy%2Bgd9Lkd3jThXA557l0TogxqKXPaUKpgDDO88rCBjqkAZEEgpBxFoW2wZDPZ%2F6DWNoVFYIw3fzzsm2iwq3I6IzA%2Fg6Ah%2B%2FomHk%2FmCElOdGWfWocT95UfrHZtqTQFcFbpNgNppfE2Lqm2YSpAAfR0VplBrF%2F0cO%2Feq69p3T8l7cnZK2PwV8B7PeuwFYiQjswAcBrduRVAXQYV8fw%2BwI%2FTvS77aoWvwSvO%2F2pWIy2oHJbh2mhinRl6ntaPdEK8YzkmbYn7cPY&X-Amz-Signature=26732561225a1faa0da7239d1afc1bbf1eb0ad77606bd55b5cfb930a18bfb1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
