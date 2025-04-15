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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEPORU7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD85k4WZt50Y%2BI7PZ59OCAJjvT69oReeWQ9zzWv9CJ2YwIgWN%2FCB1TO1X7k2h4uAbRwNc9Gvur1%2BzhS6pfvJ5ok1rMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDD2AVyGWpbzBVsGDircA4mrEi475DaVUUgti99V%2FV0Ex1hPPouXDn1xlZGRwSBrDF2e%2FRX5xA9MJPvBsbUDquMto8M0stDRGxMyiHR5RVBIuELTO3xxVUukS9i%2F%2ByjfN9VrOH7SYVWcni9EF9tJvn4rdcTjQpAqSG5ch%2FoZbE6KjTpJlrPqUF9pMjcaGu78zRslQls45fyf0%2FqrKFZCLs9mMFuz%2BFzxAP%2F%2BgeBA8oBEaozwxSbIwIuUFTi29ZMSNoou4hK8lYcFdEu2MCqhIK5uBsjQHlso1HZ4kyr1QIzSk%2Bu7k2yB70RoOJ1YzFRvnwUi5S5KA8g1%2BpG5bNu9iXozHZbEVWyFzQwRcnu0F%2BY32g4FQbE07Qws6b6oUd77IcBh52ytasOmfyQc7tv4VecaR%2BOITzBHa0QcPabcftvc6Gij3QWZGvycivOgy328jCmG7TtiRKUtxxh3Z12fyyezNw6lxmN9LpAcaoBBIPcbvpdRTKc9AG1KTAaruKuz6jLznZ5j1iszZE5W6gQva1%2F1bnla2hmoWxB2tW0h4qYtVaUdBsqDVp2OnpbC%2FFE9E38J%2FZDdvrHEZbMezFtfu9Y6bapgAhScIslN%2FiKMJAJ%2BlL80ono1d7RCaza8KAMgIDPAL9KQbx0J%2F4XlMLDx%2BL8GOqUBjRf%2BWFZfWdAfhjpjmDslly70%2F4b2NP2sVbgzOFrsYsZ0EkDubtnspkxCMtZ%2BhDgmyOmpXFEBUDmcPvxfqYHqFq121f7ypNRZ0U0KOy5KzMdytC%2BkChoRsRQCtRTWdVq0rHvGiNPODUF7Y3fKKwVdR5%2BWgjNlM7y0y%2BXXpAlANA4CziMF43Sl1uSnhBbeyZuNBHU9jHGiP268YGuJ4iAB0vWKYhey&X-Amz-Signature=b1e068f137a47055dfcbeae9eb279de23f4dbc00f8c1959d843cf6f62b443446&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEPORU7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD85k4WZt50Y%2BI7PZ59OCAJjvT69oReeWQ9zzWv9CJ2YwIgWN%2FCB1TO1X7k2h4uAbRwNc9Gvur1%2BzhS6pfvJ5ok1rMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDD2AVyGWpbzBVsGDircA4mrEi475DaVUUgti99V%2FV0Ex1hPPouXDn1xlZGRwSBrDF2e%2FRX5xA9MJPvBsbUDquMto8M0stDRGxMyiHR5RVBIuELTO3xxVUukS9i%2F%2ByjfN9VrOH7SYVWcni9EF9tJvn4rdcTjQpAqSG5ch%2FoZbE6KjTpJlrPqUF9pMjcaGu78zRslQls45fyf0%2FqrKFZCLs9mMFuz%2BFzxAP%2F%2BgeBA8oBEaozwxSbIwIuUFTi29ZMSNoou4hK8lYcFdEu2MCqhIK5uBsjQHlso1HZ4kyr1QIzSk%2Bu7k2yB70RoOJ1YzFRvnwUi5S5KA8g1%2BpG5bNu9iXozHZbEVWyFzQwRcnu0F%2BY32g4FQbE07Qws6b6oUd77IcBh52ytasOmfyQc7tv4VecaR%2BOITzBHa0QcPabcftvc6Gij3QWZGvycivOgy328jCmG7TtiRKUtxxh3Z12fyyezNw6lxmN9LpAcaoBBIPcbvpdRTKc9AG1KTAaruKuz6jLznZ5j1iszZE5W6gQva1%2F1bnla2hmoWxB2tW0h4qYtVaUdBsqDVp2OnpbC%2FFE9E38J%2FZDdvrHEZbMezFtfu9Y6bapgAhScIslN%2FiKMJAJ%2BlL80ono1d7RCaza8KAMgIDPAL9KQbx0J%2F4XlMLDx%2BL8GOqUBjRf%2BWFZfWdAfhjpjmDslly70%2F4b2NP2sVbgzOFrsYsZ0EkDubtnspkxCMtZ%2BhDgmyOmpXFEBUDmcPvxfqYHqFq121f7ypNRZ0U0KOy5KzMdytC%2BkChoRsRQCtRTWdVq0rHvGiNPODUF7Y3fKKwVdR5%2BWgjNlM7y0y%2BXXpAlANA4CziMF43Sl1uSnhBbeyZuNBHU9jHGiP268YGuJ4iAB0vWKYhey&X-Amz-Signature=e6c6f7800d4ebf877a7d612acce844ca84fbcfdfc384cdf6147ad192be6f7c18&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
