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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=9efd7bd6ecc7a198d6aa326ad7c6d1140df47ce4f445255f22f9a69a002ec9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2GQMPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9UbYfN8zHl18qS2jiZc0FAhKUf42GtLaqcGAXSiDnPQIgQR0UVtoZpvM11EHUoGeIlLAMqoNRwmHyWhXHPaLKMmcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKV9MtiDIGR4VZjEZSrcA7VaTi1nesjhsxkR%2BGhz29XP4XuO7Z7NSleIm4nYHaKam2Aj50%2FxYAdzdj8F3Wd%2B%2BapSZ7MPfQAGcyK1oU2hNC%2Fy2B4WSIQuzaEgNckSbaitS5wdIBRZDwtR8XCyWSVuPpfI%2BHPMmC7LDCtsQCptGIab5iw684AFLN7H9AqhfTtuE1AXXpjGnnpYdIRNSkL%2BSjesBVnNq2cVRKRLZd6FltcYPyTVHBTLRD%2BdUD%2BMblyweX7IVy4MCyXBuYYPbn0cU53hpqsXsfGe5atnHX1iN1vMf66bE9HzalVjPGfFGvZFh%2Fv1T0g2OO3iQHjgOHLVYycJVK3i%2BqXwwu%2Bncoiodx1EYf34us%2FHxsYQ0s6ZLnEAHTy0xGnHw0Y88WOB%2FJvFntUxSK4%2FIDhuRDUTeY8%2FD8kHK9c7W%2F5v5mnA7P0K4W5i56C2lDmmbZZ%2BRMXNa8v7eghbGiQuewUvGS44J%2BaRoVmtNf3wGO8nqnXbMeufu2ZDiZTsNHpmoaVeHLrrvDG8710kCHile%2FBF9mvRJZxSuCR%2FdWbSNaWUkIx5xLNpWaKyYKsngiEN2xhvr%2FRjjq%2FQrJDGqbZsXY%2Br1z8DDuMbwM3D7g3uBs8SfnmVi7wX5uJT5u7fmQ1WO7gAyqIAMNv598QGOqUBvWnzgEQTcBfACbAKa1k66xYnAtR3C1OklHNe94nkojxb58JRd7YytV96%2FY8N%2FDCc4qq9dGOjW9C2%2BcZ2Kd%2BCUdE0uwlF9vFYLYqoIkSBx%2Ff9U2hI5sgTws65zeP9pk%2FRL7Wkgmz7qYHr2DQAJI%2FQ2UEzjOiqBYwS%2BOYvvx98weUcpfmndlbW02kGspbUsK1YXDp9KDNZqwXhOIEW64fn4DbIHvIx&X-Amz-Signature=0520ee1565f65f924103fa6fac1cc7f128adb2ca94dc83415e2c0f52a1d4172f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
