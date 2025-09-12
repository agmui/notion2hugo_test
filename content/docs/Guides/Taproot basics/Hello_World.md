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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJVJEXB%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl5Ooz1Q5OgR2JigVgABFfvLJbk8riFz6e1PKYiIJ4%2BwIgBMQL7svIIdGilhtV5j8QTUAmXHQWWOnlDNe2v6Q0uZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIG0Xj2jaRnxFKflwircAzbe9aHMS5Z%2F50iHD0cFoSQtKX0JX521Cl6FiRUwT2JF3EmSiDpfyJg6WySeQzRqv%2BOOfGq2epMP1wWilVeSi7mU%2F0wyegQ6exNtQJ4XCSFcMiKBvbzgQfq4KbLHjWWVk4UHhRBKgLTDPT57%2BBJ3OjOtvNac6M8WHPHLWVNxDV3ZbbtAKdroGW8pgCqVw23JODpzdyAw9i2%2BtObTRdkSCuP1lqkt1h4AXGqPMlL2RwgwQr2BR2D85dYoWU0hScbBRbj3DIYbtctrN20uAlZ2AbCeO%2B4A2qdO8P4HuBBum6Lh%2B96dAK5YDRAnR8xdKqnhuPu9fnILOks3SCbFFpBa0iXnU2nYWCJdFqxYKX9FEzHzTJNkXSLeUOd2HnV7pbuFUv1uX%2BJMf0wkjDTvU5RNVbRqj8rYS91WIVNLMvRtMONQOZ5apmejJAN%2BtHoT8yW%2FYFwN32DbgMAwnJdLchJAh4Od4v%2BRayng8yCQW2uNTLSAca630c1qth2iUjXKwdsMMRqLlEdRXQSStrij0bViDOQaScNgA92tH6ZLfPj3v%2BBlY0Q6RtsZNetSVFmuJ3dZSxLBXwNxlpyproofbfGf9Mqtfg%2Fg8GO0sYO5XDJiz%2BnViS%2BOpWUW%2B3x%2BjJx6ML%2FRjcYGOqUBIVCjrjcDTrPZU07nkYCrGFCFkLcyUPbdo8RCbMKbE%2F%2BIQxId%2BSu2P6fI%2F%2FKAOfeqshGFOvlNnDzsT5%2BmoGByTmA%2BBVzhXtCeOTOrmKxFQNlaOny7gCrObzcQ4sMdnk2%2BRyYs7jDkWQxOwHA52h0i43sLYPWyZJubvfPk%2BfaTIDja1%2B%2BcGEEHzZ9KgQT55h0TXkQnqg%2BllCgnel9uVVyyVE6aJoWK&X-Amz-Signature=97fbbd5fb85477a846f10d6fec0bf096a0cbf28cb08ef4429d09c5e717c561e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJVJEXB%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl5Ooz1Q5OgR2JigVgABFfvLJbk8riFz6e1PKYiIJ4%2BwIgBMQL7svIIdGilhtV5j8QTUAmXHQWWOnlDNe2v6Q0uZ4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIG0Xj2jaRnxFKflwircAzbe9aHMS5Z%2F50iHD0cFoSQtKX0JX521Cl6FiRUwT2JF3EmSiDpfyJg6WySeQzRqv%2BOOfGq2epMP1wWilVeSi7mU%2F0wyegQ6exNtQJ4XCSFcMiKBvbzgQfq4KbLHjWWVk4UHhRBKgLTDPT57%2BBJ3OjOtvNac6M8WHPHLWVNxDV3ZbbtAKdroGW8pgCqVw23JODpzdyAw9i2%2BtObTRdkSCuP1lqkt1h4AXGqPMlL2RwgwQr2BR2D85dYoWU0hScbBRbj3DIYbtctrN20uAlZ2AbCeO%2B4A2qdO8P4HuBBum6Lh%2B96dAK5YDRAnR8xdKqnhuPu9fnILOks3SCbFFpBa0iXnU2nYWCJdFqxYKX9FEzHzTJNkXSLeUOd2HnV7pbuFUv1uX%2BJMf0wkjDTvU5RNVbRqj8rYS91WIVNLMvRtMONQOZ5apmejJAN%2BtHoT8yW%2FYFwN32DbgMAwnJdLchJAh4Od4v%2BRayng8yCQW2uNTLSAca630c1qth2iUjXKwdsMMRqLlEdRXQSStrij0bViDOQaScNgA92tH6ZLfPj3v%2BBlY0Q6RtsZNetSVFmuJ3dZSxLBXwNxlpyproofbfGf9Mqtfg%2Fg8GO0sYO5XDJiz%2BnViS%2BOpWUW%2B3x%2BjJx6ML%2FRjcYGOqUBIVCjrjcDTrPZU07nkYCrGFCFkLcyUPbdo8RCbMKbE%2F%2BIQxId%2BSu2P6fI%2F%2FKAOfeqshGFOvlNnDzsT5%2BmoGByTmA%2BBVzhXtCeOTOrmKxFQNlaOny7gCrObzcQ4sMdnk2%2BRyYs7jDkWQxOwHA52h0i43sLYPWyZJubvfPk%2BfaTIDja1%2B%2BcGEEHzZ9KgQT55h0TXkQnqg%2BllCgnel9uVVyyVE6aJoWK&X-Amz-Signature=928f54e88df3146796eec102ee167d0d49a9abe636b40ae3c9150514195b5d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
