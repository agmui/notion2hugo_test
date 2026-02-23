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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QQFSOH%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDDWh%2BBt8Z3EpXRK8NZVgdPMZfCd%2BhmEFfoxgKYMr2iAIhAN0J9wkAQquNYlIUfuvPBbJCdeZz%2FwNky4nJ0h0OIv8BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYWE8YOlkadZCnL8q3AOVxL6DxkTWMBy%2B6f%2BMYDCuYWn29UAMezfXpyB2cHhLqieSLgd0OtMTlaxW3LMWcuv7Yxg1pxwejih5gb%2FqB%2F8KL1t4D6yPlwIdhG6upz1tLvogA1WEI5i9y5UsuQVgKXBBzaTvcxjX4D%2FXC%2BAyX%2BDGoXJ64YIqfwhcKl%2F0T%2BTUKwYrSxpiBEpSt76%2BGEZZeZMoaLgfHcQZGzdxa36iXHofUhL6hhAn01Gw6jR7rnkX38S98aL8qpqFIa0qXiaeLW5Oz%2B7tyHix4seafGzzXRv7dl1PpsHj%2F5uHJKCQ1X1dQS9eZ4beTD%2FPx5PzBj8GJHZo2rlcV97fvHTPIGxE8V35qEyy3mRLhjgJwfnw28Xawjgg2DpIbGRBTHUgP6H%2FYckjaVdqITJ79gu%2BATIP%2FkHTIrUiK5P0G3srSJ%2BCWphNGeb7rai%2BDaBXIiBSAPx9WvjTNbySzK2kZhV0QcYD8x0s9mYAkxEhApDGKKjIHh6egyFIe7Gi6xomnBaN3ehNJ3BKDg10ik2zMY8QLcJOMR%2BbOMLYddwujCmbHsOjQri1g3LUGSEbEdwsTrmN6%2FeujwGDF5qdoMkoCKDC70jI9EfZkF9lOm2i%2Bc64SzErWhYecuw9yod5WD%2F92iBLaDDV6%2B7MBjqkARIE5G%2B1RUz4h12blw%2BW68Fcdelu2QaaBQaTLvH8gXT58MYtFj4rrr13O3owvL%2FYfJqNUf8GNvlbB3e47x7sudKKKnnLjO9Pe%2FmVMNl7B8NTHwO0wMfzrrvzDCGGVUKLKqGbPfFezw5HL%2BgAngW7veATfyxZ%2FWvJhRL17KBH4iVx5ZgQXkLIe6WqMkzvHX7hSzjgQJJx5kk6taPr1AZH33h8QZtB&X-Amz-Signature=42ba2cf5a76c0950281f16abeef86fd47563d191fbba4ac6d3192fb004165d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QQFSOH%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDDWh%2BBt8Z3EpXRK8NZVgdPMZfCd%2BhmEFfoxgKYMr2iAIhAN0J9wkAQquNYlIUfuvPBbJCdeZz%2FwNky4nJ0h0OIv8BKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqYWE8YOlkadZCnL8q3AOVxL6DxkTWMBy%2B6f%2BMYDCuYWn29UAMezfXpyB2cHhLqieSLgd0OtMTlaxW3LMWcuv7Yxg1pxwejih5gb%2FqB%2F8KL1t4D6yPlwIdhG6upz1tLvogA1WEI5i9y5UsuQVgKXBBzaTvcxjX4D%2FXC%2BAyX%2BDGoXJ64YIqfwhcKl%2F0T%2BTUKwYrSxpiBEpSt76%2BGEZZeZMoaLgfHcQZGzdxa36iXHofUhL6hhAn01Gw6jR7rnkX38S98aL8qpqFIa0qXiaeLW5Oz%2B7tyHix4seafGzzXRv7dl1PpsHj%2F5uHJKCQ1X1dQS9eZ4beTD%2FPx5PzBj8GJHZo2rlcV97fvHTPIGxE8V35qEyy3mRLhjgJwfnw28Xawjgg2DpIbGRBTHUgP6H%2FYckjaVdqITJ79gu%2BATIP%2FkHTIrUiK5P0G3srSJ%2BCWphNGeb7rai%2BDaBXIiBSAPx9WvjTNbySzK2kZhV0QcYD8x0s9mYAkxEhApDGKKjIHh6egyFIe7Gi6xomnBaN3ehNJ3BKDg10ik2zMY8QLcJOMR%2BbOMLYddwujCmbHsOjQri1g3LUGSEbEdwsTrmN6%2FeujwGDF5qdoMkoCKDC70jI9EfZkF9lOm2i%2Bc64SzErWhYecuw9yod5WD%2F92iBLaDDV6%2B7MBjqkARIE5G%2B1RUz4h12blw%2BW68Fcdelu2QaaBQaTLvH8gXT58MYtFj4rrr13O3owvL%2FYfJqNUf8GNvlbB3e47x7sudKKKnnLjO9Pe%2FmVMNl7B8NTHwO0wMfzrrvzDCGGVUKLKqGbPfFezw5HL%2BgAngW7veATfyxZ%2FWvJhRL17KBH4iVx5ZgQXkLIe6WqMkzvHX7hSzjgQJJx5kk6taPr1AZH33h8QZtB&X-Amz-Signature=bdb31f475eef7809091832252ef262670e6d05e08ec42c8bc51d55b358e41f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
