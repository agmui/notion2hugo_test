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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYHKOFE%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDwidAuMKEaw6TOwP9IC3ITF5%2BfxhAqjjYMlEtBTk2S9wIhAMAre%2BHOPnpYcJj2YOB2iLWLA2rvwYC2ArfaYalrJEKrKv8DCF0QABoMNjM3NDIzMTgzODA1IgwvFsNHRSPpjllVnL4q3AO5ohMXEdTvPRdFfdTdDlr1XkzdBMlAAgXD1zxM2jDCZWCIVstMdTn7RU91lbLL5P2xffHg0XdYLKGvnGOSxPd2NVnzHo7EjRbAKb%2BftWhGGto5Ah9x54Ls6wZi3Omd%2FDu0%2BrluppusvobDhCwtsJOUM67KoBWKk5TSzhyMnCz81StXXM4mspLNvi1SYwqXLjwgGrGz9XvLRI5a3JejL%2BxkJ2bu1BeTXiX%2BpRL%2BHeZXusj9kr74tXa%2Fl9EO%2B60RrPPpGNxGlT9VZiPPNq6sOu2kVz0urE%2Bm6BJY%2FcvTu0OM38YwSLKS5bybGsDSHDo1vW0v828kONii4ZFNl5SVcgBLcV9Tl7%2FCStefwXg3zgg%2FgpWTkQLoKtWd2qubZPzp7F8vn7oZ6FR%2B6nMvQO9hNudKh2vFZmOiv8F65QkCygEywZ7QqHldmqBA0SJjBjDYH6MY4WK2zucM%2FfeoXGDyS1k5XQdEo2hOzJBp0x5pdf2hhzw94CczwVlPDa6CfY61gi%2Bm%2Fel4jxmxEJXAr9gPEjXHcCQBDpWR8QnqOaBj5TV1uCl%2BweE%2FPQe2CuU3vmze9lewIREaaiz88mN0XQFpBbI7U7OoSYYrBnEmV1UB2WYKvK17pRLeiMhne%2BsU1DC1oce9BjqkAfLln4xAiI118ki06%2FxV0OHwMDm4gKjX%2FkW8FmdSvvVwvyxzuouyugLb6QEgi92WZEwr1cuwk28Em54702b68EQV7hfTJCrghE105Xt4WEB8k18tKKMiSIHKj9pSAqUQoFEuxnRqHNdX2UK%2Bv%2BqRQezGHD%2F1KoSY%2BoyRa55BVKeQl%2FsPQ6yaW0g8%2BTkfqUvw%2BRzjHbeOnpZOJT9Qf6MmvLIECLv8&X-Amz-Signature=e0f8716f8e8e1723bbd457ea135fe68ebc77f3f5d9a5d548d42dc96a7ebadc01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYHKOFE%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDwidAuMKEaw6TOwP9IC3ITF5%2BfxhAqjjYMlEtBTk2S9wIhAMAre%2BHOPnpYcJj2YOB2iLWLA2rvwYC2ArfaYalrJEKrKv8DCF0QABoMNjM3NDIzMTgzODA1IgwvFsNHRSPpjllVnL4q3AO5ohMXEdTvPRdFfdTdDlr1XkzdBMlAAgXD1zxM2jDCZWCIVstMdTn7RU91lbLL5P2xffHg0XdYLKGvnGOSxPd2NVnzHo7EjRbAKb%2BftWhGGto5Ah9x54Ls6wZi3Omd%2FDu0%2BrluppusvobDhCwtsJOUM67KoBWKk5TSzhyMnCz81StXXM4mspLNvi1SYwqXLjwgGrGz9XvLRI5a3JejL%2BxkJ2bu1BeTXiX%2BpRL%2BHeZXusj9kr74tXa%2Fl9EO%2B60RrPPpGNxGlT9VZiPPNq6sOu2kVz0urE%2Bm6BJY%2FcvTu0OM38YwSLKS5bybGsDSHDo1vW0v828kONii4ZFNl5SVcgBLcV9Tl7%2FCStefwXg3zgg%2FgpWTkQLoKtWd2qubZPzp7F8vn7oZ6FR%2B6nMvQO9hNudKh2vFZmOiv8F65QkCygEywZ7QqHldmqBA0SJjBjDYH6MY4WK2zucM%2FfeoXGDyS1k5XQdEo2hOzJBp0x5pdf2hhzw94CczwVlPDa6CfY61gi%2Bm%2Fel4jxmxEJXAr9gPEjXHcCQBDpWR8QnqOaBj5TV1uCl%2BweE%2FPQe2CuU3vmze9lewIREaaiz88mN0XQFpBbI7U7OoSYYrBnEmV1UB2WYKvK17pRLeiMhne%2BsU1DC1oce9BjqkAfLln4xAiI118ki06%2FxV0OHwMDm4gKjX%2FkW8FmdSvvVwvyxzuouyugLb6QEgi92WZEwr1cuwk28Em54702b68EQV7hfTJCrghE105Xt4WEB8k18tKKMiSIHKj9pSAqUQoFEuxnRqHNdX2UK%2Bv%2BqRQezGHD%2F1KoSY%2BoyRa55BVKeQl%2FsPQ6yaW0g8%2BTkfqUvw%2BRzjHbeOnpZOJT9Qf6MmvLIECLv8&X-Amz-Signature=0acf0776da46729988671f440c9e9ddc7820627978cf4fb493796086458394a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
