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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVWOSCA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFF1ixUVjgw%2BUMGBDmRF175M0VX76cwyS5MjyigObuFCAiEAjxPwoCOPXhyj6JZZGu9jxWwq5NxZ2vJu%2B0WspSl6ZM4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA%2BMTGOlxNIBwllrZyrcAztwnl0hNxTj758tR5HQa9yanaSdhaqcbKW%2FVTRos5YMeTBYd8kI1GQCDPSGLxErjyEqR0lmHuaW41nWVqfQMmUv1yqGPS1QXtWyIUlOKmzgDWIrxqXSIcstB058TUVil8NZNW2a9pp0%2Fk1gGL8PB0v8SMfJV39TW00zrS4tSg02ow9S5jNy4TEPJeFneg9VqP3BGcSdQ95A9TP%2BbB2F%2FAYP%2B2OHgjX%2BQgaaBAlieB4sZHs9kqoP4njyhSJvpyPCvMPEJtia5yIAY6pJjpGDs0U7y%2FCbhAyUlQ88HOkJEVLSuZZWxqdH2FktK7MDwsvVUC4%2FjRnq39p73X4I%2BmZ5p8Z8IIkONRUGkrnyjKZADYYKe6phBN6VYSyhIs8XILZt66osvvjuIUiZoj9xCuPtGzrYuLcKraU9GyqEnKm5BScw%2BlhHVocIwdsgNTGe1zI2c5C97umyO4LxQItKaVsxdOKCcX429K65%2Fvd9T6XkU5wimSJdltZ46XZbRFYDvbRAH%2B6WC58Tb%2FDYpRdHMeBvq0u%2FrJnZlnXEWKaFB6ZT0dTldVMU2BYTWRRq%2BXBviUfiQaT56ybnT%2BJNHvoG15MuvAolCmca4S706%2F%2F0uO1oYiKIgQ9GZgcnjZxkv5vPMM7Pk8EGOqUBgBqr6cq6QIhYiOnzv9hDCZ0G2h5v%2FRZcq4CW18c37q0eBQA0UDdWi4NWyWsNTzB3X5yfETWH4RMjGpf%2F5quI2vgKTFugmvV817ZcnjAIpH39W0LkbCRUMSX%2BSJ1AHJmhltcifNHrhVYPOVRoqEzudkFf9Oi%2BucfFMbaZWoJTGXjuc1jqGfRnptvdi3qYGGbPMV5Byim6o8Vir2moLUSHbKy4S2i4&X-Amz-Signature=b08bccb1496bbe8418b817af0698394d843e82e94f6389225fdf973f1ed91d75&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVWOSCA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFF1ixUVjgw%2BUMGBDmRF175M0VX76cwyS5MjyigObuFCAiEAjxPwoCOPXhyj6JZZGu9jxWwq5NxZ2vJu%2B0WspSl6ZM4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDA%2BMTGOlxNIBwllrZyrcAztwnl0hNxTj758tR5HQa9yanaSdhaqcbKW%2FVTRos5YMeTBYd8kI1GQCDPSGLxErjyEqR0lmHuaW41nWVqfQMmUv1yqGPS1QXtWyIUlOKmzgDWIrxqXSIcstB058TUVil8NZNW2a9pp0%2Fk1gGL8PB0v8SMfJV39TW00zrS4tSg02ow9S5jNy4TEPJeFneg9VqP3BGcSdQ95A9TP%2BbB2F%2FAYP%2B2OHgjX%2BQgaaBAlieB4sZHs9kqoP4njyhSJvpyPCvMPEJtia5yIAY6pJjpGDs0U7y%2FCbhAyUlQ88HOkJEVLSuZZWxqdH2FktK7MDwsvVUC4%2FjRnq39p73X4I%2BmZ5p8Z8IIkONRUGkrnyjKZADYYKe6phBN6VYSyhIs8XILZt66osvvjuIUiZoj9xCuPtGzrYuLcKraU9GyqEnKm5BScw%2BlhHVocIwdsgNTGe1zI2c5C97umyO4LxQItKaVsxdOKCcX429K65%2Fvd9T6XkU5wimSJdltZ46XZbRFYDvbRAH%2B6WC58Tb%2FDYpRdHMeBvq0u%2FrJnZlnXEWKaFB6ZT0dTldVMU2BYTWRRq%2BXBviUfiQaT56ybnT%2BJNHvoG15MuvAolCmca4S706%2F%2F0uO1oYiKIgQ9GZgcnjZxkv5vPMM7Pk8EGOqUBgBqr6cq6QIhYiOnzv9hDCZ0G2h5v%2FRZcq4CW18c37q0eBQA0UDdWi4NWyWsNTzB3X5yfETWH4RMjGpf%2F5quI2vgKTFugmvV817ZcnjAIpH39W0LkbCRUMSX%2BSJ1AHJmhltcifNHrhVYPOVRoqEzudkFf9Oi%2BucfFMbaZWoJTGXjuc1jqGfRnptvdi3qYGGbPMV5Byim6o8Vir2moLUSHbKy4S2i4&X-Amz-Signature=0eafa7894364013938f217ec6b37e478aa63f9ba45a5fbe9b159cc1151ce8031&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
