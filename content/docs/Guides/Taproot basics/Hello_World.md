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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVA5YD6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEnBgsph0GQkvUNNf36luNRhK1ufbrvodQySf%2FTddOJgIhAKTJBvFOJ6ExzOOBAPYVI97Jsos%2B7%2FvoD0D%2FW38wiIRBKv8DCHcQABoMNjM3NDIzMTgzODA1IgxMxxFXQc3ky4njS2Aq3AN7ZNDamKqm4gs%2BL63seRIfW8l2lHC75oM6eWvEWoMX%2BkqIml0T9WSPcbZPCNw76C5Ce40SFYSXktg8fbS93qhg4PUCURIOI2oKR%2FBQukE5Sga0HjMc2%2FwrccJ1Rr7NFPBaFzdB%2BFbgQqdclNArwOGyyWhrLaCkzaGUgv0jl9OduYO3h7xGoQ1QviQ1FLjM5VZQpPaNRzgp5h%2Bpf1alokoD%2BbWZMKjLwfA5%2FWlKDqO54jMpuNTfCW3Vg3gsxDe1xJ3N4Oc25%2FQGiTziSWp5VbehJGBkOScfLCjxrxIMH30etH7H5vwKcn6w5k5kBSHvEezwuSO8ehny2fFf3nWe19jrRWtEiUZ4z%2BBRCsUfAp0FtoulkBnkTVmtl6rsoZQ4DRRjz4YC5HRkyevW%2Bu3RYOeULS6ukfZoy9W9djsbW2%2F8xHc48I0ZG006PiSpm4K0at62o7eMduI2Ox6pkSebj0zjHk8p9U7juq%2Bb1lytn7mZstAwzRqg8CBl4D4B2VIbzp27GlcmioqM3dKyKgNTXrNd7LpzUQ33fEaY2X0nXEAanMnLYjHZ8xcpJ%2Bleq%2FbKjj3%2Fc9rKG9cIl%2BYs6RTVomjMi%2B0Tcdbf65jTNvlpU0bvAtNO3yp%2B82VhvTjaKTChgZHCBjqkAasEkVt0QlCoRr4Z8YNZu70edjKQFv4N2vRMpUsURyJ5Hlbnt64W7xIJFzSP32xxwGf4crWgVcUXUNKudad93dYFRcEJ%2BEBVJl2QJjA22EvJHLzG0T4nQ7XBbn7Rg0BZ6%2BY3D02LadZSDSlABQaA4QglXiI2AeeJ9c8n8KI2DYK%2FISmqqHbJwiMf1BsVqQ8Wn0%2BFrezssV74OsEMvW%2FD7%2FWsYL28&X-Amz-Signature=948cceb8bf82f42989220f8562cb7fda5c6c5a26b938742d12a2b4ce8c77794e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVA5YD6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEnBgsph0GQkvUNNf36luNRhK1ufbrvodQySf%2FTddOJgIhAKTJBvFOJ6ExzOOBAPYVI97Jsos%2B7%2FvoD0D%2FW38wiIRBKv8DCHcQABoMNjM3NDIzMTgzODA1IgxMxxFXQc3ky4njS2Aq3AN7ZNDamKqm4gs%2BL63seRIfW8l2lHC75oM6eWvEWoMX%2BkqIml0T9WSPcbZPCNw76C5Ce40SFYSXktg8fbS93qhg4PUCURIOI2oKR%2FBQukE5Sga0HjMc2%2FwrccJ1Rr7NFPBaFzdB%2BFbgQqdclNArwOGyyWhrLaCkzaGUgv0jl9OduYO3h7xGoQ1QviQ1FLjM5VZQpPaNRzgp5h%2Bpf1alokoD%2BbWZMKjLwfA5%2FWlKDqO54jMpuNTfCW3Vg3gsxDe1xJ3N4Oc25%2FQGiTziSWp5VbehJGBkOScfLCjxrxIMH30etH7H5vwKcn6w5k5kBSHvEezwuSO8ehny2fFf3nWe19jrRWtEiUZ4z%2BBRCsUfAp0FtoulkBnkTVmtl6rsoZQ4DRRjz4YC5HRkyevW%2Bu3RYOeULS6ukfZoy9W9djsbW2%2F8xHc48I0ZG006PiSpm4K0at62o7eMduI2Ox6pkSebj0zjHk8p9U7juq%2Bb1lytn7mZstAwzRqg8CBl4D4B2VIbzp27GlcmioqM3dKyKgNTXrNd7LpzUQ33fEaY2X0nXEAanMnLYjHZ8xcpJ%2Bleq%2FbKjj3%2Fc9rKG9cIl%2BYs6RTVomjMi%2B0Tcdbf65jTNvlpU0bvAtNO3yp%2B82VhvTjaKTChgZHCBjqkAasEkVt0QlCoRr4Z8YNZu70edjKQFv4N2vRMpUsURyJ5Hlbnt64W7xIJFzSP32xxwGf4crWgVcUXUNKudad93dYFRcEJ%2BEBVJl2QJjA22EvJHLzG0T4nQ7XBbn7Rg0BZ6%2BY3D02LadZSDSlABQaA4QglXiI2AeeJ9c8n8KI2DYK%2FISmqqHbJwiMf1BsVqQ8Wn0%2BFrezssV74OsEMvW%2FD7%2FWsYL28&X-Amz-Signature=91340b1560423c17b385d9fcb9134ce4f0147ead9cca7ca25bfc4d0f506ed722&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
