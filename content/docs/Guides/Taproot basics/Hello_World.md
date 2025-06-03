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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIV5JI66%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDLjSwDXCr%2BQHyJkbaXlLkYwrtR%2BOLPeQ3wt5N6KnGfjwIhAOeH4w%2Bk3R04e5NKHmE27mbsZxbENTddMFYIeirR8qQyKv8DCBYQABoMNjM3NDIzMTgzODA1IgyyeyzqNg81V5WC0mgq3AO%2FGnwCm%2BY15oSvWyZdTG3Vyki8NFacY4Ef9NLS%2FBKgOukCGgjBDPTutgdJAcy8GELE%2FTVp%2B0okqIPNZOhBW1sHpndeNHpHYPLyOMUx%2F98Sgf%2Fu00g9nu8zBJ23Q6HmV09yg9jxKRHbd5%2F2b4coTukglE3mTQfqhUrKx0XauRz%2FCGHUFUVqjQEnzTAev9Lg3mQzGkPAwlXkoHIdZ0WW7N%2FQLDvIekGlncmlmRJICqxZ2jx4m4xgVEhq%2FJ4lvmFkJu2NSqMZ1PNX%2F9DNSn%2FA7P7%2Fbbhh1RfG6FsYQjLxbQF1POPT6OP2c90HsnV7mR0%2BP3QkE2HJNj6%2Bh2jkVJZ4oEXTm0aN2onVi%2Bp%2Bu69dcFAe03cpUMX1%2F9Z%2FZSEiCh5SFjM84aVfry9s%2B1la%2BVLfAHrG9nxzTvaDYekFefqZMlOyzS%2Fa3%2F3jkxjcfMTWtrNpBz1KaHJx0WpVO22CR1KI57zpKVAFWaMH6H2puEFezac%2BCYT2C%2FJXqJrCLZSLbynrNpR46qDQ%2FCsrmjD1rM7q7U%2Fa%2BQnYfInIPY4Osbyr4IVfDn2iu1d9K%2BucG9dQG2v1CHbMpfHUS7SIeCgORMTKMIjk3IoqlT%2BFgVrQ6CFhY3hYIShXGAmnsMt%2BEVgwODDD5vvBBjqkAUF9EeHFJ7vRQhMpot7CbwBDorAIXif4O%2FKe%2F6gE7%2BoL9XRZJQoT%2BTgQTvRXN%2BOzH3jlc88pTFTbGpuv8QhMidyL4NSCKQ%2Be5RMr5CUEid9XPWaY1KKCkqxWHFio%2FQxN8AmEXgD1LI4ZKaTKonEg9swBlOLsa34WgXr4KO379J19jM42ZLAWMXBMnGZpUthMNXA%2FciTDyaXyB8VuCnXRDQ6uQ7cH&X-Amz-Signature=2a326fe921549c29d916a9566ad08eb6d4da95b9215c0b1e28dd94e0f1f08bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIV5JI66%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDLjSwDXCr%2BQHyJkbaXlLkYwrtR%2BOLPeQ3wt5N6KnGfjwIhAOeH4w%2Bk3R04e5NKHmE27mbsZxbENTddMFYIeirR8qQyKv8DCBYQABoMNjM3NDIzMTgzODA1IgyyeyzqNg81V5WC0mgq3AO%2FGnwCm%2BY15oSvWyZdTG3Vyki8NFacY4Ef9NLS%2FBKgOukCGgjBDPTutgdJAcy8GELE%2FTVp%2B0okqIPNZOhBW1sHpndeNHpHYPLyOMUx%2F98Sgf%2Fu00g9nu8zBJ23Q6HmV09yg9jxKRHbd5%2F2b4coTukglE3mTQfqhUrKx0XauRz%2FCGHUFUVqjQEnzTAev9Lg3mQzGkPAwlXkoHIdZ0WW7N%2FQLDvIekGlncmlmRJICqxZ2jx4m4xgVEhq%2FJ4lvmFkJu2NSqMZ1PNX%2F9DNSn%2FA7P7%2Fbbhh1RfG6FsYQjLxbQF1POPT6OP2c90HsnV7mR0%2BP3QkE2HJNj6%2Bh2jkVJZ4oEXTm0aN2onVi%2Bp%2Bu69dcFAe03cpUMX1%2F9Z%2FZSEiCh5SFjM84aVfry9s%2B1la%2BVLfAHrG9nxzTvaDYekFefqZMlOyzS%2Fa3%2F3jkxjcfMTWtrNpBz1KaHJx0WpVO22CR1KI57zpKVAFWaMH6H2puEFezac%2BCYT2C%2FJXqJrCLZSLbynrNpR46qDQ%2FCsrmjD1rM7q7U%2Fa%2BQnYfInIPY4Osbyr4IVfDn2iu1d9K%2BucG9dQG2v1CHbMpfHUS7SIeCgORMTKMIjk3IoqlT%2BFgVrQ6CFhY3hYIShXGAmnsMt%2BEVgwODDD5vvBBjqkAUF9EeHFJ7vRQhMpot7CbwBDorAIXif4O%2FKe%2F6gE7%2BoL9XRZJQoT%2BTgQTvRXN%2BOzH3jlc88pTFTbGpuv8QhMidyL4NSCKQ%2Be5RMr5CUEid9XPWaY1KKCkqxWHFio%2FQxN8AmEXgD1LI4ZKaTKonEg9swBlOLsa34WgXr4KO379J19jM42ZLAWMXBMnGZpUthMNXA%2FciTDyaXyB8VuCnXRDQ6uQ7cH&X-Amz-Signature=9f234ce5d1a6648e74e51659a5f37e21a5bce689300d3371d2a36cc97d9ffb79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
