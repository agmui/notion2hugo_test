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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXWIMHH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2g3MXxXEF5VuhDdobhs0AfuGeXdGuk0O1O%2BpeKIBgHAIhAK3XZBXlovYu4DpmB97FzHhp6tgrbfE%2F96GpNxjyZhdUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVT3xWyVh%2BCe8VReYq3APEfwq6MMO8wQW4PFThG7a2LER77bf6MwcrqJj%2BtUNrrk2znAdKJnOhUAa%2FbdGN8Z%2FLRIC3M7sxzObrc2VdaDXuzPqh0BtygHNv6mEaiW6%2F5WR%2FqqBILodzCYc1vxeE%2FbbNGF0maGKnPnciMPJByxBQ2enBIVY9tHjO79KmYtatR0fCjP0Wo2YQGXllG8mb4%2BrrFzwwPjlQMQRevI9me0llfnhoS%2BfVn9Aj1FD%2Fy8RceXmCaBKqfofWn2%2F528qoTOx497%2FsiiRzMYRqykj4aGt6xhhx%2BW18QJJOeq5M2IBIE0cdpwsdk8FB8z4jSoaJC%2BLgx%2BoVZqE3cCDC%2FehdmzJmfPHkUbHZg4e8ehQT0NQtF5Rym9HrzceN0Sn%2B8zhw4%2B1OGPcL304g5cvJo7AHgVUjuJmT992I3KKqkkGNTumaQ0rtc%2BHqr64GOx%2FiElddjp5NX%2Fty8YcKC5sq0UYqFKFkuTGL8Gh1UGxwHP7MNu9ir5eJVsUnCc8jY5OlwyRdAaLpVQxEYV9Qtz2qoUrdqM1tVC6Fbo%2BD1VUUsnX83%2FuJneupnUwbl%2FI8gNQ1ovV33CrNvpBAdNGy9Li9Zuy9E5PwvfcPih2SZAhVFd0MUd3yIYCM6Lojlwu%2BjL%2FKJDCXzKDEBjqkAW35WXPURwQ%2Bc1wfqg%2BByENoV4c3S8TzcA6%2BgbKLv6xscgfHWRI3Fdme2MvlrqGM4L0a78QB6DYntRX7AFGO2YYHhUn4S3DNdU8oQccJlGPmTnnQLXoMhTFFZAPQvCsRsdvMEGFKBwDJdM37o8RX8VADK1IfJ701ewAPaCRq3zLPYsPvQmmjhLbOr9sKHmtTUsQCgiazro94qugdUyoC69Hjehza&X-Amz-Signature=732c149ed3a0009eb54e5243154cceabdb5857446eb9d820d5a8490170262fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXWIMHH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2g3MXxXEF5VuhDdobhs0AfuGeXdGuk0O1O%2BpeKIBgHAIhAK3XZBXlovYu4DpmB97FzHhp6tgrbfE%2F96GpNxjyZhdUKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVT3xWyVh%2BCe8VReYq3APEfwq6MMO8wQW4PFThG7a2LER77bf6MwcrqJj%2BtUNrrk2znAdKJnOhUAa%2FbdGN8Z%2FLRIC3M7sxzObrc2VdaDXuzPqh0BtygHNv6mEaiW6%2F5WR%2FqqBILodzCYc1vxeE%2FbbNGF0maGKnPnciMPJByxBQ2enBIVY9tHjO79KmYtatR0fCjP0Wo2YQGXllG8mb4%2BrrFzwwPjlQMQRevI9me0llfnhoS%2BfVn9Aj1FD%2Fy8RceXmCaBKqfofWn2%2F528qoTOx497%2FsiiRzMYRqykj4aGt6xhhx%2BW18QJJOeq5M2IBIE0cdpwsdk8FB8z4jSoaJC%2BLgx%2BoVZqE3cCDC%2FehdmzJmfPHkUbHZg4e8ehQT0NQtF5Rym9HrzceN0Sn%2B8zhw4%2B1OGPcL304g5cvJo7AHgVUjuJmT992I3KKqkkGNTumaQ0rtc%2BHqr64GOx%2FiElddjp5NX%2Fty8YcKC5sq0UYqFKFkuTGL8Gh1UGxwHP7MNu9ir5eJVsUnCc8jY5OlwyRdAaLpVQxEYV9Qtz2qoUrdqM1tVC6Fbo%2BD1VUUsnX83%2FuJneupnUwbl%2FI8gNQ1ovV33CrNvpBAdNGy9Li9Zuy9E5PwvfcPih2SZAhVFd0MUd3yIYCM6Lojlwu%2BjL%2FKJDCXzKDEBjqkAW35WXPURwQ%2Bc1wfqg%2BByENoV4c3S8TzcA6%2BgbKLv6xscgfHWRI3Fdme2MvlrqGM4L0a78QB6DYntRX7AFGO2YYHhUn4S3DNdU8oQccJlGPmTnnQLXoMhTFFZAPQvCsRsdvMEGFKBwDJdM37o8RX8VADK1IfJ701ewAPaCRq3zLPYsPvQmmjhLbOr9sKHmtTUsQCgiazro94qugdUyoC69Hjehza&X-Amz-Signature=07bbea03b50000480de1135247274be6ae8d4e139e232cd5aadfc3eed138c17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
