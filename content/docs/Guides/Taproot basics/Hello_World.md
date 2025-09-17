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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDABEB5J%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2FPI8or9vOgmdZqelYnn23iJyN0kCZ6GzlVyA8Eb%2FBAIhAKzsOPytl7BtspK4o2syt%2Ft6LqLoWsSkf4xrv3hjeZ6ZKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykeyc07%2BahHMNDxxkq3ANb%2B059m%2F%2F%2FV54NBDzcS%2Fp%2Fc0DsQI0Y4elJUXxojY5GUjKxLnzTP57bYcbqXzJtJPdVz2T48n%2FJlnU1QnbuXkWRwQTtDnzPlrKYWM4FnmL9stN9etUmDg5huLpHm6sFBCpstwnyQx%2FXT8OX7lAJnzwvbK3aFo8AI4aBOk3hNQMzoZPeQvHrs1XF20MCdB6KXQpRgXanuIgauTFQcmiqlqd1oI2KrAS5gZfngQ0hOb%2FZyCiibnjnSBN8H3X2VM%2Bd4BmEjG2TvtO8CN4o6X6osgMsNPQVWWz%2FFbDYdpjHDbPA2BvVIFr4n%2Fibte3QJcChswn1BIzgZPUsm5ohLYRn8YqFd%2B7Cv6QE1ZaGkAWj8ihQ9UZmO7gkyUnzQkDjqy3jKteRfI813heEg9WE7Q434jhEo7Eo8BqAMtnR0BYE8WFBfUKcyiOXOxE9XwYH%2FLtMxPA3dWWswh6MSHT8oPuBHGrC4w%2BEHC87teWjuerRNTC9v8URx72jlJgWbr8yr%2FE7%2BaAskWJ30K8tZ18%2BJc%2FD9E%2BivkxSkH9o8HAvCmtDR3SI5yoHaiMK127RCo%2FsLIe%2FFoCUfEooIcObxSBmW0FLpeKbZbpJi%2Fs4d4mP478XrHimpB17Oo5pOTTQrTkgmTDd76fGBjqkAXaVqCOIphLZTorSSiRgXK%2FpyH%2FseCDUtkFhjCHvRzltU9x7Tdgqd7EoX9JG%2FVkh%2Fm8TKfKj3s1G4M1pZvEGd6P8KSCXPAwTLVKhKyo8aereVh9CGsgxzGNSvDkRpMkf0ZZsibfrgH8ffRGl0EOE2volF1jrvnI0BhfuNLeGedberVQ03geZDRf43vEUyWTbLyToiaRWdxgqggwt2ACkGrFYrgSa&X-Amz-Signature=fe97f5f4095442801c667d3abdc4875ca4caf0dc9043da75b415b704c050cea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDABEB5J%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2FPI8or9vOgmdZqelYnn23iJyN0kCZ6GzlVyA8Eb%2FBAIhAKzsOPytl7BtspK4o2syt%2Ft6LqLoWsSkf4xrv3hjeZ6ZKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykeyc07%2BahHMNDxxkq3ANb%2B059m%2F%2F%2FV54NBDzcS%2Fp%2Fc0DsQI0Y4elJUXxojY5GUjKxLnzTP57bYcbqXzJtJPdVz2T48n%2FJlnU1QnbuXkWRwQTtDnzPlrKYWM4FnmL9stN9etUmDg5huLpHm6sFBCpstwnyQx%2FXT8OX7lAJnzwvbK3aFo8AI4aBOk3hNQMzoZPeQvHrs1XF20MCdB6KXQpRgXanuIgauTFQcmiqlqd1oI2KrAS5gZfngQ0hOb%2FZyCiibnjnSBN8H3X2VM%2Bd4BmEjG2TvtO8CN4o6X6osgMsNPQVWWz%2FFbDYdpjHDbPA2BvVIFr4n%2Fibte3QJcChswn1BIzgZPUsm5ohLYRn8YqFd%2B7Cv6QE1ZaGkAWj8ihQ9UZmO7gkyUnzQkDjqy3jKteRfI813heEg9WE7Q434jhEo7Eo8BqAMtnR0BYE8WFBfUKcyiOXOxE9XwYH%2FLtMxPA3dWWswh6MSHT8oPuBHGrC4w%2BEHC87teWjuerRNTC9v8URx72jlJgWbr8yr%2FE7%2BaAskWJ30K8tZ18%2BJc%2FD9E%2BivkxSkH9o8HAvCmtDR3SI5yoHaiMK127RCo%2FsLIe%2FFoCUfEooIcObxSBmW0FLpeKbZbpJi%2Fs4d4mP478XrHimpB17Oo5pOTTQrTkgmTDd76fGBjqkAXaVqCOIphLZTorSSiRgXK%2FpyH%2FseCDUtkFhjCHvRzltU9x7Tdgqd7EoX9JG%2FVkh%2Fm8TKfKj3s1G4M1pZvEGd6P8KSCXPAwTLVKhKyo8aereVh9CGsgxzGNSvDkRpMkf0ZZsibfrgH8ffRGl0EOE2volF1jrvnI0BhfuNLeGedberVQ03geZDRf43vEUyWTbLyToiaRWdxgqggwt2ACkGrFYrgSa&X-Amz-Signature=a4a5543eb0e04b93729827449113c728d0fcd7d39f74c521141be16b252bfb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
