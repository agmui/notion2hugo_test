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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSSP6GE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVMM6atPeVwcTuGnTJL2vdR%2FemTpUnR0t0fEwbtHcCHwIhAMKICJ8YgRrruDm843ITIa2mg6t5SpUhf1reP7VNHlsIKv8DCEgQABoMNjM3NDIzMTgzODA1IgyZSZt9Uu8TWmCqs6gq3AM5ie7rDr257pHTY5SpHQ69eCeVy3yuKCilcWFbg5M8AGL6NJ6122ZnadkSGE5xIEbgXkJieMWYZsB3SSljZ7TuGbmiWTfq6DG3lrT6sMKnDPyi23yuCnBoiEzRndNaDHiPiySqd3txtVp1gtZMQVb867ALsZoNqR2SdcZwbWUXHjECFT8ls7gKHk4uAOYnasfpOWMufNeSpp4h3Iw0KEpN2lPI32g79VsZ%2FKiKcOL0C99x27y6of7FLbiQnb30nlP36y%2FnOIaDpjIdUF1x%2BIlVraTyFXTCo5Us7kd65zsm4CU7%2FqPNp3aaR6%2FEEYITsyIZatmMQpcph94%2FRJqQzGyv9THu9feTKR%2BQMJQV%2BPmRGFuxCBfTFlE5E56MSb0cBGOTf4c5pnxfZ1Wow6xZq28jKjqyD7iZar3im9VRNpDCy5BtDnBrOlEPpRWVbPBh1AacQMEFGMqm8%2FZifjotkhGdvYzzpvVCxd0nXYoJ3bttlUoJqn9Ub%2FHhaDH9gY4dN994myUesIbQxvGFLnrFPrkojCvtAlwdsLkd%2BThjl5m3FEVp2NzjACL7w1NsvHDTKwUeDITYQFjcoKU%2BbaJZTnFIWL4MB5naFhmLV3AzlUz1cuNkrK1OKtv4JSxcxzCB57PABjqkAd3p6pRKPW%2FF%2BqCBZIQO7JT0K3GI59KlPrnRdN%2B70jayiiS3ZTkmKTjRF1tFZPWB5hRSjPacLVFxC9qb1eqrR9UjPViMXRctXfTy0d82EmSRALa0N%2FGgFT8sdg1rm2074JCb4LbsGNkk%2B%2FMhcMWT8NYS%2F1hs4yDE1QwDzKsP2Lja3B8s4%2FlJvkL82LNgrSAQEMxXeUD4VU2B4J9WXu%2FwVJPyXu9%2B&X-Amz-Signature=742ccaace2ff8b315c259cea30a1c2884acf1c6700dc32a27ca056dfff4120a0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSSP6GE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVMM6atPeVwcTuGnTJL2vdR%2FemTpUnR0t0fEwbtHcCHwIhAMKICJ8YgRrruDm843ITIa2mg6t5SpUhf1reP7VNHlsIKv8DCEgQABoMNjM3NDIzMTgzODA1IgyZSZt9Uu8TWmCqs6gq3AM5ie7rDr257pHTY5SpHQ69eCeVy3yuKCilcWFbg5M8AGL6NJ6122ZnadkSGE5xIEbgXkJieMWYZsB3SSljZ7TuGbmiWTfq6DG3lrT6sMKnDPyi23yuCnBoiEzRndNaDHiPiySqd3txtVp1gtZMQVb867ALsZoNqR2SdcZwbWUXHjECFT8ls7gKHk4uAOYnasfpOWMufNeSpp4h3Iw0KEpN2lPI32g79VsZ%2FKiKcOL0C99x27y6of7FLbiQnb30nlP36y%2FnOIaDpjIdUF1x%2BIlVraTyFXTCo5Us7kd65zsm4CU7%2FqPNp3aaR6%2FEEYITsyIZatmMQpcph94%2FRJqQzGyv9THu9feTKR%2BQMJQV%2BPmRGFuxCBfTFlE5E56MSb0cBGOTf4c5pnxfZ1Wow6xZq28jKjqyD7iZar3im9VRNpDCy5BtDnBrOlEPpRWVbPBh1AacQMEFGMqm8%2FZifjotkhGdvYzzpvVCxd0nXYoJ3bttlUoJqn9Ub%2FHhaDH9gY4dN994myUesIbQxvGFLnrFPrkojCvtAlwdsLkd%2BThjl5m3FEVp2NzjACL7w1NsvHDTKwUeDITYQFjcoKU%2BbaJZTnFIWL4MB5naFhmLV3AzlUz1cuNkrK1OKtv4JSxcxzCB57PABjqkAd3p6pRKPW%2FF%2BqCBZIQO7JT0K3GI59KlPrnRdN%2B70jayiiS3ZTkmKTjRF1tFZPWB5hRSjPacLVFxC9qb1eqrR9UjPViMXRctXfTy0d82EmSRALa0N%2FGgFT8sdg1rm2074JCb4LbsGNkk%2B%2FMhcMWT8NYS%2F1hs4yDE1QwDzKsP2Lja3B8s4%2FlJvkL82LNgrSAQEMxXeUD4VU2B4J9WXu%2FwVJPyXu9%2B&X-Amz-Signature=ad8cc14c8998db480ccc1da9f34e9e5feb209a24a63d6b3dd5e69be52274d099&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
