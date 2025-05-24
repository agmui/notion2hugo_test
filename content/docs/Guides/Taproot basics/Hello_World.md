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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GTC5XY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCBHR4S8GSiu9Ug1Zdo5JOD8PN2pelqWJd4vMGqZ4Ko3wIgaSZUCL3gUs0X74ddf2TVLFB9jrQEqajkDyoQaT84gLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNWiijL9fAt%2BMuLQUCrcA%2BGYllntU26Rj82%2B6XVDHoSo01np3tgL1oE7phRbOAsC8ms0MiVHt6s%2FxcUDquOe5iTw1pBKaqqcn%2FAgnS4OG0VTQl95cdLo9491xV8SBi%2FCQLlCvytBsoZwBIOLeIJUlpC4H8OoQ9VEb8HRqbcF1zeZcROgLVVLU6tdUklqczHkPfK3EYt37EfjQtGr6Wq3qwTOsxrJUQkDfIHqn55ZcsUeM4AmdPCvE9Gv57xgwGQeCsc4jaQVGrPCVVZdLvEzoHh5yjcPl1hS04Hq9CQ5m8xuDp4xf0w9XZscSWky5tfxLSvMYAp2%2BiZ7zS8NwlhNpSjE%2B0in3%2BVWl2KBe2lQHn49bN0AE1pbNe0Fm2KFWfNx%2FgUC1Qroirl0lljPpIwufNcOa3913%2Ft66q0WunBt4nc7vjfVfqqwzJM1L4LFE5rmHatBX5WM7G2WB4gZ%2BL2vDgLE9WkT1ithGQX8eAk3O9zRwOyBvYX0EYoRq57VA5Z%2FD%2FyOHO3xPtaY4akbjwFgW7e6OqOTYD4c3BUhHUZ2oLDR%2FR31pyN14SHf9vCRI0X8BZ15Rmrh3tZglSvVqpPiPVEKA5ULG7Ll%2FXwRtl9M6BFuLZMx6KTV%2FjqQOaTcP7w4wkFLz05Xf08fZCvZMKXSxsEGOqUBDvjPgoXBBx0lrSe1mDcjrdpE%2F%2FheeDwin4SzFGyE3PQw0aJ6Ezjjtb3IOL0ifjT8FxX5HQe2BHHZLQO66DNIxGWfkJCsWmHnqKJsw5HDrGhGfkjTGZB1G47tjXG2Q6bh2RfAfJXXC7onM%2FeFJI2H70U9VbYF80NTfEiIOJ2jIGtatxHpr9JyG8WAsTBBuDSRtiHEW%2B6IjzAmpUmE8O0otn66hJlU&X-Amz-Signature=bb24f9e738023b0eca94004d2fcdac0826b2b0609ba81406e738282e2b07a96d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672GTC5XY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCBHR4S8GSiu9Ug1Zdo5JOD8PN2pelqWJd4vMGqZ4Ko3wIgaSZUCL3gUs0X74ddf2TVLFB9jrQEqajkDyoQaT84gLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNWiijL9fAt%2BMuLQUCrcA%2BGYllntU26Rj82%2B6XVDHoSo01np3tgL1oE7phRbOAsC8ms0MiVHt6s%2FxcUDquOe5iTw1pBKaqqcn%2FAgnS4OG0VTQl95cdLo9491xV8SBi%2FCQLlCvytBsoZwBIOLeIJUlpC4H8OoQ9VEb8HRqbcF1zeZcROgLVVLU6tdUklqczHkPfK3EYt37EfjQtGr6Wq3qwTOsxrJUQkDfIHqn55ZcsUeM4AmdPCvE9Gv57xgwGQeCsc4jaQVGrPCVVZdLvEzoHh5yjcPl1hS04Hq9CQ5m8xuDp4xf0w9XZscSWky5tfxLSvMYAp2%2BiZ7zS8NwlhNpSjE%2B0in3%2BVWl2KBe2lQHn49bN0AE1pbNe0Fm2KFWfNx%2FgUC1Qroirl0lljPpIwufNcOa3913%2Ft66q0WunBt4nc7vjfVfqqwzJM1L4LFE5rmHatBX5WM7G2WB4gZ%2BL2vDgLE9WkT1ithGQX8eAk3O9zRwOyBvYX0EYoRq57VA5Z%2FD%2FyOHO3xPtaY4akbjwFgW7e6OqOTYD4c3BUhHUZ2oLDR%2FR31pyN14SHf9vCRI0X8BZ15Rmrh3tZglSvVqpPiPVEKA5ULG7Ll%2FXwRtl9M6BFuLZMx6KTV%2FjqQOaTcP7w4wkFLz05Xf08fZCvZMKXSxsEGOqUBDvjPgoXBBx0lrSe1mDcjrdpE%2F%2FheeDwin4SzFGyE3PQw0aJ6Ezjjtb3IOL0ifjT8FxX5HQe2BHHZLQO66DNIxGWfkJCsWmHnqKJsw5HDrGhGfkjTGZB1G47tjXG2Q6bh2RfAfJXXC7onM%2FeFJI2H70U9VbYF80NTfEiIOJ2jIGtatxHpr9JyG8WAsTBBuDSRtiHEW%2B6IjzAmpUmE8O0otn66hJlU&X-Amz-Signature=a090f9a0a1dc505db5477399f3c248fe971c5ce58c46992894db4706f110c5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
