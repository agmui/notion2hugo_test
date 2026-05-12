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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDFJKKB%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAiTUr5XWcQfJpJy%2Bua5LpMWqu5HTmIJB1NjodGgOpcdAiAs4DJOkutlXgyqX8mvmnLuxGEVvpR9Bn5SltQ83PCbVSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmle3mCXN05Tu3T89KtwDEvyJ%2FcPZ2L1F9dFJ%2Bnnpvg01lCStbUkWjN8j42eA8pzORW197C8oAygVzPjiN7aAxRib7aasK2YU%2B0ULJ%2BPRCmaTswUbNwfQ78eu1x504aJBcYTeDZu2EKjzH0miqOpyHF0u%2Bhq4QgqM%2Fv4%2BD7ZpLfZxjJETVHBJNjOrAbghdBgUefQ9dNjAC5FGPydT4GBbhi0Vl6FQSryHErTE6UvVK%2BEB3zeRSUuwdYTVn0KpaaR5DU2soEhGTIe94qnUfg3jYrAXkXG7NgFaNCJ1q3OcwzWM%2FFgv2liFSdWW8Tm1hHcvPZIkeIUWiIeXexS9D8U4g948xHam03NBzaQeQYUQYI4T4KP5C828Nk27LYYc12nz4FXNzWjFF7DnDd2HjZ%2Fv86Tg822kF69h4t9YuC8WOxvIMgyIc2EXexxfQB%2BrFVi3zQyghC9%2FY4mhfj%2B%2FvuD%2Bmfyos%2BbZWHKQgLFAPThcGG%2BqXgQASqz0YY1%2FZivmo5G61hB6oYBXcOLfsDAqvwi4%2FG6N3I3r82VAzyQ9Nw7py8jLIbrJlAx2v2DPsa9TTUg2dpT6e027WK0JFdAn6rdOXF0AuW4dY9qfu9wz6zycSH0MICkHjXh%2BFcCy5MXevzhglcnZ0W8Me%2FYVGnowvqSK0AY6pgFfhejAgcNe5HlWDgTXhqJb6k5Ht3Qd7XO5X6zvyNgYdFU7juRoMwubso1y4j%2Fxh51F2FlEStjIwTxQ9vd30mes1fjP%2FEP5ajEkT%2BPqYINNdRnj%2BlTyCT8TuTRwgxuDWSADtqWt85jdIbxXdV8ntB45j2D2StdHih6%2FZc7UW5WogQIx%2Fb%2Bug70CFtt7itIbaMo6m0U1AymddB%2BWhwwElhQR60G8LbIj&X-Amz-Signature=fd399a424c294d4c4355a3feea34fde41cd7dcd30080d5c982d52c68918f3d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDFJKKB%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAiTUr5XWcQfJpJy%2Bua5LpMWqu5HTmIJB1NjodGgOpcdAiAs4DJOkutlXgyqX8mvmnLuxGEVvpR9Bn5SltQ83PCbVSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmle3mCXN05Tu3T89KtwDEvyJ%2FcPZ2L1F9dFJ%2Bnnpvg01lCStbUkWjN8j42eA8pzORW197C8oAygVzPjiN7aAxRib7aasK2YU%2B0ULJ%2BPRCmaTswUbNwfQ78eu1x504aJBcYTeDZu2EKjzH0miqOpyHF0u%2Bhq4QgqM%2Fv4%2BD7ZpLfZxjJETVHBJNjOrAbghdBgUefQ9dNjAC5FGPydT4GBbhi0Vl6FQSryHErTE6UvVK%2BEB3zeRSUuwdYTVn0KpaaR5DU2soEhGTIe94qnUfg3jYrAXkXG7NgFaNCJ1q3OcwzWM%2FFgv2liFSdWW8Tm1hHcvPZIkeIUWiIeXexS9D8U4g948xHam03NBzaQeQYUQYI4T4KP5C828Nk27LYYc12nz4FXNzWjFF7DnDd2HjZ%2Fv86Tg822kF69h4t9YuC8WOxvIMgyIc2EXexxfQB%2BrFVi3zQyghC9%2FY4mhfj%2B%2FvuD%2Bmfyos%2BbZWHKQgLFAPThcGG%2BqXgQASqz0YY1%2FZivmo5G61hB6oYBXcOLfsDAqvwi4%2FG6N3I3r82VAzyQ9Nw7py8jLIbrJlAx2v2DPsa9TTUg2dpT6e027WK0JFdAn6rdOXF0AuW4dY9qfu9wz6zycSH0MICkHjXh%2BFcCy5MXevzhglcnZ0W8Me%2FYVGnowvqSK0AY6pgFfhejAgcNe5HlWDgTXhqJb6k5Ht3Qd7XO5X6zvyNgYdFU7juRoMwubso1y4j%2Fxh51F2FlEStjIwTxQ9vd30mes1fjP%2FEP5ajEkT%2BPqYINNdRnj%2BlTyCT8TuTRwgxuDWSADtqWt85jdIbxXdV8ntB45j2D2StdHih6%2FZc7UW5WogQIx%2Fb%2Bug70CFtt7itIbaMo6m0U1AymddB%2BWhwwElhQR60G8LbIj&X-Amz-Signature=f2ee95716ed14f1f2633522e5e29161d76123fb8322099677b0df1006c41520d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
