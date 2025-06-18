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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPAQBHK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwg9IUJ%2FD6TrhB9%2B5SgjK1pvDzFOW3m%2FWBl130CSxnxgIgBhIo%2B0HCzqho8besBryJrwtZI%2BDvuLa9aS7vXWfnvXUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOf5LzfvDXmvOEwMSrcA7swrBuBW3o27OBoMvxa9bF0usHopCpr4Vsc8Njfj%2B%2BIN%2B3iwGsH7OHA8ZoDo216Hi8mv3lgXUqIRmhnUp%2FEi9wuWKYAT6TcbGG8DmG9s9D5yt1Hkc0pXECxZh6jgZBAsimC66A3x4%2BGW9Xk%2FYkAHMt18jDj9ZE%2BBuYp96smSbaZbB9ucHRfU91m2abnG1p9YhckVoAhY%2FJYUXIt83UQNU8bg4q61akrk9PIOvjQf1AR02IHvsUP08Z4PFnVkXzd0a%2FBdIuTrNV04F6OBu0QNWc01xktIR%2BWJrkuIv%2BQ9gJncyzH8pFNr%2F6T95dq9YLYK1rgYVBptHgdEFg0BYrH32YlqmFk5vfG9mx4rRLpKjNziU%2F0RbuDHD1Pahq5jaHKQXQBn9wAeNQBkjVrOVhObi21jrFmLXgyFA7jP7VHc78KReXT%2Fc53%2BJIqKjaurFtUfYhMUIz%2Fey%2F1QYwe2YXUhXG47RehCBwcr%2BKPyeI1%2B0J%2BC8nlkZSIGAlevofBJk%2Bgl4%2Ff6YRhqcgItsYy7oO1A2tiJsrsyOaowRf2qOd82D7lrsg3JkwDxKVBPI%2FojBTpFeJ%2FvaauaJS7EIMFv32th5jA9pRjECenQ6R%2BKutY5JLBNBsHp7fxBDMdiweyMNP3zMIGOqUBOBpVfCOGn6yQ9EYdzrY%2Fiks5%2F%2Ft9tS6GLXmWWajnkA9hc6PpXSw2Oen7SrNgjsYiIhHn%2Frxf1C%2FxkefKJ6Eh6dpDGCQvmaPJuq6h89ahGu9ERf2nff4raE7RTDEIatfSgMebnfBS0yXpKcSEtopu2Xy6BGNhZSS27XuQrP0BIRFRk7qVhxcBKJKGIfXpd%2B1zFeHYUBVNyhkjZqDG2PSLfePkK6f8&X-Amz-Signature=f58523f5394916aa8a851a687f49a72ee12d4b2f5f0f5b6916e1d727f493b3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPAQBHK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwg9IUJ%2FD6TrhB9%2B5SgjK1pvDzFOW3m%2FWBl130CSxnxgIgBhIo%2B0HCzqho8besBryJrwtZI%2BDvuLa9aS7vXWfnvXUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOf5LzfvDXmvOEwMSrcA7swrBuBW3o27OBoMvxa9bF0usHopCpr4Vsc8Njfj%2B%2BIN%2B3iwGsH7OHA8ZoDo216Hi8mv3lgXUqIRmhnUp%2FEi9wuWKYAT6TcbGG8DmG9s9D5yt1Hkc0pXECxZh6jgZBAsimC66A3x4%2BGW9Xk%2FYkAHMt18jDj9ZE%2BBuYp96smSbaZbB9ucHRfU91m2abnG1p9YhckVoAhY%2FJYUXIt83UQNU8bg4q61akrk9PIOvjQf1AR02IHvsUP08Z4PFnVkXzd0a%2FBdIuTrNV04F6OBu0QNWc01xktIR%2BWJrkuIv%2BQ9gJncyzH8pFNr%2F6T95dq9YLYK1rgYVBptHgdEFg0BYrH32YlqmFk5vfG9mx4rRLpKjNziU%2F0RbuDHD1Pahq5jaHKQXQBn9wAeNQBkjVrOVhObi21jrFmLXgyFA7jP7VHc78KReXT%2Fc53%2BJIqKjaurFtUfYhMUIz%2Fey%2F1QYwe2YXUhXG47RehCBwcr%2BKPyeI1%2B0J%2BC8nlkZSIGAlevofBJk%2Bgl4%2Ff6YRhqcgItsYy7oO1A2tiJsrsyOaowRf2qOd82D7lrsg3JkwDxKVBPI%2FojBTpFeJ%2FvaauaJS7EIMFv32th5jA9pRjECenQ6R%2BKutY5JLBNBsHp7fxBDMdiweyMNP3zMIGOqUBOBpVfCOGn6yQ9EYdzrY%2Fiks5%2F%2Ft9tS6GLXmWWajnkA9hc6PpXSw2Oen7SrNgjsYiIhHn%2Frxf1C%2FxkefKJ6Eh6dpDGCQvmaPJuq6h89ahGu9ERf2nff4raE7RTDEIatfSgMebnfBS0yXpKcSEtopu2Xy6BGNhZSS27XuQrP0BIRFRk7qVhxcBKJKGIfXpd%2B1zFeHYUBVNyhkjZqDG2PSLfePkK6f8&X-Amz-Signature=d022f04ea6a89827fee81ff55e0eb5ce7e706e7b5c95cae4a9df5d28a1d7d58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
