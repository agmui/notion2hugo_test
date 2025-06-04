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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVS4QM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCZovXRsLHvcS2RUbOQETb8xh9E8cVQ9AfgUe1tddADLwIge7LT1U5v7IukA7gOzQBaKmWaa1TjuKPKHcVtPdeLY%2BIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO2VNIIupsUuvFlAmCrcAx3SPG42iQW13nRJm1uCVs3awM2aqyob%2FF1gkIKM04X2sJAkxGXYQHxoiV3RxiAcbs5s4n9e1QAO8m%2BHgXzaoIxSfTPAGqCFuA22Uapsx060fJqp9vAlMKWQopf8%2BsflRRIE6vQZ2sphLXv3iX5wEWk%2FIB4qFkC8O1NveI3MuHcEmUtpuyn%2FIGnWhTUap02pZ0VkLCFvX7dGY%2FrHWjDcwWKrFkBK8rVRPlPHs0BwzpG14p11O3Da%2FUpuBadlZr8tAHWVU9e6Fb59O3Bn1GPuhAKG8jogTUr74Q8dCpOvPn%2BBXA5524an%2BvLQnFx32K0TSF3%2F%2Bx%2B%2FKQ1lo3pVlZEPb%2F8rsuolVgoUQd1NVVuohgTPQxPCErsqP0k%2BNknXTSGOaOHg%2FfAg1hUdFXwaU6yx9FMBEoJ59K3K9hbTKnVGaOPy0VPTpJ%2FKV%2F3ez%2FtrKLn%2Bg9giNSeRYJW9cxNJnQzrajZduZkcZsfGpMhMoqchW9dxwyfPfvawwHd8AaW8cri00PBA%2FV5yMI2%2BEfMhCW1fBHeQNj1PaORtmCJbLAVERLS24duOqiSCUCUpeJJau59Qyl73s4hzrTzt380JPa%2BCQSEpmInzmbl0t0dqXjJfZF795da1col0qDSKqfnvMJDQgMIGOqUBQqBWu%2BsksXbfyQU0905ITC9QQh%2B5dpPgQyfUcFTjEryrbRZrlpcYARW%2BGvXUMHrNHcLcYt8tlh7lzFnCv0IXJnVjsTu6vsoFot%2Fiv%2F5MgqPnkWDBW4%2FZd82elSQ4C4cZwZlLDQA28rpZ3MjY%2BFc0oG4DrH90L%2FOqOob1lAqbIRxSLpfRFxaI97a85bQru2wEkpodaPvCyg7Qv69d1Cekwrq%2FCPlN&X-Amz-Signature=ea4573e77d17c882a84884614f544eb749b34cb99af720571e07d80942d29c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVS4QM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCZovXRsLHvcS2RUbOQETb8xh9E8cVQ9AfgUe1tddADLwIge7LT1U5v7IukA7gOzQBaKmWaa1TjuKPKHcVtPdeLY%2BIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO2VNIIupsUuvFlAmCrcAx3SPG42iQW13nRJm1uCVs3awM2aqyob%2FF1gkIKM04X2sJAkxGXYQHxoiV3RxiAcbs5s4n9e1QAO8m%2BHgXzaoIxSfTPAGqCFuA22Uapsx060fJqp9vAlMKWQopf8%2BsflRRIE6vQZ2sphLXv3iX5wEWk%2FIB4qFkC8O1NveI3MuHcEmUtpuyn%2FIGnWhTUap02pZ0VkLCFvX7dGY%2FrHWjDcwWKrFkBK8rVRPlPHs0BwzpG14p11O3Da%2FUpuBadlZr8tAHWVU9e6Fb59O3Bn1GPuhAKG8jogTUr74Q8dCpOvPn%2BBXA5524an%2BvLQnFx32K0TSF3%2F%2Bx%2B%2FKQ1lo3pVlZEPb%2F8rsuolVgoUQd1NVVuohgTPQxPCErsqP0k%2BNknXTSGOaOHg%2FfAg1hUdFXwaU6yx9FMBEoJ59K3K9hbTKnVGaOPy0VPTpJ%2FKV%2F3ez%2FtrKLn%2Bg9giNSeRYJW9cxNJnQzrajZduZkcZsfGpMhMoqchW9dxwyfPfvawwHd8AaW8cri00PBA%2FV5yMI2%2BEfMhCW1fBHeQNj1PaORtmCJbLAVERLS24duOqiSCUCUpeJJau59Qyl73s4hzrTzt380JPa%2BCQSEpmInzmbl0t0dqXjJfZF795da1col0qDSKqfnvMJDQgMIGOqUBQqBWu%2BsksXbfyQU0905ITC9QQh%2B5dpPgQyfUcFTjEryrbRZrlpcYARW%2BGvXUMHrNHcLcYt8tlh7lzFnCv0IXJnVjsTu6vsoFot%2Fiv%2F5MgqPnkWDBW4%2FZd82elSQ4C4cZwZlLDQA28rpZ3MjY%2BFc0oG4DrH90L%2FOqOob1lAqbIRxSLpfRFxaI97a85bQru2wEkpodaPvCyg7Qv69d1Cekwrq%2FCPlN&X-Amz-Signature=aa63a160aa25af8606beb43df77b90d59dee75584038e89a0b55358ae2285e71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
