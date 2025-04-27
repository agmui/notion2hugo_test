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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMRHT6Q%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDkiBgFG0PAX%2BsksSGCYzizmZ%2FAFVRWgqbswxMIGhWiwIhAMBMnuRS8q1vjQpanpb69VllTfJwtiyzvUqCimK7X4GwKv8DCFAQABoMNjM3NDIzMTgzODA1IgynrykzsTQsOWAa9Jsq3APBj8XqQG%2Fb7XymWy0V5JHLDDcqJFlL6%2B%2FZPwyPIWxduv5h3hqRLjCFYDQ6xs8mIOs6bz7woVQGyVtOf4gNaIhaWKWcU9xnX7JgXiVW3LLl%2BJd1imeV4t2u5z2UTZH6z5jCikT%2Fd65E7eqWnKSlRoC8cARSdw8r0kWHFjpDzSeLMB4zKcBi7pH%2Bq0Ft0%2FgbbrPYQuPJAAqqBkTXzAxL0aHDB7CkwLS0nxI6Uj1fckFKUeiQzRn%2F%2FG3435LviiInVuAQ8KjPsjtRiLvflfLf8FMSb14xQDQ5SjeAk97J4jUk5Zp8IWhqkZzs7EPxSRf0rYoCuzhhow8MNvFKzcH9692nScKJkKJ%2FyvH87omE%2FDZZjY6yrAl54caJkzlu3%2BQk6kjy%2F8Nv%2F4Xbk9TbBQ2U9GosiVAaUFZdYI8yhNv3v20fCn3RgKqTEa7xf0gVYv90G9%2FisWGYVxmwiWhkASp3JSPiqfVYYDn2RYaEKqlZPTeNC91R%2FdkNB0df3VdN264mEI94u0EP9BweGdr23je7FoQsUl4U7iVEUwIGI7k%2BaW3235GmW8fM3EZ%2FUrOx8NrGiS6XykjX7xBKOwaQKFD0Ej9DxA1uynesCn74MwkjCi0BG6gzSjbBXWOWXnIqXjC7v7XABjqkAanO9e0EXTpWqxe%2F5lT7OMpfwLwoECY6%2FLqvE05jb3FVcfSwwE8pvopicyGqMgu%2F5kwM2XDwpn2llAkvtSREeV2oshQw%2BlGmMGQutSkYB1Kj0ZUeILK7rOUVfJ2258yRlh%2F6gmScUz9XIo3L1HcDU4eabLw0OLErzxI5QmXpB%2F%2FO0tn%2BsxXiBEqE42H2me4BwuIW2ravoQWtEzD%2FuuXNJfwak5lx&X-Amz-Signature=d278d17c07bf6e15810d6df90834dc32115fda1baf99385938396e359e8406e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMRHT6Q%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDkiBgFG0PAX%2BsksSGCYzizmZ%2FAFVRWgqbswxMIGhWiwIhAMBMnuRS8q1vjQpanpb69VllTfJwtiyzvUqCimK7X4GwKv8DCFAQABoMNjM3NDIzMTgzODA1IgynrykzsTQsOWAa9Jsq3APBj8XqQG%2Fb7XymWy0V5JHLDDcqJFlL6%2B%2FZPwyPIWxduv5h3hqRLjCFYDQ6xs8mIOs6bz7woVQGyVtOf4gNaIhaWKWcU9xnX7JgXiVW3LLl%2BJd1imeV4t2u5z2UTZH6z5jCikT%2Fd65E7eqWnKSlRoC8cARSdw8r0kWHFjpDzSeLMB4zKcBi7pH%2Bq0Ft0%2FgbbrPYQuPJAAqqBkTXzAxL0aHDB7CkwLS0nxI6Uj1fckFKUeiQzRn%2F%2FG3435LviiInVuAQ8KjPsjtRiLvflfLf8FMSb14xQDQ5SjeAk97J4jUk5Zp8IWhqkZzs7EPxSRf0rYoCuzhhow8MNvFKzcH9692nScKJkKJ%2FyvH87omE%2FDZZjY6yrAl54caJkzlu3%2BQk6kjy%2F8Nv%2F4Xbk9TbBQ2U9GosiVAaUFZdYI8yhNv3v20fCn3RgKqTEa7xf0gVYv90G9%2FisWGYVxmwiWhkASp3JSPiqfVYYDn2RYaEKqlZPTeNC91R%2FdkNB0df3VdN264mEI94u0EP9BweGdr23je7FoQsUl4U7iVEUwIGI7k%2BaW3235GmW8fM3EZ%2FUrOx8NrGiS6XykjX7xBKOwaQKFD0Ej9DxA1uynesCn74MwkjCi0BG6gzSjbBXWOWXnIqXjC7v7XABjqkAanO9e0EXTpWqxe%2F5lT7OMpfwLwoECY6%2FLqvE05jb3FVcfSwwE8pvopicyGqMgu%2F5kwM2XDwpn2llAkvtSREeV2oshQw%2BlGmMGQutSkYB1Kj0ZUeILK7rOUVfJ2258yRlh%2F6gmScUz9XIo3L1HcDU4eabLw0OLErzxI5QmXpB%2F%2FO0tn%2BsxXiBEqE42H2me4BwuIW2ravoQWtEzD%2FuuXNJfwak5lx&X-Amz-Signature=d0792ce7d40b9d4f98735fe9aed76b72a60472d0cd8718f387cafc317af95db3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
