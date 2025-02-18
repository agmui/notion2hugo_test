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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G2F7QYQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbGPBHVtqUBYW0%2BMa%2FdWRKL7xmP3mnrWaNNItX%2BHMnTAIhAJlPzldCiZHtI4NIu%2FyklY2AyMuHL1s%2B7Fzy19BNdEmoKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxixD%2FHsz0NDOn48sq3ANurnP%2BqHOj8%2Fei8%2FScPJld85Gy93KJMNrjdyGiFEGuHRJfXDA%2BlxC5sQf0wLUXcbUkOf6Ttr6JHaoBi583ywUdZd08mQoRrLNctHx%2FQP8cQPc7Ol%2F0qlxkKHLFKanoPORPvWo%2BX78CywI5KM0PEW1hnTcgORgr8ShxwXoAVqLUQv%2BgBUNlmeSwGBD%2BqfQNcuuk1HWEnvKI3TZ6nVFDeL%2F5xjfm11VcheE1rdzQLeayh%2Bc1pYwbW4mFpuviupHWO%2BGoGGBVJng%2BhvC1rbRgxJ2KNEfa62ePHaTabnf6WbBzD0DV1fYva99ykEzujz9d4toId9P9DVFkkSBYkb4VdHt106qE%2FIjQOIxMiZyXdROZSrPhlX9Hg7bWBl%2Fmk4zGHHOBaY03X3Bl0wpH6Uw9H2kYH6lnUHNY1PHSsvXTJK6dpyNhXKdjPqGXiyjYRtUUEVd9gd8OPTfQlB%2BFQJyl%2FgP%2F9DzMzJTvu8fgLGfXtOBwOLgcE2dchtZfs3HNwPjGYJsEfvcHBArOI0qxU9%2BJD631qi3DXVny47pisk5KyXgdnPsj1K%2FOLEzKac%2BurUuj6Mmp04I%2Fk%2BNNMzIiv86C1dxp5hluiDLDsxR3N8OB%2FKXlE4RtnxoEUZTCObCcFDDW9tO9BjqkAdMqOf9eCMIExUuchgE6G4LjRVsQ4vRNr7Q3qQ5XdZqVY8KPbkDKyX2rGSS2ogaA5zASzuFsMbK5ld%2Fu%2Fu45p6s79z41XMBq0PL14J8HhjpqOt7LwBs26Np6%2FAPFKg2wjtxuLak0EVF4y3xoYK2yNmcUf7EEDDq8oijLv%2B1vN6O4OMfsbT7qkuoUL6gWOW6GmoF%2BwCv4m%2B5FfoTJ8rVTUAg%2BPyl8&X-Amz-Signature=42975a2afd43411f2df3ce3b7ab3769b80938f598a1b2f24aec911c2b5f60e90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G2F7QYQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCbGPBHVtqUBYW0%2BMa%2FdWRKL7xmP3mnrWaNNItX%2BHMnTAIhAJlPzldCiZHtI4NIu%2FyklY2AyMuHL1s%2B7Fzy19BNdEmoKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxixD%2FHsz0NDOn48sq3ANurnP%2BqHOj8%2Fei8%2FScPJld85Gy93KJMNrjdyGiFEGuHRJfXDA%2BlxC5sQf0wLUXcbUkOf6Ttr6JHaoBi583ywUdZd08mQoRrLNctHx%2FQP8cQPc7Ol%2F0qlxkKHLFKanoPORPvWo%2BX78CywI5KM0PEW1hnTcgORgr8ShxwXoAVqLUQv%2BgBUNlmeSwGBD%2BqfQNcuuk1HWEnvKI3TZ6nVFDeL%2F5xjfm11VcheE1rdzQLeayh%2Bc1pYwbW4mFpuviupHWO%2BGoGGBVJng%2BhvC1rbRgxJ2KNEfa62ePHaTabnf6WbBzD0DV1fYva99ykEzujz9d4toId9P9DVFkkSBYkb4VdHt106qE%2FIjQOIxMiZyXdROZSrPhlX9Hg7bWBl%2Fmk4zGHHOBaY03X3Bl0wpH6Uw9H2kYH6lnUHNY1PHSsvXTJK6dpyNhXKdjPqGXiyjYRtUUEVd9gd8OPTfQlB%2BFQJyl%2FgP%2F9DzMzJTvu8fgLGfXtOBwOLgcE2dchtZfs3HNwPjGYJsEfvcHBArOI0qxU9%2BJD631qi3DXVny47pisk5KyXgdnPsj1K%2FOLEzKac%2BurUuj6Mmp04I%2Fk%2BNNMzIiv86C1dxp5hluiDLDsxR3N8OB%2FKXlE4RtnxoEUZTCObCcFDDW9tO9BjqkAdMqOf9eCMIExUuchgE6G4LjRVsQ4vRNr7Q3qQ5XdZqVY8KPbkDKyX2rGSS2ogaA5zASzuFsMbK5ld%2Fu%2Fu45p6s79z41XMBq0PL14J8HhjpqOt7LwBs26Np6%2FAPFKg2wjtxuLak0EVF4y3xoYK2yNmcUf7EEDDq8oijLv%2B1vN6O4OMfsbT7qkuoUL6gWOW6GmoF%2BwCv4m%2B5FfoTJ8rVTUAg%2BPyl8&X-Amz-Signature=3b86b73fc092171995c7c4336454204f232bafd6598800e038c46a0e2cda0308&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
