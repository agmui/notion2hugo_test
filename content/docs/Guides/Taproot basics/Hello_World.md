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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKJTBNS%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2BxFV60KiZlIPApBLWVKYRLyrtU6UM8hoYWaOERPAEsAiAnD%2FwNJhOoukXxr8SObXPtRN%2F%2BPyLrOxCPMHnomf0p3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMjJNwQ5sIEG25SYgVKtwD1N5zpxVH%2F0ocf9ToGJkpBlH3UHamyPfRTXJoCd7gE6MK9nLQRzEwFywa457HIgEjhK0MwSZ%2FZVFFLJM01Rng11vuxD%2Fv1o%2FUKfQXqlNgNpXPM7mpTuGBCwuLaZ5wVGvm1RIbwuGVs%2BjAaCJlomf%2FNuAMY2knaQ7rC%2BmBpM4HVCpwMHkXOEpKIatZTpTC7Y%2BSIiPcihtWX%2FHgfmS5rK3Q7gvfR29dw3guRFRvwDGAg%2F9b1%2FeU2rkhZqri3n9HoOeRoL26k3egE%2FLiyprR8ZlkIrH%2B%2BpeDRlA2ht4k9oZNIqbKeYie5EBlUoWp%2FZn1HHHauXOcR2uEqTLa8UOG45kqEaISRD5fjenjD2luKHMtS7fONEmuI1lMsD0Go1A0Fn%2B7MPUD651zHrJ7tgubWkIRHhmtyH4sC2dXsVumRL1jbgNvq1Y6sKTh7GMG4FvQpk3K4PQCfw0WHDoL6TdiJUgdMybVaZw8lxEshReMALDZNop%2BhC4zFJb3bHeLUAsO%2FpAC7b%2BsdE8LBwMsq%2Bbvk1WbBE0dDBXgE25OPa3o2qUj70x8Rvy519zUm0n2AsBXFP%2Fn%2BCciak3o4AS8AVm3o1gY%2BYfb6ItN%2BjBLisiX%2BRNYAnMqfK%2F6ThT%2BcbE7wE0w4dqDzQY6pgF6BV5mM%2FjQ2ngSkLm54L6D7SsBvcVabwHV7I3c%2B9WvZOgDY5sClRw19WqPN0G2SDGgMIHqAu4KG7awmoJoGaBb3RnMOZKMYktJOuFgKD%2B6kPRz8hMExE4D%2FI4fQle55LoeN5LOSGS2dsCF0dMfok3MiOBTdOdJFqFtBLFgZNXgbf4uwbvwqsRceE85aVjQkpStV4CMSJ2GRFBZ2aQXAg2zeibRjDCt&X-Amz-Signature=380c279600562caad6b503ab17d779c0daee4a05977bc4c443955980c0e10c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKJTBNS%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2BxFV60KiZlIPApBLWVKYRLyrtU6UM8hoYWaOERPAEsAiAnD%2FwNJhOoukXxr8SObXPtRN%2F%2BPyLrOxCPMHnomf0p3ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMjJNwQ5sIEG25SYgVKtwD1N5zpxVH%2F0ocf9ToGJkpBlH3UHamyPfRTXJoCd7gE6MK9nLQRzEwFywa457HIgEjhK0MwSZ%2FZVFFLJM01Rng11vuxD%2Fv1o%2FUKfQXqlNgNpXPM7mpTuGBCwuLaZ5wVGvm1RIbwuGVs%2BjAaCJlomf%2FNuAMY2knaQ7rC%2BmBpM4HVCpwMHkXOEpKIatZTpTC7Y%2BSIiPcihtWX%2FHgfmS5rK3Q7gvfR29dw3guRFRvwDGAg%2F9b1%2FeU2rkhZqri3n9HoOeRoL26k3egE%2FLiyprR8ZlkIrH%2B%2BpeDRlA2ht4k9oZNIqbKeYie5EBlUoWp%2FZn1HHHauXOcR2uEqTLa8UOG45kqEaISRD5fjenjD2luKHMtS7fONEmuI1lMsD0Go1A0Fn%2B7MPUD651zHrJ7tgubWkIRHhmtyH4sC2dXsVumRL1jbgNvq1Y6sKTh7GMG4FvQpk3K4PQCfw0WHDoL6TdiJUgdMybVaZw8lxEshReMALDZNop%2BhC4zFJb3bHeLUAsO%2FpAC7b%2BsdE8LBwMsq%2Bbvk1WbBE0dDBXgE25OPa3o2qUj70x8Rvy519zUm0n2AsBXFP%2Fn%2BCciak3o4AS8AVm3o1gY%2BYfb6ItN%2BjBLisiX%2BRNYAnMqfK%2F6ThT%2BcbE7wE0w4dqDzQY6pgF6BV5mM%2FjQ2ngSkLm54L6D7SsBvcVabwHV7I3c%2B9WvZOgDY5sClRw19WqPN0G2SDGgMIHqAu4KG7awmoJoGaBb3RnMOZKMYktJOuFgKD%2B6kPRz8hMExE4D%2FI4fQle55LoeN5LOSGS2dsCF0dMfok3MiOBTdOdJFqFtBLFgZNXgbf4uwbvwqsRceE85aVjQkpStV4CMSJ2GRFBZ2aQXAg2zeibRjDCt&X-Amz-Signature=eb9b15449269f9331c5e3205a83d9f7b3c22a870427964836e408bfad353bfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
