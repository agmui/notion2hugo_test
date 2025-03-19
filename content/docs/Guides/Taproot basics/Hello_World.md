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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U4UI4F4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCV11kUpmnzr0oM8Gpl0cerZi7F3v81gT%2BhJ1Gprz2fcAIhAIIzao1a5JrM5adAkYZ8b4Ov2Fl2i2bzoPFRDJoMfB7aKv8DCHUQABoMNjM3NDIzMTgzODA1IgyxzY77apW7imX5x6Eq3AM44J8dUcqPvvf7%2FlUaYLPR2%2F0%2B4kf9KdsSzSNlKawHviFNVZ9wqkEdTtAfhHujpcAHzzH5c8me2OA841YLYCnVgSjDrmeCNG%2F%2Fs1FD9UkF1rUUdjosKU%2BuM3QIV3ABcSWniFC9cN1Mpj5PO6VXC4g73Yy96XK3KesRuNHXbkrFCP2E1vUXgK87%2B%2Fx7tp%2BPOSXVjiicRZ2KACH4Za%2FR08oiEeoGRyxRO%2FBY9eLxWiprBQpsi6P5X4F%2BEHIxqtLyvKFkJgGUO%2Fej7fJ5lgLtbfuckWQzVpBUQChwuD%2FLpI6Cp7URp5fcx70Mco5jHL1T%2BkWEG2lEJxggs7YXbIHyvIONnhrp8LN2qjqC3k1NMFzJhqKgGYUQ4To8RM%2BrcKoBmnkn%2BbuwI6%2FXj41ps%2B38pNsnZhGHL1Tm17RvCc1aZi7BFNs7%2BlJIV2iBK6hMd3dZzAKXp5ohqrvOigYet%2FGr%2FfiQf68wmoWHRbcErHDpvhlwe3TY7v2vS21YayZINsJfmmjkHyzApRj0uTjH8puWgqVNQsZg1vD6ldxxyKteNEvgJQ%2BHK9%2FIcSG2A7r576GXEF%2BSNcTdTbRZAaeik8cVLbSpEvfDh53p8r4jfF6ah9WokifMaYN8a6uGEVa15DDh4Oq%2BBjqkAUfVpOImqyrjJJN%2FbqlkE0OfdE5JBwZr%2B%2B5GT4VW6etsBycBsoQjerkaReYf4lZpCm%2F01BxechE156GAHout%2BY91zUTTI3%2FrMBGv8qmgb3ovtjOAdmQHUKKLRHtefUZu8UP54oMIe7vrECiKo3iQwJZf%2BrJuE9GJ2rhamgmnJBVEKRH%2FG2NIwWh5yxCEl30zABvVdABLmD1THGn3eqgxI3e2buVn&X-Amz-Signature=ab06be20c1cb5b87671f0b9004daa7e3c9ac5fb21c5b1c8be110e7873d189c36&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U4UI4F4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCV11kUpmnzr0oM8Gpl0cerZi7F3v81gT%2BhJ1Gprz2fcAIhAIIzao1a5JrM5adAkYZ8b4Ov2Fl2i2bzoPFRDJoMfB7aKv8DCHUQABoMNjM3NDIzMTgzODA1IgyxzY77apW7imX5x6Eq3AM44J8dUcqPvvf7%2FlUaYLPR2%2F0%2B4kf9KdsSzSNlKawHviFNVZ9wqkEdTtAfhHujpcAHzzH5c8me2OA841YLYCnVgSjDrmeCNG%2F%2Fs1FD9UkF1rUUdjosKU%2BuM3QIV3ABcSWniFC9cN1Mpj5PO6VXC4g73Yy96XK3KesRuNHXbkrFCP2E1vUXgK87%2B%2Fx7tp%2BPOSXVjiicRZ2KACH4Za%2FR08oiEeoGRyxRO%2FBY9eLxWiprBQpsi6P5X4F%2BEHIxqtLyvKFkJgGUO%2Fej7fJ5lgLtbfuckWQzVpBUQChwuD%2FLpI6Cp7URp5fcx70Mco5jHL1T%2BkWEG2lEJxggs7YXbIHyvIONnhrp8LN2qjqC3k1NMFzJhqKgGYUQ4To8RM%2BrcKoBmnkn%2BbuwI6%2FXj41ps%2B38pNsnZhGHL1Tm17RvCc1aZi7BFNs7%2BlJIV2iBK6hMd3dZzAKXp5ohqrvOigYet%2FGr%2FfiQf68wmoWHRbcErHDpvhlwe3TY7v2vS21YayZINsJfmmjkHyzApRj0uTjH8puWgqVNQsZg1vD6ldxxyKteNEvgJQ%2BHK9%2FIcSG2A7r576GXEF%2BSNcTdTbRZAaeik8cVLbSpEvfDh53p8r4jfF6ah9WokifMaYN8a6uGEVa15DDh4Oq%2BBjqkAUfVpOImqyrjJJN%2FbqlkE0OfdE5JBwZr%2B%2B5GT4VW6etsBycBsoQjerkaReYf4lZpCm%2F01BxechE156GAHout%2BY91zUTTI3%2FrMBGv8qmgb3ovtjOAdmQHUKKLRHtefUZu8UP54oMIe7vrECiKo3iQwJZf%2BrJuE9GJ2rhamgmnJBVEKRH%2FG2NIwWh5yxCEl30zABvVdABLmD1THGn3eqgxI3e2buVn&X-Amz-Signature=6fe2d3a691895a84a16b5d1d7791080bbe475e8f95c4395857efb1d62f17c4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
