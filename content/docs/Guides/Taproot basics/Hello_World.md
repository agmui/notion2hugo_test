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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4S3W2X%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDBopyGRXyN%2BwupAWHV4yZxWSvGDKvC%2FION9UfFsiErQAIhANJYeNakmfOYpyeaUHHKKfElWaTfGTzMNbrnzxf29l6TKv8DCH4QABoMNjM3NDIzMTgzODA1IgwMMAyqFuF0Clc04G0q3AMOKKah5D1bqvuNDHPpsPDx4Y%2FUlzo2dIqBHOhz%2B0yKfjSs%2Fqhg5Ab%2FYC7PC8tmy4GQq3ckOlGoEuAu1Zz1XD7gyE31QAEXAzb7iQ1KlmQtXJZ935HxF%2FeGq1lWbnGsF%2BM5N0lhaANPnN6rjJgyXULC2C9CyC%2BnCcC0oH2CZvWjG6t6WEvvPDeLbW2Yyhk2DTwoVXP7y8aYssb7GwdBswwE96TiWM5CVI9Pz67HhIaV7uwIz1MErDPnntR9%2FEwv2ucLtSL%2Be7m8pRMK%2BOO4ij5mSDu9ZLw6QrE0HEwz9frwK9wy5WoFSRlmvWSqVYeAc4z6c28URE1gDz51TXK1pnCc3d5e7GX0dpucpbo3n5djG9MOrof%2FhM7zZh5yfjv90wSsNZMbvjk73LvLaX8yMQOseb5zndj1WMJUExywxgNrrjTCEXAu%2FmuHUuu7OhkienndN0obgtrfolblNKeCX49dsLIz6keZl3t0fj15GW8N35PUO4HyR%2BYGzO4FNkKjeecPvsEpuNbRpMCtXARVDTDPgAlsQyMPiEUdsV4ai8nXdSdRC02%2BfWLLq8KfF51Q2gzJsUWc1g0vEC4MRiY9n%2FuVSI9o4IL7m6yLtlRfNek8nh08MelQqGhxLuyYGzDj6bDDBjqkAfS%2BaxE7%2FiU2mijHCU9670wl4H6BDC%2Bf%2B7TMWiI38nmrqTVxekb0W8ZWUxeBddzaeE065wiB%2B%2BJzdC6CwRjZX4b0ph8Vxv6RhpeGukWJ6HFPqCJV2dodp44xpqbuO5jFFeJXk1%2BXSLCPMfXDbbmy4jldSVobKwrpLhKHwKjUOsIZRw3V5lz9l8br2svswFmxTAxj6gcrYi2W45QhaSZ9h0h6Sa%2B4&X-Amz-Signature=20f092f0193b63d7aa99b52e8c0b4657fdf78c827c45c810c31e014bf5ad5289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4S3W2X%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDBopyGRXyN%2BwupAWHV4yZxWSvGDKvC%2FION9UfFsiErQAIhANJYeNakmfOYpyeaUHHKKfElWaTfGTzMNbrnzxf29l6TKv8DCH4QABoMNjM3NDIzMTgzODA1IgwMMAyqFuF0Clc04G0q3AMOKKah5D1bqvuNDHPpsPDx4Y%2FUlzo2dIqBHOhz%2B0yKfjSs%2Fqhg5Ab%2FYC7PC8tmy4GQq3ckOlGoEuAu1Zz1XD7gyE31QAEXAzb7iQ1KlmQtXJZ935HxF%2FeGq1lWbnGsF%2BM5N0lhaANPnN6rjJgyXULC2C9CyC%2BnCcC0oH2CZvWjG6t6WEvvPDeLbW2Yyhk2DTwoVXP7y8aYssb7GwdBswwE96TiWM5CVI9Pz67HhIaV7uwIz1MErDPnntR9%2FEwv2ucLtSL%2Be7m8pRMK%2BOO4ij5mSDu9ZLw6QrE0HEwz9frwK9wy5WoFSRlmvWSqVYeAc4z6c28URE1gDz51TXK1pnCc3d5e7GX0dpucpbo3n5djG9MOrof%2FhM7zZh5yfjv90wSsNZMbvjk73LvLaX8yMQOseb5zndj1WMJUExywxgNrrjTCEXAu%2FmuHUuu7OhkienndN0obgtrfolblNKeCX49dsLIz6keZl3t0fj15GW8N35PUO4HyR%2BYGzO4FNkKjeecPvsEpuNbRpMCtXARVDTDPgAlsQyMPiEUdsV4ai8nXdSdRC02%2BfWLLq8KfF51Q2gzJsUWc1g0vEC4MRiY9n%2FuVSI9o4IL7m6yLtlRfNek8nh08MelQqGhxLuyYGzDj6bDDBjqkAfS%2BaxE7%2FiU2mijHCU9670wl4H6BDC%2Bf%2B7TMWiI38nmrqTVxekb0W8ZWUxeBddzaeE065wiB%2B%2BJzdC6CwRjZX4b0ph8Vxv6RhpeGukWJ6HFPqCJV2dodp44xpqbuO5jFFeJXk1%2BXSLCPMfXDbbmy4jldSVobKwrpLhKHwKjUOsIZRw3V5lz9l8br2svswFmxTAxj6gcrYi2W45QhaSZ9h0h6Sa%2B4&X-Amz-Signature=1c5139eefc398d62dc46bb2fcfae8ccb42dd0fa7387e073ba2845fcaaf4caa78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
