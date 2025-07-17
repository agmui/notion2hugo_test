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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIGKQNK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDvJW4V7FZbC2xEeSy38bz8UbQSRV9nnB%2BhOQjSpLqG1gIhAP9QA%2BvARtCjJDgT4H%2FZYcM76JGEibxtLpB%2F6vKbPB3UKv8DCHkQABoMNjM3NDIzMTgzODA1Igyv0Wvz4IZSz4V4yqMq3APNDiVHeBm5CpNhIdkBkvDLox3YgIuzfYWEOUkSopYam6UjnXMCdQIi9NTcuQSu8Q%2BaZmtgJbnnzVXN9N0SYcBxlxnjephqjQ4l7lvn4HwVkdfhQ%2BMG9mZE0DIOOAS5GhwFdhwhdBLFJBOxu%2BXldNtILKTDsgis3WzEmArAitbVE5ed%2FuwsZ2m3MEJX3%2B%2BdUFrLqo9w8DuppoDLCXQibTyXn%2FjpFVv7vsjAW%2BouC0MUbCjtXZ%2FUC31XwZisb8TkndJw1BCwD0LwcF%2For3198nnbv7m7FJUOaz1R4N1B57eVIBrVjafLCz1Cld7GinjR9fe5zRVPS6%2BPsbpRLlUogq4jRhqPfJV%2FWI0RKOoFZVGum%2BKPR5H949i7q4GQTbOPb4K9fHUIF1NROEGsZd4ncfVUEeiqxjI0hPPQrra2MGobU7ScVNACPiG1bhDJqx4KgY72kNDrfRpOmB6QUJlKh08lLP8CUTa7t1GithIVDrhYR72e4AKyWBERQWrOXwg8L9D3fUlR%2BV4wuEqu7MGLJs54ecLsVibxqr2nI085%2BbKZmRVM881VItP4VZGi%2BcVGGyr%2FMomWmzBZyXaSX%2FS%2FMqt2h304e7lB3sFQT2%2FdssMRzEVuicLq1TuzCsD2aDDVv%2BTDBjqkAc%2FDGQCISU32JY%2BvaeJfGR73xcbY4Q%2BX9MyoUj1%2By00iVlMe%2BZD1EIG1%2BoYTM5vUx7XW6k2s37cYJGkko6grgcQeleorpG5hfJFoQ1wO2JQq%2BnlN6Ands3ZRabsJZPnkczbbbPYPYFtoxrkiMys3FtpANnhN6PscFt2eiP%2F33koi9kx8QaoPvtEjhygo5litvp5maqMY318vVddPTRfBD81aoKz3&X-Amz-Signature=8cd800e9b307df2c7f6fc6cd5b2ac447d0e0c73103c92b2c89f57151004f45ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIGKQNK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDvJW4V7FZbC2xEeSy38bz8UbQSRV9nnB%2BhOQjSpLqG1gIhAP9QA%2BvARtCjJDgT4H%2FZYcM76JGEibxtLpB%2F6vKbPB3UKv8DCHkQABoMNjM3NDIzMTgzODA1Igyv0Wvz4IZSz4V4yqMq3APNDiVHeBm5CpNhIdkBkvDLox3YgIuzfYWEOUkSopYam6UjnXMCdQIi9NTcuQSu8Q%2BaZmtgJbnnzVXN9N0SYcBxlxnjephqjQ4l7lvn4HwVkdfhQ%2BMG9mZE0DIOOAS5GhwFdhwhdBLFJBOxu%2BXldNtILKTDsgis3WzEmArAitbVE5ed%2FuwsZ2m3MEJX3%2B%2BdUFrLqo9w8DuppoDLCXQibTyXn%2FjpFVv7vsjAW%2BouC0MUbCjtXZ%2FUC31XwZisb8TkndJw1BCwD0LwcF%2For3198nnbv7m7FJUOaz1R4N1B57eVIBrVjafLCz1Cld7GinjR9fe5zRVPS6%2BPsbpRLlUogq4jRhqPfJV%2FWI0RKOoFZVGum%2BKPR5H949i7q4GQTbOPb4K9fHUIF1NROEGsZd4ncfVUEeiqxjI0hPPQrra2MGobU7ScVNACPiG1bhDJqx4KgY72kNDrfRpOmB6QUJlKh08lLP8CUTa7t1GithIVDrhYR72e4AKyWBERQWrOXwg8L9D3fUlR%2BV4wuEqu7MGLJs54ecLsVibxqr2nI085%2BbKZmRVM881VItP4VZGi%2BcVGGyr%2FMomWmzBZyXaSX%2FS%2FMqt2h304e7lB3sFQT2%2FdssMRzEVuicLq1TuzCsD2aDDVv%2BTDBjqkAc%2FDGQCISU32JY%2BvaeJfGR73xcbY4Q%2BX9MyoUj1%2By00iVlMe%2BZD1EIG1%2BoYTM5vUx7XW6k2s37cYJGkko6grgcQeleorpG5hfJFoQ1wO2JQq%2BnlN6Ands3ZRabsJZPnkczbbbPYPYFtoxrkiMys3FtpANnhN6PscFt2eiP%2F33koi9kx8QaoPvtEjhygo5litvp5maqMY318vVddPTRfBD81aoKz3&X-Amz-Signature=b9d76f77fd9241767d8db0d6d974e790ef2e39990b6d43e0d2850bb6b39a8993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
