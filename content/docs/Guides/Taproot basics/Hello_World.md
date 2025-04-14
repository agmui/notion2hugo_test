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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IH5H5SZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTEqBaJyyL9qw3w9LGrKLjpUYk6KAoqDeQq9%2FGRXOqxAIgC3wrLIA1fRcvwCnU1%2F5uewg%2BmChQ8Nyt3odAidVUdmAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCH5W6F45uSOTEDU6ircA89BwJ1CZNiZl1FJGRbloId2nEGsrkP7S4nIlI9nxteP%2BJRH9k9Dcgzrj8rtNPBkBq7mGIYsfio2kAMpROupBdEg9xOPFZuiOAN65uLnkE76kxwlt0ZhDVPuZOGkaqP%2FlcIp0YY1b4UGHxEAr5jh1f1X0CYLf2pzZzT6PougNna2T%2BUZs9WYoyRurp7pRi0uMWyD3zS%2BUHchn%2FYptTMbUApYNjxWx8xo8Ks5G1asozktjzXnVhfIkZcWCYuo1wRBiPIKdj%2F%2F07wMlg9ypjiHp2fKFAfFm%2FUoy8ASI4j8ULqMeAa%2FRkDXNnxLnL0glhqD3IQcSjLeNDukbbwfgLY8UVsoF3sRLmcQ7cRTJiqopXj7sObeLf0zAIZ6zpuFSct26PjO3nivGKuKpN3wk0l9NV09qC%2FCnoE9Mau5JPACXYdJvoT7d8g8FR4nZ4k9F7CL%2FPPzucLgynJcrDBaTHUr36n3BxkfQ%2BI8K15%2FRTO6FSe9sIvncGoAgk1h5OD3keoD4I4Gq%2B2jpUeJPlKOrjABM%2BHN7FIir0cP%2FcJdQY7StwqHqH8Fa2ye5yF%2B1jkKFmWEUjNSN0QUdeHxnHU29P8Z%2FpVZssUEsul5wbNw6pAYeaSCzlTSDAwmTFxmRAaGMPbi8r8GOqUB6iJTvJUBi2wm1VV8vW%2FUqkdeY6uqJbr0RHIDxltBXDlD1lkV7UC1TGdAHgGxt4Jmf55CEbsBnjgSWU0ikI%2Bpu5lc%2Bh6dF45E6MB7g43ZzKfxfA%2ByauvgoX2fE4nQ9Oe%2BhBAdyeIvE9ZxSdxXrF1QJl0MsxTUL3F8MCy%2F4DrDPeBVD5oBRhPTkPz7fpltjo4Mo9Ej4gqZSl1vrA7Q%2BvivF3UNeLQ3&X-Amz-Signature=c32da1dd85fe15dfbfc9ac43c5f4bb07e8e9dae7abdadb6374924e4e6bd09873&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IH5H5SZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTEqBaJyyL9qw3w9LGrKLjpUYk6KAoqDeQq9%2FGRXOqxAIgC3wrLIA1fRcvwCnU1%2F5uewg%2BmChQ8Nyt3odAidVUdmAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCH5W6F45uSOTEDU6ircA89BwJ1CZNiZl1FJGRbloId2nEGsrkP7S4nIlI9nxteP%2BJRH9k9Dcgzrj8rtNPBkBq7mGIYsfio2kAMpROupBdEg9xOPFZuiOAN65uLnkE76kxwlt0ZhDVPuZOGkaqP%2FlcIp0YY1b4UGHxEAr5jh1f1X0CYLf2pzZzT6PougNna2T%2BUZs9WYoyRurp7pRi0uMWyD3zS%2BUHchn%2FYptTMbUApYNjxWx8xo8Ks5G1asozktjzXnVhfIkZcWCYuo1wRBiPIKdj%2F%2F07wMlg9ypjiHp2fKFAfFm%2FUoy8ASI4j8ULqMeAa%2FRkDXNnxLnL0glhqD3IQcSjLeNDukbbwfgLY8UVsoF3sRLmcQ7cRTJiqopXj7sObeLf0zAIZ6zpuFSct26PjO3nivGKuKpN3wk0l9NV09qC%2FCnoE9Mau5JPACXYdJvoT7d8g8FR4nZ4k9F7CL%2FPPzucLgynJcrDBaTHUr36n3BxkfQ%2BI8K15%2FRTO6FSe9sIvncGoAgk1h5OD3keoD4I4Gq%2B2jpUeJPlKOrjABM%2BHN7FIir0cP%2FcJdQY7StwqHqH8Fa2ye5yF%2B1jkKFmWEUjNSN0QUdeHxnHU29P8Z%2FpVZssUEsul5wbNw6pAYeaSCzlTSDAwmTFxmRAaGMPbi8r8GOqUB6iJTvJUBi2wm1VV8vW%2FUqkdeY6uqJbr0RHIDxltBXDlD1lkV7UC1TGdAHgGxt4Jmf55CEbsBnjgSWU0ikI%2Bpu5lc%2Bh6dF45E6MB7g43ZzKfxfA%2ByauvgoX2fE4nQ9Oe%2BhBAdyeIvE9ZxSdxXrF1QJl0MsxTUL3F8MCy%2F4DrDPeBVD5oBRhPTkPz7fpltjo4Mo9Ej4gqZSl1vrA7Q%2BvivF3UNeLQ3&X-Amz-Signature=d282356fd7958a983efaffd44ec8d92add35c2ae96bfa514f06d54070e20751d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
