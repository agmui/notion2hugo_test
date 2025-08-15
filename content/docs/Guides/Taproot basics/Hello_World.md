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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDUC3SU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCdPQj2SnEghL%2F%2BeiSq8Hj9auDx0%2F3KQGLoz1Kdj%2BWw1QIgM6%2BIwfgOAlIWjl3kbHDWCrVft75lNdzzwcZU1oUsW3oq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPrTs4v75an5Vccf9CrcAy6wtff3MGIC3YKGxZAbPzU3LQfiuqkbInPHEAVd4sDPGJfT3feQ%2F2nkNx9ZzMYafgEpAa%2FzGu2hZTt7Ow%2BBzOR4mH9xHcGJpHg684uTZHOpBS0j6EGkbZx6idiTeGTWpMr%2F9HnLsGcKiNvgtyuZPBEFCypiRz5qrxG13hgNnBTuHxQYjBhqz9Tx1qpU%2BP%2B3Q8f5DnM6i%2Bfzxbd17FFZp0oTHz3NlCep2anYwMNPrC9DjTW5LJ1x8T4lPIT%2Filj1lZT%2B9701Jo9fd9CKYTYijF1W%2FAki7iiOkDLpnH3VqQBHFctMPfcMQVoQBRWZofJlNN3Fwr7e6T37QztsvogGtlgFgug497Tk4eN9eNdK9TyncaZ7%2BSyEfHxXZ7GaqR3%2F%2BxQegozEjGE9l7jood0icnovlhegiVJNHPPGtG%2F8H2DG%2BW%2FuUfUT8hueC7nHfctvUQvFRUmQcOQgKv6FNlVjo%2B2hzQ3aU83PPHPNxBH1a0aLdZ8RwZnIZeFJS%2BpxkrZOBDGRsEpEDYJ1qFZ5FlImUSTUxpluEfkaf4GxbTmCOTVQKJD6xbmIx7x8CW9hyOkQWvYyCwtFbTeOn0rhAPCeSRYO6vSJtclhs%2FLOuXBHkVeOufQykn%2B7M9%2BlJZWxMIXb%2FcQGOqUBk2TR%2FUMy0Lr7X5kjQNRbr0%2BupJw19whYFAaM4CeK9sFHLUDgSMkouvHexjMyx77wSIiv73UiFnaXiOIJPtCA7%2BdNjJrW%2Fu4wE49A8GOffHueQ4z3QA9p2K6NK8Xvi31yaQ2d0Wyc7IjviPe5MqMo1X999yC%2FvAYOK05xp2gdKrFQzOqT3nQikiNuxSezz51N7cOS6dvcKg0MXa46cWN1LC%2FkcWMs&X-Amz-Signature=e7318dd9e314d8d638da7bf9d95dd04b1db74256391433a447fea7b51a1dcddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDUC3SU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCdPQj2SnEghL%2F%2BeiSq8Hj9auDx0%2F3KQGLoz1Kdj%2BWw1QIgM6%2BIwfgOAlIWjl3kbHDWCrVft75lNdzzwcZU1oUsW3oq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPrTs4v75an5Vccf9CrcAy6wtff3MGIC3YKGxZAbPzU3LQfiuqkbInPHEAVd4sDPGJfT3feQ%2F2nkNx9ZzMYafgEpAa%2FzGu2hZTt7Ow%2BBzOR4mH9xHcGJpHg684uTZHOpBS0j6EGkbZx6idiTeGTWpMr%2F9HnLsGcKiNvgtyuZPBEFCypiRz5qrxG13hgNnBTuHxQYjBhqz9Tx1qpU%2BP%2B3Q8f5DnM6i%2Bfzxbd17FFZp0oTHz3NlCep2anYwMNPrC9DjTW5LJ1x8T4lPIT%2Filj1lZT%2B9701Jo9fd9CKYTYijF1W%2FAki7iiOkDLpnH3VqQBHFctMPfcMQVoQBRWZofJlNN3Fwr7e6T37QztsvogGtlgFgug497Tk4eN9eNdK9TyncaZ7%2BSyEfHxXZ7GaqR3%2F%2BxQegozEjGE9l7jood0icnovlhegiVJNHPPGtG%2F8H2DG%2BW%2FuUfUT8hueC7nHfctvUQvFRUmQcOQgKv6FNlVjo%2B2hzQ3aU83PPHPNxBH1a0aLdZ8RwZnIZeFJS%2BpxkrZOBDGRsEpEDYJ1qFZ5FlImUSTUxpluEfkaf4GxbTmCOTVQKJD6xbmIx7x8CW9hyOkQWvYyCwtFbTeOn0rhAPCeSRYO6vSJtclhs%2FLOuXBHkVeOufQykn%2B7M9%2BlJZWxMIXb%2FcQGOqUBk2TR%2FUMy0Lr7X5kjQNRbr0%2BupJw19whYFAaM4CeK9sFHLUDgSMkouvHexjMyx77wSIiv73UiFnaXiOIJPtCA7%2BdNjJrW%2Fu4wE49A8GOffHueQ4z3QA9p2K6NK8Xvi31yaQ2d0Wyc7IjviPe5MqMo1X999yC%2FvAYOK05xp2gdKrFQzOqT3nQikiNuxSezz51N7cOS6dvcKg0MXa46cWN1LC%2FkcWMs&X-Amz-Signature=da603a819247919909d3651f9e906f8d053907a946b49ccee66fef4e3bffa41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
