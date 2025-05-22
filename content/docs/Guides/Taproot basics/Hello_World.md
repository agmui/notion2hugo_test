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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66JGWAN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDhdW4Q7AhJ7X%2BY4ZTHK4wEmgK9b2GyeboBHG%2BbH6blBQIhAI6oUZZnYjdaXGLQ6XsQPWdzY9m%2FdRZwI4SfVxZcu%2Bf9KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiVGHQ0DI9%2FpU1Vkwq3ANCVZL%2B4AEJoGj6YdDPb1Q%2BbUm9q8gGsZIqoGQjvpJkZ%2BOAZnsLIG0GRmwK3tOrYO%2F%2FAF1FcrxXLC8n8zy%2BjwtZ5VvVZx9NnuGz9ZMbiKTAoIaA7saXYfrYsQ5vyqi%2FTrUKvl%2BhW50ehhFRypstyIS1V0mPVlR7S6TmexOZPEjoisv6hgjdzwAA%2F7%2BWlmBhW9E%2BT2QnYS73%2Be%2FJ49t5Nu1IY0PP7l0sMnFj98s3b3fSCh2xGfkv3cF%2FftaudQPH5r7BZtL2MmbGwjqo4WQWmvqnih3KzJqPAZA2jkWmPd91azW5WLD0i%2FniydSVyS%2FDZ9hBUQkmty%2FZV%2B0MwL1Xgw5DQDv6jtidRKr7J1c7gdTt%2B%2BaLtMiB%2Fy0BzHhlcuZvxwickDFntN%2FUImiEfgSo754K11JfZOUzr%2F0RNPDzjyumPR32QFzYkgd2Meq2CRj6ukykY8UCd%2BCZSL8qlNo%2BrcKkpGkijFrTAp41bgi1nj1Pd8pfFgHmOMYRRn7Zko8eTeTpoG4kUQjvq26Nl9ip6mdyN2V3ok%2By86OzMwtJPRCKPGYROgNie86Khb4U4g8T3hAU8PGhYbcJbxH9jypvUJdlRvfBuK4MRev%2BS7n8yyhI4R0eypQQu%2Bq%2BcYLg%2FzCa97rBBjqkASGoN6NCd5s0z8w5i2cECNiAlCQLc62Flv1byUhHOK6gvTeIbKUfvsKOH4dZW4cZSOZtvq0GUwKJR2NpN%2BE%2FJyxFZVuoagT55AAJAqRsfAAEj%2BJP0hg9HWIQOaw7Zf6VhQ7TxyhZy7t%2FADqrGrrPQydv5MF8%2FluW0P%2FDiBBsNhHLmFJS9QPCyzQdRw%2FGnVS8ASaRNwlgdlbsdB5ec2%2BwVEiU4ELG&X-Amz-Signature=08c32a403d678095be1d72f20f40161c98aefe42e1fd56d5df032270f44141f3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66JGWAN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDhdW4Q7AhJ7X%2BY4ZTHK4wEmgK9b2GyeboBHG%2BbH6blBQIhAI6oUZZnYjdaXGLQ6XsQPWdzY9m%2FdRZwI4SfVxZcu%2Bf9KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiVGHQ0DI9%2FpU1Vkwq3ANCVZL%2B4AEJoGj6YdDPb1Q%2BbUm9q8gGsZIqoGQjvpJkZ%2BOAZnsLIG0GRmwK3tOrYO%2F%2FAF1FcrxXLC8n8zy%2BjwtZ5VvVZx9NnuGz9ZMbiKTAoIaA7saXYfrYsQ5vyqi%2FTrUKvl%2BhW50ehhFRypstyIS1V0mPVlR7S6TmexOZPEjoisv6hgjdzwAA%2F7%2BWlmBhW9E%2BT2QnYS73%2Be%2FJ49t5Nu1IY0PP7l0sMnFj98s3b3fSCh2xGfkv3cF%2FftaudQPH5r7BZtL2MmbGwjqo4WQWmvqnih3KzJqPAZA2jkWmPd91azW5WLD0i%2FniydSVyS%2FDZ9hBUQkmty%2FZV%2B0MwL1Xgw5DQDv6jtidRKr7J1c7gdTt%2B%2BaLtMiB%2Fy0BzHhlcuZvxwickDFntN%2FUImiEfgSo754K11JfZOUzr%2F0RNPDzjyumPR32QFzYkgd2Meq2CRj6ukykY8UCd%2BCZSL8qlNo%2BrcKkpGkijFrTAp41bgi1nj1Pd8pfFgHmOMYRRn7Zko8eTeTpoG4kUQjvq26Nl9ip6mdyN2V3ok%2By86OzMwtJPRCKPGYROgNie86Khb4U4g8T3hAU8PGhYbcJbxH9jypvUJdlRvfBuK4MRev%2BS7n8yyhI4R0eypQQu%2Bq%2BcYLg%2FzCa97rBBjqkASGoN6NCd5s0z8w5i2cECNiAlCQLc62Flv1byUhHOK6gvTeIbKUfvsKOH4dZW4cZSOZtvq0GUwKJR2NpN%2BE%2FJyxFZVuoagT55AAJAqRsfAAEj%2BJP0hg9HWIQOaw7Zf6VhQ7TxyhZy7t%2FADqrGrrPQydv5MF8%2FluW0P%2FDiBBsNhHLmFJS9QPCyzQdRw%2FGnVS8ASaRNwlgdlbsdB5ec2%2BwVEiU4ELG&X-Amz-Signature=b93d7371ea5d55dbd5766d85a0ad0b01d3ee2c3aef46681af6275b1e5f52652b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
