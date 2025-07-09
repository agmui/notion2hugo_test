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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUPESHH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAF4xW0m3x%2Bw62mVH03jbQHDDWDckguqqfCus5bbBmuAiAhVsF%2BT8JwoHBD7ei572wztOq3Hlfh8nK30uVuXjJRIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw4leLZwUNLV3JqMwKtwDfvCj9LvK5Riqf%2BzttSoB0jqsa%2FppaPmpOe%2FZwltRLNnH4pa80UTYJ0Knvo%2Fo%2Fx4DWKpLwFDz0gxJpU4dNB9HMZA%2B3bpvRRZL7viZ6TNNx%2Bfe5M251FqmZ%2FnQXakU6mkXRw4YMaHqvlYSC84Eb7hhldCr%2BsmFwchQPWyNbLjhJl8ygPS%2FZtVgsugywt7rQ5d%2Fz3aXvyLuh4gH7fBWv5T2iFGAYzF7XUPVqB8m09Dmi7vU9aQ7JjY5jJiQIlaGjd7sXg%2BFxjoOJ23kwDlyy9mbKZvIfWvoCeDS5mK3RYj7O8k31iDCfQY2rcdd9AQegsIpFXuVbNUjRMUk5NUfuzXybwLEvhEloNxvJ82iuyzYzHkpn2yeaFzIIt6B2sMR%2FZWzk%2F0pA9EA2blVNC8RLA2RHEDJETCSYoGlzDbz4QvYzIY%2BjZ56eHJNo2sZqRvn1JvEQ7fXtf5IGkG%2F7v0lKyU4OZb87Hk9TKEE%2FD7XPnBGwGiQMs19Vpa0gHmWFeZESUbDGRnbFjioedKKLlvJYYIItzV67eQUZrmvi3W1hmULueE60fPouwK40vB7gru86DdSLdXCoAc26Bb%2FMKauBhUpJgokcqJu%2BIcgLqo%2BnUwWskEpIHhzWs%2BeMIWNp%2BEw%2Boq5wwY6pgE9RUMopFDJHWKuxVrozt6xWzM1JsKysUK5tDFWX1DkoN5SzfiK7eUOtNhOq20e4CFRTaDPhS%2FlvWK6fp035Aps%2BEH53azQgI%2BbZ6hl6ykUbSHuFqjvzJmaCa0WC1JJXGVxX9BofLrgjN3UHg43ni3aZnbibzmaDKPW7yJJxZw5yEESCF7xe6rv1vVZNII%2F6wDH8IKQd%2FliRGCnf%2FTGEMnrKWKkcyBT&X-Amz-Signature=a097e3e8e828e1ccc4d8b1bc8e6954cd20f86cb35c9616f06c6f0abe4fa1e764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUPESHH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAF4xW0m3x%2Bw62mVH03jbQHDDWDckguqqfCus5bbBmuAiAhVsF%2BT8JwoHBD7ei572wztOq3Hlfh8nK30uVuXjJRIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw4leLZwUNLV3JqMwKtwDfvCj9LvK5Riqf%2BzttSoB0jqsa%2FppaPmpOe%2FZwltRLNnH4pa80UTYJ0Knvo%2Fo%2Fx4DWKpLwFDz0gxJpU4dNB9HMZA%2B3bpvRRZL7viZ6TNNx%2Bfe5M251FqmZ%2FnQXakU6mkXRw4YMaHqvlYSC84Eb7hhldCr%2BsmFwchQPWyNbLjhJl8ygPS%2FZtVgsugywt7rQ5d%2Fz3aXvyLuh4gH7fBWv5T2iFGAYzF7XUPVqB8m09Dmi7vU9aQ7JjY5jJiQIlaGjd7sXg%2BFxjoOJ23kwDlyy9mbKZvIfWvoCeDS5mK3RYj7O8k31iDCfQY2rcdd9AQegsIpFXuVbNUjRMUk5NUfuzXybwLEvhEloNxvJ82iuyzYzHkpn2yeaFzIIt6B2sMR%2FZWzk%2F0pA9EA2blVNC8RLA2RHEDJETCSYoGlzDbz4QvYzIY%2BjZ56eHJNo2sZqRvn1JvEQ7fXtf5IGkG%2F7v0lKyU4OZb87Hk9TKEE%2FD7XPnBGwGiQMs19Vpa0gHmWFeZESUbDGRnbFjioedKKLlvJYYIItzV67eQUZrmvi3W1hmULueE60fPouwK40vB7gru86DdSLdXCoAc26Bb%2FMKauBhUpJgokcqJu%2BIcgLqo%2BnUwWskEpIHhzWs%2BeMIWNp%2BEw%2Boq5wwY6pgE9RUMopFDJHWKuxVrozt6xWzM1JsKysUK5tDFWX1DkoN5SzfiK7eUOtNhOq20e4CFRTaDPhS%2FlvWK6fp035Aps%2BEH53azQgI%2BbZ6hl6ykUbSHuFqjvzJmaCa0WC1JJXGVxX9BofLrgjN3UHg43ni3aZnbibzmaDKPW7yJJxZw5yEESCF7xe6rv1vVZNII%2F6wDH8IKQd%2FliRGCnf%2FTGEMnrKWKkcyBT&X-Amz-Signature=2e2679e37402ed3b7a1bb0284306361b4ead0e061d7a877fc749cc08247dfa8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
