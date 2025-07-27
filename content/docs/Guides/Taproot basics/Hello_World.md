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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEYY2EY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAmBb7M%2BI06xFyTzwYGdL8RzUcgUIvs5xRzG0cQqF30KAiEAnDun2cIK5j1w9T3%2B0Bc1GtxjHWvBdeRAsifUp9Wu6CIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCUqxz9V7fhhDfz9JSrcA0167Vakfm50skyW4nHOTwGedntb0Rcp8Ae5HNPzIx8y44aDx1m%2BipYTHcGG4KyCeHzBEFs0Td4QHJQDlxtv%2F30SHYAeK8PbVqXFd1TyHHOyqI%2BHiiwzLV6%2FImtxBWXeXOQBGA%2B1%2BqgaluRoKodE0epIBoythkevagyK%2BJK1BMKjFf2DTeGkO3cPFhmq50YQofgjZUmAorI1g%2FIRb8SUFOu0yYrtqcaQN00ZaAUIhXpOFZKLOM40R6FNDR%2B7RMHe5tQuwJQ0cHmJgpolN8F4LVs5ikofLdWe0yYzwL9WWCwFgRB33r8RdMgTm7ToIMFb1e9LLY13erMUoRHZyjaOYwna84xC61rpI7gKqe7KVSW1PP253bcyueYw9IVLw2mEH4H%2B3wAbAna4ndXyupUde0ag%2BcrV79NBCo%2FDaUUAVSwb0b3OhTamHBlg5j%2FWMUA9%2FsIKuajukAKVoVGRdF0HDl3a3z1wMdS4gAraxR3ZpD3Qwa8m1mcnit%2FaCMNFPYk7yVf9O9YbTr1w13hA2%2B5BiHtu6cx6IVB%2BMhrdr8x4vljQE8RiUn36KKt9RlbH8kmqzYYm31q2sQEXL2CpwRkUTSWxO%2F2HTPIkRTsc2kt1sb8rJcjj3%2FAHgYZ7yMgMMIyBmcQGOqUBpZ3HOXFmjVbrzNcgcANW8e97PjEROYecXdFrUKkoS5ovdedDnzycDkGE1W%2Bhg1IjyKMI2GDeXpUxcWJiRptQYqvzDhkiJFEm6KWz9vxU4tWsGEsJ5LVP58F0OwsAbyP57ieSAA0LlHbyPXwvl94AZ8E1QzJgii%2BGPVF1Q7Sh1RI8B%2B8984YLAKMYBO6Focgx6ckOCbAYuxYMoznKl71HLT6soDox&X-Amz-Signature=984471c4b0dee25cb84e2551a3ba3d8e44d7b781fa8dc34761e3179465378728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEYY2EY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAmBb7M%2BI06xFyTzwYGdL8RzUcgUIvs5xRzG0cQqF30KAiEAnDun2cIK5j1w9T3%2B0Bc1GtxjHWvBdeRAsifUp9Wu6CIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCUqxz9V7fhhDfz9JSrcA0167Vakfm50skyW4nHOTwGedntb0Rcp8Ae5HNPzIx8y44aDx1m%2BipYTHcGG4KyCeHzBEFs0Td4QHJQDlxtv%2F30SHYAeK8PbVqXFd1TyHHOyqI%2BHiiwzLV6%2FImtxBWXeXOQBGA%2B1%2BqgaluRoKodE0epIBoythkevagyK%2BJK1BMKjFf2DTeGkO3cPFhmq50YQofgjZUmAorI1g%2FIRb8SUFOu0yYrtqcaQN00ZaAUIhXpOFZKLOM40R6FNDR%2B7RMHe5tQuwJQ0cHmJgpolN8F4LVs5ikofLdWe0yYzwL9WWCwFgRB33r8RdMgTm7ToIMFb1e9LLY13erMUoRHZyjaOYwna84xC61rpI7gKqe7KVSW1PP253bcyueYw9IVLw2mEH4H%2B3wAbAna4ndXyupUde0ag%2BcrV79NBCo%2FDaUUAVSwb0b3OhTamHBlg5j%2FWMUA9%2FsIKuajukAKVoVGRdF0HDl3a3z1wMdS4gAraxR3ZpD3Qwa8m1mcnit%2FaCMNFPYk7yVf9O9YbTr1w13hA2%2B5BiHtu6cx6IVB%2BMhrdr8x4vljQE8RiUn36KKt9RlbH8kmqzYYm31q2sQEXL2CpwRkUTSWxO%2F2HTPIkRTsc2kt1sb8rJcjj3%2FAHgYZ7yMgMMIyBmcQGOqUBpZ3HOXFmjVbrzNcgcANW8e97PjEROYecXdFrUKkoS5ovdedDnzycDkGE1W%2Bhg1IjyKMI2GDeXpUxcWJiRptQYqvzDhkiJFEm6KWz9vxU4tWsGEsJ5LVP58F0OwsAbyP57ieSAA0LlHbyPXwvl94AZ8E1QzJgii%2BGPVF1Q7Sh1RI8B%2B8984YLAKMYBO6Focgx6ckOCbAYuxYMoznKl71HLT6soDox&X-Amz-Signature=cea8f1604af1e8ba53a538e7418d290c22b2396d36455f0a8c8f649ec0ed0318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
