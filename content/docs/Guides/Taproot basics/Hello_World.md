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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX2BRFGT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCmSlBuyr%2FrVJXj9yJNOzhHBAVvoXRPM4koRsW%2FEXUB%2FwIhAJPo2f7sXdomWQK3NWl0BMpb52GKvX0O4vIojA8mINxUKv8DCHsQABoMNjM3NDIzMTgzODA1IgxmRu%2FSPK7W7dmvgFkq3AP60Nl2ddSGm9dhOFQ6H%2FZdPdfxMYmyBXW1nHebcFX1adp8SOXiez9HIpuTqldShmIbVIklppHXsY0b98tehL%2FGcRFD3WOE1ARuS9swPxBy3xactW1oZ6pYDQJfGYPp2ajJpsAxL6nv1vHNEkrC8aaZ0WdOYeTgyHKUFlOnf10qD5cyWc25F%2FywErVK0pqto9SJBT%2Fbr46zCEyT6iVIJhKHARjrWaAxNTSkykDJyGHMFyBr6YLGeQx86MovKYgly%2FiO4linBZ2tVDwC9pkltZDNhR4QncJ3hXBEa7prvkP7YvRA9PuyZrnGtk0wCqGvyrtubR4AS08CgPPBE0LZeKN6Re5LC0dSb2sE7o12cTQ4EERpJZVYGXEQOhCw4d%2BmmIk8jYzYIP3n%2BVhJDXp0h2%2BYJuKQ1yiH5ZeZGyi%2BNWoRNGgrx3hjVg17Lj7JTVY2ZohWs58vNO7HImM4ORuE2D9S1RfFUCHD6MXeetH90EfLduVBJIFFnDQ6wAKrHva4OR5lSYacsn9oIiUKgMn3m5%2B%2F6ufF2PcSd9PFmNmuGOt6ykA7Oj2pzh6zJbYTOiXOIbMCQ31tLUjQ%2FkR11a20SExDJUzFjJ6elU9%2BeAWLuwZcoTZnoBuuUA2epufW1DDGu9W%2FBjqkATI95FqSa1kMmFIFS%2B5os58z%2BA%2BvhejSKdR4pfCn82P12QDWo%2B6GerdPEBZpVrrIv6v8aH58VfFkHDmQ%2F9pQXmfBJLxiMgeTzXYWt5zu8hwWnj6Z55JQ3RXsyj4h381B0%2FvOZHp2GiwP5LIEUN6K238KDzr7TaXYlVlZafH3qQTbWrGL7JiH9Z84KVrCPa8LdtlA7Ih31Zddpwb1AqsW5c8mbz8g&X-Amz-Signature=b12052354d5e39a018eaf83dc189d699743f1e6c55bbd6be6d41c8a28484337f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX2BRFGT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCmSlBuyr%2FrVJXj9yJNOzhHBAVvoXRPM4koRsW%2FEXUB%2FwIhAJPo2f7sXdomWQK3NWl0BMpb52GKvX0O4vIojA8mINxUKv8DCHsQABoMNjM3NDIzMTgzODA1IgxmRu%2FSPK7W7dmvgFkq3AP60Nl2ddSGm9dhOFQ6H%2FZdPdfxMYmyBXW1nHebcFX1adp8SOXiez9HIpuTqldShmIbVIklppHXsY0b98tehL%2FGcRFD3WOE1ARuS9swPxBy3xactW1oZ6pYDQJfGYPp2ajJpsAxL6nv1vHNEkrC8aaZ0WdOYeTgyHKUFlOnf10qD5cyWc25F%2FywErVK0pqto9SJBT%2Fbr46zCEyT6iVIJhKHARjrWaAxNTSkykDJyGHMFyBr6YLGeQx86MovKYgly%2FiO4linBZ2tVDwC9pkltZDNhR4QncJ3hXBEa7prvkP7YvRA9PuyZrnGtk0wCqGvyrtubR4AS08CgPPBE0LZeKN6Re5LC0dSb2sE7o12cTQ4EERpJZVYGXEQOhCw4d%2BmmIk8jYzYIP3n%2BVhJDXp0h2%2BYJuKQ1yiH5ZeZGyi%2BNWoRNGgrx3hjVg17Lj7JTVY2ZohWs58vNO7HImM4ORuE2D9S1RfFUCHD6MXeetH90EfLduVBJIFFnDQ6wAKrHva4OR5lSYacsn9oIiUKgMn3m5%2B%2F6ufF2PcSd9PFmNmuGOt6ykA7Oj2pzh6zJbYTOiXOIbMCQ31tLUjQ%2FkR11a20SExDJUzFjJ6elU9%2BeAWLuwZcoTZnoBuuUA2epufW1DDGu9W%2FBjqkATI95FqSa1kMmFIFS%2B5os58z%2BA%2BvhejSKdR4pfCn82P12QDWo%2B6GerdPEBZpVrrIv6v8aH58VfFkHDmQ%2F9pQXmfBJLxiMgeTzXYWt5zu8hwWnj6Z55JQ3RXsyj4h381B0%2FvOZHp2GiwP5LIEUN6K238KDzr7TaXYlVlZafH3qQTbWrGL7JiH9Z84KVrCPa8LdtlA7Ih31Zddpwb1AqsW5c8mbz8g&X-Amz-Signature=6662a0a1f6c41169ed458ae6494aa16bcff91ec3c6d36bd0c2d211c52c637dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
