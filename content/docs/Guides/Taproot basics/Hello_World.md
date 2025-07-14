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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667XXMPPH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmBA2fS5Ppa0DI707fkbra%2Bb1keOPQZTg4VzeKqa%2BSMgIgHoQuKe0PcWErlBfU1NeR1858YWKv0V8ZCyXb05AGNl8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLOGScgIFpGmuUsU6yrcA4TzOF3tFym%2FwsIX%2BYBSeOsgTZKPWzpJcZ62cQpYsaHXZiitKoMj6YWSMbdnk%2F1JwAbkZ2Fc97ngZOsOzzTtdyK0ZDUT7SHaxI8tQTYANxMLjfuqUnN6r2JzK697q%2FV%2Bm2pASXtGAQDHPVYgYDUNYd0BCeWRe%2B%2BZYUERsYzkATegQsvoMczY5INhBV5Qag3zfSVHqq5nwJuaYnCy41xgItMMRCYn97RFaI%2BDBnv6aNLg%2B7iImD%2FiBYL42WvbQ1T%2BWhFyEzkzqfIaYyJ4KT%2BO9B4K5oq3GGTdeP7nwyHGOdSPato62aaqQuUADyO%2FlgRot4MV0yP%2BCObfOBbIwCk6QJI%2B%2FSWxGcyeufrjG9l4xJyib9Qx2rvemz%2BY4ZMI%2B6ngBASivG03iOD9%2BBspATiyJgZsGTya7qjnV6dwXlX1uRlf4DEIGwXUsYkjL1yY4JwXne%2FPKVCWiNHfA9b9cAGUQCvM2PYpJhRKsTr5gckjhASeXH0FNUtS8%2FdehqDImnfGPHaWqWYVsLTg0GfJtsSZfgSxWsf435865nivoD0YhMJ9HRYpIft2KAmplVKU2qqxdpYUa%2BGKAKphEWmpRgyw%2BvbBOHey4S3AytmDpKiAwbRwdR03RWht4iiCPHnmMI%2Bi0cMGOqUBkIpQHUM0KkiId2QjFiH0utvW6IWMHLrygi53vqIqI9XD7Yydd5w627C2woIfw1W6h2yHdFXd59sgc3GeOJyGQ2pCME04L4FTrODs3T3TNIhfOe%2BydD4bVQtRVpRjpad8mqo9rn%2FZKVG1rR4IM53muhlksjebIWXm04PbQExn4YQo%2BdKR9%2BOSCDXRE17oi2efJPSofPPB1oAPBz3NFWl6hmtZoR5o&X-Amz-Signature=0e947c32a75f0db805f690a3ed0df75da1d43dd831d77a78bb5b3a861eea56fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667XXMPPH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCmBA2fS5Ppa0DI707fkbra%2Bb1keOPQZTg4VzeKqa%2BSMgIgHoQuKe0PcWErlBfU1NeR1858YWKv0V8ZCyXb05AGNl8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLOGScgIFpGmuUsU6yrcA4TzOF3tFym%2FwsIX%2BYBSeOsgTZKPWzpJcZ62cQpYsaHXZiitKoMj6YWSMbdnk%2F1JwAbkZ2Fc97ngZOsOzzTtdyK0ZDUT7SHaxI8tQTYANxMLjfuqUnN6r2JzK697q%2FV%2Bm2pASXtGAQDHPVYgYDUNYd0BCeWRe%2B%2BZYUERsYzkATegQsvoMczY5INhBV5Qag3zfSVHqq5nwJuaYnCy41xgItMMRCYn97RFaI%2BDBnv6aNLg%2B7iImD%2FiBYL42WvbQ1T%2BWhFyEzkzqfIaYyJ4KT%2BO9B4K5oq3GGTdeP7nwyHGOdSPato62aaqQuUADyO%2FlgRot4MV0yP%2BCObfOBbIwCk6QJI%2B%2FSWxGcyeufrjG9l4xJyib9Qx2rvemz%2BY4ZMI%2B6ngBASivG03iOD9%2BBspATiyJgZsGTya7qjnV6dwXlX1uRlf4DEIGwXUsYkjL1yY4JwXne%2FPKVCWiNHfA9b9cAGUQCvM2PYpJhRKsTr5gckjhASeXH0FNUtS8%2FdehqDImnfGPHaWqWYVsLTg0GfJtsSZfgSxWsf435865nivoD0YhMJ9HRYpIft2KAmplVKU2qqxdpYUa%2BGKAKphEWmpRgyw%2BvbBOHey4S3AytmDpKiAwbRwdR03RWht4iiCPHnmMI%2Bi0cMGOqUBkIpQHUM0KkiId2QjFiH0utvW6IWMHLrygi53vqIqI9XD7Yydd5w627C2woIfw1W6h2yHdFXd59sgc3GeOJyGQ2pCME04L4FTrODs3T3TNIhfOe%2BydD4bVQtRVpRjpad8mqo9rn%2FZKVG1rR4IM53muhlksjebIWXm04PbQExn4YQo%2BdKR9%2BOSCDXRE17oi2efJPSofPPB1oAPBz3NFWl6hmtZoR5o&X-Amz-Signature=97864c71a9f2a500ea1e7e622c5ed2f3beb0483cea33937dac8f7e19624e0439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
