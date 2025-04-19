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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63ZTJ7M%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx3rUifDwBV53uBlwR90wN6LAb6ACwwpbGHIOc%2BUD3BAIhAL%2B3L2Kfx6d68WLD8lhu9EfDu9n83uZuyUsE%2FDEwdaFPKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfqqDFa%2FP2Om16SEEq3AMbPKUAQ3sROKsMK7JhGFvgCCubBWw2Ph7Upd%2Fc0zRVoVyBy63LPWOgBYJCLtJJ659rL3IVPXbmchuRiQeh73UeIFdIZc3jL8m3OPLxYPz0iVapDJWcD751TnJyKfo3YlXR5XP5cBPUFKGxxqIIdm%2F4HiEQaUOyw2%2FTKFf%2FUJJAMl7VvuUDvf98AQxACCcCLvDC20v9uh2QJZ7XDeMigVBTYnV%2BXadn6TQp%2BHP18sW%2BZtbGsJdz%2Fxki381IYJrIqB52gin%2FzU9IbApDKGcj5B7VHFBjSnmIMrHqwDc6s%2FcW1DR6PgTJZBeSFrpGYrLhyZnU9LrKj1QVKS99K8ny4r9ry0Xy6rodKMAxrObHlH712X0ejhWERXdUUnyEPh%2BWYvpc16a51ON0rqep2yacnyIN2lkNmLk3%2BG%2By86tDzN%2FE1QEk%2FJDLOuLRtjD1tWFmaR9XMOayfdjijLk9B9xHi9IUUR1SG4dGMHGm1hIb6jphq2HXGwz7%2ByYHoFhOAmP1EAZRXOtrA0jIrfxzlWir59ELJ%2BJupa1auYp0yXb%2FnTIQCKOY8LOxYFHjcViSSk%2BYioHYqe1afQ0TLVlD2nd8lXwlG5Qq%2FP93Lq%2BuiF5R0aVBQmcBQP4i8YuImRdjhjCpl47ABjqkAZqU%2BPwfy8uPxubuLRDgvB%2FXjeyX61Rl4hftL8CnrGyhtnG0Y1uIMmVHnUerPJHxjq%2FwVayjgMVDi8yCpN%2BPVABt%2BGOtA1dtxXQXiXDkCc7g0Y00ENoEyntezCtcqHxiRfrbtJlnPze9myZ%2Fss7OqAeOR%2BW3SybC%2B1M8kBFwtcyMrH%2ByxK4Yiqh%2FGa%2FBawE9dfwtCxCz1l4egXKBYskLWFPUyR35&X-Amz-Signature=90a62ee22553ba26cd2a64e4f7f11488754c69b69767af7533567ea98f144c72&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63ZTJ7M%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx3rUifDwBV53uBlwR90wN6LAb6ACwwpbGHIOc%2BUD3BAIhAL%2B3L2Kfx6d68WLD8lhu9EfDu9n83uZuyUsE%2FDEwdaFPKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfqqDFa%2FP2Om16SEEq3AMbPKUAQ3sROKsMK7JhGFvgCCubBWw2Ph7Upd%2Fc0zRVoVyBy63LPWOgBYJCLtJJ659rL3IVPXbmchuRiQeh73UeIFdIZc3jL8m3OPLxYPz0iVapDJWcD751TnJyKfo3YlXR5XP5cBPUFKGxxqIIdm%2F4HiEQaUOyw2%2FTKFf%2FUJJAMl7VvuUDvf98AQxACCcCLvDC20v9uh2QJZ7XDeMigVBTYnV%2BXadn6TQp%2BHP18sW%2BZtbGsJdz%2Fxki381IYJrIqB52gin%2FzU9IbApDKGcj5B7VHFBjSnmIMrHqwDc6s%2FcW1DR6PgTJZBeSFrpGYrLhyZnU9LrKj1QVKS99K8ny4r9ry0Xy6rodKMAxrObHlH712X0ejhWERXdUUnyEPh%2BWYvpc16a51ON0rqep2yacnyIN2lkNmLk3%2BG%2By86tDzN%2FE1QEk%2FJDLOuLRtjD1tWFmaR9XMOayfdjijLk9B9xHi9IUUR1SG4dGMHGm1hIb6jphq2HXGwz7%2ByYHoFhOAmP1EAZRXOtrA0jIrfxzlWir59ELJ%2BJupa1auYp0yXb%2FnTIQCKOY8LOxYFHjcViSSk%2BYioHYqe1afQ0TLVlD2nd8lXwlG5Qq%2FP93Lq%2BuiF5R0aVBQmcBQP4i8YuImRdjhjCpl47ABjqkAZqU%2BPwfy8uPxubuLRDgvB%2FXjeyX61Rl4hftL8CnrGyhtnG0Y1uIMmVHnUerPJHxjq%2FwVayjgMVDi8yCpN%2BPVABt%2BGOtA1dtxXQXiXDkCc7g0Y00ENoEyntezCtcqHxiRfrbtJlnPze9myZ%2Fss7OqAeOR%2BW3SybC%2B1M8kBFwtcyMrH%2ByxK4Yiqh%2FGa%2FBawE9dfwtCxCz1l4egXKBYskLWFPUyR35&X-Amz-Signature=63cd1610bdfc2044ac5f2b4e111ef98a1f95b9224e5e29f226535298589ba59c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
