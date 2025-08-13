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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH23SVVB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXqJ4ySmxsli5XV%2BYjxUPOjIWvOjimsbs6WhhMy6ArVgIhAPBaYo0PuusCULxblm32tqrzSiBU5RfTE18qaXp4xxApKv8DCCQQABoMNjM3NDIzMTgzODA1IgwLs4R6NQa5Ie9Vmw8q3APZXU4hJ9EI%2BXtY2442pVqA12n4PETPO6h1aX72DoBLkaTNjgnp%2BwHSTcI4RPlI0Iads1peDsIh%2BnUx8qCRB%2BHqNuySl0UsQ%2F%2FVjov6RW10HF0v1t8mfZYspM3CAU%2FmHzgx1LWI4e9lYpL1B5QkcjLMqzp8uJeOClwRFYtMxMT1IBeUV3A88Q6CVQFiUQf9zEopjY3mQ5BRw4IObr1COpklxwf1LJi15fAeMNE1VGWQp2Fwhymp9WE24GwFxcc78HSY2Vwf3vukLO9y%2BQGEjJKAbFSjvG1tIcuuyxEe1VGb0icsXIehw4kqyWUA2%2Fdxj0ikqWkpgrHKUC2THSjjZOQtczV%2FLcCvVyTYr2hcJFgRRr19ggtkGfNolVPdCssK80KSIVOWs22lgxAlxCDNwTqdOgdDsUXtnNuy7AwalGAQV00cmtdVJg9IiJ0ptu6VX0kJx7kwbr69ZzV66SQsQYMDKcjBlmN65ketymI5pjh3gDCtiaEOn8IxCiPhm0xXHFWU2FLdMDy%2BvuPxONHrRy%2BjFlAHLRvR0Qc1KOr%2B3%2Fj2HqixAiUT2onCkSTe6duaeezN8ogopw%2FyvQnAO4DNjAvi%2FTRrmGDomI9h6PEYWv%2Bxq9DT5K7yPUg89KI3bjDrhfDEBjqkAUk44eMpGRGgnaKj8Dfv%2Fmry6cDBan9sgsDljxqLt%2BTca6dBJcO5ZWk7M4Woe4HK8jI2SpPUeJxfrxYxJ1mNtSDZNRXZvCWQbSUN5ayW0Kb5sdhiqLSCQ0L2NGE%2Fib27Agn6WfwZ6%2F4lXqR1omfgTSAXfaAS3%2FWGSY%2Fo6tOTMm7%2BTB0LbpIHyb7Al8Qqp%2Bb2j2058AGbFqLXqrI%2FDsNZ9jocTkKS&X-Amz-Signature=3826a6f0b9531206e8788d8e6b8195113e4e8d89c2b1e371e02858cac107ca87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH23SVVB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXqJ4ySmxsli5XV%2BYjxUPOjIWvOjimsbs6WhhMy6ArVgIhAPBaYo0PuusCULxblm32tqrzSiBU5RfTE18qaXp4xxApKv8DCCQQABoMNjM3NDIzMTgzODA1IgwLs4R6NQa5Ie9Vmw8q3APZXU4hJ9EI%2BXtY2442pVqA12n4PETPO6h1aX72DoBLkaTNjgnp%2BwHSTcI4RPlI0Iads1peDsIh%2BnUx8qCRB%2BHqNuySl0UsQ%2F%2FVjov6RW10HF0v1t8mfZYspM3CAU%2FmHzgx1LWI4e9lYpL1B5QkcjLMqzp8uJeOClwRFYtMxMT1IBeUV3A88Q6CVQFiUQf9zEopjY3mQ5BRw4IObr1COpklxwf1LJi15fAeMNE1VGWQp2Fwhymp9WE24GwFxcc78HSY2Vwf3vukLO9y%2BQGEjJKAbFSjvG1tIcuuyxEe1VGb0icsXIehw4kqyWUA2%2Fdxj0ikqWkpgrHKUC2THSjjZOQtczV%2FLcCvVyTYr2hcJFgRRr19ggtkGfNolVPdCssK80KSIVOWs22lgxAlxCDNwTqdOgdDsUXtnNuy7AwalGAQV00cmtdVJg9IiJ0ptu6VX0kJx7kwbr69ZzV66SQsQYMDKcjBlmN65ketymI5pjh3gDCtiaEOn8IxCiPhm0xXHFWU2FLdMDy%2BvuPxONHrRy%2BjFlAHLRvR0Qc1KOr%2B3%2Fj2HqixAiUT2onCkSTe6duaeezN8ogopw%2FyvQnAO4DNjAvi%2FTRrmGDomI9h6PEYWv%2Bxq9DT5K7yPUg89KI3bjDrhfDEBjqkAUk44eMpGRGgnaKj8Dfv%2Fmry6cDBan9sgsDljxqLt%2BTca6dBJcO5ZWk7M4Woe4HK8jI2SpPUeJxfrxYxJ1mNtSDZNRXZvCWQbSUN5ayW0Kb5sdhiqLSCQ0L2NGE%2Fib27Agn6WfwZ6%2F4lXqR1omfgTSAXfaAS3%2FWGSY%2Fo6tOTMm7%2BTB0LbpIHyb7Al8Qqp%2Bb2j2058AGbFqLXqrI%2FDsNZ9jocTkKS&X-Amz-Signature=5629e1b8c0895c870e975980d2e3c49ae82067d306c660980af2d16510288ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
