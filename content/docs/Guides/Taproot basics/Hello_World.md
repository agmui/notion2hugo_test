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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HOLDI2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8E3P3z0ImhXzXEWFYHLfzL%2BV9dX4L9r01fSjY2C5cmQIgeDqx8WuEB35C62UieLhRjDNyu8Y9v5p%2Bz18WZIqRH8sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM37P77uTSVJaF3EISrcA41KXbINQfOuh1JlLjB7qGotr9QBlPlGhxCEJEOeH%2FgYEQD%2BhXiRnzVtGJ2gdopnu1v%2Fr5%2Fy5SnUy%2BIPmsR%2BZRqWEYTm2E%2BHs4BCgho1sezUEKaNGBxd7dcSTj39d3rFeZnInbJ1oJXLnld%2Bnyf2Kx3BJ5vd9rwJcQNeiN4goo74BdOZqBrKzTOilK%2F2lwfmTzVEqdPFiGRLmrNqtR7F5yZ8mMHmWNQmlu%2FInBKTMn23dUZmek8xjPmcQOJPxzAPx0vV9LeuP8EAbP9HXD%2Fc4IdhbJRdfGEZJKWLXzF%2BLcmYroJczOTnlKRt3oRAq0cgrqE8pWEF0ZhGK5gP7ttuYSfrgHJfogpxSSrD2qiGT%2FcsZIrQKShIjBmMsAxd1ATod%2Be1SzQdk4g5I5%2F%2BgmoTSDXmqQpbm1G2PNw7Ku%2FMC8c4CUklLnq8tWpGQYV9Z5Go16XIzCtaGNcnZXIefPrFGWPQSkv6b%2FrbUDpwSqgAOkuAxRfpDrZyls3%2FRjHedbkIoCGAi022o5Z%2BeiuPzEdbA3YCwog2mH9YJ3Yb256uuvQQoLU6%2FaOo7iOuWja4eSoo9T28hJel24eo9mYWdn4IilQlVoALSCuKqJRiNR6537pJf%2FZYh43mBy6KbzG2MJfY1L8GOqUB%2BNf3NOSVaqEEh0NLpurZqRtYRifTTUGfDlVlWB%2Bl7OFbinIeLVPS7QtPKQgaTQGBOTxncFrkmcXEk3MtuvPzOnRVpXhjzVxvOXh6Gq1Evby87o08GZ2uGtxoxmqmzoZSwed6It5W8uWPmVLZZ41ftUC%2FzwgZbhHyDArHCs5R4yRlCWfD4cqOs56aKW8AvFd%2Fyoa3My8cmgwmvckNbojjYmu2u0nw&X-Amz-Signature=b00fb35a749340f01f1f96f2f7ed91cf8c2eb84be0f87d18766cc48e0db64edd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HOLDI2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8E3P3z0ImhXzXEWFYHLfzL%2BV9dX4L9r01fSjY2C5cmQIgeDqx8WuEB35C62UieLhRjDNyu8Y9v5p%2Bz18WZIqRH8sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM37P77uTSVJaF3EISrcA41KXbINQfOuh1JlLjB7qGotr9QBlPlGhxCEJEOeH%2FgYEQD%2BhXiRnzVtGJ2gdopnu1v%2Fr5%2Fy5SnUy%2BIPmsR%2BZRqWEYTm2E%2BHs4BCgho1sezUEKaNGBxd7dcSTj39d3rFeZnInbJ1oJXLnld%2Bnyf2Kx3BJ5vd9rwJcQNeiN4goo74BdOZqBrKzTOilK%2F2lwfmTzVEqdPFiGRLmrNqtR7F5yZ8mMHmWNQmlu%2FInBKTMn23dUZmek8xjPmcQOJPxzAPx0vV9LeuP8EAbP9HXD%2Fc4IdhbJRdfGEZJKWLXzF%2BLcmYroJczOTnlKRt3oRAq0cgrqE8pWEF0ZhGK5gP7ttuYSfrgHJfogpxSSrD2qiGT%2FcsZIrQKShIjBmMsAxd1ATod%2Be1SzQdk4g5I5%2F%2BgmoTSDXmqQpbm1G2PNw7Ku%2FMC8c4CUklLnq8tWpGQYV9Z5Go16XIzCtaGNcnZXIefPrFGWPQSkv6b%2FrbUDpwSqgAOkuAxRfpDrZyls3%2FRjHedbkIoCGAi022o5Z%2BeiuPzEdbA3YCwog2mH9YJ3Yb256uuvQQoLU6%2FaOo7iOuWja4eSoo9T28hJel24eo9mYWdn4IilQlVoALSCuKqJRiNR6537pJf%2FZYh43mBy6KbzG2MJfY1L8GOqUB%2BNf3NOSVaqEEh0NLpurZqRtYRifTTUGfDlVlWB%2Bl7OFbinIeLVPS7QtPKQgaTQGBOTxncFrkmcXEk3MtuvPzOnRVpXhjzVxvOXh6Gq1Evby87o08GZ2uGtxoxmqmzoZSwed6It5W8uWPmVLZZ41ftUC%2FzwgZbhHyDArHCs5R4yRlCWfD4cqOs56aKW8AvFd%2Fyoa3My8cmgwmvckNbojjYmu2u0nw&X-Amz-Signature=b62e7d84d9f9d8b7a4f3db073e54104bd867f3369294219910ff0b643e537672&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
