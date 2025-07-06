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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEBPE3Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCFEE%2FjQenLZB7MQR0UGaK5LulOuXbYLm4GmKjR%2FdWoJAIgSiUaxyBFJDMrhsqhtHYA0I8nijwgofBuCGeZQs9jZkMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDE9FR8%2B9MFT%2B4efq8ircA0Z2VEjpSwr0RFShjnuPSrYnBrsaBVlf2x6L51TGW8NxXBPxQyqAFqEseVMw4DtPyySM%2F12Wq2A0YESxOZNAbc31WvSBQDnKkPOLFYn4tlk8IfE4F1OY3REVaBcLjEtIwMuxn9CMHcm6GEIe%2BnzMGTPfG87R5USDedOA3WCCXgTSU92ExSRjmGDnb3jfnD58bBIa1nBq9fzD%2BboGt4uiFJbopfIcY1PVfdt6%2FuYPwxcwkAZfUCrjcqelFWHuOOAzVERRsGi0QB2%2F0m%2BBnxq%2BDIsRCs4eE51RFYBrUBZKtkFBYs4EhQDEmkHSYNB%2FlhsOA66QV%2FNuIxUBYFCc%2FuIsHAaqq%2BPxB9iJmZeKBJrG79YqxHbqfFw8ZCnhqDhKPJL%2BUKdicqChplqtj9h7SHnv57KClK23Su6ECBb3f3F9sEQKJiUqRf6vuRnB9PTETUrfmnbfORQd2DMbZdT7AAqI%2FkikgUlsGEBuhQ76VVdqqKxgezDgm%2BbK6w%2FA2SNiCxfxW7kJ3b71NmvNmZa%2BguHppuhi6ZqVDHvfoTMPVQLEgHfiJe9yOk2aIRCAR0DzUZA52SC%2BikZ6xTYIziqMKfAHT%2FA%2FPyVz6GftYlLRfIfRgpQN69nXnwknayh3bRcOMMTYqcMGOqUBCI2598dTvX3%2FfNSG3RxEOeRkS9XsAlwRBci%2BfsuJQcfH8butIWzj2ghucbfHMNBfuvbwVZNdu1Ikyat8qb%2FOY8LqMA0kXSoUWULcDPb7sPncf%2BN3WvsP1sZgxs%2BEJgsq4J6ykFOZ%2FPVe5bpx%2FwrbKHZbkuZ%2Bcje%2F%2FpZvF4Et8X3dQUorSJzu7zS1ABCqlpwplzUi1fgCSwKA3YIIFDMPB9IQ1BGz&X-Amz-Signature=f5a68903c9be4a95c512ebe939e1af6152bf40cc031c91290d21b6cbc24b63ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEBPE3Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCFEE%2FjQenLZB7MQR0UGaK5LulOuXbYLm4GmKjR%2FdWoJAIgSiUaxyBFJDMrhsqhtHYA0I8nijwgofBuCGeZQs9jZkMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDE9FR8%2B9MFT%2B4efq8ircA0Z2VEjpSwr0RFShjnuPSrYnBrsaBVlf2x6L51TGW8NxXBPxQyqAFqEseVMw4DtPyySM%2F12Wq2A0YESxOZNAbc31WvSBQDnKkPOLFYn4tlk8IfE4F1OY3REVaBcLjEtIwMuxn9CMHcm6GEIe%2BnzMGTPfG87R5USDedOA3WCCXgTSU92ExSRjmGDnb3jfnD58bBIa1nBq9fzD%2BboGt4uiFJbopfIcY1PVfdt6%2FuYPwxcwkAZfUCrjcqelFWHuOOAzVERRsGi0QB2%2F0m%2BBnxq%2BDIsRCs4eE51RFYBrUBZKtkFBYs4EhQDEmkHSYNB%2FlhsOA66QV%2FNuIxUBYFCc%2FuIsHAaqq%2BPxB9iJmZeKBJrG79YqxHbqfFw8ZCnhqDhKPJL%2BUKdicqChplqtj9h7SHnv57KClK23Su6ECBb3f3F9sEQKJiUqRf6vuRnB9PTETUrfmnbfORQd2DMbZdT7AAqI%2FkikgUlsGEBuhQ76VVdqqKxgezDgm%2BbK6w%2FA2SNiCxfxW7kJ3b71NmvNmZa%2BguHppuhi6ZqVDHvfoTMPVQLEgHfiJe9yOk2aIRCAR0DzUZA52SC%2BikZ6xTYIziqMKfAHT%2FA%2FPyVz6GftYlLRfIfRgpQN69nXnwknayh3bRcOMMTYqcMGOqUBCI2598dTvX3%2FfNSG3RxEOeRkS9XsAlwRBci%2BfsuJQcfH8butIWzj2ghucbfHMNBfuvbwVZNdu1Ikyat8qb%2FOY8LqMA0kXSoUWULcDPb7sPncf%2BN3WvsP1sZgxs%2BEJgsq4J6ykFOZ%2FPVe5bpx%2FwrbKHZbkuZ%2Bcje%2F%2FpZvF4Et8X3dQUorSJzu7zS1ABCqlpwplzUi1fgCSwKA3YIIFDMPB9IQ1BGz&X-Amz-Signature=3d1466d9eb9c62147df56e8fbc92a1bbef3abf72fdb17e5a412fc9885b5bed7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
