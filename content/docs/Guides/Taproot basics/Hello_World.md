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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGEMIV5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDWCBOD1HJBw%2BkoBJ%2F%2Fs1Aioaeg3e6nZA9%2FNzlRaIvzaAiAtvmC26hXpNAq6iAr2gbdJe2UOaVw%2Ffb9JKxgzCrFGBCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCNM4BE8EO103L5EaKtwDF6CwuFyr6uoNGbg9aFvmxFgA89ruufDg51w98sa%2BBM8dGiwcLym%2FEvChkTI5vC%2BQ4ciVSntJzCYMALYWu%2FZWJKF2riGKMKwOeyssdIs8ltA%2BlyarZd77cjSf12m2WZXJs%2BIE%2BQVvm%2FjJvE38m0Hkoq914K4j7ZLEnvjMh80bhdolNiukCCpcTRQsgAit8xYqo2s3t%2F73cyooazr8kOsdzK9GVhW4QduS35SpdQjReGIrWGyRkuXSAeiK1aPLP8ZAXzzJd1rF1ZTlsLyE0kJWzQf3hiubjt7H9I9grrZItai1zaodjwe%2FT2GMHwWeOHY00ciHtGoAOX8UReMMoFhseTSwbBJSiZ9GziA5xuzVgZHax361tToNWu3wj8xXOt%2BOGPi6SfstZnyo%2BwoiunXyH1afDwt%2ByT5JOu7sRax%2BvZru6Er%2FjziRnjYdchuhqXD6AJ%2Bd1dUMOggmKaMw3xmdbG3UUJuqMLHEOgV1ZZnX7gRszF%2BnCBwKfBTqi0sR%2B2LOPXxeIjXOVyJ7J%2F8lHBDSiCck%2BbIgzT8j0mEF6T6Mrqta%2Fxd9WthLzdGGDdqlO3hFYI9ZEUgdlCyui2Mx6IybbefJ%2F4vOtkzOWmlW63Ybt4Ilyxj992zP8HNtDBUw7YGRwAY6pgFydUkS8gpJ2QgPRM1nCMBwx%2BmHtCV5f%2BktUJmbJYOiKRe9Pg6aaINvGywJtdg3KjTOmoprFdVWFkZFRBdNOHz8eyQRmDYGHksx%2BS60VbH9quZgZa1Zff1Kbgtoahi0hXE0gqoLVRLrtGFzZNdpfKGklx1aTpAnqYDBCI1IBjMQRvyfyUWVKeuDcGMEtUpk7tE0Ahzrx2AiobbtPJgGvq8uc6gZh4Sg&X-Amz-Signature=a2f4beb2a0cde4d79e24f4628868f0b95500a03900747d5646680f8f077e12a9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGEMIV5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDWCBOD1HJBw%2BkoBJ%2F%2Fs1Aioaeg3e6nZA9%2FNzlRaIvzaAiAtvmC26hXpNAq6iAr2gbdJe2UOaVw%2Ffb9JKxgzCrFGBCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCNM4BE8EO103L5EaKtwDF6CwuFyr6uoNGbg9aFvmxFgA89ruufDg51w98sa%2BBM8dGiwcLym%2FEvChkTI5vC%2BQ4ciVSntJzCYMALYWu%2FZWJKF2riGKMKwOeyssdIs8ltA%2BlyarZd77cjSf12m2WZXJs%2BIE%2BQVvm%2FjJvE38m0Hkoq914K4j7ZLEnvjMh80bhdolNiukCCpcTRQsgAit8xYqo2s3t%2F73cyooazr8kOsdzK9GVhW4QduS35SpdQjReGIrWGyRkuXSAeiK1aPLP8ZAXzzJd1rF1ZTlsLyE0kJWzQf3hiubjt7H9I9grrZItai1zaodjwe%2FT2GMHwWeOHY00ciHtGoAOX8UReMMoFhseTSwbBJSiZ9GziA5xuzVgZHax361tToNWu3wj8xXOt%2BOGPi6SfstZnyo%2BwoiunXyH1afDwt%2ByT5JOu7sRax%2BvZru6Er%2FjziRnjYdchuhqXD6AJ%2Bd1dUMOggmKaMw3xmdbG3UUJuqMLHEOgV1ZZnX7gRszF%2BnCBwKfBTqi0sR%2B2LOPXxeIjXOVyJ7J%2F8lHBDSiCck%2BbIgzT8j0mEF6T6Mrqta%2Fxd9WthLzdGGDdqlO3hFYI9ZEUgdlCyui2Mx6IybbefJ%2F4vOtkzOWmlW63Ybt4Ilyxj992zP8HNtDBUw7YGRwAY6pgFydUkS8gpJ2QgPRM1nCMBwx%2BmHtCV5f%2BktUJmbJYOiKRe9Pg6aaINvGywJtdg3KjTOmoprFdVWFkZFRBdNOHz8eyQRmDYGHksx%2BS60VbH9quZgZa1Zff1Kbgtoahi0hXE0gqoLVRLrtGFzZNdpfKGklx1aTpAnqYDBCI1IBjMQRvyfyUWVKeuDcGMEtUpk7tE0Ahzrx2AiobbtPJgGvq8uc6gZh4Sg&X-Amz-Signature=10b62c93d9559c5fb49592d6e1c439f3439d5bf9fbf6bbbfb690ac2ec6c02c92&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
