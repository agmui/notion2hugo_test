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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4YEM54%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvMeoI0pD4KCrEEY%2Fa6MlMy77ndmkEnOSSvUatB9Y%2BbAiAREdY%2F6Ysw3lPY48LMSuW%2B4e7hCuLCmo7UhuJtTbB1Zir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6M5BElKOWHwpNUFOKtwDrOEs8fUZok1wMg6QusjUfUPtGX2p6sPUSNGN7sGXi2vltH8JVQH9v%2BMhKJ4aASsCtXvGu3jzf0wEmh8dkEyL1LpooI84QdNKuO9%2BdlTAjoNkHl22WcVKThYnhu8oodn5ym6REgAsnh%2Fo%2BDwUHwbTZCEq063HWMDlt5AJXV0zqGtEjY%2FTPgcwCp0YN6IP7jtI%2FLvf2aozmQUNZ5l6cLe8ovvAvL1mQB85Ue90R6Tans8vZaJJPEtkng85%2FN5jH%2FRqdAeDXUbvPgmy4FgdHWXX222wdcilRq3Dvjb8QuUW0t7XSo5geRKCfp9Zv%2BbP0Khty48kgTubmlpMpw8Nh9oDsIMU7tz0bYYqgmRoAPBq1HoQsN13CWka%2FtwGK2Ah5YPOi%2FjCsMx21IVEUVQGHr4Ov73fLkPzlPBMgUTsky9VtnDnR4TGeFciyN%2Bx3FhQhjeCUd08ooxQSH5xGl2GoTeqqRgRZA4ivRJQ%2BFpPuvspebAyZF903azJmXkC31Znnc5akoFAZLci%2FKOld2lxeVs8gNNTNXFVchwz5Fg9jZdf955I0DXvgr3JaEgAHL5g43hDvBRSQ09pEwji2jWoAmKGiRdu3P%2B63wnw2HV%2BQS%2FDLwwKwINsJhQkCIiLBVww%2F6i6vQY6pgH5Tlo3JOELOi1ZA0zrXv6aNJvCRdZhQ2%2FeshoW6ZjjoOeB7dLCJ22fHxu3XEm5fQqiM19xzoyhkngz7%2BscHhKq2QtS5dIWXm4bDVEu%2FiR8G3oMdrYKPQxurYpo%2Fhbu2ffPHrVJTd0OCXSXTgzobOfwEjXSg0dHNm8EgLKdIppDEb2dVpmErVEbfVjmOl8nXZbkSDGLmvPEp%2FMxax41bEJ52sOVzbnv&X-Amz-Signature=a66a5f83b26cbbc29c85d1f044086474cf7d6f02fce5e315464ed64d22d707fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4YEM54%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvMeoI0pD4KCrEEY%2Fa6MlMy77ndmkEnOSSvUatB9Y%2BbAiAREdY%2F6Ysw3lPY48LMSuW%2B4e7hCuLCmo7UhuJtTbB1Zir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6M5BElKOWHwpNUFOKtwDrOEs8fUZok1wMg6QusjUfUPtGX2p6sPUSNGN7sGXi2vltH8JVQH9v%2BMhKJ4aASsCtXvGu3jzf0wEmh8dkEyL1LpooI84QdNKuO9%2BdlTAjoNkHl22WcVKThYnhu8oodn5ym6REgAsnh%2Fo%2BDwUHwbTZCEq063HWMDlt5AJXV0zqGtEjY%2FTPgcwCp0YN6IP7jtI%2FLvf2aozmQUNZ5l6cLe8ovvAvL1mQB85Ue90R6Tans8vZaJJPEtkng85%2FN5jH%2FRqdAeDXUbvPgmy4FgdHWXX222wdcilRq3Dvjb8QuUW0t7XSo5geRKCfp9Zv%2BbP0Khty48kgTubmlpMpw8Nh9oDsIMU7tz0bYYqgmRoAPBq1HoQsN13CWka%2FtwGK2Ah5YPOi%2FjCsMx21IVEUVQGHr4Ov73fLkPzlPBMgUTsky9VtnDnR4TGeFciyN%2Bx3FhQhjeCUd08ooxQSH5xGl2GoTeqqRgRZA4ivRJQ%2BFpPuvspebAyZF903azJmXkC31Znnc5akoFAZLci%2FKOld2lxeVs8gNNTNXFVchwz5Fg9jZdf955I0DXvgr3JaEgAHL5g43hDvBRSQ09pEwji2jWoAmKGiRdu3P%2B63wnw2HV%2BQS%2FDLwwKwINsJhQkCIiLBVww%2F6i6vQY6pgH5Tlo3JOELOi1ZA0zrXv6aNJvCRdZhQ2%2FeshoW6ZjjoOeB7dLCJ22fHxu3XEm5fQqiM19xzoyhkngz7%2BscHhKq2QtS5dIWXm4bDVEu%2FiR8G3oMdrYKPQxurYpo%2Fhbu2ffPHrVJTd0OCXSXTgzobOfwEjXSg0dHNm8EgLKdIppDEb2dVpmErVEbfVjmOl8nXZbkSDGLmvPEp%2FMxax41bEJ52sOVzbnv&X-Amz-Signature=8a5297b28a8e37006e9b7e98a776ebafbaf0b8e500f5439858af9fda792c27da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
