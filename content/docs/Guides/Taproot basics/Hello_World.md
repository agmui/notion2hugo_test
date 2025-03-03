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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KG3WXE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl1oZcELmkT52%2FqHmEqPlOG2NOsj%2BiCJJ%2FtVQ5Hdk6tAiEA%2B18cJ4ZRt2FNWf9%2FDFe9HvFeRzHZDPqKqkdTfvYdm1YqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfGN6YLg9LgoDlc%2BSrcAwT6%2Feo%2F8BBucyywUSWrUjMBhNbTug6oAD20ybc85Pp919fdPw7Tc46%2FQ%2F4ZnF22HNrtBFCuO8LvmuVpVrrIr0PdC%2BA27RWy4WFjianoVi3xM7LH7Hq0yX91kGqpQ%2FkzsoZIxzOYYf3rmlQ1zPLPp3ThZFWASuvztpMgsjrv%2BpA8WdXu77inTHQG6YtQykXz23cmGzqlMPenw1WCLtj422rFeD74molgCkMiawuTOSNcA%2Fol%2BhEq%2BHUD5NRlzyDREbCsnXdcjIvaZBZIdFTlNv7B4kDd%2Bx8f2ozsCPmyzbIIH2uymWKl1331dCHwnXpwzdqMCKSBOd03iC8JSc3pOkA6kx%2FKFZN%2B6N0aYP3col8E%2BFfYpTk102R1rfxok1jM35cerA%2BbKgIHpCfU46ltjFkBzglKwAt9bxt0M9oH22o0MXVsflB%2BkqYmYIw5m%2B%2Fkj72jkV0FBR5t9W9OBOAqWv4MGuZHA2tr8BF12oVvGCcnLA%2B%2BGEKG%2F5HDdo0v8w3kX7NC7broKoFEaS0BrwverdTxzucV9wOgFLrrH0Q7Yo%2B67M8uu7LDqonTZYB%2BwdXZIKTCjWW27MEn7mIlwiyzpJdeHfMRyjEhoAoHE6MU8TOROiXJ14RnAobHvukqMOrZmL4GOqUBm9wtLZzE2AUzySgqZ3DpWv%2Fdf7eLzJi9bPMQtZL%2FmaYDhYHAeXGGLmrdpp2Ct8R6Ua9iJOW458bO128Pz%2BhHIG%2BJkxHDFwbrMJxCD7vA9CTtZLcqIiegoK2Utk9nFbGSLUpiP3AfPzTXZ16GWJ08eiT%2F%2F6%2BzRR4PtleHojeDDHH5%2Blz9SeHqOld6%2FVj2EkoV0NyZBWdMWC5dpWYzuDyzTzpgslzT&X-Amz-Signature=4dba744d4980132c8671b1162997cbd447d8132803113e535b2be2e0dceee9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KG3WXE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl1oZcELmkT52%2FqHmEqPlOG2NOsj%2BiCJJ%2FtVQ5Hdk6tAiEA%2B18cJ4ZRt2FNWf9%2FDFe9HvFeRzHZDPqKqkdTfvYdm1YqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfGN6YLg9LgoDlc%2BSrcAwT6%2Feo%2F8BBucyywUSWrUjMBhNbTug6oAD20ybc85Pp919fdPw7Tc46%2FQ%2F4ZnF22HNrtBFCuO8LvmuVpVrrIr0PdC%2BA27RWy4WFjianoVi3xM7LH7Hq0yX91kGqpQ%2FkzsoZIxzOYYf3rmlQ1zPLPp3ThZFWASuvztpMgsjrv%2BpA8WdXu77inTHQG6YtQykXz23cmGzqlMPenw1WCLtj422rFeD74molgCkMiawuTOSNcA%2Fol%2BhEq%2BHUD5NRlzyDREbCsnXdcjIvaZBZIdFTlNv7B4kDd%2Bx8f2ozsCPmyzbIIH2uymWKl1331dCHwnXpwzdqMCKSBOd03iC8JSc3pOkA6kx%2FKFZN%2B6N0aYP3col8E%2BFfYpTk102R1rfxok1jM35cerA%2BbKgIHpCfU46ltjFkBzglKwAt9bxt0M9oH22o0MXVsflB%2BkqYmYIw5m%2B%2Fkj72jkV0FBR5t9W9OBOAqWv4MGuZHA2tr8BF12oVvGCcnLA%2B%2BGEKG%2F5HDdo0v8w3kX7NC7broKoFEaS0BrwverdTxzucV9wOgFLrrH0Q7Yo%2B67M8uu7LDqonTZYB%2BwdXZIKTCjWW27MEn7mIlwiyzpJdeHfMRyjEhoAoHE6MU8TOROiXJ14RnAobHvukqMOrZmL4GOqUBm9wtLZzE2AUzySgqZ3DpWv%2Fdf7eLzJi9bPMQtZL%2FmaYDhYHAeXGGLmrdpp2Ct8R6Ua9iJOW458bO128Pz%2BhHIG%2BJkxHDFwbrMJxCD7vA9CTtZLcqIiegoK2Utk9nFbGSLUpiP3AfPzTXZ16GWJ08eiT%2F%2F6%2BzRR4PtleHojeDDHH5%2Blz9SeHqOld6%2FVj2EkoV0NyZBWdMWC5dpWYzuDyzTzpgslzT&X-Amz-Signature=14a8782a9cc3d46dc2b3bc70f5a80feefeb2b93b147454bc7439c227baa15c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
