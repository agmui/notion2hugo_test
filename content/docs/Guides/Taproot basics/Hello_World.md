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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MRVPUP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWmDGL3p%2FhgIU4301N%2Fr%2B5Dxvpg3HfSS3tTS7a3wuagIgOzz2YmTTLL3Qe7SP8H3X520vXW0nKmAKn%2F0%2FIpaaE1Qq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCz9NsAQ9ItWy5cIYSrcAwbOhLQeFMiKOEHaO7UvMT77%2BwkRGD3%2FyI6rdoCeHPYGvvFGRdU72LWMoWOZ0gEN%2F%2FxD8ayhFEjXFsvyrZF04ipUe223HSS7g7jUGMK6o6VGt73ZiFH14tlzks2n66FcqOEEw9uCC87nX%2FvZ5TBLktFMeSO%2BYo0yr3ggLHx2bTYoCnhDeZTUY9ToOSLlfQ681e7k2sREBnAgDDghRrxMB6s%2BEHctq7D07XLn4FBXVf1QttbJlEebR7OLQHhdVbzYfNKQD1eZeJj7LKQ1w1BAqessWdymfagFDAnZiv0p2YMzeLL%2FmsnvybTXNAImIrtqjLAH3XDogQyusKmTYv%2Fa1Xbvy1GzAweMdSxdEHunQ9V3x8eQ7bdSPlUnTO9hSU7xo%2B1%2Fh%2FUPPSJfFaTYDBkx4%2FNkt5cLMeTugWjpcPCa65gOVTMcGnaHR%2BKDT5TJQYSRUxuCbeiukNiWUxpYwJqvyBPF6%2BRp%2Fuo6bUBZGzoL44Rnwvx2Lp9dWWb9qkyfMmXMcS1HCkGmkN%2BbuYpQcrkWUy50pkvd97BUGJDmqWJmGNhR44JitD0nPBPbh42KuK%2BxVEtN8hWBJG6XckeQXh5SlwTgkFsZDHvWdq4j5NCxiI6hLUjKQ8o0rg4PL4F2MM%2BxisIGOqUB7pm2%2BciVpohjgkiDLxif80i3LBcTwklD7FAiuJHWYy%2B8dPtXRIa8v%2B2SAKRnwhJySNpPGZWHUQj7LIk%2FWVHHMoWCoKgfay2Ob1ifjBuoHmSSKCofJ8ik3E%2Bh8e26DMhlRra6vvdS%2BFxMeyyugzmQLxbyoaH5zfI8garYyq7iktiC0g2SDrqjKPe9ycaSbS5WlMISuSee2BxEgTVKRFib%2Bucp8VYu&X-Amz-Signature=300eca795d915e66c0bd147a3dab1f95a7490d42be8c9f090cc230a194dc4a42&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MRVPUP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWmDGL3p%2FhgIU4301N%2Fr%2B5Dxvpg3HfSS3tTS7a3wuagIgOzz2YmTTLL3Qe7SP8H3X520vXW0nKmAKn%2F0%2FIpaaE1Qq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCz9NsAQ9ItWy5cIYSrcAwbOhLQeFMiKOEHaO7UvMT77%2BwkRGD3%2FyI6rdoCeHPYGvvFGRdU72LWMoWOZ0gEN%2F%2FxD8ayhFEjXFsvyrZF04ipUe223HSS7g7jUGMK6o6VGt73ZiFH14tlzks2n66FcqOEEw9uCC87nX%2FvZ5TBLktFMeSO%2BYo0yr3ggLHx2bTYoCnhDeZTUY9ToOSLlfQ681e7k2sREBnAgDDghRrxMB6s%2BEHctq7D07XLn4FBXVf1QttbJlEebR7OLQHhdVbzYfNKQD1eZeJj7LKQ1w1BAqessWdymfagFDAnZiv0p2YMzeLL%2FmsnvybTXNAImIrtqjLAH3XDogQyusKmTYv%2Fa1Xbvy1GzAweMdSxdEHunQ9V3x8eQ7bdSPlUnTO9hSU7xo%2B1%2Fh%2FUPPSJfFaTYDBkx4%2FNkt5cLMeTugWjpcPCa65gOVTMcGnaHR%2BKDT5TJQYSRUxuCbeiukNiWUxpYwJqvyBPF6%2BRp%2Fuo6bUBZGzoL44Rnwvx2Lp9dWWb9qkyfMmXMcS1HCkGmkN%2BbuYpQcrkWUy50pkvd97BUGJDmqWJmGNhR44JitD0nPBPbh42KuK%2BxVEtN8hWBJG6XckeQXh5SlwTgkFsZDHvWdq4j5NCxiI6hLUjKQ8o0rg4PL4F2MM%2BxisIGOqUB7pm2%2BciVpohjgkiDLxif80i3LBcTwklD7FAiuJHWYy%2B8dPtXRIa8v%2B2SAKRnwhJySNpPGZWHUQj7LIk%2FWVHHMoWCoKgfay2Ob1ifjBuoHmSSKCofJ8ik3E%2Bh8e26DMhlRra6vvdS%2BFxMeyyugzmQLxbyoaH5zfI8garYyq7iktiC0g2SDrqjKPe9ycaSbS5WlMISuSee2BxEgTVKRFib%2Bucp8VYu&X-Amz-Signature=84967519015b7e9f8544e165450cc0e3603e796fd6e29c47d2642dafc4b5db6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
