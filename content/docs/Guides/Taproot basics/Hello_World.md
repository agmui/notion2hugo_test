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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=d00bf20d797de5866d12c2bc714e3631341ee72635372ca033e24a51a8c185ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBU6QOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFxjfKqKHALbwYhP5VZtRNWT2Ggd%2BCZz4x9NW6ibc6YbAiB9tCYjwdZTavIMT4EJdBKASYGbrOQCQSwGgTBOoNSBcSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5EQmKU0iYP1Gs19aKtwDW5%2FQwCS9bxAfZX2gdxYP%2BQ0VICIj99Nf1XazrbNvLSwxXrGaJvmxlvwqmpRYgWE%2BMBZbGzPARUswNeCXzuyjAOKFzNImM6EsxUMf0xwLbd0Je7Gv%2Bf4xe9vTzM1WL2kCrXJFut4QSQzU7jkhBChI2aLEgB%2BevdzFbKdkA6egFan3ZcmU5n6n9yOpnI5qFJuw%2FNhKp0%2BnCCp2NCbyIrY%2FFtGtYD7Pc3UK%2B6PdbKjP%2BprLum5b%2BLR024bA5gbEQdIITXjy2Bb%2Bj4mwlyrkDAMOEoAJ82G1CZdvZeKZhQ72%2F6d%2FMN%2BTM3qwoV7Td98n5YC6L%2BfvONhOyip3KhqmN%2BLSh6MbeAujldIqd5nvxS7gm49BT2FJX1WRDHDAcQa11SL84q4xRoFnEn%2BQR6o95DPvyRSvTY%2FW%2Bdou0LHpR4%2F5dcGTLZY9XfI4%2FCMpVH7hkYM%2FQ6Hu8qU6YJyqHNJLXZQEPdZjdx2m43UUBMmtHTjvjjn%2BZR0zj1KAkNSKqYVRDJJd8vn8nDTGhhtRBKRApaIUiQNoUVRh3eEX3rU78dahWkSatdhxnI7wBI7qrYWdWWEMRFHPiMbEtcWBwkmIwmlT3%2BX3VBbItLlyFqI3xCuatBIU4cnPCMGOwVR2nUowq7ShxAY6pgHule5bKWK5Dp%2FGBjIHjKACacyQG9%2F6fFXrw5LmQ8yM%2F%2FCkYiqZC3etYk9%2FwsiG9p9gp6Eh6vBS%2BVynuTfrIm6SVhyiGEUBOzYPP9C020Hs%2BkYgjNscqNqMu8yH6ifyDLjQnc%2B1SrUQtTARuuqQyt8Jhs77Y%2B79uiqKOht9saSs7A4tyiDOiGflfoQLXaMns735HiMoWAAHrkKdj0smhAq5ZjgKOGE0&X-Amz-Signature=91c4902523396ac56f16608ee69a84b220c1f04ae6ebf5b6e23ff502f669e3c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
