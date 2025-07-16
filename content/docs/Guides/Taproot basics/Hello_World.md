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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CU2E26S%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDgjXWudLrbT3GnlhlK5J5UpWdExIqH7h%2BJ5OmojEctlwIgQRYhR1FoWSFLsavFQtYu7arzb38%2F7rO519Wet4Poj3gq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJBvWRMqZygO6tVtgSrcA2Z68CLa6kKLvpyOs2WayYXbES5KTe4kmk5KZhTAddJw%2BKv3fq93AU0MoxngGZ7FpXVboQRpMY2LJ45itSSOpnZg5A9%2BuZAsC9rz4yTvdao8ahDiEgIo9hjeyH2X6g4qP%2BwxJ7xZxsGaQRavfmmtZqii7DMXxCyYntiBWQDchJDU%2BpMBaTtuWO82gIgk8%2F71e0wdPW4XVjJohWsioJQiFlm4RCLlClezclgzhTLTqmHEWnVbG8yNBAnxDlSTvr0Z9MQzjdjP3b%2FaeKbJFnk%2F4llZ%2Bz6uK8akriCEiKpR0TC98%2Bl5Ku6znKp8B4TId%2BzYwN0KZP%2FO2Jei8m0GdVHzD5yL34lrcx3l8LHFwAhRNhuMT80jlulA6u7sLLlIrsYNC8MXAotwSofcvXkf7ok9UQH1GKUaX%2Fthcl3pyI92z8PtzX4lNImFunJ7GUuZpUofnnkrqJcHBVW7Xx2SlSvrGVIy5qmqkFtBCRiAEBBhvNVeoR2blijDdDofWnDoBs%2BhEcaWBm5gd3hxP2yzVjtw6nEcm9U4yAqYDkGf8G0NmEN4zM9ZyKrNS5OWFBzOV6n5QbO%2BX8EsMzZYQ61wtrsv6alcqsTh0xVoTFRCUtee36eWRNQ39H9UTqTOYWyaMM%2BT3sMGOqUBP4T9GQeb38E4otsmKirwbfAbslPV0bgXDriO0OtOfxZSmiXS%2Fa8%2FzuXWv8zBVyl%2FMM1JUCOX1qyCpKJcSM9QOq%2Bn5aVMkI0tvdoUYgbCGbwtLzepUMg4f24o4ghelBuW0WpU%2FM9x2AQO%2BxVWtYn2d3hJafa%2BamM8v02Vj6L4L1xi0eComf9VXH%2BcmcasfwVGKACDwsW9ZLNefYyWQFQqsGtq5BNA&X-Amz-Signature=5efd6ed12ed358873f16df618bef8f9fe690604281dec168d5efd515d3024998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CU2E26S%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDgjXWudLrbT3GnlhlK5J5UpWdExIqH7h%2BJ5OmojEctlwIgQRYhR1FoWSFLsavFQtYu7arzb38%2F7rO519Wet4Poj3gq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJBvWRMqZygO6tVtgSrcA2Z68CLa6kKLvpyOs2WayYXbES5KTe4kmk5KZhTAddJw%2BKv3fq93AU0MoxngGZ7FpXVboQRpMY2LJ45itSSOpnZg5A9%2BuZAsC9rz4yTvdao8ahDiEgIo9hjeyH2X6g4qP%2BwxJ7xZxsGaQRavfmmtZqii7DMXxCyYntiBWQDchJDU%2BpMBaTtuWO82gIgk8%2F71e0wdPW4XVjJohWsioJQiFlm4RCLlClezclgzhTLTqmHEWnVbG8yNBAnxDlSTvr0Z9MQzjdjP3b%2FaeKbJFnk%2F4llZ%2Bz6uK8akriCEiKpR0TC98%2Bl5Ku6znKp8B4TId%2BzYwN0KZP%2FO2Jei8m0GdVHzD5yL34lrcx3l8LHFwAhRNhuMT80jlulA6u7sLLlIrsYNC8MXAotwSofcvXkf7ok9UQH1GKUaX%2Fthcl3pyI92z8PtzX4lNImFunJ7GUuZpUofnnkrqJcHBVW7Xx2SlSvrGVIy5qmqkFtBCRiAEBBhvNVeoR2blijDdDofWnDoBs%2BhEcaWBm5gd3hxP2yzVjtw6nEcm9U4yAqYDkGf8G0NmEN4zM9ZyKrNS5OWFBzOV6n5QbO%2BX8EsMzZYQ61wtrsv6alcqsTh0xVoTFRCUtee36eWRNQ39H9UTqTOYWyaMM%2BT3sMGOqUBP4T9GQeb38E4otsmKirwbfAbslPV0bgXDriO0OtOfxZSmiXS%2Fa8%2FzuXWv8zBVyl%2FMM1JUCOX1qyCpKJcSM9QOq%2Bn5aVMkI0tvdoUYgbCGbwtLzepUMg4f24o4ghelBuW0WpU%2FM9x2AQO%2BxVWtYn2d3hJafa%2BamM8v02Vj6L4L1xi0eComf9VXH%2BcmcasfwVGKACDwsW9ZLNefYyWQFQqsGtq5BNA&X-Amz-Signature=bad928b6d2ff37dcb1197633902913400ccee7cbc68282f4f0d3761151441dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
