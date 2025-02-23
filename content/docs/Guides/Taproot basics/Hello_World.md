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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFOFNCP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD66mN%2FD%2FGka5IPlyiUJdCLuFV6T%2FWzjBBQg1YoaC0gKgIgQJBmkbvyQZWpL9%2FqaQw%2BZUU2rHE26sfmPgJHWvreEyoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHEEiewryV32%2FuupGSrcAw2JT6fNcwK%2BQDJzbkLP4ilib5OX1LqHUOD5NuZ4sQowqHDTlyG%2FxfR2P5wR%2BV127%2BIz9zwT0iSXdIJh6cdQhHfvfQZdAkBMosWctSWKsgYjQSwPi6CO%2FzQCudIOtMrJzNBOH%2FImd9mU2zKW1KLJ7livqUm4FjwD0rfmnJ%2FWk2oQqnyWOiOVmmJXXXBK%2BZ%2BOHPcoASKnCj6qRT2HvPdFRxgo89GbtEXsgFWKKI7G0xq%2FJLTUG2RHVWxXsJjwpOoDFYnOkZKpuEvppr75BRk%2FlKeSvTYhj2qDTC8kJzEHLShbiWBqPYZLUogpG5lYfTXOHtf6X6p2P%2BmMYZnqFToPMy5kbKMbQNWTK7v0ITSDlY%2B7JX1jQt2oBthaiEMLRMXkDZkkiXZahEL4iYJMz6VL9XAD1ELTzTh8K%2FVuLkA6Tam3ZyRsy43ePLUAW%2FCIQQpl8wXOJLrJUouUUE%2B2iDDY3ers2N37JK6XZjoVLB9YJ55IAETAcV62w6sx40EpNXFbFMnuU%2F71XeGCYkvvui7CQTBsPCYWk0YbjUfYA1EBdVcu9J0q4zEgL2i7HjChpzaZ%2FbpRrDt2rTldUfBqi40OLif4%2BML0b7luVDh%2Bu2jbMNzeFv1GD%2FUrgVdVzLnCMNOd7b0GOqUB%2Fm8sh6SmrkcIdHGgf1hasTo3IgXlFeStjykW%2FP0ItO%2Fakea8%2B7Sc51LtO2%2BchSuXtHDoDSM7%2Bp4EL1vnqaRqHfJQsGMM%2FMJxdF8atATX3N52Nl3elFAbzdNe4kn7DPEi16Mx%2F4a9w9iPI6kQ5pz1yPMKVT8vo8t0rH06yRNJpJq%2B13AYt1OmqdBGAsFgWbvZTYZLT9GS4sn2rOo7TQ27Py1NysoC&X-Amz-Signature=104a41176693779da01a4a98542a11e91eecfa8cfe8d32dfbbc11ee2659ff333&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAFOFNCP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD66mN%2FD%2FGka5IPlyiUJdCLuFV6T%2FWzjBBQg1YoaC0gKgIgQJBmkbvyQZWpL9%2FqaQw%2BZUU2rHE26sfmPgJHWvreEyoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHEEiewryV32%2FuupGSrcAw2JT6fNcwK%2BQDJzbkLP4ilib5OX1LqHUOD5NuZ4sQowqHDTlyG%2FxfR2P5wR%2BV127%2BIz9zwT0iSXdIJh6cdQhHfvfQZdAkBMosWctSWKsgYjQSwPi6CO%2FzQCudIOtMrJzNBOH%2FImd9mU2zKW1KLJ7livqUm4FjwD0rfmnJ%2FWk2oQqnyWOiOVmmJXXXBK%2BZ%2BOHPcoASKnCj6qRT2HvPdFRxgo89GbtEXsgFWKKI7G0xq%2FJLTUG2RHVWxXsJjwpOoDFYnOkZKpuEvppr75BRk%2FlKeSvTYhj2qDTC8kJzEHLShbiWBqPYZLUogpG5lYfTXOHtf6X6p2P%2BmMYZnqFToPMy5kbKMbQNWTK7v0ITSDlY%2B7JX1jQt2oBthaiEMLRMXkDZkkiXZahEL4iYJMz6VL9XAD1ELTzTh8K%2FVuLkA6Tam3ZyRsy43ePLUAW%2FCIQQpl8wXOJLrJUouUUE%2B2iDDY3ers2N37JK6XZjoVLB9YJ55IAETAcV62w6sx40EpNXFbFMnuU%2F71XeGCYkvvui7CQTBsPCYWk0YbjUfYA1EBdVcu9J0q4zEgL2i7HjChpzaZ%2FbpRrDt2rTldUfBqi40OLif4%2BML0b7luVDh%2Bu2jbMNzeFv1GD%2FUrgVdVzLnCMNOd7b0GOqUB%2Fm8sh6SmrkcIdHGgf1hasTo3IgXlFeStjykW%2FP0ItO%2Fakea8%2B7Sc51LtO2%2BchSuXtHDoDSM7%2Bp4EL1vnqaRqHfJQsGMM%2FMJxdF8atATX3N52Nl3elFAbzdNe4kn7DPEi16Mx%2F4a9w9iPI6kQ5pz1yPMKVT8vo8t0rH06yRNJpJq%2B13AYt1OmqdBGAsFgWbvZTYZLT9GS4sn2rOo7TQ27Py1NysoC&X-Amz-Signature=1dc9f8473db566e768edad8a5b3a43152ddbeed393d57901938844d144271619&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
