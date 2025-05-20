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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRGRH6UD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqJmH6h%2FYfkPKoGrsinyXNBvTzNO08uuQWZeje%2FfOJxAIhANC9LsUIAQS6CSzfxYJX%2F3izuwBqZrWve3lQ5kQBup3WKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIvEM4tjY14j4Ml2oq3AOiWrDWHoOWd3I4L5p5c%2BuK5Uk96VtbfeU9W%2BlKj8v4%2BiQHQMKUucmSOEE5qNj6oJuDrjkR%2Be8vYbylabpie8Sr%2BItk8qUk429NPTz4ECKCqn0LgRrenD6%2FcuyTRr2uH3gvD31%2Bnd3%2FV0gEafTgeGx%2Bq2TNH47xmXJjgWgvTG%2B18z4eIRM%2BPLL3zk6wFxE71U6t0CoapD0qmm3mdP4u6gh5LEBJFpuie6L%2BRlfpK1xjqAcXEgdYmK%2Bm4WiL07TuoRHlXS74ym8DAs0a1pb4i6bcT5O%2B%2B0wIGdCcut0b3hasbLJviFoyzcW%2Fg7IVrhm4OKib9wCwfHF64mpTfIJplpxdwpsIID3QHdhpgOYnTcmPiFnMbHdcaeppxCQML2psAlPyTYAe2xf6sDy9u6id6x8Z1sfPUhwT0GHOwRUbs8rByZIbhwQJ0lNi%2BV23iDsnerm9mK86T8DeQeVPusxWyiiyFO0Y%2FA6f7FMCKZTgK4%2F0sGStgnS2uBuz%2FYK1Su6wa6QLoUKjbBb5c0yUgYlDNNoOKNi8VrrtSmiLJIR9pgNRW%2BMr%2B04ZEEYvoRC1DL2Caxa0H5PBNjLPgBGgSkxnjVTGLbZc4CfkWIUX6XAY6595kziLLWbczp1Uyd%2FZWzCCmLLBBjqkAbT24F6Zn8%2BUkYlcD7loXB3BzAE0YnVAU956Dc2YYlCk4%2BWPLifCZrNyxSWIY3zxstDABKra9XnfklHfqfP%2FscerN8MmiRi8wD9npKsjv7IJ2u5XBg5WmudD6ZO6EjP%2FXw7FuSyjvrp9PuaHD%2BXZebQ1k8IG93R3%2BtAXNbsTN%2B%2FsQCdAyFf%2BUFylRNRuOt%2B%2BqesZQfCuWNOM0eds4LdymggIC3NI&X-Amz-Signature=e60277d15e519410a11efece1f5bd3d19fd2d11cd4b93bbc8b213cc42159386f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRGRH6UD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqJmH6h%2FYfkPKoGrsinyXNBvTzNO08uuQWZeje%2FfOJxAIhANC9LsUIAQS6CSzfxYJX%2F3izuwBqZrWve3lQ5kQBup3WKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIvEM4tjY14j4Ml2oq3AOiWrDWHoOWd3I4L5p5c%2BuK5Uk96VtbfeU9W%2BlKj8v4%2BiQHQMKUucmSOEE5qNj6oJuDrjkR%2Be8vYbylabpie8Sr%2BItk8qUk429NPTz4ECKCqn0LgRrenD6%2FcuyTRr2uH3gvD31%2Bnd3%2FV0gEafTgeGx%2Bq2TNH47xmXJjgWgvTG%2B18z4eIRM%2BPLL3zk6wFxE71U6t0CoapD0qmm3mdP4u6gh5LEBJFpuie6L%2BRlfpK1xjqAcXEgdYmK%2Bm4WiL07TuoRHlXS74ym8DAs0a1pb4i6bcT5O%2B%2B0wIGdCcut0b3hasbLJviFoyzcW%2Fg7IVrhm4OKib9wCwfHF64mpTfIJplpxdwpsIID3QHdhpgOYnTcmPiFnMbHdcaeppxCQML2psAlPyTYAe2xf6sDy9u6id6x8Z1sfPUhwT0GHOwRUbs8rByZIbhwQJ0lNi%2BV23iDsnerm9mK86T8DeQeVPusxWyiiyFO0Y%2FA6f7FMCKZTgK4%2F0sGStgnS2uBuz%2FYK1Su6wa6QLoUKjbBb5c0yUgYlDNNoOKNi8VrrtSmiLJIR9pgNRW%2BMr%2B04ZEEYvoRC1DL2Caxa0H5PBNjLPgBGgSkxnjVTGLbZc4CfkWIUX6XAY6595kziLLWbczp1Uyd%2FZWzCCmLLBBjqkAbT24F6Zn8%2BUkYlcD7loXB3BzAE0YnVAU956Dc2YYlCk4%2BWPLifCZrNyxSWIY3zxstDABKra9XnfklHfqfP%2FscerN8MmiRi8wD9npKsjv7IJ2u5XBg5WmudD6ZO6EjP%2FXw7FuSyjvrp9PuaHD%2BXZebQ1k8IG93R3%2BtAXNbsTN%2B%2FsQCdAyFf%2BUFylRNRuOt%2B%2BqesZQfCuWNOM0eds4LdymggIC3NI&X-Amz-Signature=e7e9186ad7f0b409f212572aac608bf7442754331355a86747260447a366d0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
