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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FJHKVD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1b7h2B1PuN2qwH2x70arx6tYVJvcf6P9Q4ir17oR0LAiEA8MXyP1k6nhuuv7g%2FfKQ%2BLfyYXf7i8%2BKkcKaG36mElEgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPGaOm1USsd35NfSrcA2I%2FQRSJM7a3XznB8APgCAZ55Y%2BYAZIMyszS7yMmuS6600z0uY7kdWSRH%2FO0khOnakfRWILExI8xkuYwVfIqDRdTBn6UbJjHM4MSyhHzd4q26zt912Qnm654aIFnMYlfBBatOoMPDctQMfvzER7A%2FPS6ihDJdluZdk54488nbRCTA4NmS%2BpVpLb7IBVCEg%2BmqRQoh5bmZfLAvReY8tiajRARMkgXM3cPRbsOFQS2vFC62fLL3gSzs%2BwnqgO%2BbSPy1BKZRu4L4dNwRw%2FsuiAcLsfIOYmFnczCkSZOcro9%2F2MnjPPiV8YxclPItgUTWDg1f0tr1xEM%2FuGS%2BEQPaM3Mnc3lqZRjWnWe%2BSc%2BkIexPI2y7Eal8qqKUyN3wmOQButO6viNDnSP%2BJlfJFMX2OVWAXiPdBlREgsfw7YoU%2BFKyyyPYVKaSwttbiR7nIXWkpzXQODbI%2BNuWxevjU3dcRPJHFu4uAetFdrC3qkJc0TEAogrC8S7XODzPJeqMPexvtpo77vCG%2FLCQTN7AIzgX2Dk1QPS2S5xYdxIszynB8gdOAVfLyBnI06Iqgw6NRp%2F1u2%2BSPpig%2FB8tSb3mlw%2BYRlrxSI3ngEVMmKyIOreNxNAPl4Ltx0wvf0kpOZnbvQ3MKrR3b0GOqUB7KuggZ%2BHzL%2FQn6AF%2Fi%2B6TpuBSA8IGurhS%2BNPT87Ub59S5hPAifHgIiKLhEHfBj9lS5jyWuyQ0qt5Dp%2FVCSDlptVbIQsqdFMPRxviS3x55zUa%2F35UTrJ5xVulNHloxxhpm%2BZvSfuc7p1c0nSCGpThymg%2BMF6Ffwax%2FcDteae6E%2B%2FF2BbZ8dUXGP1JW7W7qmedZNFjdrZJ9eb%2F0CBIgDBHYkStEqNl&X-Amz-Signature=5af3f9a8d2aa16268fef6df24455196b4ce526ad64122e2454b029530d886235&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FJHKVD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1b7h2B1PuN2qwH2x70arx6tYVJvcf6P9Q4ir17oR0LAiEA8MXyP1k6nhuuv7g%2FfKQ%2BLfyYXf7i8%2BKkcKaG36mElEgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FPGaOm1USsd35NfSrcA2I%2FQRSJM7a3XznB8APgCAZ55Y%2BYAZIMyszS7yMmuS6600z0uY7kdWSRH%2FO0khOnakfRWILExI8xkuYwVfIqDRdTBn6UbJjHM4MSyhHzd4q26zt912Qnm654aIFnMYlfBBatOoMPDctQMfvzER7A%2FPS6ihDJdluZdk54488nbRCTA4NmS%2BpVpLb7IBVCEg%2BmqRQoh5bmZfLAvReY8tiajRARMkgXM3cPRbsOFQS2vFC62fLL3gSzs%2BwnqgO%2BbSPy1BKZRu4L4dNwRw%2FsuiAcLsfIOYmFnczCkSZOcro9%2F2MnjPPiV8YxclPItgUTWDg1f0tr1xEM%2FuGS%2BEQPaM3Mnc3lqZRjWnWe%2BSc%2BkIexPI2y7Eal8qqKUyN3wmOQButO6viNDnSP%2BJlfJFMX2OVWAXiPdBlREgsfw7YoU%2BFKyyyPYVKaSwttbiR7nIXWkpzXQODbI%2BNuWxevjU3dcRPJHFu4uAetFdrC3qkJc0TEAogrC8S7XODzPJeqMPexvtpo77vCG%2FLCQTN7AIzgX2Dk1QPS2S5xYdxIszynB8gdOAVfLyBnI06Iqgw6NRp%2F1u2%2BSPpig%2FB8tSb3mlw%2BYRlrxSI3ngEVMmKyIOreNxNAPl4Ltx0wvf0kpOZnbvQ3MKrR3b0GOqUB7KuggZ%2BHzL%2FQn6AF%2Fi%2B6TpuBSA8IGurhS%2BNPT87Ub59S5hPAifHgIiKLhEHfBj9lS5jyWuyQ0qt5Dp%2FVCSDlptVbIQsqdFMPRxviS3x55zUa%2F35UTrJ5xVulNHloxxhpm%2BZvSfuc7p1c0nSCGpThymg%2BMF6Ffwax%2FcDteae6E%2B%2FF2BbZ8dUXGP1JW7W7qmedZNFjdrZJ9eb%2F0CBIgDBHYkStEqNl&X-Amz-Signature=1a3aceeb98e869f5ed8782b157b732b504c23971f41375202646880d8b144a95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
