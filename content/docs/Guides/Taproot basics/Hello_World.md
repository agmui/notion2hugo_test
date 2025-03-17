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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYNWY66%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FhaSn2l09TDF8218FGXDX0kfj7Cy4AuMNIVMbni1MEwIhALkFHRKhEQRHLPXjOo6ba%2BxuJySnhFUu6py0OMxj915wKv8DCEAQABoMNjM3NDIzMTgzODA1Igxfd%2FuOm1GF0Eq7Ekkq3ANWVG5GEhEONhqnhWQrVXQwmaWLTgQHeMzoUFz4o9%2FIapAKYl471z3J7NgsYkcJU2yHyniNpAH3RKB%2BnwvTpQGsXcd5CXD%2FHrPL1VyLjSw1TQaCdN9zTyztZvJ%2FuynG0seg6oScLIOKdnaI3Ayq4ys5OjrfJE9Zh5zVZy3qBwVl%2F69Rq4tIRj9%2FMQQSQ0h6KgFN47vNOOcJ2XGX2uKpNubRKvmPya5aehqO9x5MLA2HPBFFyosf9%2BM8gnrDh2VDQYTRqQEiJ66VwFmoNyWpmYBuIpysEOmJir%2FMi6jSSSIDWfTPrYOVbTBvROIZ%2BiFslh0EsJAqEYlnlgQbDcCiQn4tOG%2FP%2FKofIZ7Ws0yAAv9SEL%2BjvlAN8REBwSyLBM%2BAZqc9Ihv3Wy6%2BhTFXzsuDiE%2F%2BqRFZF6KbxW27sE%2Fs3Hj8b1Qh%2FBSubgyvJp9ZVffmpMGvclibBg83G1AFkTdfqIfuuRChFyw5p%2Fbo%2BCndp838u7wDbJLzF80iCfx67Dz2mwof%2Bv7omphj89gflz%2FWCX9V284WQlSaC%2BfXsJcTDEfqfZlOPggQk6k2IFRsdNlBCmN85VHm2S9Z6YCfn4loTf%2FMxDRU8Uvlspyr9rdEfTnXBzzXbZrFwY7CFASOVDCTkt%2B%2BBjqkARPSL0XHxy6O6KwM8x9iVo8bFi1fxUuf%2F1ASlkMJs7RhhK4ezgHGUpetiZrd%2FJqE0a5nDhl11SVhxOlq%2FTiezmo1Oa3%2BiDhiDM2T82KXT0ZQt7rXsfeqryu%2F7RIQjAh1YG6JALE270zK4Zr5Bjry5ZJ%2BFwLEqea70gRyge5zby92M37hh9XPB%2FrSFmEORXTxjS0FRoTjuxsRVWkeR9qRYLMuvjUh&X-Amz-Signature=fc941d5b4a60988d8a74b2b3156809fa55514b23b0b2d905dffb514640627ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYNWY66%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FhaSn2l09TDF8218FGXDX0kfj7Cy4AuMNIVMbni1MEwIhALkFHRKhEQRHLPXjOo6ba%2BxuJySnhFUu6py0OMxj915wKv8DCEAQABoMNjM3NDIzMTgzODA1Igxfd%2FuOm1GF0Eq7Ekkq3ANWVG5GEhEONhqnhWQrVXQwmaWLTgQHeMzoUFz4o9%2FIapAKYl471z3J7NgsYkcJU2yHyniNpAH3RKB%2BnwvTpQGsXcd5CXD%2FHrPL1VyLjSw1TQaCdN9zTyztZvJ%2FuynG0seg6oScLIOKdnaI3Ayq4ys5OjrfJE9Zh5zVZy3qBwVl%2F69Rq4tIRj9%2FMQQSQ0h6KgFN47vNOOcJ2XGX2uKpNubRKvmPya5aehqO9x5MLA2HPBFFyosf9%2BM8gnrDh2VDQYTRqQEiJ66VwFmoNyWpmYBuIpysEOmJir%2FMi6jSSSIDWfTPrYOVbTBvROIZ%2BiFslh0EsJAqEYlnlgQbDcCiQn4tOG%2FP%2FKofIZ7Ws0yAAv9SEL%2BjvlAN8REBwSyLBM%2BAZqc9Ihv3Wy6%2BhTFXzsuDiE%2F%2BqRFZF6KbxW27sE%2Fs3Hj8b1Qh%2FBSubgyvJp9ZVffmpMGvclibBg83G1AFkTdfqIfuuRChFyw5p%2Fbo%2BCndp838u7wDbJLzF80iCfx67Dz2mwof%2Bv7omphj89gflz%2FWCX9V284WQlSaC%2BfXsJcTDEfqfZlOPggQk6k2IFRsdNlBCmN85VHm2S9Z6YCfn4loTf%2FMxDRU8Uvlspyr9rdEfTnXBzzXbZrFwY7CFASOVDCTkt%2B%2BBjqkARPSL0XHxy6O6KwM8x9iVo8bFi1fxUuf%2F1ASlkMJs7RhhK4ezgHGUpetiZrd%2FJqE0a5nDhl11SVhxOlq%2FTiezmo1Oa3%2BiDhiDM2T82KXT0ZQt7rXsfeqryu%2F7RIQjAh1YG6JALE270zK4Zr5Bjry5ZJ%2BFwLEqea70gRyge5zby92M37hh9XPB%2FrSFmEORXTxjS0FRoTjuxsRVWkeR9qRYLMuvjUh&X-Amz-Signature=2b269a55131c0d8dde22a83869e6f165741322320935d16ec6a292de6a4ea770&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
