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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDXOLSS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICy0w9z1tn5GGxzJ%2Bk%2BVkO7jRUquYlg6Lvz81WVSM0tpAiBMP9ZuiU%2Boxk3Q%2Fr3z6stfil%2BgPUw9Lp05jCNC4ILpeSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B%2BH3jKGbX%2Bm1PHavKtwDI6ilOQAtKQLwiuxp24%2B9fQy0vR2eNE3V15KKqAY2fC7pXoRDHDfNxp%2F7fCwBjXppAONBSvhHe%2Fd8YH2a1hgOjerkg3snV1W3q7oDy2O8tOQCrsE75%2BkWPvmku8UCl8BQ45iwPOolkH9AoSsRr8PIzNymRsWW2VLvBGHl%2FHJHBndvosFcHUAFBlGIhsjc98T1te5NyGqzxSgVMSM1lD6bnMmmie%2BYVMbAYLEKMNNfEPr9n9O%2BKp%2FH%2BRIkZiaUVM80fa9xcbkKi6WMO6goF1JMOa3MI%2BK25XuLcZJTsQ%2B2cJxklFqEEqct8x%2B39WJZ6jXd0Ct0AUhLc0sGh8wjyrILYELfKWf4Iztoavn1u55Hpi1DcaDJG%2BX6vU%2F5gf2tlYoE17swf89t98fBIgGmapjDKeJ0ACF8nB3x7kOWW8z2%2Bqjvd11GGAIPM%2FnmkDMPJWCQXvSqTYwCXMQg6hAs4uClxh8yalB5iVQonUbROlUMrIJhPsrniWXc8hkaKsxduQYj1KutIuA8Tw4gQXU3vrchyWv10Mh4e0ezUosHVExMLVAgqQmAnnloyabjiEC%2BjIOSuSWLdnK%2BpfYYTwo1VkZ0rG51A2LjONoIdH4KT%2FbSHj8T8vCsaKIFdjLQO0Uw5caKwQY6pgHGeqnW%2Bb3RXe64WMg5z3KCWeC4ZdQ5EcI%2Fi7OiERFKsPdmGoZlVT7Uj%2FZvRMBAtvoj5dJg3MJ4IKpi8ZtMIRgZlBc1Jo3pDyJQtBuJwZbMZdvguLtwv%2F%2BguZtm1GP%2BSD4ywM%2Fs98kTgPe0JEqdcQ3gnvK1yVZxcu2HiVYRKKrMOGbST%2FTKkOZzCFyFVmXhvQf7EqBTGQdoD%2F518aTouQq5wVHAW5TG&X-Amz-Signature=199f5b1fce77c0403dc58f33fd6a81a249a564f6d7946c2fabc72840ba8e663a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDXOLSS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICy0w9z1tn5GGxzJ%2Bk%2BVkO7jRUquYlg6Lvz81WVSM0tpAiBMP9ZuiU%2Boxk3Q%2Fr3z6stfil%2BgPUw9Lp05jCNC4ILpeSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B%2BH3jKGbX%2Bm1PHavKtwDI6ilOQAtKQLwiuxp24%2B9fQy0vR2eNE3V15KKqAY2fC7pXoRDHDfNxp%2F7fCwBjXppAONBSvhHe%2Fd8YH2a1hgOjerkg3snV1W3q7oDy2O8tOQCrsE75%2BkWPvmku8UCl8BQ45iwPOolkH9AoSsRr8PIzNymRsWW2VLvBGHl%2FHJHBndvosFcHUAFBlGIhsjc98T1te5NyGqzxSgVMSM1lD6bnMmmie%2BYVMbAYLEKMNNfEPr9n9O%2BKp%2FH%2BRIkZiaUVM80fa9xcbkKi6WMO6goF1JMOa3MI%2BK25XuLcZJTsQ%2B2cJxklFqEEqct8x%2B39WJZ6jXd0Ct0AUhLc0sGh8wjyrILYELfKWf4Iztoavn1u55Hpi1DcaDJG%2BX6vU%2F5gf2tlYoE17swf89t98fBIgGmapjDKeJ0ACF8nB3x7kOWW8z2%2Bqjvd11GGAIPM%2FnmkDMPJWCQXvSqTYwCXMQg6hAs4uClxh8yalB5iVQonUbROlUMrIJhPsrniWXc8hkaKsxduQYj1KutIuA8Tw4gQXU3vrchyWv10Mh4e0ezUosHVExMLVAgqQmAnnloyabjiEC%2BjIOSuSWLdnK%2BpfYYTwo1VkZ0rG51A2LjONoIdH4KT%2FbSHj8T8vCsaKIFdjLQO0Uw5caKwQY6pgHGeqnW%2Bb3RXe64WMg5z3KCWeC4ZdQ5EcI%2Fi7OiERFKsPdmGoZlVT7Uj%2FZvRMBAtvoj5dJg3MJ4IKpi8ZtMIRgZlBc1Jo3pDyJQtBuJwZbMZdvguLtwv%2F%2BguZtm1GP%2BSD4ywM%2Fs98kTgPe0JEqdcQ3gnvK1yVZxcu2HiVYRKKrMOGbST%2FTKkOZzCFyFVmXhvQf7EqBTGQdoD%2F518aTouQq5wVHAW5TG&X-Amz-Signature=5518261e1030b0684ae2dd49d7baa777b8bb5072584e78e656e70938c17e76a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
