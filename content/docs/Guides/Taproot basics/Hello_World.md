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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRYHS3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCxLPBvjODc277AD0e5E2VNVEkZFUGBktB66DEr%2BsrGRQIhAK86kPvK%2BUdPSb6tOegOrBW75nI12EhSys4MJboKVWB3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igzya9kjtaXCtdEycF4q3ANt7IScUGJOYOXmAJv3Q12FmgnYaJzRjFmN2I%2B03v3N%2F617d7g6kOt3YgHg%2BWkbfEWNVZsFe7Z%2BrhX5CUQnP47sYsA9L18hTjUu90FLA%2Bp%2FeVXIZ912KwgscRqQfr4dxXu6NZjGBOEJQ3Y14q8%2FJBm7lpb6rncbOxZWwg57Nfr9WH6IW3z3VO9Tnp40iThEfqNyPIKNG2urmzaynDCly1GaMJsj4Y9LCWKJJIi7cxzBV9mMkfqy1BV26NMgQDiohuhGwn1HaxvJDvd5fwVpdiLkQCPshjmwUp41fSXF4K0no1bmOhszvWIKX8jcG3Mrsf6O%2BrgE4ClI0StCYjCKaf4SiS%2FlLNkAkFAOGNeLC%2ByPOI9Au1F8AyWadYdrt0WFqgJ6R1%2FQXwu45Her8L%2BY3Zvx%2FEkp9VPZmi0LW2MGBXMWy8QhgFNSXzXga9MVW8S6xAyeSJ%2BTJTlVbS3nsq4PMlL4%2BuAGFWlQU82wfpE4eCrXvWkX5HKcMUcPXAYjTvUUx0prtQYqiS%2BnGF%2FqtDlo9k%2Bsu9HGUY3l0TWsByPeXf6zIl9sn%2FLcyUESft3TI4bkPbUksKu8lBZt1Q7EED9JcrXe5eTzU6k%2BdjmpbgWwiKuw%2FehbTgyNaFqS2wUWJTD8hKjABjqkARZPesOUc%2FP671q4ecU6JUUW8jP1%2BPjvpp%2FIsBvMWxCU0Sot992v7SIHPkVW1rTJ9XM5EHtPZmkDk3UGlpMxB8t5VaRH%2F5YLmOCC9jYz4RIb5rtyp25di0htl87JGD94eVzXQUKFOrXW90%2Faq13R9wlxHH1uirOwsB0K%2B1akc3TTIqHGJXHMNVMePt7TE%2Ffej5vHnVNKaRbDEmmu1HH78XUnIHNE&X-Amz-Signature=ab41f5054a373c8464acaef523fc88fc8907896f34184280f19468b5e9a01ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRYHS3K%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCxLPBvjODc277AD0e5E2VNVEkZFUGBktB66DEr%2BsrGRQIhAK86kPvK%2BUdPSb6tOegOrBW75nI12EhSys4MJboKVWB3Kv8DCBIQABoMNjM3NDIzMTgzODA1Igzya9kjtaXCtdEycF4q3ANt7IScUGJOYOXmAJv3Q12FmgnYaJzRjFmN2I%2B03v3N%2F617d7g6kOt3YgHg%2BWkbfEWNVZsFe7Z%2BrhX5CUQnP47sYsA9L18hTjUu90FLA%2Bp%2FeVXIZ912KwgscRqQfr4dxXu6NZjGBOEJQ3Y14q8%2FJBm7lpb6rncbOxZWwg57Nfr9WH6IW3z3VO9Tnp40iThEfqNyPIKNG2urmzaynDCly1GaMJsj4Y9LCWKJJIi7cxzBV9mMkfqy1BV26NMgQDiohuhGwn1HaxvJDvd5fwVpdiLkQCPshjmwUp41fSXF4K0no1bmOhszvWIKX8jcG3Mrsf6O%2BrgE4ClI0StCYjCKaf4SiS%2FlLNkAkFAOGNeLC%2ByPOI9Au1F8AyWadYdrt0WFqgJ6R1%2FQXwu45Her8L%2BY3Zvx%2FEkp9VPZmi0LW2MGBXMWy8QhgFNSXzXga9MVW8S6xAyeSJ%2BTJTlVbS3nsq4PMlL4%2BuAGFWlQU82wfpE4eCrXvWkX5HKcMUcPXAYjTvUUx0prtQYqiS%2BnGF%2FqtDlo9k%2Bsu9HGUY3l0TWsByPeXf6zIl9sn%2FLcyUESft3TI4bkPbUksKu8lBZt1Q7EED9JcrXe5eTzU6k%2BdjmpbgWwiKuw%2FehbTgyNaFqS2wUWJTD8hKjABjqkARZPesOUc%2FP671q4ecU6JUUW8jP1%2BPjvpp%2FIsBvMWxCU0Sot992v7SIHPkVW1rTJ9XM5EHtPZmkDk3UGlpMxB8t5VaRH%2F5YLmOCC9jYz4RIb5rtyp25di0htl87JGD94eVzXQUKFOrXW90%2Faq13R9wlxHH1uirOwsB0K%2B1akc3TTIqHGJXHMNVMePt7TE%2Ffej5vHnVNKaRbDEmmu1HH78XUnIHNE&X-Amz-Signature=fabe35c6000ffa55775c586b0ba3a68d1dde7ef0f88cafcf5e57cf73b84803cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
