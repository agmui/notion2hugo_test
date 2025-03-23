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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVB5CYN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFGHRG4jjpEhTF%2BNrTN%2Fw0Xvk4t4UsPTEPkcrn1e0jtWAiEA0I%2BiYF1tUEgyHRCh5T8OZ0v17AbijggLxJu2oqUvEHwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcUHu9ml5zYzZX7AyrcA%2BLxGx9iLCgDsS9dO5mSuuRbq7%2BuRxcdRsCIbckCtLoJ%2FRk%2BBpmWkzOuFYFXecWc4Noz9b8hUzJGoOl5a6ILTPznySN%2BH%2Bf1Wt77RYfpmR8OuKo7lrWCSyNT1bG4JT8TJjiTmkJnU8XMn9ZHjpzjnkIjOlhRA77JtVqQpzCjR1MfFBBMfel%2Blksvc3Gk0yzAtdkNOKjKzzltuQ3FObTlBIsEO5TRx6Wq3ndHW56cvZ69jqzvMlng0W%2F4ELQchQXFC9%2BOSTuVsmOlF3lUvtbnlVQoxW2Y5j279THLGmE%2BWY%2FFckNzMtdO0iLBkVvdvhrUmCvFMT2zts0t7tt9jaN%2FzK14uAwA21Tg%2Bjd1W%2FQLNwS%2FFoxSvfrRKDrMbTKhjWRim8aRzQR%2F9BoXKWnlSCvWPP9AQ%2B7tqkCm3pujN27ipUZR%2BCR6YZcs4HgMLCI7DvFI0%2FfZRMLdQyk1PZMvB3UizlxLFHh8eziMVkAnUuznLOMC02EdZlOMh4ewt%2Bij0svWHZDis6kFhVXn%2BF0A3KWJE6o1yKvI3OOocaSvd1Of%2Bt9VOB3cnBV1FA6vBr%2BrrnXC5zH%2B5kxUkC7poi5b3%2B%2FYVVcoZgdIn3QzNUI%2FnI66KZ3%2FBlm3c9eyC4FYgfrIMJrj%2Fb4GOqUBZRbtnvMUo7uxS5suKeztak7lTH0FFqbOALIMJolQJf4OIRmk7PrGB9dXy0mJ96SM992R%2FIhpm7iGiH7O4fjKN5pnd8V8BAukaF3e8RkwXzwspcx77syuORv%2FbtaumvxV6PdgWwKJ8bMHjDrtk27gLjU9yHB%2FrS96yCJZ%2FysW98qOeeor2dns18edzQq1NiP4lshZDN%2BI86y23HSM0hpsHzDT0pCJ&X-Amz-Signature=5ee11625e9543e64accb696918da0445aadac327873e2ab5c682a7c2b99fc50f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVB5CYN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFGHRG4jjpEhTF%2BNrTN%2Fw0Xvk4t4UsPTEPkcrn1e0jtWAiEA0I%2BiYF1tUEgyHRCh5T8OZ0v17AbijggLxJu2oqUvEHwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcUHu9ml5zYzZX7AyrcA%2BLxGx9iLCgDsS9dO5mSuuRbq7%2BuRxcdRsCIbckCtLoJ%2FRk%2BBpmWkzOuFYFXecWc4Noz9b8hUzJGoOl5a6ILTPznySN%2BH%2Bf1Wt77RYfpmR8OuKo7lrWCSyNT1bG4JT8TJjiTmkJnU8XMn9ZHjpzjnkIjOlhRA77JtVqQpzCjR1MfFBBMfel%2Blksvc3Gk0yzAtdkNOKjKzzltuQ3FObTlBIsEO5TRx6Wq3ndHW56cvZ69jqzvMlng0W%2F4ELQchQXFC9%2BOSTuVsmOlF3lUvtbnlVQoxW2Y5j279THLGmE%2BWY%2FFckNzMtdO0iLBkVvdvhrUmCvFMT2zts0t7tt9jaN%2FzK14uAwA21Tg%2Bjd1W%2FQLNwS%2FFoxSvfrRKDrMbTKhjWRim8aRzQR%2F9BoXKWnlSCvWPP9AQ%2B7tqkCm3pujN27ipUZR%2BCR6YZcs4HgMLCI7DvFI0%2FfZRMLdQyk1PZMvB3UizlxLFHh8eziMVkAnUuznLOMC02EdZlOMh4ewt%2Bij0svWHZDis6kFhVXn%2BF0A3KWJE6o1yKvI3OOocaSvd1Of%2Bt9VOB3cnBV1FA6vBr%2BrrnXC5zH%2B5kxUkC7poi5b3%2B%2FYVVcoZgdIn3QzNUI%2FnI66KZ3%2FBlm3c9eyC4FYgfrIMJrj%2Fb4GOqUBZRbtnvMUo7uxS5suKeztak7lTH0FFqbOALIMJolQJf4OIRmk7PrGB9dXy0mJ96SM992R%2FIhpm7iGiH7O4fjKN5pnd8V8BAukaF3e8RkwXzwspcx77syuORv%2FbtaumvxV6PdgWwKJ8bMHjDrtk27gLjU9yHB%2FrS96yCJZ%2FysW98qOeeor2dns18edzQq1NiP4lshZDN%2BI86y23HSM0hpsHzDT0pCJ&X-Amz-Signature=0595e39af601050b64ebbb075f4a4e79e317d428574f96b73d04c644aab02898&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
