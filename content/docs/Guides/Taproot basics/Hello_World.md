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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKC7IXP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEKZkjsmk5KeJJ6gu%2BfzCF6bIkUBLat%2FvUaX7rnKJTYfAiEArH043SuOBgYTpzvTp2Yk1j7h6qp%2BOQZDpE1OCDjkkZwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKo%2BYQHJ3T2pgiO2RircA%2FURwCrcPI5rSXo9zfLjHVs1E2IdZplfpBfnXWH4tu5HZkx8SacA%2FpgDoRzzXEz7g5vxOIOzRX4pJX%2BnAFZW50I92hVsaMhuFcz5KNGL7GY0g8UGnfuTf9BX98roCt1lvqZwe9%2BsFF8GSYjtZOli9phnFKJTBby4bnqzXJPCaEo1XF0rOpvesDI2cHgZkGWZ%2F8HpJTCOkhHMMoAvd%2B%2B0tGVvuyOPSUSh5K2R6u1FgtnBfF6m%2FT0262a6rk3Ut3VKst%2B0RBVfEyCQ83yxa%2FE1OPJ167WDWsJSVBCAk1JkMZ1L9TPAvVbPBKuHVhj5Br%2B%2BLklvCU5Ajj75H7CIZdbnUaRIyWE3aHuIZ2gcrMitUi%2FlTzZR3qJeiwxx%2BnmEJk8OjzDPU7dXC9MURq1DSMMswQYz1S27fvs4gvTDOkeGp8gBhE%2F2vAzua6k7fyVzVRXIY3cyLSvTRG8QPMJUrapXEMkBNQfvDo6CHmolPG3LGa5McpcyI9%2BDNA6g4zXtOGF1femB2qtgvdRu9i%2F3A%2BWqbU3fpDQ%2F7aEwaI8XHegVyGFGANpl3iBjLBQvnPrilwx%2B1iud0vIXWF1k170cuC8nVO2ZHlpdgHjISbcs%2B5LTGwpfR4GfO7x%2F5f6ZXRUOMKqY5cIGOqUBMVKrCTGmPmt8E9JphKIfnHkOksdpaSBRPXTDFFu3h%2BO8xpX38F5mGJD5NQsy5QXJjzKPazul9FgHmu5dR1BAghMymViG9Nq374uMgVdnVR2wKqNHF2PXBuNZMquDgtEC96ASGrWPeidIh%2B9vg7OI0xxbzw5gbzDL10BcEXwBNZcERUUQ3yDd3gQXHRKwaLUtTYLxV3NUu67DVqTwo180GCs%2BRAaK&X-Amz-Signature=92bb7d9955635863836367ea8396db50b9997061d2bafac14a29136f5eaa4003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKC7IXP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEKZkjsmk5KeJJ6gu%2BfzCF6bIkUBLat%2FvUaX7rnKJTYfAiEArH043SuOBgYTpzvTp2Yk1j7h6qp%2BOQZDpE1OCDjkkZwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKo%2BYQHJ3T2pgiO2RircA%2FURwCrcPI5rSXo9zfLjHVs1E2IdZplfpBfnXWH4tu5HZkx8SacA%2FpgDoRzzXEz7g5vxOIOzRX4pJX%2BnAFZW50I92hVsaMhuFcz5KNGL7GY0g8UGnfuTf9BX98roCt1lvqZwe9%2BsFF8GSYjtZOli9phnFKJTBby4bnqzXJPCaEo1XF0rOpvesDI2cHgZkGWZ%2F8HpJTCOkhHMMoAvd%2B%2B0tGVvuyOPSUSh5K2R6u1FgtnBfF6m%2FT0262a6rk3Ut3VKst%2B0RBVfEyCQ83yxa%2FE1OPJ167WDWsJSVBCAk1JkMZ1L9TPAvVbPBKuHVhj5Br%2B%2BLklvCU5Ajj75H7CIZdbnUaRIyWE3aHuIZ2gcrMitUi%2FlTzZR3qJeiwxx%2BnmEJk8OjzDPU7dXC9MURq1DSMMswQYz1S27fvs4gvTDOkeGp8gBhE%2F2vAzua6k7fyVzVRXIY3cyLSvTRG8QPMJUrapXEMkBNQfvDo6CHmolPG3LGa5McpcyI9%2BDNA6g4zXtOGF1femB2qtgvdRu9i%2F3A%2BWqbU3fpDQ%2F7aEwaI8XHegVyGFGANpl3iBjLBQvnPrilwx%2B1iud0vIXWF1k170cuC8nVO2ZHlpdgHjISbcs%2B5LTGwpfR4GfO7x%2F5f6ZXRUOMKqY5cIGOqUBMVKrCTGmPmt8E9JphKIfnHkOksdpaSBRPXTDFFu3h%2BO8xpX38F5mGJD5NQsy5QXJjzKPazul9FgHmu5dR1BAghMymViG9Nq374uMgVdnVR2wKqNHF2PXBuNZMquDgtEC96ASGrWPeidIh%2B9vg7OI0xxbzw5gbzDL10BcEXwBNZcERUUQ3yDd3gQXHRKwaLUtTYLxV3NUu67DVqTwo180GCs%2BRAaK&X-Amz-Signature=1be98d4e02790aa05e066458c20e63c217f3fd3e30eaae56b00c7637956db0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
