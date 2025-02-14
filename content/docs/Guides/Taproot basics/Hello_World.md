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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBJVMP4X%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7malFicyYKacO9damQ4Pv7vkHeI6xrXTohKuwZ714TgIgE24bltL3%2B1Vao1ZS7eyGnRT0Xy2kp7yXpJFULWKoRHgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGB0oHsJwnNTes5sJyrcA322C%2Fw0X5i39ZqkT4oDV94PY60AiR0qys4MlxXStFp7%2Fu8ACLQ0V7P7zla9zBbZLBJw5B1Z973C3DtzkBf7MwyfqOCfVClgyk0q1D2sW0aEc5ItjM7zxv5h7742ZPCdf14sJw4zvu7XgCpzT4%2BDB3N57bqjtJMNcsWq8RyYLZezLU6S9BcNYwrmLx7WkWkVJZHXJYSdK6DJXvORdyn2KF2P5cm%2BxMw0svY9yOFNHfM6ZcfDTPBR7aX23Dfk5PTu9LjX9IDlQDvYPhNBVXe7GiMlnmJHyPK5ujOhjrxK4%2BPHSXZmSmnhA2Bf1yFIw71knGLDAKyImFTdYtGiQbmn%2BHi5Ju6enwUY3Wl3Czi%2Fym%2FvCm76DpzqAakg9HrSSMgSECb%2Bi5Fq%2Bk4oKvvT7hej71LES%2BBe%2B2egmVQr7Mm3G%2FkiDRpQ3tMEEZJbKWh%2BNTvmFYqRpoFSN%2FHeai8RGDz%2FPTLXRxYBX84wulEIe9nb6owjuU26Z6hsqwnA4uQGwcKmA2b0v0u2l8LUHcWkzdVuDoOD4VdvmWr1gYjuKUT2zRj%2FghtJArfxJWATJjLxkpntlXZ5anp%2FmwU%2BzUboiaNT8fLV8y2RXp5OVHmAYB2dS6vZo%2Fw9VUQhDFSZezYdMIS2vr0GOqUBfamT3n1U%2FFyb5o0FSkCxXcGHiD9H1HTLeNZDMmZfmgV%2FiNAEjxHVqzV1i1B%2BpcL552iYlQdbb6m7IL70lfN4tD00kWdgq63pWIjyZSHmgGAG0p4aus5kvha5VY0ywBQF7UMYWbdASYgbpmOqulqMRImo%2FZact8GfpQItgjIBg1A%2FvQym%2F0vo4SFbwWrEGptgsSd1AmL3kQopeZe70JrgxEvWSnb4&X-Amz-Signature=b171dc5e78716f79e84ec7325c22232435393676878d6fc4c340c3e9292c49f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBJVMP4X%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7malFicyYKacO9damQ4Pv7vkHeI6xrXTohKuwZ714TgIgE24bltL3%2B1Vao1ZS7eyGnRT0Xy2kp7yXpJFULWKoRHgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGB0oHsJwnNTes5sJyrcA322C%2Fw0X5i39ZqkT4oDV94PY60AiR0qys4MlxXStFp7%2Fu8ACLQ0V7P7zla9zBbZLBJw5B1Z973C3DtzkBf7MwyfqOCfVClgyk0q1D2sW0aEc5ItjM7zxv5h7742ZPCdf14sJw4zvu7XgCpzT4%2BDB3N57bqjtJMNcsWq8RyYLZezLU6S9BcNYwrmLx7WkWkVJZHXJYSdK6DJXvORdyn2KF2P5cm%2BxMw0svY9yOFNHfM6ZcfDTPBR7aX23Dfk5PTu9LjX9IDlQDvYPhNBVXe7GiMlnmJHyPK5ujOhjrxK4%2BPHSXZmSmnhA2Bf1yFIw71knGLDAKyImFTdYtGiQbmn%2BHi5Ju6enwUY3Wl3Czi%2Fym%2FvCm76DpzqAakg9HrSSMgSECb%2Bi5Fq%2Bk4oKvvT7hej71LES%2BBe%2B2egmVQr7Mm3G%2FkiDRpQ3tMEEZJbKWh%2BNTvmFYqRpoFSN%2FHeai8RGDz%2FPTLXRxYBX84wulEIe9nb6owjuU26Z6hsqwnA4uQGwcKmA2b0v0u2l8LUHcWkzdVuDoOD4VdvmWr1gYjuKUT2zRj%2FghtJArfxJWATJjLxkpntlXZ5anp%2FmwU%2BzUboiaNT8fLV8y2RXp5OVHmAYB2dS6vZo%2Fw9VUQhDFSZezYdMIS2vr0GOqUBfamT3n1U%2FFyb5o0FSkCxXcGHiD9H1HTLeNZDMmZfmgV%2FiNAEjxHVqzV1i1B%2BpcL552iYlQdbb6m7IL70lfN4tD00kWdgq63pWIjyZSHmgGAG0p4aus5kvha5VY0ywBQF7UMYWbdASYgbpmOqulqMRImo%2FZact8GfpQItgjIBg1A%2FvQym%2F0vo4SFbwWrEGptgsSd1AmL3kQopeZe70JrgxEvWSnb4&X-Amz-Signature=2b08c75e48475132d07428d52a9765e72c7574e637796b8889461e6d1283920f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
