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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GQSM4F%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqq0ETGKLBxiFxotnWUbqDeU4sBFk0xVgbqC%2FoaobLhAiEA5n9ObownVJV7MlPZNxMInpV816%2BeLOey8AMk6wKGSskqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNwqaBV7zG%2F5K2WjyrcA%2B8CnFz5dAqdsguqhYOeJ9rmsV63gvbGyYM6vS2cPkcRM%2F8CjwTZ%2F%2FbVj3jj06XfbMaqTuqJa1wTHcR1TgSRFBpUuOOY0StAPRnZt9olTZmwygPO5S4171lMUwxYBS28akeqCwEjxlt1wxBirYgg3AvzBbEPtv7J32SLuvEm8D%2F9Pm0HzwmKIw1%2BkRmiZ%2B0DMnqTYFg91gSnZkE9naMql%2FPU09UQpp1%2BwpZl7AWV4lDq8iK6kVNzPbA8vzsNhL6t3T8Tje3t%2B62uuTgYql%2Bhcz7%2F4l5IEd5gDyJjAdEJAF6oHb5B%2F0bh62g%2BPisDN%2BmiKqs2mND6nXheH7MOaV3g2tYp5PQ1QznMPz6ssfJfMPozJ6VY0FPNffJDhA3k1d7C80QBjpfH0McdsL828GM%2BWDMr%2FguNFna%2FrJu%2BRx3rVstAmYhXc0VDbqgveQLfYyteyBcwEC14pGqrV%2BI4YjpNxYcV1SOL%2BW5vwVAmhHy91wXKa8Y9NexGeJLpiGFi%2FtejH2DwPokko%2FWwUQLtdOHsS8LH8vn8yyTvDZYpgAv7Z2RrWrUGsd8jdVZ0K%2FkBmKkwWser%2BpiZ1ynYtLsKs%2F9piFnfSvFyG77lVoVhP4%2Bn1Ms0GLJWQGZJgIf36kP%2FMNyKnL4GOqUB%2BXMVdmKV85XS%2BNjUkMR86x5RC%2FaeDHqMWtDVgmsClqbBd%2BMxRErHtej6R2ckVI729H3li2R6L9tnBHuwkqNgpAF4X7BXRsYOwcsF1B684%2BR%2F3Zk9KSHpC3miZWc3a0aAw887Rh6hIDCWf0cxeWz6zd09ILcvESkqV3Xp1b1rNZN%2B1PEveX05kYClw1Ii%2Fek81sITYrFMfLdFDkRZP57iTq1VThmp&X-Amz-Signature=404fdcc4a51c85f898dcd484235d0b09815bc5b188bae09e91d0f60d34678865&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GQSM4F%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqq0ETGKLBxiFxotnWUbqDeU4sBFk0xVgbqC%2FoaobLhAiEA5n9ObownVJV7MlPZNxMInpV816%2BeLOey8AMk6wKGSskqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNwqaBV7zG%2F5K2WjyrcA%2B8CnFz5dAqdsguqhYOeJ9rmsV63gvbGyYM6vS2cPkcRM%2F8CjwTZ%2F%2FbVj3jj06XfbMaqTuqJa1wTHcR1TgSRFBpUuOOY0StAPRnZt9olTZmwygPO5S4171lMUwxYBS28akeqCwEjxlt1wxBirYgg3AvzBbEPtv7J32SLuvEm8D%2F9Pm0HzwmKIw1%2BkRmiZ%2B0DMnqTYFg91gSnZkE9naMql%2FPU09UQpp1%2BwpZl7AWV4lDq8iK6kVNzPbA8vzsNhL6t3T8Tje3t%2B62uuTgYql%2Bhcz7%2F4l5IEd5gDyJjAdEJAF6oHb5B%2F0bh62g%2BPisDN%2BmiKqs2mND6nXheH7MOaV3g2tYp5PQ1QznMPz6ssfJfMPozJ6VY0FPNffJDhA3k1d7C80QBjpfH0McdsL828GM%2BWDMr%2FguNFna%2FrJu%2BRx3rVstAmYhXc0VDbqgveQLfYyteyBcwEC14pGqrV%2BI4YjpNxYcV1SOL%2BW5vwVAmhHy91wXKa8Y9NexGeJLpiGFi%2FtejH2DwPokko%2FWwUQLtdOHsS8LH8vn8yyTvDZYpgAv7Z2RrWrUGsd8jdVZ0K%2FkBmKkwWser%2BpiZ1ynYtLsKs%2F9piFnfSvFyG77lVoVhP4%2Bn1Ms0GLJWQGZJgIf36kP%2FMNyKnL4GOqUB%2BXMVdmKV85XS%2BNjUkMR86x5RC%2FaeDHqMWtDVgmsClqbBd%2BMxRErHtej6R2ckVI729H3li2R6L9tnBHuwkqNgpAF4X7BXRsYOwcsF1B684%2BR%2F3Zk9KSHpC3miZWc3a0aAw887Rh6hIDCWf0cxeWz6zd09ILcvESkqV3Xp1b1rNZN%2B1PEveX05kYClw1Ii%2Fek81sITYrFMfLdFDkRZP57iTq1VThmp&X-Amz-Signature=4f9798ab6431e7290f24fcbe1d34e9be6711f615166f8e5dd8ab89da805fc690&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
