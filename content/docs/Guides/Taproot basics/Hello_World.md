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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4ZCATP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBTIdA6iGp8bu2aCQf0jDc%2By%2BaqBdqaa3t9Tq53KY8gdAiEAhHxI7NNsSQb9qHM2Snw6XsyI1RBTIFmEVaToBYduXDUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi%2BJUlnciesMV%2FdfCrcA4BNccLL8yNm3MBBnwt7G2vPLelqEzDFA4jqxGXgqvpmUqD%2BQK9gQQ2XKhvsF93tiU169jCDVoS1PpPxNvzeveSn5m2YGxoqsENf2WVSpOj3S1yX8SovuD1JUzH%2BHBqDEuw8C8hBGDneTWcdSzdUKAr6Xp3NNJUkRh3Fd6DRW9KFNoWMQrEIol3d5t1s%2F%2FJY8xDTmkL0XWXQgC126wN0LmTiNEXW0ZW96Q3Xe4cmDy09b2Ee5x%2BGyswbhbyi1J12%2F2aZRKmiZJKff9H3lo5YyeEJY2cwMw5LpjeBsyw4Klsg5oa3gf2fEdyf9e8t3Yf2J2rGry0O40e3uLklLMsyewhPc%2BBNeAgDcdsg3qw%2B4Obs%2BAonw9Ae7eygxM4BH%2F0mY7ial11HDKhPJv%2Fo1pIIR%2FyJy047kCyVYXB8R7bvAMZfy3uu8ilX3jZJUgdlFoU8%2Bfqb1%2F%2B5xQ0feunRkDfiAvyMjdVEmjRzuJRarcZWb%2B2zYFh7hOObMmu8Df5vDTtZG9EQJ13E8TPvVbuy3SWC27x%2BeVy%2BkuBfD78gwNSczmOiMIMrDG4AMyiRMW64vjnSPGZ2FE5bQBOE6t5Dyb%2Bm%2B7BdF3E6pUMv2RKloxf2g7w47pvVdKF4kkSXKisnMLuhg8EGOqUB1CAUFzUErQER6mTwWaMMCqgR5kUPRb5A1oVOLfFUoOZrp1K2V5pOOMcHFy%2FBu1HfM3iGwR753pQg70QVng99eHQrb6FfZgiAchVYVPytygXxGK7BUvhYLwxQOq2Pli14BRXC03MFpDKKAan8aDhmrXn6PmixbAaZyp%2FUeR0RuTnHiCzplB6%2BgUYkeiT8YBBfl%2FpOm2Ihby7cxYLUWLuoNKG14A%2BF&X-Amz-Signature=5d0ff40ef1abff2f4195ff72fc24b642baf1f1a199091032b8516587db436883&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4ZCATP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBTIdA6iGp8bu2aCQf0jDc%2By%2BaqBdqaa3t9Tq53KY8gdAiEAhHxI7NNsSQb9qHM2Snw6XsyI1RBTIFmEVaToBYduXDUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi%2BJUlnciesMV%2FdfCrcA4BNccLL8yNm3MBBnwt7G2vPLelqEzDFA4jqxGXgqvpmUqD%2BQK9gQQ2XKhvsF93tiU169jCDVoS1PpPxNvzeveSn5m2YGxoqsENf2WVSpOj3S1yX8SovuD1JUzH%2BHBqDEuw8C8hBGDneTWcdSzdUKAr6Xp3NNJUkRh3Fd6DRW9KFNoWMQrEIol3d5t1s%2F%2FJY8xDTmkL0XWXQgC126wN0LmTiNEXW0ZW96Q3Xe4cmDy09b2Ee5x%2BGyswbhbyi1J12%2F2aZRKmiZJKff9H3lo5YyeEJY2cwMw5LpjeBsyw4Klsg5oa3gf2fEdyf9e8t3Yf2J2rGry0O40e3uLklLMsyewhPc%2BBNeAgDcdsg3qw%2B4Obs%2BAonw9Ae7eygxM4BH%2F0mY7ial11HDKhPJv%2Fo1pIIR%2FyJy047kCyVYXB8R7bvAMZfy3uu8ilX3jZJUgdlFoU8%2Bfqb1%2F%2B5xQ0feunRkDfiAvyMjdVEmjRzuJRarcZWb%2B2zYFh7hOObMmu8Df5vDTtZG9EQJ13E8TPvVbuy3SWC27x%2BeVy%2BkuBfD78gwNSczmOiMIMrDG4AMyiRMW64vjnSPGZ2FE5bQBOE6t5Dyb%2Bm%2B7BdF3E6pUMv2RKloxf2g7w47pvVdKF4kkSXKisnMLuhg8EGOqUB1CAUFzUErQER6mTwWaMMCqgR5kUPRb5A1oVOLfFUoOZrp1K2V5pOOMcHFy%2FBu1HfM3iGwR753pQg70QVng99eHQrb6FfZgiAchVYVPytygXxGK7BUvhYLwxQOq2Pli14BRXC03MFpDKKAan8aDhmrXn6PmixbAaZyp%2FUeR0RuTnHiCzplB6%2BgUYkeiT8YBBfl%2FpOm2Ihby7cxYLUWLuoNKG14A%2BF&X-Amz-Signature=b2a81e7766f09506d88ee4d2e2dc6178cc2f77abfde045fab5e181cb07276d14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
