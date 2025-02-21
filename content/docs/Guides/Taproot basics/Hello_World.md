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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37L2TKQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtR0DjuoEe6JszpZncnj%2FYjiEc0GxT0SkytH%2BNrgVnlAiB%2Fjtks2PGd4wj47R1Qc2DiCEY%2B2Xrr9%2BzfZhLl8h2bNiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2yfe3yADT%2BnqQMpKtwDbvoAlBh1x1WCjCdLQ7YiY7PqRgA6nFrKEZyOtBIN5fWIhwS1erembjugSxpWqDig9sK0DcQkTh4O8u1bCBVCE7ITg%2FOq3qMCNKRFPB6IqSOZdJbWdH2qnOa%2BVM2f9fshbMPQecLzEM8NqVBuJkW1tegDO8S40d4Ys9AvHGRtnRsF8BQSR9WOX%2BYImxKU2etkvstLeYd62tH%2F8zAn9Z10heP9wjdJ3vOrOiL7sD3jtxjqv%2B1Tszi%2BmJpDhYhzs3%2Fc4uHGQ3kotaGe2AimM2AHclNTyqNCSMVNxj4NsifJtR%2BIyA47zNeOHfiWUjvvW0w0Op5w5DJJM%2BAO8bZR6lFqIexJjZ9PQrNOiWB7xhxN%2FzcX9J7U959J4OIGsI%2F8FfOmN8rSFc6PffNh%2BbKMXaDT%2FjQKOYFd7%2BzQv9dwwPSdIPxUkkpmcxwxrG1Rdz9sdr52phSAKL2UHUI4w1akqsqj8C6zbmQcrR4zQs0hpJAvcrpJhHdgJacy0Ob2Oz2O8hgy4kRfinbhPFyjcybd9bmFnOHSotcVy3dTXtN59doNY2pLn55i5Kasj7J%2BwXp1YwsD6EU3tFfcWn8BYP98olxp7CYjeFI7bNTEtT5uCZlz0YtqkztkRTA8c3jYzXIw4b3ivQY6pgFVcwgzrHI4oLTqVFDlfMW6A16iawDWIU5ZLain42UKUdSyqgJ0Dnl3JIGGI%2FvDE94XJvu%2FW45aFNppN2gkjpBMwobb9Fgv7U6NcaJdp9fIJeR56voCdUOenMV88udp35CnCgbSmu8s4BsS02vukvzDgjveoKKIk99fv5R0R8mJ3AH4W3o1dBxnCIS54pAwCALZgBcjUkSOw%2FRIkkf8uz9TLoyw5KpN&X-Amz-Signature=d1e56fb5491923f742fd0972021e93d9838de3c2a52e998db5c0084fc2ea07dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37L2TKQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtR0DjuoEe6JszpZncnj%2FYjiEc0GxT0SkytH%2BNrgVnlAiB%2Fjtks2PGd4wj47R1Qc2DiCEY%2B2Xrr9%2BzfZhLl8h2bNiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2yfe3yADT%2BnqQMpKtwDbvoAlBh1x1WCjCdLQ7YiY7PqRgA6nFrKEZyOtBIN5fWIhwS1erembjugSxpWqDig9sK0DcQkTh4O8u1bCBVCE7ITg%2FOq3qMCNKRFPB6IqSOZdJbWdH2qnOa%2BVM2f9fshbMPQecLzEM8NqVBuJkW1tegDO8S40d4Ys9AvHGRtnRsF8BQSR9WOX%2BYImxKU2etkvstLeYd62tH%2F8zAn9Z10heP9wjdJ3vOrOiL7sD3jtxjqv%2B1Tszi%2BmJpDhYhzs3%2Fc4uHGQ3kotaGe2AimM2AHclNTyqNCSMVNxj4NsifJtR%2BIyA47zNeOHfiWUjvvW0w0Op5w5DJJM%2BAO8bZR6lFqIexJjZ9PQrNOiWB7xhxN%2FzcX9J7U959J4OIGsI%2F8FfOmN8rSFc6PffNh%2BbKMXaDT%2FjQKOYFd7%2BzQv9dwwPSdIPxUkkpmcxwxrG1Rdz9sdr52phSAKL2UHUI4w1akqsqj8C6zbmQcrR4zQs0hpJAvcrpJhHdgJacy0Ob2Oz2O8hgy4kRfinbhPFyjcybd9bmFnOHSotcVy3dTXtN59doNY2pLn55i5Kasj7J%2BwXp1YwsD6EU3tFfcWn8BYP98olxp7CYjeFI7bNTEtT5uCZlz0YtqkztkRTA8c3jYzXIw4b3ivQY6pgFVcwgzrHI4oLTqVFDlfMW6A16iawDWIU5ZLain42UKUdSyqgJ0Dnl3JIGGI%2FvDE94XJvu%2FW45aFNppN2gkjpBMwobb9Fgv7U6NcaJdp9fIJeR56voCdUOenMV88udp35CnCgbSmu8s4BsS02vukvzDgjveoKKIk99fv5R0R8mJ3AH4W3o1dBxnCIS54pAwCALZgBcjUkSOw%2FRIkkf8uz9TLoyw5KpN&X-Amz-Signature=f830611135690a0a92c7e9009d96f56b16080049824336c83d1fc3c75e2c76e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
