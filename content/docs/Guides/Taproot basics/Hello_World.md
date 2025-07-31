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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=76369d957b0e894bb30a09c0fd180de12833e45411398c9744e55236b099751c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYPTGW3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvsFaZjBKs45Aqd1j4t5%2FtboCCt5AmOmKes%2BIfXp0H1AIgO%2BdhTKnwCb41xTVVePi7%2BJmJa4TijVUlP0VKbUykFZYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyn0Vq8JFFzEocYrSrcA7XNPfVFygWVvYAS8Mjy%2FqLStncAU7uhV%2BrnTuH6fc6bizdAduOq2RUpHRqB5Vllj0lkNlKPVRkXv3Hvl0%2FE%2BZ3BOy3V245n9E1nFJhgvtYvX4LQLISJHn%2BNBFf7fiSD0lA7IB06B228TYB98QyBeOR6o7s7nbNZV9SKgMoedfIfPQ9DqwXlongausbM8dcgKFBZOVClZ0eNVv6kdriePD5c1Q0egoEIeHA0uTJ69FXEmL1ydms4VzKdqf%2B7GwY4564Pxkg4bus1jiXsyI5g%2FMIDEO%2FFO2oTVyNz2VjJXUBec9Ga2%2FrdDX54bcapiuJ1MWLxYrcwXuwZlB4Lf4mjL1CjZN3oAokeuISPAXw%2BQ9IZyC2CbWGgG1y7Lmdu5aI5tlh7tVrs%2Bt%2B3yhSG6S8lT1wTQFcBNGr1zTQ%2FpolJIixSwwzixuhVUL%2F9Yn4ROY4iDvXFLYmEpB7sxBDMuqPDU2tMjkvhP4z%2BvG8V3PfITGmJ2RwOnynRreqHLHFBhMSP%2F0rLuXLJTrF8NUWFuuvUtAKRAykRevK8D%2Ft%2FgbkCWa%2FHwl2r%2BdGOeqmkMKxEqqnKWocQOCmRW9JGLIgyMKYGE3fm4Hh4SoLazIbFK8xU09SHQ4NW%2FC3dPdBMMr5XML%2BQrsQGOqUBBefsv6klGKvdxm9yJzb8bCr0EAh4BWPoS%2Fi7D50G5aad5dIHL8lmqtvX1a%2BE2h%2Fzro1uJvuq8IVNoRiAK4Up5%2FQQXYSm29YgYEEueYaaXa4hegKqgg%2Fr5H6U7em6mz0ccP9ftKxAyBVrDLusmhkPbHlVhAPuLzfNPvU0BfuBaXH4Jbp2bhFwBZjBex4dk05n21qBVwZIxOglNMxE%2FtLVVg32fwhD&X-Amz-Signature=4393468955a15fcf9e6442fab77f28c8ff679189659b51a2a0dfaa8beb25f48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
