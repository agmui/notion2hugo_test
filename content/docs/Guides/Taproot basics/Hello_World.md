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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANUAH42%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2Vhvo1KGosQp6hv38UqnTS%2BNRij6IioHs8S2YOOCetAiEAvZTimoltUUVPCwJV7uflufvSozf9k4xvwHJf81CBoocqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmiIXbqI849wk%2FKyrcA0J9QSnn5Jy4C4gW%2BqajFUO6uhdkZqMk95Z3dsnQ3oHAdYOXpB8pV8OxMOdIRt7vOpss50%2BNaonaPPyf%2FCIQ9jFum%2B1k7Oh%2By6DxAaxiNlNV18BC4thQcEhA7yWn2zHdQ66ot0YbtJCB28tnR8kbBr1TJwas%2F%2Bg0MpJva4U%2BpI3%2FjUHXb3Hn3cBDoqQqILvR0EYHC9rjKUV%2F2%2B7FiLuImQ0jDKrUcXnYCu5HaygViCXzYzYfM3QSOQ%2BB7YZe%2Fg8n5WraozHK5w6XH%2BAjbI%2FDMvedCleGhcz1DzDK%2F30YqmxGCiWrfd0ALbYFDYCeFE4NBY7glb%2BqhSAHsAadrAK5Lm%2BGe0df%2BBMCPEb27fzxQiL3TbxoO5viARgGACoOODcEXpZSAu0xsY%2FDAlKIs%2FkUpiYdWxMKVoqet3QPbuLNI6RU%2Fn71NxkBJNPe9BTFq9CeGr65rTmI0%2FHqRlzEiMMev2jJSYJLY31mYuRC9LiH%2FhWTUZW9SdACfu5fjpM4iNqIwjs4OkKukstBxfoGjOREBtBD87aJTURjI3SXy%2BOJdSJV9uKz%2BzUNVXSrjV%2BqYEgxLHD0i3LrwdWI15bvU4Ke%2BIdE8A2ittGo8J9%2B2dZ71ffxbkQmLkMy68nWHbVyMMvKt8MGOqUBciGXD0qS%2FDm70KJxpeIGhCXjxASh5rxrcXiydXXmVrlCNNAMWPELZm8fCc0zIeHK9wqFzZGAwtSKZScpgHGnkPdDb8gyfgDYCW%2BP5ixXoxhnmXvo7yOZ8VtH72Jb%2BFLgxfdKJwvJnJhGcAOhGG%2B58mnO1e7NYvhTJ%2FEYTRKSlwNXw8%2FSzhpt%2Bdibza55fgblVZsR1P%2ByXvF%2F7T1ppOwFq%2BiVxp7Y&X-Amz-Signature=48cbaef3637c070572ba971b64e3019a3af0c8e62106d11a22918cf6c462bb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UANUAH42%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2Vhvo1KGosQp6hv38UqnTS%2BNRij6IioHs8S2YOOCetAiEAvZTimoltUUVPCwJV7uflufvSozf9k4xvwHJf81CBoocqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmiIXbqI849wk%2FKyrcA0J9QSnn5Jy4C4gW%2BqajFUO6uhdkZqMk95Z3dsnQ3oHAdYOXpB8pV8OxMOdIRt7vOpss50%2BNaonaPPyf%2FCIQ9jFum%2B1k7Oh%2By6DxAaxiNlNV18BC4thQcEhA7yWn2zHdQ66ot0YbtJCB28tnR8kbBr1TJwas%2F%2Bg0MpJva4U%2BpI3%2FjUHXb3Hn3cBDoqQqILvR0EYHC9rjKUV%2F2%2B7FiLuImQ0jDKrUcXnYCu5HaygViCXzYzYfM3QSOQ%2BB7YZe%2Fg8n5WraozHK5w6XH%2BAjbI%2FDMvedCleGhcz1DzDK%2F30YqmxGCiWrfd0ALbYFDYCeFE4NBY7glb%2BqhSAHsAadrAK5Lm%2BGe0df%2BBMCPEb27fzxQiL3TbxoO5viARgGACoOODcEXpZSAu0xsY%2FDAlKIs%2FkUpiYdWxMKVoqet3QPbuLNI6RU%2Fn71NxkBJNPe9BTFq9CeGr65rTmI0%2FHqRlzEiMMev2jJSYJLY31mYuRC9LiH%2FhWTUZW9SdACfu5fjpM4iNqIwjs4OkKukstBxfoGjOREBtBD87aJTURjI3SXy%2BOJdSJV9uKz%2BzUNVXSrjV%2BqYEgxLHD0i3LrwdWI15bvU4Ke%2BIdE8A2ittGo8J9%2B2dZ71ffxbkQmLkMy68nWHbVyMMvKt8MGOqUBciGXD0qS%2FDm70KJxpeIGhCXjxASh5rxrcXiydXXmVrlCNNAMWPELZm8fCc0zIeHK9wqFzZGAwtSKZScpgHGnkPdDb8gyfgDYCW%2BP5ixXoxhnmXvo7yOZ8VtH72Jb%2BFLgxfdKJwvJnJhGcAOhGG%2B58mnO1e7NYvhTJ%2FEYTRKSlwNXw8%2FSzhpt%2Bdibza55fgblVZsR1P%2ByXvF%2F7T1ppOwFq%2BiVxp7Y&X-Amz-Signature=5c5afd456de7a72dfa523280316282db178b0ae5945bb242557ff13c4fdcd987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
