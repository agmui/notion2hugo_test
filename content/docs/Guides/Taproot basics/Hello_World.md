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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DBBT4PM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgiA8FOvAdql2gTgYLGEGMgE35RD3yfkJ%2F%2BM99zxQJ9gIhAN0h7HXJRqEZOuy8nGGIWqs5mBe5s5LJVonx4q0HK1%2BgKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHYK9zq2e6hp1wBVcq3AOR5DMsexwcwKhk921KwLVAiPNv5mMmIdTfLnc%2B%2FFu5WifCU0E8uKedYdEBzbyihSNK6kLdSUkLDuu0e4zuMcb3BnVgbvGR7MkcILFuwQHS3q0wIALVHeXgObgQS6qWvmGhB9P7emW8U7c%2F0UGKC8uF05ZOZv6IFFngKLzvf0WnzksF0o1Y3p9KY8nnjKtcZNq0z4gEVlK%2B11SBsHUAJf0EawmCcUoFQ1mxv5hVcAZ4YMfS4cxApIRrX3h%2BxB3Eban1ZBpE2JH94jIQfl1m4%2BVjK2ToDzlVqJzCsgA2OpzBnFiGHta8mkTb3YgrwhV1VszdhUJnM9bFtHSAqWc6ztHEwXfGmCa6OGkpmanNUA2ex2r3E%2FViG0WaXTihUHKi3bA3nvzC%2FX3UfLc1DLa5MzfQgOlJQ%2F6Narifr7zbbwMpucgavmwfPFyMuUcR9sV%2BUtaV3lOE2W9QycFhrQWBwLWEQ%2F5MJv5%2F4VI1%2Fz7eOhU6c%2Beb4E72rnpgjAR%2BPlZJsigbOVoyluBWGXfZfCVa8oOkXiqXpG5x8xLfuEruXsXat6mTch24hOKlqOVgZ8As2al2Kcmzn7R8S%2Bnoclx0MxC8rf6M3uW4wpFDFSfn%2BCAdNgR3Ug8a8mHDgxnFrTDXn6C%2FBjqkATzZigSOhkMXjpZOcxmBzwGWq8liLAsJkufTljbXjbA5j%2F5I8aDMdoqYuTatDXJJtUzUp5avfvpM4g0Zkh0rcMzDI8txe1YjFGlR5j0sSxjnGPI0szdakG5xNI%2BrIMLDrNOe82Ldyeah7gwpvLTNOAcyt0Z6jourWG6vTG5C4jK%2FCUzszgOkKWSv%2Bmnp6wZNq4JHjWzsDrI%2BE4wM5%2FdPKZPe%2FpD3&X-Amz-Signature=e6616b654fde79de76fb92e869d6cf75d1c0e7757b69e116923a2a79d22984b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DBBT4PM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCgiA8FOvAdql2gTgYLGEGMgE35RD3yfkJ%2F%2BM99zxQJ9gIhAN0h7HXJRqEZOuy8nGGIWqs5mBe5s5LJVonx4q0HK1%2BgKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHYK9zq2e6hp1wBVcq3AOR5DMsexwcwKhk921KwLVAiPNv5mMmIdTfLnc%2B%2FFu5WifCU0E8uKedYdEBzbyihSNK6kLdSUkLDuu0e4zuMcb3BnVgbvGR7MkcILFuwQHS3q0wIALVHeXgObgQS6qWvmGhB9P7emW8U7c%2F0UGKC8uF05ZOZv6IFFngKLzvf0WnzksF0o1Y3p9KY8nnjKtcZNq0z4gEVlK%2B11SBsHUAJf0EawmCcUoFQ1mxv5hVcAZ4YMfS4cxApIRrX3h%2BxB3Eban1ZBpE2JH94jIQfl1m4%2BVjK2ToDzlVqJzCsgA2OpzBnFiGHta8mkTb3YgrwhV1VszdhUJnM9bFtHSAqWc6ztHEwXfGmCa6OGkpmanNUA2ex2r3E%2FViG0WaXTihUHKi3bA3nvzC%2FX3UfLc1DLa5MzfQgOlJQ%2F6Narifr7zbbwMpucgavmwfPFyMuUcR9sV%2BUtaV3lOE2W9QycFhrQWBwLWEQ%2F5MJv5%2F4VI1%2Fz7eOhU6c%2Beb4E72rnpgjAR%2BPlZJsigbOVoyluBWGXfZfCVa8oOkXiqXpG5x8xLfuEruXsXat6mTch24hOKlqOVgZ8As2al2Kcmzn7R8S%2Bnoclx0MxC8rf6M3uW4wpFDFSfn%2BCAdNgR3Ug8a8mHDgxnFrTDXn6C%2FBjqkATzZigSOhkMXjpZOcxmBzwGWq8liLAsJkufTljbXjbA5j%2F5I8aDMdoqYuTatDXJJtUzUp5avfvpM4g0Zkh0rcMzDI8txe1YjFGlR5j0sSxjnGPI0szdakG5xNI%2BrIMLDrNOe82Ldyeah7gwpvLTNOAcyt0Z6jourWG6vTG5C4jK%2FCUzszgOkKWSv%2Bmnp6wZNq4JHjWzsDrI%2BE4wM5%2FdPKZPe%2FpD3&X-Amz-Signature=09a3ec90e9968bb91c7af1213829ef018a2ff6752611db7658ba4ffb36720c22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
