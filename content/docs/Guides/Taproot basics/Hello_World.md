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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SZPLBJC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAeqb6NirSuiwi1b7XS7ZToXhn%2FE6AmIOAluB2uZuf4fAiEAjWu6rMFd3RKEfglUIOQDFsPSXvVXiL7lE%2BHAHvJhgwIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6eZjShTXBc3wjnyrcA8qvFnssjaHI7CzqML59TXraiEKJOb6Jpii2e6TOJ14mnXXbXviZI80K8dnwgbMv6vxVi%2Baqq%2FWMTtQ1jl2xAKPKrOnRCP%2B%2FU0cBBfJWMZd3SoOVoL%2BEj8pNNzeDUDaTcmYrcsfuQ24yRaCw%2BaMU9CM%2FYbBqNPylqmHDMpK6%2BzPQdD8fwWzDfM1j1zAdxQ4i%2Fc7ihPW1yvax7GH7TCb5deIXfIbOx4%2B4LxxGgvfy5L5aWQPkqIKgzC5ldwPJPFq9VoqIgQoky4Z0iPWIaJqUd1EN1qfqpEqDM2viUZdF6WeX0DU1pPpBYm23VHMNNSfxAk7EAmbItBsgSsa20wVrzcF2yDUBWblx5yO50TvYFmV9Cf5GM7P6HWD6tUOBj099kHvP4yK4PnoX2L8gDJeXIbhpdG%2F4ELyl%2F0DAnHL%2BgtfrmFHuITIGMR7KC0BpW%2BRzqpMOhxuOcqgmWuJ2%2FgHJBCRhHVSLCSFSTLhaOj4MndpV8qCpTUp0D2TlxWOmpiwgnbZ4SuUSTq27%2FOlTyo6GUnKH4RTr9AmSbM1NxGuAZpgLA76LSG7pEwQjMUwDIGq2tHHHo%2Fe67y8KGKuhUgYfrPsBJexjcionEfZQW%2FJ05zinBqFF3w5Qy59Rq6y%2BMJPHjb4GOqUB8dr17XomUNrxn4F%2F8LaBEm%2FpQgnRvYflkRS84zUdVr1MOJIM0jrkPfk%2FqhoDzOpBxpXuyQohF%2BKIAZfq86NbDQ8nwEWogO7pfMhNDVa7mA870gHqALsQlhgcgOwyzlhXDUY8O2jFhX2yGYeHkbEht86fYOpo2H%2FioVd4UdElTTgAJt8WCKtR0EjC0%2FkR21QRc95rmAAz4W6nh%2BHatRUcAxrEnHEJ&X-Amz-Signature=2d5daabed3f2cfc1ccb5f43a597254c128677e80ca69b8caa8b677e91d78cee4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SZPLBJC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAeqb6NirSuiwi1b7XS7ZToXhn%2FE6AmIOAluB2uZuf4fAiEAjWu6rMFd3RKEfglUIOQDFsPSXvVXiL7lE%2BHAHvJhgwIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6eZjShTXBc3wjnyrcA8qvFnssjaHI7CzqML59TXraiEKJOb6Jpii2e6TOJ14mnXXbXviZI80K8dnwgbMv6vxVi%2Baqq%2FWMTtQ1jl2xAKPKrOnRCP%2B%2FU0cBBfJWMZd3SoOVoL%2BEj8pNNzeDUDaTcmYrcsfuQ24yRaCw%2BaMU9CM%2FYbBqNPylqmHDMpK6%2BzPQdD8fwWzDfM1j1zAdxQ4i%2Fc7ihPW1yvax7GH7TCb5deIXfIbOx4%2B4LxxGgvfy5L5aWQPkqIKgzC5ldwPJPFq9VoqIgQoky4Z0iPWIaJqUd1EN1qfqpEqDM2viUZdF6WeX0DU1pPpBYm23VHMNNSfxAk7EAmbItBsgSsa20wVrzcF2yDUBWblx5yO50TvYFmV9Cf5GM7P6HWD6tUOBj099kHvP4yK4PnoX2L8gDJeXIbhpdG%2F4ELyl%2F0DAnHL%2BgtfrmFHuITIGMR7KC0BpW%2BRzqpMOhxuOcqgmWuJ2%2FgHJBCRhHVSLCSFSTLhaOj4MndpV8qCpTUp0D2TlxWOmpiwgnbZ4SuUSTq27%2FOlTyo6GUnKH4RTr9AmSbM1NxGuAZpgLA76LSG7pEwQjMUwDIGq2tHHHo%2Fe67y8KGKuhUgYfrPsBJexjcionEfZQW%2FJ05zinBqFF3w5Qy59Rq6y%2BMJPHjb4GOqUB8dr17XomUNrxn4F%2F8LaBEm%2FpQgnRvYflkRS84zUdVr1MOJIM0jrkPfk%2FqhoDzOpBxpXuyQohF%2BKIAZfq86NbDQ8nwEWogO7pfMhNDVa7mA870gHqALsQlhgcgOwyzlhXDUY8O2jFhX2yGYeHkbEht86fYOpo2H%2FioVd4UdElTTgAJt8WCKtR0EjC0%2FkR21QRc95rmAAz4W6nh%2BHatRUcAxrEnHEJ&X-Amz-Signature=f94485dfd1e9323ad4f82543a380268ee76d4443e07f8d74bc6889e79d42250c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
