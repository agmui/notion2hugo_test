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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDC2EXVP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBPUEO9ouxYGIlUJ3oKry55SGRsxKnRn0EECOaVXH3ZdAiBdjVjnwCJ1HnCO3jCg6akFZ6LNZYGCwnC78xGW17bIwyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMN9uqvizxi7bgumcZKtwDyJ3G188hszsVnUrH%2FTgoCe8yOWsPS9DO1ORwQFzFHJEiw%2FLLsuV1JHYEn5YBlhWcIoqN7wqMfwg6zHONj4HS0wLkXv2Nn%2Fj38YdbvbPM2nXRpvGWKhW3WDmnm0ugJz6KKnHYjYmmsFdfmmKBirnKP49UrZVBNITHJzr9sTK%2FWKnMv7fLrZh%2BOHWYuNOzr5PXZh51YxjECD7C%2BtgUmaL%2B9EAfHOm%2FSdwD6g4Dz3fUjiOV0Iv6lUD3fTyrF2h1s4%2BaasmlqwDbJeXuPykKEfhKEBZAYISHpY2bA%2BxpE4s8l5y49twmatsXrAUxXs%2B%2BlYpHe%2FpnuH4QtU3Dr3bqCUnt8pz0mdkw%2FFtYcgrGPyILHiMQ3n7svvzK01uGADSSc0egRGyD%2FrE0vvikY0FpSZAMUYPN%2BYOiL2qcUQAEUk2NXyXUlFXKu1iM9kvVefc9F70f1JQWEAf4nfGDoirEQ%2BjgtOdGWMLjeuLse%2B4JcQ%2F4xpPkoazWIC8s3J9McsBSgihSwNuC7Bq2xYn2%2FW2VDhgEqKtKqx3R9NwgHbT0iRjwA97K80Vm8DCyMibmi4ZYWw9LA%2BaTsiuVq5VI8%2F4VLQAiMe%2BjwJEHj59aFz53kXoUT%2B7%2Feeqr3rGve2k1L1UwyofTwwY6pgFSYrHUqM3KDavkyWIl7slEiMkC8U7ZfuXokuIhLZmP7GBqdy6ACb9h%2FtD6EC39XLWEJ5RINFXoNU5lODbFYE%2FFZOC1XTIdiKez%2BYNQdrTeWjvuF95yB0UtG4uAj3791fgdTPtgm%2BjJOzCjX8yzTlxm7wO3mAmrqIe5pnEc9yzbW8LNAVF4FxQCo6ORWZTSzqZSpsQV%2FwGZRsBykIC%2FJJT0yYqyS5vX&X-Amz-Signature=c3b2e730dde8c5cb6a5237463540c85b77430a0f5dff985fc35cd0cc0ccb7ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDC2EXVP%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBPUEO9ouxYGIlUJ3oKry55SGRsxKnRn0EECOaVXH3ZdAiBdjVjnwCJ1HnCO3jCg6akFZ6LNZYGCwnC78xGW17bIwyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMN9uqvizxi7bgumcZKtwDyJ3G188hszsVnUrH%2FTgoCe8yOWsPS9DO1ORwQFzFHJEiw%2FLLsuV1JHYEn5YBlhWcIoqN7wqMfwg6zHONj4HS0wLkXv2Nn%2Fj38YdbvbPM2nXRpvGWKhW3WDmnm0ugJz6KKnHYjYmmsFdfmmKBirnKP49UrZVBNITHJzr9sTK%2FWKnMv7fLrZh%2BOHWYuNOzr5PXZh51YxjECD7C%2BtgUmaL%2B9EAfHOm%2FSdwD6g4Dz3fUjiOV0Iv6lUD3fTyrF2h1s4%2BaasmlqwDbJeXuPykKEfhKEBZAYISHpY2bA%2BxpE4s8l5y49twmatsXrAUxXs%2B%2BlYpHe%2FpnuH4QtU3Dr3bqCUnt8pz0mdkw%2FFtYcgrGPyILHiMQ3n7svvzK01uGADSSc0egRGyD%2FrE0vvikY0FpSZAMUYPN%2BYOiL2qcUQAEUk2NXyXUlFXKu1iM9kvVefc9F70f1JQWEAf4nfGDoirEQ%2BjgtOdGWMLjeuLse%2B4JcQ%2F4xpPkoazWIC8s3J9McsBSgihSwNuC7Bq2xYn2%2FW2VDhgEqKtKqx3R9NwgHbT0iRjwA97K80Vm8DCyMibmi4ZYWw9LA%2BaTsiuVq5VI8%2F4VLQAiMe%2BjwJEHj59aFz53kXoUT%2B7%2Feeqr3rGve2k1L1UwyofTwwY6pgFSYrHUqM3KDavkyWIl7slEiMkC8U7ZfuXokuIhLZmP7GBqdy6ACb9h%2FtD6EC39XLWEJ5RINFXoNU5lODbFYE%2FFZOC1XTIdiKez%2BYNQdrTeWjvuF95yB0UtG4uAj3791fgdTPtgm%2BjJOzCjX8yzTlxm7wO3mAmrqIe5pnEc9yzbW8LNAVF4FxQCo6ORWZTSzqZSpsQV%2FwGZRsBykIC%2FJJT0yYqyS5vX&X-Amz-Signature=8dc768a0659fdcff9c7d880d0c6c0cda60ec7ec982cd97153173647617fabbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
