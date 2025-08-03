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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6RXJOI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD25mxc21q%2BW4%2BA%2F7T4EqjHuIV9ZNSm6UT1LDlIhdgeLwIhAKD7M5s8bDFnj%2FpV48uKSv8pzm9kPN%2Fduz40zi2opPt%2BKv8DCDQQABoMNjM3NDIzMTgzODA1IgyvttyZBBSrP9nTFSsq3AOzOIQn25SzvtbPxjbhSYYLwrGWwOSkBeDt8xpO72rZgdpqMbAgVfvat58sclRNbR6JBq%2Fni1KMmmNSmeJ0btLO9x5%2FKA%2BCk4dWKGyfZXhwvaBkSIg5nOmhbbooLqYCYREw0h2aAtGZoopa5rYoBWMVbZiYI4AzQlpJLZ1jCoNsM0UlgIgBtRKTiG%2FnyQT7BNzIlJjzF7rMhLjB%2B%2F7ZwQjY6r5s0G2vgrSCnoxY4DbojdDItAAdmBoYAKcxQgbQfx%2BRd7S%2FdxDv0EdDm3fGCkM5BB6uHNemBRkOXcXL%2FZvYTuzCwfp96ptSS7hvGYdTZw52hR6oUDRbER62Ud%2F4R%2BOiGqI%2FG016HytD04HCjixSpEi9UgVb5TFPat4Z%2BxnO4QzfW0IceP%2BqNgMk21HqGfKhyFXf4U2Qm0pHS5yAEUdmJ8aJXvX7HKxqfr%2FyBUjASw8lipdj2vj1MbI0q4HKkDsBF7FILFLruM9lxEg5Ix0AJ%2B8ftFSj%2BZhO7nNww9U%2FSPq97ABHWjWz0aLKWBkYmNtG7yCIo%2Bt79Dw8MDIG%2B9qWipICy8rBPmezhXTp0lXx294vvtljcDCta%2FwinIvSI%2BKlAZg5wxLlMwUt7ZQQzoskiYeJdazc98dCgl8lfTCt2b7EBjqkAf9QURO1IliTd8ryBYzgMEmb63jtpuyt138K2GsjpSFsiclKCKrNBuIzfOvD%2BzDoKw%2B1nyxOYZ53LRzThSf2fJFY65lu%2F4OzelEGE2nFS%2BnfXrpwwi53vgE%2BUYqW5C52RXamvFJ%2FCCELa9HpMOgWlC2w5jZe%2F5bz195ppx5su6aBQxjNvvHPicsxshVhF8SJShiLtaqArHR3UfIeSzm02I38cP0m&X-Amz-Signature=9ac774dd2094ac6885ee518c7058f0a018d679bee271c0a9265e8285cdfff7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6RXJOI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD25mxc21q%2BW4%2BA%2F7T4EqjHuIV9ZNSm6UT1LDlIhdgeLwIhAKD7M5s8bDFnj%2FpV48uKSv8pzm9kPN%2Fduz40zi2opPt%2BKv8DCDQQABoMNjM3NDIzMTgzODA1IgyvttyZBBSrP9nTFSsq3AOzOIQn25SzvtbPxjbhSYYLwrGWwOSkBeDt8xpO72rZgdpqMbAgVfvat58sclRNbR6JBq%2Fni1KMmmNSmeJ0btLO9x5%2FKA%2BCk4dWKGyfZXhwvaBkSIg5nOmhbbooLqYCYREw0h2aAtGZoopa5rYoBWMVbZiYI4AzQlpJLZ1jCoNsM0UlgIgBtRKTiG%2FnyQT7BNzIlJjzF7rMhLjB%2B%2F7ZwQjY6r5s0G2vgrSCnoxY4DbojdDItAAdmBoYAKcxQgbQfx%2BRd7S%2FdxDv0EdDm3fGCkM5BB6uHNemBRkOXcXL%2FZvYTuzCwfp96ptSS7hvGYdTZw52hR6oUDRbER62Ud%2F4R%2BOiGqI%2FG016HytD04HCjixSpEi9UgVb5TFPat4Z%2BxnO4QzfW0IceP%2BqNgMk21HqGfKhyFXf4U2Qm0pHS5yAEUdmJ8aJXvX7HKxqfr%2FyBUjASw8lipdj2vj1MbI0q4HKkDsBF7FILFLruM9lxEg5Ix0AJ%2B8ftFSj%2BZhO7nNww9U%2FSPq97ABHWjWz0aLKWBkYmNtG7yCIo%2Bt79Dw8MDIG%2B9qWipICy8rBPmezhXTp0lXx294vvtljcDCta%2FwinIvSI%2BKlAZg5wxLlMwUt7ZQQzoskiYeJdazc98dCgl8lfTCt2b7EBjqkAf9QURO1IliTd8ryBYzgMEmb63jtpuyt138K2GsjpSFsiclKCKrNBuIzfOvD%2BzDoKw%2B1nyxOYZ53LRzThSf2fJFY65lu%2F4OzelEGE2nFS%2BnfXrpwwi53vgE%2BUYqW5C52RXamvFJ%2FCCELa9HpMOgWlC2w5jZe%2F5bz195ppx5su6aBQxjNvvHPicsxshVhF8SJShiLtaqArHR3UfIeSzm02I38cP0m&X-Amz-Signature=4bde640a0cba13f12a900a9610345eca4868ec1cc0e3e56fb653b19c6144dfc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
