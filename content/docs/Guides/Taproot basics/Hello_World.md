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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNSQZ54%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7TwalkhRYL2epN4tCmxs2XoQvPwdue%2BmoVGz0dmZ7hAIhAMi5hhcdqq3Y1jBQDUhzpeEpAkGQd8hGNLLnz1Zxj10EKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzldbI8T%2F0%2FpngToCoq3ANenyzrq0WXw0%2FH%2FmnHEgRKoZ%2B6PxHuVB%2BZhp%2FXK6z68x%2BE8B5Glj8FAxlOrmBOjxaevdiVqCnceUmG9KWOoJh3sV8iXLm%2B0gBtf%2FIJcSjQySX78bZWZssCHTq3lk%2BlcjUArgwybaGu4riUBm30jWE9xdU4%2FKL%2BZJZwh2gmswt3ZiQJDZYRw%2BIB7BwpAN8UKT15ps0%2BB9wXq85RA%2BE%2FBUcaDM7eIueT5jsK2QK6GIvzBHheZcvsuStDPj9ZKQjstNmkxs0FJLzQkMIsoVGrlq3LMZoGls%2BfZfUSAvC6LLTvdM0DPW0hJIyFwMmk5yNpJ0kKVH4vv4Hejm0U08Yat6yWvW3EkyneoYqP69EOV8d1DLnLR6U102pdq5%2BwfhcaW61YrIrtGFyGDvdwmoI%2Bm2%2FnQWKp3omE885NnkWClH18F0QalvLIxAqbil5wGSms7DCeFqt6yFVK%2FvsPhQd4GJ%2BG9jnhMQavK7zOfvVQI5r6fPXMigPOGhLRZlES3Sny%2Bh%2FHi79auRyAESJjNNR534g2PlHJUOarQY0rQrEWELN%2FFes%2BmOpJteqWLgKhwD6WODB3fkEflnDr0WVw6z0Ulzg%2Fr6NWNDLcdF%2FxFX3ad%2Bhu7L1lxujwptbjPvTB%2BzC%2B7ey8BjqkAVS%2BHh4rKOD3HuqXYp6vqw2rmFByDpnK0PN9oWGGaEXkduqkgStOQNBjSbKZBE9SYBTpvGNp%2Fv4Uw5mw5aSuJtMIpHiNeJDqtQTakKs0daY9m0N%2FHGFDTGuwLO5%2FyxCJuMDU44yzNw3tMKfpdph1CKAPgQ%2BipxB9C3JL4%2BWfVG7079HII%2BMn0fUuU7wq%2F0STR01E8j1BRbDFHKkA%2BlEKKb9DnGj%2B&X-Amz-Signature=b2269efd67ccdd725b642f8333b96324e9fd93c725b13a6122346340af7eeb71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNSQZ54%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7TwalkhRYL2epN4tCmxs2XoQvPwdue%2BmoVGz0dmZ7hAIhAMi5hhcdqq3Y1jBQDUhzpeEpAkGQd8hGNLLnz1Zxj10EKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzldbI8T%2F0%2FpngToCoq3ANenyzrq0WXw0%2FH%2FmnHEgRKoZ%2B6PxHuVB%2BZhp%2FXK6z68x%2BE8B5Glj8FAxlOrmBOjxaevdiVqCnceUmG9KWOoJh3sV8iXLm%2B0gBtf%2FIJcSjQySX78bZWZssCHTq3lk%2BlcjUArgwybaGu4riUBm30jWE9xdU4%2FKL%2BZJZwh2gmswt3ZiQJDZYRw%2BIB7BwpAN8UKT15ps0%2BB9wXq85RA%2BE%2FBUcaDM7eIueT5jsK2QK6GIvzBHheZcvsuStDPj9ZKQjstNmkxs0FJLzQkMIsoVGrlq3LMZoGls%2BfZfUSAvC6LLTvdM0DPW0hJIyFwMmk5yNpJ0kKVH4vv4Hejm0U08Yat6yWvW3EkyneoYqP69EOV8d1DLnLR6U102pdq5%2BwfhcaW61YrIrtGFyGDvdwmoI%2Bm2%2FnQWKp3omE885NnkWClH18F0QalvLIxAqbil5wGSms7DCeFqt6yFVK%2FvsPhQd4GJ%2BG9jnhMQavK7zOfvVQI5r6fPXMigPOGhLRZlES3Sny%2Bh%2FHi79auRyAESJjNNR534g2PlHJUOarQY0rQrEWELN%2FFes%2BmOpJteqWLgKhwD6WODB3fkEflnDr0WVw6z0Ulzg%2Fr6NWNDLcdF%2FxFX3ad%2Bhu7L1lxujwptbjPvTB%2BzC%2B7ey8BjqkAVS%2BHh4rKOD3HuqXYp6vqw2rmFByDpnK0PN9oWGGaEXkduqkgStOQNBjSbKZBE9SYBTpvGNp%2Fv4Uw5mw5aSuJtMIpHiNeJDqtQTakKs0daY9m0N%2FHGFDTGuwLO5%2FyxCJuMDU44yzNw3tMKfpdph1CKAPgQ%2BipxB9C3JL4%2BWfVG7079HII%2BMn0fUuU7wq%2F0STR01E8j1BRbDFHKkA%2BlEKKb9DnGj%2B&X-Amz-Signature=40615a2b076ac61b36c338e80a9304697ddbb59713fd62c704deec2eff4e7b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
