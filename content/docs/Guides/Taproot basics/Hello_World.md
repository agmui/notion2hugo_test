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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JYASWG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCsfLpVchtgh60XJc%2FQbqtkcpvVb6Yj18sVi%2Bdq%2BvjAzgIhAMud1E%2BlveWMnxunNWZidTcIt04aFw95KiYZjPU9qHbGKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbecRSOI7kuwE81UQq3AN5d1dh2u%2Fv29XmVaHzz3k5wQHAcUhF2yiwX8ZmZEKgWhdLvpx%2Fh6HrhRwFCZwrr5pqrP7uFSFKJN9v0iCWbjLclZFKgn4AHR9p4bn%2FCXPuJ%2Bg11QrEUk1za1ypANuhKB%2F3Wb1NIJAUOuq5Muwo6I1lvPVf1yFnHfGwGlveNKLi0b%2BngbxIKy4GDCAsI%2BVNeUweYeref1O3%2FhmmMB3Bs2wwgBnydLMlRDnWR%2FTbYWbvOjVvJ%2FBKrtmziMAhr3v3r5WUdwxGUXNdMhMB1XRcTgqsq3TkQLik2COkaEfivEWuwi9uvHY%2BIQiGvYuRXUqyubI0EZ3gVycHJNY%2BSjWKxsDF3qlNjZ5%2B2TFRmwmRvEPyxLrlX0KAtS87qDLueC3KGQ5kmvlHY%2BZ7KwsQ%2FKcWBy5fwyshDG60R%2FPye3XD2c1jwj%2Fd%2BDAii%2Fau9mj1r4C4WHRSfwnIRiNL6N9mo3YHXOgDox7Zak8%2FKYUs7cCGHF80Dufres8pgrI0UCOybKpy7j7noYSpNO385JZ3LNfxL%2FHC4F4JmQ%2By0sa5thNuQ6gq1Jth2jixw0ryx%2FsdV0HBX0ohIqekmcs07Y7Qx2QkyT6XTZ2aGcjg%2BJuHFziQ%2By2YFQGOaXsU7WmrYVa42DDD4cnEBjqkAcAQTi0NVSwDTMJEYr6M3OM1CksfweqUnuVG9frLaVTzzKLvydYLMp7o1VCGx5TZXy0a6oNyIZen38Gr8IkIa%2Fy%2FiP9RkAQ3kmCV2qnxxfH18RyQERHYCHVIdbUwXu7Cyrq56a%2B%2F0OvQNoffU9H2fqUJ5Zh2XmSBy9AQIpgSO%2BfwoaHiB1S6Lf3xgUrGqgkeb6bPY%2BshY6L3sxXgwe%2Bq9H6AASCJ&X-Amz-Signature=f68861c3f75b6010cb4e34b9ec4ff9f51ddb4b76a1e3d7c6b6937f20f9de6681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JYASWG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCsfLpVchtgh60XJc%2FQbqtkcpvVb6Yj18sVi%2Bdq%2BvjAzgIhAMud1E%2BlveWMnxunNWZidTcIt04aFw95KiYZjPU9qHbGKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbecRSOI7kuwE81UQq3AN5d1dh2u%2Fv29XmVaHzz3k5wQHAcUhF2yiwX8ZmZEKgWhdLvpx%2Fh6HrhRwFCZwrr5pqrP7uFSFKJN9v0iCWbjLclZFKgn4AHR9p4bn%2FCXPuJ%2Bg11QrEUk1za1ypANuhKB%2F3Wb1NIJAUOuq5Muwo6I1lvPVf1yFnHfGwGlveNKLi0b%2BngbxIKy4GDCAsI%2BVNeUweYeref1O3%2FhmmMB3Bs2wwgBnydLMlRDnWR%2FTbYWbvOjVvJ%2FBKrtmziMAhr3v3r5WUdwxGUXNdMhMB1XRcTgqsq3TkQLik2COkaEfivEWuwi9uvHY%2BIQiGvYuRXUqyubI0EZ3gVycHJNY%2BSjWKxsDF3qlNjZ5%2B2TFRmwmRvEPyxLrlX0KAtS87qDLueC3KGQ5kmvlHY%2BZ7KwsQ%2FKcWBy5fwyshDG60R%2FPye3XD2c1jwj%2Fd%2BDAii%2Fau9mj1r4C4WHRSfwnIRiNL6N9mo3YHXOgDox7Zak8%2FKYUs7cCGHF80Dufres8pgrI0UCOybKpy7j7noYSpNO385JZ3LNfxL%2FHC4F4JmQ%2By0sa5thNuQ6gq1Jth2jixw0ryx%2FsdV0HBX0ohIqekmcs07Y7Qx2QkyT6XTZ2aGcjg%2BJuHFziQ%2By2YFQGOaXsU7WmrYVa42DDD4cnEBjqkAcAQTi0NVSwDTMJEYr6M3OM1CksfweqUnuVG9frLaVTzzKLvydYLMp7o1VCGx5TZXy0a6oNyIZen38Gr8IkIa%2Fy%2FiP9RkAQ3kmCV2qnxxfH18RyQERHYCHVIdbUwXu7Cyrq56a%2B%2F0OvQNoffU9H2fqUJ5Zh2XmSBy9AQIpgSO%2BfwoaHiB1S6Lf3xgUrGqgkeb6bPY%2BshY6L3sxXgwe%2Bq9H6AASCJ&X-Amz-Signature=6a88b335f00697a1c25178d9665e3bb2d2246be78384f1bdd05f00f0722b18c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
