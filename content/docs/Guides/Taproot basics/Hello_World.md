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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYCQIEW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi%2B7gAJ3YYIsgbxqY3utfHlMiAIQ7GIgjX8Uw0yQW4vAiAf03RPxzDYFpLblfy1xuCqAG3zsLv%2B51DFV%2BF6gJAuBSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMOvbOaDbfwjNaE6PQKtwDXDW7k3Eoj8%2F%2FCibKo%2Fb67xgNXkrlzBUjk1MWWqgKTiiGr2dfHji1%2FDClBgXLEgudPBvhMuchQ1rWu914F4UB9mGeGH5%2FzYSLlbni9e9uCO0eZ7%2BmE28i0KDDcILyVf1nUit9nrxAdCnfUYmCSfw%2FnDujTRi0fxXvCSl8VFKgBp%2BoaxbtIuQfZq2KzI2ehGgD8HhxcK3H6C1EQVBT0EhWU5TEX1ehfzxzHr3KbPu8Ka9H%2BF%2FbFQjvtx%2BZKofvh0MEe%2B%2BjumEkzjRmSzrK13TuFayhKGIvru8UVuDYbvbxfyNj3ArZ%2FoMJ%2BRIC4WS0LcYSRZsf9sTQHjCk9Bf9V2oN60s2BFtwsZ79JAqZkMtK7llQblhmxeZdar2IOvr1Q4HD9h25zEKpU%2BcbWGKWiOYqC2BDxK9OhTCTp%2FEXwPDQDiX2B79UoMhCl0F%2BjrK1BfVIn9jGPYrlqyPimQBw3QhoLk%2FXrzGxF6M0VTLwiGg8z%2Bi%2BFcZFwd4DYt598eoEA282fsDzQ0gODpyNxwjAHEVi1qERS3pXV0555a0ldfwZMFdvCCvtS6Oof0p4y%2BzJ%2F1rFPpIFdJmO%2FT3XmMJIroy6bqiM8KUtoXNozY5bsKX0dpfXUtXWB2Cc1cGwMhQwkay7vQY6pgFURBNiTbvU7X0gY5D%2BVwBo2llac7FXlXw6Alx2DL3hmrydmmQ9FBUDavDJlfpIKYxmHqD%2BVroPtPuh7aaCA4PNZhtezH4BiXGDNIWGr07ww2Be2I6dBLRRAPqdNv5qyRRttaBWgELTes9D4NkAbOpje7bu35bklW%2FzRsPzT0P9o5ho7rrd%2BgLOwMfqIVTcke29lCc9duCzC8va7oVUxS4yLBS6RUAZ&X-Amz-Signature=61e37eaf9ba45345e58c3d3c7f3f7226365962db4db87fdac2b9fc90d9b11792&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYCQIEW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi%2B7gAJ3YYIsgbxqY3utfHlMiAIQ7GIgjX8Uw0yQW4vAiAf03RPxzDYFpLblfy1xuCqAG3zsLv%2B51DFV%2BF6gJAuBSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMOvbOaDbfwjNaE6PQKtwDXDW7k3Eoj8%2F%2FCibKo%2Fb67xgNXkrlzBUjk1MWWqgKTiiGr2dfHji1%2FDClBgXLEgudPBvhMuchQ1rWu914F4UB9mGeGH5%2FzYSLlbni9e9uCO0eZ7%2BmE28i0KDDcILyVf1nUit9nrxAdCnfUYmCSfw%2FnDujTRi0fxXvCSl8VFKgBp%2BoaxbtIuQfZq2KzI2ehGgD8HhxcK3H6C1EQVBT0EhWU5TEX1ehfzxzHr3KbPu8Ka9H%2BF%2FbFQjvtx%2BZKofvh0MEe%2B%2BjumEkzjRmSzrK13TuFayhKGIvru8UVuDYbvbxfyNj3ArZ%2FoMJ%2BRIC4WS0LcYSRZsf9sTQHjCk9Bf9V2oN60s2BFtwsZ79JAqZkMtK7llQblhmxeZdar2IOvr1Q4HD9h25zEKpU%2BcbWGKWiOYqC2BDxK9OhTCTp%2FEXwPDQDiX2B79UoMhCl0F%2BjrK1BfVIn9jGPYrlqyPimQBw3QhoLk%2FXrzGxF6M0VTLwiGg8z%2Bi%2BFcZFwd4DYt598eoEA282fsDzQ0gODpyNxwjAHEVi1qERS3pXV0555a0ldfwZMFdvCCvtS6Oof0p4y%2BzJ%2F1rFPpIFdJmO%2FT3XmMJIroy6bqiM8KUtoXNozY5bsKX0dpfXUtXWB2Cc1cGwMhQwkay7vQY6pgFURBNiTbvU7X0gY5D%2BVwBo2llac7FXlXw6Alx2DL3hmrydmmQ9FBUDavDJlfpIKYxmHqD%2BVroPtPuh7aaCA4PNZhtezH4BiXGDNIWGr07ww2Be2I6dBLRRAPqdNv5qyRRttaBWgELTes9D4NkAbOpje7bu35bklW%2FzRsPzT0P9o5ho7rrd%2BgLOwMfqIVTcke29lCc9duCzC8va7oVUxS4yLBS6RUAZ&X-Amz-Signature=bf919183e521a07fc96cb9efde3901de02a2dbf5f3e4aad32923b70f6a6ce092&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
