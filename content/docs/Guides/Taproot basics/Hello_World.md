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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NULNO6M%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMVQCpNj%2BIzES2V4nO5lGkJoiOAD6FaHuHKxLxDs3%2F6wIgL08K8f1fWxChyG%2BJkg1k7DZt%2Bacz3QGJ%2FQaONYU5pwcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDP7UtlkMMeYl9hQfYyrcAxCGlrtwtc1v%2FaohtPFvWTh9jH7lAvz2xCq91HtfmB6GL2jQWal9B0oCYWea0aV1jveHQi5XfibuWbEntBKHE9fhHqS4rGvQ5u3XNMIKVty0UxJt4Ll88tHY1iyncjqsYoVebCnJU8ZKY6j7SHMSJfIKlCCTqZYAEabr7jWED1F1Gv7kCYzz%2BpZTX2AgApLRkVYl8aSq1ms2bwPV90DgRXXkQW1qwb%2F8jeyS0IlEYRSvaIJNLXvtFp%2BNevlDypV9ePEIs19qFKSWqtMhhwLbbmba3NLlyfv%2Frz8UfUgyIIehGa1qLRhdORLl55MPKzijNGWMvGmVkTmIQeqeRU03T3cMZl%2BBqQFJQ2wq4CwWjhQDZfj6LzPGwPmIEEh7iwxv1%2Fu3cuARaztJKeeJdx47r6DCj7915LzikSGCm%2BfhqbtCeyK2MdpQt1kuwNsqn%2FdtpSjCk1XoRE11jTlMNSqjFh0rCA4Sqy6x43z5uqZWhibymVaYPxR8mQrid2RgF589pmPbCh3S8%2FlYqKOPkKj6TOdUhqpxi3Mfz6H22Zm4kObcsDDwb6YPCjrPtr%2BiFaSXyqiNITVTBz3uclbikuNxC3ciTj%2FVLAqNbxT2r4kbAz%2F1M%2BYWNnguAR9xcLXbMLKf7b0GOqUBteCn6nYmf4F2YVaFOzUwmOf%2B%2BtNnL4jH3Cb%2FGD5LTababbTXoSU3nTw8%2FBIDAKx1qkOYyZLquafSKPsyzTLsZfkcXyNABxn2sUyR7d%2B%2F1%2BTteU6FJtfJ3h%2FBBePPDYDZCRGPvaOATZCKgl515z1jfqyNKoaL80UoqQD%2FkgDy%2BfZSGRGdoa9yWUJ41LyalZ9VDm53%2F867fKmxE0GUd4VENvAFPft%2F&X-Amz-Signature=44dd344d2327bc2b49c652dcad9e8139fad3884c3e1fb053b020d488f81cc948&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NULNO6M%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMVQCpNj%2BIzES2V4nO5lGkJoiOAD6FaHuHKxLxDs3%2F6wIgL08K8f1fWxChyG%2BJkg1k7DZt%2Bacz3QGJ%2FQaONYU5pwcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDP7UtlkMMeYl9hQfYyrcAxCGlrtwtc1v%2FaohtPFvWTh9jH7lAvz2xCq91HtfmB6GL2jQWal9B0oCYWea0aV1jveHQi5XfibuWbEntBKHE9fhHqS4rGvQ5u3XNMIKVty0UxJt4Ll88tHY1iyncjqsYoVebCnJU8ZKY6j7SHMSJfIKlCCTqZYAEabr7jWED1F1Gv7kCYzz%2BpZTX2AgApLRkVYl8aSq1ms2bwPV90DgRXXkQW1qwb%2F8jeyS0IlEYRSvaIJNLXvtFp%2BNevlDypV9ePEIs19qFKSWqtMhhwLbbmba3NLlyfv%2Frz8UfUgyIIehGa1qLRhdORLl55MPKzijNGWMvGmVkTmIQeqeRU03T3cMZl%2BBqQFJQ2wq4CwWjhQDZfj6LzPGwPmIEEh7iwxv1%2Fu3cuARaztJKeeJdx47r6DCj7915LzikSGCm%2BfhqbtCeyK2MdpQt1kuwNsqn%2FdtpSjCk1XoRE11jTlMNSqjFh0rCA4Sqy6x43z5uqZWhibymVaYPxR8mQrid2RgF589pmPbCh3S8%2FlYqKOPkKj6TOdUhqpxi3Mfz6H22Zm4kObcsDDwb6YPCjrPtr%2BiFaSXyqiNITVTBz3uclbikuNxC3ciTj%2FVLAqNbxT2r4kbAz%2F1M%2BYWNnguAR9xcLXbMLKf7b0GOqUBteCn6nYmf4F2YVaFOzUwmOf%2B%2BtNnL4jH3Cb%2FGD5LTababbTXoSU3nTw8%2FBIDAKx1qkOYyZLquafSKPsyzTLsZfkcXyNABxn2sUyR7d%2B%2F1%2BTteU6FJtfJ3h%2FBBePPDYDZCRGPvaOATZCKgl515z1jfqyNKoaL80UoqQD%2FkgDy%2BfZSGRGdoa9yWUJ41LyalZ9VDm53%2F867fKmxE0GUd4VENvAFPft%2F&X-Amz-Signature=22638f5f5da5c365f43701a4d6e3fa49c96ec9b81e0dd8a62378acd55baf7579&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
