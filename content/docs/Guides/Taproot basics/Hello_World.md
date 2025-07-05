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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIEY7SQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCDdJsDMJ46FngV%2FOGUTiJybNUqevmVVuEqalWVrX0xswIgbBHI1YyNyaf2O743l6NNjlkOIJ5e4fuHWFyKPI0tY4oq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLWJ9XZux9y0XyDAJSrcA%2Bwq4twk6IzO1EzWIFN3GRprAwmdW86qqMAAGrFrisl7QysAgj2uTHOS4sELlAmr2xCjvpHypSzuA0HYIfT4VvmEzy9AVKqBQLxeT7B8ta1taPCUsDQFB2zzBBNH%2BX%2FPcX9AtjVdHv0c5vKOZ1YKYtYWpTgXhVMw4lvYzl5uwyg2usjSzeX5k0mu1gw2835yoYXFMiEbTJAIM6h%2Fd6gw1scSoqgT9AGTJsnD5YHF09aeGIjNwna1iadUwObX1JKTj05q6TpMCuH6Kr5unZ%2BSh%2B1e%2BaeOUWtzoPtcP6Q7CwYdPMwZKjGj0kMd7be7GmqCRoVU4kW04xvARonf5yXCGKMp5sGR1GBPityWy0sDwljcoYkwTzKRQTnOrLchuPQEVvgWY8LCc8S6zK0qynOhqyoCKlre13odoft%2FuanXNpUyRQUTpdfhc494mVaA3Y0vgSqLxRvZuN%2BCnh1SC2ecN7XF5h30H5U0fN1Dt424EQrcUZC54oUaujkbUTKLBNCuOOQICo8Ob8GJgHE5HGN1vCjMb9rGEAKcXVZ%2FInGAiGmeaOJKHC00GlMCf6f3c89hh8FJEff5E94WQ7eFWXv3sYQt1MkGng9QD3RmRu3PbA7FMdp%2BAF7h7gR4CtxJMJuFosMGOqUBWCyqAW6YxLnTSEP0xBVVImejAh9%2FsWSaZTwDv2uM0n17XWB31BfznC%2F5TQDaSrBksSDMwuzAEBMrUpgJScAgmv9yfcrynwYOmHcE3ByjxNUgotMADM03k%2Fmhn8r3wFprJZ0kwHTzmbVyICvDX9NgH33sYBDoywgniHHi4Ri61AfDrX8ewLa2OlD5IibMIEr%2FbM9PuCK7O3112n1XswDGIab1eO7Q&X-Amz-Signature=1435dacff32015cfd920c4d78850b3aca50970d41090368b46e21d57e18196b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIEY7SQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCDdJsDMJ46FngV%2FOGUTiJybNUqevmVVuEqalWVrX0xswIgbBHI1YyNyaf2O743l6NNjlkOIJ5e4fuHWFyKPI0tY4oq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLWJ9XZux9y0XyDAJSrcA%2Bwq4twk6IzO1EzWIFN3GRprAwmdW86qqMAAGrFrisl7QysAgj2uTHOS4sELlAmr2xCjvpHypSzuA0HYIfT4VvmEzy9AVKqBQLxeT7B8ta1taPCUsDQFB2zzBBNH%2BX%2FPcX9AtjVdHv0c5vKOZ1YKYtYWpTgXhVMw4lvYzl5uwyg2usjSzeX5k0mu1gw2835yoYXFMiEbTJAIM6h%2Fd6gw1scSoqgT9AGTJsnD5YHF09aeGIjNwna1iadUwObX1JKTj05q6TpMCuH6Kr5unZ%2BSh%2B1e%2BaeOUWtzoPtcP6Q7CwYdPMwZKjGj0kMd7be7GmqCRoVU4kW04xvARonf5yXCGKMp5sGR1GBPityWy0sDwljcoYkwTzKRQTnOrLchuPQEVvgWY8LCc8S6zK0qynOhqyoCKlre13odoft%2FuanXNpUyRQUTpdfhc494mVaA3Y0vgSqLxRvZuN%2BCnh1SC2ecN7XF5h30H5U0fN1Dt424EQrcUZC54oUaujkbUTKLBNCuOOQICo8Ob8GJgHE5HGN1vCjMb9rGEAKcXVZ%2FInGAiGmeaOJKHC00GlMCf6f3c89hh8FJEff5E94WQ7eFWXv3sYQt1MkGng9QD3RmRu3PbA7FMdp%2BAF7h7gR4CtxJMJuFosMGOqUBWCyqAW6YxLnTSEP0xBVVImejAh9%2FsWSaZTwDv2uM0n17XWB31BfznC%2F5TQDaSrBksSDMwuzAEBMrUpgJScAgmv9yfcrynwYOmHcE3ByjxNUgotMADM03k%2Fmhn8r3wFprJZ0kwHTzmbVyICvDX9NgH33sYBDoywgniHHi4Ri61AfDrX8ewLa2OlD5IibMIEr%2FbM9PuCK7O3112n1XswDGIab1eO7Q&X-Amz-Signature=4a53504eb695ed84e10011126e7ade319b6dce4d9c22c07e7b4fc84f4e0327f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
