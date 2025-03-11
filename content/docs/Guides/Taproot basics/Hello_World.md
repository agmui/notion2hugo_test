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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVVDXAA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDhWdLpYFAxJ%2FnKCFzUeJMhHVT6pdYOWyvUuXSpsd7WYAIhAMAhqPUltJSgvvbDEKAZFsUQDBBoMUUxQk76syeJcylGKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Sffa55OxcXp%2Fph0q3AME1HhQfDMbwyejsogv0mufzIaWViI3AcmpptUW75IaATnPFXW3jHAiz8Z%2BneYNwMmEZLhEiNoecVktghu1DxClMjSop0R3k19Dx3Ybb2GIo2B85ytZLQUtewlezVcMQ1Nro1EsE%2FU%2BrwZyFaLracIMnhYgMYHYiaxB1kyHvB1nGXmBaQHYVlkKy9SIUh28n94OYluoKq1ozTWGFpPMqUgRgcjWdbfnCNb7Y5H9PzdNLSay%2FlCxeWjcdP5DQ%2FvhSQZe6QXBEjtpSSPsOylbmZOIp60%2FcbtQLtwto1SDVNtPXTv3FQDAAfd%2Bm3U7%2BWDUeDpGH0qTOVrZyopb%2BcdjCMLUl%2B1pF5ueYh0LdCCM4YjtFKnMjoBVMbIFkeZ5FWREnqQ5s%2BogGVmScDt7z%2BMENo09kkfvjl2goeaW5TsN%2F3RbMeyscdsICLhJROvzNh6Jn3fPSTHcQpcX2ZIX6k1bBim92trnPIQXoLB3yzDPcZjf9g%2FQruF%2BPfWayf2ENMPauRFftpAGMXQJF81l1vcKpA8TRZaYlkiPAYimiBWNNQy8kZrhrtl1gxnTkAOEP6Ih3UP648DrWtpAtCaNJKpCQ7EiTPOwO8eJ99Tq1L%2BK5muOwjCwEuUMs3Q4GL8dpzCgysC%2BBjqkAZdkKIbUb4rBBTW4OZfydTAVqIhs8hNPcfsQeKz9%2BByK7paaxIR97sSGmKO%2FhX8BQOOA%2BbBslp3%2BozDP%2FG%2B0VTKmrtYYpJW1dDBQKn7S94%2FgeU1mnZFZDYaiyDBU%2BmLXsETNxYd6PLd7tPhsQM%2BHNnNuHFplVVqoZoPeGZyfCoEqPE0grrF4wAh5hO145ugKyjLskPfBb4%2B2DxLRjM%2Bo8c7S6Dhj&X-Amz-Signature=93f35ce5be56b5b99dec556d34707532174dff82b419e2ce1ecbd532411abd10&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVVDXAA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDhWdLpYFAxJ%2FnKCFzUeJMhHVT6pdYOWyvUuXSpsd7WYAIhAMAhqPUltJSgvvbDEKAZFsUQDBBoMUUxQk76syeJcylGKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Sffa55OxcXp%2Fph0q3AME1HhQfDMbwyejsogv0mufzIaWViI3AcmpptUW75IaATnPFXW3jHAiz8Z%2BneYNwMmEZLhEiNoecVktghu1DxClMjSop0R3k19Dx3Ybb2GIo2B85ytZLQUtewlezVcMQ1Nro1EsE%2FU%2BrwZyFaLracIMnhYgMYHYiaxB1kyHvB1nGXmBaQHYVlkKy9SIUh28n94OYluoKq1ozTWGFpPMqUgRgcjWdbfnCNb7Y5H9PzdNLSay%2FlCxeWjcdP5DQ%2FvhSQZe6QXBEjtpSSPsOylbmZOIp60%2FcbtQLtwto1SDVNtPXTv3FQDAAfd%2Bm3U7%2BWDUeDpGH0qTOVrZyopb%2BcdjCMLUl%2B1pF5ueYh0LdCCM4YjtFKnMjoBVMbIFkeZ5FWREnqQ5s%2BogGVmScDt7z%2BMENo09kkfvjl2goeaW5TsN%2F3RbMeyscdsICLhJROvzNh6Jn3fPSTHcQpcX2ZIX6k1bBim92trnPIQXoLB3yzDPcZjf9g%2FQruF%2BPfWayf2ENMPauRFftpAGMXQJF81l1vcKpA8TRZaYlkiPAYimiBWNNQy8kZrhrtl1gxnTkAOEP6Ih3UP648DrWtpAtCaNJKpCQ7EiTPOwO8eJ99Tq1L%2BK5muOwjCwEuUMs3Q4GL8dpzCgysC%2BBjqkAZdkKIbUb4rBBTW4OZfydTAVqIhs8hNPcfsQeKz9%2BByK7paaxIR97sSGmKO%2FhX8BQOOA%2BbBslp3%2BozDP%2FG%2B0VTKmrtYYpJW1dDBQKn7S94%2FgeU1mnZFZDYaiyDBU%2BmLXsETNxYd6PLd7tPhsQM%2BHNnNuHFplVVqoZoPeGZyfCoEqPE0grrF4wAh5hO145ugKyjLskPfBb4%2B2DxLRjM%2Bo8c7S6Dhj&X-Amz-Signature=b090dd512128f8195ae4b46a8935a8dab18351999d1757a4b9dad917bd5c5c43&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
