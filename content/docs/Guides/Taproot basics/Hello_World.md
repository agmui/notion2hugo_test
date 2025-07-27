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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4TTE27%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCv5Q%2F%2BgKMPAIyljnRkD6nB%2BB0UI8m6doK7fIrTwAyQBwIhAMNisLfwLgutWuT5ke4ra65lSIV8B0QNoRXiiMCdgG6FKv8DCH4QABoMNjM3NDIzMTgzODA1IgwiJhBe%2FSauj19un8Eq3ANJdhb%2Bkqx6GE%2BmP8oowsQtEV%2BGpD1VpVhzp4Xu6LKQCZWkHayXRx06QVK%2Fa%2B34mmvM0fXWwEJwGYM3vhGOBGDIjoxGvGjtO7KzoAqoS%2FJ8JMmAs3I7pumU9dBlVcLPAu0EreJogPLKe9KJgrB2m1J%2FFugcGS2twj0alt2aFVyqpFUL6ozMcsJ5Bqai2KUWlE1J0%2Fq16ZQ11GfRTXbm3vJd%2F0uYrR942INmFkYf2CYvBaaaolcgvVH63zboTSofyYZk7PV%2F2F414QZKKux%2BBYkXaYJT8B59LUGQxoFmVunV5uiG6dmWkEnPw23Kyl%2FAjCqLeBlkkFL6VCYtNuGIMt6HycKWWihsD7voikP48bUfT7vSgoICuC5UaHBWWF96ufgqwaSyO%2FQeueiUY5H9nRHJ%2FhQNb0PYXgkG4mHp6uNRUZ0iwKjIMitGawtLQjDQwqo%2Fy%2FNZ8sLFFvCN3%2FRGmLhXBGV0CCrJB7URrXBgDto3vWjLiMZQ8xRtqXDOKoJLicWQ9sN8mbaFCIprW9rY%2FLTEnEArykLfPTab6iV6ZaTgzthiOGPZfAbXpmORqCMrY%2FdI97LY%2BKsLtJn%2BYJAQZ2c%2BXK7GKskJwGdvfCLjc7zkNuW%2F5BJe4upYdn6H6jDOpJrEBjqkARiBFJZBwTfY8mFclplMZ9kNkwvJEaftfG1EUVM%2BB7i%2BVMiQ3umH3xT8xstNyZrCRH5fo5bycV5YcLFOQpJgSykpm1eLVqXC9XOlFNR0hl1ELVpyVxNtMArJFkftEANvA1eTMz8fUNd8SE2vuKrASLqXo6Z3fjkhrFR99C6QAdWLmDjLzyEW4ffuJqo7mQ8ORgKS1nTEoQQ0YRagl2mu7y7rzins&X-Amz-Signature=7088997e53babafbdd409b5fc8a9aa559701c527671076c052b7eb3c441f23b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF4TTE27%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCv5Q%2F%2BgKMPAIyljnRkD6nB%2BB0UI8m6doK7fIrTwAyQBwIhAMNisLfwLgutWuT5ke4ra65lSIV8B0QNoRXiiMCdgG6FKv8DCH4QABoMNjM3NDIzMTgzODA1IgwiJhBe%2FSauj19un8Eq3ANJdhb%2Bkqx6GE%2BmP8oowsQtEV%2BGpD1VpVhzp4Xu6LKQCZWkHayXRx06QVK%2Fa%2B34mmvM0fXWwEJwGYM3vhGOBGDIjoxGvGjtO7KzoAqoS%2FJ8JMmAs3I7pumU9dBlVcLPAu0EreJogPLKe9KJgrB2m1J%2FFugcGS2twj0alt2aFVyqpFUL6ozMcsJ5Bqai2KUWlE1J0%2Fq16ZQ11GfRTXbm3vJd%2F0uYrR942INmFkYf2CYvBaaaolcgvVH63zboTSofyYZk7PV%2F2F414QZKKux%2BBYkXaYJT8B59LUGQxoFmVunV5uiG6dmWkEnPw23Kyl%2FAjCqLeBlkkFL6VCYtNuGIMt6HycKWWihsD7voikP48bUfT7vSgoICuC5UaHBWWF96ufgqwaSyO%2FQeueiUY5H9nRHJ%2FhQNb0PYXgkG4mHp6uNRUZ0iwKjIMitGawtLQjDQwqo%2Fy%2FNZ8sLFFvCN3%2FRGmLhXBGV0CCrJB7URrXBgDto3vWjLiMZQ8xRtqXDOKoJLicWQ9sN8mbaFCIprW9rY%2FLTEnEArykLfPTab6iV6ZaTgzthiOGPZfAbXpmORqCMrY%2FdI97LY%2BKsLtJn%2BYJAQZ2c%2BXK7GKskJwGdvfCLjc7zkNuW%2F5BJe4upYdn6H6jDOpJrEBjqkARiBFJZBwTfY8mFclplMZ9kNkwvJEaftfG1EUVM%2BB7i%2BVMiQ3umH3xT8xstNyZrCRH5fo5bycV5YcLFOQpJgSykpm1eLVqXC9XOlFNR0hl1ELVpyVxNtMArJFkftEANvA1eTMz8fUNd8SE2vuKrASLqXo6Z3fjkhrFR99C6QAdWLmDjLzyEW4ffuJqo7mQ8ORgKS1nTEoQQ0YRagl2mu7y7rzins&X-Amz-Signature=3d11ee89d0cb2c225dd0b7d8b6b12627d0d06ccfaebee70676e8bf4c425d8ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
