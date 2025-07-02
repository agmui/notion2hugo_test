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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETYVZT2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAldhIWhWxED08qNa73yR6SF5%2B6ADWZp%2Fmb6MgyRL51ZAiBevBxLryYsLKzO3PYDC%2B8SsL5qpAZuXr9aeRsff49rHSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7GHtXLAak50O4KsKtwDuVCIu7Cn4nIBmHBl0QDJgIqA7JqyEDqjWljeSnXwGEB9PGnoZeOGsmIo3AHvch5LtJRCwweF%2B4TJwtPVSgdke09N9z2%2BDX7me8sQs77VaMiyf0FSY%2Bp441XNyBjQjqXGbLIbsacch6JI2aPC%2BfSVmKgbRqkrCYBlcCYXZNGbbaivGgFemZWEgQKu23wwVnhiGGAWT1hTaVrf2DMZrryKvOTpRpOJ1JEgqf1OBTe6KQHw5x3npDEcEjms2JsJsymR9cq56QsGu2utI3baPGyFIBbF%2FgA%2BUq9gHvsakgWsrP%2BlmmPFA%2FZoFIRbX8LwMYCLrdn2Z4a2FqRRRlCrn8v15j%2FLnmgFiWp0lWJv7wtpXAoVLrQjqqz60PM6knbVImpZ4LxejQbkR5qB88YV89Ca9Dgs4JtJiPh8H8omD%2F6tTXmfzzkCj1zswncuj0ebm5sLdTLwbg1lpYp8hjLIbyZ979r0LXecqUDAundmdb8L9Y1Cq7m%2BoC%2B1Y2GvklJt7cqJotCNvnizNv%2BZPqylqLRBW17gljW7a4gvMuXvacOes8PfqNvMz0DNLcIwmts06%2FOgxYpG1ES6NM%2FbKs01bl4%2BZU%2F4q%2B6Nyk0yDPacZxfn949Aub4AxbcNKcLOop0wuL2WwwY6pgGwgy1ea8vqGyhLzbO9Jh1rcUZA3Q7M6ll7iedjsuVCVjIWeXmtofJs5QdhwBeTETpL1e7u68HniEim%2FHvgulUsXKaz1yURSgR7ptcVMnEbKZRmBB3utgj4OQaBqD9P4KBURqak1uNjUexNndHkBb4FS7DWNXehECGMDrjnyEBBbhJEkDWDlJW5oUIbfuJuHp2X1EgIKXVfX96oO1DO4pqC8yPMQ8fB&X-Amz-Signature=d8ab7cb171b81e3cc8f35aa16118c53b87fa5826a79f803ec67ffb9ca00bc943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QETYVZT2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAldhIWhWxED08qNa73yR6SF5%2B6ADWZp%2Fmb6MgyRL51ZAiBevBxLryYsLKzO3PYDC%2B8SsL5qpAZuXr9aeRsff49rHSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7GHtXLAak50O4KsKtwDuVCIu7Cn4nIBmHBl0QDJgIqA7JqyEDqjWljeSnXwGEB9PGnoZeOGsmIo3AHvch5LtJRCwweF%2B4TJwtPVSgdke09N9z2%2BDX7me8sQs77VaMiyf0FSY%2Bp441XNyBjQjqXGbLIbsacch6JI2aPC%2BfSVmKgbRqkrCYBlcCYXZNGbbaivGgFemZWEgQKu23wwVnhiGGAWT1hTaVrf2DMZrryKvOTpRpOJ1JEgqf1OBTe6KQHw5x3npDEcEjms2JsJsymR9cq56QsGu2utI3baPGyFIBbF%2FgA%2BUq9gHvsakgWsrP%2BlmmPFA%2FZoFIRbX8LwMYCLrdn2Z4a2FqRRRlCrn8v15j%2FLnmgFiWp0lWJv7wtpXAoVLrQjqqz60PM6knbVImpZ4LxejQbkR5qB88YV89Ca9Dgs4JtJiPh8H8omD%2F6tTXmfzzkCj1zswncuj0ebm5sLdTLwbg1lpYp8hjLIbyZ979r0LXecqUDAundmdb8L9Y1Cq7m%2BoC%2B1Y2GvklJt7cqJotCNvnizNv%2BZPqylqLRBW17gljW7a4gvMuXvacOes8PfqNvMz0DNLcIwmts06%2FOgxYpG1ES6NM%2FbKs01bl4%2BZU%2F4q%2B6Nyk0yDPacZxfn949Aub4AxbcNKcLOop0wuL2WwwY6pgGwgy1ea8vqGyhLzbO9Jh1rcUZA3Q7M6ll7iedjsuVCVjIWeXmtofJs5QdhwBeTETpL1e7u68HniEim%2FHvgulUsXKaz1yURSgR7ptcVMnEbKZRmBB3utgj4OQaBqD9P4KBURqak1uNjUexNndHkBb4FS7DWNXehECGMDrjnyEBBbhJEkDWDlJW5oUIbfuJuHp2X1EgIKXVfX96oO1DO4pqC8yPMQ8fB&X-Amz-Signature=2677fbccdebaaf3c88765558842d72ea05c819e2e352eb855f2096668ad4a4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
