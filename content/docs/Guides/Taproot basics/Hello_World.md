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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NE7IYRC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3i3%2FKTDh9OdHdSm8%2ByEeEWgJDb5roSOS8ftLQY4liMAiAaBkkkqt6AdwcTYwXblXaMIPZooUieSVBuQ0%2FT%2BfMUFSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIE7xgRwXiiZurX9WKtwDeTdLMTvs%2BCtzQlWq3WRm3F24fzIcsckqWxfTntq%2FC7FY7Qv8YorYvIKcxUAzDMTYaJlFj5Xe0hWB58AZpGKd2Shhahyw%2FL1m8oBj9ZKAdpAAjQyG2XeExic8G59L7F4DxaW0NgghcPxJWOYiLx%2Fy8Fl%2FfAPYKpeGRiSR20SFKsyTJPldhh36XAN8RLl1SC%2BsG%2B73KQvjAVhr8U7GWFZ8CCUTx9z7GBx8bnRlu23m3R%2Ff%2Bb97Z0PZOeZDYFGiTWZdiTVa9PgddqmoXvWF3aUej2YoniEaQNeoDvCn44kGY%2Ft49FjW5xxBo0YC%2BEyMSi9RS2a%2Bg3n%2Be7zFi7EAs7jW8IibQFzaCVGXOCohGfnOB7ODi4wZ%2F0AUYypoyL6l3ryDrGUg32Kntl485h1%2BdjCa8IIvUCsDhUsDP2FSzikUHIeQ6VtXFSaV31oQClONq%2BY0AepE3EN22t7VEnT9uBlv5Z1c6JZYt9dRBcFvxzqvJYL2OZKvCZGpNHg7bpeqsFAH4XaTQKXFacetrIl9wLS96EAqAk10zRyEpEJN4ZyfBCtNr51wMRxUOTzN9J67bzuEHRTBxjZTYpjtwjiYjuZuDEAwdn0Xf6iMn4CfzOVvng49m76RTkLXMGexkNUw%2BaPKvgY6pgE1rWAp0w1eP2%2Fr0H5968YKG%2BK7nzCQYyQzD98ze6rX8cgpFGKUQ4e7cSO%2Bpoox6osk%2B3oCeL1og2MMhY1Xh3gCA10uAXHmkDiWW4BdUcMpgA37NgFCHjw4xoQCLLxGiDuqiu1dGZW7fjqKymgCt8TN7%2FieHoIVSDxN%2F2f%2FoxJlZzDUyhRHk8xJjsSatFhICEdhn0pb7wGRqdViGyfAIGYkXC7puI4f&X-Amz-Signature=fec9d5bad1795d394d414ab7295ded11530fc3c2a1201de888bd8587cae673b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NE7IYRC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3i3%2FKTDh9OdHdSm8%2ByEeEWgJDb5roSOS8ftLQY4liMAiAaBkkkqt6AdwcTYwXblXaMIPZooUieSVBuQ0%2FT%2BfMUFSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIE7xgRwXiiZurX9WKtwDeTdLMTvs%2BCtzQlWq3WRm3F24fzIcsckqWxfTntq%2FC7FY7Qv8YorYvIKcxUAzDMTYaJlFj5Xe0hWB58AZpGKd2Shhahyw%2FL1m8oBj9ZKAdpAAjQyG2XeExic8G59L7F4DxaW0NgghcPxJWOYiLx%2Fy8Fl%2FfAPYKpeGRiSR20SFKsyTJPldhh36XAN8RLl1SC%2BsG%2B73KQvjAVhr8U7GWFZ8CCUTx9z7GBx8bnRlu23m3R%2Ff%2Bb97Z0PZOeZDYFGiTWZdiTVa9PgddqmoXvWF3aUej2YoniEaQNeoDvCn44kGY%2Ft49FjW5xxBo0YC%2BEyMSi9RS2a%2Bg3n%2Be7zFi7EAs7jW8IibQFzaCVGXOCohGfnOB7ODi4wZ%2F0AUYypoyL6l3ryDrGUg32Kntl485h1%2BdjCa8IIvUCsDhUsDP2FSzikUHIeQ6VtXFSaV31oQClONq%2BY0AepE3EN22t7VEnT9uBlv5Z1c6JZYt9dRBcFvxzqvJYL2OZKvCZGpNHg7bpeqsFAH4XaTQKXFacetrIl9wLS96EAqAk10zRyEpEJN4ZyfBCtNr51wMRxUOTzN9J67bzuEHRTBxjZTYpjtwjiYjuZuDEAwdn0Xf6iMn4CfzOVvng49m76RTkLXMGexkNUw%2BaPKvgY6pgE1rWAp0w1eP2%2Fr0H5968YKG%2BK7nzCQYyQzD98ze6rX8cgpFGKUQ4e7cSO%2Bpoox6osk%2B3oCeL1og2MMhY1Xh3gCA10uAXHmkDiWW4BdUcMpgA37NgFCHjw4xoQCLLxGiDuqiu1dGZW7fjqKymgCt8TN7%2FieHoIVSDxN%2F2f%2FoxJlZzDUyhRHk8xJjsSatFhICEdhn0pb7wGRqdViGyfAIGYkXC7puI4f&X-Amz-Signature=4a3b13da31462767626e9d480f33ab08bc5eba04c138f19537e024ede300d9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
