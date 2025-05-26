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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUCXTR3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEeoSqovifwSHp2dSQNJrwHqkFXcFQPlgeLKp2zPNe3tAiASwiK%2FPMjLyDtRPI6wDVnkICOZd%2FVS2c2m20PTmv7OOyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMxqwHSkkV198xgED4KtwDFm4vPpJ16bbpA0r5Si%2FBw%2BAtnDEyY8dK5b7EEFbsIHinQK7yR5%2BobixQIY%2BpByiUs0afyXnAYProKlnJtyFTNR%2FtodDCL6zpI0cu8uunSYANVEbI%2BpG0LEh%2FvsGmFsT1cuh%2B64fn%2Bef9D0CCMoxY8DywVdoERxG9ZdIfEztm%2Bt%2FPjraQEmpgTbcLdY2M9ID5IUmHI4ZrqNdoCIlDqvq9LERbutRQ0f5b97qzQBGWdLkfpphqRXKLvxvNWAKTDbsoEY6MRa4wZmrwxrP9nxWLoL390S9P%2Fx3PRMiBFQDXB9aeKoxmYOO24nbKqf9FHeH73nVCTE7yt4nERbFnYkVDOUjhPAeRjhDLGoncp6NeIKER6aeqmeEYoTAMk0VMEIZYv0ZIDaQJfUSEb9pVI7dJFtKid9JYNI%2Bkyv1di%2FLK4pBTpnAo6D5cEyQSRd1F6N6npGOBgDZYhbuoPI3cCvtkjnOuH9xLR%2BNzWcGKTqzLbT7KBuTnqbDT%2FG%2FUisYiFQG%2Bx%2B5UG0BvhoUAQbodb0iqvX9VP78kdxlseo4zKyiALrx1IQo7mEUPiJKR9m75WqVDAofyHime2uhJdUPX4owLkXJZd3g%2F0ni84yFSSq9O4SzwoZCBT34eUapq9J4wudfQwQY6pgFbHqaVUWYRPce1Z77SN8BbH8gMuQV4DHhXKkdaQw6obbBfcr2Uqn6tpDIUgLOedS8JDcWrJGU1EFPxCroQIo5IVYzJhSJEoil4TvYR9zyCHK6mLcKqnHf1mIOJrSB0OZdz9espRbffm%2BKcwtMw%2BQd12B8AckBBfatNsbM6GwUiJxqvCsXdAINjdPRTJ4v%2FSpyRjQsUVQBJWop4GXQVYB8rM0RA7fLj&X-Amz-Signature=70410e74b3c21783f361da378bfca628f7d29afa2fc0b001d1983b3f324fdf38&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUCXTR3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEeoSqovifwSHp2dSQNJrwHqkFXcFQPlgeLKp2zPNe3tAiASwiK%2FPMjLyDtRPI6wDVnkICOZd%2FVS2c2m20PTmv7OOyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMxqwHSkkV198xgED4KtwDFm4vPpJ16bbpA0r5Si%2FBw%2BAtnDEyY8dK5b7EEFbsIHinQK7yR5%2BobixQIY%2BpByiUs0afyXnAYProKlnJtyFTNR%2FtodDCL6zpI0cu8uunSYANVEbI%2BpG0LEh%2FvsGmFsT1cuh%2B64fn%2Bef9D0CCMoxY8DywVdoERxG9ZdIfEztm%2Bt%2FPjraQEmpgTbcLdY2M9ID5IUmHI4ZrqNdoCIlDqvq9LERbutRQ0f5b97qzQBGWdLkfpphqRXKLvxvNWAKTDbsoEY6MRa4wZmrwxrP9nxWLoL390S9P%2Fx3PRMiBFQDXB9aeKoxmYOO24nbKqf9FHeH73nVCTE7yt4nERbFnYkVDOUjhPAeRjhDLGoncp6NeIKER6aeqmeEYoTAMk0VMEIZYv0ZIDaQJfUSEb9pVI7dJFtKid9JYNI%2Bkyv1di%2FLK4pBTpnAo6D5cEyQSRd1F6N6npGOBgDZYhbuoPI3cCvtkjnOuH9xLR%2BNzWcGKTqzLbT7KBuTnqbDT%2FG%2FUisYiFQG%2Bx%2B5UG0BvhoUAQbodb0iqvX9VP78kdxlseo4zKyiALrx1IQo7mEUPiJKR9m75WqVDAofyHime2uhJdUPX4owLkXJZd3g%2F0ni84yFSSq9O4SzwoZCBT34eUapq9J4wudfQwQY6pgFbHqaVUWYRPce1Z77SN8BbH8gMuQV4DHhXKkdaQw6obbBfcr2Uqn6tpDIUgLOedS8JDcWrJGU1EFPxCroQIo5IVYzJhSJEoil4TvYR9zyCHK6mLcKqnHf1mIOJrSB0OZdz9espRbffm%2BKcwtMw%2BQd12B8AckBBfatNsbM6GwUiJxqvCsXdAINjdPRTJ4v%2FSpyRjQsUVQBJWop4GXQVYB8rM0RA7fLj&X-Amz-Signature=fcb467909ba1407477383ee38247363b83cde7382ac0186fbbc33f0175e7e810&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
