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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZIWXYW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCxTHP7LtO4ZqfsANWEUBShg9D1pDCCqvD7lIadLEQapQIhANx21VscHRALzV1rEVduRqGs8sflnnQaqdsEFnTW3Y8ZKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI7riC%2Bwr3yxN72rgq3AMhROI4YhAJMm0hmrktTETox4BZ1fXXFBkMe0xNzxZbNCsI7hIVQA%2Bujgu26z5BYZMxu%2Bx5SIx5%2FjFOVIOyqzv1WtvjSzxRtTIrR44EG15xPql4Ec83IDB0KMgU%2BjL9HJlV1qwpoXqTS7P1JQwBrF2Seo%2BugnboKItUdpE1EcyhslrIkzgxR7aPhGxjo8%2F0NCVXNq%2BUMFk2dgyLYeuFxglQyo%2BkjrxGSdMiH9w64jjGDjULlssb3bPNaYMuP91lOeNT2fcmIEvhj17vaOtmT7TmTC04fxHiLBglcGbu4BRf13XmzLIKEgCOm24dghFHlS1V8T%2Fse2TDUYKRbsaK2TSOYEICPlSYPvMY1w8DepCd7VeS41CYcwFF4ZavYQfzjfvvJKFsRvaQgTkI9OcqyulVYUZ5%2BzUy7SU1YNkCc4wv9l3vkxCGmBV0C%2BYIdz7YUlTUXBRq7iI%2BFWbP57OCAK%2BjRZNypk4y0mTqE%2BXL9%2FI0HsjnYXgqd2AwP2ISn6CZG%2FxD%2BJPIe4%2FClVz16nwiQkf6XFTdc3JwsZ2v5WAWgafXiJxOP%2FN264F5CfhnProQMOqdBJuyqJf6Mx4vFDepEs78iO2FDOlL9UCTvh4r%2FQJK1ynOODyiI4VmmSjWpzCNh5DBBjqkAXM5a19MHIXVnoQAvA%2FiBuqScVerYcCTaXBKWtx2Dg9xUXKSjB1pWC2DtrFdtSCSdOQqcS%2BRQNXrAiGftmOZ9swQhEZCcscq%2FjlrKrWEvpVEXKzA85sNZgupQ5n3QskZmLFrRmUQJHZSQxc1dVTL%2F%2FqziOPHIPpigkn%2FJBQZ5rXk%2F%2FpnVt9YxXvdlssIXGfrYsJAq3xz25ew8e0RSWJtV0%2FBMZO0&X-Amz-Signature=4d34f0bd8459db84cd2de935a631c90b45b8cddeb57785c23b532b393e693e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZZIWXYW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCxTHP7LtO4ZqfsANWEUBShg9D1pDCCqvD7lIadLEQapQIhANx21VscHRALzV1rEVduRqGs8sflnnQaqdsEFnTW3Y8ZKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI7riC%2Bwr3yxN72rgq3AMhROI4YhAJMm0hmrktTETox4BZ1fXXFBkMe0xNzxZbNCsI7hIVQA%2Bujgu26z5BYZMxu%2Bx5SIx5%2FjFOVIOyqzv1WtvjSzxRtTIrR44EG15xPql4Ec83IDB0KMgU%2BjL9HJlV1qwpoXqTS7P1JQwBrF2Seo%2BugnboKItUdpE1EcyhslrIkzgxR7aPhGxjo8%2F0NCVXNq%2BUMFk2dgyLYeuFxglQyo%2BkjrxGSdMiH9w64jjGDjULlssb3bPNaYMuP91lOeNT2fcmIEvhj17vaOtmT7TmTC04fxHiLBglcGbu4BRf13XmzLIKEgCOm24dghFHlS1V8T%2Fse2TDUYKRbsaK2TSOYEICPlSYPvMY1w8DepCd7VeS41CYcwFF4ZavYQfzjfvvJKFsRvaQgTkI9OcqyulVYUZ5%2BzUy7SU1YNkCc4wv9l3vkxCGmBV0C%2BYIdz7YUlTUXBRq7iI%2BFWbP57OCAK%2BjRZNypk4y0mTqE%2BXL9%2FI0HsjnYXgqd2AwP2ISn6CZG%2FxD%2BJPIe4%2FClVz16nwiQkf6XFTdc3JwsZ2v5WAWgafXiJxOP%2FN264F5CfhnProQMOqdBJuyqJf6Mx4vFDepEs78iO2FDOlL9UCTvh4r%2FQJK1ynOODyiI4VmmSjWpzCNh5DBBjqkAXM5a19MHIXVnoQAvA%2FiBuqScVerYcCTaXBKWtx2Dg9xUXKSjB1pWC2DtrFdtSCSdOQqcS%2BRQNXrAiGftmOZ9swQhEZCcscq%2FjlrKrWEvpVEXKzA85sNZgupQ5n3QskZmLFrRmUQJHZSQxc1dVTL%2F%2FqziOPHIPpigkn%2FJBQZ5rXk%2F%2FpnVt9YxXvdlssIXGfrYsJAq3xz25ew8e0RSWJtV0%2FBMZO0&X-Amz-Signature=02ab1375f82c0c7d27906379229b34caf4fedbe7e26319dd4a9a0286a45ec2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
