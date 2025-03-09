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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q22KKWD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHniwmPrAkvk4kq6DjJWN68Q1QypBrE36f7reD02yzTKAiEAzDSnc6v2HakZEVoHymaaoepBMZeepX%2FnoJhFJwKVG1gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEm5Wa93R4gKXe9DbSrcAzQ3gznGHpfrpIeTCDH4TDGUCuyvZNecpr1UfOw2sPO7Nx9Q3OC%2BmPksQj8aP3KCnm9xKZlyvxxfa8xjwhxy2Or7DK4W40snV88mx8SOV0ELfE%2Fy3NcN0L4bXIVuZz2zr41oC%2BvhEPZ2vfujPDKVs3AcTZv%2FH0kJmREEldnYeWzF9HIgB7M2a9%2FICe6GsAgBgVitOeUvWfUZ6dVuHGBhM7uux3zthyPhqUBPeIn417fYmpyiFIbGCY5cHK%2BqP3M0%2BvniPsKGV7tz0qanauUaGDQ7Laf6jcvCDaazy5sEeC9jRv14QVh%2Fjam9XcKm8FV4A5NVTQ0siI6faH8zNl3NXLlP5abWkawXpoe6skyjJWFROMmUTq4l1ZjGRZmTht%2BuNTAqlFCB8VNN4VSdDIEzJvFTlbZ7ogjsvW%2F8Ood4mfhG2EawjKqCZnxehwwBiAbV7wgFfrglKiP5JZUnPpoxBEAKcQvte8Yz%2F2bQn5liq8Zl%2FrCUheGawRbY2%2Btqvgz0sAmzJvzt5xMjbdBKX8B%2FiFdzlvkmPbRMU69%2F83mK9xfLexl7grPgiypgh5GUTIEVs24o47LeS1loC3N7V8twkQ6KlmHaV9Z%2BVziAY%2FR4TojLi8FXjTli7b152fYcMNHgt74GOqUBQ5bfN9mWSr8l9yg90%2FjbbyQcUUH89Zpq8RKPCt7JfK0dQInOSeklpK6NuEJrKc2wMISYoWATfA3%2Bk7V016Qu0%2FWVvTIplu06AjV%2Fs3Hq4IdPsomWIsuRo2DTmJU7jZsZobftb%2BqY%2BlAEWa6CZ9%2BasMqVlahUuKjhOn7BxHBjHOYcdAL6RTw7SADBd6%2FBxbG0v5n4mA%2BDHnIrx234plD%2BR7w62qUX&X-Amz-Signature=f23e6f7ef92f7acb2a507baae9e8696a1fe1053fab392a5f6d64c1e18364d1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q22KKWD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHniwmPrAkvk4kq6DjJWN68Q1QypBrE36f7reD02yzTKAiEAzDSnc6v2HakZEVoHymaaoepBMZeepX%2FnoJhFJwKVG1gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEm5Wa93R4gKXe9DbSrcAzQ3gznGHpfrpIeTCDH4TDGUCuyvZNecpr1UfOw2sPO7Nx9Q3OC%2BmPksQj8aP3KCnm9xKZlyvxxfa8xjwhxy2Or7DK4W40snV88mx8SOV0ELfE%2Fy3NcN0L4bXIVuZz2zr41oC%2BvhEPZ2vfujPDKVs3AcTZv%2FH0kJmREEldnYeWzF9HIgB7M2a9%2FICe6GsAgBgVitOeUvWfUZ6dVuHGBhM7uux3zthyPhqUBPeIn417fYmpyiFIbGCY5cHK%2BqP3M0%2BvniPsKGV7tz0qanauUaGDQ7Laf6jcvCDaazy5sEeC9jRv14QVh%2Fjam9XcKm8FV4A5NVTQ0siI6faH8zNl3NXLlP5abWkawXpoe6skyjJWFROMmUTq4l1ZjGRZmTht%2BuNTAqlFCB8VNN4VSdDIEzJvFTlbZ7ogjsvW%2F8Ood4mfhG2EawjKqCZnxehwwBiAbV7wgFfrglKiP5JZUnPpoxBEAKcQvte8Yz%2F2bQn5liq8Zl%2FrCUheGawRbY2%2Btqvgz0sAmzJvzt5xMjbdBKX8B%2FiFdzlvkmPbRMU69%2F83mK9xfLexl7grPgiypgh5GUTIEVs24o47LeS1loC3N7V8twkQ6KlmHaV9Z%2BVziAY%2FR4TojLi8FXjTli7b152fYcMNHgt74GOqUBQ5bfN9mWSr8l9yg90%2FjbbyQcUUH89Zpq8RKPCt7JfK0dQInOSeklpK6NuEJrKc2wMISYoWATfA3%2Bk7V016Qu0%2FWVvTIplu06AjV%2Fs3Hq4IdPsomWIsuRo2DTmJU7jZsZobftb%2BqY%2BlAEWa6CZ9%2BasMqVlahUuKjhOn7BxHBjHOYcdAL6RTw7SADBd6%2FBxbG0v5n4mA%2BDHnIrx234plD%2BR7w62qUX&X-Amz-Signature=d39493903c6083520d83497d4466522db0f6625a7b71d1a09182944af5d8c894&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
