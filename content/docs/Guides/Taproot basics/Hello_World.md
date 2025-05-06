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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTN34VF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjAWagjnhpnJ2HgcWosZegTIZtIAXshQ3jZmc5BsWAUAiAF%2F2sesh6gOegpW1BhcwBywbWFT%2FtyqJ7yTYx0SduNfSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwEDAFHPbnbbcPFGxKtwDEghXBAiGrQ6XWEfuQsvgxiTeHQJmV2uRg3Lk%2FAg8GpnuVwQlpQDvN1D6EvMFIDdIDSyaX%2BqD8eOGGSO8u57nK3%2F7Hg13BqnW2HqmhUXSBFhQDV9vWn%2BH7uaNWH6Td1YDPPiHCIgcuJYCToAQDXZJxV4Tl5wvAlpsJ9LsvgmvvfP98tcTDDuzEZ0Oo5QMqFxOgyumg%2BE2ySIL%2Bs%2FpuRBADX0ijBmNmKlZu4xSc7eHWUqLoYFwEFfEoopB0LMOoFVWAjT2iucM9jb6mArlGIScFM7Et%2FRBNq4zTntXOGIPZXdc0A3%2BwegDEMXQAYfSU%2FokG%2FVwMvte4o8mrSmCQDG6BnDakc4dQxD%2FsFNP1SZErK81xlPDENzs%2Fej1pJ8mya6Bm34OOFu4Qvmf6Q2bSDuhJr2MuErL7MH7Wxk%2BPZ7zNxP32kPqA9q3euyOPy92PQzE%2BgKIn4RBWkNEKfkoIz5%2FZOAWFAyUcPrBSy%2Bs9%2FSmiWCCnmjclSQoqYOiEZqx4SbdP6l7k94AjwTaGwMAyJ5hRwMmj300axyZMFWeZWh%2FAgqDxI7a53J9RjaDpmU6wMy8hHKz19O53IySn0fRR%2FPQRJBi1TNweqyALNsb1uyyAbFh0cczZfASc7s26LYwysLnwAY6pgG1lmMzQxTfuI%2B2cURn1oFr7%2FU25qTNO90tLCd3OT95GHgsK%2Bro0IRfboM3s58msMgUXkyuETdXQQSmFkU2uA7pPvwIhPPpxF0Wi2XyaKA8Ahg14Fus7lmOUSTJphiWw9u8mr8WS5b5rgRtmAHPpAdDwYAJnk0sSQa8QjWg4CYQaNY7vmiE19dxOqhePQkldCD0sGtgLAvOe41qF0ZNUMKT9ob3vXf1&X-Amz-Signature=dce70a90b1dd5cde1a4d5eb76b99a5c1db92cf1c4c5d844d1d756b97cbae1ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTN34VF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjAWagjnhpnJ2HgcWosZegTIZtIAXshQ3jZmc5BsWAUAiAF%2F2sesh6gOegpW1BhcwBywbWFT%2FtyqJ7yTYx0SduNfSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMwEDAFHPbnbbcPFGxKtwDEghXBAiGrQ6XWEfuQsvgxiTeHQJmV2uRg3Lk%2FAg8GpnuVwQlpQDvN1D6EvMFIDdIDSyaX%2BqD8eOGGSO8u57nK3%2F7Hg13BqnW2HqmhUXSBFhQDV9vWn%2BH7uaNWH6Td1YDPPiHCIgcuJYCToAQDXZJxV4Tl5wvAlpsJ9LsvgmvvfP98tcTDDuzEZ0Oo5QMqFxOgyumg%2BE2ySIL%2Bs%2FpuRBADX0ijBmNmKlZu4xSc7eHWUqLoYFwEFfEoopB0LMOoFVWAjT2iucM9jb6mArlGIScFM7Et%2FRBNq4zTntXOGIPZXdc0A3%2BwegDEMXQAYfSU%2FokG%2FVwMvte4o8mrSmCQDG6BnDakc4dQxD%2FsFNP1SZErK81xlPDENzs%2Fej1pJ8mya6Bm34OOFu4Qvmf6Q2bSDuhJr2MuErL7MH7Wxk%2BPZ7zNxP32kPqA9q3euyOPy92PQzE%2BgKIn4RBWkNEKfkoIz5%2FZOAWFAyUcPrBSy%2Bs9%2FSmiWCCnmjclSQoqYOiEZqx4SbdP6l7k94AjwTaGwMAyJ5hRwMmj300axyZMFWeZWh%2FAgqDxI7a53J9RjaDpmU6wMy8hHKz19O53IySn0fRR%2FPQRJBi1TNweqyALNsb1uyyAbFh0cczZfASc7s26LYwysLnwAY6pgG1lmMzQxTfuI%2B2cURn1oFr7%2FU25qTNO90tLCd3OT95GHgsK%2Bro0IRfboM3s58msMgUXkyuETdXQQSmFkU2uA7pPvwIhPPpxF0Wi2XyaKA8Ahg14Fus7lmOUSTJphiWw9u8mr8WS5b5rgRtmAHPpAdDwYAJnk0sSQa8QjWg4CYQaNY7vmiE19dxOqhePQkldCD0sGtgLAvOe41qF0ZNUMKT9ob3vXf1&X-Amz-Signature=9730761b95e0f65bc81474613776db2e808e347593c7a118934bd1eed836e2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
