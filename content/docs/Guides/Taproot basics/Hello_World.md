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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODZXCBR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJNNJZiL1Ip64F8oYre5YiNi%2FKj3egP%2BBSMBAaiZJLJAiEA65okJDwqHh0CjdJQ4Tbs0tWYmq7%2Ft7DmfdoVl3YJTIoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDVub0AAi2Zx6xUjdCrcA9VXePuGss9YA4WKLi8e09UygAij2IsHr2%2FGxoZF8x4H7N03W0ygoMWndqhCX9tt3ElgdnJI3O534RIximgJkVp4dv1iZ6nPKQc3356880%2FaQr55xfg2c%2F2hvZBDbjQe%2BxiJOgnkDh%2BM38fKISTwz%2BiAucDo5A7Y8JbTt9yMBJ84WROcONdIusT8qq2lircUbHSdrsH7ISNvPS30%2FYKrvLnOoEAdhLBHThkCyd5DbVVkHB34FaawDGbih0ut487%2FAsbFo1k4uJzlIjts1AoksVCdehUsqBXQ33hKRUtOYErO9qEjorHkgexiJWb3iTuJo%2BG3r83KJ9DCpFiQ%2BXigDJTQtn1xYW%2FSQ07%2BwhMXx32gv1PcKxH144vYyKBBzbudt99TJpoYbO7WivW5H2XtaWYK9D6yWnBUsocw8YHzjjxEJt9aBFW1PsX5f94dPrpjYTLU5NSCh8Rzp5hruaVacMfZd1u%2Fg1kzFStfuVxqE5beSMYdZlLzRnBwg9iTMpJApoWrVKJIgNdEx0QQji0GDUJ9mt9JfjIMqTSrvqChyrcA9ipZ4BmhTVjp%2FTnKBC4xA5JL32wxJOQ%2FZrRZXS1lrZfCx48iPXbGCSrrJlfwXpva%2Bkt6gsPFSqm7JwM5MJTYisQGOqUB0B%2BL97h4xAbEQDqfXRhSMJGF7X0v%2B0v9pcMkauKXS7mc6l3e6Rs3d51DDU5Sew22vltzb7z%2FPM4gwDbeRZ8qn%2B5kPJCoStSxUo37XhXLSBsCs6BviJhigr3W0KSP7ybK3pv0GtzIlk7%2F7WFMqTG4U8DvE6r%2BUoATZWrlw9s%2B5tFbNloxEbGKE8L6TRkURea0u1DxcVI9qzTf6UqsW0Q9S6cFYSaf&X-Amz-Signature=86e1c7f4b1dcc7a12c291d68dd45bd813b1b73801521cdd842767cf10ac18027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODZXCBR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGJNNJZiL1Ip64F8oYre5YiNi%2FKj3egP%2BBSMBAaiZJLJAiEA65okJDwqHh0CjdJQ4Tbs0tWYmq7%2Ft7DmfdoVl3YJTIoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDVub0AAi2Zx6xUjdCrcA9VXePuGss9YA4WKLi8e09UygAij2IsHr2%2FGxoZF8x4H7N03W0ygoMWndqhCX9tt3ElgdnJI3O534RIximgJkVp4dv1iZ6nPKQc3356880%2FaQr55xfg2c%2F2hvZBDbjQe%2BxiJOgnkDh%2BM38fKISTwz%2BiAucDo5A7Y8JbTt9yMBJ84WROcONdIusT8qq2lircUbHSdrsH7ISNvPS30%2FYKrvLnOoEAdhLBHThkCyd5DbVVkHB34FaawDGbih0ut487%2FAsbFo1k4uJzlIjts1AoksVCdehUsqBXQ33hKRUtOYErO9qEjorHkgexiJWb3iTuJo%2BG3r83KJ9DCpFiQ%2BXigDJTQtn1xYW%2FSQ07%2BwhMXx32gv1PcKxH144vYyKBBzbudt99TJpoYbO7WivW5H2XtaWYK9D6yWnBUsocw8YHzjjxEJt9aBFW1PsX5f94dPrpjYTLU5NSCh8Rzp5hruaVacMfZd1u%2Fg1kzFStfuVxqE5beSMYdZlLzRnBwg9iTMpJApoWrVKJIgNdEx0QQji0GDUJ9mt9JfjIMqTSrvqChyrcA9ipZ4BmhTVjp%2FTnKBC4xA5JL32wxJOQ%2FZrRZXS1lrZfCx48iPXbGCSrrJlfwXpva%2Bkt6gsPFSqm7JwM5MJTYisQGOqUB0B%2BL97h4xAbEQDqfXRhSMJGF7X0v%2B0v9pcMkauKXS7mc6l3e6Rs3d51DDU5Sew22vltzb7z%2FPM4gwDbeRZ8qn%2B5kPJCoStSxUo37XhXLSBsCs6BviJhigr3W0KSP7ybK3pv0GtzIlk7%2F7WFMqTG4U8DvE6r%2BUoATZWrlw9s%2B5tFbNloxEbGKE8L6TRkURea0u1DxcVI9qzTf6UqsW0Q9S6cFYSaf&X-Amz-Signature=4bd430f2ab346688d8a0635e3aab9dd268089925323fb9ed930550369187a411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
