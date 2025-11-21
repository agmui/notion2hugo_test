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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DIOPG4E%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDbIt0Vyl%2Fm3J9Eu1PJLVgnlAePVOz0QwLr4Hz8KIaqeQIgEBxLruyRGNnbpVv93evJbnPW7M5uFENYCJ9TYaaINTsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJe2wXPpXe%2BI5wi9vSrcA9%2F3WM%2FZMl1UNv9vqfpKm8UZKeZV%2B84EpmFi07JHq3YTN4L7HybC0J7hZc38xD5d8y8HdLevFARKClcEtmpNuMd29c5xLdPbg2LZp7bmllGjipeizQM3cDS6HZ8GqJRz2z%2BzPKuxSrtpP7GLyCEpvCsVIJkCQeWNH8VbkHdTXVWVYUxLE6AtVb8UUpE8DUV9fniv5YYy4G4MoNdNNBeDJ2fPUeNqWmh2OnDKHLbnG%2FQ6S0OSbpGcZdR5Br%2B2z3BxdTb1Rvglypn1eg9I%2FRxn5ldiO8M7AgY0NGZBZ%2FZdampbVQgOAY%2BdcKXs%2BNq2CqMdeZt8L1E%2BVEFjziql7jQ05v2fLblzHwCtGXBwy1HWe%2Frm2%2FaRxFEzuB%2BVH%2F%2FjHhkGnxc1sqx3cDJah%2BValy%2FXs9LsdYz3M5uWgZTStVmEvSPQcGZ3hA33rFIQ0my5frUMu35GKc3eydFG%2BcUTYedrZHRioCYImZN9aiWMDC0xOWTd9y%2Bu9zzJymEmKTayu%2BqSfmh7xWN8H6Vih4PAlAQOublSQwKRFX1gqGKu5WirObmhUg%2FlvLhx2Jt9NuZCf1zUv5DN8OzH1XFh1ytjWSsq%2B7RT50QGet%2FpSa23wcvutIAZiFoViYQ8GuVhbGGLMLmB%2F8gGOqUBVMIq8yfK%2FYDpoke4ElIYt7s%2Ftfe9yHEmiB%2FIvGh3r3QmM1hEtNAP%2FEpSaG2FNM4UZB%2FYlL3rkGKz4RqZtvOrOS5Tp9bbZ7NUEHjthdcc%2Fp6ffbAUz56eVnJPML92VA1SCPjeQsP0NPQIhhiI%2Bj9LYCaa%2FJdNhBp2V3%2BQVH0spD%2FhnNBI1fKAZivfqKxvyrQyEyCgeN6V6UWtfcYM31zlEJJB0oDQ&X-Amz-Signature=d3ea6263a72b100ded7740ab06c9355d1aaeff7b021e741e48ce9ea189ddd273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DIOPG4E%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDbIt0Vyl%2Fm3J9Eu1PJLVgnlAePVOz0QwLr4Hz8KIaqeQIgEBxLruyRGNnbpVv93evJbnPW7M5uFENYCJ9TYaaINTsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJe2wXPpXe%2BI5wi9vSrcA9%2F3WM%2FZMl1UNv9vqfpKm8UZKeZV%2B84EpmFi07JHq3YTN4L7HybC0J7hZc38xD5d8y8HdLevFARKClcEtmpNuMd29c5xLdPbg2LZp7bmllGjipeizQM3cDS6HZ8GqJRz2z%2BzPKuxSrtpP7GLyCEpvCsVIJkCQeWNH8VbkHdTXVWVYUxLE6AtVb8UUpE8DUV9fniv5YYy4G4MoNdNNBeDJ2fPUeNqWmh2OnDKHLbnG%2FQ6S0OSbpGcZdR5Br%2B2z3BxdTb1Rvglypn1eg9I%2FRxn5ldiO8M7AgY0NGZBZ%2FZdampbVQgOAY%2BdcKXs%2BNq2CqMdeZt8L1E%2BVEFjziql7jQ05v2fLblzHwCtGXBwy1HWe%2Frm2%2FaRxFEzuB%2BVH%2F%2FjHhkGnxc1sqx3cDJah%2BValy%2FXs9LsdYz3M5uWgZTStVmEvSPQcGZ3hA33rFIQ0my5frUMu35GKc3eydFG%2BcUTYedrZHRioCYImZN9aiWMDC0xOWTd9y%2Bu9zzJymEmKTayu%2BqSfmh7xWN8H6Vih4PAlAQOublSQwKRFX1gqGKu5WirObmhUg%2FlvLhx2Jt9NuZCf1zUv5DN8OzH1XFh1ytjWSsq%2B7RT50QGet%2FpSa23wcvutIAZiFoViYQ8GuVhbGGLMLmB%2F8gGOqUBVMIq8yfK%2FYDpoke4ElIYt7s%2Ftfe9yHEmiB%2FIvGh3r3QmM1hEtNAP%2FEpSaG2FNM4UZB%2FYlL3rkGKz4RqZtvOrOS5Tp9bbZ7NUEHjthdcc%2Fp6ffbAUz56eVnJPML92VA1SCPjeQsP0NPQIhhiI%2Bj9LYCaa%2FJdNhBp2V3%2BQVH0spD%2FhnNBI1fKAZivfqKxvyrQyEyCgeN6V6UWtfcYM31zlEJJB0oDQ&X-Amz-Signature=a84f250fadf3343a43fe6cb9f7639112e47f490e41b7f38ca6354b5ad51c5612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
