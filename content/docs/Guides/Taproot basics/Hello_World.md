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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMRDL7T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICJH%2B292O7PHxwOE7IUAPTemRQr%2BiFEUoKkFq2Ou2R34AiBlWSlAtcqwSJrz5wQuIeMrJfGaQT6Ig3NnsFQso83pPyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCk6rMQrSIxkvFWaCKtwDa2YUYiU891G2Qlk%2FvMP3CfFbgSsKtRyDzr1Tx4cuHfDrfDn%2FU%2BbFw%2Bpj0lQF6DqN0A0VO2tVIZZb7xjWUF%2B1%2F4Z4xfsW4sqez4oDYHUREnEnml1AJmQlYvd%2BHoIahu4Dh3ZNevt7VlJ130W5pCpkjhXCEza7%2FiT1dn2FVAH%2FEGC5LzrfpmMLuGYlmLBUkj%2FDV%2FSGje493RoYHvw%2BK0fieqFilbAQw5i1PxCOTp4NZjufPqntcoSibxWm2aBGd7eYB8easyptaMoXaR8NoeK%2Bw%2FgrxeTRxO3eK3xR%2FAmQDUJ0Ki2csRvJx2gSfzIlwruEYUMCrDPPyBgY8G8o98DomvQw5hA3e13Tk3%2FCJFsjAsEU3dcDZtF4mYbCSkIvxOg9Jr8%2Ft7gNyZ223GFcuTw8JmNPZ1HcL74a%2FLki380BRGP21%2F8ppZCID%2FQ4IDxL8NCrdzx%2Fgkeioc%2BDEUvzv8%2B5i%2B9RG1T4ctcA3vGUIgPHhq9OL%2B%2Fo3RHcgCQZ5ODwYy4nhA7xA6QBnAUdpgtVJ4T9xEL4RkxGk0Tl52AOt6vBZ3tjwKd6J%2FPLVxt1blG8VQjHYDY%2Fu4%2FBzOhGzJJcj0pEocM5DUDcVoLRGvvejHGSGaiHJt5gEfDyVJZiXjUw8e2lvwY6pgGZR4pjhQJxOntNXtAds2919EZ8JhsfqxSS86ibsPgaGyqEEmKl4rpZaM4GKnJn9d9ZpV2lG2%2FfRrYOKHz%2FiaOSVJiv5MIO9HPqTA%2Fp7sYUaOT9s%2FsTOVuq2ip21Kkhr5EgR%2FCfFzMLzZvLnZOIZaPNjOHkXBDF1t3vsB1Y0g8pt1NCy5eL8Stin%2BITD6WlkcGMFWCMLy6%2BCzAVvZDhRAZjh7RXc86y&X-Amz-Signature=84528175a1c60dfc77c341c7bc4c213bb1dd6ad2fd68f5c230f31708e2dafcba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMRDL7T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICJH%2B292O7PHxwOE7IUAPTemRQr%2BiFEUoKkFq2Ou2R34AiBlWSlAtcqwSJrz5wQuIeMrJfGaQT6Ig3NnsFQso83pPyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCk6rMQrSIxkvFWaCKtwDa2YUYiU891G2Qlk%2FvMP3CfFbgSsKtRyDzr1Tx4cuHfDrfDn%2FU%2BbFw%2Bpj0lQF6DqN0A0VO2tVIZZb7xjWUF%2B1%2F4Z4xfsW4sqez4oDYHUREnEnml1AJmQlYvd%2BHoIahu4Dh3ZNevt7VlJ130W5pCpkjhXCEza7%2FiT1dn2FVAH%2FEGC5LzrfpmMLuGYlmLBUkj%2FDV%2FSGje493RoYHvw%2BK0fieqFilbAQw5i1PxCOTp4NZjufPqntcoSibxWm2aBGd7eYB8easyptaMoXaR8NoeK%2Bw%2FgrxeTRxO3eK3xR%2FAmQDUJ0Ki2csRvJx2gSfzIlwruEYUMCrDPPyBgY8G8o98DomvQw5hA3e13Tk3%2FCJFsjAsEU3dcDZtF4mYbCSkIvxOg9Jr8%2Ft7gNyZ223GFcuTw8JmNPZ1HcL74a%2FLki380BRGP21%2F8ppZCID%2FQ4IDxL8NCrdzx%2Fgkeioc%2BDEUvzv8%2B5i%2B9RG1T4ctcA3vGUIgPHhq9OL%2B%2Fo3RHcgCQZ5ODwYy4nhA7xA6QBnAUdpgtVJ4T9xEL4RkxGk0Tl52AOt6vBZ3tjwKd6J%2FPLVxt1blG8VQjHYDY%2Fu4%2FBzOhGzJJcj0pEocM5DUDcVoLRGvvejHGSGaiHJt5gEfDyVJZiXjUw8e2lvwY6pgGZR4pjhQJxOntNXtAds2919EZ8JhsfqxSS86ibsPgaGyqEEmKl4rpZaM4GKnJn9d9ZpV2lG2%2FfRrYOKHz%2FiaOSVJiv5MIO9HPqTA%2Fp7sYUaOT9s%2FsTOVuq2ip21Kkhr5EgR%2FCfFzMLzZvLnZOIZaPNjOHkXBDF1t3vsB1Y0g8pt1NCy5eL8Stin%2BITD6WlkcGMFWCMLy6%2BCzAVvZDhRAZjh7RXc86y&X-Amz-Signature=99322205a9fd8a3647bf073d808f3aca72b49365d913fcf16218712ec6ede224&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
