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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUAI7FZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD62tJGnT6q2SwEf3KOuOvguamCQ3aseUF%2FQc50rM88eAIhAObh4XHLC2FjKSmVV5JTYov3cmKCOeE%2BK1m4hrgtwxArKv8DCHYQABoMNjM3NDIzMTgzODA1Igw7gQAmZRSr9R%2FEg3Mq3AMQXRnn9JxQRyhGN2WMJZe8TO%2B%2FwV0DX2i%2BSt6Fq9Y6Ve%2FvSinHmHBt6Re1wynGghWtLjrELhZr3t8Bzz1zY%2FdsaZnH4l9rbKVGfZ99Su7V%2BVdZgSfEu0W%2BpnS6SDcNgVbGbKTdbw5M9xxxQoobkkl%2FXwfwIkXMPLU7GCurfEptJ1IszI%2F%2F3hjo%2F2cnyZaXbReV4jP8MEirBV1yPk5iCwcUJ%2BoFzU8%2F9HKddxHaYHEnQwzWM01pw8ed5OjKl%2Fnu9eCR8GgxmtIqaGXzD4%2BDPqYTgSmlL%2BKR1yfv0alS1hLpv906%2BDVgbhxaawaLkfQQWwUKwn59iMHW8LQFyPXqlj0%2FQIxueIMVvmKGROOkkadba%2Fd46yOUBAjGFPHnix%2Fonkade2ooMKPDXa6D8jqOXgkE2KlQ%2BB%2BoZcdO%2FSoc2FxI2JqPB0mXcM1w%2Fuqv%2FN68%2Ft9l%2Ft82ZcHRYb%2BJctCFl5Q7f4XeyWHIC5Im55%2BSvDzEkekWPjzMS8e2GRg8pC5B3j7%2Fhvz%2F7JXEN2sX%2FAl%2Fv27sIL3dErOV%2BCvKoGBmFmWasEX2CtKr%2FZQT9KJLPEeGFYoaREutvNE%2FqO15y%2Bmubmop3gi8ATZz3wLqy1t%2Fqy%2FmkG0BSTJN4WfBwP2xdDDYktzBBjqkASLHKc2i3SFaKKXQaZXjod8afdWm%2B0gbexugTHHuK9Q%2B1%2FfYtU18rU%2FOiY%2Bk5CFBY%2BymSP07iPIQHT6i%2FJDJljGV8iIOqtw9jRXMJ4p%2FcV%2B67eJKIDqQEF7DrGaIuAnQ1w%2FQqH1A9YdbcYHesD6VXTZFuOXPg%2FAWo6RplYkkKaxv5bK36za28wYEfWy1%2BD%2FG3o3YIxDV55Nd0AIaRK6bpHtLyHi8&X-Amz-Signature=d023c7ba02fc84d7a0928c8465ca5087032d4a9139bef10f0204b584b3cbf39c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUAI7FZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD62tJGnT6q2SwEf3KOuOvguamCQ3aseUF%2FQc50rM88eAIhAObh4XHLC2FjKSmVV5JTYov3cmKCOeE%2BK1m4hrgtwxArKv8DCHYQABoMNjM3NDIzMTgzODA1Igw7gQAmZRSr9R%2FEg3Mq3AMQXRnn9JxQRyhGN2WMJZe8TO%2B%2FwV0DX2i%2BSt6Fq9Y6Ve%2FvSinHmHBt6Re1wynGghWtLjrELhZr3t8Bzz1zY%2FdsaZnH4l9rbKVGfZ99Su7V%2BVdZgSfEu0W%2BpnS6SDcNgVbGbKTdbw5M9xxxQoobkkl%2FXwfwIkXMPLU7GCurfEptJ1IszI%2F%2F3hjo%2F2cnyZaXbReV4jP8MEirBV1yPk5iCwcUJ%2BoFzU8%2F9HKddxHaYHEnQwzWM01pw8ed5OjKl%2Fnu9eCR8GgxmtIqaGXzD4%2BDPqYTgSmlL%2BKR1yfv0alS1hLpv906%2BDVgbhxaawaLkfQQWwUKwn59iMHW8LQFyPXqlj0%2FQIxueIMVvmKGROOkkadba%2Fd46yOUBAjGFPHnix%2Fonkade2ooMKPDXa6D8jqOXgkE2KlQ%2BB%2BoZcdO%2FSoc2FxI2JqPB0mXcM1w%2Fuqv%2FN68%2Ft9l%2Ft82ZcHRYb%2BJctCFl5Q7f4XeyWHIC5Im55%2BSvDzEkekWPjzMS8e2GRg8pC5B3j7%2Fhvz%2F7JXEN2sX%2FAl%2Fv27sIL3dErOV%2BCvKoGBmFmWasEX2CtKr%2FZQT9KJLPEeGFYoaREutvNE%2FqO15y%2Bmubmop3gi8ATZz3wLqy1t%2Fqy%2FmkG0BSTJN4WfBwP2xdDDYktzBBjqkASLHKc2i3SFaKKXQaZXjod8afdWm%2B0gbexugTHHuK9Q%2B1%2FfYtU18rU%2FOiY%2Bk5CFBY%2BymSP07iPIQHT6i%2FJDJljGV8iIOqtw9jRXMJ4p%2FcV%2B67eJKIDqQEF7DrGaIuAnQ1w%2FQqH1A9YdbcYHesD6VXTZFuOXPg%2FAWo6RplYkkKaxv5bK36za28wYEfWy1%2BD%2FG3o3YIxDV55Nd0AIaRK6bpHtLyHi8&X-Amz-Signature=d13a9ea98e2f028f9cb90ee207376ad71f0ae2c80125cb0e99ea680d6c14ff42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
