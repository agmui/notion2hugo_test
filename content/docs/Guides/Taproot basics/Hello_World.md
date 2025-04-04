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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBTTLWMB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFLAgrg1wbxTCEodyUpLFjd4Wc8cQWpE0Ya4MBSPKHkwIgCKt2OSu%2B%2FInhH25lXTar2PtTc0g9eiDuBO8mf7If3jsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDE2OEv1639SijghsircAzcZR2Bmk%2BI%2FVc%2BHCm5r5gK9p4GpdzFtzSx7CpMyaGrn0evYpbXzPq4r26WSezce1wWic4rbX4SKLlwJyxt8rA2F8cxPGqMA4qtAhPzoFUHf%2FXDNTVcaqiZGUkfXQmGQn%2Bvzdbh3pE%2FVLzofY4k6mtVTKsfHbEicwanwDjxWPEbK3D291or0Av2G2zvQcJuaQiIE2ZGwG5ChnejX8lDwdfOkXzmL14SqCl%2BXX7SxJw5OEK2gAL8LvOyILVv5xCDCnMbMpUEdvUxH%2F8ZXpUviiSDbESTm%2BmUvqQoUz1tCwKy3ynY5QHadaLf%2Fvjo%2FLCW5SyUbN26zIc7KQUhLIJtT8%2B%2BxFyWZV9iETQVuw%2FGFMSo%2BO%2FPxgQZfNktzmatkfHlKPagaoQAUb%2FoZdVxklMWIWAyILUJ7h0A2VLZ8yYG58ZjvI00lbx3Z4Q4vr8yRzFHbDGXuQReizOhPiHTMxC2SHDHYCuKaLosneEA18b5ZiCDwsqaVyRjTVhqeeKGs0EeaPa9pN6PiX%2FnvKnfDCJ5JlKdTpSh7ORkMbTuFKTi5c81%2BuwTadrcqAZAMkcPxq6HV1RiNx2xbq%2BHKTs5zUTl3k1mZiMvWtK%2B1RWLa%2F0T6wokgZ6EsgMs4N68qwxOZMMbJvr8GOqUBRvnDwfps8Kw4QpYsB0UrvS6Ydjfz4hoiFKQ62SEfoW9CzuSbIuZTMCtekOYquU4m1qnQr0xYJh7xChaEqzzO16LzfhwaJth%2Fk2nA%2F4uYKlEDQ5WEMo4CftryhogPQrtc%2F92ezqW%2FNAASEoLRJAsp5tuX35cQUu5Oig%2B5swrlk4g3KwRoW3uygGKyjhlRU9Lb63I6Yt22q08IguixQfuiwpnjGdEc&X-Amz-Signature=4079f5c8d2a0fd032c8640338687f4e88d93eb7633f22d63ec72733797d8b732&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBTTLWMB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFLAgrg1wbxTCEodyUpLFjd4Wc8cQWpE0Ya4MBSPKHkwIgCKt2OSu%2B%2FInhH25lXTar2PtTc0g9eiDuBO8mf7If3jsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDE2OEv1639SijghsircAzcZR2Bmk%2BI%2FVc%2BHCm5r5gK9p4GpdzFtzSx7CpMyaGrn0evYpbXzPq4r26WSezce1wWic4rbX4SKLlwJyxt8rA2F8cxPGqMA4qtAhPzoFUHf%2FXDNTVcaqiZGUkfXQmGQn%2Bvzdbh3pE%2FVLzofY4k6mtVTKsfHbEicwanwDjxWPEbK3D291or0Av2G2zvQcJuaQiIE2ZGwG5ChnejX8lDwdfOkXzmL14SqCl%2BXX7SxJw5OEK2gAL8LvOyILVv5xCDCnMbMpUEdvUxH%2F8ZXpUviiSDbESTm%2BmUvqQoUz1tCwKy3ynY5QHadaLf%2Fvjo%2FLCW5SyUbN26zIc7KQUhLIJtT8%2B%2BxFyWZV9iETQVuw%2FGFMSo%2BO%2FPxgQZfNktzmatkfHlKPagaoQAUb%2FoZdVxklMWIWAyILUJ7h0A2VLZ8yYG58ZjvI00lbx3Z4Q4vr8yRzFHbDGXuQReizOhPiHTMxC2SHDHYCuKaLosneEA18b5ZiCDwsqaVyRjTVhqeeKGs0EeaPa9pN6PiX%2FnvKnfDCJ5JlKdTpSh7ORkMbTuFKTi5c81%2BuwTadrcqAZAMkcPxq6HV1RiNx2xbq%2BHKTs5zUTl3k1mZiMvWtK%2B1RWLa%2F0T6wokgZ6EsgMs4N68qwxOZMMbJvr8GOqUBRvnDwfps8Kw4QpYsB0UrvS6Ydjfz4hoiFKQ62SEfoW9CzuSbIuZTMCtekOYquU4m1qnQr0xYJh7xChaEqzzO16LzfhwaJth%2Fk2nA%2F4uYKlEDQ5WEMo4CftryhogPQrtc%2F92ezqW%2FNAASEoLRJAsp5tuX35cQUu5Oig%2B5swrlk4g3KwRoW3uygGKyjhlRU9Lb63I6Yt22q08IguixQfuiwpnjGdEc&X-Amz-Signature=9e6a9848a9c51c53049ae9606b6a5bca9a6941f7b3fa6c11cd27ca5e8bed65d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
