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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSE6CMFE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBIPgeilrYLalp2IILvDvLN7J6Ghw%2B8xE6Gi%2FqVRxQFgAiBI3pY%2FacIumJ8NyzUCGr7eOdarS%2FrrP5W8tsCOHMvuISqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgCC24YNsijuWYrEKtwDIOwqmIVG9ha8Zb1qweub%2BvBVQfLGyxxEEiYb24Kjkd%2B%2BAZKMqN53ZDoAOO0dxV2k2Nn2YE7Kk7y%2FxgIft%2F%2B7Jibz76pX1xB7cUBlqipxMt7EEKDd1kM8pDYBBu%2BYw7BHJoJ5UY5b0y3FuZ4i8H00bu8vK%2FspNd%2FblWGJjx5LJB%2FwCCsbz%2BhFbDPXUrlN3EsbAlS%2BYZi3wzIKLkMy7l3RMK%2F1NRSTBs0DJVCbhkAyjE028xcA7Q9oDhN0%2BZEg4E6v8QLkR6iE6HjND6xkLrdw1%2FWW5u0B6XZCO%2BjxByzWSsa19AZ9E88c4gAdThnwSz%2BP48MW6HNCZHJMW41mfF%2B9j0rScCYriT92ToTkVJAwL%2BtWe1v0bz4GGuoIR26OFkAC6EjsBBJ3fYJrvHWqLqPtHuEGvaY9i1ZXPZX%2FKjTCqoahg1v%2F6Qx1uc8cmRFq533hFdm9kWJy5YvT9fdkrbu%2BKwnV9B9YfGW26wnB7LbemQo7ujsTnoVuzTMidHFy1PApiVz6PNzFcNNqwMPdOf7HiozyR5Tg12wF8pbLfirJdmd0Ucr89yHNMP1Ev%2Fstz3QB8TD7OEUdFXrByAcXw%2FQs%2BGz9I2OkBW6IlFWV6Njmga8WC2bHrt85j73Gj7Iw1ZXbvwY6pgEdXoQpTiMswGAElU7RRVAfUGfDoBwjQeHlFvt7etEP4ElhBHrjO4LMWZ7iKqqDlhzfT5VjlzVR7Edv%2F%2F2uRVSSdbRXGY%2Bzx%2F6baCU5N1o49RxeYTT6uqTEbiJobKm69VLxBh2Zxnw2GtzfxpUol2CsdLSV956Rj0hHMujATZMo0FhNTMtR9tQdS%2BuBDQtw5K6Tw3qlUV2PQi5OCeaQ0WPlrprTNxT5&X-Amz-Signature=9d02448a65376cad5b1509e306768d5a84641e4330c50cfe11e6ee51ae80aaaf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSE6CMFE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBIPgeilrYLalp2IILvDvLN7J6Ghw%2B8xE6Gi%2FqVRxQFgAiBI3pY%2FacIumJ8NyzUCGr7eOdarS%2FrrP5W8tsCOHMvuISqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEgCC24YNsijuWYrEKtwDIOwqmIVG9ha8Zb1qweub%2BvBVQfLGyxxEEiYb24Kjkd%2B%2BAZKMqN53ZDoAOO0dxV2k2Nn2YE7Kk7y%2FxgIft%2F%2B7Jibz76pX1xB7cUBlqipxMt7EEKDd1kM8pDYBBu%2BYw7BHJoJ5UY5b0y3FuZ4i8H00bu8vK%2FspNd%2FblWGJjx5LJB%2FwCCsbz%2BhFbDPXUrlN3EsbAlS%2BYZi3wzIKLkMy7l3RMK%2F1NRSTBs0DJVCbhkAyjE028xcA7Q9oDhN0%2BZEg4E6v8QLkR6iE6HjND6xkLrdw1%2FWW5u0B6XZCO%2BjxByzWSsa19AZ9E88c4gAdThnwSz%2BP48MW6HNCZHJMW41mfF%2B9j0rScCYriT92ToTkVJAwL%2BtWe1v0bz4GGuoIR26OFkAC6EjsBBJ3fYJrvHWqLqPtHuEGvaY9i1ZXPZX%2FKjTCqoahg1v%2F6Qx1uc8cmRFq533hFdm9kWJy5YvT9fdkrbu%2BKwnV9B9YfGW26wnB7LbemQo7ujsTnoVuzTMidHFy1PApiVz6PNzFcNNqwMPdOf7HiozyR5Tg12wF8pbLfirJdmd0Ucr89yHNMP1Ev%2Fstz3QB8TD7OEUdFXrByAcXw%2FQs%2BGz9I2OkBW6IlFWV6Njmga8WC2bHrt85j73Gj7Iw1ZXbvwY6pgEdXoQpTiMswGAElU7RRVAfUGfDoBwjQeHlFvt7etEP4ElhBHrjO4LMWZ7iKqqDlhzfT5VjlzVR7Edv%2F%2F2uRVSSdbRXGY%2Bzx%2F6baCU5N1o49RxeYTT6uqTEbiJobKm69VLxBh2Zxnw2GtzfxpUol2CsdLSV956Rj0hHMujATZMo0FhNTMtR9tQdS%2BuBDQtw5K6Tw3qlUV2PQi5OCeaQ0WPlrprTNxT5&X-Amz-Signature=ee818457248290c2ef591be9b3c7ae8afb4983ccd0da401ddc3cfc4e09bf9499&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
