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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJY52ULI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK275WhJNuVx4dHTcXABkNxfdwyLnwEhrCJQgrn1f6%2FAiBh870vIGu9Es6g6xa9%2BvjXO%2FSeulY9ljEHF9JkHuBeUSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMkj1bzyq7%2BumYGU9NKtwDneoAW6YS5xw0T4VK7VwwEBAT8W%2F537u3T36ImvJ5Y4lXMMQQW0icReFtIV3OHXyPC5zNg8Sr2%2Byfi2QHJnniHUOlZLFL4tvn6OwOwi09oilw4gc1oCHKxa2hRnFNTAy7yJrduKHKOI9wJsDZj3%2F58RVdlsfSVt3Ej9hp0f8xZP%2BLI2kGIdQM2FDzHidWk1EIpjQO3jp8PZT8DpGl5ieBT5OJYEhNLZr4vEoJpw87YMBLqZgrTONcycT6Onss7T3SIy1PN8YvbRfrZDtB2AR%2Bau6fpsQUBUs0WWYQgSXjbK08qQ7dse3JqfX%2FgTN1U7zbX%2BUnJF9Aic8nhzLzLCKlAxRXARANLqjJ98t9pVykl%2FpXlO72%2FmEXxuk%2FPLHbOn4FpdbvZfmn6l7QpE2R3HmLsH4KWDOR7k5TFMbCoz5bsstE89aHBi0bRvPmgHqu3CkIZUgthuaz4OP8VinYbH8yUdzXTUakETtfIS%2BBAgMK77%2BDwp%2F6VjZcjJAQxVgSl6bWAx1RP2PHSSUZhewrfnSURuwT5EEVrdu1e5SalkyYh4YeRtpve9AIJGpXedqqhIgEAfnpv%2FDN%2BJolgnxPu4J88hLRhSRWgr9YpIH%2FpgyG32tQSkNniTItTPU2by0wz5WkvgY6pgFFlT8eV6vgnVSsmDbrweN9sWihsKnKBrvr229qL9sOb66ejpHFdzYK%2Bez2PwqY1pYh5QrAantI%2FfHTJJsm6o%2BqaMH%2FSGYJAs%2F2ld1ZkLiP3AQ9bUMv0KLS34LSiztNLgfR0kSKG%2F6GKO6Qm15af3qZ7t4yAOETyryZ%2BlmMbgmzMTrFKDDGCT7RcgfD4Hgw0l7l5DnO2dpzdmedUmgifJoDHWYR%2F0Fd&X-Amz-Signature=54e25491d6f3972514732e524b10a47dc33493280c6051607fe108e0852c91bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJY52ULI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK275WhJNuVx4dHTcXABkNxfdwyLnwEhrCJQgrn1f6%2FAiBh870vIGu9Es6g6xa9%2BvjXO%2FSeulY9ljEHF9JkHuBeUSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMkj1bzyq7%2BumYGU9NKtwDneoAW6YS5xw0T4VK7VwwEBAT8W%2F537u3T36ImvJ5Y4lXMMQQW0icReFtIV3OHXyPC5zNg8Sr2%2Byfi2QHJnniHUOlZLFL4tvn6OwOwi09oilw4gc1oCHKxa2hRnFNTAy7yJrduKHKOI9wJsDZj3%2F58RVdlsfSVt3Ej9hp0f8xZP%2BLI2kGIdQM2FDzHidWk1EIpjQO3jp8PZT8DpGl5ieBT5OJYEhNLZr4vEoJpw87YMBLqZgrTONcycT6Onss7T3SIy1PN8YvbRfrZDtB2AR%2Bau6fpsQUBUs0WWYQgSXjbK08qQ7dse3JqfX%2FgTN1U7zbX%2BUnJF9Aic8nhzLzLCKlAxRXARANLqjJ98t9pVykl%2FpXlO72%2FmEXxuk%2FPLHbOn4FpdbvZfmn6l7QpE2R3HmLsH4KWDOR7k5TFMbCoz5bsstE89aHBi0bRvPmgHqu3CkIZUgthuaz4OP8VinYbH8yUdzXTUakETtfIS%2BBAgMK77%2BDwp%2F6VjZcjJAQxVgSl6bWAx1RP2PHSSUZhewrfnSURuwT5EEVrdu1e5SalkyYh4YeRtpve9AIJGpXedqqhIgEAfnpv%2FDN%2BJolgnxPu4J88hLRhSRWgr9YpIH%2FpgyG32tQSkNniTItTPU2by0wz5WkvgY6pgFFlT8eV6vgnVSsmDbrweN9sWihsKnKBrvr229qL9sOb66ejpHFdzYK%2Bez2PwqY1pYh5QrAantI%2FfHTJJsm6o%2BqaMH%2FSGYJAs%2F2ld1ZkLiP3AQ9bUMv0KLS34LSiztNLgfR0kSKG%2F6GKO6Qm15af3qZ7t4yAOETyryZ%2BlmMbgmzMTrFKDDGCT7RcgfD4Hgw0l7l5DnO2dpzdmedUmgifJoDHWYR%2F0Fd&X-Amz-Signature=dfcdd159dd6b98159e946a491b7d14fe5548c9701314179cc23a12db6c417a53&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
