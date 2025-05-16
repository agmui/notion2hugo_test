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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYU4MCZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvtTLW%2FkERrbEaFW%2BMqXiCwEpcYnRRjab5%2FfuvMCk9bAiEArgCcHOfagtfrCy6cQRO%2FgLD0Q%2Fm%2BVLaV4ZH3f0%2F31lEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ8g9QEisC8g83tWbSrcAxGOvkpb1xa1yI5FrRTgPBPGriylvJzlCzBoDNkplVi2dGRgcfQPi8cSV4%2F5KTbqnvoGEHRNiAjoR%2B%2BBpv0UYdWkpba6plftgeUeDkRdr%2BBWUrcHt5f569yNo7dk88wl4lMBE747Frg2eovSilBSkpgSdBnkJyVBGk0CU%2BKBE0UJtswpjH6Bk%2BQkF7wrQVSSxbDW4zCLdVkZXhXGyOMyfzmmZuKAdFdgc01yrxiY3K6grggK8f4GienMW%2BRtxFdapspvmZ4AHY%2BpThBUiCVZieG1d3hF0S%2FRitQwlOks4j3raQKK8IXdsaRCNmrCsLZ53AGTyPGzFBSzBgqTKvy08Gj45YQ5sIR79%2B5ok2PMdAA%2Bl2DoBuQmHG6G0bQdiR%2FHUvv0JnKfKGADnR9qbjIqLktFYNsWoVTuA5oNIct8ce1pDrew10QHnJtURutmc2gSESjCv8zms%2FXLtYx3W0vs6LHpM3E6tZIiLCaDEhKkx1wnAnUn03gXyoCv0U%2BsnNhSMsDu%2FpWOkw6yuvqU8iokPnT7OL4Z2pVbvLC3g0%2Fo3B9WqyBaFz6XrEUHnO0omnFBFEXJxwty%2BNV75Of5uY1PNp60GKsgHHuRtVayaA2Xzi%2Bj1PBDKle8qLZZJFG%2FMI6Hm8EGOqUBXb7E5zhH3%2BiPygJn%2BrZdeFRdYX3qR%2FBePaoNv%2B2tVAxu5hGzD7FaSivLIITvg2fm9EI7wkA%2FwagMaTM4qzOLgVI9e6YeZHt%2FFExfaWciw6xNYG9OWVa4BhKlo2i0gCI%2FgRtncsR4yKtyHN5izYXzDvR1kJ0SMrLY0WW0fKxjMysI4LUY%2FdA%2FRIsKururDh8ZX4FOt2jIw%2BHqsCiivRujIzdWg33N&X-Amz-Signature=5883ba517e782811f7469d428b7113223b30c64204625cc676d68def89cb7699&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYU4MCZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvtTLW%2FkERrbEaFW%2BMqXiCwEpcYnRRjab5%2FfuvMCk9bAiEArgCcHOfagtfrCy6cQRO%2FgLD0Q%2Fm%2BVLaV4ZH3f0%2F31lEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ8g9QEisC8g83tWbSrcAxGOvkpb1xa1yI5FrRTgPBPGriylvJzlCzBoDNkplVi2dGRgcfQPi8cSV4%2F5KTbqnvoGEHRNiAjoR%2B%2BBpv0UYdWkpba6plftgeUeDkRdr%2BBWUrcHt5f569yNo7dk88wl4lMBE747Frg2eovSilBSkpgSdBnkJyVBGk0CU%2BKBE0UJtswpjH6Bk%2BQkF7wrQVSSxbDW4zCLdVkZXhXGyOMyfzmmZuKAdFdgc01yrxiY3K6grggK8f4GienMW%2BRtxFdapspvmZ4AHY%2BpThBUiCVZieG1d3hF0S%2FRitQwlOks4j3raQKK8IXdsaRCNmrCsLZ53AGTyPGzFBSzBgqTKvy08Gj45YQ5sIR79%2B5ok2PMdAA%2Bl2DoBuQmHG6G0bQdiR%2FHUvv0JnKfKGADnR9qbjIqLktFYNsWoVTuA5oNIct8ce1pDrew10QHnJtURutmc2gSESjCv8zms%2FXLtYx3W0vs6LHpM3E6tZIiLCaDEhKkx1wnAnUn03gXyoCv0U%2BsnNhSMsDu%2FpWOkw6yuvqU8iokPnT7OL4Z2pVbvLC3g0%2Fo3B9WqyBaFz6XrEUHnO0omnFBFEXJxwty%2BNV75Of5uY1PNp60GKsgHHuRtVayaA2Xzi%2Bj1PBDKle8qLZZJFG%2FMI6Hm8EGOqUBXb7E5zhH3%2BiPygJn%2BrZdeFRdYX3qR%2FBePaoNv%2B2tVAxu5hGzD7FaSivLIITvg2fm9EI7wkA%2FwagMaTM4qzOLgVI9e6YeZHt%2FFExfaWciw6xNYG9OWVa4BhKlo2i0gCI%2FgRtncsR4yKtyHN5izYXzDvR1kJ0SMrLY0WW0fKxjMysI4LUY%2FdA%2FRIsKururDh8ZX4FOt2jIw%2BHqsCiivRujIzdWg33N&X-Amz-Signature=044779098274f7f8c635959c4a81e1ffccf0281e4873e3c8c1d75358fcf8a966&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
