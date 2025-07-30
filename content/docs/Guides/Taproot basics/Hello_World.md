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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37OZ6FB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACjYaEw4RTD1f1t0KSRn1yMz5FO00e1dxLa%2Bf3zUYj7AiEAgA9Rr04z7PaLlPrUvieRaVxwbuAm3CcXkQuq6t%2FU5xMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeqmDYxAby7w1cjGircA%2FvhaibSfiTZe%2BOJr91J4600H%2FRj09D5ccL7hxyexiDmpmhjyiEGbdXgWhj2JMEOSpYm95q7ibP17ebxYc5BrAcrUsCK%2FQBbQ%2BNavggFafcyBovKXyYcqoZF6%2Bz6vnEOLi%2BY6orAthTWIkXV%2FIhePbp4lDrqYVLgToQS8mg14QzVPMNkFfcfeDWwJB3T68A3eF2KUbVgVJ48zDq9YXFcHMaGHEay6LNGew9J7L7oyO8d5pNl%2B%2B2YUEp9j6EIlNUwNjlBTJfKPQTdJVtVw3EEeVhyan%2FKxs1Kczqxtpey7ysoWRSS41yKqiac6wLrOuv6svasfznIVS4Wr8uWVNPqY4%2BnQWw07Km%2F9ChyClWXIeBzCioLmfjhagPqLRfLS8rUoETEyTl0EqN4AatPKNRgL2l%2B3OdcGs4xcibTb04gdu5bFuru5ii8Gmr8GdXRz13q2ZVRuwywsCoMZHGY1NFOnOWXiXoeagpu4ZbTj%2F%2B21c7SXN2LHac5gZ4C1ZJbEXUbBAcq%2BVByl7%2F83AakFpmjwqsNVIdKWVVaeaa8eaAq4kOVi%2F%2B058ZQEgjptViITw1vXLwJa4fILuumxE8JJvbw4JmaAA7x%2B25fPm9U5OwNixRpUw2jmspus7PO517fMOSiqMQGOqUB8WoN7dx3uuKzoBdWZQIP%2FskvQyySJ739hTJXmZ43HByLGSbdHrHlqs8WWcrit6BtJ9vW39%2FF0ILOAyDM4RP627ZJmIYxaPLMOH6ATot1HTjB7xhoo%2ByAblZwjuerqgXwAFyUoaIdCnt1Ydq5ightLEoBLi0mmA7Lfh8kyfNqFooxTD8nfgvlR8xvNF3vQsXEwfu18FZuZmzXOS01iI%2BvW7ClgIh2&X-Amz-Signature=eda0dd58a6a7fcccf6e66ba48a7c8348394a9d256cb9d7ea40b4aa68b3607bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37OZ6FB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACjYaEw4RTD1f1t0KSRn1yMz5FO00e1dxLa%2Bf3zUYj7AiEAgA9Rr04z7PaLlPrUvieRaVxwbuAm3CcXkQuq6t%2FU5xMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeqmDYxAby7w1cjGircA%2FvhaibSfiTZe%2BOJr91J4600H%2FRj09D5ccL7hxyexiDmpmhjyiEGbdXgWhj2JMEOSpYm95q7ibP17ebxYc5BrAcrUsCK%2FQBbQ%2BNavggFafcyBovKXyYcqoZF6%2Bz6vnEOLi%2BY6orAthTWIkXV%2FIhePbp4lDrqYVLgToQS8mg14QzVPMNkFfcfeDWwJB3T68A3eF2KUbVgVJ48zDq9YXFcHMaGHEay6LNGew9J7L7oyO8d5pNl%2B%2B2YUEp9j6EIlNUwNjlBTJfKPQTdJVtVw3EEeVhyan%2FKxs1Kczqxtpey7ysoWRSS41yKqiac6wLrOuv6svasfznIVS4Wr8uWVNPqY4%2BnQWw07Km%2F9ChyClWXIeBzCioLmfjhagPqLRfLS8rUoETEyTl0EqN4AatPKNRgL2l%2B3OdcGs4xcibTb04gdu5bFuru5ii8Gmr8GdXRz13q2ZVRuwywsCoMZHGY1NFOnOWXiXoeagpu4ZbTj%2F%2B21c7SXN2LHac5gZ4C1ZJbEXUbBAcq%2BVByl7%2F83AakFpmjwqsNVIdKWVVaeaa8eaAq4kOVi%2F%2B058ZQEgjptViITw1vXLwJa4fILuumxE8JJvbw4JmaAA7x%2B25fPm9U5OwNixRpUw2jmspus7PO517fMOSiqMQGOqUB8WoN7dx3uuKzoBdWZQIP%2FskvQyySJ739hTJXmZ43HByLGSbdHrHlqs8WWcrit6BtJ9vW39%2FF0ILOAyDM4RP627ZJmIYxaPLMOH6ATot1HTjB7xhoo%2ByAblZwjuerqgXwAFyUoaIdCnt1Ydq5ightLEoBLi0mmA7Lfh8kyfNqFooxTD8nfgvlR8xvNF3vQsXEwfu18FZuZmzXOS01iI%2BvW7ClgIh2&X-Amz-Signature=ef6500dd1962f9c99654d8b226bc008d4ded5fd2d83449cfb52255bcc25bd900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
