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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MM5LGQN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCRYWEDFszIyWAncgDADvtMTOItDHUMOoG76SY%2Bf57zWQIgA4DMkCkMJbbYUU2azqJfztFV6Sh%2B%2FYj4lrmefVHO3p8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDg47STbD12Kq3aKRSrcAwGYmj1dsQFswsNIjOOk171He2uWzCHyZQK1S8RU9u20V3%2FB9bNgsX07dOWouEdltBrwgow6000AEViTkS70enfCkufOQeUBgEjcESV4nEtsdXwaBXVuoNh315oaF6j5ksbu60r%2By2uEKeO%2Bid19dJdUFCP%2FxVYBYLWJNG1Fc9TsbMNoDdEzOVMZOlwNmsw%2FLsRfOT%2F%2FO3LGlYU%2Bw%2BM%2FFCA34J0cTMlgr1VSCXslaZ1TeQ%2FgBtGq%2FH36U9SFvytnQiqD7KZnOFzj1dRHDZA4a1gRcobJeMxhAFWI7VyPypyRMI2wskJXYAkS9Neg7w5xPu1799mbNLjVHsYpGpgM%2BOfOTPOBCbsoLB5a%2BfWvr8T2D4ZNbZ2mJeeL6sNNQSRi0jZOyiYAVRBhMIMZY2kHcGB08yBnEKfPlR4KucU4brKa%2Ff2CTEZF%2Fiwsyi%2BSFkkGVNPBomoB4%2BzwyIRiYT%2B40nRAbnS%2F5zxYDoeentHqQxjdPq4LOl83ejkArQz4xRJRrXFTs5wFIohpxEhSuEkqJGXxrAu6HHu7I6Fgz%2BcpVho0sdlS2J29U69sN%2BvG4X5hwgf5AWw6U75BdTa9fJAaPwV9vpAPp4G4YnqDnHppFym11TOW0IlPCdus6DMFMIz1w70GOqUBQrnkawcHDssC8%2BBgG%2F0aHDBsTKeCrdHungTU%2B9JArTh%2F%2F42Dyv0xoxyBTTWKPAk0L8DvqTVYfltlEK6AfstCeki96QYZJhShGuRftHCCT2yY%2F2s8l%2F0b1NSzVArvaXcfjZpxbW4vUxbCN%2FfN7pGa%2FWZwL6Q5LkCKEtM4uE9Lw3xGH09W10lyHLJNMjR2im6jzt1NITA9uFiyzBavn9LuxXgMMVmU&X-Amz-Signature=a29e77a341f49461a38a6e127c56f61edd596f7ee1aa90e75cbca7f296abf3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MM5LGQN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCRYWEDFszIyWAncgDADvtMTOItDHUMOoG76SY%2Bf57zWQIgA4DMkCkMJbbYUU2azqJfztFV6Sh%2B%2FYj4lrmefVHO3p8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDg47STbD12Kq3aKRSrcAwGYmj1dsQFswsNIjOOk171He2uWzCHyZQK1S8RU9u20V3%2FB9bNgsX07dOWouEdltBrwgow6000AEViTkS70enfCkufOQeUBgEjcESV4nEtsdXwaBXVuoNh315oaF6j5ksbu60r%2By2uEKeO%2Bid19dJdUFCP%2FxVYBYLWJNG1Fc9TsbMNoDdEzOVMZOlwNmsw%2FLsRfOT%2F%2FO3LGlYU%2Bw%2BM%2FFCA34J0cTMlgr1VSCXslaZ1TeQ%2FgBtGq%2FH36U9SFvytnQiqD7KZnOFzj1dRHDZA4a1gRcobJeMxhAFWI7VyPypyRMI2wskJXYAkS9Neg7w5xPu1799mbNLjVHsYpGpgM%2BOfOTPOBCbsoLB5a%2BfWvr8T2D4ZNbZ2mJeeL6sNNQSRi0jZOyiYAVRBhMIMZY2kHcGB08yBnEKfPlR4KucU4brKa%2Ff2CTEZF%2Fiwsyi%2BSFkkGVNPBomoB4%2BzwyIRiYT%2B40nRAbnS%2F5zxYDoeentHqQxjdPq4LOl83ejkArQz4xRJRrXFTs5wFIohpxEhSuEkqJGXxrAu6HHu7I6Fgz%2BcpVho0sdlS2J29U69sN%2BvG4X5hwgf5AWw6U75BdTa9fJAaPwV9vpAPp4G4YnqDnHppFym11TOW0IlPCdus6DMFMIz1w70GOqUBQrnkawcHDssC8%2BBgG%2F0aHDBsTKeCrdHungTU%2B9JArTh%2F%2F42Dyv0xoxyBTTWKPAk0L8DvqTVYfltlEK6AfstCeki96QYZJhShGuRftHCCT2yY%2F2s8l%2F0b1NSzVArvaXcfjZpxbW4vUxbCN%2FfN7pGa%2FWZwL6Q5LkCKEtM4uE9Lw3xGH09W10lyHLJNMjR2im6jzt1NITA9uFiyzBavn9LuxXgMMVmU&X-Amz-Signature=8b5359fe64400854998dbf27754fe603e1a318fe09b009f5d033810247e49354&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
