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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V62CD2U%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDqi7yGL2GIu%2B24uycvBwX6dcOEtK36c1QCNiMxDY8PgIhAKgshXuRcdYNabsYUwOXSOzZYKqUGiJxzmMwqR6o6qUIKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydAvV3IAhkfciHSooq3APUebx2FixA69sEKl40l1qEoAgR7Ny9mVs3KY72MuvFvk3yv4TsHH8vYB%2FNhFTuKdEp83OUPX%2FMSSVNiAX0%2BNqAt2h6DPDXtCwc1ku7%2FZW3tEPsCV73heJkHrXUMGRQJsYPxqOL0CvQorIcDeNWXUYXBL%2FT1E7GPlG0ikC%2Fd%2BGhERca7cbfdD%2Fvt3RvJgvRW2aBCLPGt008%2BwxtW3C%2FeTHApmcpIGX49KVJv%2FbvdozFkwt5jUEdw0H1H3k%2BriKdTKOoGw1JqxFjCy%2BVKHgpjULdZr0mVFSdIR0wG%2Be5sO99yfG0V5924w6SCSNarU1%2FMxhvXI5NSmoXbRLbBkEAK8308H9foJ7TyFvVLZqepmWiG%2BHzFc362cEsLkPaXdz0l415wXhmArQhbz7ahjJLvbwQp86N8jWKV2tutxTbj2SUws6KjMpND5S9Ezb3N%2Bxu4OrHOx%2BK%2BMme9%2F01Aeyqq70AmJhknrjIuddutGJLkgP8%2BiwDSgBlaWglcUaFFaL6eBz0H9NXvUM18Fu2zMqM%2FXH1W8y4OnanU0COxUCO%2FvMCf9rlRsOe1bzWJpb8Ri69daLONo1ZouxV4YHnmQ4zBl1XCPEVqbmwj9Xzi1dKMzhr8PI9nT87xDLE18KqNDC6v6C9BjqkAeZt6h%2BmbGkESqogCQTTZ2PrmsXqvi32KihVAvU1fRIvrVrJDpkavqbJYoXOFRKF41LBmEEbq0%2Bv7soaHN1yTzw28UxJtyXnPehbZq%2BoiYNp8ruKJS09%2B1aJj9VME%2B%2BU4pMvoUEUZB2m1VgsnOIV0Flqr%2BfyOVmEs6CMu2YlHU1Bk3nr0I2kbwxXzV5WhnV%2B8p39iP4PF1Frp2hwfRXm4WboX8ag&X-Amz-Signature=10044f523aa9ffe8dbb77e319e870abbee7d1e339d2815f136acb513c0250cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V62CD2U%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDqi7yGL2GIu%2B24uycvBwX6dcOEtK36c1QCNiMxDY8PgIhAKgshXuRcdYNabsYUwOXSOzZYKqUGiJxzmMwqR6o6qUIKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydAvV3IAhkfciHSooq3APUebx2FixA69sEKl40l1qEoAgR7Ny9mVs3KY72MuvFvk3yv4TsHH8vYB%2FNhFTuKdEp83OUPX%2FMSSVNiAX0%2BNqAt2h6DPDXtCwc1ku7%2FZW3tEPsCV73heJkHrXUMGRQJsYPxqOL0CvQorIcDeNWXUYXBL%2FT1E7GPlG0ikC%2Fd%2BGhERca7cbfdD%2Fvt3RvJgvRW2aBCLPGt008%2BwxtW3C%2FeTHApmcpIGX49KVJv%2FbvdozFkwt5jUEdw0H1H3k%2BriKdTKOoGw1JqxFjCy%2BVKHgpjULdZr0mVFSdIR0wG%2Be5sO99yfG0V5924w6SCSNarU1%2FMxhvXI5NSmoXbRLbBkEAK8308H9foJ7TyFvVLZqepmWiG%2BHzFc362cEsLkPaXdz0l415wXhmArQhbz7ahjJLvbwQp86N8jWKV2tutxTbj2SUws6KjMpND5S9Ezb3N%2Bxu4OrHOx%2BK%2BMme9%2F01Aeyqq70AmJhknrjIuddutGJLkgP8%2BiwDSgBlaWglcUaFFaL6eBz0H9NXvUM18Fu2zMqM%2FXH1W8y4OnanU0COxUCO%2FvMCf9rlRsOe1bzWJpb8Ri69daLONo1ZouxV4YHnmQ4zBl1XCPEVqbmwj9Xzi1dKMzhr8PI9nT87xDLE18KqNDC6v6C9BjqkAeZt6h%2BmbGkESqogCQTTZ2PrmsXqvi32KihVAvU1fRIvrVrJDpkavqbJYoXOFRKF41LBmEEbq0%2Bv7soaHN1yTzw28UxJtyXnPehbZq%2BoiYNp8ruKJS09%2B1aJj9VME%2B%2BU4pMvoUEUZB2m1VgsnOIV0Flqr%2BfyOVmEs6CMu2YlHU1Bk3nr0I2kbwxXzV5WhnV%2B8p39iP4PF1Frp2hwfRXm4WboX8ag&X-Amz-Signature=0db5b5c53386e9d256b86736df92cd0dc67b0532c97c3202f814b82e39eca446&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
