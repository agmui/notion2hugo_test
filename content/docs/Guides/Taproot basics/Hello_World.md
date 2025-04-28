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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS4YDRX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpz6wTuQ23oEkb0DxC7fmuyHVFZAOLD0e9KQDIESONAIhALMRXBzbOB0dJAe2AqngctMNhy0nWOivfPhKioGZA8UMKv8DCGoQABoMNjM3NDIzMTgzODA1Igyr1mTjdPVcAObEdtMq3ANWtVZuETQY4Ipesv9V7C8fH1IHh4o0YgHJG4GRfVcgbaGbMJWV6znTAVPrBOZdKsXz4GBEJ4qoPbGWXMFJkYry72AMDm0jODi2O4s6yhobYlsByB5%2BNztnUppJmte4JsgUdvJSnl7EL7YuYkPytjMtQJPLd0nkGjA21S5lgCGQfTnpHs9hzzp74qY6e2CoF2jl8YgJKHT%2F9FXeVSEV4hzKAMBvOKviPFQzOqd%2BqH2wIRe%2BGwLHaojeC%2BUMb2zIwDCSp3%2Bqt8uRGYvY2QkquMDoac0wVM9X9zErVL84zsuQmbWYaWWobxv2%2FzX3Jl%2Fax8m8FgG7CfGnqMRBkKxwbo0BFQGgMhAV%2Ffp1YfJzwaC50Bb8EiIAQQ7qDJMrRR3kni%2BzkmczMjvZQ1Lhl4Ceutc%2B34Z9n9rXEIynNUfk19H0NJcroz94%2FoPwZ9od0f%2BHhSYzVwPnpjXUhmb0YqDQ8CaaulJHlSMIfnQxvpZBcHxn%2F33Wfa2xAnT8R%2Bo4TH2Sl7uvBhR2rRBsuC5jdh7YpiLUc9EdH6t122SZpHj0Z%2FXQT5eFfyexMf2iate7%2BVZ5M%2F7ebjiAoOPbWGrNwj1WYT6cTfRw%2BznGNV0qFeST%2Fzi8dahBFHy%2FbwaG%2FUSYdDCKo7vABjqkAYeTTKcmtjY5cRF%2BXjmQWFuKT5vZ1m%2BnCrdQ56Ryj1Fprbw%2BmipOUjgk%2BR3xvgmOjdi%2FOBy3N%2FjWYJMQBnjV5a%2B4yUonDtU3WUyyR556%2Fkk4zeFsX76o7MUtP17CqE84fxWWSOwTI43JU6Cjyv2TKgcwuSgqNUfdXuuy43uunhKuYjeFxgaaf%2BS%2FajwdXc3VoGOYRf15tHhHHbqpXdk5d%2FppQjYW&X-Amz-Signature=682688f403f3dc2d2ac01597be9656e1ad82b959d483fc84cc1e8b59a705f6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS4YDRX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpz6wTuQ23oEkb0DxC7fmuyHVFZAOLD0e9KQDIESONAIhALMRXBzbOB0dJAe2AqngctMNhy0nWOivfPhKioGZA8UMKv8DCGoQABoMNjM3NDIzMTgzODA1Igyr1mTjdPVcAObEdtMq3ANWtVZuETQY4Ipesv9V7C8fH1IHh4o0YgHJG4GRfVcgbaGbMJWV6znTAVPrBOZdKsXz4GBEJ4qoPbGWXMFJkYry72AMDm0jODi2O4s6yhobYlsByB5%2BNztnUppJmte4JsgUdvJSnl7EL7YuYkPytjMtQJPLd0nkGjA21S5lgCGQfTnpHs9hzzp74qY6e2CoF2jl8YgJKHT%2F9FXeVSEV4hzKAMBvOKviPFQzOqd%2BqH2wIRe%2BGwLHaojeC%2BUMb2zIwDCSp3%2Bqt8uRGYvY2QkquMDoac0wVM9X9zErVL84zsuQmbWYaWWobxv2%2FzX3Jl%2Fax8m8FgG7CfGnqMRBkKxwbo0BFQGgMhAV%2Ffp1YfJzwaC50Bb8EiIAQQ7qDJMrRR3kni%2BzkmczMjvZQ1Lhl4Ceutc%2B34Z9n9rXEIynNUfk19H0NJcroz94%2FoPwZ9od0f%2BHhSYzVwPnpjXUhmb0YqDQ8CaaulJHlSMIfnQxvpZBcHxn%2F33Wfa2xAnT8R%2Bo4TH2Sl7uvBhR2rRBsuC5jdh7YpiLUc9EdH6t122SZpHj0Z%2FXQT5eFfyexMf2iate7%2BVZ5M%2F7ebjiAoOPbWGrNwj1WYT6cTfRw%2BznGNV0qFeST%2Fzi8dahBFHy%2FbwaG%2FUSYdDCKo7vABjqkAYeTTKcmtjY5cRF%2BXjmQWFuKT5vZ1m%2BnCrdQ56Ryj1Fprbw%2BmipOUjgk%2BR3xvgmOjdi%2FOBy3N%2FjWYJMQBnjV5a%2B4yUonDtU3WUyyR556%2Fkk4zeFsX76o7MUtP17CqE84fxWWSOwTI43JU6Cjyv2TKgcwuSgqNUfdXuuy43uunhKuYjeFxgaaf%2BS%2FajwdXc3VoGOYRf15tHhHHbqpXdk5d%2FppQjYW&X-Amz-Signature=2326c796c7eb42ca576a773b23210f50892c5862443a65dec0ae13fedd885b13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
