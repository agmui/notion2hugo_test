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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDWIFH2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2FJLgsrYpwihYBY5qRNMChbQ6KqbB3JPV%2FMh%2FNyBRpwIgb3%2FttyY3AZYK4nQUZhIT0mdmmpZq3SqD3aNQAkf7VHIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImMyOsRrF8yNh1ouSrcA1JB2%2FpF1WLrTSb8bXwxEsne3d6uZx6dH1RhaNuM6wG%2FHUqKIkU8QjF7JzkN5SseC1ywkLhg4ew82AnYp8sW7hV0Jee4bCwloxCdQPrKNiqEgVWPBS573WeNZkz2F7%2F%2BaT1q4BdgafGpugWCDPIat4nHxbgIiP5NfN7w3yTcFymsQ9zBJLO8UyHa2d2V7%2FsR8y1hqYn69G2%2FytpKAEWW578F6%2FwwwAnKjIaYmtpVyhOonNd%2FkymfxA%2BVEis9wbk%2B0OAKBhARJ%2BBv%2BkQdLZTaz2jYDV9zIbAyC3PKXRP1%2BNN8%2BlWBM88w%2BEIsyL%2B6oo0WZ6jXJ8d9t5BYqbnJ3BK5LBECJg2fJj%2FrTHZcFdn48%2FucIkjjpE4n6r8KnsOHTLC1i89suWV1PoZnV0G3l9Q9Hl%2FZy46f3JaCMVU%2B7lp8EQ5fUcOEPnXArQaWNXUiSbDfwbRk%2FF55T6Lqv5OOQ%2B8whH0IFbCYTc3wzV2vJModoZNw9Dp4JnV1RxcVm4TeHczjojD5d0v4K4MdK1%2Fcndstjjxl9lZlzSadM5MjdyOD8BLhfpKD09oQDpK90Tq3pzi2rpW8rT4m7XHnKsAu%2F4RgoRDVCqGf8lBfzuPYsJUYLbfqaEKl%2Bk6PH4focno2MLao7cEGOqUBQdlAR0s9o0K4fso85eJP1I79r2jXnJjL7wXk53jc6qNndLCGlhzfRn%2BLbpHVvtgotVpbH%2BBKWoo80zKlMjiuNoNMa%2BxfNjcJwBtAwxCGBFXqeAwu1PZOZu1EK3awGFUNkRr%2BBlsinMbisoQAdGMvLrhz%2FT3MDIO7UHoQn7qww2tin%2B6RgX2VrmAZCCHrWn21fB00oXXXJC0Jh2PAo21nClHP8WBK&X-Amz-Signature=648bfad22c0d0254b148efca468abc681a036699ac1a3509744207b774c80290&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDWIFH2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2FJLgsrYpwihYBY5qRNMChbQ6KqbB3JPV%2FMh%2FNyBRpwIgb3%2FttyY3AZYK4nQUZhIT0mdmmpZq3SqD3aNQAkf7VHIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImMyOsRrF8yNh1ouSrcA1JB2%2FpF1WLrTSb8bXwxEsne3d6uZx6dH1RhaNuM6wG%2FHUqKIkU8QjF7JzkN5SseC1ywkLhg4ew82AnYp8sW7hV0Jee4bCwloxCdQPrKNiqEgVWPBS573WeNZkz2F7%2F%2BaT1q4BdgafGpugWCDPIat4nHxbgIiP5NfN7w3yTcFymsQ9zBJLO8UyHa2d2V7%2FsR8y1hqYn69G2%2FytpKAEWW578F6%2FwwwAnKjIaYmtpVyhOonNd%2FkymfxA%2BVEis9wbk%2B0OAKBhARJ%2BBv%2BkQdLZTaz2jYDV9zIbAyC3PKXRP1%2BNN8%2BlWBM88w%2BEIsyL%2B6oo0WZ6jXJ8d9t5BYqbnJ3BK5LBECJg2fJj%2FrTHZcFdn48%2FucIkjjpE4n6r8KnsOHTLC1i89suWV1PoZnV0G3l9Q9Hl%2FZy46f3JaCMVU%2B7lp8EQ5fUcOEPnXArQaWNXUiSbDfwbRk%2FF55T6Lqv5OOQ%2B8whH0IFbCYTc3wzV2vJModoZNw9Dp4JnV1RxcVm4TeHczjojD5d0v4K4MdK1%2Fcndstjjxl9lZlzSadM5MjdyOD8BLhfpKD09oQDpK90Tq3pzi2rpW8rT4m7XHnKsAu%2F4RgoRDVCqGf8lBfzuPYsJUYLbfqaEKl%2Bk6PH4focno2MLao7cEGOqUBQdlAR0s9o0K4fso85eJP1I79r2jXnJjL7wXk53jc6qNndLCGlhzfRn%2BLbpHVvtgotVpbH%2BBKWoo80zKlMjiuNoNMa%2BxfNjcJwBtAwxCGBFXqeAwu1PZOZu1EK3awGFUNkRr%2BBlsinMbisoQAdGMvLrhz%2FT3MDIO7UHoQn7qww2tin%2B6RgX2VrmAZCCHrWn21fB00oXXXJC0Jh2PAo21nClHP8WBK&X-Amz-Signature=821100d487497438fef342cf40d4cb5ce7b3a614145708e80e6d70d8f2864bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
