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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QH45J3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuVx2adAtzABTDanan1uacBVNfXb%2FfY8l%2BoFfNwgDqoAIhALx5Crla8ICvfjZsfXFZShhhsijBh32cUEok7Z2Db0dhKv8DCFAQABoMNjM3NDIzMTgzODA1IgzPulaTPIluwm%2FGSVAq3AM0a66ZAFOpFhiim%2BJoZfxF3eKv019RnJD4A07J1kd4PKkI4f6z3Uj2S7J%2Fq50YIwHHoixep%2BEvDBjyDHEUhGsi%2Fc2lr84uSB1ZAFDhH4VitA4Yw1SxUEA8OaxQvztuhodIMnavQTaopchxZo9M8DRF1oHYItKUcY3wyPWnWUUVaBL6L9iHIDxkmpPZ8PkJfhs8EuloKXdber9RVuXtzx56hhpESShM529cJOOvHSDrqwTE3MfAsxu04v5Y9BzXNbJ8GyB5lRSrbQtiF5pver92MV1KYDJCs6A4aHyanQkdBKLT8RvboZLt83zDPdpaQINjV7RgPb4KIAOPRSbgSrIgOcqNwGI0%2BM1wnwtdHxYlrlr%2FUEJOIWU7VYSlwJAdnkHmmpeTw0FntjjYJ1EEweerrFSLn83KzqcZ9ftyNqWEpF7E1dsYwJPG3ODVcygi6VYthU%2F6%2FxPT%2Fkhuc7ubzcOeHRiINY3yZTytJoXDKR6ZseHZVb4T54PyoqZj6Y4zJpz7hLg2VSqW50wKXqRJPSyqAE79aouniWW75x%2FkRtqTlmDAD5QnvxM4TuZKn49qSCDr%2FskWVaRYBL7He5sGji6LjfYtU2y25Uju11IzGc1K9gjRE7YO8QIWrFa19zCmr%2BrABjqkAU%2FITHPcqqmd4KJxHhoxql8etpIieF48FUoHxvQTeG66ByqhWrAxmvLO1X%2FCFGkgyt3ux0zOJJk0VZOOz%2B8A0u2M6V6P7DW8QQzki4sQlobIhPVLTiaLcYj8%2BwFgBckviNyt0UciJQW7UZ3YFHUmkr%2FH9WFpM5a6G3H5Xa%2FrfeMVP3IvtQEEC4D8JC%2F6v9Q8Qk%2BI%2BXJfTYo0tbBu2Xs%2FNxTL9wUn&X-Amz-Signature=9826f2c0bb5d4a28e058e79ff07a0012269eb8f45d3864f3f5dffa3a91559908&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QH45J3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuVx2adAtzABTDanan1uacBVNfXb%2FfY8l%2BoFfNwgDqoAIhALx5Crla8ICvfjZsfXFZShhhsijBh32cUEok7Z2Db0dhKv8DCFAQABoMNjM3NDIzMTgzODA1IgzPulaTPIluwm%2FGSVAq3AM0a66ZAFOpFhiim%2BJoZfxF3eKv019RnJD4A07J1kd4PKkI4f6z3Uj2S7J%2Fq50YIwHHoixep%2BEvDBjyDHEUhGsi%2Fc2lr84uSB1ZAFDhH4VitA4Yw1SxUEA8OaxQvztuhodIMnavQTaopchxZo9M8DRF1oHYItKUcY3wyPWnWUUVaBL6L9iHIDxkmpPZ8PkJfhs8EuloKXdber9RVuXtzx56hhpESShM529cJOOvHSDrqwTE3MfAsxu04v5Y9BzXNbJ8GyB5lRSrbQtiF5pver92MV1KYDJCs6A4aHyanQkdBKLT8RvboZLt83zDPdpaQINjV7RgPb4KIAOPRSbgSrIgOcqNwGI0%2BM1wnwtdHxYlrlr%2FUEJOIWU7VYSlwJAdnkHmmpeTw0FntjjYJ1EEweerrFSLn83KzqcZ9ftyNqWEpF7E1dsYwJPG3ODVcygi6VYthU%2F6%2FxPT%2Fkhuc7ubzcOeHRiINY3yZTytJoXDKR6ZseHZVb4T54PyoqZj6Y4zJpz7hLg2VSqW50wKXqRJPSyqAE79aouniWW75x%2FkRtqTlmDAD5QnvxM4TuZKn49qSCDr%2FskWVaRYBL7He5sGji6LjfYtU2y25Uju11IzGc1K9gjRE7YO8QIWrFa19zCmr%2BrABjqkAU%2FITHPcqqmd4KJxHhoxql8etpIieF48FUoHxvQTeG66ByqhWrAxmvLO1X%2FCFGkgyt3ux0zOJJk0VZOOz%2B8A0u2M6V6P7DW8QQzki4sQlobIhPVLTiaLcYj8%2BwFgBckviNyt0UciJQW7UZ3YFHUmkr%2FH9WFpM5a6G3H5Xa%2FrfeMVP3IvtQEEC4D8JC%2F6v9Q8Qk%2BI%2BXJfTYo0tbBu2Xs%2FNxTL9wUn&X-Amz-Signature=9394b5b5532d61b91899c2d4de052e3fbd82ce376671695fb6177c3517049931&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
