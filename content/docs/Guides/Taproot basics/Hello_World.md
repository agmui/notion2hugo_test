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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637P2O5JT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDswA9ST8OCKQPJS0qKe6EvRiqmG0nkkcteeFju7PPMHwIhAPHAQdKTDq221KBLogz5DGE7TOxdVq2c%2BB11BM0%2FCUM%2BKv8DCG4QABoMNjM3NDIzMTgzODA1Igyrr7sR8wfcy66NG3wq3AOiy4mx%2FH434FXglMNl323oLlj6uBxbawIvFb1wlJo1yjK4QGzAevnAApu%2BqppunnuhZp8LD7BOJUdh2dGeYYp1cIkrdV4nBR1sfvllBHrQWHMxpeKgfwBX3ekNuO3fOLZfvHhVIVmNtH6w%2BbYN%2BbyEi7yXdQ%2F7Wt0yN1B30PTptuwB924bDUtsWJaWZgokQdCV%2BMP9QAo4nbxE6n%2BZK%2BDyrneqfWVvpmL%2F3mBlH8%2FWjJd5eqxegoED59vKT89irlQq1N%2FuwnQ58lTkd3T2QIiCtMicNiwZG4np3kwNtTMcX6RHSewBBeeb8WFiRFhZPBZGSjAwfsxTTWC0SIUIxYOpz3MDf1glStvMroIl3s6OU8Ku7utYcHBl6Mkddt%2FekumtVCW9JNlryVxIyPaSl1lZHk7ItPRL51VnCFQNuDTlZl0bXb2ahXhVb9lfi6bTs9MgAxPAcSFrnDhJiLPUmxwwp2BANQgKeJQj8%2FcZQQbCAypUC3mX%2F3V3w6E9PhZwfWRvMTW8KLt13%2Fm8azZmZhov6hbJwe7RRVoP4QgH7xqy7tFbFHdrS2%2BvCPXau6EJhGz4XoRrNEZHsUQJ%2BvK0NbfC2uBPzy%2Bpb1XKUhS2ImQ9%2B8eWrZ23AP1moJth8jCF7v%2B9BjqkAVmiYwxv4kRC%2FUjNOJzxRBo3%2FVputxswcyPQhik5KkqB5fJzxmX72qt1vV0tbxUmqFsSeiZA%2FIZadj4nr4Nh3EB11cWihPw1cTug9BN4BnRFZtToKNUxLjJjZTl0mvD6WPNyT%2FTJZ7IPETTbsCI2M0uQqkZjqUaCCCTLVSQ2%2BQXFqlmaQvas6zpjBWPSR%2FlhRsbDWW0A5yhAvRgcFVpfewaMWo9q&X-Amz-Signature=25f6d2ebac1b369a5358f07cbbc32c03af0b32738abd029976a5ac5a511697e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637P2O5JT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDswA9ST8OCKQPJS0qKe6EvRiqmG0nkkcteeFju7PPMHwIhAPHAQdKTDq221KBLogz5DGE7TOxdVq2c%2BB11BM0%2FCUM%2BKv8DCG4QABoMNjM3NDIzMTgzODA1Igyrr7sR8wfcy66NG3wq3AOiy4mx%2FH434FXglMNl323oLlj6uBxbawIvFb1wlJo1yjK4QGzAevnAApu%2BqppunnuhZp8LD7BOJUdh2dGeYYp1cIkrdV4nBR1sfvllBHrQWHMxpeKgfwBX3ekNuO3fOLZfvHhVIVmNtH6w%2BbYN%2BbyEi7yXdQ%2F7Wt0yN1B30PTptuwB924bDUtsWJaWZgokQdCV%2BMP9QAo4nbxE6n%2BZK%2BDyrneqfWVvpmL%2F3mBlH8%2FWjJd5eqxegoED59vKT89irlQq1N%2FuwnQ58lTkd3T2QIiCtMicNiwZG4np3kwNtTMcX6RHSewBBeeb8WFiRFhZPBZGSjAwfsxTTWC0SIUIxYOpz3MDf1glStvMroIl3s6OU8Ku7utYcHBl6Mkddt%2FekumtVCW9JNlryVxIyPaSl1lZHk7ItPRL51VnCFQNuDTlZl0bXb2ahXhVb9lfi6bTs9MgAxPAcSFrnDhJiLPUmxwwp2BANQgKeJQj8%2FcZQQbCAypUC3mX%2F3V3w6E9PhZwfWRvMTW8KLt13%2Fm8azZmZhov6hbJwe7RRVoP4QgH7xqy7tFbFHdrS2%2BvCPXau6EJhGz4XoRrNEZHsUQJ%2BvK0NbfC2uBPzy%2Bpb1XKUhS2ImQ9%2B8eWrZ23AP1moJth8jCF7v%2B9BjqkAVmiYwxv4kRC%2FUjNOJzxRBo3%2FVputxswcyPQhik5KkqB5fJzxmX72qt1vV0tbxUmqFsSeiZA%2FIZadj4nr4Nh3EB11cWihPw1cTug9BN4BnRFZtToKNUxLjJjZTl0mvD6WPNyT%2FTJZ7IPETTbsCI2M0uQqkZjqUaCCCTLVSQ2%2BQXFqlmaQvas6zpjBWPSR%2FlhRsbDWW0A5yhAvRgcFVpfewaMWo9q&X-Amz-Signature=c7510380c92cc095c7d66275885b98e4c8007a1866616e1625f609e0c1f5b64f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
