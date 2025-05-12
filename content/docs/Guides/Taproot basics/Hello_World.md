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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KB3ZWK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEdvmU86Df6mi5oj9s2GUn7Vlc1DpjjseVilhi8uvDTvAiA6i61uvNJg5RIVUX%2FMKfGwxQmHqofVHVUecAG88K8BJyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29btAmFnjALMHKz8KtwDL9Np86EieOjku8%2BIHN%2FJDT2lyMUtdRLNrSmmXU%2BnHfK9TmjcCQpeCRTKQz3m8tB9klfZLHvFWG90HjhmFB2EVpR5i8q5frUALtq%2FfW7bGjt8Rbs5UdiW3nvJZd%2BzDSpYDluHu0VEKKEm7FRGth6zQoE5V7mZa4XmXJoFhf4uGqS1TGtOl%2BV6%2BHZOsGAkXuCIvUZoCvmaTLTVVYtZFUpFCNXk3mItI4%2FXKZjkAhOXNy%2Bokop8GxsqBLqDUev7r4qxGbyvqPmEQEBzdQpQ8HFjrqIxQsMnl0IZd0Yd56vZgKtULqB6B%2Fru0uiXAELgvIYqZEIgkWt6rcY8fahmF2SscrVIaRSqSm%2F6Xtpn%2F4hvHNO5SG82Cfjk1Z%2FTHiIa%2BAOuPl02eFOxzU%2BlFf3WJTgERZ1ix9JFOUY%2F%2F%2BGj3eVYXFcZ5zmKGET2kcjfCiLpRZYHhv%2FgVyJDQkSxtvuUR4LRkF9nseuaT7PKk8rHTKKgKYPp%2B%2BCiprUExI%2FIqkswLbuiG4fFuTcP0sEgDtG7YucC8qnIs6RHFFIeUKmz5xFDJxoyobsPcEg81kaQA3qrd4GvC%2BkCmy%2FOfiyPu7%2FZHw4%2Bbju6nb8rfXR4MMymuv2biyCC4WBJC0NJmzPWWfkwzb2IwQY6pgExfaYqPFZreZLHCielcPH4a5Y66379cj6mrRk7OPbWbTrEIHMPciYVc6C7zdv2kuC3yoNl%2FRqZH1ATSbjflx7yVotlxQe1KLkjWorfQ5ObR6U3xHwkjBhqB%2Bgde4g9JQC6p3ZGqIaT9HVjynPqFQz4uvYNKto0o9N1%2FSHWuTeJQWCMaI5nYdqI3ZwI9MXDodQ3G00Ug3BmmaKvKJzCfV7dVdxDShew&X-Amz-Signature=e2e44be39b444a001df32968dc500ad142f00d2cb6429be348217d1d9ee810cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KB3ZWK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEdvmU86Df6mi5oj9s2GUn7Vlc1DpjjseVilhi8uvDTvAiA6i61uvNJg5RIVUX%2FMKfGwxQmHqofVHVUecAG88K8BJyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29btAmFnjALMHKz8KtwDL9Np86EieOjku8%2BIHN%2FJDT2lyMUtdRLNrSmmXU%2BnHfK9TmjcCQpeCRTKQz3m8tB9klfZLHvFWG90HjhmFB2EVpR5i8q5frUALtq%2FfW7bGjt8Rbs5UdiW3nvJZd%2BzDSpYDluHu0VEKKEm7FRGth6zQoE5V7mZa4XmXJoFhf4uGqS1TGtOl%2BV6%2BHZOsGAkXuCIvUZoCvmaTLTVVYtZFUpFCNXk3mItI4%2FXKZjkAhOXNy%2Bokop8GxsqBLqDUev7r4qxGbyvqPmEQEBzdQpQ8HFjrqIxQsMnl0IZd0Yd56vZgKtULqB6B%2Fru0uiXAELgvIYqZEIgkWt6rcY8fahmF2SscrVIaRSqSm%2F6Xtpn%2F4hvHNO5SG82Cfjk1Z%2FTHiIa%2BAOuPl02eFOxzU%2BlFf3WJTgERZ1ix9JFOUY%2F%2F%2BGj3eVYXFcZ5zmKGET2kcjfCiLpRZYHhv%2FgVyJDQkSxtvuUR4LRkF9nseuaT7PKk8rHTKKgKYPp%2B%2BCiprUExI%2FIqkswLbuiG4fFuTcP0sEgDtG7YucC8qnIs6RHFFIeUKmz5xFDJxoyobsPcEg81kaQA3qrd4GvC%2BkCmy%2FOfiyPu7%2FZHw4%2Bbju6nb8rfXR4MMymuv2biyCC4WBJC0NJmzPWWfkwzb2IwQY6pgExfaYqPFZreZLHCielcPH4a5Y66379cj6mrRk7OPbWbTrEIHMPciYVc6C7zdv2kuC3yoNl%2FRqZH1ATSbjflx7yVotlxQe1KLkjWorfQ5ObR6U3xHwkjBhqB%2Bgde4g9JQC6p3ZGqIaT9HVjynPqFQz4uvYNKto0o9N1%2FSHWuTeJQWCMaI5nYdqI3ZwI9MXDodQ3G00Ug3BmmaKvKJzCfV7dVdxDShew&X-Amz-Signature=ba4331a55f66076f5d2b04c9bd34a9f3bfc8d828eeeaad856cfcc1fcb5c0f590&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
