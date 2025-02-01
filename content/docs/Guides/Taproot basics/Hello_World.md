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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY2TU7WR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy4qUHo78as18A1GJvutkias83lPAwVG5h2nTgvY%2Fa7AiA4e%2FO0HadERTpSgMYbEWGP6CbkqV5%2F0paDFDO0EiyXDCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqbmqcripqr%2FT64OKKtwD3Si07dVeqP14w89siTkkQbIa3PxYsJQU2jvqMj%2FTzvj3VsCSuKRZaO1UM6iqhuOThEVRYscJe89gqi%2Bx38XAp0y83dHkyZeoFZ%2Fmd6R3RFUiCyUFzwQA%2BnOx0Uj%2B9bxOf48GfK8Npd%2BFOQDaXYdgUjJHm7xANCkst8zb6AUETHLELvxbaLwlR5EKqnU4%2BU9z8HaycgjjRBnrXah3zadCTAIXVNa7zJJEPq4raaC5IkirCIC1QRxmPVlkez2JCFcmeWNkDe4EdQSjSpte0gh5ynFgGLZZ49VX4QkwZvkNJBsxkudQRjyIWU978C48bynoT%2BqHwle3EC7cMMoJZRXVI1TIv6v%2BUBQCa9a2hE570MfXTyXKIrCZvnTKYAc07Jd7QXzMZwwUsNM7tW%2B5v7Wr08rSKW3BPjwZwUhKzImSsaOJeACB0ADck3Wy6L8t3uO49gBKjOIyN1cIKbcSrY90cYnyPky9%2FPY4eG9mXu0d63Z51CuWaGbBY7oljMv5kKsHkkpZQS1r16c2zPISGzmSH9DlDxoySDiD1rs7I2IS01rnFWo64kzfn0LgFOm8caAchEBy%2F8%2Fumg0sSCwP%2FBdzzsmBVUdNM9JL0jJPQWA0n7h%2BLEs4xxq0ZetYf%2FMw0KX3vAY6pgGDwAgrjQXNn7t5%2B3omJUJvlbyitVGI4GL6%2BEYuKawhSvxqEhIxIIt3KiKenKlVf8TzGP3f%2B%2F6xkBJ5kV25j3mZbuEUlyA%2Bdck2%2B97G3wzOrzuSeTfE%2FCcIKbhrM%2F5nrCUeOPfEdZW%2BLKZQ8j8u1TxFUFjg0gwepg%2BecSLGX3O8pxEu8Peht%2FBYpSHbkOm%2BA98f6WN71lwC%2FEGoGievJSjTU1R1sQNR&X-Amz-Signature=2256febb453a3ac131f90f86738dade5caac3e8b9fbdef2e871fdc3994cc3539&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY2TU7WR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy4qUHo78as18A1GJvutkias83lPAwVG5h2nTgvY%2Fa7AiA4e%2FO0HadERTpSgMYbEWGP6CbkqV5%2F0paDFDO0EiyXDCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqbmqcripqr%2FT64OKKtwD3Si07dVeqP14w89siTkkQbIa3PxYsJQU2jvqMj%2FTzvj3VsCSuKRZaO1UM6iqhuOThEVRYscJe89gqi%2Bx38XAp0y83dHkyZeoFZ%2Fmd6R3RFUiCyUFzwQA%2BnOx0Uj%2B9bxOf48GfK8Npd%2BFOQDaXYdgUjJHm7xANCkst8zb6AUETHLELvxbaLwlR5EKqnU4%2BU9z8HaycgjjRBnrXah3zadCTAIXVNa7zJJEPq4raaC5IkirCIC1QRxmPVlkez2JCFcmeWNkDe4EdQSjSpte0gh5ynFgGLZZ49VX4QkwZvkNJBsxkudQRjyIWU978C48bynoT%2BqHwle3EC7cMMoJZRXVI1TIv6v%2BUBQCa9a2hE570MfXTyXKIrCZvnTKYAc07Jd7QXzMZwwUsNM7tW%2B5v7Wr08rSKW3BPjwZwUhKzImSsaOJeACB0ADck3Wy6L8t3uO49gBKjOIyN1cIKbcSrY90cYnyPky9%2FPY4eG9mXu0d63Z51CuWaGbBY7oljMv5kKsHkkpZQS1r16c2zPISGzmSH9DlDxoySDiD1rs7I2IS01rnFWo64kzfn0LgFOm8caAchEBy%2F8%2Fumg0sSCwP%2FBdzzsmBVUdNM9JL0jJPQWA0n7h%2BLEs4xxq0ZetYf%2FMw0KX3vAY6pgGDwAgrjQXNn7t5%2B3omJUJvlbyitVGI4GL6%2BEYuKawhSvxqEhIxIIt3KiKenKlVf8TzGP3f%2B%2F6xkBJ5kV25j3mZbuEUlyA%2Bdck2%2B97G3wzOrzuSeTfE%2FCcIKbhrM%2F5nrCUeOPfEdZW%2BLKZQ8j8u1TxFUFjg0gwepg%2BecSLGX3O8pxEu8Peht%2FBYpSHbkOm%2BA98f6WN71lwC%2FEGoGievJSjTU1R1sQNR&X-Amz-Signature=125eafa7ad2dc77b450b9f1a60f7b6a53e16e9550f1c41453f03da9fc9a68420&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
