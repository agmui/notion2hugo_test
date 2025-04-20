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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAKOLKPD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID4k%2BjrOcHHZmvlSDI6HWl576bNbgOBe7H5fD2IZqDh9AiAjpuhpXRRXYzjGmU%2BxvV7lQLpTMPEpeEa1X4A02PXM4yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg3ldm39Nj%2FBDgTquKtwDyX9uvNJkIH8fQe%2FlkCq87m8SJ8XKzBgayKHZR7kEzXcWgd20AkPUKuv%2FGKzDKcggEHjKjZc2ruZTM8FnCvecdGwAykrT5JgY1AesiZO%2F%2BpDv0Hqbl0kw74s7vpiwGlAjVtroRRyPQ4c3ZPNwUgYsHkhzCRoHT6cSAd0xebOvi2p7ybYvN6JIKzi76kEIBpCGfk91Jn3l7puN5peXahDw4tImc00AsvvA8R80nN1S30C7Fv2bNy9tprtYtsyP8zwujRbP%2FZpa9mNDN0l6dp2qyuxox7YtIT4PwG9deGrvYTv%2BWWTOzoQVJcBjWf4pKmpPlQR7JF5jADL3W6UP%2B3mw5ru9TrjoQkLevoF8HLKfyJJeyl648%2B1XxyMqukhuFyhA%2FhGi8yQFZEVRBHtxNfzAHgPp%2B4VQI5yaMhkkhzSrNo3w0JJX8gVHTwy59gHe%2FO2hccXH0pMzhygbU56BOZqGIgivqfOAtt3LkyR3ut0O40gO3SGkVcgTxXguJIlQZ%2BO2VtenfxK6cNlCNULxQcanwTffwnrnZ82D7uqBQmft6h3wUChoQYK%2Fq0lLMs9jSizKg5aOQfWNzLqeWjmln6pSzS80fsFyggQduaBjFHFXx0aX03QWc5MeGQPxc%2B8w0qOSwAY6pgElbXiI9duZfvyCh7SA%2F6lQUqaZWKwYaRosWdSSNQI66x4UTYImb6HIQ%2B%2Fhfh4VoPyQfM%2BHLf%2FeU1oczWVCnFdL5l41DwF3QrAjf9bUVvMMPUd18OqcUkszYpM8e4Mj8NC1jZRyZfMKepvYwgdIY5KE0jsIHAhH5dtcCEGMUZeDUvmCR6MN416QmguA3copa3y9sf5oP47Fkbg3Apzt%2FNzuRId0i8OA&X-Amz-Signature=953ee855e009f44e01bb3a0c154e2bf6d9c9bdaf4ab36db2021d8994958747c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAKOLKPD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID4k%2BjrOcHHZmvlSDI6HWl576bNbgOBe7H5fD2IZqDh9AiAjpuhpXRRXYzjGmU%2BxvV7lQLpTMPEpeEa1X4A02PXM4yqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg3ldm39Nj%2FBDgTquKtwDyX9uvNJkIH8fQe%2FlkCq87m8SJ8XKzBgayKHZR7kEzXcWgd20AkPUKuv%2FGKzDKcggEHjKjZc2ruZTM8FnCvecdGwAykrT5JgY1AesiZO%2F%2BpDv0Hqbl0kw74s7vpiwGlAjVtroRRyPQ4c3ZPNwUgYsHkhzCRoHT6cSAd0xebOvi2p7ybYvN6JIKzi76kEIBpCGfk91Jn3l7puN5peXahDw4tImc00AsvvA8R80nN1S30C7Fv2bNy9tprtYtsyP8zwujRbP%2FZpa9mNDN0l6dp2qyuxox7YtIT4PwG9deGrvYTv%2BWWTOzoQVJcBjWf4pKmpPlQR7JF5jADL3W6UP%2B3mw5ru9TrjoQkLevoF8HLKfyJJeyl648%2B1XxyMqukhuFyhA%2FhGi8yQFZEVRBHtxNfzAHgPp%2B4VQI5yaMhkkhzSrNo3w0JJX8gVHTwy59gHe%2FO2hccXH0pMzhygbU56BOZqGIgivqfOAtt3LkyR3ut0O40gO3SGkVcgTxXguJIlQZ%2BO2VtenfxK6cNlCNULxQcanwTffwnrnZ82D7uqBQmft6h3wUChoQYK%2Fq0lLMs9jSizKg5aOQfWNzLqeWjmln6pSzS80fsFyggQduaBjFHFXx0aX03QWc5MeGQPxc%2B8w0qOSwAY6pgElbXiI9duZfvyCh7SA%2F6lQUqaZWKwYaRosWdSSNQI66x4UTYImb6HIQ%2B%2Fhfh4VoPyQfM%2BHLf%2FeU1oczWVCnFdL5l41DwF3QrAjf9bUVvMMPUd18OqcUkszYpM8e4Mj8NC1jZRyZfMKepvYwgdIY5KE0jsIHAhH5dtcCEGMUZeDUvmCR6MN416QmguA3copa3y9sf5oP47Fkbg3Apzt%2FNzuRId0i8OA&X-Amz-Signature=027dfafdfbd53417b1795dd079a7cab16d907ee7db2b34130f508eb9cc1ba6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
