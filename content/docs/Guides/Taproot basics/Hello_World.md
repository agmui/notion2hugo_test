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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QTQAKV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6hYNl%2BNY2rmXRkrtl3QKpuRXpQUKYn2bu%2FGHBjlGVOAIgZulJDkCaaFjHxpaQG8GbOG7vQ%2ByAUo99%2BEyCNFmLK4kqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRQXTOSY9wDwWIhiyrcA218QBh6PFaL4h2n6taZHoFX1TGuR3kBuEzxv7U7G2BTr1PK0gPFkQc1xKhYA8gzsC8a3o%2FPYIHTLs9cKUtEzNnYr3OHd9MmNkwLOkJuYzQIsBR6zF2AKawgGNYIn2b1xkhfXe157lKHeDyXwjPpz1zOxUSrC2LaQeeJwW5gM9UNb%2BUgqPfVYslIARl1%2Fow0NQBhcric9ub1zFn7NaCC5G2H4%2BQTnw8DBV0vZsxQTLW11lb9oupU59Jm6C5dPyhOtC7OB4U9%2FbDgPu9NVOAC2ctLkGSrSXGIsVWrnXuDGD4biWlMGOQbhzfzRU06BPvjMmWiv7C6Eo1ETS8vWo745rO3euPQyQnx5Cx%2FYyK%2B0TgryI%2FAst1rGJ%2FefteMvH4xn5sJg%2FH4Nl27%2F7PbLyVpUmMT4VvKvB3URJ12I9n5JISjEdoldb2wdzCQ1MowjZDeGh8MqzXVVoXjEO4uFZ2v5yLHfY%2F5GQm6YMQAMXjhGrP9l%2FLjSKXsdR0JiDVJoQtFNmRvKz4GGrfqLhdVvK9fo0Ibjeh4lzj2pTbOlB%2FFmS21zyPEGsupmMNy0RIvp43MnF3Rx8pG2iwzPPLU%2BaWofH4oFa8lv0XiLQ81xUAkXNKiluh1PH6k3OaTMsq0MJ%2BQtr0GOqUBvu1D82lITPQf6nGRb3lFJk5LfKrNK520ieK5VfZc7GvItZJFfnHw7yvzhuhdGgS3P6PuQUsY45rQoyZVQMfBFz1SRZsH5BjbBTPMAmvbsvirJAHKU0Ka%2FReatoS45AmCIF6nU6DuYpEcoxu3wu5Q8G6iw3Od0062eIaM5%2F2KxGnEJ%2Bt2cLw7yL3FB939hU%2BbEC%2B38n%2B50aPwD26jUkKxBFCtIpKW&X-Amz-Signature=892352a19c6a3123077985657ca0054c8be624d0d679428abff8db2e21d09e96&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QTQAKV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6hYNl%2BNY2rmXRkrtl3QKpuRXpQUKYn2bu%2FGHBjlGVOAIgZulJDkCaaFjHxpaQG8GbOG7vQ%2ByAUo99%2BEyCNFmLK4kqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRQXTOSY9wDwWIhiyrcA218QBh6PFaL4h2n6taZHoFX1TGuR3kBuEzxv7U7G2BTr1PK0gPFkQc1xKhYA8gzsC8a3o%2FPYIHTLs9cKUtEzNnYr3OHd9MmNkwLOkJuYzQIsBR6zF2AKawgGNYIn2b1xkhfXe157lKHeDyXwjPpz1zOxUSrC2LaQeeJwW5gM9UNb%2BUgqPfVYslIARl1%2Fow0NQBhcric9ub1zFn7NaCC5G2H4%2BQTnw8DBV0vZsxQTLW11lb9oupU59Jm6C5dPyhOtC7OB4U9%2FbDgPu9NVOAC2ctLkGSrSXGIsVWrnXuDGD4biWlMGOQbhzfzRU06BPvjMmWiv7C6Eo1ETS8vWo745rO3euPQyQnx5Cx%2FYyK%2B0TgryI%2FAst1rGJ%2FefteMvH4xn5sJg%2FH4Nl27%2F7PbLyVpUmMT4VvKvB3URJ12I9n5JISjEdoldb2wdzCQ1MowjZDeGh8MqzXVVoXjEO4uFZ2v5yLHfY%2F5GQm6YMQAMXjhGrP9l%2FLjSKXsdR0JiDVJoQtFNmRvKz4GGrfqLhdVvK9fo0Ibjeh4lzj2pTbOlB%2FFmS21zyPEGsupmMNy0RIvp43MnF3Rx8pG2iwzPPLU%2BaWofH4oFa8lv0XiLQ81xUAkXNKiluh1PH6k3OaTMsq0MJ%2BQtr0GOqUBvu1D82lITPQf6nGRb3lFJk5LfKrNK520ieK5VfZc7GvItZJFfnHw7yvzhuhdGgS3P6PuQUsY45rQoyZVQMfBFz1SRZsH5BjbBTPMAmvbsvirJAHKU0Ka%2FReatoS45AmCIF6nU6DuYpEcoxu3wu5Q8G6iw3Od0062eIaM5%2F2KxGnEJ%2Bt2cLw7yL3FB939hU%2BbEC%2B38n%2B50aPwD26jUkKxBFCtIpKW&X-Amz-Signature=2a685e2ca2c1e4762093ea9ee54accef8ffddda4f3891f2bba797059898ccb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
