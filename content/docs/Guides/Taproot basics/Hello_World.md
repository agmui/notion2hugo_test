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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLP7WBD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEpGmhytY7rdew0%2BC5Cj6wQmsRz4hyrv%2FtFqCn8MwGVuAiEAmXVuhc9xg24kimsFH5pCyhd7fnRiZYoCOgOcX%2FfXka0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBYJ8Qx1WjLQg736TCrcA5BIzBn1TDOsCDBpn%2BQtmpK7Ao4QHp%2FJEqbjUFbG7NV0Bxe6h8r7gWt1C5ll81p%2FJA9eu6FhDdImV97XroYJses6z0BzKie%2F8oDi%2FdVZubBOl4t1MiqQFPtvW19odaSpzBhUHrsKtHpFls%2FW3zAVuPL%2F0q%2F2wE0rQPgYQzjOoU%2FMvxzvSDneAS90ArNqCl3IgovPeu0AdGvgNwlW6T9gaCrrqRid5hoKVHz7alT8YptZUM9qZ1ELbjkaUrvAR7GkR2tVYtHRgZzTm%2FAqKkOPO0AiQMz5UDr1XgQbW15TFz2W5wCsHGJFUXshgQp4Vr6wacSuRab%2ByXxecfgHG7XR4%2BwGwO9%2FVaY5xMvkUTcwBh83K7Etq0KiAVc83pvk1eNmEorvLmg7yNYJQDgX6U5eyeZspJ6wmA%2BDfBNxnBDjCRk9j8FfYS19cL9ie50wHh095ss7umgl4bBOUy1JvXPTeX51w4prTudVJg5jItUUcGxZ41QXURNNlp4uR2YRW0M2bdFXqCbdtY%2F5AlkdhWaxt%2BzjGx7xwLBdcoo%2Bt1PzskIjP38efSOsu1yMH31ey%2FfO1KJMwQT%2BAkScLSYA%2Bz9YuYzWxkVKLWkz%2BWNJmIOvQC8PKeuMcsFNZeAsntr7MPWDiL0GOqUBw%2FgY2YP5dftm7qUbBED8DjtcQ0pZ0UpsZP45NnwXPAvhh8T8xFHP2cCK869nbcjYRMM2%2BEGHMTbUr37YyINbk3tpjGfZJO704pOXT3omM%2FKJPKvKDKxtIupNEiLOvojdSgBqnZBaXUUHK2JsE2VZrlFNIkJVJ5hEjAGpenU7D3LOvDK4GRSxlGVXSuKMTVABBf2uSOH0UMRE4CGxIQfN5uY4j6Dv&X-Amz-Signature=df5118d8d805f3081b4d56a42e86c2ae372a8c2f9d45fc352570fce9fb531489&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLP7WBD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEpGmhytY7rdew0%2BC5Cj6wQmsRz4hyrv%2FtFqCn8MwGVuAiEAmXVuhc9xg24kimsFH5pCyhd7fnRiZYoCOgOcX%2FfXka0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBYJ8Qx1WjLQg736TCrcA5BIzBn1TDOsCDBpn%2BQtmpK7Ao4QHp%2FJEqbjUFbG7NV0Bxe6h8r7gWt1C5ll81p%2FJA9eu6FhDdImV97XroYJses6z0BzKie%2F8oDi%2FdVZubBOl4t1MiqQFPtvW19odaSpzBhUHrsKtHpFls%2FW3zAVuPL%2F0q%2F2wE0rQPgYQzjOoU%2FMvxzvSDneAS90ArNqCl3IgovPeu0AdGvgNwlW6T9gaCrrqRid5hoKVHz7alT8YptZUM9qZ1ELbjkaUrvAR7GkR2tVYtHRgZzTm%2FAqKkOPO0AiQMz5UDr1XgQbW15TFz2W5wCsHGJFUXshgQp4Vr6wacSuRab%2ByXxecfgHG7XR4%2BwGwO9%2FVaY5xMvkUTcwBh83K7Etq0KiAVc83pvk1eNmEorvLmg7yNYJQDgX6U5eyeZspJ6wmA%2BDfBNxnBDjCRk9j8FfYS19cL9ie50wHh095ss7umgl4bBOUy1JvXPTeX51w4prTudVJg5jItUUcGxZ41QXURNNlp4uR2YRW0M2bdFXqCbdtY%2F5AlkdhWaxt%2BzjGx7xwLBdcoo%2Bt1PzskIjP38efSOsu1yMH31ey%2FfO1KJMwQT%2BAkScLSYA%2Bz9YuYzWxkVKLWkz%2BWNJmIOvQC8PKeuMcsFNZeAsntr7MPWDiL0GOqUBw%2FgY2YP5dftm7qUbBED8DjtcQ0pZ0UpsZP45NnwXPAvhh8T8xFHP2cCK869nbcjYRMM2%2BEGHMTbUr37YyINbk3tpjGfZJO704pOXT3omM%2FKJPKvKDKxtIupNEiLOvojdSgBqnZBaXUUHK2JsE2VZrlFNIkJVJ5hEjAGpenU7D3LOvDK4GRSxlGVXSuKMTVABBf2uSOH0UMRE4CGxIQfN5uY4j6Dv&X-Amz-Signature=55233cc760c1f425953146e69791c72739b9efbcf633f6e9c5a2ebab49fd8fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
