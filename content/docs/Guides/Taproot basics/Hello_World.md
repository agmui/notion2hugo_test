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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EM2WBJQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhf52t33M1ej7SoMbGBePCcSvFdqGiFFwdBmjK1HUYMAiEAoRr0WhhBH582n%2BUITn4vFwfB4jmCY7fqTfQCd2Z7eEwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6BASIRcbIbettW5ircAzJMlQb1daR0JFmHbKdcco1T1u3Ub3arAnNuOgLORkDMnMNircEfzP0z8fqEUI5g9fiItyiBsGIwGUczxNfWkXslJSq3Sa2lLUhEUtLmyDUEeUxRI2kQfV9pMujTPndPsy6Uem6GVE3SO0xIQlVbyInVEhCEZ0FIPZfBgafZeKX5VWWztRCa3GrYf5qJu%2Ftd%2Fx39MwZRpmvM0DWrbgbckql2EMqnAjyjV0TudaAKhI0CXKbq0RY%2FAg3zG2nF3jvFeNjYePFDEFe%2BrK0qjaamkXvuvIG2k8emRvApD6Gb6OiRXvoVp0WEb7tBRKLSM89rUun8mbvH4oB%2BS7g9WxUhCPQDHQcR5lntFE249%2B31ZEPf3OYG%2BaI01K1zGiwyfb9S%2BFw%2BK3o0zlsiRB86kau3HGXNuj4beo%2B6RoswtVK7yZDcaC3RVmxPE7KiuDCQ9IjBH%2BHGeMY5SIn5FlZeZzVjPCiAv%2BPQwsYh8afEuU5LCGjXDRGzYNI67d%2Fm%2Bin93SsifepWmV31AwLkvxdWJTpWQqtWXq23DMZldGtAQdAAV%2BXDYr9ufQ5FpvXSMJZ%2FP6HrgRZz%2FoKuDNrccNYL6eF2azv8J4q%2FFXVecmPnFZtlLzHr%2Bev29U2erRtNHz8%2BMOnOur8GOqUBmzvb0F3WChxghFK8Rva826LXHZ%2Bfy5o1HgXeHUbi4NdrUBZsVwz76tA5VoauknE9tFdyrloVBv0RI5gEUEkWTzg042gxeO%2F%2FNN9h%2FoP6zttOf7piB%2Bz%2BIVMmE8e5Vp%2F9V1IJUhClvfF1vboDkb522MlTrTBTLBgrUqBeOLGjJ6kYWFeEHOWWVBKxR2eNvYPl%2Fl2rYcrdg5uPlwAvcxu3QDv4qnQS&X-Amz-Signature=9557eeded9a6d707704302e829b6691f9b87a0406cfcdd51733300c4d0f93cab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EM2WBJQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhf52t33M1ej7SoMbGBePCcSvFdqGiFFwdBmjK1HUYMAiEAoRr0WhhBH582n%2BUITn4vFwfB4jmCY7fqTfQCd2Z7eEwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6BASIRcbIbettW5ircAzJMlQb1daR0JFmHbKdcco1T1u3Ub3arAnNuOgLORkDMnMNircEfzP0z8fqEUI5g9fiItyiBsGIwGUczxNfWkXslJSq3Sa2lLUhEUtLmyDUEeUxRI2kQfV9pMujTPndPsy6Uem6GVE3SO0xIQlVbyInVEhCEZ0FIPZfBgafZeKX5VWWztRCa3GrYf5qJu%2Ftd%2Fx39MwZRpmvM0DWrbgbckql2EMqnAjyjV0TudaAKhI0CXKbq0RY%2FAg3zG2nF3jvFeNjYePFDEFe%2BrK0qjaamkXvuvIG2k8emRvApD6Gb6OiRXvoVp0WEb7tBRKLSM89rUun8mbvH4oB%2BS7g9WxUhCPQDHQcR5lntFE249%2B31ZEPf3OYG%2BaI01K1zGiwyfb9S%2BFw%2BK3o0zlsiRB86kau3HGXNuj4beo%2B6RoswtVK7yZDcaC3RVmxPE7KiuDCQ9IjBH%2BHGeMY5SIn5FlZeZzVjPCiAv%2BPQwsYh8afEuU5LCGjXDRGzYNI67d%2Fm%2Bin93SsifepWmV31AwLkvxdWJTpWQqtWXq23DMZldGtAQdAAV%2BXDYr9ufQ5FpvXSMJZ%2FP6HrgRZz%2FoKuDNrccNYL6eF2azv8J4q%2FFXVecmPnFZtlLzHr%2Bev29U2erRtNHz8%2BMOnOur8GOqUBmzvb0F3WChxghFK8Rva826LXHZ%2Bfy5o1HgXeHUbi4NdrUBZsVwz76tA5VoauknE9tFdyrloVBv0RI5gEUEkWTzg042gxeO%2F%2FNN9h%2FoP6zttOf7piB%2Bz%2BIVMmE8e5Vp%2F9V1IJUhClvfF1vboDkb522MlTrTBTLBgrUqBeOLGjJ6kYWFeEHOWWVBKxR2eNvYPl%2Fl2rYcrdg5uPlwAvcxu3QDv4qnQS&X-Amz-Signature=c8341443cbd25bd6f2823692f44eb4cc9f6550bb63164ff48d2426038f708bff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
