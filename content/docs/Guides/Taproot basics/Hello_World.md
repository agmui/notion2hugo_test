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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVCDEH2X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpEGqzzr8vPAZUOUruUjUhjYAzR5vCyChTr0qvyZD6gQIhAPsQqG8fAm04csEENH0HOr9cwL0BUbyHdibXfwYMLA6NKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzV5%2FgFDxaJ7J1sGoq3AP%2Bq5fBw%2BcPdH4JgvKq%2FgjWErSnTGJOACDVzcuT0iWV8D%2Bd%2Fva%2FKLeMwjJxUZnzqi0iAj0A0m03iN3TuqRTxJXa249QU36yGNFtkP1ZGY1C1875vEQRmz5rtm8kKK6wXMXkloxXP0xIf%2FBBQxZ3BxduJBmeoSc4%2B60srXzpOyJ0JKJcP5j%2BkWNeWeJzx5OrcE0nzsI2N8pW67TUVgjOiu6ZG8Z3tExnXpIdJHnW9Svg%2FQMPixlwKuaHRaM3hgTilSrINmulD3L3hFpETU7QIsHY12fwdAsCRkkinILCIZEwOJ5pvf5qu8rx8WWnIYAY3euqV%2FZKgnKNHKdD0nyp%2BCxOphoGYfSrgevn2D%2BcLI7Lw07099dKk9EbsqiJEuwKcFjvLyWUcV5HjyNXOaapBQ7P6wEX664djkRk9qeBkA4MKnDm2rDJrmJ8DfEjTgFiriOZ650iompDBLU8glpYjwdAJ7c%2FD2yFHaM3bGPNB1GpzQ73Ra0IayKS7%2FfyiniKAMd9wx7qSZ5dAblXuWfRhWf8moJyy0Fq6LZ3hTSWcbBX1hsCJHWFIYDHPQYMqRacM7pZEI2%2FItP3ky0FUuahhYzort1OUddqMbMlAfY2pMS3qY%2Bdpxmx46tidqr8ATDArrK9BjqkAUuevSUz5P4llO6JBVRyvFrk4cg1tmnU0NLDhE6uXJh2OobqXdF8ca2jU3zIEMgyy%2F4skignSWhKDdNFHUDblJyFrSwOA3Dj6VUOY%2FeGRt5XIPONlgbwWIvCMplJgzohH0Kaq6QEFA%2F%2FCnmKCfqCBi%2B2wQXbiik8hQedj2Z0chuAnJCOhBU9xcyyGNSyruw4Sm8R8gep5M542fYIszvotzibqfPb&X-Amz-Signature=42734ec46e80f30d5dc4da8e8398cb066dbf80a8217f1bea72d23be5c035e52d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVCDEH2X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpEGqzzr8vPAZUOUruUjUhjYAzR5vCyChTr0qvyZD6gQIhAPsQqG8fAm04csEENH0HOr9cwL0BUbyHdibXfwYMLA6NKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzV5%2FgFDxaJ7J1sGoq3AP%2Bq5fBw%2BcPdH4JgvKq%2FgjWErSnTGJOACDVzcuT0iWV8D%2Bd%2Fva%2FKLeMwjJxUZnzqi0iAj0A0m03iN3TuqRTxJXa249QU36yGNFtkP1ZGY1C1875vEQRmz5rtm8kKK6wXMXkloxXP0xIf%2FBBQxZ3BxduJBmeoSc4%2B60srXzpOyJ0JKJcP5j%2BkWNeWeJzx5OrcE0nzsI2N8pW67TUVgjOiu6ZG8Z3tExnXpIdJHnW9Svg%2FQMPixlwKuaHRaM3hgTilSrINmulD3L3hFpETU7QIsHY12fwdAsCRkkinILCIZEwOJ5pvf5qu8rx8WWnIYAY3euqV%2FZKgnKNHKdD0nyp%2BCxOphoGYfSrgevn2D%2BcLI7Lw07099dKk9EbsqiJEuwKcFjvLyWUcV5HjyNXOaapBQ7P6wEX664djkRk9qeBkA4MKnDm2rDJrmJ8DfEjTgFiriOZ650iompDBLU8glpYjwdAJ7c%2FD2yFHaM3bGPNB1GpzQ73Ra0IayKS7%2FfyiniKAMd9wx7qSZ5dAblXuWfRhWf8moJyy0Fq6LZ3hTSWcbBX1hsCJHWFIYDHPQYMqRacM7pZEI2%2FItP3ky0FUuahhYzort1OUddqMbMlAfY2pMS3qY%2Bdpxmx46tidqr8ATDArrK9BjqkAUuevSUz5P4llO6JBVRyvFrk4cg1tmnU0NLDhE6uXJh2OobqXdF8ca2jU3zIEMgyy%2F4skignSWhKDdNFHUDblJyFrSwOA3Dj6VUOY%2FeGRt5XIPONlgbwWIvCMplJgzohH0Kaq6QEFA%2F%2FCnmKCfqCBi%2B2wQXbiik8hQedj2Z0chuAnJCOhBU9xcyyGNSyruw4Sm8R8gep5M542fYIszvotzibqfPb&X-Amz-Signature=0083ac091549ff8fd5c40e4e1a3070b67519dbf567b2b6d0398282e687843936&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
