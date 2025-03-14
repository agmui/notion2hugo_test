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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OBJ73Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuUewSknZ9ScmQ0HFMy6kuOfGDPjmZemRgnozNfrPm5AiAYmLzIgZNqNZIdwpgkmVlYhjH2uROS5RetdUMvJmUwVSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeEFVa17OZLSJc6KtwD4Mh%2BB4tZyOMmoQ8CADr3Qk99N%2B83Vf1gz3yXYIAMIdpVm2rfH3IVzreXN2uQ%2Bxnm8b5ksYfoL57mJJm9o%2FPC8JrYmM0JFHKOBbyEtSP3uzaK4EDDQHlZn1HMLdEq8hdjTigVIJ4te6cFGlqLunn61ne%2FYmVaQ8GkHZmk2v0cDD1mvZrbX13TWDUL0iV6Uf%2Bobwn4EJM1IcCk7OhvqONUrzYaWsvPYxqQmDoUJNnRLqnoUjtCALH%2B55LfE4%2B0PJ48x%2B1iIV0VM%2F424vtOqMMRzst4HAmuHx9Q8gUYrbhS%2BJ6D9JUIRsfnPBJ97ksOwtLhotC6HKVOtNYCPepLtFDdv%2BEo%2BS0ooLMZHVWs62ikGA6d6xLadB%2BwsY8vvxvgksq2YnrJpTY5zVo8ZOuY49aq9V4V2KAoCreBOXFj2z8%2BQ9FPrGvSHiwScf50JbyF9hhJ2NV1dkBxRHZyp2pixGVGngppj6JaWOWuDncNfxnziPaOBAw%2FH6avGi3I28ddK0j8%2F9af%2BBjAk%2BAF%2FyRkmjaY8ZMk9opUhPrUJDiruzSwhY1fqMDCReXovLwRaNkAlSn2rzODVxVdlJrpiDlqOi04VIOIp7NAKv26fZvpJ3ZReRwtMK6vBq4EICQzjZwwsMbPvgY6pgFTx%2BCGpBc5Vyyb0NaX81z8qdMALmQl7Su065xiz3RT%2FbOw%2F089tSug1uViWvBRjfPw8omhqtF59BY98zsFJxjId6EQYjIZI8%2FkDIG0sQDjtpaLVqYwFYPXrw0hH8vvrt1xMxREVYKDwZSRn5qZMzCZd1ylF04a2FCmbRoTwovaBKIFwcZ4dxbskc%2BKGc2q9V302sQ2asABOqa%2B6yftq86xQNG6CYUo&X-Amz-Signature=90ede9db5a2eb82965c09a031da7a0e706406b2c1e507f6bb3c12a59be0d8e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OBJ73Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuUewSknZ9ScmQ0HFMy6kuOfGDPjmZemRgnozNfrPm5AiAYmLzIgZNqNZIdwpgkmVlYhjH2uROS5RetdUMvJmUwVSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfbeEFVa17OZLSJc6KtwD4Mh%2BB4tZyOMmoQ8CADr3Qk99N%2B83Vf1gz3yXYIAMIdpVm2rfH3IVzreXN2uQ%2Bxnm8b5ksYfoL57mJJm9o%2FPC8JrYmM0JFHKOBbyEtSP3uzaK4EDDQHlZn1HMLdEq8hdjTigVIJ4te6cFGlqLunn61ne%2FYmVaQ8GkHZmk2v0cDD1mvZrbX13TWDUL0iV6Uf%2Bobwn4EJM1IcCk7OhvqONUrzYaWsvPYxqQmDoUJNnRLqnoUjtCALH%2B55LfE4%2B0PJ48x%2B1iIV0VM%2F424vtOqMMRzst4HAmuHx9Q8gUYrbhS%2BJ6D9JUIRsfnPBJ97ksOwtLhotC6HKVOtNYCPepLtFDdv%2BEo%2BS0ooLMZHVWs62ikGA6d6xLadB%2BwsY8vvxvgksq2YnrJpTY5zVo8ZOuY49aq9V4V2KAoCreBOXFj2z8%2BQ9FPrGvSHiwScf50JbyF9hhJ2NV1dkBxRHZyp2pixGVGngppj6JaWOWuDncNfxnziPaOBAw%2FH6avGi3I28ddK0j8%2F9af%2BBjAk%2BAF%2FyRkmjaY8ZMk9opUhPrUJDiruzSwhY1fqMDCReXovLwRaNkAlSn2rzODVxVdlJrpiDlqOi04VIOIp7NAKv26fZvpJ3ZReRwtMK6vBq4EICQzjZwwsMbPvgY6pgFTx%2BCGpBc5Vyyb0NaX81z8qdMALmQl7Su065xiz3RT%2FbOw%2F089tSug1uViWvBRjfPw8omhqtF59BY98zsFJxjId6EQYjIZI8%2FkDIG0sQDjtpaLVqYwFYPXrw0hH8vvrt1xMxREVYKDwZSRn5qZMzCZd1ylF04a2FCmbRoTwovaBKIFwcZ4dxbskc%2BKGc2q9V302sQ2asABOqa%2B6yftq86xQNG6CYUo&X-Amz-Signature=84c8c5b1d2a3ed379fa29b31b912da274b33335e2cb032cbbcfc32d225d8ca15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
