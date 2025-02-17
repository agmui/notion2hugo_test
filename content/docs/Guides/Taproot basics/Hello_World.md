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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPP53IEF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHoRxItYonKFZLps9swW9u4zdxUdJJRHjsnSGFSpb9JQAiEAovSpwilDofrCDJ5UOc6jy6pSV6TR0RNU%2BKxfeSk%2B%2Ff0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOSvxD7FdrhFPjpieSrcA6NHmlEzMPUsCphQX93mH3WLVbCIxbKpMdQNToBxP2Mw5%2FaooD3%2F5YbU0xAYqVa8vxAF7K9%2BWnHVV1Jt%2BX5OPko9mEhSM3bynd%2By8tP5UZKE%2FguQtmveBNmyRk49JyMpk0Mp%2FXm0ySFB41gs%2B1ZcdWG4WRhQqP%2BSgztC90gfHv7DIUDT3MPizNpgc1v7wfItCP2xFbemivfOOCysSYN%2FrRb%2FIJeHMr%2BWvnlPxpRNcIDKsrACmxNbCeWR%2BdLvFvG9Din8SvbHxGLDAKlu6fkXaA0bJ%2BO7fuGChILIVV08wqfREEcaHf7xe6lfzKAxnoBamjBUrkL7natXXgC7sMELpzZqLMnbV0FRvWPogfakb3VJWzIeu7sxJz70x1oM2Ee%2BeMvo5qSKd0WbQrRLu8aLJqDvVHWjOZwEsgHiKzmLq84Azp80tqdftN1EwR%2BvJBsgUjOiK7656F4wb90i7RCgqAiMWwY7XdxP6D9eSnSGS%2FRfwC9%2Bv0JfnBgoZk4za78T%2B5DzzkjFuUtNcNp7cYwOAestSSvVxB5z4pWHMhvrCUha3g0rjBPH8noSFcuGfQ6Bu1vGfVTPdvY4Whdi8h5F4C30%2BIy5Ve%2BKmI5Z2Bg%2BmGlnYhzxxzx4zT0nKEDeMInOy70GOqUB6sqS%2BFUbmg5z6N4GP3qOSy3%2BqZW2tNV%2BFRT9dWGUbdhHQYIIaebLsaXtsn%2F3p2PqnTZK4SbzqdjLz4ApkvAcF3GrceCiHJ3ukRiV%2FnK1oMchKgAL%2Fzo5TmZv4zHF47yJTfPg6i3BTnRg7mg3ZBn53oLJFbxnHPvLvy87s0yVyOoThJ%2FntZbcCtn7mdDJ1O71ZZxB97X6UoXGgvtC3u0pi65or3W7&X-Amz-Signature=bea1981ad47151bdd2a8c125306ce324a848444a283dece4d00a27999b98010c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPP53IEF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHoRxItYonKFZLps9swW9u4zdxUdJJRHjsnSGFSpb9JQAiEAovSpwilDofrCDJ5UOc6jy6pSV6TR0RNU%2BKxfeSk%2B%2Ff0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOSvxD7FdrhFPjpieSrcA6NHmlEzMPUsCphQX93mH3WLVbCIxbKpMdQNToBxP2Mw5%2FaooD3%2F5YbU0xAYqVa8vxAF7K9%2BWnHVV1Jt%2BX5OPko9mEhSM3bynd%2By8tP5UZKE%2FguQtmveBNmyRk49JyMpk0Mp%2FXm0ySFB41gs%2B1ZcdWG4WRhQqP%2BSgztC90gfHv7DIUDT3MPizNpgc1v7wfItCP2xFbemivfOOCysSYN%2FrRb%2FIJeHMr%2BWvnlPxpRNcIDKsrACmxNbCeWR%2BdLvFvG9Din8SvbHxGLDAKlu6fkXaA0bJ%2BO7fuGChILIVV08wqfREEcaHf7xe6lfzKAxnoBamjBUrkL7natXXgC7sMELpzZqLMnbV0FRvWPogfakb3VJWzIeu7sxJz70x1oM2Ee%2BeMvo5qSKd0WbQrRLu8aLJqDvVHWjOZwEsgHiKzmLq84Azp80tqdftN1EwR%2BvJBsgUjOiK7656F4wb90i7RCgqAiMWwY7XdxP6D9eSnSGS%2FRfwC9%2Bv0JfnBgoZk4za78T%2B5DzzkjFuUtNcNp7cYwOAestSSvVxB5z4pWHMhvrCUha3g0rjBPH8noSFcuGfQ6Bu1vGfVTPdvY4Whdi8h5F4C30%2BIy5Ve%2BKmI5Z2Bg%2BmGlnYhzxxzx4zT0nKEDeMInOy70GOqUB6sqS%2BFUbmg5z6N4GP3qOSy3%2BqZW2tNV%2BFRT9dWGUbdhHQYIIaebLsaXtsn%2F3p2PqnTZK4SbzqdjLz4ApkvAcF3GrceCiHJ3ukRiV%2FnK1oMchKgAL%2Fzo5TmZv4zHF47yJTfPg6i3BTnRg7mg3ZBn53oLJFbxnHPvLvy87s0yVyOoThJ%2FntZbcCtn7mdDJ1O71ZZxB97X6UoXGgvtC3u0pi65or3W7&X-Amz-Signature=9d28dda7c008b01337f92c5a49dbc7fd4fd6f58263fd5cfc3ae929c5e2391864&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
