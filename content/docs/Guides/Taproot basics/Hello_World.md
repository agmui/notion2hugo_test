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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UJ6RNF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBXZCgHdujKNg6RoczWPx5sUUBArSKR69oSS0tEJBWfkAiBzAYGXhm7uomwsLixBiTqusZ%2BaMgilRft2KYhrxXC6aSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Cbf4oYAdO78b6NNKtwDTLpWTR0ndUMRFO%2B2SugqtTqXEUF6mDy0BnPlkwM0ExBxNmDGXqGnaVDJHQ%2Fcrsh370lpSf5aladiXWmHGTTeXAutEpYbf4Qv6ZIVJM5foqvLyNffSgDE8zrt1zCFaBast0k8qgBsWbRUFUyzZecWJSU3xOL77gLchshx9dzwiG5DcwkADYrXno6UT7nksZWMl39rh%2FQ4aPbLDfTlI7FNJ56uyyxWtcR7hHKCZIPzyYvr1N7EwqFO%2FZrnhTCBsVQRtAUgwY7AA%2FK8BAYwwEO7%2BeMeBgeWLFbZtmjt9i0mk0E47djQ5JrNBYc3kBMYQWf4%2FykcN9k3%2F6cCV58TNMQhD2Z%2FP3BFAspQhMvNsTQGMXv%2FzMhDi0jl9Qoz2eV3UTsLXRStJ1jUV6%2BSgXCHJYTGGStv2sNOckzuq1cu3ve%2BUwygq8bGZI6OyLMXiNsZ2W9xIMOUcrKpPqKxzzsbWLFG%2B9gBRPzflWhdLms955Id4geSHKylYHXzMpi6n1OJ7keq3USxONiWuIB6rgG9%2Bqbim7X6Qt6sR0GwUlfJdUNBEfw8oWVAkdoEG9lusVIIQYpve59OCbvwZ8fd5uH%2BMgrDAVqLXuNByTkhBwYMGczF1xth9XpvhW7z3NfwX2EwiNjCwQY6pgHDNnACAJVtcGPqsN8e9xVKfKvdqCSZbhtiiMuRz5TQljRiGJUYYPXYRKgc5l6mVkyEMyoxBzI4u%2BqrUsfCyq5BPaN9t9t8yvNX0p6oQChhkWKdmQtV91AgohrlvKuHM2A5et244ke9McaCdSHKB0MKFyWgo0j%2Bx52G3PaRvTWscYYtE1spcSbbAOqakrP%2BKW2ck8p09uDfcYU0nSRoAM45x0XkNrE%2B&X-Amz-Signature=21859a75fb645de1d8f11e5b85921105e01af12cc29d7a387a5995de9e9e9bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UJ6RNF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBXZCgHdujKNg6RoczWPx5sUUBArSKR69oSS0tEJBWfkAiBzAYGXhm7uomwsLixBiTqusZ%2BaMgilRft2KYhrxXC6aSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Cbf4oYAdO78b6NNKtwDTLpWTR0ndUMRFO%2B2SugqtTqXEUF6mDy0BnPlkwM0ExBxNmDGXqGnaVDJHQ%2Fcrsh370lpSf5aladiXWmHGTTeXAutEpYbf4Qv6ZIVJM5foqvLyNffSgDE8zrt1zCFaBast0k8qgBsWbRUFUyzZecWJSU3xOL77gLchshx9dzwiG5DcwkADYrXno6UT7nksZWMl39rh%2FQ4aPbLDfTlI7FNJ56uyyxWtcR7hHKCZIPzyYvr1N7EwqFO%2FZrnhTCBsVQRtAUgwY7AA%2FK8BAYwwEO7%2BeMeBgeWLFbZtmjt9i0mk0E47djQ5JrNBYc3kBMYQWf4%2FykcN9k3%2F6cCV58TNMQhD2Z%2FP3BFAspQhMvNsTQGMXv%2FzMhDi0jl9Qoz2eV3UTsLXRStJ1jUV6%2BSgXCHJYTGGStv2sNOckzuq1cu3ve%2BUwygq8bGZI6OyLMXiNsZ2W9xIMOUcrKpPqKxzzsbWLFG%2B9gBRPzflWhdLms955Id4geSHKylYHXzMpi6n1OJ7keq3USxONiWuIB6rgG9%2Bqbim7X6Qt6sR0GwUlfJdUNBEfw8oWVAkdoEG9lusVIIQYpve59OCbvwZ8fd5uH%2BMgrDAVqLXuNByTkhBwYMGczF1xth9XpvhW7z3NfwX2EwiNjCwQY6pgHDNnACAJVtcGPqsN8e9xVKfKvdqCSZbhtiiMuRz5TQljRiGJUYYPXYRKgc5l6mVkyEMyoxBzI4u%2BqrUsfCyq5BPaN9t9t8yvNX0p6oQChhkWKdmQtV91AgohrlvKuHM2A5et244ke9McaCdSHKB0MKFyWgo0j%2Bx52G3PaRvTWscYYtE1spcSbbAOqakrP%2BKW2ck8p09uDfcYU0nSRoAM45x0XkNrE%2B&X-Amz-Signature=93c9103f46b5a7915f7b03ede7b361646ce3bf0bcd25dbdb08759b4300d8d2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
