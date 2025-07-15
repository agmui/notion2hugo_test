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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2L2YR6N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBkQ12YJnznsvgV5prCmgHrB%2BCbbW%2Ff%2F5vERPAMlKXT0AiEAxUQ5TMdhyA65ZCGfMW1aTRzbdm7Q1CxJ4RqIZIH5KCEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMk4Y1dsNaLsmiBc5yrcA%2FMku9nQjzeV%2FkZmyT7QCde3LFZn65jeyZW7lshPGhYRKUuKkW5F4GWGNP9iy5UQDSgUO%2Fe7%2FahSzE%2Ft3hfm9bquIGTY%2B6mHQljaQrlIUOjpsoBbplwPEiLBwmwXc9EQP%2FFi%2B3HFU%2BuArry0V3wN2%2BHkG7O9fHyhCJz50skX7Du5t%2FVpMY%2BHIYvQHih55t88LkIe3QROiB37vcivatOgvw86X1h31xgTa5XP3mqrqLukTwtSRykLk9cIIqAPeRTAcfdLb7YwI5BTBiaICxrrR8YU0ofh3jHGVKKiPfHRLA9Rp21jn22cdSSkhseCjCZBzNLYKRw%2BjIPV0%2Fc%2FCpb%2B732rnjQwQWtcVPYfvFsbjjstUYpMdwSdT%2FDmX7iTVNSkrnPpIL3ZBDKYChFZlMXTPcKr2keQ4H6yzkKqoQeAVdUvnWN6FuZkCKXgFwE4iV4UjZsbfUIUf9nbK0sUjjeFwi0XSUMiXI0SFWkAZeiLY12qtTd%2FG%2BDrjM8m5ifkvdwmHo97%2B5gILar3r6a%2BYPzbtNlNe0Iao7r96dXGyx%2Fo%2FtLYinQscKN4CHARUQxxwi74nbM9cnm36i2swHyPTm9Fa1QFzUpNadWorzD8ObtAvsoACCOsj5J2OFZOPbDDMIaC2MMGOqUBNsoqjdbBa6AVeU%2FphBa1WFlW2cDYh%2BVCnlA3P9rTR3SphZ2YOd2fCL2es4iAhuoFbtuOFPsZC9p2j7TDDMePjy4L%2F%2F1y4EStaXXn8ySXPqkRA3evZvAAkf1180JK%2Bb2Ikc0UT%2FoLPg2RCimRAvt8zYyT1D0BHqE2zc8McxK1VoVTBPNLrCTySO%2FvC9qy4lzulwb04oP6SeFIefvWXPexKaeuDB6Z&X-Amz-Signature=010027f1c2e4301e0623e34931719a8eed3f6a39ddea8915385919df72b431f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2L2YR6N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBkQ12YJnznsvgV5prCmgHrB%2BCbbW%2Ff%2F5vERPAMlKXT0AiEAxUQ5TMdhyA65ZCGfMW1aTRzbdm7Q1CxJ4RqIZIH5KCEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMk4Y1dsNaLsmiBc5yrcA%2FMku9nQjzeV%2FkZmyT7QCde3LFZn65jeyZW7lshPGhYRKUuKkW5F4GWGNP9iy5UQDSgUO%2Fe7%2FahSzE%2Ft3hfm9bquIGTY%2B6mHQljaQrlIUOjpsoBbplwPEiLBwmwXc9EQP%2FFi%2B3HFU%2BuArry0V3wN2%2BHkG7O9fHyhCJz50skX7Du5t%2FVpMY%2BHIYvQHih55t88LkIe3QROiB37vcivatOgvw86X1h31xgTa5XP3mqrqLukTwtSRykLk9cIIqAPeRTAcfdLb7YwI5BTBiaICxrrR8YU0ofh3jHGVKKiPfHRLA9Rp21jn22cdSSkhseCjCZBzNLYKRw%2BjIPV0%2Fc%2FCpb%2B732rnjQwQWtcVPYfvFsbjjstUYpMdwSdT%2FDmX7iTVNSkrnPpIL3ZBDKYChFZlMXTPcKr2keQ4H6yzkKqoQeAVdUvnWN6FuZkCKXgFwE4iV4UjZsbfUIUf9nbK0sUjjeFwi0XSUMiXI0SFWkAZeiLY12qtTd%2FG%2BDrjM8m5ifkvdwmHo97%2B5gILar3r6a%2BYPzbtNlNe0Iao7r96dXGyx%2Fo%2FtLYinQscKN4CHARUQxxwi74nbM9cnm36i2swHyPTm9Fa1QFzUpNadWorzD8ObtAvsoACCOsj5J2OFZOPbDDMIaC2MMGOqUBNsoqjdbBa6AVeU%2FphBa1WFlW2cDYh%2BVCnlA3P9rTR3SphZ2YOd2fCL2es4iAhuoFbtuOFPsZC9p2j7TDDMePjy4L%2F%2F1y4EStaXXn8ySXPqkRA3evZvAAkf1180JK%2Bb2Ikc0UT%2FoLPg2RCimRAvt8zYyT1D0BHqE2zc8McxK1VoVTBPNLrCTySO%2FvC9qy4lzulwb04oP6SeFIefvWXPexKaeuDB6Z&X-Amz-Signature=5ca9760ec34154cd19b003d4a56d0d2f84f8d1ace4254af6d181d012c6f20b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
