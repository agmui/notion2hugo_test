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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAZB2OP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0qbsdezYB5fGRrcvyxvr%2F4vqo8WBwuyIUJ1eYqPWfZwIhAJfP0Q%2FQF0GrCEQ%2BgP%2FJfLdb%2FGJ90zIABlVwS6iuA%2BioKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJsze4t3Q3zDQuTBUq3AOf6V6uJVEvCp1wyoN7sNUhwTmXnSytpb5fmE3XuITGp708ePI6joMDe%2BQLS0yq%2FFas3%2BUilJJpPUJUAS25wc%2FxbcuGkzFNnJ1dQnsyki%2BzugzvNpA%2B1Q%2BWF79yyf9r9Dk0PNJa%2FU%2BpFqBX03ICfkGuVUpE8wvbdNeJIRWXC1Ydv%2B0SjzwnY2vXhoHx4ozRgd%2BGoeZptpej7BpVThyE3dvn5KyKgATYwYhpZvq7LzMcHq73JQJhHWfhMnpmYVegGWBo11hgOypwBWhvPBBhEklHRpLL5XVdX%2Fd3s%2FO1eU1FyHN%2B%2BrZZb3Z6hloYySCvas7IvCQVZ9gDo1TmJL2fPPM99qTY%2Fs%2FxgigqHnH6CNXqa%2BMVS4ybfIxhECzFFpUZRHuQNusM8x8QgstF%2Frf4PK1TCLGlo1rpQuxWPf3z4otdIF%2FkkBMdcjemF65N8EKQB575%2BkKbiqNB60Vsls%2F6CegCb2q5Evu5NYmFC20yXA6ansr%2BlUe2UwZ8uW1MZqxS0o3rBwSKDKVG3QwUFqCRF0s9%2FTiQ8XxxO8WWMU0QD7CGKTx76aP3buY0dm1qL2V6c%2BcvaVZIgNxxDShoYt7pUu0HHVZq1djUYyyJnBmq5gKuBug%2BkqyYgrRJNqcmmTDE5Ku9BjqkARyu6P7ft8FiVJXj1d9nr7kFi1h%2FbbT7As14At5MmGLUQBmDZvdOvH%2F8jO7vzLG7P7U7OlWiMhYRHglwSvYv5B8%2FWpJc%2BG9r32aNyV3KT2xHI%2FmsI6IUoKEwNT6GyLp36Esb0%2BJO%2F02D%2BI023aqL5nS0KUtwPfkm8moFmrLCy4OtSHk3MnQwqZGwAPVcnSfYYQUwmimWZQMtZOT64oMcFNRxbSOm&X-Amz-Signature=dfe64df04ac834512831da1d7b8221b19124caa65352793577cc7ef5f2d71829&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAZB2OP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0qbsdezYB5fGRrcvyxvr%2F4vqo8WBwuyIUJ1eYqPWfZwIhAJfP0Q%2FQF0GrCEQ%2BgP%2FJfLdb%2FGJ90zIABlVwS6iuA%2BioKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJsze4t3Q3zDQuTBUq3AOf6V6uJVEvCp1wyoN7sNUhwTmXnSytpb5fmE3XuITGp708ePI6joMDe%2BQLS0yq%2FFas3%2BUilJJpPUJUAS25wc%2FxbcuGkzFNnJ1dQnsyki%2BzugzvNpA%2B1Q%2BWF79yyf9r9Dk0PNJa%2FU%2BpFqBX03ICfkGuVUpE8wvbdNeJIRWXC1Ydv%2B0SjzwnY2vXhoHx4ozRgd%2BGoeZptpej7BpVThyE3dvn5KyKgATYwYhpZvq7LzMcHq73JQJhHWfhMnpmYVegGWBo11hgOypwBWhvPBBhEklHRpLL5XVdX%2Fd3s%2FO1eU1FyHN%2B%2BrZZb3Z6hloYySCvas7IvCQVZ9gDo1TmJL2fPPM99qTY%2Fs%2FxgigqHnH6CNXqa%2BMVS4ybfIxhECzFFpUZRHuQNusM8x8QgstF%2Frf4PK1TCLGlo1rpQuxWPf3z4otdIF%2FkkBMdcjemF65N8EKQB575%2BkKbiqNB60Vsls%2F6CegCb2q5Evu5NYmFC20yXA6ansr%2BlUe2UwZ8uW1MZqxS0o3rBwSKDKVG3QwUFqCRF0s9%2FTiQ8XxxO8WWMU0QD7CGKTx76aP3buY0dm1qL2V6c%2BcvaVZIgNxxDShoYt7pUu0HHVZq1djUYyyJnBmq5gKuBug%2BkqyYgrRJNqcmmTDE5Ku9BjqkARyu6P7ft8FiVJXj1d9nr7kFi1h%2FbbT7As14At5MmGLUQBmDZvdOvH%2F8jO7vzLG7P7U7OlWiMhYRHglwSvYv5B8%2FWpJc%2BG9r32aNyV3KT2xHI%2FmsI6IUoKEwNT6GyLp36Esb0%2BJO%2F02D%2BI023aqL5nS0KUtwPfkm8moFmrLCy4OtSHk3MnQwqZGwAPVcnSfYYQUwmimWZQMtZOT64oMcFNRxbSOm&X-Amz-Signature=748b2b985b903652b22ff64b9b93fbbe4a6e81667f5a63afb893bc4831627e25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
