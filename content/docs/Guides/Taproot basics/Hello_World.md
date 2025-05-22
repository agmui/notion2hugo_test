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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4FXJDN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzjV8LZ49TuIH6wG7yacyBdOT0fdZdtu%2FlSu8Tnh%2FXEwIhAMGg4oa6nGeZDjg6vorjhysWUz2lAgUso9X8P1k7rasMKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FxHugrR29kmhlvHUq3AOQA7qLcsn1QhCz%2B36U8cqXJAU3w%2BOTN9rdLcxO5M5zy%2FELxUtviBdOy1xZO4mJminMDTF9XzHLluqo%2BJaS8rlG6irKHJNKTdyi1StXncEfeyzJ%2FLdrM3sA%2FMvskfztiiybQCqFmx%2Fzj4J1i7lZUYrtwqb1V%2FQ12bWZKIeiRwN%2BWLsEhilrw%2FdRpIA1%2BRJIFmPl%2BRLvkBWb4WCG36L61Qc6B%2BseFw2Q2wIaHePqKjiZkDKIkpXKDj5cXXJ5juJ9SJEshNHgvWMOoI%2B4JHiHZ7qqSAbja1lWJDmM9%2FUZnA%2B95VpM4kYk1%2Fk1U6g%2BVfB4ofW74si3BreZNKDCs4bH81TEryHgZjZT0YRxEuEQzaoaRjMCg9awt5rIFJHVW4ChgH6XaO%2FO%2FPsMV2DxQoZMSWAI3l1rKfsJVuSwUk22CpWbNKY13b8yXHkvnBfUMZSCkhkUMGNrp2xPLKJBOmRwZYZKjHaBDQJo9TmavI4ngV69xVgshUd2S8CBN9tbqLrJgEi0jOE1vasxMLHoVH6JYr8uQigqj5fabQsAZ2rR87CfqmS2IJsKkDsi6ntUXBA7u1CgdTQAYZO6ue%2BKNnqpAK28ikUpm0vp5AO0jT1BlaHoSto7o8DS3inCcfIPzzCS4bzBBjqkAboePf3n2%2FlMXTLqmNBRHCnT6eb3LxOK4DlgUIdhiKluzbJ7OPS2NtIOMydiVjuBpYnJIWd0jwDvItZVrFHC1%2B2Hspa%2BNhYpBk5w7n5eKfDnNEjX193rWdWgQVtLpkmlJHETSSiGcFXUhX3rlnzNcGq77CHKYt2Ggo%2FUdwPZIShn4dI5LVjhbUjIr5GcnTiJqPUePRiHMPXHvfiMqoIx%2BIjQZpX4&X-Amz-Signature=763491218c64be2c4f0aa4636ec9eacb1d61e1d6f1367d4490cb4b5fcbce02dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4FXJDN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzjV8LZ49TuIH6wG7yacyBdOT0fdZdtu%2FlSu8Tnh%2FXEwIhAMGg4oa6nGeZDjg6vorjhysWUz2lAgUso9X8P1k7rasMKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FxHugrR29kmhlvHUq3AOQA7qLcsn1QhCz%2B36U8cqXJAU3w%2BOTN9rdLcxO5M5zy%2FELxUtviBdOy1xZO4mJminMDTF9XzHLluqo%2BJaS8rlG6irKHJNKTdyi1StXncEfeyzJ%2FLdrM3sA%2FMvskfztiiybQCqFmx%2Fzj4J1i7lZUYrtwqb1V%2FQ12bWZKIeiRwN%2BWLsEhilrw%2FdRpIA1%2BRJIFmPl%2BRLvkBWb4WCG36L61Qc6B%2BseFw2Q2wIaHePqKjiZkDKIkpXKDj5cXXJ5juJ9SJEshNHgvWMOoI%2B4JHiHZ7qqSAbja1lWJDmM9%2FUZnA%2B95VpM4kYk1%2Fk1U6g%2BVfB4ofW74si3BreZNKDCs4bH81TEryHgZjZT0YRxEuEQzaoaRjMCg9awt5rIFJHVW4ChgH6XaO%2FO%2FPsMV2DxQoZMSWAI3l1rKfsJVuSwUk22CpWbNKY13b8yXHkvnBfUMZSCkhkUMGNrp2xPLKJBOmRwZYZKjHaBDQJo9TmavI4ngV69xVgshUd2S8CBN9tbqLrJgEi0jOE1vasxMLHoVH6JYr8uQigqj5fabQsAZ2rR87CfqmS2IJsKkDsi6ntUXBA7u1CgdTQAYZO6ue%2BKNnqpAK28ikUpm0vp5AO0jT1BlaHoSto7o8DS3inCcfIPzzCS4bzBBjqkAboePf3n2%2FlMXTLqmNBRHCnT6eb3LxOK4DlgUIdhiKluzbJ7OPS2NtIOMydiVjuBpYnJIWd0jwDvItZVrFHC1%2B2Hspa%2BNhYpBk5w7n5eKfDnNEjX193rWdWgQVtLpkmlJHETSSiGcFXUhX3rlnzNcGq77CHKYt2Ggo%2FUdwPZIShn4dI5LVjhbUjIr5GcnTiJqPUePRiHMPXHvfiMqoIx%2BIjQZpX4&X-Amz-Signature=26d471460fa8ac9a0a9e68f25157fe26063f749139d31ccffa5ae5a0b3455611&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
