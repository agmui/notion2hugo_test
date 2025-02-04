---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVSE22C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYl%2FBWioU2Ihn9AH2LfHqghCGHrdMZ1YFFH3lQU1SJKAiEAxtdyxPMvqsELOa3kb3WpnSZ79d9XrHSzIl7qOxze%2B%2Bwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGoJqgiZtowR5c0dYSrcA2ruYJH3HgfsSRfGvFoD5x5U8amY4knZxTarc6ukLSb3SaRzEmmv5xQelkjsWojkxJV1Da5DGIkRQIsctLe7TUjs82lE8jrtJ0upwEZqI3oSrTjmBLd8JNuBHYOycqLWWTgtyHnm8d%2B%2BW7LnBiW4FRK9X%2FWjf%2Fug8iqbKyAbKl578Igk2DY6cEVyseMFDGTg3n0YvH9eRxfsUy7StweJi%2BrntWlUDV5JHPSARjLNG4zKtT64v1equ1Bh2%2BQscnuJUQ0H48P%2BbOWPhe9mg6VNnN1JGmGtvI463QDjcqHrAIwzT1lT%2Be%2Bm1nEgSGdUUr3n55VtTZvx%2Fzj4l6yn%2FFZeAbdj3d0m6ijf%2BshN8f4X%2FCc%2Bi3IYnqTWn1L8DWzPRkY0BAKNjLPewvpI3mDOmMvJRG5aUcf7edpbuJgeZAmXmByUeTD3UGBsHR7QtayRraM2VvcsGtxD7p5GRaw%2F9vnmA8t%2BOEvsPhwFUWrAlTQi0n%2BP2Pc1EpgOHG1b3GQ9kksVN0TpMIbWs0%2BDMXfst9BPU2S14iJVvHXux4e0aTj7UaA%2Fefy2Lhbomtxys4jYUsyomyEMoSfQp%2FDxgTRRV3zjdALjIlRq3N47ppHoPKtacIpvVIT0bvb02DL8vVCYMKaVir0GOqUBZytrWYkxOTMVbFZWcI1%2BpcTnFERqFwZSun4RXmAArOCMvNeodhPBfedO473je09b9GwtAq7fMomtqyBEOcV1xZ3e2ZBROGcxL0bkisJf8tkHZfnlp4Dtd3ooHWSfpKQdS3FBFBPqG7b%2BhnYJGHPtb%2BL2dsqEZP962yqpTu7EIjDzmDRG6XDA9%2Bpz923EoLGEV2nmTvCQJF1qHHEVF8s5osZKnbF9&X-Amz-Signature=c7c6acd7104bbd4dbbbe927afa1bea15770e64490dd08c6954e5385f45dcdc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVSE22C%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYl%2FBWioU2Ihn9AH2LfHqghCGHrdMZ1YFFH3lQU1SJKAiEAxtdyxPMvqsELOa3kb3WpnSZ79d9XrHSzIl7qOxze%2B%2Bwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGoJqgiZtowR5c0dYSrcA2ruYJH3HgfsSRfGvFoD5x5U8amY4knZxTarc6ukLSb3SaRzEmmv5xQelkjsWojkxJV1Da5DGIkRQIsctLe7TUjs82lE8jrtJ0upwEZqI3oSrTjmBLd8JNuBHYOycqLWWTgtyHnm8d%2B%2BW7LnBiW4FRK9X%2FWjf%2Fug8iqbKyAbKl578Igk2DY6cEVyseMFDGTg3n0YvH9eRxfsUy7StweJi%2BrntWlUDV5JHPSARjLNG4zKtT64v1equ1Bh2%2BQscnuJUQ0H48P%2BbOWPhe9mg6VNnN1JGmGtvI463QDjcqHrAIwzT1lT%2Be%2Bm1nEgSGdUUr3n55VtTZvx%2Fzj4l6yn%2FFZeAbdj3d0m6ijf%2BshN8f4X%2FCc%2Bi3IYnqTWn1L8DWzPRkY0BAKNjLPewvpI3mDOmMvJRG5aUcf7edpbuJgeZAmXmByUeTD3UGBsHR7QtayRraM2VvcsGtxD7p5GRaw%2F9vnmA8t%2BOEvsPhwFUWrAlTQi0n%2BP2Pc1EpgOHG1b3GQ9kksVN0TpMIbWs0%2BDMXfst9BPU2S14iJVvHXux4e0aTj7UaA%2Fefy2Lhbomtxys4jYUsyomyEMoSfQp%2FDxgTRRV3zjdALjIlRq3N47ppHoPKtacIpvVIT0bvb02DL8vVCYMKaVir0GOqUBZytrWYkxOTMVbFZWcI1%2BpcTnFERqFwZSun4RXmAArOCMvNeodhPBfedO473je09b9GwtAq7fMomtqyBEOcV1xZ3e2ZBROGcxL0bkisJf8tkHZfnlp4Dtd3ooHWSfpKQdS3FBFBPqG7b%2BhnYJGHPtb%2BL2dsqEZP962yqpTu7EIjDzmDRG6XDA9%2Bpz923EoLGEV2nmTvCQJF1qHHEVF8s5osZKnbF9&X-Amz-Signature=727ee9026cdfe185ff3884e26ab6dc1726fcfb9feafdde06f82ee4ff55c6c2af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
