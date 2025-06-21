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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRGDYPL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0zLwSXSdwJTwDCxXc6z9Ad0ksL3YN%2BjdkYasFaoZpdAiEAus33PkC8r%2BBemKv9FSHIYZN6orRtXiSjGpScev6ofrcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhKiVvWXJuB87kIZyrcA%2BTtHgajxwvgeon4anW53%2BJxT35az7fRO6Pz%2BuMcJLZa9lqcCs2LGudBJB%2BMItadZUG6iDcQA9wGtIUBHQfTl2FQ4442XOXBle%2F8rP92c%2FD87wFxLGDYyYUjgO3oggzeLr1ez9z6U2ie4%2BwiO6HIggwiuXb%2FGNvUEpeZbe4eEhwqlyV6x1X4rTP2vLfUZkpKr9vcEU6wdkCpSkjV0cLkp1OelB8GjLnzo2aztXHreMrrTO88QLh159STdZFkcBUfO8Vdo8FGQlA2TM%2BooihP4DbnZkJisIgZamMLyL3R8TbowYZO64k1z%2BP2KKUl6wBzOV4IezzWl5soD0WBNUcuqv9b%2F%2FfkMVRjlZbMOzSmNs7jkzzCMc5e6WQEaZG9EqgdAG2wTzelFug88l%2BR6zdw62J2ezpsf%2Fg0aithlboPeFCvc%2Bb%2FRyQD9sGWBGrku1BUPWS4Wp6OjDCnzzRhCNVEJjp%2BfdIiJHy%2BkmrjNQKWKtWmwHO9K6sF%2F7SOYtIPq0W4bs4pnnyRtSlhTG8Ky2iACUSSx9YJf%2Fp9SFY4QmWm%2FGVmuQPiG5adwyN17uIVF5uZriWYuJlCymFuERvbI3pbq8CBDWlSDXg3aNm4oWJi0DC6uMs7FDFm7Xdp2EakMJqP28IGOqUBL6n%2BOknHRZq4Ia8h6YqfAW6zcmayj9PSvKmzckNqfhondD%2F6XMry96MtoUjXfel0wb0HW0RBLYyEiyk8xeH%2BKZBJTxwqAb5qyLEFDfwzcmuXsx9TBzh8hJ4IAb1DhB3d4M4%2F5TgOMp5nW1LI%2FWp3UgLH7%2BBxnB7KGh0GytGzoFWQL1mRYcQmPx9YaAN06szROOTgkwSdKcxZxlFUs15Vslxj%2FWTz&X-Amz-Signature=9aa52e71c40dcfbe0a353b29995b7b28fe4f00164b95faaac26cf48e86720cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRGDYPL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0zLwSXSdwJTwDCxXc6z9Ad0ksL3YN%2BjdkYasFaoZpdAiEAus33PkC8r%2BBemKv9FSHIYZN6orRtXiSjGpScev6ofrcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhKiVvWXJuB87kIZyrcA%2BTtHgajxwvgeon4anW53%2BJxT35az7fRO6Pz%2BuMcJLZa9lqcCs2LGudBJB%2BMItadZUG6iDcQA9wGtIUBHQfTl2FQ4442XOXBle%2F8rP92c%2FD87wFxLGDYyYUjgO3oggzeLr1ez9z6U2ie4%2BwiO6HIggwiuXb%2FGNvUEpeZbe4eEhwqlyV6x1X4rTP2vLfUZkpKr9vcEU6wdkCpSkjV0cLkp1OelB8GjLnzo2aztXHreMrrTO88QLh159STdZFkcBUfO8Vdo8FGQlA2TM%2BooihP4DbnZkJisIgZamMLyL3R8TbowYZO64k1z%2BP2KKUl6wBzOV4IezzWl5soD0WBNUcuqv9b%2F%2FfkMVRjlZbMOzSmNs7jkzzCMc5e6WQEaZG9EqgdAG2wTzelFug88l%2BR6zdw62J2ezpsf%2Fg0aithlboPeFCvc%2Bb%2FRyQD9sGWBGrku1BUPWS4Wp6OjDCnzzRhCNVEJjp%2BfdIiJHy%2BkmrjNQKWKtWmwHO9K6sF%2F7SOYtIPq0W4bs4pnnyRtSlhTG8Ky2iACUSSx9YJf%2Fp9SFY4QmWm%2FGVmuQPiG5adwyN17uIVF5uZriWYuJlCymFuERvbI3pbq8CBDWlSDXg3aNm4oWJi0DC6uMs7FDFm7Xdp2EakMJqP28IGOqUBL6n%2BOknHRZq4Ia8h6YqfAW6zcmayj9PSvKmzckNqfhondD%2F6XMry96MtoUjXfel0wb0HW0RBLYyEiyk8xeH%2BKZBJTxwqAb5qyLEFDfwzcmuXsx9TBzh8hJ4IAb1DhB3d4M4%2F5TgOMp5nW1LI%2FWp3UgLH7%2BBxnB7KGh0GytGzoFWQL1mRYcQmPx9YaAN06szROOTgkwSdKcxZxlFUs15Vslxj%2FWTz&X-Amz-Signature=6ebb0fba84abb5981d7441a6743faa4b21b5f6cf5c27cc20fe08f6ca1b379bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
