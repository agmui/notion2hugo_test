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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCBC6T3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCXfzlbHcGDojn4zM62iKfVUmIkqQUOC2nn7GI5VrcJQIgPT3T8Wp6fCM9VeTQkbQTbJJ1gS4AQp%2Be3mNV6%2FfGOjYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhv4mJo7qdkSpDlSCrcA3%2Fve8HBXXita31bYO0Y8i7IB2fAX9GJB0SIBZ3B8NcL%2FzBnMbg5yH9haEMFDyePRegG4mw9B4h2vSd51l3n8Er7Z3K1DSsLhociSVIDDfPFJ8gEzJlcZ%2FQMRCjRny8nWRlTcbQcYgRGr6I%2Bb4MY33CR0vPgZMgzP6nMcbYyxUumNOWgZZHrvMUjaoX7eOSLx%2BPElCNRaOoJC0r8qeWYNdQ3dwIVkyihu3ilial3D6QbIL4Gju0A6mqCBH%2FdazwjiBH0FSB%2Fy806G8GwUzSg8b%2F94Vm3FYo3KuGoUFJquX4EyTE09sOPPJdBvgeQDaZAYTtZWdCnShm1%2F9UDO553ic2fsXhrfAIYMWnwX8qC5KcVWOoeD%2FaSq%2B5%2Fdg%2BQYoBZ9rsMuRIDE2l0f4xFX8jQJpF3HbH4do8xQ1rNaZRvmKqd0eZqZ04fiR2kYqQYqs7pbcLZPZlyaCa9MpSxciB4JHyWBLn9abRC9uMq05ZvngZyXePFhY8DCuc6oxQTYajc2UeqExjDv5FTktrzV%2BPIvW0rYgERS78%2FJWJYCswCP19gPpLzT4N9K0O2%2BquAuQD9c3G0qAaAWuCd8EK8xux8S3kyQFxgkd7NgvDMuMmT9GYRpXn%2BGG6CoN1a8XZpMIX%2BssEGOqUBVyTmNuZ8QIZCeCyx%2BMOgWS%2Fh%2FSgxIUO4BoICp%2FC5VxHTSPPEEPjHrYkNhjkJcqgyKrGiVyTA%2Bj4iPPyfb6pUmRPqSvhSiL8jpfXr3buZ%2Bp6THnHX6%2FYqFlm4IKapPCIx2rwF8cl9PXnigNwqO3CXHGBroSy9ovFHieDf98mfwMnGU6Jyk8U8xVYySnbEbHmN4i2L2IJGgmzf3TAlvAH7SATbVZvm&X-Amz-Signature=f6bb8a4b45be1d7f0084dc637f29b972db6716b11c06fd0fd3ad417a6ad37616&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCBC6T3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCXfzlbHcGDojn4zM62iKfVUmIkqQUOC2nn7GI5VrcJQIgPT3T8Wp6fCM9VeTQkbQTbJJ1gS4AQp%2Be3mNV6%2FfGOjYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhv4mJo7qdkSpDlSCrcA3%2Fve8HBXXita31bYO0Y8i7IB2fAX9GJB0SIBZ3B8NcL%2FzBnMbg5yH9haEMFDyePRegG4mw9B4h2vSd51l3n8Er7Z3K1DSsLhociSVIDDfPFJ8gEzJlcZ%2FQMRCjRny8nWRlTcbQcYgRGr6I%2Bb4MY33CR0vPgZMgzP6nMcbYyxUumNOWgZZHrvMUjaoX7eOSLx%2BPElCNRaOoJC0r8qeWYNdQ3dwIVkyihu3ilial3D6QbIL4Gju0A6mqCBH%2FdazwjiBH0FSB%2Fy806G8GwUzSg8b%2F94Vm3FYo3KuGoUFJquX4EyTE09sOPPJdBvgeQDaZAYTtZWdCnShm1%2F9UDO553ic2fsXhrfAIYMWnwX8qC5KcVWOoeD%2FaSq%2B5%2Fdg%2BQYoBZ9rsMuRIDE2l0f4xFX8jQJpF3HbH4do8xQ1rNaZRvmKqd0eZqZ04fiR2kYqQYqs7pbcLZPZlyaCa9MpSxciB4JHyWBLn9abRC9uMq05ZvngZyXePFhY8DCuc6oxQTYajc2UeqExjDv5FTktrzV%2BPIvW0rYgERS78%2FJWJYCswCP19gPpLzT4N9K0O2%2BquAuQD9c3G0qAaAWuCd8EK8xux8S3kyQFxgkd7NgvDMuMmT9GYRpXn%2BGG6CoN1a8XZpMIX%2BssEGOqUBVyTmNuZ8QIZCeCyx%2BMOgWS%2Fh%2FSgxIUO4BoICp%2FC5VxHTSPPEEPjHrYkNhjkJcqgyKrGiVyTA%2Bj4iPPyfb6pUmRPqSvhSiL8jpfXr3buZ%2Bp6THnHX6%2FYqFlm4IKapPCIx2rwF8cl9PXnigNwqO3CXHGBroSy9ovFHieDf98mfwMnGU6Jyk8U8xVYySnbEbHmN4i2L2IJGgmzf3TAlvAH7SATbVZvm&X-Amz-Signature=d2a29f5c69ce35c9a6ef13b672dfc3240a493de3283712519d5ae02a00aa5074&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
