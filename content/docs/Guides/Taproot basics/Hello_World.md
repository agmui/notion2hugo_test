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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUZCG4P%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtWJiuxeKeF5U3M3cHe7%2F4ynonov%2Bplny7fx35vmMA3AiB3rNfgF7yoBLF1FHVlzfoWtixpGbSIet%2BM8oiFQSF2WSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqZGz0DcpJVm2ojSKtwDBoc1z84WCCvYHruNxGhJf%2B7TkjhPGsq9T8pUJgEpHX48KHrIlmAJqOwp6Kru2gT%2BYGUsL1nJtnWDr%2F5H8bxI6q8RW%2BRFxSQ8oVuVBqqFQaMaG4EFz1X%2BHierwjHYO4%2BxiTcFnLjo7vQpTfYI96VNHz8cnFiorHXuRBHYyBOohowz7v%2FSyMisgQeJhepZ2JiICCxqe5hzKx4nxaC2bbA3qXQLc3G9nhBGKoVPQQU4KmhG%2F7SqGxXydsncdqo0bwI1vMqbZsiIke02tBxwtM13yogKR1g6gmLmRyLHeeI27HJPzz1Bw6N3E5KpF%2FztlESvSPXdUVd8nl8FM49IYYyeJTV5YhdZFl7CoxQuFk1RJk18hsSzOHShPofDoUz5dlQoJfAksRWZnde8kInEXrFzYOr7PKCeA85QuuSj%2FMgnI2czInuf7d29WUeHWWcZZssoTbrxRXgfrdYS9%2F%2BMEl%2FDhhRQLpXPjqwgpFZufCfmxwZDpEbVDzoY8V3sUQbcBJfTtaD4TZnBrdc0W3vmG8qd6k0Dri6Qn%2B95z4O6WKqyhSWFlN%2B9dGu8W9bEri9F4%2BnBEl3a5nP9vKUmhWzDSVN0zOpNHbaMRbjo1ZpNxTyHXE8XKJdjPf1iwzJSxeAwvdmUvgY6pgGdptOJ0HYe8ku6iOrjjmGdhVJOCndhI55SvCDBQ7Wck2mhes2gfo1GrKlhPGocanfcbLNxwXRy7tQmFnJE3Gc0gCXKgbu3Qq34GtazKtk8NvTA3pQbajrCihMQjaP3HfXhm9wa8c%2BXCjtzdUlfHdjnSNhoHTksiq%2Byo4lyrHKEw5WHYrL%2FV5w%2Fnzelss23Dt85fikLb9K441a0ZpuNxeLa8sOlep76&X-Amz-Signature=3883301f8d281a25d299e62ab1ea72e2f064cd6e1b39482c742c4e83866deb87&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUZCG4P%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtWJiuxeKeF5U3M3cHe7%2F4ynonov%2Bplny7fx35vmMA3AiB3rNfgF7yoBLF1FHVlzfoWtixpGbSIet%2BM8oiFQSF2WSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqZGz0DcpJVm2ojSKtwDBoc1z84WCCvYHruNxGhJf%2B7TkjhPGsq9T8pUJgEpHX48KHrIlmAJqOwp6Kru2gT%2BYGUsL1nJtnWDr%2F5H8bxI6q8RW%2BRFxSQ8oVuVBqqFQaMaG4EFz1X%2BHierwjHYO4%2BxiTcFnLjo7vQpTfYI96VNHz8cnFiorHXuRBHYyBOohowz7v%2FSyMisgQeJhepZ2JiICCxqe5hzKx4nxaC2bbA3qXQLc3G9nhBGKoVPQQU4KmhG%2F7SqGxXydsncdqo0bwI1vMqbZsiIke02tBxwtM13yogKR1g6gmLmRyLHeeI27HJPzz1Bw6N3E5KpF%2FztlESvSPXdUVd8nl8FM49IYYyeJTV5YhdZFl7CoxQuFk1RJk18hsSzOHShPofDoUz5dlQoJfAksRWZnde8kInEXrFzYOr7PKCeA85QuuSj%2FMgnI2czInuf7d29WUeHWWcZZssoTbrxRXgfrdYS9%2F%2BMEl%2FDhhRQLpXPjqwgpFZufCfmxwZDpEbVDzoY8V3sUQbcBJfTtaD4TZnBrdc0W3vmG8qd6k0Dri6Qn%2B95z4O6WKqyhSWFlN%2B9dGu8W9bEri9F4%2BnBEl3a5nP9vKUmhWzDSVN0zOpNHbaMRbjo1ZpNxTyHXE8XKJdjPf1iwzJSxeAwvdmUvgY6pgGdptOJ0HYe8ku6iOrjjmGdhVJOCndhI55SvCDBQ7Wck2mhes2gfo1GrKlhPGocanfcbLNxwXRy7tQmFnJE3Gc0gCXKgbu3Qq34GtazKtk8NvTA3pQbajrCihMQjaP3HfXhm9wa8c%2BXCjtzdUlfHdjnSNhoHTksiq%2Byo4lyrHKEw5WHYrL%2FV5w%2Fnzelss23Dt85fikLb9K441a0ZpuNxeLa8sOlep76&X-Amz-Signature=f2d28a6552cbfd4a58efabbba8b1d42742d96aefa9adfbdf469d8e0dc6536ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
