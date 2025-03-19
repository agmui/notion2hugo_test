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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWDMBR5O%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLOzTCOdRH4AOA%2BHECZ8aV5NCagPT8YiLqFNrz11Y89AIhAMHNbJq2yN6mBfMixFwQ7tx1SdClVYFE9fIQ5gPCntJ9Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzWr2AKls67hnSF3Bwq3AMyZIZoytXVVe7L0LXAK5fSDHjmTAP%2FktKiXIbu0euy5osAK%2FAINgcnkb1vL6zSNyGUkp9b5snf0poJFWCXvUU%2Fn27l45TjD3QUXVO3xJw5RvzeHpcfjTzZNCGhj21MlgKDBEd6%2BbXlQvlLToLOb1L7HkSco6APQ2wUPpqvYJEs8ix8yKd3%2BiY7TuST99Aa7BqV4gJt2ChBz6%2B%2FiIYZ2B9lI3OJQE4hNWQ%2FtEaiIuuO7iNRUBikb2K1JR%2B240szfd1s1%2BOeL7S4khnBFrGhSfpcwhsTjxTbm3ath9FOCxT%2FRXyKUI2hh2yivfNgw2t1n6mDucnrywpxqzkQaT2CaPGTnyrokJaTaf466xaGMCx0m7qwUlOvcqsWI%2FOnFJxjfuyAAvO9G7oiCBDDf0%2BobfSwSbZ%2BUIgicPo9BbAyzICEV5J7WF4SstYe0yPLz4ivZDI9RphacLz9oIgX2%2FmAxlL6mwA9PFCuLocIbjFhWT9nCcf10c9mF0Cd74vZrAFdGaZggK%2Bj0Mp0pBAjChUXKvS%2FdiR0v9gYO7GqGJRBBQ27syBCghjuY1WyaR%2FtzK7Yqe6jABNAjc17lMLo5eSqqUN6CWM2DCqR8zLUbtMs3DU8igC%2FleB0pGlUngk3SzD6u%2Bu%2BBjqkAX7Bn8XZxD7%2F8mJ%2FZMgF3BuZvpulK%2BgxSwKcQuPjJaZa6%2FUHrJBdPVb4dCy6GUzonKSuj1KwDny0PE%2B0R704refBfR2TrOF9biG4O3DwHGoH6W58sgw0R1X6sZCZTk5Qt3P6Bo8SQ7PF9DeHlnwm8gMd2kEu%2FA9ak8CuOcueV5A313J0ood%2BTPIx5UzWq90pTBnvjco11QefWZ8W%2FlfvB%2FsjkXcN&X-Amz-Signature=0e42761dfdc65490780bd3706225ec81c7b6cbdb993e083eda082435e79508a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWDMBR5O%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDLOzTCOdRH4AOA%2BHECZ8aV5NCagPT8YiLqFNrz11Y89AIhAMHNbJq2yN6mBfMixFwQ7tx1SdClVYFE9fIQ5gPCntJ9Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzWr2AKls67hnSF3Bwq3AMyZIZoytXVVe7L0LXAK5fSDHjmTAP%2FktKiXIbu0euy5osAK%2FAINgcnkb1vL6zSNyGUkp9b5snf0poJFWCXvUU%2Fn27l45TjD3QUXVO3xJw5RvzeHpcfjTzZNCGhj21MlgKDBEd6%2BbXlQvlLToLOb1L7HkSco6APQ2wUPpqvYJEs8ix8yKd3%2BiY7TuST99Aa7BqV4gJt2ChBz6%2B%2FiIYZ2B9lI3OJQE4hNWQ%2FtEaiIuuO7iNRUBikb2K1JR%2B240szfd1s1%2BOeL7S4khnBFrGhSfpcwhsTjxTbm3ath9FOCxT%2FRXyKUI2hh2yivfNgw2t1n6mDucnrywpxqzkQaT2CaPGTnyrokJaTaf466xaGMCx0m7qwUlOvcqsWI%2FOnFJxjfuyAAvO9G7oiCBDDf0%2BobfSwSbZ%2BUIgicPo9BbAyzICEV5J7WF4SstYe0yPLz4ivZDI9RphacLz9oIgX2%2FmAxlL6mwA9PFCuLocIbjFhWT9nCcf10c9mF0Cd74vZrAFdGaZggK%2Bj0Mp0pBAjChUXKvS%2FdiR0v9gYO7GqGJRBBQ27syBCghjuY1WyaR%2FtzK7Yqe6jABNAjc17lMLo5eSqqUN6CWM2DCqR8zLUbtMs3DU8igC%2FleB0pGlUngk3SzD6u%2Bu%2BBjqkAX7Bn8XZxD7%2F8mJ%2FZMgF3BuZvpulK%2BgxSwKcQuPjJaZa6%2FUHrJBdPVb4dCy6GUzonKSuj1KwDny0PE%2B0R704refBfR2TrOF9biG4O3DwHGoH6W58sgw0R1X6sZCZTk5Qt3P6Bo8SQ7PF9DeHlnwm8gMd2kEu%2FA9ak8CuOcueV5A313J0ood%2BTPIx5UzWq90pTBnvjco11QefWZ8W%2FlfvB%2FsjkXcN&X-Amz-Signature=8e0df65810ae8cc06a7fc403c0d96900281d8d0f04e7cd5d6c901020dce79449&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
