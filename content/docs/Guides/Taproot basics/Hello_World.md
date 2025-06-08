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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJAH7G2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU%2BwZKb4ryIPtb1abTJ%2BDasg56nmjWxCQctvLqk0QOEAiEAj6AyGJ4jN%2BhLsOq7B9IlfYw2gNj8r%2FpsBjX%2B10UDDkIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyUrMUfd2mjDMH1GSrcAztXncCzPM9JcLmx68x4hDLs8xKxTr%2Fiz46hvBy%2Bhq9X6EUqnstxOkHl0mPfg6pC2K7MCc18aUaBZ%2BxOM5L%2B6oNw7%2FeIivlvAonuWSFlOdvypeBVahJiuJ41azxkMBYs8QTC1gL%2BOZvZjSY3hS0GTcGKwMbG2YrBXB7OU2UvZ9jSbhAVODKOl0DR5JjBAY%2B8%2FTvvRwvOPGAWIP%2F%2FcEYas6VArZxosqYjG8EDllhMfmwxShBfeEPkdnCgEa9iwZUAruI7aEX5JFSzX0D1pmQLNMax2uDZXu7OcsNRxz1%2BhmPcFnQ%2BIEdYLSCryjh81LWb546O%2B8fcSsEiRwVCnTMW2eAuVxgl%2B6iwLBkZzBwWKp6tHPJ3Evga%2FIqoWIZngesf6vdmPdjLExPDh7%2FPuSr5dfSh9cIjkWqmeKWZdnzQIRlg8W%2BUSTFYP6n3r86ULAIT6EjaohVrf%2Fua8PxsWzoQAXGyP36HefbASNsgaJlXBDds3jTxPj6KjMS9WVV9ykB5ozVSDK4bhVer%2BRjnZuWOF2zQe234gfFTcLnsz0aqJtXONpRbpIftya%2BBzCSeA7xi6vXfRXRK2qycU5AGDzV3lhlmLuOEO05evqeN3bmd4EycXVa%2Fep%2BVfM6Z%2Fxu9MO3Ol8IGOqUBmkBVV66DDKWYePMKypMJD6Cy8Hip%2B58yfrJ7IQnbhgRlnGxwtJKhUq34%2F%2BYN0q76Saeu3kLw5udOXb64roJHh2i%2BvP%2FIazKTu6XG6ZJfEj6aePxHlcmiQRf3LmTgXtJNm5iAk6Ly88pzJu0CmU%2Fp3%2B9jGj13zqZbxekG6aKI5UpY3a1BtEGIj%2FWHYZZ%2BLIfyoHUgLFnUw5WpBORtzAYSqEQrrds8&X-Amz-Signature=cc7809ee16438bed43d532dbc2ef481f44f500a2522e8519d5a2708da0c2e0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJAH7G2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU%2BwZKb4ryIPtb1abTJ%2BDasg56nmjWxCQctvLqk0QOEAiEAj6AyGJ4jN%2BhLsOq7B9IlfYw2gNj8r%2FpsBjX%2B10UDDkIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyUrMUfd2mjDMH1GSrcAztXncCzPM9JcLmx68x4hDLs8xKxTr%2Fiz46hvBy%2Bhq9X6EUqnstxOkHl0mPfg6pC2K7MCc18aUaBZ%2BxOM5L%2B6oNw7%2FeIivlvAonuWSFlOdvypeBVahJiuJ41azxkMBYs8QTC1gL%2BOZvZjSY3hS0GTcGKwMbG2YrBXB7OU2UvZ9jSbhAVODKOl0DR5JjBAY%2B8%2FTvvRwvOPGAWIP%2F%2FcEYas6VArZxosqYjG8EDllhMfmwxShBfeEPkdnCgEa9iwZUAruI7aEX5JFSzX0D1pmQLNMax2uDZXu7OcsNRxz1%2BhmPcFnQ%2BIEdYLSCryjh81LWb546O%2B8fcSsEiRwVCnTMW2eAuVxgl%2B6iwLBkZzBwWKp6tHPJ3Evga%2FIqoWIZngesf6vdmPdjLExPDh7%2FPuSr5dfSh9cIjkWqmeKWZdnzQIRlg8W%2BUSTFYP6n3r86ULAIT6EjaohVrf%2Fua8PxsWzoQAXGyP36HefbASNsgaJlXBDds3jTxPj6KjMS9WVV9ykB5ozVSDK4bhVer%2BRjnZuWOF2zQe234gfFTcLnsz0aqJtXONpRbpIftya%2BBzCSeA7xi6vXfRXRK2qycU5AGDzV3lhlmLuOEO05evqeN3bmd4EycXVa%2Fep%2BVfM6Z%2Fxu9MO3Ol8IGOqUBmkBVV66DDKWYePMKypMJD6Cy8Hip%2B58yfrJ7IQnbhgRlnGxwtJKhUq34%2F%2BYN0q76Saeu3kLw5udOXb64roJHh2i%2BvP%2FIazKTu6XG6ZJfEj6aePxHlcmiQRf3LmTgXtJNm5iAk6Ly88pzJu0CmU%2Fp3%2B9jGj13zqZbxekG6aKI5UpY3a1BtEGIj%2FWHYZZ%2BLIfyoHUgLFnUw5WpBORtzAYSqEQrrds8&X-Amz-Signature=84e1103a8285647c819f7d67217f1f3b1119ea0f6911493dd518b51fc36c4dad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
