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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U7RHZK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKh6LHYd967b9xxO9Fom%2Fwkq5afU97NeZk1woxwYGY9AiEA62g%2B%2Bw2seHnvu%2ByU0PRA3wwnhAFiGR%2Bw7a7laCN2JSEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwbW%2FxfZECJr7x87yrcA1XAMo6l4NPgoEWCRASRTzL7sCtqJhYbLh0dX9FUEUuyRN6K6EhIa3YEtf3mXkjS4uIjdq6Dik2Zj0xVESQTNCDWpOJAz9BnVZOH8wFAgvTsKNBA5yqZWJgesLcdgDhCCq3sW4Xo3m3pO%2BeHOlYtqvd6slxeHlP8fG1mOSy0OgKvbZbUnLbOHQoyXNTrUqJ1CdKRPHgyEAoT8nW85lO3aYm3FCPRwPN1Fry6WDHV93qOJL%2BamorBoE6ZXa%2Fwx7nS5CERkV3YdE0o58mzhE0La%2BE%2FtJCjUUGm0qU9l8e3O%2Bjq%2BFR8vUqxfCuNz44LXjQoBwNC0%2BOYgMogQP%2Fq1gil6tnzPhcy8kxJbA%2BBi0i8V5nB%2FoxQwx9kouZWYM5AinC%2BFXNUFlbjHWerunvJPqcvuQEDr2uCxXX4ElP8TiuZ2KKqL3IkwGLcle9GL0u9jrAsVGxwTEPSzYwZav3EdjR5ZDA2dLZ8Gs3Fh%2FJkvm6senZTAi6dC1grWcXgkOiJxDN09qoQ1C4VXxVXfDAiWhfkZXdvN6E7ue%2FbB4YomOWYDNH23cZiRtF8XUCnR3N6hALCHtIXHpg5RoDeYxHXsBm6utV%2FIkoyilHdkm3jU%2BDzbOTj%2FUdvSdJvmcs0xO1LMPyDm74GOqUBPMxCJMKKMRIDM1%2F83HUmrvsLzsfdtmW6eopR%2FEzy99YDI6XqBNld155wWYetXposeSlwKAPww0SBgzmVBxAN%2BGLRgSCOIMRQtp5miJqRUPmnAYc0VPz8DcHwqdpbbsGNzlMHY0zUxazFmp2px%2BJmoiImboX4KRmTfV5sdIMPl6vqGOFgHGtnLAN4y5TX8OhwkMG5wYbQ5LOJHXgJHHBMfQybKUmM&X-Amz-Signature=078a51fc81fd5fb7d5540161238d09914dbd529da3cd3ef699f0017c4d570ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U7RHZK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKh6LHYd967b9xxO9Fom%2Fwkq5afU97NeZk1woxwYGY9AiEA62g%2B%2Bw2seHnvu%2ByU0PRA3wwnhAFiGR%2Bw7a7laCN2JSEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwbW%2FxfZECJr7x87yrcA1XAMo6l4NPgoEWCRASRTzL7sCtqJhYbLh0dX9FUEUuyRN6K6EhIa3YEtf3mXkjS4uIjdq6Dik2Zj0xVESQTNCDWpOJAz9BnVZOH8wFAgvTsKNBA5yqZWJgesLcdgDhCCq3sW4Xo3m3pO%2BeHOlYtqvd6slxeHlP8fG1mOSy0OgKvbZbUnLbOHQoyXNTrUqJ1CdKRPHgyEAoT8nW85lO3aYm3FCPRwPN1Fry6WDHV93qOJL%2BamorBoE6ZXa%2Fwx7nS5CERkV3YdE0o58mzhE0La%2BE%2FtJCjUUGm0qU9l8e3O%2Bjq%2BFR8vUqxfCuNz44LXjQoBwNC0%2BOYgMogQP%2Fq1gil6tnzPhcy8kxJbA%2BBi0i8V5nB%2FoxQwx9kouZWYM5AinC%2BFXNUFlbjHWerunvJPqcvuQEDr2uCxXX4ElP8TiuZ2KKqL3IkwGLcle9GL0u9jrAsVGxwTEPSzYwZav3EdjR5ZDA2dLZ8Gs3Fh%2FJkvm6senZTAi6dC1grWcXgkOiJxDN09qoQ1C4VXxVXfDAiWhfkZXdvN6E7ue%2FbB4YomOWYDNH23cZiRtF8XUCnR3N6hALCHtIXHpg5RoDeYxHXsBm6utV%2FIkoyilHdkm3jU%2BDzbOTj%2FUdvSdJvmcs0xO1LMPyDm74GOqUBPMxCJMKKMRIDM1%2F83HUmrvsLzsfdtmW6eopR%2FEzy99YDI6XqBNld155wWYetXposeSlwKAPww0SBgzmVBxAN%2BGLRgSCOIMRQtp5miJqRUPmnAYc0VPz8DcHwqdpbbsGNzlMHY0zUxazFmp2px%2BJmoiImboX4KRmTfV5sdIMPl6vqGOFgHGtnLAN4y5TX8OhwkMG5wYbQ5LOJHXgJHHBMfQybKUmM&X-Amz-Signature=5350119eef162957f716d11f0ed663adf742d842eeb1c375a19604262111c6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
