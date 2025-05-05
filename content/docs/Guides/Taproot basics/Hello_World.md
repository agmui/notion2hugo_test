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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL776MX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsc5bHIVxmVAkzVsBPWdBIdg8LiYpILVBI8LoVQWR2iAiAvKR2mAej1yFTc3fgrIz00YhI4QQfAlagH8f1s9mtHgyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM45I7t5j25qWvxAhIKtwDX9gnk%2Fq4NqYgeCivJr%2F3R1f6uYdA0IwLXYGi8xFrFQiNf6%2FRQBMwHEKrpEPyOIixL%2FbO7oe1C5z00amN8XwmF02JPBl01ou59kC3bGkKrC8dQxu5hzb5E0olC9ftE9H0Bt%2FgYR8fc7GEjejBDwFobT1wQuKSJq4Nwcv9kLzMw0k0BJOYm45FBANwb4sdNAah8E9HK5u0nNlz6y4vWG2Ce%2BRkXd6dz6%2B1rfbvFVToNwwVC4y1Chw5sRg%2BBkG5Vh%2FkdCfr1ahoWzJb6cAH3k2W1muzvg72ew33HDd0dsYT%2F%2Bdc%2BplQIvLTdfWnrUKdiDpDOluDpQxulCUnXdLIty52FGEsuniMfUBW2HQa0wy316XqMHcihNsyu5LGrdUKKRyoLCfzksRVW9ocC4V94Ft60PtsGByOsMs93rmQDi9bDQwhrqY%2Fqi%2BqsfS0R8ehI%2FjhlN6MABklcP1CYQpt7bOJD0D%2FvyfwTDcI0fWdgWtKQi%2Fh6pyKAG0JaXjG1kiNq1I4Qx%2BFanj0sYwUIoyf2N%2Fx8LGdM2Ouw72jBzjvrmvggpA8n3%2FC7ou%2Byr5sIRcH6g%2F2HypRp%2BRC%2FX4EbqisMvpQY7KRbvgcIW34jXNFDYbLWEA0IrVQZuAHR92jdsIwp5fjwAY6pgFDAuM68y2I3p9vfXB7635NNrjwl9a3v5Ro5KfMopR4X4sTMCsUHdFBRHHiHzOgILLRliSxYMd4gpFJjHcZ4sZsT5Eoav8AdnLkDxYRvZjuddfbtvUUMFahTnuOgP5gFedOUtYgrx5zPiGLAMt7Dzflis60jV4bVQr34HECrE6cUqjMuhFlFBnn3E9DvmFVjRYxtsXjJ2T7g3zABUKL9Yx%2FeyG4mbXP&X-Amz-Signature=a8ae03d3f26b65ebd64c477bfe968fb0450f78837d3365955544dcbae8b14cef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL776MX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsc5bHIVxmVAkzVsBPWdBIdg8LiYpILVBI8LoVQWR2iAiAvKR2mAej1yFTc3fgrIz00YhI4QQfAlagH8f1s9mtHgyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM45I7t5j25qWvxAhIKtwDX9gnk%2Fq4NqYgeCivJr%2F3R1f6uYdA0IwLXYGi8xFrFQiNf6%2FRQBMwHEKrpEPyOIixL%2FbO7oe1C5z00amN8XwmF02JPBl01ou59kC3bGkKrC8dQxu5hzb5E0olC9ftE9H0Bt%2FgYR8fc7GEjejBDwFobT1wQuKSJq4Nwcv9kLzMw0k0BJOYm45FBANwb4sdNAah8E9HK5u0nNlz6y4vWG2Ce%2BRkXd6dz6%2B1rfbvFVToNwwVC4y1Chw5sRg%2BBkG5Vh%2FkdCfr1ahoWzJb6cAH3k2W1muzvg72ew33HDd0dsYT%2F%2Bdc%2BplQIvLTdfWnrUKdiDpDOluDpQxulCUnXdLIty52FGEsuniMfUBW2HQa0wy316XqMHcihNsyu5LGrdUKKRyoLCfzksRVW9ocC4V94Ft60PtsGByOsMs93rmQDi9bDQwhrqY%2Fqi%2BqsfS0R8ehI%2FjhlN6MABklcP1CYQpt7bOJD0D%2FvyfwTDcI0fWdgWtKQi%2Fh6pyKAG0JaXjG1kiNq1I4Qx%2BFanj0sYwUIoyf2N%2Fx8LGdM2Ouw72jBzjvrmvggpA8n3%2FC7ou%2Byr5sIRcH6g%2F2HypRp%2BRC%2FX4EbqisMvpQY7KRbvgcIW34jXNFDYbLWEA0IrVQZuAHR92jdsIwp5fjwAY6pgFDAuM68y2I3p9vfXB7635NNrjwl9a3v5Ro5KfMopR4X4sTMCsUHdFBRHHiHzOgILLRliSxYMd4gpFJjHcZ4sZsT5Eoav8AdnLkDxYRvZjuddfbtvUUMFahTnuOgP5gFedOUtYgrx5zPiGLAMt7Dzflis60jV4bVQr34HECrE6cUqjMuhFlFBnn3E9DvmFVjRYxtsXjJ2T7g3zABUKL9Yx%2FeyG4mbXP&X-Amz-Signature=2af4a779550696d28b22848c1f6c3dfa37c7c5518c709e66ef768377e081c492&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
