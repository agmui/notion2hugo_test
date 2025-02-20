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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSM3KJL2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1z%2BFhAvZMGNTKqgUBO6JkrmcjcHXdrQBuzRAYD7XLXAiEA5ma7cyhO6lbzVXDi%2BTc3CzjQSbg6LVtwuMFi4rO%2FcOQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDF3v8BsRU214j0kCrcAwA78MRlgT1Qqj7sQLK3csNhBZTVG0Sz7yoEGd4ovOREAmFtARt0aoi8wQo2PrR7%2F8y3Lrhyxvhh0x5sIaiYMqfIjDf%2FWHnjI0vP5wS5ySN2KLYBTcZxMBOaiYJBzhGdtk9iZYtKkjOjaHepU0DK%2F5lCqhr2tyKEF3MoY0tSpjyAqOUh8je997UmyW2oE7uwqbcziC7QYMUyW521HTV6NTmSJfgRoVpdMwuE0rFE%2FiFAr9oHC9Tjk6fnbRGB1BnvUjtLN0kj%2FrOKl5V3jOhj7k30iSdecZAkIUk%2Bk0tcFQ8cLwx0TArcV7Xh%2B8h6GxH3verOdUxZR87v51NtJ68C%2Fkti0vLdnQCq0hj986x%2B67b63Zmr90bKyMfZpX2CyOg1dFXoCIpeUeOPGPbUgyG4tRjgkpzZM6U3O9ljsTYyA9e8%2Fz7E5rivklPA5dWlX1f1uyABjwcsB%2F9Z48RQZLxS%2BBZ1%2B0bYH7205VJloqyHLhMmUiiT7bvDD2gX6nVetumhEe3sCOTgYOXRSy796jmIF1d8YMyjmHpgSqbrVxbcCRwY0iWlRSsX5662LNjcVS2xwWGWweo1tCmAM%2Fqu%2FP%2FYLZLIDS6GGDQEZ9uq7AJEaICTIJypRCgi8E%2FaWMoGMNCN3r0GOqUBvEJUFvPNJDEV%2B2dTyIdA04lma1C2uZ6RG2rF6%2FhnDXo2aujqR%2BGPW0DBXuBuBCqJBqzscKpPACaX66xai%2FpV%2B3mK4x61G%2F%2F%2FRBPIrx7zYjH7xXUmOdIzesH1w1ZGjCV%2FBsDuNd8PJW7WYqHPS4ZKVSXond9tx7s6JbevXmahS9VbIoGpV%2BeKtUEo21IdaMxQDhgRJPclhMLkTr4NelM1wQ0JVnSt&X-Amz-Signature=9657836ef994bcb9d2b1f5bde76186a3bcd39d1534f995919af425c8befdd2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSM3KJL2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1z%2BFhAvZMGNTKqgUBO6JkrmcjcHXdrQBuzRAYD7XLXAiEA5ma7cyhO6lbzVXDi%2BTc3CzjQSbg6LVtwuMFi4rO%2FcOQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDF3v8BsRU214j0kCrcAwA78MRlgT1Qqj7sQLK3csNhBZTVG0Sz7yoEGd4ovOREAmFtARt0aoi8wQo2PrR7%2F8y3Lrhyxvhh0x5sIaiYMqfIjDf%2FWHnjI0vP5wS5ySN2KLYBTcZxMBOaiYJBzhGdtk9iZYtKkjOjaHepU0DK%2F5lCqhr2tyKEF3MoY0tSpjyAqOUh8je997UmyW2oE7uwqbcziC7QYMUyW521HTV6NTmSJfgRoVpdMwuE0rFE%2FiFAr9oHC9Tjk6fnbRGB1BnvUjtLN0kj%2FrOKl5V3jOhj7k30iSdecZAkIUk%2Bk0tcFQ8cLwx0TArcV7Xh%2B8h6GxH3verOdUxZR87v51NtJ68C%2Fkti0vLdnQCq0hj986x%2B67b63Zmr90bKyMfZpX2CyOg1dFXoCIpeUeOPGPbUgyG4tRjgkpzZM6U3O9ljsTYyA9e8%2Fz7E5rivklPA5dWlX1f1uyABjwcsB%2F9Z48RQZLxS%2BBZ1%2B0bYH7205VJloqyHLhMmUiiT7bvDD2gX6nVetumhEe3sCOTgYOXRSy796jmIF1d8YMyjmHpgSqbrVxbcCRwY0iWlRSsX5662LNjcVS2xwWGWweo1tCmAM%2Fqu%2FP%2FYLZLIDS6GGDQEZ9uq7AJEaICTIJypRCgi8E%2FaWMoGMNCN3r0GOqUBvEJUFvPNJDEV%2B2dTyIdA04lma1C2uZ6RG2rF6%2FhnDXo2aujqR%2BGPW0DBXuBuBCqJBqzscKpPACaX66xai%2FpV%2B3mK4x61G%2F%2F%2FRBPIrx7zYjH7xXUmOdIzesH1w1ZGjCV%2FBsDuNd8PJW7WYqHPS4ZKVSXond9tx7s6JbevXmahS9VbIoGpV%2BeKtUEo21IdaMxQDhgRJPclhMLkTr4NelM1wQ0JVnSt&X-Amz-Signature=8b3b50eded5678f0e0ae46baf9bbdd724e1e47e7fe0a6198a3b8cb7570e96b26&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
