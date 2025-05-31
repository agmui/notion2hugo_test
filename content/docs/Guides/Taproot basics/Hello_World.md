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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRX3SKR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdoYt1rsZI2KqkOD1VytJh9APK3x2KnAh3uIlCq0HPTgIgO%2FC%2BTFVv1bTgI6p9mJB97RrFFoUu68IQqv0iKLKsLh8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt3Ne2XIDUzxvRuSSrcA2yxrQoaSlX9rVugJxd06JSy2Xebt98t5fU2rBtICUX864YdmFt4eN1wyMj7m3nLNPrDwGnRSICP4%2BZtk7ic4xaQYesI3GzZRKnLgs9JvI3w5uDl%2F0FIi13yB9aBgCCjGnCQfktoUd9YY%2FYdQTlElNqrjYhYstIvp3nHnctO0DzWzdvM5odLGscDVWk9dWkgc0eyQvscMwDjnyCqFk3ki4THVWxnLmkOdTgR3dwXVvsohwxpxWA3MVqM0mtKYJ5OzjgCy4vD8shlOQdG2RN9FEJludd%2BJmNlPNzMqlg%2F6JnBRhVmlpTTdqR8Nd7zTMsZWDs%2BLR5fs6Ufbl%2BdJK5QPuC9xsgxdtUXaheIlAxvWrWqhdb3o7%2FyU6awYjevNh1kAfJ1FzK1SLzvYBPQg8hS4CMlDYaHtpm7t6wJmCuCZM8EuMc5ZjRIGa4wTtEELGgWVFGdFgABRVzvmUH%2FNwlxMOnQEO9j2VvYq%2Bgc%2B8nGlaZHVahtvb%2BUmxhejeBAuogmaVMwWfRlHvXHGcJY2qevtCSLz0amhANy21lv1PNWwAL7%2Bm8g3kpmmXy%2BAZMiNax7z5PbR5FqeR%2BclKZEF2uYhg%2FPx1TGgAVyO5ckfNMif%2FUfgBCqYth55ECsFYkmMP6D68EGOqUBtKeBXmmg63qR5LeSsavkaC0Kml%2B4xw%2BIjN8jkfKyb%2FX9zculCdPmPjG9P2fNpDaOqZmcts7ZjxH6tpgP4iFBNmErSlDoMg78UmcaL4Q%2BIk6rLx242eAhAnnbBzZHuZAYhrT7zFSNeH7zEO2MhIYrknA27o6MumGJfCvCQeaTkrm%2Frdm%2BmVJkp%2BDcFAXToJy93Pvf20i8268M3k246OlEFe%2BX%2FJXs&X-Amz-Signature=f4e67c83e711c4f87dee7dc810ad9d71e55c4e89b345bd9b5de92b923d6b3d41&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRX3SKR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdoYt1rsZI2KqkOD1VytJh9APK3x2KnAh3uIlCq0HPTgIgO%2FC%2BTFVv1bTgI6p9mJB97RrFFoUu68IQqv0iKLKsLh8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCt3Ne2XIDUzxvRuSSrcA2yxrQoaSlX9rVugJxd06JSy2Xebt98t5fU2rBtICUX864YdmFt4eN1wyMj7m3nLNPrDwGnRSICP4%2BZtk7ic4xaQYesI3GzZRKnLgs9JvI3w5uDl%2F0FIi13yB9aBgCCjGnCQfktoUd9YY%2FYdQTlElNqrjYhYstIvp3nHnctO0DzWzdvM5odLGscDVWk9dWkgc0eyQvscMwDjnyCqFk3ki4THVWxnLmkOdTgR3dwXVvsohwxpxWA3MVqM0mtKYJ5OzjgCy4vD8shlOQdG2RN9FEJludd%2BJmNlPNzMqlg%2F6JnBRhVmlpTTdqR8Nd7zTMsZWDs%2BLR5fs6Ufbl%2BdJK5QPuC9xsgxdtUXaheIlAxvWrWqhdb3o7%2FyU6awYjevNh1kAfJ1FzK1SLzvYBPQg8hS4CMlDYaHtpm7t6wJmCuCZM8EuMc5ZjRIGa4wTtEELGgWVFGdFgABRVzvmUH%2FNwlxMOnQEO9j2VvYq%2Bgc%2B8nGlaZHVahtvb%2BUmxhejeBAuogmaVMwWfRlHvXHGcJY2qevtCSLz0amhANy21lv1PNWwAL7%2Bm8g3kpmmXy%2BAZMiNax7z5PbR5FqeR%2BclKZEF2uYhg%2FPx1TGgAVyO5ckfNMif%2FUfgBCqYth55ECsFYkmMP6D68EGOqUBtKeBXmmg63qR5LeSsavkaC0Kml%2B4xw%2BIjN8jkfKyb%2FX9zculCdPmPjG9P2fNpDaOqZmcts7ZjxH6tpgP4iFBNmErSlDoMg78UmcaL4Q%2BIk6rLx242eAhAnnbBzZHuZAYhrT7zFSNeH7zEO2MhIYrknA27o6MumGJfCvCQeaTkrm%2Frdm%2BmVJkp%2BDcFAXToJy93Pvf20i8268M3k246OlEFe%2BX%2FJXs&X-Amz-Signature=0a5c77c6bbd3c4738daced2e7c1408f275aec99d84741a2d5451f57a7a686d28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
