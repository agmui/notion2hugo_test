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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6CXNKC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHNIv0Qbr4UsLxuhY7DC0chLCluV0ZrO0dZ1hqVCRMprAiBtYUEUmVnMbABcgt9lzYGqI05whb%2BRroKKnW%2BSmtLFeyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5nWbtVRLbiNmO6AKtwDqJ73PzhlChLdDR%2FDCj99%2F2M2acGBt3%2B%2F%2BSM6wVMZ%2Fl8oDDPb8SOaOQD6%2Fqm%2BogHydD%2BSFI0QB2wkPAcamIZbZaZR9QuCpK5VfEsx8jw%2F6Nrk3wuD6HfYsjf7PlWSz9FIrudJwvnJ0HGZgMG1E7OG39%2BNCb6SD4T4SUdEHGPiGRvvApzIQFKzxFnKSjPyIbC9df9%2Fz0UJ%2FHZBeNMOSM65EACAvAtaHXDZTCPL9X8U48oT6RcdNHmaeBBAkzRDDf88GR2x%2F03ylF5Sg0PpDRW2tb4cFn0VtW7W7P2%2FdaRoDYuhcTz03jGWgZLjoR%2FN4cuLULwIBB8W5XHx402dDmEF1pikJjR5U73o%2F1q3usXIeIxrxfdgPzSu6IX49a42Bx6zO3P%2FYy0srLZsehfTBxiYrjoVc0Dr5r%2FkzgCYwMR1Gr4Zr5%2Ba3BEr0g377mSycJJfgDSjSG3O7HdUHMhgDkSllLkd%2Fk%2BwrXy%2F%2B3d962SWLYt2H6qm5Rr4VmwjbDitEZfJVrWKrn%2Bzuzmm%2FeLfgkHHXHYttkQZyqOh9YT8Y8ZeakvMc05Kx6XeTDNR8%2BrA2sB2IC5jVqYHkld1q55XYsmo%2Fc8rkDvagk1K7vkDsu7UTa4JInOarimPJBUMjCMwycnTxAY6pgEZYI95ZqcU1RzMtDxKqsZZQKJOw3hjIJBPTVNZxkIESyS4cPSB9xeVfKOg%2B5v0A3HI6IB9o6hgvUTFiUEjR51yBYNh4loEJAhq16%2FpN45jta%2BHNpFs74L8qUb7kXLaMRjgSu2GoH6j7X4HDV3os3y4BzsM7FC4P3df8iIac5JjKOZmkAGcTUgpPC3d4jBzMb05EHEWf3VHicseQgLRBei0%2F3TvRjPn&X-Amz-Signature=2a1f748006f73c83c2a0cf2ea684b4a45b182d613e0ec69b2cae186be6b1370b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX6CXNKC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHNIv0Qbr4UsLxuhY7DC0chLCluV0ZrO0dZ1hqVCRMprAiBtYUEUmVnMbABcgt9lzYGqI05whb%2BRroKKnW%2BSmtLFeyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5nWbtVRLbiNmO6AKtwDqJ73PzhlChLdDR%2FDCj99%2F2M2acGBt3%2B%2F%2BSM6wVMZ%2Fl8oDDPb8SOaOQD6%2Fqm%2BogHydD%2BSFI0QB2wkPAcamIZbZaZR9QuCpK5VfEsx8jw%2F6Nrk3wuD6HfYsjf7PlWSz9FIrudJwvnJ0HGZgMG1E7OG39%2BNCb6SD4T4SUdEHGPiGRvvApzIQFKzxFnKSjPyIbC9df9%2Fz0UJ%2FHZBeNMOSM65EACAvAtaHXDZTCPL9X8U48oT6RcdNHmaeBBAkzRDDf88GR2x%2F03ylF5Sg0PpDRW2tb4cFn0VtW7W7P2%2FdaRoDYuhcTz03jGWgZLjoR%2FN4cuLULwIBB8W5XHx402dDmEF1pikJjR5U73o%2F1q3usXIeIxrxfdgPzSu6IX49a42Bx6zO3P%2FYy0srLZsehfTBxiYrjoVc0Dr5r%2FkzgCYwMR1Gr4Zr5%2Ba3BEr0g377mSycJJfgDSjSG3O7HdUHMhgDkSllLkd%2Fk%2BwrXy%2F%2B3d962SWLYt2H6qm5Rr4VmwjbDitEZfJVrWKrn%2Bzuzmm%2FeLfgkHHXHYttkQZyqOh9YT8Y8ZeakvMc05Kx6XeTDNR8%2BrA2sB2IC5jVqYHkld1q55XYsmo%2Fc8rkDvagk1K7vkDsu7UTa4JInOarimPJBUMjCMwycnTxAY6pgEZYI95ZqcU1RzMtDxKqsZZQKJOw3hjIJBPTVNZxkIESyS4cPSB9xeVfKOg%2B5v0A3HI6IB9o6hgvUTFiUEjR51yBYNh4loEJAhq16%2FpN45jta%2BHNpFs74L8qUb7kXLaMRjgSu2GoH6j7X4HDV3os3y4BzsM7FC4P3df8iIac5JjKOZmkAGcTUgpPC3d4jBzMb05EHEWf3VHicseQgLRBei0%2F3TvRjPn&X-Amz-Signature=248fe627da2443f700ed99fede79c570521b4bf15428fc3f3bfaa745ce3cefb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
