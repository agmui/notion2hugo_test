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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JATJ4L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC7IgAz3DytWcnRSkL0ZgqFqpj1uudvccYLrNVZ66uaMwIgaVq97F84T3MnWrkeialk0hsi1yn1ud9H3zYwhIvRS5sqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx1%2BypeI%2Fw%2BGq8bQyrcA0odEnvs%2B%2F00k03UmkfUlcsXsn1rwl8%2BL7RHCy7rxDcNpVLEqzQBSfIiF8Ip%2FjgbtDgDC6bzkVQgHCXv9%2BZ%2B47rZXylKkIOFQokWWu6HDfUL%2BK2ElDpYDOVCPHo%2FLR2NChUZFnnlFQUv5C8fnQDBENzPgoSVmYbNG0ZxOx8gnbExhurbNEnV9mEPeThYkOAtxLW42mbi8D3mPrVVoPv2J7kt5mAmB3VN4Zd7kp6YoE8B6j7uwm1BeS%2FdJQyDNpmMUXjss0qU92RLTqc13vTCikl3OPZtdbJxEVBLGFhKpKUaDGLd%2B%2F8Wq6wgt%2BRkkrYO%2Fth6%2FSQl5uYv1pwcF1C6tRmMImTYNmYuLDZsR4a3M79w39nTf0V8gZ5aMh%2B91YHs1s0MJSskcq0uOmd4bXVqXf3%2BJJrCYglbNGCatRqmWLIS3usZj5UtIL%2BY8UHE1us7NI3I19jY4JIz58IqE9mu9yvT3oTsGAqCykNN5wOxzQdRhPFvKdc%2Fph9gfoAVnHwiBd%2FSGTWXu6tH6dkVVhiSoZ09kzpue4kD0ox3yQMC7p8KDzxuO8UGZWyRaMJmdqAPWmce5TygBR7frTam9SZv2VeyDuHw4qMLi68P%2BUwpEgVdx07WuA7L9mU5%2FN0mMLLalcAGOqUBsCOI7qtA%2FGNVhFlN0cb%2F10LjAC8BY4XJ0k%2FJ2DZWHXhYFJkPXboW6lZbVNfKHhOqVPcpHfku4GGt2r5SWCe5mpHecPv5OJF6iDpPBZwP8eYo49cIun6ctEZ6wfQgFD1ph5ifyy%2B%2FUNJHJqIn2WSo%2BQ%2BmCXaW5BdKtdqNPzYHnXPgvm24m6v%2BQ%2BRpKH7WSxjpyAvOOJJcl3MKs83MaRshXXsAqU7s&X-Amz-Signature=d402a041016d59f924dded1cec338fd4e1533a36235b480b65b221c3427ae54a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JATJ4L%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC7IgAz3DytWcnRSkL0ZgqFqpj1uudvccYLrNVZ66uaMwIgaVq97F84T3MnWrkeialk0hsi1yn1ud9H3zYwhIvRS5sqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx1%2BypeI%2Fw%2BGq8bQyrcA0odEnvs%2B%2F00k03UmkfUlcsXsn1rwl8%2BL7RHCy7rxDcNpVLEqzQBSfIiF8Ip%2FjgbtDgDC6bzkVQgHCXv9%2BZ%2B47rZXylKkIOFQokWWu6HDfUL%2BK2ElDpYDOVCPHo%2FLR2NChUZFnnlFQUv5C8fnQDBENzPgoSVmYbNG0ZxOx8gnbExhurbNEnV9mEPeThYkOAtxLW42mbi8D3mPrVVoPv2J7kt5mAmB3VN4Zd7kp6YoE8B6j7uwm1BeS%2FdJQyDNpmMUXjss0qU92RLTqc13vTCikl3OPZtdbJxEVBLGFhKpKUaDGLd%2B%2F8Wq6wgt%2BRkkrYO%2Fth6%2FSQl5uYv1pwcF1C6tRmMImTYNmYuLDZsR4a3M79w39nTf0V8gZ5aMh%2B91YHs1s0MJSskcq0uOmd4bXVqXf3%2BJJrCYglbNGCatRqmWLIS3usZj5UtIL%2BY8UHE1us7NI3I19jY4JIz58IqE9mu9yvT3oTsGAqCykNN5wOxzQdRhPFvKdc%2Fph9gfoAVnHwiBd%2FSGTWXu6tH6dkVVhiSoZ09kzpue4kD0ox3yQMC7p8KDzxuO8UGZWyRaMJmdqAPWmce5TygBR7frTam9SZv2VeyDuHw4qMLi68P%2BUwpEgVdx07WuA7L9mU5%2FN0mMLLalcAGOqUBsCOI7qtA%2FGNVhFlN0cb%2F10LjAC8BY4XJ0k%2FJ2DZWHXhYFJkPXboW6lZbVNfKHhOqVPcpHfku4GGt2r5SWCe5mpHecPv5OJF6iDpPBZwP8eYo49cIun6ctEZ6wfQgFD1ph5ifyy%2B%2FUNJHJqIn2WSo%2BQ%2BmCXaW5BdKtdqNPzYHnXPgvm24m6v%2BQ%2BRpKH7WSxjpyAvOOJJcl3MKs83MaRshXXsAqU7s&X-Amz-Signature=fd7eb917186d4037d1786e5ee172a26b9f2f877ce30ee587b764ac0d2e323e63&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
