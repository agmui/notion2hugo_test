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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPWROK7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx252GmufFXdPNdLmaqq5WwJ4SBGsrjNXLUrYDr0iURAIgUJGgt%2BkANMOdIdWPt8ubPcVQy9kzRnakROlUvHJOTt8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR9mKR1XLswIxabxircA%2FYM%2FF7vrLvW34pIPivSlORJWxVlc8deV4%2F%2B%2FGJ6gjDEcV5CsI16rD2PS2fULuOR8OxQsirgpDZgkcy11ASs7W4lj6XPwMpEnMPkzxkpo8ieBX5GFno6zKmtOpNTzxDA8r8CceezTnlwjd3L61ElukabNDC2%2FTjx9pAOLIf%2B0sPH6Sr3AN5JmtWFodyCVKa4Ib0ZaL%2FK7FIUPEo1mSBbvtJ6I9KVDzSadmMa4pBG%2BulciQudd8ARUnh%2FcMQAj%2BL6VbckMfBSIF2qC4NlMUrm9BXimzX6WBKZlkWE5Xk6OgQG9s49AZvI%2FpYpO494hO793xUhTXnQCe3yIsHkLsbdIsNfAQsDgal3syZRiw2sZ0M%2B%2Bmpx5SKzfOWX3mFnx%2Fxd8sCc4F6k8GDToLwCLSL7jt3VFllJBUqETC0qva%2Fk6eSrVRHTXTxXjJimpSWJDKCkZ06zQFvve5mRKqGWYNZYuwTEFiRvsom4qxUKFktMXv5gUjiksQ766r3NYdymZ5t9x8DNE00WrJMFAILA21lN3kzaRWhnP%2Fyiew%2FkcMLqluAPHXpE7U9DFLrN1ZlC2Pa16k%2BfMVTe22FTgjS5D9UnDeRQSlNCTrIlbO79Je92cJyqgsLFEH4V%2FFkjbME7MNGIn8IGOqUBBQ%2FL%2F1FFpcKf63uN%2BECBXrUAUQWbjj4RO9MYwFvjA37D%2FFC1fUD8ISkfzniQlFtVFTDY9qw2rQdvSrPmfYYSIDEjEuG0k7AMMt94l84OAPEdDXuR%2FA92ObAi7O0zlNaG1jkmEs59ySer4RlwzusJIeZqrwXgoLw%2FIzia6zo6VekLuZPqFnbStTpCB0a%2BO5AjzhPt2lVOoneUerrgy9seKXScRi4U&X-Amz-Signature=06a57665a21f99da434c3dfeb3107f8de9412d41a62ef0b4f65b2ee074cee2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPWROK7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx252GmufFXdPNdLmaqq5WwJ4SBGsrjNXLUrYDr0iURAIgUJGgt%2BkANMOdIdWPt8ubPcVQy9kzRnakROlUvHJOTt8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR9mKR1XLswIxabxircA%2FYM%2FF7vrLvW34pIPivSlORJWxVlc8deV4%2F%2B%2FGJ6gjDEcV5CsI16rD2PS2fULuOR8OxQsirgpDZgkcy11ASs7W4lj6XPwMpEnMPkzxkpo8ieBX5GFno6zKmtOpNTzxDA8r8CceezTnlwjd3L61ElukabNDC2%2FTjx9pAOLIf%2B0sPH6Sr3AN5JmtWFodyCVKa4Ib0ZaL%2FK7FIUPEo1mSBbvtJ6I9KVDzSadmMa4pBG%2BulciQudd8ARUnh%2FcMQAj%2BL6VbckMfBSIF2qC4NlMUrm9BXimzX6WBKZlkWE5Xk6OgQG9s49AZvI%2FpYpO494hO793xUhTXnQCe3yIsHkLsbdIsNfAQsDgal3syZRiw2sZ0M%2B%2Bmpx5SKzfOWX3mFnx%2Fxd8sCc4F6k8GDToLwCLSL7jt3VFllJBUqETC0qva%2Fk6eSrVRHTXTxXjJimpSWJDKCkZ06zQFvve5mRKqGWYNZYuwTEFiRvsom4qxUKFktMXv5gUjiksQ766r3NYdymZ5t9x8DNE00WrJMFAILA21lN3kzaRWhnP%2Fyiew%2FkcMLqluAPHXpE7U9DFLrN1ZlC2Pa16k%2BfMVTe22FTgjS5D9UnDeRQSlNCTrIlbO79Je92cJyqgsLFEH4V%2FFkjbME7MNGIn8IGOqUBBQ%2FL%2F1FFpcKf63uN%2BECBXrUAUQWbjj4RO9MYwFvjA37D%2FFC1fUD8ISkfzniQlFtVFTDY9qw2rQdvSrPmfYYSIDEjEuG0k7AMMt94l84OAPEdDXuR%2FA92ObAi7O0zlNaG1jkmEs59ySer4RlwzusJIeZqrwXgoLw%2FIzia6zo6VekLuZPqFnbStTpCB0a%2BO5AjzhPt2lVOoneUerrgy9seKXScRi4U&X-Amz-Signature=b5daf54b2f939929e442d5d1465cb848b8f0874361e507160946a664fa5e3e18&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
