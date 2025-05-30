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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TNK5DZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5qsmeVgrpWEsiYPi78RYNGHO1diPnxaXmnqKTg3pcTgIhAJNfC4puuggYEKHnCH%2FEu3LeFxYn%2FMtqcN9qeUpQeMnfKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkQJMax0jbHpRNDPcq3APZ66brSOd4wcjBpjE%2FZrVhw82qpUt8%2BDzoQRszYF0C%2FG2nIyyM%2Bk2DutbNUjfWUodFBJJ83H05DW4gbLmk58sfPwcsAUStMm%2FIf7mxQ%2Fth2zWyzvf9j7%2Bobs81F8WQv2Kgox9y3jc%2FZJ8Ev22GlZkVn6BQewbCSHu8gbJQkJwgfYSwTNbTFd%2BqvvQqUW7ZarEabHh2Vi7Ny5XzwhY470Y6qCq7X7BgfZCX%2BSOigjhJeJ2j5XMAhtgpQDKzmGxpFtSCm9C0wAVZ%2F6vheDP5if6k%2FISg1BPyzOvuemxmMn4MWUffw91459tPMrhhHsggSZ%2BXDHXCG%2BLEN%2B%2BJR6UY1reSnBbqdsjRE%2Fu6rgBmY2rGlPrD3WvwHMQzRSA75iWegmJwULjG6qRvB3SNtxx1BbBI%2FxgP51oA8oRStLr%2FzC%2FeptqxEsAOKeQoE%2FcWlJXt%2F7SeVeNyaDnCMacAvAAnVxDQFDAgprANXp3v6LMvd4AySQdB5h05LgLfPqFpukkB2BomAwaLLdvVVpllLrgOKgH2zKO7bArUQ%2BsYL8gZ%2FRW9sqOLZhwF%2FuiI2PoT%2BIfbhaEAum2Pc96s2vpMN3DZcaau5LQ6XHu6zmkoL1jHq1VXLGGG4wWut2rmScxmbDC4h%2BTBBjqkAeN%2Bt4DNIbo%2FEFZQ0TMK3ljiXUAJLecoOacKM8we5sUahfiEbVHKatOvE6xId1Zyegr9zYoxaPcHJslFYIn5mwCsuEnK5lxg8r926NlAuz8%2F9yhClgUCHgz9GUj70BjgB9qq5dIOMCPHK%2BA%2Fz4peAHJdOKH%2FWcNze8xCTuaajReNsQfENPrqqxrwqwQQ887GKmuQzofU0lZc8%2FJLWNSNrxJp9Yaw&X-Amz-Signature=63caed517ff18ec47d62fb02be5d7d7513a1d0fd58aa5e1976a6e66cf11985c0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TNK5DZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5qsmeVgrpWEsiYPi78RYNGHO1diPnxaXmnqKTg3pcTgIhAJNfC4puuggYEKHnCH%2FEu3LeFxYn%2FMtqcN9qeUpQeMnfKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkQJMax0jbHpRNDPcq3APZ66brSOd4wcjBpjE%2FZrVhw82qpUt8%2BDzoQRszYF0C%2FG2nIyyM%2Bk2DutbNUjfWUodFBJJ83H05DW4gbLmk58sfPwcsAUStMm%2FIf7mxQ%2Fth2zWyzvf9j7%2Bobs81F8WQv2Kgox9y3jc%2FZJ8Ev22GlZkVn6BQewbCSHu8gbJQkJwgfYSwTNbTFd%2BqvvQqUW7ZarEabHh2Vi7Ny5XzwhY470Y6qCq7X7BgfZCX%2BSOigjhJeJ2j5XMAhtgpQDKzmGxpFtSCm9C0wAVZ%2F6vheDP5if6k%2FISg1BPyzOvuemxmMn4MWUffw91459tPMrhhHsggSZ%2BXDHXCG%2BLEN%2B%2BJR6UY1reSnBbqdsjRE%2Fu6rgBmY2rGlPrD3WvwHMQzRSA75iWegmJwULjG6qRvB3SNtxx1BbBI%2FxgP51oA8oRStLr%2FzC%2FeptqxEsAOKeQoE%2FcWlJXt%2F7SeVeNyaDnCMacAvAAnVxDQFDAgprANXp3v6LMvd4AySQdB5h05LgLfPqFpukkB2BomAwaLLdvVVpllLrgOKgH2zKO7bArUQ%2BsYL8gZ%2FRW9sqOLZhwF%2FuiI2PoT%2BIfbhaEAum2Pc96s2vpMN3DZcaau5LQ6XHu6zmkoL1jHq1VXLGGG4wWut2rmScxmbDC4h%2BTBBjqkAeN%2Bt4DNIbo%2FEFZQ0TMK3ljiXUAJLecoOacKM8we5sUahfiEbVHKatOvE6xId1Zyegr9zYoxaPcHJslFYIn5mwCsuEnK5lxg8r926NlAuz8%2F9yhClgUCHgz9GUj70BjgB9qq5dIOMCPHK%2BA%2Fz4peAHJdOKH%2FWcNze8xCTuaajReNsQfENPrqqxrwqwQQ887GKmuQzofU0lZc8%2FJLWNSNrxJp9Yaw&X-Amz-Signature=18b3bdea0b47bacb8326f4621dcbab603bb10822a281e1aeb2649855c2f929f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
