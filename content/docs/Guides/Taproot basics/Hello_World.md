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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQPUG6LL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC1BLhP%2F2DBZzof7s4HAVjE76Un9E0Y%2BA9AXZbprx3jFgIhAOMmzR16sPHJc9NfvkishuVyHvlqj9kEBaPDZT3TAsQvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjPB80pdcbOd8lHDsq3APo6JErhL3a%2F9%2FAfwW2giMHvrNZ7692j7YwmQGBtmrYHbkzEbFetpifwwYI7deLMGuR4lSXJC%2B%2Bt63GY4H2RbwZobpz1pttYuBIIPSLE3FXRmGijJ6LcbTb1zXdzFMpaZdC3gljyPp7%2FpCnrEDb9ZRaD%2FEC%2FJxureBa993f0eUnuhVDt0dcrn1yosaUUqJJj4LK6bJYal22jqPZX7aTa7009%2BA3EfBUTMAT5rT2ZyeNuKS8DeO92Gct6l1JKctWZ1nlwuPsym6QQ6WqSujReKu49w6vmoIWj7rh%2B1qrMr97iH32V%2FH2b6zNGBTgzJ5gHf%2FEbYfX0%2F4f95QyaTLGx8Zl1QZ5qFX8wb8IKclhmdtVNkO91mNDJY4Snyd5MMrKNjagaM2Z1Aj9Hvpr6R4lE5UI61%2BKdOtTcENZzJhcRFnhRxyoe2h0BxVb0fuihUf6CDxTAGoV1MlYIjME62GQxVe73ZDH4VjXx3DQXENFvoPDOZ%2B1IVh%2FEe2oD%2B4ddLiYaGbhurGHQtdw7dQmzT%2B7n4NhoFyeAf5BHUKSwXRn8mcLPCLXsOY4e8rn0jDxZnG6c7X6iWXmnIv05Xrov0LFVr8qHgYEgHyGFPGBL%2Fqater%2F4j9YeHzt8hFsTIVmWjC3%2FNi%2FBjqkAafhsGPXKiUXXbDXHf6HduZg2fL5fQfWJa6voMKlQ3kMrrdMlu7su7fWwEbQt9MpSy8FMn5%2BV6BzSUsB%2FIeFika%2BFan%2Fi01If5M7IBdpHNnA3RtQe6m0W9dEAP87JtWXFxTiK08TdR1nUlAx2jFjyxf%2BE9ojCIAQoB2xIuFJQdaKSnRsOp5X37piCPdX2a55YnmDSsNxWZx49XBhyokxXlc2CCdI&X-Amz-Signature=8f988e553c9f612f56943f0473ea6b6aabac4e18174da0fa7e333cf497250b68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQPUG6LL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC1BLhP%2F2DBZzof7s4HAVjE76Un9E0Y%2BA9AXZbprx3jFgIhAOMmzR16sPHJc9NfvkishuVyHvlqj9kEBaPDZT3TAsQvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjPB80pdcbOd8lHDsq3APo6JErhL3a%2F9%2FAfwW2giMHvrNZ7692j7YwmQGBtmrYHbkzEbFetpifwwYI7deLMGuR4lSXJC%2B%2Bt63GY4H2RbwZobpz1pttYuBIIPSLE3FXRmGijJ6LcbTb1zXdzFMpaZdC3gljyPp7%2FpCnrEDb9ZRaD%2FEC%2FJxureBa993f0eUnuhVDt0dcrn1yosaUUqJJj4LK6bJYal22jqPZX7aTa7009%2BA3EfBUTMAT5rT2ZyeNuKS8DeO92Gct6l1JKctWZ1nlwuPsym6QQ6WqSujReKu49w6vmoIWj7rh%2B1qrMr97iH32V%2FH2b6zNGBTgzJ5gHf%2FEbYfX0%2F4f95QyaTLGx8Zl1QZ5qFX8wb8IKclhmdtVNkO91mNDJY4Snyd5MMrKNjagaM2Z1Aj9Hvpr6R4lE5UI61%2BKdOtTcENZzJhcRFnhRxyoe2h0BxVb0fuihUf6CDxTAGoV1MlYIjME62GQxVe73ZDH4VjXx3DQXENFvoPDOZ%2B1IVh%2FEe2oD%2B4ddLiYaGbhurGHQtdw7dQmzT%2B7n4NhoFyeAf5BHUKSwXRn8mcLPCLXsOY4e8rn0jDxZnG6c7X6iWXmnIv05Xrov0LFVr8qHgYEgHyGFPGBL%2Fqater%2F4j9YeHzt8hFsTIVmWjC3%2FNi%2FBjqkAafhsGPXKiUXXbDXHf6HduZg2fL5fQfWJa6voMKlQ3kMrrdMlu7su7fWwEbQt9MpSy8FMn5%2BV6BzSUsB%2FIeFika%2BFan%2Fi01If5M7IBdpHNnA3RtQe6m0W9dEAP87JtWXFxTiK08TdR1nUlAx2jFjyxf%2BE9ojCIAQoB2xIuFJQdaKSnRsOp5X37piCPdX2a55YnmDSsNxWZx49XBhyokxXlc2CCdI&X-Amz-Signature=ebfa120e340a540242e843df0bc9d457f849265366292ac8361a82e7a1bf838e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
