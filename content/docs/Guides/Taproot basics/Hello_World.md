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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIERDIQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDmra03uV0xpN8H0ha8YOOn7f07Pk7YfQZWxALbCyAT8wIhAOi0g%2FnTkOQWZJK7Z%2FJ%2BPHqK41G0Jrmypxl6uqLfQCaaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzgmBcFkZpelz%2BC%2Bgq3APdf01%2Fq4NqjFF%2FhFabqAdyr41ZtjDp%2Bigw9IMkjLGhRhwCvPfTEEEYT3YV0zKkVY3bVoSczqIb17ooGC66O%2BLMOe%2FM9DknsqFDvrahRH1YuwpyqLhzNZxwy34fqI0klemtjF%2B4Jx0h4V7fp7zRr00X%2F%2F%2B2%2FLk%2FlD%2BSLSVJ38kryX%2B1Lz7lAwNv0LvvJwSRNgAAJMALf0iJAzcNFTVaOby1N8Xf%2Fvi1zM5oBsrvMQTwkd5XP7sLhM6eDixtjym8rEW6WKNLbeOF7pjTs6kB6Z%2FNjRa8qph8XvP8YLDMUVlqcOycQnzb76lM1hfodyYbXlxOWb4VQGZaItP9KZf3QDwxIwrNLgmACZSWKEEH7IpvBhRG0BAZw1MkOFefbJp2kcVbs1zTzUAr58fr7w5tiNywIGbjIxE0FBwVYG%2B8jR3n6ZaAguxDp%2B97hzaiidZ%2Fx8BKIAq2tn2Vj0BrcrH8kjYw57bDyg%2FGXTKNq4mUG%2BrYi2w5KmbDqRR9khkeEiaWE22RI2bZuoOopRnfQYxnkRV4%2Fhz%2F9jYyTepYyg3qxC74td2jcm6Kz%2Bdv2UjbcA1WAdCDnctuLCfZB67VoXSyUvhOYFNehXiVmmQzIgdGoWaU5ACQ917Tr56Q7y6GKjCw2t2%2FBjqkAVPfX5hdTOJLWNUHwn9xy%2F%2FmesBh%2FuU2RuEclLuo7S2apa5VeB82nc6Lq2Fim0suHz%2Br0G8YqG%2BMqf%2BkQBjT%2F5xy7V0PzI8iN0KkYx%2B9B83Xao6H%2B8rt3agi2iBlCXPQQVTRTKNB6ZzSfk7fuLqEAMVt6UETICTdlR8Yj0nU8Z8AFoIm%2BJ%2B0E2HVrNGauGRpWolwNtNgFCe8FGwfmKQ3jejeohXz&X-Amz-Signature=e295644ce80980e040b3c784d08ad0fe7eb36a1cd4b06613292c8db22bc2eade&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIERDIQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDmra03uV0xpN8H0ha8YOOn7f07Pk7YfQZWxALbCyAT8wIhAOi0g%2FnTkOQWZJK7Z%2FJ%2BPHqK41G0Jrmypxl6uqLfQCaaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzgmBcFkZpelz%2BC%2Bgq3APdf01%2Fq4NqjFF%2FhFabqAdyr41ZtjDp%2Bigw9IMkjLGhRhwCvPfTEEEYT3YV0zKkVY3bVoSczqIb17ooGC66O%2BLMOe%2FM9DknsqFDvrahRH1YuwpyqLhzNZxwy34fqI0klemtjF%2B4Jx0h4V7fp7zRr00X%2F%2F%2B2%2FLk%2FlD%2BSLSVJ38kryX%2B1Lz7lAwNv0LvvJwSRNgAAJMALf0iJAzcNFTVaOby1N8Xf%2Fvi1zM5oBsrvMQTwkd5XP7sLhM6eDixtjym8rEW6WKNLbeOF7pjTs6kB6Z%2FNjRa8qph8XvP8YLDMUVlqcOycQnzb76lM1hfodyYbXlxOWb4VQGZaItP9KZf3QDwxIwrNLgmACZSWKEEH7IpvBhRG0BAZw1MkOFefbJp2kcVbs1zTzUAr58fr7w5tiNywIGbjIxE0FBwVYG%2B8jR3n6ZaAguxDp%2B97hzaiidZ%2Fx8BKIAq2tn2Vj0BrcrH8kjYw57bDyg%2FGXTKNq4mUG%2BrYi2w5KmbDqRR9khkeEiaWE22RI2bZuoOopRnfQYxnkRV4%2Fhz%2F9jYyTepYyg3qxC74td2jcm6Kz%2Bdv2UjbcA1WAdCDnctuLCfZB67VoXSyUvhOYFNehXiVmmQzIgdGoWaU5ACQ917Tr56Q7y6GKjCw2t2%2FBjqkAVPfX5hdTOJLWNUHwn9xy%2F%2FmesBh%2FuU2RuEclLuo7S2apa5VeB82nc6Lq2Fim0suHz%2Br0G8YqG%2BMqf%2BkQBjT%2F5xy7V0PzI8iN0KkYx%2B9B83Xao6H%2B8rt3agi2iBlCXPQQVTRTKNB6ZzSfk7fuLqEAMVt6UETICTdlR8Yj0nU8Z8AFoIm%2BJ%2B0E2HVrNGauGRpWolwNtNgFCe8FGwfmKQ3jejeohXz&X-Amz-Signature=87d2bf668c18494342b3a49a2892597ffd71ce55fd402696eae6bcd2faaf76a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
