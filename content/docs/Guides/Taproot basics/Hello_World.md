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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIX7EW5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAcQxnNAU9x120zC%2BtAl24YWikTzs30VSvNom2%2BXoCfAiA7SnkBC%2Bg%2FpjmPIunU%2FYjs6IBNVfde0LE7OpdN8HZNRSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjU0qetUbHsiPNfMNKtwDNNSaaGLulMa3ztE%2FgP5WXQ6XbZgwELpWVycnqARXzIcy9qEVT%2FgQZ0%2F4t9225bEZQ47OH1iT5UVO8owOuo6VJg4VA2DRt2vM4l1YRNEPLHAGDF5cg2JFVhsT3johzsrv8lE0sykHpo9VT0nHSxu4HdoGX9TEtcLrTRpumazhlA1AumCkMMiD6Ba20fWBE1JmYBs9OT7L1gZCzimiXVOiGR5GSM0g9bwo%2B%2FiigqsXln9l%2FFulrLXQSjYlpzNB5yaWy6yLzAGERSPXocC6Wd%2FkrDx6H3jIpl4AIIqbhck0jr9%2B0XoCF8QE%2B0plT8tknt6V3fDvp4NcPf8bwMSsf5cbNGaSwqSw5rwQibPQuBSA8%2FJzSH7fqqyo41YydSgaBOELO755NPxnd56zbXc3rNXQsDzdNfFrk9xgLb3cSRQtYLhkst33kfgdNTNB5su%2BYbUVZVn1KJREVm6r0QWfbHwdBH0wCRgwOsaDPSDb9FjTypX6HzbqIyOA9pSzVNcEbfP9TJKLjDh32OhHXvGikJKSw2wHaZxZjt6H2lnYhhtmt4payS6DkXVZe%2B%2F9CTNd6khpbBlbUvhjCPafvcxpSkoJw%2B0cnYF4%2BqM9TfHudNHnZR0ew96k%2B33pMup4Joowx6%2FYwgY6pgFPpmqVezBx73nCdyUkBDIJPgKlw5HR%2FlLuo%2BAIkURJmGXDknswexH8dNe%2FZmJeuxSSPOlsrqzfWTv%2BqECQ1UGPEtsx%2BksPn1rRnuuh5Fjr3NAl0rSx1qxNgi7LXdCVAHufr9H9dUywIwkR%2BaDLR%2FZdZaRUqbRUyXtPgmdpAVpKHIsotVFvaYkm6R1MkWFtLYefMbsaKkRRMrHpl3%2FeiO7if86HACYT&X-Amz-Signature=0c34c13f4aef25d0622238a8b572f91a39df30ba3d1d99dcd6c89c67a7a1b647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJIX7EW5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAcQxnNAU9x120zC%2BtAl24YWikTzs30VSvNom2%2BXoCfAiA7SnkBC%2Bg%2FpjmPIunU%2FYjs6IBNVfde0LE7OpdN8HZNRSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjU0qetUbHsiPNfMNKtwDNNSaaGLulMa3ztE%2FgP5WXQ6XbZgwELpWVycnqARXzIcy9qEVT%2FgQZ0%2F4t9225bEZQ47OH1iT5UVO8owOuo6VJg4VA2DRt2vM4l1YRNEPLHAGDF5cg2JFVhsT3johzsrv8lE0sykHpo9VT0nHSxu4HdoGX9TEtcLrTRpumazhlA1AumCkMMiD6Ba20fWBE1JmYBs9OT7L1gZCzimiXVOiGR5GSM0g9bwo%2B%2FiigqsXln9l%2FFulrLXQSjYlpzNB5yaWy6yLzAGERSPXocC6Wd%2FkrDx6H3jIpl4AIIqbhck0jr9%2B0XoCF8QE%2B0plT8tknt6V3fDvp4NcPf8bwMSsf5cbNGaSwqSw5rwQibPQuBSA8%2FJzSH7fqqyo41YydSgaBOELO755NPxnd56zbXc3rNXQsDzdNfFrk9xgLb3cSRQtYLhkst33kfgdNTNB5su%2BYbUVZVn1KJREVm6r0QWfbHwdBH0wCRgwOsaDPSDb9FjTypX6HzbqIyOA9pSzVNcEbfP9TJKLjDh32OhHXvGikJKSw2wHaZxZjt6H2lnYhhtmt4payS6DkXVZe%2B%2F9CTNd6khpbBlbUvhjCPafvcxpSkoJw%2B0cnYF4%2BqM9TfHudNHnZR0ew96k%2B33pMup4Joowx6%2FYwgY6pgFPpmqVezBx73nCdyUkBDIJPgKlw5HR%2FlLuo%2BAIkURJmGXDknswexH8dNe%2FZmJeuxSSPOlsrqzfWTv%2BqECQ1UGPEtsx%2BksPn1rRnuuh5Fjr3NAl0rSx1qxNgi7LXdCVAHufr9H9dUywIwkR%2BaDLR%2FZdZaRUqbRUyXtPgmdpAVpKHIsotVFvaYkm6R1MkWFtLYefMbsaKkRRMrHpl3%2FeiO7if86HACYT&X-Amz-Signature=9e804fffcac83cc593da07ae03ae4dab02af9e1340bf6c82b74cb5b5806c6a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
