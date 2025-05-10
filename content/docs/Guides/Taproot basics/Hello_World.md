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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY3TMHM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Faesnl1VmFGCJv4crvVnlhT3iGpkXC9A7ceCkJ1EhNAiEAoEnHeWxjrwKWG%2BDUs4utAJz%2BblwsnfspMFTw13aqWCEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjcKlY2kAScxdlAnSrcAxJFcX3%2BHnblRdSq%2BKP0ZBco6RaA0qYrzbqwr3TSDtghrC6LwLo1hcBiSRZWMyPagzo%2BtP1m5BJVciWsCsFYL7GEsS%2BnIwUABHsr3mlrpQleWmlg%2FqSjzQZP3T%2BGTlcK0gLQQhpYQi7RLUsM9lWqY5llFxB1Ynajz1raCeUOJro1h5FT1%2BJeSXpxyOA9cB2u5SsOMoYpz%2BSDLcBo%2FrYz5kgoLhkzDSKCDHrUz5YPHf6OF8TrMTnzSs6%2FTnQy5BG08DR93qLmaYRV01J2CShFzvY%2Be0DLWCXy5%2FQl7c5UuxKyF5Jlj2hsfYq56GfH3ipzDxVQVcvRCSpy2DkDETGN2LQYJQ4FhmqwydCKmNVIFpJi%2F6gh%2BDIuUmLQp95EdZwCp2px06jfHftXDZBdHVqOfzb5JwxFc3m5pFM2xQzAmoOYaqwj7BeqSd9BYcLnKT4XLoe37ks%2BK%2BJ68WBw%2BndctyGVJhy4cTcc50Qbd1X7SkSBEJy%2FqswSRXOMAh%2Fsx%2Bx%2BeCXRbkoXLlrPvZfj5eoicMt%2FFaPGpJndiWwY%2FFiV9K6rSQqy2BkU51xPtQ%2Fs5z6ncQ80%2Btyynty5dTpZqVZOQ08y1AYv8KAd%2BwGx7k5mk8VHmvY5s%2F083U%2FZWydiMNHr%2BsAGOqUBZeR148m89ZenElujDysWHOFWwauk9Fg5ENEv1efmIYvDfzfnUP%2F%2FWlL112RsVzSTOKroQC%2F97gIWxZcgYuoqF4JSkfq8C%2FsGaVtmU0K8w%2B2pxUpbf7JpwdTVMhMXEm1bgbYyqnBqndDFQcOAbNF%2BYswQT4GNejZQxcaP1FUi8kPA603b9DZHdXnUrQOAd07kHmwv%2BZaMSXf%2FLnbKQ%2B0oYC6PE3bJ&X-Amz-Signature=0060a2132f7102ccca3ccd53c12f3edf6748dcd40ed8387bfdbffe1eb16674bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY3TMHM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Faesnl1VmFGCJv4crvVnlhT3iGpkXC9A7ceCkJ1EhNAiEAoEnHeWxjrwKWG%2BDUs4utAJz%2BblwsnfspMFTw13aqWCEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjcKlY2kAScxdlAnSrcAxJFcX3%2BHnblRdSq%2BKP0ZBco6RaA0qYrzbqwr3TSDtghrC6LwLo1hcBiSRZWMyPagzo%2BtP1m5BJVciWsCsFYL7GEsS%2BnIwUABHsr3mlrpQleWmlg%2FqSjzQZP3T%2BGTlcK0gLQQhpYQi7RLUsM9lWqY5llFxB1Ynajz1raCeUOJro1h5FT1%2BJeSXpxyOA9cB2u5SsOMoYpz%2BSDLcBo%2FrYz5kgoLhkzDSKCDHrUz5YPHf6OF8TrMTnzSs6%2FTnQy5BG08DR93qLmaYRV01J2CShFzvY%2Be0DLWCXy5%2FQl7c5UuxKyF5Jlj2hsfYq56GfH3ipzDxVQVcvRCSpy2DkDETGN2LQYJQ4FhmqwydCKmNVIFpJi%2F6gh%2BDIuUmLQp95EdZwCp2px06jfHftXDZBdHVqOfzb5JwxFc3m5pFM2xQzAmoOYaqwj7BeqSd9BYcLnKT4XLoe37ks%2BK%2BJ68WBw%2BndctyGVJhy4cTcc50Qbd1X7SkSBEJy%2FqswSRXOMAh%2Fsx%2Bx%2BeCXRbkoXLlrPvZfj5eoicMt%2FFaPGpJndiWwY%2FFiV9K6rSQqy2BkU51xPtQ%2Fs5z6ncQ80%2Btyynty5dTpZqVZOQ08y1AYv8KAd%2BwGx7k5mk8VHmvY5s%2F083U%2FZWydiMNHr%2BsAGOqUBZeR148m89ZenElujDysWHOFWwauk9Fg5ENEv1efmIYvDfzfnUP%2F%2FWlL112RsVzSTOKroQC%2F97gIWxZcgYuoqF4JSkfq8C%2FsGaVtmU0K8w%2B2pxUpbf7JpwdTVMhMXEm1bgbYyqnBqndDFQcOAbNF%2BYswQT4GNejZQxcaP1FUi8kPA603b9DZHdXnUrQOAd07kHmwv%2BZaMSXf%2FLnbKQ%2B0oYC6PE3bJ&X-Amz-Signature=be59395ec2e086fa5f31395f1328d4f35defe66adeaae19144307e4ae1782bce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
