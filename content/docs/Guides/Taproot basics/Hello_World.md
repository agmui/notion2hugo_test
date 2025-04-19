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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S74EQP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCscrlTL5Zw5yVwSOP89YueKYTlPD2PsRhjEklMdsy%2FBAIgduDqkc3s9F1IHFj2O%2FepnC6zGg4XNL38gJfDR90jzU4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtMzv2WKHJXRiXwOSrcA2haanWxe9Ol2jgQNSzfnAR7AtWTX2j4EeOyQkTvOdjGf2w2BVoS9Prf0RBatMTi8L83S4GbcAf9VVokAUXEYT7r%2BVSj2996p3UdUPFkxxdLCKiT9tFEvDR5RRKohcxQZI2P%2BIhRGQHuZh1zyiqDhMbsRQz%2BVDUgpuTAAGSfXyJbSDlpoYrx%2FVIa2qUsk%2F2QEZpVL5XvkLqisTyCafvFZERCJMxVpomOehsGNYQJK2zMKzTeBxfnvq%2BcHzGG7zLEwKdgXreXyw%2FGnYPdykzGSVxAODJova4x3VSL%2FEjm3u%2FmZNbs%2FuLBBX73gvs1eqjabIdus7Q8l9sgSl%2Fone3exDhiw8fB609TcYqK7efv1MtAUwAa7KyVP%2FMdEjjsb1iQLaoSMAnrtnYv9mB17X2Mx4TdWaMH9V92VrsXE%2BzmA8N%2B%2FhFqwX6t%2Bcg%2FV96%2FeG5SiPXyHMMG%2BDZc0L4XRCGnyQQXUpbkJFIy%2BKgWLHsoGWe97Ooq88lOAXAnHQzfQCY0bChHr9KG6D23p1OgDNmvqbi5%2F3YOtaLokksrbLnxZD9n1aouTVRYtHz9iQ8FIW65E6RBMURYuWjr%2FOsQy%2FfP0zZYZQo4epFY2sk%2F2Z964SLAtgEn0OQVT8F1oYIYMO3zj8AGOqUBjODGWdsKO5TGCR%2FSeKtcwbaTJmZ8EKUGMuPcTdfcLduh8qXcoQp%2BD4cAV1MxxeVuzGwyJEDRq6ie7C5tjibVojCFzwigIUURlZJ%2BrHWmJaveWk%2BrufaKC5KfHA9A%2BsuPzQEtydTlT%2BAYKxupLNaCS6PcjsFuAFbIEzGeoFTa3eXTFtFmwYmsbO2wBASTupe6OvripdlY%2BQdg%2BfCpIUtNQUcsGuKf&X-Amz-Signature=aeed71ba4ebd1ca7ed1a9d22a416eced76a531892d516d748025874683206a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4S74EQP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCscrlTL5Zw5yVwSOP89YueKYTlPD2PsRhjEklMdsy%2FBAIgduDqkc3s9F1IHFj2O%2FepnC6zGg4XNL38gJfDR90jzU4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtMzv2WKHJXRiXwOSrcA2haanWxe9Ol2jgQNSzfnAR7AtWTX2j4EeOyQkTvOdjGf2w2BVoS9Prf0RBatMTi8L83S4GbcAf9VVokAUXEYT7r%2BVSj2996p3UdUPFkxxdLCKiT9tFEvDR5RRKohcxQZI2P%2BIhRGQHuZh1zyiqDhMbsRQz%2BVDUgpuTAAGSfXyJbSDlpoYrx%2FVIa2qUsk%2F2QEZpVL5XvkLqisTyCafvFZERCJMxVpomOehsGNYQJK2zMKzTeBxfnvq%2BcHzGG7zLEwKdgXreXyw%2FGnYPdykzGSVxAODJova4x3VSL%2FEjm3u%2FmZNbs%2FuLBBX73gvs1eqjabIdus7Q8l9sgSl%2Fone3exDhiw8fB609TcYqK7efv1MtAUwAa7KyVP%2FMdEjjsb1iQLaoSMAnrtnYv9mB17X2Mx4TdWaMH9V92VrsXE%2BzmA8N%2B%2FhFqwX6t%2Bcg%2FV96%2FeG5SiPXyHMMG%2BDZc0L4XRCGnyQQXUpbkJFIy%2BKgWLHsoGWe97Ooq88lOAXAnHQzfQCY0bChHr9KG6D23p1OgDNmvqbi5%2F3YOtaLokksrbLnxZD9n1aouTVRYtHz9iQ8FIW65E6RBMURYuWjr%2FOsQy%2FfP0zZYZQo4epFY2sk%2F2Z964SLAtgEn0OQVT8F1oYIYMO3zj8AGOqUBjODGWdsKO5TGCR%2FSeKtcwbaTJmZ8EKUGMuPcTdfcLduh8qXcoQp%2BD4cAV1MxxeVuzGwyJEDRq6ie7C5tjibVojCFzwigIUURlZJ%2BrHWmJaveWk%2BrufaKC5KfHA9A%2BsuPzQEtydTlT%2BAYKxupLNaCS6PcjsFuAFbIEzGeoFTa3eXTFtFmwYmsbO2wBASTupe6OvripdlY%2BQdg%2BfCpIUtNQUcsGuKf&X-Amz-Signature=7e85cb15edb1298b99778c65cd839600d94cd4d9523c7c6ccf6d4e9c5dad54e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
