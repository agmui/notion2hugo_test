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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJPHLQQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmo4%2FIvcBB64IP0liRNl8A7UxDtfnlEEvXmaU3d4e0mAIhAPukhjxcOi4ft4z0iJDNmUY6gC679mXWTejnh64XeaN%2FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxRFSUOVmIoK3jpNZ0q3AOi9kWXUp3jjohh324Guxj1YBKO%2Bnd%2FE1lLtGZTuubeCQ7Y4DyQxcQujqC2sqrZ74pdON7QCzoIHhGtiZ90UoIDQ4H4V8mK04BgLGZxhgofv7mhnVAEAKCCdmhJ%2BDxhwyPaGEtBtR2qVbAzHdXDhtHj7GZvonERjzUVgrg7d44S4TdpRa20cIV87JqSM5y2QHDsNqSV4w6eZwRzHv4dROdHWsunrBvjiLUPFAHuKzB9SzdQ6FVEhiBpt2qh3t2XToOxYRW6Vto7pLPuWrVuDjQfdW5yxk7830ifLC7w5kI%2FDfHPZg4EaNOo9LLKL1Go9kZliZPWjTw65O43HTrnD3Az36J3rIo3zAFm8eaYjWWKrbeOo5kdm8dJMgCdsKNHeKp0eVQVfNJRoDzlDAJaxL%2FROHjsEpZj%2FlRlOHcKWRHsGa77%2F%2F9NMj6pwuzqwsILLUKt%2FgKuGQjg79T3l1PHDOJkGejFgWMHW5c%2FltX1lEOtMbsZGkPxSNt%2BaJQChUJsFokgG9tDMkPiLg7OyRyEIbJ3SooO3sAOIrZlIWLDFLwTo97Wf9m7H7Q6kcvrzOZDOBX8QUgM%2FkT%2FT%2F7P5nzQpL01LupDuGrgUYQ02Hrbs5udnpG7dsCX88QsShhfCDDJiv2%2FBjqkAdeMnnsJ4LrIQJ6Y%2F%2BQb8XKGzg3LhsCGRxQ4NdUYUWQRXKnuuuArAtjadvvkmI6jNeE5%2BbVfv11q0yWj9bPZifYLJkQfYSlQgCPBzGA8vqaTnazY0nFDKdYkeWomYO60wsgeRGKQ6ZCppJ6Yvq1lwHgLEHSBYy9bi07%2FF5lY%2By15x%2FQDUJ7pxMLoYBikykzECWmgYemAsOZ7eoBAPBeBgNE0AgZT&X-Amz-Signature=2a744ca8c75eec11d8208305252257774fc851360239792f94887718ec1aecb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJPHLQQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmo4%2FIvcBB64IP0liRNl8A7UxDtfnlEEvXmaU3d4e0mAIhAPukhjxcOi4ft4z0iJDNmUY6gC679mXWTejnh64XeaN%2FKv8DCD8QABoMNjM3NDIzMTgzODA1IgxRFSUOVmIoK3jpNZ0q3AOi9kWXUp3jjohh324Guxj1YBKO%2Bnd%2FE1lLtGZTuubeCQ7Y4DyQxcQujqC2sqrZ74pdON7QCzoIHhGtiZ90UoIDQ4H4V8mK04BgLGZxhgofv7mhnVAEAKCCdmhJ%2BDxhwyPaGEtBtR2qVbAzHdXDhtHj7GZvonERjzUVgrg7d44S4TdpRa20cIV87JqSM5y2QHDsNqSV4w6eZwRzHv4dROdHWsunrBvjiLUPFAHuKzB9SzdQ6FVEhiBpt2qh3t2XToOxYRW6Vto7pLPuWrVuDjQfdW5yxk7830ifLC7w5kI%2FDfHPZg4EaNOo9LLKL1Go9kZliZPWjTw65O43HTrnD3Az36J3rIo3zAFm8eaYjWWKrbeOo5kdm8dJMgCdsKNHeKp0eVQVfNJRoDzlDAJaxL%2FROHjsEpZj%2FlRlOHcKWRHsGa77%2F%2F9NMj6pwuzqwsILLUKt%2FgKuGQjg79T3l1PHDOJkGejFgWMHW5c%2FltX1lEOtMbsZGkPxSNt%2BaJQChUJsFokgG9tDMkPiLg7OyRyEIbJ3SooO3sAOIrZlIWLDFLwTo97Wf9m7H7Q6kcvrzOZDOBX8QUgM%2FkT%2FT%2F7P5nzQpL01LupDuGrgUYQ02Hrbs5udnpG7dsCX88QsShhfCDDJiv2%2FBjqkAdeMnnsJ4LrIQJ6Y%2F%2BQb8XKGzg3LhsCGRxQ4NdUYUWQRXKnuuuArAtjadvvkmI6jNeE5%2BbVfv11q0yWj9bPZifYLJkQfYSlQgCPBzGA8vqaTnazY0nFDKdYkeWomYO60wsgeRGKQ6ZCppJ6Yvq1lwHgLEHSBYy9bi07%2FF5lY%2By15x%2FQDUJ7pxMLoYBikykzECWmgYemAsOZ7eoBAPBeBgNE0AgZT&X-Amz-Signature=c38fbc3b2065213d8f71c26499c18703e1d20aec5c91fdcadb86694417d48d60&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
