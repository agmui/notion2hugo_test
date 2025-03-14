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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGSU3W2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvCipwNJ8n%2B7vi%2FbD6id2UU%2F9POGqNgrJ1KC65GP8%2BhAiBRgqMV2zWEqF7ane5tKWLO5FAh7d0rIci73%2Fw3jPtXjiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9ZZtd9oNorQyKQrKtwDmMtJ%2BLgRbLQqwv2sQJb1XRuUwBGYT56FsmrZRc1qRJc2itWm6Pufqzqblt7KVuTVWtT3h8IvB%2B7QMFeh86TgWGo0fcUSXJg7IED2BGGjPjpB50DDc%2BkOFRQRhEKHM4Gi7F0fszzYov8smVSaiO8PX9dr0hozFVtgkvPZUfzQEKNujFIJHbgiBfmCO4m%2BigeUegkI5pbUBgf872lKSLDHsfV6FB1uAEbLhSb73hIhQdV8UAnT3OR70IoeU97n3UvzYBAnPnwVYk%2BJWQYMPVx7DrXJKl1LHmeLcxVboWkwZbsABe6uUIuUedvQcLLcnmJHWWGQy511ZwaQPlQWyKif655niaQiJtdUCUwRZ1s1jcSZtq4xbaD51V1eA%2BY8NZpy1ARtDKZymNmvwF4jMTok3P9OFFtBl5m0rI5gLq5U87XP6NMmcVfdB3biAUl%2FYD08N3IJRYp1G%2BkHudTP4BUn5IszdZaqt3SSS9ZyJcNeJOuxlPNFKYTW%2BUZ4yg%2BWAAB0NAgrkQ%2FSefjRP5J8FZBBAcvT%2FSFOUft9k2QK%2Bz1cW352sp45BEfFREq4A4I03rUXkts%2Fqw%2BaY7CIk8u83qMESSwKl0NEFJYMhKjeBTFPZEFtAj2TK9gpe8z5%2BnEwhPnQvgY6pgEK8jBs8AhAGe3ukFd33ox8lLOutOsYNLnxCo0nMe%2BG1L7Co7xtYl%2B7sH4bKr3cb0pp1JsPF2QFAJEJhXoQtkSAM5KcCNi0G9yfV54SK1z19wek0XGCib3R2%2Fv0Wc5f9lF8JxBSwoqhVKFSR019pzTg5PmybxQI8INgcXrG7%2FgJb7RIOxe3VSasKOnMGDTLCOblzDO1SWQZz4OUP71rowoe1VcE0YsG&X-Amz-Signature=8f9b450a3e30843ca9df6dd149f6f6e820e9d1a0fa9c81ac0cc72f60070a98c4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGSU3W2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvCipwNJ8n%2B7vi%2FbD6id2UU%2F9POGqNgrJ1KC65GP8%2BhAiBRgqMV2zWEqF7ane5tKWLO5FAh7d0rIci73%2Fw3jPtXjiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9ZZtd9oNorQyKQrKtwDmMtJ%2BLgRbLQqwv2sQJb1XRuUwBGYT56FsmrZRc1qRJc2itWm6Pufqzqblt7KVuTVWtT3h8IvB%2B7QMFeh86TgWGo0fcUSXJg7IED2BGGjPjpB50DDc%2BkOFRQRhEKHM4Gi7F0fszzYov8smVSaiO8PX9dr0hozFVtgkvPZUfzQEKNujFIJHbgiBfmCO4m%2BigeUegkI5pbUBgf872lKSLDHsfV6FB1uAEbLhSb73hIhQdV8UAnT3OR70IoeU97n3UvzYBAnPnwVYk%2BJWQYMPVx7DrXJKl1LHmeLcxVboWkwZbsABe6uUIuUedvQcLLcnmJHWWGQy511ZwaQPlQWyKif655niaQiJtdUCUwRZ1s1jcSZtq4xbaD51V1eA%2BY8NZpy1ARtDKZymNmvwF4jMTok3P9OFFtBl5m0rI5gLq5U87XP6NMmcVfdB3biAUl%2FYD08N3IJRYp1G%2BkHudTP4BUn5IszdZaqt3SSS9ZyJcNeJOuxlPNFKYTW%2BUZ4yg%2BWAAB0NAgrkQ%2FSefjRP5J8FZBBAcvT%2FSFOUft9k2QK%2Bz1cW352sp45BEfFREq4A4I03rUXkts%2Fqw%2BaY7CIk8u83qMESSwKl0NEFJYMhKjeBTFPZEFtAj2TK9gpe8z5%2BnEwhPnQvgY6pgEK8jBs8AhAGe3ukFd33ox8lLOutOsYNLnxCo0nMe%2BG1L7Co7xtYl%2B7sH4bKr3cb0pp1JsPF2QFAJEJhXoQtkSAM5KcCNi0G9yfV54SK1z19wek0XGCib3R2%2Fv0Wc5f9lF8JxBSwoqhVKFSR019pzTg5PmybxQI8INgcXrG7%2FgJb7RIOxe3VSasKOnMGDTLCOblzDO1SWQZz4OUP71rowoe1VcE0YsG&X-Amz-Signature=386be4c3134719947f8b3732d77835693ba92bff9be2c2e6f74943f7eeed3035&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
