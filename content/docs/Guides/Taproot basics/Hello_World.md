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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7CHKHR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCLfuhlZhV7wsPpf4lPsjis89ct3z9Kdfo4udhgY%2FNj4gIhANZKnF5vfj5%2FShJyX2ZGUyrQjIDY6q%2BcFm4aana1EB3HKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNa99ipI9wzrudWoq3AOCgyz72VHO7Ls8Ufk3HQInjM%2FDtyeVE2ptRYKalsXAnL5z1Hk%2FGIDyBQEvXoGkuqxoviVrPnKF5EwCaxTIhciDDWAUaAFb7St3c7wQKqyrnPL%2BqO%2BH3tMcm1XvRQhHGOfVrrFCK5%2BE9u%2FLF4aKSd464SbwKNCj6N9Gzq6UcLXfDLvfErWEWs10i5xClNs1t1%2BWpyfJnl1Tlkfag%2FDln8EPjqltjrobp8Vg5afpakQCEXx2K2KoWFRvhVAR6WX4xUTZV5Q8eUbcCPkLJQZEqqW0wwk6Nxb2%2FPnj%2BNr%2F%2BSQpFvj%2BKBJodU3ckvqctDG%2FitXJcYR0i%2B3WDvxBWjXORPtS1A0iLSQCk22zmmsNCKI3jHW9grglq0jGJIewLWq7H30Zg2CxEAvmOjPBJ1hemAVQKF4fXI%2BvG4AJ3cQ2ykjUTtSamNDiwWe%2F6KPXekFMBrFmy1yqtQyrvJ1guzabn7GAICQuby%2BKLaWtQj1tB%2BdiFi9JAd8JTPv%2F116AxznXS8znAliwCFfvUC9JyFPCGxTpc0TyyddbfSS0reYe29D8uGzIdbM4zTsIleh3IVvC%2BfYp6eMWwhmAE5JbFSd2xj%2F1Q0Qwe5OToWIEHyED0P9pcBO5dfye8X7oTQn03DD5iJjABjqkAfVdWs6OtmoxpgXmMHdIqfXXsKcdEe%2FhSg26Df8%2FwHcJ4qUHjfUirG8osg1E3ikv8cATzqK%2F%2FEXjG6TXhRhZTTqq937kgHzVR9FIRtL1B%2FeYHOOA1s2Y3wO7n1BYifjPKCLQC9h7NGcNBjQteSTiM5QPyLYhsyYMGlCVd%2Fu4DxZJljP7mOEjxRR6jwPnttlEutu8CutYasdp5j8YQlyQutJHx67S&X-Amz-Signature=92245d216b12fe17468cc8aa05f7041860903c6e35b6174021bc2e9812212099&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7CHKHR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCLfuhlZhV7wsPpf4lPsjis89ct3z9Kdfo4udhgY%2FNj4gIhANZKnF5vfj5%2FShJyX2ZGUyrQjIDY6q%2BcFm4aana1EB3HKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNa99ipI9wzrudWoq3AOCgyz72VHO7Ls8Ufk3HQInjM%2FDtyeVE2ptRYKalsXAnL5z1Hk%2FGIDyBQEvXoGkuqxoviVrPnKF5EwCaxTIhciDDWAUaAFb7St3c7wQKqyrnPL%2BqO%2BH3tMcm1XvRQhHGOfVrrFCK5%2BE9u%2FLF4aKSd464SbwKNCj6N9Gzq6UcLXfDLvfErWEWs10i5xClNs1t1%2BWpyfJnl1Tlkfag%2FDln8EPjqltjrobp8Vg5afpakQCEXx2K2KoWFRvhVAR6WX4xUTZV5Q8eUbcCPkLJQZEqqW0wwk6Nxb2%2FPnj%2BNr%2F%2BSQpFvj%2BKBJodU3ckvqctDG%2FitXJcYR0i%2B3WDvxBWjXORPtS1A0iLSQCk22zmmsNCKI3jHW9grglq0jGJIewLWq7H30Zg2CxEAvmOjPBJ1hemAVQKF4fXI%2BvG4AJ3cQ2ykjUTtSamNDiwWe%2F6KPXekFMBrFmy1yqtQyrvJ1guzabn7GAICQuby%2BKLaWtQj1tB%2BdiFi9JAd8JTPv%2F116AxznXS8znAliwCFfvUC9JyFPCGxTpc0TyyddbfSS0reYe29D8uGzIdbM4zTsIleh3IVvC%2BfYp6eMWwhmAE5JbFSd2xj%2F1Q0Qwe5OToWIEHyED0P9pcBO5dfye8X7oTQn03DD5iJjABjqkAfVdWs6OtmoxpgXmMHdIqfXXsKcdEe%2FhSg26Df8%2FwHcJ4qUHjfUirG8osg1E3ikv8cATzqK%2F%2FEXjG6TXhRhZTTqq937kgHzVR9FIRtL1B%2FeYHOOA1s2Y3wO7n1BYifjPKCLQC9h7NGcNBjQteSTiM5QPyLYhsyYMGlCVd%2Fu4DxZJljP7mOEjxRR6jwPnttlEutu8CutYasdp5j8YQlyQutJHx67S&X-Amz-Signature=6de7af9595d621f0356f2eb01efa2e9e9d8b4348d5159da432c301555168d815&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
