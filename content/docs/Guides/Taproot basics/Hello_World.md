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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY6ALDN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDTAc8wXqWwDlihs%2Ft0QcShsYuno1Zprr3%2B3%2B4EVUuMIAiAN0jsaSjIfr1w9tHy2EyfozesqbUkBz1OUb13julyMkSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDxAIeAQCtqB5WSMKtwDI4F4xPhjhmqnvEkKTzKBg848SUN6OfAGE%2FoIXTGP03KUnbJ20Q3Qehuxa6yfrVRsQjweP5wYU%2B3EDAWN373FqQRiPdhaGrdN%2B%2BlQ%2B7SZs0czLHx6AZA7%2BMgr4iE%2B2mB1TD4wQOmuxjrxqRk59O%2B0SH%2Bojs61yZEyUyYPxl8pPDj01lzFgzSBxjJ8VebPHG1affvhKNXmi%2FX8ygWEudp7lgCEEUz7%2BgGV0hlaDM242xi8CAsJ8FhTwanSaBKk76uIi7XaZH3%2FmZkys%2B87zeKvT8%2BACSHuOWHrHmY56ROxo0YGd%2BAb7OiS788Qbmdhh3%2FDB41RsfcOlKKPqWV8cP2iS%2BL4X0zRMDDJXVAxAUocCORgJqq5YtuazmCBDxoDVlGMM%2FQ9YGlqMFJX%2Bn3cxLM0uWRepA1HX1F336NKXEOxH79babqFymx%2BRHBBWYWtkNfSzNq7gu5em9kKVaj5mkBzXFm3AkroNsnOYxCa0sGVTpvTYyw4vBegz6DTpKUeC3OJuDlQsA%2FOaZzD29FK7D5wCkJlw7fwvjzmwB%2F29o6PmUoZ%2FP0HXekXZ55PdcS5fhkQDkSQul2Ef5pBH302Nnkc2LECOSUkoxsNvRZ8xQvhvcC99bDaw2I1coAs92Uw%2BdqXwwY6pgFlJGUYMDZOwMFQRDfG2GCMn6Ob7riSEttzuYW%2Brs5J%2Fbim8IcjtkEaTu9m6KJPGFrjidqu7w23dsnzcEsW487G5mBgq59AdQSfnzP%2FI2AXXbEKAht%2B0cASyNnJpomcKWZzc6z50lsaPdI0DXwU3yvDGTNpL7NxBoAxS9qG%2FZEwDxLJyKaMFcSQqDxt0JN401NHhBt7HOYxcb6n%2Bp4ARio6CCQdLrYz&X-Amz-Signature=d644a05bc77c4522650363d2e36213a0f1898f91bf7a70e61c18a284befd61c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYY6ALDN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDTAc8wXqWwDlihs%2Ft0QcShsYuno1Zprr3%2B3%2B4EVUuMIAiAN0jsaSjIfr1w9tHy2EyfozesqbUkBz1OUb13julyMkSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDxAIeAQCtqB5WSMKtwDI4F4xPhjhmqnvEkKTzKBg848SUN6OfAGE%2FoIXTGP03KUnbJ20Q3Qehuxa6yfrVRsQjweP5wYU%2B3EDAWN373FqQRiPdhaGrdN%2B%2BlQ%2B7SZs0czLHx6AZA7%2BMgr4iE%2B2mB1TD4wQOmuxjrxqRk59O%2B0SH%2Bojs61yZEyUyYPxl8pPDj01lzFgzSBxjJ8VebPHG1affvhKNXmi%2FX8ygWEudp7lgCEEUz7%2BgGV0hlaDM242xi8CAsJ8FhTwanSaBKk76uIi7XaZH3%2FmZkys%2B87zeKvT8%2BACSHuOWHrHmY56ROxo0YGd%2BAb7OiS788Qbmdhh3%2FDB41RsfcOlKKPqWV8cP2iS%2BL4X0zRMDDJXVAxAUocCORgJqq5YtuazmCBDxoDVlGMM%2FQ9YGlqMFJX%2Bn3cxLM0uWRepA1HX1F336NKXEOxH79babqFymx%2BRHBBWYWtkNfSzNq7gu5em9kKVaj5mkBzXFm3AkroNsnOYxCa0sGVTpvTYyw4vBegz6DTpKUeC3OJuDlQsA%2FOaZzD29FK7D5wCkJlw7fwvjzmwB%2F29o6PmUoZ%2FP0HXekXZ55PdcS5fhkQDkSQul2Ef5pBH302Nnkc2LECOSUkoxsNvRZ8xQvhvcC99bDaw2I1coAs92Uw%2BdqXwwY6pgFlJGUYMDZOwMFQRDfG2GCMn6Ob7riSEttzuYW%2Brs5J%2Fbim8IcjtkEaTu9m6KJPGFrjidqu7w23dsnzcEsW487G5mBgq59AdQSfnzP%2FI2AXXbEKAht%2B0cASyNnJpomcKWZzc6z50lsaPdI0DXwU3yvDGTNpL7NxBoAxS9qG%2FZEwDxLJyKaMFcSQqDxt0JN401NHhBt7HOYxcb6n%2Bp4ARio6CCQdLrYz&X-Amz-Signature=707b8034f2de730bc1ebb601e68fe000d4a6c0943ec5a42c3c4d9583b42f6830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
