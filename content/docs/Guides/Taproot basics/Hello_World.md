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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ6HN4SU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BlvFOeZlU4E4ouP7wph%2B9gyrW3rLq4dRfylSkXFYTYAiEAjEW%2FgWhmonziJKjnH14I%2Fd3LCC2S6VFJryH7YkZItq0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJxWQpwOjv3erGNYTCrcA008L1GGhYMtgjJwRyZpwZjBuxZXk9oL0Xph53HNZnc2CH6fdUlBJJQduozFJX1e1Gn8P2UPEY5XELXtN5HkEOgp%2FVGG6xLPk%2FhSNuqm0SR9kvW%2FUd7GCchIJFFqamdY%2BMd11EVh7c5N7l%2F8fV5PvdnjfV6O7qrhhkJSwMy%2FQ8TxsuezQhoZM5%2FZI0eOwCLmU55vRQmgsOrcbNSjLox%2FiyQKM%2BTK7QYVvR%2B52aYjrRgGvcja7K98DLG6THw0gK%2BvrkyFTGVHoHRNEmge8x45I0ZTSJkgwzWFO%2BJcvF%2BVUKd6upJcBgn51vHg3t67IhVAfTm5%2BmVjLs0vfR3xYzkEW1MJaefn1nI50vEPll1Uan5iR7nHjTSlu7TtTcVo5H%2B4Pezj%2BWxj8c1%2FU%2BWeeW5DbUeYBpMqkQojtMAqFJ0y2PY48bpRbj3MPEb3qmqsWuKyTOYmH5aLrS4OzSkP9FBIsYk6pwYEKfoJAmlJwy3Udb2cl%2FRdw7uDV2ABdrLk0TeUTXJfn7cnn0sKupwPtmTIDo6fl1AF1wahnXtjZ8OVI5q%2FLYbfrYLiMrZHjOF9DX7pqa2K3uV8wl6rGN5IRby4bIK1QQG2CmRXqv6YdZLH%2BA1QzuZ%2FMD2trC7Rv%2FdVMOC38b0GOqUBww9tyQH0ewfunOB1r5ujo%2F5oQohcgS8ogLniC9zG3AaEAjeud2Sc1X0khN03GsASMZiPgXQUbio1c%2FTCDWEaMB5t%2FDvis0xIyCDSYXfNr267MktryN4IhjWRMa7JoswlxSm1veq1Y9TMvvBDSmgCpvzWFEXCae35PX9%2BNlcWpQZP1cLUwU6gMDR%2B3FTM3q1LEhWJ%2BCU1TB3%2B1Thzj5OJfRYfWBMW&X-Amz-Signature=3dcf1f92c01da4be606966a003b0bc3e4945d16c86ed99806ec3c0ba87fc3c53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ6HN4SU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BlvFOeZlU4E4ouP7wph%2B9gyrW3rLq4dRfylSkXFYTYAiEAjEW%2FgWhmonziJKjnH14I%2Fd3LCC2S6VFJryH7YkZItq0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJxWQpwOjv3erGNYTCrcA008L1GGhYMtgjJwRyZpwZjBuxZXk9oL0Xph53HNZnc2CH6fdUlBJJQduozFJX1e1Gn8P2UPEY5XELXtN5HkEOgp%2FVGG6xLPk%2FhSNuqm0SR9kvW%2FUd7GCchIJFFqamdY%2BMd11EVh7c5N7l%2F8fV5PvdnjfV6O7qrhhkJSwMy%2FQ8TxsuezQhoZM5%2FZI0eOwCLmU55vRQmgsOrcbNSjLox%2FiyQKM%2BTK7QYVvR%2B52aYjrRgGvcja7K98DLG6THw0gK%2BvrkyFTGVHoHRNEmge8x45I0ZTSJkgwzWFO%2BJcvF%2BVUKd6upJcBgn51vHg3t67IhVAfTm5%2BmVjLs0vfR3xYzkEW1MJaefn1nI50vEPll1Uan5iR7nHjTSlu7TtTcVo5H%2B4Pezj%2BWxj8c1%2FU%2BWeeW5DbUeYBpMqkQojtMAqFJ0y2PY48bpRbj3MPEb3qmqsWuKyTOYmH5aLrS4OzSkP9FBIsYk6pwYEKfoJAmlJwy3Udb2cl%2FRdw7uDV2ABdrLk0TeUTXJfn7cnn0sKupwPtmTIDo6fl1AF1wahnXtjZ8OVI5q%2FLYbfrYLiMrZHjOF9DX7pqa2K3uV8wl6rGN5IRby4bIK1QQG2CmRXqv6YdZLH%2BA1QzuZ%2FMD2trC7Rv%2FdVMOC38b0GOqUBww9tyQH0ewfunOB1r5ujo%2F5oQohcgS8ogLniC9zG3AaEAjeud2Sc1X0khN03GsASMZiPgXQUbio1c%2FTCDWEaMB5t%2FDvis0xIyCDSYXfNr267MktryN4IhjWRMa7JoswlxSm1veq1Y9TMvvBDSmgCpvzWFEXCae35PX9%2BNlcWpQZP1cLUwU6gMDR%2B3FTM3q1LEhWJ%2BCU1TB3%2B1Thzj5OJfRYfWBMW&X-Amz-Signature=c09c5bd92e1dda65d849e14844b6961c6286c41577c001f527897ab6d9b9d196&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
