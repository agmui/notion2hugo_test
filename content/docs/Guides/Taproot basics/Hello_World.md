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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZR6QWXG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyowJbkca%2FLbZXpIzjurIsqS0Gau58LI%2Fb3vR3H%2FfGhQIhAIUbZAEnPSUmchMWsnjGOGGA5C3BcOLHTf%2FTBGja%2BU7XKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzv1krL%2BvVFJFy0Wkq3APSjSc0qq%2BPaRGRlxB2UwrK5AqR1b3FFoLAHf6BwmlaNnJqGJlDeHtnDJvAGPPU5A5u9F8aDzQLw9FZSg2iTHIlEWIajT6mhvPhtLEqD26VSOpBwNSxStJImMTm39vZM4NPeCuoQc44R4r3TuZYPavM4L0RPuct6Zso9btbltd%2BYD%2BC5NGcLo%2F2Mj57997gd3vlXZHB%2FQl37ka%2FvOkb7%2B405bpcawgnZ4pUoVUy8oMUtFnP8b9%2BRQU%2F%2FdeBDfu0HjFJyhkytFsoHzu%2B0zE0CG6FqnlZM73VhZY05BXOtfl7lZCLfZp3CzUfrjjyjV6HcXcZ4jrZ89QvgyIg1WNsALLZnBoQMtyZhprY4RToOHskYllZZHvKhlpZ1TOXA9ycyQbC%2Fu9B%2F6G96hSZapDE2awR8ORv6ugBO%2Fi8hVRFAXclLbJnmkNzatZQMvAwf%2B2%2BfmoB2SpTJWFq0YyaN0keH%2BRRNx8NvQr%2FphtTr0cXLsAONO0vqh%2FPuCoDJ0iqd863DhlgEcvU6sePHSJ6OuAt0ATRPy%2FtxWB8zrKzUxrfTueJ8pqHq56%2FVMYMppjsNAQvH4Q%2BrUJXGEzfzw3Gf0Qh%2FtH11UnltXaE3MzhOc93etfj2TED2SkMHnN1SIUpwDCZuby%2FBjqkAa0%2FJpWky4ZJyy00sTI2DELylncjX9VOW3jf9w0AhBUIZDdQ6opCR0B0WrXMgrZ83KvtUZIcT8t3r2nTD4bw6%2BBtGVa1Lf1FuzWKTwZMImwwhkxlxxRfPlfF%2BwbJrlNQKz9JqUFpfElWsVpWclvjbpJqFrXyiG5o5ByL2o2Njzd7KFJb0IYN6r3zQpqjEu1KilmCwMmUxqAerDhMaXP3kn3A0nmZ&X-Amz-Signature=b7c615d5a2b657fefaa3586183cf40e5ef08f237c079fa651b1a1f25fb173b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZR6QWXG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyowJbkca%2FLbZXpIzjurIsqS0Gau58LI%2Fb3vR3H%2FfGhQIhAIUbZAEnPSUmchMWsnjGOGGA5C3BcOLHTf%2FTBGja%2BU7XKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzv1krL%2BvVFJFy0Wkq3APSjSc0qq%2BPaRGRlxB2UwrK5AqR1b3FFoLAHf6BwmlaNnJqGJlDeHtnDJvAGPPU5A5u9F8aDzQLw9FZSg2iTHIlEWIajT6mhvPhtLEqD26VSOpBwNSxStJImMTm39vZM4NPeCuoQc44R4r3TuZYPavM4L0RPuct6Zso9btbltd%2BYD%2BC5NGcLo%2F2Mj57997gd3vlXZHB%2FQl37ka%2FvOkb7%2B405bpcawgnZ4pUoVUy8oMUtFnP8b9%2BRQU%2F%2FdeBDfu0HjFJyhkytFsoHzu%2B0zE0CG6FqnlZM73VhZY05BXOtfl7lZCLfZp3CzUfrjjyjV6HcXcZ4jrZ89QvgyIg1WNsALLZnBoQMtyZhprY4RToOHskYllZZHvKhlpZ1TOXA9ycyQbC%2Fu9B%2F6G96hSZapDE2awR8ORv6ugBO%2Fi8hVRFAXclLbJnmkNzatZQMvAwf%2B2%2BfmoB2SpTJWFq0YyaN0keH%2BRRNx8NvQr%2FphtTr0cXLsAONO0vqh%2FPuCoDJ0iqd863DhlgEcvU6sePHSJ6OuAt0ATRPy%2FtxWB8zrKzUxrfTueJ8pqHq56%2FVMYMppjsNAQvH4Q%2BrUJXGEzfzw3Gf0Qh%2FtH11UnltXaE3MzhOc93etfj2TED2SkMHnN1SIUpwDCZuby%2FBjqkAa0%2FJpWky4ZJyy00sTI2DELylncjX9VOW3jf9w0AhBUIZDdQ6opCR0B0WrXMgrZ83KvtUZIcT8t3r2nTD4bw6%2BBtGVa1Lf1FuzWKTwZMImwwhkxlxxRfPlfF%2BwbJrlNQKz9JqUFpfElWsVpWclvjbpJqFrXyiG5o5ByL2o2Njzd7KFJb0IYN6r3zQpqjEu1KilmCwMmUxqAerDhMaXP3kn3A0nmZ&X-Amz-Signature=0355ac400685d324415495409c6464318ab6f39427cf07673fefdc4bfd46ff9b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
