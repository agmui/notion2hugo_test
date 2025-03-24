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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HJ22JCI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtuPmt%2F4n4NG%2B3UBNP8sbjeL84ZTcmQWh6hyNgaMcXBAIgfoUYdSsuM41GaAG%2F6KpLWkO4lHCiTgGN0LMMcpgKX6gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvt95wGuL6FbPMPuCrcAylb9MBaVKEb35sOWQaLW0%2FkJ1iLIVd%2BJJFwQPzlpytziiQB9dVIJJvZVG1wI50ZA1KQZfukCKvsDX5LxivSLJf8joSvAyV9IW4uG2IKq3QuzLqr5n%2BHAr%2BDm7FJFDc6S7UjyXXsn2at4roZOZQ%2FCyR47%2BniapPslCAK4aCeGajdcQllanrBIFgBVY%2BnXq5FFnF3meNq%2BvIfiBBsuQasBid88ARKKUcwq%2FktADD1uIdebu8xvq53Df5%2Bh%2FvmE6zPxBVTpXS%2BVpsNkxSbF7gI%2F4mCrqB6OvXemso43gyFHhn9o0yZirsLS9XI6wjixzXnp2urf25Sp%2FWyzuGIKO3PFAnD51kso3HG3f1SUL6rkAkfNzK9t6fgiycyRkbiNnGH%2BSI2c4uJc%2Fk%2BT6432eE4u3rKfKWY4uFdJbhjCHSlcoUbPX40eLM7IOFa2F%2BTc8FmcRvSyi2Qk0EV1X8iixOC7j4QIuYMpw97uhAQP2H1yegfGPer8ouVPpq3%2BeTTdh2sPH9COlLChCWD7YKSXXYM9ZQTLkVpes4N76Xw%2BpMHSr8uKPzjJAXsM5ywVNyULkHX6VdHJHeHYgP0CKKL8zO5t4x8VMoWGVLcBIA5NCw7kfrQRxlOE%2FHr1g6CBUNDMK%2BPhb8GOqUByzsl%2B%2FyfJHYCaRH0JjjHIMgIaRnuhIayK9KyxroESu%2FoGCoci52E9M55uFcEBxWLPbgh9IsBHl6ekp0e515mz47KTV2Pcw%2FhUlWZTScqo3FNAsYZyEFqz5SOEaYc4DlYSFcPhrPbz8Hmhb1knmsupKsG6W%2B%2Bh7MU3j%2Bk5sInxPBQRWI7ZKPPPStWu9fLRJMgczPVvxvPxCxGw33JcsLTfuI%2BrOH8&X-Amz-Signature=cb8ac45076b1a7e16332b0c1931541912096fdf79c6fb44213e79ddc78edb83b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HJ22JCI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtuPmt%2F4n4NG%2B3UBNP8sbjeL84ZTcmQWh6hyNgaMcXBAIgfoUYdSsuM41GaAG%2F6KpLWkO4lHCiTgGN0LMMcpgKX6gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvt95wGuL6FbPMPuCrcAylb9MBaVKEb35sOWQaLW0%2FkJ1iLIVd%2BJJFwQPzlpytziiQB9dVIJJvZVG1wI50ZA1KQZfukCKvsDX5LxivSLJf8joSvAyV9IW4uG2IKq3QuzLqr5n%2BHAr%2BDm7FJFDc6S7UjyXXsn2at4roZOZQ%2FCyR47%2BniapPslCAK4aCeGajdcQllanrBIFgBVY%2BnXq5FFnF3meNq%2BvIfiBBsuQasBid88ARKKUcwq%2FktADD1uIdebu8xvq53Df5%2Bh%2FvmE6zPxBVTpXS%2BVpsNkxSbF7gI%2F4mCrqB6OvXemso43gyFHhn9o0yZirsLS9XI6wjixzXnp2urf25Sp%2FWyzuGIKO3PFAnD51kso3HG3f1SUL6rkAkfNzK9t6fgiycyRkbiNnGH%2BSI2c4uJc%2Fk%2BT6432eE4u3rKfKWY4uFdJbhjCHSlcoUbPX40eLM7IOFa2F%2BTc8FmcRvSyi2Qk0EV1X8iixOC7j4QIuYMpw97uhAQP2H1yegfGPer8ouVPpq3%2BeTTdh2sPH9COlLChCWD7YKSXXYM9ZQTLkVpes4N76Xw%2BpMHSr8uKPzjJAXsM5ywVNyULkHX6VdHJHeHYgP0CKKL8zO5t4x8VMoWGVLcBIA5NCw7kfrQRxlOE%2FHr1g6CBUNDMK%2BPhb8GOqUByzsl%2B%2FyfJHYCaRH0JjjHIMgIaRnuhIayK9KyxroESu%2FoGCoci52E9M55uFcEBxWLPbgh9IsBHl6ekp0e515mz47KTV2Pcw%2FhUlWZTScqo3FNAsYZyEFqz5SOEaYc4DlYSFcPhrPbz8Hmhb1knmsupKsG6W%2B%2Bh7MU3j%2Bk5sInxPBQRWI7ZKPPPStWu9fLRJMgczPVvxvPxCxGw33JcsLTfuI%2BrOH8&X-Amz-Signature=c63c8672b8b9ffc0c856c1402e32b49032b2d6b4bfeb9bb84824163bf535a9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
