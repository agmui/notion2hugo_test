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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKQJBWC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHL%2B0SoCxHOsJbOb8L%2B3AnWhe%2FaBX1YYYFvmIpomhmaAiEAruviOVhw4K3VBd8yfSb%2BCnKpbJn87XO6SpXJTOP23U4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUD%2BgwW0T7WFhVm4ircA7p2Rh1Qc%2Bem6bk7uLYqJqc8dElprcPQ3SGcW0TGVKKyQYnhG7mO0r6%2F5hRYD5r3bjqGPpyOqLqlkPdMcOeRjay2yDMO%2B%2BFrQQz46YtreJEe54BeOAAs5C%2FcB2Vv251H8wt4x27auh2Hc%2FlY9y4bpf4FQMCJ95RLyNAvLqCCH8pyULqk2g0d7Pja9C6vOIlCi4uVinXTZrOrRHdLgh%2BZeGO1EMRAcCBYLrkBta9tAe6h2p6aLawhDaCOdVfJf3SszTESn%2BnSU8LZ7GVDei9rbnRi3tvsdHLwloSjHQmPNlsE80zWslHL289%2BVBTjFLR9aTO2cKLtcVG0NO94lunziqBw48owRYk15P7whSUM8d10gCsSceNWoP6G8e7lMwyAUVgKoLuYZT5xck%2B7cmM1SIocAcWcNR3oWRaCNUvM4UNyUOtoyKp5GN4Ry8zrj94uSiVUiRgkb%2FKQK3fLlOOs0jk7rZRWfQHtuzlz3i6o4Ntzh2x98%2BKWxtLnby%2B5LEe%2Bs%2BmJ2YiTZl0lD%2BzrnaScspw%2Bbo3wFyeKAmd4cFCggtNl3b6XYwSYqfPEP4TKf6j%2FeZYQWoGpPREdYDXyDvAiTldmMBIlxtrL3wX7KfVj1koC%2Brj5aoiFyde6UZfHMImzzMIGOqUBpiBeGo9Kgmh9R4oUuA6gZDVtRzODJI42a9JTFMhyN6QR8vT97oznggxHkqerJEx3sPOJ6UOdNOZ6rrxLg89eufDX3D5p4qaXtgEPZ%2BOla80hvMJBXdog19wAQck3jFj5LImlEDdx%2Fd%2BlmTV9QxkzEKIZJMO%2Fp5z98NNxhOqK%2BFoVYZdO%2FUah%2BYt9V5v0WrskXiGZgaXVH%2BQQ21GVezvfpOsFBXaf&X-Amz-Signature=59af7c75ef53a30918ee1c67d2e642a601e780c53a36ac034ad82a9dfe378f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKQJBWC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHL%2B0SoCxHOsJbOb8L%2B3AnWhe%2FaBX1YYYFvmIpomhmaAiEAruviOVhw4K3VBd8yfSb%2BCnKpbJn87XO6SpXJTOP23U4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUD%2BgwW0T7WFhVm4ircA7p2Rh1Qc%2Bem6bk7uLYqJqc8dElprcPQ3SGcW0TGVKKyQYnhG7mO0r6%2F5hRYD5r3bjqGPpyOqLqlkPdMcOeRjay2yDMO%2B%2BFrQQz46YtreJEe54BeOAAs5C%2FcB2Vv251H8wt4x27auh2Hc%2FlY9y4bpf4FQMCJ95RLyNAvLqCCH8pyULqk2g0d7Pja9C6vOIlCi4uVinXTZrOrRHdLgh%2BZeGO1EMRAcCBYLrkBta9tAe6h2p6aLawhDaCOdVfJf3SszTESn%2BnSU8LZ7GVDei9rbnRi3tvsdHLwloSjHQmPNlsE80zWslHL289%2BVBTjFLR9aTO2cKLtcVG0NO94lunziqBw48owRYk15P7whSUM8d10gCsSceNWoP6G8e7lMwyAUVgKoLuYZT5xck%2B7cmM1SIocAcWcNR3oWRaCNUvM4UNyUOtoyKp5GN4Ry8zrj94uSiVUiRgkb%2FKQK3fLlOOs0jk7rZRWfQHtuzlz3i6o4Ntzh2x98%2BKWxtLnby%2B5LEe%2Bs%2BmJ2YiTZl0lD%2BzrnaScspw%2Bbo3wFyeKAmd4cFCggtNl3b6XYwSYqfPEP4TKf6j%2FeZYQWoGpPREdYDXyDvAiTldmMBIlxtrL3wX7KfVj1koC%2Brj5aoiFyde6UZfHMImzzMIGOqUBpiBeGo9Kgmh9R4oUuA6gZDVtRzODJI42a9JTFMhyN6QR8vT97oznggxHkqerJEx3sPOJ6UOdNOZ6rrxLg89eufDX3D5p4qaXtgEPZ%2BOla80hvMJBXdog19wAQck3jFj5LImlEDdx%2Fd%2BlmTV9QxkzEKIZJMO%2Fp5z98NNxhOqK%2BFoVYZdO%2FUah%2BYt9V5v0WrskXiGZgaXVH%2BQQ21GVezvfpOsFBXaf&X-Amz-Signature=b30f257c480b39347943ae151fc1418de95e548c554f47fb028fba20c6bd13bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
