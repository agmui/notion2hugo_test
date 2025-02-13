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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LWHYF2V%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyT90%2FX%2F51ekOOXp8IcGo3YIi2KCT16SEjtC97f5aniQIgPsj5IArdbIgsXIVHZNFslSwm1gai8PwrBaqOG4MyKO0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBuh4hEe7UBdGfHuSrcA8ed0iOFMlHPIRmVrCUl%2BITc4SSy0cQbL%2FMr2IuIaNqAbkTPT5IiYHjhl%2ByuRTWHlDKIXdOIvAxJeDdUi5ipgj9SGtAXIVVxmWgDRaJaQpS1X6697Gc7P5tdwDjDM3u%2B1qYOcxNr0IP8xysfLk9sRB5N3eJB7C6E3nRKM0WahAZOYPA1oyXZvmxj2eDy%2F259T0tLNW5AD2q2OktIZmL%2F6C29PjEzbqIt%2FbxXxt5sjd3PrxGA%2FRBqQCqyfkXZkrz2dKEFGlRYftN9UrNxTNmRmwgtxqmQXmGJuukgwMZwlzvXDF14rXDCB%2F2J9gmJY2Ry8JQZ36bf%2Bq2p0PxCEloaq3oMnP5rhUBkg05ZrZMqzw5JiCNz428hlmH6GYscBRRJImiaEbA5d7KrOC4NCplcaceKRwIkFgE5GTRVgbmyqqxEbAdSS7MW%2BvyJbEYoGO81Aoxkg%2Ffxu%2BRYZJTKXqCgIiFun1H8WnG1i46mytxVKvNdvdrA8sJR1QXoIT0As3opCezLqbrlCR4l0lutgSd59xpF2O6M4ECo6tHL3eyASE%2Fqfx4celW%2BFplYqHylY90GdKyJLURpKe3V%2F30Xmgs%2BeQyEhKZTrstjXD6yN603lYBRsLawnnRUhQ849QMvMK%2BYtb0GOqUBhoCTDajyixtgFHWvqGHJubQDWminKDpReKMqZtEb2kP0OYLGjZpsOYGjnb%2B3nL%2Fqqv%2BzxII%2FculvXH1LXB%2BCi28SXw96%2FDAL9MjPHQ1V1J2hXX6C%2Bbuyn85whTHyHbMEn%2Flx0BwruMxYkWTsyS6ln9T%2BdZIhKKpbZ9DE5UCv5h4dbTqhQJhV1aAYGeZN7%2Fk%2BJ%2BsCkCHaxbryxA6P0a1TWgdTraZR&X-Amz-Signature=e146abed6d461ffd5efff46ba0c1619865c840bf5bc1806d940e4ede356d0c53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LWHYF2V%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyT90%2FX%2F51ekOOXp8IcGo3YIi2KCT16SEjtC97f5aniQIgPsj5IArdbIgsXIVHZNFslSwm1gai8PwrBaqOG4MyKO0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBuh4hEe7UBdGfHuSrcA8ed0iOFMlHPIRmVrCUl%2BITc4SSy0cQbL%2FMr2IuIaNqAbkTPT5IiYHjhl%2ByuRTWHlDKIXdOIvAxJeDdUi5ipgj9SGtAXIVVxmWgDRaJaQpS1X6697Gc7P5tdwDjDM3u%2B1qYOcxNr0IP8xysfLk9sRB5N3eJB7C6E3nRKM0WahAZOYPA1oyXZvmxj2eDy%2F259T0tLNW5AD2q2OktIZmL%2F6C29PjEzbqIt%2FbxXxt5sjd3PrxGA%2FRBqQCqyfkXZkrz2dKEFGlRYftN9UrNxTNmRmwgtxqmQXmGJuukgwMZwlzvXDF14rXDCB%2F2J9gmJY2Ry8JQZ36bf%2Bq2p0PxCEloaq3oMnP5rhUBkg05ZrZMqzw5JiCNz428hlmH6GYscBRRJImiaEbA5d7KrOC4NCplcaceKRwIkFgE5GTRVgbmyqqxEbAdSS7MW%2BvyJbEYoGO81Aoxkg%2Ffxu%2BRYZJTKXqCgIiFun1H8WnG1i46mytxVKvNdvdrA8sJR1QXoIT0As3opCezLqbrlCR4l0lutgSd59xpF2O6M4ECo6tHL3eyASE%2Fqfx4celW%2BFplYqHylY90GdKyJLURpKe3V%2F30Xmgs%2BeQyEhKZTrstjXD6yN603lYBRsLawnnRUhQ849QMvMK%2BYtb0GOqUBhoCTDajyixtgFHWvqGHJubQDWminKDpReKMqZtEb2kP0OYLGjZpsOYGjnb%2B3nL%2Fqqv%2BzxII%2FculvXH1LXB%2BCi28SXw96%2FDAL9MjPHQ1V1J2hXX6C%2Bbuyn85whTHyHbMEn%2Flx0BwruMxYkWTsyS6ln9T%2BdZIhKKpbZ9DE5UCv5h4dbTqhQJhV1aAYGeZN7%2Fk%2BJ%2BsCkCHaxbryxA6P0a1TWgdTraZR&X-Amz-Signature=b57caa56ccc64d5dd14e1de3e56f3b1a92bc420a27814260de3406c1e42acc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
