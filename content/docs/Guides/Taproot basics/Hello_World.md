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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTZF4QRG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDdsWyK0t%2FHOQK8mAUn66W72cSjAi3wMnbXfNbn1PiUDAiBWwyJlphlQCSWMEMDrSe6T2HtcRNNbuwqTdYcGC4mxjSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMY37A7aH53Ihb0TZ%2FKtwDEFJ4YwddxckKql0w7LqCaswE2DJkANuaYuhigyTvmnlba4VwRxdHv94bhdUHIYPj5yVfJ6rpGUTlUkvZffDVQ6Oqh6hmZKoSW10eCQvq4Xeg1z73hWezzDBhb5wpdwgVUoa1SdD3aRjQi7UpZB1t12g81ewuFHIP7oP%2BpyszZEnyBPZg7ML0gOxKApXptb2Flau9f3j%2BDx05GZ3WorbAGpvxXbEQj4N4ZgVHU%2FbQtn%2FFNRYmDGaUmuTQ1xgqAz8XX0p3S8G1ALsdhuh2TCbSlwcn65Jz4RVVb6g6r0dHdMOga4fnKY48vDcbU9w26B40O27ohfenM%2B3CJLQonrw9lcrBkQqNGgOGmTxICcSP2nQM4swmTejTXqG3zWoVcRvv0MNYpR8W21dlnW6z%2FqB%2BWLVOJErVxnzGNF9fVNi4%2BI0tg0tW90IZLq68rB8%2BitWgVSYl8hhxkfj5gWv8GyQOl%2BJHH80sI7HkHZ%2BmT%2BqrGCW9CM9WQFdk%2FPwYnQOEOFSxypP7nX10xUdP5P57es%2BuoP4miSg%2BPb5yXK9ryHX99usmzatIizR7xpftwWCj6uMg1nBAQx3VT40bt9Lf90zE%2Bd2HRdDm%2FSdMDqj81HHD2DAJ8tUnrkfVp9JK4eEwm83RwwY6pgEcPFSX3FSXAN5SrpKeXvugJ1j9Ct6RUvF3SCQIHX283FbhNcVcJ4BtMWpR4E4qLIwTzoAIpjLqlRS6PbPDmiVqf5LPkXvKfAv5GGauEg3kI5EgqigAflXamj3ztRhK7Rqp7brZgR0V6nd4uxm6c4k%2FosFTGMPF8OgJl9odKJJhWY2gE9imWO356kJ3wnFou0itjv%2FTf33XSZM%2B0MAk1DNJYSQKV7uT&X-Amz-Signature=fe7e9da6f2cfdb40edcc0854b9281372df22356e28d78966dbd1b82bda653ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTZF4QRG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDdsWyK0t%2FHOQK8mAUn66W72cSjAi3wMnbXfNbn1PiUDAiBWwyJlphlQCSWMEMDrSe6T2HtcRNNbuwqTdYcGC4mxjSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMY37A7aH53Ihb0TZ%2FKtwDEFJ4YwddxckKql0w7LqCaswE2DJkANuaYuhigyTvmnlba4VwRxdHv94bhdUHIYPj5yVfJ6rpGUTlUkvZffDVQ6Oqh6hmZKoSW10eCQvq4Xeg1z73hWezzDBhb5wpdwgVUoa1SdD3aRjQi7UpZB1t12g81ewuFHIP7oP%2BpyszZEnyBPZg7ML0gOxKApXptb2Flau9f3j%2BDx05GZ3WorbAGpvxXbEQj4N4ZgVHU%2FbQtn%2FFNRYmDGaUmuTQ1xgqAz8XX0p3S8G1ALsdhuh2TCbSlwcn65Jz4RVVb6g6r0dHdMOga4fnKY48vDcbU9w26B40O27ohfenM%2B3CJLQonrw9lcrBkQqNGgOGmTxICcSP2nQM4swmTejTXqG3zWoVcRvv0MNYpR8W21dlnW6z%2FqB%2BWLVOJErVxnzGNF9fVNi4%2BI0tg0tW90IZLq68rB8%2BitWgVSYl8hhxkfj5gWv8GyQOl%2BJHH80sI7HkHZ%2BmT%2BqrGCW9CM9WQFdk%2FPwYnQOEOFSxypP7nX10xUdP5P57es%2BuoP4miSg%2BPb5yXK9ryHX99usmzatIizR7xpftwWCj6uMg1nBAQx3VT40bt9Lf90zE%2Bd2HRdDm%2FSdMDqj81HHD2DAJ8tUnrkfVp9JK4eEwm83RwwY6pgEcPFSX3FSXAN5SrpKeXvugJ1j9Ct6RUvF3SCQIHX283FbhNcVcJ4BtMWpR4E4qLIwTzoAIpjLqlRS6PbPDmiVqf5LPkXvKfAv5GGauEg3kI5EgqigAflXamj3ztRhK7Rqp7brZgR0V6nd4uxm6c4k%2FosFTGMPF8OgJl9odKJJhWY2gE9imWO356kJ3wnFou0itjv%2FTf33XSZM%2B0MAk1DNJYSQKV7uT&X-Amz-Signature=97b8fa5ff4257f9369a5e00f7cdbe9a0d7c5714950b7589d4f666bc136982e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
