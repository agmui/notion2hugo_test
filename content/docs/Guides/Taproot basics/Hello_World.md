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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQY3FZU4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIATHbPIQFR0UMc%2F0mYUaEHfxTG8dY7wffvTWh0BD7K%2BBAiA1TI6%2Fi8RszX3YedMUEgpmxp8erEUkBJih41qr3rOblir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMlnVDMH8NSPgByag2KtwD5qwcv%2FQlDIrd7kK8wUSSKHlj7zB4NjNGsUNfDuI7n4FUezl7t7CROndmZD%2FOwbU4gx6btJaq%2FewWqBv7GpyutarpfHFiLD%2FWYjn5c9ET8ehGjJs6QX%2FzDB5mIMcKVe0%2B1LS4TIybIMpBTjr6FCyDceKOXaFgqz88hQ9zlwpCvyL5zFSBHB1eo4WgvSdQLXYTCcEANOFTzA0c9QjeR7qrm4bgHL4CI3t%2FF4E21eIurLH9oujeHvY0kSSgzbvYVHM1O8tV2b0s2JBJIb6NGu%2BlO59fvRSi7UF9twsc05y6S1cMfaz4Tp95gnlmJDj5t8La%2FtxTjjcerl8zkDntUCG6p7B52ncxOqCyQ509xP6p7yUaRoEduSpIwNLucBZ%2FrRrQ553AfHNxl3mMd%2FlVWyX4baFu04w7BbeiJtfpnjqM0SgVO8Z5cRbc%2BbSIgnhrD%2FgKHHDNGBYA2cbY3f3V5hsPrHI7UU3fl%2FA382Tc6Rq%2B4vhjw0RLLaOyT%2BUye44KG1ZG%2F2qh5IO3RV9e1HYlpM7xycTkL0e3SAgho0UkvF2ckqqahY0ci1%2FM0GOIXTb4k96%2BQXK6dX9ByMccP1ORq7X4eUfn2hhqc%2FBHWTHuI03WDG4WgBdBQryb44YtlkQwrPiAxQY6pgG%2FiLyE3zKZK0hiPalKxwjqfvvoVnGCz1GaU4ptiWLnlNrL0XqR4PIrijzFaolr02f4uqQJI7fI0a4GKLSlT6Pg6poMws0CHIkd73AWYywJrCn2Pj2osp9HrZKsFPiu9dAs4RGfMSWP10WZpedUNtOMu9YPxGV36dllXqumXiu3zEA54Q%2BDl8dwyphsoLJd5Q0CvLkAW1po5tV2lLfNYCkw4sg2H7O1&X-Amz-Signature=53caaf870b738bd04dd2df248e894b7a6a6323bf46ec13d2092c40824baf7320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQY3FZU4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIATHbPIQFR0UMc%2F0mYUaEHfxTG8dY7wffvTWh0BD7K%2BBAiA1TI6%2Fi8RszX3YedMUEgpmxp8erEUkBJih41qr3rOblir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMlnVDMH8NSPgByag2KtwD5qwcv%2FQlDIrd7kK8wUSSKHlj7zB4NjNGsUNfDuI7n4FUezl7t7CROndmZD%2FOwbU4gx6btJaq%2FewWqBv7GpyutarpfHFiLD%2FWYjn5c9ET8ehGjJs6QX%2FzDB5mIMcKVe0%2B1LS4TIybIMpBTjr6FCyDceKOXaFgqz88hQ9zlwpCvyL5zFSBHB1eo4WgvSdQLXYTCcEANOFTzA0c9QjeR7qrm4bgHL4CI3t%2FF4E21eIurLH9oujeHvY0kSSgzbvYVHM1O8tV2b0s2JBJIb6NGu%2BlO59fvRSi7UF9twsc05y6S1cMfaz4Tp95gnlmJDj5t8La%2FtxTjjcerl8zkDntUCG6p7B52ncxOqCyQ509xP6p7yUaRoEduSpIwNLucBZ%2FrRrQ553AfHNxl3mMd%2FlVWyX4baFu04w7BbeiJtfpnjqM0SgVO8Z5cRbc%2BbSIgnhrD%2FgKHHDNGBYA2cbY3f3V5hsPrHI7UU3fl%2FA382Tc6Rq%2B4vhjw0RLLaOyT%2BUye44KG1ZG%2F2qh5IO3RV9e1HYlpM7xycTkL0e3SAgho0UkvF2ckqqahY0ci1%2FM0GOIXTb4k96%2BQXK6dX9ByMccP1ORq7X4eUfn2hhqc%2FBHWTHuI03WDG4WgBdBQryb44YtlkQwrPiAxQY6pgG%2FiLyE3zKZK0hiPalKxwjqfvvoVnGCz1GaU4ptiWLnlNrL0XqR4PIrijzFaolr02f4uqQJI7fI0a4GKLSlT6Pg6poMws0CHIkd73AWYywJrCn2Pj2osp9HrZKsFPiu9dAs4RGfMSWP10WZpedUNtOMu9YPxGV36dllXqumXiu3zEA54Q%2BDl8dwyphsoLJd5Q0CvLkAW1po5tV2lLfNYCkw4sg2H7O1&X-Amz-Signature=930f9659639e454ed3a101d337495577a21226bd69c574866696ee79814aae65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
