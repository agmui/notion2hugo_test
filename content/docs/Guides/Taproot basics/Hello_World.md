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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3I6YIOF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9BhgBAE3Xu3SifzICXgSSatcdTkG%2Ba1YhqEad14zmDAiAY4fQk5rH0Ej6rnjb8SY9YVHgrehNpEnxsVGtUKqg3lSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM3NzYPVc6WlGqq9DGKtwDJAm85Inow9%2FLwMpTD1rmhq0ES5CS2IIgO8ApM5bh9N%2BxZKxRjGBviHVGgKfuxW8fKRmU10Ecv1OardX3lvp7SeL8YFo93oKYILoUWjDXdcwoF1c2WcJ6mOjc0LeoMqQHE1UWjrKeNCLLw1ZT%2B1INeN4r0KYuN5F%2FMmqZiLTPRSOrHdz%2BU4guRZL4Ee6baQKKW065f9FzvstEUEIfvgMylBrLf%2BuP%2FETiN7Ac0q45cCNK44%2FVaruB4k1CjoyKqEiisdbYu5KfKNmP9vaOhsIa7myBWro%2BveFUI52GVOLaI5d3efG8n5QmUQx1yC9WXRTLT3IFMWqSfzK1NXqY4xUP7zWCybJcBVLlxhxmp7AIKvOwjX1k%2Bo6eW3ggdUQU5xTi%2BU7%2FSmNMYWuRU3a2d1Jeq86EsJHH7OqjRNmQb%2FlOlCRSDzPffvlBz8tpLo6v0s5PNk1FjlTHr%2FHnw2Xc%2F54vkyEcULu3pnk%2Fv%2Fbl7oRxgVVxI%2ByO7W%2BMcMGho2VpbNQBuVCkJ%2FBxpH8SCfzPRXjcbldA6miYS0rxL%2BuNwxmI1ji75fgDX1einotR9WiLk0PDEvIQ%2FvSsyCdOohc2nvXwqW%2FdRAuQYaS4tpWSW7NTUrf9JRiIXGUsFKo5XOcwxImqwAY6pgHSChL8WOVytaAe0YWT8SR2f3DHW0Cu5iRqJMJAO1FAiaF1mZNI3KKuED2AVGevNwcnulozbhaTtGC49HdSUATz4OVFR2JC5d1mQyESTcVphi2dHczH7oGGM%2Fo0lBkk%2BJkwnz%2BFgkuIU5sTHaIf%2B1B2FOExn0bkuG1xWHoGwsqmGsYjOPWphvaVMFbUb5JBwQZrsLOk8UhUOeEL1g%2FaTnX3ufrCSo%2Fg&X-Amz-Signature=bf0f60903c349e90b981c751d947b8c1ddec860a33a22ca70b76433fbe64a7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3I6YIOF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9BhgBAE3Xu3SifzICXgSSatcdTkG%2Ba1YhqEad14zmDAiAY4fQk5rH0Ej6rnjb8SY9YVHgrehNpEnxsVGtUKqg3lSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM3NzYPVc6WlGqq9DGKtwDJAm85Inow9%2FLwMpTD1rmhq0ES5CS2IIgO8ApM5bh9N%2BxZKxRjGBviHVGgKfuxW8fKRmU10Ecv1OardX3lvp7SeL8YFo93oKYILoUWjDXdcwoF1c2WcJ6mOjc0LeoMqQHE1UWjrKeNCLLw1ZT%2B1INeN4r0KYuN5F%2FMmqZiLTPRSOrHdz%2BU4guRZL4Ee6baQKKW065f9FzvstEUEIfvgMylBrLf%2BuP%2FETiN7Ac0q45cCNK44%2FVaruB4k1CjoyKqEiisdbYu5KfKNmP9vaOhsIa7myBWro%2BveFUI52GVOLaI5d3efG8n5QmUQx1yC9WXRTLT3IFMWqSfzK1NXqY4xUP7zWCybJcBVLlxhxmp7AIKvOwjX1k%2Bo6eW3ggdUQU5xTi%2BU7%2FSmNMYWuRU3a2d1Jeq86EsJHH7OqjRNmQb%2FlOlCRSDzPffvlBz8tpLo6v0s5PNk1FjlTHr%2FHnw2Xc%2F54vkyEcULu3pnk%2Fv%2Fbl7oRxgVVxI%2ByO7W%2BMcMGho2VpbNQBuVCkJ%2FBxpH8SCfzPRXjcbldA6miYS0rxL%2BuNwxmI1ji75fgDX1einotR9WiLk0PDEvIQ%2FvSsyCdOohc2nvXwqW%2FdRAuQYaS4tpWSW7NTUrf9JRiIXGUsFKo5XOcwxImqwAY6pgHSChL8WOVytaAe0YWT8SR2f3DHW0Cu5iRqJMJAO1FAiaF1mZNI3KKuED2AVGevNwcnulozbhaTtGC49HdSUATz4OVFR2JC5d1mQyESTcVphi2dHczH7oGGM%2Fo0lBkk%2BJkwnz%2BFgkuIU5sTHaIf%2B1B2FOExn0bkuG1xWHoGwsqmGsYjOPWphvaVMFbUb5JBwQZrsLOk8UhUOeEL1g%2FaTnX3ufrCSo%2Fg&X-Amz-Signature=84c07a527405394b2db710d8228b10e5cc8361f45b1fd9b537108a16549dfe4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
