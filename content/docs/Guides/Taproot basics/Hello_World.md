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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPEOLN7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDeSKHGR1Tzb%2B1u6S3EFQdsdQ%2BLyZRK4avQK0DU5MV9sQIgWtLW%2FQStqJpHA4fRQWXFQsV9TAKbwY1RDc9iSnAAjUsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEICJ8pP9%2BNoJFd5DircA5bWJWx0wVmm%2F78ZfTwOY2c6RaC0BZE6QwL9nvRJxl0pYPjhnMzT25EXJa3WpmKyn6HIToWNUVeEqya2Z4ycmu2zbUOR5b00HaoSwSsapcbg20U%2FuYQMAEGyk7309coXG%2F0C1z4nfm9PGmhv1T%2BZCnJbKP1fvUKBPfKiR9QFGfx0h%2F%2BuQMNBzbiWE980yvh4hbxBMXXCkL7AeVuMyz5Lw4D6nRsTXDapK5n5KhvkTTBq%2Bi%2Fon4JXh01IYMwYd5r4fgdABZWI%2Bn4ijnjHpuaJoxgVOFfVxFMtfwezziepWA9%2BLW4JkE%2FqsWTh8lNOOzJAbx4smdPD3y1UrMj5Ov3xRqw5n9ht8yEcAp6iaSYiT0EX%2BHc0tU7pi6iHcMp6e6CYs64xgS%2BJfBxwoHe%2BB8ZCURj%2FgMfnvY%2B3Wk4okGf0zS35zFcrPvbaOIzla4tTXRfdRoja5I9QLyk8Ed5IdYy1%2FTzRylov5AgbNZzQW41JHLt%2FwwzKRJhrOsd%2BZYQytOerxhPEXiRKjy1jTvcPwtTyvskiqM4eP9WyJDCUJkzK4C9il7%2B31IakpQ8FZpA0Czxkqgy9%2BEeJuc6rAhoa811YgEbtuwCd0GjbpCXkhzpA5lJpf8N2hP4c3nIMVb7iMKeY%2FL4GOqUB8%2FoHDjNIk%2Fur8VdKzuAb1fO3au00TRBxfHJIqJ98CxJLefpf8W66gc7wZOwYetcd6ktcHG4G1QbbAVgaMXAbOmCBmMN9xDPvyQB4m6klULztUBOoP8nebZPt2w9pBfHs0XN1CYtwEuc2bR3LXDFzItSvKeTNm9LgtKKCchQD189NR%2F3hY2wHQV0H07Bll%2F%2FHzWCmj0CZFyKtvv7QZzK%2BuX2kDmYR&X-Amz-Signature=ea34335c020e914a98ffb9b43bfedcdb9f09b9c0d1975897effa6979fc776d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPEOLN7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDeSKHGR1Tzb%2B1u6S3EFQdsdQ%2BLyZRK4avQK0DU5MV9sQIgWtLW%2FQStqJpHA4fRQWXFQsV9TAKbwY1RDc9iSnAAjUsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEICJ8pP9%2BNoJFd5DircA5bWJWx0wVmm%2F78ZfTwOY2c6RaC0BZE6QwL9nvRJxl0pYPjhnMzT25EXJa3WpmKyn6HIToWNUVeEqya2Z4ycmu2zbUOR5b00HaoSwSsapcbg20U%2FuYQMAEGyk7309coXG%2F0C1z4nfm9PGmhv1T%2BZCnJbKP1fvUKBPfKiR9QFGfx0h%2F%2BuQMNBzbiWE980yvh4hbxBMXXCkL7AeVuMyz5Lw4D6nRsTXDapK5n5KhvkTTBq%2Bi%2Fon4JXh01IYMwYd5r4fgdABZWI%2Bn4ijnjHpuaJoxgVOFfVxFMtfwezziepWA9%2BLW4JkE%2FqsWTh8lNOOzJAbx4smdPD3y1UrMj5Ov3xRqw5n9ht8yEcAp6iaSYiT0EX%2BHc0tU7pi6iHcMp6e6CYs64xgS%2BJfBxwoHe%2BB8ZCURj%2FgMfnvY%2B3Wk4okGf0zS35zFcrPvbaOIzla4tTXRfdRoja5I9QLyk8Ed5IdYy1%2FTzRylov5AgbNZzQW41JHLt%2FwwzKRJhrOsd%2BZYQytOerxhPEXiRKjy1jTvcPwtTyvskiqM4eP9WyJDCUJkzK4C9il7%2B31IakpQ8FZpA0Czxkqgy9%2BEeJuc6rAhoa811YgEbtuwCd0GjbpCXkhzpA5lJpf8N2hP4c3nIMVb7iMKeY%2FL4GOqUB8%2FoHDjNIk%2Fur8VdKzuAb1fO3au00TRBxfHJIqJ98CxJLefpf8W66gc7wZOwYetcd6ktcHG4G1QbbAVgaMXAbOmCBmMN9xDPvyQB4m6klULztUBOoP8nebZPt2w9pBfHs0XN1CYtwEuc2bR3LXDFzItSvKeTNm9LgtKKCchQD189NR%2F3hY2wHQV0H07Bll%2F%2FHzWCmj0CZFyKtvv7QZzK%2BuX2kDmYR&X-Amz-Signature=74cb250a4bda2c603bf6186ab6120ff19df7ab81ca7c6ebde89e63723e7b72df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
