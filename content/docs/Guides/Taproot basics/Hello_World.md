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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4PHIEZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmLo6Y0n0TKAioJO8n%2Fs4L6MTgjdyslEWHABBgn3fzAiAkYJGafSGCz0wh9bAx2SkXzjpSgp4BXdUMUGQyqmJZ%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmSiQf8gs7qA12DhRKtwDt%2FoJ61LLXXR7jBZi7sBWMuJzuarqQpca3yBJafABRIFITHhAtsxJakNbdAP7Q2IpntPLp6ZEcwkV7pBCdN42Tt7VBYFlBOzFaILjwcS7y74Da1RbzjdnLUzBoEms0sJ%2B7vZOspCt4Pw2NbSjAzJELsyegMi%2FNvOjFA%2B1No6HRn9O7W%2FJGWHbfnyVvzAB2Kg%2BMHk8Mw45IBmlz%2Fe3MIwc7TR%2FEmzxW6zKFnp224%2BIn74xrxHwKmhPt9xi37YFkyk8%2FAax2N13HXyGgXv41dekyE68hnYA66oHqkzFrVrmlIYoNmutpZAlgEf8YGQjL9QUPS1ubwlFtQKTo4eqwAxlXBcvM4tRvO1emadSMEx22UlkNeXTuOXanQC5w3e4j5zXEhkq%2FZvKHC1XG9iXK1skXsFNBtRQb3eH0xhyWeOxHthK%2FoaIQrUPqbhqahbPVULCo%2BrhYgJ3duGd1QK9ZeV1U%2BXkoCAjCQQ89MRGRKK3dJliYIQWew4DB%2BR%2BtxeBOyl7l8AaGdPDbjxWtSvbHdBb2AieRsOZav0O6NgC68tZrVq88u%2FzdGqz4psASwdLEf9gk%2BHBDlwzZcMGvY8CiPn2vmdiE0SS8uXV8vuaSValrV%2FAtm5emT%2FexL5PX2cwsNT4wwY6pgFgJX13zgJwOKBO%2FPY0hWBFIc1a2ET6SsA%2FGFKvVyh%2FiL3e15CFuQhBuhy7UqLpK1OmUkikYcP7ReYnpDPG9ge4TVZQSbY4AQOSjLkTFhq34KjTS5MBJSq9XOrO8p%2FFvQhSuccZeeL1LiEKxCminRTWAfqUHizEsRde3vR7aXKybY3WjoBdgR%2B8h%2FtFGCZyKYjJew4MdKvxyIxiekkwWnl%2BI%2FgeLCJ0&X-Amz-Signature=902124501ea7f20fdd5688f53192bae72a357498fedf345c4b7cdee84a84894e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4PHIEZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvmLo6Y0n0TKAioJO8n%2Fs4L6MTgjdyslEWHABBgn3fzAiAkYJGafSGCz0wh9bAx2SkXzjpSgp4BXdUMUGQyqmJZ%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmSiQf8gs7qA12DhRKtwDt%2FoJ61LLXXR7jBZi7sBWMuJzuarqQpca3yBJafABRIFITHhAtsxJakNbdAP7Q2IpntPLp6ZEcwkV7pBCdN42Tt7VBYFlBOzFaILjwcS7y74Da1RbzjdnLUzBoEms0sJ%2B7vZOspCt4Pw2NbSjAzJELsyegMi%2FNvOjFA%2B1No6HRn9O7W%2FJGWHbfnyVvzAB2Kg%2BMHk8Mw45IBmlz%2Fe3MIwc7TR%2FEmzxW6zKFnp224%2BIn74xrxHwKmhPt9xi37YFkyk8%2FAax2N13HXyGgXv41dekyE68hnYA66oHqkzFrVrmlIYoNmutpZAlgEf8YGQjL9QUPS1ubwlFtQKTo4eqwAxlXBcvM4tRvO1emadSMEx22UlkNeXTuOXanQC5w3e4j5zXEhkq%2FZvKHC1XG9iXK1skXsFNBtRQb3eH0xhyWeOxHthK%2FoaIQrUPqbhqahbPVULCo%2BrhYgJ3duGd1QK9ZeV1U%2BXkoCAjCQQ89MRGRKK3dJliYIQWew4DB%2BR%2BtxeBOyl7l8AaGdPDbjxWtSvbHdBb2AieRsOZav0O6NgC68tZrVq88u%2FzdGqz4psASwdLEf9gk%2BHBDlwzZcMGvY8CiPn2vmdiE0SS8uXV8vuaSValrV%2FAtm5emT%2FexL5PX2cwsNT4wwY6pgFgJX13zgJwOKBO%2FPY0hWBFIc1a2ET6SsA%2FGFKvVyh%2FiL3e15CFuQhBuhy7UqLpK1OmUkikYcP7ReYnpDPG9ge4TVZQSbY4AQOSjLkTFhq34KjTS5MBJSq9XOrO8p%2FFvQhSuccZeeL1LiEKxCminRTWAfqUHizEsRde3vR7aXKybY3WjoBdgR%2B8h%2FtFGCZyKYjJew4MdKvxyIxiekkwWnl%2BI%2FgeLCJ0&X-Amz-Signature=d47c247e6abb7f37edef898df9e29d905531efe230190fc33ce2191ac49dd287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
