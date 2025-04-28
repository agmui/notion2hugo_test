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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIERDDGP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGK0b6HwAdB24gaVRv1ZHJ0b8KvA7jteFIvcDEgFNSmAiEAjYfJ5pARfWhsXl4NZ6VAhkXH0Pfru1ACruDmsn0S6y8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH1dhADbnKREroPPwyrcAz4n3CVf2Ox%2BfukPnkVbb2lp3n1OGAdR%2B69L6q0jktkiKTrtCNg5KW4Zv9TkBrQLgUVEQag9mveRVP%2FNAusXXkcRJaa9C94yd0GpTlMYQNvoXCS%2BOwEH0A9tVI1lO021jUaBRds2N0JPeqQDIztsPPcEOm3ayybRAnR4zIRlRpWxRB38p7JXULEon4g2vQieOFMhHaRv%2FzgLnmTLT8UEfW1K7URAzf3%2FN1fuKTJvcxTbdHkXY7%2BBe%2FsdBDKKQv9pYyZMnuOXmMyKfWl6FYHwf5t2vMt1hZvd8WFBSw3DjGdgk688l7OIcvxtSlDVDZ9x33n%2FlPlbYSbat0YpPgayEMf7jMAzfAPaJEo5CDqyXvI8WhXz7nj3ed3cP3O2tW53VsKPHhoMTNDasNqLDIdfdWBDseKQ5i%2B4%2F%2FRJXUnI8sXKt%2FStE7dZjpT85x7ObOms8tx7BMZsAX8zsYFE7rlwBAOeBMZd28fwYL05UgMPoZa3UMZoqt5%2Fdp0Id0FIVp6QoriO2PX0bWSANVbD6mHfqpYI9nvAfgBcXT2kPB6QgIrb7fmNrPySvPTKCLKe%2FL8vPzTGpvP2DDsmojwZfkB0aB7TrL2KvPIfpLhkMw7vM03Id9Jg%2FSIs2E5pbqS7MIKDvsAGOqUBH3XIXb2DSk4%2F7VbYiT40ipGSRWBEmswApHbxZAMcvhIsqfGix6xBfm3gCkDvwFFG49NgTLhHhZNgnwISQ1%2BKNywY1HwHOfhWe3HwA68PZgsk7pQnU5w13ZxPXMWICcZT8JdBIOIR33shEnVpfelhT6EZ%2F0Nzoj8FZvIO0rkodYmqJW6psOEWkLxh2IheHpvD3N0Lhpq4ns2FE%2Bsa8Qq1uHomD%2FMq&X-Amz-Signature=5bff1d025542a3572ad131d1739de4a0ec8dd02738c02eaf722379747e372cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIERDDGP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGK0b6HwAdB24gaVRv1ZHJ0b8KvA7jteFIvcDEgFNSmAiEAjYfJ5pARfWhsXl4NZ6VAhkXH0Pfru1ACruDmsn0S6y8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH1dhADbnKREroPPwyrcAz4n3CVf2Ox%2BfukPnkVbb2lp3n1OGAdR%2B69L6q0jktkiKTrtCNg5KW4Zv9TkBrQLgUVEQag9mveRVP%2FNAusXXkcRJaa9C94yd0GpTlMYQNvoXCS%2BOwEH0A9tVI1lO021jUaBRds2N0JPeqQDIztsPPcEOm3ayybRAnR4zIRlRpWxRB38p7JXULEon4g2vQieOFMhHaRv%2FzgLnmTLT8UEfW1K7URAzf3%2FN1fuKTJvcxTbdHkXY7%2BBe%2FsdBDKKQv9pYyZMnuOXmMyKfWl6FYHwf5t2vMt1hZvd8WFBSw3DjGdgk688l7OIcvxtSlDVDZ9x33n%2FlPlbYSbat0YpPgayEMf7jMAzfAPaJEo5CDqyXvI8WhXz7nj3ed3cP3O2tW53VsKPHhoMTNDasNqLDIdfdWBDseKQ5i%2B4%2F%2FRJXUnI8sXKt%2FStE7dZjpT85x7ObOms8tx7BMZsAX8zsYFE7rlwBAOeBMZd28fwYL05UgMPoZa3UMZoqt5%2Fdp0Id0FIVp6QoriO2PX0bWSANVbD6mHfqpYI9nvAfgBcXT2kPB6QgIrb7fmNrPySvPTKCLKe%2FL8vPzTGpvP2DDsmojwZfkB0aB7TrL2KvPIfpLhkMw7vM03Id9Jg%2FSIs2E5pbqS7MIKDvsAGOqUBH3XIXb2DSk4%2F7VbYiT40ipGSRWBEmswApHbxZAMcvhIsqfGix6xBfm3gCkDvwFFG49NgTLhHhZNgnwISQ1%2BKNywY1HwHOfhWe3HwA68PZgsk7pQnU5w13ZxPXMWICcZT8JdBIOIR33shEnVpfelhT6EZ%2F0Nzoj8FZvIO0rkodYmqJW6psOEWkLxh2IheHpvD3N0Lhpq4ns2FE%2Bsa8Qq1uHomD%2FMq&X-Amz-Signature=ca3e9b04becb4d7e1f2bbccfad9c458c842deeb7d26071234bea226c72a6c5db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
