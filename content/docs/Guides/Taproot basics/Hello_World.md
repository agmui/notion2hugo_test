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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHG2GO2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFULlPv%2BRzBVRXQFYwOPxwdVHrAc6AuKpg8IjZecbtIOAiAArNicOqp9YNeLxyPDeaooKOxTIul9KuMEwro3TcNvbSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM977GmFzlhdRvWT33KtwD5YmzWi%2Beko0sgDw9ttjBJjMC%2FDphreJLTBytHk1ZWTunEqfsPZnwcZOKDxjfwuyR9MeV%2BdKmgGFOMSBV0e45WaeL7hE4E6N7c9D90JG5%2BAy8t8d6JVAMXUW9OP4GXyFrtV4OvS0dFj9AbeC%2FHDhrlbQe5iJ%2FWBYyae4kbdNhpoWz0o7sxt7F%2BYFnDvHxKlw%2BES5dj8lUKFdePoTsMDGlW8TOG3qSRDamV7c9tqFCFg%2FoPBMCTWC0tg%2FWGC8cjog7GDe2npdGPElT4LHY5eHpx2AUfR0spOP5ZdGqYBtfHHYw049Vn42Ed6nDIVaVoFd3sasziVRXM7%2BUU3eNGhKA7wq4NknDHllYIT08CloqVs9dcuaE9v0az3G%2FOpQvwVkATnQ4ccr9lyHHhWasCMeLw7DaFOeGR0RjaUOHpuIuj4wNYxh1iJncX71lK0eDm1FoiZwaxtoF4Jb1h9NhAV9MLj0UtnshFpS9SAJZ%2B0eCRI80pF9sQfcNBwsa6JODyXwZwkh1tbV%2B08KksRhX0VJDwusSKfcT9mT%2B0ZztzHmIcvCk8ZY%2B2zpKQ8fPUNFUOF6odpVPVx8a5xsVs3Cg%2FivoWqbon2frJ9OqEIwR9x1tOu4zGnfec4tHR9Z%2FtsAwjLnKwQY6pgHsx1B5YWOExRDweGTKyyNiMoW4o37JP34C1SNVtYn3%2FNJCfKXR6GlnQ709%2BWIvJ29o7vJu04qqUiwYpCWs7pE3noub5Ryouo8MCK4IYM3jt61164NA3xQQ%2BKgi1YIkjO41MsX9v60FU8W95tuOb%2FbWCc%2BRD9U93tzdOmWzRihswuBrkX5EEd7JKd0s41GtAyyivBaZVS9N%2FynPcskMlmtg9R8J1QvZ&X-Amz-Signature=f6defa66a498ee7886ff2fd7eec3d5c8211d3e60359b871a87d3e87f99ce901d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHG2GO2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFULlPv%2BRzBVRXQFYwOPxwdVHrAc6AuKpg8IjZecbtIOAiAArNicOqp9YNeLxyPDeaooKOxTIul9KuMEwro3TcNvbSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM977GmFzlhdRvWT33KtwD5YmzWi%2Beko0sgDw9ttjBJjMC%2FDphreJLTBytHk1ZWTunEqfsPZnwcZOKDxjfwuyR9MeV%2BdKmgGFOMSBV0e45WaeL7hE4E6N7c9D90JG5%2BAy8t8d6JVAMXUW9OP4GXyFrtV4OvS0dFj9AbeC%2FHDhrlbQe5iJ%2FWBYyae4kbdNhpoWz0o7sxt7F%2BYFnDvHxKlw%2BES5dj8lUKFdePoTsMDGlW8TOG3qSRDamV7c9tqFCFg%2FoPBMCTWC0tg%2FWGC8cjog7GDe2npdGPElT4LHY5eHpx2AUfR0spOP5ZdGqYBtfHHYw049Vn42Ed6nDIVaVoFd3sasziVRXM7%2BUU3eNGhKA7wq4NknDHllYIT08CloqVs9dcuaE9v0az3G%2FOpQvwVkATnQ4ccr9lyHHhWasCMeLw7DaFOeGR0RjaUOHpuIuj4wNYxh1iJncX71lK0eDm1FoiZwaxtoF4Jb1h9NhAV9MLj0UtnshFpS9SAJZ%2B0eCRI80pF9sQfcNBwsa6JODyXwZwkh1tbV%2B08KksRhX0VJDwusSKfcT9mT%2B0ZztzHmIcvCk8ZY%2B2zpKQ8fPUNFUOF6odpVPVx8a5xsVs3Cg%2FivoWqbon2frJ9OqEIwR9x1tOu4zGnfec4tHR9Z%2FtsAwjLnKwQY6pgHsx1B5YWOExRDweGTKyyNiMoW4o37JP34C1SNVtYn3%2FNJCfKXR6GlnQ709%2BWIvJ29o7vJu04qqUiwYpCWs7pE3noub5Ryouo8MCK4IYM3jt61164NA3xQQ%2BKgi1YIkjO41MsX9v60FU8W95tuOb%2FbWCc%2BRD9U93tzdOmWzRihswuBrkX5EEd7JKd0s41GtAyyivBaZVS9N%2FynPcskMlmtg9R8J1QvZ&X-Amz-Signature=fbdd62e5bc7b0852e259006e7c1b64586643aec29baa7abebfade7b432b08182&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
