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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YN2ENJH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBdOn4zihrbVW9P40I22fhgxqMP0Q7nTwngEZK2gameAiEAijuqMcAp50hTZv6iAdsnMZM8pSG0G0j2q71OPwPZLgQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTs8uCzbW4NN%2FXUhCrcA%2BKFoFAarliF%2Fw31svnDq%2FGtjrdYqllrIoCfu%2Ft6KjoDQ56DWaIA5JSixF%2BEEfbtwG78bB4m%2FP%2F6C89xI%2FtYR4sTCQJCYSXVyRXGZew8XaB68kGrlGZ5gxEen0w%2FLDLaSDe4gz2iBIjSmDi0wzyB847hT0kWY8Bz2ga%2F%2FsaZq8IUa%2FWRrikAWTG87ZlkCfFtM7QWZXTMc%2FKf6RSnLJlqFOsQAU9zENhbAjkQ5nmWGOyU9AbvVwRr7v8qTG2OLO9mswHJ5BVS5wEjD88jxtvzLZJVDP0z8BGB3rQ1D%2FyWJeDSrQmUI8HpM72xaQXGNkOpsx0eciuj9kNSnRyOvdIViEovKlEZjHtnP2fSpc7vV63MOZ1xaXGoXABfoRe16TT9IEXisI%2B%2Br5Q1sOg4IGDl4OucODh%2BBxWxREtcoGly34GlSFhfto1dXnqtMTyEokXoLUXt6rV6vOeZjg9ZjF214O1tkcybN2amA7SLj8%2F3Ek0l5jF95EkWREeFt8AfWbs0%2FSMwJ2pcq24zzR5DBbf4AbQNcS2xo%2FsTY4maO6AeUg8DgrNfjRh8h6qaNDkcSuD40uOUVtLT%2FhiBXIK6iGWsA5ClNjD3kbq13STfNa632ut7tA6Qs0w%2BUJWhNMkyMMK0ssEGOqUByk54MLKIUja6AVVXBiG36q0LzfAGdkdG0HrMf1sC4xb%2BHOeRuM4mI8oIgGCnZN9MBuxt7wTWPOvg4U%2Bt%2FFZXNwCc%2BdL0fU6QqVEZw3BzC18uQSZl5e1i6z6YPwgfWewJ284NtTEQCFTTCnRvAuSv6PqhBt8zxsBP4qni36XFzieP%2F6t%2BD52U%2F1TUR9SQbLMhG6VmPucRm846IUIcMH19CYyVZXq4&X-Amz-Signature=85cd8b80cc0757e6fcc1d2a34fe6fe68e1540f269445fbafcd8258584a31f470&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YN2ENJH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBdOn4zihrbVW9P40I22fhgxqMP0Q7nTwngEZK2gameAiEAijuqMcAp50hTZv6iAdsnMZM8pSG0G0j2q71OPwPZLgQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTs8uCzbW4NN%2FXUhCrcA%2BKFoFAarliF%2Fw31svnDq%2FGtjrdYqllrIoCfu%2Ft6KjoDQ56DWaIA5JSixF%2BEEfbtwG78bB4m%2FP%2F6C89xI%2FtYR4sTCQJCYSXVyRXGZew8XaB68kGrlGZ5gxEen0w%2FLDLaSDe4gz2iBIjSmDi0wzyB847hT0kWY8Bz2ga%2F%2FsaZq8IUa%2FWRrikAWTG87ZlkCfFtM7QWZXTMc%2FKf6RSnLJlqFOsQAU9zENhbAjkQ5nmWGOyU9AbvVwRr7v8qTG2OLO9mswHJ5BVS5wEjD88jxtvzLZJVDP0z8BGB3rQ1D%2FyWJeDSrQmUI8HpM72xaQXGNkOpsx0eciuj9kNSnRyOvdIViEovKlEZjHtnP2fSpc7vV63MOZ1xaXGoXABfoRe16TT9IEXisI%2B%2Br5Q1sOg4IGDl4OucODh%2BBxWxREtcoGly34GlSFhfto1dXnqtMTyEokXoLUXt6rV6vOeZjg9ZjF214O1tkcybN2amA7SLj8%2F3Ek0l5jF95EkWREeFt8AfWbs0%2FSMwJ2pcq24zzR5DBbf4AbQNcS2xo%2FsTY4maO6AeUg8DgrNfjRh8h6qaNDkcSuD40uOUVtLT%2FhiBXIK6iGWsA5ClNjD3kbq13STfNa632ut7tA6Qs0w%2BUJWhNMkyMMK0ssEGOqUByk54MLKIUja6AVVXBiG36q0LzfAGdkdG0HrMf1sC4xb%2BHOeRuM4mI8oIgGCnZN9MBuxt7wTWPOvg4U%2Bt%2FFZXNwCc%2BdL0fU6QqVEZw3BzC18uQSZl5e1i6z6YPwgfWewJ284NtTEQCFTTCnRvAuSv6PqhBt8zxsBP4qni36XFzieP%2F6t%2BD52U%2F1TUR9SQbLMhG6VmPucRm846IUIcMH19CYyVZXq4&X-Amz-Signature=c476f0fdee8fd11332586c0a54076656a86d090fea87d1d68a25e990329cfde6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
