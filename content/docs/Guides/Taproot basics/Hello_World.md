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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUXMALL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCAInX9Q4sktosKB%2FhOOGZh3484msHbPLa4lYUGOVQU6AIhAPI95So4qlyPi420NtEPx70dcoKpWN%2B3xxnvC7ps4LBuKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUQQLss9WB716mRSEq3APSRw%2B4eCsFovIcea2SPPaxbcj6vnxKepLoeeK3jZ4I7itYOOSRcBuQ%2BQnnQLlC3byryvEOJctP9C%2FALacqsYkgkDx1Q7m1wxfi7hBxMpYq5GTAiczYiOJE68n3%2FOnprSHGjUVz45YnP%2FR0o4XHmjvOaHxJQDqQo%2B07sUtpwhzS4hRED4sS3kHFc5LiMPQeNufCr6H911ItDdUPLdipFcXLPriCuvd19VL3LWgrb1ZpnWDBDwFeHCT4oXomeUihTLXF3FMvwAtov3uPd7QRw60L6TJQMxshpLt8ZhQrpWruMb27il3cDwoJITOUQBHwjJF%2BvK7pkPkai31xRxmhkkndzGd%2BCswHUEC42fn%2FoU07zmOnkGM2mgeW6n%2FPZ%2BnDkBAdpUp9L%2BlXfi74rXnLz7s%2FWBZ9rng%2Bcyxqp5YMGfzY6%2Bab%2B7pA2Fb8A1HINGkSFTtJ3nVwU4f4tuA73EknOcMTfV01W8UAH3g%2FdAeDhURaXpgdIxmUVjIirEwofLz8FdwW%2F8vDR3s2Z8ToBDz%2BlctBFzGtUSUMSWS%2BZrppjedPg6Utj4z8JUBFvo8HWU9MDhEwS0ozr400UhN2on4l2WujZWnz9JDdnPUOxU1k677%2Fy7mFRwrsUJWGjhKnMjDAroe%2BBjqkAakmhrXwT3dzvmprumdrUNCTppzjHchzr1p%2FwOw3u8Iukf0lADP%2Bc7HQo9QW6ir7KH%2BNi%2Bfovo28ZigB%2B7zzQMFO%2FmxxcyG%2F%2FVL5TMTOA7I6fYTGStyp2gCowYftJQuKzaA7QbGmkjYsLQpRbWskhLlmxykuw6R7Mdio2QMOyd58fixzlOv9UT%2FabqujxSSAGccq1q8fullZoU%2BqFb0Qs4hCVinL&X-Amz-Signature=fd3d5545b40e8c5ec87d17d168997c23f70ebad3bae6fdd6ed039e05c6a65ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUXMALL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCAInX9Q4sktosKB%2FhOOGZh3484msHbPLa4lYUGOVQU6AIhAPI95So4qlyPi420NtEPx70dcoKpWN%2B3xxnvC7ps4LBuKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUQQLss9WB716mRSEq3APSRw%2B4eCsFovIcea2SPPaxbcj6vnxKepLoeeK3jZ4I7itYOOSRcBuQ%2BQnnQLlC3byryvEOJctP9C%2FALacqsYkgkDx1Q7m1wxfi7hBxMpYq5GTAiczYiOJE68n3%2FOnprSHGjUVz45YnP%2FR0o4XHmjvOaHxJQDqQo%2B07sUtpwhzS4hRED4sS3kHFc5LiMPQeNufCr6H911ItDdUPLdipFcXLPriCuvd19VL3LWgrb1ZpnWDBDwFeHCT4oXomeUihTLXF3FMvwAtov3uPd7QRw60L6TJQMxshpLt8ZhQrpWruMb27il3cDwoJITOUQBHwjJF%2BvK7pkPkai31xRxmhkkndzGd%2BCswHUEC42fn%2FoU07zmOnkGM2mgeW6n%2FPZ%2BnDkBAdpUp9L%2BlXfi74rXnLz7s%2FWBZ9rng%2Bcyxqp5YMGfzY6%2Bab%2B7pA2Fb8A1HINGkSFTtJ3nVwU4f4tuA73EknOcMTfV01W8UAH3g%2FdAeDhURaXpgdIxmUVjIirEwofLz8FdwW%2F8vDR3s2Z8ToBDz%2BlctBFzGtUSUMSWS%2BZrppjedPg6Utj4z8JUBFvo8HWU9MDhEwS0ozr400UhN2on4l2WujZWnz9JDdnPUOxU1k677%2Fy7mFRwrsUJWGjhKnMjDAroe%2BBjqkAakmhrXwT3dzvmprumdrUNCTppzjHchzr1p%2FwOw3u8Iukf0lADP%2Bc7HQo9QW6ir7KH%2BNi%2Bfovo28ZigB%2B7zzQMFO%2FmxxcyG%2F%2FVL5TMTOA7I6fYTGStyp2gCowYftJQuKzaA7QbGmkjYsLQpRbWskhLlmxykuw6R7Mdio2QMOyd58fixzlOv9UT%2FabqujxSSAGccq1q8fullZoU%2BqFb0Qs4hCVinL&X-Amz-Signature=b806174e5d99c775894e07fb08a1d0dbc1a3f0f26c33bf21e0815c781079964b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
