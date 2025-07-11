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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QF5BQ6V%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5TWlKAB24G3pGH5Zay77lQtPiHX1KJN59uJ7eUGE0QIgVuo3st8hysVSgGJ3mdTW1EPAm0G2b%2F3AlgQaMFcj4VIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyMQO86X7Gm0oCkrCrcAzim29RKa4sC6NtzaC46w0fWW650eOPwfNMB1qASzRX6yHBpLNCrWDixL07wvB%2BwRY6tNcgJGhZpKLzo91c2kQWvWf%2BjYnrGqtdwIgTP%2BOEj3UCIiX7qgkzU3AMeyIJOkPxN7Qvz%2FJCjRr2QjTUd9Uage5MrKgFqPXwiBh3n4Ps6j2DT0mccnZ6%2FBHhfm45u902fIZMCTEV%2BhDNsv5ewwcsNXROTUkZoxPVwMgi6ekkLgbNyWMtN67MhDQJCGJs85XXIKvOYeeYgwf8yh3t3pfcQhihWRXxXZK3iZYsGlYiefqRWPmYSx0JTP82lJ1fGrpqiZdrzYgM4cY3WElIhZgUb4G1YBcaADcnwOIDMDTOUTIJP%2BWW0vaOZ4wAM3Po0ayDpTP4GTNl0ceG1%2Bn7hgJbljSjuUfUO%2FZNRsBDoFEeFkPyU68BAFyaWDEu%2FsAFOL%2FobzEUezP4f7CA1kgdL0YKKBBcOLU3n%2BWbDn6yExQEQj3Jve%2BipZl1QaJDePuoFjIz%2FY1AJkL6YKFL2%2By3QKoqWcxC33Qe1UW%2BG3nbKZUFjXANEG8Fv8%2FVnD19v5fOv0OXqGGB9t58inB4kuB%2FpINazPhzJKzft7ZQzIieZ7TmWymU61Ck8uJWWLDFsMKH%2FxMMGOqUBnahEGfINV3652gca4lCyhUyj1U74i90QS7hN0Z6R%2B63v8nUfttd%2FIIQPkoM94OEV56fww43zaqrZAo702ddjA8ZpXZZbM0S37igQ1I1wN7WY6UijBh7nQZVcLdQKkgzBvTCiGB%2FTY3FsMVyK3NHGC79NE4Y3jXtSei%2F4glTZ62ei9qC8eXzjVNaPimW%2BHfhV2JUG5rXTl3D9nFvfbtF639g9it9R&X-Amz-Signature=ae1f250c9e19bcdfbfdb26724b904d7d975572e0556c1012431f632a0d7cf427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QF5BQ6V%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5TWlKAB24G3pGH5Zay77lQtPiHX1KJN59uJ7eUGE0QIgVuo3st8hysVSgGJ3mdTW1EPAm0G2b%2F3AlgQaMFcj4VIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyMQO86X7Gm0oCkrCrcAzim29RKa4sC6NtzaC46w0fWW650eOPwfNMB1qASzRX6yHBpLNCrWDixL07wvB%2BwRY6tNcgJGhZpKLzo91c2kQWvWf%2BjYnrGqtdwIgTP%2BOEj3UCIiX7qgkzU3AMeyIJOkPxN7Qvz%2FJCjRr2QjTUd9Uage5MrKgFqPXwiBh3n4Ps6j2DT0mccnZ6%2FBHhfm45u902fIZMCTEV%2BhDNsv5ewwcsNXROTUkZoxPVwMgi6ekkLgbNyWMtN67MhDQJCGJs85XXIKvOYeeYgwf8yh3t3pfcQhihWRXxXZK3iZYsGlYiefqRWPmYSx0JTP82lJ1fGrpqiZdrzYgM4cY3WElIhZgUb4G1YBcaADcnwOIDMDTOUTIJP%2BWW0vaOZ4wAM3Po0ayDpTP4GTNl0ceG1%2Bn7hgJbljSjuUfUO%2FZNRsBDoFEeFkPyU68BAFyaWDEu%2FsAFOL%2FobzEUezP4f7CA1kgdL0YKKBBcOLU3n%2BWbDn6yExQEQj3Jve%2BipZl1QaJDePuoFjIz%2FY1AJkL6YKFL2%2By3QKoqWcxC33Qe1UW%2BG3nbKZUFjXANEG8Fv8%2FVnD19v5fOv0OXqGGB9t58inB4kuB%2FpINazPhzJKzft7ZQzIieZ7TmWymU61Ck8uJWWLDFsMKH%2FxMMGOqUBnahEGfINV3652gca4lCyhUyj1U74i90QS7hN0Z6R%2B63v8nUfttd%2FIIQPkoM94OEV56fww43zaqrZAo702ddjA8ZpXZZbM0S37igQ1I1wN7WY6UijBh7nQZVcLdQKkgzBvTCiGB%2FTY3FsMVyK3NHGC79NE4Y3jXtSei%2F4glTZ62ei9qC8eXzjVNaPimW%2BHfhV2JUG5rXTl3D9nFvfbtF639g9it9R&X-Amz-Signature=83e7efe12bdcd391a53cfef5f0e40f70d7d3392475e548ed2fd61149aab02ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
