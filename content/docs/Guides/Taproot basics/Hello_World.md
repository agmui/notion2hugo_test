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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLIPXZW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRcKjn3pgQJ8rfy7sgi0cDEF%2BqmoFI6GwcMSPycecumwIhAMp%2F6sT3A%2FbG6Kc5FqktMkb8S9PA7Y8KqE%2F%2BGauyxEe6Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzDzH%2BfB8Fhuv9ZKUwq3AMXdS3Yb90tw8wpBtXcbWXGds0GvEMdtjyg4LMLXF6iTHb3n%2BQE66Qh0iFNZX3yusSmyH2D8jJbLCC2lZC6n4HtkUBLyqhozJwKT61hBllNYXbEHcdjE5yEaebfhUuv19f3TCeC3B7kbaQRxutM81VLvzx0N%2FqUfbY%2FboSOKNMmbHkl3KobEUepbRwSNOBIatShMfXDmFZ6IF5nXNbFveGQXmDHOfYeQzW%2FLw%2F49MiLORDspZARE9gHfSLejyT6LqCulFdEtSHpau9jjZ4iUAqi2KJrVj24UnypVsuYecdZkpGDZN8CqJACRE4R%2FCWfW6qfG%2BNHuHgqSsVaM4P6lJ3CP9LRnYPDPP5QJJCgR5p7v3wN9cTLXlywHgm%2BqsOlQTari%2FdFv6e6d1JtgC9B1mxaQONhem1N0ZmkC5F%2FZlhP1kOmXcfRF4OOHslOjKUkT4eiRiPekG3lKoNmdpaBejnm%2FOIh%2Fi5EQFLDcP4M5QFi8TB3z2Az%2B8NTWOJPjPmd6IWAcJu%2Ffe1eHEMoiqu01lolcw8ibqtSEhHWkkPPGzqc5nQE%2FS4y3sYO20nEymadvv%2F6%2Bs7gnOp908TpWYt7xrteyl8%2B8eJ9nAKnP1Care6q%2Fm0AcDq32%2BTn4x9cHTDfvNnBBjqkAaOE%2Ff9PLppIwyut5hh3VpiF57Oo3Fz8Qqxz2Rg60aZ7urk4hcdiaYxD1K6XwC7B8dD6%2Fbdg2AjOq0ZeIWFoyDABWzEr9nTWiOKU%2BAyYr224g4lWuzcL2rTxA5CHx7KfPgz0Hx%2ByKbXP6F%2Bcnppf5h2KJGn8D0V1ToUIT9w6wlnWZeRuVhb9pmx2jdyvLxXNDodbvBPL5fiCk%2FIdiHp2TY4W%2B0Wc&X-Amz-Signature=08923a3de7fd22df9bfb63594f1d4aa986decd2f3c46b4a7f1917cd0e7329b89&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLIPXZW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRcKjn3pgQJ8rfy7sgi0cDEF%2BqmoFI6GwcMSPycecumwIhAMp%2F6sT3A%2FbG6Kc5FqktMkb8S9PA7Y8KqE%2F%2BGauyxEe6Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzDzH%2BfB8Fhuv9ZKUwq3AMXdS3Yb90tw8wpBtXcbWXGds0GvEMdtjyg4LMLXF6iTHb3n%2BQE66Qh0iFNZX3yusSmyH2D8jJbLCC2lZC6n4HtkUBLyqhozJwKT61hBllNYXbEHcdjE5yEaebfhUuv19f3TCeC3B7kbaQRxutM81VLvzx0N%2FqUfbY%2FboSOKNMmbHkl3KobEUepbRwSNOBIatShMfXDmFZ6IF5nXNbFveGQXmDHOfYeQzW%2FLw%2F49MiLORDspZARE9gHfSLejyT6LqCulFdEtSHpau9jjZ4iUAqi2KJrVj24UnypVsuYecdZkpGDZN8CqJACRE4R%2FCWfW6qfG%2BNHuHgqSsVaM4P6lJ3CP9LRnYPDPP5QJJCgR5p7v3wN9cTLXlywHgm%2BqsOlQTari%2FdFv6e6d1JtgC9B1mxaQONhem1N0ZmkC5F%2FZlhP1kOmXcfRF4OOHslOjKUkT4eiRiPekG3lKoNmdpaBejnm%2FOIh%2Fi5EQFLDcP4M5QFi8TB3z2Az%2B8NTWOJPjPmd6IWAcJu%2Ffe1eHEMoiqu01lolcw8ibqtSEhHWkkPPGzqc5nQE%2FS4y3sYO20nEymadvv%2F6%2Bs7gnOp908TpWYt7xrteyl8%2B8eJ9nAKnP1Care6q%2Fm0AcDq32%2BTn4x9cHTDfvNnBBjqkAaOE%2Ff9PLppIwyut5hh3VpiF57Oo3Fz8Qqxz2Rg60aZ7urk4hcdiaYxD1K6XwC7B8dD6%2Fbdg2AjOq0ZeIWFoyDABWzEr9nTWiOKU%2BAyYr224g4lWuzcL2rTxA5CHx7KfPgz0Hx%2ByKbXP6F%2Bcnppf5h2KJGn8D0V1ToUIT9w6wlnWZeRuVhb9pmx2jdyvLxXNDodbvBPL5fiCk%2FIdiHp2TY4W%2B0Wc&X-Amz-Signature=65014d098704bd614aa9e2a77c74c14aeb5d435ac2b1d97ee1b308aacba3c954&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
