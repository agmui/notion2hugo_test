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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VFEQQW%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5mfDtqCkSOgyv8jqgVg1Gm2ycgfiBPMm1Ni52wuvJgIhAKMFz%2FSjFSEAxqEVCSS%2F4nhwHCtgTDh8jJIwvADuVMZ0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwsqmDmte0AeiKOO1Eq3ANkYP6IKSh88%2BjKQFswSpQxArMbEOapvVnU8TrMQrDSb51ubvv0Y4m%2BcAVr%2BHPog03xsksZAknlMpuj0lH2aYLvW5gZeExq0ze8krLNmS7gTQCYql0qxgttZs6kCw5n1lXQlP8BnEpXkp3byeojbZ0cLOIWgEH8YcFgcS8VuuvIiT7lvdHBOKNs7jnSaMpFA4rmQFVSVyd2E4z7CSdcutElg9ij%2BTi90xA8p3Qz9GR0qeQVdr2j3ptCsnLMPBvd7wQVV%2BJMDR5%2BiX0kVFARrIrIJRoDgxaiITOq%2FaEVT0rEX8VAdCeiEwR2i6uuVFUyv6bKbhQTwzHcd7DQT2FE3OLQCgPGrhqLbngW7A6xnkHwov3qI8xCi%2BcH5x4xx1kZX83wuOqqTYtJeIIhzQ84L59ET3L37L72bGGy2sfnPOdwNXyXfEQ6%2FfFkLcRp8DLodMcG%2BjoDog9bSxk6liGMJitPXYqxKIs5Ta6jsHFN3aHICktsg0OwmRUkzV2ab3xNOIlXOkXpe%2BHbhmuE%2Ff3e2ykibwdK%2FhnT6FtJgz8Wh6NE0YrKN9Gizcw5zRIyoE0XNY7kRn5Nyb7iJrselt2eaaWDWpxgIfb39aY7GBP8GhDeutZE%2BDDysG77hxMiTjDk5ra9BjqkAfEPKWeqWjKUzEboIqtWq4H46C4AiXThalmRdKZ%2FSmFnd3aPf7CDODYZaSqS2zpJZ5h%2BbN5%2FisJcL%2F1NrTis6nKgPzj2lAtE1be1%2FdobBF9xsVdw8ovoM6HkeOr8QCzHWI6ei%2BMVFXX8jXLy8igEpy8zkmXC0RAjKmf7P%2Bk9ZF1zyEk36iwsnKJurQxAQD6HKeD%2B1mwrSnXu%2BT2MVrqbADZbYhkc&X-Amz-Signature=6c26f518d15713858dbe25d41b081e5e7d76943e6ae02ef9dffa04a8ec6ce91a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VFEQQW%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP5mfDtqCkSOgyv8jqgVg1Gm2ycgfiBPMm1Ni52wuvJgIhAKMFz%2FSjFSEAxqEVCSS%2F4nhwHCtgTDh8jJIwvADuVMZ0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwsqmDmte0AeiKOO1Eq3ANkYP6IKSh88%2BjKQFswSpQxArMbEOapvVnU8TrMQrDSb51ubvv0Y4m%2BcAVr%2BHPog03xsksZAknlMpuj0lH2aYLvW5gZeExq0ze8krLNmS7gTQCYql0qxgttZs6kCw5n1lXQlP8BnEpXkp3byeojbZ0cLOIWgEH8YcFgcS8VuuvIiT7lvdHBOKNs7jnSaMpFA4rmQFVSVyd2E4z7CSdcutElg9ij%2BTi90xA8p3Qz9GR0qeQVdr2j3ptCsnLMPBvd7wQVV%2BJMDR5%2BiX0kVFARrIrIJRoDgxaiITOq%2FaEVT0rEX8VAdCeiEwR2i6uuVFUyv6bKbhQTwzHcd7DQT2FE3OLQCgPGrhqLbngW7A6xnkHwov3qI8xCi%2BcH5x4xx1kZX83wuOqqTYtJeIIhzQ84L59ET3L37L72bGGy2sfnPOdwNXyXfEQ6%2FfFkLcRp8DLodMcG%2BjoDog9bSxk6liGMJitPXYqxKIs5Ta6jsHFN3aHICktsg0OwmRUkzV2ab3xNOIlXOkXpe%2BHbhmuE%2Ff3e2ykibwdK%2FhnT6FtJgz8Wh6NE0YrKN9Gizcw5zRIyoE0XNY7kRn5Nyb7iJrselt2eaaWDWpxgIfb39aY7GBP8GhDeutZE%2BDDysG77hxMiTjDk5ra9BjqkAfEPKWeqWjKUzEboIqtWq4H46C4AiXThalmRdKZ%2FSmFnd3aPf7CDODYZaSqS2zpJZ5h%2BbN5%2FisJcL%2F1NrTis6nKgPzj2lAtE1be1%2FdobBF9xsVdw8ovoM6HkeOr8QCzHWI6ei%2BMVFXX8jXLy8igEpy8zkmXC0RAjKmf7P%2Bk9ZF1zyEk36iwsnKJurQxAQD6HKeD%2B1mwrSnXu%2BT2MVrqbADZbYhkc&X-Amz-Signature=c2180c5c18eb8f730ad7035179440c4ff472bdb72543fb8758b991e9df0be57d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
