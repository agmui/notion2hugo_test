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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW5FEDM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNW8wliPGY6GljWpk5Tz2dZ3HUySwVHnrCC6Anx1BTMwIgJAcMsEgumpjAO0W1JGmPi%2BRy5tqOzmj2UljIj9o6B3wq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDB78cHWH0B6PR1jJ8SrcA9nCQIssjMvL4JiptLZst%2FTSUgZR2iNKcEWtxhQmfQ5nBMpIt962Lm%2BgYhe2ztGUvIkOprnB7JSXo4GIdjMnnPx5aH2rkDI1Ea5Lyy8nbF45aA%2FP2SQvJdFEzaT82%2B%2F3WpsLTB2SxyHxPJZeaQv5WS%2FxOOcNfJ5Heup4z3fpK%2FR6gTLgIeB8FM3TltS8pEbLali6HsVBx0JxsW3tykkZ%2FuUYTmkcIdT8Ky1gmRkM4wumTw34IkpnxwV8IrMbD%2F9a7TJ52afA2BiQe24PSbxXIks%2B3eCHPDQgx1RrnmwWsFQOFrL4gaKTj4bE3CI0rIk%2FVbmpWGvGD97Y4OGaVuq5SbeN5o33dig%2BWg956eqfaRde7TInE9xT2NaExZXJ4g%2BOKcz%2FzQgMqw5%2BWF1RSAEbq%2FbvdwsMYaK4gBx5Rde9LFZBxpYYOWy6Mdilbtv5gUlFBd9sq8rSFyu3I%2FKpAsb5xjwYmk%2B%2F%2B6NbFGhGoZnYUQcwSnYvrX%2F814zbDmF2SRKXNUtgngjZqbU7JxJ8C%2B3KMJr26gSEsU45%2Fm1E3%2FsWVEDFLoHRmp%2BlKS4C4EopBuOEz8g6O5unippJIPh7jT%2FI6atIpZZY7M28xJoWlCza73s8RMnQOqNRKRdYZGhmMLn5pcEGOqUBUhslb46t%2Fj%2B9H039AjcThJMJMaUHB5xpQ7bomSBy3CxVQLmlACJcG4fzCF0IUxaOhUht94FwCiCwYM0SnbPWd3KquX3Fl51Rqoss3Fw66WL9uh3G0rW5HvM6O9RKWwZ8OQDbVs3%2B6kSMc7C%2B%2B2p08uUKc647T7eMbOi%2FR%2B64%2F9jb1DNTqr8tIjfJffju5h1xCX87HSlAdmaSgr3ua3l4wzvwo%2FGY&X-Amz-Signature=1f378b6e19b86511ca4b566b09cf3c400fa2fb47a019eac8740029f2d9f7c3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW5FEDM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNW8wliPGY6GljWpk5Tz2dZ3HUySwVHnrCC6Anx1BTMwIgJAcMsEgumpjAO0W1JGmPi%2BRy5tqOzmj2UljIj9o6B3wq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDB78cHWH0B6PR1jJ8SrcA9nCQIssjMvL4JiptLZst%2FTSUgZR2iNKcEWtxhQmfQ5nBMpIt962Lm%2BgYhe2ztGUvIkOprnB7JSXo4GIdjMnnPx5aH2rkDI1Ea5Lyy8nbF45aA%2FP2SQvJdFEzaT82%2B%2F3WpsLTB2SxyHxPJZeaQv5WS%2FxOOcNfJ5Heup4z3fpK%2FR6gTLgIeB8FM3TltS8pEbLali6HsVBx0JxsW3tykkZ%2FuUYTmkcIdT8Ky1gmRkM4wumTw34IkpnxwV8IrMbD%2F9a7TJ52afA2BiQe24PSbxXIks%2B3eCHPDQgx1RrnmwWsFQOFrL4gaKTj4bE3CI0rIk%2FVbmpWGvGD97Y4OGaVuq5SbeN5o33dig%2BWg956eqfaRde7TInE9xT2NaExZXJ4g%2BOKcz%2FzQgMqw5%2BWF1RSAEbq%2FbvdwsMYaK4gBx5Rde9LFZBxpYYOWy6Mdilbtv5gUlFBd9sq8rSFyu3I%2FKpAsb5xjwYmk%2B%2F%2B6NbFGhGoZnYUQcwSnYvrX%2F814zbDmF2SRKXNUtgngjZqbU7JxJ8C%2B3KMJr26gSEsU45%2Fm1E3%2FsWVEDFLoHRmp%2BlKS4C4EopBuOEz8g6O5unippJIPh7jT%2FI6atIpZZY7M28xJoWlCza73s8RMnQOqNRKRdYZGhmMLn5pcEGOqUBUhslb46t%2Fj%2B9H039AjcThJMJMaUHB5xpQ7bomSBy3CxVQLmlACJcG4fzCF0IUxaOhUht94FwCiCwYM0SnbPWd3KquX3Fl51Rqoss3Fw66WL9uh3G0rW5HvM6O9RKWwZ8OQDbVs3%2B6kSMc7C%2B%2B2p08uUKc647T7eMbOi%2FR%2B64%2F9jb1DNTqr8tIjfJffju5h1xCX87HSlAdmaSgr3ua3l4wzvwo%2FGY&X-Amz-Signature=7bfb19cf0e9cb0a92bf2fd176af43d30feaef91a0605a45968e9e0ee58fe4a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
