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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FECATNM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ouqnlAwGrrJxBcxBj%2BXP%2BOP072iLWDHS2uesbdyK1AiAQbZgbZtWNfYkDZRQQWFJhFMEJEoiJAYmQBlLOU3TmJir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQ5BytVk1MkGVWlPGKtwDR6nRvUcSfwVkJbFyzhW%2BB5Aw5hJ2GoE5%2FY%2FhoUR7AnmDKs9jL8ddk3pcu%2FLBsQ4vzsqn9%2BvOtYnce749cZL2EqZS05OPPexZlSgKreJSyVdga%2FfFykCzuerHUpTYLr9nfPxoyV86YD3m3t6fSPO7OuVeELhCLvN6YqZauUqFwYItsuJ2dL%2FmWDOB4jWQb32RHsEHXZbifJNvKELL6xS0czJIcNCJWGugIcOvgRfiQtwfdm5jWfKtJcs15mIm%2Fh%2F4J1v54VmmxuYG1XdZ740adIhLQa8A5H%2BffilXued2GFbq0umbETSvOgwXW9usgs%2BmaWksck2yJhN4Ef7lFw7ddvZ5yts2V4YRXSkkJUknSHN%2FHWpUc3TX1nbu977z%2F3VwGwiE1QSLSedgKl7U68h7EzRrG9d65kESFwdAYN%2Fc2Zq4SdHJNJUQ49P9mC1VHkPKSTvnlFLKSacvlX0NSS9eVrhkmUEZY6s8C%2Fcu5uvgU8AZDob04vydLrM3va%2B1hJodeY2pJU732WdbXROYwMOQEYaaROP9CEkTPgsB%2FVI5km5%2F0GTJ0hDegeZFpJtOp6V9NvUcpNcp4fwE8%2F%2F9AM99w7pmbDLU7iLODDuOPxDH5k35ZIcu6urKux7gPSYw%2F%2FakvgY6pgE761zZNAD9SWZ0b7miLE7%2B5QxENvpcSe5ZTjQQaoTCicLgx3hVcO9GR3v85AWYBZDt0pbb0wgZxRHYNkjU75JbNEiqZqB9V1tQ7%2FLvkwu2Vx%2BETtDPfPqu%2FlrOIvCbrbDVbbYdCtnuSjpqNP%2B4C2H92uJIjGsyPthtIBbBs82upy749JZ2zWJISIilnGPg2rsIzmv9Mse7raiZsmkUsPpaNU77rpw%2F&X-Amz-Signature=c20a21b78a969527911e078b65a2f47c6127b7fbe56e9c8e9251a7d0cdd3613a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FECATNM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4ouqnlAwGrrJxBcxBj%2BXP%2BOP072iLWDHS2uesbdyK1AiAQbZgbZtWNfYkDZRQQWFJhFMEJEoiJAYmQBlLOU3TmJir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQ5BytVk1MkGVWlPGKtwDR6nRvUcSfwVkJbFyzhW%2BB5Aw5hJ2GoE5%2FY%2FhoUR7AnmDKs9jL8ddk3pcu%2FLBsQ4vzsqn9%2BvOtYnce749cZL2EqZS05OPPexZlSgKreJSyVdga%2FfFykCzuerHUpTYLr9nfPxoyV86YD3m3t6fSPO7OuVeELhCLvN6YqZauUqFwYItsuJ2dL%2FmWDOB4jWQb32RHsEHXZbifJNvKELL6xS0czJIcNCJWGugIcOvgRfiQtwfdm5jWfKtJcs15mIm%2Fh%2F4J1v54VmmxuYG1XdZ740adIhLQa8A5H%2BffilXued2GFbq0umbETSvOgwXW9usgs%2BmaWksck2yJhN4Ef7lFw7ddvZ5yts2V4YRXSkkJUknSHN%2FHWpUc3TX1nbu977z%2F3VwGwiE1QSLSedgKl7U68h7EzRrG9d65kESFwdAYN%2Fc2Zq4SdHJNJUQ49P9mC1VHkPKSTvnlFLKSacvlX0NSS9eVrhkmUEZY6s8C%2Fcu5uvgU8AZDob04vydLrM3va%2B1hJodeY2pJU732WdbXROYwMOQEYaaROP9CEkTPgsB%2FVI5km5%2F0GTJ0hDegeZFpJtOp6V9NvUcpNcp4fwE8%2F%2F9AM99w7pmbDLU7iLODDuOPxDH5k35ZIcu6urKux7gPSYw%2F%2FakvgY6pgE761zZNAD9SWZ0b7miLE7%2B5QxENvpcSe5ZTjQQaoTCicLgx3hVcO9GR3v85AWYBZDt0pbb0wgZxRHYNkjU75JbNEiqZqB9V1tQ7%2FLvkwu2Vx%2BETtDPfPqu%2FlrOIvCbrbDVbbYdCtnuSjpqNP%2B4C2H92uJIjGsyPthtIBbBs82upy749JZ2zWJISIilnGPg2rsIzmv9Mse7raiZsmkUsPpaNU77rpw%2F&X-Amz-Signature=ccba47e81d7f47d96f5338f78080e4c5b7d547ddcfda0905f7dcad8c8dae0b59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
