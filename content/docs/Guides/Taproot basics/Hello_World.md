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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DAPDT6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGRDJVMJBwuqhysLDZuf0Yrfs8wjZhicksMAM0eYrvA6AiBTqLkieNOdWLVp6NgswPw10fe%2B8MTh2Gx9ubuVcOfItCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMvB34JHlgmi%2BuQkSkKtwD0Qb7FzDp%2F7%2F9dsNwC2l6hNzDIvJqlUOcLmNAKxoqThw6KaHbvvyyf928kH6ckqr%2FT3XXI17gPLKblz1NlYcsof5%2BewN3pA356N9UqbEqw7qWPTNlKvR6pjk5%2Bf2njf3k5BAw0FAac9iaPwi8s%2F2jB7IGLYtljhIKg28IvDq3dWFivLreMin6fSSZyToXlsVlROF%2FbiuFhjRDzvYcZGxoDd9rUa7nrkTtl47GzgQw17j%2FPvcMAIyyky6Xz%2BN4xid%2BG1f809sFHWkoryakjUuxZsXNQeTiZbjrXDverqkJIySOJruQ4ZsU1x94jBmHK8Ztu1VHO2jaEygnuz4%2FiT62bJKJiGAUlkqgSWqCRhW%2BNVb6L25VSOjtkJHJIYqlnaJoAqyGznT1Fse9%2FNuo8o4fPQaJI%2B%2BT32ntADKS7lp52yAq68ADy1iViTr44XuwQ%2FV%2B6ERKgWaPp4hrdcX8ManPF56iOXXzpXkALcOjfrl0j7%2BLj9XEohqrwTotia8yOdGAQoNMUZi5sdQ1dXJtkJKFFk0BHpo4mNofXrbupWfqFre%2Fzl5JOGoTSSdf%2Bi42I9bZR7wweelP5KUtM5vJVCC21qSCax0rWdsIkCXqzi7cWVRGC4yA4z%2F1AoUiGYswouiowAY6pgG2QaJNH8DkOH39Abm1WbkXGi%2B%2FRUxozwQA5xeFvqUHDzCzCt2VEy1Zh%2FpOK%2BBkdP5VrH1tKo1zSsfNMO5ZGXyj27n0hUvaBRXhBJbof88sxhJb%2Bq5suan7g82kwuC7NNduUyce2ZwZEO7Mxna%2BUreUletbeo43AWATK37k28xFCcDVdjFAM4H%2Bx30NcUESSlwKNF97BFdToK%2F4IIReJKqSPqO9XJSC&X-Amz-Signature=1d0d9cfa1f5dcd4e3fabb1744f5d46079ef13f0f04bed682bb5a12a98aaa35f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DAPDT6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGRDJVMJBwuqhysLDZuf0Yrfs8wjZhicksMAM0eYrvA6AiBTqLkieNOdWLVp6NgswPw10fe%2B8MTh2Gx9ubuVcOfItCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMvB34JHlgmi%2BuQkSkKtwD0Qb7FzDp%2F7%2F9dsNwC2l6hNzDIvJqlUOcLmNAKxoqThw6KaHbvvyyf928kH6ckqr%2FT3XXI17gPLKblz1NlYcsof5%2BewN3pA356N9UqbEqw7qWPTNlKvR6pjk5%2Bf2njf3k5BAw0FAac9iaPwi8s%2F2jB7IGLYtljhIKg28IvDq3dWFivLreMin6fSSZyToXlsVlROF%2FbiuFhjRDzvYcZGxoDd9rUa7nrkTtl47GzgQw17j%2FPvcMAIyyky6Xz%2BN4xid%2BG1f809sFHWkoryakjUuxZsXNQeTiZbjrXDverqkJIySOJruQ4ZsU1x94jBmHK8Ztu1VHO2jaEygnuz4%2FiT62bJKJiGAUlkqgSWqCRhW%2BNVb6L25VSOjtkJHJIYqlnaJoAqyGznT1Fse9%2FNuo8o4fPQaJI%2B%2BT32ntADKS7lp52yAq68ADy1iViTr44XuwQ%2FV%2B6ERKgWaPp4hrdcX8ManPF56iOXXzpXkALcOjfrl0j7%2BLj9XEohqrwTotia8yOdGAQoNMUZi5sdQ1dXJtkJKFFk0BHpo4mNofXrbupWfqFre%2Fzl5JOGoTSSdf%2Bi42I9bZR7wweelP5KUtM5vJVCC21qSCax0rWdsIkCXqzi7cWVRGC4yA4z%2F1AoUiGYswouiowAY6pgG2QaJNH8DkOH39Abm1WbkXGi%2B%2FRUxozwQA5xeFvqUHDzCzCt2VEy1Zh%2FpOK%2BBkdP5VrH1tKo1zSsfNMO5ZGXyj27n0hUvaBRXhBJbof88sxhJb%2Bq5suan7g82kwuC7NNduUyce2ZwZEO7Mxna%2BUreUletbeo43AWATK37k28xFCcDVdjFAM4H%2Bx30NcUESSlwKNF97BFdToK%2F4IIReJKqSPqO9XJSC&X-Amz-Signature=8e0edd887907be5b12bfe99be061f5aeceb23de35a32da2b1b1cba5fcb08cf73&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
