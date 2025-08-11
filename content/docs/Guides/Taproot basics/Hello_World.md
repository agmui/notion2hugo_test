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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRDMW6B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTI7VTLFUVLPzT5NCzFC4Jm0GmW1JJMKK6u%2Bypm9s5DAIhAMtC0LmmRkEqFOdLj8t44hER1xJsdfccjymZQrlbiJqrKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztpS%2FtL8XzPJUv4ysq3ANhRwkciqtaRhzPH6gf8pENFEY5gFD1k4TkyrBK5gGCzZeEmSh0xscLVcUAb%2FYXr%2FzKTKCVoJfOAuUJCWTtgrMcTcqtxBPYkJBIDK6SU4KroltYociCMpdlWu3csd3sK2JY5AMkquQd7VrFUtQdSrvZHBEd0qq3yoEXWFc8HSY5EZIt4xOeOTVKZvsXPm2%2B5tPtToHlQRZEvj6xxGYlSJ6aydscBoDYs1ezeU1DetOxfLb6oiCdlPEuf8fbnR%2BnPt7tjNmA32CJLU2%2BgydxV3nNN0l2Zr%2FAP8xPkkG42lIiW6Ag9cClR1TvXzZMYoLTMxFluTEJjOsaQRYGjyql72JNzgSTSESbNNOdep52xK314NXuVHs60kV11f%2BAcnBB8sSFrZmbhgDBj9xs8lM%2FUdQH%2BzoyTFRqcFxGfuvdCHpUqfW1BOiPTEIqa9Aa%2BKho7oohBkBZUFXyCRzSdzi%2B%2FnUsuhwhwnCmUcu%2B3y8JgvyXSxJh4ZkRm3b5Tld9blkyAjx1H6FE6c1OOcOXw8xtJKCAWJU6pij08QLSZk14UjkzLjt5JtwoYxqmbwhS9fAZNH4rWhzoWCOVKMklcyT1Pg4fBQVIt9PzkKiu4IODpNElzuTo9miJzM8%2FDdt9ATCx%2BebEBjqkAdieGJt50AaJ7tnOe5x50r75EDxiV09POBMPgyujkYdUe8meR%2FfLvSO4usWSpig6sAKUwL50Ey%2BMNFCAP%2BBr8nWSltnqayF2abD2%2FASIRfYb4yKgH7mdEqHlVyQTbpbOrWvg7ujQQkWEoEHkA1hwEXSUdLF4pVEPL%2FWKpjjo3UT5WOCAOhOOAT0r8tz2LV5f33jd41qeZ5SAZBAe3lHDcJTsACZv&X-Amz-Signature=de49bda168eda08bc1178548a6dae0b5e9240f44ba149266ecb5ed2f53226918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRDMW6B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTI7VTLFUVLPzT5NCzFC4Jm0GmW1JJMKK6u%2Bypm9s5DAIhAMtC0LmmRkEqFOdLj8t44hER1xJsdfccjymZQrlbiJqrKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztpS%2FtL8XzPJUv4ysq3ANhRwkciqtaRhzPH6gf8pENFEY5gFD1k4TkyrBK5gGCzZeEmSh0xscLVcUAb%2FYXr%2FzKTKCVoJfOAuUJCWTtgrMcTcqtxBPYkJBIDK6SU4KroltYociCMpdlWu3csd3sK2JY5AMkquQd7VrFUtQdSrvZHBEd0qq3yoEXWFc8HSY5EZIt4xOeOTVKZvsXPm2%2B5tPtToHlQRZEvj6xxGYlSJ6aydscBoDYs1ezeU1DetOxfLb6oiCdlPEuf8fbnR%2BnPt7tjNmA32CJLU2%2BgydxV3nNN0l2Zr%2FAP8xPkkG42lIiW6Ag9cClR1TvXzZMYoLTMxFluTEJjOsaQRYGjyql72JNzgSTSESbNNOdep52xK314NXuVHs60kV11f%2BAcnBB8sSFrZmbhgDBj9xs8lM%2FUdQH%2BzoyTFRqcFxGfuvdCHpUqfW1BOiPTEIqa9Aa%2BKho7oohBkBZUFXyCRzSdzi%2B%2FnUsuhwhwnCmUcu%2B3y8JgvyXSxJh4ZkRm3b5Tld9blkyAjx1H6FE6c1OOcOXw8xtJKCAWJU6pij08QLSZk14UjkzLjt5JtwoYxqmbwhS9fAZNH4rWhzoWCOVKMklcyT1Pg4fBQVIt9PzkKiu4IODpNElzuTo9miJzM8%2FDdt9ATCx%2BebEBjqkAdieGJt50AaJ7tnOe5x50r75EDxiV09POBMPgyujkYdUe8meR%2FfLvSO4usWSpig6sAKUwL50Ey%2BMNFCAP%2BBr8nWSltnqayF2abD2%2FASIRfYb4yKgH7mdEqHlVyQTbpbOrWvg7ujQQkWEoEHkA1hwEXSUdLF4pVEPL%2FWKpjjo3UT5WOCAOhOOAT0r8tz2LV5f33jd41qeZ5SAZBAe3lHDcJTsACZv&X-Amz-Signature=b24b3dfe4168bd8803bee5fb0d4f4c25df7e255efa4e6e12a1397c4bf76555c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
