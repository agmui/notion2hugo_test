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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUITHOA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8nNbKwL3IgOz9BXzWE3FjvDSPthjDi4fQRM95e0kseAiAbsvhRpbi%2FAuXkh36WphG3%2Fy%2FKh1XyT6i2cS0C5RmeDSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1WHEE2lc6bFb4pZsKtwDekNeysVRf4ePR2fPpJNQ%2Bj6%2FIZfVUemvgN0zCM%2BscZ5eMZMy6gwDd09vZ0H5xrM57%2Bu74EjSc2iKUoa%2FEbuY%2BIDhCmzPUdlLYrIJgkQOvt5zmGITArph%2BGz9s2n%2BTCQNfXjyc6tXU1pwSAetVTC6bjSJ2ypc3nl5Az0V7zA18JyrrjG5D9d%2B4XVw3Jl455M%2Bs2fShx9ZITnEXy8vOvvkbBW9saCxvTmyVD5aHKTdktY%2F2bAs61uU2yGuQXZt7Coqldyo15o85B3%2FUMNcneogyoPc2sNaBHJX4OUuzHb0olFkljATM3UJSYttuwEV4K8fvWLJiv7UkRPysaT4vRc3ys4mFBxMOGK%2BcO9RXMeaQSrI2AZzONJ6iTgrJ3G%2FVwTenZhU9we2Hqnuo6kmm8tMmi5Qkb52OBFnoyEwebM6UVWt0FbzUgeVrwKgAWEMFFW6wCRTS4BdD0D0p1SPIxR6F4oB3jUjY4wXbvEH93BnRXUhJhqYTl5MWDQT6UBklMLU0LVZqksXijf5gTsznpLgexCFg%2B9MP52wbGA6uew2OSosiOduHo7slqolEdWYbzpjkPt3%2BC0sc%2Fj7Q7Q6j0pUZ3jpPXH1N3S6PJG43%2FKLeb2gcVb0ylhjyLw5hM4wmNzlwQY6pgHYJFqodpFp4VWnhPqlO9XxrFWwW5k%2F7i9Pma7XCrebiZ%2FS5IcxW%2BwN64YGddJkS9PCJFgRm9nS1n%2BVbu74dUMgiZ7lt%2BNWAzx2Im8uRaHm9TJSaC7vM9y19EC1Ft1OsjSdeGOnYuJldQFRCabwbY160HiaVsszlOLKfHD0GOQmE6L63ucKXiaucpJx%2BOsZbqkMhdkDj5ZaWwQBoZERO%2FrQgwkmwRtw&X-Amz-Signature=c95d7a73c14dcf2a5020ec3729a9ef9d38a784a241807120152daa3a6897cf22&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUUITHOA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8nNbKwL3IgOz9BXzWE3FjvDSPthjDi4fQRM95e0kseAiAbsvhRpbi%2FAuXkh36WphG3%2Fy%2FKh1XyT6i2cS0C5RmeDSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1WHEE2lc6bFb4pZsKtwDekNeysVRf4ePR2fPpJNQ%2Bj6%2FIZfVUemvgN0zCM%2BscZ5eMZMy6gwDd09vZ0H5xrM57%2Bu74EjSc2iKUoa%2FEbuY%2BIDhCmzPUdlLYrIJgkQOvt5zmGITArph%2BGz9s2n%2BTCQNfXjyc6tXU1pwSAetVTC6bjSJ2ypc3nl5Az0V7zA18JyrrjG5D9d%2B4XVw3Jl455M%2Bs2fShx9ZITnEXy8vOvvkbBW9saCxvTmyVD5aHKTdktY%2F2bAs61uU2yGuQXZt7Coqldyo15o85B3%2FUMNcneogyoPc2sNaBHJX4OUuzHb0olFkljATM3UJSYttuwEV4K8fvWLJiv7UkRPysaT4vRc3ys4mFBxMOGK%2BcO9RXMeaQSrI2AZzONJ6iTgrJ3G%2FVwTenZhU9we2Hqnuo6kmm8tMmi5Qkb52OBFnoyEwebM6UVWt0FbzUgeVrwKgAWEMFFW6wCRTS4BdD0D0p1SPIxR6F4oB3jUjY4wXbvEH93BnRXUhJhqYTl5MWDQT6UBklMLU0LVZqksXijf5gTsznpLgexCFg%2B9MP52wbGA6uew2OSosiOduHo7slqolEdWYbzpjkPt3%2BC0sc%2Fj7Q7Q6j0pUZ3jpPXH1N3S6PJG43%2FKLeb2gcVb0ylhjyLw5hM4wmNzlwQY6pgHYJFqodpFp4VWnhPqlO9XxrFWwW5k%2F7i9Pma7XCrebiZ%2FS5IcxW%2BwN64YGddJkS9PCJFgRm9nS1n%2BVbu74dUMgiZ7lt%2BNWAzx2Im8uRaHm9TJSaC7vM9y19EC1Ft1OsjSdeGOnYuJldQFRCabwbY160HiaVsszlOLKfHD0GOQmE6L63ucKXiaucpJx%2BOsZbqkMhdkDj5ZaWwQBoZERO%2FrQgwkmwRtw&X-Amz-Signature=67b44ceef2bf8dc72693f72894a118d8b0d27e9fc40e77e2e4c6d55de2f8982d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
