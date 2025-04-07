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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCR6YVQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4zCumJM8B6JnEPy6%2FT8HjsJkX5RtiN%2Brqk4WRQ%2FujLAiEAlxZc4a6xBZiodFyuZxui6UXqpdOGEh95Bfw46%2F0UAcYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEu29Zle7OP%2BmkgnrSrcA1TapNEw7%2F6c6wyNnQ8S%2BINXUBit3H6EN3173CrjihPeww4HT03j1Si99CpwQigRrFhuAkf43UW%2BhYznaCc2CanO%2Blqhe4C1vd8LgBAAMbrwlLs3J97chRHsZwETsQAnMP%2FR%2BVQSNU1xBUdKLCpGxYz%2BIyBehnUq%2BqfMhcRviwzh2rwiwwTLcEW2dsuZV9jMoVPCibdFrsXFAnT2bwg3qbLSkQkzBgqSnNVftzN2XB%2BaRh4zsMtTdsWSwOWzux3yi7KdHcnb754gS79z3v2uDa%2BVAl9%2FsZ9aRifBCp%2Bb8xBsFrW%2FSOtwtUuAtS5WnnuzrEpI4l5XLyBXZsUrIuFhPW1Pl5N5xlNRA4j587n%2BIpB%2F8YRNQtMitjiWE96UF8825djkN%2BS%2FOXtzmzoE%2FSbfWFMEWcab5I4FgAiz3LtVJBSmoehv2fmWOawNr1La3%2BRKp%2FGNyMWJ9660kiDHHgDQLw9s0J1StHb4qRX3hGQgP7qDFlpbMpMHP5s0UOFDAP3GaiDaJ9BBfiek5Q93fEvv%2BMayI1nqsnSnHkR%2Fg7RKUHpKEq8IDe%2F9BdjroAq1vcZyz7z21HU2mgEyqNGik2Nng2Glcyx9whcz6RQ%2FG9%2BEmolHJPZw%2FTWmm1B6sLZhMMfpzL8GOqUBaCsH%2Fdwap0kdEnLGeEWYpWtbnKh9fHp2k54QMsPRyKmT4AN%2FZP1x99SPxw9wDJzr%2BMpFIr0Twr2HcevxR%2F4i6%2BbspUc5208PL%2BIr7okgXKUUKYtrpVBl3Jp4vDlp6a7EXl3mfqJZsdLQHqjQCKiYci9KXtZv38lxiTHpGhCy5jr6nZhZhju3%2BuzakZiPEuZcVIzixaLR%2FcWBabpmP8ixkE%2BaE%2FZZ&X-Amz-Signature=ee2831dca8c0eae52e3d9ad4b647fb7c5238ff31cb678c041989658c7854c26e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCR6YVQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4zCumJM8B6JnEPy6%2FT8HjsJkX5RtiN%2Brqk4WRQ%2FujLAiEAlxZc4a6xBZiodFyuZxui6UXqpdOGEh95Bfw46%2F0UAcYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEu29Zle7OP%2BmkgnrSrcA1TapNEw7%2F6c6wyNnQ8S%2BINXUBit3H6EN3173CrjihPeww4HT03j1Si99CpwQigRrFhuAkf43UW%2BhYznaCc2CanO%2Blqhe4C1vd8LgBAAMbrwlLs3J97chRHsZwETsQAnMP%2FR%2BVQSNU1xBUdKLCpGxYz%2BIyBehnUq%2BqfMhcRviwzh2rwiwwTLcEW2dsuZV9jMoVPCibdFrsXFAnT2bwg3qbLSkQkzBgqSnNVftzN2XB%2BaRh4zsMtTdsWSwOWzux3yi7KdHcnb754gS79z3v2uDa%2BVAl9%2FsZ9aRifBCp%2Bb8xBsFrW%2FSOtwtUuAtS5WnnuzrEpI4l5XLyBXZsUrIuFhPW1Pl5N5xlNRA4j587n%2BIpB%2F8YRNQtMitjiWE96UF8825djkN%2BS%2FOXtzmzoE%2FSbfWFMEWcab5I4FgAiz3LtVJBSmoehv2fmWOawNr1La3%2BRKp%2FGNyMWJ9660kiDHHgDQLw9s0J1StHb4qRX3hGQgP7qDFlpbMpMHP5s0UOFDAP3GaiDaJ9BBfiek5Q93fEvv%2BMayI1nqsnSnHkR%2Fg7RKUHpKEq8IDe%2F9BdjroAq1vcZyz7z21HU2mgEyqNGik2Nng2Glcyx9whcz6RQ%2FG9%2BEmolHJPZw%2FTWmm1B6sLZhMMfpzL8GOqUBaCsH%2Fdwap0kdEnLGeEWYpWtbnKh9fHp2k54QMsPRyKmT4AN%2FZP1x99SPxw9wDJzr%2BMpFIr0Twr2HcevxR%2F4i6%2BbspUc5208PL%2BIr7okgXKUUKYtrpVBl3Jp4vDlp6a7EXl3mfqJZsdLQHqjQCKiYci9KXtZv38lxiTHpGhCy5jr6nZhZhju3%2BuzakZiPEuZcVIzixaLR%2FcWBabpmP8ixkE%2BaE%2FZZ&X-Amz-Signature=aa63413dec2e8a20f045ebb9cfd838ee8976e41e601879528bbf46ca8bedcd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
