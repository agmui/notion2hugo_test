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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MA3YCZQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd2xPjNrV7PEVDkrmxLe7%2B6mfPRDrH0Fqqg46SlyWhAAiEAy66i7iEHW45o6qFd6%2BPOTBQ4vlJNkznYbKxrhVsHaAYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOBlMIoF%2FSpAllRt%2ByrcA%2B7m0Lf2HUqeMx04CuFpt8J6aFhL02JhQB3a3viH6tt%2FZqeHfR0t07ZXpFQvjZGVCnVX4etPUh3bkuhiI6FTbRrh8RFxQ74g%2FDToHXBJgb1kwSOyzTQa7aYR9ypI4cSWpoKooxw4ZGobvZWHfXJK2%2FjOBUJr12BAjo9%2BGTbi5FBvxT9bKSv%2FKtXlALe6IUHmIRr0VwCHPPZClUQhAzoyqNPodNfDMQrlekQBQ2SqIUzvjWrDZzjd2M7IVTfc%2BHdno4qaDKbZtg8qyGTaEkZss6ftJupuzPeiajeyMGHIkB5dTn5McN0D1umVX4tz6rivJ5m7NBPJrgSIwrwrS4a8xJFbEQf6L%2BFgyWViugdJeHU%2FNhUNrHNquB7ged61bpBZ77%2FbqZ%2Fh1vZR%2BL8h0%2B1aJK%2Bg5bjqjLHY21vQpCqbG%2BZc4lA2ZUeZ%2Bwt7uG2xgskWVfxp5ELnn%2BIC%2FO4iX96Z718cmF2AHnmi%2FBm1n39hfdRaabVgYVCGnuNohQ8Cly0OfvNDYpPi0vZvQb4v2pVlf7BaZEkoWyK0qWcfRg50693k6GNPG%2BLE6sYrdV9WM%2BPWiqMEs6NlQDoO0YbvRqUF6WXeP%2FF3VUIxjDB3NIlpbd7kSCumzzEULneyUKVsMNqHq74GOqUBegVm2oF5Kh68DqYN3fZdszbBpwY29A4Ddg8565ni2kWAkkVx3BD0XBghbn9gGmgNHgVosf5E9WBJJb3DRim4L24rCzuj0skYas%2FTnB1mwaXWI7GnWrui3Rf%2BAAbD5R1E5KHd1zzWbyuoyf7X%2BoNTONt1oSe5RZ1Z7Rk3FPm6UptIVSDeHhy52GGVdenL0nBER%2FCXJ5ZTwHujYrU9bB1q56rjNsyM&X-Amz-Signature=54a0d09f75c6132dbd2a093bb3a13bfcb88243e89f16c0910d2f4a694145d193&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MA3YCZQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFd2xPjNrV7PEVDkrmxLe7%2B6mfPRDrH0Fqqg46SlyWhAAiEAy66i7iEHW45o6qFd6%2BPOTBQ4vlJNkznYbKxrhVsHaAYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOBlMIoF%2FSpAllRt%2ByrcA%2B7m0Lf2HUqeMx04CuFpt8J6aFhL02JhQB3a3viH6tt%2FZqeHfR0t07ZXpFQvjZGVCnVX4etPUh3bkuhiI6FTbRrh8RFxQ74g%2FDToHXBJgb1kwSOyzTQa7aYR9ypI4cSWpoKooxw4ZGobvZWHfXJK2%2FjOBUJr12BAjo9%2BGTbi5FBvxT9bKSv%2FKtXlALe6IUHmIRr0VwCHPPZClUQhAzoyqNPodNfDMQrlekQBQ2SqIUzvjWrDZzjd2M7IVTfc%2BHdno4qaDKbZtg8qyGTaEkZss6ftJupuzPeiajeyMGHIkB5dTn5McN0D1umVX4tz6rivJ5m7NBPJrgSIwrwrS4a8xJFbEQf6L%2BFgyWViugdJeHU%2FNhUNrHNquB7ged61bpBZ77%2FbqZ%2Fh1vZR%2BL8h0%2B1aJK%2Bg5bjqjLHY21vQpCqbG%2BZc4lA2ZUeZ%2Bwt7uG2xgskWVfxp5ELnn%2BIC%2FO4iX96Z718cmF2AHnmi%2FBm1n39hfdRaabVgYVCGnuNohQ8Cly0OfvNDYpPi0vZvQb4v2pVlf7BaZEkoWyK0qWcfRg50693k6GNPG%2BLE6sYrdV9WM%2BPWiqMEs6NlQDoO0YbvRqUF6WXeP%2FF3VUIxjDB3NIlpbd7kSCumzzEULneyUKVsMNqHq74GOqUBegVm2oF5Kh68DqYN3fZdszbBpwY29A4Ddg8565ni2kWAkkVx3BD0XBghbn9gGmgNHgVosf5E9WBJJb3DRim4L24rCzuj0skYas%2FTnB1mwaXWI7GnWrui3Rf%2BAAbD5R1E5KHd1zzWbyuoyf7X%2BoNTONt1oSe5RZ1Z7Rk3FPm6UptIVSDeHhy52GGVdenL0nBER%2FCXJ5ZTwHujYrU9bB1q56rjNsyM&X-Amz-Signature=9b104dad7796b645a27efc6fe491cdd77e9c44f57cc5523791bafb95e62ab92e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
