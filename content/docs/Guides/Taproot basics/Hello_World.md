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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKMAAAE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBEbUOrlGc9Rw%2Fvzg30VsGy2aMnC07z8D6nM3oxd5DiXAiBH189aju8ql7Pp1pk%2BHfUIoJAuude7tLWWmTOw3TbIPir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMrZD%2FFJZCHVFZyXBaKtwD0%2FqRn5ApAYvF5PbQP9Csk5%2FkifFnKS3Quh1EdW6nE4dQHUtC4GNaYVsmByhVCFxfLOzNpyOWBqi7SetjGi3ueCPOiN5UF%2FvaqawDsr%2BxlKEeZSkYZZp0TT9gA5brn5zw67Bse%2Bg9MONgyPT1cAfLEYOJZqvYqV%2FIPZl3bVsBC1tNe4OLrSKWmoWQT%2BCeWeOU6DREmlxV0t0psGZb2T5ne2VYxZx98d%2BVuZ4iHfwbMHHNeCh2BUX1STYr6Uz2pQivr9sU1EhtlXVvkPGHZcYjYWg%2FsTEc9UuTkE7Tv57wgDvYKl%2BLc1XkAupcKh1M9VgkVN7HU9QhB6bF8GWaaVU70%2Fd6Xy%2FGfWhPGd%2B5OcDap4ri3nKUcME3gqWWDu4nnRU5Mt0cWVRHBflXZ7hXdrAVfug4oeeKNwhXy22fRVBDTE%2FlMcU%2FSDQ%2BR3xc%2BNY%2F9tLH0IhuB%2FUOLcJQ8oKgiAaxs5w5igpf%2By97GSfB4u4XItD9ZbiE5Xhk9EkbCrE5lB5EbvnA1q69Rnk2YUalqwifvzB3zrS9rZW9rjdpWkYYyupfwDdz6S8%2BJe76wfB%2F2CwgE092WHEtUGEG6HAKjzf6OlAxcBUDGka%2Fr%2BugQj%2Fyik8LEwLSqQ%2BzN8AJyFowypufwwY6pgFJzeVWxz9bLV1RFnSG6HhhDev9dldxSO0bpSjJ7b%2Ft9C1Kj5h%2FAv%2FA2Nsknovtyi9acdcWIE6xc73qHEnIgu5cVzicZQy8I8zhSOvK4om1uaWprJuyliS2EPPxq8VRf8btsMHoc6zAR47ZpoGCxke1QlyAi8u1VXQpV6ahqJyHhKPwX%2FOkQU4J07kjU24EgzlSYG7CaqKl2b9g4onk8UNY02RH5JeB&X-Amz-Signature=c0a2537c8212b9806c03d50a2638245380dc63db03a299dba1a7c54956fbe44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKMAAAE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBEbUOrlGc9Rw%2Fvzg30VsGy2aMnC07z8D6nM3oxd5DiXAiBH189aju8ql7Pp1pk%2BHfUIoJAuude7tLWWmTOw3TbIPir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMrZD%2FFJZCHVFZyXBaKtwD0%2FqRn5ApAYvF5PbQP9Csk5%2FkifFnKS3Quh1EdW6nE4dQHUtC4GNaYVsmByhVCFxfLOzNpyOWBqi7SetjGi3ueCPOiN5UF%2FvaqawDsr%2BxlKEeZSkYZZp0TT9gA5brn5zw67Bse%2Bg9MONgyPT1cAfLEYOJZqvYqV%2FIPZl3bVsBC1tNe4OLrSKWmoWQT%2BCeWeOU6DREmlxV0t0psGZb2T5ne2VYxZx98d%2BVuZ4iHfwbMHHNeCh2BUX1STYr6Uz2pQivr9sU1EhtlXVvkPGHZcYjYWg%2FsTEc9UuTkE7Tv57wgDvYKl%2BLc1XkAupcKh1M9VgkVN7HU9QhB6bF8GWaaVU70%2Fd6Xy%2FGfWhPGd%2B5OcDap4ri3nKUcME3gqWWDu4nnRU5Mt0cWVRHBflXZ7hXdrAVfug4oeeKNwhXy22fRVBDTE%2FlMcU%2FSDQ%2BR3xc%2BNY%2F9tLH0IhuB%2FUOLcJQ8oKgiAaxs5w5igpf%2By97GSfB4u4XItD9ZbiE5Xhk9EkbCrE5lB5EbvnA1q69Rnk2YUalqwifvzB3zrS9rZW9rjdpWkYYyupfwDdz6S8%2BJe76wfB%2F2CwgE092WHEtUGEG6HAKjzf6OlAxcBUDGka%2Fr%2BugQj%2Fyik8LEwLSqQ%2BzN8AJyFowypufwwY6pgFJzeVWxz9bLV1RFnSG6HhhDev9dldxSO0bpSjJ7b%2Ft9C1Kj5h%2FAv%2FA2Nsknovtyi9acdcWIE6xc73qHEnIgu5cVzicZQy8I8zhSOvK4om1uaWprJuyliS2EPPxq8VRf8btsMHoc6zAR47ZpoGCxke1QlyAi8u1VXQpV6ahqJyHhKPwX%2FOkQU4J07kjU24EgzlSYG7CaqKl2b9g4onk8UNY02RH5JeB&X-Amz-Signature=25f850f6353c8123b5bc08c6d13a5afec0ed8a7748af111089e4f32938eb3031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
