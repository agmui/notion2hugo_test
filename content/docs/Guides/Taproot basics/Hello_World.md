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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U35YZN7I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSAnBxhV1uyqL1315Ihs4EVBl144ZCP4iflDzCvh3CuAiAQVg0ypqq9gwY0hVbfDWfVpqRkh0RAtwgEBcpwf8IXPir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMQMABxm7h8wof1X5MKtwDgzFm4Y6BwuhBAxre0WIk0b%2FIardpfF3HM47awQLppLZQsJO7S2VMWBJ2blqfmMNs6hbPPou%2FVJyNetIWe5P3yT5UEOKIpo%2BJlpZ%2FHGY0uPDssb40rguCuTsrjHKmabtsZBNwsTovef5JZIUk2v0gQLa4DIOhvy0vQ2zTxO4%2BrYxSs%2Bm6x3nKa%2BuopU0S8GhPE7e6oIHp8lGltHsktSbgSUoPYpsyq2RMNinIpvsg1vqaJnypmHgNohuF%2BkZ2SDOiDMaFJHQqv8t0L70oJVOfHM4nn9L%2FTVg8LhiixTtQNRCYKy04sXkwVRpyKvFl0JZUQZ9zXcvFm0WE2mDAT7eO3booxKMtYpSWgu7bxbZBhUptidVE6bIH1qcH6Uz55KISHzpErHV4w%2BCztaWYOaQNZ%2BSOeGtv7DKcdVXm0v9kqHB9L13BoNrTRr4KkcQrUhrg52kIAFa680fmKFss2Mu%2BlxZ%2FBXiY0RyqcEMmdPHcDHg5XWKha82ylGyL%2FCzWLerzoP9h2jj%2B1tJnuBNfT%2FsLjdO4YNh3an0TBPMd%2BYCrsh3XHFLUgYwuN47M1EOMAICTmNh5%2F0kZmpuxI3ier1PjZk1nn0Zf6dX1g8Oxbk8Q2H75WB8aj2XiEfgquskwhJ%2B4vQY6pgEp%2FEabcotA0o5JhIy1a2Q4aEdi8RrJve4FKnQqbtlG2b0PlG8bUdPJ0AiXiBM3wMKD%2FGUKrlf7UFWXjHCWzLBG48kqI6se%2BQOre5BQE05llzTwLBc0rAaq9516E%2BkHU4T4b4a2Nv%2BS8bGzhR%2B1Gf1AnuFmWtWn6jf1IJy2JTzty14%2BhPpnMym%2FB6BC9ClNH3qoY5o1e5DA%2FwotmHRs1gt5cinEnDTY&X-Amz-Signature=57661a70e1fb05ef6ed68ee77b991c0965d4358898665206aea08a065d92fc7a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U35YZN7I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSAnBxhV1uyqL1315Ihs4EVBl144ZCP4iflDzCvh3CuAiAQVg0ypqq9gwY0hVbfDWfVpqRkh0RAtwgEBcpwf8IXPir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMQMABxm7h8wof1X5MKtwDgzFm4Y6BwuhBAxre0WIk0b%2FIardpfF3HM47awQLppLZQsJO7S2VMWBJ2blqfmMNs6hbPPou%2FVJyNetIWe5P3yT5UEOKIpo%2BJlpZ%2FHGY0uPDssb40rguCuTsrjHKmabtsZBNwsTovef5JZIUk2v0gQLa4DIOhvy0vQ2zTxO4%2BrYxSs%2Bm6x3nKa%2BuopU0S8GhPE7e6oIHp8lGltHsktSbgSUoPYpsyq2RMNinIpvsg1vqaJnypmHgNohuF%2BkZ2SDOiDMaFJHQqv8t0L70oJVOfHM4nn9L%2FTVg8LhiixTtQNRCYKy04sXkwVRpyKvFl0JZUQZ9zXcvFm0WE2mDAT7eO3booxKMtYpSWgu7bxbZBhUptidVE6bIH1qcH6Uz55KISHzpErHV4w%2BCztaWYOaQNZ%2BSOeGtv7DKcdVXm0v9kqHB9L13BoNrTRr4KkcQrUhrg52kIAFa680fmKFss2Mu%2BlxZ%2FBXiY0RyqcEMmdPHcDHg5XWKha82ylGyL%2FCzWLerzoP9h2jj%2B1tJnuBNfT%2FsLjdO4YNh3an0TBPMd%2BYCrsh3XHFLUgYwuN47M1EOMAICTmNh5%2F0kZmpuxI3ier1PjZk1nn0Zf6dX1g8Oxbk8Q2H75WB8aj2XiEfgquskwhJ%2B4vQY6pgEp%2FEabcotA0o5JhIy1a2Q4aEdi8RrJve4FKnQqbtlG2b0PlG8bUdPJ0AiXiBM3wMKD%2FGUKrlf7UFWXjHCWzLBG48kqI6se%2BQOre5BQE05llzTwLBc0rAaq9516E%2BkHU4T4b4a2Nv%2BS8bGzhR%2B1Gf1AnuFmWtWn6jf1IJy2JTzty14%2BhPpnMym%2FB6BC9ClNH3qoY5o1e5DA%2FwotmHRs1gt5cinEnDTY&X-Amz-Signature=e8f4e43e728e84179c2ad2007e43b59c512332df0bb57a70642efa26c8d750ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
