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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFPUYBC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDUAyqffS0gjk%2BZlM5LXlGiclS7d2gGdNeuYzBuAKUqfAIhAOSjJ5oOpJuovA4wYYjIxw3wgI7zKFIWqaJsNwnFZvjGKv8DCDYQABoMNjM3NDIzMTgzODA1Igw%2F4bPwCj8XVvwtqywq3AP5n%2BLsy5hqIzu%2BsBu%2Bc11XeRr5wnTxoZcRM5gMo71a88Wktr5qvRdN2OcQmjC4y8uMIMSbg8%2Bj1hxmf6otUGEegAkAaprnEYQsitZudXCmZOBjdw8mdRsWi9Uy8Ef%2BZq%2FFpf%2BxFl8U%2FYygHjhq5FVduZBfFihesqwPlzqR1ihO2UYjLf7mJo2VTJsYJlKdOjvz397HqhOHT5ZTLDhbQWAOs8tsnwpBjdazp1hpjDSJj2Q97iy7pfO2X9kN7ZhGQJwSLT162Tqn03NWIh4Q0%2B3rhAwZnBF5Du668H2dlaPCxR4t23WaZSaN2AdUpuCU1FQ8CnvgYbZXXIL58NMbiB3wUQC80wzLj%2BsnOrztC7LGHXvkBp8J0EjEnoPlkW7whWwn%2BNLHHqCnMO54Le%2BTCMdFpZGmeBmwDBlIJRy4avVEn9B1Mxj722POdhUZhJ%2BN2tmEhnDcY3mnd6DUoDc1kgm7WFdFQaYtZEOk5lisVTC1Qc%2Fi92vVXLEtnFzFPvwtIAt%2BI9ZCP69S14PgGWzb%2Bbj%2BuykwDETSeChLij901Oz0nlCv7ZNqARz8IDhCYX%2BnKtW0AcogYM1fZWvoIu0TpSdkk5zfKPFI3IDkVdHFKTHUBzv5xlt4QOpfHZaNQjCJtYrEBjqkAa%2BduDui9MUC5JVW6A3et%2F52EyQpb7YGiGzfF9CGoJRK7DjjPiCrYFQEXydOfJxPA7TC87r45klPQoQRGoEySi3p7l5R8xwfCM2j79sBGvCuo9rVrsEAMTrNQBxfITwfved4HNgdP%2FkUHJ4R%2B%2BAk2T2Xl69tGHiqfaIPoQFG0mjJ8toXKJlqIxvEcp4g1KweZtu66R8ijhKidaq1a91xPturyB2g&X-Amz-Signature=197a44bdf4611de83fea98a09496abe3376bf6594e9c3010479b35fcd3ab840a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFPUYBC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDUAyqffS0gjk%2BZlM5LXlGiclS7d2gGdNeuYzBuAKUqfAIhAOSjJ5oOpJuovA4wYYjIxw3wgI7zKFIWqaJsNwnFZvjGKv8DCDYQABoMNjM3NDIzMTgzODA1Igw%2F4bPwCj8XVvwtqywq3AP5n%2BLsy5hqIzu%2BsBu%2Bc11XeRr5wnTxoZcRM5gMo71a88Wktr5qvRdN2OcQmjC4y8uMIMSbg8%2Bj1hxmf6otUGEegAkAaprnEYQsitZudXCmZOBjdw8mdRsWi9Uy8Ef%2BZq%2FFpf%2BxFl8U%2FYygHjhq5FVduZBfFihesqwPlzqR1ihO2UYjLf7mJo2VTJsYJlKdOjvz397HqhOHT5ZTLDhbQWAOs8tsnwpBjdazp1hpjDSJj2Q97iy7pfO2X9kN7ZhGQJwSLT162Tqn03NWIh4Q0%2B3rhAwZnBF5Du668H2dlaPCxR4t23WaZSaN2AdUpuCU1FQ8CnvgYbZXXIL58NMbiB3wUQC80wzLj%2BsnOrztC7LGHXvkBp8J0EjEnoPlkW7whWwn%2BNLHHqCnMO54Le%2BTCMdFpZGmeBmwDBlIJRy4avVEn9B1Mxj722POdhUZhJ%2BN2tmEhnDcY3mnd6DUoDc1kgm7WFdFQaYtZEOk5lisVTC1Qc%2Fi92vVXLEtnFzFPvwtIAt%2BI9ZCP69S14PgGWzb%2Bbj%2BuykwDETSeChLij901Oz0nlCv7ZNqARz8IDhCYX%2BnKtW0AcogYM1fZWvoIu0TpSdkk5zfKPFI3IDkVdHFKTHUBzv5xlt4QOpfHZaNQjCJtYrEBjqkAa%2BduDui9MUC5JVW6A3et%2F52EyQpb7YGiGzfF9CGoJRK7DjjPiCrYFQEXydOfJxPA7TC87r45klPQoQRGoEySi3p7l5R8xwfCM2j79sBGvCuo9rVrsEAMTrNQBxfITwfved4HNgdP%2FkUHJ4R%2B%2BAk2T2Xl69tGHiqfaIPoQFG0mjJ8toXKJlqIxvEcp4g1KweZtu66R8ijhKidaq1a91xPturyB2g&X-Amz-Signature=e530e6a6245ee63293c7dda9b0b2203380d25b694c95a48ad5c77e2661aca70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
