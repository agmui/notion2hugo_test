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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGKG2CB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBAGoPmVvXXpjNXYZVqRpWATI74CTN9OnL0iD1voQaLAiAsVUsOamfbvK1o5M61bHNcjknZDu1IpKStoDFJ6xzf5yr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMG5ySSOt0n2xyrupZKtwD2Is5Uw4vXC4VaY4NdBx8IaBhmIbMhSZCZ%2Bpnxrd5pOIEV%2Bo3dFIXBEJgGoNGFOcFRbsJl0K3Ud2hdXOkctWtZY4vD2D05dhlcmjHIEdIoUtb2QMlYQQfR6MBp8MGwqmfgXOfvOXNXadb2sI06AnBfqAGTzzzwT9brFKfpoOBrK6hwb2dlfqG7dbE7rvOF6UWJ4SbpoA2ELsNSKV5YP1EgRKnL4CQfGPYODkE%2F8CY9yPVzbCExECYmmHTM4rMvcYkEoH%2FbRNSr%2FkJDQi3RzlNrDMYOBNBnTHT6PjU7PBDjd5%2FBwtqjmbl6jtENrg2TQCETc9Mjo0zgNQf5c6KKEpNJLAkPQP%2FzX15BhB3HYBCTwuX59oUe5IP2sPV5ZdV5vXn%2Fc6Ji%2F7UF2NJMDZeGtB2pSa%2B4cfr4CGy%2FXxAADfr0QNKa8u%2FJ9fFGt%2BrENq%2BYmjSayRTF%2BXn7OJI0DbVFRWqQ%2FHe0HOlg%2BW%2Blh68bHvIwL1ufAIVlN3ZPZ6dowHhXI0CeFZDoj%2BXMfajFymZzxsJFQ6juSEx1i8r8uxSivKClyKqFbV1IKe8XU0rh9%2FqWrzPt2MmkQYITFaen3y%2FO3aXuFtg%2B%2Fj9j6b4MMQUquD%2B0wC9u0WJXYjexoYIdVow1omTvwY6pgHiMvDX0XlkIUHuVg5dPLWfIkx2D9R7U14QHAHkNa1SsnqabSf%2BpT2Wg9Td1JbbSWZlQ%2Ft59OXo6N8igRSPa3HpjoVe2PfDRBkCRtfU8uHQpljY%2BbGQwNNlFXCAKUncHRK2Z6THdeGBTHLBe%2BdyX0KoMzMJ0LIvgbsM%2B9qADR8ZNr615%2FqL3dw63DztWXqcl9uAgY8%2Ba1ENEEEDZAPB47ul5iVNZvQq&X-Amz-Signature=b79e5f66c290b17b4c00c47aee5062b464c96df6d2a91b609b2cb38e130b60bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGKG2CB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBAGoPmVvXXpjNXYZVqRpWATI74CTN9OnL0iD1voQaLAiAsVUsOamfbvK1o5M61bHNcjknZDu1IpKStoDFJ6xzf5yr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMG5ySSOt0n2xyrupZKtwD2Is5Uw4vXC4VaY4NdBx8IaBhmIbMhSZCZ%2Bpnxrd5pOIEV%2Bo3dFIXBEJgGoNGFOcFRbsJl0K3Ud2hdXOkctWtZY4vD2D05dhlcmjHIEdIoUtb2QMlYQQfR6MBp8MGwqmfgXOfvOXNXadb2sI06AnBfqAGTzzzwT9brFKfpoOBrK6hwb2dlfqG7dbE7rvOF6UWJ4SbpoA2ELsNSKV5YP1EgRKnL4CQfGPYODkE%2F8CY9yPVzbCExECYmmHTM4rMvcYkEoH%2FbRNSr%2FkJDQi3RzlNrDMYOBNBnTHT6PjU7PBDjd5%2FBwtqjmbl6jtENrg2TQCETc9Mjo0zgNQf5c6KKEpNJLAkPQP%2FzX15BhB3HYBCTwuX59oUe5IP2sPV5ZdV5vXn%2Fc6Ji%2F7UF2NJMDZeGtB2pSa%2B4cfr4CGy%2FXxAADfr0QNKa8u%2FJ9fFGt%2BrENq%2BYmjSayRTF%2BXn7OJI0DbVFRWqQ%2FHe0HOlg%2BW%2Blh68bHvIwL1ufAIVlN3ZPZ6dowHhXI0CeFZDoj%2BXMfajFymZzxsJFQ6juSEx1i8r8uxSivKClyKqFbV1IKe8XU0rh9%2FqWrzPt2MmkQYITFaen3y%2FO3aXuFtg%2B%2Fj9j6b4MMQUquD%2B0wC9u0WJXYjexoYIdVow1omTvwY6pgHiMvDX0XlkIUHuVg5dPLWfIkx2D9R7U14QHAHkNa1SsnqabSf%2BpT2Wg9Td1JbbSWZlQ%2Ft59OXo6N8igRSPa3HpjoVe2PfDRBkCRtfU8uHQpljY%2BbGQwNNlFXCAKUncHRK2Z6THdeGBTHLBe%2BdyX0KoMzMJ0LIvgbsM%2B9qADR8ZNr615%2FqL3dw63DztWXqcl9uAgY8%2Ba1ENEEEDZAPB47ul5iVNZvQq&X-Amz-Signature=354b82a1c0254b4f379ff86a35a2c6f597bfcafb97c0a11d9273e1959052c0be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
