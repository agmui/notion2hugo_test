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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HWWNC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKDPxGWhIwt6YRyUgpOqg522XfYG8qvL7IPAQc0CCNYAiAKQj4Mmdtsz31EOIySYtOC4l%2BzOD%2FgegZ1SxFcGpidwyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0byqta5VCnZoWLhyKtwDEetcWRjKPoBp%2FOX41XU5XWcQjPFD9srUTMU%2FK5NQPyx1aWKIMQi6YzBvNDvgPuntucdBSEwQcEs1FnSZnLOCQkBwMCH3ox7bX7T3pu5F6FTsbAFbSNpVVpAu29dRCx3f4jnrd0O5UQ6XbhW7VGX4vRgMdDuiJhev3B0vID9oWdyJV8vLolmBA0SoG3TvCXE29dy4paQKpWqCuLITa9SFoHQlUfkeDW6kfZoluI5GK2sQAskHIFn3rVmDkwCeWeXggrUZZ5kaw2DuI1taCiWX2U5q3U%2BBVMBBKmx%2FzEWXMBKN1PKqVkxJKX8t7Nbw91wRQzo9ry6cML9T%2BiNA41PVjrh9F40Bw%2FYfgbkHLKcbDPnYFJHexc8fJnwFh3PqiVniiZoHY7OByJTomK9nx6vAs%2B%2FOEqgGIRnURY4AjRQnGMwqatbjJQ44vlX7HTbP6WEjmyIqBi1aShASDBxmU8hXzyz8DL9%2BFgyCOTW92QILF8UAKk1XWLjwX1eyuoITxpuVMzC5aVN5%2B%2FvRHFiC0rrpgvO4BBeDiDZRw1BM%2Bbl11XYPnkYrdf3Qt7QZ0D9za5Ie3qoRjdeKdpK%2BRvLEPYOl5ee8p5XBur71Ran2o6qhuVOsUSG5%2FczqWqqHDb8wu%2BnrwQY6pgFXYdvGAy5x%2FiJuqRZHjsXIAeuByMMRDUUlP0suzPXKr2Zyl9QesTtJCu9k5z66f8ZjzcupOIvYIdgrgQe4sb9DyOx10yi3bHbhAz2dYbWuLYy1cTECCyi1b4OkRhB6fYIpkVn6tc0deiX6JSbjeegdggAzPqZawVCpUTNRfQn6QyHL3VhgIYOm%2BTDSM2eXLHmIx%2BG8tjHwGAfrsHls6N6JoGyI1RGN&X-Amz-Signature=cdd43eb57be7398f65830ac4d265282947981df602a0f6e7900de315dade99b5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675HWWNC6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKDPxGWhIwt6YRyUgpOqg522XfYG8qvL7IPAQc0CCNYAiAKQj4Mmdtsz31EOIySYtOC4l%2BzOD%2FgegZ1SxFcGpidwyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0byqta5VCnZoWLhyKtwDEetcWRjKPoBp%2FOX41XU5XWcQjPFD9srUTMU%2FK5NQPyx1aWKIMQi6YzBvNDvgPuntucdBSEwQcEs1FnSZnLOCQkBwMCH3ox7bX7T3pu5F6FTsbAFbSNpVVpAu29dRCx3f4jnrd0O5UQ6XbhW7VGX4vRgMdDuiJhev3B0vID9oWdyJV8vLolmBA0SoG3TvCXE29dy4paQKpWqCuLITa9SFoHQlUfkeDW6kfZoluI5GK2sQAskHIFn3rVmDkwCeWeXggrUZZ5kaw2DuI1taCiWX2U5q3U%2BBVMBBKmx%2FzEWXMBKN1PKqVkxJKX8t7Nbw91wRQzo9ry6cML9T%2BiNA41PVjrh9F40Bw%2FYfgbkHLKcbDPnYFJHexc8fJnwFh3PqiVniiZoHY7OByJTomK9nx6vAs%2B%2FOEqgGIRnURY4AjRQnGMwqatbjJQ44vlX7HTbP6WEjmyIqBi1aShASDBxmU8hXzyz8DL9%2BFgyCOTW92QILF8UAKk1XWLjwX1eyuoITxpuVMzC5aVN5%2B%2FvRHFiC0rrpgvO4BBeDiDZRw1BM%2Bbl11XYPnkYrdf3Qt7QZ0D9za5Ie3qoRjdeKdpK%2BRvLEPYOl5ee8p5XBur71Ran2o6qhuVOsUSG5%2FczqWqqHDb8wu%2BnrwQY6pgFXYdvGAy5x%2FiJuqRZHjsXIAeuByMMRDUUlP0suzPXKr2Zyl9QesTtJCu9k5z66f8ZjzcupOIvYIdgrgQe4sb9DyOx10yi3bHbhAz2dYbWuLYy1cTECCyi1b4OkRhB6fYIpkVn6tc0deiX6JSbjeegdggAzPqZawVCpUTNRfQn6QyHL3VhgIYOm%2BTDSM2eXLHmIx%2BG8tjHwGAfrsHls6N6JoGyI1RGN&X-Amz-Signature=5157815d2a2b689955da7343ce73fd080955fce939ea11ebed6163b76abfecb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
