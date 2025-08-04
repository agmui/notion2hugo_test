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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOV6Z7A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB9Fjx2p3HZvuUbdc4eDeL%2FefJfdkNez%2BjguqspDBHO6AiEAgnRHanPQHiJ8HyKYbEaKj4qElP%2BWoyWz%2BpA7iPY8dK8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIL27y8kf8RuKk5JyCrcA8Pu5PiAuHFPnpYDwosYbhQiq%2F9%2BVV7QUcukfM9vWbw8eFLUuolAhnHlE758kLDqzX%2FCq2jDz5Zehhi59Oaj3BxM2xOLUsRFe5bx9l4Wfev2%2FroKCYP4ks0rc%2BgA9V9u0vNhwC7tbiuxnVir2mNq%2BIwMU%2FwJip3bsTKPYUcJUKZg0aC6TC%2FgLzkDJHoU0CQFgOj7um36PudByuC%2F66EgtgIavCBNpUChWZSvlc%2BEawfSZYQPvntRc1QAPSZACnxPorHo%2B8wy1POx5DmyLWOmtai%2Fj8xbzt2905yKKOIXDI1LLj49CE7yuhw%2BO9rbiGP3DNxWYkdI9uaObBGcqE0512Ouv0kiXOl2YnF%2FZxyQRjWW7JqG4G109%2Fjeb%2Flqn8CE8BikjisyfmR1f4tgzg5Wffy2%2FtmdgNlQKLe4HZtmR5zlwIGef%2FD2V91umIUQNSYgcX5FW9wiejUUGYltNagLbFjewVXo1jcA9KbxpuEHNgPaZinh5L7Oag167fhhwDQ2K5p3kfZUYBMk2dBX8IFxpoU1zwgSNCJJ%2F77D0xyKfssYDZ1z8ARd%2BJcmItZJ4%2BNa8vJ%2Fh0mtbHtKhspRKcc34qxbYzgFm8gkKVwi%2Bjj%2FcCutceBCDmcW1CdpycujMOzpwMQGOqUBnC0ljU3%2F%2BXvU6L348U6XTNzWo8h60Zw3tiiWNGa%2BoAAxtEHbJCIGpE55fefAnY8Xm4W4IKjOUrRK3MUd9xq9j1Je7oVHl82Qt%2Br0jrPvkA1w5aYTuAVCdNQz9KntllAvesoTdEKeM3SFfHyTSRc9nzkiORoK%2F3rAYVTXCF%2FXJdRzgGlpwiPGiwExwDvM3CoWaHdZvXgbZ5REGY9DNR%2FxNWWGQrr0&X-Amz-Signature=33d8d8c90883662cef7d21e5737892cfdf7ddfbd88d6b332cb84489afa3454f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOV6Z7A%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB9Fjx2p3HZvuUbdc4eDeL%2FefJfdkNez%2BjguqspDBHO6AiEAgnRHanPQHiJ8HyKYbEaKj4qElP%2BWoyWz%2BpA7iPY8dK8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIL27y8kf8RuKk5JyCrcA8Pu5PiAuHFPnpYDwosYbhQiq%2F9%2BVV7QUcukfM9vWbw8eFLUuolAhnHlE758kLDqzX%2FCq2jDz5Zehhi59Oaj3BxM2xOLUsRFe5bx9l4Wfev2%2FroKCYP4ks0rc%2BgA9V9u0vNhwC7tbiuxnVir2mNq%2BIwMU%2FwJip3bsTKPYUcJUKZg0aC6TC%2FgLzkDJHoU0CQFgOj7um36PudByuC%2F66EgtgIavCBNpUChWZSvlc%2BEawfSZYQPvntRc1QAPSZACnxPorHo%2B8wy1POx5DmyLWOmtai%2Fj8xbzt2905yKKOIXDI1LLj49CE7yuhw%2BO9rbiGP3DNxWYkdI9uaObBGcqE0512Ouv0kiXOl2YnF%2FZxyQRjWW7JqG4G109%2Fjeb%2Flqn8CE8BikjisyfmR1f4tgzg5Wffy2%2FtmdgNlQKLe4HZtmR5zlwIGef%2FD2V91umIUQNSYgcX5FW9wiejUUGYltNagLbFjewVXo1jcA9KbxpuEHNgPaZinh5L7Oag167fhhwDQ2K5p3kfZUYBMk2dBX8IFxpoU1zwgSNCJJ%2F77D0xyKfssYDZ1z8ARd%2BJcmItZJ4%2BNa8vJ%2Fh0mtbHtKhspRKcc34qxbYzgFm8gkKVwi%2Bjj%2FcCutceBCDmcW1CdpycujMOzpwMQGOqUBnC0ljU3%2F%2BXvU6L348U6XTNzWo8h60Zw3tiiWNGa%2BoAAxtEHbJCIGpE55fefAnY8Xm4W4IKjOUrRK3MUd9xq9j1Je7oVHl82Qt%2Br0jrPvkA1w5aYTuAVCdNQz9KntllAvesoTdEKeM3SFfHyTSRc9nzkiORoK%2F3rAYVTXCF%2FXJdRzgGlpwiPGiwExwDvM3CoWaHdZvXgbZ5REGY9DNR%2FxNWWGQrr0&X-Amz-Signature=4770c23eb9a9451c7ba5e6bb4b2a3e21d17128ff57b61fb1701740f32fc243ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
