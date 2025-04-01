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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6M67B4R%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICG%2F5nKQe5LhVEE0VY8vXTrkpCCHQuh72NDJ9KRJMHmEAiEAwo0R8PZ%2FAdD%2F%2FUICKQxnbY8LWmnqb7FRolAOUEkX8hEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLwjblz%2B0hFpeOEnircA3tt0tK44pYcTr47Mbq8ALvPyoAmTVdwTnSz2ce0deGzokMcDwkVfZ5bXCH8aWq8ZEucsydveATd4m1RLJmT1E21b1TW4PwyQ68oQIhvpfeZlep2WYbyC%2FEz6gWGtmAXbUN2EwbvdyCCrrzaM7Y1JU3VlNtZiSYqDru5RW3WBtymSJ2Yb5QKtjDuTT4wDLtlKPWr1k%2Fo3KdpmnOoKueI8%2F6vt1J9a3DLg7lqd7aWNHLduNl3Mtg%2BuQlpI1rQtNZY7KmaS7qNA%2BeTt2fpoTfUm700ybD4iT6U8rTDbWyLaOyXrM72Qa0T6Af6ngPsewzXvzQ0gVU%2B63%2FsRQpWWrMha4jbg5lF%2BRjJE5TFS4PLgxT%2FKWSNp4BBJCsqVhVZ%2BxtPwF4rMUFSbhwOLp3pIjCOBy5Y2pLAyOeyNWPe0tg9pBCyf%2FnedorAXoo8kdsDwzSxUEXkxyNr5K7MlvCDun%2BNJAqOwTDhTz9FjTSkNR7rji%2B0PDBkjPPAnu1WUREA2Nr4QW%2FEEBdPdXWBDnnvfmg2gRDhbOZpmV1rK7mKBx643QUga7EROHXCtVa2JEqAyi6pmnAZ%2BwlYysWmUYzHcgz2uRitISe%2FdHkHhizZ1Hj0qoBTd18hnnv0rbMOmEoxMP3ZrL8GOqUBCB7%2BsuGNiEZN3FgaX84p%2BhV1glAwg3qz70RFeZ7S9AG4kDtN9Eq1fpdf7ciHJF6lx0Dn4%2FBUJgvxQBKjayRFwlONwwlguYntUnqi%2FS3%2BHlbvrbBgTwJ7ior8Y8Jrr1fqKxH0%2Bw2S5NR5OqwhyoGB2cxZYagQd9WiB9uRILtLtoNsPqGHTZ2%2BQSTiTTrDIbaRa5ppOBT88wcl7OMMzYBKVinFjU8I&X-Amz-Signature=d9572dd3ac8d439046a773fd5a91d717a47b1eddf27833eb7fcd1f069a2e1268&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6M67B4R%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICG%2F5nKQe5LhVEE0VY8vXTrkpCCHQuh72NDJ9KRJMHmEAiEAwo0R8PZ%2FAdD%2F%2FUICKQxnbY8LWmnqb7FRolAOUEkX8hEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLwjblz%2B0hFpeOEnircA3tt0tK44pYcTr47Mbq8ALvPyoAmTVdwTnSz2ce0deGzokMcDwkVfZ5bXCH8aWq8ZEucsydveATd4m1RLJmT1E21b1TW4PwyQ68oQIhvpfeZlep2WYbyC%2FEz6gWGtmAXbUN2EwbvdyCCrrzaM7Y1JU3VlNtZiSYqDru5RW3WBtymSJ2Yb5QKtjDuTT4wDLtlKPWr1k%2Fo3KdpmnOoKueI8%2F6vt1J9a3DLg7lqd7aWNHLduNl3Mtg%2BuQlpI1rQtNZY7KmaS7qNA%2BeTt2fpoTfUm700ybD4iT6U8rTDbWyLaOyXrM72Qa0T6Af6ngPsewzXvzQ0gVU%2B63%2FsRQpWWrMha4jbg5lF%2BRjJE5TFS4PLgxT%2FKWSNp4BBJCsqVhVZ%2BxtPwF4rMUFSbhwOLp3pIjCOBy5Y2pLAyOeyNWPe0tg9pBCyf%2FnedorAXoo8kdsDwzSxUEXkxyNr5K7MlvCDun%2BNJAqOwTDhTz9FjTSkNR7rji%2B0PDBkjPPAnu1WUREA2Nr4QW%2FEEBdPdXWBDnnvfmg2gRDhbOZpmV1rK7mKBx643QUga7EROHXCtVa2JEqAyi6pmnAZ%2BwlYysWmUYzHcgz2uRitISe%2FdHkHhizZ1Hj0qoBTd18hnnv0rbMOmEoxMP3ZrL8GOqUBCB7%2BsuGNiEZN3FgaX84p%2BhV1glAwg3qz70RFeZ7S9AG4kDtN9Eq1fpdf7ciHJF6lx0Dn4%2FBUJgvxQBKjayRFwlONwwlguYntUnqi%2FS3%2BHlbvrbBgTwJ7ior8Y8Jrr1fqKxH0%2Bw2S5NR5OqwhyoGB2cxZYagQd9WiB9uRILtLtoNsPqGHTZ2%2BQSTiTTrDIbaRa5ppOBT88wcl7OMMzYBKVinFjU8I&X-Amz-Signature=e02749737d98ecaa1756f89d9d9f467281406b935c38fb4176b63b67a832bbf3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
