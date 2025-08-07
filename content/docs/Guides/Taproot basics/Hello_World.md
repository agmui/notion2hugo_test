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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=6eb9c63fc8c7f942b4a0c6f378472e60c9c234ed8a575a08bfe36851914fa859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=d5b10d8dc86bae0f00ab14484bc8a0b966359fa31d2af11c003cdfbf9492ce09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
