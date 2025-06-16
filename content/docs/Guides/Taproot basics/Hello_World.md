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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEP5CW4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIG8%2BHsSDrXIqsYWv3k%2BzS3CQZ%2B8dhmiLQOaOhUD%2BFHpsAiBrsE%2B648AScunMGR1Crohc8jvZCOMxfBLNRMJXXVNi2Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMVbgg%2BFubcJo6nuK6KtwD7b34sLy%2B5idDT31HX%2BkBN7gw%2BkMkdJ%2FEexDhr7VbQHfPiXOfHsph%2FzC8K85dCJKNYdQ45jJRTMnOoF%2Fo4iUXhB9vS3B94iULDyi%2BsDEWn5A5RwsWRYO7ccSkfZvm1YDtb4ld1lZb0EqoW0x0p3zW7eLg2eHaiWrC2sPyAet97u76HRCY5MiB7ZeXdOe7gMNG5nChWuz3%2FPuM4p5UorUwTEXIOObzR%2FfJsQRCwPI9gRO35gBUsj2LpKF7%2B%2BceJxuJ2TZCE48%2FloFeBItJNlsCBcAw%2F67Bfg94%2BEbIEsXPNYiwyY2FZQXFROw2Vy1gaGWoKHf6z1SbuztKmP9L0CvTltb6Cgn8FjK%2BHMIJiZgCPqfDflO%2Fd8Q5PnytGRGWke5bUhbc7e8i7QGoQQMtPo2NznVCrEqokALgM2MJ0g%2Bnq5pkQPLoXT4Bb3BTAybjoajIpMStZ9HDcotuJBpMG%2Fri4GXudlNSkTgsvS1tgt%2BfGKi0JpkQEuOr9Vz40pDE4QBTPH8jA0u%2Fdin%2B0rM00dqA9559p3RzaimvdAp%2BsdQ8dGNIDvtZfJMYU1vh2Yl%2B8UCJNevhEGZFpz6r4A1iIF1x%2BDOC6AVUz2iZhw7sSY2zjlTPeaLQFQH55ZGBcv4wv%2BO%2FwgY6pgHM7VnIWwbBHj5I7Wjcr3YpiidlR0TYi8mDvr%2Ff1cVGXbhsfn%2B7ZfZRSvqFebggmlXYIfhYey6cZm%2F3Lx4vlSa4jkDqBUOkMm3qxbx6rWLVTitj8Fa3%2FfdPzwxSt7lNGkNfoHxZF5SAWCR6HIMhDKWqckO1%2BfK31l2JzAfw3QAZ4nMXB%2FlOHrt%2Bc1OQ9Zh8ROHIRd%2BawlYFiX3GNqitjO88o7qsjOs5&X-Amz-Signature=4713e5c137e9c9e0fd58c3072ed8140d809f33898211515fcf0d8ae516b6409a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEP5CW4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIG8%2BHsSDrXIqsYWv3k%2BzS3CQZ%2B8dhmiLQOaOhUD%2BFHpsAiBrsE%2B648AScunMGR1Crohc8jvZCOMxfBLNRMJXXVNi2Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMVbgg%2BFubcJo6nuK6KtwD7b34sLy%2B5idDT31HX%2BkBN7gw%2BkMkdJ%2FEexDhr7VbQHfPiXOfHsph%2FzC8K85dCJKNYdQ45jJRTMnOoF%2Fo4iUXhB9vS3B94iULDyi%2BsDEWn5A5RwsWRYO7ccSkfZvm1YDtb4ld1lZb0EqoW0x0p3zW7eLg2eHaiWrC2sPyAet97u76HRCY5MiB7ZeXdOe7gMNG5nChWuz3%2FPuM4p5UorUwTEXIOObzR%2FfJsQRCwPI9gRO35gBUsj2LpKF7%2B%2BceJxuJ2TZCE48%2FloFeBItJNlsCBcAw%2F67Bfg94%2BEbIEsXPNYiwyY2FZQXFROw2Vy1gaGWoKHf6z1SbuztKmP9L0CvTltb6Cgn8FjK%2BHMIJiZgCPqfDflO%2Fd8Q5PnytGRGWke5bUhbc7e8i7QGoQQMtPo2NznVCrEqokALgM2MJ0g%2Bnq5pkQPLoXT4Bb3BTAybjoajIpMStZ9HDcotuJBpMG%2Fri4GXudlNSkTgsvS1tgt%2BfGKi0JpkQEuOr9Vz40pDE4QBTPH8jA0u%2Fdin%2B0rM00dqA9559p3RzaimvdAp%2BsdQ8dGNIDvtZfJMYU1vh2Yl%2B8UCJNevhEGZFpz6r4A1iIF1x%2BDOC6AVUz2iZhw7sSY2zjlTPeaLQFQH55ZGBcv4wv%2BO%2FwgY6pgHM7VnIWwbBHj5I7Wjcr3YpiidlR0TYi8mDvr%2Ff1cVGXbhsfn%2B7ZfZRSvqFebggmlXYIfhYey6cZm%2F3Lx4vlSa4jkDqBUOkMm3qxbx6rWLVTitj8Fa3%2FfdPzwxSt7lNGkNfoHxZF5SAWCR6HIMhDKWqckO1%2BfK31l2JzAfw3QAZ4nMXB%2FlOHrt%2Bc1OQ9Zh8ROHIRd%2BawlYFiX3GNqitjO88o7qsjOs5&X-Amz-Signature=86da1e60305f5a471c0b9028518047767a155e72dcdf7a91ac0d25432d6f8011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
