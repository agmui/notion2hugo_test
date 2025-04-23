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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7A3LME%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIG7uRUoPxJ3tc5MzkYRSIAB%2BEBGgej0drRjq1O2QlqTfAiEAvyeQlDbRoblHlM7JFdP4QudUvfH%2Byn92ec%2BO8OmEL78qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FV%2Fj3NXUCauJ4bKyrcA4Hr6bN4GaCYhrTONkZwm0ABoRpHC5mGIC%2BXmAkl3eVHQKdfc6mohhjUZJDEkODnXb9ebeI1lyUm44E%2FKAjKbSKXGD6sq8jerJB0ztqeph6gy3frGOqny51LgceMEnlqpn2eeZR4%2BxKtQsWgHppJi70MBcZnVfn4a0%2B0NzscbLjFMqgFcvzm2zOtcOI%2BBsnz9Kp9DDdSSefP2J44vFhpu7JKreNprmb5HEwu4uh2XTfBksCbqHR6vX1yp2Zsm04vBzuvA3Rh%2ByBy0wO5Twor5CerqSfFSGUlYJb4%2BrAdN1e%2BWGSb%2Bm7x5TLI0btvMW512giki21lnUJBR3FHkjvcz%2BYLJIgWu4IS%2BiVJtiHt5e4Q%2BXihO1Hxo0d9RY1IglvoY6Gm%2BYLRvEZsq4QqJNunGeKc23knq%2BX95%2FmQRTdRYFUwBTctA7x4C%2B0pJKW0OzpA7hySuD%2FgiHK6FJPDpfc2OdmRCgRJR01QfqryBeUR2X%2F7r6oPsnS0TROIMPnOUXABQK7qxg35Ay3t7gKxROPLQj%2BfH0R%2BLoWnrM4XEqIFqyU78sCpwPreEPR8YQagPFMB3SfKfV8Xp8EG7hzzBmPKcttZIwwEkC54%2B%2F42SegV06GZqPq816BDu1vnvBTWMJy7o8AGOqUBSnvLHDvzbNWNw7wfmzCmcyH0qnVOhaCuP8K1BzySkEChXmK1bzeBSAwZzNDQKNxQaUspjkxAt1AXfbrA%2FMk9PNtSR%2F9gBEuSoUNe0o5tS1FVqQJI%2BBDmV6nkndNemQI%2BxYcEeMwjEgT8rxTC97RJqdj6wjzeXXgTA3E4o%2FMgUjL%2FLOxIot5LuXEjLFCa%2BIGC8yVNz7drW1MevT5eqgCX%2Bz5BPNip&X-Amz-Signature=dd0110db97ed32e032f88b92c53ac13934a6ed1583a21de7ef65e2c0cfbaf75d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM7A3LME%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIG7uRUoPxJ3tc5MzkYRSIAB%2BEBGgej0drRjq1O2QlqTfAiEAvyeQlDbRoblHlM7JFdP4QudUvfH%2Byn92ec%2BO8OmEL78qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FV%2Fj3NXUCauJ4bKyrcA4Hr6bN4GaCYhrTONkZwm0ABoRpHC5mGIC%2BXmAkl3eVHQKdfc6mohhjUZJDEkODnXb9ebeI1lyUm44E%2FKAjKbSKXGD6sq8jerJB0ztqeph6gy3frGOqny51LgceMEnlqpn2eeZR4%2BxKtQsWgHppJi70MBcZnVfn4a0%2B0NzscbLjFMqgFcvzm2zOtcOI%2BBsnz9Kp9DDdSSefP2J44vFhpu7JKreNprmb5HEwu4uh2XTfBksCbqHR6vX1yp2Zsm04vBzuvA3Rh%2ByBy0wO5Twor5CerqSfFSGUlYJb4%2BrAdN1e%2BWGSb%2Bm7x5TLI0btvMW512giki21lnUJBR3FHkjvcz%2BYLJIgWu4IS%2BiVJtiHt5e4Q%2BXihO1Hxo0d9RY1IglvoY6Gm%2BYLRvEZsq4QqJNunGeKc23knq%2BX95%2FmQRTdRYFUwBTctA7x4C%2B0pJKW0OzpA7hySuD%2FgiHK6FJPDpfc2OdmRCgRJR01QfqryBeUR2X%2F7r6oPsnS0TROIMPnOUXABQK7qxg35Ay3t7gKxROPLQj%2BfH0R%2BLoWnrM4XEqIFqyU78sCpwPreEPR8YQagPFMB3SfKfV8Xp8EG7hzzBmPKcttZIwwEkC54%2B%2F42SegV06GZqPq816BDu1vnvBTWMJy7o8AGOqUBSnvLHDvzbNWNw7wfmzCmcyH0qnVOhaCuP8K1BzySkEChXmK1bzeBSAwZzNDQKNxQaUspjkxAt1AXfbrA%2FMk9PNtSR%2F9gBEuSoUNe0o5tS1FVqQJI%2BBDmV6nkndNemQI%2BxYcEeMwjEgT8rxTC97RJqdj6wjzeXXgTA3E4o%2FMgUjL%2FLOxIot5LuXEjLFCa%2BIGC8yVNz7drW1MevT5eqgCX%2Bz5BPNip&X-Amz-Signature=3e12003dc956eff46e8eb63cb8c1e0e8bc5867e0ec353e301484b9d556f36cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
