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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3VNGE7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDj3uhstISvnwOfKbpJFzrCOZ9upPXrm5zSjSlj%2F6MUvAiBRlFJMIPb7J%2FK9NslAuparj%2FvA2Qc1vuOBVwQsxmOVRSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMrB1wuKuLcIl7zDmgKtwDoT74xn6dzK2M9TZD4Zmo8GQpZrltSSKK2t%2FKRDOlX1jx7WUWbvUPepfwV1bCq2kABu5WSqHqti7rkhF0EZqcLbgs90LqKDsQCijWt38JzPQ3OtoW3mubRSSEl%2FWioe1Qrbiqd9PWa1dN234wCSrSzmppo77HvXANHwDfqJ85WmiA0jZ9fkX2Wtexn17OfsBEYnQ8s4FILLpEmHDirZoODXPh9PEDXwoosh12EclBZbC3FJLo%2FAkz3NWD9ZSFEnhVDMivVarkWXr17JFtd4X%2FHzEmyucdwWh30XG3Pces%2B9rN6prHZ9%2F1tEtnLDnzy340sQgaY6Du1V7886o2TlZJ5lSfU%2FVYE8vs8Keh1Y%2Fz4ExwK8Eer4qcKUIeTMsXsmwbtyOoFv%2FmRl%2Bj9JkTSzpG3emrrAqWW50R7f6s6zt8EF8j1MS4%2BfB9M3YH5Z6q17Lse%2BfFg6KXaQeaesNPTuP5E7%2B8F368Mw8U%2BoQmek8w03fBSUGuTKXxqDsmmeTJstcMXqUmEGelaugZudtShoE6XHX4BX0U5quLJIDdTaD1SkeyJLHYPbEnSj9mzb03NuhHfWSOxRCcYgs%2FCKccHZW%2BO4wlU7HG2snQpkrimUgHWdCF4IfdrG0Hldw2l7ww0uaGwgY6pgGCENTqF5GHvnmeXRdKbOHvvtmKtTqBbJo2wknxJZhuxwv9Unu1RfPuRbmPw8orZaqU0VvXdmEQjCBBj7Mf8VcoJRnmQH2AwynC0Mbbzc2wcjFxuGjF6h%2B6ctgAbvC8IZOfuVJJSXVttzjjROXAGtAJczly%2FObn%2F5qpBVLK7to%2BvopSQbJpmbdWoR7L65hyBvf0FtOPrzZXXnla3IvPLmNjH%2FEERUC4&X-Amz-Signature=ff8b5c495c1b0bbc6759a0a50455062b780d90ea879898fee7ce98dcdfc4e938&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3VNGE7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDj3uhstISvnwOfKbpJFzrCOZ9upPXrm5zSjSlj%2F6MUvAiBRlFJMIPb7J%2FK9NslAuparj%2FvA2Qc1vuOBVwQsxmOVRSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMrB1wuKuLcIl7zDmgKtwDoT74xn6dzK2M9TZD4Zmo8GQpZrltSSKK2t%2FKRDOlX1jx7WUWbvUPepfwV1bCq2kABu5WSqHqti7rkhF0EZqcLbgs90LqKDsQCijWt38JzPQ3OtoW3mubRSSEl%2FWioe1Qrbiqd9PWa1dN234wCSrSzmppo77HvXANHwDfqJ85WmiA0jZ9fkX2Wtexn17OfsBEYnQ8s4FILLpEmHDirZoODXPh9PEDXwoosh12EclBZbC3FJLo%2FAkz3NWD9ZSFEnhVDMivVarkWXr17JFtd4X%2FHzEmyucdwWh30XG3Pces%2B9rN6prHZ9%2F1tEtnLDnzy340sQgaY6Du1V7886o2TlZJ5lSfU%2FVYE8vs8Keh1Y%2Fz4ExwK8Eer4qcKUIeTMsXsmwbtyOoFv%2FmRl%2Bj9JkTSzpG3emrrAqWW50R7f6s6zt8EF8j1MS4%2BfB9M3YH5Z6q17Lse%2BfFg6KXaQeaesNPTuP5E7%2B8F368Mw8U%2BoQmek8w03fBSUGuTKXxqDsmmeTJstcMXqUmEGelaugZudtShoE6XHX4BX0U5quLJIDdTaD1SkeyJLHYPbEnSj9mzb03NuhHfWSOxRCcYgs%2FCKccHZW%2BO4wlU7HG2snQpkrimUgHWdCF4IfdrG0Hldw2l7ww0uaGwgY6pgGCENTqF5GHvnmeXRdKbOHvvtmKtTqBbJo2wknxJZhuxwv9Unu1RfPuRbmPw8orZaqU0VvXdmEQjCBBj7Mf8VcoJRnmQH2AwynC0Mbbzc2wcjFxuGjF6h%2B6ctgAbvC8IZOfuVJJSXVttzjjROXAGtAJczly%2FObn%2F5qpBVLK7to%2BvopSQbJpmbdWoR7L65hyBvf0FtOPrzZXXnla3IvPLmNjH%2FEERUC4&X-Amz-Signature=ebe99dffd787746b340c6c0fb2c050f0cf4b9dacb5b2632950e2543e1d6f1fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
