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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXM2YMUT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGQizWHmWgkJ1orH%2FxvBEdW8cg%2Ft6QinuyUhWjs8%2BntnAiBwF8rD0iuxUXOcn0%2FFMv6YO0kLE53hPg1MPFnmYdagXSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWjM0obWV1ACVg0KUKtwDo4k9RHUMzdJxw7GWfV6vhLw6aeiJ%2FceiH5xkNupLxOsEtibD2LjTkrVmA4g5VcilXZ3xnhEol2KfLOsbstxezleGoHG4vWe%2BNY%2Bkw5vzZQwMtP8QDfI8NBZRywdNllV5czbRlVoVwWkNzJuIylqM%2FgcBoQrV5u42HfEVRVLh96JmNFb7F8QfvvxWd%2BCFesuXp9Xfrs%2BhO4YL0czhaO3o5f6MDlYckMGmju%2F00TK2u28MZiwBDRsAjn5yBe6Gwt%2BUvLc3IFW37YT5bOCn6OppwDeLzmlwYMTI0Eg13UzbzKqSQmqWoyi0DaEcjGKp5LigMsMhIJBq%2Fzy4xUwgEgDJAdai%2FntLAYbyNQEvOKbnuNzKkQgkJivZDbS8VW0RVhPFbZHQHa9LRqAoGEEJQ%2B7BKMMU5knl5otr1FncFDquF3ub9xcRli9r8hfTncAu64IyhEanb8oJ%2BTyJxfatg%2FjIoALiakEz1%2BWw5I%2BCEZ6mp%2FyBPKlhATRGMQKs1H144wLkxT%2BLbFOWATRdroSYwaOJ7Wnq3AGWcEwi82N0xvLzhNQFr1a%2BYTbA%2FymBeLCFVF32eXWGOSpNqRdNBBF9kfkA31WboN%2FeitaLsNEGlclsTHhirNlWJKcDZL9brNww34X9wQY6pgFgZ12lWd4Qf3QitiGZNMK7mmdH%2BLXVRrVQzxSfKxM8KzRvFIw0uLB%2FdgZFxSyE1maZNKFVvVHgNnwcmpIm6FPpDDKmkIGMZbevCxpyQHlV5Nb3G%2FQ4yQpbyqTpZmqvCuKf4vmmlzqJEjvGc6hqsIsLlGZ6wvmMeNbB5keO0t%2BPpI2Ha3xvY1eOLkx6hoGNCbuooKWHaqzdHJAx%2FPebqAKfRgBmxRd5&X-Amz-Signature=5efe17468d90d42d262f7703e35bb9daa8997f9828637e11c34a0b9e2902af46&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXM2YMUT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGQizWHmWgkJ1orH%2FxvBEdW8cg%2Ft6QinuyUhWjs8%2BntnAiBwF8rD0iuxUXOcn0%2FFMv6YO0kLE53hPg1MPFnmYdagXSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMWjM0obWV1ACVg0KUKtwDo4k9RHUMzdJxw7GWfV6vhLw6aeiJ%2FceiH5xkNupLxOsEtibD2LjTkrVmA4g5VcilXZ3xnhEol2KfLOsbstxezleGoHG4vWe%2BNY%2Bkw5vzZQwMtP8QDfI8NBZRywdNllV5czbRlVoVwWkNzJuIylqM%2FgcBoQrV5u42HfEVRVLh96JmNFb7F8QfvvxWd%2BCFesuXp9Xfrs%2BhO4YL0czhaO3o5f6MDlYckMGmju%2F00TK2u28MZiwBDRsAjn5yBe6Gwt%2BUvLc3IFW37YT5bOCn6OppwDeLzmlwYMTI0Eg13UzbzKqSQmqWoyi0DaEcjGKp5LigMsMhIJBq%2Fzy4xUwgEgDJAdai%2FntLAYbyNQEvOKbnuNzKkQgkJivZDbS8VW0RVhPFbZHQHa9LRqAoGEEJQ%2B7BKMMU5knl5otr1FncFDquF3ub9xcRli9r8hfTncAu64IyhEanb8oJ%2BTyJxfatg%2FjIoALiakEz1%2BWw5I%2BCEZ6mp%2FyBPKlhATRGMQKs1H144wLkxT%2BLbFOWATRdroSYwaOJ7Wnq3AGWcEwi82N0xvLzhNQFr1a%2BYTbA%2FymBeLCFVF32eXWGOSpNqRdNBBF9kfkA31WboN%2FeitaLsNEGlclsTHhirNlWJKcDZL9brNww34X9wQY6pgFgZ12lWd4Qf3QitiGZNMK7mmdH%2BLXVRrVQzxSfKxM8KzRvFIw0uLB%2FdgZFxSyE1maZNKFVvVHgNnwcmpIm6FPpDDKmkIGMZbevCxpyQHlV5Nb3G%2FQ4yQpbyqTpZmqvCuKf4vmmlzqJEjvGc6hqsIsLlGZ6wvmMeNbB5keO0t%2BPpI2Ha3xvY1eOLkx6hoGNCbuooKWHaqzdHJAx%2FPebqAKfRgBmxRd5&X-Amz-Signature=e58628b5c609cc59229b934a336a9dbcbfb8bd230f49cc661206f3682e21dbfd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
