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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STFRBV5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFayidcXv9Op988wGrjqKF2uMIp6ZaSWSM%2BW3NjfpoQIgJAqv%2BV8Coaw5oyPIuU9Tzv9dUDa%2Booxb0Urq%2F9zdqAsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDINv7qRaK5%2FAear5eCrcA%2Ftzxi39M8HDbLi76kHcsZ%2FZvRxlEyig0Ieu8rKcRd1%2BIXF0BVRjrbi%2Bd3%2BTsLKqzx0MyHxjpfEj65LKbRAJSV4WmWRLxpouTnyS7Jen9%2BaNg9ktnInjOWgnvpeE763O1ho5iUOJbAjdZfDci8fA8Zz0hSH88M%2BbdkVVDQlY%2BrKr%2FkT1Sy4Gbds1KLV2HsNMDS7TSa9JIo6D4dW%2FNPaO2yXoj7UyV%2FE7H8qdMPbzlMPqD8MxdOubgg7S26qmEmM2z2yV35pSz%2FJl21A955tLusDrP7WLNs43csxGunbv6nDhUrEFjbDAfOdRR5X1KLqJbEcpIx39cSxoBZt8qa5mJp%2B%2F5YqjgdXJ8LEfbiQ7MTo8g1Z5gBV6KbtSaVC28%2F3w3ldjc8eG%2BTSAP9UUFJh3MR2ETlfhHVwQBgVLf9FSATzRifEdUjp1XXnqMd78Dk2glIDZ5ChhyNYodyJ4WAJh9j%2BWfXleqF808XG1F0bkeRXpNHlHVgZUyjAHF9ix9tH4wi9aCiHkzu%2B8DUOg5w8nQY9Q2GIMDb%2Fy8o6sMHdg0pvGyc1RxL8yOFsgzQqP2NEnN6hXbkjgiC7LSJDtoy2nr%2FrVVj%2BBQ8%2F%2F495XMUxo9RHqKOYT776jNa9g7KIPMJC60b8GOqUBRnt%2B%2Bj36jizo9kYVhpEvk7xRJRxQ8HUvd0k8hxyweUCIm3r3RcXvOHzUv0Hdy8wIYOPN%2FSIJ5lwAFjDWY2FGw9Dc1hwaCM1eiUPIFxuj41QHgmNX6py5mkfpH8QJ9homQSZATm3y31Q21zd4ymEmypBz%2Fr5UY8ZtDu9K5%2BE3GUoiRqJepbWIo8VzW%2Bz3YE2P2xW%2Bm55afLjcBSbScI1hfbkPH4Wp&X-Amz-Signature=c9dff4e81ca69a09c0849c45085a241bd9c0406a3d9fb4b7acfe4d94d7d40294&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STFRBV5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoFayidcXv9Op988wGrjqKF2uMIp6ZaSWSM%2BW3NjfpoQIgJAqv%2BV8Coaw5oyPIuU9Tzv9dUDa%2Booxb0Urq%2F9zdqAsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDINv7qRaK5%2FAear5eCrcA%2Ftzxi39M8HDbLi76kHcsZ%2FZvRxlEyig0Ieu8rKcRd1%2BIXF0BVRjrbi%2Bd3%2BTsLKqzx0MyHxjpfEj65LKbRAJSV4WmWRLxpouTnyS7Jen9%2BaNg9ktnInjOWgnvpeE763O1ho5iUOJbAjdZfDci8fA8Zz0hSH88M%2BbdkVVDQlY%2BrKr%2FkT1Sy4Gbds1KLV2HsNMDS7TSa9JIo6D4dW%2FNPaO2yXoj7UyV%2FE7H8qdMPbzlMPqD8MxdOubgg7S26qmEmM2z2yV35pSz%2FJl21A955tLusDrP7WLNs43csxGunbv6nDhUrEFjbDAfOdRR5X1KLqJbEcpIx39cSxoBZt8qa5mJp%2B%2F5YqjgdXJ8LEfbiQ7MTo8g1Z5gBV6KbtSaVC28%2F3w3ldjc8eG%2BTSAP9UUFJh3MR2ETlfhHVwQBgVLf9FSATzRifEdUjp1XXnqMd78Dk2glIDZ5ChhyNYodyJ4WAJh9j%2BWfXleqF808XG1F0bkeRXpNHlHVgZUyjAHF9ix9tH4wi9aCiHkzu%2B8DUOg5w8nQY9Q2GIMDb%2Fy8o6sMHdg0pvGyc1RxL8yOFsgzQqP2NEnN6hXbkjgiC7LSJDtoy2nr%2FrVVj%2BBQ8%2F%2F495XMUxo9RHqKOYT776jNa9g7KIPMJC60b8GOqUBRnt%2B%2Bj36jizo9kYVhpEvk7xRJRxQ8HUvd0k8hxyweUCIm3r3RcXvOHzUv0Hdy8wIYOPN%2FSIJ5lwAFjDWY2FGw9Dc1hwaCM1eiUPIFxuj41QHgmNX6py5mkfpH8QJ9homQSZATm3y31Q21zd4ymEmypBz%2Fr5UY8ZtDu9K5%2BE3GUoiRqJepbWIo8VzW%2Bz3YE2P2xW%2Bm55afLjcBSbScI1hfbkPH4Wp&X-Amz-Signature=09cd7564c41e6e05eca7020b1be9085a9a018dd540df50b1a42fb3b194113023&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
