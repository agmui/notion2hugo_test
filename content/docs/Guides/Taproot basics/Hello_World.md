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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7STHO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDPbgWcnBhz7PwBTOsb%2Faql2TeeqJoh3dALe1TbicRJqQIhAOUN569XDcfq2I38q6s8orUVLkKhNVzn8pyyH8f2QIUBKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwITkyQ3QKG7kqBJKcq3AMdFCodagoR4Y9GAr3hu5bU81U1mwqU0uZBYqkjn1JpvZvT9rKr9oXwE0Cgql2w0AHn4rHyie5n7LpA8YoGsJZ7tXixrlFMPwAp7JHjUyJO23iw1ZT9fgVxxM4v1b9jUF3DDERpisy1f8U9bXzStDV3%2BiKkB5zjox2t77fZRXvwpEmVxwOMqpBOQA5n2h8zc%2BrDaqP6qaVg5IKWS9vd89%2Fq6NpORxYz0nBIzXSGZXpvtzUs%2FRw%2FVFiujS3Xsxk%2BAtHQYhfghpalWE1%2B0CZVD22vQbXceAdmT8QPiwy3MrOpLqfCIjh3VQCoC3jP7o2bBlgl1uX%2Bl6OLIjJhc7H9QBQf4y7wAOAeVeRgupbg13UrhHmMDDze9lIxspFR0gvkLx1Pa414kaSUczSxtsfzy1RIJ5%2BUV3yUQ8vJFS49cLhq2H9M3aQV3Ov9Kbd%2Fl2ozjFzjF1IPGNiVmwj6FlKjwpVxrV2p1JpqODu5dglUK2ANaNyMI%2FaoWhWBx71nNu%2BkaJs0ykN%2FTZ0ZC69z7hUOwQZCqLN9yx48KRIhywTN8TcGYWiwPU2nL8tT8CnMsHzu34M%2BpIRm8E7CvkstoU%2Fh3nLk919oK0lc8M8aAgPAqQLg6NtzSpnUXD2Vqu1HZzD6hp29BjqkAUmRuOl4VhRSxO%2FWG3%2BWaCeIKcAFOKOV133tn%2FfxNkUAv8SVgOLpmQOP9aYtzxPlMvfxX9Qa53%2BQ8FvC7daawMlMjZqWvBr0kx4LS%2Frcj5sbR4jnkAJhjj4jSSLNoAx7715QaAwF9Sg%2Fv8E2kvofmj3kVYnu7Vtmz05sIMMjtE7iy93S56TFuZNRmsNAozU5qTNIUs879cA4NkM69BU%2ByVdumX7V&X-Amz-Signature=ddf1b0517091249f41b984d245f977ed75e6739c2b2c219fc2caa295c9a6bca9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN7STHO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDPbgWcnBhz7PwBTOsb%2Faql2TeeqJoh3dALe1TbicRJqQIhAOUN569XDcfq2I38q6s8orUVLkKhNVzn8pyyH8f2QIUBKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwITkyQ3QKG7kqBJKcq3AMdFCodagoR4Y9GAr3hu5bU81U1mwqU0uZBYqkjn1JpvZvT9rKr9oXwE0Cgql2w0AHn4rHyie5n7LpA8YoGsJZ7tXixrlFMPwAp7JHjUyJO23iw1ZT9fgVxxM4v1b9jUF3DDERpisy1f8U9bXzStDV3%2BiKkB5zjox2t77fZRXvwpEmVxwOMqpBOQA5n2h8zc%2BrDaqP6qaVg5IKWS9vd89%2Fq6NpORxYz0nBIzXSGZXpvtzUs%2FRw%2FVFiujS3Xsxk%2BAtHQYhfghpalWE1%2B0CZVD22vQbXceAdmT8QPiwy3MrOpLqfCIjh3VQCoC3jP7o2bBlgl1uX%2Bl6OLIjJhc7H9QBQf4y7wAOAeVeRgupbg13UrhHmMDDze9lIxspFR0gvkLx1Pa414kaSUczSxtsfzy1RIJ5%2BUV3yUQ8vJFS49cLhq2H9M3aQV3Ov9Kbd%2Fl2ozjFzjF1IPGNiVmwj6FlKjwpVxrV2p1JpqODu5dglUK2ANaNyMI%2FaoWhWBx71nNu%2BkaJs0ykN%2FTZ0ZC69z7hUOwQZCqLN9yx48KRIhywTN8TcGYWiwPU2nL8tT8CnMsHzu34M%2BpIRm8E7CvkstoU%2Fh3nLk919oK0lc8M8aAgPAqQLg6NtzSpnUXD2Vqu1HZzD6hp29BjqkAUmRuOl4VhRSxO%2FWG3%2BWaCeIKcAFOKOV133tn%2FfxNkUAv8SVgOLpmQOP9aYtzxPlMvfxX9Qa53%2BQ8FvC7daawMlMjZqWvBr0kx4LS%2Frcj5sbR4jnkAJhjj4jSSLNoAx7715QaAwF9Sg%2Fv8E2kvofmj3kVYnu7Vtmz05sIMMjtE7iy93S56TFuZNRmsNAozU5qTNIUs879cA4NkM69BU%2ByVdumX7V&X-Amz-Signature=33b27c400573a3c824b67a3da4e121176750b7c8564323d2bf0c865ce3ef2147&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
