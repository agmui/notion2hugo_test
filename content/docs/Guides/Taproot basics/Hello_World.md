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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHI74EMY%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF11inTKILAyGrbte0RBSQ8l5ffaWOhXNPWWmNaOrffzAiEAoVSk2tiSPjyFSWKV4o%2FU6%2B81L0MmZ7dzvmDlbnL75a0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl1uG%2FzKT1Rr9JjQCrcA7mjz7k0KmPqoICuc3fJSr3UNPbARxABtJGh%2F3bmBmchTiWjHs%2BuPtdPqMk%2FdBjdJUhidWi6DvuS71tBCUFu1n9Xyy5yFY9cTmLVpuLDJqSVlCmiPrZDopO%2Fp7oJLCMasw0QsymHH4JBbop5MWnlIaVDIYmv63ud1%2F81lNFe2usxtJI9loUNIc8ayW3mhSckMCxXQw1GJ4prMB%2FUGkXHrV0Gj%2BJrQ3TuQ%2BlyrYWc6WGChLYx0C6l%2F0ddSBnrY4gucK16UzezCL7RDJ4aQ4sy7q4z579HoK1KabruW7zp3skzjtPYGJUbPP%2B4mk4TcBueedn5VZG26BX%2Fa%2BCvZPrHUSR%2Fmm5GIMQV2avtlsOAeDpv17b4Drfu2cjKXkfQMt%2BAiOuVqC%2FN2SV7Tu8X%2BvhsDc0%2BoO3aZZYvJ3chI1rDrI9L1Qv2y6ZyXIRyjCxJUKSULyssaLPypo47QE3%2B8L0tnDJ0XFGA1O1umkmXYXFXO3qUEAGmbnYV%2BqTUL2O%2BfXZ9oYc43evRM3M%2FwKOqnFjA1SPlu%2BM7e8JK9h7crsRRB2JPOIKVMVqR7NdJXOq1yIUkKzjHeVr0%2BDiOKd0MxgthO%2FbvUaTSSZIAUL53y3Uh1RvOLpGIJMfgO4%2FK5ED4MMeP%2B8cGOqUBtxm3OuD8mX3mbKy%2FhnhJwna4v9yvtUTfwd0bUbhufY7LmbWn6XKfpmXF9d9gvg1q1YwOdBRUvZ%2B00LpgUEmzX2AXe6081IBnGLp9q%2F0fY088AJ152ofPCKQD5V4rd5rbbv9Yql6S6yqigDgrJybvMPnpMzPczJFySHrIuMFhRXZbNTJIpLI1GwGyRtgr%2FoSX1j0g4c0PzsXo%2FeqypQBZl7MOaaDr&X-Amz-Signature=8e70673e64d770c2c0ba6330069363444c89da74b025a4e3f7084277a8663f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHI74EMY%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF11inTKILAyGrbte0RBSQ8l5ffaWOhXNPWWmNaOrffzAiEAoVSk2tiSPjyFSWKV4o%2FU6%2B81L0MmZ7dzvmDlbnL75a0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl1uG%2FzKT1Rr9JjQCrcA7mjz7k0KmPqoICuc3fJSr3UNPbARxABtJGh%2F3bmBmchTiWjHs%2BuPtdPqMk%2FdBjdJUhidWi6DvuS71tBCUFu1n9Xyy5yFY9cTmLVpuLDJqSVlCmiPrZDopO%2Fp7oJLCMasw0QsymHH4JBbop5MWnlIaVDIYmv63ud1%2F81lNFe2usxtJI9loUNIc8ayW3mhSckMCxXQw1GJ4prMB%2FUGkXHrV0Gj%2BJrQ3TuQ%2BlyrYWc6WGChLYx0C6l%2F0ddSBnrY4gucK16UzezCL7RDJ4aQ4sy7q4z579HoK1KabruW7zp3skzjtPYGJUbPP%2B4mk4TcBueedn5VZG26BX%2Fa%2BCvZPrHUSR%2Fmm5GIMQV2avtlsOAeDpv17b4Drfu2cjKXkfQMt%2BAiOuVqC%2FN2SV7Tu8X%2BvhsDc0%2BoO3aZZYvJ3chI1rDrI9L1Qv2y6ZyXIRyjCxJUKSULyssaLPypo47QE3%2B8L0tnDJ0XFGA1O1umkmXYXFXO3qUEAGmbnYV%2BqTUL2O%2BfXZ9oYc43evRM3M%2FwKOqnFjA1SPlu%2BM7e8JK9h7crsRRB2JPOIKVMVqR7NdJXOq1yIUkKzjHeVr0%2BDiOKd0MxgthO%2FbvUaTSSZIAUL53y3Uh1RvOLpGIJMfgO4%2FK5ED4MMeP%2B8cGOqUBtxm3OuD8mX3mbKy%2FhnhJwna4v9yvtUTfwd0bUbhufY7LmbWn6XKfpmXF9d9gvg1q1YwOdBRUvZ%2B00LpgUEmzX2AXe6081IBnGLp9q%2F0fY088AJ152ofPCKQD5V4rd5rbbv9Yql6S6yqigDgrJybvMPnpMzPczJFySHrIuMFhRXZbNTJIpLI1GwGyRtgr%2FoSX1j0g4c0PzsXo%2FeqypQBZl7MOaaDr&X-Amz-Signature=832b23325183dc13bb11f775461d61c2e31130879f0ee8d50a9fce346dfad1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
