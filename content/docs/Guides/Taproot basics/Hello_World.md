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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQPTDPPT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS5NAA4Z9F09mJjFJCHHSzVdwQ01kmF62T1%2Bv0K8xvtAiBQNrR8oZtlTkox%2FOei2GCXIh3mLlfkwpNABXOLy2LoLiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BqrBunSwfLF6CnqOKtwD1MRZRyTBVTvRAkHJxOFq90xT2ngEIkkDYJ9G0m%2BmKpu9ppFoIjheZ0kr38vtHr3iziqO508Y8uMp042djbvMeZ8RJsMPAxC1J1qfNcQKbTkYZPqsWHEXzBPE%2FDyzaiN17UlqaTi9GvjEDHnHyUo%2B%2Bm5zFq96c743vB8ywcICwCUEqZEkhx2XEqO2D06gpqL9bzkOzhIOSaJxE6I4CiGEbIUF%2FMJ%2BrNIJjrCiBQTaMGfS5zpls0oOshnZoLBVeq9ITA5lsXtOftfkvXrxY6U1DNVfyHXEOQyl90Y6AD4rWeVlRaTQK7er3GInEsGpPcWwjU67W2nLtE08FTMMpbIeoT15Nk7HVWCU6RT42yetDcQE0sQdC4hYK5%2F%2FYznqA%2FAFWL44W3dL6ubfViWU8TeHD3UbM%2B2FEy238GFZ5yawPm%2B9OHqnNATzoQL2AtnPhBW5Twm2D%2BUUO%2FGNp0KLER854w4XmLXLYyQ2mZ79MuTS7YPKZFL07DDWFxYYFCPeBp9uUvKyK2K1CN7vk3mTQH2tq%2FLVGkIQpob%2FVTr8Gzwtj0avOLlVn2ra97kqJT3nMXftTx2FieB8L5EJn8qjEowRSwZr8ms4DUrE77Kpfg11BNsIwcGFrWaH0gzEI5Ew85PEwAY6pgGVerRpcfZ9OZxDFpYv70nltWHlrcaX%2BNJogo%2FBRdHmwZExAI3k%2FzUCLnn68cDvqzVoSygBpSdbGKQH3t0i%2B5B8VLUmCBlk4cw7CwXFWen8Mm8Srp%2FikaeQccszqOfsEOqN2OMZsV2v%2BvJuGZP9iQQOjGp6BbwyYGcVJA01aYS3s6SVbIXXZmA0iVsMRbGLaMqmaY5h%2BKG7gTU%2BSQmsIBRWiXWJ2iTh&X-Amz-Signature=5ead0d6342bee89ac8c81fb928df7d892a610c516befc45bef9b5d859453f86c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQPTDPPT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHS5NAA4Z9F09mJjFJCHHSzVdwQ01kmF62T1%2Bv0K8xvtAiBQNrR8oZtlTkox%2FOei2GCXIh3mLlfkwpNABXOLy2LoLiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BqrBunSwfLF6CnqOKtwD1MRZRyTBVTvRAkHJxOFq90xT2ngEIkkDYJ9G0m%2BmKpu9ppFoIjheZ0kr38vtHr3iziqO508Y8uMp042djbvMeZ8RJsMPAxC1J1qfNcQKbTkYZPqsWHEXzBPE%2FDyzaiN17UlqaTi9GvjEDHnHyUo%2B%2Bm5zFq96c743vB8ywcICwCUEqZEkhx2XEqO2D06gpqL9bzkOzhIOSaJxE6I4CiGEbIUF%2FMJ%2BrNIJjrCiBQTaMGfS5zpls0oOshnZoLBVeq9ITA5lsXtOftfkvXrxY6U1DNVfyHXEOQyl90Y6AD4rWeVlRaTQK7er3GInEsGpPcWwjU67W2nLtE08FTMMpbIeoT15Nk7HVWCU6RT42yetDcQE0sQdC4hYK5%2F%2FYznqA%2FAFWL44W3dL6ubfViWU8TeHD3UbM%2B2FEy238GFZ5yawPm%2B9OHqnNATzoQL2AtnPhBW5Twm2D%2BUUO%2FGNp0KLER854w4XmLXLYyQ2mZ79MuTS7YPKZFL07DDWFxYYFCPeBp9uUvKyK2K1CN7vk3mTQH2tq%2FLVGkIQpob%2FVTr8Gzwtj0avOLlVn2ra97kqJT3nMXftTx2FieB8L5EJn8qjEowRSwZr8ms4DUrE77Kpfg11BNsIwcGFrWaH0gzEI5Ew85PEwAY6pgGVerRpcfZ9OZxDFpYv70nltWHlrcaX%2BNJogo%2FBRdHmwZExAI3k%2FzUCLnn68cDvqzVoSygBpSdbGKQH3t0i%2B5B8VLUmCBlk4cw7CwXFWen8Mm8Srp%2FikaeQccszqOfsEOqN2OMZsV2v%2BvJuGZP9iQQOjGp6BbwyYGcVJA01aYS3s6SVbIXXZmA0iVsMRbGLaMqmaY5h%2BKG7gTU%2BSQmsIBRWiXWJ2iTh&X-Amz-Signature=d9aafc079e3c394df779ef5f3095e1c5363ee1051e95b6f8884164f0228060f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
