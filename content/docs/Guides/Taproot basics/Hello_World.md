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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLJJOI3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk7U%2F7d6yw977SX66vWp%2FvTk1tLiW3TMnn1iONTMwlXAiAEDBT53AM3ezBgC8eglHCUU%2Frej6IGgpfYVwJ1dEQHTSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMQ3mhMjifmstdjtoGKtwDx8YiQPG14HBN%2BwN448w019ZZXH4jDaJ68hVqMINUvOX7oJqgEPJqiax5kIXi1a3rwTSN2LCh0yP78gxdggUUSTIWgSFGQ%2Bk%2BD6Ge%2BOAY9cTT%2Basm6ZSs2XXQP5ixiFmWktjU76pAdk5cIvcBwthwpX5RfGFs20ee8Vxg4OSbl90YcQ0vNEERSPrDjUnkLw2yevR%2Bpz7NU6IdoWomSjMMb568UPakXy7%2FnN6VbB5KwWUUdNycW6PndDs9JkbBpGYV71FMea8%2FfQ5JXCb4RzXTuMGKvp0F9wHoYyIKvYg%2BiXW%2BUt0O2ZpvfOdeghYQwQ0UzhnscdJruQmTfzPO%2FSNviFufQ9aepBq5CQisKax%2F124CJ8MHXNg3xF4EtMH00Lbcnm8KdKmOqPGrEH8cmOlWL%2FeEs1xoHRgYn8fS3P4vqjo%2FV8LbknZZK8YlGcHPkJBD05vgbAhtpH6riCu9jo97nns%2BWeqH4I1UFGpxNcyH1CvBXdCrfqswnY7DoW09ODy9mUsM5UdOLao%2FXSrdk%2BGWV%2FrSdfDiKg4zswvXyFBtaRrzcPjN2ieNq6AV9Htr0%2FdZ6kq9bU9HcpRKKRFex5EIJyDYBR6N8E9h7a0sQZ6myoHBoDOppM7y9AWazJwwjfW%2BwAY6pgFGQuhK0mKpax%2FiWpGklx5Id6NBk9BFvQnd7N%2BaHDxY7RYVg0ujXxfzLnqaPFJUJ9ND00ictF3QFPohfGv1vlnhkzjh1btbWPPHaXnfPQbJPRWNC8YD8K9Ktxxad4mKa%2BDFC%2FOtVbC%2BzY5WLT%2BNuK%2FmfDn4tzY6hP7q59Sko%2BKdrnqtEwz7q1rJhZ3ReXTdEsRAVWF8iEpATcSGponcoaNaCja3ipB2&X-Amz-Signature=c7f24b891f4cb078431f4da7deb6450be5fd84766da7ba10532ad7c18ce3d80b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLJJOI3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk7U%2F7d6yw977SX66vWp%2FvTk1tLiW3TMnn1iONTMwlXAiAEDBT53AM3ezBgC8eglHCUU%2Frej6IGgpfYVwJ1dEQHTSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMQ3mhMjifmstdjtoGKtwDx8YiQPG14HBN%2BwN448w019ZZXH4jDaJ68hVqMINUvOX7oJqgEPJqiax5kIXi1a3rwTSN2LCh0yP78gxdggUUSTIWgSFGQ%2Bk%2BD6Ge%2BOAY9cTT%2Basm6ZSs2XXQP5ixiFmWktjU76pAdk5cIvcBwthwpX5RfGFs20ee8Vxg4OSbl90YcQ0vNEERSPrDjUnkLw2yevR%2Bpz7NU6IdoWomSjMMb568UPakXy7%2FnN6VbB5KwWUUdNycW6PndDs9JkbBpGYV71FMea8%2FfQ5JXCb4RzXTuMGKvp0F9wHoYyIKvYg%2BiXW%2BUt0O2ZpvfOdeghYQwQ0UzhnscdJruQmTfzPO%2FSNviFufQ9aepBq5CQisKax%2F124CJ8MHXNg3xF4EtMH00Lbcnm8KdKmOqPGrEH8cmOlWL%2FeEs1xoHRgYn8fS3P4vqjo%2FV8LbknZZK8YlGcHPkJBD05vgbAhtpH6riCu9jo97nns%2BWeqH4I1UFGpxNcyH1CvBXdCrfqswnY7DoW09ODy9mUsM5UdOLao%2FXSrdk%2BGWV%2FrSdfDiKg4zswvXyFBtaRrzcPjN2ieNq6AV9Htr0%2FdZ6kq9bU9HcpRKKRFex5EIJyDYBR6N8E9h7a0sQZ6myoHBoDOppM7y9AWazJwwjfW%2BwAY6pgFGQuhK0mKpax%2FiWpGklx5Id6NBk9BFvQnd7N%2BaHDxY7RYVg0ujXxfzLnqaPFJUJ9ND00ictF3QFPohfGv1vlnhkzjh1btbWPPHaXnfPQbJPRWNC8YD8K9Ktxxad4mKa%2BDFC%2FOtVbC%2BzY5WLT%2BNuK%2FmfDn4tzY6hP7q59Sko%2BKdrnqtEwz7q1rJhZ3ReXTdEsRAVWF8iEpATcSGponcoaNaCja3ipB2&X-Amz-Signature=1ce973d66c474312856b69df208cd578201d294704be49ac89e0ad2318f8a402&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
