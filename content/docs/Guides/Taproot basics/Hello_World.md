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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VTJMK2I%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBts0ZlZFjTezLxxLC96L3SrODP%2F3%2BIbcaqdaNm3pdZZAiBvEJ%2B7AhsqpSaeGFUnoGSrPh5vqY6yjrTCq6GfXI6CAyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcuv0F03yxnXhgtckKtwDSZIwsR%2FOplUMcgIyU%2BbM7dAPP9yBJTi2qge0ZQz5S5omz3h3co6smOHh0AaZTcEOt7Erq%2FDAgWoZRIBtMeELxpGxrTTX75Em3zLuz4bJLxGnp75jVAYr3aAvMxkKcATXhwVbyGSsAhsGaq%2FHJiPxjr5XR6P%2FqwxnILllATtv5s8S9kjFSvYo8OMrJq4KJgGVSTT5Hiq5XngJ9WSPiUMGb0zgOG3JS4p5bzo3yyz%2Fec3WCYDc5OBv77CHFngaLpgOFp2HFeFpUABLVna0YQRxfsPC2BnqNtSLXEu473pc5jrNsID7zgUYADKPRnZzM3%2FzQc%2FjI4psjnMJpEnfVTV%2Fi4HfwYAq5ay5%2BAMzbih8150R95LoVIdPkRFB%2Bwr8Q%2BCnOZ8GlOhx6BwuIru77xXbpvc3MTDRlEvCXp%2BETXKh%2B8l5sWYlwl%2Bvu%2FOCQTLCEXkeXaYE6ZOQLgLxA4iuNlIsgvMyP9UTlgcyz088BApt8eVSH9Bt0OioD2%2BcE4vCMzRAmo4P%2Bg2LXjNLKXtB9hii9%2FmAm2m0KAZotgdzNY4yipAJ2kiqPobM1cAvI8459IWv%2BRqtPA1OkjFGw4E1NWISgg9I6H6d3tQASJ183xUSqNNgyTYhnd3y1IQJ1u4w1%2BKQwQY6pgEUumyJkwDIj7Okb7NBp9b3IwbPLHIOoFVgaJad%2B%2B2axccQ4%2BmLA7G%2BhAaJxC2ewuZy3RtE901Ao9Hw6vIzmLI2qRdn851u4MWGqhV3WXMsn8R7oQO6LtCdbCOrnn8kI5Sa7PrKbOEhUUx4pgCmlDETUOm0ygnzB%2B1hEF8KugFMVrRv%2FhH6wMU6LetEk%2BJsnX7KpRYHEKTt337hYWKj7iE7rCvYU3Sb&X-Amz-Signature=93d81f47dedf8f6f38ab3ac9168098cb79b4d0a47f06571cc7326c344b320e42&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VTJMK2I%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIBts0ZlZFjTezLxxLC96L3SrODP%2F3%2BIbcaqdaNm3pdZZAiBvEJ%2B7AhsqpSaeGFUnoGSrPh5vqY6yjrTCq6GfXI6CAyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcuv0F03yxnXhgtckKtwDSZIwsR%2FOplUMcgIyU%2BbM7dAPP9yBJTi2qge0ZQz5S5omz3h3co6smOHh0AaZTcEOt7Erq%2FDAgWoZRIBtMeELxpGxrTTX75Em3zLuz4bJLxGnp75jVAYr3aAvMxkKcATXhwVbyGSsAhsGaq%2FHJiPxjr5XR6P%2FqwxnILllATtv5s8S9kjFSvYo8OMrJq4KJgGVSTT5Hiq5XngJ9WSPiUMGb0zgOG3JS4p5bzo3yyz%2Fec3WCYDc5OBv77CHFngaLpgOFp2HFeFpUABLVna0YQRxfsPC2BnqNtSLXEu473pc5jrNsID7zgUYADKPRnZzM3%2FzQc%2FjI4psjnMJpEnfVTV%2Fi4HfwYAq5ay5%2BAMzbih8150R95LoVIdPkRFB%2Bwr8Q%2BCnOZ8GlOhx6BwuIru77xXbpvc3MTDRlEvCXp%2BETXKh%2B8l5sWYlwl%2Bvu%2FOCQTLCEXkeXaYE6ZOQLgLxA4iuNlIsgvMyP9UTlgcyz088BApt8eVSH9Bt0OioD2%2BcE4vCMzRAmo4P%2Bg2LXjNLKXtB9hii9%2FmAm2m0KAZotgdzNY4yipAJ2kiqPobM1cAvI8459IWv%2BRqtPA1OkjFGw4E1NWISgg9I6H6d3tQASJ183xUSqNNgyTYhnd3y1IQJ1u4w1%2BKQwQY6pgEUumyJkwDIj7Okb7NBp9b3IwbPLHIOoFVgaJad%2B%2B2axccQ4%2BmLA7G%2BhAaJxC2ewuZy3RtE901Ao9Hw6vIzmLI2qRdn851u4MWGqhV3WXMsn8R7oQO6LtCdbCOrnn8kI5Sa7PrKbOEhUUx4pgCmlDETUOm0ygnzB%2B1hEF8KugFMVrRv%2FhH6wMU6LetEk%2BJsnX7KpRYHEKTt337hYWKj7iE7rCvYU3Sb&X-Amz-Signature=b03a9f55bb548d74ecfb8e325c78e5365c3000830d359529337f5e1214c3c2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
