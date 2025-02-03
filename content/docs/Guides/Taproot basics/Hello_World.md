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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIUTLVQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCw4%2B%2F8fDtp7djTMVxvuuIVrggBPwuwtR998yc5B65azgIhAODHBYAxTWNJdAqfMziur785pARd2OuQzsBXpJlr0FAJKv8DCB0QABoMNjM3NDIzMTgzODA1IgzlleCuP9CiKevBnmwq3AO9Gae8ku%2BIm5cLY1sby28Y0EJIVYWx%2F856Ry0BLHu8T0WltyMbeFDMfsN4qvySRLP04%2F4jzU504rI3KfbQlWoZb%2FD4wlcL4mWJL7%2BZwsM5ibUEIMUIDJk8lF%2FEjfB0OqPhB5CNJvSfsyuXvX81gGT01%2FKWyLPhby6UdHr25xC9Brxb%2BiTWvQ0Nt0CYxSC93mvZjIZ7O15Lo3n9umszk%2FeB0WZgS9SPgY%2FSIGdCC2Nq%2FkZE8dWLKaRhd9RnvMh4GqmPRd0ZWHGpuASxce4J%2BlvQ%2BMg%2BKtqQc0vWcnRIF%2Fq5CojMHj%2BAj%2BUQDRGVU6ceoEtEvPgd2tMaBeH3iFO4akq5pjz4I1PwVHdFoa98vQFK7tGeso7ehnRAgK7jQ%2BtLm5USuDpi2l7wjsi8XvxjEnLawcZ6VpSfH9gUr2BFjWkZ9hASUApvOKmrAN256BK%2FafN1sIY9yVLV2HkBEmXOkXis7H3N6CKY7eueYZiQQKWe2LtFZ9L4ceVA7gMEQXi5xwQr5gA1KDim0ZcpMYzX47BOqMxc4e%2F%2BqkyzLv%2FIetC1XcNsAT8nHWxeQdU5VqQGBaBEprRbuyhjljw1yrZnBf7%2F81MpHr257swPiYSHnqFlFqGq4pcyQYcxAbje9zDqv4S9BjqkASMopTX5oi0d2e7XF39uyDlqWyOTmit4iq7jKNuqH8Jxjas88FN%2BMAIMbToLmj6v2Oc51HiGtqV9JH2g7xM0I5%2FOcKcU1XiTben0kPc5ihtxZrC9UokM%2BwZ%2F7YegEeYA36SCVtkjQzDVdkL0cZB95wEyM%2FD9JSulQ9MCUEMyAEo6Ttc7GGNXhMz9Z6GncnIETiwYLfXT%2BIqzKsP8KyZFHKxuC2DX&X-Amz-Signature=7ece91b8bbdbc8d75ef99c6b960d8270b20472bfa2b83fafab8e69ca66fd2916&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIUTLVQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCw4%2B%2F8fDtp7djTMVxvuuIVrggBPwuwtR998yc5B65azgIhAODHBYAxTWNJdAqfMziur785pARd2OuQzsBXpJlr0FAJKv8DCB0QABoMNjM3NDIzMTgzODA1IgzlleCuP9CiKevBnmwq3AO9Gae8ku%2BIm5cLY1sby28Y0EJIVYWx%2F856Ry0BLHu8T0WltyMbeFDMfsN4qvySRLP04%2F4jzU504rI3KfbQlWoZb%2FD4wlcL4mWJL7%2BZwsM5ibUEIMUIDJk8lF%2FEjfB0OqPhB5CNJvSfsyuXvX81gGT01%2FKWyLPhby6UdHr25xC9Brxb%2BiTWvQ0Nt0CYxSC93mvZjIZ7O15Lo3n9umszk%2FeB0WZgS9SPgY%2FSIGdCC2Nq%2FkZE8dWLKaRhd9RnvMh4GqmPRd0ZWHGpuASxce4J%2BlvQ%2BMg%2BKtqQc0vWcnRIF%2Fq5CojMHj%2BAj%2BUQDRGVU6ceoEtEvPgd2tMaBeH3iFO4akq5pjz4I1PwVHdFoa98vQFK7tGeso7ehnRAgK7jQ%2BtLm5USuDpi2l7wjsi8XvxjEnLawcZ6VpSfH9gUr2BFjWkZ9hASUApvOKmrAN256BK%2FafN1sIY9yVLV2HkBEmXOkXis7H3N6CKY7eueYZiQQKWe2LtFZ9L4ceVA7gMEQXi5xwQr5gA1KDim0ZcpMYzX47BOqMxc4e%2F%2BqkyzLv%2FIetC1XcNsAT8nHWxeQdU5VqQGBaBEprRbuyhjljw1yrZnBf7%2F81MpHr257swPiYSHnqFlFqGq4pcyQYcxAbje9zDqv4S9BjqkASMopTX5oi0d2e7XF39uyDlqWyOTmit4iq7jKNuqH8Jxjas88FN%2BMAIMbToLmj6v2Oc51HiGtqV9JH2g7xM0I5%2FOcKcU1XiTben0kPc5ihtxZrC9UokM%2BwZ%2F7YegEeYA36SCVtkjQzDVdkL0cZB95wEyM%2FD9JSulQ9MCUEMyAEo6Ttc7GGNXhMz9Z6GncnIETiwYLfXT%2BIqzKsP8KyZFHKxuC2DX&X-Amz-Signature=f47d41b5264a2bb6bc2bc0d5e57b773395a0eabdf1dd42e24445df143b671301&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
