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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2U4Y77%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFcfb%2Fz7NK2nBm0SDB6pft7mT7bTxX1Hjfd%2Bk91cTxDEAiEAuglGBnf91yrGw0GQGf%2BrbUS0Xia8qxtb1L2mT%2BVutb0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAszMaWDVxQsAliamSrcA6FfBLk4sfKhnBdfXUBNMenj4OZFaW2eiQfo5s0FaHbR%2Bu%2Bpf9q03P6SoRgzmjnCLkdmmsMB7GUqE7YJnopymosmA9H6xeElH3BfltNLKWi622mSSK95woBENlJz68iJGg2Q1XDLr%2BGHlzwofPRSq0KIgrZAqq4A7vABYB0E%2FGhmyfcQold%2Fph%2B0xUHO372B55V6jXpOn8MB7QqKLXB%2FLzqLrMPTSnSocABw%2FBNmZrg8SXeIdVDSTIy5PTPrTNubVg0hdPfl8vIrTC7sv1bK0vjhlHJlAsvZgOffsqIMrOxHeE18MwIxgAmzhqpO%2BTZCXcAJSq1mAHhwEdsnM5n5RaDjXG3XD9ZufLExW4HaSKugIWuZ29eWhESxwcrsIw5CImOCRpe3EA%2FX9cRN0eeUn6BRpz7lL1faq7cMwEMuwETE4fEFctWsGEbrqocl5FUjO%2Bs07a4y6pafCiUw6y4AJny0KjvPWU5UUXEOe9%2BPGBC%2Bn6cIFFe34ByDYDtTIDYNQMLiypzwIz5NTrflPA2o13Wy1kwWa6hyaJrgP6du4Rypv%2F9ILQ5lURRsPZFKRtNNV7PTLVbTYGVVy%2F8o%2BpQPuMZjTHTBlGHlmOVK4JHGFZhhATX9xdii%2FiXg9J4dMK6FhL0GOqUBkymJd6JosGG%2ByT%2FXpWtLFH7ULLcg3C5Wb6hjBCGmO8ymG9zMG9GC0jx3nMknF26ZDnGTtPBeBtgGlV6pKvRW%2BSvFAPriEU6C4hIjwB4D43ROlJ62ck78y1C29HvwADcrtfh%2BZl10l7QVbpCP6tJRdQ2rHxigUfqORB%2B1wZBgZ10SJfGWlQPmVWWt82dz8c9jHHBc5H9K7gv9Z%2FiNcv7YluaYmEwN&X-Amz-Signature=ae525ed949cf21e3c689d71d5438d96788ae5f5ed77eab2c2e18d9df87b99726&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2U4Y77%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFcfb%2Fz7NK2nBm0SDB6pft7mT7bTxX1Hjfd%2Bk91cTxDEAiEAuglGBnf91yrGw0GQGf%2BrbUS0Xia8qxtb1L2mT%2BVutb0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAszMaWDVxQsAliamSrcA6FfBLk4sfKhnBdfXUBNMenj4OZFaW2eiQfo5s0FaHbR%2Bu%2Bpf9q03P6SoRgzmjnCLkdmmsMB7GUqE7YJnopymosmA9H6xeElH3BfltNLKWi622mSSK95woBENlJz68iJGg2Q1XDLr%2BGHlzwofPRSq0KIgrZAqq4A7vABYB0E%2FGhmyfcQold%2Fph%2B0xUHO372B55V6jXpOn8MB7QqKLXB%2FLzqLrMPTSnSocABw%2FBNmZrg8SXeIdVDSTIy5PTPrTNubVg0hdPfl8vIrTC7sv1bK0vjhlHJlAsvZgOffsqIMrOxHeE18MwIxgAmzhqpO%2BTZCXcAJSq1mAHhwEdsnM5n5RaDjXG3XD9ZufLExW4HaSKugIWuZ29eWhESxwcrsIw5CImOCRpe3EA%2FX9cRN0eeUn6BRpz7lL1faq7cMwEMuwETE4fEFctWsGEbrqocl5FUjO%2Bs07a4y6pafCiUw6y4AJny0KjvPWU5UUXEOe9%2BPGBC%2Bn6cIFFe34ByDYDtTIDYNQMLiypzwIz5NTrflPA2o13Wy1kwWa6hyaJrgP6du4Rypv%2F9ILQ5lURRsPZFKRtNNV7PTLVbTYGVVy%2F8o%2BpQPuMZjTHTBlGHlmOVK4JHGFZhhATX9xdii%2FiXg9J4dMK6FhL0GOqUBkymJd6JosGG%2ByT%2FXpWtLFH7ULLcg3C5Wb6hjBCGmO8ymG9zMG9GC0jx3nMknF26ZDnGTtPBeBtgGlV6pKvRW%2BSvFAPriEU6C4hIjwB4D43ROlJ62ck78y1C29HvwADcrtfh%2BZl10l7QVbpCP6tJRdQ2rHxigUfqORB%2B1wZBgZ10SJfGWlQPmVWWt82dz8c9jHHBc5H9K7gv9Z%2FiNcv7YluaYmEwN&X-Amz-Signature=25641f9d584165f951c8f3e185f4fb6d3c41dc1634fd63f63b957fc3070e317a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
