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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDNXT3A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpknxKq1X9877v2uH3dbUJj1YxRoGtWyqfr3b0fsXMOQIgLX5sYcGeJUE7n3qQlz9svDVNueONruWgsFH9XG17a6IqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNF%2BkR8DWRQRbtEo7SrcA8ZAxpbxNBlzp93CPJVb73kSHq2bYFimNuqG%2FNXH30m%2B1J94t5anoYvW62AZZdMENBzgHClbhwDlB%2FMNMIeB2ADYtDgdJnEepNGFvZEnLCQ2OG4YtwrlUuZaElLHmBK6JrHixyPKuM5OwTJFAnFzLfQdkXcwqEwF%2Fv91AKIheXA9jlkJ3zBpLghtlUEQJ4j03kef0FJEuWPFrKJqKwyQOkJcMCs4spZZbydIKLlc7IlULF5%2FqkZFRc70kG94ezBl626GJ0bnx5etBHohDtoH4KtxwoNP1hudW0dqmve7VlFuEBTPX0BOOsaAgbUHe6ACBAaaVwlLF8tJqNz0xrV3zVzVkDIcW4R1oOrnJXGKz1UGCLuE2XgQbED4py6%2Bq1poq2N71TdRz%2FI0iyvuKt5R5D1EPfY%2Ba48B9Td2xFyfXuI2IYhISNMfHFS%2FClGlg5kDB%2FpxYm2I0h2HuKFslW%2BwvTBzF31O3Q%2FkRtuI3%2BSzhbPd2PNZ%2BRBlQhtVbzDk9rgtiRBNl6jxYHPVaqrXECt7P%2FIMDDmh44CROE1fUUMAOnds0WLMKLtMP%2Fnwr445PucL48VAEIUYBN%2BYG8MsanihuKEAB%2FgzmzdhMPoskfa18JP9OIyPyb7iso7oDJi1MIK50L4GOqUB30Vg7nvu6%2FFZoJ7YVzxrE5yZSNoRZ%2BZN7PE90GvEdGaufPGN97f3E6kgN3hG%2B31Anv9BGr8V9Sp%2BrHjmCR%2F4LtrLhoy4I4bYZlWCXGM%2B2MwXYfJvZ3Idgu1ggcCocn2eUpDSI60ywdbj04M9wEZ2lBE6sHCmvNaRtlcQhrYPBS5FvIfkBgMaLAEuE%2Bcv%2BoyjktN6KkXbVpxfkQWuArBkV8I1ikXX&X-Amz-Signature=30daec4fd8dbc03afd5fcf942b079d60148e9f5a492dfb84d6586d0f867f1ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDNXT3A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpknxKq1X9877v2uH3dbUJj1YxRoGtWyqfr3b0fsXMOQIgLX5sYcGeJUE7n3qQlz9svDVNueONruWgsFH9XG17a6IqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNF%2BkR8DWRQRbtEo7SrcA8ZAxpbxNBlzp93CPJVb73kSHq2bYFimNuqG%2FNXH30m%2B1J94t5anoYvW62AZZdMENBzgHClbhwDlB%2FMNMIeB2ADYtDgdJnEepNGFvZEnLCQ2OG4YtwrlUuZaElLHmBK6JrHixyPKuM5OwTJFAnFzLfQdkXcwqEwF%2Fv91AKIheXA9jlkJ3zBpLghtlUEQJ4j03kef0FJEuWPFrKJqKwyQOkJcMCs4spZZbydIKLlc7IlULF5%2FqkZFRc70kG94ezBl626GJ0bnx5etBHohDtoH4KtxwoNP1hudW0dqmve7VlFuEBTPX0BOOsaAgbUHe6ACBAaaVwlLF8tJqNz0xrV3zVzVkDIcW4R1oOrnJXGKz1UGCLuE2XgQbED4py6%2Bq1poq2N71TdRz%2FI0iyvuKt5R5D1EPfY%2Ba48B9Td2xFyfXuI2IYhISNMfHFS%2FClGlg5kDB%2FpxYm2I0h2HuKFslW%2BwvTBzF31O3Q%2FkRtuI3%2BSzhbPd2PNZ%2BRBlQhtVbzDk9rgtiRBNl6jxYHPVaqrXECt7P%2FIMDDmh44CROE1fUUMAOnds0WLMKLtMP%2Fnwr445PucL48VAEIUYBN%2BYG8MsanihuKEAB%2FgzmzdhMPoskfa18JP9OIyPyb7iso7oDJi1MIK50L4GOqUB30Vg7nvu6%2FFZoJ7YVzxrE5yZSNoRZ%2BZN7PE90GvEdGaufPGN97f3E6kgN3hG%2B31Anv9BGr8V9Sp%2BrHjmCR%2F4LtrLhoy4I4bYZlWCXGM%2B2MwXYfJvZ3Idgu1ggcCocn2eUpDSI60ywdbj04M9wEZ2lBE6sHCmvNaRtlcQhrYPBS5FvIfkBgMaLAEuE%2Bcv%2BoyjktN6KkXbVpxfkQWuArBkV8I1ikXX&X-Amz-Signature=93f0f0d2d7f8ce22dbbbf497dffcfa315cb5b4af5b1778217e13a147ed8e74fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
