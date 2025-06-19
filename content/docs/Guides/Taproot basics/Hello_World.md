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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCCFBBA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRoWkO7AlyfXV47vsoCB7Jpzi4%2BuBjIQzdEAXcuqORvAiBUw5j4MmocieDTA7GuUSEhKPHjejv8rkAHrOKmIB0vACqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUrQecqa9BVfC93%2BeKtwD6doE%2BEWrGaMADOQzB9hpwT5MhZsXELmaasWhAFlzlAb6p3wLHclW0wNZjNBgA%2FdpQrT%2F%2Bu7Th6xocZe7tmrwGquTVVKLvXN%2FSwFXs2HfJoWTUVpfUVWSuD0C9nBENMSrLVwVNLrFDXiyG7fLXZhdkcnajlR0CMSY5tYN6k%2FcbPbNYMpseX%2F%2FK0K7SWCiRADsROQ3fw%2BIs56%2FuYKsoU%2FXIxuqRWNjnhIaKQI%2FOMX5VAwLLDHKy6%2BeUmQdiRuGbiaiG486HJ2uM%2F9ujgs1%2BPgX9UKD%2FKsGUFo936DOWecoN%2Bx2DeWTqVTSrVhlQ5Kmw17Wt4LAxwGLzYhG70uCnc6SEmY6XwJMPNCv4gBm3%2BBDIRcPytXsMYJCeamtuI%2Btg%2FPqUnSgdm%2B2c12RgOnpXIiORX6I9f6%2FOr4CRiMqktRQk19ZNVtsQvHkA3qLci9G3v1cihI54dQOl8Cp7fpoSfv9w6SyT%2B3GC4nq2QHKrHQs%2F0RZBxKn3q3UbIjVedClrTfGQ2VrvK1aro8wlyjEyQ0g3xTUH3i71sxD%2F9fcC58GiLciArdETSYMLZjK%2Biyeq2kQg6Qxz8CBYAgOZ6ICMnT1Mjap7A10Sn6M%2Bk%2FeQsh0rNUffqGAt9LOK3ApEW0ws7bRwgY6pgF%2FNiK%2BLSK6S9LsfxPrbllH7%2BPlUrcG6vmZeogd9%2BxWVLKFHiY6GwSuDM1c13SUEfcCXeSlz87TC%2Bbh3DukChvPqdgr2mqkpPOZcifl1CRaiFqFzQ%2BVkgeimUgsfxGKDIAMTWuA6tN1sPi38N7DXJpAUfIfMOtm4eHjwHz9XBQlx2wBB9YE6c4PU1EhLnv6CIH6SRk16cB4I71V%2FboTn7D4cMIpf4C2&X-Amz-Signature=4b46497515d52d5680853347e202611ca22fb7708a2923b639cf1d5e30f416c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCCFBBA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRoWkO7AlyfXV47vsoCB7Jpzi4%2BuBjIQzdEAXcuqORvAiBUw5j4MmocieDTA7GuUSEhKPHjejv8rkAHrOKmIB0vACqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUrQecqa9BVfC93%2BeKtwD6doE%2BEWrGaMADOQzB9hpwT5MhZsXELmaasWhAFlzlAb6p3wLHclW0wNZjNBgA%2FdpQrT%2F%2Bu7Th6xocZe7tmrwGquTVVKLvXN%2FSwFXs2HfJoWTUVpfUVWSuD0C9nBENMSrLVwVNLrFDXiyG7fLXZhdkcnajlR0CMSY5tYN6k%2FcbPbNYMpseX%2F%2FK0K7SWCiRADsROQ3fw%2BIs56%2FuYKsoU%2FXIxuqRWNjnhIaKQI%2FOMX5VAwLLDHKy6%2BeUmQdiRuGbiaiG486HJ2uM%2F9ujgs1%2BPgX9UKD%2FKsGUFo936DOWecoN%2Bx2DeWTqVTSrVhlQ5Kmw17Wt4LAxwGLzYhG70uCnc6SEmY6XwJMPNCv4gBm3%2BBDIRcPytXsMYJCeamtuI%2Btg%2FPqUnSgdm%2B2c12RgOnpXIiORX6I9f6%2FOr4CRiMqktRQk19ZNVtsQvHkA3qLci9G3v1cihI54dQOl8Cp7fpoSfv9w6SyT%2B3GC4nq2QHKrHQs%2F0RZBxKn3q3UbIjVedClrTfGQ2VrvK1aro8wlyjEyQ0g3xTUH3i71sxD%2F9fcC58GiLciArdETSYMLZjK%2Biyeq2kQg6Qxz8CBYAgOZ6ICMnT1Mjap7A10Sn6M%2Bk%2FeQsh0rNUffqGAt9LOK3ApEW0ws7bRwgY6pgF%2FNiK%2BLSK6S9LsfxPrbllH7%2BPlUrcG6vmZeogd9%2BxWVLKFHiY6GwSuDM1c13SUEfcCXeSlz87TC%2Bbh3DukChvPqdgr2mqkpPOZcifl1CRaiFqFzQ%2BVkgeimUgsfxGKDIAMTWuA6tN1sPi38N7DXJpAUfIfMOtm4eHjwHz9XBQlx2wBB9YE6c4PU1EhLnv6CIH6SRk16cB4I71V%2FboTn7D4cMIpf4C2&X-Amz-Signature=576cb592bdbae5a509b039289b9bf06e07b3aa4716f6d666546780d8b6e36939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
