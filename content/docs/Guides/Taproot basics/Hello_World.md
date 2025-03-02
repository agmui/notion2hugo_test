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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5PVLEVY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfyELCNBwOzxWvQcTDzO7l7ixqnLhZDm8zRxg98REbDAiEAn7GW%2FLF9k9gUGw9w%2BBZKnbO9WuMjkuD9ptCCa9J7pfsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhXez51byGKpGFaWCrcA2Mz2R8QHdkUEKQ%2F3KjkiavjI44Ox93FtAODgc51gBvvnjnBniy8AqjBYpvLRlD%2FExG3t3Id5HUlP%2FjY%2FzzFcTkKbP%2FeuHM07AHv8mHqeuUBoom3gYeT6ZTEl8QpbifjiWXBmg6IPrqB92%2Bgci8lBSzTUsiGJY0H36O%2BMhd4l3UaMREDggN1ht%2FyzhSyu0NYoQwPrjeu3Mj7Qcyc4625aqeXRCPLgIpKYbV1%2FFNa5f6VcmTkdilSdpQVqE%2FuisUio%2FdGLDB55uaDZ9F2s8mN1rT1kO2jHv9R5IeHKurndYZBG0xgwKYmPTawx1UWnHg21AWbGHznD9eHyrpdjMOFn4w2RZTMFUsJ5uRB00IrSrVlhOhmGKOeY7aWG%2FNuUYS6t5fR3J7ZoWv%2B%2FfK6Pfj2h4%2BbztvaytdH6tv10FdlUnVlbzVTf9xkzHzQuODX18KlrNjLUn0zsZ6mIQhRcmadLy3zHiU3SHPbUpMopoPVp%2FzuhDJEp%2BoCPsIv0MVbkar0pumDAuw8LSpFQWckWB18IuyFS14Rg0E0qaNOMSRY2yQyIXscHbPKYdX7krLm9cbofRxdrEGmj1fLrWrXemdq7vJU7vlhfitNiFEg9hqPc0RlzLtRNamNJ0AFvkpdMISckr4GOqUB8foQbhNp4l65NQ0Y%2BWOzEKr%2Bn1pNtHuIYAZmCF8hs%2BUaMbnJYHyEQmQZecnb480iZPHAT%2FUpwMW6guuZDt9albYD8K59mg0Enm0LLz8CKHZkV1Xs8AbMxzFWJK3xIxOrc2NgZB%2BtLRavvreEFxNYEWONcsKP%2F9kcCbmnWav0S0PpmgOeIFL7hOWAWQqAd6npSxf5f4QXcNr8I3lYqcZfTjRK%2F58Q&X-Amz-Signature=d494b7285778631fdd83447141bc2356f3b4ff7b7209da080b2a13b898b4aa30&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5PVLEVY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfyELCNBwOzxWvQcTDzO7l7ixqnLhZDm8zRxg98REbDAiEAn7GW%2FLF9k9gUGw9w%2BBZKnbO9WuMjkuD9ptCCa9J7pfsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhXez51byGKpGFaWCrcA2Mz2R8QHdkUEKQ%2F3KjkiavjI44Ox93FtAODgc51gBvvnjnBniy8AqjBYpvLRlD%2FExG3t3Id5HUlP%2FjY%2FzzFcTkKbP%2FeuHM07AHv8mHqeuUBoom3gYeT6ZTEl8QpbifjiWXBmg6IPrqB92%2Bgci8lBSzTUsiGJY0H36O%2BMhd4l3UaMREDggN1ht%2FyzhSyu0NYoQwPrjeu3Mj7Qcyc4625aqeXRCPLgIpKYbV1%2FFNa5f6VcmTkdilSdpQVqE%2FuisUio%2FdGLDB55uaDZ9F2s8mN1rT1kO2jHv9R5IeHKurndYZBG0xgwKYmPTawx1UWnHg21AWbGHznD9eHyrpdjMOFn4w2RZTMFUsJ5uRB00IrSrVlhOhmGKOeY7aWG%2FNuUYS6t5fR3J7ZoWv%2B%2FfK6Pfj2h4%2BbztvaytdH6tv10FdlUnVlbzVTf9xkzHzQuODX18KlrNjLUn0zsZ6mIQhRcmadLy3zHiU3SHPbUpMopoPVp%2FzuhDJEp%2BoCPsIv0MVbkar0pumDAuw8LSpFQWckWB18IuyFS14Rg0E0qaNOMSRY2yQyIXscHbPKYdX7krLm9cbofRxdrEGmj1fLrWrXemdq7vJU7vlhfitNiFEg9hqPc0RlzLtRNamNJ0AFvkpdMISckr4GOqUB8foQbhNp4l65NQ0Y%2BWOzEKr%2Bn1pNtHuIYAZmCF8hs%2BUaMbnJYHyEQmQZecnb480iZPHAT%2FUpwMW6guuZDt9albYD8K59mg0Enm0LLz8CKHZkV1Xs8AbMxzFWJK3xIxOrc2NgZB%2BtLRavvreEFxNYEWONcsKP%2F9kcCbmnWav0S0PpmgOeIFL7hOWAWQqAd6npSxf5f4QXcNr8I3lYqcZfTjRK%2F58Q&X-Amz-Signature=cb389c0356201278b120924f3fab6128fe2df8580103076e270f2da2aa4fe2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
