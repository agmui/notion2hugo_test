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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667WI26EA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC3hlAkbE8Y%2FxK9ODRLPvpicAh%2FD43BhGhlo7jbp3X%2BdgIgb5xpqDoLzHEbxA4byWNi3n%2Bzo06786QuyRz5k8cFZNcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe1fov%2B2suzyXiv%2FCrcAyAxYTJ0W6W6fgYJwtDFHufSy08x2h2EAtqCPdnzYA2L985XF6CpvO0iIs230U3Ovx1XgG5TRZPAzA7I9TsF0GtHBMHQI5KEFDKZnfW7zB%2FuKmjjYu8sqSCzuyewpkkw5Hba7DzsB3u%2BgkAe6mcou%2B7eBaG8IGJ02Tu1yE46U6M%2BgJj7tSedJSmCCjmmKrwKlGu7DDRWTvZRRr4EBSfAC37GP7ToBLfBQ7bXN0c4Wz6CuCT3pzlk4gheXajumOADxQOy544wMS9HK%2BBs62bKbociknA0BHACMdetR3WRjVaIgHptIWOCSxCiIVPuvteOrFw9kthminGO70lzjIcRQTw2nowDNnl9iabOceHJdGhTjXSGbSQREPnZEo0zkpmGwWZVDnh5wpIP%2FJmQVxcD0brgz3YTclXIy83X%2B1la8Vu3kTwJ1rePhqInsks%2FIlNOtu%2BeqhEa8YdeVCA%2F%2Bt35YIBibwj60oSSbRPVYVn81X%2FjA8RDpd%2F%2FIZ%2BR8nkipCv4fgNX%2BwDR5kagyaUz3j%2FNIicg%2FlzOMNgXCLlh%2FYf6x%2B9%2F6NBLYMZLgAmhvu%2BPSSGIL9bD2ONdca2Y%2FQIjtFU6FAYw2O1byb5m1fUttnLErLYzvtFKSQ2TLm6M006XMNOBkcAGOqUBCEGKeBw23nXE4Oc5w53%2BA%2BQXAbfZB2m%2F231NQA0I4fy8Bf998LqeYM%2FYobyyXZ2GW2noHlXg%2BmNIN0vbVffKAFt4mAjgUWWFVkH4yzYEOsnsEw3mNdayNGDOiA0WVG%2BATcMEwUUlV8c5Go5x%2FLTUg%2F5I3Yeqnew1hRNITq%2BNoGo1Wiy57D1XP5Mg68bkIBgT2jq2R5piquFUqXyuhxjiEi0x%2FlyT&X-Amz-Signature=f1d2c2d6bac2640ef4dad67c418357ffcf73f9431b15242d126b7776d8d91c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667WI26EA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC3hlAkbE8Y%2FxK9ODRLPvpicAh%2FD43BhGhlo7jbp3X%2BdgIgb5xpqDoLzHEbxA4byWNi3n%2Bzo06786QuyRz5k8cFZNcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKe1fov%2B2suzyXiv%2FCrcAyAxYTJ0W6W6fgYJwtDFHufSy08x2h2EAtqCPdnzYA2L985XF6CpvO0iIs230U3Ovx1XgG5TRZPAzA7I9TsF0GtHBMHQI5KEFDKZnfW7zB%2FuKmjjYu8sqSCzuyewpkkw5Hba7DzsB3u%2BgkAe6mcou%2B7eBaG8IGJ02Tu1yE46U6M%2BgJj7tSedJSmCCjmmKrwKlGu7DDRWTvZRRr4EBSfAC37GP7ToBLfBQ7bXN0c4Wz6CuCT3pzlk4gheXajumOADxQOy544wMS9HK%2BBs62bKbociknA0BHACMdetR3WRjVaIgHptIWOCSxCiIVPuvteOrFw9kthminGO70lzjIcRQTw2nowDNnl9iabOceHJdGhTjXSGbSQREPnZEo0zkpmGwWZVDnh5wpIP%2FJmQVxcD0brgz3YTclXIy83X%2B1la8Vu3kTwJ1rePhqInsks%2FIlNOtu%2BeqhEa8YdeVCA%2F%2Bt35YIBibwj60oSSbRPVYVn81X%2FjA8RDpd%2F%2FIZ%2BR8nkipCv4fgNX%2BwDR5kagyaUz3j%2FNIicg%2FlzOMNgXCLlh%2FYf6x%2B9%2F6NBLYMZLgAmhvu%2BPSSGIL9bD2ONdca2Y%2FQIjtFU6FAYw2O1byb5m1fUttnLErLYzvtFKSQ2TLm6M006XMNOBkcAGOqUBCEGKeBw23nXE4Oc5w53%2BA%2BQXAbfZB2m%2F231NQA0I4fy8Bf998LqeYM%2FYobyyXZ2GW2noHlXg%2BmNIN0vbVffKAFt4mAjgUWWFVkH4yzYEOsnsEw3mNdayNGDOiA0WVG%2BATcMEwUUlV8c5Go5x%2FLTUg%2F5I3Yeqnew1hRNITq%2BNoGo1Wiy57D1XP5Mg68bkIBgT2jq2R5piquFUqXyuhxjiEi0x%2FlyT&X-Amz-Signature=a7bf1c66fecb4a2a4645b94fcd0a9cf887425a1dbd8d810797dde79df93ffad7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
