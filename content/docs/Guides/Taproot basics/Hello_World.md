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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFDLGJS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJKKiWCbVyjlWq04Omeh7jdoWp0gUQgifJ7ozJmcyQIgNcxqriaPgJj3UOTlAS8vVubCf6oK4vV25piqMglY934qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0k5rQAlGFtPXo01CrcA45KPgPyNW3ZZeeDri6GpfItnWs7TfQebNT9fkN%2FvjsgvFFm4IhsDV5LKBJYju7y8J0NJ6OY30kGqxPlzaaUaJOy8z75l%2FiXnKxyMUe6mIVrGrL1BCUNqboKpieou3yOkHytvKgieT8J2asHZulqMyRea%2Fy7kqKedhYHsPRnpNiL1XN7JsaxaAl68LyKAVMI%2FZiARyuWxR%2BHbfP5tufzIvOXNtz2CBRwsmqYdPTEmweaV%2BLVzLqMkpdQ%2BhwDMHBwNqu%2ByF1gmT5ALZfXm5xoRy4W6LuNyM0YAHLGBVYr3EtC7fT6Lmg2et7GHyK6pIm6jBxlFAr5KQU2HQhvCHMhWbVb%2F%2BruFTqFwxisGsXBXfqORDbN53YG%2BdXXX4a2%2BfN5IChxekVa5Xb408rWFjKcCws%2BAS9UQp4UO2uFt9JRTWIeRy0sL7IqQhK8uCeiYPX85oaubPyLGk5LDVlZrVtrMH3gyibPOJJRJj9wi3qAPFYnAwxD%2F8vNQy3%2BJmXpvyr06zGKbOysd0BS8iyKlIExOsIr4aOuwKP53l8OksKycpCsfZsByrao8%2FObTXVqEVZ7ESNo02rQVCapg9fq2m8k5oDsnpraoktKwUrcVR67xW6vt0T8qxccm2FujnEhMMDrisMGOqUBRoFfkcGCoCjAJMzYXT0G8Kggzf6C%2BFI93Rz0FmoZ%2B7OH2nYCws64xCl92iq4oY%2FjM2njfvaeNwSwv1u8UPOgIYVMVxWrnT5aS6EfeXMXCtgBFV8TMEAg2zQM7sqsi3XuBUO6JE3WZVTu1EiDw0Vv2NSryyC9z6cafrvb1OtpxaaaFpcGXnxBvxyMc0SsRvjZ6UYqNDwr%2BSJ6KF73fg%2FySxpwNTGm&X-Amz-Signature=cecc73d728c22f0762ddac105b907610240a6163471621ecbc5eaf79d5646d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VFDLGJS%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJKKiWCbVyjlWq04Omeh7jdoWp0gUQgifJ7ozJmcyQIgNcxqriaPgJj3UOTlAS8vVubCf6oK4vV25piqMglY934qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0k5rQAlGFtPXo01CrcA45KPgPyNW3ZZeeDri6GpfItnWs7TfQebNT9fkN%2FvjsgvFFm4IhsDV5LKBJYju7y8J0NJ6OY30kGqxPlzaaUaJOy8z75l%2FiXnKxyMUe6mIVrGrL1BCUNqboKpieou3yOkHytvKgieT8J2asHZulqMyRea%2Fy7kqKedhYHsPRnpNiL1XN7JsaxaAl68LyKAVMI%2FZiARyuWxR%2BHbfP5tufzIvOXNtz2CBRwsmqYdPTEmweaV%2BLVzLqMkpdQ%2BhwDMHBwNqu%2ByF1gmT5ALZfXm5xoRy4W6LuNyM0YAHLGBVYr3EtC7fT6Lmg2et7GHyK6pIm6jBxlFAr5KQU2HQhvCHMhWbVb%2F%2BruFTqFwxisGsXBXfqORDbN53YG%2BdXXX4a2%2BfN5IChxekVa5Xb408rWFjKcCws%2BAS9UQp4UO2uFt9JRTWIeRy0sL7IqQhK8uCeiYPX85oaubPyLGk5LDVlZrVtrMH3gyibPOJJRJj9wi3qAPFYnAwxD%2F8vNQy3%2BJmXpvyr06zGKbOysd0BS8iyKlIExOsIr4aOuwKP53l8OksKycpCsfZsByrao8%2FObTXVqEVZ7ESNo02rQVCapg9fq2m8k5oDsnpraoktKwUrcVR67xW6vt0T8qxccm2FujnEhMMDrisMGOqUBRoFfkcGCoCjAJMzYXT0G8Kggzf6C%2BFI93Rz0FmoZ%2B7OH2nYCws64xCl92iq4oY%2FjM2njfvaeNwSwv1u8UPOgIYVMVxWrnT5aS6EfeXMXCtgBFV8TMEAg2zQM7sqsi3XuBUO6JE3WZVTu1EiDw0Vv2NSryyC9z6cafrvb1OtpxaaaFpcGXnxBvxyMc0SsRvjZ6UYqNDwr%2BSJ6KF73fg%2FySxpwNTGm&X-Amz-Signature=396f93dc5aa0380a3743c9e90c04281c58095a4091d41ab5529e95cff4a2c1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
