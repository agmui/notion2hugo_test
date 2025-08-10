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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGKUZCD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkpYqK5wVHqRWJV5Lthi7bEG22tzuDWkACYucq91ljMAiAx0alUWNgAj7M8HIcfBUJ%2BUvXG4QFX9IYC6dvd6sXluCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8jKR%2F4D4rzWMR7wvKtwD8omeuvnIX4HvMaYokZkXe%2F11W79bCGb%2Fi8wpNImzYXcdbjKKEplr1opBj5xby%2F8eLSIjnVSFW3AUNV5T0oifbI3WN9Qdtb2QT6lwlgXvRvrp4j4sZakHihToie%2F3Ota2%2Fi6x2MwxMVZhmLgTZrdaVRTbTXU1t2%2BGYlxRQaJY5ltswyBqU1PMNFUumxFvnZgHlDH9U9JLpMncIijFui11UycAvVMsB6yOzDIZ%2FDrRlh8euN5YSvmsI0TH7ATXKg510J0dceCcQOnyX0Z2LnpnrF4iENtUf2Sp%2FSSZ7mA4Ihk%2F%2BTFjN%2BlMqrP%2FovJwACCjYkqh79cpuFemN9QFUVya7nfxOXDD%2FkikCsKc6bWUcGH1XoKk3BJTc1YVS%2BGuuZ9Oc91c9e8JBuLw1%2F%2B9xKInQGFtY34HNoxVUi%2Fig%2B%2FKIgQwGmh6mmURHSufLzPVyPQZYNxqHuKozlsMFOtsX3ODr6XMSnsRS7PrZ8PnHy23T9IcSmgbVHPY%2B9cO2bvQfNgR1uCnfsjKFPZzhm8s0HLh8A8Bi9J89YBFAuSEGVZs7qJd0waBOV7K2KC74t%2B001Rswl8Wy3EJCHaxZXY3BqivumQB7nTKmSzRc7m2xKU9O7klmrfIz4MMS%2FWJ1fEwm%2FXgxAY6pgH2oi%2FvCfgy8cszjMp3gTDhEWxPOm0KZrENph9ehrSDBZ4BJyr%2BMO%2FbgCzgp4AKxUdAnyyHc0Z2JrfrpCxRwy%2F6CfDucf4hfz0NTT49dyAJz0WpNZaurxQ2cTULvD8%2F7Y0wVOVe2v1UBJeC0Ewy9hGKMP9t13OOloEMYYgLSTN1zlZKR1BbySIlMshJ64hJlXbQweEB9O35j%2Ba8M2QfcKRcG0atm6SH&X-Amz-Signature=e80d916bb06df80f4a8e070e4fe7e9d98a261079061432ac36bece6e1dda81e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGKUZCD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkpYqK5wVHqRWJV5Lthi7bEG22tzuDWkACYucq91ljMAiAx0alUWNgAj7M8HIcfBUJ%2BUvXG4QFX9IYC6dvd6sXluCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8jKR%2F4D4rzWMR7wvKtwD8omeuvnIX4HvMaYokZkXe%2F11W79bCGb%2Fi8wpNImzYXcdbjKKEplr1opBj5xby%2F8eLSIjnVSFW3AUNV5T0oifbI3WN9Qdtb2QT6lwlgXvRvrp4j4sZakHihToie%2F3Ota2%2Fi6x2MwxMVZhmLgTZrdaVRTbTXU1t2%2BGYlxRQaJY5ltswyBqU1PMNFUumxFvnZgHlDH9U9JLpMncIijFui11UycAvVMsB6yOzDIZ%2FDrRlh8euN5YSvmsI0TH7ATXKg510J0dceCcQOnyX0Z2LnpnrF4iENtUf2Sp%2FSSZ7mA4Ihk%2F%2BTFjN%2BlMqrP%2FovJwACCjYkqh79cpuFemN9QFUVya7nfxOXDD%2FkikCsKc6bWUcGH1XoKk3BJTc1YVS%2BGuuZ9Oc91c9e8JBuLw1%2F%2B9xKInQGFtY34HNoxVUi%2Fig%2B%2FKIgQwGmh6mmURHSufLzPVyPQZYNxqHuKozlsMFOtsX3ODr6XMSnsRS7PrZ8PnHy23T9IcSmgbVHPY%2B9cO2bvQfNgR1uCnfsjKFPZzhm8s0HLh8A8Bi9J89YBFAuSEGVZs7qJd0waBOV7K2KC74t%2B001Rswl8Wy3EJCHaxZXY3BqivumQB7nTKmSzRc7m2xKU9O7klmrfIz4MMS%2FWJ1fEwm%2FXgxAY6pgH2oi%2FvCfgy8cszjMp3gTDhEWxPOm0KZrENph9ehrSDBZ4BJyr%2BMO%2FbgCzgp4AKxUdAnyyHc0Z2JrfrpCxRwy%2F6CfDucf4hfz0NTT49dyAJz0WpNZaurxQ2cTULvD8%2F7Y0wVOVe2v1UBJeC0Ewy9hGKMP9t13OOloEMYYgLSTN1zlZKR1BbySIlMshJ64hJlXbQweEB9O35j%2Ba8M2QfcKRcG0atm6SH&X-Amz-Signature=214e9867723ae2732a4991f005cc3d43a1470eeacf7878d1ec0f397485cca8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
