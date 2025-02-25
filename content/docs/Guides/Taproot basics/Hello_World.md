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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEW4FWFR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDh5ee08uo4E%2B2XYfEs2hsf4eWbKnuKBysg0x3XB3hTHAiBV0x5g6MFiyIR5IWp5GIIVu1FZtrZMMaZM2bM6SDY2ECr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMV%2Fd19cNVy4wxDQtbKtwDofoY4Tz1Tujj6N2kN3FchImCra0vLzIbwapR6XLwlE7rKBQI0NPMqpFh60kAMbpBTid4YiHyA77s7WOH7OyPvxdvNXDHzvEF6TTjekm0o6zjr80VOiKxziQL68VP4eSrlpoCGKPRFDArWqrR03GsgV9sW1FLgbQB63VBwD59b0R127cG5u2XWm6W4SAJwMMe4AD1noxcwyxx%2Bj%2FwSXXkeku4JALFvGvVNnvGKc%2FdB96zVEVi8K5RyQ%2FaOL5m%2B4Wa4yYjdzWpKFQ1bZs5exWA1SkU0mRv1aSjwxylCXBYUigAXuRbTWiQIYwdIR9nnLU%2FUoqmW1vxxRkvL4Nbw9pKZJ1tgPtu7Wijptg26Gea6bLK0XgJumx6N3pdLn1NnvMifAWyvPjQbQ3xpr97E1roLScrCaBSjcjzMiQUJB0aMmBUJWr1LGtu0vL1axBfFY9DyLM5TBqYeNixlFd0bx0hkxK00DnxWeBX1259zMp7TTi%2FoDARsp4BnuykSZgvTKAXmif7ZLZ4H%2FnITV2YE71%2FDTjrfNWUKHTdA6Sk%2FHXZkN3J9BagLOFUHsQZ5P2ZbJ7qQrN8VgygoDNphTy1ncGngg1IpVR73lHcNRjNnw47hDfWav2EhNIqm8syGMwwooL5vQY6pgH08%2BlOBsuphWByKmN9T7Q53pBso58gGl7QaO9dSrgrrrj05v79zVLUTrsGMQL3WIHdi4iKaIq5lx5T1Y9Af1%2FsxX5XfhBE%2FPtv7hAAu33xdUB5gQ7aAygA7u41VwCpyt2AH098N%2F3K20XuI5GReUdmXImIJVS%2BgRwwc2sNNZB3F7m1csCoaKbdIb5RzzffHtRncsUWJzLCqcmOxZcdJp0XIGo956Ot&X-Amz-Signature=ab7f42961f259f6471c897b28a44d3aaaefc38a7a055079fa6e7f991428697b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEW4FWFR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDh5ee08uo4E%2B2XYfEs2hsf4eWbKnuKBysg0x3XB3hTHAiBV0x5g6MFiyIR5IWp5GIIVu1FZtrZMMaZM2bM6SDY2ECr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMV%2Fd19cNVy4wxDQtbKtwDofoY4Tz1Tujj6N2kN3FchImCra0vLzIbwapR6XLwlE7rKBQI0NPMqpFh60kAMbpBTid4YiHyA77s7WOH7OyPvxdvNXDHzvEF6TTjekm0o6zjr80VOiKxziQL68VP4eSrlpoCGKPRFDArWqrR03GsgV9sW1FLgbQB63VBwD59b0R127cG5u2XWm6W4SAJwMMe4AD1noxcwyxx%2Bj%2FwSXXkeku4JALFvGvVNnvGKc%2FdB96zVEVi8K5RyQ%2FaOL5m%2B4Wa4yYjdzWpKFQ1bZs5exWA1SkU0mRv1aSjwxylCXBYUigAXuRbTWiQIYwdIR9nnLU%2FUoqmW1vxxRkvL4Nbw9pKZJ1tgPtu7Wijptg26Gea6bLK0XgJumx6N3pdLn1NnvMifAWyvPjQbQ3xpr97E1roLScrCaBSjcjzMiQUJB0aMmBUJWr1LGtu0vL1axBfFY9DyLM5TBqYeNixlFd0bx0hkxK00DnxWeBX1259zMp7TTi%2FoDARsp4BnuykSZgvTKAXmif7ZLZ4H%2FnITV2YE71%2FDTjrfNWUKHTdA6Sk%2FHXZkN3J9BagLOFUHsQZ5P2ZbJ7qQrN8VgygoDNphTy1ncGngg1IpVR73lHcNRjNnw47hDfWav2EhNIqm8syGMwwooL5vQY6pgH08%2BlOBsuphWByKmN9T7Q53pBso58gGl7QaO9dSrgrrrj05v79zVLUTrsGMQL3WIHdi4iKaIq5lx5T1Y9Af1%2FsxX5XfhBE%2FPtv7hAAu33xdUB5gQ7aAygA7u41VwCpyt2AH098N%2F3K20XuI5GReUdmXImIJVS%2BgRwwc2sNNZB3F7m1csCoaKbdIb5RzzffHtRncsUWJzLCqcmOxZcdJp0XIGo956Ot&X-Amz-Signature=80d07a208ac7deb053398c6a01e8a17344636a49247357b26925e3b812b4aa18&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
