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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7IBSHY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNU06nu1U0ADCpI%2FUDYj1WoJ0pPsPndiOUqyDIcI8OhQIgKPJaKEcLMN3fmq19T99z6LaexDAlScQybiR%2Fdmg8y3sq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCYCNKYLz4FvrRBpNircAzyqGUlvEV8CB1EHMKN%2FzNX71jaiH7M8q77xS1Es69bh3Tj28eU56apbfNVuQq%2FsJVtPp%2F3Zu6Ct047U%2FbB3J%2Fag8OEPbW4r%2BB4S%2Fb33Qbzy0qmcLrk2M9i%2BydReYJVaJAIkGAiGzW5PvPsg%2F%2BgczMds5jOfhvdm3JkZw6X6pswKwYs2k5%2BB2KdZodY%2Fnf3t0DOcpYQ844FGAnF%2Bmj%2Btt4dYJYtvuhU4GKP8P2ODK3XDNeaYsJKCzjeC1Kgtmb0wmmJALDe0fbEmt%2FA8O4k4DnT8Va7W3YLhHP10v3B%2B%2BcdU0c8tcJzqlMwR4PsNKzEvcHbV%2BUgDZnjimnoXYnMPJf7O4hytCM3lfw5wB0Rr1%2FVcBBI%2BEJetmVvXtDtOAGQuNU0mGIE7hy172s%2FnHJee8DxWuzvHt%2B1Z8xE9wv6aCbMpisqj%2FpDEjP52xyI747Ioa%2B5jSI0OG8YtFjZRPEOJbYGgwhFAjexCePIfzwwSMFYl%2BgM6wKmL2VwJqTtnLnRzaLtGGf2MXXHPVHHADvYE4pWg%2Fk0Gmw%2FU534GjpS6ZAUSt60lZTIyOXdi6n%2FQ%2BpJoOaWBi%2FNCbbMnJ00kai4ASp5SMRFrxIuNIO77nF%2BQUd3sUno6pI%2FTQ7GFLdF4MOuZ6cAGOqUBMjdZPSevmDyyJItXWeBIyE4QOzzRItv490zAiAf8goZJiC6YrIbqMXRJPHguV69tQM%2F8BFZH8S4T3TOVVXQTTqALjlT2%2FEf89imFX2gDDj7OBXU48oUy8kXx1VBTC%2BiLUKOBlnLlra4dQCW7%2FwQeFX3p7k050UY5Go%2BtP5s4KC9jD7onoP%2BDjZYOzMwK5I6vYODuy7Mg6s3M9lMoyBlXkJSfcV77&X-Amz-Signature=8f02c2a70c7ab07de1aad4c785cc750e49fe410052021022aacd91a1ea9de2d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7IBSHY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNU06nu1U0ADCpI%2FUDYj1WoJ0pPsPndiOUqyDIcI8OhQIgKPJaKEcLMN3fmq19T99z6LaexDAlScQybiR%2Fdmg8y3sq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCYCNKYLz4FvrRBpNircAzyqGUlvEV8CB1EHMKN%2FzNX71jaiH7M8q77xS1Es69bh3Tj28eU56apbfNVuQq%2FsJVtPp%2F3Zu6Ct047U%2FbB3J%2Fag8OEPbW4r%2BB4S%2Fb33Qbzy0qmcLrk2M9i%2BydReYJVaJAIkGAiGzW5PvPsg%2F%2BgczMds5jOfhvdm3JkZw6X6pswKwYs2k5%2BB2KdZodY%2Fnf3t0DOcpYQ844FGAnF%2Bmj%2Btt4dYJYtvuhU4GKP8P2ODK3XDNeaYsJKCzjeC1Kgtmb0wmmJALDe0fbEmt%2FA8O4k4DnT8Va7W3YLhHP10v3B%2B%2BcdU0c8tcJzqlMwR4PsNKzEvcHbV%2BUgDZnjimnoXYnMPJf7O4hytCM3lfw5wB0Rr1%2FVcBBI%2BEJetmVvXtDtOAGQuNU0mGIE7hy172s%2FnHJee8DxWuzvHt%2B1Z8xE9wv6aCbMpisqj%2FpDEjP52xyI747Ioa%2B5jSI0OG8YtFjZRPEOJbYGgwhFAjexCePIfzwwSMFYl%2BgM6wKmL2VwJqTtnLnRzaLtGGf2MXXHPVHHADvYE4pWg%2Fk0Gmw%2FU534GjpS6ZAUSt60lZTIyOXdi6n%2FQ%2BpJoOaWBi%2FNCbbMnJ00kai4ASp5SMRFrxIuNIO77nF%2BQUd3sUno6pI%2FTQ7GFLdF4MOuZ6cAGOqUBMjdZPSevmDyyJItXWeBIyE4QOzzRItv490zAiAf8goZJiC6YrIbqMXRJPHguV69tQM%2F8BFZH8S4T3TOVVXQTTqALjlT2%2FEf89imFX2gDDj7OBXU48oUy8kXx1VBTC%2BiLUKOBlnLlra4dQCW7%2FwQeFX3p7k050UY5Go%2BtP5s4KC9jD7onoP%2BDjZYOzMwK5I6vYODuy7Mg6s3M9lMoyBlXkJSfcV77&X-Amz-Signature=6974440e2a0b4006e8f27d56a9ba5fa7dcb9a4a45679bbc275df6f3ba18bcbf0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
