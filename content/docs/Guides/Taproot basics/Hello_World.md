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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQS4U2LI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCcPbZLSV7d5DeTyzQsAb8DPJZlJIDXnFshA37Uj7srhwIhAPI6r3j1KM9rycDeeKTY%2BetKDl9AfBXF%2F8%2FcrUon%2FXAhKv8DCCQQABoMNjM3NDIzMTgzODA1IgzWHlLKTUPPjCLfSE8q3AO8ENay8vYC0rMXQfcUBaJdCRdfGKdFLFdYVwueQz%2F7uCnIHI6RwEAJHHz81zdwOsANadRvhUHB5seTB4k5A%2B2CPZwv%2FaVf4HRjCmqV5EVw6NWXs1qo7tXD9%2FLfwMCfniFWYmjtv11i1IL%2Bz5SHGF0iSMz23UTS%2B9fv5QWmXx7vcStreSzj5tcl3lyxM52xvBa0sy%2BiMgUW27SVEYlnzL2MdtB495joyfS3a5Q7Yq2J1t1PebKXIsCFqXhQ9z%2F0y%2FFa1BTcp0sPWjPbnlgCUH%2BcVXqIPee2bQ0F4Mzg%2FIFe4PvBPEfdZm06xXK3Im%2BVHhi6an8teoAbbJOTCqEiQjmv3vJwb9tlisfOIjqYxETYlk7Eu1dVBy3%2BzzCtIGxJMlQ3L3YUjRPQgmPXrDI%2F2e8R7XdOTKdHXm%2F1UdSaqexLj7Y%2FigA49kUJE4unGOQR74yPTT%2FChqO3XY5OXt2PphlH%2F%2BvQKE%2BCpMML%2BHPp5coJpyO0xUPlvtsuq4u9VUL3aBgFSB6hIGNz8ENT71A9crfumgLJT4avqwDXNcUFSgwXSc%2B1EJBF0QLK1MCdVSGdUMF55GNeR87o%2BoTs79XZilpI2QUUI1cjjkoH8G4cYcgty7HiaUXYsHs3w1fQJzDNvbPCBjqkAaDbS3Ny3qb0YpXgY59YMBQuvBSbl%2F5fdrcLrPlu%2FHq84vqP7DYrF8DzvM38HVr9%2B0lAgZQBVHNAMykSi%2F90YdBUx3t3qGJswmUq%2B4LAebO4Uk4u0HbdXm8%2BNwxp%2BjBGgwWcgQftUjHrDRSU55CJ4ur8op9dDm1Y1OkzCuBMARxdQAkqPCyx%2FFP%2FwbYhxZvmVMVSpZSM8hF1Kg%2FgwbP4w9zQYhFf&X-Amz-Signature=6a4557a4b42eb7624028d83f4dc6e6fc1ac8e6deafec8bd9bc1714a0300f3706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQS4U2LI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCcPbZLSV7d5DeTyzQsAb8DPJZlJIDXnFshA37Uj7srhwIhAPI6r3j1KM9rycDeeKTY%2BetKDl9AfBXF%2F8%2FcrUon%2FXAhKv8DCCQQABoMNjM3NDIzMTgzODA1IgzWHlLKTUPPjCLfSE8q3AO8ENay8vYC0rMXQfcUBaJdCRdfGKdFLFdYVwueQz%2F7uCnIHI6RwEAJHHz81zdwOsANadRvhUHB5seTB4k5A%2B2CPZwv%2FaVf4HRjCmqV5EVw6NWXs1qo7tXD9%2FLfwMCfniFWYmjtv11i1IL%2Bz5SHGF0iSMz23UTS%2B9fv5QWmXx7vcStreSzj5tcl3lyxM52xvBa0sy%2BiMgUW27SVEYlnzL2MdtB495joyfS3a5Q7Yq2J1t1PebKXIsCFqXhQ9z%2F0y%2FFa1BTcp0sPWjPbnlgCUH%2BcVXqIPee2bQ0F4Mzg%2FIFe4PvBPEfdZm06xXK3Im%2BVHhi6an8teoAbbJOTCqEiQjmv3vJwb9tlisfOIjqYxETYlk7Eu1dVBy3%2BzzCtIGxJMlQ3L3YUjRPQgmPXrDI%2F2e8R7XdOTKdHXm%2F1UdSaqexLj7Y%2FigA49kUJE4unGOQR74yPTT%2FChqO3XY5OXt2PphlH%2F%2BvQKE%2BCpMML%2BHPp5coJpyO0xUPlvtsuq4u9VUL3aBgFSB6hIGNz8ENT71A9crfumgLJT4avqwDXNcUFSgwXSc%2B1EJBF0QLK1MCdVSGdUMF55GNeR87o%2BoTs79XZilpI2QUUI1cjjkoH8G4cYcgty7HiaUXYsHs3w1fQJzDNvbPCBjqkAaDbS3Ny3qb0YpXgY59YMBQuvBSbl%2F5fdrcLrPlu%2FHq84vqP7DYrF8DzvM38HVr9%2B0lAgZQBVHNAMykSi%2F90YdBUx3t3qGJswmUq%2B4LAebO4Uk4u0HbdXm8%2BNwxp%2BjBGgwWcgQftUjHrDRSU55CJ4ur8op9dDm1Y1OkzCuBMARxdQAkqPCyx%2FFP%2FwbYhxZvmVMVSpZSM8hF1Kg%2FgwbP4w9zQYhFf&X-Amz-Signature=55ff060f13f752680b3f8ef5fef0ca965e35d9d95941278e834328df1b1c4365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
