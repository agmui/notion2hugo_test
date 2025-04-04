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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNGEKMA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEAqK9OUdu2CjQ5J%2F2KKagEldw8XZT8NxqFi7zmFm4bAiAiJOWYUnrtHV%2FW45pjRjGgrl0ErhKakI1Mo52KpRiyfyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMhSMeQbgE1RFJ4HoYKtwDboqQGVQIKwcdamuDO4HYw7Yi3VlAOGI2KyL3k5g7slpTOZx%2BtvFW2hXcCJN0mBPRt1MS%2Bzm5cduUoQUUJgulZ7oRifAwUa0mrEZoV3EdM7u%2FuC3W3thNTXx5txluhg6Bh2Jx5j94DZL6JIlGS5xNtUKZhKUmrL7SiiymLo0eeB9BNJd9PWH4eKOWDKyiAYjm3%2FZKEWikI2qA%2B0xBdHhzqmO7GaRuyeFSpjmps1HwI6V7XSMHESUxX7Fvzdu8%2FZklT2CVv0Qyp0q%2FcVs2lOHWabC6oJGSTt3OiuxzlbW3n7%2BxXnEpt9yZ1APUnco9I%2Fg1fgdj1sDKIZ%2FbqwHs3PhdJM2PfVWq14ICYJLT2C%2Bo5%2FW8R4cW%2Bfu15WQEHrRfN1swkAhPEfNSZ1dSZDXLtHLdGUUb9qIYCynhQ%2Bvfnm4%2Fun8Zo2wL8LK9o9ab0xFLRkNcluc5GHpXUU9etV0MDqyZ83XLFwN463NnxIj8cUTouE8%2B0N1dyf57xImE9kSxaql1ZhnwEd0tsrTgNDbbqR1zUTfqHwV1GZ5jQENOhADNPZhbLfkhIfC8LSLiWiFXLkt8M0kGt%2FbXHIz7ZebMEVOPpRKGNNs9mFcwsQFhu0qysYvS%2FWVw2zK5sy99ltUw8%2Be%2FvwY6pgHkDsJeesIhhp%2B%2BUR4KaIF%2FnGXRnNvJRvNTPlVkeq8pny5%2BxupBdwMABqo%2FtDeL%2FiTw0o7qoHXcPaXgYG%2BYDNUZW57wNUvcI9Lwn13VhyxeOgHM4PlbjjoAG1fFWMc9gqlgGS5PLh6fHmkQRgXE%2FKvQycJmkZDBBakcjaWEUuChYnzFk8ld8FP22IqSSefVBhpWdeFA7B9RoBLYAiKxHUnR3Mgvnb8F&X-Amz-Signature=70ff46e6811034a1d21fa81b0ce106c0c43bbb5058a19e922dba8d2ccfa0b618&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNGEKMA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEAqK9OUdu2CjQ5J%2F2KKagEldw8XZT8NxqFi7zmFm4bAiAiJOWYUnrtHV%2FW45pjRjGgrl0ErhKakI1Mo52KpRiyfyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMhSMeQbgE1RFJ4HoYKtwDboqQGVQIKwcdamuDO4HYw7Yi3VlAOGI2KyL3k5g7slpTOZx%2BtvFW2hXcCJN0mBPRt1MS%2Bzm5cduUoQUUJgulZ7oRifAwUa0mrEZoV3EdM7u%2FuC3W3thNTXx5txluhg6Bh2Jx5j94DZL6JIlGS5xNtUKZhKUmrL7SiiymLo0eeB9BNJd9PWH4eKOWDKyiAYjm3%2FZKEWikI2qA%2B0xBdHhzqmO7GaRuyeFSpjmps1HwI6V7XSMHESUxX7Fvzdu8%2FZklT2CVv0Qyp0q%2FcVs2lOHWabC6oJGSTt3OiuxzlbW3n7%2BxXnEpt9yZ1APUnco9I%2Fg1fgdj1sDKIZ%2FbqwHs3PhdJM2PfVWq14ICYJLT2C%2Bo5%2FW8R4cW%2Bfu15WQEHrRfN1swkAhPEfNSZ1dSZDXLtHLdGUUb9qIYCynhQ%2Bvfnm4%2Fun8Zo2wL8LK9o9ab0xFLRkNcluc5GHpXUU9etV0MDqyZ83XLFwN463NnxIj8cUTouE8%2B0N1dyf57xImE9kSxaql1ZhnwEd0tsrTgNDbbqR1zUTfqHwV1GZ5jQENOhADNPZhbLfkhIfC8LSLiWiFXLkt8M0kGt%2FbXHIz7ZebMEVOPpRKGNNs9mFcwsQFhu0qysYvS%2FWVw2zK5sy99ltUw8%2Be%2FvwY6pgHkDsJeesIhhp%2B%2BUR4KaIF%2FnGXRnNvJRvNTPlVkeq8pny5%2BxupBdwMABqo%2FtDeL%2FiTw0o7qoHXcPaXgYG%2BYDNUZW57wNUvcI9Lwn13VhyxeOgHM4PlbjjoAG1fFWMc9gqlgGS5PLh6fHmkQRgXE%2FKvQycJmkZDBBakcjaWEUuChYnzFk8ld8FP22IqSSefVBhpWdeFA7B9RoBLYAiKxHUnR3Mgvnb8F&X-Amz-Signature=ef7d05018be315b3d836dcc95653ebb6c02b8414517de6a4775dc47e8a087d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
