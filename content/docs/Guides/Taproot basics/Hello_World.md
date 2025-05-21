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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIOWGRD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdcs2qutZFFqZwzkv%2F8kkrbGqTQ7VQk%2BUqdxsg3jrUTAiEA1a6PnsmOZ0e6F2kOUYz2rP4sOBw18ItrfQqlNXD1ew8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZpz3CsJfOQd0Tt3yrcAwUeW%2BFI69SGgp5JgijLhHiHqJjtA4pF3VyvO%2BECZcqLeCl34LJms8vBp3%2F0Lj9y2cWvdDR5D4hrZtEeChrkF7B5dBPFhoggQ2hUIAW2p0G1mtdWLMv8uZ3%2BGUJHItjWvsE0hPqIC0aUmlr6KDHYSDZBe2KmRoMDHZDse%2FJtdgoZNNKoLamfjG%2Fsl%2B74EzB5E70hwySO3bcfU4uCcj%2Fwy2z7t6YMDLeaJViBmHFLMBEU6%2BPDqzmN2sJk2SqBNuHkT1b9yP2LD6aTGJAUR%2FqGeJ49Q1Ahwjj2XE4TpEDBA7Ym84sehyBwM5JuYvSE0n3AX%2FGiJjiU%2BcJq1MPGJjeQOBc4pDDoj8MLZQlgK0tHNdVB7f7fJ%2FheNeLNTqou7EuLOuMSGFVvSbqigXWl4qtau68WzlCrU%2FfWc8RTSpUa2DPI3z48vVfzPFUt0vS7fngDXe2nrRVqjkwZGLgMvuWKk5R3hC7sMsh%2BdEpqanWx1N96%2B%2F6ecrQuNAHH9RcPq3Mv2n0E2g10rrO%2BgRZfXT%2BmV5ERd4APHj1o%2FB5JCryL0GF%2BTd5BHCJKjlhTEV%2B3hz8krCulucZwtQpkUNH9gwX8fTn1yGLyI2XiRpQuaBE%2FXg2AZ6VY2gGN5hqmpxeVMO6PtcEGOqUBgwKMOqMlfpzAk6QDLN49OZhikQcCk1rGMm5%2Fx9uLMoBQe%2Bu1V6RLFzqNs58HgtfQIgPrqXNv0xAxyfs%2BV6qiSvH3vYnHxAwhAS%2B7DZVHPQ9B%2BgBsfDSMQA8wHS6N%2BGCd8oNDFG%2F6xDBBhKQDIKE2COcJ0Rhid3LueqyXINCSe%2BVHERHauv0YZv5MpTqwIBIaCuyhqfYvKKmc0xmuYu1g1MxGhL%2Fn&X-Amz-Signature=594126f1ef55c2067316a6b22426a0367f56b231acc65f31edaf7b92f8e18d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIOWGRD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdcs2qutZFFqZwzkv%2F8kkrbGqTQ7VQk%2BUqdxsg3jrUTAiEA1a6PnsmOZ0e6F2kOUYz2rP4sOBw18ItrfQqlNXD1ew8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZpz3CsJfOQd0Tt3yrcAwUeW%2BFI69SGgp5JgijLhHiHqJjtA4pF3VyvO%2BECZcqLeCl34LJms8vBp3%2F0Lj9y2cWvdDR5D4hrZtEeChrkF7B5dBPFhoggQ2hUIAW2p0G1mtdWLMv8uZ3%2BGUJHItjWvsE0hPqIC0aUmlr6KDHYSDZBe2KmRoMDHZDse%2FJtdgoZNNKoLamfjG%2Fsl%2B74EzB5E70hwySO3bcfU4uCcj%2Fwy2z7t6YMDLeaJViBmHFLMBEU6%2BPDqzmN2sJk2SqBNuHkT1b9yP2LD6aTGJAUR%2FqGeJ49Q1Ahwjj2XE4TpEDBA7Ym84sehyBwM5JuYvSE0n3AX%2FGiJjiU%2BcJq1MPGJjeQOBc4pDDoj8MLZQlgK0tHNdVB7f7fJ%2FheNeLNTqou7EuLOuMSGFVvSbqigXWl4qtau68WzlCrU%2FfWc8RTSpUa2DPI3z48vVfzPFUt0vS7fngDXe2nrRVqjkwZGLgMvuWKk5R3hC7sMsh%2BdEpqanWx1N96%2B%2F6ecrQuNAHH9RcPq3Mv2n0E2g10rrO%2BgRZfXT%2BmV5ERd4APHj1o%2FB5JCryL0GF%2BTd5BHCJKjlhTEV%2B3hz8krCulucZwtQpkUNH9gwX8fTn1yGLyI2XiRpQuaBE%2FXg2AZ6VY2gGN5hqmpxeVMO6PtcEGOqUBgwKMOqMlfpzAk6QDLN49OZhikQcCk1rGMm5%2Fx9uLMoBQe%2Bu1V6RLFzqNs58HgtfQIgPrqXNv0xAxyfs%2BV6qiSvH3vYnHxAwhAS%2B7DZVHPQ9B%2BgBsfDSMQA8wHS6N%2BGCd8oNDFG%2F6xDBBhKQDIKE2COcJ0Rhid3LueqyXINCSe%2BVHERHauv0YZv5MpTqwIBIaCuyhqfYvKKmc0xmuYu1g1MxGhL%2Fn&X-Amz-Signature=362bdd7f68a305572d3a994b422ce6387e90fd8ce5c28e194bdb40dc56f4eefe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
