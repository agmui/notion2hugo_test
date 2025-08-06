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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663AV5OEI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCZKFI%2BNl%2Br4evTA2sfhbCvAfULj0dFji9zEXeBvSpKqQIgDH0DKA5Zbc2l3gnItVNvq78wrNsCCDKdBrNYjrj6%2F88q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMwJnf3f0VyT8TPyEircA%2Ff%2FwTAQZSyMr%2Fpgquke%2Bv5UpideWAzCOM68jYzAB4Iljby1O1MO7GZFnud76r5HNHIAY6R3v8R8V6llYyxWwcj7PmV107Ncx8xYTUfLa8r%2BYH7ma%2FYe9ZDohrIrRQzLeGN4eSd6CezEfLM%2F%2B3t1yh3Oxe%2FoI9lhkzDqf0OsUD3ZYs2oJNSz2UhRs3x0sNRjZOgDrzX4eoxqxVsi3v95bj5U9VlCAtZWvEz71ATh59Pe9RyiiXAib4Y2NIrbzwnO9dk8QH1eiFiB7UPU2fvkiHP6VuRShwOwPbmMp2B3PFP4B4ZHszhaCTPCkp%2B8TjtcnUQbAYRH%2FVaB1eyvgdsoTCxicTwYGnBFTCi5JlqKdHh0SW7rFHtTlcXP0oeUHh66HtKVHVHKtbd4DGBWqKL5M6o1yN2RCPlkb4m0aN%2Bilnz9IPEJIWXkaG9vKt6IopEvHlpkgbt6isu2zDmuis7YvmrG0L9ad78U6DyMzi%2Bgd6jIelf2q8neB408Ky7%2FSreG4KWtsVsAnobu39MjrfVHkLyVagolD4HMLWoW%2Fc26U739AMgF3GqljX%2FGsGw3%2Bjp9riU%2FkkndAEvM%2Bo4Q3GNOxSQddulJSvz7lVuD4DYeHaOUIS8XvL1WBS7AENoLML3Ly8QGOqUB5ccs%2FRtfoFOHWnC2JHaGFxCeOUaSBqKCnHZ0nsC99O59osFd47bIT2oCjqCmnbDm6JIDE7Mb6ytiRWr5Go8NOFr0AQN0%2BrHQ78Osc%2FVob6Yb%2B7Z8PeRUA2kSYRHB1s9OUSazqdGoJFOwiG5VSNX2qhMBZhJ0dZq2JKvFmPyvRF7qeSIZxSwjgD6HfL9oKk6P6fidd2xb%2FbfSv9IjtzI3GPwYQn2g&X-Amz-Signature=f10c875a1a74c9dc4d029d872aa2931335068efd5d44391d1bd17fa65bbc23d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663AV5OEI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCZKFI%2BNl%2Br4evTA2sfhbCvAfULj0dFji9zEXeBvSpKqQIgDH0DKA5Zbc2l3gnItVNvq78wrNsCCDKdBrNYjrj6%2F88q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMwJnf3f0VyT8TPyEircA%2Ff%2FwTAQZSyMr%2Fpgquke%2Bv5UpideWAzCOM68jYzAB4Iljby1O1MO7GZFnud76r5HNHIAY6R3v8R8V6llYyxWwcj7PmV107Ncx8xYTUfLa8r%2BYH7ma%2FYe9ZDohrIrRQzLeGN4eSd6CezEfLM%2F%2B3t1yh3Oxe%2FoI9lhkzDqf0OsUD3ZYs2oJNSz2UhRs3x0sNRjZOgDrzX4eoxqxVsi3v95bj5U9VlCAtZWvEz71ATh59Pe9RyiiXAib4Y2NIrbzwnO9dk8QH1eiFiB7UPU2fvkiHP6VuRShwOwPbmMp2B3PFP4B4ZHszhaCTPCkp%2B8TjtcnUQbAYRH%2FVaB1eyvgdsoTCxicTwYGnBFTCi5JlqKdHh0SW7rFHtTlcXP0oeUHh66HtKVHVHKtbd4DGBWqKL5M6o1yN2RCPlkb4m0aN%2Bilnz9IPEJIWXkaG9vKt6IopEvHlpkgbt6isu2zDmuis7YvmrG0L9ad78U6DyMzi%2Bgd6jIelf2q8neB408Ky7%2FSreG4KWtsVsAnobu39MjrfVHkLyVagolD4HMLWoW%2Fc26U739AMgF3GqljX%2FGsGw3%2Bjp9riU%2FkkndAEvM%2Bo4Q3GNOxSQddulJSvz7lVuD4DYeHaOUIS8XvL1WBS7AENoLML3Ly8QGOqUB5ccs%2FRtfoFOHWnC2JHaGFxCeOUaSBqKCnHZ0nsC99O59osFd47bIT2oCjqCmnbDm6JIDE7Mb6ytiRWr5Go8NOFr0AQN0%2BrHQ78Osc%2FVob6Yb%2B7Z8PeRUA2kSYRHB1s9OUSazqdGoJFOwiG5VSNX2qhMBZhJ0dZq2JKvFmPyvRF7qeSIZxSwjgD6HfL9oKk6P6fidd2xb%2FbfSv9IjtzI3GPwYQn2g&X-Amz-Signature=4fa47d95085b4bd6458fb74c3d30d57c6e0ca39fce94b137b73b24da86f7bbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
