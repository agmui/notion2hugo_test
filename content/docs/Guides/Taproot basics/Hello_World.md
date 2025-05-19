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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QRJCWB%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa9OAXBesGCj8Eb%2BSjBAn68XQIFzZogc7J%2BsyrR8MjNwIgJK6yMNjeUWXwiyAWGQxpVgmBz%2FCWw5okAev3cuvLR5UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYn33XTfgIoxw9kECrcA%2B2HSzlI5skj84g7mtRaFU6eZALsZCHZpSO5fWZJQoEYoCc3rpSr%2FRO8oz5hSyAynVUa0iLaf4sKcv9zaYiOOmhlvFjK2ZCAywd%2FB65nIjyNYhvYBj2Y6LcwUJcNiTJYLt9CR5thm5EcRnvYtMUeyWk9twdxtzn%2BdhRRl2Hy%2BKRAw0mvAXv7I4gMGBXx9onlFhu0dE4oIlOY2eNJpi7rqLQXrocmNybQe1l0sBOZ8GuFlhHXdXnRmky%2B2xH6HnZ37BM7PO1tOZsYxKkbjg7EXHCJjagSKSvINU56XdcmJTkinjCjGYEjSIoP%2FmbiuzON1IsF2t6ALacK8YZjl6sDI%2FrqkcZMyJNCT1uCIApfUqDZjGjGqPVVynyd8qXL9aPRKqfTI7dLY1MtRpVc1LkhX54jfoUxUNNDNkQNwfdmc2YuUqL3IiNbvK03Pnj%2FR4vIp71JW9KNp8ATQKCoZxvY6BROG5fjWNM1JHtnVO9hP0A%2Fng%2FLe5xGCrON4M4DIvYtW1aBdOEV1zXLUTE7D0%2BGrHsgX24qB58n7u2d5wNyaK9cwax18YGFp2ph5zJRwZLbSroBLkMwOAhAsp41WaAMEC0QNw44MeV4Ct4h%2FKxwg7f%2BMxLIon8vPfuVSquxMMuBrMEGOqUBKimC11krUiILUbrRXHUN%2BtngaeoXrYt0mDtk%2B1j7hHDGrTrgmySAXgEOi6Jr9MuFGHzjFmwFK%2B%2BpCVt0eqPOmzk3bUw3xMpRqBi4zoxjXcVJ3N%2BpKpc0cKBPv6VXfdomrf0pN8IjTL4TzNCJs8VDrxt93E8iMVWbvKvQzpuAIm11v9YaYvUBJU6IKzJdGxg1U%2B16mqzDh2Dd41fEi77dH8%2Fkqima&X-Amz-Signature=c73044b5db51ff1203ca696a74a7f830de0212787875528984edbfd708288c44&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QRJCWB%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa9OAXBesGCj8Eb%2BSjBAn68XQIFzZogc7J%2BsyrR8MjNwIgJK6yMNjeUWXwiyAWGQxpVgmBz%2FCWw5okAev3cuvLR5UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYn33XTfgIoxw9kECrcA%2B2HSzlI5skj84g7mtRaFU6eZALsZCHZpSO5fWZJQoEYoCc3rpSr%2FRO8oz5hSyAynVUa0iLaf4sKcv9zaYiOOmhlvFjK2ZCAywd%2FB65nIjyNYhvYBj2Y6LcwUJcNiTJYLt9CR5thm5EcRnvYtMUeyWk9twdxtzn%2BdhRRl2Hy%2BKRAw0mvAXv7I4gMGBXx9onlFhu0dE4oIlOY2eNJpi7rqLQXrocmNybQe1l0sBOZ8GuFlhHXdXnRmky%2B2xH6HnZ37BM7PO1tOZsYxKkbjg7EXHCJjagSKSvINU56XdcmJTkinjCjGYEjSIoP%2FmbiuzON1IsF2t6ALacK8YZjl6sDI%2FrqkcZMyJNCT1uCIApfUqDZjGjGqPVVynyd8qXL9aPRKqfTI7dLY1MtRpVc1LkhX54jfoUxUNNDNkQNwfdmc2YuUqL3IiNbvK03Pnj%2FR4vIp71JW9KNp8ATQKCoZxvY6BROG5fjWNM1JHtnVO9hP0A%2Fng%2FLe5xGCrON4M4DIvYtW1aBdOEV1zXLUTE7D0%2BGrHsgX24qB58n7u2d5wNyaK9cwax18YGFp2ph5zJRwZLbSroBLkMwOAhAsp41WaAMEC0QNw44MeV4Ct4h%2FKxwg7f%2BMxLIon8vPfuVSquxMMuBrMEGOqUBKimC11krUiILUbrRXHUN%2BtngaeoXrYt0mDtk%2B1j7hHDGrTrgmySAXgEOi6Jr9MuFGHzjFmwFK%2B%2BpCVt0eqPOmzk3bUw3xMpRqBi4zoxjXcVJ3N%2BpKpc0cKBPv6VXfdomrf0pN8IjTL4TzNCJs8VDrxt93E8iMVWbvKvQzpuAIm11v9YaYvUBJU6IKzJdGxg1U%2B16mqzDh2Dd41fEi77dH8%2Fkqima&X-Amz-Signature=0881c67e43a3a32b88399b0a3be59bc45653169613332ddcea032a0bd8eec2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
