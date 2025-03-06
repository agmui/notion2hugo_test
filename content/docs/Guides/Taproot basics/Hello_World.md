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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7JN5BT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvceCyOiq2qF5B8aJhQL9H6r0yHpaIiD72XmYEzxV8CAIgJ3jRZfS6hdP3NBQKLFpIo30FuQzIR31C1bRLNrE13XQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDI%2B24sIFnQpAZH314yrcA43XLiuGWCgoTQTajnkOnIOhyNMmZNEPSbiqGKNBmRY4NABXbwdaGnYzwW8Tiu8C6MBfuEkXJpLJFoXVTkZ03eFNRSWAmbEJhNfZ1PfWleB4MFR1YdxlWmG9%2Fl6nCwBVInz3z0CMCZonuNs%2BeJ6vh1f9S5mtkWOBcynmRc7Ro2gUoczwSlbL%2F7UDkfLaCQKKyNnT%2F6OVI8VW%2FLD1O9RXg%2F%2F2NhTPoFijSouzr5UwCawSzIsohAtOQERXV%2Fb1mt%2BJSzsXaGVN%2F678V1sHnkIMYnBAa6daexulqFPomEqPuA5JJ9UCJtFX%2FYOqQ2vLDk0sv%2FTR%2BeKWmWR%2BCeT%2Bzdu%2B%2BEg8HhXjpuLBK33JlIbthEowOrQySGsTP%2FNlf%2F0zcjouBsY3%2FzlcoBFNDD8ElFrAOY7gKzcSwHQwbChvR9p%2FBqAKaJoTiD%2BjKFUrCc%2BBmVisGbTDapgwT1ZyoVjrO2oXNl%2FMin%2BZwFqrYPAK2QCYQaZlvqt3TgXHOTnu8hk4IwEVPgbd5atjMvCdsFRPZIrlPngSMCPdIRBXk3SEop9%2Bp6MoiB%2FdK0KlkVc%2FPBErc0uHMp9zb182VtWxvESOtszXLqUfTPSstfLUPU4q3n4Qw4%2FkPkmrOkpmhm9n34kIMMTZpL4GOqUBELnBGm4dR852mJKW70WLPyXwzEr%2BLrcbZ0DFNa08%2Fm98HN4bwfkcopsB6iiGVFDiCeiclx8%2Ft5DovjnMUMYMXV9soNLCvU%2FKO%2F9JHltno%2BKd1wrUB023rP8ecB1at8Pmik7nAJFXYJYapc6NrvwiI%2Bmhf7uleqO6PgsgHHZbpevsADkL0xx5cBMIvNi%2BoHfzT9cg88am7jAFwetKaZD89unozaSb&X-Amz-Signature=1be9565106d72f9582f88d8f3a9ca11acaa187ddca3022b3fc2a490c40981b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7JN5BT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvceCyOiq2qF5B8aJhQL9H6r0yHpaIiD72XmYEzxV8CAIgJ3jRZfS6hdP3NBQKLFpIo30FuQzIR31C1bRLNrE13XQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDI%2B24sIFnQpAZH314yrcA43XLiuGWCgoTQTajnkOnIOhyNMmZNEPSbiqGKNBmRY4NABXbwdaGnYzwW8Tiu8C6MBfuEkXJpLJFoXVTkZ03eFNRSWAmbEJhNfZ1PfWleB4MFR1YdxlWmG9%2Fl6nCwBVInz3z0CMCZonuNs%2BeJ6vh1f9S5mtkWOBcynmRc7Ro2gUoczwSlbL%2F7UDkfLaCQKKyNnT%2F6OVI8VW%2FLD1O9RXg%2F%2F2NhTPoFijSouzr5UwCawSzIsohAtOQERXV%2Fb1mt%2BJSzsXaGVN%2F678V1sHnkIMYnBAa6daexulqFPomEqPuA5JJ9UCJtFX%2FYOqQ2vLDk0sv%2FTR%2BeKWmWR%2BCeT%2Bzdu%2B%2BEg8HhXjpuLBK33JlIbthEowOrQySGsTP%2FNlf%2F0zcjouBsY3%2FzlcoBFNDD8ElFrAOY7gKzcSwHQwbChvR9p%2FBqAKaJoTiD%2BjKFUrCc%2BBmVisGbTDapgwT1ZyoVjrO2oXNl%2FMin%2BZwFqrYPAK2QCYQaZlvqt3TgXHOTnu8hk4IwEVPgbd5atjMvCdsFRPZIrlPngSMCPdIRBXk3SEop9%2Bp6MoiB%2FdK0KlkVc%2FPBErc0uHMp9zb182VtWxvESOtszXLqUfTPSstfLUPU4q3n4Qw4%2FkPkmrOkpmhm9n34kIMMTZpL4GOqUBELnBGm4dR852mJKW70WLPyXwzEr%2BLrcbZ0DFNa08%2Fm98HN4bwfkcopsB6iiGVFDiCeiclx8%2Ft5DovjnMUMYMXV9soNLCvU%2FKO%2F9JHltno%2BKd1wrUB023rP8ecB1at8Pmik7nAJFXYJYapc6NrvwiI%2Bmhf7uleqO6PgsgHHZbpevsADkL0xx5cBMIvNi%2BoHfzT9cg88am7jAFwetKaZD89unozaSb&X-Amz-Signature=7bb71100fb0bd7e0919d2df268ed42b5a193db769bd306ebd05171cb4b4d641e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
