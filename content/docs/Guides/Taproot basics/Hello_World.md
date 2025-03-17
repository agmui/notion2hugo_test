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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTLSUIQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXOw8tmmYV925uvEuSEadR0ISXnwLvzHufS9CTNLVfjwIgPM%2BiEXCPdGq53uBwRMJNgy0FzgI8WtcnDbCwRXZDiJAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF07%2FRu6lvVS79DenircA27ge6ijAamvE9tG%2BypTyzwbgAxPY7ChUfz7zpOqfEuNfsqCbAJqgyfl7ORZBSqNoZ8EiqqykpmdtfSqwocimckUvSKM5vZYY5hUlyCWcdRwkPaEtTReMc368UQRzl9Q5yBNYHXsJYrkxkf3F6Hj2vtcHIhP62UaKaPEsO8ZBaSyvtddXTSRZj%2F5RyQ%2Fxa8pa4gtEidTY27ZPjscJQqt5xmzRGnu%2B4%2Bn%2FGoS0WXl76Wesvybq0RDFz0L9%2BXBXfySdo9vgymh%2FXnBidv2akKVQy5p8nup%2B4BfhUy5GBasbEhfWDHvrqMl6PeAMPvd1QjQGcxGYHnS2RHoPsMPJYg3vqcsLqlhJPiwWBi4D9Fipz6jizwPbRx9nPbH1fjlTapQk1DvZa%2BCGr4NeZusFJ1lZB1Aqujjh%2BwxucsjmfmXosVOsEy5JuReE%2FpmFIk1dGwblsw%2F9XcmQZeFwZ7G2tbCFP2AU6nDndwv%2FsQ3soW1uiyq%2BAKmS9yWKToc4pRZatab4%2BVmheog3obu1ImLJ30LQb80tXkg5hDmofuljLjCEW4UCIiAJfceRZdNzNcvacajNlyfKEcW%2BGGtJwXwaywg9Y%2FFXIZpR7TRM11%2FEaLd6Y1ME9kkgBfgt%2BTOAXADMIKd3b4GOqUBmo4KobB3ZTcMctu8hgevSHpEnhTRG3av3JfT8RvpNhkFrzpNpb8o%2BZedPtO9i1VF96mbXl416ex%2BLn9QuzB4UvQkSHv6fobK%2BXcky6ToxcmB%2FHr4RHAgsJNXPuLd3MM5K3shvXOMO9xxM0l%2BiGcob2Dxcljw7%2FE018HDPmtK4eCXcGg2zrBLxg1pO%2Bbf%2Fs%2BPRo6j9RvBOTf9t59pIFtGhJeUnGkU&X-Amz-Signature=6dfa2e738a21c80d45bf00bc49811cc05808908d514d69564564b5cf88fac585&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTLSUIQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXOw8tmmYV925uvEuSEadR0ISXnwLvzHufS9CTNLVfjwIgPM%2BiEXCPdGq53uBwRMJNgy0FzgI8WtcnDbCwRXZDiJAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF07%2FRu6lvVS79DenircA27ge6ijAamvE9tG%2BypTyzwbgAxPY7ChUfz7zpOqfEuNfsqCbAJqgyfl7ORZBSqNoZ8EiqqykpmdtfSqwocimckUvSKM5vZYY5hUlyCWcdRwkPaEtTReMc368UQRzl9Q5yBNYHXsJYrkxkf3F6Hj2vtcHIhP62UaKaPEsO8ZBaSyvtddXTSRZj%2F5RyQ%2Fxa8pa4gtEidTY27ZPjscJQqt5xmzRGnu%2B4%2Bn%2FGoS0WXl76Wesvybq0RDFz0L9%2BXBXfySdo9vgymh%2FXnBidv2akKVQy5p8nup%2B4BfhUy5GBasbEhfWDHvrqMl6PeAMPvd1QjQGcxGYHnS2RHoPsMPJYg3vqcsLqlhJPiwWBi4D9Fipz6jizwPbRx9nPbH1fjlTapQk1DvZa%2BCGr4NeZusFJ1lZB1Aqujjh%2BwxucsjmfmXosVOsEy5JuReE%2FpmFIk1dGwblsw%2F9XcmQZeFwZ7G2tbCFP2AU6nDndwv%2FsQ3soW1uiyq%2BAKmS9yWKToc4pRZatab4%2BVmheog3obu1ImLJ30LQb80tXkg5hDmofuljLjCEW4UCIiAJfceRZdNzNcvacajNlyfKEcW%2BGGtJwXwaywg9Y%2FFXIZpR7TRM11%2FEaLd6Y1ME9kkgBfgt%2BTOAXADMIKd3b4GOqUBmo4KobB3ZTcMctu8hgevSHpEnhTRG3av3JfT8RvpNhkFrzpNpb8o%2BZedPtO9i1VF96mbXl416ex%2BLn9QuzB4UvQkSHv6fobK%2BXcky6ToxcmB%2FHr4RHAgsJNXPuLd3MM5K3shvXOMO9xxM0l%2BiGcob2Dxcljw7%2FE018HDPmtK4eCXcGg2zrBLxg1pO%2Bbf%2Fs%2BPRo6j9RvBOTf9t59pIFtGhJeUnGkU&X-Amz-Signature=4635dc0222978667e34a337d21a92a909e5fe9ee52a0a7340bfd283b293e323f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
