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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7EZGU7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDCfD8CMujCdnybd3zIKuUuD2t1C%2FUpCv06HqAn3kJnCwIgEcH3FDGBt83Cxcq3FU%2FfL5FnxGq1M%2F5qKe%2F3Vp%2FIR%2BAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Twvsl%2B4JhvWYUxircA0L%2BbLqQi9V%2FTif6c%2BF2JJ1FApYElbbNZXUbcB4jBHIlaEBcjFV5KXvQqHJfuLgdGrDJJbC4k7gEssLU%2BqbMdEJb9uoz%2FWLjFfzroXI8cECFtinUk2ujhENhRXGK8M34%2FbtnlCbFQVroy%2BOfmJYPR1h2pOyj3Ywl6H73dUN2K1AS3weDTiO5xEISk2rfZ40D83FPTvSsGTvgX0rICAfmuO1NHUG%2B9nRJ4iFbcGlt8N2sgo6aIcpMLvBqX2Z3mN%2F4oNgrr4e7Nvc3siRGW5%2BBAVnXELM25FdDA2rRedYjgr9DbEUL99U5gZKxkIoHJZgs0DHAwwC1fTgduTIXsox463SVNiV%2FvBEDvJ4aD48qG5UcbprgmgeAP71FpfDFpDVFxcl03bug861vqY6rRvCYE%2BE4MAk7JZcvZiI1Cje0Mjt%2FB6ab0sauCaaTvnRTo9Zd8ILWL1gaacn37yOoeVjh%2Ftpb0%2FHMnMbyXo0zM9QdlgTo1KV%2BUG9omxjAUe7fEZdOcDZbU%2B7FlWEmoQZhc%2FDU7bC5uJ%2BkV94zt09XpF9HpP%2F5bwsXNeq6O4PMeap%2BriQAwqOdUPSNpZoYKdxrLiTgsJOFGY%2BiUAILT%2FD5N1JVi0qNb6QS7cvYTSJ35qedMPDw2sAGOqUBy5e%2FAgDw90pR2AV0MwvR42jMz5j6LEc4Vv7SUpfDWedOrBv%2FKSp2NIkYxvPs6eM%2B5u7HZvWxMHB9M0KAkjGzX7NHBWAsFu1pE1WZxXjuFnjmasoJmWQN3crgLdLg4jM%2BDQLnLyXt3wKYSqyV7ntqlXK%2FgHzNJpN36twEpQfdo9mhTq%2BbElTQhD5JEGoQ0StODjbIAIQjLuGYiTEGGVmBZZuB1Iqc&X-Amz-Signature=8c1aae387d82e59500b2c880d874f4758e346ed373a430ab92a45bee86984f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7EZGU7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDCfD8CMujCdnybd3zIKuUuD2t1C%2FUpCv06HqAn3kJnCwIgEcH3FDGBt83Cxcq3FU%2FfL5FnxGq1M%2F5qKe%2F3Vp%2FIR%2BAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8Twvsl%2B4JhvWYUxircA0L%2BbLqQi9V%2FTif6c%2BF2JJ1FApYElbbNZXUbcB4jBHIlaEBcjFV5KXvQqHJfuLgdGrDJJbC4k7gEssLU%2BqbMdEJb9uoz%2FWLjFfzroXI8cECFtinUk2ujhENhRXGK8M34%2FbtnlCbFQVroy%2BOfmJYPR1h2pOyj3Ywl6H73dUN2K1AS3weDTiO5xEISk2rfZ40D83FPTvSsGTvgX0rICAfmuO1NHUG%2B9nRJ4iFbcGlt8N2sgo6aIcpMLvBqX2Z3mN%2F4oNgrr4e7Nvc3siRGW5%2BBAVnXELM25FdDA2rRedYjgr9DbEUL99U5gZKxkIoHJZgs0DHAwwC1fTgduTIXsox463SVNiV%2FvBEDvJ4aD48qG5UcbprgmgeAP71FpfDFpDVFxcl03bug861vqY6rRvCYE%2BE4MAk7JZcvZiI1Cje0Mjt%2FB6ab0sauCaaTvnRTo9Zd8ILWL1gaacn37yOoeVjh%2Ftpb0%2FHMnMbyXo0zM9QdlgTo1KV%2BUG9omxjAUe7fEZdOcDZbU%2B7FlWEmoQZhc%2FDU7bC5uJ%2BkV94zt09XpF9HpP%2F5bwsXNeq6O4PMeap%2BriQAwqOdUPSNpZoYKdxrLiTgsJOFGY%2BiUAILT%2FD5N1JVi0qNb6QS7cvYTSJ35qedMPDw2sAGOqUBy5e%2FAgDw90pR2AV0MwvR42jMz5j6LEc4Vv7SUpfDWedOrBv%2FKSp2NIkYxvPs6eM%2B5u7HZvWxMHB9M0KAkjGzX7NHBWAsFu1pE1WZxXjuFnjmasoJmWQN3crgLdLg4jM%2BDQLnLyXt3wKYSqyV7ntqlXK%2FgHzNJpN36twEpQfdo9mhTq%2BbElTQhD5JEGoQ0StODjbIAIQjLuGYiTEGGVmBZZuB1Iqc&X-Amz-Signature=54fac78b75423f88bbfb5c6004fa84976636d005216d082658a7107f40de4786&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
