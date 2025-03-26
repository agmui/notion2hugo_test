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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZRPL7A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlgztemLAcjEQbvhwHydn4dsB%2FEDMgMsIb%2BZYUD9gHvAiEAzTttW09oktr61SzIEj3AabcyMpZ4hK%2FOP%2BSFWV26%2FUYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDArUKWRfnnEZO7E6OyrcAyMBcu5KOS%2BimdM4AKMV5QsZOqR1ouF7as1exBTIbbp1e2dnTWvVzfbLLl0QAdVx4U%2BdfsIi%2F456BRK0eiNTwPUe9tn%2ByjMJJY8eL7ni%2B8dY2wkpoPefykuUO11o9oj2rV%2FTYG3HWJTwK27rSoHloQXTEbF5S8sYtQIBG%2B9pgvKKp0W9ga77SOTbI6vGkh49fz0KAHq%2Bc%2FhTboTnjnazqDNvBvjnNcLqnk49UQuvd6tbSJRkDSVrvPfD91YqQvlGTEyZes4RLxNsD9GDto4nd2Gyvs6xs6aVGna4adsIyViputDrmraVA41Ts2jq94CPAGnQCGdsVa6mqjF65%2FSGp1ihVPF57V%2BjNJz9%2B3rzvnu9lb8wOP3b96uX1nsDmKL0kSsHlW7l2aGgNcvfVeQWS5xFnBTjPvbx%2BxULjiLl%2FTBwhy0qe5xizIFyyB%2BXzFRsRzV1aqvgRHSeQY%2BSyVwZ41ARgTKYj5n1j1sMcw20pf1YymL4TIMNOkLiFBraFU1Mkkbs4flC%2BznCN9JJ5smM2e7NHwRklbOyPpe7PrgTL699kwjZZ9Yg%2BVfxfvRVfJ9A%2FKbrMCI6f5UYVN7%2BTpY0uFL52aEVGrdArB4FPK5EQJYUKwwQTqJFw4EVdmUVMNfTkb8GOqUB1k84TezEeWsKQDcbs7uraGKKqNps%2FTdJp3XOPm693g3gtkFpih4B7TgnaBaHJueIFRbhe2FUfFoE8yQP9zFhoCM4NqGyzhvBkcOpmvGHSQArN7UieRhqsa3oecBAr%2FS%2B%2F4vpsIdUxkD%2BtJHBEjOEhyS4ChIR7XMCXTwqnoyV7HniYZ6erVZZzApOzjzCEVS5oII1nphxUUznmWc4ECWAlsKnjz%2BZ&X-Amz-Signature=75ef7aaebb29678ec81cadeeffbf3c207e89a7883e12fd6be9dc84014d150695&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZRPL7A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlgztemLAcjEQbvhwHydn4dsB%2FEDMgMsIb%2BZYUD9gHvAiEAzTttW09oktr61SzIEj3AabcyMpZ4hK%2FOP%2BSFWV26%2FUYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDArUKWRfnnEZO7E6OyrcAyMBcu5KOS%2BimdM4AKMV5QsZOqR1ouF7as1exBTIbbp1e2dnTWvVzfbLLl0QAdVx4U%2BdfsIi%2F456BRK0eiNTwPUe9tn%2ByjMJJY8eL7ni%2B8dY2wkpoPefykuUO11o9oj2rV%2FTYG3HWJTwK27rSoHloQXTEbF5S8sYtQIBG%2B9pgvKKp0W9ga77SOTbI6vGkh49fz0KAHq%2Bc%2FhTboTnjnazqDNvBvjnNcLqnk49UQuvd6tbSJRkDSVrvPfD91YqQvlGTEyZes4RLxNsD9GDto4nd2Gyvs6xs6aVGna4adsIyViputDrmraVA41Ts2jq94CPAGnQCGdsVa6mqjF65%2FSGp1ihVPF57V%2BjNJz9%2B3rzvnu9lb8wOP3b96uX1nsDmKL0kSsHlW7l2aGgNcvfVeQWS5xFnBTjPvbx%2BxULjiLl%2FTBwhy0qe5xizIFyyB%2BXzFRsRzV1aqvgRHSeQY%2BSyVwZ41ARgTKYj5n1j1sMcw20pf1YymL4TIMNOkLiFBraFU1Mkkbs4flC%2BznCN9JJ5smM2e7NHwRklbOyPpe7PrgTL699kwjZZ9Yg%2BVfxfvRVfJ9A%2FKbrMCI6f5UYVN7%2BTpY0uFL52aEVGrdArB4FPK5EQJYUKwwQTqJFw4EVdmUVMNfTkb8GOqUB1k84TezEeWsKQDcbs7uraGKKqNps%2FTdJp3XOPm693g3gtkFpih4B7TgnaBaHJueIFRbhe2FUfFoE8yQP9zFhoCM4NqGyzhvBkcOpmvGHSQArN7UieRhqsa3oecBAr%2FS%2B%2F4vpsIdUxkD%2BtJHBEjOEhyS4ChIR7XMCXTwqnoyV7HniYZ6erVZZzApOzjzCEVS5oII1nphxUUznmWc4ECWAlsKnjz%2BZ&X-Amz-Signature=3ba7a273b7630bb32b3c5b299a6543243c4481190c53dbb7557d1d5ce660877a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
