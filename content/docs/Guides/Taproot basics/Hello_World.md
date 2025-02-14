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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z575EKNR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICsV28oJezdRWc006FwTyKkmeULBeBZgsSmLNJD7I%2BvfAiEA%2Bl4V5m1hkvQyuWzN5Sd60fBUv34vdNSdhi8WlKs9AdIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDx%2FEv70Bsr2pVXRESrcA1wONKt8h9z9waqb6V6E5gF2n6iTit1FRKWRVVHoHc2I0sNY5bYgKW3xeqXdFBvWn9f%2FDoDYHKGusfiwCDTeVTkaAuUIaSRyz2O7TtYm6i90QS%2Bb4whpC2kQZR8JG9v3ZTsZ1%2B9%2BpYIpiNs%2Fylhsmc6zzbujWV5qf7i68z%2F4pVzDvAwGdBVAVgFkjHEBqqPZS9ht1GuLUmGvBA7T9d5Sjl3DXK0ptmLeCcblIsFBmIKwg8LNNIP%2Bz71w4evft7xmqMGS8%2FoueqCitgG%2Bw53nNQlLkyMS5xSOiQAnq%2FK1NaC26TdxVwNU0IqQFzamYZjtC4QRG97VnLgoEti9bHVp96EwEmQI3PK6keGG0eTYfBeCmfvntFg%2F0egJoOpv1IMVaS0TtjwYjFRJ46qvtuImvYKHx%2BZ1Kc3%2FZUkoI%2BocXN6Tq0jlZ%2BejyVbofYzZmWZKr6n%2Ft4EV0blOrXtJbiGTqmI3dlJ2puPZvLTNaCiNILPbMjHeQoY1mW7PPvCTAgRsGvou73H0g9ONO8jrnmbpFAnXu0kaqIYnuT5kZEyj%2FLo8gvYq4zXz0j2zzQ1buhC0wJXCaY7JzlKgEzLI2uIo0EF4OXhpkND26AdKtuaJ%2BNjTwFHWlyldTbXV98YTMNr6vb0GOqUBLNLSZOL%2BYL4U74gcTFeG11f2zOuCTPjPlyE9zsBbkNoUzU2Whtx7u8MQoUtydmWBA4JhfiWlrEM2yRMAKlW4MoZgakl6Q1cesd4RH836m5eyIq1H9atRWgbKodyfqUINZeAWqmiZ2NEiZ50fcUM4o9HEAWOfVX94Rz9JDwYrCpiE%2FrxAdtLfPVjlWfShj3IzWm0d4C%2F4QD93QB%2FKCedTcwpx%2F0LR&X-Amz-Signature=f0d61de31846c4a611bd6cd7bd84c18329bf73b58fed37874b37fc00d639fe53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z575EKNR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICsV28oJezdRWc006FwTyKkmeULBeBZgsSmLNJD7I%2BvfAiEA%2Bl4V5m1hkvQyuWzN5Sd60fBUv34vdNSdhi8WlKs9AdIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDx%2FEv70Bsr2pVXRESrcA1wONKt8h9z9waqb6V6E5gF2n6iTit1FRKWRVVHoHc2I0sNY5bYgKW3xeqXdFBvWn9f%2FDoDYHKGusfiwCDTeVTkaAuUIaSRyz2O7TtYm6i90QS%2Bb4whpC2kQZR8JG9v3ZTsZ1%2B9%2BpYIpiNs%2Fylhsmc6zzbujWV5qf7i68z%2F4pVzDvAwGdBVAVgFkjHEBqqPZS9ht1GuLUmGvBA7T9d5Sjl3DXK0ptmLeCcblIsFBmIKwg8LNNIP%2Bz71w4evft7xmqMGS8%2FoueqCitgG%2Bw53nNQlLkyMS5xSOiQAnq%2FK1NaC26TdxVwNU0IqQFzamYZjtC4QRG97VnLgoEti9bHVp96EwEmQI3PK6keGG0eTYfBeCmfvntFg%2F0egJoOpv1IMVaS0TtjwYjFRJ46qvtuImvYKHx%2BZ1Kc3%2FZUkoI%2BocXN6Tq0jlZ%2BejyVbofYzZmWZKr6n%2Ft4EV0blOrXtJbiGTqmI3dlJ2puPZvLTNaCiNILPbMjHeQoY1mW7PPvCTAgRsGvou73H0g9ONO8jrnmbpFAnXu0kaqIYnuT5kZEyj%2FLo8gvYq4zXz0j2zzQ1buhC0wJXCaY7JzlKgEzLI2uIo0EF4OXhpkND26AdKtuaJ%2BNjTwFHWlyldTbXV98YTMNr6vb0GOqUBLNLSZOL%2BYL4U74gcTFeG11f2zOuCTPjPlyE9zsBbkNoUzU2Whtx7u8MQoUtydmWBA4JhfiWlrEM2yRMAKlW4MoZgakl6Q1cesd4RH836m5eyIq1H9atRWgbKodyfqUINZeAWqmiZ2NEiZ50fcUM4o9HEAWOfVX94Rz9JDwYrCpiE%2FrxAdtLfPVjlWfShj3IzWm0d4C%2F4QD93QB%2FKCedTcwpx%2F0LR&X-Amz-Signature=da82e3031cd1ca9aeb9d191079dfd488e3c5561a9ff0ecd864aaa159d8244bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
