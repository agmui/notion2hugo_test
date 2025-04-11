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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TGNXLL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEtWUvdLD%2Bzlf8xygOs9pZOq7%2BoClpLK5JJa6g5SiX%2FUAiBVoX%2FrBTvDQwJai5wEWiI1O9%2FuIGcC9%2BJQIR2QdIIbQSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2BXEfNCqY9UqzVw0KtwDbNujGZvz3xzCs%2BH9dSwyHleHhbuwwmRHFY1mRijJlPDzDWCWSPJzU7nkpSdahW5fyZLjA0By68mGk1B%2B1kVkOLrvga310tFMC7zoUM1%2FmAWN%2BRxU4dQ8EDKWS8563gbR%2FFYhcyl7qlmS8mUi29%2FJvVLjKaY38fghZYIMqyzp9%2BvzHjl0C3XA0p%2F85ZaheqJhjkXDMVEXu907VCO0PLZWYDoRNi2qfAQsnBJdpS6R38gRrfAfRp1l5%2BSX8GnPYJw5GZtUxjuJ7r7FLeLUcynWUJmR64DwLH5qhtjnJCcoRJwQmuM3lgkYej9lsGqxAZqPmR0QMhOltRoYeqr9BScudt8r3M6UKIgvLjuzkgmGqpwvehyv5sCN45eF1RWEGzB1HNF6NzKWnJ2ltVU4dbDgOARjwy2aLEWRLneSxAk6hR%2FDlNgPGFPbH3%2FUCr%2FVEeNlZX4dVOj2xDZ0%2FE4CWp%2FHI8h%2BQMfDhNbGs4%2BsGr0fWxkRjD%2BJUZ2KNOJcJT5PvP6q8QQ3g5%2BBGGBrzFIowU2KPJt9CvYviBDP1vMg6SZ34idrGF0DoCe8Wa9U7uVN6MHg0WWh5AYImP6kHx4XlbIXUqQVvh16qrleG4qY72v4CRv%2FBADS1RogDyzRleww1fLkvwY6pgEJjHjuPmzSo%2Fgkkz%2B7tqvKBjRkp27IzLdBlDK6BIAdHOYiAqeh1Bxm5213MOXldzL5kCQWP3h7JT9rgYU9sET%2BBUryUpQ2aKuzi1d0EDuDZibNTEw2T9Vy97h9pHI9R1z83AXgMfT6tzMoaXfwGskqGkySBgYsOqoIAdA%2B5kJjCQds4uYk5lkN5ibeNY1LDzzAPpm2mxvN0ZjkL46LltInqAll5BT8&X-Amz-Signature=e96808d84652faf9fd0e5d5eacd6625cf17d7fa28c3dc3308d9009bc84eba77a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7TGNXLL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEtWUvdLD%2Bzlf8xygOs9pZOq7%2BoClpLK5JJa6g5SiX%2FUAiBVoX%2FrBTvDQwJai5wEWiI1O9%2FuIGcC9%2BJQIR2QdIIbQSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2BXEfNCqY9UqzVw0KtwDbNujGZvz3xzCs%2BH9dSwyHleHhbuwwmRHFY1mRijJlPDzDWCWSPJzU7nkpSdahW5fyZLjA0By68mGk1B%2B1kVkOLrvga310tFMC7zoUM1%2FmAWN%2BRxU4dQ8EDKWS8563gbR%2FFYhcyl7qlmS8mUi29%2FJvVLjKaY38fghZYIMqyzp9%2BvzHjl0C3XA0p%2F85ZaheqJhjkXDMVEXu907VCO0PLZWYDoRNi2qfAQsnBJdpS6R38gRrfAfRp1l5%2BSX8GnPYJw5GZtUxjuJ7r7FLeLUcynWUJmR64DwLH5qhtjnJCcoRJwQmuM3lgkYej9lsGqxAZqPmR0QMhOltRoYeqr9BScudt8r3M6UKIgvLjuzkgmGqpwvehyv5sCN45eF1RWEGzB1HNF6NzKWnJ2ltVU4dbDgOARjwy2aLEWRLneSxAk6hR%2FDlNgPGFPbH3%2FUCr%2FVEeNlZX4dVOj2xDZ0%2FE4CWp%2FHI8h%2BQMfDhNbGs4%2BsGr0fWxkRjD%2BJUZ2KNOJcJT5PvP6q8QQ3g5%2BBGGBrzFIowU2KPJt9CvYviBDP1vMg6SZ34idrGF0DoCe8Wa9U7uVN6MHg0WWh5AYImP6kHx4XlbIXUqQVvh16qrleG4qY72v4CRv%2FBADS1RogDyzRleww1fLkvwY6pgEJjHjuPmzSo%2Fgkkz%2B7tqvKBjRkp27IzLdBlDK6BIAdHOYiAqeh1Bxm5213MOXldzL5kCQWP3h7JT9rgYU9sET%2BBUryUpQ2aKuzi1d0EDuDZibNTEw2T9Vy97h9pHI9R1z83AXgMfT6tzMoaXfwGskqGkySBgYsOqoIAdA%2B5kJjCQds4uYk5lkN5ibeNY1LDzzAPpm2mxvN0ZjkL46LltInqAll5BT8&X-Amz-Signature=024097a60c3069359fb3ec4c391cac2f883c83b896c54ac686876eff0ded8771&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
