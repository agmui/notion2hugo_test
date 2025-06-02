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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWHZAD5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDQjrnemDuRH1eRJs8lLjT05k0xJ0ggsVlOJBTGovjjwgIgFR%2BIfoDpfTuD%2FXZeI9WDczGi2WKEwDYG0F6uhhjVERoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOflLZHSuyMlS9MTYCrcA%2F1f4pPHEqxikw7jm4pRL7fXAehbnW42JuoZpwDa6YtnTc3lLTuIF8zf3I4WjERI%2By0GIleooINQp7CXPhO8YgtuTFFj297R2ZoxyRHjDyKGlcBGliNqxVDqGoW973xtRgVKcAoR%2ByRPxIv%2FmQz%2BheUiT9bcqoWBgTlcno9IDb1kmozh8kxhHB8%2FnKto1N8P9tIisCpuvgybNOm2VU6I6ZDRpsUhUsUPYFH6j8A3b5OGGJS7fSihMWOOZ%2B6u8liVxBivrIcRgrkC%2FB%2F8ANEmTd4NqJmFphc9BfvI%2BSLzXDCqh6ItFG0eayO5nDzflyLoNtbDN7ZGM3LDeCPbHU%2FdglHRXXnjWBphzB%2FXHvEX57rhu%2BF1qWEH7geZLKLwcHbtqUXONnK6wzx%2FeTIH6DtTB66pmX9e5T93ebYQbDJ5Ag03XLABxj2Cn4xjht8Aui3gthB%2FSg34DmboeqZbVvnm9jTcH4cSsrds2PjWWiN8PDP5R1BVcO4sx8SzDZrzF0GQJlsbZ%2BQdjei2fP3DwFdOxjQbXxq%2Bc%2FPitGy7ESJZl7cLFQMb9ll0dHhQc1OvpJoabxXP1IWfXJNSMOUseJPQhUxeBshZBKzHCrSK991V4Ldqs3kZKEsVyN0flnCEMNn09cEGOqUBjYneHLNdj64GR0wpqQfGBAyzKAmypa74l9upVF%2BfjMI%2BbXWkiFXf%2F%2FfF51WYCg%2BfrYpK2U2J0H9199ldaVIv98Objr6V1LaWSUKBbTpqNdqLPG2S0pEmuhgm13sVk2Tc9p4gq6vzXirtll52P5AdVBq%2Bid6cH0msPVrpxrRSLSN8owsS%2F%2FalLycBaLJEDdPwlgtj%2BckPT67MlyCVc%2Bb1ksNrvDxr&X-Amz-Signature=f7d4fe733e428cd6cc96514e56c204aea7aebd780fb8f0ad788ecf571973d570&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWHZAD5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDQjrnemDuRH1eRJs8lLjT05k0xJ0ggsVlOJBTGovjjwgIgFR%2BIfoDpfTuD%2FXZeI9WDczGi2WKEwDYG0F6uhhjVERoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOflLZHSuyMlS9MTYCrcA%2F1f4pPHEqxikw7jm4pRL7fXAehbnW42JuoZpwDa6YtnTc3lLTuIF8zf3I4WjERI%2By0GIleooINQp7CXPhO8YgtuTFFj297R2ZoxyRHjDyKGlcBGliNqxVDqGoW973xtRgVKcAoR%2ByRPxIv%2FmQz%2BheUiT9bcqoWBgTlcno9IDb1kmozh8kxhHB8%2FnKto1N8P9tIisCpuvgybNOm2VU6I6ZDRpsUhUsUPYFH6j8A3b5OGGJS7fSihMWOOZ%2B6u8liVxBivrIcRgrkC%2FB%2F8ANEmTd4NqJmFphc9BfvI%2BSLzXDCqh6ItFG0eayO5nDzflyLoNtbDN7ZGM3LDeCPbHU%2FdglHRXXnjWBphzB%2FXHvEX57rhu%2BF1qWEH7geZLKLwcHbtqUXONnK6wzx%2FeTIH6DtTB66pmX9e5T93ebYQbDJ5Ag03XLABxj2Cn4xjht8Aui3gthB%2FSg34DmboeqZbVvnm9jTcH4cSsrds2PjWWiN8PDP5R1BVcO4sx8SzDZrzF0GQJlsbZ%2BQdjei2fP3DwFdOxjQbXxq%2Bc%2FPitGy7ESJZl7cLFQMb9ll0dHhQc1OvpJoabxXP1IWfXJNSMOUseJPQhUxeBshZBKzHCrSK991V4Ldqs3kZKEsVyN0flnCEMNn09cEGOqUBjYneHLNdj64GR0wpqQfGBAyzKAmypa74l9upVF%2BfjMI%2BbXWkiFXf%2F%2FfF51WYCg%2BfrYpK2U2J0H9199ldaVIv98Objr6V1LaWSUKBbTpqNdqLPG2S0pEmuhgm13sVk2Tc9p4gq6vzXirtll52P5AdVBq%2Bid6cH0msPVrpxrRSLSN8owsS%2F%2FalLycBaLJEDdPwlgtj%2BckPT67MlyCVc%2Bb1ksNrvDxr&X-Amz-Signature=bcf6b1a40a052f8a62e2dc1c02e7ba97e5fa70d5a3e817f7b40081f77e111764&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
