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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KOQVJK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdEVYwPsZzGfXTg5f2dL7XjsGPwdU4uvm%2Be40Y6xTElAiAkRpFJHp9hOlXWd37fJu%2BOI3IU7eMcXThxUYGwbxx5Uir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMR8nXD5OvXJbH0gVmKtwDRYPIN8cXr4C0mEcf5uNRdoEWLEZMeD%2Fyfw3gdmmOYTqkEa5uV3srxafaxuNx8hEq%2Flhkm30noulJZFJEYymQjcObiic7DC0afOoX2p4VtzEHTWowWDNyZmV7lCQA7vguYDflUaLyVawTno%2FgFWqhZFElL7l2d%2BE4qp5SI1wIFM11t0elYW4EZ0a6XDuWnklJADdKbXxcnX4tc7cUd%2BbLO%2FP9AmfwJ%2BaW9gcujMhTLdaXOxlReVbfZvAK0Enj3ruFBoydr9lI%2BAN1QI8661xHDm5wR37NsZIN44NWYB1tu04xmTLLR1Ymq%2FTtIyp2If9B0hK3DyN2LLcgsbK3L78uygsvl7Q3ewUvIt%2BKoKPHYQftTp%2FcM2v8SkSeELDndCp%2B8Ry73cGvmi4cB1XK76EX19Nhdmw1fwv323wMwrvrckX2D8%2Fqz49mYWw7fcKYd%2FWKoD6X0LgwBpCEKQ7wIlxP0PC%2FYgvmw5X6uDMsFf6ycn8%2FVZIcJ2KmOUzZIW0a%2BB%2Feiwe71TDk3YNban2SbL9vpBiREWchZMeQIxfgNa1dRPdN9%2F77A5yfrcPCmpEGBdaJ559oteFlsc4zducZmSLIWqwSjlDo8kmkhtRQqx9Jc26R%2B8vONEwAMTRWK58wibmhvgY6pgGZwwfW%2FfxD%2BEsGXdWG3gjOSlRUuiSLOcG3AocqtxbE7Dt4KAsWxVLz2eRER7iPg6bpEiQrnUNZJsHVNDzZIKIhTpsqVEvCz871FRN5U%2FMR78giFHpRcDWFEr1zLBGv%2BPH80jIcy0TaIzj9af1ueUPI1Qe%2FguuctgT4eOGZb%2BstthBSkDf3GXebKXtYuVNVKPxXDqhvsFNoMlgJa2cIxnD6vZ31p43C&X-Amz-Signature=029d65d254fb67c5a61604fd5f4a927c4be272276c928eaec0fbf3af62073b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KOQVJK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdEVYwPsZzGfXTg5f2dL7XjsGPwdU4uvm%2Be40Y6xTElAiAkRpFJHp9hOlXWd37fJu%2BOI3IU7eMcXThxUYGwbxx5Uir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMR8nXD5OvXJbH0gVmKtwDRYPIN8cXr4C0mEcf5uNRdoEWLEZMeD%2Fyfw3gdmmOYTqkEa5uV3srxafaxuNx8hEq%2Flhkm30noulJZFJEYymQjcObiic7DC0afOoX2p4VtzEHTWowWDNyZmV7lCQA7vguYDflUaLyVawTno%2FgFWqhZFElL7l2d%2BE4qp5SI1wIFM11t0elYW4EZ0a6XDuWnklJADdKbXxcnX4tc7cUd%2BbLO%2FP9AmfwJ%2BaW9gcujMhTLdaXOxlReVbfZvAK0Enj3ruFBoydr9lI%2BAN1QI8661xHDm5wR37NsZIN44NWYB1tu04xmTLLR1Ymq%2FTtIyp2If9B0hK3DyN2LLcgsbK3L78uygsvl7Q3ewUvIt%2BKoKPHYQftTp%2FcM2v8SkSeELDndCp%2B8Ry73cGvmi4cB1XK76EX19Nhdmw1fwv323wMwrvrckX2D8%2Fqz49mYWw7fcKYd%2FWKoD6X0LgwBpCEKQ7wIlxP0PC%2FYgvmw5X6uDMsFf6ycn8%2FVZIcJ2KmOUzZIW0a%2BB%2Feiwe71TDk3YNban2SbL9vpBiREWchZMeQIxfgNa1dRPdN9%2F77A5yfrcPCmpEGBdaJ559oteFlsc4zducZmSLIWqwSjlDo8kmkhtRQqx9Jc26R%2B8vONEwAMTRWK58wibmhvgY6pgGZwwfW%2FfxD%2BEsGXdWG3gjOSlRUuiSLOcG3AocqtxbE7Dt4KAsWxVLz2eRER7iPg6bpEiQrnUNZJsHVNDzZIKIhTpsqVEvCz871FRN5U%2FMR78giFHpRcDWFEr1zLBGv%2BPH80jIcy0TaIzj9af1ueUPI1Qe%2FguuctgT4eOGZb%2BstthBSkDf3GXebKXtYuVNVKPxXDqhvsFNoMlgJa2cIxnD6vZ31p43C&X-Amz-Signature=66c5d634e3fc37759cca20dc4c2bb0691dd0fce9116a330f3b3d30ca6933a9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
