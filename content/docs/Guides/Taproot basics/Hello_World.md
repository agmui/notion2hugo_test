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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUO3OGGP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOyb6PcOclTGAirBa9WGOr3zJiOWMtUxrpZGVZgZ6tRAiBWGRFtMg4686IVPkRUOhKh6n%2BV8ohj08%2BNxFY1uaxa6Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMIyEGaoFNg%2F2PAq0WKtwDbmlQnzt4e%2BH4CV%2BC1uzOc%2BXlwbBs5bfsAZq2zvF2GpxIx%2F%2FoV37Lo9WnEN4xCbBMdPsBTwZwSw3TCFqCHcTMoEZq6caUGR%2FZgYycmcXo6qhEYJ%2Fm29qHeVTJ7Bjbv4v1jXtsf6B3U204pVGBvj7Wd9njzfVEF83OCN6RdkV%2BVkRo%2BCD5xelgsT4JfE46vDU%2FSI8NcpB9OSnByhNbUr1nhI915siaLUy9vK0b8IC7hY5eCWQ9X95zLZV%2BkaD1a4%2BjINB3Baw9NqUb4jPS7lXBWfYJVtzv9LGYVo39dG4kffQ8%2B5WeWfCXYHxIPF8D9hWIWiMrYR213y8yRh8J4gP%2BhTWAzXu6%2FcTdqUiX6Qk1WRbOQ9n3cTJg1h5Zpr%2BTh10sVY%2F3HpXL2eTbACUFC1odmOwxTzJ4orlSLlFQxSW2tJbbLwFl6gs0AsN%2FoZbogcohJv4Kkm5wqhNLUYyZly33ffibByMpWa%2BfGl2W62UgUYjhKcRGmKZ34ZaWee3WoxbZ5ZYy2MPY2LEVrLsrZWzRIV4D9jrlC5h6Ul3Pmzq1XuQsN6%2FFdd9iu23MnZiuOeG%2FSwo1ZuUxKXqWbp%2BXrsN0jmTq76OoFVOZiOf9lTv%2Bz8Jwk4UOWtscdC%2Fq8rYw7IWiwwY6pgH2CYUOncp9%2Bm8cbCds4sp2MBgY9DqXfPkRNXhSMFKD0SMU0bSSKKLRJg4RnFfsruNAwjYygd3A6JoW7asqz%2BTX%2BfBwV88NBe1BtguviVJH9x62KhEV31zoidzwrStwmh6OD55MNOwjXh073x%2FzaHkHa1Ex9r8se75tHb%2B0F%2BflEMx1irJ1bP%2FRaqRy1dSb4q0zJxgFpKl6ptIOmBAglLmUCzJFZyXR&X-Amz-Signature=693f4aa3911516bedc6b3c17a56b48e999dab88c628e72c9ef58bcb262ddbdd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUO3OGGP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICOyb6PcOclTGAirBa9WGOr3zJiOWMtUxrpZGVZgZ6tRAiBWGRFtMg4686IVPkRUOhKh6n%2BV8ohj08%2BNxFY1uaxa6Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMIyEGaoFNg%2F2PAq0WKtwDbmlQnzt4e%2BH4CV%2BC1uzOc%2BXlwbBs5bfsAZq2zvF2GpxIx%2F%2FoV37Lo9WnEN4xCbBMdPsBTwZwSw3TCFqCHcTMoEZq6caUGR%2FZgYycmcXo6qhEYJ%2Fm29qHeVTJ7Bjbv4v1jXtsf6B3U204pVGBvj7Wd9njzfVEF83OCN6RdkV%2BVkRo%2BCD5xelgsT4JfE46vDU%2FSI8NcpB9OSnByhNbUr1nhI915siaLUy9vK0b8IC7hY5eCWQ9X95zLZV%2BkaD1a4%2BjINB3Baw9NqUb4jPS7lXBWfYJVtzv9LGYVo39dG4kffQ8%2B5WeWfCXYHxIPF8D9hWIWiMrYR213y8yRh8J4gP%2BhTWAzXu6%2FcTdqUiX6Qk1WRbOQ9n3cTJg1h5Zpr%2BTh10sVY%2F3HpXL2eTbACUFC1odmOwxTzJ4orlSLlFQxSW2tJbbLwFl6gs0AsN%2FoZbogcohJv4Kkm5wqhNLUYyZly33ffibByMpWa%2BfGl2W62UgUYjhKcRGmKZ34ZaWee3WoxbZ5ZYy2MPY2LEVrLsrZWzRIV4D9jrlC5h6Ul3Pmzq1XuQsN6%2FFdd9iu23MnZiuOeG%2FSwo1ZuUxKXqWbp%2BXrsN0jmTq76OoFVOZiOf9lTv%2Bz8Jwk4UOWtscdC%2Fq8rYw7IWiwwY6pgH2CYUOncp9%2Bm8cbCds4sp2MBgY9DqXfPkRNXhSMFKD0SMU0bSSKKLRJg4RnFfsruNAwjYygd3A6JoW7asqz%2BTX%2BfBwV88NBe1BtguviVJH9x62KhEV31zoidzwrStwmh6OD55MNOwjXh073x%2FzaHkHa1Ex9r8se75tHb%2B0F%2BflEMx1irJ1bP%2FRaqRy1dSb4q0zJxgFpKl6ptIOmBAglLmUCzJFZyXR&X-Amz-Signature=7ac5953e7a500f505a5346d67178bb73a1ea1bd8423bc83c0bb8ba470d7797e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
