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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUXT6F5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGyQQYxuMZXy4sj5X%2FMeW2PmOcCBmq50GuswWkQZS1ilAiBVAdPma7iZmg7k8SnLV48g9HG32XcAXIKaIugYABXyqSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrgxZFKaTnY2BcNtbKtwDE%2BbtHeXbxj6VhHH4W%2BEy5%2BJwnAtY7vA7sdcZEVnlFhox1etnaNl7N4QA4MIfFCsb2GqOdIm10enHZ8SX6EG%2B62MJisvxCXPgK0WJ86IHB1PFTcQEMFkr7zJgc%2BEWCOEQNMyOdISem1StwJUQkWcbneU4X%2B0wiyWU0IptYG9nN8G%2FhNN%2FZeqIC9sLxdD4o0klFDIUmusp5%2FRqW02EPqGHjVOa%2FNauOmqsPLH26L%2FUNRP4ViATkZIBIyA%2BsfRsRYMgTe5zYW1mfLiYQ273c7VlUvR%2FcfiGUbASb9nIqzHwefcwgyHSU23RRSNue49Atloaiznzw5c8adjC20HjNybaLyMQQJSBnBt0Vih1AR9O%2FLqowQIjIdrg5H5Rd2B72eHLFqKIHtVeb3d181r42qKN6nuvggIhJ%2FopVGqsIjtY8P0%2Fe2hDlZghSahQdHouzcZS2jJQn4hau7i1b5vsdklS%2F2hcjLoMrVdldiCsCAFaW7n3DIoCte%2BSTiW5eSCvapr3VFN4CHx0LiuCvXfdQvhJue3Dhlcb0QXwu%2BhtJrCK19vFefTTDPMWfJr1vaowSLBklhWYN%2FGQefpb57sllk68vBwy8XO81EaJJ0lLzJoKTpQQ%2BJY2cYDH59nLZDYw5eDwwgY6pgFaaELmYe0LPPCniqDQLH3h8rUlV7RIS66dSu89yiO77adq6u6h682hWraVHkgsXaRBkmk0Ri0fXGlxKyEp6GdMFZWJbfMvyIUk2L0SLUB8wEFijErRutoHCZN1CG5UVKeNrdYYr32cnjtITBlSnYNI5aaOR6nD2g5DqO5rGGLk%2Fxy0usj2jDN0cqebX1GarUdwBjA223CtM6CfuyNBaQE9Xy%2FWUmQD&X-Amz-Signature=075663d968dceb30531371583e17574d22b92ac377b895e109ea63512944c3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUXT6F5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGyQQYxuMZXy4sj5X%2FMeW2PmOcCBmq50GuswWkQZS1ilAiBVAdPma7iZmg7k8SnLV48g9HG32XcAXIKaIugYABXyqSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMrgxZFKaTnY2BcNtbKtwDE%2BbtHeXbxj6VhHH4W%2BEy5%2BJwnAtY7vA7sdcZEVnlFhox1etnaNl7N4QA4MIfFCsb2GqOdIm10enHZ8SX6EG%2B62MJisvxCXPgK0WJ86IHB1PFTcQEMFkr7zJgc%2BEWCOEQNMyOdISem1StwJUQkWcbneU4X%2B0wiyWU0IptYG9nN8G%2FhNN%2FZeqIC9sLxdD4o0klFDIUmusp5%2FRqW02EPqGHjVOa%2FNauOmqsPLH26L%2FUNRP4ViATkZIBIyA%2BsfRsRYMgTe5zYW1mfLiYQ273c7VlUvR%2FcfiGUbASb9nIqzHwefcwgyHSU23RRSNue49Atloaiznzw5c8adjC20HjNybaLyMQQJSBnBt0Vih1AR9O%2FLqowQIjIdrg5H5Rd2B72eHLFqKIHtVeb3d181r42qKN6nuvggIhJ%2FopVGqsIjtY8P0%2Fe2hDlZghSahQdHouzcZS2jJQn4hau7i1b5vsdklS%2F2hcjLoMrVdldiCsCAFaW7n3DIoCte%2BSTiW5eSCvapr3VFN4CHx0LiuCvXfdQvhJue3Dhlcb0QXwu%2BhtJrCK19vFefTTDPMWfJr1vaowSLBklhWYN%2FGQefpb57sllk68vBwy8XO81EaJJ0lLzJoKTpQQ%2BJY2cYDH59nLZDYw5eDwwgY6pgFaaELmYe0LPPCniqDQLH3h8rUlV7RIS66dSu89yiO77adq6u6h682hWraVHkgsXaRBkmk0Ri0fXGlxKyEp6GdMFZWJbfMvyIUk2L0SLUB8wEFijErRutoHCZN1CG5UVKeNrdYYr32cnjtITBlSnYNI5aaOR6nD2g5DqO5rGGLk%2Fxy0usj2jDN0cqebX1GarUdwBjA223CtM6CfuyNBaQE9Xy%2FWUmQD&X-Amz-Signature=fd837d9b6b287bbd5888d2323c3cc033ce680dca1fb96baa2498ee5cd472c3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
