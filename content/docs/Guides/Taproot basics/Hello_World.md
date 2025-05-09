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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AW4PFIF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU7Jla7nSwlquKxsXnQs%2F8BGOEykCvyoaPP6Ty%2FAFYEgIhAKpEc8ziYZZKws0BCxSXBRbrn03RuiLySVaKveFsU6psKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWzlCRI7wcuVKr%2Fvoq3AOjcfwHAk30xb68X7y00lrzvNHD8iZGMLov7J7SqNYChk8vpqGuV6LnYcxdPeotsdEHlNlAbnt%2BwVWZhALJPdm%2Bqqm2RF3%2FuxhXrPCMApQhJyEEmJTQtJ5cGVgnI11O92djiUpGFPJyp7DDAEIwYF%2BKjHoJRYV6ABPj9l%2F8nCq0vSXM%2BllVuPBwCswOqQrpGR8Bb%2FLqiRCqXnDijfcGikzJJAQ8ZXqlESMCt7mPymcUfkIx9dc5Duy8ATi8VWmXfyqZb%2FGANMBEvg6GE3d2LVfaV3XJdLvime%2FdJbHW7NaQyHwffVOw5ewCIXmX1vpk7xrNsDywkjDGwEEqTXypJVC2UKmayz3J2aBiuJARNJbewq4wxFfFqYGoQ%2BrzIqN5CIWLQ7YG5CegdKncaQOmgxvOzn8raKzLNu02ncoXrfWA8FLgG2%2BKBCZ9fgbURAKtFMtgFSrJqje%2BMaNLeFdpWBtLFzPKVgJ6kh0IqF7L1OK4rTE1Vv6J6gRtXe8LG9tK3wJQEV%2F%2Fs4IX1oK3DovBM3PJCXMwawBe%2BSArIHlmqOY4kVxpi5DXgx3bmCR94%2FNtjizp%2Fre2pZxSKJ95AuD07SDEAPo3EHQY%2BXf%2FhbdZFz1K%2B%2FEqoFJ2KnqP4PQhKTDO7%2FfABjqkAXZXqcdCtdPvc5%2FwOYlJANblxIsRO3%2BeCNDHtRg9t%2FdfHO9k1i7xy41VB4BFZHle1aOMyW5PF5npCx99Mjlmuvuh0QKLNxXhR6TeQmwP%2B8t1LgE7LdN0PJKXn17ETQclnvHbQ5t0k7XwnqMHU%2FCw1UjKVRW0XppxuJ1uzKzyZxE%2BAoYUaANQMHKds09u9B7SwgfbaZ2YYpdjCI9wh0V0zBNqMtjX&X-Amz-Signature=29ac10df76127e15d3c8f0e7215a1db8b810d86dece43896752aaa3ed0eb9c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AW4PFIF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU7Jla7nSwlquKxsXnQs%2F8BGOEykCvyoaPP6Ty%2FAFYEgIhAKpEc8ziYZZKws0BCxSXBRbrn03RuiLySVaKveFsU6psKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWzlCRI7wcuVKr%2Fvoq3AOjcfwHAk30xb68X7y00lrzvNHD8iZGMLov7J7SqNYChk8vpqGuV6LnYcxdPeotsdEHlNlAbnt%2BwVWZhALJPdm%2Bqqm2RF3%2FuxhXrPCMApQhJyEEmJTQtJ5cGVgnI11O92djiUpGFPJyp7DDAEIwYF%2BKjHoJRYV6ABPj9l%2F8nCq0vSXM%2BllVuPBwCswOqQrpGR8Bb%2FLqiRCqXnDijfcGikzJJAQ8ZXqlESMCt7mPymcUfkIx9dc5Duy8ATi8VWmXfyqZb%2FGANMBEvg6GE3d2LVfaV3XJdLvime%2FdJbHW7NaQyHwffVOw5ewCIXmX1vpk7xrNsDywkjDGwEEqTXypJVC2UKmayz3J2aBiuJARNJbewq4wxFfFqYGoQ%2BrzIqN5CIWLQ7YG5CegdKncaQOmgxvOzn8raKzLNu02ncoXrfWA8FLgG2%2BKBCZ9fgbURAKtFMtgFSrJqje%2BMaNLeFdpWBtLFzPKVgJ6kh0IqF7L1OK4rTE1Vv6J6gRtXe8LG9tK3wJQEV%2F%2Fs4IX1oK3DovBM3PJCXMwawBe%2BSArIHlmqOY4kVxpi5DXgx3bmCR94%2FNtjizp%2Fre2pZxSKJ95AuD07SDEAPo3EHQY%2BXf%2FhbdZFz1K%2B%2FEqoFJ2KnqP4PQhKTDO7%2FfABjqkAXZXqcdCtdPvc5%2FwOYlJANblxIsRO3%2BeCNDHtRg9t%2FdfHO9k1i7xy41VB4BFZHle1aOMyW5PF5npCx99Mjlmuvuh0QKLNxXhR6TeQmwP%2B8t1LgE7LdN0PJKXn17ETQclnvHbQ5t0k7XwnqMHU%2FCw1UjKVRW0XppxuJ1uzKzyZxE%2BAoYUaANQMHKds09u9B7SwgfbaZ2YYpdjCI9wh0V0zBNqMtjX&X-Amz-Signature=30fcbc46304c1b8dea9f065daad92aa5059ccf7bc3d377ade1cfb9ac5baac6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
