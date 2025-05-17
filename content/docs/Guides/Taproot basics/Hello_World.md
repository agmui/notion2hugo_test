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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=1ae73a0b965dc44fc0afb5e9645cf380c7d78dd9afce7bed70ff0936913dfd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADYUKJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVyDWghYMlfF%2F7BE6miGzvRD3zPNNkcF8%2F0A6QOjBAGAIgEU0Jibkdq9qlIa9gS0Cik8zj6S8XGMd3GjMNMOXMkHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN2VArBG7WAzeajd0yrcA3I4x%2FoleQ7p2T3wxG42o7X6b%2BoAQOozZ%2BoLvIkM4rXYDlXzehdPMfCqo2iAPMiETjpBNwZtZcDTvXTjMFKEnrgcgPwAApa8New%2F%2BJRk%2BOxpy9TEGs79iu3ANVjMlGFqAGHdPziSAoNT0AE5xGx2luFzc2vbEjZiQ0glTgvg51wSOpakq6odc65JXqWwy%2BW%2BtgPpeHs8JvC1aFePQPl5qPwTnO7PCVBGe%2F1CRJr2ByGCQxQAXJpZaUowFiOgB%2FQoCMVWJid5EqKb8KuOnfmquf%2FQelGJGVA2B4KJxk0EhE59MbURzVXBpWoK6xH1kEK5FoYM8dkViwI9gljI70YPJCc2JQLdwkhWxX1iHCXVhkGfEJpnGmNhjc%2BVhNjA7%2FIa7LpQFemwQgmYoXcst%2BRWk0fYa%2BNuJfFUSI0GXkZRUCvv4PL16d7nuM5iThtHUKUhE%2FUVBv6uSL%2FelycaQq0DZq77M7B27d0E%2BlPEabJUv0QmG0r9XfXFK2JfdKvstEFIPPGAOUHDkRqxkrzU%2BuFeWfR5F1f2gF1H0UV6MDMY9uPSAXH2%2BtySKrfnumbwkhvRY48MEjCO1qME4bqvdkZIomma2UjsH0DNGm4hTGzvUF4oUst6c0%2F5uNhlcewQMLu8ocEGOqUBEVM%2FcPj24oZ4dBP7i69qW9zLMWXkdTpz06lR5jmxpjhg068r%2Fd%2FvChE7eZYpSsfLGOQVlsV6c6wTtGYeWfzKuA1Z1O2kplJ5Mk5cq049Ph4suJQft60pbbS%2FBeYXJ2id%2Bio7S0eVkYv57gzLMzVbzx10R6oX0CDwD2Zzyd178SrQ2FwtQjJdvkv7GapixTvMczhRp02l%2FMs8%2Bv%2FEOc0ryfzvl7OV&X-Amz-Signature=e3befc17feadc3927490d0aeadb788c069bb9f3cb1795a0f1886a0dadc5a700b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
