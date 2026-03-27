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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653X332LR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCw6FmggwPmsivmwncf7%2F7puOR2y6xeLiRoPRjvqs%2BrYQIgfiWyzDv6JZ7FgCNqmtumyS%2BKM231wjaAPSw6De5z%2F3MqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwHrkKoy20%2BO1pr4CrcA7KPqG4KAsXLZifHk34OtcuOFwyrMYw%2FXkVTP5jpFd1X1tl69V5WKIIolnaYgqdrMcIuHln5HhRFzOAeX5pK4xN%2BVHrrt3VNGxHbKapw7y16YeBg1m5l8X%2BxQIvMc%2BQes%2BoNvkHzH%2BG39sW%2F6bc6MlyTzKqR%2F3z%2FMZbjFcjMccCtvN9gdE7HYNlrEUSOWP2ksX2E0Qez8ju9ruGOj89AQphbT9PECyD8c4kslO%2FNVKgFvXx7NdjPK%2FIgvncObXGZ2gPN6SqJGWpdyPV341%2F7VtKoiAvKGd%2B9qZ1UCVUVOOC5%2F42I3LprxJnd4JhpehYLS%2BPdS1frHG6QiWQtjSUhkw%2FcMSQ3tN%2Fw6x5BtodZhY7B8iEQcMVcsiyDG0ez0y2OtNWH3v8BvCFvc2RZYBrcH4oW6LA4FMbrMR6tEpKRAncq5fe4qBbnJnUlgTIg6Qk5G2YW%2FrP9Ecy0jai8CdshUu1zeSt5%2BjgukVgT4oo%2FQBUqwDo8pdsTHwWST%2BwWvwXCJ6xbXC%2FajF3cO1ZjYuBsfe61qWij4AuMkeuLghTrA8aAHPluKEe0ocBv0EAWgPgpsr4cflXiblUSWmo043jacF%2BhgFspnjgdh%2F8vRf5aBl938JVQ7cEgmxWACjxyMLrpls4GOqUBxTY1yPgiymKKWSPe1o5s8b4ezdUruq7jOfgTC%2FR4O5SMYMPd2XtsUHiVuT%2F%2FCqI6ZxlDRQFYsNYgLEyvALntU2jUxv6Ao8PpJSK%2FdEdXCprlyzIwB3SVL5iTGxmZToC%2FzOqcGn3IsAcSvtbthLSsoug6p8HCf10aEed5xKWQVKgnrezh2QiKnU%2B0%2B2YU%2Fa5r7p307LB7jw6JNfFlyQnof1IFSXwj&X-Amz-Signature=2309564eaf9d8607684de07f15bd22ad1504a04f6db5b9475757810778aa15d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653X332LR%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCw6FmggwPmsivmwncf7%2F7puOR2y6xeLiRoPRjvqs%2BrYQIgfiWyzDv6JZ7FgCNqmtumyS%2BKM231wjaAPSw6De5z%2F3MqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwHrkKoy20%2BO1pr4CrcA7KPqG4KAsXLZifHk34OtcuOFwyrMYw%2FXkVTP5jpFd1X1tl69V5WKIIolnaYgqdrMcIuHln5HhRFzOAeX5pK4xN%2BVHrrt3VNGxHbKapw7y16YeBg1m5l8X%2BxQIvMc%2BQes%2BoNvkHzH%2BG39sW%2F6bc6MlyTzKqR%2F3z%2FMZbjFcjMccCtvN9gdE7HYNlrEUSOWP2ksX2E0Qez8ju9ruGOj89AQphbT9PECyD8c4kslO%2FNVKgFvXx7NdjPK%2FIgvncObXGZ2gPN6SqJGWpdyPV341%2F7VtKoiAvKGd%2B9qZ1UCVUVOOC5%2F42I3LprxJnd4JhpehYLS%2BPdS1frHG6QiWQtjSUhkw%2FcMSQ3tN%2Fw6x5BtodZhY7B8iEQcMVcsiyDG0ez0y2OtNWH3v8BvCFvc2RZYBrcH4oW6LA4FMbrMR6tEpKRAncq5fe4qBbnJnUlgTIg6Qk5G2YW%2FrP9Ecy0jai8CdshUu1zeSt5%2BjgukVgT4oo%2FQBUqwDo8pdsTHwWST%2BwWvwXCJ6xbXC%2FajF3cO1ZjYuBsfe61qWij4AuMkeuLghTrA8aAHPluKEe0ocBv0EAWgPgpsr4cflXiblUSWmo043jacF%2BhgFspnjgdh%2F8vRf5aBl938JVQ7cEgmxWACjxyMLrpls4GOqUBxTY1yPgiymKKWSPe1o5s8b4ezdUruq7jOfgTC%2FR4O5SMYMPd2XtsUHiVuT%2F%2FCqI6ZxlDRQFYsNYgLEyvALntU2jUxv6Ao8PpJSK%2FdEdXCprlyzIwB3SVL5iTGxmZToC%2FzOqcGn3IsAcSvtbthLSsoug6p8HCf10aEed5xKWQVKgnrezh2QiKnU%2B0%2B2YU%2Fa5r7p307LB7jw6JNfFlyQnof1IFSXwj&X-Amz-Signature=dd060c50b9c00cbd3dbc8b29ca54c78a03c9fa05f5f3c3b3088435dee1af482e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
