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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNGO62G%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9te6mDBgwFo2DnVLY2DAY0Cm2eOBBcZww2Rz%2B6kmGMwIhAO6yk93nZwKrUkaO1mT4XKigsZT6FrSQBJD%2BLPi1gfztKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypeazQTGOULw9gUgYq3AP5N7M9DJYwFlGlnQjPIt%2BKfeCWAYy9MKo8h5g1obZyMQpNCOM5mOWzuLWlij%2F%2F61px5CmtnLHanjaXmPckyZF6jZQ31hL%2BQ3vUA1yMifSEJquUXAB6H5Nt3s8AFY0hXaFRqUDZmOi21G2%2Fn8WKIkPhcDKjdsWIEVosCGrb%2FD2abLdwehlaWUmhQqkjlLev5%2B2RYrcyN2K07jbwzjebBL46XsPmg6ZTDRsITIdDJBtCaJZruh2qIJWIvwH70BDSDZaFxCZQ%2Bvn4AB74R37XpmPPqEmpJKYWBQpA84ILztwl4ripiYWXpjYMoOrfzRhQpVejhjivyZNPo6EmuAhYvOXY8DSt2sNDXvOwJcUIcuzgKvT3PCe9%2Fd23ukm0dSDrG0M8fvnYbSSvljS58qOgDns28qIkT1t6Pmx1KXbm4pR2oFIB6OhH2jZAOcLf6%2BeKRrnpOvvJej6na6PrPMd33hxFJKrhXHxGd8VqQbLl1LZr4Vu1cAfny9RCQkLIBjFUrpq98pT3gqvS3RqeCQ46Hr%2Bv8ygqyPMkw46jMKfeWE1xpm0vThtYofVZH1csMfhYnH8Gyui0XbmcpFupN1Th4C%2F5rYTMIztMrFRz%2BJWlGJ5Qvpc55SlMW3BayQ304zCO1%2FjABjqkAQtYHHTX9nIpANfTO0vLH%2BLwpBnGXwQ4mPW4CjZK%2Baar1ot1MJwnd7Zwwjd%2B3Pwt2lZTYLB%2B9l%2F9PyOTEyJbpLD0MA6FV1RuAh%2FvBkcrp26yiEUbpw%2Fn8PtD%2B7A7YnX4bwVbnUtU83lSwzldg2yXlSWyPBbjtotoE9QwYsZE5Z1rVL%2BDE1Ydzq2Ftg3Sigvqlu3nuhHqD8sCTzKUjTWGxzf7D0Vg&X-Amz-Signature=839be4e0c230d5c5eff0fc90f8f3b12dfbbca82109b01b884e00aa5471e85c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNGO62G%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9te6mDBgwFo2DnVLY2DAY0Cm2eOBBcZww2Rz%2B6kmGMwIhAO6yk93nZwKrUkaO1mT4XKigsZT6FrSQBJD%2BLPi1gfztKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypeazQTGOULw9gUgYq3AP5N7M9DJYwFlGlnQjPIt%2BKfeCWAYy9MKo8h5g1obZyMQpNCOM5mOWzuLWlij%2F%2F61px5CmtnLHanjaXmPckyZF6jZQ31hL%2BQ3vUA1yMifSEJquUXAB6H5Nt3s8AFY0hXaFRqUDZmOi21G2%2Fn8WKIkPhcDKjdsWIEVosCGrb%2FD2abLdwehlaWUmhQqkjlLev5%2B2RYrcyN2K07jbwzjebBL46XsPmg6ZTDRsITIdDJBtCaJZruh2qIJWIvwH70BDSDZaFxCZQ%2Bvn4AB74R37XpmPPqEmpJKYWBQpA84ILztwl4ripiYWXpjYMoOrfzRhQpVejhjivyZNPo6EmuAhYvOXY8DSt2sNDXvOwJcUIcuzgKvT3PCe9%2Fd23ukm0dSDrG0M8fvnYbSSvljS58qOgDns28qIkT1t6Pmx1KXbm4pR2oFIB6OhH2jZAOcLf6%2BeKRrnpOvvJej6na6PrPMd33hxFJKrhXHxGd8VqQbLl1LZr4Vu1cAfny9RCQkLIBjFUrpq98pT3gqvS3RqeCQ46Hr%2Bv8ygqyPMkw46jMKfeWE1xpm0vThtYofVZH1csMfhYnH8Gyui0XbmcpFupN1Th4C%2F5rYTMIztMrFRz%2BJWlGJ5Qvpc55SlMW3BayQ304zCO1%2FjABjqkAQtYHHTX9nIpANfTO0vLH%2BLwpBnGXwQ4mPW4CjZK%2Baar1ot1MJwnd7Zwwjd%2B3Pwt2lZTYLB%2B9l%2F9PyOTEyJbpLD0MA6FV1RuAh%2FvBkcrp26yiEUbpw%2Fn8PtD%2B7A7YnX4bwVbnUtU83lSwzldg2yXlSWyPBbjtotoE9QwYsZE5Z1rVL%2BDE1Ydzq2Ftg3Sigvqlu3nuhHqD8sCTzKUjTWGxzf7D0Vg&X-Amz-Signature=8b8527e9b20fdf638974e50af83c7411f854a1c06ee910be2bfd05dc9f66d606&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
