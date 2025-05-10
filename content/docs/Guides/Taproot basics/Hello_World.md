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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDK5HMQU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBbz2DuxOHtf%2Fvugj7Hw99Svo7hpIQ%2FscCMx2mC%2FgAEzAiBsrfCVoU1usX%2BDk3WNgXP%2B0wNExE6n5Stk06QgtUY3jyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lRO2fpamuUhofW4KtwDCMeqoZGtRd5e3BKKP9UIZNIgxcqV7uiqJ%2BsIfm6obrCP2pz35HZomz1vukuTiR4ZYnr8ymJrB0%2FS3bIQSwYPwustXL7bJh06bVVC7qwSJeqVbILp20QOVtbtFtr%2Bz1SSE9Um5d8OROL55qJKHanvdiSbSqGFwazjx7Z%2BSpRoXjoD3YonkKTEw3SeMuQD%2BM%2FqQdClGbhtEC%2F6wfBT7Ko7%2FqFft6w5rqgeUO0RZg6X73TpUoORYTb%2FzifU0slRAMaVBznb%2B4R6it%2BVkAArH6JCRr%2Bw8uARvXfsDLB8lDPGrNK%2BluCGx4UBayIuaYjYJYNmeMgxRFQAByuSjTikdi%2ByZc72B1%2B2tKfKMkc6YUaMi0yZKhhjaybBhSxMXGZmSiI4BoYsc8vP8Eb37mUK9g270MAvenNBqcH%2B3FVx07DcRlPsJmSchDuDV1PPGZa7II8sQBfHMu6Z2XhAfKgBFl176t7nwFEIka%2Be4a7kfZRJo6YfX479pWNBjb6QkRqGhcaMBv6HTVta0KNFAWqdJ6tIm92k5fniKJ75f1lJq7ux9gfCOfU9M71SfrjacH%2F56DCLilMOLba50uK7IBoDRL4wItGCA8Ye8xk7bnpsJHIHGce2xCUGyfQS%2Bapaopsw1br%2BwAY6pgE3COrQ7VaePP7RQ8jRnehiO86So0jMuzAJFKIQ3tuK4FE66awdmFg9gWHz1uzvLjFisFl%2Fin%2F7ieeM2aEobLizcy9Ofa64tpMZUaiUD6LFnjPP2Zs2CHM93wJjTxpQeFWdwSJjNHf682rIiddjBvZvIokr3yLkyv3M%2BwVspZgtAZQmDSsb9xDN9UNo5530vaXwM223PAcHxh%2F7J6mdkMIOCsFkIMB1&X-Amz-Signature=0c390a17b63822aab5c0f044a3d25699d2ce211ca776f633e8f687e360d2cf89&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDK5HMQU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBbz2DuxOHtf%2Fvugj7Hw99Svo7hpIQ%2FscCMx2mC%2FgAEzAiBsrfCVoU1usX%2BDk3WNgXP%2B0wNExE6n5Stk06QgtUY3jyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2lRO2fpamuUhofW4KtwDCMeqoZGtRd5e3BKKP9UIZNIgxcqV7uiqJ%2BsIfm6obrCP2pz35HZomz1vukuTiR4ZYnr8ymJrB0%2FS3bIQSwYPwustXL7bJh06bVVC7qwSJeqVbILp20QOVtbtFtr%2Bz1SSE9Um5d8OROL55qJKHanvdiSbSqGFwazjx7Z%2BSpRoXjoD3YonkKTEw3SeMuQD%2BM%2FqQdClGbhtEC%2F6wfBT7Ko7%2FqFft6w5rqgeUO0RZg6X73TpUoORYTb%2FzifU0slRAMaVBznb%2B4R6it%2BVkAArH6JCRr%2Bw8uARvXfsDLB8lDPGrNK%2BluCGx4UBayIuaYjYJYNmeMgxRFQAByuSjTikdi%2ByZc72B1%2B2tKfKMkc6YUaMi0yZKhhjaybBhSxMXGZmSiI4BoYsc8vP8Eb37mUK9g270MAvenNBqcH%2B3FVx07DcRlPsJmSchDuDV1PPGZa7II8sQBfHMu6Z2XhAfKgBFl176t7nwFEIka%2Be4a7kfZRJo6YfX479pWNBjb6QkRqGhcaMBv6HTVta0KNFAWqdJ6tIm92k5fniKJ75f1lJq7ux9gfCOfU9M71SfrjacH%2F56DCLilMOLba50uK7IBoDRL4wItGCA8Ye8xk7bnpsJHIHGce2xCUGyfQS%2Bapaopsw1br%2BwAY6pgE3COrQ7VaePP7RQ8jRnehiO86So0jMuzAJFKIQ3tuK4FE66awdmFg9gWHz1uzvLjFisFl%2Fin%2F7ieeM2aEobLizcy9Ofa64tpMZUaiUD6LFnjPP2Zs2CHM93wJjTxpQeFWdwSJjNHf682rIiddjBvZvIokr3yLkyv3M%2BwVspZgtAZQmDSsb9xDN9UNo5530vaXwM223PAcHxh%2F7J6mdkMIOCsFkIMB1&X-Amz-Signature=0ff6a9e9eb412ec80bf86511c1f9b1ab8c860816cc0859f414437887f6ebff01&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
