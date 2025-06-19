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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WYKSJTO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2F27tAhDj3ovoKqN28ltQ5d5sfDyiQYAwjYHJwHAa1QIhAMbjqKe5dar4lHGZhinAbSCYUU3gOLMaoKPTCp2Hju7iKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9%2Fxvb6FVuL8I1rX8q3AMTu%2FCLmNrNUyfaO8XfEfMy1plHMh6w%2F1xIeKbXaQp8EeF5NVlgX71N9KduWLupFiUd7TK7wO1CA07Kyyfe74T3K8uNOhnIxNm%2FqLF58GK2vaj47Z29N5iWODODQwrX3nYOqlTuHobRVWyzoUzOT%2BSkCy3Ptwf1rPOZ1pClDKOoqQLwsqb2OtrMq2nwzVIK%2B16ZjKlBbgtlF5N58lUZWDisGYBoIudsuAK2TQoUfiJK3%2BMMtVoNgi2spAwoiw46w%2BISzma%2FPkxGnU%2BzcDH0lilIZm7sXlzekSVEncy7N2o6LeDszWNjRUL9V%2FYmSvq9lDxvSx3toiHXqgHnthVKRZgOlRdxiNTz9zbuLesTgzgENx1T8TyiAURJqeaoWzmTLoxiB92v48rWTszKVA%2BYou9pv5nD46W1D2LtE0EQY77HnACvajgvTKiE3MAuy8PJouZ2qinKfUHw56JWq8c8AteZw17JiJXQTGO%2BE4FYk4yt7NNeg9SklfMhTl6qyXCa6551kyyLsahw612UVh5pQju%2BD6TIcetLXClVHDzomdvmA0ZBDN3Cw%2FczUH8R52hUkGy9b2HJZSR7wvUWhVOvX32%2F2z5iBqSQEYKdZ0cERt3CPUoJxyVpVz38GTnA3DDI0c%2FCBjqkAWAi0M%2Ff0uOUDKdOyjxAIKJnn259%2Bjn%2BkSRJ%2FREcjEoeFvgRc0L2QOfQpfa%2BUSygE407k5BHNwzmhWHdMY%2BAou2jqrBX19cSny9lWdgBMQ5l2uIQv0aBxEz5judHvlvykU8VbCkFJZStE1o6ohV5b01Wmzy98%2F8M0VVueQmNWBIKqn2dFhFnY%2BxxGW6qxIfwew6I1nuJBN2C4E5XtVw%2FN%2FmDufMM&X-Amz-Signature=2cdbe00b0c5feff55684de68378da28762b03864c5588b8e6d1c16f715d6062e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WYKSJTO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2F27tAhDj3ovoKqN28ltQ5d5sfDyiQYAwjYHJwHAa1QIhAMbjqKe5dar4lHGZhinAbSCYUU3gOLMaoKPTCp2Hju7iKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9%2Fxvb6FVuL8I1rX8q3AMTu%2FCLmNrNUyfaO8XfEfMy1plHMh6w%2F1xIeKbXaQp8EeF5NVlgX71N9KduWLupFiUd7TK7wO1CA07Kyyfe74T3K8uNOhnIxNm%2FqLF58GK2vaj47Z29N5iWODODQwrX3nYOqlTuHobRVWyzoUzOT%2BSkCy3Ptwf1rPOZ1pClDKOoqQLwsqb2OtrMq2nwzVIK%2B16ZjKlBbgtlF5N58lUZWDisGYBoIudsuAK2TQoUfiJK3%2BMMtVoNgi2spAwoiw46w%2BISzma%2FPkxGnU%2BzcDH0lilIZm7sXlzekSVEncy7N2o6LeDszWNjRUL9V%2FYmSvq9lDxvSx3toiHXqgHnthVKRZgOlRdxiNTz9zbuLesTgzgENx1T8TyiAURJqeaoWzmTLoxiB92v48rWTszKVA%2BYou9pv5nD46W1D2LtE0EQY77HnACvajgvTKiE3MAuy8PJouZ2qinKfUHw56JWq8c8AteZw17JiJXQTGO%2BE4FYk4yt7NNeg9SklfMhTl6qyXCa6551kyyLsahw612UVh5pQju%2BD6TIcetLXClVHDzomdvmA0ZBDN3Cw%2FczUH8R52hUkGy9b2HJZSR7wvUWhVOvX32%2F2z5iBqSQEYKdZ0cERt3CPUoJxyVpVz38GTnA3DDI0c%2FCBjqkAWAi0M%2Ff0uOUDKdOyjxAIKJnn259%2Bjn%2BkSRJ%2FREcjEoeFvgRc0L2QOfQpfa%2BUSygE407k5BHNwzmhWHdMY%2BAou2jqrBX19cSny9lWdgBMQ5l2uIQv0aBxEz5judHvlvykU8VbCkFJZStE1o6ohV5b01Wmzy98%2F8M0VVueQmNWBIKqn2dFhFnY%2BxxGW6qxIfwew6I1nuJBN2C4E5XtVw%2FN%2FmDufMM&X-Amz-Signature=a04876c553036cb9ca0d21cade2cae81c0682b6cb3f4b460f5fb7a3e1e9fb718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
