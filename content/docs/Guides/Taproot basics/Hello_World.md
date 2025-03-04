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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBUYDKI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWYTCxniIUz46ZV3qT6u8O1x7E%2Bphao3I%2BCfcy%2FLouQIhAJUAuQSyhgudR3S9YjPgiU2B%2FiCSU313Yv0DHbBNVvtcKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1q%2BPyAtZ398gIx%2Bkq3ANrKsWClzxzStLvfzC6PZuQmQ%2FM3iiqN11HKYlqbNPwreODNYUGHiPwg8oqLTZ%2BbGRYgtvGBeALU2u0UYBqhwH1OzW%2FmzaZeQug8IR31yRfFbVch9BmVubPBTuZef7L%2FCrjKoAF4z2QHROt4hCk0%2BdT3gL47GQZOjd8xsvwUozqGiBC%2BIxDs09ZpoT%2B3%2FKsabFUeRj1TTb2zGSsUpL9qm0o%2FQX1RbWKVJQX4L%2B6wZckHVhhgETXpLvSLiGOQaGozIhX1dq8%2F8FOHvtiP7hs9bELG7EsMTgUTAsVk9VYFkzxVp2vHogORdvHyNY50lrSeKHZV9tv0E0DuvI04EOKQOz%2BVVXb6s%2FTl2zlP6ZLxdaHP1prCbXA1EGwFmVwsjEggVIG%2BB5lBF1J%2FDOWrBW9z5AomfD9y%2BH03FKKVyHjo2lirE21LfLcrgarC9qC%2BpAgP%2B%2F3qFz31hssrZ4%2FAYjwT5x%2FDfYi%2B8tz5wE57yh3xCW7FRkBdl6OoYvlVXA9CcybOxdEjuEsmD3Odwxe4n4MEAqQzQ0XrJWtEIodrhWovuiRGXYbr4bXCsoWUtPJ2oGxS89L0j3Jwzk1cWvhEvXGUMTBzfcKJyyKCSCpmM0uOfTVhec7Lx2qp3qE3NR7FzC3%2BJi%2BBjqkAdANT592oa9JnHpDVUfXrVHvVZNM6VSanz%2FxNUBYbnPZJ1%2B3yQyooceVAQU82SdDZVLWjtKqsc0rS4%2FfezCUQet3PKOpmuywf58B77gI2DeJqrsW6M6ZdZq63Mym1GNNxLsUM11l6yV990hczPZIYipsDGsV3cfSVkakWB7kzANE7IaRMpnOwrVgSn%2FieXrgI837eCEszAEQQW3mHjxJ3jaArmOm&X-Amz-Signature=2c4c279fb7b216a2d766e8a67ae821808bb0c7ba80fe763a53140d6176cc9029&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBUYDKI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWYTCxniIUz46ZV3qT6u8O1x7E%2Bphao3I%2BCfcy%2FLouQIhAJUAuQSyhgudR3S9YjPgiU2B%2FiCSU313Yv0DHbBNVvtcKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1q%2BPyAtZ398gIx%2Bkq3ANrKsWClzxzStLvfzC6PZuQmQ%2FM3iiqN11HKYlqbNPwreODNYUGHiPwg8oqLTZ%2BbGRYgtvGBeALU2u0UYBqhwH1OzW%2FmzaZeQug8IR31yRfFbVch9BmVubPBTuZef7L%2FCrjKoAF4z2QHROt4hCk0%2BdT3gL47GQZOjd8xsvwUozqGiBC%2BIxDs09ZpoT%2B3%2FKsabFUeRj1TTb2zGSsUpL9qm0o%2FQX1RbWKVJQX4L%2B6wZckHVhhgETXpLvSLiGOQaGozIhX1dq8%2F8FOHvtiP7hs9bELG7EsMTgUTAsVk9VYFkzxVp2vHogORdvHyNY50lrSeKHZV9tv0E0DuvI04EOKQOz%2BVVXb6s%2FTl2zlP6ZLxdaHP1prCbXA1EGwFmVwsjEggVIG%2BB5lBF1J%2FDOWrBW9z5AomfD9y%2BH03FKKVyHjo2lirE21LfLcrgarC9qC%2BpAgP%2B%2F3qFz31hssrZ4%2FAYjwT5x%2FDfYi%2B8tz5wE57yh3xCW7FRkBdl6OoYvlVXA9CcybOxdEjuEsmD3Odwxe4n4MEAqQzQ0XrJWtEIodrhWovuiRGXYbr4bXCsoWUtPJ2oGxS89L0j3Jwzk1cWvhEvXGUMTBzfcKJyyKCSCpmM0uOfTVhec7Lx2qp3qE3NR7FzC3%2BJi%2BBjqkAdANT592oa9JnHpDVUfXrVHvVZNM6VSanz%2FxNUBYbnPZJ1%2B3yQyooceVAQU82SdDZVLWjtKqsc0rS4%2FfezCUQet3PKOpmuywf58B77gI2DeJqrsW6M6ZdZq63Mym1GNNxLsUM11l6yV990hczPZIYipsDGsV3cfSVkakWB7kzANE7IaRMpnOwrVgSn%2FieXrgI837eCEszAEQQW3mHjxJ3jaArmOm&X-Amz-Signature=7479219a45659d8d4dff7c086dea2599cc0ffc8b27e9849ff6fdd23d58ce16e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
