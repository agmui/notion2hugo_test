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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZWNOVA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz1XgCkDzptchws%2FuOwvpJsHwohJjoiCvZDt7LAIqpKAiBJLgafGxDGlkaGGudGU%2BPsJxik59VA0T08vRMChubiZSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMA%2FDuEX1Dn%2Fx38dWeKtwDdUBcEMPKOp40IN%2FvW59QDLFhN9WhTTzP0XQDvGSqI6S3w%2F7kEsruQ3a%2BHp4r7PcCWC4h%2FqfeHUEKscEc5kVUwW3ymLXlfsCodwQ2Li7fXcX%2BoZwgYUPznTdbDzH%2BteS7YgpNYV5vpMfIvgNDAztQpHJs7tFnhKeANyLqFY6flKJTOmp5Ve82tR8nvw67PQjrd8iGpF5AyXyHqMwGI%2BKRY%2Bt%2FwwtOjIG9Jn%2BUXdDM1YZRrBsW7%2BLZLvZan5gJm92SoipOMbF9vJ5syNvd8K%2Fys%2FqxF1FGRFaQ0A%2BOUvJALwGxPId%2BdZxqR28Z%2Bd0jfQvAIJMit96wO6ETRn0Zb9c0glRiHZ3nDk%2FLvvCuUgcG%2Br2roH2pBGK39dR%2B0m4C%2BsjBSVgVHd7RaUm0rkEC9eKxbxN8z8i%2FrSRBhV2AhcM8WbNmqB1%2Bmj7xrYlcJ%2FHVCYlacOJ8Lr7A6xbQaL5n5WCayA9HQIj9yUq2CW7Psv9Btdi8%2BEjI1NtCJgZAiLztTuAzSYpTIN4RInLFuOpAIgwM3ipLFIJjy7XVwIQfPTytAwzqpqNWhZ05mVE29ea6xxWzi%2BYEJOO5TlWlL3FStnGNuI4W7ri20NE73AETVUc5%2FUPoGUzcYQvRoaXfOt4wiMmovgY6pgGwydwV9LdNiDfkNXT9Z%2BOh2Zw0mcGWMP7T3LbUPVfqgUMiypAXnVOAckkNdWIQyVvgwW5WF%2BSEuVLyq6EpLc5gkDl%2FyUKPNSUniU6qtSoAHO8Hd7vfrh8O4p0pegMzRSyZ5X2BNo1VNlN3lBU%2FKrPTXEkr9Hoxo5IKYElN5XVaBIOti%2BAFWFHaw5bUFyKKW6Dmq9Q7mQ8xsvnsVLq%2FPXSOuham0THs&X-Amz-Signature=280e4878e2de83c0bcc93083ad5bd3144728e3e7dcda0c0e22c1f97b3fbd41c8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZWNOVA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz1XgCkDzptchws%2FuOwvpJsHwohJjoiCvZDt7LAIqpKAiBJLgafGxDGlkaGGudGU%2BPsJxik59VA0T08vRMChubiZSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMA%2FDuEX1Dn%2Fx38dWeKtwDdUBcEMPKOp40IN%2FvW59QDLFhN9WhTTzP0XQDvGSqI6S3w%2F7kEsruQ3a%2BHp4r7PcCWC4h%2FqfeHUEKscEc5kVUwW3ymLXlfsCodwQ2Li7fXcX%2BoZwgYUPznTdbDzH%2BteS7YgpNYV5vpMfIvgNDAztQpHJs7tFnhKeANyLqFY6flKJTOmp5Ve82tR8nvw67PQjrd8iGpF5AyXyHqMwGI%2BKRY%2Bt%2FwwtOjIG9Jn%2BUXdDM1YZRrBsW7%2BLZLvZan5gJm92SoipOMbF9vJ5syNvd8K%2Fys%2FqxF1FGRFaQ0A%2BOUvJALwGxPId%2BdZxqR28Z%2Bd0jfQvAIJMit96wO6ETRn0Zb9c0glRiHZ3nDk%2FLvvCuUgcG%2Br2roH2pBGK39dR%2B0m4C%2BsjBSVgVHd7RaUm0rkEC9eKxbxN8z8i%2FrSRBhV2AhcM8WbNmqB1%2Bmj7xrYlcJ%2FHVCYlacOJ8Lr7A6xbQaL5n5WCayA9HQIj9yUq2CW7Psv9Btdi8%2BEjI1NtCJgZAiLztTuAzSYpTIN4RInLFuOpAIgwM3ipLFIJjy7XVwIQfPTytAwzqpqNWhZ05mVE29ea6xxWzi%2BYEJOO5TlWlL3FStnGNuI4W7ri20NE73AETVUc5%2FUPoGUzcYQvRoaXfOt4wiMmovgY6pgGwydwV9LdNiDfkNXT9Z%2BOh2Zw0mcGWMP7T3LbUPVfqgUMiypAXnVOAckkNdWIQyVvgwW5WF%2BSEuVLyq6EpLc5gkDl%2FyUKPNSUniU6qtSoAHO8Hd7vfrh8O4p0pegMzRSyZ5X2BNo1VNlN3lBU%2FKrPTXEkr9Hoxo5IKYElN5XVaBIOti%2BAFWFHaw5bUFyKKW6Dmq9Q7mQ8xsvnsVLq%2FPXSOuham0THs&X-Amz-Signature=be1956918d36f1bdff95bcb5bb03d2254923d3139d4c7a40761846b377504f20&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
