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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITORGT3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBL4VP70KncI8Pcl9OJ0KcVL%2FnZ68r9%2FMVWW0iI0pGAiAEqMSJrFNoz1GvK8e0qgyr494Yg608v158H6g63EUNOSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksR52oP0HWypiaY4KtwDIlhHk7zBxUIZKXosBVgLae6w3uvQ6GfYJQa8tH5i8mHLWnmD7%2FTOx1i8uaOpf7b2nuQikElC3Dc1u2RI7iqxE6MsHA1l%2FFFHNa%2FlJIJij%2FHNCmrtPAwPLtHI7HzKlLLoSFmc4LNVaT3cTZyZtPEUlaMqKWjubvE5d5fMvNaMXFeoF1O8qcmPizOWFi78Mg63Kg7kThO3m3uno%2BYTv8aJ6zS3Bb2uVmjPKY54QxI8LKZDFfD2bZWI5oICtV7LW4eWrCdcP%2FKI6OgNloiy3NHq3uiWgEfSY28O7nN6q2yi%2B2mai6qUuELY7OqZGqaxE0Vqdry6P1Z38AhdLmrpR4ArLy7amBDcrPCBgAhW1PKH8f9cbObUDDXwBVMGINCV4CbCSMV8%2BiEOUWK4lIuq3c9B2yvNrMJJiTtXLALBW%2FeAakpaz8Pk1w5CC81aMCQrvZdPyDrZYC3VzDYJM4YKUmXwA9s49mGb3NdcgsHyApDfiiOctnxYKPzeTSWtfzyBH0XGKyKiTRYJfmpDXCu172x3zQdWqejXFJz%2BXhdN1shbyfYCOENFKv10IyKXxtsGeQZGyVAfqcpaWh%2FX7%2BC5T1aDleF6Xj473iTtSuuFgELloAmEgcOU1rEJ4aWLQmAwqJnuvAY6pgERsrxAtpRXZ4Fwt1KAlQa4jvfM3wG3fs3tBldBmAC4hm44%2FY%2BavomRFG1x%2FWAwFdpc%2BQZxS591zCC2%2FWG%2BCDnQ1hZEzznM%2FSI%2FmahC2dKZzKmtw%2BBk6%2BA2tzyF9i6Gguslj96cWk4H8179Rqo%2BhA0EU27SUI2WVdcPYwtmvLarjdRqQdWPQrONulPm2SaeZjDciRucatH7iDtsAFKtJjAtsC8VaDPy&X-Amz-Signature=2bfa25cab6de9a1b61b0b29d0a85a266d30780edb6517d28a2097e7909bd07d1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITORGT3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBL4VP70KncI8Pcl9OJ0KcVL%2FnZ68r9%2FMVWW0iI0pGAiAEqMSJrFNoz1GvK8e0qgyr494Yg608v158H6g63EUNOSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMksR52oP0HWypiaY4KtwDIlhHk7zBxUIZKXosBVgLae6w3uvQ6GfYJQa8tH5i8mHLWnmD7%2FTOx1i8uaOpf7b2nuQikElC3Dc1u2RI7iqxE6MsHA1l%2FFFHNa%2FlJIJij%2FHNCmrtPAwPLtHI7HzKlLLoSFmc4LNVaT3cTZyZtPEUlaMqKWjubvE5d5fMvNaMXFeoF1O8qcmPizOWFi78Mg63Kg7kThO3m3uno%2BYTv8aJ6zS3Bb2uVmjPKY54QxI8LKZDFfD2bZWI5oICtV7LW4eWrCdcP%2FKI6OgNloiy3NHq3uiWgEfSY28O7nN6q2yi%2B2mai6qUuELY7OqZGqaxE0Vqdry6P1Z38AhdLmrpR4ArLy7amBDcrPCBgAhW1PKH8f9cbObUDDXwBVMGINCV4CbCSMV8%2BiEOUWK4lIuq3c9B2yvNrMJJiTtXLALBW%2FeAakpaz8Pk1w5CC81aMCQrvZdPyDrZYC3VzDYJM4YKUmXwA9s49mGb3NdcgsHyApDfiiOctnxYKPzeTSWtfzyBH0XGKyKiTRYJfmpDXCu172x3zQdWqejXFJz%2BXhdN1shbyfYCOENFKv10IyKXxtsGeQZGyVAfqcpaWh%2FX7%2BC5T1aDleF6Xj473iTtSuuFgELloAmEgcOU1rEJ4aWLQmAwqJnuvAY6pgERsrxAtpRXZ4Fwt1KAlQa4jvfM3wG3fs3tBldBmAC4hm44%2FY%2BavomRFG1x%2FWAwFdpc%2BQZxS591zCC2%2FWG%2BCDnQ1hZEzznM%2FSI%2FmahC2dKZzKmtw%2BBk6%2BA2tzyF9i6Gguslj96cWk4H8179Rqo%2BhA0EU27SUI2WVdcPYwtmvLarjdRqQdWPQrONulPm2SaeZjDciRucatH7iDtsAFKtJjAtsC8VaDPy&X-Amz-Signature=d268b7b8a28044ec0caa8ac86b7a56e253829262ad1752d3711ac0528ddd569d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
