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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYOPZFOD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcZC6t72JUD%2BXcoFYvr9uKs55Ru47CscRC5mghdkPnVAiEA6UCfjCXm2aGIM8kxpnmFI%2BrBL1D%2BFAUZeIYfQhptg3sqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN5QzTbtGm7jls2cSrcA8qgQ1%2Fpr7oO7PdVvPPQoeidyx%2BrlSQVkYE5yJsUpPs%2F2dxvU5Drs1kxqVRA4phS%2Fbyu6jkiALGtZ01fUnRrUccw%2BMj2V47gtdPh%2BpDzk6uZWbWqLN4XA9kP5Xpmj5QGsh53sFGA3O%2BC59oQ9bYg42TifwmZ%2FCpHa7qbXosy1lynaqI7OrTzH23cV72318ld6ROBRAAAvn3WebojjEYqFE1rt20rewqH8Os1gzn74AXeK8Z2rHiH578Zztcigt4Kqd%2Bf5SY8q8OPZDCCIK9IgV3Ebf3KislaIHMh%2FgYvFZpw4xHWkbgZ63fopKj2NLfu%2Bx70w27Is6J1H6EP2emXipt4IL5t8IJfKzmqGj1Pd2aBVtfbdJFuahhqTGcuFOWBq0L41YJTpA78OjJqVOmSat7EKiUgKzStgNMLuoiL%2BZhpWWlsyrdqLB8jzO8hJiYDnwpRqxbr3HZ8W4gYnADaUAnXPZ0fIGcdtBGdE1Ff%2ByulKV3SY7TL2irbs6fH3vVGHySfrO9ik5faQFbL3RsFF8A9bHuLT%2FRjj2KBAc3FNW6DYG6usEzQrV69u6TYGl9Zt27QHxbNkPy4UleKKCGMDNLTvpTw%2Bi4eUXSJxRP9tA0A6erGlA6vJ%2FOP7qrEMPSE6bwGOqUBQbVRw7IaB0vPBR3Q139TesxPaah26DEWO7%2FXQpDKbaa8MhSNdxdr7O5wlxueUP%2By8eqMlpqyUu6ZE%2BBZGB9x8M%2FMJX6lwKBkTwoLSTtX9HreALpZq28sja%2BxxEQ1CXJC1BKxIUG1p3UZ3h0fjotRUV4VEaJ%2BB0h0V5qg93dYqscsyqq%2BEYzOQ0W9BKj5SOLToKtXSCeFe%2BfPKeRY%2BQCcukv4BQ7c&X-Amz-Signature=bdb6b06e3b3698f77d854a3b363b68dc916ac2c11f015a21fceb9ed40f23dd76&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYOPZFOD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcZC6t72JUD%2BXcoFYvr9uKs55Ru47CscRC5mghdkPnVAiEA6UCfjCXm2aGIM8kxpnmFI%2BrBL1D%2BFAUZeIYfQhptg3sqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN5QzTbtGm7jls2cSrcA8qgQ1%2Fpr7oO7PdVvPPQoeidyx%2BrlSQVkYE5yJsUpPs%2F2dxvU5Drs1kxqVRA4phS%2Fbyu6jkiALGtZ01fUnRrUccw%2BMj2V47gtdPh%2BpDzk6uZWbWqLN4XA9kP5Xpmj5QGsh53sFGA3O%2BC59oQ9bYg42TifwmZ%2FCpHa7qbXosy1lynaqI7OrTzH23cV72318ld6ROBRAAAvn3WebojjEYqFE1rt20rewqH8Os1gzn74AXeK8Z2rHiH578Zztcigt4Kqd%2Bf5SY8q8OPZDCCIK9IgV3Ebf3KislaIHMh%2FgYvFZpw4xHWkbgZ63fopKj2NLfu%2Bx70w27Is6J1H6EP2emXipt4IL5t8IJfKzmqGj1Pd2aBVtfbdJFuahhqTGcuFOWBq0L41YJTpA78OjJqVOmSat7EKiUgKzStgNMLuoiL%2BZhpWWlsyrdqLB8jzO8hJiYDnwpRqxbr3HZ8W4gYnADaUAnXPZ0fIGcdtBGdE1Ff%2ByulKV3SY7TL2irbs6fH3vVGHySfrO9ik5faQFbL3RsFF8A9bHuLT%2FRjj2KBAc3FNW6DYG6usEzQrV69u6TYGl9Zt27QHxbNkPy4UleKKCGMDNLTvpTw%2Bi4eUXSJxRP9tA0A6erGlA6vJ%2FOP7qrEMPSE6bwGOqUBQbVRw7IaB0vPBR3Q139TesxPaah26DEWO7%2FXQpDKbaa8MhSNdxdr7O5wlxueUP%2By8eqMlpqyUu6ZE%2BBZGB9x8M%2FMJX6lwKBkTwoLSTtX9HreALpZq28sja%2BxxEQ1CXJC1BKxIUG1p3UZ3h0fjotRUV4VEaJ%2BB0h0V5qg93dYqscsyqq%2BEYzOQ0W9BKj5SOLToKtXSCeFe%2BfPKeRY%2BQCcukv4BQ7c&X-Amz-Signature=b759b03457641c90958b506aeb237f0eb069e71dcec375dea9041d568e80b569&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
